import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative w-8 h-8 group-hover:scale-110 transition-transform">
                <Image
                  src="/logo-transparent.png"
                  alt="Digitech Solutions Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Digitech<span className="font-light text-slate-600">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-xs text-left">
              ZZP IT specialist in applicatiebeheer, functioneel beheer en IT support.
            </p>
          </div>

          {/* Diensten */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-6">Diensten</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <Link href="/diensten/zzp-applicatiebeheerder" className="hover:text-accent transition-colors">
                  ZZP Applicatiebeheerder
                </Link>
              </li>
              <li>
                <Link href="/diensten/zzp-functioneel-beheerder" className="hover:text-accent transition-colors">
                  ZZP Functioneel Beheerder
                </Link>
              </li>
              <li>
                <Link href="/diensten/support-itsm" className="hover:text-accent transition-colors">
                  Support & ITSM
                </Link>
              </li>
              <li>
                <Link href="/diensten/full-stack-development" className="hover:text-accent transition-colors">
                  Full Stack Developer
                </Link>
              </li>
              <li>
                <Link href="/diensten/it-project-manager" className="hover:text-accent transition-colors">
                  IT Project Manager
                </Link>
              </li>
              <li>
                <Link href="/diensten/productconsultatie" className="hover:text-accent transition-colors">
                  Productconsultatie & Validatie
                </Link>
              </li>
            </ul>
          </div>

          {/* Bedrijf */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-6">Bedrijf</h4>
            <ul className="space-y-4 text-sm text-slate-600">
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
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Juridisch */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-6">Juridisch</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacyverklaring
                </Link>
              </li>
              <li>
                <Link href="/cookiebeleid" className="hover:text-accent transition-colors">
                  Cookiebeleid
                </Link>
              </li>
              <li>
                <Link href="/voorwaarden" className="hover:text-accent transition-colors">
                  Algemene Voorwaarden
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
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/cookiebeleid" className="hover:text-accent transition-colors">
              Cookies
            </Link>
            <Link href="/voorwaarden" className="hover:text-accent transition-colors">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
