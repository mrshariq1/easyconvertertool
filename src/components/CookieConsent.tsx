import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { Link } from '../context/RouterContext';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('ec_cookie_dismissed');
      if (!dismissed) {
        setVisible(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleDismiss = () => {
    try {
      localStorage.setItem('ec_cookie_dismissed', 'true');
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Local Storage Notice"
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-2xl rounded-2xl border border-[#E2E8F0] bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-[#334155] dark:bg-[#1E293B]/95 sm:p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] dark:bg-[#0F172A] dark:text-[#06B6D4]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
            <p className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Privacy &amp; Local Storage Notice
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
              EasyConverter executes calculations directly in your browser. We use local storage strictly to remember your light/dark theme, favorites, and recent conversions. No login is required.
            </p>
            <div className="mt-2 flex items-center gap-3">
              <Link to="/privacy" className="text-xs font-semibold text-[#2563EB] hover:underline dark:text-[#06B6D4]">
                Privacy Policy
              </Link>
              <span className="text-[#64748B]/40 dark:text-[#94A3B8]/40">•</span>
              <Link to="/cookie-policy" className="text-xs font-semibold text-[#2563EB] hover:underline dark:text-[#06B6D4]">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleDismiss}
            className="rounded-lg bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-700 hover:to-cyan-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition"
          >
            Got it
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss notice"
            className="p-1 text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
