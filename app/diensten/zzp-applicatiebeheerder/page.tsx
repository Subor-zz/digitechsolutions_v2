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
  "Incident- en probleemmanagement volgens ITIL",
  "Change management en release coördinatie",
  "Monitoring van applicatieperformance en beschikbaarheid",
  "Gebruikersbeheer, rechten en toegang",
  "Documentatie van configuraties en procedures",
  "Patch management en updates",
  "Back-up en recovery procedures"
];

const scenarios = [
  {
    title: "Applicaties zijn traag of onstabiel",
    description: "Geen inzicht in performance, geen proactieve monitoring en gebruikers ervaren vertragingen."
  },
  {
    title: "Wijzigingen leiden tot verrassingen",
    description: "Releases worden ad-hoc uitgevoerd, geen testproces en regressiefouten komen regelmatig voor."
  },
  {
    title: "Geen overzicht van incidenten",
    description: "Problemen worden niet geregistreerd, oorzaken blijven onduidelijk en dezelfde issues keren terug."
  },
  {
    title: "Onvoldoende kennisoverdracht",
    description: "Configuraties en procedures staan niet documenteerd, wat afhankelijkheid van personen creëert."
  },
  {
    title: "Gebruikers weten niet waar ze met vragen heen moeten",
    description: "Geen duidelijk supportproces, geen SLA-afspraken en wachttijden zijn onduidelijk."
  }
];

const steps = [
  {
    number: "01",
    title: "Analyse van huidige situatie",
    description: "Ik breng de huidige applicatielandschap, processen en knelpunten in kaart door middel van interviews en analyse van bestaande documentatie."
  },
  {
    number: "02",
    title: "Structuur en verbeterplan",
    description: "Op basis van de analyse stel ik een concreet plan op voor procesverbetering, prioriteiten en een roadmap."
  },
  {
    number: "03",
    title: "Implementatie en borging",
    description: "We voeren het plan uit, richten processen in en zorgen dat kennis wordt vastgelegd voor duurzame verbetering."
  }
];

const faqs = [
  {
    question: "Wat kost een ZZP applicatiebeheerder?",
    answer: "Mijn tarief is afhankelijk van de duur, scope en complexiteit van de opdracht. Neem contact op voor een maatwerkvoorstel op basis van jouw situatie."
  },
  {
    question: "Ben je inzetbaar op locatie of remote?",
    answer: "Ik werk zowel remote als op locatie. Voor incidentmanagement en kritieke situaties is fysieke aanwezigheid vaak waardevol, maar voor monitoring en documentatiewerk is remote efficiënt."
  },
  {
    question: "Met welke applicaties heb je ervaring?",
    answer: "Ik heb ervaring met diverse bedrijfsapplicaties, CRM-systemen, ERP-pakketten en maatwerk webapplicaties. De exacte applicatie is minder belangrijk dan de beheermethodiek."
  },
  {
    question: "Kun je tijdelijk vervanging bieden?",
    answer: "Zeker. Ik ben inzetbaar voor interim vervanging van zieke collega's, tijdens vakantieperiodes of terwijl je zoekt naar een structurele oplossing."
  }
];

export default function ZZPApplicatiebeheerderPage() {
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
            ZZP Applicatiebeheer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            ZZP Applicatiebeheerder
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">

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

      {/* Wat doet een ZZP Applicatiebeheerder? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat doet een ZZP Applicatiebeheerder?
              </h2>
            </header>
          </ScrollReveal>
        </div>
      </section>

      {/* Wanneer heb je een ZZP Applicatiebeheerder nodig? */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een ZZP Applicatiebeheerder nodig?
              </h2>
            </header>
          </ScrollReveal>
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
            </header>
          </ScrollReveal>
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
            </header>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
      <FAQSchema faqs={faqs} />

      {/* Call to Action */}
      <section className="py-20 md:py-24 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">

            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">

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
