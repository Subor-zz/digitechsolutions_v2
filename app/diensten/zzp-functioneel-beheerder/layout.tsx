import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Functioneel Beheerder | BiSL, ITIL & UAT Specialist | Digitech Solutions",
  description: "Ervaren ZZP functioneel beheerder met expertise in BiSL, ITIL, UAT en requirements engineering. Interim inzetbaar voor beheer, optimalisatie en implementatie.",
  keywords: ["ZZP functioneel beheerder", "BiSL", "functioneel beheer", "UAT", "requirements engineering", "change management", "interim functioneel beheerder"],
  openGraph: {
    title: "ZZP Functioneel Beheerder | BiSL, ITIL & UAT Specialist",
    description: "Ervaren ZZP functioneel beheerder met expertise in BiSL, ITIL, UAT en requirements engineering. Interim inzetbaar voor beheer, optimalisatie en implementatie.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/zzp-functioneel-beheerder"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/zzp-functioneel-beheerder" }
};

export default function ZZPFunctioneelBeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
