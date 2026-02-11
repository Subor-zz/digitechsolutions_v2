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
    title: "Incidenten steeds opnieuw terugkomen",
    description: "Dezelfde problemen blijven zich voordoen omdat de oorzaak niet bij de bron wordt aangepakt."
  },
  {
    title: "Supportvragen te veel tijd kosten",
    description: "Ontwikkelteam wordt overspoeld door vragen, waardoor doorontwikkeling stil komt te liggen."
  },
  {
    title: "Niemand eigenaar is van problemen",
    description: "Issues vallen tussen wal en schip, verantwoordelijkheden zijn onduidelijk en escalatie ontbreekt."
  },
  {
    title: "Doorontwikkeling wordt verdrongen door brandjes",
    description: "Nieuwe features blijven liggen omdat alle tijd gaat naar ad-hoc fixes en incidenten."
  }
];

const whatIDo = [
  {
    title: "Opzetten van supportprocessen",
    description: "Van ticket intake tot escalation en resoltime."
  },
  {
    title: "Incident- en wijzigingsbeheer",
    description: "Gestructureerd aanpakken van incidenten en gecontroleerde veranderingen."
  },
  {
    title: "Duidelijke afspraken (SLA's)",
    description: "Response times, resolniveaus en verwachtingsmanagement."
  },
  {
    title: "Prioritering van issues",
    description: "Critical, high, medium, low — met bijbehorende flows."
  },
  {
    title: "Documentatie en kennisborging",
    description: "Knowledge bases, runbooks en onboarding."
  }
];

const results = [
  "Snellere responstijden",
  "Minder verstoringen",
  "Betere grip op doorontwikkeling",
  "Meer focus op groei"
];

const faqs = [
  {
    question: "Bied je ook SLA's en supportprocessen?",
    answer: "Ja. Ik help bij het opzetten van supportprocessen, SLA's met responstijden en resolutieniveaus, en duidelijke flows voor escalatie en prioriteit."
  },
  {
    question: "Doe je support alleen op software die je zelf bouwt?",
    answer: "Nee. Support & ITSM is ook waardevol voor bestaande software die door anderen is gebouwd. Ik help structuur aanbrengen, ongeacht de oorsprong."
  },
  {
    question: "Hoe richt je incident- en change management in?",
    answer: "Met gestructureerde processen: incident categorisatie, escalation routes, change advisory boards en rollback procedures. Pragmatisch, zwaar waar nodig."
  },
  {
    question: "Kun je support combineren met doorontwikkeling?",
    answer: "Zeker. Sterker nog: dat is vaak de beste combinatie. Support leert wat knelpunten zijn in de praktijk, die input ga je meenemen in doorontwikkeling."
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
            Support
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            Support &<br className="hidden lg:block" />
            <span className="text-white/70">IT-servicemanagement</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Na livegang begint het echte werk.
            Zonder duidelijke supportstructuur ontstaan ad-hoc fixes en onduidelijke verantwoordelijkheden.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              👉 Bespreek support & continuïteit
            </Link>
            <Link href="/diensten" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk alle diensten
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wanneer support & ITSM nodig is */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer support & ITSM nodig is
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Deze dienst is relevant wanneer:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {situations.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="flex gap-4 items-start">
                  <span className="material-icons text-accent flex-shrink-0">restart_alt</span>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wat deze dienst omvat */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Wat deze dienst omvat
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Support & ITSM richt zich op:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {whatIDo.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <span className="material-icons text-pink-600 text-2xl mb-2">support_agent</span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="max-w-4xl mx-auto mt-12 p-6 bg-pink-50 rounded-xl border border-pink-100">
              <p className="text-slate-700 leading-relaxed">
                Niet als helpdesk, maar als structurele ondersteuning.
              </p>
            </div>
          </ScrollReveal>
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
                  Deze dienst sluit logisch aan na:
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Link href="/diensten/full-stack-development" className="px-4 py-2 bg-purple-50 text-purple-800 rounded-lg text-sm hover:bg-purple-100 transition-colors">
                    Full-stack development
                  </Link>
                  <Link href="/diensten/it-consultancy" className="px-4 py-2 bg-emerald-50 text-emerald-800 rounded-lg text-sm hover:bg-emerald-100 transition-colors">
                    IT-consultancy
                  </Link>
                </div>
                <p className="text-sm text-slate-500 italic">
                  En is bedoeld om software gezond te houden, niet om losse tickets af te handelen.
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
              <Link href="/diensten/full-stack-development" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-purple-600 text-3xl mb-2">code</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Full-stack development</h3>
                <p className="text-sm text-slate-500">Web- en mobiele applicaties van MVP tot productie.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/it-consultancy" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-emerald-600 text-3xl mb-2">terminal</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT-consultancy</h3>
                <p className="text-sm text-slate-500">Applicatieanalyse, performance checks en integratieadvies.</p>
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
              Wil je rust en overzicht na livegang?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake. We bespreken je huidige situatie en ik geef een eerlijke inschatting van wat nodig is om support professioneel te organiseren.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                👉 Bespreek support & continuïteit
              </Link>
              <p className="text-sm text-blue-200">
                Rust en voorspelbaarheid na livegang.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
