import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support & ITSM diensten | Structuur voor MKB en scale-ups",
  description: "IT Service Management outsourcing voor MKB en scale-ups. Van reactieve support naar volwassen ITSM met SLA's, KPI's en gestructureerde processen. Plan een vrijblijvende intake.",
  openGraph: {
    title: "IT Support & ITSM diensten | Structuur voor MKB en scale-ups",
    description: "IT Service Management outsourcing voor MKB en scale-ups. Van reactieve support naar volwassen ITSM met SLA's, KPI's en gestructureerde processen. Plan een vrijblijvende intake.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/support-itsm"
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/support-itsm" }
};

export default function SupportITSMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
