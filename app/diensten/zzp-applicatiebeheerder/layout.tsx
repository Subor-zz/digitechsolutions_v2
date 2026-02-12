import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Applicatiebeheerder | Digitech Solutions",
  description: "Ervaren ZZP applicatiebeheerder voor stabiele applicaties. Incident- en change management, monitoring, releases en gebruikersbeheer.",
  openGraph: {
    title: "ZZP Applicatiebeheerder | Digitech Solutions",
    description: "Ervaren ZZP applicatiebeheerder voor stabiele applicaties. Incident- en change management, monitoring, releases en gebruikersbeheer.",
    type: "website",
    url: "https://digitechsolutions.nl/diensten/zzp-applicatiebeheerder"
  },
  alternates: { canonical: "https://digitechsolutions.nl/diensten/zzp-applicatiebeheerder" }
};

export default function ZZPApplicatiebeheerderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
