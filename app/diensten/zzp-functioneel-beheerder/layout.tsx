import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Functioneel Beheerder Inhuren | Freelance Specialist | Digitech",
  description: "ZZP functioneel beheerder inhuren? Freelance specialist met 15+ jaar ervaring in BiSL, ITIL & UAT. Interim inzetbaar binnen 5 dagen. Tarief vanaf €95/uur.",
  robots: "index, follow",
  openGraph: {
    title: "ZZP Functioneel Beheerder Inhuren | Freelance Specialist | Digitech",
    description: "ZZP functioneel beheerder inhuren? Freelance specialist met 15+ jaar ervaring in BiSL, ITIL & UAT. Interim inzetbaar binnen 5 dagen. Tarief vanaf €95/uur.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/zzp-functioneel-beheerder",
    locale: "nl_NL",
    images: [
      {
        url: "https://www.digitechsolutions.nl/images/og-functioneel-beheerder.jpg",
        width: 1200,
        height: 630,
        alt: "ZZP Functioneel Beheerder Inhuren - Digitech Solutions"
      }
    ]
  },
  alternates: {
    canonical: "https://www.digitechsolutions.nl/diensten/zzp-functioneel-beheerder"
  },
  twitter: {
    card: "summary_large_image",
    title: "ZZP Functioneel Beheerder Inhuren | Freelance Specialist | Digitech",
    description: "ZZP functioneel beheerder inhuren? Freelance specialist met 15+ jaar ervaring in BiSL, ITIL & UAT. Interim inzetbaar binnen 5 dagen. Tarief vanaf €95/uur.",
    images: ["https://www.digitechsolutions.nl/images/og-functioneel-beheerder.jpg"],
  },
};

export default function FunctioneelBeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
