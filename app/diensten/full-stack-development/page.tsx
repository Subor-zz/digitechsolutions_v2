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

const problems = [
  {
    title: "Vage requirements en scope creep",
    description: "Het doel is onduidelijk, features worden onderweg toegevoegd, en het project groeit uit tot iets anders dan gepland."
  },
  {
    title: "Slechte communicatie en rapportage",
    description: "Je hoort alleen van de ontwikkelaar als er facturen gestuurd worden, niet als er voortgang is — of problemen."
  },
  {
    title: "Technische schuld wordt opgebouwd",
    description: "Snelheid wint van kwaliteit, waardoor de codebase broos en onhoudbaar wordt."
  },
  {
    title: "Geen eigenaarschap na oplevering",
    description: "Als het project af is, verdwijnt de ontwikkelaar en blijf je achter met code die niemand begrijpt."
  }
];

const deliverables = [
  "Een werkend product, niet alleen code",
  "Duidelijke documentatie voor je team (of toekomstige developers)",
  "Hulp bij deployment en hosting",
  "Transitie naar onderhoud en doorontwikkeling"
];

const builds = [
  {
    title: "MVP's voor startups",
    description: "Snel valideren met een werkend product. Minimal viable, maximaal leervermogen."
  },
  {
    title: "Webapplicaties & platformen",
    description: "SaaS, dashboards, customer portals en interne tools."
  },
  {
    title: "API's en integraties",
    description: "REST/GraphQL API's, third-party koppelingen en data-pipelines."
  },
  {
    title: "Mobiele apps (React Native)",
    description: "iOS en Android in één codebase, native performance."
  },
  {
    title: "Automatisering & tools",
    description: "Workflow automation, bots, scripts en interne tooling."
  },
  {
    title: "Onderhoud & doorontwikkeling",
    description: "Existing codebases opschonen, uitbreiden of moderniseren."
  }
];

const techStack = [
  { category: "Frontend", items: "React · Next.js · TypeScript · Tailwind CSS" },
  { category: "Backend", items: "Node.js · Python · REST · GraphQL · PostgreSQL · MongoDB" },
  { category: "Mobile", items: "React Native · Expo · iOS · Android" },
  { category: "DevOps", items: "Docker · CI/CD · Vercel · AWS · GitHub Actions" }
];

const samenwerking = [
  {
    step: "01",
    title: "Intake",
    description: "We bespreken je idee, doelstellingen, budget en timeline (gratis)."
  },
  {
    step: "02",
    title: "Voorstel",
    description: "Je ontvangt een heldere offerte met scope, deliverables en planning."
  },
  {
    step: "03",
    title: "Development",
    description: "Korte sprints, regelmatige updates en tussentijdse demos."
  },
  {
    step: "04",
    title: "Oplevering & overdracht",
    description: "Productief deployment, documentatie en (optioneel) doorontwikkeling met je team."
  }
];

const faqs = [
  {
    question: "Kun je een MVP bouwen en later opschalen?",
    answer: "Ja. MVP's ontwikkel ik met schaalbaarheid in het achterhoofd: robuuste architectuur, schone code en moderne stack die met je meegroeit zonder complete herbouw."
  },
  {
    question: "Met welke technologieën werk je (web & mobile)?",
    answer: "Web: Next.js, React, TypeScript, Tailwind. Backend: Node.js, Python, PostgreSQL, MongoDB. Mobile: React Native voor iOS en Android in één codebase."
  },
  {
    question: "Hoe borg je kwaliteit en onderhoudbaarheid?",
    answer: "Schone code-architectuur, types met TypeScript, testing waar relevant, en altijd documentatie. Code schrijf ik alsof een ander developer hem morgen moet overnemen."
  },
  {
    question: "Doe je ook herbouw of refactor van bestaande software?",
    answer: "Zeker. Herbouw van legacy applicaties, refactoring voor performance, of moderniseren naar nieuwe stack — ik help met alle vormen van doorontwikkeling."
  },
  {
    question: "Kun je ook integraties en automatisering bouwen?",
    answer: "Ja. REST en GraphQL API's, third-party koppelingen, data-pipelines en workflow automation — van eenvoudig tot complex."
  }
];

export default function FullStackPage() {
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
            Development
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
            Full-stack<br className="hidden lg:block" />
            <span className="text-white/70">development</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Van MVP tot productie: webapps, mobiele apps en API's die werken.
            Ik ontwikkel voor startups en MKB in Nederland software die schaalbaar is.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="shimmer-btn animate-shimmer text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg">
              Plan een gratis intake →
            </Link>
            <Link href="/diensten" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-base transition-all">
              Bekijk alle diensten
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Waarom veel projecten vastlopen */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="sr-only">Full-stack development voor MVP's en groei</h2>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Waarom veel softwareprojecten vastlopen
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Software development is complex, maar problemen zijn vaak voorspelbaar:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {problems.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="flex gap-4 items-start">
                  <span className="material-icons text-accent flex-shrink-0">warning</span>
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
                Dit ontstaat niet door slechte intenties, maar door gebrek aan structuur, duidelijke afspraken en proactieve communicatie.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wat ik ontwikkel */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Wat ik ontwikkel
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Van eenvoudige tools tot complexe platformen:
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {builds.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <span className="material-icons text-purple-600 text-2xl mb-2">rocket_launch</span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Tech stack
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {techStack.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="flex gap-4 bg-slate-50 rounded-xl p-4">
                  <div className="w-28 flex-shrink-0">
                    <dt className="font-bold text-slate-900 text-sm">{item.category}</dt>
                  </div>
                  <dd className="flex-1">
                    <p className="text-sm text-slate-700">{item.items}</p>
                  </dd>
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
              <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
                <p className="text-slate-700 leading-relaxed">
                  Geen 'werkende' MVP die na twee maanden breekt. Ik ontwikkel voor de lange termijn, met een focus op kwaliteit en onderhoudbaarheid.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Samenwerking */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Samenwerking
              </h2>
            </header>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {samenwerking.map((item, index) => (
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
                <span className="material-icons text-emerald-600 text-3xl mb-2">terminal</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT-consultancy</h3>
                <p className="text-sm text-slate-500">Applicatieanalyse, performance checks en integratieadvies.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/diensten/support-itsm" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-pink-600 text-3xl mb-2">support_agent</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">Support & IT-servicemanagement</h3>
                <p className="text-sm text-slate-500">SLA's, supportprocessen en incident/change management.</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/diensten/projectmanagement" className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <span className="material-icons text-orange-600 text-3xl mb-2">assignment</span>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">IT-projectmanagement</h3>
                <p className="text-sm text-slate-500">Structuur, scope en voortgang voor softwareprojecten.</p>
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
              Heb je een softwareproject in gedachten?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake. We bespreken je idee, ik geef een eerlijke inschatting van mogelijkheden, scope en kosten — zonder verplichtingen.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                👉 Bespreek je MVP of productidee
              </Link>
              <p className="text-sm text-blue-200">
                Van idee naar schaalbare basis, zonder onnodige omwegen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
