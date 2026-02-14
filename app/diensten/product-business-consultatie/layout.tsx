import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productconsultatie & technische validatie | Digitech",
  description: "Van idee naar heldere MVP-scope. Productdenken met focus op haalbaarheid, prioriteiten en technische impact.",
  openGraph: {
    title: "Productconsultatie & technische validatie | Digitech",
    description: "Van idee naar heldere MVP-scope. Productdenken met focus op haalbaarheid, prioriteiten en technische impact.",
    type: "website",
    url: "https://www.digitechsolutions.nl/diensten/product-business-consultatie"
  },
  alternates: { canonical: "https://www.digitechsolutions.nl/diensten/product-business-consultatie" }
};

export default function ProductConsultatieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
