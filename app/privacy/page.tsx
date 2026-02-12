import { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Breadcrumbs from "../components/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacyverklaring | Digitech Solutions",
  description: "Privacyverklaring van Digitech Solutions. Wij hechten groot belang aan jouw privacy en de bescherming van je persoonsgegevens.",
  openGraph: {
    title: "Privacyverklaring | Digitech Solutions",
    type: "website",
  },
};

export default function PrivacyPage() {
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
            Privacyverklaring
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80">
            Digitech Solutions hecht groot belang aan de bescherming van jouw persoonsgegevens.
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

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">1. Wie zijn wij?</h2>
            <p className="text-gray-700">
              Digitech Solutions is een IT-consultancy bureau gevestigd in Breda, Nederland. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">2. Welke gegevens verwerken wij?</h2>
            <p className="text-gray-700 mb-4">
              Wij verwerken alleen de persoonsgegevens die noodzakelijk zijn voor onze dienstverlening. Dit kan betreffen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
              <li>Bedrijfsgegevens (indien van toepassing)</li>
              <li>Communicatie (e-mails, telefoongesprekken)</li>
            </ul>

            <h3 className="text-xl font-bold text-deepBlue mt-6 mb-3">Website analytics (Plausible)</h3>
            <p className="text-gray-700 mb-4">
              Voor website analytics gebruiken wij <strong>Plausible</strong> — een privacy-first, cookie-loze analysetool. Plausible:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Gebruikt geen cookies</li>
              <li>Volgt geen individuele bezoekers</li>
              <li>Deelt geen data met derden</li>
              <li>Is volledig AVG/GDPR-compliant zonder toestemming</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Plausible meet alleen anonieme statistieken zoals paginaweergaven en bezoekersaantallen. Er vindt geen profiling of cross-site tracking plaats.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">3. Waarom verwerken wij gegevens?</h2>
            <p className="text-gray-700 mb-4">
              Wij verwerken jouw gegevens voor de volgende doeleinden:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Het leveren van onze diensten</li>
              <li>Communicatie over onze diensten en projecten</li>
              <li>Facturering en administratie</li>
              <li>Verbeteren van onze website en dienstverlening</li>
              <li>Voldoen aan wettelijke verplichtingen</li>
            </ul>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">4. Hoe lang bewaren wij gegevens?</h2>
            <p className="text-gray-700">
              Wij bewaren jouw persoonsgegevens niet langer dan nodig is voor de doeleinden waarvoor ze zijn verzameld. Wettelijke bewaartermijnen (zoals voor de belastingdienst) worden altijd in acht genomen.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">5. Delen met derden</h2>
            <p className="text-gray-700">
              Wij delen jouw persoonsgegevens alleen met derden indien dit noodzakelijk is voor onze dienstverlening of om te voldoen aan wettelijke verplichtingen. Met deze partijen sluiten wij verwerkersovereenkomsten om jouw gegevens te beschermen.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">6. Jouw rechten</h2>
            <p className="text-gray-700 mb-4">
              Onder de AVG heb je de volgende rechten:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Recht op inzage in jouw gegevens</li>
              <li>Recht op rectificatie (correctie)</li>
              <li>Recht op verwijdering (&apos;right to be forgotten&apos;)</li>
              <li>Recht op beperking van de verwerking</li>
              <li>Recht op overdraagbaarheid</li>
              <li>Recht van bezwaar</li>
            </ul>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">7. Cookies</h2>
            <p className="text-gray-700">
              Onze website gebruikt geen marketingcookies en plaatst geen trackingcookies. Wij gebruiken Plausible Analytics (cookie-loos) voor basisstatistieken. Zie ons <Link href="/cookiebeleid" className="text-primary hover:underline font-medium">Cookiebeleid</Link> voor meer informatie.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">8. Beveiliging</h2>
            <p className="text-gray-700">
              Wij nemen passende technische en organisatorische maatregelen om jouw persoonsgegevens te beveiligen tegen verlies, ongeautoriseerde toegang en onrechtmatige verwerking.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">9. Vragen en klachten</h2>
            <p className="text-gray-700">
              Heb je vragen over deze privacyverklaring of de verwerking van jouw gegevens? Neem contact met ons op via <a href="mailto:info@digitechsolutions.nl" className="text-primary hover:underline font-medium">info@digitechsolutions.nl</a>. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
