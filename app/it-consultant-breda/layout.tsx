import type { Metadata } from "next";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "IT Consultant Breda | Digitech Solutions",
  description: "Lokale IT-consultancy in Breda en omgeving. Fractional CTO, full-stack development en technisch advies voor startups en MKB in Noord-Brabant.",
  keywords: ["IT consultant Breda", "IT consultancy Breda", "fractional CTO Breda", "software developer Breda", "IT advies Breda", "Noord-Brabant"],
  openGraph: {
    title: "IT Consultant Breda | Digitech Solutions",
    description: "Lokale IT-consultancy in Breda. Fractional CTO, full-stack development en technisch advies voor startups en MKB.",
    url: "https://digitechsolutions.nl/it-consultant-breda",
    type: "website",
  },
};

// Local Business Schema for Breda
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://digitechsolutions.nl/#localbusiness",
  "name": "Digitech Solutions",
  "url": "https://digitechsolutions.nl",
  "logo": "https://digitechsolutions.nl/logo.png",
  "image": "https://digitechsolutions.nl/logo.png",
  "description": "IT-consultancy, fractional CTO en full-stack development in Breda en omgeving.",
  "telephone": "+31643983420",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Breda",
    "addressRegion": "Noord-Brabant",
    "addressCountry": "NL",
    "postalCode": "4811"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5875",
    "longitude": "4.7750"
  },
  "areaServed": [
    "Breda",
    "Tilburg",
    "Roosendaal",
    "Bergen op Zoom",
    "Etten-Leur",
    "Oosterhout",
    "Noord-Brabant"
  ],
  "serviceType": [
    "IT-consultancy",
    "Fractional CTO",
    "Full-stack development",
    "IT-projectmanagement"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@digitechsolutions.nl",
    "contactType": "customer service",
    "availableLanguage": ["Dutch", "English"]
  },
  "sameAs": [
    "https://www.linkedin.com/in/subor-cheung-3baab21a/",
    "https://github.com/Subor-zz/"
  ]
};

export default function ItConsultantBredaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {children}
    </>
  );
}
