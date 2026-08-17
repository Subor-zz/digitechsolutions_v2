import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/rebrand/SiteChrome";

const canonical = "https://digitechsolutions.nl/cases/ai-documentvertaling";

export const metadata: Metadata = {
  title: { absolute: "AI-documentvertaling van 2.000+ pagina's | Praktijkcase" },
  description:
    "Hoe een beveiligde AI-workflow 35 technische en gebruikersdocumenten van ruim 2.000 pagina's vertaalde met glossary, guardrails en menselijke kwaliteitscontrole.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "nl_NL",
    url: canonical,
    siteName: "Digitech Solutions",
    title: "AI-documentvertaling van 2.000+ pagina's",
    description:
      "Een geanonimiseerde praktijkcase over consistente documentvertaling zonder interne data publiek te maken.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: "AI-documentvertaling van 2.000+ pagina's",
    description:
      "Een geanonimiseerde praktijkcase over een beveiligde AI-workflow voor technische en gebruikersdocumentatie.",
    inLanguage: "nl-NL",
    author: { "@id": "https://digitechsolutions.nl/#subor-cheung" },
    publisher: { "@id": "https://digitechsolutions.nl/#organization" },
    mainEntityOfPage: canonical,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://digitechsolutions.nl/" },
      { "@type": "ListItem", position: 2, name: "Praktijkcases", item: "https://digitechsolutions.nl/#werkproduct" },
      { "@type": "ListItem", position: 3, name: "AI-documentvertaling", item: canonical },
    ],
  },
] as const;

const approach = [
  {
    title: "Glossary en afspraken",
    description:
      "Belangrijke producttermen, interfacewoorden en formuleringen werden vooraf vastgelegd om variatie tussen documenten te beperken.",
  },
  {
    title: "Guardrails",
    description:
      "De workflow kreeg duidelijke grenzen voor gegevensgebruik, terminologie, documentstructuur en uitzonderingen die menselijke beoordeling vereisten.",
  },
  {
    title: "Vertaling in twee passes",
    description:
      "Een eerste vertaalpassage werd gevolgd door een afzonderlijke controle op betekenis, consistentie en bruikbaarheid voor technische en niet-technische lezers.",
  },
  {
    title: "QA en oplevering",
    description:
      "Afwijkingen en aandachtspunten werden gerapporteerd, waarna de technische documentatie en gebruikershandleidingen gecontroleerd zijn opgeleverd.",
  },
] as const;

export default function TranslationCasePage() {
  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <SiteHeader primaryCtaHref="/kennismaking" />
      <main id="hoofdinhoud" className="scan-page">
        <header className="problem-exploration-hero">
          <div className="container">
            <p className="section-kicker section-kicker--light">Geanonimiseerde praktijkcase</p>
            <h1>Meer dan 2.000 pagina&apos;s vertalen zonder interne data publiek te maken.</h1>
            <p>Een Nederlandse POS-softwareorganisatie wilde technische documentatie en gebruikershandleidingen vertalen naar één doeltaal. Consistente terminologie, vertrouwelijkheid en controleerbare kwaliteit waren daarbij randvoorwaarden.</p>
          </div>
        </header>

        <section className="scan-page__section scan-page__section--paper" aria-labelledby="case-situatie">
          <div className="container scan-page__brief-grid">
            <div>
              <p className="scan-page__index">01 / Situatie</p>
              <h2 id="case-situatie">35 documenten, ruim 2.000 pagina&apos;s.</h2>
            </div>
            <div>
              <p>De bronbestanden waren digitaal leesbaar; OCR was niet nodig. Een traditionele handmatige aanpak was berekend op ruim 1.500 werkuren.</p>
              <p>De uitdaging was daarom niet alleen vertalen, maar een werkwijze ontwerpen die grote volumes aankon zonder interne documentatie in publiek toegankelijke verwerkingsroutes terecht te laten komen.</p>
            </div>
          </div>
        </section>

        <section className="scan-page__section" aria-labelledby="case-aanpak">
          <div className="container">
            <div className="scan-page__section-heading">
              <p>02 / Aanpak</p>
              <h2 id="case-aanpak">Automatiseren met vaste kwaliteitsgrenzen.</h2>
            </div>
            <div className="scan-page__routes">
              {approach.map((step) => (
                <article key={step.title}><h3>{step.title}</h3><p>{step.description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="scan-page__section scan-page__section--paper" aria-labelledby="case-resultaat">
          <div className="container scan-page__brief-grid">
            <div>
              <p className="scan-page__index">03 / Resultaat</p>
              <h2 id="case-resultaat">Van een berekende 1.500+ uur naar circa 80 werkelijk bestede uren.</h2>
            </div>
            <div>
              <p>De nieuwe workflow bracht de benodigde inzet terug tot ongeveer 80 uur voor inrichting, verwerking, controle, kwaliteitsrapportage en oplevering. Dat is circa 95% minder dan de vooraf berekende volledig handmatige inspanning.</p>
              <p>De 35 vertaalde documenten omvatten samen meer dan 2.000 pagina&apos;s. De technische documentatie en gebruikershandleidingen zijn opgeleverd en door de klant geaccepteerd.</p>
              <p><strong>Meetbasis:</strong> 1.500+ uur is een berekende handmatige referentie. Circa 80 uur is de werkelijk bestede inzet binnen de AI-ondersteunde workflow. De waarden zijn daarom een praktische vergelijking en geen gecontroleerd wetenschappelijk experiment.</p>
            </div>
          </div>
        </section>

        <section className="scan-page__section" aria-labelledby="case-rol">
          <div className="container scan-page__brief-grid">
            <div>
              <p className="scan-page__index">04 / Rol Digitech</p>
              <h2 id="case-rol">Workflowontwerp, guardrails en kwaliteitsborging.</h2>
            </div>
            <div>
              <p>Subor Cheung vervulde de rol van AI workflow consultant. Digitech Solutions ontwierp de glossary, guardrails, vertaalpasses en QA-rapportage en bewaakte de technische en gebruikersgerichte oplevering.</p>
              <p>De naam van de opdrachtgever is niet gepubliceerd omdat daarvoor geen afzonderlijke toestemming is gevraagd. De projectinhoud is geanonimiseerd.</p>
            </div>
          </div>
        </section>

        <section className="scan-page__cta" aria-labelledby="case-cta">
          <div className="container">
            <p>Vergelijkbaar documentvraagstuk?</p>
            <h2 id="case-cta">Onderzoek eerst waar automatisering veilig waarde toevoegt.</h2>
            <div className="hero__actions">
              <Link className="button button--primary" href="/kennismaking">Plan een kennismaking <span aria-hidden="true">↗</span></Link>
              <Link className="text-link text-link--light" href="/workflowmodernisering">Bekijk workflowmodernisering</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
