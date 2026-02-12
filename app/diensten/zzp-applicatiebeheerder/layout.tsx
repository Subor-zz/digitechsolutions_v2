import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Applicatiebeheerder | Digitech Solutions",
  description: "Ervaren ZZP applicatiebeheerder voor stabiele bedrijfsapplicaties. Inzetbaar voor interim beheer, incidentafhandeling en optimalisatie.",
  openGraph: {
    title: "ZZP Applicatiebeheerder | Digitech Solutions",
    description: "Ervaren ZZP applicatiebeheerder voor stabiele bedrijfsapplicaties. Inzetbaar voor interim beheer, incidentafhandeling en optimalisatie.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/zzp-applicatiebeheerder"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/zzp-applicatiebeheerder" }
};

export default function ZZPApplicatiebeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
