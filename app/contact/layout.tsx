import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Digitech Solutions IT-consultancy",
  description: "Neem contact op met Digitech Solutions voor IT-consultancy, development of fractional CTO. Snelle intake, duidelijke scope.",
  openGraph: {
    title: "Contact | Digitech Solutions IT-consultancy",
    description: "Neem contact op met Digitech Solutions voor IT-consultancy, development of fractional CTO.",
    type: "website",
    url: "https://digitechsolutions.nl/contact"
  },
  alternates: {
    canonical: "https://digitechsolutions.nl/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
