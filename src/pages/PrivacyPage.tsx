import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PrivacyPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Privacy Policy', url: '/privacy' }];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="Privacy Policy — EasyConverter"
        description="EasyConverter Privacy Policy: Learn how we process calculations in your browser and respect your personal privacy without forced accounts or server-side data harvesting."
        canonicalPath="/privacy"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          Privacy Policy
        </h1>
        <p className="mt-1 text-xs text-[#64748B] dark:text-[#94A3B8]">
          Last Updated: March 2025
        </p>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs dark:border-[#334155] dark:bg-[#1E293B] space-y-6 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">1. Introduction</h2>
          <p>
            EasyConverter (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Service&rdquo;) is committed to protecting your privacy. This Privacy Policy outlines how we treat information when you visit our website, utilize our calculators, and access our unit converters.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">2. In-Browser Calculation Processing</h2>
          <p>
            All mathematical calculations, conversions, unit transformations, and calculator inputs execute locally and client-side within your web browser. EasyConverter does not transmit your entered values (such as currency amounts, personal weight, travel distances, or numbers) to external servers, nor do we store them in a central user database.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">3. Local Storage Usage</h2>
          <p>
            We utilize browser local storage (<code className="rounded bg-slate-100 px-1 py-0.5 text-xs font-mono dark:bg-[#0F172A] dark:text-[#06B6D4]">localStorage</code>) solely to enhance your user experience:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm pl-2">
            <li>Remembering your preferred visual theme (Light or Dark mode).</li>
            <li>Storing your bookmarked favorite converters and calculators on your device.</li>
            <li>Storing a short list of your recent conversions locally for quick reference.</li>
            <li>Remembering your acknowledgement of the cookie/privacy notice.</li>
          </ul>
          <p className="text-sm">
            You may clear this data at any time via your browser settings without affecting the core functionality of the website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">4. Third-Party Advertising &amp; Analytics</h2>
          <p>
            We may partner with third-party advertising networks, including Google AdSense, to display non-intrusive advertisements that help fund our free service. Google and other advertising partners may use cookies (such as the DoubleClick cookie) to serve ads based on prior visits to this or other websites on the Internet.
          </p>
          <p className="text-sm">
            Users may opt out of personalized advertising by visiting Google&apos;s Ads Settings (<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] dark:text-[#06B6D4] underline">https://adssettings.google.com</a>) or via the Network Advertising Initiative opt-out page.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">5. Children&apos;s Online Privacy</h2>
          <p>
            Our Service is intended for general educational, academic, and practical utility purposes and does not knowingly collect any personally identifiable information from children under the age of 13.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">6. Updates to This Policy</h2>
          <p>
            We may revise this Privacy Policy periodically to reflect updates in legal standards or service features. Any changes will be posted on this page with an updated modification date.
          </p>
        </section>
      </div>
    </div>
  );
};
