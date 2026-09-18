import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { ErrorBoundary } from './components/ErrorBoundary';

// Pages
import { HomePage } from './pages/HomePage';
import { AllConvertersPage } from './pages/AllConvertersPage';
import { ConverterCategoryPage } from './pages/ConverterCategoryPage';
import { DirectConversionPage } from './pages/DirectConversionPage';
import { AllCalculatorsPage } from './pages/AllCalculatorsPage';
import { CalculatorDetailPage } from './pages/CalculatorDetailPage';
import { AllGuidesPage } from './pages/AllGuidesPage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Data stores for matching slugs
import { DIRECT_CONVERSIONS } from './data/seoPages';
import { CONVERTER_CATEGORIES } from './data/conversions';
import { CALCULATORS } from './data/calculators';
import { GUIDES } from './data/guides';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path (strip trailing slash except for root)
  const path = currentPath === '/' ? '/' : currentPath.replace(/\/+$/, '');

  // Route matching logic
  const renderRoute = () => {
    // 1. Home
    if (path === '' || path === '/') {
      return <HomePage />;
    }

    // 2. Converters directory
    if (path === '/converters') {
      return <AllConvertersPage />;
    }

    // 3. Converter Category (/converters/:categoryId)
    if (path.startsWith('/converters/')) {
      const categoryId = path.replace('/converters/', '');
      const exists = CONVERTER_CATEGORIES.some((c) => c.id === categoryId);
      if (exists) {
        return <ConverterCategoryPage categoryId={categoryId} />;
      }
    }

    // 4. Direct conversion pages (e.g. /kg-to-lbs, /cm-to-inches)
    const directSlug = path.startsWith('/') ? path.slice(1) : path;
    const directExists = DIRECT_CONVERSIONS.some((p) => p.slug === directSlug);
    if (directExists) {
      return <DirectConversionPage slug={directSlug} />;
    }

    // 5. Calculators directory
    if (path === '/calculators') {
      return <AllCalculatorsPage />;
    }

    // 6. Individual Calculator (/calculators/:slug)
    if (path.startsWith('/calculators/')) {
      const calcSlug = path.replace('/calculators/', '');
      const exists = CALCULATORS.some((c) => c.slug === calcSlug);
      if (exists) {
        return <CalculatorDetailPage slug={calcSlug} />;
      }
    }

    // 7. Guides directory
    if (path === '/guides') {
      return <AllGuidesPage />;
    }

    // 8. Individual Guide (/guides/:slug)
    if (path.startsWith('/guides/')) {
      const guideSlug = path.replace('/guides/', '');
      const exists = GUIDES.some((g) => g.slug === guideSlug);
      if (exists) {
        return <GuideDetailPage slug={guideSlug} />;
      }
    }

    // 9. Informational & Legal pages
    if (path === '/about') return <AboutPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/privacy') return <PrivacyPage />;
    if (path === '/terms') return <TermsPage />;
    if (path === '/disclaimer') return <DisclaimerPage />;
    if (path === '/cookie-policy') return <CookiePolicyPage />;

    // 10. 404 fallback
    return <NotFoundPage />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-page)] text-[var(--color-text-main)] antialiased selection:bg-[var(--color-primary)] selection:text-white transition-colors duration-200">
      <Header />
      <main className="flex-1">
        <ErrorBoundary>
          {renderRoute()}
        </ErrorBoundary>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
