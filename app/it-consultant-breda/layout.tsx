import type { Metadata } from "next";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "IT Consultancy voor schaalbare systemen | Digitech Solutions",
  description: "IT consultancy gericht op schaalbaarheid en technische richting. Architectuurreview, roadmap en strategisch advies voor groeiende bedrijven.",
  keywords: ["IT consultancy", "technische strategie", "architectuur review", "schaalbare systemen", "IT advies", "technisch advies"],
  alternates: {
    canonical: "https://www.digitechsolutions.nl/it-consultant-breda",
  },
  openGraph: {
    title: "IT Consultancy voor schaalbare systemen | Digitech Solutions",
    description: "IT consultancy gericht op schaalbaarheid en technische richting. Architectuurreview, roadmap en strategisch advies voor groeiende bedrijven.",
    url: "https://www.digitechsolutions.nl/it-consultant-breda",
    type: "website",
  },
};

// Local Business Schema for Breda
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.digitechsolutions.nl/#localbusiness",
  "name": "Digitech Solutions",
  "url": "https://www.digitechsolutions.nl",
  "logo": "https://www.digitechsolutions.nl/logo.png",
  "image": "https://www.digitechsolutions.nl/logo.png",
  "description": "IT consultancy gericht op schaalbaarheid en technische richting. Architectuurreview, roadmap en strategisch advies.",
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
    "Technische strategie",
    "Architectuur review",
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
