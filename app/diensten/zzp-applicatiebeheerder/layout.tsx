import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Applicatiebeheerder | Applicatiebeheer voor MKB",
  description: "Ervaren ZZP applicatiebeheerder voor bedrijfskritische applicaties. Interim inzet voor continuïteit, beheer en structuur. ITIL-gecertificeerde processen.",
  openGraph: {
    title: "ZZP Applicatiebeheerder | Applicatiebeheer voor MKB",
    description: "Ervaren ZZP applicatiebeheerder voor bedrijfskritische applicaties. Interim inzet voor continuïteit, beheer en structuur. ITIL-gecertificeerde processen.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder"
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder" }
};

export default function ZZPApplicatiebeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
