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
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ZZP Functioneel Beheerder",
    "description": "Ervaren ZZP functioneel beheerder met expertise in BiSL, ITIL, UAT en requirements engineering",
    "provider": {
      "@type": "Organization",
      "name": "Digitech Solutions",
      "url": "https://digitechsolutions.nl"
    },
    "serviceType": ["Functioneel Beheer", "BiSL", "ITIL", "UAT", "Change Management", "Requirements Engineering"],
    "areaServed": ["Nederland", "België"],
    "offers": {
      "@type": "Offer",
      "availabilityStarts": "2024-01-01",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "EUR",
        "description": "Op aanvraag"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["MKB", "Scale-ups", "Enterprise", "Overheid", "Zorg"]
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
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://digitechsolutions.nl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Diensten",
        "item": "https://digitechsolutions.nl/diensten"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ZZP Functioneel Beheerder",
        "item": "https://digitechsolutions.nl/diensten/zzp-functioneel-beheerder"
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

// Entity-georganiseerde content voor semantische SEO
const entities = {
  frameworks: {
    title: "Relevante Frameworks & Standards",
    icon: "account_tree",
    items: [
      { name: "BiSL 2", description: "Business Information Services Library - dé standaard voor functioneel beheer en business informatiemanagement. Richt zich op de brug tussen business en IT." },
      { name: "ITIL 4", description: "IT Service Management framework met focus op servicewaarde, continue verbetering en Agile integratie." },
      { name: "ASL 2", description: "Application Services Library - framework voor applicatiemanagement. Naadloze samenwerking tussen functioneel en technisch beheer." },
      { name: "TOGAF", description: "Enterprise Architecture framework voor bedrijfsarchitectuur en IT-strategie." },
      { name: "COBIT", description: "Governance framework voor IT-georiënteerde processen en controls." },
      { name: "Agile/Scrum", description: "Flexibele methodiek voor projectmatige beheerwerkzaamheden en requirements in sprintcontext." }
    ]
  },
  processen: {
    title: "Functioneel Beheer Processen",
    icon: "settings",
    items: [
      { name: "Change Management", description: "Gestructureerd doorvoeren van wijzigingen met minimale disruptie. CAB-vergaderingen, change calendars en impactanalyse." },
      { name: "Requirements Engineering", description: "Vertalen van business requirements naar concrete specificaties. User stories, acceptatiecriteria en functionele ontwerpen." },
      { name: "UAT Coördinatie", description: "User Acceptance Testing plannen, uitvoeren en bewaken. Testscenario's, bug triage en go/no-go beslissingen." },
      { name: "Service Level Management", description: "SLA's opstellen, monitoren en rapporteren. OLA's afstemmen met interne leveranciers." },
      { name: "Release & Deployment", description: "Coördineren van releases met development en operations. Deployment planning en rollback procedures." },
      { name: "Probleemmanagement", description: "Structureel onderzoeken van terugkerende issues. Root cause analysis en permanente oplossingen." }
    ]
  },
  documentatie: {
    title: "Documentatie & Artefacten",
    icon: "description",
    items: [
      { name: "Functioneel Ontwerp", description: "Gedetailleerde beschrijving van gewenste functionaliteit met procesflows en dataflows." },
      { name: "User Stories", description: "Agile format requirements met wie, wat en waarom. Acceptatiecriteria en definities of done." },
      { name: "Acceptatieplan", description: "Gestructureerd testplan voor UAT met testscenario's, testdata en verantwoordelijkheden." },
      { name: "SLA & OLA", description: "Service Level Agreements en Operational Level Agreements met meetbare afspraken." },
      { name: "Procesbeschrijvingen", description: "Gedocumenteerde workflows, beslisregels en verantwoordelijkheden (RACI)." },
      { name: "Change Requests", description: "Gestandaardiseerde wijzigingsverzoeken met business case, impactanalyse en risico-inschatting." }
    ]
  },
  kpis: {
    title: "Belangrijke KPI's",
    icon: "bar_chart",
    items: [
      { name: "Change Success Rate", description: "Percentage wijzigingen dat succesvol wordt afgerond zonder incidenten of rollback. Doel: >95%." },
      { name: "Time-to-Production", description: "Gemiddelde doorlooptijd van requirement tot productie. Korter = snellere time-to-market." },
      { name: "User Adoption Rate", description: "Percentage gebruikers dat nieuwe functionaliteit effectief gebruikt. Meten van adoptie na trainingen." },
      { name: "SLA Compliance", description: "Percentage behaalde serviceniveaus. Cruciaal voor bedrijfskritische applicaties." },
      { name: "Defect Leakage", description: "Percentage bugs dat pas na productie wordt ontdekt. Lager is beter - toont kwaliteit van UAT." },
      { name: "Stakeholder Satisfaction", description: "Tevredenheid van business stakeholders over IT-leveringen. Periodieke metingen." }
    ]
  },
  rollen: {
    title: "Rollen & Samenwerking",
    icon: "badge",
    items: [
      { name: "Functioneel Beheerder", description: "Eigenaar van functionele kant van applicaties. Brug tussen business en development." },
      { name: "Applicatiebeheerder", description: "Technisch eigenaar van applicaties. Configureert, monitort en beheert." },
      { name: "Information Analyst", description: "Analyseert informatiebehoefte en vertaalt naar requirements. Specialisatie binnen functioneel beheer." },
      { name: "Product Owner", description: "Verantwoordelijk voor applicatie roadmap en prioriteit van features." },
      { name: "Change Manager", description: "Coördinator van CAB en change proces. Onafhankelijke toetsing van wijzigingen." },
      { name: "Key Users", description: "Ambassadeurs vanuit de business voor requirements en UAT." }
    ]
  },
  tools: {
    title: "Tools & Applicaties",
    icon: "extension",
    items: [
      { name: "Jira/Confluence", description: "Requirements management, user stories en documentatie in één ecosysteem." },
      { name: "Azure DevOps", description: "Work item tracking, test management en release pipelines." },
      { name: "ServiceNow", description: "Enterprise ITSM met change management en service catalogus." },
      { name: "TOPdesk", description: "Nederlandse ITSM oplossing voor MKB - change en incident management." },
      { name: "Miro/Lucidchart", description: "Visueel modelleren van processen en dataflows." },
      { name: "Xray/Zephyr", description: "Test management tools voor UAT coördinatie en resultaatrapportage." }
    ]
  }
};

const scenarios = [
  {
    title: "Business en IT werken niet effectief samen",
    description: "Requirements worden niet goed begrepen, de IT-oplossing sluit niet aan bij de praktijk en frustratie groeit aan beide kanten. Geen gedeelde taal."
  },
  {
    title: "Wijzigingen worden ongecontroleerd doorgevoerd",
    description: "Wijzigingen worden ad-hoc doorgevoerd zonder testproces, wat leidt tot regressiefouten en onvoorspelbaar gedrag."
  },
  {
    title: "Gebruikers klagen over functionaliteit of procesafwijkingen",
    description: "Problemen worden gemeld maar niet systematisch aangepakt. Dezelfde issues blijven terugkomen zonder duidelijke oplossing."
  },
  {
    title: "Acceptatietesten zijn niet goed ingericht",
    description: "UAT ontbreekt of verloopt ongestructureerd, waardoor fouten pas in productie opduiken. Geen duidelijke testscenario's."
  },
  {
    title: "Behoefte aan tijdelijke versterking binnen beheer",
    description: "Een collega is afwezig door ziekte of verloop, of er is extra capaciteit nodig voor een project."
  },
  {
    title: "Applicaties sluiten onvoldoende aan op bedrijfsprocessen",
    description: "De tools zijn er, maar gebruikers werken er niet effectief mee door gebrek aan adoptiebegeleiding en documentatie."
  },
  {
    title: "Requirements worden niet goed vastgelegd",
    description: "Wensen van business worden mondeling doorgegeven, wat leidt tot misinterpretaties en herwerk."
  }
];

const uatProcess = [
  {
    fase: "1. Testplan opstellen",
    beschrijving: "Acceptatiecriteria definiëren, testscenario's schrijven, testdata voorbereiden en verantwoordelijkheden vastleggen.",
    icon: "assignment"
  },
  {
    fase: "2. Testuitvoering coördineren",
    beschrijving: "Key users begeleiden tijdens testing, issues registreren en classificeren, voortgang bewaken.",
    icon: "groups"
  },
  {
    fase: "3. Bug triage",
    beschrijving: "Bevindingen classificeren: bug, feature request of 'werking als ontwerp'. Prioriteren met development.",
    icon: "bug_report"
  },
  {
    fase: "4. Go/No-Go beslissing",
    beschrijving: "Formele goedkeuring op basis van testresultaten. Release-advies met risicoanalyse.",
    icon: "check_circle"
  }
];

const differences = [
  {
    aspect: "Focusgebied",
    applicatie: "Technische werking, stabiliteit, performance, updates",
    functioneel: "Processturen, business-IT alignatie, requirementanalyse"
  },
  {
    aspect: "Verantwoordelijkheid",
    applicatie: "Applicatie beschikbaarheid en technisch functioneren",
    functioneel: "Inhoudelijke aansluiting op bedrijfsprocessen"
  },
  {
    aspect: "Dagelijks werk",
    applicatie: "Configuraties, patches, monitoring, incidenten",
    functioneel: "Requirements, changes, UAT, documentatie"
  }
];

const benefits = [
  {
    title: "BiSL expertise on demand",
    description: "Directe toegang tot BiSL-kennis zonder fulltime FTE. Professionaliseren van functioneel beheer."
  },
  {
    title: "Requirements kwaliteit",
    description: "Gestructureerd requirements engineering leidt tot minder herwerk en hogere klanttevredenheid."
  },
  {
    title: "UAT professionaliseren",
    description: "Van vrijblijvend testen naar gestructureerde acceptatie met meetbare resultaten."
  },
  {
    title: "Kennisborging",
    description: "Alle documentatie blijft achter. Functionele ontwerpen, processen en Kennis zijn vastgelegd."
  }
];

const faqs = [
  {
    question: "Wat kost een ZZP functioneel beheerder?",
    answer: "Het tarief is afhankelijk van inzetduur en complexiteit van de omgeving. Neem contact op voor een maatwerkvoorstel op basis van jouw situatie."
  },
  {
    question: "Wat is het verschil tussen ITIL en BiSL?",
    answer: "ITIL richt zich op IT Service Management - de dienstverlening van IT naar de business. BiSL (Business Information Services Library) richt zich op functioneel beheer en informatievoorziening binnen de business zelf. BiSL sluit naadloos aan op de businesskant en is dé standaard voor functioneel beheerders."
  },
  {
    question: "Hoe ziet een UAT traject eruit?",
    answer: "Een UAT traject bestaat uit: 1) Testplan opstellen met acceptatiecriteria, 2) Testscenario's ontwikkelen met key users, 3) Testuitvoering coördineren en issues registreren, 4) Bug triage met development, 5) Go/No-Go beslissing voor productie. Ik begeleid het complete traject."
  },
  {
    question: "Wat lever je op bij een functioneel beheer opdracht?",
    answer: "Functionele ontwerpen, user stories met acceptatiecriteria, acceptatieplannen, procesbeschrijvingen, change requests, SLA-voorstellen en evaluatierapportages. Alle documentatie wordt overgedragen aan de organisatie."
  },
  {
    question: "Kan je informatieanalyse verzorgen?",
    answer: "Ja, informatieanalyse is een kernonderdeel van functioneel beheer. Ik analyseer informatiebehoeften, modelleert processen en vertaalt deze naar concrete requirements voor development teams."
  },
  {
    question: "Werk je samen met applicatiebeheerders?",
    answer: "Ja, functioneel beheer werkt nauw samen met applicatiebeheer. Ik stem af met alle betrokken partijen voor optimale samenwerking. Vaak vervul ik beide rollen in kleinere organisaties."
  },
  {
    question: "Ben je inzetbaar voor implementatieprojecten?",
    answer: "Zeker. Van requirements tot acceptatie en nazorg. Ik ondersteun bij software-implementaties, migraties en nieuwe applicatie roll-outs. BiSL-processen helpen hierbij structuur aan te brengen."
  },
  {
    question: "Wat houdt een Change Advisory Board (CAB) precies in?",
    answer: "Een CAB is een groep stakeholders die wijzigingsverzoeken beoordeelt voordat deze worden uitgevoerd. Als functioneel beheerder bereid ik changes voor, presenteer de business case en neem deel aan CAB-vergaderingen."
  },
  {
    question: "Hoe ga je om met weerstand tegen veranderingen?",
    answer: "Door vroegtijdige betrokkenheid van stakeholders, duidelijke communicatie over het waarom van wijzigingen, training en onboarding van gebruikers voorafgaand aan releases. Weerstand begint vaak bij onzekerheid - communicatie is key."
  },
  {
    question: "Werk je volgens ASL 2?",
    answer: "Ja, ASL 2 is de standaard voor applicatiemanagement (de technische kant). Ik werk nauw samen met applicatiebeheerders die volgens ASL werken. BiSL en ASL zijn ontworpen om samen te werken."
  }
];

export default function ZZPFunctioneelBeheerderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceSchema />
      <BreadcrumbSchema />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        <Navigation />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 block opacity-0 animate-fade-in">
            ZZP Functioneel Beheer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            ZZP Functioneel Beheerder voor stabiele applicaties en duidelijke processen
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Een ervaren ZZP functioneel beheerder zorgt ervoor dat applicaties niet alleen technisch werken,
            maar ook daadwerkelijk aansluiten op de behoeften van de organisatie.
            Expertise in <strong>BiSL</strong>, <strong>ITIL</strong> en <strong>UAT</strong>.
          </p>
          <p className="max-w-3xl mx-auto text-base lg:text-lg text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Inzetbaar op interim- of projectbasis.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Beschikbaarheid bespreken
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Vraag CV op
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
                Complete Functioneel Beheer
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Alles wat een functioneel beheerder doet, bij elkaar in één overzicht.
                Van BiSL-framework tot UAT-coördinatie.
              </p>
            </header>
          </ScrollReveal>

          {/* Frameworks */}
          <div className="mb-12">
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">{entities.frameworks.icon}</span>
                {entities.frameworks.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.frameworks.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
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
                <span className="material-icons text-primary">{entities.processen.icon}</span>
                {entities.processen.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.processen.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-accent mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Documentatie */}
          <div className="mb-12">
            <ScrollReveal delay={300}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">{entities.documentatie.icon}</span>
                {entities.documentatie.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.documentatie.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-slate-900 mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* KPI's */}
          <div className="mb-12">
            <ScrollReveal delay={400}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">{entities.kpis.icon}</span>
                {entities.kpis.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.kpis.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-accent mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Rollen */}
          <div className="mb-12">
            <ScrollReveal delay={500}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">{entities.rollen.icon}</span>
                {entities.rollen.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {entities.rollen.items.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-slate-900 mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Tools */}
          <div className="mb-12">
            <ScrollReveal delay={600}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-icons text-primary">{entities.tools.icon}</span>
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

      {/* UAT Proces Sectie */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                UAT Proces: Van Test naar Go-Live
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Gebruikersacceptatie is meer dan alleen 'even testen'. Een gestructureerd proces voorkomt fouten in productie.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {uatProcess.map((item, index) => (
              <ScrollReveal key={index} delay={(index + 1) * 100}>
                <div className="flex gap-6 items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                    <span className="material-icons text-white text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{item.fase}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.beschrijving}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500} className="mt-10 max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-slate-700">
                <strong>Bij UAT:</strong> Ik coördineer het complete proces, registreer alle bevindingen en zorg voor duidelijke communicatie
                tussen key users en development. Geen losse emailtjes, maar één centraal overzicht.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scenario's: Wanneer ZZP Functioneel Beheerder nodig */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heeft u een ZZP Functioneel Beheerder nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Herkenbare signalen dat professioneel functioneel beheer waardevol is.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600 | 700}>
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-2">
                    <span className="material-icons text-accent flex-shrink-0 text-2xl">warning</span>
                    {scenario.title}
                  </h3>
                  <p className="text-slate-600">{scenario.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={800}>
            <div className="max-w-3xl mx-auto p-5 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-slate-700 text-sm">
                <strong>Interim of structureel?</strong> Bespreek wat past bij jouw situatie. Vaak start ik met een analyse en
                advisering over de beste inzet van functioneel beheer capaciteit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Verschil: Functioneel Beheer vs Applicatiebeheer */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Functioneel Beheer vs Applicatiebeheer
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Vaak werk ik beide rollen in één functie. Maar wat is precies het verschil?
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {differences.map((diff, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="mb-4">
                    <h4 className="font-bold text-lg text-slate-900 mb-4">{diff.aspect}</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-purple-600 text-lg mt-0.5">code</span>
                      <div>
                        <h5 className="font-semibold text-slate-800 text-sm">Applicatiebeheer</h5>
                        <p className="text-sm text-slate-600">{diff.applicatie}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-blue-600 text-lg mt-0.5">account_tree</span>
                      <div>
                        <h5 className="font-semibold text-slate-800 text-sm">Functioneel Beheer</h5>
                        <p className="text-sm text-slate-600">{diff.functioneel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <p className="text-slate-700 text-sm">
                  <strong>Praktijk:</strong> De meeste organisaties hebben beide rollen nodig voor volledig applicatiemanagement.
                  Ik combineer ze naadloos - één aanspreekpunt voor alle beheervragen.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Voordelen ZZP Inzet */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Voordelen van ZZP Functioneel Beheer
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Waarom kiezen voor ervaren expertise op projectbasis?
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
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
      <section className="py-16 md:py-20 bg-white">
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
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Interim ZZP functioneel beheerder</h4>
                  <p className="text-sm text-slate-600 mb-3">Tijdelijke vervanging of versterking van je functioneel beheer team. Direct inzetbaar zonder wervingsperiode.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Tijdelijke vervanging</h4>
                  <p className="text-sm text-slate-600 mb-3">Bij ziekte, verlof of tijdens wervingsprocessen. Kennis blijft behouden, geen continuïteitsrisico.</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Projectmatige ondersteuning</h4>
                  <p className="text-sm text-slate-600 mb-3">Gerichte inzet voor specifieke projecten of implementaties. Van requirements tot UAT.</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Ondersteuning bij implementatie of migratie</h4>
                  <p className="text-sm text-slate-600 mb-3">Begeleiding van overgang van oude naar nieuwe systemen. Change management en adoptie.</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Optimalisatie van bestaande beheerstructuren</h4>
                  <p className="text-sm text-slate-600 mb-3">Analyse en verbetering van bestaande processen volgens BiSL en ITIL.</p>
                </div>
                <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-3">MKB, scale-ups en enterprise</h4>
                  <p className="text-sm text-slate-600 mb-3">Inzetbaar binnen diverse organisatiegroottes en sectoren (zorg, overheid, finance).</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={700}>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <p className="text-slate-700 text-sm">
                  <strong>Op maat in te zetten:</strong> Fulltime, parttime of hybrid. Remote, op locatie of een combinatie.
                  Jij bepaalt de inzetduur en focusgebieden.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mijn aanpak */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mijn aanpak
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {[
              { number: "01", title: "Analyse van processen en applicatiegebruik", description: "Ik onderzoek hoe applicaties worden ingezet binnen bedrijfsprocessen en waar knelpunten ontstaan.", icon: "search" },
              { number: "02", title: "Structuur en prioritering", description: "We bepalen samen welke wijzigingen prioriteit hebben en hoe deze gecontroleerd worden doorgevoerd.", icon: "tune" },
              { number: "03", title: "Begeleiding en borging", description: "Ik begeleid testtrajecten, wijzigingsbeheer en zorg voor duidelijke documentatie en overdracht.", icon: "verified" }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="flex gap-6 items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                    <span className="material-icons text-white text-2xl">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Werkzaamheden Detail */}
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
                      <span className="material-icons text-primary">article</span>
                      Requirements & Analyse
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Business requirements verzamelen, information analyse uitvoeren en functionele ontwerpen schrijven.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-icons text-primary">sync_alt</span>
                      Change Management
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Wijzigingsverzoeken beheren, CAB voorbereiden en impactanalyses uitvoeren.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-icons text-primary">fact_check</span>
                      UAT Coördinatie
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Testplannen opstellen, testuitvoering coördineren en resultaten rapporteren aan stakeholders.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-icons text-primary">school</span>
                      Training & Adoptie
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Gebruikers trainen, instructies schrijven en adoptie van nieuwe functionaliteit bevorderen.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <p className="text-slate-700 text-sm">
                  <strong>Afhankelijk van de situatie:</strong> Elke omgeving is anders. Ik analyseer eerst, bepaal de focus
                  en pas de aanpak aan op jouw organisatie en volwassenheidsniveau.
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
                Gerelateerde diensten
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Link href="/diensten/zzp-applicatiebeheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-purple-600 text-3xl mb-2">settings_applications</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Applicatiebeheerder</h3>
                <p className="text-sm text-slate-500">Incident- en change management, monitoring, releases en gebruikersbeheer.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/support-itsm" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-emerald-600 text-3xl mb-2">support_agent</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Support & ITSM</h3>
                <p className="text-sm text-slate-500">1e/2e lijns support, ITIL-processen, SLA's en serviceverbetering.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/diensten/it-consultancy" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-blue-600 text-3xl mb-2">search</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Consultancy & Audits</h3>
                <p className="text-sm text-slate-500">Inzicht in kwaliteit, veiligheid en performance van je applicaties.</p>
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
              Op zoek naar een ervaren ZZP functioneel beheerder?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Neem contact op om beschikbaarheid te bespreken of een CV op te vragen.
              Ik geef een eerlijke inschatting van wat ik voor jouw organisatie kan betekenen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Beschikbaarheid bespreken
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-lg transition-all"
              >
                Vraag CV op
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
