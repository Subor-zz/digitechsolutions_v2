import { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Breadcrumbs from "../components/breadcrumbs";

export const metadata: Metadata = {
  title: "Cookiebeleid | Digitech Solutions",
  description: "Cookiebeleid van Digitech Solutions. Informatie over welke cookies wij gebruiken en hoe je deze kunt beheren.",
  openGraph: {
    title: "Cookiebeleid | Digitech Solutions",
    type: "website",
  },
};

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        </div>

        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Cookiebeleid
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80">
            Informatie over het gebruik van cookies op onze website.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <Breadcrumbs />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <p className="text-gray-600 italic">
              Laatst bijgewerkt: februari 2025
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">1. Wat zijn cookies?</h2>
            <p className="text-gray-700">
              Cookies zijn kleine tekstbestandjes die op jouw apparaat worden opgeslagen wanneer je onze website bezoekt. Ze helpen om jouw gebruikservaring te verbeteren door informatie te onthouden zoals jouw voorkeuren.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">2. Welke cookies gebruiken wij?</h2>

            <h3 className="text-xl font-bold text-deepBlue mt-6 mb-3">Geen marketingcookies</h3>
            <p className="text-gray-700 mb-4">
              <strong>Wij gebruiken geen marketingcookies, trackingpixels of derde partij trackers.</strong> Onze website is volledig cookie-vrij voor analytics doeleinden.
            </p>

            <h3 className="text-xl font-bold text-deepBlue mt-6 mb-3">Privacy-first analytics (Plausible)</h3>
            <p className="text-gray-700 mb-4">
              Wij gebruiken <strong>Plausible Analytics</strong> — een privacy-vriendelijke, cookie-loze analysetool. Plausible:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Gebruikt <strong>geen cookies</strong></li>
              <li>Volgt geen gebruikers over verschillende websites</li>
              <li>Deelt geen gegevens met derde partijen</li>
              <li>Is volledig AVG/GDPR-compliant</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Plausible meet alleen anonieme pagina&apos;s en basisstatistieken (aantal bezoekers, populaire pagina&apos;s). Er is geen persoonlijk identificeerbare informatie gekoppeld aan deze data.
            </p>

            <h3 className="text-xl font-bold text-deepBlue mt-6 mb-3">Essentiële cookies (indien van toepassing)</h3>
            <p className="text-gray-700 mb-4">
              Momenteel plaatst onze website <strong>geen essentiële cookies</strong>. Als we in de toekomst functionaliteit toevoegen die cookies vereist (zoals een login-portal), zullen we dit hier duidelijk vermelden.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">3. Cookies beheren</h2>
            <p className="text-gray-700 mb-4">
              Omdat wij geen cookies gebruiken voor analytics of marketing, is er <strong>geen cookie-toestemming (consent) vereist</strong> op onze website.
            </p>
            <p className="text-gray-700 mb-4">
              Je kunt desgewenst cookies in je browser blokkeren via browserinstellingen. Dit heeft geen invloed op de basisfunctionaliteit van onze website, maar kan bepaalde functies beïnvloeden (zoals eventuele toekomstige login-functionaliteit).
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">4. Derde partijen</h2>
            <p className="text-gray-700">
              Onze website kan links bevatten naar websites van derden. Wij zijn niet verantwoordelijk voor het cookiebeleid van deze derde partijen. Raadpleeg hun privacy- en cookieverklaringen voor meer informatie.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">5. Updates van dit beleid</h2>
            <p className="text-gray-700">
              Dit cookiebeleid kan worden bijgewerkt om veranderingen in ons gebruik van cookies of wettelijke vereisten weer te geven. Houd deze pagina regelmatig in de gaten voor updates.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">6. Contact</h2>
            <p className="text-gray-700">
              Heb je vragen over ons cookiegebruik? Neem contact met ons op via <a href="mailto:info@digitechsolutions.nl" className="text-primary hover:underline font-medium">info@digitechsolutions.nl</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
