import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Applicatiebeheerder Inhuren | Direct Inzetbaar | €85-125/uur",
  description: "ZZP applicatiebeheerder inhuren? Direct beschikbaar binnen 48 uur. ITIL-gecertificeerd, 15+ jaar ervaring. Interim & projectbasis. Vanaf 16 uur/week.",
  keywords: ["ZZP applicatiebeheerder", "applicatiebeheerder inhuren", "freelance applicatiebeheerder", "interim applicatiebeheer specialist", "applicatiebeheer uitbesteden", "Microsoft 365 beheer", "Salesforce beheerder"],
  robots: "index, follow",
  openGraph: {
    title: "ZZP Applicatiebeheerder Inhuren | Direct Inzetbaar",
    description: "ZZP applicatiebeheerder inhuren? Direct beschikbaar binnen 48 uur. ITIL-gecertificeerd, 15+ jaar ervaring. Interim & projectbasis.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder",
    locale: "nl_NL"
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder" }
};

export default function ZZPApplicatiebeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
