// Centralized SEO helper module for Next.js App Router
// Provides consistent metadata generation and JSON-LD building

import type { Metadata } from "next";
import { SITE_CONFIG, ORGANIZATION_CONFIG } from "./schema/config";

// =============================================================================
// TYPES
// =============================================================================

export interface SeoImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface ServiceSchemaInput {
  serviceType: string;
  description: string;
  urlPath: string;
  areaServed?: string[];
  hourlyRateMin?: number;
  hourlyRateMax?: number;
}

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogImage?: SeoImage | string;
  locale?: "nl_NL" | "en_GB";
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const DEFAULT_OG_IMAGE: SeoImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Digitech Solutions - IT Consultancy & Development",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Ensures a URL uses https://www prefix
 */
export function normalizeUrl(path: string): string {
  // If already a full URL, ensure it has www
  if (path.startsWith("http")) {
    return path.replace(/^https?:\/\/(?:www\.)?/, "https://www.");
  }
  // If relative path, prepend site URL
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Resolves OG image to full URL with defaults
 */
function resolveOgImage(image?: SeoImage | string): SeoImage {
  if (!image) {
    return {
      ...DEFAULT_OG_IMAGE,
      url: normalizeUrl(DEFAULT_OG_IMAGE.url),
    };
  }

  if (typeof image === "string") {
    return {
      url: normalizeUrl(image),
      width: DEFAULT_OG_IMAGE.width,
      height: DEFAULT_OG_IMAGE.height,
      alt: DEFAULT_OG_IMAGE.alt,
    };
  }

  return {
    ...image,
    url: normalizeUrl(image.url),
  };
}

// =============================================================================
// METADATA GENERATOR
// =============================================================================

/**
 * Generates consistent Next.js Metadata for a page
 *
 * @example
 * export const metadata = generatePageMetadata({
 *   title: "Full-stack development | Digitech",
 *   description: "Van MVP tot schaalbaar product...",
 *   path: "/diensten/full-stack-development",
 * });
 */
export function generatePageMetadata(input: PageMetadataInput): Metadata {
  const {
    title,
    description,
    path,
    ogImage,
    locale = "nl_NL",
    robots = { index: true, follow: true },
    type = "website",
    publishedTime,
    modifiedTime,
  } = input;

  const canonicalUrl = normalizeUrl(path);
  const resolvedImage = resolveOgImage(ogImage);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale,
      images: [
        {
          url: resolvedImage.url,
          width: resolvedImage.width,
          height: resolvedImage.height,
          alt: resolvedImage.alt || title,
          type: resolvedImage.type,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage.url],
    },
    robots: {
      index: robots.index,
      follow: robots.follow,
    },
  };
}

// =============================================================================
// JSON-LD BUILDERS
// =============================================================================

/**
 * Builds a BreadcrumbList JSON-LD object
 *
 * @example
 * const breadcrumbs = buildBreadcrumbJsonLd([
 *   { name: "Home", path: "/" },
 *   { name: "Diensten", path: "/diensten" },
 *   { name: "Full-stack Development", path: "/diensten/full-stack-development" },
 * ]);
 */
export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList" as const,
    "@id": `${SITE_CONFIG.url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: normalizeUrl(item.path),
    })),
  };
}

/**
 * Builds a Service JSON-LD object
 *
 * @example
 * const serviceSchema = buildServiceJsonLd({
 *   serviceType: "Full-stack Development",
 *   description: "Web- en mobiele apps gebouwd voor groei...",
 *   urlPath: "/diensten/full-stack-development",
 * });
 */
export function buildServiceJsonLd(input: ServiceSchemaInput) {
  const serviceUrl = normalizeUrl(input.urlPath);

  return {
    "@type": "Service" as const,
    "@id": `${serviceUrl}#service`,
    name: input.serviceType,
    description: input.description,
    url: serviceUrl,
    provider: {
      "@type": "Organization" as const,
      "@id": `${ORGANIZATION_CONFIG.url}#organization`,
      name: ORGANIZATION_CONFIG.name,
      url: ORGANIZATION_CONFIG.url,
    },
    serviceType: input.serviceType,
    areaServed: input.areaServed?.map((country) => ({
      "@type": "Country" as const,
      name: country,
    })) || {
      "@type": "Country" as const,
      name: "Netherlands",
    },
    offers: {
      "@type": "Offer" as const,
      priceSpecification: {
        "@type": "UnitPriceSpecification" as const,
        price: `${input.hourlyRateMin || 85}-${input.hourlyRateMax || 125}`,
        priceCurrency: "EUR",
        unitText: "HOUR",
      },
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * Creates a standard service page breadcrumb trail
 * Home > Diensten > Service Name
 */
export function buildServiceBreadcrumbs(
  serviceName: string,
  serviceSlug: string
): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/diensten" },
    { name: serviceName, path: `/diensten/${serviceSlug}` },
  ];
}

// =============================================================================
// COMBINED SERVICE PAGE HELPER
// =============================================================================

export interface ServicePageSeoInput {
  title: string;
  description: string;
  serviceName: string;
  serviceSlug: string;
  ogImage?: SeoImage | string;
  hourlyRateMin?: number;
  hourlyRateMax?: number;
}

/**
 * Generates both metadata and JSON-LD schemas for a service page
 * Returns everything needed for a service page layout
 *
 * @example
 * const { metadata, breadcrumbSchema, serviceSchema } = generateServicePageSeo({
 *   title: "Full-stack development | Digitech",
 *   description: "...",
 *   serviceName: "Full-stack Development",
 *   serviceSlug: "full-stack-development",
 * });
 */
export function generateServicePageSeo(input: ServicePageSeoInput) {
  const { serviceName, serviceSlug } = input;

  const metadata = generatePageMetadata({
    title: input.title,
    description: input.description,
    path: `/diensten/${serviceSlug}`,
    ogImage: input.ogImage,
  });

  const breadcrumbItems = buildServiceBreadcrumbs(serviceName, serviceSlug);
  const breadcrumbSchema = buildBreadcrumbJsonLd(breadcrumbItems);
  const serviceSchema = buildServiceJsonLd({
    serviceType: serviceName,
    description: input.description,
    urlPath: `/diensten/${serviceSlug}`,
    hourlyRateMin: input.hourlyRateMin,
    hourlyRateMax: input.hourlyRateMax,
  });

  return {
    metadata,
    breadcrumbSchema,
    serviceSchema,
    // Combined @graph schema for convenience
    graphSchema: {
      "@context": "https://schema.org",
      "@graph": [breadcrumbSchema, serviceSchema],
    },
  };
}
