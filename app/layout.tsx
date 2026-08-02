import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Workflow- en applicatiemodernisering | Digitech Solutions",
    template: "%s | Digitech Solutions",
  },
  description:
    "Digitech Solutions helpt mkb-bedrijven en scale-ups verouderde processen en applicaties gericht te moderniseren.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
