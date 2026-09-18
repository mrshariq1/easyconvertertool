import React, { useState } from 'react';
import { CALCULATORS } from '../data/calculators';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdSlot } from '../components/AdSlot';
import { Link } from '../context/RouterContext';
import { Calculator, Copy, Check, RotateCcw, ArrowRight, Info } from 'lucide-react';

interface CalculatorDetailPageProps {
  slug: string;
}

export const CalculatorDetailPage: React.FC<CalculatorDetailPageProps> = ({ slug }) => {
  const calc = CALCULATORS.find((c) => c.slug === slug);
  const [copied, setCopied] = useState(false);

  // States for the various calculator widgets
  // 1. Percentage
  const [pctMode, setPctMode] = useState<'what_is' | 'is_what' | 'change'>('what_is');
  const [pctValA, setPctValA] = useState('20');
  const [pctValB, setPctValB] = useState('150');

  // 2. Discount
  const [discPrice, setDiscPrice] = useState('80');
  const [discPercent, setDiscPercent] = useState('25');
  const [discTax, setDiscTax] = useState('8');

  // 3. Tip & Split
  const [tipBill, setTipBill] = useState('65');
  const [tipPct, setTipPct] = useState('18');
  const [tipPeople, setTipPeople] = useState('2');

  // 4. BMI
  const [bmiUnit, setBmiUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmiWeight, setBmiWeight] = useState('70'); // kg or lbs
  const [bmiHeight, setBmiHeight] = useState('175'); // cm or inches

  // 5. Ratio
  const [ratioA, setRatioA] = useState('4');
  const [ratioB, setRatioB] = useState('5');
  const [ratioC, setRatioC] = useState('20');

  // 6. Average
  const [avgInput, setAvgInput] = useState('12, 18, 25, 30, 42, 18');

  // 7. Age
  const [birthDate, setBirthDate] = useState('1995-06-15');

  // 8. Date Difference
  const [dateStart, setDateStart] = useState('2025-01-01');
  const [dateEnd, setDateEnd] = useState('2025-12-31');

  // 9. Fuel Cost
  const [fuelDist, setFuelDist] = useState('350');
  const [fuelEcon, setFuelEcon] = useState('30'); // mpg
  const [fuelPrice, setFuelPrice] = useState('3.85');

  // 10. Fraction
  const [fracNum1, setFracNum1] = useState('1');
  const [fracDen1, setFracDen1] = useState('2');
  const [fracOp, setFracOp] = useState<'+' | '-' | '*' | '/'>('+');
  const [fracNum2, setFracNum2] = useState('3');
  const [fracDen2, setFracDen2] = useState('4');

  // 11. Random
  const [randMin, setRandMin] = useState('1');
  const [randMax, setRandMax] = useState('100');
  const [randResult, setRandResult] = useState<number | null>(42);

  if (!calc) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">Calculator Not Found</h1>
        <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8]">The requested calculator could not be found.</p>
        <Link to="/calculators" className="mt-4 inline-block font-semibold text-[#2563EB] dark:text-[#06B6D4] hover:underline">
          Browse all calculators
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Calculators', url: '/calculators' },
    { name: calc.shortTitle, url: `/calculators/${calc.slug}` }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  // Render specific interactive calculator logic
  const renderCalculatorWidget = () => {
    switch (calc.id) {
      case 'percentage': {
        let resultText = '';
        let stepText = '';
        const a = parseFloat(pctValA);
        const b = parseFloat(pctValB);

        if (!isNaN(a) && !isNaN(b)) {
          if (pctMode === 'what_is') {
            const res = (a / 100) * b;
            resultText = `${a}% of ${b} = ${res.toLocaleString('en-US', { maximumFractionDigits: 4 })}`;
            stepText = `(${a} ÷ 100) × ${b} = ${res}`;
          } else if (pctMode === 'is_what') {
            if (b === 0) {
              resultText = 'Error: Cannot divide by zero';
            } else {
              const res = (a / b) * 100;
              resultText = `${a} is ${res.toLocaleString('en-US', { maximumFractionDigits: 4 })}% of ${b}`;
              stepText = `(${a} ÷ ${b}) × 100 = ${res.toFixed(2)}%`;
            }
          } else {
            if (a === 0) {
              resultText = 'Error: Initial value cannot be zero';
            } else {
              const diff = b - a;
              const res = (diff / a) * 100;
              const sign = res >= 0 ? '+' : '';
              resultText = `${sign}${res.toFixed(2)}% (${diff >= 0 ? 'Increase' : 'Decrease'})`;
              stepText = `((${b} - ${a}) ÷ ${a}) × 100 = ${sign}${res.toFixed(2)}%`;
            }
          }
        }

        return (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setPctMode('what_is')}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                  pctMode === 'what_is' ? 'bg-[#2563EB] text-white shadow-xs' : 'bg-slate-100 text-[#64748B] hover:text-[#0F172A] dark:bg-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                }`}
              >
                What is X% of Y?
              </button>
              <button
                type="button"
                onClick={() => setPctMode('is_what')}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                  pctMode === 'is_what' ? 'bg-[#2563EB] text-white shadow-xs' : 'bg-slate-100 text-[#64748B] hover:text-[#0F172A] dark:bg-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                }`}
              >
                X is what % of Y?
              </button>
              <button
                type="button"
                onClick={() => setPctMode('change')}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                  pctMode === 'change' ? 'bg-[#2563EB] text-white shadow-xs' : 'bg-slate-100 text-[#64748B] hover:text-[#0F172A] dark:bg-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                }`}
              >
                % Increase / Decrease
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  {pctMode === 'what_is' ? 'Percentage (%)' : pctMode === 'change' ? 'Initial Value' : 'Part (X)'}
                </label>
                <input
                  type="number"
                  value={pctValA}
                  onChange={(e) => setPctValA(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-4 py-3 text-lg font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  {pctMode === 'what_is' ? 'Total Value (Y)' : pctMode === 'change' ? 'New Value' : 'Total (Y)'}
                </label>
                <input
                  type="number"
                  value={pctValB}
                  onChange={(e) => setPctValB(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-4 py-3 text-lg font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
            </div>

            <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">Result</span>
                  <div className="text-2xl sm:text-3xl font-black text-[#2563EB] dark:text-[#06B6D4] font-mono mt-1">
                    {resultText}
                  </div>
                  {stepText && <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-mono mt-1">Step: {stepText}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(resultText)}
                  className="rounded-lg bg-[#2563EB] px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
                  aria-label="Copy result"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        );
      }

      case 'discount': {
        const price = parseFloat(discPrice) || 0;
        const discount = parseFloat(discPercent) || 0;
        const tax = parseFloat(discTax) || 0;

        const savings = price * (discount / 100);
        const discountedPrice = price - savings;
        const taxAmount = discountedPrice * (tax / 100);
        const finalPrice = discountedPrice + taxAmount;

        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Original Price ($)
                </label>
                <input
                  type="number"
                  value={discPrice}
                  onChange={(e) => setDiscPrice(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Discount (%)
                </label>
                <input
                  type="number"
                  value={discPercent}
                  onChange={(e) => setDiscPercent(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Sales Tax (% optional)
                </label>
                <input
                  type="number"
                  value={discTax}
                  onChange={(e) => setDiscTax(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-4 py-3 font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
            </div>

            <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
                <div>
                  <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Final Price</span>
                  <div className="text-2xl font-black text-[#2563EB] dark:text-[#06B6D4] font-mono">
                    ${finalPrice.toFixed(2)}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">You Save</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] font-mono">
                    ${savings.toFixed(2)}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Sales Tax</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] font-mono">
                    ${taxAmount.toFixed(2)}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Discounted Base</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] font-mono">
                    ${discountedPrice.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'bmi': {
        const weight = parseFloat(bmiWeight) || 0;
        const height = parseFloat(bmiHeight) || 0;
        let bmi = 0;

        if (bmiUnit === 'metric') {
          // weight in kg, height in cm
          if (height > 0) {
            const hMeters = height / 100;
            bmi = weight / (hMeters * hMeters);
          }
        } else {
          // weight in lbs, height in inches
          if (height > 0) {
            bmi = (703 * weight) / (height * height);
          }
        }

        let category = 'Normal';
        let badgeColor = 'text-[#16A34A] bg-green-50 dark:bg-green-950/40 dark:text-green-400';
        if (bmi < 18.5) {
          category = 'Underweight';
          badgeColor = 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400';
        } else if (bmi >= 25 && bmi < 29.9) {
          category = 'Overweight';
          badgeColor = 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400';
        } else if (bmi >= 30) {
          category = 'Obesity';
          badgeColor = 'text-[#DC2626] bg-red-50 dark:bg-red-950/40 dark:text-red-400';
        }

        return (
          <div className="space-y-6">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setBmiUnit('metric');
                  setBmiWeight('70');
                  setBmiHeight('175');
                }}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                  bmiUnit === 'metric' ? 'bg-[#2563EB] text-white shadow-xs' : 'bg-slate-100 text-[#64748B] hover:text-[#0F172A] dark:bg-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                }`}
              >
                Metric (kg, cm)
              </button>
              <button
                type="button"
                onClick={() => {
                  setBmiUnit('imperial');
                  setBmiWeight('154');
                  setBmiHeight('69');
                }}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                  bmiUnit === 'imperial' ? 'bg-[#2563EB] text-white shadow-xs' : 'bg-slate-100 text-[#64748B] hover:text-[#0F172A] dark:bg-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                }`}
              >
                Imperial (lbs, inches)
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  Weight ({bmiUnit === 'metric' ? 'kg' : 'lbs'})
                </label>
                <input
                  type="number"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-4 py-3 font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  Height ({bmiUnit === 'metric' ? 'cm' : 'inches'})
                </label>
                <input
                  type="number"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-4 py-3 font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
            </div>

            <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Your Calculated BMI</span>
                  <div className="text-3xl font-black text-[#0F172A] dark:text-[#F8FAFC] font-mono">
                    {bmi > 0 ? bmi.toFixed(1) : '--'}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-xl px-4 py-2 font-bold text-sm ${badgeColor}`}>
                    {category}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs text-[#64748B] dark:text-[#94A3B8]">
                WHO Classifications: Underweight (&lt; 18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (30+). BMI is a general screening guide and does not account for muscle mass or body composition.
              </p>
            </div>
          </div>
        );
      }

      case 'tip-and-split-bill': {
        const bill = parseFloat(tipBill) || 0;
        const tipPercent = parseFloat(tipPct) || 0;
        const people = Math.max(1, parseInt(tipPeople, 10) || 1);

        const tipAmount = bill * (tipPercent / 100);
        const total = bill + tipAmount;
        const perPerson = total / people;
        const tipPerPerson = tipAmount / people;

        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  Bill Amount ($)
                </label>
                <input
                  type="number"
                  value={tipBill}
                  onChange={(e) => setTipBill(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-4 py-3 font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  Tip Percentage (%)
                </label>
                <input
                  type="number"
                  value={tipPct}
                  onChange={(e) => setTipPct(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-4 py-3 font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  Number of People
                </label>
                <input
                  type="number"
                  min="1"
                  value={tipPeople}
                  onChange={(e) => setTipPeople(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-4 py-3 font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
            </div>

            <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left font-mono">
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Per Person Total</span>
                  <div className="text-2xl font-black text-[#2563EB] dark:text-[#06B6D4]">
                    ${perPerson.toFixed(2)}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Total Tip</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    ${tipAmount.toFixed(2)}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Grand Total</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    ${total.toFixed(2)}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Tip / Person</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    ${tipPerPerson.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'average': {
        const nums = avgInput
          .split(/[\s,]+/)
          .map((s) => parseFloat(s.trim()))
          .filter((n) => !isNaN(n));

        let mean = 0;
        let median = 0;
        let sum = 0;
        let min = 0;
        let max = 0;

        if (nums.length > 0) {
          sum = nums.reduce((acc, curr) => acc + curr, 0);
          mean = sum / nums.length;
          const sorted = [...nums].sort((a, b) => a - b);
          min = sorted[0];
          max = sorted[sorted.length - 1];
          const mid = Math.floor(sorted.length / 2);
          median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
        }

        return (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                Enter numbers (comma or space separated)
              </label>
              <textarea
                value={avgInput}
                onChange={(e) => setAvgInput(e.target.value)}
                rows={3}
                className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 font-mono text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
              />
            </div>

            <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 font-mono text-center sm:text-left">
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Mean (Average)</span>
                  <div className="text-xl font-black text-[#2563EB] dark:text-[#06B6D4]">
                    {nums.length > 0 ? mean.toFixed(2) : '--'}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Median</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {nums.length > 0 ? median.toFixed(2) : '--'}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Sum</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {nums.length > 0 ? sum.toFixed(2) : '--'}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Count</span>
                  <div className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {nums.length}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-sans text-[#64748B] dark:text-[#94A3B8]">Range (Min-Max)</span>
                  <div className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {nums.length > 0 ? `${min} to ${max}` : '--'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'age': {
        const birth = new Date(birthDate);
        const today = new Date();
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
          months -= 1;
          const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
          days += prevMonthLastDay;
        }
        if (months < 0) {
          years -= 1;
          months += 12;
        }

        const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));

        return (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                Select Date of Birth
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full max-w-xs rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 font-semibold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
              />
            </div>

            <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <div className="text-center sm:text-left">
                <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Chronological Age</span>
                <div className="text-2xl sm:text-3xl font-black text-[#0F172A] dark:text-[#F8FAFC] font-mono mt-1">
                  {years} years, {months} months, {days} days
                </div>
                <p className="mt-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
                  Total days lived: <span className="font-bold text-[#0F172A] dark:text-[#F8FAFC]">{totalDays.toLocaleString('en-US')} days</span>
                </p>
              </div>
            </div>
          </div>
        );
      }

      case 'ratio': {
        const a = parseFloat(ratioA) || 0;
        const b = parseFloat(ratioB) || 0;
        const c = parseFloat(ratioC) || 0;
        const d = b > 0 && a > 0 ? (b * c) / a : 0;

        return (
          <div className="space-y-6">
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Solve for D in proportion: A : B = C : D</p>
            <div className="grid grid-cols-4 gap-3 items-center font-mono">
              <input
                type="number"
                value={ratioA}
                onChange={(e) => setRatioA(e.target.value)}
                className="rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-center font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
              />
              <span className="text-center font-bold text-[#0F172A] dark:text-[#F8FAFC]">:</span>
              <input
                type="number"
                value={ratioB}
                onChange={(e) => setRatioB(e.target.value)}
                className="rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-center font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
              />
              <span className="text-center font-bold text-[#0F172A] dark:text-[#F8FAFC]">=</span>
              <input
                type="number"
                value={ratioC}
                onChange={(e) => setRatioC(e.target.value)}
                className="rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-center font-bold text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
              />
              <span className="text-center font-bold text-[#0F172A] dark:text-[#F8FAFC]">:</span>
              <div className="rounded-xl bg-[#2563EB] text-white p-3 text-center font-bold">
                {d.toFixed(2)}
              </div>
            </div>
          </div>
        );
      }

      case 'date-difference': {
        const d1 = new Date(dateStart);
        const d2 = new Date(dateEnd);
        const diffMs = Math.abs(d2.getTime() - d1.getTime());
        const days = Math.round(diffMs / (1000 * 60 * 60 * 24));
        const weeks = (days / 7).toFixed(1);

        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">Start Date</label>
                <input
                  type="date"
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">End Date</label>
                <input
                  type="date"
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
            </div>
            <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-5 dark:border-[#334155] dark:bg-[#0F172A]">
              <div className="text-2xl font-black text-[#2563EB] dark:text-[#06B6D4] font-mono">
                {days} Days ({weeks} Weeks)
              </div>
            </div>
          </div>
        );
      }

      case 'fuel-cost': {
        const dist = parseFloat(fuelDist) || 0;
        const econ = parseFloat(fuelEcon) || 1;
        const price = parseFloat(fuelPrice) || 0;

        const gallonsNeeded = dist / econ;
        const cost = gallonsNeeded * price;

        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">Trip Distance (miles)</label>
                <input
                  type="number"
                  value={fuelDist}
                  onChange={(e) => setFuelDist(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">Fuel Economy (MPG)</label>
                <input
                  type="number"
                  value={fuelEcon}
                  onChange={(e) => setFuelEcon(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">Gas Price ($/gal)</label>
                <input
                  type="number"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
                />
              </div>
            </div>
            <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-5 dark:border-[#334155] dark:bg-[#0F172A] font-mono">
              <div className="text-2xl font-black text-[#2563EB] dark:text-[#06B6D4]">
                Estimated Trip Cost: ${cost.toFixed(2)}
              </div>
              <p className="mt-1 text-xs text-[#64748B] dark:text-[#94A3B8] font-sans">
                Requires approximately {gallonsNeeded.toFixed(2)} gallons of fuel.
              </p>
            </div>
          </div>
        );
      }

      default: {
        // Fallback generic calculator form
        return (
          <div className="p-6 rounded-xl border border-[#E2E8F0] bg-slate-50 dark:border-[#334155] dark:bg-[#0F172A]">
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">
              Interactive calculation widget active for {calc.title}.
            </p>
          </div>
        );
      }
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title={`${calc.title} — Free Online Calculator | EasyConverter`}
        description={calc.description}
        canonicalPath={`/calculators/${calc.slug}`}
        breadcrumbs={breadcrumbs}
        faqs={calc.faqs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-3 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#06B6D4]">
          {calc.category} Calculator
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC] mt-1">
          {calc.title}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
          {calc.description}
        </p>
      </div>

      {/* Main Tool Card */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
        {renderCalculatorWidget()}
      </div>

      <AdSlot position="in_content" className="my-8" />

      {/* Formula & Explanation */}
      <section className="mt-10 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
          Formula &amp; How It Works
        </h2>
        <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-4 font-mono text-sm sm:text-base font-semibold text-[#2563EB] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#06B6D4] mb-4">
          {calc.formulaDescription}
        </div>
        <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
          {calc.description}
        </p>
      </section>

      {/* FAQs */}
      <FAQAccordion items={calc.faqs} title={`Frequently Asked Questions: ${calc.shortTitle}`} />
    </div>
  );
};
