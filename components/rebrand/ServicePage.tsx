import Link from "next/link";

import { SiteFooter, SiteHeader } from "./SiteChrome";

type ServicePageProps = {
  kicker: string;
  title: string;
  intro: string;
  situations: readonly string[];
  approach: readonly { title: string; description: string }[];
  deliverables: readonly string[];
  boundary: string;
};

export function ServicePage({ kicker, title, intro, situations, approach, deliverables, boundary }: ServicePageProps) {
  return (
    <div className="site-shell">
      <SiteHeader primaryCtaHref="/kennismaking" />
      <main id="hoofdinhoud" className="scan-page">
        <section className="problem-exploration-hero" aria-labelledby="service-heading">
          <div className="container"><p className="section-kicker section-kicker--light">{kicker}</p><h1 id="service-heading">{title}</h1><p>{intro}</p></div>
        </section>
        <section className="scan-page__section scan-page__section--paper" aria-labelledby="situations-heading">
          <div className="container scan-page__brief-grid"><div><p className="scan-page__index">01 / Herkenning</p><h2 id="situations-heading">Wanneer deze route passend kan zijn.</h2></div><ul>{situations.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
        <section className="scan-page__section" aria-labelledby="approach-heading">
          <div className="container"><div className="scan-page__section-heading"><p>02 / Aanpak</p><h2 id="approach-heading">Eerst begrijpen, daarna gericht verbeteren.</h2></div><div className="scan-page__routes">{approach.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div>
        </section>
        <section className="scan-page__section scan-page__section--paper" aria-labelledby="output-heading">
          <div className="container scan-page__brief-grid"><div><p className="scan-page__index">03 / Output</p><h2 id="output-heading">Wat de opdracht concreet oplevert.</h2></div><div><ul>{deliverables.map((item) => <li key={item}>{item}</li>)}</ul><p><strong>Bewuste grens:</strong> {boundary}</p></div></div>
        </section>
        <section className="scan-page__cta" aria-labelledby="service-cta-heading"><div className="container"><p>Twee manieren om te beginnen</p><h2 id="service-cta-heading">Bespreek eerst wat er vastloopt.</h2><div className="hero__actions"><Link className="button button--primary" href="/kennismaking">Plan een kennismaking <span aria-hidden="true">↗</span></Link><Link className="text-link text-link--light" href="/probleemverkenning">Start de uitgebreide probleemverkenning</Link></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
