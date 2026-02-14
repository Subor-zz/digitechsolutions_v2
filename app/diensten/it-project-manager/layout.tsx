import type { Metadata } from "next";
import { JsonLd } from '../../components/JsonLd';
import { createServiceBreadcrumbs } from '../../lib/schema/breadcrumbs';

const siteUrl = "https://www.digitechsolutions.nl";

export const metadata: Metadata = {
  title: "IT Project Manager (ZZP) | Digitech Solutions",
  description: "ZZP IT Project Manager voor planning, stakeholdermanagement, releases en delivery. Senior projectmanagement voor IT-projecten.",
  alternates: { canonical: `${siteUrl}/diensten/it-project-manager` },
  openGraph: {
    title: "IT Project Manager (ZZP) | Digitech Solutions",
    description: "ZZP IT Project Manager voor planning, stakeholdermanagement, releases en delivery. Senior projectmanagement voor IT-projecten.",
    type: "website",
    url: `${siteUrl}/diensten/it-project-manager`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "IT Project Manager - Digitech Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Project Manager (ZZP) | Digitech Solutions",
    description: "ZZP IT Project Manager voor planning, stakeholdermanagement, releases en delivery. Senior projectmanagement voor IT-projecten.",
    images: [`${siteUrl}/og-image.png`],
  },
};

const breadcrumbSchema = createServiceBreadcrumbs("IT Project Manager", "it-project-manager");

export default function ITProjectManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
