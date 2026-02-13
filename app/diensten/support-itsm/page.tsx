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

const situations = [
  {
    title: "Incidenten stapelen zich op",
    description: "Hetzelfde incident komt steeds terug omdat de oorzaak niet bij de bron wordt aangepakt. Geen structuurelijke root cause analysis."
  },
  {
    title: "Geen SLA-inzicht en -sturing",
    description: "Supportverzoeken worden ad-hac afgehandeld zonder meetbare responstijden of kwaliteitsmetrics."
  },
  {
    title: "Verantwoordelijkheden vallen tussen wal en schip",
    description: "Issues lopen vast omdat niemand eigenaar is van het probleem. Escalatie verloopt via informele kanalen."
  },
  {
    title: "Doorontwikkeling wordt verdrongen door brandjes",
    description: "Het development team wordt overspoeld met supportvragen. Nieuwe features blijven liggen omdat alle tijd gaat naar incidenten."
  },
  {
    title: "Geen structuur in change management",
    description: "Wijzigingen aan producties worden live gezet zonder testing, rollback of gecommuniceerde planning."
  },
  {
    title: "Tools worden niet optimaal benut",
    description: "Jira, ServiceNow of TOPdesk draaien op halve kracht door ontbrekende procesinrichting en integraties."
  }
];

const framework = [
  {
    title: "Analyse & Maturity Scan",
    description: "In kaart brengen van huidige supportprocessen, knelpunten, volwassenheidsniveau en verbeterpotentiaal."
  },
  {
    title: "ITIL-gebaseerde Procesinrichting",
    description: "Incident management, change management, problem management en knowledge base volgens ITIL 4 best practices."
  },
  {
    title: "Tooling Optimalisatie",
    description: "Selectie, configuratie en integratie van ServiceNow, Jira SM of TOPdesk afgestemd op schaal en behoeften."
  },
  {
    title: "KPI-monitoring & Continue Verbetering",
    description: "MTTR, resolniveaus, SLA-prestaties en gebruikerstevredenheid structureel meten en analyseren."
  },
  {
    title: "Training & Knowledge Overdracht",
    description: "Documentatie van runbooks, onboarding van supportmedewerkers en kennisborging binnen de organisatie."
  }
];

const kpis = [
  {
    metric: "MTTR (Mean Time To Repair)",
    description: "Gemiddelde tijd om een incident volledig op te lossen. Korter is beter; toont efficiëntie in het oplosproces."
  },
  {
    metric: "First Contact Resolution (FCR)",
    description: "Percentage van issues die bij eerste contact worden opgelost. Hoger betekent minder escalaties en snellere service."
  },
  {
    metric: "SLA Performance",
    description: "Bijhouden van afgesproken responstijden, resolutiesnelheid en beschikbaarheid. Garant vooraf afgesproken verwachtingen."
  },
  {
    metric: "Change Success Rate",
    description: "Percentage van wijzigingen dat succesvol wordt afgerond zonder incidenten of rollback. Toont proceskwaliteit."
  },
  {
    metric: "User Satisfaction Score (CSAT)",
    description: "Tevedenheid van gebruikers na supportinteractie. Directe feedback op kwaliteit van support en communicatie."
  }
];

const tools = [
  {
    name: "ServiceNow",
    description: "Enterprise ITSM platform voor groote organisaties met complexe workflowbehoeften."
  },
  {
    name: "Jira Service Management",
    description: "Flexibele optie voor development-georïnteerde teams. Sterk in incident- en changemanagement."
  },
  {
    name: "TOPdesk",
    description: "Nederlandse ITSM oplossing, specifiek voor MKB en mid-market organisaties."
  }
];

const benefits = [
  {
    title: "Voorspelbare kostenstructuur",
    description: "Maandelijkse fee zonder verborgen costs. Geen verrassingen door onverwachte facturatie."
  },
  {
    title: "Schaalbaarheid op vraag",
    description: "Snel op- en afschalen naargel de behoeften van de organisatie. Geen wervings- of ontslagriscos."
  },
  {
    title: "Directe toegang tot expertise",
    description: "Senior ITSM-kennis zonder fulltime overhead. Betaal voor wat je nodig hebt, wanneer je het nodig hebt."
  },
  {
    title: "Kennisborging wordt meegenomen",
    description: "Procedures en documentatie blijven behouden. Geen knowhow-verlies bij personeelswisselingen."
  },
  {
    title: "Geen afleiding van core business",
    description: "Jouw team richt zich op productontwikkeling en groei. Support is professioneel geregeld."
  }
];

const faqs = [
  {
    question: "Wat is het verschil tussen IT Support en ITSM?",
    answer: "IT Support is de uitvoering van dagelijkse hulpverlening aan gebruikers. ITSM (IT Service Management) is het framework waarmee support structureel wordt georganiseerd. ITSM zorgt voor processen, rollen, verantwoordelijkheden en metrics; IT Support voert die processen uit. Goede ITSM is essentieel voor effectieve IT Support."
  },
  {
    question: "Waarom zou ik ITSM uitbesteden in plaats van support zelf doen?",
    answer: "Zonder ITSM wordt support reactief, ad-hac en onvoorspelbaar. Elk incident is een verrassing. Met ITSM bouw je herkenbare processen, documenteer je kennis en met je prestaties. Dit leidt tot snellere oplostijden, hogere kwaliteit en minder stress voor zowel gebruikers als supportmedewerkers. De investering betaalt zich terug in verlaging van MTTR en hogere gebruikerstevredenheid."
  },
  {
    question: "Bied je ook ondersteuning bij toolingkeuze?",
    answer: "Zeker. Ik help bij de selectie van ITSM tools afgestemd op jouw schaal, behoeften en budget. Of het nu gaat om ServiceNow, Jira Service Management, TOPdesk of een andere oplossing – ik zorg voor een objectieve evaluatie en implementatieplan die past bij jouw organisatie."
  },
  {
    question: "Hoe snel kunnen jullie opschalen bij pieken?",
    answer: "Als ZZP-consultant kan ik doorgaans sneller opschalen dan interne werving. Bij onverwachte pieken of projecten kan ik capaciteit op korte termijn toevoegen. Daarnaast kan ik helpen bij het opzetten van flexibele schaalmodellen met externe partners indien gewenst."
  },
  {
    question: "Kan jullie dienst combineren met ons development team?",
    answer: "Absoluut. Sterker nog: dat is vaak de meest waardevolle combinatie. IT Support leert waar knelpunten zijn in de praktijk. Die inzichten kan ik meenemen in jouw doorontwikkeling, waardoor toekomstige incidenten worden voorkomen. Support en development die elkaar versterken in plaats van werken als geïsoleerde silos."
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
            Diensten
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            IT Support &<br className="hidden lg:block" /> IT Service Management
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Van reactieve helpdesk naar strategische partner. ITSM die jouw organisatie volwassenheid naar het volgende niveau tilt.
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
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
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
                      Het structureel framework waarmee support wordt georganiseerd. ITSM omvat processen, rollen, verantwoordelijkheden, tools en metrics om service consistente en meetbaar te maken.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Waarom bedrijven deze vaak verwarren</h4>
                  <p className="text-slate-600 mb-4">
                    Veel MKB-bedrijven en scale-ups hebben IT Support (de helpdeskfunctie) maar geen ITSM (de structuur erachter). Resultaat: support is reactief, incidenten herhalen zich, en niemand weet eigenlijk hoe goed de support presteert.
                  </p>
                  <p className="text-slate-600">
                    Volwassen organisaties begrijpen: IT Support zonder ITSM is als brandjes blussen zonder te onderzoeken waarom er brand ontstaat. ITSM brengt structuur, voorspelbaarheid en continue verbetering.
                  </p>
                </div>
              </div>
            </ScrollReveal>
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
                Een concreet 5-stappen model dat werkt voor MKB en scale-ups.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            {framework.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
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

          <ScrollReveal delay={600}>
            <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-slate-700 leading-relaxed">
                <strong>Pragmatisch, waar nodig.</strong> Geen one-size-fits-all benadering. Ik pas de ITSM-implementatie aan op jouw volwassenheidsniveau, beschikbare middelen en organisatiecultuur.
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
                Meten is weten. objectief verbeteren.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {kpis.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
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
                Toolkeuze is context-afhankelijk.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {tools.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <span className="material-icons text-white text-xl">extension</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="max-w-3xl mx-auto mt-8 p-5 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-slate-700 text-sm">
                <strong>Tooling adviseur:</strong> Ik help bij selectie afgestemd op schaal (1-50 FTE vs 50+ medewerkers), volwassenheidsniveau (ad-hoc vs ITIL-georïnteerd) en integratiebehoeften (Jira, GitHub, Slack, Microsoft 365). Geen vendor lock-in, maar keuzes die passen.
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
                <strong>Voor wie?</strong> IT managers die structureel willen verbeteren zonder fulltime FTE te moeten aantrekken. CTO's van scale-ups die focus willen houden op product. MKB-ondernemers die de risico's van ad-hoc support willen elimineren.
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
                Praktijk: Van chaos naar structuur
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
                      Een scale-up (40 FTE, groeideende) met chaotische supportprocessen. Incidenten lopen op, geen duidelijke SLA's, development team wordt overspoeld met vragen. Eigenaar van support wil professionalisering maar heeft intern geen tijd.
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
                        <p className="text-sm text-slate-600">Maturity scan, procesmapping, tooling-selectie. Eerste quick wins doorprioriteren.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="material-icons text-blue-600 text-xl">build</span>
                      <div>
                        <h5 className="font-semibold text-slate-800 text-sm">Maand 2: Implementatie & Training</h5>
                        <p className="text-sm text-slate-600">ITIL-processen live, KPI-dashboard in gebruik, team getrain in nieuwe werkwijze.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="material-icons text-purple-600 text-xl">verified</span>
                      <div>
                        <h5 className="font-semibold text-slate-800 text-sm">Maand 3: Meten & Optimaliseren</h5>
                        <p className="text-sm text-slate-600">MTTR gedaald van 48 uur naar 4 uur. FCR gestegen van 45% naar 72%. Tevedenheid omhoog.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-6 mt-6">
                  <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                    <span className="material-icons text-accent">insights</span>
                    Resultaat
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <span className="material-icons text-emerald-600 mt-0.5">speed</span>
                      <span className="text-sm text-slate-700"><strong>Snellere oplostijden:</strong> 48u → 4u</span>
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
                <p className="text-sm text-slate-500">Incident- en change management, monitoring, releases en gebruikersbeheer.</p>
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
                <p className="text-sm text-slate-500">Inzicht in kwaliteit, veiligheid en performance van je applicaties.</p>
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
              Plan een vrijblijvend gesprek. We analyseren je huidige supportprocessen, identify knelpunten en adviseren over een stappenplan naar professionele ITSM.
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
