import React, { useState, useMemo } from 'react';
import { CALCULATORS } from '../data/calculators';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from '../context/RouterContext';
import { Calculator, ArrowRight, Search } from 'lucide-react';

export const AllCalculatorsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const breadcrumbs = [{ name: 'Calculators', url: '/calculators' }];

  const categories = ['all', 'math', 'finance', 'health', 'time', 'everyday'];

  const filteredCalculators = useMemo(() => {
    return CALCULATORS.filter((calc) => {
      const matchCat = activeCategory === 'all' || calc.category === activeCategory;
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        calc.title.toLowerCase().includes(q) ||
        calc.description.toLowerCase().includes(q) ||
        calc.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="Online Calculators — Fast Math, Financial & Health Tools | EasyConverter"
        description="Free online calculators for percentages, discounts, ratios, averages, age, BMI, tip calculation, fuel cost, and everyday math problems."
        canonicalPath="/calculators"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-3 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#2563EB] dark:text-[#06B6D4] mb-2">
            <Calculator className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Calculators</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Online Calculators
          </h1>
          <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8] max-w-2xl leading-relaxed">
            Free, step-by-step calculators designed for quick answers in everyday situations, from splitting dinner checks and calculating sales discounts to health metrics and academic math.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#64748B] dark:text-[#94A3B8]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search calculators..."
            aria-label="Search calculators"
            className="w-full rounded-xl border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-4 text-sm text-[#0F172A] shadow-2xs placeholder:text-[#64748B] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8] dark:focus:border-[#06B6D4] transition"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-xs'
                : 'bg-slate-100 text-[#64748B] hover:text-[#0F172A] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCalculators.map((calc) => (
          <div
            key={calc.id}
            className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#06B6D4]/50 transition"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#06B6D4]">
                  {calc.category}
                </span>
              </div>
              <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                <Link
                  to={`/calculators/${calc.slug}`}
                  className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition"
                >
                  {calc.title}
                </Link>
              </h2>
              <p className="mt-2 text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                {calc.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#334155] flex items-center justify-between">
              <Link
                to={`/calculators/${calc.slug}`}
                className="text-xs font-semibold text-[#2563EB] hover:underline dark:text-[#06B6D4] inline-flex items-center gap-1 group"
              >
                <span>Open Calculator</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
