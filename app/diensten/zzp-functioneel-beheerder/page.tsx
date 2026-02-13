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
    "description": "Ervaren ZZP functioneel beheerder. Direct inzetbaar voor BiSL, ITIL, UAT en requirements engineering. MKB en scale-up specialist.",
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
        "description": "Op aanvraag - afhankelijk van inzetduur en complexiteit"
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

// Praktijkvoorbeelden voor authority layer
const praktijkvoorbeelden = [
  {
    sector: "Zorg",
    uitdaging: "Electronisch Cliënt Dossier (ECD) implementatie",
    oplossing: "Requirements vertaald naar user stories, UAT met 25 key users, Go-Live binnen 3 maanden",
    resultaat: "98% user adoption, nul regressiefouten"
  },
  {
    sector: "Financiële dienstverlening",
    uitdaging: "Core banking systeem migratie",
    oplossing: "Functionele ontwerpen voor 12 modules, CAB opgezet, change calender geïmplementeerd",
    resultaat: "Zero downtime tijdens go-live, alle SLA's behaald"
  },
  {
    sector: "Overheid",
    uitdaging: "Decentrale uitvoering applicaties",
    oplossing: "Procesbeschrijvingen, SLA's met ketenpartners, teststrategie",
    resultaat: "Verlaging doorlooptijd wijzigingen van 6 naar 2 weken"
  }
];

const expertiseGebieden = [
  { naam: "BiSL 2", icoon: "school", jaren: "8+", omschrijving: "Gecertificeerd in Business Information Services Library" },
  { naam: "ITIL 4", icoon: "verified", jaren: "10+", omschrijving: "Expert in IT Service Management practices" },
  { naam: "UAT Coördinatie", icoon: "fact_check", jaren: "100+ projecten", omschrijving: "Ervararen testcoördinator" },
  { naam: "Requirements Engineering", icoon: "assignment", jaren: "15+ jaar", omschrijving: "Proven in Agile omgevingen" },
  { naam: "Change Management", icoon: "sync", jaren: "12+ jaar", omschrijving: "CAB chair en change controle" }
];

const werkzaamhedenConcreet = [
  { categorie: "Requirements", items: [
    { titel: "Business requirements verzamelen", details: "Workshops met stakeholders, interviews met key users" },
    { titel: "Functionele ontwerpen schrijven", details: "Procesflows, dataflows, acceptatiecriteria" },
    { titel: "User stories maken", details: "Wie, wat, waarom + definitie van done" },
    { titel: "Impactanalyse doen", details: "Business impact, IT impact, risico-inschatting" }
  ]},
  { categorie: "Change Management", items: [
    { titel: "Change requests beoordelen", details: "Business case, prioriteit, afhankelijkheden" },
    { titel: "CAB voorbereiden en leiden", details: "Stakeholder bijeenkomst, go/no-go beslissing" },
    { titel: "Change planning uitvoeren", details: "Communicatie, planning, rollback scenario's" },
    { titel: "Post-release evaluatie", details: "Lessons learned, verbeteringen documenteren" }
  ]},
  { categorie: "UAT", items: [
    { titel: "Testplan opstellen", details: "Testscenario's, testdata, acceptatiecriteria" },
    { titel: "Key users begeleiden", details: "UAT sessies coördineren, issues registreren" },
    { titel: "Bug triage met development", details: "Classificeren: bug vs feature, prioriteren" },
    { titel: "Go/No-go advies", details: "Formele goedkeuring op basis van testresultaten" }
  ]},
  { categorie: "Documentatie", items: [
    { titel: "Functionele ontwerpen", details: "Detailniveau specificaties voor development" },
    { titel: "Procesbeschrijvingen", details: "Workflows met beslisregels en RACI" },
    { titel: "SLA en OLA", details: "Serviceafspraken met interne leveranciers" },
    { titel: "Training materialen", details: "Instructies, quick reference guides, e-learnings" }
  ]}
];

const faqs = [
  {
    question: "Wat kost een ZZP functioneel beheerder per uur?",
    answer: "Tarieven start vanaf €95 per uur (excl. BTW) en zijn afhankelijk van inzetduur, complexiteit en jouw sector. Voor langere opdrachten gelden gereduceerde dagtarieven. Vraag een vrijblijvende offerte op maat aan."
  },
  {
    question: "Hoe snel kun je starten?",
    answer: "Bij akkoord kan ik vaak binnen 3-5 werkdagen starten. Dit inclueert contractondertekening, intakegesprek en toegang tot jouw systemen. Bij spoedopdrachten is snelle inzet mogelijk."
  },
  {
    question: "Wat lever je concreet op na een opdracht?",
    answer: "Alle documentatie blijft achter: functionele ontwerpen, user stories, procesbeschrijvingen, SLA-voorstellen, changelog en evaluatierapportage. Nothing leaves without documentation."
  },
  {
    question: "Heb je ervaring met mijn sector (zorg/finance/overheid)?",
    answer: "Ja, ik heb ervaring in uiteenloze sectoren including zorg (ECD/EPD), financiële dienstverlening, overheid en logistiek. Ik begrijp de specifieke eisen en regelgeving van jouw sector."
  },
  {
    question: "Werk je ook op locatie of alleen remote?",
    answer: "Ik werk zowel remote als op locatie. Voor de start is een fysieke intake aan te raden, daarna kunnen we afstemmen wat werkt: hybride, volledig remote of geregeld op locatie."
  },
  {
    question: "Kan je ook de rol van applicatiebeheerder vervullen?",
    answer: "Ja, ik combineer vaak beide rollen. Dat scheelt tijd en geld en voorkom miscommunicatie tussen functioneel en technisch beheer. Je krijgt één aanspreekpunt voor je complete applicatiemanagement."
  },
  {
    question: "Hoe ga je om met weerstand tegen veranderingen?",
    answer: "Weerstand begint vaak bij onzekerheid. Ik pak dit aan door: 1) vroegtijdig communiceren over het waarom, 2) stakeholders te betrekken bij het ontwerp, 3) trainingen vooraf, 4) quick wins te demonstreren. Change management is 70% communicatie."
  },
  {
    question: "Wat is jouw achtergrond en ervaring?",
    answer: "15+ jaar ervaring in IT en functioneel beheer. BiSL 2 gecertificeerd, ITIL 4 expert, Agile/Scrum practitioner. Ik heb 100+ UAT trajecten begeleid bij uiteenloze organisaties van MKB tot enterprise."
  }
];

const groeiOmgevingen = [
  { fase: "Dag 1-7", wat: "Inwerkperiode en systeemkennis", duur: "Onderdeel van contract" },
  { fase: "Week 2-4", wat: "Eerste wijzigingen doorvoeren", duur: "Quick wins realiseren" },
  { fase: "Maand 2-3", wat: "Processen optimaliseren", duur: "Efficiency meten en verbeteren" }
];

export default function ZZPFunctioneelBeheerderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceSchema />
      <BreadcrumbSchema />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24 overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        <Navigation />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block opacity-0 animate-fade-in">
            Direct beschikbaar
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tighter mb-4 leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            ZZP Functioneel Beheerder<br />BiSL, ITIL & UAT specialist
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-6 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            <strong>Ervararen functioneel beheerder</strong> die de brug vormt tussen jouw businessprocessen en IT.
            Expert in <strong>BiSL 2</strong>, <strong>ITIL 4</strong> en <strong>User Acceptance Testing</strong>.
          </p>
          <p className="max-w-2xl mx-auto text-blue-100/80 text-sm mb-8 opacity-0 animate-fade-in-up animation-delay-300">
            ✓ Direct inzetbaar op interim- of projectbasis<br />
            ✓ 8-15 jaar ervaring in diverse sectoren<br />
            ✓ Alle documentatie wordt overgedragen
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-8 py-3.5 rounded-full text-base shadow-lg">
              Offerte aanvragen
            </Link>
            <Link href="#beschikbaarheid" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 py-3 rounded-full text-sm transition-all">
              Beschikbaarheid checken
            </Link>
          </div>
          <p className="text-blue-200/60 text-xs mt-6">
            Gemiddelde reactietijd: 4 uur • Tarieven vanaf €95/uur
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trust Bar - Voor wie is dit */}
      <section className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-4">
              <span className="material-icons text-blue-600 text-2xl">business</span>
              <div>
                <h3 className="font-bold text-slate-900">Voor wie is dit?</h3>
                <p className="text-sm text-slate-600 mt-1">Direct inzetbaar voor</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-700">
              <span className="flex items-center gap-1"><span className="material-icons text-accent text-sm">check</span> MKB</span>
              <span className="flex items-center gap-1"><span className="material-icons text-accent text-sm">check</span> Scale-ups</span>
              <span className="flex items-center gap-1"><span className="material-icons text-accent text-sm">check</span> Enterprise</span>
              <span className="flex items-center gap-1"><span className="material-icons text-accent text-sm">check</span> Zorg/Overheid</span>
            </div>
          </div>
          <div className="hidden md:block text-right text-sm text-slate-500">
            <Link href="#aanpak" className="text-accent hover:underline">→ Bekijk mijn werkwijze ↓</Link>
          </div>
        </div>
      </section>

      {/* Trust Bar - Wanneer nodig */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Wanneer heb je mij nodig?</h3>
              <p className="text-sm text-slate-600">Signalen dat professioneel functioneel beheer verschil maakt:</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Of niet?</h3>
              <p className="text-sm text-slate-600">Situaties waar een interim specialist geen meerwaarde biedt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Content - Problemen die opgelost worden */}
      <section className="py-16 md:py-20 bg-white" id="problemen">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Problemen die ik voor je oplos
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Dit is wat ik concreet voor je doe. Geen vage beloftes, maar tastbare resultaten.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-icons text-accent mt-1">close</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Business requirements worden niet begrepen</h4>
                  <p className="text-sm text-slate-600">IT levert wat de business niet vraagt. Ik vertaal wensen naar concrete specificaties.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-icons text-accent mt-1">close</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Wijzigingen leiden tot regressiefouten</h4>
                  <p className="text-sm text-slate-600">Ad-hoc changes zonder test. Ik structureer dit met proper change management.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-icons text-accent mt-1">close</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Gebruikers accepteren nieuwe functionaliteit niet</h4>
                  <p className="text-sm text-slate-600">Weerstand door onduidelijke communicatie. Ik begeleid adoptie van A tot Z.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-icons text-accent mt-1">close</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">UAT verloopt ongestructureerd</h4>
                  <p className="text-sm text-slate-600">Fouten pas in productie. Ik coördineer professionele acceptatietrajecten.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-icons text-accent mt-1">close</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Kennis verdwijnt bij personeelswisseling</h4>
                  <p className="text-sm text-slate-600">Niets is gedocumenteerd. Ik zorg dat alles vastgelegd wordt en overgedragen.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-icons text-accent mt-1">close</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">SLA's worden niet gehaald</h4>
                  <p className="text-sm text-slate-600">Geen inzicht in prestaties. Ik help meetbare afspraken opstellen en monitoren.</p>
                </div>
              </div>
            </div>
          </div>

          <ScrollReveal delay={200}>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 mt-8">
              <p className="text-slate-700 text-sm">
                <strong>Resultaat na 3 maanden:</strong> Gemiddelde change doorlooptijd van 6 naar 2 weken, First Contact Resolution van 65% naar 82%, user adoption van 50% naar 85%.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Concrete Werkzaamheden */}
      <section className="py-16 md:py-20 bg-slate-50" id="werkzaamheden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat ik concreet voor je doe
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Geen marketingverhalen. Operationele taken die ik uitvoer.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-8">
            {werkzaamhedenConcreet.map((categorie, catIndex) => (
              <ScrollReveal key={catIndex} delay={(catIndex + 1) * 100}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      categorie.categorie === 'Requirements' ? 'bg-blue-100 text-blue-700' :
                      categorie.categorie === 'Change Management' ? 'bg-purple-100 text-purple-700' :
                      categorie.categorie === 'UAT' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      <span className="text-white font-bold text-sm">{categorie.categorie}</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{categorie.categorie}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {categorie.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="material-icons text-accent text-sm mt-0.5">arrow_right</span>
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm mb-0.5">{item.titel}</h4>
                          <p className="text-sm text-slate-600">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Praktijkvoorbeelden - Authority Layer */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Referenties: Resultaten die ik heb bereikt
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Concrete cases uit diverse sectoren. Met cijfers.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {praktijkvoorbeelden.map((pb, index) => (
              <ScrollReveal key={index} delay={(index + 1) * 100}>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{pb.sector}</h3>
                      <p className="text-sm text-slate-500 mt-1">→ {pb.uitdaging}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-purple-600 text-lg">build</span>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">Oplossing</h4>
                        <p className="text-sm text-slate-600">{pb.oplossing}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-emerald-600 text-lg">trending_up</span>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">Resultaat</h4>
                        <p className="text-sm text-slate-600 font-medium text-emerald-700">{pb.resultaat}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Frameworks */}
      <section className="py-16 md:py-20 bg-slate-50" id="expertise">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mijn expertise & certificaten
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Bewezen frameworks en jarenlange ervaring.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {expertiseGebieden.map((exp, index) => (
              <ScrollReveal key={index} delay={(index + 1) * 100}>
                <div className="bg-white rounded-xl p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <span className="material-icons text-accent text-2xl">{exp.icoon}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{exp.naam}</h4>
                  <p className="text-sm text-slate-600 mb-2">{exp.omschrijving}</p>
                  <p className="text-xs text-slate-500">{exp.jaren}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze - Aanpak sectie */}
      <section className="py-16 md:py-20 bg-white" id="aanpak">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mijn werkwijze: Van intake tot oplevering
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Hoe ik te werk ga. Transparant, met duidelijke stappen.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {[
              { nummer: "01", titel: "Intake & Quick Scan", duur: "Dag 1", beschrijving: "Bespreking jouw situatie, knelpunten in kaart brengen, eerste quick wins identificeren die ik direct kan oppakken." },
              { nummer: "02", titel: "Aanpak & Planning", duur: "Week 1", beschrijving: "Concrete actieplan opstellen, prioriteiten afstemmen met stakeholders, change kalender voor komende periode." },
              { nummer: "03", titel: "Uitvoering & Coördinatie", duur: "Lopend", beschrijving: "Werkzaamheden uitvoeren, voortgang rapporteren, bijsturen bij afwijkingen, stakeholders betrekken." },
              { nummer: "04", titel: "Evaluatie & Borging", duur: "Einde", beschrijving: "Resultaten evalueren, lessons learned documenteren, alle overdragen bij interne teams, kennisborging garanderen." }
            ].map((stap, index) => (
              <ScrollReveal key={index} delay={(index + 1) * 100}>
                <div className="flex gap-5 items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {stap.nummer}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{stap.titel}</h3>
                    <p className="text-sm text-slate-500 mb-1">{stap.duur}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{stap.beschrijving}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Groeiprogramma - CRO element */}
      <section className="py-12 bg-emerald-50 border-y border-emerald-200">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-bold text-slate-900 mb-3">Groeiprogramma voor jouw organisatie</h3>
              <p className="text-sm text-slate-600 mb-4">Van eerste kennismaking tot volledig operationeel in 3 maanden</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {groeiOmgevingen.map((stap, index) => (
                <ScrollReveal key={index} delay={(index + 1) * 100}>
                  <div className="bg-white rounded-xl p-4">
                    <p className="font-bold text-accent text-sm mb-1">{stap.fase}</p>
                    <p className="text-sm text-slate-600">{stap.wat}</p>
                    <p className="text-xs text-slate-400 mt-1">{stap.duur}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kwalificatiefilter - Trust element */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Waarom voor mij kiezen?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Meer dan 15 jaar ervaring. Gecertificeerd. Bewezen trackrecord.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <span className="material-icons text-blue-600 text-3xl mb-2">verified</span>
                <h4 className="font-bold text-slate-900 mb-2">Gecertificeerd</h4>
                <p className="text-sm text-slate-600">BiSL 2, ITIL 4</p>
                <p className="text-xs text-slate-400 mt-2">Officiële certificeringen</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <span className="material-icons text-purple-600 text-3xl mb-2">schedule</span>
                <h4 className="font-bold text-slate-900 mb-2">15+ jaar ervaring</h4>
                <p className="text-sm text-slate-600">MKB, scale-up, enterprise</p>
                <p className="text-xs text-slate-400 mt-2">100+ projecten afgerond</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-emerald-50 rounded-xl p-6 text-center">
                <span className="material-icons text-emerald-600 text-3xl mb-2">star</span>
                <h4 className="font-bold text-slate-900 mb-2">Trackrecord</h4>
                <p className="text-sm text-slate-600">4.8/5 gemiddelde score</p>
                <p className="text-xs text-slate-400 mt-2">Klanttevredenheid</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Beschikbaarheid check - Conversion element */}
      <section className="py-16 md:py-20 bg-slate-50" id="beschikbaarheid">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Direct inzetbaar?
              </h2>
              <p className="text-slate-600 mb-6">Check mijn beschikbaarheid en krijg binnen 24 uur een vrijblijvende indicative.</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-700">Reactietijd offerte</span>
                  <span className="font-semibold text-accent">Binnen 4 werkdagen</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-700">Startdatum</span>
                  <span className="font-semibold text-slate-900">In overleg</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-700">Minimale inzet</span>
                  <span className="font-semibold text-slate-900">16 uur per week</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full"
              >
                Check beschikbaarheid
              </Link>
              <p className="text-xs text-slate-400 mt-4">Geen verplichtingen • Gratis en vrijblijvend</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ - Conversion Layer */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Veelgestelde vragen
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Antwoorden op vragen die ik vaak krijg. Staat je vraag er niet bij?
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={(index + 1) * 50}>
                <details className="group bg-slate-50 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer select-none hover:bg-slate-100 transition-colors">
                    <h4 className="font-semibold text-slate-900 pr-4">{faq.question}</h4>
                    <span className="material-icons text-accent transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                    {faq.answer}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="max-w-3xl mx-auto mt-8 p-5 bg-amber-50 rounded-xl border border-amber-200 text-center">
              <p className="text-slate-700 text-sm">
                <strong>Staat je vraag er niet bij?</strong> Bel of mail me. Ik antwoord doorgaans binnen 24 uur, vaak sneller.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <FAQSchema faqs={faqs} />

      {/* CTA Section - Conversion Layer */}
      <section className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Klaar voor professioneel functioneel beheer?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop met ad-hoc changes en onduidelijke requirements. Laat mij structuur aanbrengen in jouw applicatielandschap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Offerte aanvragen
              </Link>
              <Link
                href="#beschikbaarheid"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-lg transition-all"
              >
                Eerst beschikbaarheid checken
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-1">
                <span className="material-icons text-base">check_circle</span>
                Geen verplichtingen
              </span>
              <span className="flex items-center gap-1">
                <span className="material-icons text-base">check_circle</span>
                Binnen 4 dagen reactie
              </span>
              <span className="flex items-center gap-1">
                <span className="material-icons text-base">check_circle</span>
                Alle kennis overgedragen
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer - Final CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-500 text-sm mb-3">
              Twijfel je nog? Ik kom graag langs voor een vrijblijvend kennismakingsgesprek.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="text-accent hover:underline font-medium text-sm">
                Plan een kennismakingsgesprek
              </Link>
              <span className="text-slate-300 text-sm">•</span>
              <Link href="tel:0612345678" className="text-accent hover:underline font-medium text-sm">
                Bel: 06 1234 5678
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
