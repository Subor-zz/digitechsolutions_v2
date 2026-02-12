import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT-diensten | ZZP Applicatiebeheer, Functioneel Beheer & IT Support",
  description: "ZZP applicatiebeheerder, functioneel beheerder, IT support, full-stack development en projectmanagement. Breda, NL/EU-remote.",
  openGraph: {
    title: "IT-diensten | ZZP Applicatiebeheer, Functioneel Beheer & IT Support",
    description: "ZZP applicatiebeheerder, functioneel beheerder, IT support, full-stack development en projectmanagement.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten"
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-diensten | ZZP Applicatiebeheer, Functioneel Beheer & IT Support",
    description: "ZZP applicatiebeheerder, functioneel beheerder, IT support, full-stack development en projectmanagement."
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
