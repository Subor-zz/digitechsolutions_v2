import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Digitech Solutions",
  description: "Artikelen over IT beheer, applicaties, ITSM, development en technische keuzes.",
  alternates: {
    canonical: "https://www.digitechsolutions.nl/blog",
  },
  openGraph: {
    title: "Blog | Digitech Solutions",
    description: "Artikelen over IT beheer, applicaties, ITSM, development en technische keuzes.",
    url: "https://www.digitechsolutions.nl/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
