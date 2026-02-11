import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                D
              </div>
              <span className="font-bold text-xl tracking-tight">
                Digitech<span className="font-light text-slate-400">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs text-left">
              Hoogwaardige IT-consultancy voor ambitieuze bedrijven. Wij overbruggen de kloof tussen business strategie en technische executie.
            </p>
          </div>

          {/* Diensten */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-6">Diensten</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/diensten" className="hover:text-accent transition-colors">
                  Alle Diensten
                </Link>
              </li>
              <li>
                <Link href="/diensten/fractional-cto" className="hover:text-accent transition-colors">
                  Fractional CTO
                </Link>
              </li>
              <li>
                <Link href="/diensten/it-consultancy" className="hover:text-accent transition-colors">
                  IT-consultancy
                </Link>
              </li>
              <li>
                <Link href="/diensten/full-stack-development" className="hover:text-accent transition-colors">
                  Full-stack development
                </Link>
              </li>
              <li>
                <Link href="/diensten/projectmanagement" className="hover:text-accent transition-colors">
                  Projectmanagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Bedrijf */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-6">Bedrijf</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/over-mij" className="hover:text-accent transition-colors">
                  Over mij
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tarieven" className="hover:text-accent transition-colors">
                  Tarieven
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <a href="mailto:info@digitechsolutions.nl" className="hover:text-accent transition-colors">
                <span className="material-icons text-lg align-middle mr-2">email</span>
                info@digitechsolutions.nl
              </a>
              <p className="flex items-center">
                <span className="material-icons text-lg align-middle mr-2">location_on</span>
                Breda, Nederland
              </p>
              <p className="flex items-center">
                <span className="material-icons text-lg align-middle mr-2">public</span>
                Actief in NL & EU
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Digitech Solutions. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="https://www.linkedin.com/in/subor-cheung-3baab21a/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="material-icons text-lg">link</span>
              LinkedIn
            </a>
            <a href="https://github.com/Subor-zz/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="material-icons text-lg">code</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
