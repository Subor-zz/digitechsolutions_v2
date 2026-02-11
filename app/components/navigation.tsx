'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'diensten', label: 'Diensten', href: '/diensten' },
    { id: 'tarieven', label: 'Tarieven', href: '/tarieven' },
    { id: 'over-mij', label: 'Over mij', href: '/over-mij' },
    { id: 'blog', label: 'Blog', href: '/blog' },
  ] as const;

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-nav rounded-[2rem] px-6 lg:px-10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex justify-between h-full items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                D
              </div>
              <span className="font-extrabold text-xl tracking-tighter text-slate-900">
                Digitech<span className="text-slate-400"> Solutions</span>
              </span>
            </Link>

            <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="w-px h-6 bg-slate-200 mx-4"></div>

              <Link
                href="/contact"
                className={`px-7 py-2.5 rounded-xl text-sm font-bold shadow-xl transition-all active:scale-95 ${
                  isActive('/contact')
                    ? 'bg-primary text-white shadow-primary/20'
                    : 'bg-slate-900 text-white shadow-slate-900/10 hover:bg-primary'
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-900 p-2"
                aria-label="Toggle menu"
              >
                <span className="material-icons">
                  {isOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 glass-nav rounded-[2rem] border border-white/20 shadow-2xl p-6 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all ${
                    isActive(item.href)
                      ? 'bg-primary text-white'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all ${
                  isActive('/contact')
                    ? 'bg-primary text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
