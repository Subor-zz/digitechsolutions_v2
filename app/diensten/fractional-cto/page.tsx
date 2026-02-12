'use client';

import { useScrollReveal } from '../../components/scroll-reveal';
import FAQSection, { FAQSchema } from '../../components/faq-section';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';
import { RelatedArticles } from '../../components/related-articles';

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

const deliverables = [
  "Technologystack evaluatie (wat klopt, wat niet, wat is riskant)",
  "Architectuur & blauwdruk (schaalbaar en onderhoudbaar)",
  "Technische roadmap met prioriteiten en mijlpalen",
  "Build-or-buy analyse (wanneer bouwen, wanneer kopen)",
  "AI- en automatiseringsstrategie met use-cases en ROI-denken",
  "Due diligence rapportage (risico's, mitigatie, afhankelijkheden)",
  "Teamrichting & hiring advies (rollen, seniority, structuur)",
  "Vendor/toolselectie (pragmatisch en kostenbewust)",
];

const faqs = [
  {
    question: "Wat is een fractional CTO?",
    answer: "Een fractional CTO is een ervaren technische leider die op tijdelijke of deeltijdse basis werkt voor startups en MKB-bedrijven. Je krijgt senior expertise in strategie, architectuur en teamrichting zonder de kosten van een fulltime executive."
  },
  {
    question: "Wanneer kies je voor fractional CTO in plaats van een fulltime CTO?",
    answer: "Als je senior expertise nodig hebt voor richting en risicobeheersing, maar een fulltime executive te vroeg of te duur is. Ideaal voor startups in scale-up fase of MKB'ers met groeiambities."
  },
  {
    question: "Werk je samen met een bestaand development team?",
    answer: "Ja. Vaak is dat juist de kracht: ik geef richting, verbeter standaarden en help teams sneller en consistenter leveren."
  },
  {
    question: "Hoe ziet een traject er meestal uit (duur & deliverables)?",
    answer: "Quickscan/advies: vaak 1–2 weken met concrete aanbevelingen. Due diligence: 2–4 weken met risicoanalyse. Begeleiding scale-up: retainer 3–12 maanden met roadmap, architectuuradvies en teamcoaching."
  },
  {
    question: "Kun je helpen bij due diligence of fundraise voorbereiding?",
    answer: "Ja. Ik lever technische due diligence rapportages met risicoanalyse, afhankelijkheden en maturity-beoordeling. Waardevol voor investeerders, partners en fundraise voorbereiding."
  }
];

const situations = [
  {
    number: "1",
    title: "Je team bouwt, maar mist richting",
    description: "Er wordt veel gedaan, maar keuzes over architectuur, standaarden en prioriteiten blijven ad-hoc."
  },
  {
    number: "2",
    title: "Je product groeit en de basis kraakt",
    description: "Schaalbaarheid, performance, security of releasekwaliteit worden remmend."
  },
  {
    number: "3",
    title: "Je staat voor een fundraise, partnership of due diligence",
    description: "Investeerders/partners willen zekerheid: risico's, afhankelijkheden, roadmap en maturity."
  },
  {
    number: "4",
    title: "Je wilt AI/automatisering inzetten, maar zonder gokken",
    description: "Je zoekt een realistische AI-roadmap: wat levert waarde, wat is hype, wat is haalbaar."
  },
  {
    number: "5",
    title: "Je wilt sneller leveren zonder technische schuld op te bouwen",
    description: "Je wilt tempo, maar niet ten koste van onderhoudbaarheid."
  }
];

const werkwijze = [
  {
    step: "01",
    title: "Intake (gratis)",
    description: "We bespreken je situatie, doelen, huidige stack en grootste risico's (30–60 min)."
  },
  {
    step: "02",
    title: "Scope & voorstel",
    description: "Je ontvangt een voorstel met duidelijke scope, deliverables, planning en samenwerkingsvorm (project/retainer)."
  },
  {
    step: "03",
    title: "Uitvoering",
    description: "Hands-on begeleiding met vaste check-ins, korte feedbackloops en duidelijke beslismomenten."
  },
  {
    step: "04",
    title: "Oplevering & overdracht",
    description: "Je krijgt deliverables + actieplan + (optioneel) begeleiding bij implementatie met je team."
  }
];

export default function FractionalCTOPage() {
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
            Fractional CTO
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            Voor startups en <br className="hidden lg:block" />
            <span className="text-white/70">groeiende organisaties</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Je hebt senior technische sturing nodig, maar een fulltime CTO is (nog) niet logisch qua timing of kosten.
            Als fractional CTO help ik startups en MKB-bedrijven in Nederland met technische strategie, architectuurkeuzes,
            teamrichting en risicobeheersing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link
              href="/contact"
              className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg"
            >
              Plan een gratis intake (15 min)
            </Link>
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

      {/* Wanneer nodig */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="sr-only">Fractional CTO voor startups en MKB in Nederland</h2>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wanneer heb je een fractional CTO nodig?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Je herkent je waarschijnlijk in één (of meerdere) van deze situaties:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {situations.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center font-bold text-xl shadow-lg">
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

      {/* Wat je krijgt */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Wat je krijgt
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Geen advies op de hoogte — maar concrete deliverables die je team direct kan uitvoeren:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                  <span className="material-icons text-accent mt-0.5 flex-shrink-0">check_circle</span>
                  <span className="text-sm text-slate-700">{item}</span>
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
              <Link href="/diensten/it-consultancy" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-emerald-600 text-3xl mb-3">terminal</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT-consultancy & applicatieadvies</h3>
                <p className="text-sm text-slate-500">Applicatieanalyse, performance checks en integratieadvies.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/full-stack-development" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-purple-600 text-3xl mb-3">code</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Full-stack development</h3>
                <p className="text-sm text-slate-500">Web- en mobiele applicaties van MVP tot productie.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/diensten/projectmanagement" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-orange-600 text-3xl mb-3">assignment</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Technisch projectmanagement</h3>
                <p className="text-sm text-slate-500">Structuur, scope en voortgang voor IT-projecten.</p>
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
              Klaar om je technische strategie scherp te krijgen?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake van 15 minuten. In dat gesprek maken we snel duidelijk wat de grootste risico's zijn
              en welke route het meest logisch is.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                👉 Bespreek je technische richting
              </Link>
              <p className="text-sm text-blue-200">
                Voor wanneer beslissingen impact hebben op groei of investeringen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Blog Articles */}
      <RelatedArticles serviceId="fractional-cto" />

      <Footer />
    </div>
  );
}
