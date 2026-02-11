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
    title: "Performance of stabiliteit gaat achteruit",
    description: "Je applicatie wordt langzamer, crasht onder belasting, of vertoont onverklaarbare gedrag."
  },
  {
    title: "Nieuwe features kosten steeds meer tijd",
    description: "Wat eerst 'snel toe te voegen' was, is nu een complexe, riskante operatie."
  },
  {
    title: "Technische schuld stapelt zich op",
    description: "Quick fixes en workarounds hebben een rommelige codebase gecreëerd die niemand meer snapt."
  },
  {
    title: "Integraties zijn complex of fragiel",
    description: "Koppelingen vallen vaak uit, data synchroniseert niet goed, of niemand begrijpt de datastromen."
  },
  {
    title: "Niemand kan uitleggen hoe het systeem werkt",
    description: "Documentatie ontbreekt of is verouderd, originele ontwikkelaars zijn vertrokken."
  }
];

const analyses = [
  {
    title: "Applicatie-architectuur",
    description: "Opzet, afhankelijkheden, schaalbaarheid en risico's."
  },
  {
    title: "Codekwaliteit & onderhoudbaarheid",
    description: "Structuur, complexiteit, testdekking en uitbreidbaarheid."
  },
  {
    title: "Performance & stabiliteit",
    description: "Bottlenecks, load-issues, foutgevoelige onderdelen en resource-gebruik."
  },
  {
    title: "Integraties & datastromen",
    description: "Koppelingen, API's, data-betrouwbaarheid en synchronisatie."
  },
  {
    title: "Security & risico's",
    description: "Praktische risico's, kwetsbaarheden en geen compliance-theorie."
  }
];

const deliverables = [
  "Helder inzicht in de technische staat van je applicatie",
  "Concrete verbeterpunten, geprioriteerd op impact",
  "Onderbouwd besluit: doorbouwen, herstructureren of vervangen",
  "Duidelijke vervolgstappen voor je team of externe partijen"
];

const targetAudience = [
  "Startups met een bestaand product",
  "MKB-bedrijven met maatwerksoftware",
  "Teams die willen opschalen maar vastlopen",
  "Organisaties die grip willen vóórdat problemen escaleren"
];

const werkwijze = [
  {
    step: "01",
    title: "Intake",
    description: "We bespreken je situatie, doelen en zorgen (gratis)."
  },
  {
    step: "02",
    title: "Analyse",
    description: "Gerichte analyse van code, architectuur en processen."
  },
  {
    step: "03",
    title: "Advies & prioriteiten",
    description: "Heldere conclusies en concrete aanbevelingen."
  },
  {
    step: "04",
    title: "Optioneel: begeleiding bij uitvoering",
    description: "Ik help bij implementatie of overdracht aan je team."
  }
];

const faqs = [
  {
    question: "Wat levert een IT-consultancy traject concreet op?",
    answer: "Helder inzicht in de technische staat van je applicatie, concrete verbeterpunten geprioriteerd op impact, en een onderbouwd besluit: doorbouwen, herstructureren of vervangen."
  },
  {
    question: "Hoe snel kun je knelpunten inzichtelijk maken?",
    answer: "Afhankelijk van de complexiteit: quickscan vaak binnen 1 week, diepgaande analyse 2–3 weken. Je krijgt tussentijdse updates om snel te kunnen schakelen."
  },
  {
    question: "Kun je ook alleen een second opinion doen?",
    answer: "Ja. Een second opinion is waardevol als je twijfelt aan huidige adviezen, een externe validatie wilt, of simply een frisse blik op je techniek."
  },
  {
    question: "Werk je met legacy systemen en bestaande teams?",
    answer: "Zeker. Legacy systemen zijn vaak precies waar advies waarde heeft. Ik werk met bestaande teams, help ze groeien en respecteer wat er al staat."
  },
  {
    question: "Helpt dit bij performance, security en schaalbaarheid?",
    answer: "Ja. Deze drie gebieden zijn kern van mijn analyse: performance bottlenecks, security risico's en schaalbaarheidsbeperkingen zijn wat ik systematisch identificeer."
  }
];

export default function ITConsultancyPage() {
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
            IT-consultancy
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            IT-consultancy &<br className="hidden lg:block" />
            <span className="text-white/70">applicatieadvies</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Je software werkt, maar voelt steeds moeilijker te onderhouden, uit te breiden of te vertrouwen.
            Vaak is niet direct duidelijk waar het probleem precies zit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Plan een gratis intake (15 min) →
            </Link>
            <Link href="/diensten" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk alle diensten
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wanneer IT-consultancy nodig */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="sr-only">IT-consultancy voor schaalbare software</h2>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer IT-consultancy nodig is
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                IT-consultancy is relevant wanneer je merkt dat:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {situations.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="flex gap-4 items-start">
                  <span className="material-icons text-accent flex-shrink-0">error_outline</span>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="max-w-4xl mx-auto mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                In deze fase worden beslissingen vaak uitgesteld, omdat de technische basis onvoldoende helder is.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wat ik analyseer */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Wat ik analyseer
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Geen algemene adviezen, maar een gerichte analyse van wat er écht toe doet:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {analyses.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <span className="material-icons text-emerald-600 text-2xl mb-2">search</span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Wat je krijgt
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <p className="text-slate-500 mb-8 text-center">Na een consultancy-traject heb je:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                  <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-5">
                    <span className="material-icons text-accent mt-0.5 flex-shrink-0">check_circle</span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-slate-700 leading-relaxed">
                  Geen rapport dat in een la verdwijnt, maar een actiegericht plan.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Voor wie deze dienst geschikt is
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {targetAudience.map((item, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                  <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-700">{item}</div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={500}>
              <p className="text-sm text-slate-500 mt-6 italic">
                Niet bedoeld voor organisaties die alleen een second opinion zoeken zonder opvolging.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Werkwijze
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {werkwijze.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="flex gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <FAQSchema faqs={faqs} />
      <FAQSection faqs={faqs} />

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Gerelateerde diensten
              </h2>
            </header>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <Link href="/diensten/fractional-cto" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-blue-600 text-3xl mb-2">psychology</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Fractional CTO</h3>
                <p className="text-sm text-slate-500">Technische strategie, architectuur en teamrichting.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/full-stack-development" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-purple-600 text-3xl mb-2">code</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Full-stack development</h3>
                <p className="text-sm text-slate-500">Web- en mobiele applicaties van MVP tot productie.</p>
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
              Twijfel je over de technische staat van je applicatie?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake. In 15 minuten maken we duidelijk of IT-consultancy op dit moment waardevol is — of niet.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                👉 Laat je applicatie beoordelen
              </Link>
              <p className="text-sm text-blue-200">
                Krijg inzicht vóór je gaat doorbouwen of herstructureren.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
