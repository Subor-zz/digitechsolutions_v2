import { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Breadcrumbs from "../components/breadcrumbs";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Digitech Solutions",
  description: "Algemene voorwaarden van Digitech Solutions. Lees onze voorwaarden voor dienstverlening, betalingen en afspraken.",
  openGraph: {
    title: "Algemene Voorwaarden | Digitech Solutions",
    type: "website",
  },
};

export default function TermsPage() {
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
            Algemene Voorwaarden
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-blue-50/80">
            Voorwaarden voor onze dienstverlening en samenwerking.
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
              Laatste update: februari 2025
            </p>

            <p className="text-gray-700">
              Deze voorwaarden zijn van toepassing op offertes, opdrachten en dienstverlening door Digitech Solutions.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">1. Diensten</h2>
            <p className="text-gray-700">
              Digitech Solutions levert o.a. IT-consultancy, (fractional) CTO-ondersteuning, softwareontwikkeling en aanverwante adviesdiensten.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">2. Offertes en totstandkoming</h2>
            <p className="text-gray-700 mb-4">
              Een opdracht komt tot stand na schriftelijke bevestiging (e-mail is voldoende) of wanneer de uitvoering start.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">3. Informatie van de klant</h2>
            <p className="text-gray-700">
              De klant is verantwoordelijk voor juiste en volledige informatie die nodig is voor uitvoering. Vertraging door ontbrekende input kan invloed hebben op planning.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">4. Inspanningsverplichting</h2>
            <p className="text-gray-700">
              Onze diensten zijn in principe een inspanningsverplichting: we leveren professioneel en zorgvuldig werk, maar kunnen geen specifieke resultaten garanderen (bijv. omzetgroei, rankings, conversie).
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">5. Tarieven en betaling</h2>
            <p className="text-gray-700 mb-4">
              Tarieven staan in offerte of op de tarievenpagina. Facturen hebben een betalingstermijn van 14 dagen, tenzij anders afgesproken.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">6. Aansprakelijkheid</h2>
            <p className="text-gray-700">
              Aansprakelijkheid is beperkt tot het bedrag dat voor de betreffende opdracht is gefactureerd over de laatste 1 maand, tenzij sprake is van opzet of bewuste roekeloosheid.
            </p>
            <p className="text-gray-700">
              Indirecte schade (zoals gevolgschade, winstderving) is uitgesloten voor zover wettelijk toegestaan.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">7. Intellectueel eigendom</h2>
            <p className="text-gray-700">
              Adviezen, documenten, code en deliverables blijven eigendom van Digitech Solutions totdat volledig is betaald. Na betaling krijgt de klant een gebruiksrecht zoals afgesproken in de opdracht.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">8. Geheimhouding</h2>
            <p className="text-gray-700">
              Beide partijen behandelen vertrouwelijke informatie vertrouwelijk. Op verzoek kunnen we een aparte NDA tekenen.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">9. Opzegging</h2>
            <p className="text-gray-700">
              Doorlopende samenwerking kan worden opgezegd met een opzegtermijn van 1 maand, tenzij anders overeengekomen. Reeds gemaakte uren/kosten worden gefactureerd.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">10. Toepasselijk recht</h2>
            <p className="text-gray-700">
              Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Vragen over onze voorwaarden?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Neem gerust contact op als je vragen hebt over onze algemene voorwaarden of dienstverlening.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-techOrange text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-techOrange/20 hover:bg-warmOrange transition-all transform hover:scale-105 active:scale-95"
          >
            Neem contact op
            <span className="material-icons text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
