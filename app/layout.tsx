import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitechsolutions.nl"),
  applicationName: "Digitech Solutions",
  title: {
    default: "Workflow- en applicatiemodernisering | Digitech Solutions",
    template: "%s | Digitech Solutions",
  },
  description:
    "Digitech Solutions helpt mkb-bedrijven en scale-ups verouderde processen en applicaties gericht te moderniseren.",
  authors: [{ name: "Subor Cheung", url: "https://digitechsolutions.nl/#over-digitech" }],
  creator: "Subor Cheung",
  publisher: "Digitech Solutions",
  category: "Workflow- en applicatiemodernisering",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
