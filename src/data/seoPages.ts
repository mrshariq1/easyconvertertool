import { DirectConversion } from '../types';

export const DIRECT_CONVERSIONS: DirectConversion[] = [
  {
    slug: 'kg-to-lbs',
    title: 'KG to LBS Converter — Kilograms to Pounds | EasyConverter',
    h1: 'Kilograms to Pounds (kg to lbs) Converter',
    metaDescription: 'Convert kilograms to pounds instantly with our free KG to LBS converter. Enter any value, view the exact formula, step-by-step example, and conversion table.',
    categoryId: 'weight',
    fromUnitId: 'kilogram',
    toUnitId: 'pound',
    formula: 'lb = kg × 2.20462262',
    manualSteps: [
      'Take your weight or mass in kilograms (kg).',
      'Multiply by the international avoirdupois conversion factor: 2.20462262 (or roughly 2.2 for quick mental math).',
      'The resulting number is your mass in pounds (lb).'
    ],
    examples: [
      { input: 1, output: '2.2046 lb', note: 'Standard international unit equivalent' },
      { input: 5, output: '11.0231 lb' },
      { input: 10, output: '22.0462 lb' },
      { input: 68, output: '149.9143 lb', note: 'Typical adult body weight benchmark' },
      { input: 100, output: '220.4623 lb' }
    ],
    commonValues: [1, 2, 5, 10, 15, 20, 25, 50, 60, 70, 75, 80, 90, 100, 150, 200],
    faqs: [
      { question: 'How many pounds are in 1 kilogram?', answer: 'There are exactly 2.20462262185 pounds in 1 kilogram. For fast mental estimates, multiplying by 2.2 gives an answer within 0.2% accuracy.' },
      { question: 'What is the quick mental math trick for kg to lbs?', answer: 'Double the kg value, then add 10% of that doubled number. For example, for 50 kg: double is 100; 10% of 100 is 10; 100 + 10 = 110 lbs.' },
      { question: 'Why does the pound have different historical definitions?', answer: 'Historically there were troy, merchant, and avoirdupois pounds. In 1959, the International Yard and Pound Agreement standardized the avoirdupois pound as exactly 0.45359237 kilograms worldwide.' }
    ],
    accuracyNote: 'Based on the 1959 international avoirdupois standard (1 lb = 0.45359237 kg exactly).',
    practicalUses: ['Airport luggage baggage check-in', 'Gym barbell plates and dumbbells', 'Medical weight records', 'International recipes and shipping'],
    commonMistakes: ['Confusing troy ounces/pounds (used for precious metals) with avoirdupois pounds (used for ordinary goods).'],
    relatedSlugs: ['lbs-to-kg', 'grams-to-ounces', 'kg-to-ounces', 'lbs-to-stone']
  },
  {
    slug: 'lbs-to-kg',
    title: 'LBS to KG Converter — Pounds to Kilograms | EasyConverter',
    h1: 'Pounds to Kilograms (lbs to kg) Converter',
    metaDescription: 'Convert pounds to kilograms quickly with our free online LBS to KG converter. Includes accurate formula, calculation examples, and printable conversion table.',
    categoryId: 'weight',
    fromUnitId: 'pound',
    toUnitId: 'kilogram',
    formula: 'kg = lb × 0.45359237 (or lb ÷ 2.20462)',
    manualSteps: [
      'Take your measurement in pounds (lb).',
      'Divide by 2.20462 (or multiply by 0.45359237).',
      'The result is the mass in kilograms (kg).'
    ],
    examples: [
      { input: 1, output: '0.4536 kg' },
      { input: 10, output: '4.5359 kg' },
      { input: 50, output: '22.6796 kg', note: 'Common airline maximum checked baggage limit' },
      { input: 150, output: '68.0389 kg' },
      { input: 200, output: '90.7185 kg' }
    ],
    commonValues: [1, 5, 10, 20, 25, 30, 40, 50, 75, 100, 120, 140, 150, 160, 180, 200],
    faqs: [
      { question: 'What is 1 lb in kg?', answer: '1 pound is officially defined as exactly 0.45359237 kilograms.' },
      { question: 'How do you convert lbs to kg in your head?', answer: 'Divide the number of pounds by 2, then subtract about 10% of that result. For example, 100 lbs / 2 = 50; 50 - 5 = 45 kg (actual is 45.36 kg).' }
    ],
    accuracyNote: 'Standardized exact definition: 1 lb = 0.45359237 kg.',
    practicalUses: ['Aviation luggage allowances', 'Gym weight training conversion', 'Pediatric drug dosing and patient records'],
    commonMistakes: ['Dividing by 2 instead of 2.2, which overstates the weight by approximately 10%.'],
    relatedSlugs: ['kg-to-lbs', 'ounces-to-grams', 'lbs-to-stone']
  },
  {
    slug: 'cm-to-inches',
    title: 'CM to Inches Converter — Centimeters to Inches | EasyConverter',
    h1: 'Centimeters to Inches (cm to in) Converter',
    metaDescription: 'Convert centimeters to inches easily with our free CM to Inches converter. See instant results, formula, step-by-step calculations, and reference tables.',
    categoryId: 'length',
    fromUnitId: 'centimeter',
    toUnitId: 'inch',
    formula: 'in = cm ÷ 2.54 (or cm × 0.393701)',
    manualSteps: [
      'Take your measurement in centimeters (cm).',
      'Divide by 2.54 (the exact international definition of one inch).',
      'The result is your length in inches (in).'
    ],
    examples: [
      { input: 1, output: '0.3937 in' },
      { input: 10, output: '3.9370 in' },
      { input: 15.24, output: '6.0000 in', note: 'Exact 6-inch ruler length' },
      { input: 30.48, output: '12.0000 in', note: 'Exact 1-foot ruler length' },
      { input: 175, output: '68.8976 in', note: 'Approximately 5 ft 9 in (adult height)' },
      { input: 180, output: '70.8661 in', note: 'Approximately 5 ft 11 in' }
    ],
    commonValues: [1, 2.54, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 160, 170, 180, 190, 200],
    faqs: [
      { question: 'How many inches is 1 cm?', answer: '1 centimeter equals approximately 0.393700787 inches. Conversely, 1 inch equals exactly 2.54 centimeters.' },
      { question: 'How do I convert cm to feet and inches for human height?', answer: 'Convert cm to total inches first (divide by 2.54). Then divide the total inches by 12 to get feet, and the remainder gives the inches.' }
    ],
    accuracyNote: 'By treaty, 1 inch is defined as exactly 25.4 mm (2.54 cm).',
    practicalUses: ['Clothing and shoe sizing', 'Screen and monitor diagonal dimensions', 'Carpentry, woodworking and crafts', 'Human height measurement'],
    commonMistakes: ['Rounding 2.54 to 2.5 over long lengths, which introduces a 1.6% cumulative error.'],
    relatedSlugs: ['inches-to-cm', 'meters-to-feet', 'feet-to-meters', 'feet-to-inches']
  },
  {
    slug: 'inches-to-cm',
    title: 'Inches to CM Converter — Inches to Centimeters | EasyConverter',
    h1: 'Inches to Centimeters (in to cm) Converter',
    metaDescription: 'Convert inches to centimeters instantly. Free online converter with exact mathematical formula (1 in = 2.54 cm), clear examples, and quick conversion chart.',
    categoryId: 'length',
    fromUnitId: 'inch',
    toUnitId: 'centimeter',
    formula: 'cm = in × 2.54',
    manualSteps: [
      'Take the length in inches (in).',
      'Multiply by 2.54.',
      'The result is the exact metric length in centimeters (cm).'
    ],
    examples: [
      { input: 1, output: '2.54 cm', note: 'Exact definition' },
      { input: 6, output: '15.24 cm' },
      { input: 12, output: '30.48 cm', note: 'Standard 12-inch ruler' },
      { input: 24, output: '60.96 cm' },
      { input: 36, output: '91.44 cm', note: '1 yard' }
    ],
    commonValues: [0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60],
    faqs: [
      { question: 'What is the exact conversion from inches to centimeters?', answer: 'One inch is legally defined as exactly 2.54 centimeters across all international engineering and commercial standards.' }
    ],
    accuracyNote: 'Exact conversion: 1 in = 2.54 cm.',
    practicalUses: ['Imported furniture assembly', 'Screen diagonal measurements (e.g. 55" TV = 139.7 cm)', 'Tool and bolt socket sizes'],
    commonMistakes: ['Forgetting that 1 foot = 12 inches when converting mixed imperial measurements like 5\'8".'],
    relatedSlugs: ['cm-to-inches', 'feet-to-inches', 'feet-to-meters']
  },
  {
    slug: 'celsius-to-fahrenheit',
    title: 'Celsius to Fahrenheit Converter (°C to °F) | EasyConverter',
    h1: 'Celsius to Fahrenheit (°C to °F) Converter',
    metaDescription: 'Convert Celsius to Fahrenheit temperature easily. Interactive tool with exact scientific formula °F = (°C × 9/5) + 32, examples, and temperature benchmark guide.',
    categoryId: 'temperature',
    fromUnitId: 'celsius',
    toUnitId: 'fahrenheit',
    formula: '°F = (°C × 9/5) + 32',
    manualSteps: [
      'Multiply your temperature in Celsius by 9/5 (or 1.8).',
      'Add 32 to the result.',
      'The answer is the temperature in degrees Fahrenheit (°F).'
    ],
    examples: [
      { input: -40, output: '-40.0 °F', note: 'Unique point where both scales intersect' },
      { input: 0, output: '32.0 °F', note: 'Water freezing point at 1 atm' },
      { input: 20, output: '68.0 °F', note: 'Typical comfortable room temperature' },
      { input: 37, output: '98.6 °F', note: 'Normal human body core temperature' },
      { input: 100, output: '212.0 °F', note: 'Water boiling point at sea level' }
    ],
    commonValues: [-40, -20, -10, -5, 0, 5, 10, 15, 18, 20, 22, 25, 30, 35, 37, 40, 50, 100, 180, 200],
    faqs: [
      { question: 'What is 0°C in Fahrenheit?', answer: '0°C equals 32°F, which corresponds to the freezing point of pure water at standard atmospheric pressure.' },
      { question: 'What is 100°C in Fahrenheit?', answer: '100°C equals 212°F, the sea-level boiling point of water.' },
      { question: 'At what temperature are Celsius and Fahrenheit equal?', answer: 'Celsius and Fahrenheit meet at exactly -40 degrees (-40°C = -40°F).' },
      { question: 'What is the quick mental estimation formula?', answer: 'Double the Celsius number and add 30. For example: 20°C × 2 = 40; 40 + 30 = 70°F (actual is 68°F). This is close enough for everyday weather checks.' }
    ],
    accuracyNote: 'Temperature conversions are affine transforms with non-zero offsets, requiring both multiplication and addition.',
    practicalUses: ['Weather forecasts while traveling internationally', 'Cooking and baking oven settings', 'Thermostats and air conditioning controls', 'Medical fever thermometers'],
    commonMistakes: ['Simply multiplying by 1.8 and forgetting to add 32.'],
    relatedSlugs: ['fahrenheit-to-celsius', 'celsius-to-kelvin', 'kelvin-to-celsius']
  },
  {
    slug: 'fahrenheit-to-celsius',
    title: 'Fahrenheit to Celsius Converter (°F to °C) | EasyConverter',
    h1: 'Fahrenheit to Celsius (°F to °C) Converter',
    metaDescription: 'Convert Fahrenheit to Celsius quickly with our free temperature calculator. Step-by-step formula °C = (°F - 32) × 5/9, examples, and reference table.',
    categoryId: 'temperature',
    fromUnitId: 'fahrenheit',
    toUnitId: 'celsius',
    formula: '°C = (°F - 32) × 5/9',
    manualSteps: [
      'Subtract 32 from your Fahrenheit temperature.',
      'Multiply that intermediate result by 5.',
      'Divide by 9 (or multiply by 0.5556).',
      'The result is your temperature in degrees Celsius (°C).'
    ],
    examples: [
      { input: 32, output: '0.0 °C', note: 'Freezing point of water' },
      { input: 68, output: '20.0 °C', note: 'Room temperature' },
      { input: 77, output: '25.0 °C', note: 'Pleasant warm day' },
      { input: 98.6, output: '37.0 °C', note: 'Standard body temperature' },
      { input: 212, output: '100.0 °C', note: 'Boiling point of water' },
      { input: 350, output: '176.7 °C', note: 'Standard baking oven setting' },
      { input: 400, output: '204.4 °C', note: 'Roasting oven temperature' }
    ],
    commonValues: [-40, 0, 10, 20, 32, 40, 50, 60, 68, 70, 75, 80, 85, 90, 95, 98.6, 100, 105, 212, 350, 400],
    faqs: [
      { question: 'How do you do quick mental math for °F to °C?', answer: 'Subtract 30, then divide by 2. For example, 70°F - 30 = 40; 40 / 2 = 20°C (actual is 21.1°C). Very helpful for travel weather.' },
      { question: 'Why does Fahrenheit have 180 degrees between freezing and boiling?', answer: 'Daniel Gabriel Fahrenheit based 0°F on a freezing brine solution and 96°F on body temperature. This naturally placed water freezing at 32°F and boiling at 212°F, exactly 180 degrees apart.' }
    ],
    accuracyNote: 'Accurate to the specified decimal precision according to the international SI temperature definitions.',
    practicalUses: ['Oven conversion for European or American recipes', 'Medical temperatures', 'Travel climate understanding'],
    commonMistakes: ['Dividing by 1.8 before subtracting 32 (order of operations matters: subtract 32 first!).'],
    relatedSlugs: ['celsius-to-fahrenheit', 'fahrenheit-to-kelvin', 'kelvin-to-celsius']
  },
  {
    slug: 'miles-to-km',
    title: 'Miles to KM Converter — Miles to Kilometers | EasyConverter',
    h1: 'Miles to Kilometers (mi to km) Converter',
    metaDescription: 'Convert miles to kilometers accurately with our free online converter. Includes standard formula 1 mi = 1.609344 km, road trip conversion examples, and table.',
    categoryId: 'length',
    fromUnitId: 'mile',
    toUnitId: 'kilometer',
    formula: 'km = mi × 1.609344',
    manualSteps: [
      'Take the distance in statute miles (mi).',
      'Multiply by 1.609344 (or approximately 1.6 for mental calculations).',
      'The result is the distance in kilometers (km).'
    ],
    examples: [
      { input: 1, output: '1.6093 km' },
      { input: 3.1, output: '4.9890 km', note: 'Standard 5K road race distance' },
      { input: 5, output: '8.0467 km' },
      { input: 26.2, output: '42.1648 km', note: 'Official marathon distance' },
      { input: 60, output: '96.5606 km' },
      { input: 70, output: '112.6541 km', note: 'Common highway speed limit' }
    ],
    commonValues: [1, 2, 3, 5, 10, 15, 20, 25, 26.2, 30, 40, 50, 60, 65, 70, 80, 100, 150, 200],
    faqs: [
      { question: 'How many kilometers are in 1 mile?', answer: 'One international statute mile is defined as exactly 1.609344 kilometers.' },
      { question: 'What is the Fibonacci trick for miles to kilometers?', answer: 'Because the ratio 1.609 is very close to the Golden Ratio (1.618), successive Fibonacci numbers give approximate conversions: 3 mi ≈ 5 km, 5 mi ≈ 8 km, 8 mi ≈ 13 km, 13 mi ≈ 21 km, 21 mi ≈ 34 km.' }
    ],
    accuracyNote: 'Standard international statute mile (1,760 yards = 5,280 feet = 1,609.344 meters). Distinct from nautical miles (1,852 m).',
    practicalUses: ['Driving abroad and road trip navigation', 'Running and cycling race training (5K, 10K, half marathon)', 'Aviation and vehicle speed conversion'],
    commonMistakes: ['Confusing statute miles (1.609 km) with nautical miles (1.852 km).'],
    relatedSlugs: ['km-to-miles', 'mph-to-kmh', 'meters-to-feet']
  },
  {
    slug: 'km-to-miles',
    title: 'KM to Miles Converter — Kilometers to Miles | EasyConverter',
    h1: 'Kilometers to Miles (km to mi) Converter',
    metaDescription: 'Convert kilometers to miles instantly. Free online distance calculator with the exact conversion formula, mental math tricks, and clear conversion chart.',
    categoryId: 'length',
    fromUnitId: 'kilometer',
    toUnitId: 'mile',
    formula: 'mi = km ÷ 1.609344 (or km × 0.621371)',
    manualSteps: [
      'Take the distance in kilometers (km).',
      'Divide by 1.609344 (or multiply by 0.621371).',
      'The result is distance in statute miles (mi).'
    ],
    examples: [
      { input: 1, output: '0.6214 mi' },
      { input: 5, output: '3.1069 mi', note: 'Standard 5K race' },
      { input: 10, output: '6.2137 mi', note: '10K race' },
      { input: 42.195, output: '26.2188 mi', note: 'Official marathon' },
      { input: 100, output: '62.1371 mi' }
    ],
    commonValues: [1, 2, 5, 10, 15, 20, 25, 30, 42.195, 50, 60, 80, 100, 120, 150, 200],
    faqs: [
      { question: 'What is the quick mental math formula for km to miles?', answer: 'Multiply by 6 and drop the zero (or multiply by 0.6). For example: 80 km × 0.6 = 48 miles (actual is 49.7 miles).' }
    ],
    accuracyNote: 'Standardized international definition: 1 km = 0.621371192 miles.',
    practicalUses: ['Car dashboards when driving rented cars in the US/UK', 'International marathon and athletic running pacing'],
    commonMistakes: ['Multiplying by 1.6 instead of dividing.'],
    relatedSlugs: ['miles-to-km', 'kmh-to-mph', 'meters-to-feet']
  },
  {
    slug: 'feet-to-meters',
    title: 'Feet to Meters Converter (ft to m) | EasyConverter',
    h1: 'Feet to Meters (ft to m) Converter',
    metaDescription: 'Convert feet to meters quickly with our free length tool. Accurate formula (1 ft = 0.3048 m), step-by-step calculations, and printable conversion chart.',
    categoryId: 'length',
    fromUnitId: 'foot',
    toUnitId: 'meter',
    formula: 'm = ft × 0.3048',
    manualSteps: [
      'Take the measurement in feet (ft).',
      'Multiply by 0.3048 (the exact international definition).',
      'The result is the length or altitude in meters (m).'
    ],
    examples: [
      { input: 1, output: '0.3048 m' },
      { input: 6, output: '1.8288 m', note: 'Common 6-foot human height' },
      { input: 10, output: '3.0480 m', note: 'Basketball hoop rim height' },
      { input: 100, output: '30.4800 m' },
      { input: 10000, output: '3048.0000 m', note: 'Aviation cruising altitude' }
    ],
    commonValues: [1, 2, 3, 5, 6, 8, 10, 12, 15, 20, 25, 30, 50, 100, 500, 1000],
    faqs: [
      { question: 'How many meters are in 1 foot?', answer: 'There is exactly 0.3048 meters in 1 international foot.' }
    ],
    accuracyNote: '1 international foot is defined as exactly 0.3048 meters.',
    practicalUses: ['Aviation flight levels and altitude', 'Architecture and construction blueprints', 'Athlete heights and room dimensions'],
    commonMistakes: ['Confusing US Survey Feet with International Feet for precision geodesy (difference is roughly 2 parts per million).'],
    relatedSlugs: ['meters-to-feet', 'inches-to-cm', 'feet-to-inches']
  },
  {
    slug: 'meters-to-feet',
    title: 'Meters to Feet Converter (m to ft) | EasyConverter',
    h1: 'Meters to Feet (m to ft) Converter',
    metaDescription: 'Convert meters to feet easily. Free online height and distance calculator with step-by-step formula (1 m = 3.28084 ft), examples, and reference table.',
    categoryId: 'length',
    fromUnitId: 'meter',
    toUnitId: 'foot',
    formula: 'ft = m ÷ 0.3048 (or m × 3.28084)',
    manualSteps: [
      'Take length in meters (m).',
      'Divide by 0.3048 (or multiply by 3.28084).',
      'The result is the total length in decimal feet.'
    ],
    examples: [
      { input: 1, output: '3.2808 ft' },
      { input: 1.75, output: '5.7415 ft', note: '5 feet 8.9 inches' },
      { input: 1.83, output: '6.0039 ft', note: 'Approximately 6 feet' },
      { input: 10, output: '32.8084 ft' },
      { input: 100, output: '328.0840 ft', note: 'Sprint track length' }
    ],
    commonValues: [1, 1.5, 1.6, 1.7, 1.75, 1.8, 1.85, 1.9, 2, 3, 5, 10, 25, 50, 100],
    faqs: [
      { question: 'How do you convert decimal feet to feet and inches?', answer: 'Take the integer part as feet. Multiply the decimal remainder by 12 to get the remaining inches. For example, 5.75 ft = 5 feet and (0.75 × 12) = 9 inches (5\'9").' }
    ],
    accuracyNote: '1 meter equals approximately 3.280839895 feet.',
    practicalUses: ['Olympic pool lengths and track athletics', 'Global real estate ceiling heights', 'Topographical elevation maps'],
    commonMistakes: ['Treating the decimal as inches (e.g. 5.5 ft is NOT 5 feet 5 inches; 0.5 ft = 6 inches, so 5.5 ft = 5\'6").'],
    relatedSlugs: ['feet-to-meters', 'cm-to-inches', 'meters-to-yards']
  },
  {
    slug: 'mb-to-gb',
    title: 'MB to GB Converter — Megabytes to Gigabytes | EasyConverter',
    h1: 'Megabytes to Gigabytes (MB to GB) Converter',
    metaDescription: 'Convert megabytes to gigabytes with our free digital storage converter. Explains standard SI decimal (1000) vs IEC binary (1024) conversions transparently.',
    categoryId: 'data',
    fromUnitId: 'megabyte',
    toUnitId: 'gigabyte',
    formula: 'Decimal: GB = MB ÷ 1000 | Binary: GiB = MiB ÷ 1024',
    manualSteps: [
      'Identify whether your storage context uses decimal (SI) or binary (IEC).',
      'For decimal storage (macOS, disk manufacturers, networking): divide MB by 1,000.',
      'For binary memory (Windows, RAM, operating systems): divide MiB by 1,024.',
      'Our tool provides the standard decimal value with clear binary notes.'
    ],
    examples: [
      { input: 100, output: '0.1000 GB' },
      { input: 500, output: '0.5000 GB' },
      { input: 1000, output: '1.0000 GB', note: 'Standard SI decimal definition' },
      { input: 1024, output: '1.0240 GB', note: 'Exact 1 GiB in decimal GB' },
      { input: 4096, output: '4.0960 GB', note: 'Common RAM stick size (4 GiB)' },
      { input: 10000, output: '10.0000 GB' }
    ],
    commonValues: [100, 256, 500, 512, 1000, 1024, 2000, 2048, 4000, 4096, 8000, 8192, 10000, 16384, 32768],
    faqs: [
      { question: 'Is 1 GB equal to 1,000 MB or 1,024 MB?', answer: 'In the official International System of Units (SI), 1 GB = 1,000 MB. In computer architecture (binary prefixes created by the IEC), 1 GiB (gibibyte) = 1,024 MiB (mebibytes). Hard drive makers advertise in decimal (1000), while Windows displays binary (1024).' },
      { question: 'Why does my 500 GB drive show as 465 GB on Windows?', answer: 'Hard drive manufacturers define 500 GB as 500,000,000,000 bytes. Windows divides this by 1024 × 1024 × 1024 (calculating in GiB but labeling it GB), resulting in approximately 465.66 GiB.' }
    ],
    accuracyNote: 'Standard decimal SI calculation is shown. Binary IEC equivalents differ by a factor of 1024.',
    practicalUses: ['Mobile phone data plan tracking', 'Hard drive and SSD storage capacity planning', 'Cloud storage file upload planning (Google Drive, Dropbox)'],
    commonMistakes: ['Confusing bits (Mb) with bytes (MB). There are 8 bits in 1 byte.'],
    relatedSlugs: ['gb-to-mb', 'gb-to-tb', 'kb-to-mb']
  },
  {
    slug: 'gb-to-mb',
    title: 'GB to MB Converter — Gigabytes to Megabytes | EasyConverter',
    h1: 'Gigabytes to Megabytes (GB to MB) Converter',
    metaDescription: 'Convert gigabytes to megabytes instantly. Free digital data tool with decimal and binary explanations, formulas, and common file size charts.',
    categoryId: 'data',
    fromUnitId: 'gigabyte',
    toUnitId: 'megabyte',
    formula: 'Decimal: MB = GB × 1000 | Binary: MiB = GiB × 1024',
    manualSteps: [
      'Take the data volume in Gigabytes (GB).',
      'Multiply by 1,000 for decimal SI standard (or 1,024 for binary GiB).',
      'The result is the data volume in Megabytes (MB).'
    ],
    examples: [
      { input: 1, output: '1,000 MB', note: 'Standard SI decimal' },
      { input: 2, output: '2,000 MB' },
      { input: 5, output: '5,000 MB' },
      { input: 16, output: '16,000 MB' },
      { input: 64, output: '64,000 MB' }
    ],
    commonValues: [0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1000],
    faqs: [
      { question: 'How many MB are in 1 GB?', answer: 'In decimal SI notation, 1 GB = 1,000 MB. In binary notation, 1 GiB = 1,024 MiB.' }
    ],
    accuracyNote: 'Calculated using standard SI base-10 decimal prefixes.',
    practicalUses: ['Data allowance calculation for cellular roaming', 'Video compression sizing', 'Flash drive formatting'],
    commonMistakes: ['Assuming all software reports file sizes using the same base convention.'],
    relatedSlugs: ['mb-to-gb', 'gb-to-tb']
  },
  {
    slug: 'liters-to-gallons',
    title: 'Liters to Gallons Converter (L to gal) | EasyConverter',
    h1: 'Liters to Gallons (L to gal) Converter',
    metaDescription: 'Convert liters to gallons (US liquid) accurately. Free volume converter with exact formulas, comparison to Imperial UK gallons, examples, and charts.',
    categoryId: 'volume',
    fromUnitId: 'liter',
    toUnitId: 'us_gallon',
    formula: 'US gal = L ÷ 3.785411784 (or L × 0.264172)',
    manualSteps: [
      'Take the volume in liters (L).',
      'Divide by 3.78541 (for US liquid gallons) or by 4.54609 (for UK Imperial gallons).',
      'The result is your volume in US liquid gallons.'
    ],
    examples: [
      { input: 1, output: '0.2642 gal' },
      { input: 3.785, output: '1.0000 gal', note: '1 standard US gallon of milk or gasoline' },
      { input: 10, output: '2.6417 gal' },
      { input: 20, output: '5.2834 gal' },
      { input: 50, output: '13.2086 gal', note: 'Typical compact passenger car fuel tank' }
    ],
    commonValues: [1, 2, 3.785, 5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100],
    faqs: [
      { question: 'What is the difference between US and UK gallons?', answer: 'A US liquid gallon is 3.78541 liters (231 cubic inches). An Imperial (UK) gallon is 4.54609 liters (defined as the volume of 10 pounds of water at 62°F). The UK gallon is approximately 20% larger than the US gallon.' },
      { question: 'How many liters are in 1 US gallon?', answer: 'There are exactly 3.785411784 liters in 1 US liquid gallon.' }
    ],
    accuracyNote: 'This tool converts to US liquid gallons. For UK/Commonwealth fuel, see Imperial Gallons.',
    practicalUses: ['Vehicle fuel tank filling while traveling', 'Aquarium volume calculation', 'Chemical and homebrewing recipes', 'Swimming pool chemical treatment'],
    commonMistakes: ['Using US gallon numbers for UK or Canadian imperial recipes.'],
    relatedSlugs: ['gallons-to-liters', 'ml-to-cups', 'cooking-cups-to-ml']
  },
  {
    slug: 'gallons-to-liters',
    title: 'Gallons to Liters Converter (gal to L) | EasyConverter',
    h1: 'Gallons to Liters (gal to L) Converter',
    metaDescription: 'Convert US gallons to liters with our free online calculator. Step-by-step formula (1 gal = 3.78541 L), fuel examples, and conversion table.',
    categoryId: 'volume',
    fromUnitId: 'us_gallon',
    toUnitId: 'liter',
    formula: 'L = US gal × 3.785411784',
    manualSteps: [
      'Take volume in US liquid gallons.',
      'Multiply by 3.78541.',
      'The result is volume in liters (L).'
    ],
    examples: [
      { input: 1, output: '3.7854 L' },
      { input: 2, output: '7.5708 L' },
      { input: 5, output: '18.9271 L', note: 'Standard large water dispenser jug (5 gallons)' },
      { input: 10, output: '37.8541 L' },
      { input: 15, output: '56.7812 L' }
    ],
    commonValues: [0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 50],
    faqs: [
      { question: 'How many liters are in a 5-gallon water bottle?', answer: 'A standard 5-gallon water cooler jug contains exactly 18.927 liters.' }
    ],
    accuracyNote: 'Standard definition: 1 US liquid gallon = 231 cubic inches = 3.785411784 liters.',
    practicalUses: ['Purchasing fuel in countries using the metric system', 'Paint coverage calculations', 'Beer and wine brewing'],
    commonMistakes: ['Confusing US dry gallons with US liquid gallons.'],
    relatedSlugs: ['liters-to-gallons', 'cups-to-ml']
  },
  {
    slug: 'psi-to-bar',
    title: 'PSI to Bar Converter — Tire & Air Pressure | EasyConverter',
    h1: 'Pounds per Square Inch to Bar (PSI to bar) Converter',
    metaDescription: 'Convert PSI to Bar easily. Free pressure converter for car tire inflators, mountain bike shocks, scuba diving, and espresso machines with formulas and charts.',
    categoryId: 'pressure',
    fromUnitId: 'psi',
    toUnitId: 'bar',
    formula: 'bar = psi × 0.06894757 (or psi ÷ 14.5038)',
    manualSteps: [
      'Take pressure in pounds per square inch (PSI).',
      'Divide by 14.5038 (or multiply by 0.0689476).',
      'The result is pressure in bar.'
    ],
    examples: [
      { input: 14.5, output: '1.0000 bar', note: 'Approx 1 bar (near 1 atmosphere)' },
      { input: 30, output: '2.0684 bar' },
      { input: 32, output: '2.2063 bar', note: 'Standard passenger car tire pressure' },
      { input: 35, output: '2.4132 bar', note: 'Common SUV tire pressure' },
      { input: 130, output: '8.9632 bar', note: 'Espresso machine 9-bar brewing pressure' }
    ],
    commonValues: [10, 15, 20, 25, 28, 30, 32, 33, 35, 36, 38, 40, 45, 50, 100, 130, 150, 200, 3000],
    faqs: [
      { question: 'What is 32 PSI in bar?', answer: '32 PSI equals approximately 2.21 bar. This is a very common recommended cold tire pressure for many family sedans and hatchbacks.' },
      { question: 'What is 1 bar in PSI?', answer: '1 bar equals approximately 14.5038 PSI.' }
    ],
    accuracyNote: '1 bar is defined as exactly 100,000 Pascals (100 kPa). 1 PSI = 6,894.757 Pascals.',
    practicalUses: ['Car tire pressure at European gas stations', 'Bicycle tire inflation gauges', 'Espresso extraction pressure profiling', 'Scuba tank cylinder fills'],
    commonMistakes: ['Confusing absolute pressure (psia) with gauge pressure (psig).'],
    relatedSlugs: ['bar-to-psi', 'kpa-to-psi', 'psi-to-kpa']
  },
  {
    slug: 'bar-to-psi',
    title: 'Bar to PSI Converter — Bar to Pounds per Square Inch | EasyConverter',
    h1: 'Bar to Pounds per Square Inch (bar to PSI) Converter',
    metaDescription: 'Convert Bar to PSI pressure quickly. Free calculator with exact conversion factor (1 bar = 14.5038 PSI), automobile tire charts, and FAQs.',
    categoryId: 'pressure',
    fromUnitId: 'bar',
    toUnitId: 'psi',
    formula: 'psi = bar × 14.50377377',
    manualSteps: [
      'Take pressure in bar.',
      'Multiply by 14.5038.',
      'The result is pressure in pounds per square inch (PSI).'
    ],
    examples: [
      { input: 1, output: '14.5038 psi' },
      { input: 2.2, output: '31.9083 psi', note: 'Standard European car tire recommendation' },
      { input: 2.5, output: '36.2594 psi' },
      { input: 3.0, output: '43.5113 psi' },
      { input: 9.0, output: '130.5340 psi', note: 'Commercial espresso pump pressure' }
    ],
    commonValues: [0.5, 1.0, 1.5, 1.8, 2.0, 2.2, 2.3, 2.4, 2.5, 2.8, 3.0, 4.0, 5.0, 6.0, 8.0, 9.0, 10.0, 200.0],
    faqs: [
      { question: 'What is 2.4 bar in PSI?', answer: '2.4 bar equals approximately 34.8 PSI.' }
    ],
    accuracyNote: 'Calculated using standard exact SI definition: 1 bar = 100,000 Pa = 14.503773773 psi.',
    practicalUses: ['Tire maintenance when driving imported cars', 'Hydraulic equipment settings', 'Gas cylinder safety regulation'],
    commonMistakes: ['Confusing bar with millibar (mbar) used in weather reports.'],
    relatedSlugs: ['psi-to-bar', 'kpa-to-psi']
  },
  {
    slug: 'mph-to-kmh',
    title: 'MPH to KM/H Converter — Miles to Kilometers per Hour | EasyConverter',
    h1: 'Miles per Hour to Kilometers per Hour (mph to km/h) Converter',
    metaDescription: 'Convert MPH to KM/H instantly. Free speed calculator with formula 1 mph = 1.609344 km/h, road speed limit comparisons, and conversion chart.',
    categoryId: 'speed',
    fromUnitId: 'mph',
    toUnitId: 'kmh',
    formula: 'km/h = mph × 1.609344',
    manualSteps: [
      'Take speed in miles per hour (mph).',
      'Multiply by 1.609344.',
      'The result is speed in kilometers per hour (km/h).'
    ],
    examples: [
      { input: 25, output: '40.2336 km/h', note: 'Residential school zone' },
      { input: 55, output: '88.5139 km/h' },
      { input: 60, output: '96.5606 km/h' },
      { input: 65, output: '104.6074 km/h' },
      { input: 70, output: '112.6541 km/h', note: 'Standard US interstate speed limit' }
    ],
    commonValues: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 100],
    faqs: [
      { question: 'What is 60 mph in km/h?', answer: '60 mph is equal to 96.56 km/h.' },
      { question: 'What is 70 mph in km/h?', answer: '70 mph is equal to 112.65 km/h.' }
    ],
    accuracyNote: 'Based on 1 statute mile = 1,609.344 meters.',
    practicalUses: ['Driving abroad with rented speedometers', 'Wind speed and storm tracking', 'Athletic running pacing and treadmill speeds'],
    commonMistakes: ['Confusing road speed (mph) with marine speed (knots).'],
    relatedSlugs: ['kmh-to-mph', 'knots-to-mph', 'miles-to-km']
  },
  {
    slug: 'kmh-to-mph',
    title: 'KM/H to MPH Converter — Kilometers to Miles per Hour | EasyConverter',
    h1: 'Kilometers per Hour to Miles per Hour (km/h to mph) Converter',
    metaDescription: 'Convert KM/H to MPH accurately. Free speed converter with formula (1 km/h = 0.621371 mph), international speed limit comparisons, and tables.',
    categoryId: 'speed',
    fromUnitId: 'kmh',
    toUnitId: 'mph',
    formula: 'mph = km/h ÷ 1.609344 (or km/h × 0.621371)',
    manualSteps: [
      'Take speed in kilometers per hour (km/h).',
      'Divide by 1.609344 (or multiply by 0.621371).',
      'The result is speed in miles per hour (mph).'
    ],
    examples: [
      { input: 50, output: '31.0686 mph', note: 'Standard urban speed limit in Europe' },
      { input: 80, output: '49.7097 mph' },
      { input: 100, output: '62.1371 mph', note: 'Standard highway speed in many countries' },
      { input: 120, output: '74.5645 mph', note: 'European motorway speed limit' },
      { input: 130, output: '80.7783 mph', note: 'French autoroute / German advisory speed' }
    ],
    commonValues: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
    faqs: [
      { question: 'What is 100 km/h in mph?', answer: '100 km/h equals 62.14 mph.' },
      { question: 'What is 120 km/h in mph?', answer: '120 km/h equals 74.56 mph.' }
    ],
    accuracyNote: 'Standard SI metric to statute imperial conversion.',
    practicalUses: ['Driving on foreign highways', 'Treadmill workouts', 'Cycling speed analysis'],
    commonMistakes: ['Assuming 100 km/h is 70 mph; it is actually 62.14 mph.'],
    relatedSlugs: ['mph-to-kmh', 'knots-to-mph', 'km-to-miles']
  },
  {
    slug: 'degrees-to-radians',
    title: 'Degrees to Radians Converter (deg to rad) | EasyConverter',
    h1: 'Degrees to Radians (deg to rad) Converter',
    metaDescription: 'Convert degrees to radians online with our free trigonometry calculator. Step-by-step formula rad = deg × (π / 180), exact pi fractions, and angle charts.',
    categoryId: 'angle',
    fromUnitId: 'degree',
    toUnitId: 'radian',
    formula: 'rad = deg × (π / 180)',
    manualSteps: [
      'Take the angle in degrees (°).',
      'Multiply by π (approximately 3.14159265).',
      'Divide by 180.',
      'The result is the angle in radians (rad).'
    ],
    examples: [
      { input: 30, output: '0.5236 rad', note: 'π/6 radians' },
      { input: 45, output: '0.7854 rad', note: 'π/4 radians' },
      { input: 90, output: '1.5708 rad', note: 'π/2 radians (Right angle)' },
      { input: 180, output: '3.1416 rad', note: 'π radians (Straight angle)' },
      { input: 360, output: '6.2832 rad', note: '2π radians (Full circle)' }
    ],
    commonValues: [0, 15, 30, 45, 60, 75, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360],
    faqs: [
      { question: 'What is 180 degrees in radians?', answer: '180 degrees is exactly π (pi) radians, which is approximately 3.14159265 radians.' },
      { question: 'Why do mathematicians and physicists use radians instead of degrees?', answer: 'Radians are natural dimensionless units derived from the ratio of an arc length to its circle radius (s = rθ). Radians simplify calculus derivatives of trigonometric functions: d/dx(sin x) = cos x only when x is measured in radians.' }
    ],
    accuracyNote: 'Computed using high-precision Math.PI double-precision floating point.',
    practicalUses: ['Trigonometry and calculus homework', 'Computer graphics rendering and 3D game engines', 'Robotics and servo motor rotation'],
    commonMistakes: ['Using degrees in programming languages where Math.sin/cos expect radians.'],
    relatedSlugs: ['radians-to-degrees']
  },
  {
    slug: 'pixels-to-rem',
    title: 'Pixels to REM Converter (px to rem) | EasyConverter',
    h1: 'Pixels to REM (px to rem) Converter',
    metaDescription: 'Convert CSS pixels (px) to REM units with our free web typography tool. Based on standard 16px root font size with live preview, formula, and CSS snippet.',
    categoryId: 'typography',
    fromUnitId: 'px',
    toUnitId: 'rem',
    formula: 'rem = px ÷ baseFontSize (default: 16px)',
    manualSteps: [
      'Take the pixel value from your Figma, design, or CSS spec.',
      'Divide by the browser root font size (standard default is 16px).',
      'The result is the accessible REM measurement.'
    ],
    examples: [
      { input: 12, output: '0.7500 rem', note: 'Small caption / helper text' },
      { input: 14, output: '0.8750 rem', note: 'Secondary body text' },
      { input: 16, output: '1.0000 rem', note: 'Standard base body font size' },
      { input: 20, output: '1.2500 rem', note: 'Subheading / H4' },
      { input: 24, output: '1.5000 rem', note: 'Section heading / H3' },
      { input: 32, output: '2.0000 rem', note: 'Hero heading / H2' },
      { input: 48, output: '3.0000 rem', note: 'Display banner / H1' }
    ],
    commonValues: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96],
    faqs: [
      { question: 'Why should web developers use REM instead of PX?', answer: 'REM (Root EM) scales with the user\'s browser font-size preferences, which is critical for web accessibility. Hardcoded pixels override user accessibility preferences.' }
    ],
    accuracyNote: 'Standard web assumption: 1 rem = 16 pixels at default browser zoom.',
    practicalUses: ['Translating Figma/Sketch designs to Tailwind CSS or modern responsive CSS', 'Design system token scaling'],
    commonMistakes: ['Confusing REM (relative to root html) with EM (relative to current element parent font size).'],
    relatedSlugs: ['rem-to-pixels', 'pixels-to-em']
  },
  {
    slug: 'binary-to-decimal',
    title: 'Binary to Decimal Converter (Base 2 to Base 10) | EasyConverter',
    h1: 'Binary to Decimal Converter',
    metaDescription: 'Convert binary numbers (0s and 1s) to decimal instantly. Free computer science tool with positional power expansion explanations, copy button, and examples.',
    categoryId: 'number_systems',
    fromUnitId: 'binary',
    toUnitId: 'decimal',
    formula: 'Decimal = Σ (bit × 2^position)',
    manualSteps: [
      'Write down the binary number.',
      'List the powers of 2 from right to left starting at 2^0 = 1, 2^1 = 2, 2^2 = 4, etc.',
      'Multiply each bit by its corresponding power of 2.',
      'Sum all the non-zero products together.'
    ],
    examples: [
      { input: 1010, output: '10', note: '(1×8) + (0×4) + (1×2) + (0×1) = 10' },
      { input: 1111, output: '15', note: 'Half-byte / 1 nibble (all 1s)' },
      { input: 10000000, output: '128', note: '2^7' },
      { input: 11111111, output: '255', note: 'Maximum 8-bit unsigned integer' }
    ],
    commonValues: [1, 10, 100, 1010, 1111, 10000, 100000, 1000000, 10000000, 11111111],
    faqs: [
      { question: 'How do computers represent numbers in binary?', answer: 'Computers use transistors that act as electronic switches having two states: ON (represented as 1) and OFF (represented as 0). Groups of 8 bits form 1 byte.' }
    ],
    accuracyNote: 'Standard base-2 positional notation conversion.',
    practicalUses: ['Subnet masking and IP networking', 'Embedded hardware registers and microcontrollers', 'Assembly and computer architecture studies'],
    commonMistakes: ['Reading bit positions from left to right instead of starting with 2^0 on the far right.'],
    relatedSlugs: ['decimal-to-binary', 'hexadecimal-to-decimal', 'binary-to-hexadecimal']
  }
];
