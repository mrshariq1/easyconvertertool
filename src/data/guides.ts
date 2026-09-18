import { Guide } from '../types';

export const GUIDES: Guide[] = [
  {
    slug: 'how-unit-conversion-works',
    title: 'How Unit Conversion Works: Dimensional Analysis & Conversion Factors',
    category: 'measurement',
    readTime: '6 min read',
    publishedDate: '2025-01-15',
    description: 'Master the fundamental principles of dimensional analysis, conversion factors, and unit cancellation for school, science, and everyday math.',
    summary: 'Learn how dimensional analysis allows you to convert any measurement reliably without guessing whether to multiply or divide.',
    sections: [
      {
        title: 'The Core Concept: Multiplication by One',
        content: 'All unit conversion is based on an algebraic identity: multiplying any quantity by 1 does not change its physical value. Because 1 foot equals 12 inches, the ratio (1 ft / 12 in) and the ratio (12 in / 1 ft) both equal 1. When you multiply a measurement by such a conversion factor, the original units cancel out algebraically, leaving only the desired target units.',
        highlightBox: 'Core Rule: Place the unit you want to eliminate in the opposite position (numerator vs denominator) so it cancels cleanly.'
      },
      {
        title: 'Step-by-Step Dimensional Analysis',
        content: 'Follow this foolproof 4-step framework for any conversion:\n1. Write down the given quantity with its unit.\n2. Find an equality between the given unit and the desired unit.\n3. Form a conversion factor fraction where the unit to cancel is in the denominator.\n4. Multiply and cancel identical units.'
      },
      {
        title: 'Multi-Step Chain Conversions',
        content: 'When there is no direct conversion factor, string multiple factors together. For example, to convert 60 miles per hour to feet per second: (60 mi / 1 h) × (5,280 ft / 1 mi) × (1 h / 3600 s) = 88 ft/s.'
      },
      {
        title: 'Common Conversion Pitfalls',
        content: 'The most frequent mistake is inverting the fraction (e.g. multiplying by 0.3048 instead of dividing, or vice-versa). Always examine whether the final numeric value makes intuitive physical sense. If you convert kilometers to meters, the number must become larger, not smaller.'
      }
    ],
    faqs: [
      { question: 'What is a conversion factor?', answer: 'A conversion factor is a numerical ratio of two equivalent quantities expressed in different units that equals 1.' },
      { question: 'Why does dimensional analysis prevent math mistakes?', answer: 'Because tracking units algebraically acts as a built-in error checking system. If your final calculated unit is ft²/s when you wanted seconds, you know you made an algebraic error.' }
    ],
    relatedTools: [
      { label: 'Length Converter', path: '/converters/length' },
      { label: 'Speed Converter', path: '/converters/speed' }
    ]
  },
  {
    slug: 'metric-vs-imperial-units',
    title: 'Metric vs Imperial Units: History, Systems & Key Differences',
    category: 'measurement',
    readTime: '8 min read',
    publishedDate: '2025-02-01',
    description: 'Explore the global history of the International System of Units (SI) versus British Imperial and US Customary systems.',
    summary: 'A comprehensive guide comparing base-10 metric coherence with historical human-scale imperial measurements.',
    sections: [
      {
        title: 'The Origin of the Systems',
        content: 'The metric system was established during the French Revolution in the 1790s to replace thousands of confusing, localized trade units with a universal system based on powers of 10 and natural constants. In contrast, the Imperial and US Customary systems evolved organically from ancient Roman, Anglo-Saxon, and medieval trade measurements based on physical human proportions (a foot, an inch as a thumb width, an acre as the land an ox team could plow in a day).'
      },
      {
        title: 'Why Metric Is Mathematically Elegant',
        content: 'Metric units scale by pure powers of 10 using standard prefixes: kilo (1,000), centi (1/100), and milli (1/1,000). Furthermore, metric dimensions are interconnected: 1 cubic centimeter of pure water equals exactly 1 milliliter and has a mass of approximately 1 gram.'
      },
      {
        title: 'Imperial vs. US Customary: Not the Same!',
        content: 'Many people assume US units are identical to British Imperial units, but they diverged in 1824. A British Imperial pint is 20 fluid ounces (568 mL), whereas a US liquid pint is 16 US fluid ounces (473 mL). Similarly, an Imperial gallon is 4.546 liters, while a US gallon is 3.785 liters.',
        highlightBox: 'Crucial Difference: A UK/Imperial gallon is ~20% larger than a US liquid gallon.'
      }
    ],
    faqs: [
      { question: 'Which countries still officially use imperial or US customary units?', answer: 'Only three countries do not officially mandate the metric system: the United States, Myanmar (Burma), and Liberia. Even in the US, scientific research, medicine, military operations, and automotive manufacturing use metric units.' }
    ],
    relatedTools: [
      { label: 'Volume Converter', path: '/converters/volume' },
      { label: 'Weight Converter', path: '/converters/weight' }
    ]
  },
  {
    slug: 'how-to-convert-kg-to-lbs',
    title: 'How to Convert Kilograms to Pounds (kg to lbs): Guide & Mental Tricks',
    category: 'measurement',
    readTime: '5 min read',
    publishedDate: '2025-01-20',
    description: 'Step-by-step guide on converting kilograms to pounds with exact arithmetic formulas and quick mental math methods.',
    summary: 'Learn how to easily convert kilograms to pounds in your head or with exact formulas.',
    sections: [
      {
        title: 'The Official Mathematical Formula',
        content: 'To convert kilograms (kg) to pounds (lb), multiply the kilograms by 2.20462262:\nWeight in Pounds = kg × 2.20462'
      },
      {
        title: 'The Mental Double-Plus-Ten Trick',
        content: 'When you are at an airport baggage drop or in the gym without a calculator, use the double-plus-ten percent trick:\n1. Multiply the kg number by 2.\n2. Take 10% of that result.\n3. Add the two numbers together.\nExample: Convert 40 kg to lbs:\n• 40 × 2 = 80\n• 10% of 80 = 8\n• 80 + 8 = 88 lbs (exact is 88.18 lbs, an error under 0.2%).',
        highlightBox: 'Mental Formula: (kg × 2) + 10% = lbs.'
      }
    ],
    faqs: [
      { question: 'Why is 1 kg equal to 2.2 lbs?', answer: 'Because 1 avoirdupois pound is legally defined by international agreement as exactly 0.45359237 kilograms. Taking the reciprocal (1 / 0.45359237) yields approximately 2.20462262.' }
    ],
    relatedTools: [
      { label: 'KG to LBS Converter', path: '/kg-to-lbs' },
      { label: 'LBS to KG Converter', path: '/lbs-to-kg' }
    ]
  },
  {
    slug: 'how-to-convert-cm-to-inches',
    title: 'How to Convert Centimeters to Inches: Formulas & Height Chart',
    category: 'measurement',
    readTime: '5 min read',
    publishedDate: '2025-01-22',
    description: 'Complete guide for converting centimeters to inches with exact formulas and human height conversion tables.',
    summary: 'Understand the exact relationship between centimeters and inches, with practical tips for measuring human height.',
    sections: [
      {
        title: 'The Exact International Standard',
        content: 'Since 1959, 1 inch has been defined as exactly 2.54 centimeters. To convert centimeters to inches, divide your measurement by 2.54:\nInches = Centimeters ÷ 2.54'
      },
      {
        title: 'Converting Centimeters to Feet and Inches for Height',
        content: 'Many forms request human height in feet and inches (e.g. 5\'10"). To convert:\n1. Divide total cm by 2.54 to get total inches. (e.g. 178 cm / 2.54 = 70.08 in).\n2. Divide total inches by 12: 70 / 12 = 5 feet with 10 inches remaining.\n3. Result: 178 cm = 5 feet 10 inches.'
      }
    ],
    faqs: [
      { question: 'What is 180 cm in feet and inches?', answer: '180 cm is 70.87 inches, which is 5 feet 10.87 inches (rounded to roughly 5\'11").' }
    ],
    relatedTools: [
      { label: 'CM to Inches Converter', path: '/cm-to-inches' },
      { label: 'Inches to CM Converter', path: '/inches-to-cm' }
    ]
  },
  {
    slug: 'celsius-vs-fahrenheit',
    title: 'Celsius vs Fahrenheit Explained: Formulas, History & Benchmarks',
    category: 'temperature',
    readTime: '7 min read',
    publishedDate: '2025-01-25',
    description: 'Why do Celsius and Fahrenheit use different zero points? Learn the history, formulas, and real-world temperature benchmarks.',
    summary: 'A clear guide to understanding the world\'s two primary temperature scales.',
    sections: [
      {
        title: 'The Difference in Zero Points',
        content: 'Anders Celsius based his scale on pure water at sea level: freezing at 0°C and boiling at 100°C. Daniel Gabriel Fahrenheit created his scale using a freezing brine solution as 0°F and human body temperature as roughly 96°F, which placed water freezing at 32°F and water boiling at 212°F.'
      },
      {
        title: 'The Conversion Formulas',
        content: '• Celsius to Fahrenheit: °F = (°C × 9/5) + 32\n• Fahrenheit to Celsius: °C = (°F - 32) × 5/9'
      },
      {
        title: 'Everyday Weather Temperature Benchmarks',
        content: '• 0°C / 32°F: Freezing cold (ice forms)\n• 10°C / 50°F: Cool jacket weather\n• 20°C / 68°F: Comfortable room temperature\n• 30°C / 86°F: Hot summer day\n• 37°C / 98.6°F: Normal human body temperature\n• 40°C / 104°F: Intense desert heat'
      }
    ],
    faqs: [
      { question: 'Why does Fahrenheit feel more descriptive for human weather?', answer: 'Supporters often note that on the 0–100°F scale, 0°F is roughly as cold as it gets in temperate winter climates and 100°F is as hot as it gets in summer, making it an intuitive 0-to-100 rating for human comfort.' }
    ],
    relatedTools: [
      { label: 'Celsius to Fahrenheit', path: '/celsius-to-fahrenheit' },
      { label: 'Fahrenheit to Celsius', path: '/fahrenheit-to-celsius' }
    ]
  },
  {
    slug: 'how-to-convert-miles-to-km',
    title: 'How to Convert Miles to Kilometers: Road Trip Math & Pacing',
    category: 'measurement',
    readTime: '5 min read',
    publishedDate: '2025-02-05',
    description: 'Learn how to convert highway driving speeds and running race distances between miles and kilometers.',
    summary: 'Practical tips for converting distances on highway road trips and running races.',
    sections: [
      {
        title: 'The Exact Factor',
        content: '1 international statute mile is defined as exactly 1.609344 kilometers. To convert miles to kilometers, multiply by 1.609344. To convert kilometers to miles, multiply by 0.621371.'
      },
      {
        title: 'The Fibonacci Sequence Secret',
        content: 'The ratio between miles and kilometers (1 : 1.609) is remarkably close to the Golden Ratio (1.618), which governs the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21, 34, 55, 89...). This means each Fibonacci number in miles is roughly the next Fibonacci number in kilometers:\n• 3 miles ≈ 5 km\n• 5 miles ≈ 8 km\n• 8 miles ≈ 13 km\n• 13 miles ≈ 21 km (half marathon)\n• 55 miles ≈ 89 km',
        highlightBox: 'Pro Tip: Use consecutive Fibonacci numbers to convert road distances without a calculator.'
      }
    ],
    faqs: [
      { question: 'How long is a 5K race in miles?', answer: 'A 5-kilometer race is exactly 3.10686 miles (commonly referred to as 3.1 miles).' }
    ],
    relatedTools: [
      { label: 'Miles to KM Converter', path: '/miles-to-km' },
      { label: 'KM to Miles Converter', path: '/km-to-miles' }
    ]
  },
  {
    slug: 'kb-vs-kib-vs-mb-vs-mib',
    title: 'KB vs KiB vs MB vs MiB: Decimal vs Binary Storage Units',
    category: 'data',
    readTime: '6 min read',
    publishedDate: '2025-02-10',
    description: 'Understand the crucial difference between SI decimal data units (1000) and IEC binary data units (1024).',
    summary: 'Why your new 1 TB hard drive only shows 931 GB in Windows, and how storage standards work.',
    sections: [
      {
        title: 'Why Are There Two Different Systems?',
        content: 'In computing, memory operates in powers of 2 (binary). Engineers originally used metric prefixes loosely, calling 1,024 bytes a "kilobyte". But in standard SI metric, "kilo" strictly means 1,000. In 1998, the International Electrotechnical Commission (IEC) resolved this confusion by establishing binary prefixes: Kibibyte (KiB), Mebibyte (MiB), and Gibibyte (GiB) for base-2.'
      },
      {
        title: 'The Hard Drive Capacity Mystery',
        content: 'When you buy a 1 Terabyte (1 TB) external hard drive, the manufacturer produces a disk with 1,000,000,000,000 bytes (decimal base-10). When you plug it into Microsoft Windows, the operating system calculates capacity using binary units (1024 × 1024 × 1024 × 1024), but labels it as "GB" instead of "GiB".\n1,000,000,000,000 ÷ 1,073,741,824 = 931.32 GiB.'
      }
    ],
    faqs: [
      { question: 'Does macOS use 1000 or 1024?', answer: 'Since macOS Snow Leopard (10.6), Apple displays file sizes in standard decimal (1 KB = 1000 bytes), matching drive packaging. Windows still uses 1024.' }
    ],
    relatedTools: [
      { label: 'MB to GB Converter', path: '/mb-to-gb' },
      { label: 'Data Storage Converter', path: '/converters/data' }
    ]
  },
  {
    slug: 'how-to-convert-liters-to-gallons',
    title: 'How to Convert Liters to Gallons: US Liquid vs Imperial Gallons',
    category: 'measurement',
    readTime: '5 min read',
    publishedDate: '2025-02-12',
    description: 'Learn how to convert liters to gallons, and avoid the common mistake of confusing US liquid and UK imperial gallons.',
    summary: 'A clear guide to liquid volume conversion for fuel, brewing, and international recipes.',
    sections: [
      {
        title: 'The Two Types of Gallons',
        content: '• US Liquid Gallon: Defined as 231 cubic inches, equal to 3.785411784 liters.\n• Imperial (UK) Gallon: Defined as 4.54609 liters (approx. 20% larger than the US gallon).\nAlways verify which country\'s unit is being referenced!'
      },
      {
        title: 'Conversion Factors',
        content: '• Liters to US Gallons: US gal = L ÷ 3.78541\n• US Gallons to Liters: L = US gal × 3.78541'
      }
    ],
    faqs: [
      { question: 'How many liters is a standard US fuel gallon?', answer: '1 US gallon equals approximately 3.785 liters.' }
    ],
    relatedTools: [
      { label: 'Liters to Gallons Converter', path: '/liters-to-gallons' },
      { label: 'Volume Converter', path: '/converters/volume' }
    ]
  },
  {
    slug: 'how-to-convert-square-feet-to-square-meters',
    title: 'How to Convert Square Feet to Square Meters: Real Estate & Flooring',
    category: 'measurement',
    readTime: '6 min read',
    publishedDate: '2025-02-15',
    description: 'Calculate property square footage and floor tile areas across square feet (sq ft) and square meters (sq m).',
    summary: 'A practical real estate guide for converting apartment sizes, room floor plans, and tile counts.',
    sections: [
      {
        title: 'The Area Factor: Why 1 m ≠ 3.28 sq ft',
        content: 'Remember that area is two-dimensional! While 1 meter equals 3.28084 linear feet, 1 square meter is 3.28084 × 3.28084 = 10.7639 square feet. For quick mental estimates in real estate, divide square feet by 10 or 11 to get approximate square meters.'
      },
      {
        title: 'Common Apartment Benchmarks',
        content: '• 500 sq ft ≈ 46.5 m² (Studio / 1-bedroom)\n• 800 sq ft ≈ 74.3 m² (2-bedroom apartment)\n• 1,200 sq ft ≈ 111.5 m² (3-bedroom home)\n• 2,000 sq ft ≈ 185.8 m² (Spacious family home)'
      }
    ],
    faqs: [
      { question: 'How many square feet are in 1 square meter?', answer: 'There are approximately 10.7639 square feet in 1 square meter.' }
    ],
    relatedTools: [
      { label: 'Area Converter', path: '/converters/area' }
    ]
  },
  {
    slug: 'how-to-convert-psi-to-bar',
    title: 'How to Convert PSI to Bar: Tire Pressure & Industrial Equipment',
    category: 'measurement',
    readTime: '5 min read',
    publishedDate: '2025-02-18',
    description: 'Tire inflation guide explaining how to convert PSI (pounds per square inch) to Bar at international gas stations.',
    summary: 'Everything you need to know about vehicle tire pressure, bar, and PSI.',
    sections: [
      {
        title: 'The PSI to Bar Ratio',
        content: '1 bar equals 100,000 Pascals, or approximately 14.5038 PSI. To convert PSI to Bar, divide by 14.5038 (or multiply by 0.06895).'
      },
      {
        title: 'Automotive Tire Reference Table',
        content: '• 30 PSI = 2.07 bar\n• 32 PSI = 2.21 bar (most compact cars)\n• 35 PSI = 2.41 bar (SUVs and crossovers)\n• 38 PSI = 2.62 bar\n• 42 PSI = 2.90 bar (heavily loaded vehicles)'
      }
    ],
    faqs: [
      { question: 'Why is correct tire pressure crucial?', answer: 'Under-inflated tires increase fuel consumption, cause uneven shoulder tread wear, and generate excessive heat that can lead to blowouts. Always check tire pressure when tires are cold.' }
    ],
    relatedTools: [
      { label: 'PSI to Bar Converter', path: '/psi-to-bar' },
      { label: 'Bar to PSI Converter', path: '/bar-to-psi' }
    ]
  },
  {
    slug: 'how-to-convert-mpg-to-l100km',
    title: 'How to Convert MPG to L/100km: Understanding Vehicle Fuel Economy',
    category: 'everyday',
    readTime: '6 min read',
    publishedDate: '2025-02-20',
    description: 'Understand the mathematical inverse relationship between distance-per-volume (MPG) and volume-per-distance (L/100km).',
    summary: 'Why a higher MPG number means better efficiency, but a lower L/100km number means better efficiency.',
    sections: [
      {
        title: 'The Inverse Curve',
        content: 'In the US and UK, fuel economy is measured as distance traveled per unit of fuel (Miles Per Gallon). In Europe, Canada, and Australia, fuel consumption is measured as fuel burned per 100 kilometers traveled (Liters per 100 km). Because one is distance/fuel and the other is fuel/distance, they have an inverse reciprocal relationship:\nL/100km = 235.215 ÷ MPG (US)'
      }
    ],
    faqs: [
      { question: 'What is a good L/100km rating?', answer: 'For gasoline passenger cars, under 6.0 L/100km (~40 MPG) is considered very efficient, while hybrid cars often achieve 4.0 to 5.0 L/100km.' }
    ],
    relatedTools: [
      { label: 'Fuel Economy Converter', path: '/converters/fuel_economy' },
      { label: 'Fuel Cost Calculator', path: '/calculators/fuel-cost' }
    ]
  },
  {
    slug: 'how-to-convert-degrees-to-radians',
    title: 'How to Convert Degrees to Radians: Geometry & Trigonometry Guide',
    category: 'measurement',
    readTime: '5 min read',
    publishedDate: '2025-02-22',
    description: 'Learn why 360 degrees equals 2π radians, with unit circle reference values and calculus insights.',
    summary: 'A clear guide to angle measurement, radian fractions, and the unit circle.',
    sections: [
      {
        title: 'The Geometry Behind Radians',
        content: 'One radian is the angle subtended at the center of a circle by an arc whose length equals the radius of the circle. Because the circumference of a circle is 2πr, there are exactly 2π radians in a full 360° circle. Therefore:\n180° = π radians\nRadians = Degrees × (π / 180)'
      }
    ],
    faqs: [
      { question: 'What is 90 degrees in radians?', answer: '90 degrees is exactly π/2 radians, or approximately 1.570796 radians.' }
    ],
    relatedTools: [
      { label: 'Degrees to Radians Converter', path: '/degrees-to-radians' },
      { label: 'Angle Converter', path: '/converters/angle' }
    ]
  },
  {
    slug: 'understanding-digital-storage-units',
    title: 'Understanding Digital Storage Units: From Bits to Terabytes',
    category: 'data',
    readTime: '7 min read',
    publishedDate: '2025-02-25',
    description: 'Learn the hierarchy of computer memory: bits, bytes, kilobytes, megabytes, gigabytes, and terabytes.',
    summary: 'A beginner-friendly computer science overview of data sizing and bandwidth.',
    sections: [
      {
        title: 'Bits vs Bytes: The Fundamental Difference',
        content: 'A bit (lowercase b) is a single binary digit (0 or 1). A byte (uppercase B) is a collection of 8 bits. Internet connection speeds are almost always advertised in bits per second (e.g. 100 Mbps), whereas file sizes on your computer are measured in bytes (e.g. 100 MB). To calculate download time, divide your internet speed by 8.'
      }
    ],
    faqs: [
      { question: 'How long will a 1 GB file take to download on a 100 Mbps connection?', answer: '1 GB = 8,000 Mb. 8,000 Mb ÷ 100 Mbps = 80 seconds (approximately 1 minute and 20 seconds).' }
    ],
    relatedTools: [
      { label: 'Data Converter', path: '/converters/data' },
      { label: 'MB to GB Converter', path: '/mb-to-gb' }
    ]
  },
  {
    slug: 'understanding-temperature-scales',
    title: 'Understanding Temperature Scales: Celsius, Fahrenheit & Kelvin',
    category: 'temperature',
    readTime: '6 min read',
    publishedDate: '2025-02-26',
    description: 'Learn about thermal physics, absolute zero, thermodynamic Kelvin, and how temperature scales were invented.',
    summary: 'The science behind thermal energy, molecular motion, and thermal measurement.',
    sections: [
      {
        title: 'What Is Temperature Physically?',
        content: 'Temperature is a measure of the average kinetic energy of the particles in a substance. At Absolute Zero (0 Kelvin, -273.15°C, or -459.67°F), all classical thermodynamic motion ceases. For this reason, scientists use the Kelvin scale, which starts at absolute zero and does not require negative numbers.'
      }
    ],
    faqs: [
      { question: 'Can anything be colder than absolute zero?', answer: 'No, in classical thermodynamics, absolute zero (0 K) represents the complete absence of heat energy.' }
    ],
    relatedTools: [
      { label: 'Temperature Converter', path: '/converters/temperature' }
    ]
  },
  {
    slug: 'kitchen-cooking-measurements',
    title: 'Kitchen Cooking Measurements: Cups, Spoons, Ounces & Grams',
    category: 'cooking',
    readTime: '6 min read',
    publishedDate: '2025-02-28',
    description: 'International baking and cooking guide converting volume scoops (cups, tablespoons) to weight (grams).',
    summary: 'Master the kitchen conversions that make baking recipes turn out perfectly every time.',
    sections: [
      {
        title: 'Volume vs Weight in Baking',
        content: 'In cooking, a cup measures volume (space), not weight. A cup of all-purpose flour weighs about 120 grams, but a cup of granulated sugar weighs about 200 grams, and a cup of honey weighs over 300 grams. For consistent baking results, measuring by grams with a digital kitchen scale is vastly superior to measuring by volume.'
      },
      {
        title: 'Standard US Culinary Volume Ratios',
        content: '• 1 US Cup = 16 tablespoons = 48 teaspoons = 236.6 mL = 8 US fluid ounces\n• 1 US Tablespoon = 3 teaspoons = 14.8 mL = 0.5 US fluid ounces\n• 1 US Teaspoon = 4.9 mL'
      }
    ],
    faqs: [
      { question: 'How many tablespoons are in 1/4 cup?', answer: 'There are exactly 4 tablespoons in 1/4 US cup.' }
    ],
    relatedTools: [
      { label: 'Cooking Converter', path: '/converters/cooking' },
      { label: 'Volume Converter', path: '/converters/volume' }
    ]
  }
];
