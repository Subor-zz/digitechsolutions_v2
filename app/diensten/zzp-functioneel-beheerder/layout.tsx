import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Functioneel Beheerder | BiSL, ITIL & UAT Specialist Inhuren",
  description: "Ervaren ZZP functioneel beheerder met BiSL- en ITIL-expertise. Interim inzetbaar voor requirements, UAT-coördinatie en change management. Direct beschikbaar.",
  keywords: ["ZZP functioneel beheerder", "interim functioneel beheerder", "freelance functioneel beheerder", "BiSL", "ITIL", "UAT specialist", "requirements engineer", "change management", "functioneel beheer inhuren", "UAT coördinatie"],
  robots: "index, follow",
  openGraph: {
    title: "ZZP Functioneel Beheerder | BiSL, ITIL & UAT Specialist Inhuren",
    description: "Ervaren ZZP functioneel beheerder met BiSL- en ITIL-expertise. Interim inzetbaar voor requirements, UAT-coördinatie en change management. Direct beschikbaar.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/zzp-functioneel-beheerder",
    locale: "nl_NL"
  },
  alternates: {
    canonical: "https://www.digitechsolutions.nl/diensten/zzp-functioneel-beheerder"
  }
};

export default function FunctioneelBeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
