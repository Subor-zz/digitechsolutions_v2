import type { Metadata } from "next";
import { JsonLd } from '../../components/JsonLd';
import { createServiceBreadcrumbs } from '../../lib/schema/breadcrumbs';

const siteUrl = "https://www.digitechsolutions.nl";

export const metadata: Metadata = {
  title: "ITSM Support Specialist Inhuren | ITIL Service - Digitech",
  description: "ITSM support specialist inhuren voor professionele IT support. ITIL 4 gecertificeerd, 15+ jaar ervaring. Support & ITSM uitbesteden aan een service management ZZP specialist. Direct inzetbaar.",
  robots: "index, follow",
  alternates: {
    canonical: `${siteUrl}/diensten/support-itsm`
  },
  openGraph: {
    title: "ITSM Support Specialist Inhuren | ITIL-Georganiseerde Service",
    description: "ITSM support specialist inhuren voor professionele IT support. ITIL 4 gecertificeerd, 15+ jaar ervaring. Support & ITSM uitbesteden aan een service management ZZP specialist.",
    type: "website",
    url: `${siteUrl}/diensten/support-itsm`,
    locale: "nl_NL",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ITSM Support Specialist Inhuren - Digitech Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ITSM Support Specialist Inhuren | ITIL-Georganiseerde Service",
    description: "ITSM support specialist inhuren voor professionele IT support. ITIL 4 gecertificeerd, 15+ jaar ervaring. Support & ITSM uitbesteden aan een service management ZZP specialist.",
    images: [`${siteUrl}/og-image.png`],
  },
};

const breadcrumbSchema = createServiceBreadcrumbs("IT Support & ITSM", "support-itsm");

export default function SupportITSMLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
