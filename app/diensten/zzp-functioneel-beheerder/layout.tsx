import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Functioneel Beheerder | Digitech Solutions",
  description: "Ervaren ZZP functioneel beheerder voor stabiele applicaties en gestructureerde processen. Interim inzetbaar voor beheer en optimalisatie.",
  openGraph: {
    title: "ZZP Functioneel Beheerder | Digitech Solutions",
    description: "Ervaren ZZP functioneel beheerder voor stabiele applicaties en gestructureerde processen. Interim inzetbaar voor beheer en optimalisatie.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/zzp-functioneel-beheerder"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/zzp-functioneel-beheerder" }
};

export default function ZZPFunctioneelBeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
