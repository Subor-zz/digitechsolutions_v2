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
    title: "Softwareontwikkeling uitloopt of vastloopt",
    description: "Deadlines worden gemist, features worden niet opgeleverd en de roadmap is een wenslijst in plaats van een plan."
  },
  {
    title: "Planning en realiteit lopen uit elkaar",
    description: "Schattingen zijn te optimistisch, scope verandert onderweg en niemand weet meer wat er wanneer wordt opgeleverd."
  },
  {
    title: "Stakeholders langs elkaar heen werken",
    description: "Business vraagt het ene, development bouwt het andere, en de verwachtingen kloppen niet meer."
  },
  {
    title: "Beslissingen zonder technisch overzicht",
    description: "Keuzes worden gemaakt op basis van aannames, niet op technische realiteit — met verrassingen als gevolg."
  }
];

const whatIDo = [
  {
    title: "Opzetten en bewaken van roadmaps",
    description: "Heldere planning met realistische mijlpalen en deliverables."
  },
  {
    title: "Structureren van scope en prioriteiten",
    description: "Scope control, impactanalyse en trade-off beslissingen."
  },
  {
    title: "Afstemming tussen business en development",
    description: "Brugfunctie tussen wat business wil en wat development kan leveren."
  },
  {
    title: "Agile/scrum begeleiding waar passend",
    description: "Sprint planning, stand-ups, reviews en retrospectives."
  },
  {
    title: "Signaleren van risico's vóór ze escaleren",
    description: "Proactief identificeren en mitigeren van blokkades en risico's."
  }
];

const results = [
  "Meer voorspelbaarheid",
  "Betere besluitvorming",
  "Minder miscommunicatie",
  "Projecten die beheersbaar blijven"
];

const faqs = [
  {
    question: "Doe je ook agile/scrum begeleiding?",
    answer: "Ja. Agile en scrum passen bij veel softwareprojecten. Ik help met sprint planning, stand-ups, reviews en retrospectives — maar alleen als het waarde toevoegt voor je team."
  },
  {
    question: "Hoe voorkom je scope creep?",
    answer: "Door heldere scope-definitie vooraf, impactanalyse bij wijzigingen en trade-off beslissingen. Scope verandert altijd, maar met structuur blijft het beheersbaar."
  },
  {
    question: "Werk je samen met interne stakeholders en externe bureaus?",
    answer: "Zeker. Mijn rol is vaak brugfunctie: interne stakeholders alignment, externe bureaus aansturen, en zorgen dat iedereen op dezelfde lijn zit."
  },
  {
    question: "Wat is het verschil tussen technisch PM en standaard PM?",
    answer: "Technisch PM begrijpt implications van technische keuzes, kan inschattingen valideren en gesprekken voeren met developers op hun niveau. Generieke PM mist die context."
  }
];

export default function ProjectmanagementPage() {
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
            Projectmanagement
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            Technisch<br className="hidden lg:block" />
            <span className="text-white/70">projectmanagement</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            IT-projecten mislukken zelden door techniek alleen.
            Ze lopen vast door onduidelijke scope, slechte afstemming en gebrek aan technisch inzicht.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              👉 Bespreek je projectstructuur
            </Link>
            <Link href="/diensten" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk alle diensten
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wanneer relevant */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer deze dienst relevant is
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Deze dienst is bedoeld voor situaties waarin:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {situations.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="flex gap-4 items-start">
                  <span className="material-icons text-accent flex-shrink-0">report_problem</span>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="max-w-4xl mx-auto mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                Vaak gebeurt dit in projecten waar techniek en business onvoldoende op elkaar zijn afgestemd.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wat ik concreet doe */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Wat ik concreet doe
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Mijn rol is niet die van een generieke projectmanager, maar van technisch onderlegd projectmanagement:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {whatIDo.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <span className="material-icons text-orange-600 text-2xl mb-2">task_alt</span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resultaat */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Resultaat
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {results.map((item, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                  <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-5">
                    <span className="material-icons text-accent mt-0.5 flex-shrink-0">check_circle</span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positionering */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Positionering
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Deze dienst wordt vaak ingezet naast:
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Link href="/diensten/fractional-cto" className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg text-sm hover:bg-blue-100 transition-colors">
                    Fractional CTO
                  </Link>
                  <Link href="/diensten/full-stack-development" className="px-4 py-2 bg-purple-50 text-purple-800 rounded-lg text-sm hover:bg-purple-100 transition-colors">
                    Full-stack development
                  </Link>
                </div>
                <p className="text-sm text-slate-500 italic">
                  Niet als losstaande PM-dienst, maar als verlengstuk van techniek.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
      <FAQSchema faqs={faqs} />

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
              Loopt je project vast of wil je structuur vooraf?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake. We bespreken je situatie en ik geef een eerlijke inschatting van wat nodig is om het project weer op koers te krijgen.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                👉 Breng structuur in je project
              </Link>
              <p className="text-sm text-blue-200">
                Voor IT-projecten die grip en overzicht missen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
