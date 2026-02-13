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

// Table of Contents - Anchor navigation
const tableOfContents = [
  { id: "wat-doe-ik", label: "Wat doet een ZZP applicatiebeheerder?" },
  { id: "problemen", label: "Herken je dit?" },
  { id: "wanneer-nodig", label: "Wanneer heb je mij nodig?" },
  { id: "voordelen", label: "Voordelen ZZP vs vast" },
  { id: "werkwijze", label: "Werkzaamheden" },
  { id: "tools", label: "Tools & Expertise" },
  { id: "cases", label: "Praktijkcases" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "contact", label: "Contact" }
];

// Credentials & Social Proof
const credentials = [
  { icon: "workspace_premium", text: "15+ jaar ervaring in IT en applicatiebeheer" },
  { icon: "verified", text: "ITIL 4 gecertificeerd" },
  { icon: "business", text: "Ervaring bij financiële instellingen en MKB" },
  { icon: "location_on", text: "Direct inzetbaar vanuit Breda, NL" }
];

// Probleem-sectie data voor herkenning en pijnlijken
const problems = [
  {
    icon: "warning",
    title: "Applicaties veroorzaken regelmatig verstoringen",
    stats: "Gemiddeld 2-4 storingen per maand",
    description: "Incidenten duren langer dan nodig, oorzaken blijven onduidelijk en gebruikers ervaren continueïteitsproblemen. Elke storing kost gemiddeld €2.500 aan productieverlies."
  },
  {
    icon: "error",
    title: "Geen eigenaar van cruciale applicaties",
    stats: "Risico op single point of failure",
    description: "Wanneer de huidige applicatiebeheerder vertrekt of afwezig is, ontstaat er een vacuüm. Niemand is verantwoordelijk voor updates, patches en incidentafhandeling."
  },
  {
    icon: "schedule",
    title: "Doorontwikkeling ligt stil door incidentherstel",
    stats: "30-40% tijdverlies",
    description: "Het development team wordt constant onderbroken door supportvragen. Nieuwe features blijven liggen omdat alle tijd gaat naar brandjes blussen in plaats van innovatie."
  },
  {
    icon: "trending_down",
    title: "Kennis verdwijnt bij personeelswisseling",
    stats: "2-4 weken opstarttijd",
    description: "Configuraties, procedures en workarounds staan niet gedocumenteerd. Wanneer een applicatiebeheerder vertrekt, gaat cruciale kennis verloren en moet een nieuwe specialist opgestart worden."
  },
  {
    icon: "settings_backup_restore",
    title: "Geen structuur voor change en release management",
    stats: "1 op de 3 changes mislukt",
    description: "Wijzigingen aan productie worden live gezet zonder testing, rollback of gecommuniceerde planning. Dit leidt tot onverwachte downtime en frustratie bij gebruikers."
  }
];

// Oplossingen - Wat ik lever
const solutions = [
  {
    icon: "verified",
    title: "Directe beschikbaarheid zonder wachttijd",
    description: "Binnen 48 uur beschikbaar na eerste contact. Geen lange wervingsprocedure of inwerkperiode. Start direct met kennisoverdracht."
  },
  {
    icon: "speed",
    title: "Proactieve monitoring en preventief onderhoud",
    description: "Problemen worden opgespoord voordat gebruikers ze merken. Updates en patches worden gepland tijdens stille momenten om verstoringen te voorkomen."
  },
  {
    icon: "school",
    title: "Gedocumenteerde processen en kennisborging",
    description: "Alle procedures worden vastgelegd in runbooks. Kennis blijft behouden in de organisatie, ongeacht wie de applicatiebeheerder is."
  },
  {
    icon: "security",
    title: "ITIL-gecertificeerde werkwijze",
    description: "Gestructureerde aanpak van incident-, problem- en changemanagement. Heldere rollen, verantwoordelijkheden en eskalatielijnen."
  },
  {
    icon: "support_agent",
    title: "Vakbekwaardigheid met diverse applicaties",
    description: "Ervaring met Microsoft 365, Salesforce, Jira, ERP-systemen en diverse SaaS applicaties."
  }
];

// Werkzaamheden per level
const coreTasks = [
  { level: "Dagelijks Beheer", tasks: ["Monitoring en alerting", "Incidentafhandeling", "Gebruikersvragen beantwoorden", "Performance checks"] },
  { level: "Structureel Beheer", tasks: ["Patch management", "Release management", "Backup en recovery testen", "Security updates"] },
  { level: "Optimalisatie", tasks: ["Performance analyse", "Capaciteitsplanning", "Root cause analysis", "Procesverbetering"] }
];

const scenarios = [
  {
    title: "Ad-hoc applicatiebeheer nodig",
    situation: "Je applicatielandschap groeit maar beheer is ad-hoc en reactief",
    solution: "Professionaliseer jouw applicatiebeheer met duidelijke processen, SLA's en heldere verantwoordelijkheden."
  },
  {
    title: "Interim versterking bij ziekte/verloop",
    situation: "Je huidige applicatiebeheerder is tijdelijk afwezig",
    solution: "Directe inzetbaarheid op korte termijn met behoud van kennis en continuïteit."
  },
  {
    title: "Vakinhuur voor specifieke projecten",
    situation: "Je hebt tijdelijk extra expertise nodig voor migratie, implementatie of upgrade",
    solution: "Inhuur van senior applicatiebeheerder voor de duur van het project zonder langdurige verplichtingen."
  },
  {
    title: "Kennisborging en documentatie",
    situation: "Er is geen documentatie van processen en configuraties",
    solution: "Alle kennis vastleggen in runbooks, procedures en checklists. Kennis blijft behouden in jouw organisatie."
  }
];

const benefits = [
  {
    icon: "schedule",
    title: "Snel inzetbaar",
    description: "Binnen 48 uur beschikbaar na eerste contact. Geen wervingsprocedure van weken of maanden."
  },
  {
    icon: "verified",
    title: "Ervaring met complexe landschappen",
    description: "15 jaar ervaring met Microsoft 365, Salesforce, SAP, Jira en diverse SaaS applicaties."
  },
  {
    icon: "euro",
    title: "Kostenbesparend versus vast",
    description: "Alleen betalen voor geleverde uren. Geen overhead van pensioenen, verlof-, ziekte- en vakantiedagen."
  },
  {
    icon: "psychology",
    title: "Objectieve advisering",
    description: "Onafhankelijkheid in tool- en proceskeuzes. Geen vendor lock-in of interne politiek."
  },
  {
    icon: "auto_awesome",
    title: "Focus op resultaat",
    description: "Afgerekend op deliverables en outcomes. Geen 'nageleuren' cultuur."
  }
];

const caseStudies = [
  {
    type: "Financiële dienstverlener",
    situation: "Wijzigingen aan core banking applicatie veroorzaakten regelmatig verstoringen (2-4x per maand).",
    solution: "Structureel change management, root cause analysis en proactieve monitoring.",
    result: "Incidenten terug van 4+ naar 0-1 per maand. Besparing: €50.000+ op jaar."
  },
  {
    type: "Logistieke MKB-er",
    situation: "Single point of failure: één applicatiebeheerder vertrok, niemand nam kennis over.",
    solution: "Documentatie van procedures, training van backup en inrichting van second-line support.",
    result: "Opstarttijd nieuwe beheerder van 2 weken terug naar 1 dag. MTTR gedaald van 48 uur naar 2 uur."
  },
  {
    type: "SaaS scale-up",
    situation: "Rapid growth nam voorspelde performance issues en integratieproblemen.",
    solution: "Application performance monitoring, API management en integratie met Salesforce en ERP.",
    result: "API response time verbeterd met 60%. Zero unplanned downtime in 12 maanden."
  }
];

const faqs = [
  {
    question: "Wat kost een ZZP applicatiebeheerder per uur?",
    answer: "Een ervaren ZZP applicatiebeheerder rekent gemiddeld €85-125 per uur (exclusief BTW). Voor interim opdrachten is er vaak een minimale inzet van 16-24 uur per week. De exacte rate hangt af van de complexiteit van de applicaties, het vereiste senioriteitsniveau en de duur van de opdracht. Vraag een vrijblijvende offerte voor een vaste all-in tarief."
  },
  {
    question: "Hoe snel kun je als ZZP applicatiebeheerder starten?",
    answer: "Ik kan doorgaans binnen 48 uur na opdrachtbevestiging starten. Na een korte intake van 1-2 uur om de applicaties, omgeving en werkzaamheden te begrijpen, ga ik direct aan de slag. Voor langere opdrachten bouw ik eerst een kennismatch op met de specifieke applicaties om de opstarttijd te minimaliseren."
  },
  {
    question: "Wat is het verschil tussen een vast applicatiebeheerder in loondienst?",
    answer: "Primair het kostenmodel: als ZZP betaal je alleen voor geleverde uren, zonder overhead van werkgeversverplichtingen. Daarnaast breng ik eigen tools, certificering en methodieken mee. Voor jou is dit vaak 15-25% goedkoper dan een fulltime medewerker in loondienst, omdat je geen pensioenen, vakantiedagen, ziekte- en verlofkosten betaalt."
  },
  {
    question: "Voor welke type applicaties kan jij applicatiebeheer doen?",
    answer: "Ik heb ervaring met een breed spectrum aan applicaties: Microsoft 365 (Exchange, SharePoint, Teams, Outlook), Salesforce, SAP, Oracle NetSuite, diverse HR- en financiële systemen, en talloze SaaS applicaties. Mijn focus ligt op business-applicaties die bedrijfskritisch zijn. Voor zeer technische of specialistische systemen werk ik graag samen met gespecialiseerde partners."
  },
  {
    question: "Kan je ook applicaties beheren die je niet kent?",
    answer: "Zeker, mits het gaat om standaard technologieën en goed gedocumenteerde systemen. Ik ben gewend om snel nieuwe applicaties eigen te maken. Een korte kennismakingssessie is vaak voldoende om de basics onder de knie te krijgen, waarna ik zelfstandig verder kan."
  },
  {
    question: "Hoe garandeer je kennisoverdracht bij vertrek?",
    answer: "Kennisoverdracht is een vast onderdeel van mijn dienstverlening. Ik documenteer alle werkzaamheden, procedures en configuraties in runbooks. Daarnaast geef ik training aan interne teams zodat zij het beheer kunnen overnemen. Ter afsluiting van een opdracht ontvang je een compleet overdrachtsdossier."
  },
  {
    question: "Werk je ook 's avonds of in het weekend?",
    answer: "Voor kritieke incidenten en geplande changes wel. Ik ben flexibel inzetbaar en beginrijp dat applicatiebeheer soms buiten kantooruren omvat. Dit spreek ik van tevoren af, inclusief eventuele tarieven voor avond-/weekendwerk."
  },
  {
    question: "Wat zijn je voorwaarden voor nieuwe opdrachten?",
    answer: "Nieuwe opdrachten start ik met een korte intakegesprek (telefonisch of online) van 30-60 minuten. Daarna volgt een heldere opdrachtbevestiging per e-mail. Voor langere opdrachten (1+ maand) werk ik met een tussentijdse evaluatie moment na 2 weken zodat jij tevreden bent over de voortgang. Opdrachten kunnen tussentijds worden uitgebreid of geannuleerd met een opzegtermijn van 1 week."
  }
];

// Structured Data Component
function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'ZZP Applicatiebeheerder',
    'description': 'Ervaren ZZP applicatiebeheerder voor bedrijfskritische applicaties. Direct beschikbaar, geen wachttijd. ITIL-gecertificeerd.',
    'provider': {
      '@type': 'Person',
      'name': 'DigiTech Solutions',
      'url': 'https://www.digitechsolutions.nl'
    },
    'serviceType': ['Applicatiebeheer', 'IT Management', 'Interim IT', 'ZZP Applicatiebeheerder'],
    'areaServed': {
      '@type': 'Country',
      'name': 'Nederland'
    },
    'keywords': 'ZZP applicatiebeheerder, interim applicatiebeheerder, freelance applicatiebeheerder, applicatiebeheer inhuren, Microsoft 365 beheer, Salesforce beheer, SAP beheer',
    'offers': {
      '@type': 'Offer',
      'name': 'ZZP Applicatiebeheerder Dienst',
      'description': 'Interim applicatiebeheer voor bedrijfskritische systemen'
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
        'name': 'ZZP Applicatiebeheerder',
        'item': 'https://www.digitechsolutions.nl/diensten/zzp-applicatiebeheerder'
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

export default function ZZPApplicatiebeheerderPage() {
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
            Interim
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            ZZP Applicatiebeheerder
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Ervaren applicatiespecialist die direct zorgt voor continuïteit, structuur en rust bij jouw bedrijfskritische systemen. Geen wachttijd, direct beschikbaar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="#contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Direct Beschikbaar
            </Link>
            <Link href="#werkwijze" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk Werkzaamheden
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
            <li className="text-slate-900 font-medium">ZZP Applicatiebeheerder</li>
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

      {/* Prose Block - What does a ZZP Applicatiebeheerder do? */}
      <section id="wat-doe-ik" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Wat doet een ZZP applicatiebeheerder?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Als <strong>ZZP applicatiebeheerder</strong> ben ik verantwoordelijk voor het beheer, onderhoud en de optimalisatie van bedrijfskritische applicaties binnen jouw organisatie. Waar een functioneel beheerder zich richt op de afstemming tussen business en IT, focus ik mij op de technische kant: configuratie, monitoring, performance en het waarborgen van continuïteit. Of het nu gaat om Microsoft 365, Salesforce, SAP of maatwerkapplicaties — ik zorg ervoor dat je systemen betrouwbaar draaien.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Steeds meer MKB-bedrijven en scale-ups kiezen ervoor om een <strong>applicatiebeheerder in te huren</strong> in plaats van een vaste medewerker in loondienst. Waarom? Omdat <strong>interim applicatiebeheer</strong> flexibiliteit biedt zonder de overhead van werkgeversverplichtingen. Je betaalt alleen voor de uren die ik maak, zonder pensioenen, vakantiedagen of ziektekosten. Dit maakt een <strong>freelance applicatiebeheerder</strong> vaak 15-25% kostenbesparend ten opzichte van een fulltime medewerker.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Daarnaast breng ik ervaringskennis mee van meerdere organisaties en projecten. Waar een interne medewerker soms vastzit in oude patronen, kijk ik met een frisse blik naar je processen en tooling. Ik werk volgens <strong>ITIL-gecertificeerde methodieken</strong> voor incident-, problem- en changemanagement, en documenteer alles in runbooks en knowledge bases. Zo blijft kennis behouden, ook als ik vertrek.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Of je nu <strong>applicatiebeheer wilt uitbesteden</strong> omdat je huidige beheerder vertrekt, of juist behoefte hebt aan extra capaciteit voor een migratie of implementatie — als <strong>ZZP applicatiebeheerder voor het MKB</strong> schaal ik mee met jouw behoeften. Van 16 uur per week tot fulltime projectinzet, alles is mogelijk. Mijn <strong>ZZP applicatiebeheerder tarief</strong> ligt tussen €85 en €125 per uur, afhankelijk van complexiteit en duur van de opdracht. Vraag een vrijblijvende offerte aan voor een vaste all-in prijs.
              </p>
            </ScrollReveal>

            {/* About the specialist - E-E-A-T element */}
            <ScrollReveal>
              <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-accent text-3xl">person</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Over de specialist</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Met meer dan 15 jaar ervaring in IT en applicatiebeheer heb ik gewerkt bij financiële instellingen, logistieke bedrijven en SaaS scale-ups. Ik ben ITIL 4 gecertificeerd en gespecialiseerd in Microsoft 365, Salesforce en enterprise applicaties.
                    </p>
                    <Link href="/over-mij" className="text-accent hover:underline text-sm font-medium">
                      Meer over mijn achtergrond en ervaring →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Probleem & Oplossing Sectie */}
      <section id="problemen" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Herken je dit?
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Veel organisaties hebben uitdagingen met hun applicatiebeheer. Herken jij een van deze problemen?
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Problemen */}
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                    <div className="flex gap-4 items-start bg-red-50 rounded-xl p-5 border-l-4 border-red-200">
                      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <span className="material-icons text-red-600 text-2xl">{problem.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">{problem.title}</h3>
                        {problem.stats && (
                          <p className="text-sm text-red-600 font-semibold mb-2">{problem.stats}</p>
                        )}
                        <p className="text-sm text-slate-600 leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Oplossingen */}
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                    <div className="flex gap-3 items-start bg-emerald-50 rounded-xl p-5 border-l-4 border-emerald-200">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <span className="material-icons text-emerald-600 text-2xl">{solution.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{solution.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer ZZP Applicatiebeheerder inhuren? */}
      <section id="wanneer-nodig" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een ZZP Applicatiebeheerder nodig?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Herken jouw situatie en ontdek of interim applicatiebeheer de oplossing is.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="bg-slate-50 rounded-xl p-6 h-full border border-slate-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                    <span className="material-icons text-accent flex-shrink-0 text-2xl">lightbulb</span>
                    {scenario.title}
                  </h3>
                  <p className="text-slate-700 mb-3 font-medium">{scenario.situation}</p>
                  <div className="flex items-start gap-2 text-emerald-700">
                    <span className="material-icons text-sm mt-1">arrow_forward</span>
                    <span className="text-sm font-semibold">{scenario.solution}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Voordelen ZZP */}
      <section id="voordelen" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Waarom kiezen voor een ZZP Applicatiebeheerder?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Concrete voordelen versus een vaste medewerker in loondienst.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <span className="material-icons text-accent text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Werkzaamheden */}
      <section id="werkwijze" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Werkzaamheden die ik uitvoer
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Een overzicht van mijn applicatiebeheer activiteiten, van dagelijkse monitoring tot projectmatige verbetering.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-8">
            {coreTasks.map((level, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="material-icons text-primary text-3xl">check_circle</span>
                    {level.level}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {level.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2 bg-slate-50 rounded-lg p-3">
                        <span className="material-icons text-accent text-sm mt-0.5">chevron_right</span>
                        <span className="text-sm text-slate-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Expertise */}
      <section id="tools" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tools & Expertise
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Breed inzetbaar op de meest voorkomende applicaties en platformen.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Microsoft 365", desc: "Exchange, SharePoint, Teams, Outlook beheer", icon: "microsoft" },
              { name: "Salesforce", desc: "Sales Cloud, Service Cloud & integraties", icon: "salesforce" },
              { name: "SAP", desc: "SAP ECC, S/4HANA modules en basisbeheer", icon: "business" },
              { name: "Oracle NetSuite", desc: "ERP beheer, custom scripts en rapportages", icon: "assessment" },
              { name: "Jira Service Management", desc: "Incident- en change management workflows", icon: "code" },
              { name: "ServiceNow", desc: "Enterprise ITSM platform integraties", icon: "settings" },
              { name: "GitHub / GitLab", desc: "Version control en CI/CD pipelines", icon: "source" }
            ].map((tool, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <span className="material-icons text-accent text-2xl">{tool.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">{tool.name}</h4>
                    <p className="text-sm text-slate-600">{tool.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Praktijkcases */}
      <section id="cases" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Praktijkcases: Resultaten
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Concrete resultaten uit eerdere projecten bij vergelijkbare organisaties.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-6">
            {caseStudies.map((cs, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-gradient-to-br from-emerald-500 to-slate-100 rounded-2xl p-8 border-emerald-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-icons text-accent text-2xl">business</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{cs.type}</h3>
                      <p className="text-slate-700 mb-3 font-medium"><strong>Situatie:</strong> {cs.situation}</p>
                      <p className="text-slate-700 mb-3 font-medium"><strong>Oplossing:</strong> {cs.solution}</p>
                      <div className="mt-4 p-4 bg-emerald-50 rounded-lg border-emerald-200">
                        <p className="text-emerald-700 font-semibold"><strong>Resultaat:</strong> {cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sectie */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Veelgestelde vragen
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Antwoorden op de meest gestelde vragen over ZZP applicatiebeheer en interim inzet.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* FAQ Schema Output */}
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
                Applicatiebeheer werkt nog beter in combinatie met deze expertisegebieden.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Link href="/diensten/zzp-functioneel-beheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-accent text-3xl mb-2">arrow_forward</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Functioneel Beheerder</h3>
                <p className="text-sm text-slate-600">De brug tussen business en IT: requirements, wijzigingsbeheer, UAT-coördinatie en processturing.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/support-itsm" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-accent text-3xl mb-2">arrow_forward</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Support & ITSM</h3>
                <p className="text-sm text-slate-600">Professionele IT support en ITSM diensten volgens ITIL 4. Incident, problem en change management.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/diensten/it-consultancy" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-accent text-3xl mb-2">arrow_forward</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Consultancy & Audits</h3>
                <p className="text-sm text-slate-600">Onafhankelijke analyse van uw applicaties, architectuur en IT-processen.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <Link href="/over-mij" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-accent text-3xl mb-2">arrow_forward</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Over mij</h3>
                <p className="text-sm text-slate-600">Meer over mijn achtergrond, certificeringen en 15+ jaar ervaring in IT.</p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Sectie */}
      <section id="contact" className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Direct een ervaren ZZP Applicatiebeheerder inschakelen?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Bespreek je situatie en ontdek hoe ik jouw applicatiebeheer naar het volgende niveau till.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Plan een vrijblijvende intakegesprek
              </Link>
              <p className="text-blue-200 text-sm mt-2">
                Of bel: <a href="tel:06123456789" className="text-white underline hover:text-blue-50">06-1234 56789</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
