import type { Metadata } from "next";
import Link from "next/link";

import { BrandLockup } from "@/components/rebrand/BrandLockup";

export const metadata: Metadata = {
  title: "Modernization Scan",
  description:
    "Breng workflows, applicaties, risico's en de verstandigste eerste moderniseringsstap in kaart.",
  alternates: { canonical: "/modernization-scan" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/modernization-scan",
    siteName: "Digitech Solutions",
    title: "Modernization Scan | Digitech Solutions",
    description:
      "Breng workflows, applicaties, risico's en de verstandigste eerste moderniseringsstap in kaart.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modernization Scan | Digitech Solutions",
    description:
      "Breng workflows, applicaties, risico's en de verstandigste eerste moderniseringsstap in kaart.",
  },
};

const scanSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://digitechsolutions.nl/modernization-scan#service",
  name: "Modernization Scan",
  url: "https://digitechsolutions.nl/modernization-scan",
  description:
    "Een afgebakende analyse van workflows, applicaties of de samenhang daartussen, met risico's, afhankelijkheden en een concrete moderniseringsroute.",
  provider: { "@id": "https://digitechsolutions.nl/#organization" },
  serviceType: "Moderniseringsanalyse",
  areaServed: ["Nederland", "België"],
  offers: {
    "@type": "Offer",
    price: "1499",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://digitechsolutions.nl/modernization-scan",
  },
};

const routes = [
  {
    title: "Workflow",
    description: "Overdrachten, handwerk en uitzonderingen vertragen het dagelijkse proces.",
  },
  {
    title: "Applicatie",
    description: "Legacy, integraties of technische afhankelijkheden maken verandering riskant.",
  },
  {
    title: "Gecombineerd",
    description: "Proces en systeem houden elkaar tegelijk vast.",
  },
  {
    title: "Nog onzeker",
    description: "Je merkt de frictie, maar hoeft de technische oorzaak nog niet te kennen.",
  },
] as const;

const emailHref =
  "mailto:subor@digitechsolutions.nl?subject=Modernization%20Scan&body=Organisatie%3A%0A%0ARoute%20(workflow%2C%20applicatie%2C%20gecombineerd%20of%20onzeker)%3A%0A%0AWaar%20merken%20jullie%20de%20meeste%20frictie%3F%0A%0AWat%20zou%20er%20moeten%20verbeteren%3F%0A%0AWie%20is%20betrokken%20bij%20een%20vervolggesprek%3F%0A";

export default function ModernizationScanPage() {
  return (
    <div className="scan-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scanSchema).replace(/</g, "\\u003c") }}
      />
      <a className="skip-link" href="#scan-inhoud">
        Ga naar de hoofdinhoud
      </a>
      <header className="scan-page__header">
        <Link className="scan-page__brand" href="/" aria-label="Digitech Solutions homepage">
          <BrandLockup />
        </Link>
        <Link className="text-link text-link--light" href="/">
          Terug naar de website
        </Link>
      </header>

      <main id="scan-inhoud">
        <section className="scan-page__hero" aria-labelledby="scan-page-heading">
          <div className="container scan-page__hero-layout">
            <div>
              <p className="section-kicker section-kicker--light">Modernization Scan</p>
              <h1 id="scan-page-heading">Maak de eerstvolgende stap bespreekbaar.</h1>
            </div>
            <div className="scan-page__intro">
              <p>
                Je hoeft nog niet te weten wat er gebouwd moet worden. Beschrijf waar het werk
                vertraagt, welke systemen daarbij betrokken zijn en wat er op het spel staat.
              </p>
              <a className="button button--primary" href={emailHref}>
                Start de intake per e-mail <span aria-hidden="true">↗</span>
              </a>
              <small>De intake vraagt niet om wachtwoorden, broncode of gevoelige persoonsgegevens.</small>
            </div>
          </div>
        </section>

        <section className="scan-page__section scan-page__section--paper" aria-labelledby="route-heading">
          <div className="container">
            <div className="scan-page__section-heading">
              <p>01 / Route</p>
              <h2 id="route-heading">Kies wat het dichtst in de buurt komt.</h2>
            </div>
            <div className="scan-page__routes">
              {routes.map((route) => (
                <article key={route.title}>
                  <h3>{route.title}</h3>
                  <p>{route.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scan-page__section" aria-labelledby="share-heading">
          <div className="container scan-page__brief-grid">
            <div>
              <p className="scan-page__index">02 / Context</p>
              <h2 id="share-heading">Wat helpt om de situatie te begrijpen?</h2>
            </div>
            <div className="scan-page__columns">
              <div>
                <h3>Wel delen</h3>
                <ul>
                  <li>Waar medewerkers tijd verliezen of herstelwerk doen</li>
                  <li>Welke processen en systemen geraakt worden</li>
                  <li>Wat een verbetering praktisch moet opleveren</li>
                  <li>Wie betrokken is bij besluiten en dagelijks gebruik</li>
                </ul>
              </div>
              <div>
                <h3>Niet delen</h3>
                <ul>
                  <li>Wachtwoorden, sleutels of toegangscodes</li>
                  <li>Broncode of volledige databases</li>
                  <li>Bijzondere of gevoelige persoonsgegevens</li>
                  <li>Vertrouwelijke documenten zonder afstemming</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="scan-page__section scan-page__section--paper" aria-labelledby="next-heading">
          <div className="container scan-page__brief-grid">
            <div>
              <p className="scan-page__index">03 / Vervolg</p>
              <h2 id="next-heading">Wat gebeurt er daarna?</h2>
            </div>
            <ol className="scan-page__steps">
              <li><span>01</span><p>Subor beoordeelt de context en benoemt wat nog verduidelijking vraagt.</p></li>
              <li><span>02</span><p>In een verkennend gesprek worden doel, risico, eigenaarschap en grenzen aangescherpt.</p></li>
              <li><span>03</span><p>Je krijgt duidelijkheid over een verstandige eerste stap en of Digitech daarbij past.</p></li>
            </ol>
          </div>
        </section>

        <section className="scan-page__cta" aria-labelledby="scan-cta-heading">
          <div className="container">
            <p>Geen oplossing vooraf invullen</p>
            <h2 id="scan-cta-heading">Begin bij wat er vandaag vastloopt.</h2>
            <a className="button button--primary" href={emailHref}>
              Start de intake per e-mail <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
