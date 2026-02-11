import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-stack development | Web- & app-ontwikkeling | Digitech",
  description: "Van MVP tot schaalbaar product. Web- en mobiele apps gebouwd voor onderhoud, performance en groei. Geen snelle hacks.",
  openGraph: {
    title: "Full-stack development | Web- & app-ontwikkeling | Digitech",
    description: "Van MVP tot schaalbaar product. Web- en mobiele apps gebouwd voor onderhoud, performance en groei. Geen snelle hacks.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/full-stack-development"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/full-stack-development" }
};

export default function FullStackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
