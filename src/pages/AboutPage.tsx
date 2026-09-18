import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from '../context/RouterContext';
import { Shield, Cpu } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const breadcrumbs = [{ name: 'About', url: '/about' }];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="About EasyConverter — Our Mission, Accuracy & Standards"
        description="Learn about EasyConverter: our mission to provide fast, privacy-focused, accessible, and mathematically transparent unit converters and calculators for everyone."
        canonicalPath="/about"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          About EasyConverter
        </h1>
        <p className="mt-2 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
          Fast, transparent, and accurate measurement tools engineered for students, engineers, travelers, and everyday math.
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-[#0F172A] dark:text-[#F8FAFC] leading-relaxed">
        <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs dark:border-[#334155] dark:bg-[#1E293B] space-y-4">
          <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
            Our Mission
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8]">
            The metric system, the imperial system, US customary units, astronomical measurements, computing bytes: the world operates on hundreds of different measurement units. Too many conversion tools online are cluttered with pop-up ads, confusing inputs, broken rounding, or forced account logins.
          </p>
          <p className="text-[#64748B] dark:text-[#94A3B8]">
            EasyConverter was created with a clear objective: provide a lightning-fast, beautifully designed, and mathematically rigorous platform where anyone can calculate conversions instantly—with complete formula transparency and respect for user privacy.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
            <div className="flex items-center gap-2 mb-3 text-[#2563EB] dark:text-[#06B6D4] font-bold">
              <Cpu className="h-5 w-5" />
              <h3 className="text-base text-[#0F172A] dark:text-[#F8FAFC]">Precision &amp; Accuracy</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Every unit conversion algorithm on EasyConverter is derived from international standards published by the International Bureau of Weights and Measures (BIPM), the National Institute of Standards and Technology (NIST), and ISO/IEC data standards.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
            <div className="flex items-center gap-2 mb-3 text-[#06B6D4] dark:text-[#06B6D4] font-bold">
              <Shield className="h-5 w-5" />
              <h3 className="text-base text-[#0F172A] dark:text-[#F8FAFC]">Client-Side Privacy</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              We process your numbers right inside your browser. No server logging, no tracking of personal figures, and no mandatory registration. Your work stays private on your own device.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs dark:border-[#334155] dark:bg-[#1E293B] space-y-4">
          <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
            Editorial &amp; Content Standards
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8]">
            All conversion guides and explanation articles on EasyConverter are written to educate and assist. We aim to break down complex scientific concepts—such as the historical divergence of the imperial and metric systems, or the distinction between binary gibibytes and decimal gigabytes—into plain, accessible language with verifiable formulas.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
            >
              <span>Have feedback or suggestions? Contact our team</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
