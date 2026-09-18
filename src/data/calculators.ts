import { Calculator } from '../types';

export const CALCULATORS: Calculator[] = [
  {
    id: 'percentage',
    slug: 'percentage',
    title: 'Percentage Calculator',
    shortTitle: 'Percentage',
    category: 'math',
    description: 'Calculate what X% of Y is, find percentage increase or decrease, and calculate what percentage one number is of another.',
    metaDescription: 'Free online percentage calculator. Quickly calculate percentage increase, discount, portions, and percentage differences with transparent formulas.',
    iconName: 'Percent',
    formulaDescription: 'Percentage = (Value / Total) × 100 | Portion = (Percentage / 100) × Total',
    faqs: [
      { question: 'How do you calculate percentage of a number?', answer: 'Divide the percentage by 100 and multiply by the total number. For example: 20% of 80 = (20 / 100) × 80 = 16.' },
      { question: 'How do you calculate percentage change?', answer: 'Subtract the old value from the new value, divide by the absolute old value, and multiply by 100: ((New - Old) / Old) × 100.' }
    ]
  },
  {
    id: 'discount',
    slug: 'discount',
    title: 'Discount & Sale Price Calculator',
    shortTitle: 'Discount',
    category: 'finance',
    description: 'Find final sale prices, saved amounts, and combined discounts with optional sales tax calculation for shopping.',
    metaDescription: 'Free discount calculator. Enter original price and discount percentage to instantly see your total savings and final checkout price.',
    iconName: 'Tag',
    formulaDescription: 'Savings = Original Price × (Discount % / 100) | Final Price = Original Price - Savings',
    faqs: [
      { question: 'How do you calculate 30% off quickly?', answer: 'Find 10% by moving the decimal point one place to the left, multiply that by 3 to get the 30% savings, and subtract it from the original price.' }
    ]
  },
  {
    id: 'ratio',
    slug: 'ratio',
    title: 'Ratio & Proportion Calculator',
    shortTitle: 'Ratio',
    category: 'math',
    description: 'Solve proportions (A:B = C:D) for the missing variable, simplify complex ratios to lowest terms, and scale recipe ingredients.',
    metaDescription: 'Free ratio and proportion calculator. Find missing values in A:B = C:D, simplify ratios, and scale proportions accurately.',
    iconName: 'Divide',
    formulaDescription: 'Cross-Multiplication: A × D = B × C. Missing value X = (B × C) / A',
    faqs: [
      { question: 'How do you simplify a ratio?', answer: 'Divide both terms by their Greatest Common Divisor (GCD). For example, 12:16 simplifies to 3:4 after dividing both by 4.' }
    ]
  },
  {
    id: 'average',
    slug: 'average',
    title: 'Average Calculator (Mean, Median, Mode, Range)',
    shortTitle: 'Average',
    category: 'math',
    description: 'Calculate arithmetic mean, median, mode, minimum, maximum, and total sum for any list of comma or space-separated numbers.',
    metaDescription: 'Free average calculator. Input a series of numbers to find the mean, median, mode, sum, count, and range instantly.',
    iconName: 'BarChart2',
    formulaDescription: 'Mean = Sum of values / Count | Median = Middle value when sorted | Range = Max - Min',
    faqs: [
      { question: 'What is the difference between mean and median?', answer: 'The mean is the mathematical average (sum divided by count). The median is the physical middle value when numbers are sorted in order, making it resilient to extreme outliers.' }
    ]
  },
  {
    id: 'age',
    slug: 'age',
    title: 'Age Calculator',
    shortTitle: 'Age',
    category: 'time',
    description: 'Calculate your exact chronological age in years, months, days, total weeks, total hours, and days until your next birthday.',
    metaDescription: 'Free chronological age calculator. Calculate exact age in years, months, and days from any date of birth with birthday countdown.',
    iconName: 'Calendar',
    formulaDescription: 'Calculates calendar elapsed intervals considering leap years and varying month day counts accurately.',
    faqs: [
      { question: 'Does this account for leap years?', answer: 'Yes, calculations accurately count February 29th leap years across historical Gregorian calendar dates.' }
    ]
  },
  {
    id: 'date-diff',
    slug: 'date-difference',
    title: 'Date Difference Calculator',
    shortTitle: 'Date Difference',
    category: 'time',
    description: 'Calculate the exact number of days, business days, weeks, and months between two calendar dates.',
    metaDescription: 'Calculate the number of days between two dates. See days, weeks, months, and business days between start and end dates.',
    iconName: 'CalendarDays',
    formulaDescription: 'Days = (Date 2 - Date 1) in milliseconds ÷ 86,400,000',
    faqs: [
      { question: 'How many days are in a leap year?', answer: 'A leap year has 366 days instead of 365, with an extra day added on February 29.' }
    ]
  },
  {
    id: 'time-duration',
    slug: 'time-duration',
    title: 'Time Duration Calculator',
    shortTitle: 'Time Duration',
    category: 'time',
    description: 'Add or subtract hours, minutes, and seconds. Calculate total work hours, shifts, or elapsed time between start and end times.',
    metaDescription: 'Free time duration calculator. Add or subtract hours and minutes, calculate shift durations, and convert between time formats.',
    iconName: 'Clock',
    formulaDescription: 'Total Seconds = (Hours × 3600) + (Minutes × 60) + Seconds',
    faqs: [
      { question: 'How do you calculate hours worked between two clock times?', answer: 'Convert both times to 24-hour military time, subtract start time from end time, and deduct unpaid lunch breaks.' }
    ]
  },
  {
    id: 'fuel-cost',
    slug: 'fuel-cost',
    title: 'Fuel Cost Trip Calculator',
    shortTitle: 'Fuel Cost',
    category: 'everyday',
    description: 'Estimate total fuel expense, gallons/liters required, and cost per passenger for any road trip or daily commute.',
    metaDescription: 'Calculate road trip fuel cost. Input trip distance, fuel economy (MPG or L/100km), and price per gallon/liter to estimate travel costs.',
    iconName: 'Fuel',
    formulaDescription: 'Fuel Needed = Distance / MPG | Total Cost = Fuel Needed × Price Per Gallon',
    faqs: [
      { question: 'How can you reduce road trip fuel costs?', answer: 'Maintain steady highway speeds (avoid aggressive acceleration above 65 mph), keep tires inflated to recommended cold PSI, and remove excess roof rack luggage.' }
    ]
  },
  {
    id: 'tip-split',
    slug: 'tip-and-split-bill',
    title: 'Tip & Split Bill Calculator',
    shortTitle: 'Tip & Split',
    category: 'finance',
    description: 'Calculate restaurant gratuity and evenly split restaurant bills across any number of dining guests.',
    metaDescription: 'Free tip and split bill calculator. Quickly calculate gratuity percentages and split checks evenly among friends and family.',
    iconName: 'Receipt',
    formulaDescription: 'Tip = Bill × (Tip % / 100) | Total = Bill + Tip | Per Person = Total / People',
    faqs: [
      { question: 'What is standard dining tip etiquette?', answer: 'In the United States, 15% to 20% of the pre-tax bill is standard for good table service. In many European and Asian countries, service charge is either included or a modest round-up is customary.' }
    ]
  },
  {
    id: 'bmi',
    slug: 'bmi',
    title: 'BMI (Body Mass Index) Calculator',
    shortTitle: 'BMI',
    category: 'health',
    description: 'Calculate Body Mass Index using metric (kg/cm) or imperial (lbs/ft+in) measurements with World Health Organization categories.',
    metaDescription: 'Free BMI calculator for adults. Calculate Body Mass Index using metric or imperial units with official WHO weight category classifications.',
    iconName: 'HeartPulse',
    formulaDescription: 'Metric: BMI = weight (kg) / [height (m)]² | Imperial: BMI = 703 × weight (lb) / [height (in)]²',
    faqs: [
      { question: 'What are the WHO BMI weight classifications?', answer: 'Underweight: BMI < 18.5; Normal weight: 18.5 – 24.9; Overweight: 25.0 – 29.9; Obesity Class I: 30.0 – 34.9; Obesity Class II: 35.0 – 39.9; Class III: 40+.' },
      { question: 'What are the limitations of BMI?', answer: 'BMI is a statistical screening tool that measures weight relative to height. It does not directly distinguish between muscle mass and adipose fat tissue, bone density, or fat distribution.' }
    ]
  },
  {
    id: 'fraction',
    slug: 'fraction',
    title: 'Fraction Calculator',
    shortTitle: 'Fraction',
    category: 'math',
    description: 'Add, subtract, multiply, and divide fractions. Outputs simplified fractions, mixed numbers, and decimal equivalents with steps.',
    metaDescription: 'Free fraction calculator. Add, subtract, multiply, and divide proper and improper fractions with step-by-step reduction.',
    iconName: 'Divide',
    formulaDescription: 'Addition: (a/b) + (c/d) = (ad + bc) / bd | Multiplication: (a/b) × (c/d) = ac / bd',
    faqs: [
      { question: 'How do you multiply two fractions?', answer: 'Multiply the numerators together, multiply the denominators together, then simplify by dividing by their greatest common divisor.' }
    ]
  },
  {
    id: 'random-number',
    slug: 'random-number-generator',
    title: 'Random Number Generator',
    shortTitle: 'Random Number',
    category: 'math',
    description: 'Generate truly cryptographically random numbers within any integer range. Supports multiple numbers, sorting, and duplicate controls.',
    metaDescription: 'Free random number generator. Generate fair, unbiased random numbers within any minimum and maximum bounds for raffles, games, and sampling.',
    iconName: 'Shuffle',
    formulaDescription: 'Browser Crypto API: crypto.getRandomValues() for unbiased uniform integer distribution',
    faqs: [
      { question: 'How does the randomness work?', answer: 'Our generator uses the browser\'s secure Web Crypto API (crypto.getRandomValues), providing cryptographically uniform pseudorandom entropy.' }
    ]
  }
];
