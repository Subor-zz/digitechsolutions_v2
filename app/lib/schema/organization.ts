// Organization schema builder
import { ORGANIZATION_CONFIG } from "./config";

export interface OrganizationSchema {
  "@type": "Organization" | "LocalBusiness";
  "@id"?: string;
  name: string;
  url: string;
  logo: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: object;
  geo?: object;
  openingHoursSpecification?: object;
  sameAs?: string[];
  contactPoint?: object;
}

/**
 * Creates the base Organization schema
 * Used as reference on all pages
 */
export function createOrganizationSchema(): OrganizationSchema {
  return {
    "@type": "Organization",
    "@id": `${ORGANIZATION_CONFIG.url}#organization`,
    name: ORGANIZATION_CONFIG.name,
    url: ORGANIZATION_CONFIG.url,
    logo: ORGANIZATION_CONFIG.logo,
    description: ORGANIZATION_CONFIG.description,
    telephone: ORGANIZATION_CONFIG.phone,
    email: ORGANIZATION_CONFIG.email,
    address: ORGANIZATION_CONFIG.address,
    geo: ORGANIZATION_CONFIG.geo,
    sameAs: [...ORGANIZATION_CONFIG.sameAs],
    contactPoint: ORGANIZATION_CONFIG.contactPoint,
  };
}

/**
 * Creates LocalBusiness schema variant
 * Use for location-specific pages
 */
export function createLocalBusinessSchema(
  additionalProps?: Partial<OrganizationSchema>
): OrganizationSchema {
  return {
    ...createOrganizationSchema(),
    "@type": "LocalBusiness",
    openingHoursSpecification: ORGANIZATION_CONFIG.openingHoursSpecification,
    ...additionalProps,
  };
}
