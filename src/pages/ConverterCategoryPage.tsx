import React from 'react';
import { CONVERTER_CATEGORIES } from '../data/conversions';
import { UniversalConverter } from '../components/UniversalConverter';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { AdSlot } from '../components/AdSlot';
import { Link, useRouter } from '../context/RouterContext';
import { Layers, ArrowRight } from 'lucide-react';

interface ConverterCategoryPageProps {
  categoryId: string;
}

export const ConverterCategoryPage: React.FC<ConverterCategoryPageProps> = ({ categoryId }) => {
  const { navigate } = useRouter();
  const category = CONVERTER_CATEGORIES.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Category Not Found</h1>
        <p className="mt-2 text-sm text-slate-500">The requested unit category does not exist.</p>
        <Link to="/converters" className="mt-4 inline-block font-semibold text-blue-600 hover:underline">
          Browse all categories
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Converters', url: '/converters' },
    { name: category.name, url: `/converters/${category.id}` }
  ];

  const handleUnitPairChange = (fromId: string, toId: string) => {
    // Check if there is a dedicated direct SEO page for this pair
    const directPair = category.popularPairs.find((p) => p.from === fromId && p.to === toId);
    if (directPair) {
      navigate(`/${directPair.slug}`);
    }
  };

  const otherCategories = CONVERTER_CATEGORIES.filter((c) => c.id !== category.id).slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title={`${category.name} Converter — Fast & Free Online Conversion | EasyConverter`}
        description={category.description}
        canonicalPath={`/converters/${category.id}`}
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-3 mb-8">
        <div className="flex items-center gap-2.5 text-[#2563EB] dark:text-[#06B6D4] mb-2">
          <Layers className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Unit Converter</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          {category.name} Converter
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Main Converter Engine */}
      <UniversalConverter
        category={category}
        initialValue="1"
        onUnitChange={handleUnitPairChange}
      />

      <AdSlot position="in_content" className="my-8" />

      {/* Popular Conversions in this Category */}
      {category.popularPairs && category.popularPairs.length > 0 && (
        <section className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
            Popular {category.name} Conversions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {category.popularPairs.map((pair) => (
              <Link
                key={pair.slug}
                to={`/${pair.slug}`}
                className="flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-slate-50/70 p-3 text-xs sm:text-sm font-semibold text-[#0F172A] hover:border-[#2563EB]/40 hover:bg-blue-50/60 hover:text-[#2563EB] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:hover:border-[#06B6D4]/50 dark:hover:text-[#06B6D4] transition"
              >
                <span>{pair.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#64748B] dark:text-[#94A3B8]" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Supported Units Breakdown */}
      <section className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
        <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
          Supported {category.name} Units
        </h2>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mb-4">
          All supported measurement units with official symbols and measurement systems:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {category.units.map((unit) => (
            <div
              key={unit.id}
              className="rounded-xl border border-[#E2E8F0] bg-slate-50/50 p-3 dark:border-[#334155] dark:bg-[#0F172A]"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                  {unit.name}
                </span>
                <span className="rounded-md bg-slate-200/80 px-2 py-0.5 font-mono text-xs text-[#0F172A] dark:bg-[#1E293B] dark:text-[#F8FAFC]">
                  {unit.symbol}
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between text-xs text-[#64748B] dark:text-[#94A3B8]">
                <span className="capitalize">{unit.system.replace('_', ' ')}</span>
                {unit.notes && <span className="text-[11px] truncate max-w-[140px]">{unit.notes}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Categories */}
      <section className="mt-12">
        <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
          Related Converter Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {otherCategories.map((other) => (
            <Link
              key={other.id}
              to={`/converters/${other.id}`}
              className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-2xs hover:border-[#2563EB]/40 dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#06B6D4]/50 transition"
            >
              <span className="block font-bold text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {other.name}
              </span>
              <span className="block text-xs text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                {other.units.length} units
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
