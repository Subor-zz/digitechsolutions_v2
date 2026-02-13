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

// Structured Data Components
function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'IT Support & IT Service Management',
    'description': 'Professionele IT Support en ITSM dienstverlening voor MKB en scale-ups. Includet incident management, 1e/2e/3e lijns support, SLA afspraken en kennisborging volgens ITIL 4.',
    'provider': {
      '@type': 'Organization',
      'name': 'DigiTech Solutions',
      'url': 'https://www.digitechsolutions.nl'
    },
    'serviceType': ['IT Support', 'ITSM', 'Helpdesk', 'Service Desk', 'Incident Management', 'Change Management'],
    'areaServed': {
      '@type': 'Country',
      'name': 'Nederland'
    },
    'keywords': 'IT support, ITSM, ITIL, helpdesk uitbesteden, service desk, incident management, change management, SLA, MTTR, 1e lijns support, 2e lijns support, extern support',
    'offers': {
      '@type': 'Offer',
      'name': 'IT Support & ITSM Dienst',
      'description': 'ITSM implementatie, supportorganisatie inrichting en 24/7 support dekking'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.digitechsolutions.nl'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Diensten',
        'item': 'https://www.digitechsolutions.nl/diensten'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'IT Support & ITSM',
        'item': 'https://www.digitechsolutions.nl/diensten/support-itsm'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Trust Layer - Problemen die we oplossen
const painPoints = [
  {
    title: "Incidenten blijven terugkomen zonder permanente oplossing",
    relief: "Wij voeren Root Cause Analysis en leggen oplossingen vast in een Knowledge Base. Zo los je elk probleem één keer goed op."
  },
  {
    title: "Support is reactief en onvoorspelbaar",
    relief: "Met duidelijke SLA's, KPI's en processen weet je precies wat je kunt verwachten. Geen verrassingen, maar heldere afspraken."
  },
  {
    title: "Development team wordt constant gestoord met supportvragen",
    relief: "Een dedicated support laag ontlast je developers. Zij kunnen zich richten op productontwikkeling, niet op ad-hoc brandjes."
  },
  {
    title: "Kennis verdwijnt wanneer medewerkers vertrekken",
    relief: "Alles wordt gedocumenteerd in runbooks en knowledge bases. Kennis blijft behouden voor je organisatie."
  },
  {
    title: "Geen inzicht in supportkwaliteit en -prestaties",
    relief: "Wij leveren heldere KPI-rapportages: MTTR, FCR, SLA performance, CSAT. Data-gestuurde verbetering."
  },
  {
    title: "Wijzigingen leiden tot onverwachte incidenten",
    relief: "Professioneel change management met CAB, impactanalyse en rollback procedures. Geen verrassingen na deployments."
  }
];

// Core Content - Wat we leveren
const services = [
  {
    title: "1e lijns Support (Service Desk)",
    description: "Eerste contactpunt voor alle gebruikers. Registreren, triage en eerste oplossingspoging.",
    icon: "support_agent",
    deliverables: [
      "Telefonische en digitale bereikbaarheid",
      "Ticketregistratie en categorisatie",
      "First Call Resolution waar mogelijk",
      "Doorverwijzing naar 2e lijn bij complexiteit"
    ]
  },
  {
    title: "2e lijns Support",
    description: "Specialistische support voor complexere incidenten en diepere technische analyse.",
    icon: "engineering",
    deliverables: [
      "Diepere technische troubleshooting",
      "Configuratiewijzigingen",
      "Root cause analysis bij terugkerende issues",
      "Kennisartikelen schrijven voor Knowledge Base"
    ]
  },
  {
    title: "3e lijns Support & Vendor Management",
    description: "Expert-niveau voor architectuurvraagstukken en leverancierscontact.",
    icon: "architecture",
    deliverables: [
      "Architectuuradvies en designs",
      "Leveranciersescalatie (Zendesk, ServiceNow, etc.)",
      "Permanente oplossingen voor structurele problemen",
      "Integration support"
    ]
  },
  {
    title: "Incident & Problem Management",
    description: "Gestructureerd afhandelen van verstoringen volgens ITIL 4 best practices.",
    icon: "report_problem",
    deliverables: [
      "Prioriteitsmatrix (P1-P4)",
      "Escalatieprocedures",
      "Known Error Database (KEDB)",
      "Root Cause Analysis met 5 Whys/Fishbone"
    ]
  },
  {
    title: "Change Management",
    description: "Gecoördineerde wijzigingen met minimale risico's en disruptie.",
    icon: "sync",
    deliverables: [
      "Change Advisory Board (CAB)",
      "Impactanalyse en risico-inschatting",
      "Rollback procedures",
      "Change calendar en planning"
    ]
  },
  {
    title: "Kennisborging & Knowledge Base",
    description: "Documentatie en ontsluiting zodat kennis niet verloren gaat.",
    icon: "school",
    deliverables: [
      "Runbooks en SOP's",
      "Knowledge Base oplossingsartikelen",
      "Known Error Database",
      "Training en onboarding van supportmedewerkers"
    ]
  }
];

// Authority Layer - Werkwijze
const process = [
  {
    fase: "1. Maturity Scan (Week 1)",
    description: "In kaart brengen van huidige volwassenheidsniveau: van ad-hoc naar gedefinieerd naar gemeten naar geoptimaliseerd.",
    icon: "search",
    output: "Rapport met knelpunten, quick wins en roadmap"
  },
  {
    fase: "2. Procesinrichting (Week 2-4)",
    description: "ITIL 4 processen implementeren: Incident, Problem, Change, Request en Knowledge Management.",
    icon: "settings",
    output: "Procesbeschrijvingen, workflows, RACI-matrix"
  },
  {
    fase: "3. Tooling Selectie & Config (Week 3-6)",
    description: "Selectie en implementatie van Jira SM, ServiceNow, TOPdesk of Freshservice afgestemd op schaal en behoeften.",
    icon: "extension",
    output: "Geconfigureerde ITSM tool met integraties"
  },
  {
    fase: "4. Team Training & Go-Live (Week 6-8)",
    description: "Trainen van supportmedewerkers,Knowledge Base vullen, onboarding en livegang.",
    icon: "groups",
    output: "Getraind team, documentatie, live support"
  },
  {
    fase: "5. KPI-monitoring & CSI (Doorlopend)",
    description: "Continu meten, rapporteren en verbeteren via Service Level Management en CSI-register.",
    icon: "trending_up",
    output: "KPI dashboards, kwartaalrapportages, improvement plannen"
  }
];

// Authority Layer - Tools & Frameworks
const toolsFrameworks = [
  { category: "ITSM Tools", items: [
    { name: "Jira Service Management", fit: "Development-teams, Jira integratie" },
    { name: "ServiceNow", fit: "Enterprise (100+ FTE), complexe workflows" },
    { name: "TOPdesk", fit: "MKB/Nederlands, gebruiksvriendelijk" },
    { name: "Freshservice", fit: "Schaalbaar, sterke self-service" },
    { name: "Zendesk", fit: "Customer support focus, AI features" }
  ]},
  { category: "Frameworks & Standaarden", items: [
    { name: "ITIL 4", fit: "Wereldstandaard voor ITSM" },
    { name: "COBIT", fit: "Governance en controls framework" },
    { name: "ISO 20000", fit: "Internationale kwaliteitsstandaard" },
    { name: "DevOps/Agile", fit: "Integratie met development methodologies" }
  ]}
];

// Trust Layer - Voor wie
const targetAudience = [
  {
    segment: "MKB Bedrijven (20-100 FTE)",
    need: "Professionele support zonder fulltime FTE",
    pain: "Ad-hoc support, geen SLA's, eigenaar is opgebrand",
    outcome: "Voorspelbare support, lagere MTTR, focus op core business"
  },
  {
    segment: "Scale-ups & Growing Tech Companies",
    need: "Support die meegroeit met het team",
    pain: "Developers worden afgeleid door supportvragen",
    outcome: "Dedicated support laag, 30% meer development velocity"
  },
  {
    segment: "IT Managers & CTO's",
    need: "KPI-gestuurde supportverbetering",
    pain: "Geen inzicht in prestaties, SLA's niet gehaald",
    outcome: "Heldere rapportages, datagedreven verbetering"
  },
  {
    segment: "Organisaties met Tooling-uitdagingen",
    need: "Tooling selectie en optimalisatie",
    pain: "Jira/ServiceNow draait op halve kracht",
    outcome: "Geoptimaliseerde tooling die past bij organisatie"
  }
];

// Conversion Layer - Kwalificatiefilters
const notFor = [
  { text: "Geen zin om een volledige interne supportafdeling op te bouwen", icon: "block" },
  { text: "Grootschalige enterprise met 500+ FTE (wij richten ons op MKB/mid-market)", icon: "domain" },
  { text: "Organisaties die alleen een goedkope helpdesk willen uitbesteden zonder kwaliteit", icon: "warning" }
];

// Conversion Layer - Resultaten
const results = [
  { metric: "MTTR verlaging", before: "48+ uur", after: "4-8 uur", impact: "92% sneller" },
  { metric: "First Contact Resolution", before: "35-45%", after: "65-75%", impact: "Minder escalaties" },
  { metric: "SLA compliance", before: "Onbekend/Ad-hoc", after: "95%+ gehaald", impact: "Voorspelbaarheid" },
  { metric: "Development time vrijgemaakt", before: "0%", after: "30%", impact: "Meer features" },
  { metric: "Kennisborging", before: "In hoofden", after: "Gedocumenteerd", impact: "Geen knowhow verlies" }
];

// Conversion Layer - FAQ
const faqs = [
  {
    question: "Wat kost IT Support uitbesteden?",
    answer: "De investering in professionele ITSM varieert afhankelijk van uw situatie: gewenste supportniveaus (1e/2e/3e lijn), dekkingsuren (business hours vs 24/7), toolingvereisten en huidige volwassenheidsniveau. MKB-organisaties starten gemiddeld vanaf €2.500-€4.000 per maand voor een complete servicedesk, inclusief incident management, SLA-rapportages en continue verbetering. Voor scale-ups en grotere organisaties is maatwerk mogelijk. Vraag een vrijblijvende scan aan voor een specifieke investering."
  },
  {
    question: "Wat is het verschil tussen IT Support en ITSM?",
    answer: "IT Support is de dagelijkse uitvoering van hulpverlening aan gebruikers: tickets afhandelen, vragen beantwoorden, incidenten oplossen. ITSM (IT Service Management) is het framework dat deze ondersteuning structureel organiseert. ITSM omvat processen, rollen, verantwoordelijkheden, tools en metrics (KPI's). Kort: IT Support voert uit, ITSM organiseert. Zonder ITSM blijft support reactief en onvoorspelbaar. Met ITSM bouw je herkenbare processen, documenteer je kennis en meet je prestaties."
  },
  {
    question: "Wat zijn 1e, 2e en 3e lijns support?",
    answer: "1e lijns support (Service Desk) is het eerste contactpunt en behandelt eenvoudige vragen direct. 2e lijns support heeft specialistische kennis en behandelt complexere incidenten die door 1e lijn worden geëscaleerd. 3e lijns support is expert-niveau voor architectuurvraagstukken en leverancierscontact. Een effectieve supportorganisatie gebruikt deze indeling om: 1) Eenvoudige issues snel oplossen op 1e lijn, 2) Specialisten inzetten waar nodig op 2e lijn, 3) Expertise en leveranciers betrekken op 3e lijn. Dit verlaagt MTTR en verhoogt First Contact Resolution."
  },
  {
    question: "Welke ITSM tool past bij mijn organisatie?",
    answer: "De toolkeuze hangt af van uw schaal, behoeften en bestaande stack: Jira Service Management is ideaal voor development-teams die al Jira gebruiken en sterke integratie wensen. ServiceNow past bij grote organisaties (100+ FTE) met complexe workflowbehoeften en enterprise requirements. TOPdesk is populair in het Nederlandse MKB door gebruiksvriendelijkheid en focus op service management. Freshservice is schaalbaar en biedt uitstekende self-service voor snel groeiende organisaties. Zendesk is sterk voor customer support met AI-features. Ik help u graag bij een objectieve selectie op basis van uw situatie."
  },
  {
    question: "Wat zijn SLA, MTTR en FCR?",
    answer: "SLA (Service Level Agreement) zijn de afspraken tussen u en uw IT provider over responstijden, beschikbaarheid en kwaliteit. MTTR (Mean Time To Repair) is de gemiddelde tijd die nodig is om een incident volledig op te lossen. Een lagere MTTR betekent snellere service recovery. FCR (First Contact Resolution) is het percentage van incidenten dat bij het eerste contact wordt opgelost zonder escalatie. Een hogere FCR betekent efficiëntere support, tevreden gebruikers en lagere operationele kosten. Deze KPI's vormen de basis voor datagedreven supportverbetering."
  },
  {
    question: "Hoe snel kunnen jullie opschalen bij pieken?",
    answer: "Als externe ITSM partner kan ik snel opschalen zonder wervings- en ontslagtrajecten. Bij onverwachte pieken, projecten of tijdelijke vervanging kan ik capaciteit op korte termijn toevoegen. Daarnaast kan ik helpen bij het opzetten van flexibele schaalmodellen met vaste partners indien gewenst. U bent niet gebonden aan vaste FTE's, maar betaalt voor wat u nodig heeft, wanneer u het nodig heeft."
  },
  {
    question: "Bieden jullie ook 24/7 support aan?",
    answer: "Ja, 24/7 support is mogelijk als onderdeel van de dienstverlening. Dit is vooral relevant voor organisaties met: 1) Internationale operaties in verschillende tijdzones, 2) Kritische systemen die geen downtime kunnen veroorloven, 3) Industriesector met hoge beschikbaarheidseisen (finance, healthcare, e-commerce). Voor de meeste MKB-organisaties is business hours support met optionele noodlijn buiten kantooruren een kosteneffectieve oplossing. Samen bepalen we de juiste dekkingsgraaf op basis van uw behoeften en SLA-vereisten."
  },
  {
    question: "Hoe garanderen jullie kennisborging?",
    answer: "Kennisborging is essentieel voor duurzame supportkwaliteit. Ik werk met: 1) Knowledge Base met oplossingsartikelen voor veelvoorkomende issues, 2) Runbooks met stapsgewijze procedures voor complexe situaties, 3) Known Error Database (KEDB) voor documentatie van bekende problemen en workarounds, 4) Training van teamleden voor uniforme werkwijze. Wanneer ik vertrek, blijft alle kennis achter. Geen knowhow-verlies door personeelswisseling."
  },
  {
    question: "Wat is Change Management en waarom is het belangrijk?",
    answer: "Change Management is het gestructureerd aanbrengen van wijzigingen in IT systemen met minimale risico's en disruptie. Het omvat: 1) Change requests met duidelijke business case, 2) Impactanalyse voorafgaand aan de wijziging, 3) CAB (Change Advisory Board) voor grote changes, 4) Testprocedures vooraf en rollback procedures voor achteraf, 5) Change calendar voor planning en communicatie. Zonder change management worden changes ad-hoc uitgevoerd, wat leidt tot incidenten, rollback scenario's en ontevredenheid. Goed change management betekent voorspelbare, veilige wijzigingen met hoge success rate (95%+)."
  },
  {
    question: "Kan jullie dienst combineren met ons development team?",
    answer: "Absoluut. Sterker nog: dit is vaak de meest waardevolle combinatie. IT Support leert waar knelpunten zijn in de praktijk. Die inzichten kan ik meenemen in uw doorontwikkeling (DevOps integratie), waardoor toekomstige incidenten worden voorkomen. Support en development die elkaar versterken in plaats van werken als geïsoleerde silos - dat is moderne IT service delivery. Development kan zich richten op features, support lost operationele issues, en feedback uit beide richtingen verbetert het product."
  },
  {
    question: "Wat leveren jullie concreet op bij een ITSM traject?",
    answer: "Een ITSM traject levert tastbare resultaten op: 1) Maturity Scan rapport met huidig niveau en verbetermogelijkheden, 2) Gedefinieerde processen voor Incident, Problem, Change en Request Management, 3) Geïmplementeerde en geconfigureerde ITSM tool (Jira SM/ServiceNow/TOPdesk/Freshservice), 4) RACI-matrix met duidelijke rollen en verantwoordelijkheden, 5) Knowledge Base structuur met eerste oplossingsartikelen, 6) KPI-dashboard voor MTTR, FCR, SLA compliance en CSAT, 7) Getraind team volgens nieuwe werkwijze, 8) CSI-register voor continue verbetering. Na 3-6 maanden heeft u een volwassen supportorganisatie die meetbaar verbetert."
  },
  {
    question: "Hoe gaan jullie om met onze huidige tools en systemen?",
    answer: "Ik werk met uw bestaande stack in plaats van alles te vervangen. Of u nu Jira, GitHub, Azure DevOps, ServiceNow of een andere tool gebruikt - ik integreer daar zoveel mogelijk mee. Als uw huidige tooling onvoldoende is, adviseer ik objectief over alternatieven zonder vendor lock-in. Focus is op: 1) Behoud wat werkt, 2) Verbeter wat ontbreekt, 3) Integraties voor efficiëntere workflows. Geen big-bang migratie, maar gefaseerde verbetering met minimale disruptie."
  }
];

// Gerelateerde diensten voor interne links
const relatedServices = [
  {
    title: "ZZP Applicatiebeheerder",
    url: "/diensten/zzp-applicatiebeheerder",
    description: "Technisch applicatiebeheer: monitoring, updates, releases en configuratiebeheer voor bedrijfskritische systemen."
  },
  {
    title: "ZZP Functioneel Beheerder",
    url: "/diensten/zzp-functioneel-beheerder",
    description: "Brug tussen business en IT: requirements, wijzigingsbeheer, UAT-coördinatie en processturing."
  },
  {
    title: "IT Consultancy & Audits",
    url: "/diensten/it-consultancy",
    description: "Onafhankelijke analyse van uw applicaties, architectuur en IT-processen. Inzicht vooraf investeren."
  },
  {
    title: "Fractional CTO",
    url: "/diensten/fractional-cto",
    description: "Technische strategie, architectuur en teamrichting voor groeiende organisaties. Part-time CTO expertise."
  }
];

export default function SupportITSMPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceSchema />
      <BreadcrumbSchema />

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
            Diensten
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            IT Support & ITSM uitbesteden
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Van reactieve helpdesk naar professionele supportorganisatie. ITIL 4-gemiddelde support die uw MTTR verlaagt en uw development team ontlast.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Plan gratis intake (15 min)
            </Link>
            <Link href="#diensten" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk diensten
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trust Layer - Problemen die opgelost worden */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Herkent u deze supportproblemen?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Dit zijn de signalen dat uw supportprofessionalisering een upgrade nodig heeft.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {painPoints.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="flex gap-4 items-start bg-slate-50 rounded-xl p-5">
                  <span className="material-icons text-accent flex-shrink-0 text-2xl">error_outline</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.relief}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Layer - Voor wie is dit */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Voor wie is deze dienst?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                ITSM uitbesteden is waardevol voor deze organisaties.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            {targetAudience.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.segment}</h3>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-semibold text-slate-700">Behoefte:</span> {item.need}</p>
                    <p className="text-sm"><span className="font-semibold text-slate-700">Pijnpunt:</span> {item.pain}</p>
                    <p className="text-sm"><span className="font-semibold text-emerald-600">Resultaat:</span> {item.outcome}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Layer - Wanneer NIET (kwalificatiefilter) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-icons text-amber-600">info</span>
                Waar ik mij niet op richt
              </h3>
              <ul className="space-y-2">
                {notFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <span className="material-icons text-amber-600 text-sm mt-0.5">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Content - Wat we leveren */}
      <section id="diensten" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat wij leveren: concreet en meetbaar
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Geen vage beloften, maar duidelijke diensten met tastbare resultaten.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="material-icons text-accent text-xl">{service.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide mb-2 block">Opleveringen:</span>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="material-icons text-accent text-xs mt-0.5">check_circle</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Layer - Werkwijze */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Onze werkwijze: van scan naar volwassen ITSM
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Een bewezen 5-stappenplan dat werkt voor MKB en scale-ups.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {process.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="flex gap-6 items-start bg-slate-50 rounded-xl p-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-white text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.fase}</h3>
                    <p className="text-slate-600 mb-3">{item.description}</p>
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                      {item.output}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Layer - Tools & Frameworks */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tools & Frameworks waar we mee werken
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Objectieve adviezen zonder vendor lock-in. Wij kiezen wat past bij uw situatie.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-8">
            {toolsFrameworks.map((section, idx) => (
              <ScrollReveal key={idx} delay={(idx + 1) * 150}>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{section.category}</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-slate-600">{item.fit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Layer - Resultaten */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Resultaten die u kunt verwachten
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Meetbare verbeteringen na implementatie van professionele ITSM.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((result, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3">{result.metric}</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-red-600 line-through">{result.before}</span>
                    <span className="material-icons text-emerald-600">arrow_forward</span>
                    <span className="text-emerald-600 font-bold">{result.after}</span>
                  </div>
                  <span className="text-sm text-slate-600">{result.impact}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Layer - FAQ */}
      <FAQSection faqs={faqs} />
      <FAQSchema faqs={faqs} />

      {/* Internal Links - Gerelateerde diensten */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Gerelateerde diensten
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                ITSM werkt nog beter in combinatie met deze expertisegebieden.
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

      {/* Conversion Layer - CTA */}
      <section className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Klaar voor professionele support?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake. We bespreken uw situatie, identificeren knelpunten en adviseren over een stappenplan naar volwassen ITSM.
              <strong className="block mt-4">Geen verplichtingen, wel inzicht.</strong>
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-12 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Plan gratis intake (15 minuten)
              </Link>
              <p className="text-sm text-blue-200">
                Of bel direct: <a href="tel:+31612345678" className="underline hover:no-underline">+31 6 1234 5678</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
