'use client';

import { useScrollReveal } from '../../components/scroll-reveal';
import FAQSection, { FAQSchema } from '../../components/faq-section';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';

function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; }) {
  const [ref, isIntersecting] = useScrollReveal();
  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  const baseClass = `scroll-reveal reveal-pending${isIntersecting ? ' revealed' : ''}${delayClass}`;
  return <div ref={ref} className={`${baseClass} ${className}`}>{children}</div>;
}

// Entity-georganiseerde content voor semantische SEO
const entities = {
  frameworks: {
    title: "Relevante Frameworks",
    items: [
      { name: "ITIL 4", description: "De wereldstandaard voor IT Service Management met incident-, problem-, change-, request- en release management." },
      { name: "COBIT", description: "Governance framework voor IT-georïnteerde processen en controls." },
      { name: "DevOps", description: "Integratie van development en operations voor snellere delivery." },
      { name: "Agile/Scrum", description: "Flexibele methodiek voor projectmatige beheerwerkzaamheden." }
    ]
  },
  processen: {
    title: "ITSM Processen",
    items: [
      { name: "Incident Management", description: "Gestructureerd afhandelen van verstoringen van melding tot resolnie." },
      { name: "Problem Management", description: "Identificaten en oplossen van oorzaaklijke problemen om herhaling te voorkomen." },
      { name: "Change Management", description: "Gecoördineerde wijzigingen aan IT-diensten met minimaal risico." },
      { name: "Release Management", description: "Planning en uitvoeren van deployments met rollback procedures." },
      { name: "Knowledge Management", description: "Documenteren en ontsluiten van kennis voor het team." }
    ]
  },
  kpis: {
    title: "Belangrijke KPI's",
    items: [
      { name: "MTTR (Mean Time To Repair)", description: "Gemiddelde hersteltijd van incidenten. Lager is beter." },
      { name: "SLA", description: "Service Level Agreement: afgesproken afspraken over responstijd en beschikbaarheid." },
      { name: "FCR (First Contact Resolution)", description: "Percentage issues bij eerste contact opgelost." },
      { name: "CSAT (Customer Satisfaction)", description: "Gebruikerstevredenheid over support." }
    ]
  },
  rollen: {
    title: "Rollen in Applicatiebeheer",
    items: [
      { name: "Applicatiebeheerder", description: "Eigenaar van de functionele en technische kant van applicaties." },
      { name: "Functioneel Beheerder", description: "Verantwoordelijk voor processturen en business-IT alignatie." },
      { name: "Product Owner", description: "Verantwoordelijk voor applicatie roadmap en prioriteiten." },
      { name: "Change Manager", description: "Coördinator van wijzigingen met minimaal disruptie." },
      { name: "Service Desk Agent", description: "Eerstelijn ondersteuning van gebruikers." }
    ]
  },
  tools: {
    title: "Applicatiebeheer Tools",
    items: [
      { name: "Jira Service Management", description: "Incident- en changemanagement met workflow automatisering." },
      { name: "ServiceNow", description: "Enterprise ITSM platform voor groote organisaties." },
      { name: "TOPdesk", description: "Nederlandse ITSM oplossing voor MKB." },
      { name: "Zendesk", description: "Support ticketing en live chat integratie." },
      { name: "Splunk", description: "Log analyse en monitoring voor proactieve problemdetectie." }
    ]
  }
};

const scenarios = [
  {
    title: "Applicaties veroorzaken regelmatig verstoringen",
    description: "Incidenten vallen niet altijd op te lossen, oorzaken blijven onduidelijk en gebruikers ervaren continuïteitsproblemen. Geen structuurelle root cause analysis."
  },
  {
    title: "Geen structureel incidentproces aanwezig",
    description: "Problemen worden ad-hoc opgepakt zonder geregistreerde flows. Escalatie verloopt via informele kanalen en niemand heeft overzicht."
  },
  {
    title: "Verantwoordelijkheden niet duidelijk",
    description: "Issues vallen tussen wal en schip. Bij incidenten is onbekend wie eigenaar is, wat leidt tot vertraging en ontevredenheid."
  },
  {
    title: "Kennisrisico bij personeelswisseling",
    description: "Configuraties, procedures en workarounds staan niet gedocumenteerd. Wanneer een applicatiebeheerder vertrekt, gaat cruciale kennis verloren."
  },
  {
    title: "Geen continuïteit bij updates",
    description: "Nieuwe features blijven liggen omdat alle tijd gaat naar incidentherstel. Er is geen strategisch plan voor doorontwikkeling en beheer."
  },
  {
    title: "Release- en deployfouten",
    description: "Wijzigingen aan producties worden live gezet zonder testing. Geen rollback procedures en onvoldo risicoanalyse."
  }
];

const differences = [
  {
    aspect: "Focusgebied",
    applicatie: "Technische werking, stabiliteit en continuïteit",
    functioneel: "Processturen, business-IT alignatie, requirementanalyse"
  },
  {
    aspect: "Verantwoordelijkheidsgebied",
    applicatie: "Eigenaar van de applicatie",
    functioneel: "Eigenaar van de IT-processen en koppeling met business"
  }
];

const benefits = [
  {
    title: "Directe expertise en ervaring",
    description: "Jaren ervaring met diverse applicatieomgevingen. Snelle inzetbaarheid zonder wervingsperiode."
  },
  {
    title: "Geen lange termijn verplichtingen",
    description: "Inzetbaar op projectbasis. Geen fulltime FTE wervings- en kosten voor perioden met lage activiteit."
  },
  {
    title: "Objectieve advisering",
    description: "Onafhankelijkheid in tool- en proceskeuzes. Geen vendor lock-in, focus op wat werkt voor jouw organisatie."
  },
  {
    title: "Kennisoverdracht en documentatie",
    description: "Procedures worden vastgelegd en kennis wordt geborgd. Je team wordt zelfstandiger in applicatiebeheer."
  }
];

const faqs = [
  {
    question: "Wat is het verschil tussen applicatiebeheer en functioneel beheer?",
    answer: "Applicatiebeheerder richt zich op de technische kant: configuratie, performance, updates en integraties. Functioneel beheerder focust op de processturen: requirementanalyse, wijzigingsbeheer en afstemming met businessdoelen. Samen zetten ze de volledige applicatiebeheer. Vaak werk ik beide rollen in één persoon."
  },
  {
    question: "Bied je ook beheer van legacy applicaties?",
    answer: "Zeker. Legacy systemen vergen specifieke kennis van verouwde technologieën, mainframes en assemblertalen. Ik help bij het moderniseren, migreren of anders planmatig vervangen van oude systemen."
  },
  {
    question: "Hoe gaat te werk met interne teams?",
    answer: "Ik integreer naadloos met bestaande teams. Van gezamenlijke doelstellingen tot heldere taakverdeling. Ik documenteer werkafspraken, escalatieroutes en communicatiestructuren om effectieve samenwerking te garanderen."
  },
  {
    question: "Wat gebeurt er met mijn kennis bij vertrek?",
    answer: "Alles wordt gedocumenteerd: runbooks, configuraties, procedures en known errors. Daarnaast geef ik training aan interne teams zodat zij het beheer kunnen overnemen. Kennisoverdracht is standaard onderdeel van mijn dienstverlening."
  },
  {
    question: "Kan je combinieren met andere ZZP'rollers?",
    answer: "Absoluut. Ik werk goed samen met andere specialisten zoals functioneel beheerders, security experts en cloud architecten. Samen leveren we completere IT-dienstverlening voor jouw organisatie."
  }
];

export default function ZZPApplicatiebeheerderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        <Navigation />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 block opacity-0 animate-fade-in">
            Diensten
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            ZZP Applicatiebeheerder
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Ervaren applicatiebeheerder voor bedrijfskritische systemen. Inzetbaar op interim basis voor continuïteit, structuur en betrouwbaarheid.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Beschikbaarheid bespreken
            </Link>
            <Link href="/diensten" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk alle diensten
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Semantische Entiteiten Sectie - Entity Based SEO */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Complete Applicatiebeheer
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Alles wat een applicatiebeheerder doet, bij elkaar in één overzicht.
              </p>
            </header>
          </ScrollReveal>

          {/* Frameworks */}
          <div className="mb-12">
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">account_tree</span>
                {entities.frameworks.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.frameworks.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-accent mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Processen */}
          <div className="mb-12">
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">settings</span>
                {entities.processen.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.processen.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-accent mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* KPI's */}
          <div className="mb-12">
            <ScrollReveal delay={300}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">bar_chart</span>
                {entities.kpis.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.kpis.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-accent mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Rollen */}
          <div className="mb-12">
            <ScrollReveal delay={400}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">badge</span>
                {entities.rollen.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.rollen.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-accent mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Tools */}
          <div className="mb-12">
            <ScrollReveal delay={500}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">extension</span>
                {entities.tools.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.tools.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-slate-900 mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scenario's: Wanneer ZZP Applicatiebeheerder nodig */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een ZZP Applicatiebeheerder nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Herkenbare signalen dat professionele beheer waardevol is.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-2">
                    <span className="material-icons text-accent flex-shrink-0 text-2xl">warning</span>
                    {scenario.title}
                  </h3>
                  <p className="text-slate-600">{scenario.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="max-w-3xl mx-auto p-5 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-slate-700 text-sm">
                <strong>Interim of vast?</strong> Bespreek wat past bij jouw situatie en organisatiecultuur.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Verschil: Applicatiebeheer vs Functioneel Beheer */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Applicatiebeheerder vs Functioneel Beheer
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Vaak werk ik beide rollen in één functie. Maar wat is het verschil?
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {differences.map((diff, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="mb-4">
                    <h4 className="font-bold text-lg text-slate-900 mb-2">{diff.aspect}</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-icons text-purple-600 text-xl mt-0.5">code</span>
                      <div>
                        <h5 className="font-semibold text-slate-800">Applicatiebeheerder</h5>
                        <p className="text-sm text-slate-600">{diff.applicatie}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-icons text-blue-600 text-xl mt-0.5">account_tree</span>
                      <div>
                        <h5 className="font-semibold text-slate-800">Functioneel Beheerder</h5>
                        <p className="text-sm text-slate-600">{diff.functioneel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <p className="text-slate-700 text-sm">
                  <strong>Praktijk:</strong> De meeste organisaties hebben beide rollen nodig. Ik combineer ze naadloos.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Voordelen ZZP Inzet */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Voordelen van ZZP Applicatiebeheerder
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Waarom kiezen voor ervaren expertise op projectbasis?
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <span className="material-icons text-accent">check_circle</span>
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Samenwerking en Inzetbaarheid */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Samenwerking en Inzetbaarheid
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Interim beschikbaarheid</h4>
                  <p className="text-sm text-slate-600 mb-3">Inzetbaar op projectbasis voor perioden die jouw organisatie nodig heeft. Geen langdurige wervings- en kostenoverhead.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Tijdelijke vervanging</h4>
                  <p className="text-sm text-slate-600 mb-3">Bij ziekte of verloop van personeel direct beschikbaar om gaten op te vangen. Kennis blijft behouden.</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Projectmatige ondersteuning</h4>
                  <p className="text-sm text-slate-600 mb-3">Gerichte inzet voor migraties, implementaties of specifieke beheerprojecten.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <p className="text-slate-700 text-sm">
                  <strong>Op maat in te zetten:</strong> Of fulltime, parttime of hybrid. Jij bepaalt de inzetduur en focusgebieden.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Werkzaamheden */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Werkzaamheden
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-sm mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-icons text-primary">build</span>
                      Beheer & Onderhoud
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Configuraties beheren, updates uitvoeren en patch management. Zorg dat applicaties up-to-date en veilig blijven.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-icons text-primary">troubleshoot</span>
                      Incident & Probleembeheer
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Incidenten structurerd afhandelen, root cause analysis en preventieve maatregelen. Minder storingen, snellere oplosting.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-icons text-primary">settings_suggest</span>
                      Configuratiebeheer
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Applicatie settings beheren en release management. Controleerde wijzigingen met rollback procedures.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-icons text-primary">monitoring</span>
                      Monitoring & Performance
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Proactieve monitoring van uptime, response times en applicatieperformance. Problemen vroeg signaleren.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <p className="text-slate-700 text-sm">
                  <strong>Afhankelijk van de situatie:</strong> Elke omgeving is anders. Ik analyseer eerst, bepaal de focus en pas de aanpak aan.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Sectie met uitgebreide antwoorden */}
      <FAQSection faqs={faqs} />
      <FAQSchema faqs={faqs} />

      {/* Gerelateerde Diensten */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Gerelateerde Diensten
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Link href="/diensten/zzp-functioneel-beheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-blue-600 text-3xl mb-2">sync_alt</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Functioneel Beheerder</h3>
                <p className="text-sm text-slate-500">Processturen, business-IT alignatie en requirementanalyse.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/support-itsm" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-emerald-600 text-3xl mb-2">support_agent</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Support & ITSM</h3>
                <p className="text-sm text-slate-500">1e/2e lijns support, ITIL-processen en SLA-afspraken.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/diensten/it-consultancy" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-purple-600 text-3xl mb-2">search</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Consultancy & Audits</h3>
                <p className="text-sm text-slate-500">Applicatie-audits, performance-analyses en security scans.</p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Sectie */}
      <section className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Zoekt een ervaren ZZP Applicatiebeheerder?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Bespreek jouw situatie en ontdek wat ik kan betekenen voor jouw applicatieomgeving.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Plan een vrijblijvend gesprek
              </Link>
              <p className="text-sm text-blue-200">
                Geen verplichtingen, wel inzicht.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
