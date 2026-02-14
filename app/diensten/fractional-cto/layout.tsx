import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CTO voor startups & MKB | Digitech Solutions",
  description: "Senior technische sturing zonder fulltime CTO. Architectuur, roadmap, AI-strategie en due diligence. Plan een vrijblijvende intake.",
  openGraph: {
    title: "Fractional CTO voor startups & MKB | Digitech Solutions",
    description: "Senior technische sturing zonder fulltime CTO. Architectuur, roadmap, AI-strategie en due diligence. Plan een vrijblijvende intake.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/fractional-cto"
  },
  alternates: {
    canonical: "https://www.digitechsolutions.nl/diensten/fractional-cto"
  }
};

export default function FractionalCTOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
