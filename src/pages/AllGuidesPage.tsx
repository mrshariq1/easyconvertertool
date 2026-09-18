import React, { useState, useMemo } from 'react';
import { GUIDES } from '../data/guides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from '../context/RouterContext';
import { BookOpen, ArrowRight, Search, Clock } from 'lucide-react';

export const AllGuidesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const breadcrumbs = [{ name: 'Guides', url: '/guides' }];

  const filteredGuides = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return GUIDES;
    return GUIDES.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="Unit Conversion & Measurement Guides — EasyConverter"
        description="Explore clear, step-by-step educational guides explaining unit conversions, metric vs imperial standards, temperature formulas, and data storage definitions."
        canonicalPath="/guides"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-3 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#2563EB] dark:text-[#06B6D4] mb-2">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Educational Resources</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Conversion &amp; Measurement Guides
          </h1>
          <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8] max-w-2xl leading-relaxed">
            In-depth, practical articles explaining how international measurement systems work, how to calculate conversions by hand, and how to avoid common real-world errors.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#64748B] dark:text-[#94A3B8]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search guides..."
            aria-label="Search guides"
            className="w-full rounded-xl border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-4 text-sm text-[#0F172A] shadow-2xs placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8]/60 dark:focus:border-[#06B6D4] transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <article
            key={guide.slug}
            className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#06B6D4]/40 transition"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2 text-xs font-semibold text-[#2563EB] dark:text-[#06B6D4] uppercase tracking-wider">
                <span>{guide.category}</span>
                <span className="flex items-center gap-1 text-[#64748B] dark:text-[#94A3B8]">
                  <Clock className="h-3 w-3" />
                  {guide.readTime}
                </span>
              </div>
              <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                <Link
                  to={`/guides/${guide.slug}`}
                  className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition"
                >
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-2 text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                {guide.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#334155] flex items-center justify-between">
              <Link
                to={`/guides/${guide.slug}`}
                className="text-xs font-semibold text-[#2563EB] hover:underline dark:text-[#06B6D4] inline-flex items-center gap-1"
              >
                <span>Read article</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
