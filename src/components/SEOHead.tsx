import React, { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  article?: {
    publishedTime: string;
    author: string;
    headline: string;
  };
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  breadcrumbs,
  faqs,
  article
}) => {
  useEffect(() => {
    // 1. Page title
    document.title = title;

    // 2. Meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);

    // 3. OpenGraph & Twitter
    const setMeta = (property: string, content: string, isName = false) => {
      const attr = isName ? 'name' : 'property';
      let meta = document.querySelector(`meta[${attr}="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', description, true);

    const siteUrl = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://easyconverter.netlify.app');
    const fullUrl = `${siteUrl}${canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '')}`;

    setMeta('og:url', fullUrl);
    setMeta('twitter:url', fullUrl, true);

    // 4. Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 5. Optional Google Site Verification
    const verificationToken = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
    if (verificationToken) {
      let vMeta = document.querySelector('meta[name="google-site-verification"]');
      if (!vMeta) {
        vMeta = document.createElement('meta');
        vMeta.setAttribute('name', 'google-site-verification');
        document.head.appendChild(vMeta);
      }
      vMeta.setAttribute('content', verificationToken);
    }

    // 6. JSON-LD Structured Data
    const existingJsonLd = document.querySelectorAll('script[type="application/ld+json"][data-ec-dynamic]');
    existingJsonLd.forEach((el) => el.remove());

    const schemas: object[] = [];

    // Base WebApplication schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'EasyConverter',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      url: siteUrl,
      description: 'Free online unit converters and calculators for length, weight, temperature, volume, data, and everyday calculations.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    });

    // Breadcrumbs schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: `${siteUrl}${b.url}`
        }))
      });
    }

    // FAQPage schema
    if (faqs && faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer
          }
        }))
      });
    }

    // Article schema (for genuine guides)
    if (article) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        datePublished: article.publishedTime,
        author: {
          '@type': 'Organization',
          name: 'EasyConverter Editorial Team'
        },
        publisher: {
          '@type': 'Organization',
          name: 'EasyConverter',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/favicon.svg`
          }
        }
      });
    }

    // Inject JSON-LD
    schemas.forEach((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-ec-dynamic', 'true');
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

    return () => {
      // Clean up dynamic json-ld on unmount
      const cleanupScripts = document.querySelectorAll('script[type="application/ld+json"][data-ec-dynamic]');
      cleanupScripts.forEach((el) => el.remove());
    };
  }, [title, description, canonicalPath, breadcrumbs, faqs, article]);

  return null;
};
