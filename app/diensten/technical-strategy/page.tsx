'use client';

import { useScrollReveal } from '../../../components/scroll-reveal';
import FAQSection, { FAQSchema } from '../../../components/faq-section';
import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';
import Link from 'next/link';

// ScrollReveal wrapper component
function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, isIntersecting] = useScrollReveal();

  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  const baseClass = `scroll-reveal reveal-pending${isIntersecting ? ' revealed' : ''}${delayClass}`;

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}

const services = [
  {
    icon: 'architecture',
    title: 'Architectuurreview en optimalisatie',
    description: 'Diepgaande analyse van je huidige architectuur met concrete verbeterpunten.'
  },
  {
    icon: 'map',
    title: 'Technische roadmapontwikkeling',
    description: 'Een heldere roadmap die aansluit bij je groeifase en bedrijfsdoelen.'
  },
  {
    icon: 'layers',
    title: 'Stack evaluatie en keuzeadvies',
    description: 'Onafhankelijk advies over technologiekeuzes en tooling.'
  },
  {
    icon: 'code',
    title: 'Codebase analyse',
    description: 'Review van codekwaliteit, schaalbaarheid en onderhoudbaarheid.'
  },
  {
    icon: 'trending_up',
    title: 'Schaalbaarheidsanalyse',
    description: 'Inzicht in groeipaden en potentiële bottlenecks.'
  },
  {
    icon: 'warning',
    title: 'Risico-inschatting',
    description: 'Vroegtijdige identificatie van technische en strategische risico\'s.'
  },
];

const situations = [
  {
    number: "1",
    title: "Je product groeit sneller dan je architectuur",
    description: "Features worden snel toegevoegd, maar de technische basis kan de groei niet bijbenen."
  },
  {
    number: "2",
    title: "Je team maakt ad-hoc technische keuzes",
    description: "Er wordt veel gebouwd, maar zonder duidelijke standaarden of strategische lijn."
  },
  {
    number: "3",
    title: "Je weet niet of je stack toekomstbestendig is",
    description: "Twijfel over of huidige technologiekeuzes schalen naar de volgende fase."
  },
  {
    number: "4",
    title: "Je wilt technische schuld voorkomen",
    description: "Liever structureel investeren in kwaliteit dan later kostbaar refactoren."
  },
  {
    number: "5",
    title: "Je overweegt herbouw of migratie",
    description: "Belangrijke vragen over het beste moment en de juiste aanpak."
  },
  {
    number: "6",
    title: "Je zoekt een second opinion",
    description: "Onafhankelijke reflectie op bestaande plannen of architectuurvoorstellen."
  },
];

const werkwijze = [
  {
    step: "01",
    title: "Technische analyse",
    description: "We onderzoeken architectuur, codekwaliteit, deployment en schaalbaarheid."
  },
  {
    step: "02",
    title: "Strategisch advies",
    description: "Je ontvangt een heldere analyse met concrete aanbevelingen en prioriteiten."
  },
  {
    step: "03",
    title: "Begeleiding (optioneel)",
    description: "Ondersteuning bij implementatie of besluitvorming met je team."
  },
];

const faqs = [
  {
    question: "Wat is het verschil tussen IT consultancy en een fractional CTO?",
    answer: "Een fractional CTO neemt vaak volledige technische eindverantwoordelijkheid. IT consultancy richt zich op strategische begeleiding en technische richting, zonder volledige executive rol. Dat maakt de samenwerking flexibeler en schaalbaar."
  },
  {
    question: "Hoe lang duurt een consultancy traject?",
    answer: "Een quickscan of adviestraject duurt vaak 1–2 weken. Voor uitgebreide begeleiding werken we met een retainer model van 3–12 maanden, afhankelijk van je behoeften."
  },
  {
    question: "Werk je samen met bestaande teams?",
    answer: "Ja. IT consultancy is vaak juist waardevol in combinatie met een bestaand development team. Ik geef richting en help teams betere beslissingen nemen."
  },
  {
    question: "Kan je helpen bij due diligence of investeringsbeslissingen?",
    answer: "Ja. Ik lever onafhankelijke technische analyses met duidelijke risico-inschattingen en aanbevelingen."
  },
  {
    question: "Is er ook een optie voor implementatie?",
    answer: "Ja. Afhankelijk van je behoeften kan ik niet alleen adviseren, maar ook begeleiden bij de implementatie van technische veranderingen."
  }
];

export default function TechnicalStrategyPage() {
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
            IT Consultancy
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            IT Consultancy voor <br className="hidden lg:block" />
            <span className="text-white/70">schaalbare en toekomstbestendige systemen</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Technische groei vraagt om meer dan development alleen.<br />
            Het vraagt om duidelijke richting, doordachte architectuur en strategische keuzes.
          </p>
          <p className="max-w-2xl mx-auto text-blue-100/70 font-normal mb-12 opacity-0 animate-fade-in-up animation-delay-300 text-balance">
            Digitech Solutions helpt bedrijven bij het structureren en versterken van hun technische fundament.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
            <a
              href="mailto:info@digitechsolutions.nl?subject=Strategische%20Intake"
              className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg"
            >
              Plan een strategische intake
            </a>
            <Link
              href="/diensten"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all"
            >
              Bekijk alle diensten
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Wat houdt IT Consultancy in?
              </h2>
              <p className="text-blue-100/80 max-w-2xl mx-auto">
                Geen theoretische adviezen, maar praktische strategie die aansluit bij je team en groeifase.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <span className="material-icons text-white text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-blue-50/90 leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wanneer nodig */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="sr-only">Wanneer heb je IT consultancy nodig?</h2>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je IT consultancy nodig?
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {situations.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[#3b76e8] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                      {item.number}
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

      {/* Werkwijze */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-16">
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

      {/* Verschil met Fractional CTO */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-slate-100 shadow-xl">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  Verschil met een Fractional CTO
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Een fractional CTO neemt vaak volledige technische eindverantwoordelijkheid.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Digitech Solutions richt zich op strategische begeleiding en technische richting, zonder volledige executive rol. Dat maakt de samenwerking flexibel en schaalbaar.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Voor wie is dit geschikt?
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { title: 'Startups in vroege groeifase', description: 'Die technische richting nodig om op te schalen' },
              { title: 'Scale-ups zonder duidelijke technische strategie', description: 'Die extern klankbord zoeken voor strategische keuzes' },
              { title: 'Bedrijven met een tech lead', description: 'Die externe reflectie en second opinion waarderen' },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-all">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
      <FAQSchema faqs={faqs} />

      {/* CTA */}
      <section className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Wil je weten waar jouw technische fundament staat?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een strategische intake. We bespreken je situatie en ik geef direct eerste inzichten
              en aanbevelingen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@digitechsolutions.nl?subject=Strategische%20Intake"
                className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg"
              >
                Plan een strategische intake
              </a>
              <a
                href="mailto:info@digitechsolutions.nl?subject=Architectuurreview%20Aanvraag"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all"
              >
                Vraag een architectuurreview aan
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
