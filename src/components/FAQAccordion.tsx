import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  className = ''
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  if (!items || items.length === 0) return null;

  return (
    <section aria-labelledby="faq-heading" className={`mt-10 mb-6 ${className}`}>
      <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] mb-4">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          const itemKey = `faq-${idx}`;
          return (
            <div
              key={itemKey}
              className="rounded-xl border border-[#E2E8F0] bg-white shadow-xs transition-all dark:border-[#334155] dark:bg-[#1E293B] overflow-hidden"
            >
              <button
                type="button"
                id={`btn-${itemKey}`}
                aria-expanded={isOpen}
                aria-controls={`panel-${itemKey}`}
                onClick={() => toggleIndex(idx)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left font-medium text-[#0F172A] transition hover:bg-slate-50 dark:text-[#F8FAFC] dark:hover:bg-[#0F172A]/50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span className="text-sm sm:text-base leading-snug">{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#64748B] transition-transform duration-200 dark:text-[#94A3B8] ${
                    isOpen ? 'rotate-180 text-[#2563EB] dark:text-[#06B6D4]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div
                  id={`panel-${itemKey}`}
                  role="region"
                  aria-labelledby={`btn-${itemKey}`}
                  className="border-t border-[#E2E8F0] px-4 py-3.5 text-sm text-[#64748B] leading-relaxed dark:border-[#334155] dark:text-[#94A3B8]"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
