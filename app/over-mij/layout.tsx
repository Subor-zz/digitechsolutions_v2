import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Subor Cheung | ZZP Applicatiebeheerder & Functioneel Beheerder",
  description: "ZZP applicatiebeheerder en functioneel beheerder met 9+ jaar IT-ervaring en 11 jaar finance-achtergrond. Breda, EU-remote.",
  openGraph: {
    title: "Over Subor Cheung | ZZP Applicatiebeheerder & Functioneel Beheerder",
    description: "ZZP applicatiebeheerder en functioneel beheerder met 9+ jaar IT-ervaring en 11 jaar finance-achtergrond.",
    type: "website",
    url: "https://www.digitechsolutions.nl/over-mij"
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Subor Cheung | ZZP Applicatiebeheerder & Functioneel Beheerder",
    description: "ZZP applicatiebeheerder en functioneel beheerder met 9+ jaar IT-ervaring en 11 jaar finance-achtergrond."
  },
  alternates: {
    canonical: "https://www.digitechsolutions.nl/over-mij"
  }
};

export default function OverMijLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
