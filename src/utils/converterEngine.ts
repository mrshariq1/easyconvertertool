import { CONVERTER_CATEGORIES } from '../data/conversions';

export type PrecisionMode = 'auto' | 2 | 4 | 6 | 8;

export interface ConversionResult {
  success: boolean;
  value?: number;
  formattedText: string;
  formulaDescription: string;
  errorMessage?: string;
  calculationSteps?: string;
}

export function formatNumberWithPrecision(val: number, precision: PrecisionMode = 'auto'): string {
  if (isNaN(val) || !isFinite(val)) return 'Invalid';

  // Scientific notation for very large or tiny numbers
  if (Math.abs(val) > 0 && (Math.abs(val) >= 1e12 || Math.abs(val) < 1e-6)) {
    return val.toExponential(4);
  }

  if (precision === 'auto') {
    // Check if integer
    if (Number.isInteger(val)) {
      return val.toLocaleString('en-US');
    }
    // Round cleanly without floating point tail like 22.000000000000004
    const rounded = parseFloat(val.toPrecision(7));
    // Check decimal digits
    const str = rounded.toString();
    if (str.includes('.')) {
      const parts = str.split('.');
      const intFormatted = parseInt(parts[0], 10).toLocaleString('en-US');
      return `${intFormatted}.${parts[1]}`;
    }
    return rounded.toLocaleString('en-US');
  }

  const fixed = val.toFixed(precision);
  const parts = fixed.split('.');
  const intFormatted = parseInt(parts[0], 10).toLocaleString('en-US');
  return parts.length > 1 ? `${intFormatted}.${parts[1]}` : intFormatted;
}

export function convertUnits(
  categoryId: string,
  fromUnitId: string,
  toUnitId: string,
  inputValue: number | string,
  precision: PrecisionMode = 'auto'
): ConversionResult {
  const category = CONVERTER_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Category not found' };
  }

  // Handle number system conversions separately
  if (category.isSpecial === 'number_systems') {
    return convertNumberSystems(fromUnitId, toUnitId, String(inputValue));
  }

  // Parse numerical input
  const num = typeof inputValue === 'number' ? inputValue : parseFloat(String(inputValue).trim());
  if (isNaN(num)) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Please enter a valid number' };
  }

  if (!isFinite(num)) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Value is too large' };
  }

  // 1. Temperature
  if (category.isSpecial === 'temperature') {
    return convertTemperature(fromUnitId, toUnitId, num, precision);
  }

  // 2. Fuel Economy
  if (category.isSpecial === 'fuel_economy') {
    return convertFuelEconomy(fromUnitId, toUnitId, num, precision);
  }

  // 3. Typography
  if (category.isSpecial === 'typography') {
    return convertTypography(fromUnitId, toUnitId, num, precision);
  }

  // 4. Standard linear ratio conversions
  const fromUnit = category.units.find((u) => u.id === fromUnitId);
  const toUnit = category.units.find((u) => u.id === toUnitId);

  if (!fromUnit || !toUnit || !fromUnit.ratioToBase || !toUnit.ratioToBase) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Unit conversion unavailable' };
  }

  // Convert input to base unit, then to target unit
  const baseValue = num * fromUnit.ratioToBase;
  const resultValue = baseValue / toUnit.ratioToBase;

  const unitFactor = fromUnit.ratioToBase / toUnit.ratioToBase;
  const factorStr = formatNumberWithPrecision(unitFactor, precision);
  const formulaDescription = `1 ${fromUnit.symbol} = ${factorStr} ${toUnit.symbol}`;
  const formatted = formatNumberWithPrecision(resultValue, precision);

  return {
    success: true,
    value: resultValue,
    formattedText: `${formatted} ${toUnit.symbol}`,
    formulaDescription,
    calculationSteps: `${num} ${fromUnit.symbol} × ${factorStr} = ${formatted} ${toUnit.symbol}`
  };
}

function convertTemperature(from: string, to: string, val: number, precision: PrecisionMode): ConversionResult {
  if (from === 'kelvin' && val < 0) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Kelvin cannot be negative (Absolute zero is 0 K)' };
  }
  if (from === 'celsius' && val < -273.15) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Cannot be below absolute zero (-273.15 °C)' };
  }
  if (from === 'fahrenheit' && val < -459.67) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Cannot be below absolute zero (-459.67 °F)' };
  }

  let celsius = val;
  if (from === 'fahrenheit') {
    celsius = (val - 32) * (5 / 9);
  } else if (from === 'kelvin') {
    celsius = val - 273.15;
  }

  let result = celsius;
  let formula = '';
  let steps = '';

  if (to === 'fahrenheit') {
    result = celsius * (9 / 5) + 32;
    if (from === 'celsius') {
      formula = '°F = (°C × 9/5) + 32';
      steps = `(${val} × 9/5) + 32 = ${formatNumberWithPrecision(result, precision)} °F`;
    } else if (from === 'kelvin') {
      formula = '°F = (K - 273.15) × 9/5 + 32';
      steps = `(${val} - 273.15) × 9/5 + 32 = ${formatNumberWithPrecision(result, precision)} °F`;
    }
  } else if (to === 'kelvin') {
    result = celsius + 273.15;
    if (from === 'celsius') {
      formula = 'K = °C + 273.15';
      steps = `${val} + 273.15 = ${formatNumberWithPrecision(result, precision)} K`;
    } else if (from === 'fahrenheit') {
      formula = 'K = (°F - 32) × 5/9 + 273.15';
      steps = `(${val} - 32) × 5/9 + 273.15 = ${formatNumberWithPrecision(result, precision)} K`;
    }
  } else {
    // to celsius
    if (from === 'fahrenheit') {
      formula = '°C = (°F - 32) × 5/9';
      steps = `(${val} - 32) × 5/9 = ${formatNumberWithPrecision(result, precision)} °C`;
    } else if (from === 'kelvin') {
      formula = '°C = K - 273.15';
      steps = `${val} - 273.15 = ${formatNumberWithPrecision(result, precision)} °C`;
    } else {
      formula = '1 °C = 1 °C';
      steps = `${val} °C = ${val} °C`;
    }
  }

  const symbol = to === 'fahrenheit' ? '°F' : to === 'kelvin' ? 'K' : '°C';
  return {
    success: true,
    value: result,
    formattedText: `${formatNumberWithPrecision(result, precision)} ${symbol}`,
    formulaDescription: formula,
    calculationSteps: steps
  };
}

function convertFuelEconomy(from: string, to: string, val: number, precision: PrecisionMode): ConversionResult {
  if (val <= 0) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Fuel consumption must be greater than zero' };
  }

  // Convert to MPG (US) base
  let mpgUS = val;
  if (from === 'l100km') {
    mpgUS = 235.214583 / val;
  } else if (from === 'kml') {
    mpgUS = val * 2.35214583;
  } else if (from === 'mpg_uk') {
    mpgUS = val / 1.20095;
  }

  let result = mpgUS;
  let formula = '';

  if (to === 'l100km') {
    result = 235.214583 / mpgUS;
    formula = 'L/100km = 235.215 / MPG (US)';
  } else if (to === 'kml') {
    result = mpgUS / 2.35214583;
    formula = 'km/L = MPG (US) / 2.352';
  } else if (to === 'mpg_uk') {
    result = mpgUS * 1.20095;
    formula = 'MPG (UK) = MPG (US) × 1.201';
  } else {
    formula = 'MPG (US) base';
  }

  const symbol = to === 'l100km' ? 'L/100km' : to === 'kml' ? 'km/L' : to === 'mpg_uk' ? 'mpg (UK)' : 'mpg (US)';
  return {
    success: true,
    value: result,
    formattedText: `${formatNumberWithPrecision(result, precision)} ${symbol}`,
    formulaDescription: formula,
    calculationSteps: `Calculated from ${val} ${from} using fuel conversion factor`
  };
}

function convertTypography(from: string, to: string, val: number, precision: PrecisionMode): ConversionResult {
  // Base is px
  const baseSize = 16; // standard 1rem = 16px
  let px = val;
  if (from === 'rem' || from === 'em') px = val * baseSize;
  else if (from === 'pt') px = val * (4 / 3);

  let result = px;
  let formula = '';
  if (to === 'rem') {
    result = px / baseSize;
    formula = 'rem = px / 16';
  } else if (to === 'em') {
    result = px / baseSize;
    formula = 'em = px / 16 (relative to parent 16px)';
  } else if (to === 'pt') {
    result = px * 0.75;
    formula = 'pt = px × 0.75';
  } else {
    formula = 'px = rem × 16';
  }

  return {
    success: true,
    value: result,
    formattedText: `${formatNumberWithPrecision(result, precision)} ${to}`,
    formulaDescription: formula,
    calculationSteps: `${val} ${from} = ${formatNumberWithPrecision(result, precision)} ${to}`
  };
}

function convertNumberSystems(from: string, to: string, inputStr: string): ConversionResult {
  const clean = inputStr.trim().toUpperCase();
  if (!clean) {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Please enter a number to convert' };
  }

  let decimalVal: number;

  try {
    if (from === 'binary') {
      if (!/^[01]+$/.test(clean)) {
        return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Binary must only contain digits 0 and 1' };
      }
      decimalVal = parseInt(clean, 2);
    } else if (from === 'octal') {
      if (!/^[0-7]+$/.test(clean)) {
        return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Octal must only contain digits 0-7' };
      }
      decimalVal = parseInt(clean, 8);
    } else if (from === 'hexadecimal') {
      if (!/^[0-9A-F]+$/.test(clean)) {
        return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Hexadecimal must contain 0-9 and A-F' };
      }
      decimalVal = parseInt(clean, 16);
    } else {
      if (!/^-?\d+$/.test(clean)) {
        return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Decimal must contain digits 0-9' };
      }
      decimalVal = parseInt(clean, 10);
    }

    if (isNaN(decimalVal)) throw new Error();
  } catch {
    return { success: false, formattedText: '', formulaDescription: '', errorMessage: 'Invalid number format for base' };
  }

  let resultStr = '';
  if (to === 'binary') {
    resultStr = decimalVal.toString(2);
  } else if (to === 'octal') {
    resultStr = decimalVal.toString(8);
  } else if (to === 'hexadecimal') {
    resultStr = decimalVal.toString(16).toUpperCase();
  } else {
    resultStr = decimalVal.toString(10);
  }

  return {
    success: true,
    value: decimalVal,
    formattedText: resultStr,
    formulaDescription: `Converted from base (${from}) through decimal intermediate to base (${to})`,
    calculationSteps: `${clean} (${from}) = ${decimalVal} (decimal) = ${resultStr} (${to})`
  };
}
