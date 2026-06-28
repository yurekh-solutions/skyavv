import { Helmet } from "react-helmet-async";
import { seoConfig } from "@/config/seo";

export interface FAQSchemaItem {
  question: string;
  answer: string;
}

export interface BreadcrumbSchemaItem {
  label: string;
  path: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object | object[];
  faqSchema?: FAQSchemaItem[];
  breadcrumbs?: BreadcrumbSchemaItem[];
  serviceSchema?: {
    name: string;
    description: string;
    areaServed?: string[];
    provider?: string;
    category?: string;
    url?: string;
  };
  articleSchema?: {
    author: string;
    publishDate: string;
    section?: string;
  };
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  structuredData,
  faqSchema,
  breadcrumbs,
  serviceSchema,
  articleSchema,
  noindex = false,
}: SEOProps) => {
  // Build title — avoid double-branding when pageSEO titles already end with "Sky Vision"
  const siteTitle = title
    ? title.toLowerCase().endsWith(seoConfig.siteName.toLowerCase()) ||
      title.toLowerCase().endsWith("sky vision")
      ? title
      : `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;

  const siteDescription = description || seoConfig.defaultDescription;
  const siteKeywords = keywords || seoConfig.defaultKeywords;
  const siteImage = image || `${seoConfig.siteUrl}${seoConfig.ogImage}`;
  const siteUrl = url || seoConfig.siteUrl;

  // Build structured data array
  const allStructuredData: object[] = [
    seoConfig.organization,
    seoConfig.localBusiness,
  ];

  if (structuredData) {
    if (Array.isArray(structuredData)) {
      allStructuredData.push(...structuredData);
    } else {
      allStructuredData.push(structuredData);
    }
  }

  // FAQ Page Schema
  if (faqSchema && faqSchema.length > 0) {
    allStructuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSchema.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  // BreadcrumbList Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    allStructuredData.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `https://skyav.in${item.path}`,
      })),
    });
  }

  // Service Schema
  if (serviceSchema) {
    allStructuredData.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceSchema.name,
      description: serviceSchema.description,
      provider: {
        "@type": "LocalBusiness",
        name: serviceSchema.provider || seoConfig.siteName,
        telephone: seoConfig.organization.telephone,
        address: seoConfig.organization.address,
      },
      areaServed: (serviceSchema.areaServed || ["Mumbai", "Navi Mumbai", "Thane", "Pune"]).map((a) => ({
        "@type": "City",
        name: a,
      })),
      serviceType: serviceSchema.category || serviceSchema.name,
      url: serviceSchema.url || siteUrl,
    });
  }

  // Article Schema
  if (articleSchema) {
    allStructuredData.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: siteDescription,
      author: {
        "@type": "Organization",
        name: articleSchema.author,
      },
      publisher: {
        "@type": "Organization",
        name: seoConfig.siteName,
        logo: {
          "@type": "ImageObject",
          url: `${seoConfig.siteUrl}/logo.png`,
        },
      },
      datePublished: articleSchema.publishDate,
      dateModified: articleSchema.publishDate,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": siteUrl,
      },
      ...(articleSchema.section ? { articleSection: articleSchema.section } : {}),
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content={String(seoConfig.ogImageWidth)} />
      <meta property="og:image:height" content={String(seoConfig.ogImageHeight)} />
      <meta property="og:locale" content="en_IN" />
      {type === "article" && articleSchema && (
        <meta property="article:author" content={articleSchema.author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      {/* Geo Meta Tags — critical for local SEO */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
      <meta name="geo.position" content="19.2544;72.8622" />
      <meta name="ICBM" content="19.2544, 72.8622" />

      {/* Additional Meta Tags */}
      <meta name="author" content={seoConfig.siteName} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="theme-color" content="#d46f48" />

      {/* Hreflang */}
      <link rel="alternate" href={siteUrl} hrefLang="en-in" />
      <link rel="alternate" href={siteUrl} hrefLang="x-default" />

      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
