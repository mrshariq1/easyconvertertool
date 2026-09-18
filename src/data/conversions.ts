import { ConverterCategory } from '../types';

export const CONVERTER_CATEGORIES: ConverterCategory[] = [
  {
    id: 'length',
    name: 'Length',
    tagline: 'Meters, feet, inches, miles, centimeters, kilometers and more',
    description: 'Convert between metric and imperial length and distance units including millimeters, centimeters, meters, kilometers, inches, feet, yards, miles, and nautical miles.',
    iconName: 'Ruler',
    baseUnitId: 'meter',
    units: [
      { id: 'nanometer', name: 'Nanometer', plural: 'Nanometers', symbol: 'nm', system: 'metric', ratioToBase: 0.000000001 },
      { id: 'micrometer', name: 'Micrometer', plural: 'Micrometers', symbol: 'µm', system: 'metric', ratioToBase: 0.000001 },
      { id: 'millimeter', name: 'Millimeter', plural: 'Millimeters', symbol: 'mm', system: 'metric', ratioToBase: 0.001 },
      { id: 'centimeter', name: 'Centimeter', plural: 'Centimeters', symbol: 'cm', system: 'metric', ratioToBase: 0.01 },
      { id: 'meter', name: 'Meter', plural: 'Meters', symbol: 'm', system: 'metric', ratioToBase: 1.0 },
      { id: 'kilometer', name: 'Kilometer', plural: 'Kilometers', symbol: 'km', system: 'metric', ratioToBase: 1000.0 },
      { id: 'inch', name: 'Inch', plural: 'Inches', symbol: 'in', system: 'imperial', ratioToBase: 0.0254 },
      { id: 'foot', name: 'Foot', plural: 'Feet', symbol: 'ft', system: 'imperial', ratioToBase: 0.3048 },
      { id: 'yard', name: 'Yard', plural: 'Yards', symbol: 'yd', system: 'imperial', ratioToBase: 0.9144 },
      { id: 'mile', name: 'Mile', plural: 'Miles', symbol: 'mi', system: 'imperial', ratioToBase: 1609.344 },
      { id: 'nautical_mile', name: 'Nautical Mile', plural: 'Nautical Miles', symbol: 'nmi', system: 'other', ratioToBase: 1852.0 }
    ],
    popularPairs: [
      { from: 'centimeter', to: 'inch', slug: 'cm-to-inches', label: 'CM to Inches' },
      { from: 'inch', to: 'centimeter', slug: 'inches-to-cm', label: 'Inches to CM' },
      { from: 'kilometer', to: 'mile', slug: 'km-to-miles', label: 'KM to Miles' },
      { from: 'mile', to: 'kilometer', slug: 'miles-to-km', label: 'Miles to KM' },
      { from: 'meter', to: 'foot', slug: 'meters-to-feet', label: 'Meters to Feet' },
      { from: 'foot', to: 'meter', slug: 'feet-to-meters', label: 'Feet to Meters' },
      { from: 'foot', to: 'inch', slug: 'feet-to-inches', label: 'Feet to Inches' },
      { from: 'inch', to: 'foot', slug: 'inches-to-feet', label: 'Inches to Feet' },
      { from: 'yard', to: 'meter', slug: 'yards-to-meters', label: 'Yards to Meters' },
      { from: 'meter', to: 'yard', slug: 'meters-to-yards', label: 'Meters to Yards' }
    ]
  },
  {
    id: 'weight',
    name: 'Weight & Mass',
    tagline: 'Kilograms, pounds, grams, ounces, stones, metric tons',
    description: 'Convert between common weight and mass units accurately. Supports metric units (mg, g, kg, t) and imperial/US customary units (oz, lb, stone, US ton).',
    iconName: 'Scale',
    baseUnitId: 'kilogram',
    units: [
      { id: 'milligram', name: 'Milligram', plural: 'Milligrams', symbol: 'mg', system: 'metric', ratioToBase: 0.000001 },
      { id: 'gram', name: 'Gram', plural: 'Grams', symbol: 'g', system: 'metric', ratioToBase: 0.001 },
      { id: 'kilogram', name: 'Kilogram', plural: 'Kilograms', symbol: 'kg', system: 'metric', ratioToBase: 1.0 },
      { id: 'metric_ton', name: 'Metric Ton', plural: 'Metric Tons', symbol: 't', system: 'metric', ratioToBase: 1000.0 },
      { id: 'ounce', name: 'Ounce', plural: 'Ounces', symbol: 'oz', system: 'imperial', ratioToBase: 0.028349523125 },
      { id: 'pound', name: 'Pound', plural: 'Pounds', symbol: 'lb', system: 'imperial', ratioToBase: 0.45359237 },
      { id: 'stone', name: 'Stone', plural: 'Stones', symbol: 'st', system: 'imperial', ratioToBase: 6.35029318 },
      { id: 'us_ton', name: 'US Short Ton', plural: 'US Short Tons', symbol: 'ton', system: 'us_customary', ratioToBase: 907.18474 }
    ],
    popularPairs: [
      { from: 'kilogram', to: 'pound', slug: 'kg-to-lbs', label: 'KG to LBS' },
      { from: 'pound', to: 'kilogram', slug: 'lbs-to-kg', label: 'LBS to KG' },
      { from: 'gram', to: 'ounce', slug: 'grams-to-ounces', label: 'Grams to Ounces' },
      { from: 'ounce', to: 'gram', slug: 'ounces-to-grams', label: 'Ounces to Grams' },
      { from: 'kilogram', to: 'ounce', slug: 'kg-to-ounces', label: 'KG to Ounces' },
      { from: 'pound', to: 'stone', slug: 'lbs-to-stone', label: 'LBS to Stone' }
    ]
  },
  {
    id: 'temperature',
    name: 'Temperature',
    tagline: 'Celsius, Fahrenheit, Kelvin with exact scientific formulas',
    description: 'Convert temperatures between Celsius (°C), Fahrenheit (°F), and Kelvin (K). View step-by-step conversion formulas and common everyday references.',
    iconName: 'Thermometer',
    baseUnitId: 'celsius',
    isSpecial: 'temperature',
    units: [
      { id: 'celsius', name: 'Celsius', plural: 'Celsius', symbol: '°C', system: 'metric' },
      { id: 'fahrenheit', name: 'Fahrenheit', plural: 'Fahrenheit', symbol: '°F', system: 'imperial' },
      { id: 'kelvin', name: 'Kelvin', plural: 'Kelvins', symbol: 'K', system: 'si' }
    ],
    popularPairs: [
      { from: 'celsius', to: 'fahrenheit', slug: 'celsius-to-fahrenheit', label: 'Celsius to Fahrenheit' },
      { from: 'fahrenheit', to: 'celsius', slug: 'fahrenheit-to-celsius', label: 'Fahrenheit to Celsius' },
      { from: 'celsius', to: 'kelvin', slug: 'celsius-to-kelvin', label: 'Celsius to Kelvin' },
      { from: 'kelvin', to: 'celsius', slug: 'kelvin-to-celsius', label: 'Kelvin to Celsius' },
      { from: 'fahrenheit', to: 'kelvin', slug: 'fahrenheit-to-kelvin', label: 'Fahrenheit to Kelvin' },
      { from: 'kelvin', to: 'fahrenheit', slug: 'kelvin-to-fahrenheit', label: 'Kelvin to Fahrenheit' }
    ]
  },
  {
    id: 'area',
    name: 'Area',
    tagline: 'Square feet, square meters, acres, hectares, square miles',
    description: 'Calculate and convert land, room, and property areas across square millimeters, centimeters, meters, kilometers, square inches, feet, yards, acres, and hectares.',
    iconName: 'Maximize2',
    baseUnitId: 'square_meter',
    units: [
      { id: 'sq_millimeter', name: 'Square Millimeter', plural: 'Square Millimeters', symbol: 'mm²', system: 'metric', ratioToBase: 0.000001 },
      { id: 'sq_centimeter', name: 'Square Centimeter', plural: 'Square Centimeters', symbol: 'cm²', system: 'metric', ratioToBase: 0.0001 },
      { id: 'square_meter', name: 'Square Meter', plural: 'Square Meters', symbol: 'm²', system: 'metric', ratioToBase: 1.0 },
      { id: 'sq_kilometer', name: 'Square Kilometer', plural: 'Square Kilometers', symbol: 'km²', system: 'metric', ratioToBase: 1000000.0 },
      { id: 'hectare', name: 'Hectare', plural: 'Hectares', symbol: 'ha', system: 'metric', ratioToBase: 10000.0 },
      { id: 'sq_inch', name: 'Square Inch', plural: 'Square Inches', symbol: 'sq in', system: 'imperial', ratioToBase: 0.00064516 },
      { id: 'square_foot', name: 'Square Foot', plural: 'Square Feet', symbol: 'sq ft', system: 'imperial', ratioToBase: 0.09290304 },
      { id: 'sq_yard', name: 'Square Yard', plural: 'Square Yards', symbol: 'sq yd', system: 'imperial', ratioToBase: 0.83612736 },
      { id: 'acre', name: 'Acre', plural: 'Acres', symbol: 'ac', system: 'imperial', ratioToBase: 4046.8564224 },
      { id: 'sq_mile', name: 'Square Mile', plural: 'Square Miles', symbol: 'sq mi', system: 'imperial', ratioToBase: 2589988.110336 }
    ],
    popularPairs: [
      { from: 'square_foot', to: 'square_meter', slug: 'square-feet-to-square-meters', label: 'Sq Feet to Sq Meters' },
      { from: 'square_meter', to: 'square_foot', slug: 'square-meters-to-square-feet', label: 'Sq Meters to Sq Feet' },
      { from: 'acre', to: 'square_foot', slug: 'acres-to-square-feet', label: 'Acres to Sq Feet' },
      { from: 'hectare', to: 'acre', slug: 'hectares-to-acres', label: 'Hectares to Acres' }
    ]
  },
  {
    id: 'volume',
    name: 'Volume & Capacity',
    tagline: 'Liters, gallons, milliliters, cups, fluid ounces, cubic meters',
    description: 'Convert liquid and dry volumes. Clearly differentiates US customary measures from metric units to prevent measurement errors.',
    iconName: 'Droplet',
    baseUnitId: 'liter',
    units: [
      { id: 'milliliter', name: 'Milliliter', plural: 'Milliliters', symbol: 'mL', system: 'metric', ratioToBase: 0.001 },
      { id: 'liter', name: 'Liter', plural: 'Liters', symbol: 'L', system: 'metric', ratioToBase: 1.0 },
      { id: 'cubic_meter', name: 'Cubic Meter', plural: 'Cubic Meters', symbol: 'm³', system: 'metric', ratioToBase: 1000.0 },
      { id: 'cubic_centimeter', name: 'Cubic Centimeter', plural: 'Cubic Centimeters', symbol: 'cm³', system: 'metric', ratioToBase: 0.001 },
      { id: 'us_teaspoon', name: 'US Teaspoon', plural: 'US Teaspoons', symbol: 'tsp', system: 'us_customary', ratioToBase: 0.00492892 },
      { id: 'us_tablespoon', name: 'US Tablespoon', plural: 'US Tablespoons', symbol: 'tbsp', system: 'us_customary', ratioToBase: 0.0147868 },
      { id: 'us_fluid_ounce', name: 'US Fluid Ounce', plural: 'US Fluid Ounces', symbol: 'fl oz', system: 'us_customary', ratioToBase: 0.0295735 },
      { id: 'us_cup', name: 'US Cup', plural: 'US Cups', symbol: 'cup', system: 'us_customary', ratioToBase: 0.236588 },
      { id: 'us_pint', name: 'US Pint', plural: 'US Pints', symbol: 'pt', system: 'us_customary', ratioToBase: 0.473176 },
      { id: 'us_quart', name: 'US Quart', plural: 'US Quarts', symbol: 'qt', system: 'us_customary', ratioToBase: 0.946353 },
      { id: 'us_gallon', name: 'US Gallon (Liquid)', plural: 'US Gallons', symbol: 'gal', system: 'us_customary', ratioToBase: 3.785411784 },
      { id: 'imperial_gallon', name: 'Imperial Gallon (UK)', plural: 'Imperial Gallons', symbol: 'imp gal', system: 'imperial', ratioToBase: 4.54609 }
    ],
    popularPairs: [
      { from: 'liter', to: 'us_gallon', slug: 'liters-to-gallons', label: 'Liters to Gallons' },
      { from: 'us_gallon', to: 'liter', slug: 'gallons-to-liters', label: 'Gallons to Liters' },
      { from: 'milliliter', to: 'us_cup', slug: 'ml-to-cups', label: 'ML to Cups' },
      { from: 'us_cup', to: 'milliliter', slug: 'cups-to-ml', label: 'Cups to ML' }
    ]
  },
  {
    id: 'speed',
    name: 'Speed',
    tagline: 'km/h, mph, m/s, ft/s, knots for travel, sports & engineering',
    description: 'Convert velocities and speeds across kilometers per hour (km/h), miles per hour (mph), meters per second (m/s), feet per second (ft/s), and nautical knots.',
    iconName: 'Gauge',
    baseUnitId: 'mps',
    units: [
      { id: 'mps', name: 'Meters per Second', plural: 'Meters per Second', symbol: 'm/s', system: 'metric', ratioToBase: 1.0 },
      { id: 'kmh', name: 'Kilometers per Hour', plural: 'Kilometers per Hour', symbol: 'km/h', system: 'metric', ratioToBase: 0.2777777778 },
      { id: 'mph', name: 'Miles per Hour', plural: 'Miles per Hour', symbol: 'mph', system: 'imperial', ratioToBase: 0.44704 },
      { id: 'fps', name: 'Feet per Second', plural: 'Feet per Second', symbol: 'ft/s', system: 'imperial', ratioToBase: 0.3048 },
      { id: 'knot', name: 'Knot (Nautical mi/h)', plural: 'Knots', symbol: 'kn', system: 'other', ratioToBase: 0.5144444444 }
    ],
    popularPairs: [
      { from: 'mph', to: 'kmh', slug: 'mph-to-kmh', label: 'MPH to KM/H' },
      { from: 'kmh', to: 'mph', slug: 'kmh-to-mph', label: 'KM/H to MPH' },
      { from: 'knot', to: 'mph', slug: 'knots-to-mph', label: 'Knots to MPH' },
      { from: 'mps', to: 'kmh', slug: 'mps-to-kmh', label: 'm/s to KM/H' }
    ]
  },
  {
    id: 'data',
    name: 'Data & Storage',
    tagline: 'Bits, Bytes, KB, MB, GB, TB, and binary KiB, MiB, GiB',
    description: 'Convert file sizes, hard drive capacity, and bandwidth. Transparently distinguishes standard SI decimal units (1000) from IEC binary units (1024).',
    iconName: 'HardDrive',
    baseUnitId: 'byte',
    units: [
      { id: 'bit', name: 'Bit', plural: 'Bits', symbol: 'b', system: 'decimal', ratioToBase: 0.125 },
      { id: 'byte', name: 'Byte', plural: 'Bytes', symbol: 'B', system: 'decimal', ratioToBase: 1.0 },
      { id: 'kilobit', name: 'Kilobit', plural: 'Kilobits', symbol: 'Kb', system: 'decimal', ratioToBase: 125.0 },
      { id: 'kilobyte', name: 'Kilobyte (Decimal)', plural: 'Kilobytes', symbol: 'KB', system: 'decimal', ratioToBase: 1000.0, notes: '1 KB = 1,000 Bytes (SI standard)' },
      { id: 'kibibyte', name: 'Kibibyte (Binary)', plural: 'Kibibytes', symbol: 'KiB', system: 'binary', ratioToBase: 1024.0, notes: '1 KiB = 1,024 Bytes (IEC standard)' },
      { id: 'megabit', name: 'Megabit', plural: 'Megabits', symbol: 'Mb', system: 'decimal', ratioToBase: 125000.0 },
      { id: 'megabyte', name: 'Megabyte (Decimal)', plural: 'Megabytes', symbol: 'MB', system: 'decimal', ratioToBase: 1000000.0, notes: '1 MB = 1,000,000 Bytes' },
      { id: 'mebibyte', name: 'Mebibyte (Binary)', plural: 'Mebibytes', symbol: 'MiB', system: 'binary', ratioToBase: 1048576.0, notes: '1 MiB = 1,048,576 Bytes' },
      { id: 'gigabit', name: 'Gigabit', plural: 'Gigabits', symbol: 'Gb', system: 'decimal', ratioToBase: 125000000.0 },
      { id: 'gigabyte', name: 'Gigabyte (Decimal)', plural: 'Gigabytes', symbol: 'GB', system: 'decimal', ratioToBase: 1000000000.0, notes: '1 GB = 1,000,000,000 Bytes' },
      { id: 'gibibyte', name: 'Gibibyte (Binary)', plural: 'Gibibytes', symbol: 'GiB', system: 'binary', ratioToBase: 1073741824.0, notes: '1 GiB = 1,073,741,824 Bytes' },
      { id: 'terabyte', name: 'Terabyte (Decimal)', plural: 'Terabytes', symbol: 'TB', system: 'decimal', ratioToBase: 1000000000000.0 },
      { id: 'tebibyte', name: 'Tebibyte (Binary)', plural: 'Tebibytes', symbol: 'TiB', system: 'binary', ratioToBase: 1099511627776.0 }
    ],
    popularPairs: [
      { from: 'megabyte', to: 'gigabyte', slug: 'mb-to-gb', label: 'MB to GB' },
      { from: 'gigabyte', to: 'megabyte', slug: 'gb-to-mb', label: 'GB to MB' },
      { from: 'gigabyte', to: 'terabyte', slug: 'gb-to-tb', label: 'GB to TB' },
      { from: 'kilobyte', to: 'megabyte', slug: 'kb-to-mb', label: 'KB to MB' }
    ]
  },
  {
    id: 'time',
    name: 'Time',
    tagline: 'Milliseconds, seconds, minutes, hours, days, weeks, calendar years',
    description: 'Convert durations and time intervals. Clearly explains average astronomical calendar duration conventions for months (30.4375 days) and years (365.25 days).',
    iconName: 'Clock',
    baseUnitId: 'second',
    units: [
      { id: 'millisecond', name: 'Millisecond', plural: 'Milliseconds', symbol: 'ms', system: 'si', ratioToBase: 0.001 },
      { id: 'second', name: 'Second', plural: 'Seconds', symbol: 's', system: 'si', ratioToBase: 1.0 },
      { id: 'minute', name: 'Minute', plural: 'Minutes', symbol: 'min', system: 'other', ratioToBase: 60.0 },
      { id: 'hour', name: 'Hour', plural: 'Hours', symbol: 'h', system: 'other', ratioToBase: 3600.0 },
      { id: 'day', name: 'Day', plural: 'Days', symbol: 'd', system: 'other', ratioToBase: 86400.0 },
      { id: 'week', name: 'Week', plural: 'Weeks', symbol: 'wk', system: 'other', ratioToBase: 604800.0 },
      { id: 'month', name: 'Month (Average 30.44 days)', plural: 'Months', symbol: 'mo', system: 'other', ratioToBase: 2629800.0, notes: 'Based on average calendar month (365.25 / 12 days)' },
      { id: 'year', name: 'Year (Julian 365.25 days)', plural: 'Years', symbol: 'yr', system: 'other', ratioToBase: 31557600.0, notes: 'Based on Julian standard year of 365.25 days' }
    ],
    popularPairs: [
      { from: 'hour', to: 'minute', slug: 'hours-to-minutes', label: 'Hours to Minutes' },
      { from: 'minute', to: 'second', slug: 'minutes-to-seconds', label: 'Minutes to Seconds' },
      { from: 'day', to: 'hour', slug: 'days-to-hours', label: 'Days to Hours' },
      { from: 'week', to: 'day', slug: 'weeks-to-days', label: 'Weeks to Days' }
    ]
  },
  {
    id: 'pressure',
    name: 'Pressure',
    tagline: 'PSI, Bar, Pascals, kPa, Atmospheres, mmHg',
    description: 'Convert pressure metrics for vehicle tires, plumbing, meteorology, scuba diving, and scientific experiments accurately.',
    iconName: 'Activity',
    baseUnitId: 'pascal',
    units: [
      { id: 'pascal', name: 'Pascal', plural: 'Pascals', symbol: 'Pa', system: 'metric', ratioToBase: 1.0 },
      { id: 'kilopascal', name: 'Kilopascal', plural: 'Kilopascals', symbol: 'kPa', system: 'metric', ratioToBase: 1000.0 },
      { id: 'bar', name: 'Bar', plural: 'Bars', symbol: 'bar', system: 'metric', ratioToBase: 100000.0 },
      { id: 'psi', name: 'Pounds per Square Inch', plural: 'Pounds per Square Inch', symbol: 'psi', system: 'imperial', ratioToBase: 6894.757293 },
      { id: 'atmosphere', name: 'Standard Atmosphere', plural: 'Atmospheres', symbol: 'atm', system: 'other', ratioToBase: 101325.0 },
      { id: 'mmhg', name: 'Millimeters of Mercury (Torr)', plural: 'mmHg', symbol: 'mmHg', system: 'other', ratioToBase: 133.322387415 }
    ],
    popularPairs: [
      { from: 'psi', to: 'bar', slug: 'psi-to-bar', label: 'PSI to Bar' },
      { from: 'bar', to: 'psi', slug: 'bar-to-psi', label: 'Bar to PSI' },
      { from: 'kilopascal', to: 'psi', slug: 'kpa-to-psi', label: 'kPa to PSI' },
      { from: 'psi', to: 'kilopascal', slug: 'psi-to-kpa', label: 'PSI to kPa' }
    ]
  },
  {
    id: 'energy',
    name: 'Energy',
    tagline: 'Joules, Kilojoules, Watt-hours, kWh, Calories, BTUs',
    description: 'Convert energy, heat, and electrical work. Compare nutritional food calories (kcal) with mechanical Joules and household kilowatt-hours.',
    iconName: 'Zap',
    baseUnitId: 'joule',
    units: [
      { id: 'joule', name: 'Joule', plural: 'Joules', symbol: 'J', system: 'si', ratioToBase: 1.0 },
      { id: 'kilojoule', name: 'Kilojoule', plural: 'Kilojoules', symbol: 'kJ', system: 'si', ratioToBase: 1000.0 },
      { id: 'watthour', name: 'Watt-hour', plural: 'Watt-hours', symbol: 'Wh', system: 'other', ratioToBase: 3600.0 },
      { id: 'kilowatthour', name: 'Kilowatt-hour', plural: 'Kilowatt-hours', symbol: 'kWh', system: 'other', ratioToBase: 3600000.0 },
      { id: 'calorie', name: 'Gram Calorie (Small cal)', plural: 'Calories', symbol: 'cal', system: 'other', ratioToBase: 4.184 },
      { id: 'kilocalorie', name: 'Kilocalorie (Food Cal)', plural: 'Kilocalories', symbol: 'kcal', system: 'other', ratioToBase: 4184.0, notes: '1 food Calorie = 1 kcal = 1,000 small calories' },
      { id: 'btu', name: 'British Thermal Unit', plural: 'BTUs', symbol: 'BTU', system: 'imperial', ratioToBase: 1055.05585 }
    ],
    popularPairs: [
      { from: 'joule', to: 'calorie', slug: 'joules-to-calories', label: 'Joules to Calories' },
      { from: 'kilojoule', to: 'kilocalorie', slug: 'kj-to-kcal', label: 'kJ to Food Calories' },
      { from: 'kilowatthour', to: 'joule', slug: 'kwh-to-joules', label: 'kWh to Joules' }
    ]
  },
  {
    id: 'power',
    name: 'Power',
    tagline: 'Watts, Kilowatts, Megawatts, Mechanical Horsepower',
    description: 'Convert mechanical, electrical, and thermal power ratings across Watts, Kilowatts, Megawatts, and imperial/metric Horsepower.',
    iconName: 'Flame',
    baseUnitId: 'watt',
    units: [
      { id: 'watt', name: 'Watt', plural: 'Watts', symbol: 'W', system: 'si', ratioToBase: 1.0 },
      { id: 'kilowatt', name: 'Kilowatt', plural: 'Kilowatts', symbol: 'kW', system: 'si', ratioToBase: 1000.0 },
      { id: 'megawatt', name: 'Megawatt', plural: 'Megawatts', symbol: 'MW', system: 'si', ratioToBase: 1000000.0 },
      { id: 'horsepower_mech', name: 'Horsepower (Mechanical/Imperial)', plural: 'Horsepower', symbol: 'hp', system: 'imperial', ratioToBase: 745.699872 },
      { id: 'horsepower_metric', name: 'Horsepower (Metric / PS / CV)', plural: 'Metric HP', symbol: 'PS', system: 'metric', ratioToBase: 735.49875 }
    ],
    popularPairs: [
      { from: 'watt', to: 'kilowatt', slug: 'watts-to-kw', label: 'Watts to kW' },
      { from: 'kilowatt', to: 'watt', slug: 'kw-to-watts', label: 'kW to Watts' },
      { from: 'horsepower_mech', to: 'kilowatt', slug: 'hp-to-kw', label: 'HP to kW' },
      { from: 'kilowatt', to: 'horsepower_mech', slug: 'kw-to-hp', label: 'kW to HP' }
    ]
  },
  {
    id: 'frequency',
    name: 'Frequency',
    tagline: 'Hertz, Kilohertz, Megahertz, Gigahertz for audio & radio',
    description: 'Convert oscillations and cycle rates across Hertz (Hz), Kilohertz (kHz), Megahertz (MHz), and Gigahertz (GHz).',
    iconName: 'Radio',
    baseUnitId: 'hertz',
    units: [
      { id: 'hertz', name: 'Hertz', plural: 'Hertz', symbol: 'Hz', system: 'si', ratioToBase: 1.0 },
      { id: 'kilohertz', name: 'Kilohertz', plural: 'Kilohertz', symbol: 'kHz', system: 'si', ratioToBase: 1000.0 },
      { id: 'megahertz', name: 'Megahertz', plural: 'Megahertz', symbol: 'MHz', system: 'si', ratioToBase: 1000000.0 },
      { id: 'gigahertz', name: 'Gigahertz', plural: 'Gigahertz', symbol: 'GHz', system: 'si', ratioToBase: 1000000000.0 }
    ],
    popularPairs: [
      { from: 'hertz', to: 'kilohertz', slug: 'hz-to-khz', label: 'Hz to kHz' },
      { from: 'megahertz', to: 'gigahertz', slug: 'mhz-to-ghz', label: 'MHz to GHz' }
    ]
  },
  {
    id: 'angle',
    name: 'Angle',
    tagline: 'Degrees, Radians, Gradians, Arcminutes, Arcseconds',
    description: 'Convert angular measures for trigonometry, geometry, astronomy, and navigation.',
    iconName: 'Compass',
    baseUnitId: 'degree',
    units: [
      { id: 'degree', name: 'Degree', plural: 'Degrees', symbol: '°', system: 'other', ratioToBase: 1.0 },
      { id: 'radian', name: 'Radian', plural: 'Radians', symbol: 'rad', system: 'si', ratioToBase: 180.0 / Math.PI },
      { id: 'gradian', name: 'Gradian', plural: 'Gradians', symbol: 'gon', system: 'other', ratioToBase: 0.9 },
      { id: 'arcminute', name: 'Arcminute', plural: 'Arcminutes', symbol: '′', system: 'other', ratioToBase: 1.0 / 60.0 },
      { id: 'arcsecond', name: 'Arcsecond', plural: 'Arcseconds', symbol: '″', system: 'other', ratioToBase: 1.0 / 3600.0 }
    ],
    popularPairs: [
      { from: 'degree', to: 'radian', slug: 'degrees-to-radians', label: 'Degrees to Radians' },
      { from: 'radian', to: 'degree', slug: 'radians-to-degrees', label: 'Radians to Degrees' }
    ]
  },
  {
    id: 'cooking',
    name: 'Cooking & Kitchen',
    tagline: 'Cups, tablespoons, teaspoons, milliliters, fluid ounces',
    description: 'Convert culinary volume measurements for international recipes. Clearly labels kitchen conversions as volumetric cooking standards.',
    iconName: 'Utensils',
    baseUnitId: 'ml',
    units: [
      { id: 'ml', name: 'Milliliter', plural: 'Milliliters', symbol: 'mL', system: 'metric', ratioToBase: 1.0 },
      { id: 'tsp', name: 'Teaspoon (US)', plural: 'Teaspoons', symbol: 'tsp', system: 'us_customary', ratioToBase: 4.92892 },
      { id: 'tbsp', name: 'Tablespoon (US)', plural: 'Tablespoons', symbol: 'tbsp', system: 'us_customary', ratioToBase: 14.7868 },
      { id: 'cup', name: 'Cup (US Standard)', plural: 'Cups', symbol: 'cup', system: 'us_customary', ratioToBase: 236.588 },
      { id: 'fl_oz', name: 'Fluid Ounce (US)', plural: 'Fluid Ounces', symbol: 'fl oz', system: 'us_customary', ratioToBase: 29.5735 },
      { id: 'pint', name: 'Pint (US)', plural: 'Pints', symbol: 'pt', system: 'us_customary', ratioToBase: 473.176 },
      { id: 'liter', name: 'Liter', plural: 'Liters', symbol: 'L', system: 'metric', ratioToBase: 1000.0 }
    ],
    popularPairs: [
      { from: 'cup', to: 'ml', slug: 'cooking-cups-to-ml', label: 'Cups to mL' },
      { from: 'ml', to: 'cup', slug: 'cooking-ml-to-cups', label: 'mL to Cups' },
      { from: 'tbsp', to: 'tsp', slug: 'tablespoons-to-teaspoons', label: 'Tablespoons to Teaspoons' },
      { from: 'tsp', to: 'ml', slug: 'teaspoons-to-ml', label: 'Teaspoons to mL' }
    ]
  },
  {
    id: 'fuel_economy',
    name: 'Fuel Economy',
    tagline: 'Miles per Gallon (US & UK), L/100km, km per Liter',
    description: 'Convert vehicle fuel consumption ratings. Transparently handles the inverse relationship between MPG (distance per fuel) and L/100km (fuel per distance).',
    iconName: 'Car',
    baseUnitId: 'mpg_us',
    isSpecial: 'fuel_economy',
    units: [
      { id: 'mpg_us', name: 'Miles per Gallon (US)', plural: 'MPG (US)', symbol: 'mpg (US)', system: 'us_customary' },
      { id: 'l100km', name: 'Liters per 100 Kilometers', plural: 'L/100km', symbol: 'L/100km', system: 'metric', notes: 'Inverse consumption metric (lower number means higher efficiency)' },
      { id: 'kml', name: 'Kilometers per Liter', plural: 'km/L', symbol: 'km/L', system: 'metric' },
      { id: 'mpg_uk', name: 'Miles per Gallon (Imperial/UK)', plural: 'MPG (UK)', symbol: 'mpg (UK)', system: 'imperial' }
    ],
    popularPairs: [
      { from: 'mpg_us', to: 'l100km', slug: 'mpg-to-l100km', label: 'MPG (US) to L/100km' },
      { from: 'l100km', to: 'mpg_us', slug: 'l100km-to-mpg', label: 'L/100km to MPG (US)' },
      { from: 'kml', to: 'mpg_us', slug: 'kml-to-mpg', label: 'km/L to MPG' },
      { from: 'mpg_us', to: 'kml', slug: 'mpg-to-kml', label: 'MPG to km/L' }
    ]
  },
  {
    id: 'number_systems',
    name: 'Number Systems',
    tagline: 'Binary, Decimal, Hexadecimal, Octal for programmers',
    description: 'Convert base numbers for programming and computer science. Supports binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16).',
    iconName: 'Binary',
    baseUnitId: 'decimal',
    isSpecial: 'number_systems',
    units: [
      { id: 'binary', name: 'Binary (Base 2)', plural: 'Binary', symbol: 'bin', system: 'other' },
      { id: 'octal', name: 'Octal (Base 8)', plural: 'Octal', symbol: 'oct', system: 'other' },
      { id: 'decimal', name: 'Decimal (Base 10)', plural: 'Decimal', symbol: 'dec', system: 'other' },
      { id: 'hexadecimal', name: 'Hexadecimal (Base 16)', plural: 'Hexadecimal', symbol: 'hex', system: 'other' }
    ],
    popularPairs: [
      { from: 'binary', to: 'decimal', slug: 'binary-to-decimal', label: 'Binary to Decimal' },
      { from: 'decimal', to: 'binary', slug: 'decimal-to-binary', label: 'Decimal to Binary' },
      { from: 'hexadecimal', to: 'decimal', slug: 'hexadecimal-to-decimal', label: 'Hex to Decimal' },
      { from: 'decimal', to: 'hexadecimal', slug: 'decimal-to-hexadecimal', label: 'Decimal to Hex' },
      { from: 'binary', to: 'hexadecimal', slug: 'binary-to-hexadecimal', label: 'Binary to Hex' },
      { from: 'hexadecimal', to: 'binary', slug: 'hexadecimal-to-binary', label: 'Hex to Binary' }
    ]
  },
  {
    id: 'typography',
    name: 'Typography & Web CSS',
    tagline: 'Pixels (px) to REM, EM, Points (pt) with custom base size',
    description: 'Convert CSS styling units for responsive web typography. Converts pixels to rem/em relative to default 16px root font size.',
    iconName: 'Type',
    baseUnitId: 'px',
    isSpecial: 'typography',
    units: [
      { id: 'px', name: 'Pixels', plural: 'Pixels', symbol: 'px', system: 'other', ratioToBase: 1.0 },
      { id: 'rem', name: 'REM (Root EM, base 16px)', plural: 'REM', symbol: 'rem', system: 'other', ratioToBase: 16.0 },
      { id: 'em', name: 'EM (Relative EM, base 16px)', plural: 'EM', symbol: 'em', system: 'other', ratioToBase: 16.0 },
      { id: 'pt', name: 'Points (Print pt)', plural: 'Points', symbol: 'pt', system: 'other', ratioToBase: 1.333333 }
    ],
    popularPairs: [
      { from: 'px', to: 'rem', slug: 'pixels-to-rem', label: 'Pixels to REM' },
      { from: 'rem', to: 'px', slug: 'rem-to-pixels', label: 'REM to Pixels' },
      { from: 'px', to: 'em', slug: 'pixels-to-em', label: 'Pixels to EM' },
      { from: 'em', to: 'px', slug: 'em-to-pixels', label: 'EM to Pixels' }
    ]
  }
];

export const POPULAR_CHIPS = [
  { label: 'KG to LBS', path: '/kg-to-lbs' },
  { label: 'CM to INCHES', path: '/cm-to-inches' },
  { label: '°C to °F', path: '/celsius-to-fahrenheit' },
  { label: 'MILES to KM', path: '/miles-to-km' },
  { label: 'MB to GB', path: '/mb-to-gb' },
  { label: 'L to GAL', path: '/liters-to-gallons' },
  { label: 'PSI to BAR', path: '/psi-to-bar' },
  { label: 'PERCENTAGE', path: '/calculators/percentage' },
  { label: 'BMI CALC', path: '/calculators/bmi' },
  { label: 'PX to REM', path: '/pixels-to-rem' }
];
