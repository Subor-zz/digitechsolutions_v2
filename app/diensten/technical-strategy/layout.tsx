import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consultancy & Technical Strategy | Digitech Solutions",
  description: "IT consultancy voor schaalbare en toekomstbestendige systemen. Architectuurreview, technische roadmap, stack evaluatie en strategisch advies.",
  openGraph: {
    title: "IT Consultancy & Technical Strategy | Digitech Solutions",
    description: "IT consultancy voor schaalbare en toekomstbestendige systemen. Architectuurreview, technische roadmap, stack evaluatie en strategisch advies.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/technical-strategy"
  },
  alternates: {
    canonical: "https://www.digitechsolutions.nl/diensten/technical-strategy"
  }
};

export default function TechnicalStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
