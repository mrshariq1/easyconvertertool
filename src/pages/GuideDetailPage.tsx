import React from 'react';
import { GUIDES } from '../data/guides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdSlot } from '../components/AdSlot';
import { Link } from '../context/RouterContext';
import { Clock, Calendar, ArrowRight, Lightbulb } from 'lucide-react';

interface GuideDetailPageProps {
  slug: string;
}

export const GuideDetailPage: React.FC<GuideDetailPageProps> = ({ slug }) => {
  const guide = GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">Guide Not Found</h1>
        <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8]">The requested guide could not be located.</p>
        <Link to="/guides" className="mt-4 inline-block font-semibold text-[#2563EB] dark:text-[#06B6D4] hover:underline">
          Browse all guides
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Guides', url: '/guides' },
    { name: guide.title, url: `/guides/${guide.slug}` }
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title={`${guide.title} — EasyConverter Guide`}
        description={guide.description}
        canonicalPath={`/guides/${guide.slug}`}
        breadcrumbs={breadcrumbs}
        faqs={guide.faqs}
        article={{
          publishedTime: guide.publishedDate,
          author: 'EasyConverter Editorial Team',
          headline: guide.title
        }}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <article className="mt-4">
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B] dark:text-[#94A3B8] mb-3">
          <span className="font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#06B6D4]">
            {guide.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {guide.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {guide.publishedDate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
          {guide.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-medium">
          {guide.summary}
        </p>

        <AdSlot position="in_content" className="my-8" />

        {/* Article Body Content */}
        <div className="mt-8 space-y-8 text-[#0F172A] dark:text-[#F8FAFC] leading-relaxed">
          {guide.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                {section.title}
              </h2>
              <div className="text-sm sm:text-base leading-relaxed text-[#64748B] dark:text-[#94A3B8] whitespace-pre-line">
                {section.content}
              </div>
              {section.highlightBox && (
                <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-4 text-xs sm:text-sm font-medium text-[#2563EB] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#06B6D4]">
                  {section.highlightBox}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Practical Takeaway / Callout */}
        <div className="mt-10 rounded-2xl border border-blue-200/80 bg-blue-50/60 p-6 dark:border-[#334155] dark:bg-[#0F172A]">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-[#2563EB] dark:text-[#06B6D4] shrink-0 mt-0.5" />
            <div className="text-sm">
              <h3 className="font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                Key Takeaway
              </h3>
              <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                When converting measurements in science, cooking, or engineering, always verify the reference unit definition (e.g. US vs Imperial gallons, or binary GiB vs decimal GB). Use EasyConverter&apos;s transparent formula cards whenever high precision is critical.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools to this Guide */}
        {guide.relatedTools && guide.relatedTools.length > 0 && (
          <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
            <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-3">
              Tools Related to this Topic
            </h3>
            <div className="flex flex-wrap gap-2">
              {guide.relatedTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-slate-50 px-3.5 py-2 text-xs font-semibold text-[#0F172A] hover:border-[#2563EB]/40 hover:bg-blue-50/50 hover:text-[#2563EB] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:hover:bg-[#1E293B] dark:hover:text-[#06B6D4] transition"
                >
                  <span>{tool.label}</span>
                  <ArrowRight className="h-3 w-3 text-[#64748B] dark:text-[#94A3B8]" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        <FAQAccordion items={guide.faqs} title="Frequently Asked Questions" />
      </article>
    </div>
  );
};
