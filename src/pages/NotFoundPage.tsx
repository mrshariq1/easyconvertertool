import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { GlobalSearch } from '../components/GlobalSearch';
import { Link } from '../context/RouterContext';
import { HelpCircle, Home } from 'lucide-react';
import { POPULAR_CHIPS } from '../data/conversions';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center" id="main-content">
      <SEOHead
        title="Page Not Found (404) — EasyConverter"
        description="The conversion tool or page you requested could not be found. Search our full directory of online converters and calculators."
        canonicalPath="/404"
      />

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] dark:bg-[#1E293B] dark:text-[#06B6D4] border border-blue-100 dark:border-[#334155]">
        <HelpCircle className="h-8 w-8" />
      </div>

      <h1 className="mt-6 text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
        Tool or Page Not Found
      </h1>
      <p className="mt-2 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] max-w-md mx-auto">
        The conversion tool, calculator, or guide you are looking for might have moved or the address may contain a typo.
      </p>

      <div className="mt-8 mx-auto max-w-md">
        <GlobalSearch placeholder="Search all converters & calculators..." />
      </div>

      <div className="mt-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] block mb-3">
          Or jump directly to a popular tool:
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {POPULAR_CHIPS.slice(0, 6).map((chip) => (
            <Link
              key={chip.path}
              to={chip.path}
              className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] hover:border-[#2563EB]/40 hover:bg-blue-50/50 hover:text-[#2563EB] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] dark:hover:border-[#06B6D4]/40 dark:hover:text-[#06B6D4] transition"
            >
              {chip.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition"
        >
          <Home className="h-4 w-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
