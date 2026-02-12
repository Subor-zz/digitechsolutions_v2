import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applicatieconsultatie | Digitech Solutions",
  description: "Specifiek advies bij softwareselectie, vendorkeuze en implementatietrajecten. Onderdeel van IT-consultancy diensten.",
  openGraph: {
    title: "Applicatieconsultatie | Digitech Solutions",
    description: "Specifiek advies bij softwareselectie, vendorkeuze en implementatietrajecten. Onderdeel van IT-consultancy diensten.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/applicatieconsultatie"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/it-consultancy" }
};

export default function ApplicatieconsultatieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
