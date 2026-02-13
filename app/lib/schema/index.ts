// Schema Factory - Central export and composer functions
// Provides a unified API for creating structured data across the application

// Re-export all builders
export { createOrganizationSchema, createLocalBusinessSchema } from "./organization";
export {
  createBreadcrumbSchema,
  createServiceBreadcrumbs,
  createBlogBreadcrumbs,
  createBlogCategoryBreadcrumbs,
} from "./breadcrumbs";
export type { BreadcrumbItem, BreadcrumbSchema } from "./breadcrumbs";
export {
  createServiceSchema,
  createHourlyRateOffer,
  createFixedPriceOffer,
} from "./service";
export type { ServiceConfig, ServiceSchema, ServiceOffer } from "./service";
export { createFAQSchema, isFAQItem } from "./faq";
export type { FAQItem, FAQSchema } from "./faq";
export { ORGANIZATION_CONFIG, SITE_CONFIG, PRICING_CONFIG } from "./config";

// Import for composer functions
import { createOrganizationSchema } from "./organization";
import { createServiceBreadcrumbs, type BreadcrumbItem } from "./breadcrumbs";
import { createServiceSchema, type ServiceConfig } from "./service";
import { createFAQSchema, type FAQItem } from "./faq";
import { SITE_CONFIG } from "./config";

/**
 * Creates a @graph schema combining multiple schemas
 * @param schemas - Array of schema objects to combine
 * @returns Complete JSON-LD object with @context and @graph
 */
export function createGraphSchema(schemas: object[]): {
  "@context": string;
  "@graph": object[];
} {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

/**
 * Configuration for creating a complete service page schema
 */
export interface ServicePageSchemaConfig {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  serviceSlug: string;
  faqs: FAQItem[];
  serviceImage?: string;
  customBreadcrumbs?: BreadcrumbItem[];
  hourlyRateMin?: number;
  hourlyRateMax?: number;
}

/**
 * Composer function that creates a complete service page schema
 * Includes: Organization + BreadcrumbList + Service + FAQPage
 * @param config - Service page configuration
 * @returns @graph schema ready for JSON-LD
 */
export function createServicePageSchema(config: ServicePageSchemaConfig) {
  const organization = createOrganizationSchema();
  const breadcrumbs = config.customBreadcrumbs
    ? createServiceBreadcrumbs(config.serviceName, config.customBreadcrumbs[config.customBreadcrumbs.length - 1]?.url || config.serviceSlug)
    : createServiceBreadcrumbs(config.serviceName, config.serviceSlug);

  const service = createServiceSchema({
    name: config.serviceName,
    description: config.serviceDescription,
    url: config.serviceUrl,
    slug: config.serviceSlug,
    image: config.serviceImage,
    offers: config.hourlyRateMin && config.hourlyRateMax
      ? {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: `${config.hourlyRateMin}-${config.hourlyRateMax}`,
            priceCurrency: "EUR",
            unitText: "HOUR",
          },
          availability: "https://schema.org/InStock",
        }
      : undefined,
  });

  const faq = config.faqs.length > 0 ? createFAQSchema(config.faqs) : null;

  const schemas: object[] = [organization, breadcrumbs, service];
  if (faq) schemas.push(faq);

  return createGraphSchema(schemas);
}

/**
 * Configuration for creating a blog post schema
 */
export interface BlogPostSchemaConfig {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
  articleBody?: string;
  keywords?: string[];
}

/**
 * Creates an Article/BlogPosting schema
 */
export function createBlogPostSchema(config: BlogPostSchemaConfig) {
  const organization = createOrganizationSchema();

  const article = {
    "@type": "Article",
    "@id": `${config.url}#article`,
    headline: config.headline,
    description: config.description,
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    author: {
      "@type": "Person",
      name: config.author || "Digitech Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: organization.name,
      logo: {
        "@type": "ImageObject",
        url: organization.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": config.url,
    },
    image: config.image,
    articleBody: config.articleBody,
    keywords: config.keywords?.join(", "),
  };

  return createGraphSchema([organization, article]);
}
