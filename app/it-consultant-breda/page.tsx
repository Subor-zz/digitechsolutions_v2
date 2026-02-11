'use client';

import { useScrollReveal } from '../components/scroll-reveal';
import FAQSection, { FAQSchema } from '../components/faq-section';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Link from 'next/link';

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

const services = [
  {
    title: "Fractional CTO",
    description: "Technische strategie, architectuur en teamrichting voor startups en MKB in Breda en omgeving.",
    link: "/diensten/fractional-cto"
  },
  {
    title: "IT-Consultancy",
    description: "Applicatie-audits, performance checks en integratieadvies voor bedrijven in Noord-Brabant.",
    link: "/diensten/it-consultancy"
  },
  {
    title: "Full-Stack Development",
    description: "Web- en mobiele applicaties van MVP tot productie, gebouwd door een lokale developer.",
    link: "/diensten/full-stack-development"
  },
  {
    title: "Projectmanagement",
    description: "Technisch projectmanagement met Agile/Scrum expertise voor je IT-projecten.",
    link: "/diensten/projectmanagement"
  }
];

const areas = [
  "Breda (Centrum, Prinsenbeek, Bavel)",
  "Tilburg",
  "Roosendaal",
  "Bergen op Zoom",
  "Etten-Leur",
  "Oosterhout",
  "Zundert",
  "Rucphen",
  "Standdaarbuiten",
  "Wouw"
];

const advantages = [
  {
    icon: "📍",
    title: "Lokaal en bereikbaar",
    description: "Gevestigd in Breda, beschikbaar voor fysieke afspraken in heel Noord-Brabant."
  },
  {
    icon: "🤝",
    title: "Persoonlijk contact",
    description: "Kennis maken in plaats van alleen videocalls. Begrijp jouw lokale markt."
  },
  {
    icon: "🏢",
    title: "MKB expertise",
    description: "Ervaring met bedrijven in de regio Breda. Begrijp de lokale cultuur."
  },
  {
    icon: "⚡",
    title: "Snel schakelen",
    description: "Korte lijnen, flexibele beschikbaarheid, geen corporate bureaucratie."
  },
  {
    icon: "💬",
    title: "Nederlands & Engels",
    description: "Communicatie in jouw taal. Geen taalbarrières, geen misverstanden."
  },
  {
    icon: "🎯",
    title: "Geen lange contracten",
    description: "Projectbasis of retainer, maar zonder jaarcontracten. Flexibiliteit."
  }
];

const faqs = [
  {
    question: "Werk je ook voor bedrijven buiten Breda?",
    answer: "Ja, ik werk voor klanten door heel Nederland. Maar voor klanten in Breda en omgeving kan ik ook fysiek afspreken, wat voor sommige trajecten prettig is."
  },
  {
    question: "Kunnen we face-to-face afspreken in Breda?",
    answer: "Absoluut. Voor intakegesprekken, workshops en belangrijke meetings kom ik graag langs op locatie in Breda of omstreken."
  },
  {
    question: "Wat zijn jouw tarieven voor lokale bedrijven?",
    answer: "Mijn tarieven zijn eerlijk en transparant, zonder verrassingen. Ik werk zowel op projectbasis als op retainer. Tijdens een gratis intake bespreken we wat past bij jouw budget en behoeften."
  },
  {
    question: "Hoe snel kun je starten?",
    answer: "Vaak kan ik binnen 1-2 weken starten. Voor spoedgevallen is overleg mogelijk."
  },
  {
    question: "Bied je ook support na oplevering?",
    answer: "Ja, ik kan support leveren via retainer of ad-hoc. Ook help ik graag bij het overdragen aan een intern team als je dat op termijn wilt."
  },
  {
    question: "Wat voor bedrijven in Breda help je?",
    answer: "Vooral startups, scale-ups en MKB-bedrijven die technische expertise nodig hebben maar geen fulltime CTO of developer kunnen/willen aannemen."
  }
];

export default function ItConsultantBredaPage() {
  return (
    <>
      {/* Hero Section - matching homepage structure */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-deepBlue via-midBlue to-azureBlue opacity-95"></div>

        {/* DS Logo as background overlay - 70% opacity */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none animate-float">
          <img
            src="/ds-logo-nobg.png"
            alt=""
            className="w-[120%] h-[120%] object-contain md:w-[100%] md:h-[100%]"
          />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            IT Consultant Breda
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Lokale IT-consultancy voor startups en MKB in Breda en omgeving.
            Fractional CTO, software development en technisch advies — dichtbij en persoonlijk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-techOrange hover:bg-warmOrange text-white font-semibold px-8 py-3 rounded-full text-base transition-all"
            >
              Plan een gratis intake
            </Link>
            <Link
              href="/diensten"
              className="border-2 border-white text-white hover:bg-white hover:text-deepBlue font-semibold px-8 py-3 rounded-full text-base transition-all"
            >
              Bekijk diensten
            </Link>
          </div>

          {/* Location badge */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-blue-100 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Breda, Noord-Brabant
            </span>
            <span>•</span>
            <span>Flexibele beschikbaarheid</span>
            <span>•</span>
            <span>Face-to-face mogelijk</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Waarom lokaal? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
                Waarom een lokale IT consultant in Breda?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Persoonlijk contact maakt het verschil. Als lokale consultant begrijp ik de regionale markt en ben ik flexibel inzetbaar.
              </p>
            </header>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400 | 500 | 600}>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-lg text-deepBlue mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
                Diensten voor bedrijven in Breda
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Van fractional CTO voor startups tot software development voor MKB.
              </p>
            </header>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <Link href={service.link} className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100">
                  <h3 className="font-bold text-xl text-deepBlue mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <span className="text-techOrange font-medium text-sm">Lees meer →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regio */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
                Werkgebied in Noord-Brabant
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Vanuit Breda werk ik voor bedrijven in de hele regio.
              </p>
            </header>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-br from-deepBlue/10 to-azureBlue/10 rounded-xl p-8 border border-deepBlue/20">
                <div className="flex items-start gap-4 mb-6">
                  <svg className="w-8 h-8 text-deepBlue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg text-deepBlue mb-2">Locatie: Breda, Noord-Brabant</h3>
                    <p className="text-gray-600 text-sm">
                      Gevestigd in Breda en werkzaam in de hele regio West-Brabant.
                      Fysieke afspraken mogelijk in Breda en omstreken.
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold text-deepBlue mb-3">Regio's waar ik actief ben:</h4>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-techOrange">✓</span>
                      {area}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-gray-500 italic">
                  Ook beschikbaar voor klanten buiten deze regio (hele Nederland).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deepBlue via-midBlue to-azureBlue">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Klaar om kennis te maken?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Plan een gratis intake van 15 minuten. We bespreken jouw uitdagingen en ik geef direct al wat eerste inzichten en tips.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-block bg-techOrange hover:bg-warmOrange text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Plan een gratis intake
              </Link>
              <p className="text-sm text-blue-200">
                Geen verplichtingen, geen sales pitch. Gewoon een goed gesprek.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
      <FAQSchema faqs={faqs} />
      <Footer />
    </>
  );
}
