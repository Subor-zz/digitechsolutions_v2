import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Title (H1) */}
        <h1 className="text-4xl md:text-5xl font-bold text-deepBlue mb-6">
          Deze pagina bestaat niet (meer)
        </h1>

        {/* Uitlegtekst */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          De pagina die je zoekt is verplaatst, hernoemd of bestaat niet meer.
          Dat kan gebeuren — zeker als je via een oudere link binnenkomt.
        </p>

        {/* Actiegerichte opties */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <p className="text-sm font-semibold text-gray-600 mb-4">Je kunt hier verder:</p>
          <nav className="flex flex-col sm:flex-row items-center justify-center gap-3" aria-label="Navigatie opties">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-deepBlue hover:bg-midBlue text-white font-semibold rounded-lg transition-colors"
            >
              <span>Terug naar de homepage</span>
            </Link>
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deepBlue text-deepBlue hover:bg-deepBlue hover:text-white font-semibold rounded-lg transition-colors"
            >
              <span>Bekijk de diensten</span>
            </Link>
            <a
              href="mailto:info@digitechsolutions.nl?subject=Vrijblijvende%20intake"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-techOrange hover:bg-warmOrange text-white font-semibold rounded-lg transition-colors"
            >
              <span>Plan een vrijblijvende intake</span>
            </a>
          </nav>
        </div>

        {/* Subtiele geruststelling */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4">Kun je niet vinden wat je zoekt? Dan help ik je graag verder.</p>
          <a
            href="mailto:info@digitechsolutions.nl?subject=Vraag%20via%20404%20pagina"
            className="inline-flex items-center gap-2 text-deepBlue hover:text-techOrange font-semibold underline transition-colors"
          >
            Stel je vraag
          </a>
        </div>
      </div>
    </div>
  );
}
