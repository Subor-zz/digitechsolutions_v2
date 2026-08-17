import type { Metadata } from "next";

import { IntroductionForm } from "@/components/rebrand/IntroductionForm";
import { SiteFooter, SiteHeader } from "@/components/rebrand/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Kennismaken | Digitech Solutions" },
  description: "Plan een korte kennismaking over een vastgelopen workflow of moeilijk aanpasbare applicatie.",
  alternates: { canonical: "https://digitechsolutions.nl/kennismaking" },
  robots: { index: false, follow: true },
};

export default function IntroductionPage() {
  return <div className="site-shell"><SiteHeader primaryCtaHref="#kennismaking" /><main id="hoofdinhoud" className="problem-exploration-page"><header className="problem-exploration-hero"><div className="container"><p className="section-kicker section-kicker--light">Korte route</p><h1>Plan een kennismaking van 20 minuten.</h1><p>Bespreek waar uw organisatie op vastloopt, zonder vooraf een uitgebreid formulier in te vullen.</p></div></header><IntroductionForm /></main><SiteFooter /></div>;
}
