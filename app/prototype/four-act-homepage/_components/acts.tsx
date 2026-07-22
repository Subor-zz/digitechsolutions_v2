import Link from 'next/link';

import { homepageCopy } from '@/lib/rebrand/homepage-copy';

import styles from '../four-act-homepage.module.css';
import { FlowLine } from './flow-line';

function ActHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <header className={styles.actHeading}>
      <p className={styles.actLabel}>Akte {number}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

function ResponsiveParagraph({
  desktop,
  mobile,
  className,
}: {
  desktop: string;
  mobile: string;
  className?: string;
}) {
  return (
    <>
      <p className={[className, styles.desktopCopy].filter(Boolean).join(' ')}>{desktop}</p>
      <p className={[className, styles.mobileCopy].filter(Boolean).join(' ')}>{mobile}</p>
    </>
  );
}

function FlowSequence({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <div className={styles.sequence} aria-label={label}>
      {items.map((item, index) => (
        <div className={styles.sequenceItem} key={item}>
          <span>{item}</span>
          {index < items.length - 1 ? (
            <span className={styles.sequenceArrow} aria-hidden="true">
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function ChaosAct() {
  const { hero, hiddenDrag } = homepageCopy;

  return (
    <section className={`${styles.act} ${styles.chaosAct}`} id="act-chaos" aria-labelledby="chaos-title">
      <div className={styles.shell}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{hero.kicker}</p>
            <h1 id="chaos-title">{hero.headline}</h1>
            <ResponsiveParagraph
              className={styles.heroSupport}
              desktop={hero.lead}
              mobile={hero.mobileLead}
            />
            <div className={styles.actionRow}>
              <a className={styles.primaryButton} href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className={styles.textLink} href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
            <p className={styles.founderLine}>{hero.founderTrustLine}</p>
          </div>

          <div
            className={styles.systemMap}
            role="img"
            aria-label={hero.systemVisual.accessibleText}
          >
            <p className={styles.diagramLabel}>{hero.systemVisual.kicker}</p>
            <div className={styles.systemNodes} aria-hidden="true">
              {hero.systemVisual.nodes.map((node) => (
                <span key={node}>{node}</span>
              ))}
            </div>
            <p>{hero.systemVisual.description}</p>
            <strong className={styles.systemResult}>{hero.systemVisual.resultLabel}</strong>
          </div>
        </div>

        <FlowLine
          state="fragmented"
          label={hiddenDrag.flowLine.label}
          description={hiddenDrag.flowLine.description}
        />

        <div className={styles.sceneGrid}>
          <div className={styles.sceneIntro}>
            <p className={styles.sceneNumber}>{hiddenDrag.kicker}</p>
            <h2 className={styles.sceneTitle}>{hiddenDrag.headline}</h2>
            <ResponsiveParagraph desktop={hiddenDrag.intro} mobile={hiddenDrag.mobileIntro} />
          </div>
          <ul className={styles.signalList} aria-label="Herkenbare frictiesignalen">
            {hiddenDrag.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <div className={styles.beforeAfter}>
          <div>
            <p className={styles.diagramLabel}>{hiddenDrag.currentLabel}</p>
            <FlowSequence items={hiddenDrag.currentFlow} label={hiddenDrag.currentAriaLabel} />
          </div>
          <div>
            <p className={styles.diagramLabel}>{hiddenDrag.targetLabel}</p>
            <FlowSequence items={hiddenDrag.targetFlow} label={hiddenDrag.targetAriaLabel} />
            <p className={styles.humanNote}>{hiddenDrag.humanNote}</p>
          </div>
        </div>

        <a className={styles.textLink} href={hiddenDrag.cta.href}>
          {hiddenDrag.cta.label}
        </a>

        <blockquote className={styles.actConclusion}>{hiddenDrag.exitLine}</blockquote>
      </div>
    </section>
  );
}

export function ReflectionAct() {
  const { diagnosis, routes } = homepageCopy;
  const bridge = routes.scanBridge;

  return (
    <section
      className={`${styles.act} ${styles.reflectionAct}`}
      id="act-reflection"
      aria-labelledby="reflection-title"
    >
      <div className={styles.shell}>
        <ActHeading {...diagnosis.act} />

        <FlowLine
          state="paused"
          label={diagnosis.pausedFlowLine.label}
          description={diagnosis.pausedFlowLine.description}
        />

        <div className={styles.diagnosisGrid}>
          <div className={styles.sceneIntro}>
            <p className={styles.sceneNumber}>{diagnosis.kicker}</p>
            <h3 id="reflection-title">{diagnosis.headline}</h3>
            <ResponsiveParagraph desktop={diagnosis.intro} mobile={diagnosis.mobileIntro} />
          </div>
          <ol className={styles.layerList}>
            {diagnosis.layers.map((layer, index) => (
              <li key={layer.name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{layer.name}</strong>
                  <p>{layer.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.decisionPanel}>
          <div>
            <p className={styles.sceneNumber}>Decision lens</p>
            <h3>{diagnosis.asideHeading}</h3>
            <p>{diagnosis.asideCopy}</p>
            <a className={styles.textLink} href={diagnosis.cta.href}>
              {diagnosis.cta.label}
            </a>
          </div>
          <ul className={styles.tagList}>
            {diagnosis.decisionOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>

        <FlowLine
          state="mapped"
          label={diagnosis.mappedFlowLine.label}
          description={diagnosis.mappedFlowLine.description}
        />

        <div className={styles.scanBridge}>
          <div>
            <p className={styles.sceneNumber}>{bridge.kicker}</p>
            <h3>{bridge.headline}</h3>
            <p>{bridge.intro}</p>
          </div>
          <div className={styles.routeGrid} aria-label="Vier mogelijke Scan-routes">
            {bridge.routes.map((route) => (
              <article className={styles.routeChoice} key={route.id}>
                <span>{route.code}</span>
                <h4>{route.title}</h4>
                <p>{route.description}</p>
              </article>
            ))}
          </div>
          <p className={styles.routeReassurance}>{bridge.reassurance}</p>
          <a className={styles.textLink} href={bridge.cta.href}>
            {bridge.cta.label}
          </a>
        </div>

        <blockquote className={styles.actConclusion}>{diagnosis.transition}</blockquote>
      </div>
    </section>
  );
}

export function WorkAct() {
  const { founder, method, routes } = homepageCopy;

  return (
    <section className={`${styles.act} ${styles.workAct}`} id="act-work" aria-labelledby="work-title">
      <div className={styles.shell}>
        <ActHeading {...routes.act} />

        <div className={styles.sceneIntro}>
          <p className={styles.sceneNumber}>{routes.kicker}</p>
          <h3 id="work-title">{routes.headline}</h3>
          <ResponsiveParagraph desktop={routes.intro} mobile={routes.mobileIntro} />
        </div>

        <div className={styles.routeWorkGrid}>
          {routes.items.map((route) => (
            <article id={route.anchor} key={route.id}>
              <p className={styles.diagramLabel}>{route.label}</p>
              <h3>{route.headline}</h3>
              <ul>
                {route.signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
              <p className={styles.routeOutput}>{route.output}</p>
              <a className={styles.textLink} href="#scan-entry">
                {route.cta}
              </a>
            </article>
          ))}
          <aside className={styles.combinedRoute}>
            <strong>{routes.combined.heading}</strong>
            <div>
              <p>{routes.combined.copy}</p>
              <a className={styles.textLink} href={routes.combined.cta.href}>
                {routes.combined.cta.label}
              </a>
            </div>
          </aside>
        </div>

        <FlowLine
          state="organized"
          label={routes.organizedFlowLine.label}
          description={routes.organizedFlowLine.description}
        />

        <div className={styles.deliverySection} id="delivery-flow">
          <div className={styles.sceneIntro}>
            <p className={styles.sceneNumber}>{method.kicker}</p>
            <h3>{method.headline}</h3>
            <ResponsiveParagraph desktop={method.intro} mobile={method.mobileIntro} />
          </div>
          <ol className={styles.deliveryList}>
            {method.steps.map((step) => (
              <li key={step.id}>
                <span>{step.number}</span>
                <h4>{step.name}</h4>
                <p>{step.description}</p>
                <small className={styles.methodArtifact}>{step.artifact}</small>
              </li>
            ))}
          </ol>
          <p className={styles.methodClosing}>{method.closing}</p>
        </div>

        <div className={styles.founderSection} id="founder-led">
          <div className={styles.founderPlaceholder} aria-label={founder.portraitPlaceholder}>
            <span>Subor Cheung</span>
            <small>{founder.portraitPlaceholder}</small>
          </div>
          <div>
            <p className={styles.sceneNumber}>{founder.kicker}</p>
            <h3>{founder.headline}</h3>
            <p>{founder.lead}</p>
            <p>{founder.supporting}</p>
            <p className={styles.bioPlaceholder}>{founder.publicBioPlaceholder}</p>
            <ul className={styles.capabilityList}>
              {founder.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <p className={styles.founderTrust}>{founder.trustLine}</p>
            <Link className={styles.textLink} href={founder.cta.href}>
              {founder.cta.label}
            </Link>
          </div>
        </div>

        <div className={styles.faqList} aria-label="Veelgestelde vragen over de aanpak">
          {founder.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <blockquote className={styles.actConclusion}>{founder.conclusion}</blockquote>
      </div>
    </section>
  );
}

export function ResultAct() {
  const { result, scan } = homepageCopy;

  return (
    <section className={`${styles.act} ${styles.resultAct}`} id="act-result" aria-labelledby="result-title">
      <div className={styles.shell}>
        <ActHeading {...result.act} />

        <FlowLine
          state="verified"
          label={result.verifiedFlowLine.label}
          description={result.verifiedFlowLine.description}
        />

        <div className={styles.outcomeGrid}>
          <div className={styles.sceneIntro}>
            <p className={styles.sceneNumber}>{result.kicker}</p>
            <h3 id="result-title">{result.headline}</h3>
            <p>{result.intro}</p>
          </div>
          {result.outcomes.map((outcome) => (
            <article key={outcome.title}>
              <h4>{outcome.title}</h4>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.evidenceSection}>
          <div>
            <p className={styles.sceneNumber}>{result.proof.kicker}</p>
            <h3>{result.proof.headline}</h3>
            <p>{result.proof.intro}</p>
          </div>
          <ol className={styles.reportAnatomy}>
            {result.proof.anatomy.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.scanEntry} id="scan-entry">
          <div>
            <p className={styles.sceneNumber}>{scan.kicker}</p>
            <h3>{scan.headline}</h3>
            <ResponsiveParagraph desktop={scan.copy} mobile={scan.mobileCopy} />
          </div>

          <div>
            <p className={styles.diagramLabel}>{scan.outputLabel}</p>
            <ol className={styles.outputList}>
              {scan.outputs.map((output, index) => (
                <li key={output.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{output.title}</strong>
                    <p>{output.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.prototypeAction}>
            <button type="button" disabled>
              {scan.disabledCtaLabel}
            </button>
            <p>{scan.prototypeMicrocopy}</p>
            <a className={styles.primaryButton} href={scan.fallbackCta.href}>
              {scan.fallbackCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
