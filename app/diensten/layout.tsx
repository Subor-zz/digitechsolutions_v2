import type { Metadata } from "next";

const siteUrl = "https://www.digitechsolutions.nl";

export const metadata: Metadata = {
  title: "IT-diensten | ZZP Applicatiebeheer, Functioneel Beheer & IT Support",
  description: "ZZP applicatiebeheerder, functioneel beheerder, IT support, full-stack development en projectmanagement. Breda, NL/EU-remote.",
  alternates: {
    canonical: `${siteUrl}/diensten`,
  },
  openGraph: {
    title: "IT-diensten | ZZP Applicatiebeheer, Functioneel Beheer & IT Support",
    description: "ZZP applicatiebeheerder, functioneel beheerder, IT support, full-stack development en projectmanagement.",
    type: "website",
    url: `${siteUrl}/diensten`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Digitech Solutions IT Diensten"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-diensten | ZZP Applicatiebeheer, Functioneel Beheer & IT Support",
    description: "ZZP applicatiebeheerder, functioneel beheerder, IT support, full-stack development en projectmanagement.",
    images: [`${siteUrl}/og-image.png`]
  }
};

export default function DienstenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
