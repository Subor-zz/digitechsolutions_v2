import type { Metadata } from "next";
import { JsonLd } from '../components/JsonLd';
import { buildBreadcrumbJsonLd } from '../lib/seo';

export const metadata: Metadata = {
  title: "Tarieven & samenwerkingsvormen | Digitech Solutions",
  description: "Indicatieve tarieven voor IT-consultancy, fractional CTO en development. Transparant, professioneel en afgestemd op jouw situatie.",
  openGraph: {
    title: "Tarieven & samenwerkingsvormen | Digitech Solutions",
    description: "Indicatieve tarieven voor IT-consultancy, fractional CTO en development. Transparant, professioneel en afgestemd op jouw situatie.",
    type: "website",
    url: "https://www.digitechsolutions.nl/tarieven"
  },
  alternates: {
    canonical: "https://www.digitechsolutions.nl/tarieven"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Tarieven", path: "/tarieven" },
    ])
  ]
};

export default function TarievenLayout({
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
