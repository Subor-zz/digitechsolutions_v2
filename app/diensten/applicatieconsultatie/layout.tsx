import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT-consultancy & applicatieadvies | Digitech Solutions",
  description: "Krijg snel inzicht in architectuur, performance en risico's. Praktisch advies met duidelijke vervolgstappen voor startups en MKB.",
  openGraph: {
    title: "IT-consultancy & applicatieadvies | Digitech Solutions",
    description: "Krijg snel inzicht in architectuur, performance en risico's. Praktisch advies met duidelijke vervolgstappen voor startups en MKB.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/applicatieconsultatie"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/applicatieconsultatie" }
};

export default function ApplicatieconsultatieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
