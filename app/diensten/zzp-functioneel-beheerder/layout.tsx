import type { Metadata } from "next";
import { JsonLd } from '../../components/JsonLd';
import { createServiceBreadcrumbs } from '../../lib/schema/breadcrumbs';

const siteUrl = "https://www.digitechsolutions.nl";

export const metadata: Metadata = {
  title: "ZZP Functioneel Beheerder Inhuren | Freelance Specialist | Digitech",
  description: "ZZP functioneel beheerder inhuren? Freelance specialist met 15+ jaar ervaring in BiSL, ITIL & UAT. Interim inzetbaar binnen 5 dagen. Tarief vanaf €95/uur.",
  robots: "index, follow",
  alternates: {
    canonical: `${siteUrl}/diensten/zzp-functioneel-beheerder`
  },
  openGraph: {
    title: "ZZP Functioneel Beheerder Inhuren | Freelance Specialist | Digitech",
    description: "ZZP functioneel beheerder inhuren? Freelance specialist met 15+ jaar ervaring in BiSL, ITIL & UAT. Interim inzetbaar binnen 5 dagen. Tarief vanaf €95/uur.",
    type: "website",
    url: `${siteUrl}/diensten/zzp-functioneel-beheerder`,
    locale: "nl_NL",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ZZP Functioneel Beheerder Inhuren - Digitech Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ZZP Functioneel Beheerder Inhuren | Freelance Specialist | Digitech",
    description: "ZZP functioneel beheerder inhuren? Freelance specialist met 15+ jaar ervaring in BiSL, ITIL & UAT. Interim inzetbaar binnen 5 dagen. Tarief vanaf €95/uur.",
    images: [`${siteUrl}/og-image.png`],
  },
};

const breadcrumbSchema = createServiceBreadcrumbs("ZZP Functioneel Beheerder", "zzp-functioneel-beheerder");

export default function FunctioneelBeheerderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
