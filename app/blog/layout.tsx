import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Digitech Solutions",
  description: "Artikelen over fractional CTO, IT-consultancy, full-stack development en technische strategie voor startups en MKB.",
  openGraph: {
    title: "Blog | Digitech Solutions",
    description: "Artikelen over fractional CTO, IT-consultancy, full-stack development en technische strategie.",
    url: "https://digitechsolutions.nl/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
