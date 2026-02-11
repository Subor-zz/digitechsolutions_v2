import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & IT-servicemanagement voor software | Digitech",
  description: "Rust na livegang. SLA's, supportprocessen en incidentbeheer voor maatwerksoftware en doorontwikkeling.",
  openGraph: {
    title: "Support & IT-servicemanagement voor software | Digitech",
    description: "Rust na livegang. SLA's, supportprocessen en incidentbeheer voor maatwerksoftware en doorontwikkeling.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/support-itsm"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/support-itsm" }
};

export default function SupportITSMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
