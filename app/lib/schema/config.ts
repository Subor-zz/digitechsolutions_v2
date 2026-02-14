// Central organization and site configuration for structured data
// Single source of truth for all schema.org data

export const ORGANIZATION_CONFIG = {
  name: "Digitech Solutions",
  alternateName: "Digitech",
  url: "https://www.digitechsolutions.nl/",
  logo: "https://www.digitechsolutions.nl/logo-transparent.png",
  phone: "+31-6-43983420",
  email: "info@digitechsolutions.nl",
  description: "IT Consultancy, Applicatiebeheer & Development diensten voor startups en MKB",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Breda",
    addressRegion: "Noord-Brabant",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "51.5875",
    longitude: "4.7750",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.linkedin.com/company/digitechsolutions",
    "https://github.com/digitechsolutions",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+31-6-43983420",
    contactType: "customer service",
    availableLanguage: ["Dutch", "English"],
  },
} as const;

export const SITE_CONFIG = {
  name: "Digitech Solutions",
  url: "https://www.digitechsolutions.nl",
  language: "nl-NL",
  locale: "nl_NL",
} as const;

// Price ranges for services (indicative)
export const PRICING_CONFIG = {
  currency: "EUR",
  hourlyRate: {
    min: 85,
    max: 125,
  },
} as const;
