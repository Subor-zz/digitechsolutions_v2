import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT-diensten | Fractional CTO, Development & Projectmanagement",
  description: "Fractional CTO, full-stack development, projectmanagement en softwareconsultancy voor startups en MKB. Breda, NL/EU-remote.",
  openGraph: {
    title: "IT-diensten | Fractional CTO, Development & Projectmanagement",
    description: "Fractional CTO, full-stack development, projectmanagement voor startups en MKB.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten"
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-diensten | Fractional CTO, Development & Projectmanagement",
    description: "Fractional CTO, full-stack development, projectmanagement voor startups en MKB."
  },
  alternates: {
    canonical: "https://digitechsolutions.nl/diensten"
  }
};

export default function DienstenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
