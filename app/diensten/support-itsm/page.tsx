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

// Table of Contents - Anchor navigation
const tableOfContents = [
  { id: "wat-is-itsm", label: "Wat is ITSM" },
  { id: "wanneer-nodig", label: "Wanneer nodig?" },
  { id: "incident-management", label: "Incident & Problem" },
  { id: "sla-proces", label: "SLA & Proces" },
  { id: "resultaten", label: "Resultaten" },
  { id: "tarieven", label: "Tarieven" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" }
];

// Credentials & Social Proof
const credentials = [
  { icon: "workspace_premium", text: "15+ jaar ervaring als ITSM specialist" },
  { icon: "verified", text: "ITIL 4 gecertificeerd" },
  { icon: "support_agent", text: "Ervaring bij MKB en scale-ups" },
  { icon: "location_on", text: "Direct inzetbaar vanuit Breda, NL" }
];

// Wanneer ITSM nodig is - Signalen
const itsmSignals = [
  {
    title: "Incidenten blijven terugkomen",
    description: "Zelfde problemen duiken steeds weer op zonder structurele oplossing.",
    solution: "Root Cause Analysis en Knowledge Base zorgen voor permanente fixes."
  },
  {
    title: "Geen inzicht in supportprestaties",
    description: "U weet niet hoe snel issues worden opgelost of of SLA's worden gehaald.",
    solution: "KPI-dashboards met MTTR, FCR en SLA compliance geven volledig inzicht."
  },
  {
    title: "Developers worden afgeleid",
    description: "Uw development team besteedt te veel tijd aan supportvragen.",
    solution: "Dedicated support laag ontlast developers voor 30% meer development velocity."
  },
  {
    title: "Kennis verdwijnt bij personeelsverloop",
    description: "Als medewerkers vertrekken, verdwijnen oplossingen en kennis.",
    solution: "Runbooks en Knowledge Base borgen kennis blijvend in de organisatie."
  },
  {
    title: "Wijzigingen veroorzaken nieuwe problemen",
    description: "Elke deployment of change leidt tot onverwachte incidenten.",
    solution: "Change Management met CAB en rollback procedures voorkomt verrassingen."
  },
  {
    title: "Support is reactief en onvoorspelbaar",
    description: "Er is geen structuur: incidents duren te lang, geen prioritering.",
    solution: "ITIL-processen maken support voorspelbaar met duidelijke SLA's."
  }
];

// Incident, Problem & Change Management Details
const itsmProcesses = [
  {
    title: "Incident Management",
    icon: "report_problem",
    description: "Snel en gestructureerd verstoringen oplossen volgens ITIL 4.",
    deliverables: [
      "Prioriteitsmatrix (P1-P4) op impact en urgentie",
      "Escalatieprocedures en responstijdafspraken",
      "First Contact Resolution optimalisatie",
      "Known Error Database (KEDB)"
    ]
  },
  {
    title: "Problem Management",
    icon: "psychology",
    description: "Onderliggende oorzaken identificeren en permanent oplossen.",
    deliverables: [
      "Root Cause Analysis (5 Whys, Fishbone)",
      "Trendanalyse van terugkerende incidenten",
      "Proactieve probleempreventie",
      "Documentatie in Knowledge Base"
    ]
  },
  {
    title: "Change Management",
    icon: "sync",
    description: "Veilige en gecontroleerde wijzigingen met minimale risico's.",
    deliverables: [
      "Change Advisory Board (CAB) facilitatie",
      "Impactanalyse en risico-inschatting",
      "Test- en rollback procedures",
      "Change calendar en communicatie"
    ]
  }
];

// SLA & Procesoptimalisatie
const slaOptimalisatie = [
  {
    title: "SLA Definitie & Monitoring",
    icon: "assignment",
    items: [
      "Response time en resolution time afspraken",
      "Prioriteitsmatrix gekoppeld aan SLA's",
      "Real-time SLA dashboards",
      "Escalatie bij SLA drempelwaarden"
    ]
  },
  {
    title: "KPI-rapportage",
    icon: "analytics",
    items: [
      "MTTR (Mean Time To Repair)",
      "FCR (First Contact Resolution)",
      "CSAT (Customer Satisfaction)",
      "Ticket volume en trends"
    ]
  },
  {
    title: "Procesoptimalisatie",
    icon: "tune",
    items: [
      "Workflowautomatisering",
      "Self-service portal setup",
      "Knowledge Base implementatie",
      "Continue verbetering (CSI)"
    ]
  }
];

// Conversion Layer - Resultaten
const results = [
  { metric: "MTTR verlaging", before: "48+ uur", after: "4-8 uur", impact: "92% sneller" },
  { metric: "First Contact Resolution", before: "35-45%", after: "65-75%", impact: "Minder escalaties" },
  { metric: "SLA compliance", before: "Onbekend", after: "95%+", impact: "Voorspelbaarheid" },
  { metric: "Development velocity", before: "Baseline", after: "+30%", impact: "Meer features" }
];

// Tarieven
const tarieven = [
  {
    naam: "ITSM Quickstart",
    prijs: "€2.500",
    periode: "/maand",
    beschrijving: "Idealiter voor MKB-starters met basis supportbehoefte",
    features: [
      "1e lijns support (business hours)",
      "Incident management",
      "Basis SLA rapportage",
      "Knowledge Base setup",
      "Maandelijkse KPI review"
    ],
    populair: false
  },
  {
    naam: "ITSM Professional",
    prijs: "€4.000",
    periode: "/maand",
    beschrijving: "Voor groeiende organisaties met complexere supportbehoefte",
    features: [
      "1e + 2e lijns support",
      "Incident & Problem management",
      "Change management support",
      "SLA dashboards & rapportages",
      "ITSM tool configuratie",
      "Kennisborging & training"
    ],
    populair: true
  },
  {
    naam: "ITSM Enterprise",
    prijs: "€5.500+",
    periode: "/maand",
    beschrijving: "Compleet ITSM voor scale-ups en mid-market",
    features: [
      "1e, 2e en 3e lijns support",
      "Volledig ITSM framework",
      "24/7 support optioneel",
      "Vendor management",
      "DevOps integratie",
      "Dedicated support specialist"
    ],
    populair: false
  }
];

// Gerelateerde diensten voor interne links
const relatedServices = [
  {
    title: "ZZP Applicatiebeheerder",
    url: "/diensten/zzp-applicatiebeheerder",
    description: "Technisch beheer van bedrijfskritische applicaties. Monitoring, updates en configuratiebeheer."
  },
  {
    title: "ZZP Functioneel Beheerder",
    url: "/diensten/zzp-functioneel-beheerder",
    description: "Brug tussen business en IT. Requirements, wijzigingsbeheer en processturing."
  },
  {
    title: "IT Consultancy & Audits",
    url: "/diensten/it-consultancy",
    description: "Onafhankelijke analyse van uw IT-processen en applicaties. Inzicht vooraf investeren."
  },
  {
    title: "Fractional CTO",
    url: "/diensten/fractional-cto",
    description: "Technische strategie en teamrichting voor groeiende organisaties. Part-time CTO expertise."
  }
];

// Blog suggesties voor interne links
const blogSuggestions = [
  {
    title: "Van ad-hoc helpdesk naar ITIL support",
    url: "/blog/van-ad-hoc-helpdesk-naar-itil-support"
  },
  {
    title: "Technische schuld voorkomen",
    url: "/blog/technische-schuld-voorkomen"
  },
  {
    title: "Performanceproblemen herkennen",
    url: "/blog/performanceproblemen-herkennen"
  }
];

// Conversion Layer - FAQ (min 6, geschikt voor structured data)
const faqs: FAQItem[] = [
  {
    question: "Wat kost een ITSM support specialist inhuren?",
    answer: "De investering voor een ITSM support specialist varieert van €2.500 tot €6.000+ per maand, afhankelijk van supportniveaus (1e/2e/3e lijn), dekkingsuren en complexiteit. Voor een complete servicedesk starten MKB-organisaties gemiddeld vanaf €2.500-€4.000 per maand inclusief incident management, SLA-rapportages en continue verbetering. Scale-ups met 24/7 support behoeften investeren doorgaans €5.000-€6.000+ per maand. Vraag een vrijblijvende scan aan voor een specifiek advies op maat."
  },
  {
    question: "Wat doet een ITSM support specialist precies?",
    answer: "Een ITSM support specialist organiseert en professionaliseert uw IT support volgens het ITIL 4 framework. Dit omvat: Incident Management (verstoringen snel oplossen), Problem Management (onderliggende oorzaken wegnemen), Change Management (veilige wijzigingen), SLA-management (afspraken over responstijden en kwaliteit) en Kennisborging (documentatie in Knowledge Base). In tegenstelling tot ad-hoc helpdesk support, bouwt een ITSM specialist structurele processen die voorspelbare resultaten leveren."
  },
  {
    question: "Waarom een ITIL support specialist inhuren als ZZP'er?",
    answer: "Een ITIL support specialist als ZZP'er (service management ZZP) inhuren biedt flexibiliteit zonder vaste FTE-kosten. U krijgt: 1) Expertise op afroep - betaal alleen wat u nodig heeft, 2) Snelle inzet - geen wervings- en onboardingstrajecten, 3) ervaringskennis uit meerdere organisaties, 4) Schaalbaarheid bij pieken en dalen. Voor MKB-organisaties die geen fulltime supportafdeling willen bouwen, is een externe ITSM specialist de kosteneffectieve oplossing."
  },
  {
    question: "Hoe snel kan een ITSM support specialist starten?",
    answer: "Als ITSM support specialist ben ik normaliter binnen 1-2 weken inzetbaar. Na een intakegesprek volgt een maturity scan in week 1, procesinrichting in week 2-4, en volledige operationele support vanaf week 4-6. Voor urgente supportbehoeften kan ik binnen enkele dagen incident management op meenemen terwijl we de structurele processen opzetten. De exacte doorlooptijd hangt af van uw huidige volwassenheidsniveau en tooling."
  },
  {
    question: "Wat is het verschil tussen incident en problem management?",
    answer: "Incident Management richt zich op het snel herstellen van de service bij een verstoring - de brand blussen. Problem Management gaat dieper: het identificeren van de onderliggende oorzaak en het permanent oplossen om herhaling te voorkomen - voorkomen dat de brand weer ontstaat. Een goede ITSM specialist combineert beide: snelle incident afhandeling én structurele probleemoplossing via Root Cause Analysis."
  },
  {
    question: "Welke ITSM tools gebruikt u?",
    answer: "Ik werk met alle gangbare ITSM tools en adviseer objectief op basis van uw situatie: Jira Service Management (ideaal voor development teams), ServiceNow (enterprise 100+ FTE), TOPdesk (Nederlands MKB, gebruiksvriendelijk), Freshservice (schaalbaar met self-service), en Zendesk (customer support focus). Ik configureer en optimaliseer uw bestaande tooling of adviseer over migratie indien nodig - zonder vendor lock-in."
  },
  {
    question: "Biedt u ook 24/7 IT support aan?",
    answer: "Ja, 24/7 support is mogelijk als onderdeel van de ITSM dienstverlening. Dit is relevant voor organisaties met internationale operaties, kritische systemen zonder downtime-tolerantie, of industrien als finance, healthcare en e-commerce. Voor de meeste MKB-organisaties is business hours support (08:00-18:00) met een noodlijn buiten kantooruren een kosteneffectieve oplossing. Samen bepalen we de juiste dekkingsgraad."
  },
  {
    question: "Hoe garandeert u kennisborging?",
    answer: "Kennisborging is essentieel voor duurzame supportkwaliteit. Ik werk met: 1) Knowledge Base met oplossingsartikelen voor veelvoorkomende issues, 2) Runbooks met stapsgewijze procedures, 3) Known Error Database (KEDB) voor bekende problemen en workarounds, 4) Training van uw teamleden. Wanneer ik vertrek, blijft alle kennis gedocumenteerd in uw organisatie. Geen knowhow-verlies door personeelswisseling."
  }
];

export default function SupportITSMPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        <Navigation />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 block opacity-0 animate-fade-in">
            IT Service Management Specialist
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            ITSM Support Specialist Inhuren – ITIL-Georganiseerde Service
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-8 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Support & ITSM uitbesteden aan een ITIL 4 gecertificeerde specialist.
            Van reactieve helpdesk naar professionele supportorganisatie met <strong>92% snellere incidentafhandeling</strong>.
          </p>

          {/* Key USPs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in-up animation-delay-250">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <span className="material-icons text-base">check_circle</span>
              MTTR van 48u naar 4-8u
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <span className="material-icons text-base">check_circle</span>
              95%+ SLA compliance
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <span className="material-icons text-base">check_circle</span>
              30% meer dev velocity
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Vraag vrijblijvende scan aan
            </Link>
            <Link href="#tarieven" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk tarieven
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-slate-200 py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-6">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-slate-500 hover:text-accent transition-colors">Home</Link></li>
            <li><span className="text-slate-400">/</span></li>
            <li><Link href="/diensten" className="text-slate-500 hover:text-accent transition-colors">Diensten</Link></li>
            <li><span className="text-slate-400">/</span></li>
            <li className="text-slate-900 font-medium">ITSM Support Specialist</li>
          </ol>
        </div>
      </nav>

      {/* Table of Contents - Desktop Sticky */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center gap-1 text-sm overflow-x-auto" aria-label="Inhoudsopgave">
            <span className="text-slate-500 font-medium mr-2 flex-shrink-0">Op deze pagina:</span>
            {tableOfContents.map((item, index) => (
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

      {/* Credentials Bar - E-E-A-T */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {credentials.map((cred, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="material-icons text-accent text-xl">{cred.icon}</span>
                <span className="text-sm text-slate-700">{cred.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 1: Wat is ITSM */}
      <section id="wat-is-itsm" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Wat is ITSM en waarom een specialist inhuren?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>ITSM (IT Service Management)</strong> is het professioneel organiseren van IT support volgens bewezen frameworks zoals ITIL 4. In plaats van ad-hoc reageren op incidenten, bouwt u gestructureerde processen voor incident-, problem- en changemanagement. U stelt SLA's op, meet KPI's en borgt kennis in een Knowledge Base.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Een <strong>ITSM support specialist inhuren</strong> betekent dat u deze professionalisering uitbesteedt aan een expert. U krijgt voorspelbare support, tevreden gebruikers en een development team dat zich kan richten op productontwikkeling in plaats van brandjes blussen.
              </p>
            </ScrollReveal>

            {/* Quick benefits */}
            <ScrollReveal>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-50 rounded-xl p-5">
                  <span className="material-icons text-accent text-2xl mb-2">speed</span>
                  <h3 className="font-bold text-slate-900 mb-1">Snellere afhandeling</h3>
                  <p className="text-sm text-slate-600">MTTR van 48+ uur naar 4-8 uur met gestructureerde processen</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <span className="material-icons text-accent text-2xl mb-2">visibility</span>
                  <h3 className="font-bold text-slate-900 mb-1">Volledig inzicht</h3>
                  <p className="text-sm text-slate-600">KPI-dashboards met SLA compliance, FCR en CSAT scores</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <span className="material-icons text-accent text-2xl mb-2">school</span>
                  <h3 className="font-bold text-slate-900 mb-1">Kennisborging</h3>
                  <p className="text-sm text-slate-600">Documentatie in Knowledge Base, geen knowhow-verlies</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sectie 2: Wanneer ITSM nodig is */}
      <section id="wanneer-nodig" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heeft u een ITSM support specialist nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Herkent u deze signalen? Dan is het tijd om support & ITSM uit te besteden.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {itsmSignals.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-amber-500 flex-shrink-0">warning</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600 mb-2">{item.description}</p>
                      <p className="text-sm text-emerald-700 flex items-start gap-1">
                        <span className="material-icons text-xs mt-0.5">check</span>
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 3: Incident, Problem & Change Management */}
      <section id="incident-management" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Incident, Problem & Change Management
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                De kernprocessen van professionele ITSM die ik als ITIL support specialist implementeer.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {itsmProcesses.map((process, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-slate-50 rounded-xl p-6 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                    <span className="material-icons text-white text-2xl">{process.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-slate-600 mb-4">{process.description}</p>
                  <ul className="space-y-2">
                    {process.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="material-icons text-accent text-xs mt-1">check_circle</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 4: SLA & Procesoptimalisatie */}
      <section id="sla-proces" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                SLA & Procesoptimalisatie
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Meetbare afspraken en continue verbetering voor voorspelbare supportkwaliteit.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {slaOptimalisatie.map((section, idx) => (
              <ScrollReveal key={idx} delay={((idx + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-icons text-accent text-2xl">{section.icon}</span>
                    <h3 className="font-bold text-slate-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="material-icons text-accent text-xs mt-1">arrow_right</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Tools integration */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">ITSM Tools waar ik mee werk</h3>
              <div className="flex flex-wrap gap-3">
                {['Jira Service Management', 'ServiceNow', 'TOPdesk', 'Freshservice', 'Zendesk'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3">
                Ik adviseer objectief en configureer uw tooling - geen vendor lock-in.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sectie 5: Resultaten */}
      <section id="resultaten" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Resultaten voor uw organisatie
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Meetbare verbeteringen na het inhuren van een ITSM support specialist.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3">{result.metric}</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-red-500 line-through">{result.before}</span>
                    <span className="material-icons text-emerald-600">arrow_forward</span>
                    <span className="text-emerald-600 font-bold text-lg">{result.after}</span>
                  </div>
                  <span className="text-sm text-slate-600">{result.impact}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 6: Tarieven */}
      <section id="tarieven" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tarieven ITSM Support Specialist
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Transparante prijsindicatie. Uw exacte investering bepaalt u tijdens de gratis intake.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {tarieven.map((pakket, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className={`bg-white rounded-xl p-6 ${pakket.populair ? 'ring-2 ring-accent relative' : 'border border-slate-200'}`}>
                  {pakket.populair && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      Meest gekozen
                    </span>
                  )}
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{pakket.naam}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-slate-900">{pakket.prijs}</span>
                    <span className="text-slate-500">{pakket.periode}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{pakket.beschrijving}</p>
                  <ul className="space-y-2 mb-6">
                    {pakket.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="material-icons text-accent text-xs mt-1">check</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-full font-semibold transition-all ${
                      pakket.populair
                        ? 'bg-accent text-white hover:bg-accent-hover'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Aanvragen
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-sm text-slate-500 mt-8 max-w-2xl mx-auto">
              * Prijzen zijn indicatief en exclusief BTW. Exacte investering afhankelijk van supportniveaus, dekkingsuren en complexiteit. Vraag een vrijblijvende scan aan voor een offerte op maat.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Internal Links - Gerelateerde diensten */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Gerelateerde diensten
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                ITSM support werkt optimaal in combinatie met deze expertisegebieden.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {relatedServices.map((service, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <Link href={service.url} className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                  <span className="material-icons text-accent text-3xl mb-2">arrow_forward</span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold text-slate-900 mb-4">Gerelateerde artikelen</h3>
            <div className="flex flex-wrap gap-3">
              {blogSuggestions.map((blog, index) => (
                <Link
                  key={index}
                  href={blog.url}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
                >
                  <span className="material-icons text-xs">article</span>
                  {blog.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Klaar om ITSM support uit te besteden?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake. We bespreken uw situatie, identificeren knelpunten en adviseren over een stappenplan.
              <strong className="block mt-4">Geen verplichtingen, wel duidelijkheid.</strong>
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Plan gratis intake (15 minuten)
              </Link>
              <p className="text-sm text-blue-200">
                Of bel direct: <a href="tel:+31643983420" className="underline hover:no-underline">+31 6 4398 3420</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
