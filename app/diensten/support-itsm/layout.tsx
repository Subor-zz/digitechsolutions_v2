import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITSM Support Specialist Inhuren | ITIL Service - Digitech",
  description: "ITSM support specialist inhuren voor professionele IT support. ITIL 4 gecertificeerd, 15+ jaar ervaring. Support & ITSM uitbesteden aan een service management ZZP specialist. Direct inzetbaar.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "ITSM Support Specialist Inhuren | ITIL-Georganiseerde Service",
    description: "ITSM support specialist inhuren voor professionele IT support. ITIL 4 gecertificeerd, 15+ jaar ervaring. Support & ITSM uitbesteden aan een service management ZZP specialist.",
    images: ["https://www.digitechsolutions.nl/images/og-itsm-support.jpg"],
  },
};

export default function SupportITSMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
