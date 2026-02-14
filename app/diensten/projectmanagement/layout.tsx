import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technisch projectmanagement voor IT-projecten | Digitech",
  description: "Structuur, scope en overzicht voor softwareprojecten. Technisch onderlegd projectmanagement dat grip en voorspelbaarheid brengt.",
  openGraph: {
    title: "Technisch projectmanagement voor IT-projecten | Digitech",
    description: "Structuur, scope en overzicht voor softwareprojecten. Technisch onderlegd projectmanagement dat grip en voorspelbaarheid brengt.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/projectmanagement"
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/projectmanagement" }
};

export default function ProjectmanagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
