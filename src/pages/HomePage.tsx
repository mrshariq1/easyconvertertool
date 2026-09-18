import React, { useState } from 'react';
import {
  Ruler, Scale, Thermometer, Maximize2, Droplet, Gauge, HardDrive, Clock,
  Activity, Zap, Flame, Radio, Compass, Utensils, Car, Binary, Type,
  CheckCircle2, Sparkles, Shield, Cpu, ArrowRight, Star, Layers
} from 'lucide-react';
import { CONVERTER_CATEGORIES, POPULAR_CHIPS } from '../data/conversions';
import { CALCULATORS } from '../data/calculators';
import { GUIDES } from '../data/guides';
import { SEOHead } from '../components/SEOHead';
import { GlobalSearch } from '../components/GlobalSearch';
import { UniversalConverter } from '../components/UniversalConverter';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdSlot } from '../components/AdSlot';
import { Link } from '../context/RouterContext';
import { useFavoritesAndRecents } from '../hooks/useFavoritesAndRecents';

// Map icon string to Lucide component
const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Ruler, Scale, Thermometer, Maximize2, Droplet, Gauge, HardDrive, Clock,
  Activity, Zap, Flame, Radio, Compass, Utensils, Car, Binary, Type
};

export const HomePage: React.FC = () => {
  const [selectedFeaturedCategory, setSelectedFeaturedCategory] = useState('weight');
  const { favorites, recents } = useFavoritesAndRecents();

  const activeCategory =
    CONVERTER_CATEGORIES.find((c) => c.id === selectedFeaturedCategory) ||
    CONVERTER_CATEGORIES[1]; // Weight

  const homepageFaqs = [
    {
      question: 'What is EasyConverter?',
      answer: 'EasyConverter is a fast, free, and comprehensive online platform providing unit converters, math calculators, conversion tables, and educational guides for students, engineers, travelers, and everyday users.'
    },
    {
      question: 'Are all converters and calculators free to use?',
      answer: 'Yes, 100% of our converters and calculators are completely free with no paywalls, subscriptions, or hidden charges.'
    },
    {
      question: 'Do I need to register or create an account to use EasyConverter?',
      answer: 'No registration or login is required. You can start performing conversions and calculations immediately upon opening any page.'
    },
    {
      question: 'Can I use EasyConverter on mobile devices?',
      answer: 'Yes! EasyConverter is built with a responsive mobile-first architecture. It functions smoothly on smartphones, tablets, and desktop computers.'
    },
    {
      question: 'How accurate are the conversions on this site?',
      answer: 'Our conversion algorithms use standardized international definitions (such as SI, NIST, and ISO conversion factors) with double-precision floating-point arithmetic and user-configurable decimal precision.'
    },
    {
      question: 'Does EasyConverter store or transmit my conversion values?',
      answer: 'No. All conversions execute client-side directly in your browser. Your calculation numbers are never sent to external servers or logged in a database.'
    },
    {
      question: 'How do I choose between Metric and Imperial units?',
      answer: 'Our tools support both metric and imperial units side-by-side. Simply select your source unit and destination unit from the dropdown lists.'
    }
  ];

  return (
    <div className="pb-16" id="main-content">
      <SEOHead
        title="Free Online Converters & Calculators — EasyConverter"
        description="Convert units, measurements, data, time, temperature, area, volume, speed, and everyday math with fast, simple, and free online tools on EasyConverter."
        canonicalPath="/"
        faqs={homepageFaqs}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-[#E2E8F0] bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC] dark:border-[#334155] dark:from-[#0F172A] dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-gradient-to-r from-blue-50 to-cyan-50/60 px-3.5 py-1 text-xs font-semibold text-[#2563EB] dark:border-[#334155] dark:bg-gradient-to-r dark:from-[#1E293B] dark:to-cyan-950/40 dark:text-[#06B6D4] mb-6 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#06B6D4]" />
            <span>Fast, Free &amp; Easy Online Converters</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Free Online Converters &amp; Calculators
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            Convert units, measurements, data, time, temperature, area, volume, speed, energy, and more with fast, simple, and free online tools.
          </p>

          {/* Large Search Box */}
          <div className="mx-auto mt-8 max-w-2xl">
            <GlobalSearch isHero={true} placeholder="Search for a converter... (e.g. kg to lbs, celsius, mb to gb)" />
          </div>

          {/* Popular Conversion Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mr-1">
              Popular:
            </span>
            {POPULAR_CHIPS.map((chip) => (
              <Link
                key={chip.path}
                to={chip.path}
                className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] hover:border-[#2563EB]/40 hover:bg-blue-50/60 hover:text-[#2563EB] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] dark:hover:border-[#06B6D4]/50 dark:hover:bg-slate-700/60 dark:hover:text-[#06B6D4] transition shadow-2xs active:scale-95"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Instant Converter Section */}
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              Instant Conversion Calculator
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
              Select a category to convert measurements right now:
            </p>
          </div>
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-[#1E293B] p-1 rounded-xl border border-transparent dark:border-[#334155]">
            {['weight', 'length', 'temperature', 'data', 'volume'].map((catId) => {
              const cat = CONVERTER_CATEGORIES.find((c) => c.id === catId);
              const isSelected = selectedFeaturedCategory === catId;
              return (
                <button
                  key={catId}
                  type="button"
                  onClick={() => setSelectedFeaturedCategory(catId)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    isSelected
                      ? 'bg-white text-[#2563EB] shadow-xs dark:bg-[#0F172A] dark:text-[#06B6D4]'
                      : 'text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                  }`}
                >
                  {cat?.name}
                </button>
              );
            })}
          </div>
        </div>

        <UniversalConverter category={activeCategory} initialValue="10" />

        <AdSlot position="in_content" className="mt-8" />
      </section>

      {/* Recently Used / Favorites (if available) */}
      {(favorites.length > 0 || recents.length > 0) && (
        <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Favorites */}
            {favorites.length > 0 && (
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    Favorite Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {favorites.slice(0, 6).map((favPath) => {
                    const label = favPath
                      .replace('/', '')
                      .replace('calculators/', '')
                      .replace('converters/', '')
                      .toUpperCase();
                    return (
                      <Link
                        key={favPath}
                        to={favPath}
                        className="rounded-lg bg-slate-50 border border-[#E2E8F0] px-2.5 py-1 text-xs font-medium text-[#0F172A] hover:text-[#2563EB] hover:border-[#2563EB]/40 dark:bg-[#0F172A] dark:border-[#334155] dark:text-[#F8FAFC] dark:hover:text-[#06B6D4] transition"
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Recents */}
            {recents.length > 0 && (
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#2563EB] dark:text-[#06B6D4]" />
                  <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    Recently Used
                  </h3>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {recents.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-[#64748B] dark:text-[#94A3B8] border-b border-slate-50 dark:border-[#334155]/60 pb-1"
                    >
                      <span>
                        {item.fromValue} {item.fromUnitSymbol} → {item.toValue.toFixed(2)} {item.toUnitSymbol}
                      </span>
                      <Link
                        to={`/converters/${item.categoryId}`}
                        className="text-[11px] font-sans text-[#2563EB] hover:underline dark:text-[#06B6D4]"
                      >
                        Open
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* All Converter Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              Converter Categories
            </h2>
            <p className="mt-1 text-sm text-[#64748B] dark:text-[#94A3B8]">
              Browse all 17 dedicated unit converter landing pages:
            </p>
          </div>
          <Link
            to="/converters"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-700 dark:text-[#06B6D4] group"
          >
            <span>Browse all converters</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONVERTER_CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.iconName] || Layers;
            return (
              <div
                key={cat.id}
                className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xs transition-all hover:border-[#2563EB]/40 hover:shadow-md dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#06B6D4]/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] dark:bg-[#0F172A] dark:text-[#06B6D4] group-hover:bg-[#2563EB] group-hover:text-white dark:group-hover:bg-[#06B6D4] dark:group-hover:text-[#0F172A] transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <Link
                        to={`/converters/${cat.id}`}
                        className="font-bold text-base text-[#0F172A] hover:text-[#2563EB] dark:text-[#F8FAFC] dark:hover:text-[#06B6D4] transition"
                      >
                        {cat.name}
                      </Link>
                      <span className="block text-xs text-[#64748B] dark:text-[#94A3B8]">
                        {cat.units.length} supported units
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed line-clamp-2">
                    {cat.tagline}
                  </p>
                </div>

                {/* Popular direct conversion links inside category card */}
                {cat.popularPairs && cat.popularPairs.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] dark:border-[#334155] flex flex-wrap gap-1.5">
                    {cat.popularPairs.slice(0, 3).map((pair) => (
                      <Link
                        key={pair.slug}
                        to={`/${pair.slug}`}
                        className="rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-[#64748B] hover:bg-blue-50 hover:text-[#2563EB] dark:bg-[#0F172A] dark:text-[#94A3B8] dark:hover:bg-slate-700/60 dark:hover:text-[#06B6D4] transition"
                      >
                        {pair.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Everyday Calculators Section */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              Everyday Calculators
            </h2>
            <p className="mt-1 text-sm text-[#64748B] dark:text-[#94A3B8]">
              Fast math, financial, health, and date tools with step-by-step solutions:
            </p>
          </div>
          <Link
            to="/calculators"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-700 dark:text-[#06B6D4] group"
          >
            <span>View all calculators</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CALCULATORS.slice(0, 8).map((calc) => (
            <Link
              key={calc.id}
              to={`/calculators/${calc.slug}`}
              className="group rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xs transition hover:border-[#2563EB]/40 hover:shadow-sm dark:border-[#334155] dark:bg-[#1E293B] dark:hover:border-[#06B6D4]/50"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#06B6D4] mb-1">
                {calc.category}
              </div>
              <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] dark:text-[#F8FAFC] dark:group-hover:text-[#06B6D4] transition">
                {calc.title}
              </h3>
              <p className="mt-1 text-xs text-[#64748B] dark:text-[#94A3B8] line-clamp-2 leading-relaxed">
                {calc.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why EasyConverter Section (Trust Signals & Policy Cleanliness) */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              Why Users Choose EasyConverter
            </h2>
            <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Designed as a modern, reliable global utility platform built on transparent formulas and clean usability:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] dark:bg-[#0F172A] dark:text-[#06B6D4]">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                100% Client-Side Privacy
              </h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Your values and calculations run locally on your device. We do not store your numbers in a database.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-[#16A34A] dark:bg-[#0F172A] dark:text-green-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                No Signup or Paywall
              </h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Access every converter and calculator immediately without creating an account or providing an email.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-[#06B6D4] dark:bg-[#0F172A] dark:text-[#06B6D4]">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                Transparent Formulas
              </h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Every calculation shows its underlying mathematical formula and exact conversion factor so you can verify the steps.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] dark:bg-[#0F172A] dark:text-[#06B6D4]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                Precision &amp; Copy Tools
              </h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Select your desired decimal precision, swap units with one click, and copy formatted results seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Conversion Guides Section */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              Useful Conversion Guides
            </h2>
            <p className="mt-1 text-sm text-[#64748B] dark:text-[#94A3B8]">
              Clear, original educational articles explaining how conversions work:
            </p>
          </div>
          <Link
            to="/guides"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-700 dark:text-[#06B6D4] group"
          >
            <span>All 15 guides</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES.slice(0, 3).map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xs transition hover:border-[#2563EB]/40 dark:border-[#334155] dark:bg-[#1E293B]"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] dark:text-[#06B6D4] uppercase tracking-wider mb-2">
                  <span>{guide.category}</span>
                  <span>•</span>
                  <span>{guide.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                  <Link to={`/guides/${guide.slug}`} className="hover:text-[#2563EB] dark:hover:text-[#06B6D4]">
                    {guide.title}
                  </Link>
                </h3>
                <p className="mt-2 text-xs text-[#64748B] dark:text-[#94A3B8] line-clamp-3 leading-relaxed">
                  {guide.summary}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E2E8F0] dark:border-[#334155]">
                <Link
                  to={`/guides/${guide.slug}`}
                  className="text-xs font-semibold text-[#2563EB] hover:underline dark:text-[#06B6D4] inline-flex items-center gap-1 group"
                >
                  <span>Read guide</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 lg:px-8">
        <FAQAccordion items={homepageFaqs} title="Frequently Asked Questions about EasyConverter" />
      </section>

      {/* Final Call to Action with subtle blue-to-cyan gradient */}
      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-r from-[#2563EB] via-blue-600 to-[#06B6D4] px-6 py-10 text-white shadow-xl shadow-blue-500/10 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Ready to convert? Find your tool instantly.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-blue-50">
            Browse our complete library of unit converters, mathematical calculators, and engineering reference tables.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/converters"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#2563EB] shadow-xs hover:bg-slate-50 transition active:scale-95"
            >
              Browse All Converters
            </Link>
            <Link
              to="/calculators"
              className="rounded-xl border border-white/40 bg-white/10 backdrop-blur-xs px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition active:scale-95"
            >
              Explore Calculators
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
