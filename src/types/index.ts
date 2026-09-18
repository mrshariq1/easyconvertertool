export type UnitSystem = 'metric' | 'imperial' | 'us_customary' | 'binary' | 'decimal' | 'si' | 'other';

export interface Unit {
  id: string;
  name: string;
  plural: string;
  symbol: string;
  system: UnitSystem;
  ratioToBase?: number; // base unit has ratio 1.0 (e.g. 1 kg = 1000g, or base meter)
  notes?: string;
}

export interface ConverterCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  baseUnitId: string;
  units: Unit[];
  popularPairs: { from: string; to: string; slug: string; label: string }[];
  isSpecial?: 'temperature' | 'fuel_economy' | 'number_systems' | 'typography';
}

export interface DirectConversion {
  slug: string; // e.g. "kg-to-lbs"
  title: string;
  h1: string;
  metaDescription: string;
  categoryId: string;
  fromUnitId: string;
  toUnitId: string;
  formula: string;
  manualSteps: string[];
  examples: { input: number; output: string; note?: string }[];
  commonValues: number[]; // values to generate table for (e.g. [1, 2, 5, 10, 20, 50, 100])
  faqs: { question: string; answer: string }[];
  accuracyNote?: string;
  practicalUses?: string[];
  commonMistakes?: string[];
  relatedSlugs: string[];
}

export interface Calculator {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'everyday' | 'finance' | 'health' | 'math' | 'time';
  description: string;
  metaDescription: string;
  iconName: string;
  formulaDescription: string;
  faqs: { question: string; answer: string }[];
}

export interface GuideSection {
  title: string;
  content: string; // supports markdown-style paragraphs or formatted strings
  highlightBox?: string;
}

export interface Guide {
  slug: string;
  title: string;
  category: 'measurement' | 'data' | 'temperature' | 'everyday' | 'cooking';
  readTime: string;
  publishedDate: string;
  description: string;
  summary: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  relatedTools: { label: string; path: string }[];
}

export interface RecentConversion {
  id: string;
  fromValue: number;
  fromUnitName: string;
  fromUnitSymbol: string;
  toValue: number;
  toUnitName: string;
  toUnitSymbol: string;
  categoryId: string;
  timestamp: number;
}
