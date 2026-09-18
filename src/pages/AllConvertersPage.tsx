import React, { useState, useMemo } from 'react';
import { CONVERTER_CATEGORIES } from '../data/conversions';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from '../context/RouterContext';
import { Search, Layers, ArrowRight } from 'lucide-react';

export const AllConvertersPage: React.FC = () => {
  const [filter, setFilter] = useState('');

  const breadcrumbs = [{ name: 'Converters', url: '/converters' }];

  const filteredCategories = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return CONVERTER_CATEGORIES;
    return CONVERTER_CATEGORIES.filter(
      (cat) =>
        cat.name.toLowerCase().includes(q) ||
        cat.tagline.toLowerCase().includes(q) ||
        cat.units.some((u) => u.name.toLowerCase().includes(q) || u.symbol.toLowerCase().includes(q))
    );
  }, [filter]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="All Unit Converters — Free Online Measurement Tools | EasyConverter"
        description="Browse all 17 unit converter categories on EasyConverter: Length, Weight, Temperature, Area, Volume, Speed, Time, Data, Energy, and more."
        canonicalPath="/converters"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-3 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#2563EB] dark:text-[#06B6D4] mb-2">
            <Layers className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            All Unit Converters
          </h1>
          <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8] max-w-2xl">
            Choose from 17 measurement categories with hundreds of standard units across metric, imperial, and scientific measurement systems.
          </p>
        </div>

        {/* Filter input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#64748B] dark:text-[#94A3B8]" />
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter categories or units..."
            aria-label="Filter converter categories"
            className="w-full rounded-xl border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-4 text-sm text-[#0F172A] shadow-2xs placeholder:text-[#64748B] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8] dark:focus:border-[#06B6D4] transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#06B6D4]/50 transition"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Link
                  to={`/converters/${cat.id}`}
                  className="text-lg font-bold text-[#0F172A] hover:text-[#2563EB] dark:text-[#F8FAFC] dark:hover:text-[#06B6D4] transition"
                >
                  {cat.name}
                </Link>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-[#2563EB] dark:bg-[#0F172A] dark:text-[#06B6D4]">
                  {cat.units.length} units
                </span>
              </div>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-4">
                {cat.tagline}
              </p>

              {/* Units Preview */}
              <div className="flex flex-wrap gap-1 mb-4">
                {cat.units.slice(0, 5).map((u) => (
                  <span
                    key={u.id}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-[#0F172A] dark:bg-[#0F172A] dark:text-[#F8FAFC]"
                  >
                    {u.symbol}
                  </span>
                ))}
                {cat.units.length > 5 && (
                  <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8] self-center">
                    +{cat.units.length - 5} more
                  </span>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#334155] flex items-center justify-between">
              <Link
                to={`/converters/${cat.id}`}
                className="text-xs font-semibold text-[#2563EB] hover:underline dark:text-[#06B6D4] inline-flex items-center gap-1 group"
              >
                <span>Open {cat.name} Converter</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
