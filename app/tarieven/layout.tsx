import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarieven & samenwerkingsvormen | Digitech Solutions",
  description: "Indicatieve tarieven voor IT-consultancy, fractional CTO en development. Transparant, professioneel en afgestemd op jouw situatie.",
  openGraph: {
    title: "Tarieven & samenwerkingsvormen | Digitech Solutions",
    description: "Indicatieve tarieven voor IT-consultancy, fractional CTO en development. Transparant, professioneel en afgestemd op jouw situatie.",
    type: "website",
    url: "https://digitechsolutions.nl/tarieven"
  },
  alternates: {
    canonical: "https://digitechsolutions.nl/tarieven"
  }
};

export default function TarievenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
