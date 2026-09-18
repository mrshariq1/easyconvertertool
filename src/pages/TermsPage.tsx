import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const TermsPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Terms of Service', url: '/terms' }];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="Terms of Service — EasyConverter"
        description="Review the EasyConverter Terms of Service regarding acceptable use, intellectual property, and limitations of liability."
        canonicalPath="/terms"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          Terms of Service
        </h1>
        <p className="mt-1 text-xs text-[#64748B] dark:text-[#94A3B8]">Last Updated: March 2025</p>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs dark:border-[#334155] dark:bg-[#1E293B] space-y-6 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">1. Agreement to Terms</h2>
          <p>
            By accessing or using EasyConverter, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">2. Use License &amp; Permitted Use</h2>
          <p>
            Permission is granted to freely use EasyConverter&apos;s online converters, calculators, guides, and tables for personal, educational, research, and non-commercial business reference. You may not systematically scrape, harvest, or republish mass programmatic extracts of our proprietary databases without explicit written authorization.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">3. Accuracy of Calculations &amp; Disclaimer</h2>
          <p>
            While every reasonable effort is made to guarantee the accuracy and precision of formulas and calculations, all materials and outputs on EasyConverter are provided strictly on an &ldquo;as is&rdquo; basis without warranties of any kind, express or implied.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">4. Limitation of Liability</h2>
          <p>
            In no event shall EasyConverter or its contributors be liable for any damages (including, without limitation, damages for loss of profit, business interruption, or computational errors in engineering, medical, legal, or construction contexts) arising out of the use or inability to use the tools on this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with standard international web conventions and applicable commercial laws.
          </p>
        </section>
      </div>
    </div>
  );
};
