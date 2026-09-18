import React from 'react';
import { DIRECT_CONVERSIONS } from '../data/seoPages';
import { CONVERTER_CATEGORIES } from '../data/conversions';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { UniversalConverter } from '../components/UniversalConverter';
import { ConversionTable } from '../components/ConversionTable';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdSlot } from '../components/AdSlot';
import { Link, useRouter } from '../context/RouterContext';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

interface DirectConversionPageProps {
  slug: string;
}

export const DirectConversionPage: React.FC<DirectConversionPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const pageData = DIRECT_CONVERSIONS.find((p) => p.slug === slug);

  if (!pageData) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Converter Page Not Found</h1>
        <p className="mt-2 text-sm text-slate-500">The requested conversion pair does not exist.</p>
        <Link to="/converters" className="mt-4 inline-block font-semibold text-blue-600 hover:underline">
          Browse all unit converters
        </Link>
      </div>
    );
  }

  const category = CONVERTER_CATEGORIES.find((c) => c.id === pageData.categoryId);
  const fromUnit = category?.units.find((u) => u.id === pageData.fromUnitId);
  const toUnit = category?.units.find((u) => u.id === pageData.toUnitId);

  if (!category || !fromUnit || !toUnit) {
    return null;
  }

  const breadcrumbs = [
    { name: 'Converters', url: '/converters' },
    { name: category.name, url: `/converters/${category.id}` },
    { name: `${fromUnit.symbol} to ${toUnit.symbol}`, url: `/${pageData.slug}` }
  ];

  // Look up reverse slug if available
  const reverseItem = DIRECT_CONVERSIONS.find(
    (p) => p.categoryId === pageData.categoryId && p.fromUnitId === pageData.toUnitId && p.toUnitId === pageData.fromUnitId
  );
  const reverseSlug = reverseItem?.slug;

  const handleUnitPairChange = (newFrom: string, newTo: string) => {
    const target = DIRECT_CONVERSIONS.find(
      (p) => p.categoryId === pageData.categoryId && p.fromUnitId === newFrom && p.toUnitId === newTo
    );
    if (target) {
      navigate(`/${target.slug}`);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title={pageData.title}
        description={pageData.metaDescription}
        canonicalPath={`/${pageData.slug}`}
        breadcrumbs={breadcrumbs}
        faqs={pageData.faqs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      {/* Header */}
      <div className="mt-3 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#06B6D4] mb-1.5">
          <span>{category.name} Conversion</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          {pageData.h1}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-3xl">
          Convert {fromUnit.plural} to {toUnit.plural} ({fromUnit.symbol} to {toUnit.symbol}) instantly with our online conversion calculator. View the exact mathematical formula, manual calculation steps, and reference table.
        </p>
      </div>

      {/* Interactive Converter Pre-filled */}
      <UniversalConverter
        category={category}
        initialFromUnitId={pageData.fromUnitId}
        initialToUnitId={pageData.toUnitId}
        initialValue="1"
        onUnitChange={handleUnitPairChange}
      />

      {/* Reverse Conversion Button / Shortcut */}
      {reverseSlug && (
        <div className="mt-4 flex justify-end">
          <Link
            to={`/${reverseSlug}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-semibold text-[#0F172A] hover:border-[#2563EB]/40 hover:bg-blue-50/60 hover:text-[#2563EB] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] dark:hover:border-[#06B6D4]/50 dark:hover:text-[#06B6D4] transition shadow-2xs"
          >
            <ArrowLeftRight className="h-3.5 w-3.5" />
            <span>Switch: Convert {toUnit.name} to {fromUnit.name} instead</span>
          </Link>
        </div>
      )}

      <AdSlot position="in_content" className="my-8" />

      {/* Formula & Calculation Box */}
      <section className="mt-10 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
          {fromUnit.name} to {toUnit.name} Formula
        </h2>
        <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mb-4">
          The standard conversion formula to convert {fromUnit.plural.toLowerCase()} to {toUnit.plural.toLowerCase()} is:
        </p>
        <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-4 font-mono text-sm sm:text-base font-semibold text-[#2563EB] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#06B6D4]">
          {pageData.formula}
        </div>

        {pageData.accuracyNote && (
          <p className="mt-3 text-xs text-[#64748B] dark:text-[#94A3B8] italic">
            Accuracy note: {pageData.accuracyNote}
          </p>
        )}

        {/* Step by step manual conversion */}
        {pageData.manualSteps && pageData.manualSteps.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC] uppercase tracking-wider mb-3">
              How to Calculate Manually
            </h3>
            <ol className="space-y-2.5 text-sm text-[#64748B] dark:text-[#94A3B8] list-decimal list-inside">
              {pageData.manualSteps.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="text-[#0F172A] dark:text-[#F8FAFC] font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Real Example Calculations */}
        {pageData.examples && pageData.examples.length > 0 && (
          <div className="mt-6 pt-5 border-t border-[#E2E8F0] dark:border-[#334155]">
            <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC] uppercase tracking-wider mb-3">
              Common Calculation Examples
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs sm:text-sm">
              {pageData.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-slate-50 p-3 border border-[#E2E8F0] dark:bg-[#0F172A] dark:border-[#334155] text-[#0F172A] dark:text-[#F8FAFC]"
                >
                  <div className="font-bold">
                    {ex.input} {fromUnit.symbol} = {ex.output}
                  </div>
                  {ex.note && <div className="text-[11px] font-sans text-[#64748B] dark:text-[#94A3B8] mt-0.5">{ex.note}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Dynamic Conversion Table */}
      <ConversionTable
        categoryId={category.id}
        fromUnit={fromUnit}
        toUnit={toUnit}
        values={pageData.commonValues}
        precision={4}
      />

      {/* Practical Uses & Common Mistakes */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {pageData.practicalUses && pageData.practicalUses.length > 0 && (
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
            <div className="flex items-center gap-2 mb-3 text-[#16A34A] dark:text-green-400">
              <CheckCircle2 className="h-5 w-5" />
              <h3 className="font-bold text-base text-[#0F172A] dark:text-[#F8FAFC]">
                Everyday Use Cases
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] list-disc list-inside">
              {pageData.practicalUses.map((use, idx) => (
                <li key={idx}>{use}</li>
              ))}
            </ul>
          </div>
        )}

        {pageData.commonMistakes && pageData.commonMistakes.length > 0 && (
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
            <div className="flex items-center gap-2 mb-3 text-[#DC2626] dark:text-red-400">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="font-bold text-base text-[#0F172A] dark:text-[#F8FAFC]">
                Common Mistakes to Avoid
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] list-disc list-inside">
              {pageData.commonMistakes.map((mistake, idx) => (
                <li key={idx}>{mistake}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Related Conversions */}
      {pageData.relatedSlugs && pageData.relatedSlugs.length > 0 && (
        <section className="mt-10 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
            Related Conversions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pageData.relatedSlugs.map((relSlug) => {
              const relPage = DIRECT_CONVERSIONS.find((p) => p.slug === relSlug);
              return (
                <Link
                  key={relSlug}
                  to={`/${relSlug}`}
                  className="flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-slate-50 p-3 text-xs sm:text-sm font-semibold text-[#0F172A] hover:border-[#2563EB]/40 hover:bg-blue-50/60 hover:text-[#2563EB] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:hover:border-[#06B6D4]/50 dark:hover:text-[#06B6D4] transition"
                >
                  <span>{relPage ? relPage.h1.replace(' Converter', '') : relSlug.toUpperCase()}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#64748B] dark:text-[#94A3B8]" />
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* FAQ Accordion */}
      <FAQAccordion items={pageData.faqs} title={`Frequently Asked Questions (${fromUnit.symbol} to ${toUnit.symbol})`} />
    </div>
  );
};
