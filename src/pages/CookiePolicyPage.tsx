import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const CookiePolicyPage: React.FC = () => {
  const breadcrumbs = [{ name: 'Cookie Policy', url: '/cookie-policy' }];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="Cookie Policy — EasyConverter"
        description="Learn how EasyConverter uses cookies, local browser storage, and third-party advertising cookies."
        canonicalPath="/cookie-policy"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          Cookie &amp; Local Storage Policy
        </h1>
        <p className="mt-1 text-xs text-[#64748B] dark:text-[#94A3B8]">Last Updated: March 2025</p>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs dark:border-[#334155] dark:bg-[#1E293B] space-y-6 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">1. What Are Cookies and Local Storage?</h2>
          <p>
            Cookies and HTML5 local storage are small text files or key-value data structures placed on your device by your web browser when you visit a website. They allow websites to remember user preferences, active sessions, and settings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">2. How EasyConverter Uses Local Storage</h2>
          <p>
            EasyConverter relies primarily on browser <code className="rounded bg-slate-100 px-1 py-0.5 text-xs font-mono dark:bg-[#0F172A] dark:text-[#06B6D4]">localStorage</code> for essential client-side functionality rather than traditional tracking cookies:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm pl-2">
            <li><strong>Theme Preference:</strong> Storing whether you selected Light Mode or Dark Mode.</li>
            <li><strong>Favorites:</strong> Saving your pinned converter shortcuts for quick access.</li>
            <li><strong>Recent Conversions:</strong> Remembering your last few calculation pairs on your local machine.</li>
            <li><strong>Notice Dismissal:</strong> Remembering that you have acknowledged our privacy notice.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">3. Third-Party Advertising Cookies</h2>
          <p>
            When advertising partners such as Google AdSense are active on the site, third-party cookies may be set to deliver relevant advertisements and measure ad performance. You can control or disable third-party cookies at any time through your individual browser privacy settings or by visiting Google&apos;s Ad Settings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">4. Managing Your Preferences</h2>
          <p>
            Most modern web browsers allow you to view, manage, and delete stored cookies and local storage keys via the browser developer tools or settings menu. Deleting your local storage simply resets your theme and bookmarked favorite tools back to their default state.
          </p>
        </section>
      </div>
    </div>
  );
};
