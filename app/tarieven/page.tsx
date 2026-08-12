import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/rebrand/SiteChrome";

export const metadata: Metadata = { title: "Investering", description: "Bekijk de vaste investering en afbakening van de Modernization Scan van Digitech Solutions.", alternates: { canonical: "/tarieven" } };

export default function InvestmentPage() {
  return <div className="site-shell"><SiteHeader primaryCtaHref="/kennismaking" /><main id="hoofdinhoud" className="scan-page"><section className="problem-exploration-hero"><div className="container"><p className="section-kicker section-kicker--light">Investering</p><h1>Begin met een afgebakende beslissing.</h1><p>De Modernization Scan is een zelfstandig analyseproduct met een vaste investering. Uitvoering volgt alleen via een afzonderlijke scope en offerte.</p></div></section><section className="scan-page__section scan-page__section--paper"><div className="container scan-page__brief-grid"><div><p className="scan-page__index">Modernization Scan</p><h2>€1.499 exclusief btw</h2></div><div><p>In twee werkdagen onderzoeken we één afgebakend proces, applicatie of probleemgebied, met maximaal drie interviews.</p><ul><li>Visuele kaart van de huidige situatie</li><li>Knelpunten, risico&apos;s en afhankelijkheden</li><li>Onderbouwde oplossingsrichtingen</li><li>Advies voor de eerste moderniseringsstap</li></ul><p>Een vervolgopdracht is niet verplicht.</p></div></div></section><section className="scan-page__cta"><div className="container"><p>Weet u nog niet welke route past?</p><h2>Bespreek eerst de situatie.</h2><div className="hero__actions"><Link className="button button--primary" href="/kennismaking">Plan een kennismaking <span aria-hidden="true">↗</span></Link><Link className="text-link text-link--light" href="/probleemverkenning">Start de probleemverkenning</Link></div></div></section></main><SiteFooter /></div>;
}
