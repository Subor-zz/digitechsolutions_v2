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

            <h3 className="text-xl font-bold text-deepBlue mt-6 mb-3">Essentile cookies</h3>
            <p className="text-gray-700 mb-4">
              Deze cookies zijn noodzakelijk voor de werking van de website. Zonder deze cookies kunnen sommige functies niet worden gebruikt.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Functionaliteit van de website</li>
              <li>Toegang tot beveiligde gedeelten</li>
              <li>Shopping cart functionaliteit (indien van toepassing)</li>
            </ul>

            <h3 className="text-xl font-bold text-deepBlue mt-6 mb-3">Analytische cookies</h3>
            <p className="text-gray-700 mb-4">
              Wij gebruiken analytische tools om te begrijpen hoe bezoekers onze website gebruiken. Dit helpt ons om de website te verbeteren.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Google Analytics (indien geactiveerd)</li>
              <li>Aantal bezoekers en populaire pagina&apos;s</li>
              <li>Gebruikersgedrag en -patronen</li>
            </ul>

            <h3 className="text-xl font-bold text-deepBlue mt-6 mb-3">Functionele cookies</h3>
            <p className="text-gray-700 mb-4">
              Deze cookies onthouden jouw voorkeuren en stellen een verbeterde gebruikservaring mogelijk.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Taalvoorkeuren</li>
              <li>Gebruikersnaam onthouden voor inloggen</li>
              <li>Regio-instellingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">3. Cookies beheren</h2>
            <p className="text-gray-700 mb-4">
              Je kunt kiezen welke cookies je accepteert via je browserinstellingen. Houd er rekening mee dat het uitschakelen van cookies de functionaliteit van de website kan beperken.
            </p>

            <h3 className="text-xl font-bold text-deepBlue mt-6 mb-3">Browserinstellingen</h3>
            <p className="text-gray-700 mb-4">
              In de meeste browsers kun je cookies beheren via:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Chrome:</strong> Instellingen > Privacy en beveiliging > Cookies en andere sitegegevens</li>
              <li><strong>Firefox:</strong> Instellingen > Privacy & beveiliging</li>
              <li><strong>Safari:</strong> Voorkeuren > Privacy</li>
              <li><strong>Edge:</strong> Instellingen > Cookies en machtigingen</li>
            </ul>

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
