import React from 'react';
import { Link } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E2E8F0] bg-white dark:border-[#334155] dark:bg-[#0F172A] text-[#64748B] dark:text-[#94A3B8] transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-[#0F172A] dark:text-[#F8FAFC] group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-xs group-hover:scale-105 transition-transform">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 10h11l-3-3" />
                  <path d="M17 14H6l3 3" />
                </svg>
              </div>
              <span className="font-bold text-lg text-[#0F172A] dark:text-[#F8FAFC]">
                Easy<span className="text-[#2563EB] dark:text-[#06B6D4]">Converter</span>
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
              Fast, free, and accurate online unit converters and calculators for students, professionals, travelers, and everyday math.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#16A34A]" />
              <span>In-browser processing • 100% Free</span>
            </div>
          </div>

          {/* Converters */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
              Unit Converters
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li><Link to="/converters/length" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Length & Distance</Link></li>
              <li><Link to="/converters/weight" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Weight & Mass</Link></li>
              <li><Link to="/converters/temperature" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Temperature (°C, °F, K)</Link></li>
              <li><Link to="/converters/area" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Area & Land</Link></li>
              <li><Link to="/converters/volume" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Volume & Liquid</Link></li>
              <li><Link to="/converters/data" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Digital Data & Storage</Link></li>
              <li><Link to="/converters/speed" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Speed & Velocity</Link></li>
              <li><Link to="/converters" className="font-semibold text-[#2563EB] dark:text-[#06B6D4] hover:underline">View All 17 Categories →</Link></li>
            </ul>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
              Calculators
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li><Link to="/calculators/percentage" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Percentage Calculator</Link></li>
              <li><Link to="/calculators/discount" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Discount & Sale Price</Link></li>
              <li><Link to="/calculators/age" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Chronological Age</Link></li>
              <li><Link to="/calculators/bmi" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">BMI Calculator</Link></li>
              <li><Link to="/calculators/tip-and-split-bill" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Tip & Split Bill</Link></li>
              <li><Link to="/calculators/ratio" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Ratio & Proportion</Link></li>
              <li><Link to="/calculators/average" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Average (Mean/Median)</Link></li>
              <li><Link to="/calculators" className="font-semibold text-[#2563EB] dark:text-[#06B6D4] hover:underline">All Calculators →</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li><Link to="/guides" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Educational Guides</Link></li>
              <li><Link to="/guides/how-unit-conversion-works" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">How Unit Conversion Works</Link></li>
              <li><Link to="/guides/metric-vs-imperial-units" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Metric vs Imperial Systems</Link></li>
              <li><Link to="/guides/celsius-vs-fahrenheit" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Celsius vs Fahrenheit</Link></li>
              <li><Link to="/guides/kb-vs-kib-vs-mb-vs-mib" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Decimal vs Binary Data</Link></li>
              <li><Link to="/kg-to-lbs" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">KG to LBS Table</Link></li>
              <li><Link to="/celsius-to-fahrenheit" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">°C to °F Table</Link></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
              About &amp; Legal
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">About EasyConverter</Link></li>
              <li><Link to="/contact" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-6 text-center text-xs text-[#64748B] dark:border-[#334155] dark:text-[#94A3B8]">
          <p>© {currentYear} EasyConverter. All rights reserved. Calculations are provided for educational and informational convenience.</p>
        </div>
      </div>
    </footer>
  );
};
