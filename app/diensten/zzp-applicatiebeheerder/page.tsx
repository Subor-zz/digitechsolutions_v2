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
  "Incident- en probleembeheer (incident & problem management)",
  "Monitoring van applicaties en performance",
  "Release- en deploymentondersteuning",
  "Configuratiebeheer",
  "Gebruikers- en autorisatiebeheer",
  "Analyse van verstoringen en structurele verbeteringen",
  "Samenwerking met functioneel beheer en development teams",
  "Documentatie en kennisborging",
  "Ondersteuning bij migraties en updates"
];

const scenarios = [
  {
    title: "Applicaties veroorzaken regelmatig verstoringen",
    description: "Incidenten vallen niet altijd op te lossen, oorzaken blijven onduidelijk en gebruikers ervaren continuïteitsproblemen."
  },
  {
    title: "Geen structureel incidentproces aanwezig",
    description: "Problemen worden ad-hoc opgepakt, niet geregistreerd en er is geen overzicht van terugkerende issues."
  },
  {
    title: "Kennis zit bij één persoon en vormt een risico",
    description: "Configuraties, procedures en workarounds staan niet gedocumenteerd wat de organisatie kwetsbaar maakt."
  },
  {
    title: "Achterstallige documentatie",
    description: "Er is geen actueel overzicht van de applicatieconfiguratie, procedures en wijzigingen."
  },
  {
    title: "Groei zonder beheerstructuur",
    description: "De applicatieomgeving groeit sneller dan het beheerproces, wat leidt tot ad-hoc oplossingen en verhoogde risico's."
  },
  {
    title: "Tijdelijke vervanging nodig",
    description: "Een collega is afwezig door ziekte of verloop en er is behoefte aan een ervaren vervanger."
  },
  {
    title: "Migratie of systeemwijziging in aantocht",
    description: "Er staat een migratie, upgrade of nieuwe implementatie gepland en er is extra beheercapaciteit nodig."
  }
];

const steps = [
  {
    number: "01",
    title: "Analyse van de huidige omgeving",
    description: "Ik onderzoek de applicatiearchitectuur, incidenthistorie, monitoring en logging, processtructuur en de samenwerking tussen teams. Doel: inzicht in risico's en knelpunten."
  },
  {
    number: "02",
    title: "Stabiliseren en structureren",
    description: "Verbeteren van incidentafhandeling, inrichten of optimaliseren van ITIL-processen, heldere taak- en verantwoordelijkheidsverdeling en verbeteren van communicatie tussen betrokken partijen. Doel: voorspelbare en beheersbare applicatieomgeving."
  },
  {
    number: "03",
    title: "Borging en overdracht",
    description: "Documentatie op orde brengen, procesbeschrijvingen vastleggen, kennisoverdracht aan interne medewerkers en verbeteradvies voor de lange termijn. Doel: duurzame continuïteit, ook na afloop van de opdracht."
  }
];

const faqs = [
  {
    question: "Wat kost een ZZP applicatiebeheerder?",
    answer: "Het tarief is afhankelijk van inzetduur en complexiteit van de omgeving. Neem contact op voor een indicatie en beschikbaarheid."
  },
  {
    question: "Werk je volgens ITIL?",
    answer: "Ja, ervaring met incident-, problem-, change- en release management volgens ITIL-principes."
  },
  {
    question: "Ben je inzetbaar voor korte opdrachten?",
    answer: "Ja, zowel korte stabilisatie-opdrachten als langere interim trajecten zijn mogelijk."
  },
  {
    question: "Kun je samenwerken met interne IT-teams?",
    answer: "Ja, samenwerking en kennisoverdracht maken standaard onderdeel uit van mijn werkwijze."
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
            ZZP Applicatiebeheerder voor stabiele en bedrijfskritische applicaties
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Op zoek naar een ervaren ZZP applicatiebeheerder die continuïteit, structuur en betrouwbaarheid brengt in uw IT-omgeving?
            Ik ondersteun organisaties bij het beheren, stabiliseren en optimaliseren van bedrijfsapplicaties.
          </p>
          <p className="max-w-3xl mx-auto text-base lg:text-lg text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Inzetbaar op interim- of projectbasis.
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
              <p className="text-slate-500 max-w-2xl mx-auto">
                Als applicatiebeheerder ben ik verantwoordelijk voor de technische stabiliteit en het operationele beheer van applicaties.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-accent flex-shrink-0 mt-0.5">check_circle</span>
                    <span className="text-slate-700">{task}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <ScrollReveal delay={900} className="mt-10 text-center">
            <p className="text-slate-500 max-w-2xl mx-auto italic">
              Ik werk gestructureerd volgens ITIL-principes waar van toepassing en zorg voor duidelijke overdracht en vastlegging.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Wanneer heeft u een ZZP Applicatiebeheerder nodig? */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heeft u een ZZP Applicatiebeheerder nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Een interim applicatiebeheerder is waardevol wanneer:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600 | 700}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{scenario.title}</h3>
                  <p className="text-slate-500">{scenario.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={800} className="mt-10 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-slate-700">
                In veel organisaties groeit de applicatieomgeving sneller dan het beheerproces. Dat leidt tot ad-hoc oplossingen en verhoogde risico's. Een ervaren applicatiebeheerder brengt rust en overzicht.
              </p>
            </div>
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

      {/* Verschil tussen Applicatiebeheer en Functioneel Beheer */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Verschil tussen Applicatiebeheer en Functioneel Beheer
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Applicatiebeheer</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Richt zich primair op de <strong>technische werking, stabiliteit en continuïteit</strong> van systemen.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Incident- en probleembeheer</li>
                    <li>• Monitoring en performance</li>
                    <li>• Configuratiebeheer</li>
                    <li>• Release- en deployment</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Functioneel Beheer</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Richt zich primair op de <strong>inhoudelijke aansluiting tussen applicatie en businessprocessen</strong>.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Requirements en specificaties</li>
                    <li>• Procesinrichting</li>
                    <li>• Change management</li>
                    <li>• Gebruikersbegeleiding</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <p className="text-slate-600 mb-4">
                  In veel organisaties werken beide rollen nauw samen. Bekijk ook:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/diensten/zzp-functioneel-beheerder" className="px-5 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                    ZZP Functioneel Beheerder →
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

      {/* Samenwerking en inzetbaarheid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Samenwerking en inzetbaarheid
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Beschikbaar als:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { title: "Interim ZZP applicatiebeheerder", desc: "Tijdelijke vervanging of versterking van je applicatiebeheer team." },
              { title: "Tijdelijke vervanging", desc: "Bij ziekte, verlof of tijdens wervingsprocessen." },
              { title: "Projectmatige ondersteuning", desc: "Gerichte inzet voor specifieke projecten of migraties." },
              { title: "Ondersteuning bij migratie of implementatie", desc: "Begeleiding van overgang van oude naar nieuwe systemen." },
              { title: "Stabilisatie van bestaande IT-omgevingen", desc: "Ad-hoc situatie structureel oplossen en verbeteren." },
              { title: "MKB en scale-ups", desc: "Inzetbaar binnen MKB, scale-ups en grotere organisaties met bedrijfskritische applicaties." }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={700} className="mt-10 text-center">
            <p className="text-slate-500 max-w-2xl mx-auto">
              Remote en op locatie mogelijk in overleg.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gerelateerde diensten */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Gerelateerde diensten
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <Link href="/diensten/zzp-functioneel-beheerder" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-blue-600 text-3xl mb-2">sync_alt</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">ZZP Functioneel Beheerder</h3>
                <p className="text-sm text-slate-500">De brug tussen business en IT met requirements, wijzigingsbeheer en UAT.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/support-itsm" className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-emerald-600 text-3xl mb-2">support_agent</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT Support & ITSM</h3>
                <p className="text-sm text-slate-500">1e/2e lijns support, ITIL-processen en serviceverbetering.</p>
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
              Op zoek naar een betrouwbare ZZP applicatiebeheerder?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Neem contact op om beschikbaarheid te bespreken of een CV op te vragen.
              Ik geef een eerlijke inschatting van wat ik voor uw organisatie kan betekenen.
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
