import type { Metadata } from "next";
import { JsonLd } from '../../components/JsonLd';
import { createServiceBreadcrumbs } from '../../lib/schema/breadcrumbs';

const siteUrl = "https://www.digitechsolutions.nl";

export const metadata: Metadata = {
  title: "Productconsultatie & Technische Validatie | Digitech Solutions",
  description: "Technische validatie van productideeën, haalbaarheidsanalyse, scope-bepaling en risico-inventarisatie.",
  alternates: { canonical: `${siteUrl}/diensten/productconsultatie` },
  openGraph: {
    title: "Productconsultatie & Technische Validatie | Digitech Solutions",
    description: "Technische validatie van productideeën, haalbaarheidsanalyse, scope-bepaling en risico-inventarisatie.",
    type: "website",
    url: `${siteUrl}/diensten/productconsultatie`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Productconsultatie & Technische Validatie - Digitech Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Productconsultatie & Technische Validatie | Digitech Solutions",
    description: "Technische validatie van productideeën, haalbaarheidsanalyse, scope-bepaling en risico-inventarisatie.",
    images: [`${siteUrl}/og-image.png`],
  },
};

const breadcrumbSchema = createServiceBreadcrumbs("Productconsultatie & Technische Validatie", "productconsultatie");

export default function ProductconsultatieLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
