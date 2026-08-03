import { homepageCopy } from "@/lib/rebrand/homepage-copy";

import { FlowDiagram } from "./FlowDiagram";
import { HeroSystemMap } from "./HeroSystemMap";
import { JourneyRoute } from "./JourneyRoute";
import { MethodStack } from "./MethodStack";
import { MotionOrchestrator } from "./MotionOrchestrator";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export function RebrandPage() {
  const { hero, hiddenDrag, routes, founder, scan, contact, form } = homepageCopy;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="hoofdinhoud" className="site-journey">
        <MotionOrchestrator />
        <JourneyRoute />

        <section id="top" className="hero chapter chapter--dark" aria-labelledby="hero-heading">
          <div className="hero__grid" aria-hidden="true" />
          <div className="container hero__layout">
            <div className="hero__copy">
              <p className="section-kicker section-kicker--light">{hero.kicker}</p>
              <h1 id="hero-heading">{hero.headline}</h1>
              <p className="hero__lede hero__lede--full">{hero.lead}</p>
              <p className="hero__lede hero__lede--mobile">{hero.mobileLead}</p>
              <p className="hero__supporting">{hero.supporting}</p>
              <div className="hero__actions">
                <a className="button button--primary" href={hero.primaryCta.href}>{hero.primaryCta.label}<span aria-hidden="true">↗</span></a>
                <a className="text-link text-link--light" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
              </div>
              <p className="hero__founder"><span aria-hidden="true" />{hero.founderTrustLine}</p>
            </div>
            <HeroSystemMap />
          </div>
        </section>

        <section id="probleem" className="chapter chapter--paper" aria-labelledby="probleem-heading">
          <div className="container problem-intro" data-reveal="rise">
            <div>
              <p className="section-kicker">{hiddenDrag.kicker}</p>
              <h2 id="probleem-heading">{hiddenDrag.headline}</h2>
            </div>
            <p className="chapter-intro">{hiddenDrag.intro}</p>
          </div>
          <div className="container"><div className="flow-diagram-stage" data-reveal="flow"><FlowDiagram /></div></div>
        </section>

        <section id="scan" className="chapter chapter--dark scan" aria-labelledby="scan-heading">
          <div className="container scan__layout">
            <div className="scan__copy" data-reveal="left">
              <p className="section-kicker section-kicker--light">{scan.kicker}</p>
              <h2 id="scan-heading">{scan.headline}</h2>
              <p className="scan__full-copy">{scan.copy}</p>
              <p className="scan__mobile-copy">{scan.mobileCopy}</p>
              <p className="scan__decision-copy">{scan.decisionCopy}</p>
              <p className="scan__investment">{scan.investment}</p>
              <div className="scan__actions">
                <a className="button button--primary" href={scan.primaryCta.href}>{scan.primaryCta.label}<span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="scan__details" aria-label={scan.outputsAriaLabel}>
              <div className="scan-days">
                {scan.days.map((day, index) => <article data-reveal="rise" data-reveal-delay={index + 1} key={day.title}><h3>{day.title}</h3><ul>{day.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
              </div>
              <div className="scan-deliverables" data-reveal="rise" data-reveal-delay="3"><h3>Dit ontvang je</h3><ul>{scan.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section id="routes" className="chapter chapter--dark routes" aria-labelledby="routes-heading">
          <div className="container routes__heading" data-reveal="rise">
            <p className="section-kicker section-kicker--light">{routes.kicker}</p>
            <h2 id="routes-heading">{routes.headline}</h2>
            <p className="routes__full-intro">{routes.intro}</p>
            <p className="routes__mobile-intro">{routes.mobileIntro}</p>
          </div>
          <div className="container routes__grid">
            {routes.items.map((route, index) => (
              <article className="route-panel" data-reveal={index === 0 ? "left" : "right"} key={route.id}>
                <div className="route-panel__topline"><span>{route.title}</span><i aria-hidden="true" /></div>
                <h3>{route.statement}</h3>
                <p className="route-panel__context">{route.context}</p>
                <div className="route-panel__desktop-details">
                  <ul>{route.visibleSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
                </div>
                <details className="route-panel__mobile-details">
                  <summary>Bekijk voorbeelden en resultaat</summary>
                  <ul>{route.visibleSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
                  <p className="route-panel__output">{route.output}</p>
                </details>
              </article>
            ))}
            <aside className="combined-route" data-reveal="rise" data-reveal-delay="2">
              <div><span className="combined-route__mark" aria-hidden="true" /><p>{routes.combined.heading}</p></div>
              <p>{routes.combined.copy}</p>
              <a className="text-link text-link--light" href={routes.combined.cta.href}>{routes.combined.cta.label}</a>
            </aside>
          </div>
        </section>

        <section id="werkwijze" className="chapter chapter--ink method" aria-labelledby="werkwijze-heading">
          <div className="container"><MethodStack /></div>
        </section>

        <section id="over-digitech" className="chapter chapter--paper founder" aria-labelledby="founder-heading">
          <div className="container founder__layout">
            <div className="founder__identity" data-reveal="scale" aria-hidden="true"><span>D</span><span>S</span><i /></div>
            <div className="founder__copy" data-reveal="right">
              <p className="section-kicker">{founder.kicker}</p>
              <h2 id="founder-heading">{founder.headline}</h2>
              <p className="founder__lead">{founder.lead}</p>
              <p className="founder__supporting">{founder.supporting}</p>
              <div className="founder__questions" aria-label={founder.faqAriaLabel}>
                {founder.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="chapter chapter--dark contact-cta" aria-labelledby="contact-heading">
          <div className="container contact-cta__layout">
            <div data-reveal="left"><h2 id="contact-heading">{contact.headline}</h2><p>{contact.intro}</p></div>
            <div className="contact-cta__actions" data-reveal="right" data-reveal-delay="1">
              <a className="button button--primary" href={contact.primaryCta.href}>{contact.primaryCta.label}<span aria-hidden="true">↗</span></a>
              <p>{contact.directLabel}</p>
              <a href={`mailto:${form.email}`}>{form.email}</a>
              <a href={form.phoneHref}>{form.phoneDisplay}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
