'use client';

import Link from 'next/link';
import Navigation from './components/navigation';
import Footer from './components/footer';
import ScrollToTop from './components/scroll-to-top';
import React from 'react';

// Kernpijlers data (Primary services)
const primaryServicesData = [
  {
    id: 'applicatiebeheerder',
    title: 'ZZP Applicatiebeheerder',
    slug: '/diensten/zzp-applicatiebeheerder',
    shortDescription: 'Incident- en change management, monitoring, releases en gebruikersbeheer voor stabiele applicaties.',
    icon: 'settings_applications',
    points: ['Incident- & probleemmanagement', 'Change management & releases', 'Monitoring & performance'],
  },
  {
    id: 'functioneel-beheerder',
    title: 'ZZP Functioneel Beheerder',
    slug: '/diensten/zzp-functioneel-beheerder',
    shortDescription: 'De brug tussen business en IT. Requirements, wijzigingsbeheer, UAT en procesoptimalisatie.',
    icon: 'sync_alt',
    points: ['Requirements & specificaties', 'Wijzigingsbeheer', 'UAT begeleiding'],
  },
  {
    id: 'support-itsm',
    title: 'Support & ITSM',
    slug: '/diensten/support-itsm',
    shortDescription: '1e/2e lijns support, ITIL-processen, SLA\'s en serviceverbetering voor professionele IT-organisatie.',
    icon: 'support_agent',
    points: ['ITIL service management', 'SLA & ticketing', 'Processen & workflows'],
  },
];

// Aanvullende expertise (Secondary services)
const secondaryServicesData = [
  {
    id: 'full-stack',
    title: 'Full Stack Developer',
    slug: '/diensten/full-stack-development',
    shortDescription: 'Webapplicaties, API\'s en automatisering met moderne stack.',
    icon: 'code',
  },
  {
    id: 'project-manager',
    title: 'IT Project Manager',
    slug: '/diensten/it-project-manager',
    shortDescription: 'Planning, stakeholders, releases en delivery van IT-projecten.',
    icon: 'assignment',
  },
  {
    id: 'productconsultatie',
    title: 'Productconsultatie & Technische Validatie',
    slug: '/diensten/productconsultatie',
    shortDescription: 'Haalbaarheid, scope, risico\'s en technische review van productideeën.',
    icon: 'verified',
  },
];

// Werkwijze stappen
const werkwijzeData = [
  {
    number: '01',
    title: 'Intake & scope',
    description: 'We bespreken de huidige situatie, knelpunten en doelstellingen. Ik breng de scope in kaart en geef een eerlijk advies.',
    icon: 'fact_check',
  },
  {
    number: '02',
    title: 'Stabiliseren & verbeteren',
    description: 'Ik ga aan de slag met gestructureerde aanpak: incidenten oplossen, processen inrichten en documentatie opbouwen.',
    icon: 'build',
  },
  {
    number: '03',
    title: 'Overdracht & documentatie',
    description: 'Kennis wordt vastgelegd, processen zijn geborgd en je team kan zelfstandig verder. Optionele nazorg op afstand.',
    icon: 'description',
  },
];

// Voor wie data
const voorWieData = [
  {
    icon: 'business',
    title: 'MKB-bedrijven',
    description: 'Die professioneel IT-beheer nodig hebben zonder fulltime beheerder in dienst.',
  },
  {
    icon: 'trending_up',
    title: 'Scale-ups',
    description: 'Die structuur nodig hebben in groeiende applicatielandschappen en processen.',
  },
  {
    icon: 'corporate_fare',
    title: 'Organisaties met bedrijfsapplicaties',
    description: 'Die grip willen op kritische applicaties, support en continue verbetering.',
  },
  {
    icon: 'groups',
    title: 'IT-teams',
    description: 'Die tijdelijke versterking of specifieke expertise nodig hebben.',
  },
];

// Spotlight Card Component
function SpotlightCard({ service, onNavigate }: { service: typeof primaryServicesData[0]; onNavigate: (slug: string) => void }) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={() => onNavigate(service.slug)}
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
            <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-600 group-hover:text-slate-500 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-all group-hover:scale-125"></div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
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
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[12px] font-bold tracking-widest uppercase mb-10 backdrop-blur-xl opacity-0 animate-fade-in shadow-2xl">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Beschikbaar voor nieuwe opdrachten
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
                ZZP Applicatiebeheerder &<br className="hidden lg:block" />
                <span className="text-white/80"> Functioneel Beheerder</span>
              </h1>

              {/* Hero Subtitle */}
              <p className="max-w-3xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-6 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
                Voor stabiele IT-omgevingen
              </p>

              <p className="max-w-3xl mx-auto text-base lg:text-lg text-blue-100/70 font-normal mb-12 opacity-0 animate-fade-in-up animation-delay-300 leading-relaxed text-balance">
                Inzetbaar als senior applicatiebeheerder, functioneel beheerder of IT support specialist.
                Ik help MKB, scale-ups en organisaties met bedrijfsapplicaties bij stabiliteit, procesoptimalisatie en professioneel beheer.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up animation-delay-500">
                <Link
                  href="/contact"
                  className="shimmer-btn animate-shimmer text-white text-lg px-12 py-5 rounded-[1.25rem] font-bold shadow-[0_20px_60px_rgba(245,158,11,0.4)] w-full sm:w-auto hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center justify-center"
                >
                  Beschikbaarheid bespreken
                </Link>
                <Link
                  href="#diensten"
                  className="px-10 py-5 rounded-[1.25rem] text-white font-bold border-2 border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto text-center"
                >
                  Bekijk expertise
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 via-40% to-transparent"></div>
        </section>

        {/* Kernpijlers Section - Primary Services */}
        <section id="diensten" className="py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/[0.02] blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl text-left">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Expertise</span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter leading-[1.1]">
                  ZZP <span className="text-primary">Applicatiebeheerder</span> &<br />Functioneel Beheerder
                </h2>
                <p className="mt-6 text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                  Focus op stabiliteit, processen en support voor bedrijfsapplicaties.
                  Als ervaren <Link href="/diensten/zzp-applicatiebeheerder" className="text-primary hover:text-accent underline underline-offset-2 decoration-2 underline-primary/30 transition-all">ZZP applicatiebeheerder</Link> breng ik rust en continuïteit in uw IT-omgeving.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {primaryServicesData.map((service) => (
                <SpotlightCard
                  key={service.id}
                  service={service}
                  onNavigate={(slug) => (window.location.href = slug)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Aanvullende Expertise Section - Secondary Services */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Aanvullend</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tighter mb-6">
                Bredere inzetbaarheid
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Naast beheer en support, breng ik expertise in development, projectmanagement en productvalidatie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {secondaryServicesData.map((service) => (
                <Link key={service.id} href={service.slug} className="block bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-icons text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Werkwijze Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Werkwijze</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-6">
                Hoe ik werk
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {werkwijzeData.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-6xl font-black text-slate-100">{step.number}</span>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="material-icons text-primary text-2xl">{step.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                  {index < werkwijzeData.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-slate-200">
                      <span className="material-icons text-4xl">arrow_forward</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voor Wie Section */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Voor Wie</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-6">
                Voor wie ik werk
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {voorWieData.map((audience, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white mb-6 shadow-sm transition-all">
                    <span className="material-icons text-3xl">{audience.icon}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">{audience.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
              Beschikbaar
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight">
              Op zoek naar een betrouwbare ZZP<br />applicatiebeheerder of functioneel beheerder?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Neem contact op om beschikbaarheid te bespreken. Ik geef een eerlijke inschatting van wat ik voor jouw organisatie kan betekenen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="shimmer-btn animate-shimmer text-white text-lg px-12 py-5 rounded-[1.25rem] font-bold shadow-[0_20px_60px_rgba(245,158,11,0.4)] w-full sm:w-auto hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center justify-center"
              >
                Beschikbaarheid bespreken
              </Link>
              <Link
                href="/over-mij"
                className="px-10 py-5 rounded-[1.25rem] text-slate-300 font-bold border-2 border-slate-600 hover:border-white hover:text-white transition-all w-full sm:w-auto text-center"
              >
                Meer over mij
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm mt-12">
              <div className="flex items-center gap-2">
                <span className="material-icons text-accent">check_circle</span>
                <span>9+ Jaar IT-ervaring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-accent">check_circle</span>
                <span>ZZP - Flexibele inzet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-accent">check_circle</span>
                <span>Remote & Op locatie</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
