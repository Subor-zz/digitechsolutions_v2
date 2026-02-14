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

const tasks = [
  "Projectplanning en scope management",
  "Stakeholdermanagement en communicatie",
  "Release planning en coördinatie",
  "Risicomanagement en issue tracking",
  "Kwaliteitsbewaking en acceptatie",
  "Resource planning en budgetbewaking"
];

const scenarios = [
  {
    title: "Projecten lopen vertraging op",
    description: "Milestones worden gehaald, deadlines zijn onrealistisch en er is geen duidelijke voortgangsrapportage."
  },
  {
    title: "Stakeholders zijn niet op één lijn",
    description: "Verwachtingen verschillen tussen business, development en management, wat leidt tot conflicten en revisies."
  },
  {
    title: "Scope creep tijdens het project",
    description: "Requirements veranderen onderweg, geen formele change control en het project wordt groter dan gepland."
  },
  {
    title: "Onvoldoende grip op kwaliteit",
    description: "Geen gestructureerde testing, geen UAT-proces en oplevering voldoet niet aan verwachtingen."
  }
];

const steps = [
  {
    number: "01",
    title: "Initiatie en planning",
    description: "We definiëren projectdoelstellingen, scope, randvoorwaarden en een realistische planning met duidelijke mijlpalen."
  },
  {
    number: "02",
    title: "Uitvoering en monitoring",
    description: "Ik coördineer de uitvoering, bewaak voortgang, beheer risico's en houd stakeholders betrokken en geïnformeerd."
  },
  {
    number: "03",
    title: "Oplevering en evaluatie",
    description: "We zorgen voor een gestructureerde oplevering met acceptatie, evaluatie vanLessons learned en overdracht naar beheer."
  }
];

const faqs = [
  {
    question: "Wat zijn jouw tarieven als ZZP projectmanager?",
    answer: "Mijn tarief is afhankelijk van projectduur, complexiteit en verantwoordelijkheden. Neem contact op voor een maatwerkvoorstel."
  },
  {
    question: "Kun je ook scrum master of agile coach zijn?",
    answer: "Ik heb ervaring met agile werkwijzen en kan als scrum master, agile coach of projectmanager ondersteunen bij de transitie naar agile werken."
  },
  {
    question: "Hoe ga je om met scope creep?",
    answer: "Ik hanteer een formele change control procedure: wijzigingen worden beoordeeld op impact, kosten en worden vooraf goedgekeurd door stakeholders."
  },
  {
    question: "Wat gebeurt er na oplevering?",
    answer: "Na oplevering verzorg ik een projectevaluatie, documenteer ikLessons learned en kan optioneel begeleiding bieden bij overdracht naar beheer."
  }
];

export default function ITProjectManagerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        <Navigation />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 block opacity-0 animate-fade-in">
            Projectmanagement
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            IT Project Manager (ZZP) voor succesvolle IT-projecten
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Als ZZP IT projectmanager breng ik structuur, overzicht en grip op IT-projecten.
            Van planning tot oplevering, met focus op stakeholdermanagement en resultaat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Beschikbaarheid bespreken
            </Link>
            <Link href="/diensten/zzp-applicatiebeheerder" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk ook applicatiebeheer
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wat doet een ZZP IT Project Manager? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat doet een ZZP IT Project Manager?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Een projectmanager brengt structuur, coördinatie en overzicht in IT-projecten.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-accent flex-shrink-0 mt-0.5">check_circle</span>
                    <span className="text-slate-700">{task}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wanneer heb je een ZZP Project Manager nodig? */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een ZZP Project Manager nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Herken je een van de volgende situaties?
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{scenario.title}</h3>
                  <p className="text-slate-500">{scenario.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mijn aanpak */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mijn aanpak
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Een gestructureerde projectaanpak van initiatie tot oplevering.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <div className="flex gap-6 items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
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

      {/* Gerelateerde kernservices */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Gerelateerde kernservices
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Projectmanagement combineert goed met mijn beheerdiensten.
              </p>
            </header>
          </ScrollReveal>

          {/* Text links for SEO */}
          <ScrollReveal delay={100}>
            <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
              Zoek je ondersteuning voor je bestaande systemen? Bekijk ook mijn&nbsp;
              <Link href="/diensten/zzp-applicatiebeheerder" className="text-primary hover:underline font-medium">
                ZZP applicatiebeheer
              </Link>,&nbsp;
              <Link href="/diensten/zzp-functioneel-beheerder" className="text-primary hover:underline font-medium">
                functioneel beheer
              </Link>
              &nbsp;en&nbsp;
              <Link href="/diensten/support-itsm" className="text-primary hover:underline font-medium">
                support & ITSM
              </Link>&nbsp;diensten.
            </p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <Link href="/diensten/zzp-applicatiebeheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-purple-600 text-3xl mb-2">settings_applications</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Applicatiebeheerder</h3>
                <p className="text-sm text-slate-500">Incident- en change management voor stabiele applicaties.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/zzp-functioneel-beheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-blue-600 text-3xl mb-2">sync_alt</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Functioneel Beheerder</h3>
                <p className="text-sm text-slate-500">De brug tussen business en IT met requirements en wijzigingsbeheer.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/diensten/support-itsm" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-pink-600 text-3xl mb-2">support_agent</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Support & ITSM</h3>
                <p className="text-sm text-slate-500">SLA's, supportprocessen en incident/change management.</p>
              </Link>
            </ScrollReveal>
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
              Op zoek naar een ervaren ZZP projectmanager?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Neem contact op om beschikbaarheid te bespreken.
              Ik geef een eerlijke inschatting van wat ik voor jouw project kan betekenen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Beschikbaarheid bespreken
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
