import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";

import { LegalDocument } from "@/components/rebrand/LegalDocument";
import { SiteFooter, SiteHeader } from "@/components/rebrand/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Privacyverklaring | Digitech Solutions" },
  description: "Lees hoe Digitech Solutions persoonsgegevens verwerkt en beschermt.",
  alternates: { canonical: "https://digitechsolutions.nl/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  const source = readFileSync(join(process.cwd(), "privacyverklaring-digitech-solutions.md"), "utf8");
  return (
    <div className="site-shell">
      <SiteHeader />
      <LegalDocument source={source} />
      <SiteFooter />
    </div>
  );
}
