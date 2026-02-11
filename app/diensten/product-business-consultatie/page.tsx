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
    title: "Je een productidee wilt valideren vóór ontwikkeling",
    description: "Je hebt een idee maar wilt weten of het technisch haalbaar is en wat het ongeveer kost voordat je gaat bouwen."
  },
  {
    title: "Onduidelijk is wat wel of niet in een MVP hoort",
    description: "Features blijven toenemen, scope vervaagt, en voor je het weet bouw je iets te complex."
  },
  {
    title: "Technische complexiteit wordt onderschat",
    description: "Wat simpel lijkt, is vaak complexer dan gedacht — met vertragingen en budgetoverschrijdingen als gevolg."
  },
  {
    title: "Teams te snel bouwen zonder duidelijke richting",
    description: "Er wordt ontwikkeld, maar zonder duidelijke requirements, roadmap of prioriteiten."
  }
];

const whatIDo = [
  {
    title: "Vertalen van ideeën naar concrete productvereisten",
    description: "Van ruw concept naar heldere PRD's en featurespecificaties."
  },
  {
    title: "Afbakenen van MVP-scope",
    description: "Wat is essentieel voor launch, wat kan wachten, en wat is nice-to-have."
  },
  {
    title: "Technische haalbaarheid en risico's",
    description: "Eerlijke inschatting van wat realistisch is binnen tijd en budget."
  },
  {
    title: "Prioritering van features",
    description: "Op basis van waarde, complexiteit en dependencies."
  },
  {
    title: "Koppeling tussen productkeuzes en technische impact",
    description: "Hoe productbeslissingen doorwerken in architectuur, development tijd en onderhoud."
  }
];

const deliverables = [
  "Duidelijkheid over wat je wel en niet moet bouwen",
  "Een onderbouwde MVP-scope",
  "Minder verspilde ontwikkeltijd",
  "Betere aansluiting tussen product en techniek"
];

const faqs = [
  {
    question: "Kun je helpen met MVP-scope en requirements?",
    answer: "Zeker. Ik help bij het vertalen van ideeën naar concrete productvereisten, PRD's en een duidelijke MVP-scope. Alles is technisch onderbouwd en realistisch."
  },
  {
    question: "Is dit business consultancy of product/tech validatie?",
    answer: "Geen algemene businessstrategie, maar product- en techvalidatie. Focus op wat te bouwen, of het haalbaar is, en hoe het technisch past."
  },
  {
    question: "Wat krijg ik na afloop (PRD, scope, roadmap)?",
    answer: "Afhankelijk van traject: PRD, feature-requirements, technische architectuurschets, MVP-scope, en/of een development roadmap met prioriteiten."
  },
  {
    question: "Hoe snel kan zo'n validatietraject?",
    answer: "Snel: vaak 1–2 weken voor MVP-scope en requirements. Complexere validatie met architectuur-implicaties: 2–4 weken."
  }
];

export default function ProductConsultatiePage() {
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
            Productconsultatie
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            Productconsultatie &<br className="hidden lg:block" />
            <span className="text-white/70">technische validatie</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Goede ideeën falen zelden op visie, maar vaak op onduidelijke scope en technische aannames.
            Productconsultatie helpt om ideeën om te zetten in concrete producten.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              👉 Valideer je productidee
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
                Wanneer deze dienst waarde toevoegt
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Deze consultatie is relevant wanneer:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {situations.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="flex gap-4 items-start">
                  <span className="material-icons text-accent flex-shrink-0">lightbulb</span>
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

      {/* Wat ik concreet help bepalen */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Wat ik concreet help bepalen
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Product & business consultatie richt zich op:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {whatIDo.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <span className="material-icons text-cyan-600 text-2xl mb-2">insights</span>
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
              <div className="mt-8 p-6 bg-cyan-50 rounded-xl border border-cyan-100">
                <p className="text-slate-700 leading-relaxed">
                  Minder tijd verspillen aan features die er niet toe doen. Meer focus op wat echt waarde toevoegt.
                </p>
              </div>
            </ScrollReveal>
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
                  Deze dienst wordt vrijwel altijd ingezet voor of naast:
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Link href="/diensten/full-stack-development" className="px-4 py-2 bg-purple-50 text-purple-800 rounded-lg text-sm hover:bg-purple-100 transition-colors">
                    Full-stack development
                  </Link>
                  <Link href="/diensten/fractional-cto" className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg text-sm hover:bg-blue-100 transition-colors">
                    Fractional CTO begeleiding
                  </Link>
                </div>
                <p className="text-sm text-slate-500 italic">
                  Het is een voortraject, geen losstaande consultancy.
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
              <Link href="/diensten/fractional-cto" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-blue-600 text-3xl mb-2">psychology</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Fractional CTO</h3>
                <p className="text-sm text-slate-500">Technische strategie, architectuur en teamrichting.</p>
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
              Heb je een productidee dat je wilt valideren?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake. We bespreken je idee, ik geef een eerlijke inschatting van haalbaarheid, scope en vervolgstappen.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                👉 Valideer je productidee
              </Link>
              <p className="text-sm text-blue-200">
                Maak scherp wat je wél en niet moet bouwen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
