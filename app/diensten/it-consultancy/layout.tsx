import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT-consultancy & applicatieadvies | Digitech Solutions",
  description: "Inzicht in architectuur, performance en risico's. Praktisch IT-advies met duidelijke vervolgstappen voor startups en MKB.",
  openGraph: {
    title: "IT-consultancy & applicatieadvies | Digitech Solutions",
    description: "Inzicht in architectuur, performance en risico's. Praktisch IT-advies met duidelijke vervolgstappen voor startups en MKB.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/it-consultancy"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/it-consultancy" }
};

export default function ITConsultancyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
