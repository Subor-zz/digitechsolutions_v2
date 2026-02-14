import type { Metadata } from "next";
import { JsonLd } from '../../components/JsonLd';
import { createServiceBreadcrumbs } from '../../lib/schema/breadcrumbs';

const siteUrl = "https://www.digitechsolutions.nl";

export const metadata: Metadata = {
  title: "Full-stack development | Web- & app-ontwikkeling | Digitech",
  description: "Van MVP tot schaalbaar product. Web- en mobiele apps gebouwd voor onderhoud, performance en groei. Geen snelle hacks.",
  alternates: { canonical: `${siteUrl}/diensten/full-stack-development` },
  openGraph: {
    title: "Full-stack development | Web- & app-ontwikkeling | Digitech",
    description: "Van MVP tot schaalbaar product. Web- en mobiele apps gebouwd voor onderhoud, performance en groei. Geen snelle hacks.",
    type: "website",
    url: `${siteUrl}/diensten/full-stack-development`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Full-stack Development - Digitech Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-stack development | Web- & app-ontwikkeling | Digitech",
    description: "Van MVP tot schaalbaar product. Web- en mobiele apps gebouwd voor onderhoud, performance en groei. Geen snelle hacks.",
    images: [`${siteUrl}/og-image.png`],
  },
};

const breadcrumbSchema = createServiceBreadcrumbs("Full Stack Developer", "full-stack-development");

export default function FullStackLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
