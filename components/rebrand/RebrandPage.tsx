import { BrandLockup } from "./BrandLockup";
import { FlowDiagram } from "./FlowDiagram";
import { HeroSystemMap } from "./HeroSystemMap";
import { JourneyRoute } from "./JourneyRoute";
import { MethodStack } from "./MethodStack";
import { MobileNav } from "./MobileNav";
import { NarrativeMotion } from "./NarrativeMotion";
import { ProblemExplorationForm } from "./ProblemExplorationForm";
import { homepageCopy } from "@/lib/rebrand/homepage-copy";

export function RebrandPage() {
  const { brand, navigation, hero, hiddenDrag, diagnosis, routes, founder, scan, footer } =
    homepageCopy;

  return (
    <div className="site-shell">
      <NarrativeMotion />
      <a className="skip-link" href="#hoofdinhoud">
        {navigation.skipLink}
      </a>

      <header className="site-header">
        <a className="site-header__brand" href={brand.homeHref}>
          <BrandLockup />
        </a>
        <nav className="desktop-nav" aria-label={navigation.ariaLabel}>
          {navigation.links.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button--header" href={navigation.primaryCta.href}>
          {navigation.primaryCta.label}
        </a>
        <MobileNav />
      </header>

      <main id="hoofdinhoud" className="site-journey">
        <JourneyRoute />
        <div className="story-spike">
        <section
          id="top"
          className="hero chapter chapter--dark story-spike__hero"
          aria-labelledby="hero-heading"
        >
          <div className="hero__grid" aria-hidden="true" />
          <div className="container hero__layout">
            <div className="hero__copy">
              <p className="section-kicker section-kicker--light">
                {hero.kicker}
              </p>
              <h1 id="hero-heading">{hero.headline}</h1>
              <p className="hero__lede hero__lede--full">{hero.lead}</p>
              <p className="hero__lede hero__lede--mobile">{hero.mobileLead}</p>
              <p className="hero__supporting">{hero.supporting}</p>
              <div className="hero__actions">
                <a className="button button--primary" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <span aria-hidden="true">↘</span>
                </a>
                <a className="text-link text-link--light" href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </a>
              </div>
              <p className="hero__founder">
                <span aria-hidden="true" />
                {hero.founderTrustLine}
              </p>
            </div>

            <HeroSystemMap />
          </div>
        </section>

        <section
          id="probleem"
          className="chapter chapter--paper story-spike__problem"
          aria-labelledby="probleem-heading"
        >
          <div className="container problem-intro">
            <div>
              <p className="section-kicker">{hiddenDrag.kicker}</p>
              <h2 id="probleem-heading">{hiddenDrag.headline}</h2>
            </div>
            <p className="chapter-intro">{hiddenDrag.intro}</p>
          </div>
          <div className="container">
            <div className="flow-diagram-stage">
              <FlowDiagram />
            </div>
          </div>
        </section>

        <section
          id="diagnose"
          className="chapter chapter--paper diagnosis story-spike__diagnosis"
          aria-labelledby="diagnose-heading"
        >
          <div className="container diagnosis__heading">
            <h2 id="diagnose-heading">{diagnosis.headline}</h2>
            <p>{diagnosis.intro}</p>
          </div>
          <div className="container diagnosis__layout">
            <div className="diagnosis__layers">
              {diagnosis.layers.map((layer, index) => (
                <details key={layer.title} open={index === 0}>
                  <summary>
                    <span>{layer.title}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <p>{layer.description}</p>
                </details>
              ))}
            </div>
            <aside className="diagnosis__route-note">
              <h3>{diagnosis.asideHeading}</h3>
              <p>{diagnosis.asideCopy}</p>
              <a className="text-link" href={diagnosis.cta.href}>
                {diagnosis.cta.label} <span aria-hidden="true">↓</span>
              </a>
            </aside>
          </div>
        </section>
        </div>

        <section id="routes" className="chapter chapter--dark routes" aria-labelledby="routes-heading">
          <div className="container routes__heading">
            <p className="section-kicker section-kicker--light">{routes.kicker}</p>
            <h2 id="routes-heading">{routes.headline}</h2>
            <p>{routes.intro}</p>
          </div>
          <div className="routes__grid">
            {routes.items.map((route) => (
              <article className="route-panel" key={route.id}>
                <div className="route-panel__topline">
                  <span>{route.title}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{route.statement}</h3>
                <ul>
                  {route.visibleSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
                <p className="route-panel__output">{route.output}</p>
                <a className="text-link text-link--light" href={route.ctaHref}>
                  {route.cta} <span aria-hidden="true">↘</span>
                </a>
              </article>
            ))}
            <aside className="combined-route">
              <div>
                <span className="combined-route__mark" aria-hidden="true" />
                <p>{routes.combined.heading}</p>
              </div>
              <p>{routes.combined.copy}</p>
              <a className="text-link text-link--light" href={routes.combined.cta.href}>
                {routes.combined.cta.label}
              </a>
            </aside>
          </div>
        </section>

        <section id="werkwijze" className="chapter chapter--ink method" aria-labelledby="werkwijze-heading">
          <div className="container">
            <MethodStack />
          </div>
        </section>

        <section id="over-digitech" className="chapter chapter--paper founder" aria-labelledby="founder-heading">
          <div className="container founder__layout">
            <div className="founder__identity" aria-hidden="true">
              <svg className="founder__route" viewBox="0 0 600 520">
                <path d="M32 112H186V260H304V416H566" />
                <path d="M32 364H118V260H304" />
                <circle cx="304" cy="260" r="7" />
                <circle cx="566" cy="416" r="7" />
              </svg>
              <span>D</span>
              <span>S</span>
              <i />
            </div>
            <div className="founder__copy">
              <p className="section-kicker">{founder.kicker}</p>
              <h2 id="founder-heading">{founder.headline}</h2>
              <p className="founder__lead">{founder.lead}</p>
              <p>{founder.supporting}</p>
              <ul className="founder__capabilities">
                {founder.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
              <div className="founder__questions" aria-label={founder.faqAriaLabel}>
                {founder.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              <a className="button button--primary founder__cta" href={founder.cta.href}>
                {founder.cta.label} <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </section>

        <section id="scan" className="chapter chapter--dark scan" aria-labelledby="scan-heading">
          <div className="container scan__layout">
            <div className="scan__copy">
              <p className="section-kicker section-kicker--light">{scan.kicker}</p>
              <h2 id="scan-heading">{scan.headline}</h2>
              <p>{scan.copy}</p>
              <p>{scan.decisionCopy}</p>
              <p className="scan__investment">{scan.investment}</p>
              <div className="scan__actions">
                <a className="button button--primary" href={scan.primaryCta.href}>
                  {scan.primaryCta.label}
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link text-link--light" href={scan.fallbackCta.href}>
                  {scan.fallbackCta.label}
                </a>
              </div>
            </div>
            <div className="scan__details" aria-label={scan.outputsAriaLabel}>
              <div className="scan-days">
                {scan.days.map((day) => (
                  <article key={day.title}>
                    <h3>{day.title}</h3>
                    <ul>
                      {day.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="scan-deliverables">
                <h3>Dit ontvang je</h3>
                <ul>
                  {scan.deliverables.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ProblemExplorationForm />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__top">
          <BrandLockup />
          <p>{footer.descriptor}</p>
          <a className="text-link text-link--light" href={footer.backToTop.href}>
            {footer.backToTop.label} <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="container site-footer__bottom">
          <nav aria-label="Voettekstnavigatie">
            {footer.links.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <span>{footer.location}</span>
          <span>{footer.rights}</span>
        </div>
      </footer>
    </div>
  );
}
