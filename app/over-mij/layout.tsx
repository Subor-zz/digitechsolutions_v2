import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Subor Cheung | IT-consultant & Developer (20+ jaar ervaring)",
  description: "9+ jaar IT-consultancy, 11 jaar finance. Fractional CTO, full-stack developer, projectmanager. Breda, EU-remote.",
  openGraph: {
    title: "Over Subor Cheung | IT-consultant & Developer (20+ jaar ervaring)",
    description: "9+ jaar IT-consultancy, 11 jaar finance. Fractional CTO, full-stack developer, projectmanager.",
    type: "website",
    url: "https://digitechsolutions.nl/over-mij"
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Subor Cheung | IT-consultant & Developer (20+ jaar ervaring)",
    description: "9+ jaar IT-consultancy, 11 jaar finance. Fractional CTO, full-stack developer."
  },
  alternates: {
    canonical: "https://digitechsolutions.nl/over-mij"
  }
};

export default function OverMijLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
