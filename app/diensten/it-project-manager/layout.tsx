import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Project Manager (ZZP) | Digitech Solutions",
  description: "ZZP IT Project Manager voor planning, stakeholdermanagement, releases en delivery. Senior projectmanagement voor IT-projecten.",
  openGraph: {
    title: "IT Project Manager (ZZP) | Digitech Solutions",
    description: "ZZP IT Project Manager voor planning, stakeholdermanagement, releases en delivery. Senior projectmanagement voor IT-projecten.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/it-project-manager"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/it-project-manager" }
};

export default function ITProjectManagerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
