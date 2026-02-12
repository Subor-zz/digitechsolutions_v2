import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productconsultatie & Technische Validatie | Digitech Solutions",
  description: "Technische validatie van productideeën, haalbaarheidsanalyse, scope-bepaling en risico-inventarisatie.",
  openGraph: {
    title: "Productconsultatie & Technische Validatie | Digitech Solutions",
    description: "Technische validatie van productideeën, haalbaarheidsanalyse, scope-bepaling en risico-inventarisatie.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/productconsultatie"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/productconsultatie" }
};

export default function ProductconsultatieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
