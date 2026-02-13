'use client';

import { useScrollReveal } from '../../components/scroll-reveal';
import FAQSection from '../../components/faq-section';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';
import { JsonLd } from '../../components/JsonLd';
import { createServicePageSchema, type FAQItem } from '../../lib/schema';

function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; }) {
  const [ref, isIntersecting] = useScrollReveal();
  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  const baseClass = `scroll-reveal reveal-pending${isIntersecting ? ' revealed' : ''}${delayClass}`;
  return <div ref={ref} className={`${baseClass} ${className}`}>{children}</div>;
}

// Table of Contents - Anchor navigation
const tableOfContents = [
  { id: "wat-doe-ik", label: "Wat doe ik?" },
  { id: "problemen", label: "Problemen die ik oplos" },
  { id: "werkzaamheden", label: "Concrete werkzaamheden" },
  { id: "cases", label: "Referenties" },
  { id: "expertise", label: "Expertise & Certificaten" },
  { id: "aanpak", label: "Mijn aanpak" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "contact", label: "Contact" }
];

// Credentials & Social Proof
const credentials = [
  { icon: "workspace_premium", text: "15+ jaar ervaring in IT en functioneel beheer" },
  { icon: "verified", text: "BiSL 2 & ITIL 4 gecertificeerd" },
  { icon: "fact_check", text: "100+ UAT trajecten begeleid" },
  { icon: "location_on", text: "Direct inzetbaar vanuit Breda, NL" }
];

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

const faqs: FAQItem[] = [
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

// Schema using factory
const serviceSchema = createServicePageSchema({
  serviceName: "ZZP Functioneel Beheerder",
  serviceDescription: "Inhuur van een ZZP functioneel beheerder die IT en business verbindt, processen optimaliseert, wijzigingen begeleidt en de functionele werking van applicaties bewaakt.",
  serviceUrl: "https://www.digitechsolutions.nl/diensten/zzp-functioneel-beheerder",
  serviceSlug: "zzp-functioneel-beheerder",
  faqs: faqs.slice(0, 6),
  hourlyRateMin: 95,
  hourlyRateMax: 125,
});

export default function ZZPFunctioneelBeheerderPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={serviceSchema} />

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
            ZZP Functioneel Beheerder Inhuren<br />De Brug Tussen IT en Business
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-6 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            <strong>Freelance functioneel beheerder</strong> die requirements vertaalt naar werkende oplossingen.
            <strong>Interim functioneel beheer specialist</strong> voor organisaties die structureel aanpassingen nodig hebben.
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

      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-slate-200 py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-6">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-slate-500 hover:text-accent transition-colors">Home</Link></li>
            <li><span className="text-slate-400">/</span></li>
            <li><Link href="/diensten" className="text-slate-500 hover:text-accent transition-colors">Diensten</Link></li>
            <li><span className="text-slate-400">/</span></li>
            <li className="text-slate-900 font-medium">ZZP Functioneel Beheerder</li>
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

      {/* Prose Block - What does a ZZP Functioneel Beheerder do? */}
      <section id="wat-doe-ik" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Wat doet een ZZP functioneel beheerder?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Als <strong>ZZP functioneel beheerder</strong> vorm ik de cruciale schakel tussen jouw businessprocessen en de IT-afdeling. Waar een <Link href="/diensten/zzp-applicatiebeheerder" className="text-accent hover:underline">applicatiebeheerder</Link> zich richt op de technische kant van systemen, focus ik op de inhoud: requirements vertalen, wijzigingen coördineren, en ervoor zorgen dat IT oplossingen daadwerkelijk aansluiten bij de behoeften van de organisatie. Ik werk volgens het <strong>BiSL-framework</strong> en ben getraind in <strong>ITIL 4</strong>, de wereldstandaarden voor functioneel en technisch beheer.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Steeds meer organisaties kiezen ervoor om een <strong>functioneel beheerder in te huren</strong> in plaats van een vaste medewerker. De voordelen zijn duidelijk: met een <strong>interim functioneel beheerder</strong> krijg je direct toegang tot ervaringskennis uit meerdere sectoren en projecten, zonder de langdurige wervingsprocedure en werkgeversverplichtingen. Als <strong>BiSL consultant</strong> breng ik best practices mee die ik bij andere organisaties heb toegepast — kennis die intern vaak ontbreekt.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Mijn kernwerkzaamheden omvatten <strong>requirements engineering</strong>, <strong>UAT coördinatie</strong>, en <strong>change management</strong>. Ik verzamel business requirements via workshops en interviews, vertaal deze naar functionele ontwerpen en user stories, en begeleid acceptatietrajecten waarbij key users de nieuwe functionaliteit testen. Daarnaast ondersteun ik bij het opzetten van Change Advisory Boards en zorg ik voor gestructureerde wijzigingsprocedures. Wil je <strong>functioneel beheer uitbesteden</strong>? Ik ben flexibel inzetbaar vanaf 16 uur per week.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Mijn <strong>ZZP functioneel beheerder tarief</strong> start vanaf €95 per uur, afhankelijk van de complexiteit en duur van de opdracht. Voor langere trajecten gelden gereduceerde dagtarieven. In combinatie met <strong>UAT coördinatie</strong> en requirements engineering lever ik complete functionele beheerdiensten, zodat jij je kunt richten op je core business. Vraag een vrijblijvende offerte aan voor een maatwerkvoorstel.
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
                      Met meer dan 15 jaar ervaring in functioneel beheer heb ik gewerkt bij zorginstellingen, financiële dienstverleners en overheidsorganisaties. Ik ben BiSL 2 en ITIL 4 gecertificeerd en heb meer dan 100 UAT-trajecten succesvol begeleid.
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
      <section id="cases" className="py-16 md:py-20 bg-white">
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

      {/* Tarieven - Prijsindicatie */}
      <section id="tarieven" className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tarieven ZZP Functioneel Beheerder
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Transparante tarieven zonder verborgen kosten. Het exacte tarief hangt af van complexiteit, duur en sector.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {/* Tariefkaarten */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-accent/30 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <span className="material-icons text-accent text-3xl">schedule</span>
                    <h3 className="font-bold text-lg text-slate-900 mt-2">Uurtarief</h3>
                    <p className="text-sm text-slate-500">Korte opdrachten</p>
                  </div>
                  <div className="text-center py-4 border-t border-slate-100">
                    <span className="text-4xl font-extrabold text-accent">€95</span>
                    <span className="text-slate-500"> - €125</span>
                    <p className="text-xs text-slate-400 mt-1">per uur (excl. BTW)</p>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2 mt-4">
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      1-3 maanden inzet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      24-40 uur per week
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      Alle documentatie
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white rounded-xl p-6 border-2 border-accent shadow-lg relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    MEEST GEKOZEN
                  </div>
                  <div className="text-center mb-4">
                    <span className="material-icons text-accent text-3xl">calendar_today</span>
                    <h3 className="font-bold text-lg text-slate-900 mt-2">Dagtarief</h3>
                    <p className="text-sm text-slate-500">Middellange trajecten</p>
                  </div>
                  <div className="text-center py-4 border-t border-slate-100">
                    <span className="text-4xl font-extrabold text-accent">€720</span>
                    <span className="text-slate-500"> - €960</span>
                    <p className="text-xs text-slate-400 mt-1">per dag (excl. BTW)</p>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2 mt-4">
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      3-6 maanden inzet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      Fulltime beschikbaar
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      Kennisoverdracht inbegrepen
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-accent/30 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <span className="material-icons text-accent text-3xl">event</span>
                    <h3 className="font-bold text-lg text-slate-900 mt-2">Maandtarief</h3>
                    <p className="text-sm text-slate-500">Langdurige samenwerking</p>
                  </div>
                  <div className="text-center py-4 border-t border-slate-100">
                    <span className="text-4xl font-extrabold text-accent">€12K</span>
                    <span className="text-slate-500"> - €16K</span>
                    <p className="text-xs text-slate-400 mt-1">per maand (excl. BTW)</p>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2 mt-4">
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      6+ maanden inzet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      Fulltime inzet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-icons text-green-500 text-base">check</span>
                      Priority support
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Wat beïnvloedt het tarief */}
            <ScrollReveal delay={400}>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="material-icons text-accent">info</span>
                  Wat beïnvloedt het tarief?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-accent text-lg">trending_up</span>
                    <div>
                      <strong className="text-slate-900">Complexiteit:</strong> Core systemen vs. ondersteunende applicaties
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-accent text-lg">domain</span>
                    <div>
                      <strong className="text-slate-900">Sector:</strong> Gereguleerde sectoren (zorg, finance) vereisen extra compliance
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-accent text-lg">location_on</span>
                    <div>
                      <strong className="text-slate-900">Reisafstand:</strong> Fysieke aanwezigheid kan reiskosten met zich meebrengen
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-accent text-lg">bolt</span>
                    <div>
                      <strong className="text-slate-900">Urgentie:</strong> Spoedopdrachten met start &lt; 1 week hebben opslag
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={500}>
              <div className="text-center mt-8">
                <p className="text-slate-600 mb-4">
                  Vraag een vrijblijvende offerte aan voor een exacte prijsindicatie op maat.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-full transition-all"
                >
                  <span className="material-icons text-base">mail</span>
                  Offerte aanvragen
                </Link>
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
      <section id="faq" className="py-16 md:py-20 bg-white">
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

      {/* Interne Links - Gerelateerde diensten */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Gerelateerde diensten
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Functioneel beheer werkt optimaal in combinatie met deze expertisegebieden.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Link href="/diensten/zzp-applicatiebeheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group border border-slate-200">
                <span className="material-icons text-accent text-3xl mb-2">settings_applications</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Applicatiebeheerder</h3>
                <p className="text-sm text-slate-600">Technisch beheer van bedrijfskritische applicaties. Monitoring, incident management, releases en configuratiebeheer.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/support-itsm" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group border border-slate-200">
                <span className="material-icons text-accent text-3xl mb-2">support_agent</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Support & ITSM</h3>
                <p className="text-sm text-slate-600">ITIL-georganiseerde support met incident-, problem- en changemanagement. SLA's, KPI's en kennisborging.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/diensten/it-consultancy" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group border border-slate-200">
                <span className="material-icons text-accent text-3xl mb-2">business_center</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Consultancy & Audits</h3>
                <p className="text-sm text-slate-600">Onafhankelijke analyse van IT-processen en applicaties. Inzicht voordat je investeert.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <Link href="/over-mij" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group border border-slate-200">
                <span className="material-icons text-accent text-3xl mb-2">person</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Over mij</h3>
                <p className="text-sm text-slate-600">Meer over mijn achtergrond, 15+ jaar ervaring, certificeringen en werkwijze als IT specialist.</p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold text-slate-900 mb-4">Gerelateerde artikelen</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/verschil-functioneel-applicatiebeheer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
              >
                <span className="material-icons text-xs">article</span>
                Verschil functioneel en applicatiebeheer
              </Link>
              <Link
                href="/blog/uae-best-practices"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
              >
                <span className="material-icons text-xs">article</span>
                UAT best practices
              </Link>
              <Link
                href="/blog/change-management-proces"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
              >
                <span className="material-icons text-xs">article</span>
                Change management proces opzetten
              </Link>
            </div>
          </div>
        </div>
      </section>

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
