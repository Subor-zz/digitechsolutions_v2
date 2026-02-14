import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Applicatiebeheerder Inhuren | Direct Inzetbaar | €85-125/uur",
  description: "ZZP applicatiebeheerder inhuren? Direct beschikbaar binnen 48 uur. ITIL-gecertificeerd, 15+ jaar ervaring. Interim & projectbasis. Vanaf 16 uur/week.",
  robots: "index, follow",
  openGraph: {
    title: "ZZP Applicatiebeheerder Inhuren | Direct Inzetbaar",
    description: "ZZP applicatiebeheerder inhuren? Direct beschikbaar binnen 48 uur. ITIL-gecertificeerd, 15+ jaar ervaring. Interim & projectbasis.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder",
    locale: "nl_NL",
    images: [
      {
        url: "https://www.digitechsolutions.nl/images/og-applicatiebeheerder.jpg",
        width: 1200,
        height: 630,
        alt: "ZZP Applicatiebeheerder Inhuren - Digitech Solutions"
      }
    ]
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder" },
  twitter: {
    card: "summary_large_image",
    title: "ZZP Applicatiebeheerder Inhuren | Direct Inzetbaar",
    description: "ZZP applicatiebeheerder inhuren? Direct beschikbaar binnen 48 uur. ITIL-gecertificeerd, 15+ jaar ervaring. Interim & projectbasis.",
    images: ["https://www.digitechsolutions.nl/images/og-applicatiebeheerder.jpg"],
  },
};

export default function ZZPApplicatiebeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
