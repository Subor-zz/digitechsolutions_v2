import type { Metadata } from "next";
import { JsonLd } from '../../components/JsonLd';
import { createServiceBreadcrumbs } from '../../lib/schema/breadcrumbs';

const siteUrl = "https://www.digitechsolutions.nl";

export const metadata: Metadata = {
  title: "ZZP Applicatiebeheerder Inhuren | Direct Inzetbaar | €85-125/uur",
  description: "ZZP applicatiebeheerder inhuren? Direct beschikbaar binnen 48 uur. ITIL-gecertificeerd, 15+ jaar ervaring. Interim & projectbasis. Vanaf 16 uur/week.",
  robots: "index, follow",
  alternates: { canonical: `${siteUrl}/diensten/zzp-applicatiebeheerder` },
  openGraph: {
    title: "ZZP Applicatiebeheerder Inhuren | Direct Inzetbaar",
    description: "ZZP applicatiebeheerder inhuren? Direct beschikbaar binnen 48 uur. ITIL-gecertificeerd, 15+ jaar ervaring. Interim & projectbasis.",
    type: "website",
    url: `${siteUrl}/diensten/zzp-applicatiebeheerder`,
    locale: "nl_NL",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ZZP Applicatiebeheerder Inhuren - Digitech Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ZZP Applicatiebeheerder Inhuren | Direct Inzetbaar",
    description: "ZZP applicatiebeheerder inhuren? Direct beschikbaar binnen 48 uur. ITIL-gecertificeerd, 15+ jaar ervaring. Interim & projectbasis.",
    images: [`${siteUrl}/og-image.png`],
  },
};

const breadcrumbSchema = createServiceBreadcrumbs("ZZP Applicatiebeheerder", "zzp-applicatiebeheerder");

export default function ZZPApplicatiebeheerderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
