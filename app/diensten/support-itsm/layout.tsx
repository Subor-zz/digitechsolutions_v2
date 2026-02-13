import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITSM Support Specialist Inhuren | ITIL-Georganiseerde Service - Digitech Solutions",
  description: "ITSM support specialist inhuren voor professionele IT support. ITIL 4 gecertificeerd, 15+ jaar ervaring. Support & ITSM uitbesteden aan een service management ZZP specialist. Direct inzetbaar.",
  keywords: [
    "ITSM support specialist",
    "Support & ITSM inhuren",
    "ITIL support specialist",
    "Service management ZZP",
    "ITSM uitbesteden",
    "IT support specialist inhuren",
    "ITIL 4 consultant",
    "helpdesk professionalisering",
    "service desk specialist",
    "IT service management consultant",
    "incident management specialist",
    "change management consultant"
  ],
  robots: "index, follow",
  openGraph: {
    title: "ITSM Support Specialist Inhuren | ITIL-Georganiseerde Service",
    description: "ITSM support specialist inhuren voor professionele IT support. ITIL 4 gecertificeerd, 15+ jaar ervaring. Support & ITSM uitbesteden aan een service management ZZP specialist.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/support-itsm",
    locale: "nl_NL",
    images: [
      {
        url: "https://www.digitechsolutions.nl/images/og-itsm-support.jpg",
        width: 1200,
        height: 630,
        alt: "ITSM Support Specialist Inhuren - Digitech Solutions"
      }
    ]
  },
  alternates: {
    canonical: "https://www.digitechsolutions.nl/diensten/support-itsm"
  }
};

export default function SupportITSMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
