'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './components/navigation';
import Footer from './components/footer';
import ScrollToTop from './components/scroll-to-top';
import TechStack from './components/tech-stack';

// Service data - keeping v1 content but with v2 structure
const servicesData = [
  {
    id: 'fractional-cto',
    title: 'Fractional CTO',
    slug: '/diensten/fractional-cto',
    shortDescription: 'Senior technische sturing zonder fulltime CTO. Ideaal als je moet kiezen: architectuur, roadmap, teamrichting of AI.',
    icon: 'psychology',
    accent: 'from-blue-400 to-primary',
    points: ['Architectuur & technische roadmap', 'Teamrichting, hiring & standards', 'Due diligence & risicobeheersing'],
  },
  {
    id: 'it-consultancy',
    title: 'IT-consultancy',
    slug: '/diensten/it-consultancy',
    shortDescription: 'Je applicatie werkt, maar onderhoud, performance of stabiliteit begint te knellen. Ik maak snel zichtbaar waar de bottleneck zit.',
    icon: 'terminal',
    accent: 'from-emerald-400 to-emerald-600',
    points: ['Applicatie- & architectuuranalyse', 'Performance & security quickscan', 'Integratie- en migratieadvies'],
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    slug: '/diensten/full-stack-development',
    shortDescription: 'Van MVP tot productie-software: gebouwd op onderhoudbaarheid en schaalbaarheid. Geen "snelle hacks" die je later dubbel betaalt.',
    icon: 'code',
    accent: 'from-purple-400 to-purple-600',
    points: ['Webapps (React / Next.js / TypeScript)', 'Mobile (React Native / Expo)', "API's, automatisering & integraties"],
  },
  {
    id: 'projectmanagement',
    title: 'Projectmanagement',
    slug: '/diensten/projectmanagement',
    shortDescription: 'Projecten ontsporen zelden door code — meestal door scope, planning en communicatie. Ik breng structuur én technische inhoud.',
    icon: 'assignment',
    accent: 'from-orange-400 to-accent',
    points: ['Roadmaps, sprints & scope control', 'Stakeholdermanagement', 'Risico\'s, planning & voortgang'],
  },
  {
    id: 'product-business-consultatie',
    title: 'Productconsultatie',
    slug: '/diensten/product-business-consultatie',
    shortDescription: 'Snel valideren of je idee technisch en commercieel haalbaar is. Van requirements tot MVP-scope zodat je gericht bouwt.',
    icon: 'lightbulb',
    accent: 'from-cyan-400 to-cyan-600',
    points: ['PRD\'s & featurespecificaties', 'MVP-definitie & haalbaarheid', 'Go-to-market input + tech plan'],
  },
  {
    id: 'support-itsm',
    title: 'Support & ITSM',
    slug: '/diensten/support-itsm',
    shortDescription: 'Als je software live is, wil je rust: duidelijke supportflows, minder incidenten en voorspelbare doorontwikkeling.',
    icon: 'support_agent',
    accent: 'from-pink-400 to-pink-600',
    points: ["SLA's, incident- en change management", 'Supportstructuur & tooling', 'Documentatie & kennisoverdracht'],
  },
];

// Spotlight Card Component
function SpotlightCard({ service, onNavigate }: { service: typeof servicesData[0]; onNavigate: (slug: string) => void }) {
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
            <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-all group-hover:scale-125"></div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Import React for useRef
import React from 'react';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
                Nu beschikbaar voor nieuwe projecten
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white tracking-tighter mb-6 leading-[1.05] text-balance opacity-0 animate-fade-in-up animation-delay-100">
                IT-consultancy & <br className="hidden lg:block" />
                <span className="text-white/70">Full-Stack Development</span>
              </h1>

              {/* Hero Subtitle */}
              <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80 font-medium mb-12 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
                Strategisch IT-advies, fractional CTO-ondersteuning en schaalbare softwareontwikkeling.
                Voor teams die sneller willen bouwen zonder technische chaos.
              </p>

              {/* Rotating Service Cards */}
              <div className="relative w-full max-w-4xl mx-auto h-[280px] sm:h-[220px] mb-16 opacity-0 animate-fade-in-up animation-delay-300">
                {servicesData.slice(0, 6).map((service, idx) => (
                  <Link
                    key={service.id}
                    href={service.slug}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform flex flex-col items-center justify-center w-full ${
                      idx === activeIndex
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 sm:p-10 w-full shadow-2xl flex flex-col sm:flex-row items-center gap-8 group text-left">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:rotate-6 transition-transform`}>
                        <span className="material-icons text-4xl">{service.icon}</span>
                      </div>
                      <div className="text-center sm:text-left flex-grow">
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">{service.title}</h3>
                        <p className="text-blue-50/70 text-base sm:text-lg leading-relaxed font-medium">
                          {service.shortDescription}
                        </p>
                      </div>
                      <div className="hidden lg:block">
                        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all shadow-lg">
                          <span className="material-icons">arrow_forward</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                {/* Dots indicator */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                  {servicesData.slice(0, 6).map((_, idx) => (
                    <button
                      key={`dot-${idx}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx === activeIndex ? 'w-10 bg-accent' : 'w-3 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Ga naar slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up animation-delay-400">
                <a
                  href="mailto:info@digitechsolutions.nl?subject=Gratis%20Intake%20Gesprek"
                  className="shimmer-btn animate-shimmer text-white text-lg px-12 py-5 rounded-[1.25rem] font-bold shadow-[0_20px_60px_rgba(245,158,11,0.4)] w-full sm:w-auto hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center justify-center"
                >
                  Plan een gratis intake
                </a>
                <a
                  href="#services"
                  className="px-10 py-5 rounded-[1.25rem] text-white font-bold border-2 border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto text-center"
                >
                  Bekijk diensten
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100 text-sm mt-12 opacity-0 animate-fade-in-up animation-delay-500">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-accent">check_circle</span>
                  <span>9+ Jaar IT-ervaring</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-accent">check_circle</span>
                  <span>11 Jaar Finance & Banking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-accent">check_circle</span>
                  <span>Remote-First, EU-gebaseerd</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 via-40% to-transparent"></div>
        </section>

        {/* Tech Stack - Scrolling Logos */}
        <TechStack />

        {/* Value Proposition Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Wat je krijgt</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Praktische oplossingen zonder onnodige complexiteit
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <span className="material-icons text-2xl">checklist</span>,
                  title: 'Duidelijke roadmap',
                  description: 'Concrete prioriteiten en mijlpalen die direct bijdragen aan je bedrijfsdoelen',
                },
                {
                  icon: <span className="material-icons text-2xl">speed</span>,
                  title: 'Sneller releases',
                  description: 'Betere kwaliteit en kortere time-to-market door efficiënte processen',
                },
                {
                  icon: <span className="material-icons text-2xl">security</span>,
                  title: 'Minder technische schuld',
                  description: 'Schone architectuur en onderhoudbare code die meeschaalt met je organisatie',
                },
                {
                  icon: <span className="material-icons text-2xl">psychology</span>,
                  title: 'Betere beslissingen',
                  description: 'Onderbouwde adviezen over build/buy, stack en team',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 lg:py-20 bg-white relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/[0.02] blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
              <div className="max-w-2xl text-left">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Capabilities</span>
                <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.1]">
                  Onze <span className="text-primary-light">Expertise</span>
                </h2>
                <p className="mt-8 text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                  Pragmatisch advies gecombineerd met diepe technische uitvoering voor complexe digitale uitdagingen.
                </p>
              </div>
              <Link
                href="/diensten"
                className="inline-flex items-center gap-4 font-black text-slate-900 group uppercase tracking-widest text-xs"
              >
                Alle diensten
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                  <span className="material-icons text-sm">arrow_forward</span>
                </div>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <SpotlightCard
                  key={service.id}
                  service={service}
                  onNavigate={(slug) => (window.location.href = slug)}
                />
              ))}
            </div>

            {/* Mini CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent underline transition-colors"
              >
                Niet zeker welke dienst past? Plan een gratis intake (15 min) →
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-[2.5rem] p-10 lg:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                    Transparantie
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Transparante tarieven, <br className="hidden sm:block" />
                    <span className="text-primary">geen verrassingen</span>
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Wij werken met vaste uurtarieven en projectprijzen die vooraf worden afgestemd. De investering hangt af van de complexiteit, looptijd en het type dienst. Alle prijzen zijn indicatief en bespreken we graag in een vrijblijvend kennismakingsgesprek.
                  </p>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                      <span className="material-icons text-primary text-3xl">payments</span>
                    </div>
                    <p className="text-slate-500 font-medium mb-2 uppercase tracking-tighter text-sm">Altijd passend voor uw fase</p>
                    <p className="text-slate-900 font-bold text-xl mb-8">Maatwerk of Pakket</p>

                    <Link
                      href="/tarieven"
                      className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 group"
                    >
                      Bekijk onze tarieven
                      <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>

                    <p className="mt-6 text-slate-400 text-xs text-center max-w-[200px]">
                      Alle uurtarieven, pakketten en voorbeeldprojecten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Trust Block with Contact Form */}
        <section className="py-16 lg:py-24 bg-white" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

              {/* Left: Consultant Trust Block */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative flex-grow overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] p-10 lg:p-14 flex flex-col h-full">
                  {/* Subtle Background Gradients */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full text-left">
                    <div className="mb-8">
                      <h2 className="text-2xl lg:text-3xl font-medium text-slate-500 leading-relaxed mb-6">
                        <span className="font-bold text-primary">Digitech Solutions</span> wordt geleid door <br />
                        <span className="text-slate-900 font-extrabold">Subor Cheung</span>, fractional CTO en IT-consultant.
                        Een unieke combinatie van technische expertise en business ervaring.
                      </h2>
                      <p className="text-slate-400 font-medium text-lg italic">
                        Pragmatische oplossingen die werken en schaalbaar zijn
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {/* IT Badge */}
                      <div className="bg-blue-50/80 backdrop-blur-sm p-5 rounded-3xl border border-blue-100 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-primary">
                          <span className="material-icons text-xl">laptop</span>
                        </div>
                        <div>
                          <p className="text-xl font-black text-primary leading-none">9+</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight mt-1">jaar IT</p>
                        </div>
                      </div>

                      {/* Finance Badge */}
                      <div className="bg-orange-50/80 backdrop-blur-sm p-5 rounded-3xl border border-orange-100 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-accent">
                          <span className="material-icons text-xl">account_balance</span>
                        </div>
                        <div>
                          <p className="text-xl font-black text-accent leading-none">11</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight mt-1">jaar finance</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-50 flex flex-col sm:flex-row items-center gap-6">
                      <Link
                        href="/over-mij"
                        className="bg-primary text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-primary/10 hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 group"
                      >
                        Over mij
                        <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <span className="material-icons text-base">email</span>
                          <span className="text-xs font-medium">info@digitechsolutions.nl</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-icons text-base">location_on</span>
                          <span className="text-xs font-medium">Amsterdam</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl"></div>
                <div className="relative bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 h-full flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Direct Contact</h3>
                    <p className="text-sm text-slate-400 font-medium">Laten we samen kijken naar de volgende fase.</p>
                  </div>
                  <div className="space-y-4 text-left">
                    <div>
                      <Link
                        href="mailto:info@digitechsolutions.nl"
                        className="block w-full bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 transition-all font-medium text-slate-700 hover:bg-slate-100"
                      >
                        <span className="flex items-center gap-3">
                          <span className="material-icons text-primary">email</span>
                          info@digitechsolutions.nl
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.linkedin.com/in/subor-cheung-3baab21a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 transition-all font-medium text-slate-700 hover:bg-slate-100"
                      >
                        <span className="flex items-center gap-3">
                          <span className="material-icons text-primary">link</span>
                          LinkedIn
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://github.com/Subor-zz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-slate-50 border border-slate-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 rounded-2xl px-6 py-4 transition-all font-medium text-slate-700 hover:bg-slate-100"
                      >
                        <span className="flex items-center gap-3">
                          <span className="material-icons text-primary">code</span>
                          GitHub
                        </span>
                      </Link>
                    </div>
                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold shadow-xl shadow-slate-900/20 hover:bg-primary transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                      >
                        Naar contactformulier
                        <span className="material-icons text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
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
