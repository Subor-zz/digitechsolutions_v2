import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Applicatiebeheerder Inhuren | Interim Applicatiebeheer MKB",
  description: "Ervaren ZZP applicatiebeheerder voor MKB en scale-ups. Interim inzetbaar voor incident management, ITIL-processen en applicatiebeheer. Direct beschikbaar in Nederland.",
  keywords: ["ZZP applicatiebeheerder", "interim applicatiebeheerder", "freelance applicatiebeheerder", "applicatiebeheer inhuren", "applicatiebeheer MKB", "applicatiebeheer uitbesteden", "Microsoft 365 beheer", "Salesforce beheer"],
  robots: "index, follow",
  openGraph: {
    title: "ZZP Applicatiebeheerder Inhuren | Digitech Solutions",
    description: "Ervaren ZZP applicatiebeheerder voor MKB en scale-ups. Interim inzetbaar voor incident management, ITIL-processen en applicatiebeheer.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder",
    locale: "nl_NL"
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder" }
};

export default function ZZPApplicatiebeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
