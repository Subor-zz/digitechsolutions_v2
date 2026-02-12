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
  "Vertalen van business requirements naar functionele specificaties",
  "Begeleiden van wijzigingsverzoeken (change management)",
  "Coördineren en uitvoeren van UAT",
  "Incidentanalyse en structurele verbeteringen",
  "Afstemming tussen gebruikers en IT",
  "Documentatie en procesoptimalisatie",
  "Ondersteuning bij implementaties en releases"
];

const scenarios = [
  {
    title: "Business en IT werken langs elkaar heen",
    description: "Requirements worden niet goed begrepen, de IT-oplossing sluit niet aan bij de praktijk en frustratie groeit aan beide kanten."
  },
  {
    title: "Ongecontroleerde wijzigingen",
    description: "Wijzigingen worden ad-hoc doorgevoerd zonder testproces, wat leidt tot regressiefouten en onvoorspelbaar gedrag."
  },
  {
    title: "Gebrek aan structuur",
    description: "Geen duidelijke change management processen, geen overzicht van openstaande verzoeken en geen prioriteitstelling."
  },
  {
    title: "Gebruikersproblemen zonder duidelijke oplossing",
    description: "Problemen worden gemeld maar niet systematisch aangepakt. Dezelfde issues blijven terugkomen."
  },
  {
    title: "Applicaties worden niet optimaal benut",
    description: "De tools zijn er, maar gebruikers werken er niet effectief mee door gebrek aan adoptiebegeleiding en documentatie."
  }
];

const steps = [
  {
    number: "01",
    title: "Analyse van huidige situatie",
    description: "Ik breng de huidige processen, applicatielandschap en knelpunten in kaart door middel van interviews en documentatieanalyse."
  },
  {
    number: "02",
    title: "Structuur en verbeterplan",
    description: "Op basis van de analyse stel ik een concreet plan op voor procesverbetering, prioriteiten en een roadmap."
  },
  {
    number: "03",
    title: "Implementatie en begeleiding",
    description: "We voeren het plan uit, ik begeleid veranderingen en zorg dat nieuwe werkwijzen landen bij het team."
  }
];

const faqs = [
  {
    question: "Wat kost een ZZP functioneel beheerder?",
    answer: "Mijn tarief is afhankelijk van de duur, scope en complexiteit van de opdracht. Neem contact op voor een maatwerkvoorstel op basis van jouw situatie."
  },
  {
    question: "Ben je inzetbaar op locatie of remote?",
    answer: "Ik werk zowel remote als op locatie. Voor de meeste sessies zoals workshops en UAT begeleiding is fysieke aanwezigheid vaak waardevol, maar voor analyses en documentatiewerk is remote efficiënt."
  },
  {
    question: "Werk je volgens ITIL?",
    answer: "Ja, ik heb ervaring met ITIL-processen en werkwijzen. Ik kan change management, incident management en service request processen inrichten volgens ITIL-principes, pragmatisch toegepast op jouw organisatie."
  },
  {
    question: "Kun je ondersteunen bij implementaties?",
    answer: "Zeker. Ik ondersteun bij software-implementaties, migraties en nieuwe applicatierolls-outs. Van het verzamelen van requirements tot het coördineren van UAT en de go-live begeleiding."
  }
];

export default function ZZPFunctioneelBeheerderPage() {
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
            ZZP Functioneel Beheer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            ZZP Functioneel Beheerder voor stabiele en gestructureerde IT-omgevingen
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Als senior ZZP functioneel beheerder vorm ik de brug tussen business en IT.
            Ik vertaal business requirements naar werkelijke oplossingen, breng structuur in wijzigingsprocessen
            en zorg dat applicaties doen wat gebruikers nodig hebben.
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

      {/* Wat doet een ZZP Functioneel Beheerder? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat doet een ZZP Functioneel Beheerder?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Een functioneel beheerder is de schakel tussen de business en de technische realisatie.
                Ik werk vanuit ITIL-ervaring en pragmatische inzetbaarheid.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600 | 700}>
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

      {/* Wanneer heb je een ZZP Functioneel Beheerder nodig? */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een ZZP Functioneel Beheerder nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Herken je een van de volgende situaties?
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
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
                Een gestructureerd proces dat werkt voor jouw organisatie.
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

      {/* Samenwerking en inzetbaarheid */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Samenwerking en inzetbaarheid
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Flexibele inzet op basis van jouw behoefte.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { title: "Interim", desc: "Tijdelijke vervanging of versterking van je functioneel beheer team." },
              { title: "Projectmatig", desc: "Gerichte inzet voor specifieke implementaties of migraties." },
              { title: "Migratieondersteuning", desc: "Begeleiding van overgang van oude naar nieuwe systemen." },
              { title: "Procesoptimalisatie", desc: "Analyse en verbetering van bestaande processen." },
              { title: "MKB", desc: "Pragmatische ondersteuning voor kleinere organisaties." },
              { title: "Scale-ups", desc: "Structuur brengen in groeiende applicatielandschappen." }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verschil tussen Functioneel Beheer en Applicatiebeheer */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Verschil tussen Functioneel Beheer en Applicatiebeheer
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Functioneel Beheer</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Richt zich op <strong>wat</strong> de applicatie moet doen voor de business.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Requirements en specificaties</li>
                    <li>• Procesinrichting</li>
                    <li>• Change management</li>
                    <li>• Gebruikersbegeleiding</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Applicatiebeheer</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Richt zich op <strong>hoe</strong> de applicatie technisch functioneert.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Updates en patches</li>
                    <li>• Performance monitoring</li>
                    <li>• Security en availability</li>
                    <li>• Technische configuratie</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <p className="text-slate-600 mb-4">
                  De rollen vullen elkaar aan. Voor compleet beheer combineer ik functioneel beheer met:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/diensten/zzp-applicatiebeheerder" className="px-5 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors">
                    ZZP Applicatiebeheerder →
                  </Link>
                  <Link href="/diensten/support-itsm" className="px-5 py-2 bg-emerald-100 text-emerald-800 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors">
                    IT Support & ITSM →
                  </Link>
                </div>
              </div>
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
              Op zoek naar een betrouwbare ZZP functioneel beheerder?
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
