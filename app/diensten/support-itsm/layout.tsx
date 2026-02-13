import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support & ITSM Diensten | ITIL 4 voor MKB en Scale-ups",
  description: "Professionele IT support en ITSM diensten volgens ITIL 4. Van helpdesk naar strategische partner. Incident, problem en change management voor MKB.",
  keywords: ["IT support", "ITSM", "ITIL", "IT support MKB", "ITSM uitbesteden", "ITIL implementatie", "helpdesk professionalisering", "IT service management consultant", "SLA management", "IT helpdesk uitbesteden"],
  robots: "index, follow",
  openGraph: {
    title: "IT Support & ITSM Diensten | ITIL 4 voor MKB en Scale-ups",
    description: "Professionele IT support en ITSM diensten volgens ITIL 4. Van helpdesk naar strategische partner. Incident, problem en change management voor MKB.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/support-itsm",
    locale: "nl_NL"
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/support-itsm" }
};

export default function SupportITSMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
