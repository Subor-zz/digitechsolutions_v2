import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://www.digitechsolutions.nl";
const siteName = "Digitech Solutions";
const title = "ZZP Applicatiebeheerder & Functioneel Beheerder | Digitech Solutions";
const description = "Ervaren ZZP applicatiebeheerder en functioneel beheerder voor stabiele IT-omgevingen. Inzetbaar voor incident- en change management, support & ITSM.";
const authorName = "Subor Cheung";
const authorUrl = "https://www.linkedin.com/in/subor-cheung-3baab21a/";

// Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": siteName,
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "image": `${siteUrl}/logo.png`,
  "description": "ZZP applicatiebeheerder en functioneel beheerder voor stabiele IT-omgevingen. Inzetbaar voor incident- en change management, support & ITSM.",
  "telephone": "+31643983420",
  "priceRange": "€€",
  "founder": {
    "@type": "Person",
    "name": authorName,
    "url": authorUrl,
    "jobTitle": "ZZP Applicatiebeheerder & Functioneel Beheerder"
  },
  "areaServed": ["NL", "EU"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Breda",
    "addressCountry": "NL"
  },
  "serviceType": [
    "ZZP Applicatiebeheer",
    "ZZP Functioneel Beheer",
    "IT Support & ITSM",
    "Full-stack development",
    "IT-projectmanagement",
    "Productconsultatie & Technische Validatie"
  ],
  "knowsAbout": [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "React Native", "Godot", "ITIL", "Agile", "Scrum"
  ],
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

// Structured Data for LocalBusiness (local SEO)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteName,
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "image": `${siteUrl}/logo.png`,
  "description": "ZZP applicatiebeheerder en functioneel beheerder in Breda. Stabiele IT-omgevingen, support en procesoptimalisatie.",
  "telephone": "+31643983420",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Breda",
    "addressLocality": "Breda",
    "addressRegion": "Noord-Brabant",
    "postalCode": "4800",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5875",
    "longitude": "4.7750"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "areaServed": ["Breda", "Noord-Brabant", "Nederland"]
};

// Structured Data for Person
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": authorName,
  "url": authorUrl,
  "jobTitle": "ZZP Applicatiebeheerder & Functioneel Beheerder",
  "worksFor": {
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl
  },
  "description": "ZZP applicatiebeheerder en functioneel beheerder met 9+ jaar ervaring in IT-beheer, support & ITSM.",
  "knowsAbout": [
    "Applicatiebeheer", "Functioneel Beheer", "IT Service Management",
    "ITIL", "Incident Management", "Change Management", "React", "Next.js",
    "TypeScript", "Node.js", "Projectmanagement", "Agile", "Scrum"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Breda",
    "addressCountry": "NL"
  },
  "email": "info@digitechsolutions.nl",
  "sameAs": [
    "https://www.linkedin.com/in/subor-cheung-3baab21a/",
    "https://github.com/Subor-zz/"
  ]
};

// Structured Data for Services - Complete ItemList with all 6 services
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "ZZP Applicatiebeheerder",
      "description": "Incident- en change management, monitoring, releases en gebruikersbeheer voor stabiele applicaties.",
      "url": "https://digitechsolutions.nl/diensten/zzp-applicatiebeheerder"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "ZZP Functioneel Beheerder",
      "description": "Requirements, wijzigingsbeheer, UAT, communicatie en procesoptimalisatie als brug tussen business en IT.",
      "url": "https://digitechsolutions.nl/diensten/zzp-functioneel-beheerder"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "IT Support & ITSM",
      "description": "1e/2e lijns support, ITIL-processen, SLA's, ticketing en serviceverbetering.",
      "url": "https://digitechsolutions.nl/diensten/support-itsm"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Full Stack Developer",
      "description": "Webapplicaties, API's en automatisering met moderne stack als aanvullende expertise.",
      "url": "https://digitechsolutions.nl/diensten/full-stack-development"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "IT Project Manager",
      "description": "Projectplanning, stakeholdermanagement, releases en delivery van IT-projecten.",
      "url": "https://digitechsolutions.nl/diensten/it-project-manager"
    },
    {
      "@type": "Service",
      "position": 6,
      "name": "Productconsultatie & Technische Validatie",
      "description": "Haalbaarheidsanalyse, scope-bepaling, risico-inventarisatie en technische review van productideeën.",
      "url": "https://digitechsolutions.nl/diensten/productconsultatie"
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Digitech Solutions"
  },
  description: description,
  authors: [{ name: authorName, url: authorUrl }],
  creator: authorName,
  publisher: siteName,
  keywords: [
    "ZZP applicatiebeheerder",
    "ZZP functioneel beheerder",
    "applicatiebeheer",
    "functioneel beheer",
    "IT support",
    "ITSM",
    "ITIL",
    "incident management",
    "change management",
    "support & servicemanagement"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    title: title,
    description: description,
    siteName: siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} - ZZP Applicatiebeheer & Functioneel Beheer`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/og-image.png"],
    creator: "@SuborCheung",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        {/* DNS preconnect for faster LCP */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.digitechsolutions.nl" />

        {/* Favicon */}
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, localBusinessSchema, personSchema, servicesSchema]),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1152d4" />

        {/* Material Icons */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteName} />

        {/* DCMI Metadata */}
        <meta name="DC.title" content={title} />
        <meta name="DC.description" content={description} />
        <meta name="DC.creator" content={authorName} />
        <meta name="DC.language" content="nl" />
        <meta name="DC.subject" content="ZZP Applicatiebeheer, Functioneel Beheer, IT Support, ITSM" />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Breda" />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
