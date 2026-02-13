import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Applicatiebeheerder inhuren | Interim in 48 uur beschikbaar",
  description: "Ervaren ZZP applicatiebeheerder voor bedrijfskritische applicaties. Direct beschikbaar, geen wachttijd. ITIL-gecertificeerd. Van €85-125/uur voor interim expertise.",
  openGraph: {
    title: "ZZP Applicatiebeheerder inhuren | Interim in 48 uur beschikbaar",
    description: "Ervaren ZZP applicatiebeheerder voor bedrijfskritische applicaties. Direct beschikbaar, geen wachttijd. ITIL-gecertificeerd. Van €85-125/uur voor interim expertise.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder"
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder" }
};

export default function ZZPApplicatiebeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
