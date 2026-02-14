import type { Metadata } from "next";
import { JsonLd } from '../components/JsonLd';
import { buildBreadcrumbJsonLd } from '../lib/seo';

export const metadata: Metadata = {
  title: "Fractional CTO inhuren? | Digitech Solutions",
  description: "Plan een gratis intake (15 min) om te bespreken of een fractional CTO of IT-advies passen bij jouw situatie.",
  openGraph: {
    title: "Contact | Digitech Solutions IT-consultancy",
    description: "Neem contact op met Digitech Solutions voor IT-consultancy, development of fractional CTO.",
    type: "website",
    url: "https://www.digitechsolutions.nl/contact"
  },
  alternates: {
    canonical: "https://www.digitechsolutions.nl/contact"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ])
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
