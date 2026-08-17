import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/rebrand/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Over Subor Cheung en Digitech Solutions" },
  description:
    "Maak kennis met Subor Cheung, CEO van Digitech Solutions, en lees hoe verantwoordelijkheid, expertise en uitvoering binnen moderniseringstrajecten zijn georganiseerd.",
  alternates: { canonical: "https://digitechsolutions.nl/over" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    locale: "nl_NL",
    url: "https://digitechsolutions.nl/over",
    siteName: "Digitech Solutions",
    title: "Over Subor Cheung en Digitech Solutions",
    description:
      "Founder-led workflow- en applicatiemodernisering met één centraal aanspreekpunt en duidelijke eindverantwoordelijkheid.",
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://digitechsolutions.nl/over#profile",
  url: "https://digitechsolutions.nl/over",
  name: "Over Subor Cheung en Digitech Solutions",
  mainEntity: {
    "@type": "Person",
    "@id": "https://digitechsolutions.nl/#subor-cheung",
    name: "Subor Cheung",
    jobTitle: "CEO",
    url: "https://digitechsolutions.nl/over",
    sameAs: ["https://www.linkedin.com/in/subor-cheung-3baab21a/"],
    worksFor: { "@id": "https://digitechsolutions.nl/#organization" },
    knowsAbout: [
      "Proces- en workflowanalyse",
      "Applicatiemodernisering",
      "Requirements en gebruikersacceptatietesten",
      "AI-ondersteunde automatisering",
      "Integraties en API's",
      "Kwaliteitsborging, documentatie en overdracht",
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }}
      />
      <SiteHeader primaryCtaHref="/kennismaking" />
      <main id="hoofdinhoud" className="scan-page">
        <header className="problem-exploration-hero">
          <div className="container">
            <p className="section-kicker section-kicker--light">Over Digitech Solutions</p>
            <h1>Eén aanspreekpunt. Duidelijke eindverantwoordelijkheid.</h1>
            <p>Digitech Solutions is opgericht door Subor Cheung en werkt founder-led vanuit Breda voor organisaties in Nederland en België.</p>
          </div>
        </header>

        <section className="scan-page__section scan-page__section--paper" aria-labelledby="verantwoordelijkheid">
          <div className="container scan-page__brief-grid">
            <div>
              <p className="scan-page__index">01 / Verantwoordelijkheid</p>
              <h2 id="verantwoordelijkheid">De opdracht blijft centraal aangestuurd.</h2>
            </div>
            <div>
              <p>U heeft vanaf de eerste analyse rechtstreeks contact met degene die verantwoordelijk blijft voor scope, communicatie, belangrijke keuzes, kwaliteitscontrole en oplevering.</p>
              <p>Voor specialistische uitvoering werkt Digitech Solutions waar nodig met zorgvuldig geselecteerde professionals. Hun inzet verandert niets aan de verantwoordelijkheidsverdeling: Digitech blijft het centrale aanspreekpunt en bewaakt de samenhang van het traject.</p>
            </div>
          </div>
        </section>

        <section className="scan-page__section" aria-labelledby="expertise">
          <div className="container">
            <div className="scan-page__section-heading">
              <p>02 / Expertise</p>
              <h2 id="expertise">Proces, applicatie en uitvoering in samenhang.</h2>
            </div>
            <div className="scan-page__routes">
              <article><h3>Workflowanalyse</h3><p>Werkstromen, overdrachten, uitzonderingen en eigenaarschap zichtbaar maken.</p></article>
              <article><h3>Applicatiemodernisering</h3><p>Behouden, verbeteren, koppelen of vervangen onderbouwd tegen elkaar afwegen.</p></article>
              <article><h3>AI en automatisering</h3><p>AI-ondersteunde oplossingen inzetten met duidelijke guardrails, menselijke controle en kwaliteitsrapportage.</p></article>
              <article><h3>Borging</h3><p>Requirements, UAT, documentatie en overdracht onderdeel maken van de uitvoering.</p></article>
            </div>
          </div>
        </section>

        <section className="scan-page__section scan-page__section--paper" aria-labelledby="achtergrond">
          <div className="container scan-page__brief-grid">
            <div>
              <p className="scan-page__index">03 / Achtergrond</p>
              <h2 id="achtergrond">Van operationeel probleem naar beheerbare oplossing.</h2>
            </div>
            <div>
              <p>Subor combineert een achtergrond in applicatiebeheer, functioneel beheer en procesverbetering met technische kennis van automatisering, koppelingen en AI-ondersteunde softwareontwikkeling.</p>
              <p>Die combinatie helpt om bedrijfsproblemen niet uitsluitend vanuit techniek of proces te bekijken, maar vanuit de samenhang tussen mensen, werkwijze, informatie en systemen.</p>
              <a className="text-link" href="https://www.linkedin.com/in/subor-cheung-3baab21a/" rel="me external">Bekijk het LinkedIn-profiel van Subor</a>
            </div>
          </div>
        </section>

        <section className="scan-page__cta" aria-labelledby="over-cta">
          <div className="container">
            <p>Begin bij de situatie</p>
            <h2 id="over-cta">Bespreek wat uw organisatie vandaag tegenhoudt.</h2>
            <div className="hero__actions">
              <Link className="button button--primary" href="/kennismaking">Plan een kennismaking <span aria-hidden="true">↗</span></Link>
              <Link className="text-link text-link--light" href="/probleemverkenning">Start de uitgebreide probleemverkenning</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
