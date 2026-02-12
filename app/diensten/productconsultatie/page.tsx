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

const services = [
  "Haalbaarheidsanalyse en technische validatie",
  "Scope-bepaling en requirements analyse",
  "Risico-inventarisatie en mitiegatie",
  "Architectuur- en stack review",
  "Kwaliteits- en security assessment",
  "Go-to-market input voor technische producten"
];

const scenarios = [
  {
    title: "Onzekerheid over technische haalbaarheid",
    description: "Productvisie is helder, maar het is onduidelijk of en hoe het technisch realiseerbaar is."
  },
  {
    title: "Complexiteit wordt onderschat",
    description: "Projecten lopen vast op onverwachte technische uitdagingen die in een vroeg stadium hadden kunnen worden opgepakt."
  },
  {
    title: "Scope is niet duidelijk afgebakend",
    description: "Requirements zijn vaag, MVP is niet gedefinieerd en discussies vertragen de voortgang."
  },
  {
    title: "Technische risico's zijn in kaart gebracht",
    description: "Er is geen overzicht van mogelijke struikelblokken, security issues of schaalbaarheidsproblemen."
  }
];

const steps = [
  {
    number: "01",
    title: "Analyse en review",
    description: "Ik analyseer je productidee, review bestaande techniek (indien aanwezig) en breng risico's in kaart."
  },
  {
    number: "02",
    title: "Advies en roadmap",
    description: "Je ontvangt concreet advies over haalbaarheid, aanpak, scope en technische richtlijnen."
  },
  {
    number: "03",
    title: "Validatie en documentatie",
    description: "We documenteren de conclusies, afspraken en volgende stappen zodat je team verder kan met zekerheid."
  }
];

const faqs = [
  {
    question: "Wanneer is productconsultatie waardevol?",
    answer: "Voordat je gaat bouwen of investeren: bij nieuwe ideeën, voor investeringsbeslissingen, bij migraties of wanneer je een second opinion wilt."
  },
  {
    question: "Duurt een consultatie lang?",
    answer: "Afhankelijk van de diepte. Een quick-scan duurt 1-2 dagen, een uitgebreide validatie 3-5 dagen."
  },
  {
    question: "Kan je ook tijdens development betrokken blijven?",
    answer: "Ja. Na de consultatie kan ik optioneel betrokken blijven als adviseur of om de uitvoering te reviewen."
  },
  {
    question: "Is een consultatie geen geld weggegooid als ik later niet met jou samenwerk?",
    answer: "Nee. De waarde zit in het rapport dat je ontvangt - dat kun je gebruiken met elk development team."
  }
];

export default function ProductconsultatiePage() {
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
            Productconsultatie
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.1] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            Productconsultatie & Technische Validatie
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/90 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Voordat je gaat bouwen: weet wat haalbaar is, waar de risico's liggen en hoe je het slimst aanpakt.
            Ik help productideeën technische valideren voordat je investeert in development.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Start technische validatie
            </Link>
            <Link href="/diensten/zzp-applicatiebeheerder" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk ook applicatiebeheer
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wat omvat productconsultatie? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wat omvat productconsultatie?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Ik bied technische validatie en advies op diverse vlakken.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-3">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-accent flex-shrink-0 mt-0.5">verified</span>
                    <span className="text-slate-700">{service}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wanneer is productconsultatie nodig? */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer is productconsultatie nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Voorkom verrassingen tijdens development.
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
                Van analyse tot concreet advies in drie stappen.
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

      {/* Gerelateerde diensten */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Combineer met basis diensten
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Productconsultatie werkt goed als aanvulling op mijn beheerdiensten.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
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
              Productidee technisch valideren?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Voorkom verrassingen en onnodige investeringen.
              Neem contact op voor een technische review van je productidee.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start technische validatie
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
