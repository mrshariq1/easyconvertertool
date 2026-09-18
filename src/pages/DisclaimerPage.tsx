import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const DisclaimerPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Disclaimer', url: '/disclaimer' }];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="Disclaimer — EasyConverter"
        description="Important legal, medical, and financial disclaimers for calculations, conversions, and estimates provided on EasyConverter."
        canonicalPath="/disclaimer"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          General &amp; Legal Disclaimer
        </h1>
        <p className="mt-1 text-xs text-[#64748B] dark:text-[#94A3B8]">Last Updated: March 2025</p>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs dark:border-[#334155] dark:bg-[#1E293B] space-y-6 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">1. General Information Disclaimer</h2>
          <p>
            The unit converters, calculators, guides, and tables on EasyConverter are intended exclusively for general educational, academic, and practical informational purposes. Although our mathematical algorithms implement standard SI and NIST conversion factors, we cannot guarantee absolute suitability for mission-critical engineering, aviation, industrial manufacturing, or high-stakes structural applications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">2. Health &amp; Medical Calculations (e.g. BMI)</h2>
          <p>
            Calculators relating to health metrics (such as Body Mass Index / BMI) provide basic statistical screenings based on standardized World Health Organization (WHO) categories. They do not constitute medical diagnoses, clinical evaluations, or personalized health advice. Always consult a licensed healthcare professional or physician regarding weight management, nutrition, or medical decisions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">3. Financial &amp; Tax Estimates (e.g. Discounts &amp; Tips)</h2>
          <p>
            Financial tools (such as discount calculations, sales tax estimators, and bill splitters) generate estimated mathematical figures. They do not constitute professional accounting, financial, or tax advice. Actual sales taxes and loan amortization schedules may differ based on local jurisdictions and specific contractual terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">4. External Links</h2>
          <p>
            EasyConverter may occasionally provide links to external reference resources or official standards bodies. We hold no responsibility for the content, privacy policies, or practices of third-party websites.
          </p>
        </section>
      </div>
    </div>
  );
};
