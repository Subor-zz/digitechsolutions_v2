import type { Metadata } from "next";

import { RebrandPage } from "@/components/rebrand/RebrandPage";
import { homepageCopy } from "@/lib/rebrand/homepage-copy";

export const metadata: Metadata = {
  title: { absolute: homepageCopy.metadata.title },
  description: homepageCopy.metadata.description,
  alternates: { canonical: homepageCopy.metadata.canonical },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: homepageCopy.metadata.canonical,
    siteName: "Digitech Solutions",
    title: homepageCopy.metadata.title,
    description: homepageCopy.metadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: homepageCopy.metadata.title,
    description: homepageCopy.metadata.description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://digitechsolutions.nl/#organization",
  name: "Digitech Solutions",
  legalName: "Digitech Solutions",
  url: "https://digitechsolutions.nl/",
  logo: "https://digitechsolutions.nl/icon.png",
  email: "subor@digitechsolutions.nl",
  telephone: "+31643983420",
  founder: {
    "@type": "Person",
    "@id": "https://digitechsolutions.nl/#subor-cheung",
    name: "Subor Cheung",
    jobTitle: "CEO",
    url: "https://digitechsolutions.nl/over",
    sameAs: ["https://www.linkedin.com/in/subor-cheung-3baab21a/"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Breda",
    addressCountry: "NL",
  },
  sameAs: ["https://www.linkedin.com/company/111914901"],
  areaServed: [
    { "@type": "Country", name: "Nederland" },
    { "@type": "Country", name: "België" },
  ],
  knowsAbout: [
    "Workflowmodernisering",
    "Applicatiemodernisering",
    "Procesanalyse",
    "Legacysoftware",
    "AI-ondersteunde softwareontwikkeling",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://digitechsolutions.nl/#website",
  url: "https://digitechsolutions.nl/",
  name: "Digitech Solutions",
  inLanguage: "nl-NL",
  publisher: { "@id": "https://digitechsolutions.nl/#organization" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://digitechsolutions.nl/#modernization-service",
  name: "Workflow- en applicatiemodernisering",
  serviceType: "Workflow- en applicatiemodernisering",
  description: homepageCopy.metadata.description,
  provider: { "@id": "https://digitechsolutions.nl/#organization" },
  areaServed: ["Nederland", "België"],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Operations- en IT-verantwoordelijken bij mkb-bedrijven en scale-ups",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moderniseringsroutes",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workflowmodernisering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Applicatiemodernisering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modernization Scan" } },
    ],
  },
};

const structuredData = [organizationSchema, websiteSchema, serviceSchema];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <RebrandPage />
    </>
  );
}
