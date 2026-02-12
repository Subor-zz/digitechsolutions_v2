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
              Laatst bijgewerkt: februari 2025
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">1. Toepasselijkheid</h2>
            <p className="text-gray-700">
              Deze algemene voorwaarden zijn van toepassing op alle diensten en producten van Digitech Solutions. Door gebruik te maken van onze diensten ga je akkoord met deze voorwaarden.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">2. Definities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Dienstverlener:</strong> Digitech Solutions, ingeschreven bij de Kamer van Koophandel</li>
              <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die de dienst afneemt</li>
              <li><strong>Overeenkomst:</strong> De overeenkomst tussen dienstverlener en opdrachtgever</li>
              <li><strong>Diensten:</strong> Alle door dienstverlener te leveren diensten zoals IT-consultancy, fractional CTO en development</li>
            </ul>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">3. Offertes en totstandkoming</h2>
            <p className="text-gray-700 mb-4">
              Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders schriftelijk overeengekomen. De overeenkomst komt tot stand na:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Schriftelijke aanvaarding van de offerte door de opdrachtgever, of</li>
              <li>Feitelijke aanvang van de uitvoering van de overeenkomst door de dienstverlener</li>
            </ul>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">4. Uitvoering van de overeenkomst</h2>
            <p className="text-gray-700 mb-4">
              De dienstverlener zal de overeenkomst naar beste inzicht en vermogen en in overeenstemming met de eisen van goed vakmanschap uitvoeren. De dienstverlener behoudt zich het recht voor bepaalde werkzaamheden derden in te schakelen.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">5. Verplichtingen van de opdrachtgever</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Verstrekken van alle benodigde informatie en materialen</li>
              <li>Medewerking verlenen aan de uitvoering van de overeenkomst</li>
              <li>Timeig betalen van de facturen</li>
              <li>Respecteren van intellectuele eigendomsrechten van de dienstverlener</li>
            </ul>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">6. Honorarium en betaling</h2>
            <p className="text-gray-700 mb-4">
              Tenzij anders overeengekomen, geschiedt betaling op basis van:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Uurtarief (voor consultancy en fractional CTO diensten)</li>
              <li>Projectprijs (voor development en vaste projecten)</li>
              <li>Retainer (voor langdurige samenwerking)</li>
            </ul>
            <p className="text-gray-700">
              Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan, tenzij anders schriftelijk overeengekomen.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">7. Intellectueel eigendom</h2>
            <p className="text-gray-700 mb-4">
              Tenzij anders overeengekomen, blijven alle rechten van intellectueel eigendom (waaronder maar niet beperkt tot broncode, ontwerpen, documentatie) bij de dienstverlener berusten, tenzij:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Specifiek overeengekomen in de overeenkomst</li>
              <li>Betaald als afzonderlijke dienst (source code buy-out)</li>
            </ul>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">8. Aansprakelijkheid</h2>
            <p className="text-gray-700">
              De aansprakelijkheid van de dienstverlener is beperkt tot het bedrag dat in de desbetreffende overeenkomst is overeengekomen. Voor indirecte schade of gevolgschade is de dienstverlener niet aansprakelijk, tenzij er sprake is van opzet of grove schuld.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">9. Ontbinding en beindiging</h2>
            <p className="text-gray-700 mb-4">
              Beide partijen kunnen de overeenkomst beindigen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Schriftelijk met inachtneming van een opzegtermijn van 30 dagen</li>
              <li>Met onmiddellijke ingang bij zwarende toerekenbare schuld</li>
              <li>Door faillissement of surseance van betaling van een der partij</li>
            </ul>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">10. Geschillen</h2>
            <p className="text-gray-700">
              Op alle overeenkomsten en voorwaarden is Nederlands recht van toepassing. Geschillen zullen voorlegd worden aan de bevoegde rechter in Nederland.
            </p>

            <h2 className="text-2xl font-bold text-deepBlue mt-8 mb-4">11. Contact</h2>
            <p className="text-gray-700">
              Voor vragen over onze algemene voorwaarden kun je contact opnemen via <a href="mailto:info@digitechsolutions.nl" className="text-primary hover:underline font-medium">info@digitechsolutions.nl</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
