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

// Entity-georganiseerde content voor maximale semantische dekking
const situations = [
  {
    title: "Incidenten stapelen zich op",
    description: "Hetzelfde incident komt steeds terug omdat de oorzaak niet bij de bron wordt aangepakt. Geen structurele root cause analysis (RCA) met 5 Whys of Fishbone methodiek."
  },
  {
    title: "Geen SLA-inzicht en -sturing",
    description: "Supportverzoeken worden ad-hoc afgehandeld zonder meetbare responstijden of kwaliteitsmetrics. Ontbrekend inzicht in MTTR, FCR en CSAT scores."
  },
  {
    title: "Verantwoordelijkheden vallen tussen wal en schip",
    description: "Issues lopen vast omdat niemand eigenaar is van het probleem. Escalatie verloopt via informele kanalen in plaats van gedefinieerde escalation matrix."
  },
  {
    title: "Doorontwikkeling wordt verdrongen door brandjes",
    description: "Het development team wordt overspoeld met supportvragen. Nieuwe features blijven liggen omdat alle tijd gaat naar incidenten. Geen duidelijke taakverdeling tussen support en development."
  },
  {
    title: "Geen structuur in change management",
    description: "Wijzigingen aan producties worden live gezet zonder testing, rollback of gecommuniceerde planning. Geen CAB (Change Advisory Board) voor kritieke changes."
  },
  {
    title: "Tools worden niet optimaal benut",
    description: "Jira, ServiceNow of TOPdesk draaien op halve kracht door ontbrekende procesinrichting en integraties. Geen self-service portal voor gebruikers."
  },
  {
    title: "Kennis verdwijnt bij personeelswisseling",
    description: "Geen Knowledge Base of Known Error Database (KEDB). Oplossingen staan niet gedocumenteerd, waardoor telkens opnieuw het wiel wordt uitgevonden."
  }
];

const supportLevels = [
  {
    niveau: "1e lijns Support (Service Desk)",
    niveauEn: "First Line Support",
    icon: "support_agent",
    color: "blue",
    taken: [
      "Eerste contactpunt voor alle gebruikersvragen en incidenten",
      "Registreren en triage van meldingen in ITSM tool",
      "Eerste oplossingspoging via Knowledge Base (First Call Resolution)",
      "Basale probleemoplossing: password resets, toegangsrechten, standaard configuraties",
      "Doorverwijzen naar 2e lijns bij complexe issues"
    ],
    oplostijd: "P3: 4 uur | P2: 2 uur | P1: 1 uur",
    voorbeelden: "Wachtwoord resetten, software installeren, printerproblemen, toegang verlenen"
  },
  {
    niveau: "2e lijns Support",
    niveauEn: "Second Line Support",
    icon: "engineering",
    color: "purple",
    taken: [
      "Diepere technische analyse van geëscaleerde incidenten",
      "Specifieke applicatie- en systeemkennis",
      "Configuratiewijzigingen en troubleshooting",
      "Root cause analysis voor terugkerende incidenten",
      "Kennistoetsing in Knowledge Base"
    ],
    oplostijd: "P3: 8 uur | P2: 4 uur | P1: 2 uur",
    voorbeelden: "Applicatiefouten, netwerkproblemen, integraties, data herstel"
  },
  {
    niveau: "3e lijns Support",
    niveauEn: "Third Line Support",
    icon: "architecture",
    color: "emerald",
    taken: [
      "Expert niveau en specialistische kennis",
      "Leverancierscontact voor externe systemen",
      "Architectuurvraagstukken en designs",
      "Permanent oplossingen ontwerpen om herhaling te voorkomen",
      "Doorvoeren van complexe changes"
    ],
    oplostijd: "Afhankelijk van impact en SLA met leverancier",
    voorbeelden: "Systeemarchitectuur, vendor escalaties, bug fixes, infrastructurele wijzigingen"
  }
];

const priorityMatrix = [
  {
    prioriteit: "P1 - Kritiek",
    impact: "Grote impact op business",
    urgentie: "Directe actie vereist",
    voorbeeld: "SysteemuitvalComplete downtime",
    resolvetijd: "Binnen 1-4 uur"
  },
  {
    prioriteit: "P2 - Hoog",
    impact: "Aanzienlijke impact",
    urgentie: "Snelle actie vereist",
    voorbeeld: "Kernfunctionaliteit onbeschikbaarGroepsproces stil",
    resolvetijd: "Binnen 4-8 uur"
  },
  {
    prioriteit: "P3 - Normaal",
    impact: "Beperkte impact",
    urgentie: "Geplande oplossing",
    voorbeeld: "Enkele gebruiker met probleemAlternatief beschikbaar",
    resolvetijd: "Binnen 24-48 uur"
  },
  {
    prioriteit: "P4 - Laag",
    impact: "Minimale impact",
    urgentie: "Conveniente oplossing",
    voorbeeld: "Cosmetische foutVerbetering verzoek",
    resolvetijd: "Binnen 3-5 werkdagen"
  }
];

const itilPractices = [
  {
    name: "Incident Management",
    description: "Gestructureerd afhandelen van verstoringen van melding tot resolutie. Inclusief triage, categorisatie, prioritering en escalatie.",
    icon: "report_problem",
    outputs: ["MTTR verlaging", "FCR verhoging", "Escalatieprotocollen"]
  },
  {
    name: "Problem Management",
    description: "Identificeren en analyseren van oorzaakelijke problemen (root cause) om herhaling te voorkomen. Gebruik van 5 Whys, Fishbone en KEDB.",
    icon: "troubleshoot",
    outputs: ["Known Error Database", "Permanent oplossingen", "Proactieve preventie"]
  },
  {
    name: "Change Management",
    description: "Gecoördineerde wijzigingen met minimale risico's. Inclusief CAB, change models, rollback procedures en impactanalyse.",
    icon: "sync",
    outputs: ["Change Advisory Board", "Rollback procedures", "Change success rate"]
  },
  {
    name: "Request Fulfilment",
    description: "Afhandelen van service requests van gebruikers. Van access requests tot hardware aanvragen. Self-service opties voor standard requests.",
    icon: "playlist_add_check",
    outputs: ["Service catalogus", "Self-service portal", "Standard request templates"]
  },
  {
    name: "Knowledge Management",
    description: "Documenteren en ontsluiten van kennis via Knowledge Base, Known Error Database en solution articles. Voorkomt kennisverlies.",
    icon: "school",
    outputs: ["Knowledge Base", "Workbooks", "Solution articles"]
  },
  {
    name: "Service Level Management",
    description: "Definiëren, monitoren en rapporteren van service levels. Includet SLA's, OLA's en UC's met duidelijke KPI's en rapportages.",
    icon: "analytics",
    outputs: ["SLA rapportages", "KPI dashboards", "Performance reviews"]
  }
];

const slaOlaUc = [
  {
    type: "SLA",
    voluit: "Service Level Agreement",
    definitie: "Afspraken tussen IT provider en klant over serviceniveau, responstijden en beschikbaarheid.",
    voorbeelden: ["Incident oplostijd: 4 uur", "Systeem beschikbaarheid: 99.5%", "Responstijd: 30 minuten"],
    partijen: "IT Provider → Klant"
  },
  {
    type: "OLA",
    voluit: "Operational Level Agreement",
    definitie: "Interne afspraken tussen IT teams om de SLA naar de klant te kunnen garanderen.",
    voorbeelden: ["2e lijns resolvetijd: 8 uur", "Network team responstijd: 15 minuten", "Database restore: 2 uur"],
    partijen: "IT Team → IT Team (intern)"
  },
  {
    type: "UC",
    voluit: "Underpinning Contract",
    definitie: "Contractuele afspraken met externe leveranciers waarvan IT afhankelijk is voor service delivery.",
    voorbeelden: ["Cloud provider uptime: 99.9%", "Vendor support responstijd: 2 uur", "Hardware levering: 48 uur"],
    partijen: "Organisatie → Externe Leverancier"
  }
];

const selfService = [
  {
    feature: "Service Catalogus",
    description: "Overzicht van alle beschikbare services met daarbij horende delivery times en procedures. Duidelijkheid voor gebruikers.",
    icon: "menu_book"
  },
  {
    feature: "Knowledge Base Zoeken",
    description: "Zelf door solution articles en known errors zoeken. Vaak vindt de gebruiker zelf de oplossing voordat een ticket wordt aangemaakt.",
    icon: "search"
  },
  {
    feature: "Self-Service Requests",
    description: "Standaard requests zelf indienen: toegang aanvragen, software bestellen, hardware aanvragen. Geen wachttijd aan de telefoon.",
    icon: "touch_app"
  },
  {
    feature: "Ticket Status Volgen",
    description: "Real-time inzicht in de voortgang van lopende tickets. Geen behoefte om te bellen voor updates.",
    icon: "track_changes"
  },
  {
    feature: "Automatische Notificaties",
    description: "Updates via e-mail of Slack wanneer ticket status verandert. Proactieve communicatie zonder dat de klant hoeft te vragen.",
    icon: "notifications"
  },
  {
    feature: "Feedback Loop (CSAT)",
    description: "Automatische tevredenheidsmeting na afsluiting. Continue verbetering op basis van gebruikersfeedback.",
    icon: "star_rate"
  }
];

const framework = [
  {
    title: "Analyse & Maturity Scan",
    description: "In kaart brengen van huidige supportprocessen, knelpunten, volwassenheidsniveau (ad-hoc, gedefinieerd, gemeten, geoptimaliseerd) en verbeterpotentiaal."
  },
  {
    title: "ITIL 4-gebaseerde Procesinrichting",
    description: "Incident management, problem management, change management, request fulfilment en knowledge management volgens ITIL 4 best practices."
  },
  {
    title: "Tooling Selectie & Implementatie",
    description: "Selectie, configuratie en integratie van ServiceNow, Jira SM, TOPdesk, Freshservice of Zendesk afgestemd op schaal en behoeften."
  },
  {
    title: "Supportorganisatie Inrichten",
    description: "Definiëren van 1e/2e/3e lijns rollen, escalation matrixen, RACI verantwoordelijkheden en teamstructuren."
  },
  {
    title: "KPI-dashboard & Continue Verbetering",
    description: "MTTR, FCR, SLA-prestaties, CSAT en change success rate structureel meten, rapporteren en verbeteren via CSI-register."
  },
  {
    title: "Training & Knowledge Overdracht",
    description: "Documentatie van runbooks, onboarding van supportmedewerkers, knowledge base inrichting en kennisborging binnen de organisatie."
  }
];

const kpis = [
  {
    metric: "MTTR (Mean Time To Repair)",
    description: "Gemiddelde tijd om een incident volledig op te lossen. Korter is beter; toont efficiëntie in het oplosproces."
  },
  {
    metric: "FCR (First Contact Resolution)",
    description: "Percentage van issues die bij eerste contact worden opgelost. Hoger betekent minder escalaties en snellere service."
  },
  {
    metric: "SLA Performance",
    description: "Percentage incidenten en requests binnen afgesproken responstijd en resolutietijd. Garandeert vooraf afgesproken verwachtingen."
  },
  {
    metric: "Change Success Rate",
    description: "Percentage van wijzigingen dat succesvol wordt afgerond zonder incidenten of rollback. Toont proceskwaliteit en risicobeheersing."
  },
  {
    metric: "CSAT (Customer Satisfaction)",
    description: "Tevredenheid van gebruikers na supportinteractie (schaal 1-5). Directe feedback op kwaliteit van support en communicatie."
  },
  {
    metric: "Ticket Volume Trend",
    description: "Ontwikkeling in aantal incidenten over tijd. Dalende trend betekent effectieve problem management en preventie."
  },
  {
    metric: "Escalation Rate",
    description: "Percentage tickets dat escaleert van 1e naar 2e lijn. Lager betekent betere 1e lijns capaciteit en knowledge base."
  },
  {
    metric: "Knowledge Base Utilization",
    description: "Percentage gebruikers dat self-service gebruikt en zelf oplost. Hoger betekent lagere supportlast en hogere gebruikerstevredenheid."
  }
];

const tools = [
  {
    name: "ServiceNow",
    level: "Enterprise",
    description: "Enterprise ITSM platform voor grote organisaties (100+ FTE) met complexe workflowbehoeften en integraties."
  },
  {
    name: "Jira Service Management",
    level: "Scale-up/Mid-market",
    description: "Flexibele optie voor development-georiënteerde teams. Sterk in incident- en changemanagement met deep Jira integratie."
  },
  {
    name: "TOPdesk",
    level: "MKB/Mid-market",
    description: "Nederlandse ITSM oplossing, specifiek voor MKB en mid-market organisaties met focus op gebruiksvriendelijkheid."
  },
  {
    name: "Freshservice",
    level: "MKB/SMB",
    description: "Cloud-native ITSM met uitstekende self-service en mobile support. Ideaal voor snel groeiende organisaties."
  },
  {
    name: "Zendesk",
    level: "Customer Support",
    description: "Focus op customer support met sterke ticketing, live chat en AI-powered self-service capabilities."
  },
  {
    name: "HaloITSM",
    level: "MKB/Enterprise",
    description: "Flexibele ITSM oplossing met sterke incident- en change management. Microsoft 365 integratie out-of-the-box."
  }
];

const benefits = [
  {
    title: "Voorspelbare kostenstructuur",
    description: "Maandelijkse fee zonder verborgen costs. Geen verrassingen door onverwachte facturering of inhuurkosten."
  },
  {
    title: "Schaalbaarheid op vraag",
    description: "Snel op- en afschalen naargelang de behoeften van de organisatie. Geen wervings- of ontslagrisico's bij schommelende werklast."
  },
  {
    title: "Directe toegang tot expertise",
    description: "Senior ITSM-kennis zonder fulltime overhead. Betaal voor wat je nodig hebt, wanneer je het nodig hebt."
  },
  {
    title: "Kennisborging wordt meegenomen",
    description: "Procedures, runbooks, Known Error Database en documentatie blijven behouden. Geen knowhow-verlies bij personeelswisselingen."
  },
  {
    title: "Geen afleiding van core business",
    description: "Jouw team richt zich op productontwikkeling en groei. Support is professioneel geregeld met duidelijke SLA's."
  },
  {
    title: "Continu verbeteren (CSI)",
    description: "Regular service reviews en improvement plannen op basis van data en trends. ITSM wordt niet statisch maar evolueert mee."
  }
];

const faqs = [
  {
    question: "Wat is het verschil tussen incident management en problem management?",
    answer: "Incident management richt zich op het snel herstellen van de service voor de gebruiker. Het doel is downtime minimaliseren. Problem management gaat een stap dieper: het identificeren van de onderliggende oorzaak (root cause) en een permanente oplossing bedenken zodat het incident niet meer terugkomt. Een incident is 'de server ligt eruit', problem management onderzoekt waarom en voorkomt herhaling."
  },
  {
    question: "Wat zijn 1e, 2e en 3e lijns support?",
    answer: "1e lijns support (Service Desk) is het eerste contactpunt en handelt eenvoudige vragen af. 2e lijns support heeft specialistische kennis en behandelt complexere incidenten die door 1e lijns worden geëscaleerd. 3e lijns support is expert-niveau, vaak leveranciers of architecten, voor de meest complexe vraagstukken en permanente oplossingen. Deze structuur zorgt voor efficiënte taakverdeling en snellere oplossing."
  },
  {
    question: "Wat is het verschil tussen IT Support en ITSM?",
    answer: "IT Support is de uitvoering van dagelijkse hulpverlening aan gebruikers. ITSM (IT Service Management) is het framework waarmee support structureel wordt georganiseerd. ITSM zorgt voor processen, rollen, verantwoordelijkheden en metrics; IT Support voert die processen uit. Goede ITSM is essentieel voor effectieve IT Support - zonder framework blijft support reactief en onvoorspelbaar."
  },
  {
    question: "Wat is een SLA, OLA en UC?",
    answer: "SLA (Service Level Agreement) zijn de afspraken met de klant over serviceniveau en responstijden. OLA (Operational Level Agreement) zijn interne afspraken tussen IT teams om de SLA waar te kunnen maken. UC (Underpinning Contract) zijn contracten met externe leveranciers waarvan IT afhankelijk is. Bijvoorbeeld: SLA belooft klant 4 uur oplostijd, interne OLA met 2e lijns is 2 uur, en UC met cloud vendor garandeert 99.9% uptime."
  },
  {
    question: "Wat is ITIL en waarom is het belangrijk?",
    answer: "ITIL (Information Technology Infrastructure Library) is de wereldwijd geaccepteerde standaard voor IT Service Management. ITIL 4, de huidige versie, integreert met Agile, DevOps en Lean. Het biedt een framework met best practices voor incident-, problem-, change-, request- en knowledge management. ITIL is belangrijk omdat het structuur brengt, voorspelbaarheid vergroot en zorgt voor continue verbetering van IT services."
  },
  {
    question: "Wat betekenen MTTR en FCR?",
    answer: "MTTR (Mean Time To Repair) is de gemiddelde tijd die nodig is om een incident volledig op te lossen. Een lage MTTR betekent snelle service recovery. FCR (First Contact Resolution) is het percentage incidenten dat bij het eerste contact wordt opgelost zonder escalatie. Een hoge FCR betekent efficiënte support, tevreden gebruikers en lagere operationele kosten."
  },
  {
    question: "Waarom zou ik ITSM uitbesteden in plaats van support zelf doen?",
    answer: "Zonder ITSM wordt support reactief, ad-hoc en onvoorspelbaar. Elk incident is een verrassing. Met ITSM bouw je herkenbare processen, documenteer je kennis en meet je prestaties. Dit leidt tot snellere oplostijden (lagere MTTR), hogere kwaliteit (hogere FCR), hogere gebruikerstevredenheid (CSAT) en minder stress voor zowel gebruikers als supportmedewerkers. De investering betaalt zich terug in meetbare verbetering."
  },
  {
    question: "Bied je ook ondersteuning bij toolingkeuze?",
    answer: "Zeker. Ik help bij de selectie van ITSM tools afgestemd op jouw schaal, behoeften en budget. Of het nu gaat om ServiceNow voor enterprise, Jira Service Management voor development-teams, TOPdesk voor MKB, of Freshservice voor snel groeiende scale-ups - ik zorg voor een objectieve evaluatie en implementatieplan dat past bij jouw organisatie. Geen vendor lock-in, maar een keuze die meegroeit."
  },
  {
    question: "Wat is een Knowledge Base en waarom is het belangrijk?",
    answer: "Een Knowledge Base is een centrale database met oplossingen, workarounds en documentatie die door het hele team kan worden gebruikt. Het bevat solution articles, known errors en configuratie-instructies. Een goede Knowledge Base is essentieel omdat het: 1) First Contact Resolution verhoogt (1e lijns kan sneller oplossen), 2) kennisborging garandeert (geen verlies bij personeelswisseling), 3) zelfredzaamheid van gebruikers vergroot via self-service, en 4) onboarding van nieuwe medewerkers versnelt."
  },
  {
    question: "Wat is change management en waarom is het nodig?",
    answer: "Change management is het gestructureerd aanbrengen van wijzigingen in IT systemen met minimale risico's en disruptie. Het omvat change requests, impactanalyse, CAB (Change Advisory Board) voor grote changes, testing, approval workflows en rollback procedures. Zonder change management worden changes ad-hoc uitgevoerd, wat leidt tot incidenten, rollback scenario's en ontevredenheid. Goed change management betekent voorspelbare, veilige wijzigingen met hoge success rate."
  },
  {
    question: "Wat is een self-service portal en welke voordelen heeft het?",
    answer: "Een self-service portal is een web-based interface waar gebruikers zelf: 1) incidents kunnen melden, 2) service requests kunnen indienen (toegang, software, hardware), 3) de Knowledge Base kunnen doorzoeken, 4) de status van hun tickets kunnen volgen. Voordelen: 24/7 beschikbaarheid, lagere supportlast (gebruikers lossen zelf op), hogere gebruikerstevredenheid (directe toegang), en betere data (geuniformiseerde aanvragen)."
  },
  {
    question: "Hoe snel kunnen jullie opschalen bij pieken?",
    answer: "Als ZZP-consultant kan ik doorgaans sneller opschalen dan interne werving. Bij onverwachte pieken, projecten of zieke collega's kan ik capaciteit op korte termijn toevoegen. Daarnaast kan ik helpen bij het opzetten van flexibele schaalmodellen met externe partners indien gewenst. Geen langdurige wervingsprocedures, maar directe inzetbare expertise."
  },
  {
    question: "Kan jullie dienst combineren met ons development team?",
    answer: "Absoluut. Sterker nog: dat is vaak de meest waardevolle combinatie. IT Support leert waar knelpunten zijn in de praktijk. Die inzichten kan ik meenemen in jouw doorontwikkeling (DevOps integratie), waardoor toekomstige incidenten worden voorkomen. Support en development die elkaar versterken in plaats van werken als geïsoleerde silos - dat is moderne IT service delivery."
  },
  {
    question: "Wat is een priority matrix en hoe werkt het?",
    answer: "Een priority matrix classificeert incidenten op basis van impact (hoeveel gebruikers/bedrijfsprocessen zijn getroffen) en urgentie (hoe snel moet het opgelost worden). Dit resulteert in P1 (kritiek), P2 (hoog), P3 (normaal) en P4 (laag). Elke priority heeft een afgesproken responstijd en resolutietijd in de SLA. Dit zorgt voor goede triage en resources op de belangrijkste incidenten."
  },
  {
    question: "Wat is Continuous Service Improvement (CSI)?",
    answer: "CSI is een kernonderdeel van ITIL dat streeft naar continu verbeteren van IT services. Het omvat: 1) Meten van prestaties (KPI's, SLA's), 2) Identificeren van verbetermogelijkheden via trendanalyse en feedback, 3) Implementeren van verbeteringen, 4) Meten van effect en optimaliseren. CSI betekent dat ITSM niet stilstaat maar evolueert met de behoeften van de organisatie. Ik help met het opzetten van CSI-registers en improvement plannen."
  }
];

const frameworksExpanded = [
  { name: "ITIL 4", description: "De wereldstandaard voor IT Service Management met incident-, problem-, change-, request- en release management." },
  { name: "COBIT", description: "Governance framework voor IT-georiënteerde processen en controls. Focus op alignment met business doelen." },
  { name: "DevOps", description: "Integratie van development en operations voor snellere delivery en betere samenwerking." },
  { name: "Agile/Scrum", description: "Flexibele methodiek voor projectmatige beheerwerkzaamheden en iterative verbetering." },
  { name: "ISO 20000", description: "Internationale standaard voor ITSM kwaliteitsmanagement. Optionele certificering voor volwassen organisaties." },
  { name: "SIAM", description: "Service Integration and Management voor multi-vendor omgevingen met verschillende IT leveranciers." }
];

// Structured Data Componenten
function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'IT Support & IT Service Management',
    'description': 'Professionele IT Service Management en support voor MKB en scale-ups. Includet incident management, problem management, change management en knowledge management volgens ITIL 4.',
    'provider': {
      '@type': 'Organization',
      'name': 'DigiTech Solutions',
      'url': 'https://www.digitechsolutions.nl'
    },
    'serviceType': ['IT Support', 'ITSM', 'Incident Management', 'Helpdesk', 'Service Desk'],
    'areaServed': {
      '@type': 'Country',
      'name': 'Nederland'
    },
    'keywords': 'IT support, ITSM, ITIL, helpdesk, service desk, incident management, change management, problem management, SLA, MTTR, 1e lijns support, 2e lijns support',
    'offers': {
      '@type': 'Offer',
      'name': 'IT Support & ITSM Dienst',
      'description': 'ITSM implementatie, supportorganisatie inrichting en tooling selectie'
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
            IT Support &<br className="hidden lg:block" /> IT Service Management
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Van reactieve helpdesk naar strategische partner. ITSM volgens ITIL 4 die jouw organisatie naar het volgende volwassenheidsniveau tilt.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Plan een gratis intake
            </Link>
            <Link href="/diensten" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk alle diensten
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wanneer heb je een ITSM partner nodig */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een ITSM partner nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Herkenbare signalen dat supportprofessionalisering een stap voorwaarts is.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {situations.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600 | 700}>
                <div className="flex gap-4 items-start bg-slate-50 rounded-xl p-5">
                  <span className="material-icons text-accent flex-shrink-0 text-2xl">warning</span>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wat is IT Support & ITSM? */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat is IT Support & ITSM?
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
                      <span className="material-icons text-accent">support_agent</span>
                      IT Support
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      De dagelijkse uitvoering van hulp aan gebruikers met IT-gerelateerde problemen. Supportmedewerkers lossen tickets, beantwoorden vragen en helpen bij verstoringen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
                      <span className="material-icons text-primary">settings</span>
                      IT Service Management (ITSM)
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Het structureel framework waarmee support wordt georganiseerd. ITSM omvat processen, rollen, verantwoordelijkheden, tools en metrics om service consistent en meetbaar te maken.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Waarom bedrijven deze vaak verwarren</h4>
                  <p className="text-slate-600 mb-4">
                    Veel MKB-bedrijven en scale-ups hebben IT Support (de helpdeskfunctie) maar geen ITSM (de structuur erachter). Resultaat: support is reactief, incidenten herhalen zich, en niemand weet eigenlijk hoe goed de support presteert.
                  </p>
                  <p className="text-slate-600">
                    Volwassen organisaties begrijpen: IT Support zonder ITSM is als brandjes blussen zonder te onderzoeken waarom er brand ontstaat. ITSM brengt structuur, voorspelbaarheid en continue verbetering via <Link href="/blog/itil-guide" className="text-accent underline hover:no-underline">ITIL 4</Link> principes.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Supportniveaus: 1e, 2e, 3e lijn */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Supportniveaus: 1e, 2e en 3e lijn
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Een effectieve supportorganisatie is opgebouwd uit verschillende niveaus met gespecialiseerde kennis.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto space-y-6">
            {supportLevels.map((level, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className={`bg-gradient-to-r from-${level.color}-50 to-white rounded-2xl p-8 border border-${level.color}-100`}>
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-${level.color}-100 flex items-center justify-center flex-shrink-0`}>
                      <span className="material-icons text-${level.color}-600 text-3xl">{level.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="font-bold text-2xl text-slate-900">{level.niveau}</h3>
                        <span className="px-3 py-1 bg-slate-200 text-slate-600 text-sm rounded-full">{level.niveauEn}</span>
                      </div>
                      <p className="text-slate-700 mb-4 font-medium">Responstijd: {level.oplostijd}</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Taken:</h4>
                          <ul className="space-y-1">
                            {level.taken.map((taak, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="material-icons text-accent text-sm mt-0.5">check_circle</span>
                                <span>{taak}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Voorbeelden:</h4>
                          <p className="text-sm text-slate-600">{level.voorbeelden}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prioriteitsmatrix */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Priority Matrix: Impact × Urgentie
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Incidenten worden geclassificeerd op basis van impact en urgentie om resources effectief in te zetten.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4">
            {priorityMatrix.map((prio, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${
                  prio.prioriteit.includes('P1') ? 'border-red-500' :
                  prio.prioriteit.includes('P2') ? 'border-orange-500' :
                  prio.prioriteit.includes('P3') ? 'border-blue-500' : 'border-slate-300'
                }`}>
                  <h4 className="font-bold text-lg text-slate-900 mb-3">{prio.prioriteit}</h4>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wide">Impact</span>
                      <p className="text-sm text-slate-700">{prio.impact}</p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wide">Urgentie</span>
                      <p className="text-sm text-slate-700">{prio.urgentie}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Voorbeeld</span>
                    <p className="text-sm text-slate-700">{prio.voorbeeld}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-xs text-accent font-medium">Resolvetijd: {prio.resolvetijd}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ITIL 4 Practices */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ITIL 4 Practices voor MKB & Scale-ups
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Bewezen best practices die direct toepasbaar zijn voor jouw organisatie.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {itilPractices.map((practice, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="material-icons text-accent text-xl">{practice.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{practice.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{practice.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {practice.outputs.map((output, i) => (
                      <span key={i} className="px-2 py-1 bg-white text-xs text-slate-600 rounded-full border border-slate-200">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SLA vs OLA vs UC */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                SLA, OLA en UC uitgelegd
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Drie niveaus van service afspraken die zorgen voor heldere verwachtingen.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-4">
            {slaOlaUc.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-primary text-white font-bold rounded-lg text-xl">{item.type}</span>
                    <span className="text-slate-600 font-medium">{item.voluit}</span>
                  </div>
                  <p className="text-slate-700 mb-4">{item.definitie}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wide mb-2 block">Partijen</span>
                      <span className="text-sm font-medium text-slate-800 bg-slate-100 px-3 py-1 rounded-full">{item.partijen}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wide mb-2 block">Voorbeelden</span>
                      <ul className="space-y-1">
                        {item.voorbeelden.map((v, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                            <span className="material-icons text-accent text-sm">arrow_right</span>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Self-service & Service Catalogus */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Self-service Portal & Service Catalogus
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Geef gebruikers de regie terug met 24/7 zelfservice.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            {selfService.map((feature, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-slate-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-icons text-accent">{feature.icon}</span>
                    <h4 className="font-semibold text-slate-900">{feature.feature}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={700}>
            <div className="max-w-3xl mx-auto p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <p className="text-slate-700">
                <strong>Self-service voordelen:</strong> Lager volume aan 1e lijns tickets (30-40% reductie), hogere gebruikerstevredenheid (24/7 beschikbaarheid) en betere data door gestandaardiseerde requests.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Relevante Frameworks */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Relevante Frameworks & Standarden
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                ITSM bouwt op bewezen frameworks en standarden.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworksExpanded.map((fw, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">{fw.name}</h4>
                  <p className="text-sm text-slate-600">{fw.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Onze Aanpak */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Onze aanpak: Framework & Proces
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Een concreet 6-stappen model dat werkt voor MKB en scale-ups.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            {framework.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={700}>
            <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-slate-700 leading-relaxed">
                <strong>Pragmatisch, waar nodig.</strong> Geen one-size-fits-all benadering. Ik pas de ITSM-implementatie aan op jouw volwassenheidsniveau (van ad-hoc naar geoptimaliseerd), beschikbare middelen en organisatiecultuur.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* KPI's */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                KPI's die wij monitoren
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Meten is weten. Objectief verbeteren met datagedreven sturing.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {kpis.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800}>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-accent mb-2 flex items-start gap-2">
                    <span className="material-icons text-sm mt-0.5">analytics</span>
                    <span className="text-slate-900">{item.metric}</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Integraties */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Tools & Integraties
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Toolkeuze is context-afhankelijk. Ik help bij selectie en implementatie.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <span className="material-icons text-white text-xl">extension</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                      <span className="text-xs text-slate-500">{item.level}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={700}>
            <div className="max-w-3xl mx-auto mt-8 p-5 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-slate-700 text-sm">
                <strong>Tooling adviseur:</strong> Ik help bij selectie afgestemd op schaal (1-50 FTE vs 50+ medewerkers), volwassenheidsniveau (ad-hoc vs ITIL-georiënteerd) en integratiebehoeften (Jira, GitHub, Slack, Microsoft 365, monitoring tools). Geen vendor lock-in, maar keuzes die passen en meegroeien.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* IT Support Outsourcing */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                IT Support Outsourcing – Strategische Voordelen
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="material-icons text-accent">check_circle</span>
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={700}>
            <div className="max-w-3xl mx-auto mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <p className="text-slate-700 text-sm font-medium">
                <strong>Voor wie?</strong> IT managers die structureel willen verbeteren zonder fulltime FTE te moeten aantrekken. CTO's van scale-ups die focus willen houden op product. MKB-ondernemers die de risico's van ad-hoc support willen elimineren. Organisaties die tijdelijke versterking zoeken bij ziekte of verloop.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mini Case */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Praktijkcase: Van chaos naar structuur
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-accent text-3xl">business</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">De situatie</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Een scale-up (40 FTE, groeiende) met chaotische supportprocessen. Incidenten lopen op, geen duidelijke SLA's, development team wordt overspoeld met vragen. Eigenaar van support wil professionalisering maar heeft intern geen tijd. Geen Knowledge Base,Known Error Database ontbreekt, en MTTR loopt op tot 48+ uur.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-6">
                  <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <span className="material-icons text-primary">trending_up</span>
                    De aanpak – 3 maanden
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="material-icons text-emerald-600 text-xl">looks_one</span>
                      <div>
                        <h5 className="font-semibold text-slate-800 text-sm">Maand 1: Analyse & Inrichting</h5>
                        <p className="text-sm text-slate-600">Maturity scan, procesmapping (current vs future state), tooling-selectie. Eerste quick wins doorprioriteren. Opzetten escalation matrix en RACI.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="material-icons text-blue-600 text-xl">build</span>
                      <div>
                        <h5 className="font-semibold text-slate-800 text-sm">Maand 2: Implementatie & Training</h5>
                        <p className="text-sm text-slate-600">ITIL-processen live (Incident, Problem, Change), KPI-dashboard in gebruik, team getrain in nieuwe werkwijze. Knowledge Base opzetten met eerste solution articles.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="material-icons text-purple-600 text-xl">verified</span>
                      <div>
                        <h5 className="font-semibold text-slate-800 text-sm">Maand 3: Meten & Optimaliseren</h5>
                        <p className="text-sm text-slate-600">MTTR gedaald van 48 uur naar 4 uur. FCR gestegen van 45% naar 72%. CSAT omhoog van 3.2 naar 4.1. CSI-register opgezet met 5 verbeterinitiatieven.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-6 mt-6">
                  <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                    <span className="material-icons text-accent">insights</span>
                    Resultaat na 3 maanden
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-emerald-600 mt-0.5">speed</span>
                      <span className="text-sm text-slate-700"><strong>Snellere oplostijden:</strong> 48u → 4u (92% verbetering)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-blue-600 mt-0.5">psychology</span>
                      <span className="text-sm text-slate-700"><strong>Minder escalaties:</strong> dagelijks → 2x/week</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-purple-600 mt-0.5">trending_up</span>
                      <span className="text-sm text-slate-700"><strong>Beter teammorale:</strong> support voelt zich gewaardeerd</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-accent mt-0.5">code</span>
                      <span className="text-sm text-slate-700"><strong>Development:</strong> 30% meer feature-snelheid</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-emerald-600 mt-0.5">check_circle</span>
                      <span className="text-sm text-slate-700"><strong>FCR gestegen:</strong> 45% → 72%</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-blue-600 mt-0.5">star</span>
                      <span className="text-sm text-slate-700"><strong>CSAT gestegen:</strong> 3.2 → 4.1 (op 5)</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
      <FAQSchema faqs={faqs} />

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Gerelateerde diensten
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Link href="/diensten/zzp-applicatiebeheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-purple-600 text-3xl mb-2">settings_applications</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Applicatiebeheerder</h3>
                <p className="text-sm text-slate-500">Incident- en change management, monitoring, releases en technisch applicatiebeheer.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/zzp-functioneel-beheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-blue-600 text-3xl mb-2">sync_alt</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Functioneel Beheerder</h3>
                <p className="text-sm text-slate-500">De brug tussen business en IT met requirements, wijzigingsbeheer en UAT.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/diensten/it-consultancy" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-emerald-600 text-3xl mb-2">search</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Consultancy & Audits</h3>
                <p className="text-sm text-slate-500">Inzicht in kwaliteit, veiligheid en performance van je applicaties en IT processen.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <Link href="/diensten/fractional-cto" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-accent text-3xl mb-2">psychology</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Fractional CTO</h3>
                <p className="text-sm text-slate-500">Technische strategie, architectuur en teamrichting voor groeiende organisaties.</p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Wil je inzicht in jouw ITSM volwassenheid?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een vrijblijvend gesprek. We analyseren je huidige supportprocessen, identificeren knelpunten en adviseren over een stappenplan naar professionele ITSM met aantoonbare ROI.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Plan ITSM intake
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
