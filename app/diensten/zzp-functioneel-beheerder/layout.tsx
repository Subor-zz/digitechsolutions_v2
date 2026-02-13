import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Functioneel Beheerder | BiSL, ITIL & UAT Specialist | Direct Inzetbaar",
  description: "Ervaren ZZP functioneel beheerder (15+ jaar). Direct inzetbaar voor BiSL, ITIL, UAT en requirements engineering. MKB en scale-up specialist met 100+ projecten afgerond. Tarief vanaf €95/uur.",
  keywords: ["ZZP functioneel beheerder", "interim functioneel beheerder", "freelance functioneel beheerder", "BiSL", "ITIL", "UAT specialist", "requirements engineer", "change management", "UAT begeleider"],
  openGraph: {
    title: "ZZP Functioneel Beheerder | BiSL, ITIL & UAT Specialist",
    description: "Ervaren ZZP functioneel beheerder (15+ jaar). Direct inzetbaar voor BiSL, ITIL, UAT en requirements engineering. MKB en scale-up specialist met 100+ projecten afgerond. Tarief vanaf €95/uur.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/zzp-functioneel-beheerder",
    locale: "nl_NL"
  },
  alternates: {
    canonical: "https://digitechsolutions.nl/diensten/zzp-functioneel-beheerder"
  }
};

export default function FunctioneelBeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
