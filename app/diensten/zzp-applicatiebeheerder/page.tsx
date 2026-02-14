'use client';

import { useScrollReveal } from '../../components/scroll-reveal';
import FAQSection from '../../components/faq-section';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';
import type { FAQItem } from '../../lib/schema';

function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; }) {
  const [ref, isIntersecting] = useScrollReveal();
  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  const baseClass = `scroll-reveal reveal-pending${isIntersecting ? ' revealed' : ''}${delayClass}`;
  return <div ref={ref} className={`${baseClass} ${className}`}>{children}</div>;
}

// Table of Contents
const tableOfContents = [
  { id: "wanneer-nodig", label: "Wanneer nodig?" },
  { id: "wat-doe-ik", label: "Wat doe ik concreet?" },
  { id: "expertise", label: "Technische expertise" },
  { id: "resultaten", label: "Resultaten" },
  { id: "tarief", label: "Tarief" },
  { id: "samenwerking", label: "Samenwerking" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" }
];

// Credentials
const credentials = [
  { icon: "workspace_premium", text: "15+ jaar ervaring" },
  { icon: "verified", text: "ITIL 4 gecertificeerd" },
  { icon: "schedule", text: "Binnen 48 uur startklaar" },
  { icon: "location_on", text: "Werkgebied: heel Nederland" }
];

// Wanneer nodig - Situaties
const situaties = [
  {
    icon: "person_off",
    titel: "Beheerder vertrekt of is afwezig",
    probleem: "Je huidige applicatiebeheerder stopt, is langdurig ziek of er is niemand met de juiste kennis.",
    oplossing: "Directe inzet als interim specialist. Continuïteit gegarandeerd, kennis wordt overgedragen."
  },
  {
    icon: "warning",
    titel: "Teveel storingen en incidenten",
    probleem: "Applicaties veroorzaken regelmatig verstoringen. Incidenten duren lang, oorzaken blijven onduidelijk.",
    oplossing: "Proactieve monitoring, root cause analysis en structureel incident management."
  },
  {
    icon: "rocket_launch",
    titel: "Migratie of implementatie plant",
    probleem: "Nieuwe applicatie, upgrade of migratie staat op de planning. Je hebt tijdelijk extra expertise nodig.",
    oplossing: "Projectmatige inhuur voor de duur van de migratie. Daarna kennisoverdracht aan je team."
  },
  {
    icon: "folder_off",
    titel: "Geen documentatie of runbooks",
    probleem: "Kennis zit alleen in hoofden van medewerkers. Bij vertrek verdwijnt alles.",
    oplossing: "Alle procedures, configuraties en workarounds vastgelegd in runbooks."
  }
];

// Concrete werkzaamheden - Bullet snippets
const werkzaamheden = {
  dagelijks: [
    "Monitoring en alerting van kritieke applicaties",
    "Incidentafhandeling en escalatiemanagement",
    "Gebruikersvragen en first-line support",
    "Performance checks en capaciteitsmonitoring"
  ],
  wekelijks: [
    "Patch management en security updates",
    "Backup verificatie en recovery testen",
    "Release management en deployment coördinatie",
    "Changemanagement en CAB voorbereiding"
  ],
  projectmatig: [
    "Root cause analysis bij terugkerende problemen",
    "Procesoptimalisatie en automatisering",
    "Kennisdocumentatie en runbooks opstellen",
    "Migratiebegeleiding en implementaties"
  ]
};

// Tools & Expertise
const tools = [
  { naam: "Microsoft 365", items: ["Exchange Online", "SharePoint", "Teams", "OneDrive", "Entra ID"], icon: "cloud" },
  { naam: "Salesforce", items: ["Sales Cloud", "Service Cloud", "Integraties", "Reports"], icon: "trending_up" },
  { naam: "ERP Systemen", items: ["SAP", "Oracle NetSuite", "AFAS", "Exact"], icon: "business_center" },
  { naam: "ITSM Tools", items: ["Jira Service Management", "ServiceNow", "TOPdesk", "Freshservice"], icon: "support_agent" },
  { naam: "DevOps", items: ["GitHub", "GitLab", "Azure DevOps", "CI/CD pipelines"], icon: "code" },
  { naam: "Monitoring", items: ["Datadog", "New Relic", "Azure Monitor", "Grafana"], icon: "insights" }
];

// Resultaten / Cases
const cases = [
  {
    organisatie: "Financiële dienstverlener (200+ FTE)",
    uitdaging: "4+ storingen per maand bij core banking applicatie",
    resultaat: "Incidenten terug naar 0-1 per maand",
    impact: "€50.000+ jaarlijkse besparing op productieverlies"
  },
  {
    organisatie: "Logistieke MKB-er (50 FTE)",
    uitdaging: "Beheerder vertrok, 2 weken opstarttijd nodig voor opvolger",
    resultaat: "Opstarttijd terug naar 1 dag",
    impact: "MTTR gedaald van 48 uur naar 2 uur"
  },
  {
    organisatie: "SaaS scale-up (groei naar 100+ FTE)",
    uitdaging: "Performance issues door snelle groei, API integratieproblemen",
    resultaat: "Zero unplanned downtime in 12 maanden",
    impact: "API response time verbeterd met 60%"
  }
];

// FAQ
const faqs: FAQItem[] = [
  {
    question: "Wat kost een ZZP applicatiebeheerder per uur?",
    answer: "Mijn uurtarief ligt tussen €85 en €125 exclusief BTW, afhankelijk van complexiteit, duur van de opdracht en het senioriteitsniveau dat nodig is. Voor langere opdrachten gelden gereduceerde tarieven. Vraag een tariefindicatie aan voor een vaste all-in prijs zonder verrassingen."
  },
  {
    question: "Hoe snel kun je starten als interim applicatiebeheerder?",
    answer: "Ik ben doorgaans binnen 48 uur na opdrachtbevestiging startklaar. Na een korte intake van 1-2 uur om de applicaties en werkomgeving te leren kennen, ga ik direct aan de slag. Bij spoed is snellere inzet vaak mogelijk."
  },
  {
    question: "Wat is het verschil tussen een ZZP applicatiebeheerder en een vaste medewerker?",
    answer: "Als ZZP'er betaal je alleen voor geleverde uren — geen overhead voor pensioenen, vakantiedagen, ziektekosten of wervingskosten. Dit scheelt gemiddeld 15-25% ten opzichte van een fulltime medewerker in loondienst. Daarnaast breng ik ervaringskennis mee van meerdere organisaties."
  },
  {
    question: "Welke applicaties kun je beheren?",
    answer: "Ik heb brede ervaring met Microsoft 365 (Exchange, SharePoint, Teams), Salesforce, SAP, Oracle NetSuite, AFAS, Exact, en diverse SaaS-applicaties. Voor specifieke systemen kan ik snel inwerken als documentatie aanwezig is."
  },
  {
    question: "Hoe zit het met kennisoverdracht als je vertrekt?",
    answer: "Kennisoverdracht is standaard onderdeel van mijn dienstverlening. Alle procedures, configuraties en workarounds leg ik vast in runbooks en documentatie. Bij langere opdrachten train ik interne medewerkers zodat zij het beheer kunnen overnemen."
  },
  {
    question: "Kun je ook samenwerken met andere ZZP'ers of mijn eigen team?",
    answer: "Zeker. Ik werk graag samen met andere specialisten zoals functioneel beheerders, developers en security experts. Ik integreer naadloos met bestaande teams en werk volgens afgesproken processen en communicatielijnen."
  },
  {
    question: "Wat is de minimale inzetduur?",
    answer: "Voor interim opdrachten geldt een minimale inzet van 16 uur per week. Voor projectmatige opdrachten zoals migraties is de duur in overleg. Ik werk met een opzegtermijn van 1 week, zodat je flexibel blijft."
  },
  {
    question: "Werk je ook buiten kantooruren?",
    answer: "Voor kritieke incidenten en geplande changes buiten kantooruren ben ik beschikbaar. Dit stem ik van tevoren af, inclusief eventuele toeslagen voor avond- en weekendwerk."
  }
];

export default function ZZPApplicatiebeheerderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        <Navigation />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
              Direct beschikbaar • Interim & Project
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight opacity-0 animate-fade-in-up animation-delay-100">
              ZZP Applicatiebeheerder<br />Inhuren
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 font-medium mb-8 max-w-3xl opacity-0 animate-fade-in-up animation-delay-200">
              <strong className="text-white">Direct inzetbare IT expertise</strong> voor je bedrijfskritische applicaties.
              Binnen 48 uur startklaar. Geen wervingsprocedure, geen overhead.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 opacity-0 animate-fade-in-up animation-delay-300">
              <Link href="#contact" className="shimmer-btn animate-shimmer text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg">
                Ontvang beschikbaarheid
              </Link>
              <Link href="#tarief" className="border-2 border-white/80 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-lg transition-all">
                Bekijk tarief
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 text-blue-100 text-sm opacity-0 animate-fade-in-up animation-delay-400">
              <span className="flex items-center gap-2">
                <span className="material-icons text-base">check_circle</span>
                Binnen 48 uur startklaar
              </span>
              <span className="flex items-center gap-2">
                <span className="material-icons text-base">check_circle</span>
                Vanaf 16 uur/week inzetbaar
              </span>
              <span className="flex items-center gap-2">
                <span className="material-icons text-base">check_circle</span>
                Kennisoverdracht gegarandeerd
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-slate-200 py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-6">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-slate-500 hover:text-accent transition-colors">Home</Link></li>
            <li><span className="text-slate-400">/</span></li>
            <li><Link href="/diensten" className="text-slate-500 hover:text-accent transition-colors">Diensten</Link></li>
            <li><span className="text-slate-400">/</span></li>
            <li className="text-slate-900 font-medium">ZZP Applicatiebeheerder</li>
          </ol>
        </div>
      </nav>

      {/* Table of Contents */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center gap-1 text-sm overflow-x-auto" aria-label="Inhoudsopgave">
            <span className="text-slate-500 font-medium mr-3 flex-shrink-0">Op deze pagina:</span>
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-1.5 rounded-full text-slate-600 hover:bg-accent/10 hover:text-accent transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Credentials Bar */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="material-icons text-accent text-xl">{cred.icon}</span>
                <span className="text-sm text-slate-700 font-medium">{cred.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wanneer heb je een ZZP applicatiebeheerder nodig? */}
      <section id="wanneer-nodig" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een ZZP applicatiebeheerder nodig?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Herken je een van deze situaties? Dan kan interim applicatiebeheer direct verschil maken.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {situaties.map((sit, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-accent/30 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-icons text-accent text-2xl">{sit.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{sit.titel}</h3>
                      <p className="text-slate-600 text-sm mb-3">{sit.probleem}</p>
                      <div className="flex items-start gap-2">
                        <span className="material-icons text-emerald-600 text-sm mt-0.5">arrow_forward</span>
                        <p className="text-emerald-700 text-sm font-medium">{sit.oplossing}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link href="#contact" className="inline-flex items-center gap-2 text-accent hover:text-primary font-semibold transition-colors">
                Herken je jouw situatie?
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wat doe ik concreet? */}
      <section id="wat-doe-ik" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat doet een applicatiebeheerder concreet?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Een overzicht van werkzaamheden per niveau — van dagelijks beheer tot projectmatige verbetering.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Dagelijks */}
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="material-icons text-blue-600 text-xl">today</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Dagelijks</h3>
                  </div>
                  <ul className="space-y-3">
                    {werkzaamheden.dagelijks.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-icons text-accent text-sm mt-1 flex-shrink-0">check</span>
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Wekelijks */}
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <span className="material-icons text-purple-600 text-xl">date_range</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Wekelijks</h3>
                  </div>
                  <ul className="space-y-3">
                    {werkzaamheden.wekelijks.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-icons text-accent text-sm mt-1 flex-shrink-0">check</span>
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Projectmatig */}
              <ScrollReveal delay={300}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <span className="material-icons text-emerald-600 text-xl">rocket_launch</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Projectmatig</h3>
                  </div>
                  <ul className="space-y-3">
                    {werkzaamheden.projectmatig.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-icons text-accent text-sm mt-1 flex-shrink-0">check</span>
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Inline link to related service */}
          <ScrollReveal>
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-slate-600">
                Naast technisch applicatiebeheer verzorg ik ook <Link href="/diensten/zzp-functioneel-beheerder" className="text-accent hover:underline font-medium">functioneel beheer</Link> en <Link href="/diensten/support-itsm" className="text-accent hover:underline font-medium">IT support & ITSM</Link>. Zo krijg je een complete beheeroplossing.
              </p>
              <p className="text-slate-600 mt-4">
                Lees ook: <Link href="/blog/wanneer-zzp-applicatiebeheerder-inhuren" className="text-accent hover:underline font-medium">Wanneer een ZZP applicatiebeheerder inhuren?</Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technische expertise & tooling */}
      <section id="expertise" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Technische expertise & tooling
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Breed inzetbaar op de meest gangbare applicaties en platforms in het MKB en bij scale-ups.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool, index) => (
              <ScrollReveal key={index} delay={(((index % 3) + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-slate-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-icons text-accent text-xl">{tool.icon}</span>
                    <h3 className="font-bold text-slate-900">{tool.naam}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {tool.items.map((item, i) => (
                      <li key={i} className="text-xs bg-white px-2 py-1 rounded text-slate-600 border border-slate-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resultaten voor organisaties */}
      <section id="resultaten" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Resultaten voor organisaties
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Concrete resultaten uit eerdere opdrachten bij vergelijkbare organisaties.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {cases.map((cs, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="md:flex md:items-start md:justify-between md:gap-6">
                    <div className="flex-1">
                      <p className="text-sm text-accent font-semibold mb-1">{cs.organisatie}</p>
                      <p className="text-slate-700 mb-3"><strong>Uitdaging:</strong> {cs.uitdaging}</p>
                      <p className="text-slate-700"><strong>Resultaat:</strong> {cs.resultaat}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="inline-block bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
                        <p className="text-emerald-700 font-semibold text-sm">{cs.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tariefindicatie */}
      <section id="tarief" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tariefindicatie
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Transparante prijsopbouw zonder verborgen kosten.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Uurtarief */}
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-4">Uurtarief</h3>
                  <div className="bg-white rounded-xl p-5 border border-slate-200">
                    <p className="text-4xl font-bold text-accent mb-2">€85 - €125</p>
                    <p className="text-sm text-slate-600 mb-3">per uur, exclusief BTW</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Tarief afhankelijk van complexiteit en duur</li>
                      <li>• Langere opdrachten = gereduceerd tarief</li>
                      <li>• All-in prijs op aanvraag</li>
                    </ul>
                  </div>
                </div>

                {/* Inzet */}
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-4">Inzet</h3>
                  <div className="bg-white rounded-xl p-5 border border-slate-200">
                    <p className="text-4xl font-bold text-accent mb-2">16+ uur</p>
                    <p className="text-sm text-slate-600 mb-3">minimale inzet per week</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Interim: vanaf 16 uur/week</li>
                      <li>• Project: duur in overleg</li>
                      <li>• Opzegtermijn: 1 week</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  Vraag tariefindicatie aan
                  <span className="material-icons text-sm">arrow_forward</span>
                </Link>
                <p className="text-sm text-slate-500 mt-3">Vrijblijvend • Binnen 24 uur reactie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Samenwerkingsmodel */}
      <section id="samenwerking" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Zo werken we samen
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Van eerste contact tot volledige kennisoeverdracht in vier stappen.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {[
              { stap: "01", titel: "Intake", duur: "30-60 min", beschrijving: "Kennenismakingsgesprek over je situatie, knelpunten en verwachtingen. Telefonisch of online." },
              { stap: "02", titel: "Voorstel", duur: "Binnen 24 uur", beschrijving: "Je ontvangt een helder voorstel met tarief, inzet en aanpak. Geen verrassingen." },
              { stap: "03", titel: "Start", duur: "Binnen 48 uur", beschrijving: "Na akkoord start ik direct. Korte inwerkperiode, dan volledig operationeel." },
              { stap: "04", titel: "Borging", duur: "Doorlopend", beschrijving: "Kennisdocumentatie, regelmatige afstemming en evaluatie. Opzegbaar per week." }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="flex gap-5 items-start mb-6 last:mb-0">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {item.stap}
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-200 last:border-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-lg text-slate-900">{item.titel}</h3>
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">{item.duur}</span>
                    </div>
                    <p className="text-slate-600">{item.beschrijving}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Veelgestelde vragen
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Antwoorden op vragen die ik vaak krijg over interim applicatiebeheer.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Interne links */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold text-slate-900 mb-4">Gerelateerde diensten</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/diensten/zzp-functioneel-beheerder" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:border-accent hover:text-accent transition-colors text-sm">
                ZZP Functioneel Beheerder →
              </Link>
              <Link href="/diensten/support-itsm" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:border-accent hover:text-accent transition-colors text-sm">
                IT Support & ITSM →
              </Link>
              <Link href="/diensten/it-consultancy" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:border-accent hover:text-accent transition-colors text-sm">
                IT Consultancy & Audits →
              </Link>
              <Link href="/over-mij" className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:border-accent hover:text-accent transition-colors text-sm">
                Over mij →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Klaar om je applicatiebeheer<br />te professionaliseren?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Plan een vrijblijvende intake en ontdek hoe ik jouw applicatielandschap kan versterken.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg"
              >
                Plan intake
              </Link>
              <a
                href="tel:06123456789"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-lg transition-all flex items-center gap-2"
              >
                <span className="material-icons">phone</span>
                06-1234 56789
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-1">
                <span className="material-icons text-base">check_circle</span>
                Reactie binnen 24 uur
              </span>
              <span className="flex items-center gap-1">
                <span className="material-icons text-base">check_circle</span>
                Vrijblijvend
              </span>
              <span className="flex items-center gap-1">
                <span className="material-icons text-base">check_circle</span>
                Start binnen 48 uur
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
