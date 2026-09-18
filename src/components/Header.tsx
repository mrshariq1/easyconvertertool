import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Search, Layers, Calculator, BookOpen, Info, ShieldCheck, Mail } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useTheme } from '../hooks/useTheme';
import { GlobalSearch } from './GlobalSearch';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { currentPath } = useRouter();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Converters', path: '/converters' },
    { label: 'Calculators', path: '/calculators' },
    { label: 'Guides', path: '/guides' },
    { label: 'About', path: '/about' }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md dark:border-[#334155] dark:bg-[#0F172A]/95 transition-colors">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-[#2563EB] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-hidden"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 text-[#0F172A] dark:text-[#F8FAFC] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-xs shadow-blue-500/25 group-hover:scale-105 transition-transform">
              {/* Brand Geometric EC Converter Motif */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10h11l-3-3" />
                <path d="M17 14H6l3 3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-tight leading-none text-[#0F172A] dark:text-[#F8FAFC]">
                Easy<span className="text-[#2563EB] dark:text-[#06B6D4]">Converter</span>
              </span>
              <span className="text-[10px] font-medium text-[#64748B] dark:text-[#94A3B8] tracking-wide uppercase leading-tight mt-0.5">
                Free Online Tools
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#2563EB] font-semibold dark:bg-[#1E293B] dark:text-[#06B6D4] dark:border dark:border-[#334155]'
                      : 'text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:bg-[#1E293B] dark:hover:text-[#F8FAFC]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Actions (Search trigger, Theme toggle, Mobile hamburger) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button (Desktop & Mobile) */}
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            aria-label="Search tools and converters"
            className="flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-slate-50/90 px-3 py-1.5 text-xs sm:text-sm text-[#64748B] hover:border-[#2563EB]/50 hover:bg-white hover:text-[#0F172A] dark:border-[#334155] dark:bg-[#1E293B]/80 dark:text-[#94A3B8] dark:hover:border-[#06B6D4]/50 dark:hover:bg-[#1E293B] dark:hover:text-[#F8FAFC] transition focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <Search className="h-4 w-4 text-[#64748B] dark:text-[#94A3B8]" />
            <span className="hidden sm:inline">Search tools...</span>
            <kbd className="hidden lg:inline-block rounded-md border border-[#E2E8F0] bg-white px-1.5 py-0.5 text-[10px] font-mono text-[#64748B] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#94A3B8]">
              /
            </kbd>
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#2563EB]/40 hover:text-[#2563EB] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:border-[#06B6D4]/50 dark:hover:text-[#06B6D4] transition focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-[#64748B]" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] md:hidden dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E2E8F0] bg-white px-4 pt-3 pb-6 md:hidden dark:border-[#334155] dark:bg-[#0F172A] shadow-lg animate-in slide-in-from-top-2">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 dark:text-[#F8FAFC] dark:hover:bg-[#1E293B]"
            >
              <span>Home</span>
            </Link>
            <Link
              to="/converters"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 dark:text-[#F8FAFC] dark:hover:bg-[#1E293B]"
            >
              <Layers className="h-4 w-4 text-[#2563EB] dark:text-[#06B6D4]" />
              <span>Unit Converters</span>
            </Link>
            <Link
              to="/calculators"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 dark:text-[#F8FAFC] dark:hover:bg-[#1E293B]"
            >
              <Calculator className="h-4 w-4 text-[#2563EB] dark:text-[#06B6D4]" />
              <span>Calculators</span>
            </Link>
            <Link
              to="/guides"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 dark:text-[#F8FAFC] dark:hover:bg-[#1E293B]"
            >
              <BookOpen className="h-4 w-4 text-[#2563EB] dark:text-[#06B6D4]" />
              <span>Conversion Guides</span>
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 dark:text-[#F8FAFC] dark:hover:bg-[#1E293B]"
            >
              <Info className="h-4 w-4 text-[#64748B] dark:text-[#94A3B8]" />
              <span>About EasyConverter</span>
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 dark:text-[#F8FAFC] dark:hover:bg-[#1E293B]"
            >
              <Mail className="h-4 w-4 text-[#64748B] dark:text-[#94A3B8]" />
              <span>Contact Us</span>
            </Link>
            <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#334155] flex items-center justify-between text-xs text-[#64748B] dark:text-[#94A3B8] px-3">
              <Link to="/privacy" onClick={closeMobileMenu} className="hover:underline hover:text-[#2563EB] dark:hover:text-[#06B6D4]">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" onClick={closeMobileMenu} className="hover:underline hover:text-[#2563EB] dark:hover:text-[#06B6D4]">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/disclaimer" onClick={closeMobileMenu} className="hover:underline hover:text-[#2563EB] dark:hover:text-[#06B6D4]">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal / Overlay */}
      {searchModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search Converters"
          className="fixed inset-0 z-50 flex items-start justify-center bg-[#0F172A]/70 p-4 pt-16 backdrop-blur-xs sm:pt-24 animate-in fade-in-50"
        >
          <div className="w-full max-w-xl rounded-2xl bg-white p-4 shadow-2xl border border-[#E2E8F0] dark:bg-[#1E293B] dark:border-[#334155]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#334155]">
              <span className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                Quick Tool Finder
              </span>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                aria-label="Close search"
                className="p-1 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:hover:bg-[#0F172A]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="pt-3">
              <GlobalSearch isHero={false} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
