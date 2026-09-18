import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X, ArrowRight, Calculator as CalcIcon, BookOpen, Layers } from 'lucide-react';
import { CONVERTER_CATEGORIES } from '../data/conversions';
import { DIRECT_CONVERSIONS } from '../data/seoPages';
import { CALCULATORS } from '../data/calculators';
import { GUIDES } from '../data/guides';
import { Link, useRouter } from '../context/RouterContext';

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  path: string;
  type: 'converter' | 'category' | 'calculator' | 'guide';
}

interface GlobalSearchProps {
  placeholder?: string;
  isHero?: boolean;
  className?: string;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  placeholder = 'Search converters, calculators & guides (e.g., kg to lbs, celsius, bmi)...',
  isHero = false,
  className = ''
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { navigate } = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = useMemo<SearchResultItem[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const items: SearchResultItem[] = [];

    // 1. Direct Conversions (e.g. kg to lbs, cm to inches)
    DIRECT_CONVERSIONS.forEach((dc) => {
      const match =
        dc.slug.toLowerCase().includes(q) ||
        dc.title.toLowerCase().includes(q) ||
        dc.h1.toLowerCase().includes(q) ||
        dc.fromUnitId.toLowerCase().includes(q) ||
        dc.toUnitId.toLowerCase().includes(q);
      if (match) {
        items.push({
          id: `dc-${dc.slug}`,
          title: dc.h1.replace(' Converter', ''),
          subtitle: `Direct Tool • ${dc.formula}`,
          path: `/${dc.slug}`,
          type: 'converter'
        });
      }
    });

    // 2. Categories & Units
    CONVERTER_CATEGORIES.forEach((cat) => {
      if (cat.name.toLowerCase().includes(q) || cat.id.toLowerCase().includes(q)) {
        items.push({
          id: `cat-${cat.id}`,
          title: `${cat.name} Converter`,
          subtitle: cat.tagline,
          path: `/converters/${cat.id}`,
          type: 'category'
        });
      }

      // Check unit names within category
      cat.units.forEach((u) => {
        if (
          (u.name.toLowerCase().includes(q) || u.symbol.toLowerCase() === q) &&
          !items.some((i) => i.id === `cat-${cat.id}`)
        ) {
          items.push({
            id: `unit-${cat.id}-${u.id}`,
            title: `${u.name} (${u.symbol}) — ${cat.name}`,
            subtitle: `Convert ${u.plural} to other ${cat.name.toLowerCase()} units`,
            path: `/converters/${cat.id}`,
            type: 'category'
          });
        }
      });
    });

    // 3. Calculators
    CALCULATORS.forEach((calc) => {
      if (
        calc.title.toLowerCase().includes(q) ||
        calc.shortTitle.toLowerCase().includes(q) ||
        calc.description.toLowerCase().includes(q)
      ) {
        items.push({
          id: `calc-${calc.id}`,
          title: calc.title,
          subtitle: `Calculator • ${calc.description.slice(0, 60)}...`,
          path: `/calculators/${calc.slug}`,
          type: 'calculator'
        });
      }
    });

    // 4. Guides
    GUIDES.forEach((guide) => {
      if (
        guide.title.toLowerCase().includes(q) ||
        guide.description.toLowerCase().includes(q) ||
        guide.category.toLowerCase().includes(q)
      ) {
        items.push({
          id: `guide-${guide.slug}`,
          title: guide.title,
          subtitle: `Guide • ${guide.readTime}`,
          path: `/guides/${guide.slug}`,
          type: 'guide'
        });
      }
    });

    return items.slice(0, 8);
  }, [query]);

  const handleSelect = (path: string) => {
    setIsOpen(false);
    setQuery('');
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      handleSelect(results[0].path);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search
          className={`absolute left-4 pointer-events-none text-[#64748B] dark:text-[#94A3B8] ${
            isHero ? 'h-5 w-5' : 'h-4 w-4'
          }`}
          aria-hidden="true"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Search for a converter or calculator"
          className={`w-full rounded-2xl border border-[#E2E8F0] bg-white pl-11 pr-10 text-[#0F172A] shadow-xs placeholder:text-[#64748B] focus:border-[#2563EB] focus:outline-hidden focus:ring-4 focus:ring-blue-500/15 dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8] dark:focus:border-[#06B6D4] dark:focus:ring-cyan-500/15 transition ${
            isHero ? 'py-4 text-base sm:text-lg' : 'py-2.5 text-sm'
          }`}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            aria-label="Clear search query"
            className="absolute right-3.5 p-1 text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-[420px] overflow-y-auto rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
          {results.length > 0 ? (
            <div className="space-y-1">
              {results.map((item) => {
                const Icon =
                  item.type === 'calculator'
                    ? CalcIcon
                    : item.type === 'guide'
                    ? BookOpen
                    : Layers;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.path)}
                    className="flex w-full items-center justify-between gap-3 rounded-xl p-3 text-left transition hover:bg-slate-50 dark:hover:bg-[#0F172A]/70 group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] dark:bg-[#0F172A] dark:text-[#06B6D4] group-hover:bg-[#2563EB] group-hover:text-white dark:group-hover:bg-[#06B6D4] dark:group-hover:text-[#0F172A] transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC] truncate">
                          {item.title}
                        </div>
                        <div className="text-xs text-[#64748B] dark:text-[#94A3B8] truncate">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#64748B] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-[#64748B] dark:text-[#94A3B8]">
              <p>No converters or calculators found matching &ldquo;{query}&rdquo;.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5 text-xs">
                <span className="text-[#64748B] dark:text-[#94A3B8]">Try:</span>
                <button
                  type="button"
                  onClick={() => setQuery('kg to lbs')}
                  className="text-[#2563EB] hover:underline dark:text-[#06B6D4]"
                >
                  kg to lbs
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setQuery('celsius')}
                  className="text-[#2563EB] hover:underline dark:text-[#06B6D4]"
                >
                  celsius
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setQuery('percentage')}
                  className="text-[#2563EB] hover:underline dark:text-[#06B6D4]"
                >
                  percentage
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
