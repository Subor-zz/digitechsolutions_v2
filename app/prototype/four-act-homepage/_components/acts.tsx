import Link from 'next/link';
import styles from '../four-act-homepage.module.css';
import {
  controlledFlow,
  currentFlow,
  decisionOptions,
  deliverySteps,
  diagnosticLayers,
  founderCapabilities,
  frictionSignals,
  modernizationRoutes,
  outcomeDirections,
  provisionalScanOutputs,
  scanRoutes,
} from './content';
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

function FlowSequence({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <div className={styles.sequence} aria-label={label}>
      {items.map((item, index) => (
        <div className={styles.sequenceItem} key={item}>
          <span>{item}</span>
          {index < items.length - 1 ? <span className={styles.sequenceArrow} aria-hidden="true">→</span> : null}
        </div>
      ))}
    </div>
  );
}

export function ChaosAct() {
  return (
    <section className={`${styles.act} ${styles.chaosAct}`} id="act-chaos" aria-labelledby="chaos-title">
      <div className={styles.shell}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Workflow- en applicatiemodernisering</p>
            <h1 id="chaos-title">Moderniseer wat je organisatie vertraagt.</h1>
            <p className={styles.heroSupport}>
              Digitech Solutions brengt vastgelopen workflows en verouderde bedrijfsapplicaties terug naar een
              beheersbare route — eerst begrijpen, dan gericht moderniseren.
            </p>
            <div className={styles.actionRow}>
              <a className={styles.primaryButton} href="#scan-entry">Start met een Modernization Scan</a>
              <a className={styles.textLink} href="#delivery-flow">Bekijk de werkwijze</a>
            </div>
            <p className={styles.founderLine}>Rechtstreeks met Subor Cheung.</p>
          </div>

          <div className={styles.systemMap} aria-label="Illustratief systeemlandschap met gefragmenteerde overdrachten">
            <p className={styles.diagramLabel}>Illustratief systeemlandschap</p>
            <div className={styles.systemNodes}>
              <span>Inbox</span>
              <span>Spreadsheet</span>
              <span>Overdracht</span>
              <span>Oude applicatie</span>
            </div>
            <p>De vertraging zit zelden op één plek.</p>
          </div>
        </div>

        <FlowLine
          state="fragmented"
          label="Fragmented"
          description="Een onderbroken lijn verbindt losse overdrachten, spreadsheets en een oude applicatie."
        />

        <div className={styles.sceneGrid}>
          <div className={styles.sceneIntro}>
            <p className={styles.sceneNumber}>01.2 — Hidden Drag</p>
            <h2 className={styles.sceneTitle}>De grootste vertraging zit vaak tussen je systemen.</h2>
            <p>In overdrachten, workarounds, dubbele invoer en uitzonderingen die pas laat zichtbaar worden.</p>
          </div>
          <ul className={styles.signalList} aria-label="Herkenbare frictiesignalen">
            {frictionSignals.map((signal) => <li key={signal}>{signal}</li>)}
          </ul>
        </div>

        <div className={styles.beforeAfter}>
          <div>
            <p className={styles.diagramLabel}>Huidige toestand — illustratief</p>
            <FlowSequence items={currentFlow} label="Illustratief huidig proces" />
          </div>
          <div>
            <p className={styles.diagramLabel}>Beheersbare richting — illustratief</p>
            <FlowSequence items={controlledFlow} label="Illustratieve beheersbare procesrichting" />
            <p className={styles.humanNote}>Menselijke controle blijft zichtbaar waar uitzonderingen en beslissingen dat vragen.</p>
          </div>
        </div>

        <a className={styles.textLink} href="#workflowmodernisering">Bekijk workflowmodernisering</a>

        <blockquote className={styles.actConclusion}>
          Onze organisatie draait, maar er lekt tijd, kennis en controle weg.
        </blockquote>
      </div>
    </section>
  );
}

export function ReflectionAct() {
  return (
    <section className={`${styles.act} ${styles.reflectionAct}`} id="act-reflection" aria-labelledby="reflection-title">
      <div className={styles.shell}>
        <ActHeading
          number="02"
          title="Bezinning"
          description="Zet de flow stil. Scheid symptomen van oorzaken voordat een oplossing wordt gekozen."
        />

        <FlowLine
          state="paused"
          label="Paused"
          description="De lijn is stilgezet zodat proces, data, systemen, risico en eigenaarschap kunnen worden onderzocht."
        />

        <div className={styles.diagnosisGrid}>
          <div className={styles.sceneIntro}>
            <p className={styles.sceneNumber}>02.1 — Diagnose</p>
            <h3 id="reflection-title">Eerst begrijpen. Dan pas automatiseren of herbouwen.</h3>
            <p>De eerste vraag is niet welke tool wordt gebouwd, maar wat verandering werkelijk tegenhoudt.</p>
          </div>
          <ol className={styles.layerList}>
            {diagnosticLayers.map((layer, index) => (
              <li key={layer.name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{layer.name}</strong><p>{layer.description}</p></div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.decisionPanel}>
          <div>
            <p className={styles.sceneNumber}>Decision lens</p>
            <h3>Meerdere routes blijven open.</h3>
            <p>Modernisering hoeft niet met automatisering of een volledige herbouw te beginnen.</p>
          </div>
          <ul className={styles.tagList}>
            {decisionOptions.map((option) => <li key={option}>{option}</li>)}
          </ul>
        </div>

        <FlowLine
          state="mapped"
          label="Mapped"
          description="Meetpunten en labels maken de verschillende onderzoeksroutes zichtbaar."
        />

        <div className={styles.scanBridge}>
          <div>
            <p className={styles.sceneNumber}>02.2 — Modernization Scan</p>
            <h3>De route is een startpunt, geen definitieve diagnose.</h3>
            <p>
              De Scan is bedoeld voor operations-, IT- en productverantwoordelijken die frictie merken maar de
              juiste ingreep nog niet vooraf willen vastleggen.
            </p>
            <p className={styles.statusNote}>[Definitieve scanscope volgt]</p>
          </div>
          <div className={styles.routeGrid} aria-label="Vier mogelijke Scan-routes">
            {scanRoutes.map((route) => (
              <article className={styles.routeChoice} key={route.id}>
                <span>{route.code}</span>
                <h4>{route.title}</h4>
                <p>{route.description}</p>
              </article>
            ))}
          </div>
          <p className={styles.routeReassurance}>
            Twijfel je? Kies ‘Ik weet het nog niet’. De passende onderzoeksroute wordt pas na de intake bevestigd.
          </p>
          <a className={styles.textLink} href="#scan-entry">Bekijk de Modernization Scan</a>
        </div>

        <blockquote className={styles.actConclusion}>
          Moderniseren begint niet met bouwen, maar met begrijpen.
        </blockquote>
      </div>
    </section>
  );
}

export function WorkAct() {
  return (
    <section className={`${styles.act} ${styles.workAct}`} id="act-work" aria-labelledby="work-title">
      <div className={styles.shell}>
        <ActHeading
          number="03"
          title="Arbeid"
          description="Van een onderbouwde route naar afgebakende uitvoering met zichtbare beslismomenten."
        />

        <div className={styles.routeWorkGrid}>
          {modernizationRoutes.map((route) => (
            <article
              id={route.label === 'Workflowmodernisering' ? 'workflowmodernisering' : 'applicatiemodernisering'}
              key={route.label}
            >
              <p className={styles.diagramLabel}>{route.label}</p>
              <h3>{route.headline}</h3>
              <ul>{route.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
          <aside className={styles.combinedRoute}>
            <strong>Gecombineerde route</strong>
            <p>Wanneer proces en applicatie elkaar begrenzen, worden beide in samenhang onderzocht en gefaseerd.</p>
          </aside>
        </div>

        <FlowLine
          state="organized"
          label="Organized"
          description="De lijn splitst waar nodig, passeert afgebakende stappen en komt gecontroleerd samen."
        />

        <div className={styles.deliverySection} id="delivery-flow">
          <div className={styles.sceneIntro}>
            <p className={styles.sceneNumber}>03.2 — Delivery Flow</p>
            <h3 id="work-title">Snel waar het kan. Gecontroleerd waar het moet.</h3>
            <p>De stappen maken scope, besluiten en overdracht zichtbaar. Trusttermen blijven voorlopig tot echte artifacts bestaan.</p>
          </div>
          <ol className={styles.deliveryList}>
            {deliverySteps.map((step) => (
              <li key={step.name}>
                <span>{step.number}</span>
                <h4>{step.name}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <p className={styles.statusNote}>[Claim nog niet goedgekeurd — method artifacts vereist]</p>
        </div>

        <div className={styles.founderSection}>
          <div className={styles.founderPlaceholder} aria-label="Founderbeeld nog niet gekozen">
            <span>Founderbeeld</span>
            <small>[Fotografie en rechten nog te bevestigen]</small>
          </div>
          <div>
            <p className={styles.sceneNumber}>03.3 — Founder-led verantwoordelijkheid</p>
            <h3>Geen overdracht naar een anoniem deliveryteam.</h3>
            <p>
              Je werkt in dit model rechtstreeks met Subor. Specialistische expertise wordt alleen waar nodig en
              transparant toegevoegd; de exacte partner- en capaciteitsgrenzen worden nog bevestigd.
            </p>
            <div className={styles.bioPlaceholder} aria-label="Founderbio nog niet bevestigd">
              <span>Founderbio</span>
              <small>[Founderbio wordt nog inhoudelijk bevestigd]</small>
            </div>
            <ul className={styles.capabilityList}>
              {founderCapabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <p className={styles.statusNote}>[Founder credential nog te bevestigen]</p>
            <Link className={styles.textLink} href="/over-mij">Over Subor</Link>
          </div>
        </div>

        <blockquote className={styles.actConclusion}>
          Van inzicht naar een afgebakende oplossing die wordt beoordeeld, vastgelegd en overdraagbaar gemaakt.
        </blockquote>
      </div>
    </section>
  );
}

export function ResultAct() {
  return (
    <section className={`${styles.act} ${styles.resultAct}`} id="act-result" aria-labelledby="result-title">
      <div className={styles.shell}>
        <ActHeading
          number="04"
          title="Resultaat"
          description="Geen spektakel, maar een beoogde toestand waarin flow, systemen en eigenaarschap weer beheersbaar zijn."
        />

        <FlowLine
          state="verified"
          label="Verified"
          description="Een verbonden lijn met zichtbare verificatiepunten verbeeldt de gewenste beheersbare toestand."
        />

        <div className={styles.outcomeGrid}>
          <div className={styles.sceneIntro}>
            <p className={styles.sceneNumber}>04.1 — Outcome State</p>
            <h3 id="result-title">Van versnippering naar een beheersbare operatie.</h3>
            <p>Deze kaarten beschrijven gewenste richtingen. Ze zijn geen gemeten klantresultaten of garanties.</p>
          </div>
          {outcomeDirections.map((outcome) => (
            <article key={outcome.title}>
              <h4>{outcome.title}</h4>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.evidenceSection}>
          <div>
            <p className={styles.sceneNumber}>04.2 — Evidence Layer</p>
            <h3>Geen toekomstverhaal zonder bewijs.</h3>
            <p>Cases verschijnen pas met classificatie, toestemming, context, bewijsniveau en zichtbare beperkingen.</p>
          </div>
          <div className={styles.evidenceGrid}>
            <article>
              <span>Workflow evidence</span>
              <strong>[Gevalideerde klantcase nodig]</strong>
              <p>Geen resultaatclaim gepubliceerd.</p>
            </article>
            <article>
              <span>Application evidence</span>
              <strong>[Gevalideerde klantcase nodig]</strong>
              <p>Geen resultaatclaim gepubliceerd.</p>
            </article>
          </div>
        </div>

        <div className={styles.scanEntry} id="scan-entry">
          <div>
            <p className={styles.sceneNumber}>04.3 — Scan Entry</p>
            <h3>Je hoeft nog niet te weten wat er gebouwd moet worden.</h3>
            <p>
              De beoogde Scan brengt de situatie eerst in kaart. Definitieve scope, input, duur en commerciële
              voorwaarden worden vóór publicatie bevestigd.
            </p>
            <p className={styles.statusNote}>[Definitieve scanscope volgt]</p>
          </div>

          <div>
            <p className={styles.diagramLabel}>Beoogde output — voorlopig</p>
            <ol className={styles.outputList}>
              {provisionalScanOutputs.map((output, index) => (
                <li key={output}><span>{String(index + 1).padStart(2, '0')}</span>{output}</li>
              ))}
            </ol>
          </div>

          <div className={styles.scanSafety}>
            <strong>Deel via een openbare intake nooit:</strong>
            <p>
              Wachtwoorden, API-sleutels, broncode, exports, uploads, klantgegevens, gevoelige persoonsgegevens of
              andere vertrouwelijke informatie.
            </p>
          </div>

          <div className={styles.prototypeAction}>
            <button type="button" disabled>Intake nog niet beschikbaar in dit prototype</button>
            <p>Er wordt niets verzonden en er is bewust geen success state.</p>
            <a
              className={styles.primaryButton}
              href="mailto:info@digitechsolutions.nl?subject=Verkennend%20gesprek%20over%20modernisering"
            >
              Plan een verkennend gesprek
            </a>
            <Link href="/privacy">Bekijk de huidige privacyinformatie</Link>
          </div>
        </div>

        <blockquote className={styles.actConclusion}>
          Niet alleen gemoderniseerd, maar weer onder controle.
        </blockquote>
      </div>
    </section>
  );
}
