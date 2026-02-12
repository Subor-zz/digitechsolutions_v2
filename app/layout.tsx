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
const title = "Digitech Solutions | IT consultancy, technical strategy and development";
const description = "IT consultancy, technical strategy en development voor schaalbare systemen. Architectuurreview, roadmap en strategisch advies voor startups en scale-ups.";
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
  "description": "IT consultancy, technical strategy en development voor startups en scale-ups.",
  "telephone": "+31643983420",
  "priceRange": "€€",
  "founder": {
    "@type": "Person",
    "name": authorName,
    "url": authorUrl,
    "jobTitle": "IT Consultant & Technical Strategist"
  },
  "areaServed": ["NL", "EU"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Breda",
    "addressCountry": "NL"
  },
  "serviceType": [
    "IT Consultancy",
    "Technical Strategy",
    "CTO-Level Sparring",
    "Technical Audit",
    "Full-stack development",
    "IT-projectmanagement",
    "IT-consultancy & applicatieadvies",
    "Technisch advies"
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
  "description": "IT consultancy, technical strategy en development in Breda. Services voor startups en scale-ups in heel Nederland.",
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
  "jobTitle": "IT Consultant & Full-Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl
  },
  "description": "IT consultant met 9+ jaar ervaring in IT-consultancy, technical strategy en full-stack development.",
  "knowsAbout": [
    "IT Service Management", "IT-consultancy", "Technical Strategy",
    "React", "Next.js", "TypeScript", "Node.js", "Projectmanagement", "Agile", "Scrum", "ITIL"
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
      "name": "Fractional CTO / Technisch Advies",
      "description": "Technologystack evaluatie, technische architectuur, build-or-buy analyse, technisch due diligence, AI & automatiseringsstrategie",
      "url": "https://digitechsolutions.nl/diensten/fractional-cto"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "IT-consultancy & Applicatieadvies",
      "description": "Softwareselectie, applicatie-audits, implementatiebegeleiding, integratieconsultatie, migratieplanning",
      "url": "https://digitechsolutions.nl/diensten/it-consultancy"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Full-Stack Development",
      "description": "Web apps, mobiele apps, game development, automatisering, API's, CI/CD",
      "url": "https://digitechsolutions.nl/diensten/full-stack-development"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Technisch Projectmanagement",
      "description": "End-to-end levering, Agile/Scrum begeleiding, roadmapping, stakeholdercommunicatie",
      "url": "https://digitechsolutions.nl/diensten/projectmanagement"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "Productconsultatie & Strategie",
      "description": "PRD's & featurespecificaties, MVP-definitie & haalbaarheid, go-to-market input",
      "url": "https://digitechsolutions.nl/diensten/product-business-consultatie"
    },
    {
      "@type": "Service",
      "position": 6,
      "name": "Support & IT-servicemanagement",
      "description": "SLA's, incident- en change management, supportstructuur & tooling",
      "url": "https://digitechsolutions.nl/diensten/support-itsm"
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
    "IT consultancy",
    "technical strategy",
    "IT-consultancy",
    "architectuurreview",
    "technische roadmap",
    "CTO sparring",
    "React developer",
    "Next.js developer",
    "TypeScript developer"
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
  // Note: canonical URLs are set per-page, not globally
  // Home page canonical is set via page metadata
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
        alt: `${siteName} - IT Consulting Diensten`
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
  verification: {
    // Add your verification codes here when available:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  }
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
        <meta name="DC.subject" content="IT Consulting, Full-Stack Development, Projectmanagement" />

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
