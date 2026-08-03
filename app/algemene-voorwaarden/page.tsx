import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";

import { LegalDocument } from "@/components/rebrand/LegalDocument";
import { SiteFooter, SiteHeader } from "@/components/rebrand/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Algemene voorwaarden | Digitech Solutions" },
  description: "Lees de algemene voorwaarden voor zakelijke opdrachten van Digitech Solutions.",
  alternates: { canonical: "https://digitechsolutions.nl/algemene-voorwaarden" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  const source = readFileSync(join(process.cwd(), "algemene-voorwaarden-digitech-solutions.md"), "utf8");
  return (
    <div className="site-shell">
      <SiteHeader />
      <LegalDocument source={source} />
      <SiteFooter />
    </div>
  );
}
