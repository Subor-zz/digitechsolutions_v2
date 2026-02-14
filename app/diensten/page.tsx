'use client';

import { useScrollReveal } from '../components/scroll-reveal';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import ScrollToTop from '../components/scroll-to-top';
import Link from 'next/link';
import React from 'react';

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
  const baseClass = `scroll-reveal${isIntersecting ? ' revealed' : ''}${delayClass}`;

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}

// Spotlight Card Component
function SpotlightCard({ service }: { service: typeof servicesData[0] }) {
  const cardRef = React.useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <Link
      href={service.slug}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group relative bg-white p-10 rounded-[3rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(17,82,212,0.06)] hover:-translate-y-2 flex flex-col overflow-hidden cursor-pointer"
    >
      <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm relative z-10`}>
        <span className="material-icons text-3xl">{service.icon}</span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight relative z-10 text-left">{service.title}</h3>
      <p className="text-slate-500 mb-10 leading-relaxed font-medium relative z-10 text-left">
        {service.shortDescription}
      </p>

      <div className="mt-auto pt-8 border-t border-slate-100 relative z-10">
        <ul className="space-y-4">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-all group-hover:scale-125"></div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

const servicesData = [
  {
    id: 'zzp-applicatiebeheerder',
    title: 'ZZP Applicatiebeheerder',
    slug: '/diensten/zzp-applicatiebeheerder',
    shortDescription: 'Incident- en change management, monitoring, releases en gebruikersbeheer voor stabiele applicaties.',
    icon: 'settings_applications',
    points: ['Incident- en change management', 'Monitoring & performance', 'Releases & gebruikersbeheer'],
  },
  {
    id: 'zzp-functioneel-beheerder',
    title: 'ZZP Functioneel Beheerder',
    slug: '/diensten/zzp-functioneel-beheerder',
    shortDescription: 'Requirements, wijzigingsbeheer, UAT en procesoptimalisatie als brug tussen business en IT.',
    icon: 'manage_accounts',
    points: ['Requirements & analyse', 'Wijzigingsbeheer & UAT', 'Procesoptimalisatie & communicatie'],
  },
  {
    id: 'support-itsm',
    title: 'IT Support & ITSM',
    slug: '/diensten/support-itsm',
    shortDescription: '1e/2e lijns support, ITIL-processen, SLA\'s, ticketing en serviceverbetering.',
    icon: 'support_agent',
    points: ["SLA's, incident- en change management", 'Supportstructuur & tooling', 'Documentatie & kennisoverdracht'],
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    slug: '/diensten/full-stack-development',
    shortDescription: 'Van MVP tot productie-software: gebouwd op onderhoudbaarheid en schaalbaarheid. Geen "snelle hacks" die je later dubbel betaalt.',
    icon: 'code',
    points: ['Webapps (React / Next.js / TypeScript)', 'Mobile (React Native / Expo)', "API's, automatisering & integraties"],
  },
  {
    id: 'it-project-manager',
    title: 'IT Project Manager',
    slug: '/diensten/it-project-manager',
    shortDescription: 'Projectplanning, stakeholdermanagement, releases en delivery van IT-projecten.',
    icon: 'assignment',
    points: ['Roadmaps, sprints & scope control', 'Stakeholdermanagement', "Risico's, planning & voortgang"],
  },
  {
    id: 'productconsultatie',
    title: 'Productconsultatie & Technische Validatie',
    slug: '/diensten/productconsultatie',
    shortDescription: 'Snel valideren of je idee technisch en commercieel haalbaar is. Van requirements tot MVP-scope zodat je gericht bouwt.',
    icon: 'lightbulb',
    points: ["PRD's & featurespecificaties", 'MVP-definitie & haalbaarheid', 'Go-to-market input + tech plan'],
  },
];

const faqs = [
  {
    question: 'Voor welke type organisaties werk je?',
    answer: 'Ik werk voornamelijk voor startups, scale-ups en MKB-bedrijven die behoefte hebben aan technische expertise zonder de kosten van een fulltime CTO of development team. Ook werk ik voor gevestigde bedrijven die tijdelijke versterking zoeken bij specifieke technische projecten.',
  },
  {
    question: 'Werk je ook voor internationale klanten?',
    answer: 'Ja, ik werk remote-first en ben inzetbaar throughout de EU. Mijn basis is Breda, Nederland, maar fysieke aanwezigheid is afhankelijk van de afspraak en klantwens.',
  },
  {
    question: 'Hoe werkt de samenwerking in de praktijk?',
    answer: 'We starten met een intakegesprek om jouw behoeften en doelen te begrijpen. Op basis daarvan stel ik een voorstel op met duidelijke deliverables en timeline. Na akkoord gaan we aan de slag, met regelmatige check-ins en voortgangsrapportages.',
  },
  {
    question: 'Wat is de doorlooptijd voor een typisch project?',
    answer: 'Dit varieert sterk afhankelijk van scope en complexiteit. Een applicatie-audit duurt doorgaans 1-2 weken, een MVP ontwikkeling 6-12 weken, en ZZP inzetbaarheid loopt vaak voor langere tijd (maanden) met flexibele beschikbaarheid.',
  },
  {
    question: 'Kan je ook werken met ons bestaande team?',
    answer: 'Zeker. Ik werk vaak samen met interne teams, waarbij ik either leidinggeef, adviseer, of hands-on meewerk. De samenwerking wordt afgestemd op jullie behoeften en teamcultuur.',
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Structured Data for Services Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'IT-diensten | Digitech Solutions',
            description: 'Overzicht van alle IT-diensten: ZZP applicatiebeheer, functioneel beheer, IT support, full-stack development, projectmanagement en meer.',
            url: 'https://www.digitechsolutions.nl/diensten',
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - matching new design */}
        <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-gradient">
          {/* Animated blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 block opacity-0 animate-fade-in">
                Diensten
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
                IT-diensten die{' '}
                <br className="hidden lg:block" />
                <span className="text-white/70">strategie en uitvoering combineren</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
                ZZP inzetbaar voor applicatiebeheer, functioneel beheer en IT support.
                Flexibel inzetbaar voor bedrijven in heel Nederland en EU.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-48 bg-white relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/[0.02] blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <SpotlightCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>
          </div>
        </section>

        {/* For Who Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Voor wie werk ik?
                </h2>
              </header>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Startups',
                  description: 'Van MVP-ontwikkeling tot technische strategie. Ik help startups om snel en schaalbaar te bouwen.',
                  icon: '🚀',
                },
                {
                  title: 'Scale-ups',
                  description: 'Professionaliseer je development processen, architectuur en teamstructuur voor groei.',
                  icon: '📈',
                },
                {
                  title: 'MKB-bedrijven',
                  description: 'Flexibele technische expertise zonder de overhead van een fulltime team.',
                  icon: '🏢',
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Veelgestelde vragen
                </h2>
              </header>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500}>
                  <details className="bg-slate-50 rounded-xl group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                      <span className="material-icons text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 hero-gradient">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Klaar om te bespreken wat ik voor jouw organisatie kan betekenen?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Plan een gratis intake van 15 minuten en ontdek hoe we jouw technische uitdagingen kunnen aanpakken.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-full text-base"
              >
                Plan een gratis intake
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
