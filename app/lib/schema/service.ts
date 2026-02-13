// Service schema builder
import { ORGANIZATION_CONFIG, PRICING_CONFIG, SITE_CONFIG } from "./config";
import { createOrganizationSchema } from "./organization";

export interface ServiceOffer {
  "@type": "Offer";
  price?: string;
  priceCurrency?: string;
  priceSpecification?: {
    "@type": "UnitPriceSpecification";
    price: string;
    priceCurrency: string;
    unitText: string;
  };
  availability?: string;
  areaServed?: string | object;
}

export interface ServiceConfig {
  name: string;
  description: string;
  url: string;
  slug?: string;
  image?: string;
  offers?: ServiceOffer;
  areaServed?: string | object;
  serviceType?: string;
}

export interface ServiceSchema {
  "@type": "Service";
  "@id": string;
  name: string;
  description: string;
  url: string;
  provider: object;
  serviceType?: string;
  areaServed?: string | object;
  offers?: ServiceOffer;
  image?: string;
}

/**
 * Creates a Service schema for a service page
 * @param config - Service configuration
 * @returns Service schema object
 */
export function createServiceSchema(config: ServiceConfig): ServiceSchema {
  const serviceUrl = config.url.startsWith("http")
    ? config.url
    : `${SITE_CONFIG.url}${config.url}`;

  return {
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: config.name,
    description: config.description,
    url: serviceUrl,
    provider: {
      "@type": "Organization",
      "@id": `${ORGANIZATION_CONFIG.url}#organization`,
      name: ORGANIZATION_CONFIG.name,
      url: ORGANIZATION_CONFIG.url,
    },
    serviceType: config.serviceType || config.name,
    areaServed: config.areaServed || {
      "@type": "Country",
      name: "Netherlands",
    },
    offers: config.offers || {
      "@type": "Offer",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: `${PRICING_CONFIG.hourlyRate.min}-${PRICING_CONFIG.hourlyRate.max}`,
        priceCurrency: PRICING_CONFIG.currency,
        unitText: "HOUR",
      },
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "Country",
        name: "Netherlands",
      },
    },
    image: config.image,
  };
}

/**
 * Helper to create hourly rate offer
 */
export function createHourlyRateOffer(
  minRate: number,
  maxRate: number,
  currency: string = "EUR"
): ServiceOffer {
  return {
    "@type": "Offer",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: `${minRate}-${maxRate}`,
      priceCurrency: currency,
      unitText: "HOUR",
    },
    availability: "https://schema.org/InStock",
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
  };
}

/**
 * Helper to create fixed price offer
 */
export function createFixedPriceOffer(
  price: number,
  currency: string = "EUR"
): ServiceOffer {
  return {
    "@type": "Offer",
    price: price.toString(),
    priceCurrency: currency,
    availability: "https://schema.org/InStock",
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
  };
}
