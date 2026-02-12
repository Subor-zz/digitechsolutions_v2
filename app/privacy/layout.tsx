import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring | Digitech Solutions",
  description: "Privacyverklaring van Digitech Solutions. Lees hoe wij met jouw persoonsgegevens omgaan.",
  openGraph: {
    title: "Privacyverklaring | Digitech Solutions",
    description: "Privacyverklaring van Digitech Solutions. Lees hoe wij met jouw persoonsgegevens omgaan.",
    type: "website",
    url: "https://digitechsolutions.nl/privacy"
  },
  alternates: {
    canonical: "https://digitechsolutions.nl/privacy"
  }
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
