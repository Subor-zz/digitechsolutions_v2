'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// Type definitions for navigation items
type NavItemWithDropdown = {
  id: string;
  label: string;
  hasDropdown: true;
  items: { id: string; label: string; href: string; }[];
};

type NavItemRegular = {
  id: string;
  label: string;
  hasDropdown?: false;
  href: string;
};

type NavItem = NavItemWithDropdown | NavItemRegular;

// Service dropdown items
const dienstenItems = [
  { id: 'fractional-cto', label: 'Fractional CTO', href: '/diensten/fractional-cto' },
  { id: 'it-consultancy', label: 'IT-consultancy', href: '/diensten/it-consultancy' },
  { id: 'applicatieconsultatie', label: 'Applicatieconsultatie', href: '/diensten/applicatieconsultatie' },
  { id: 'full-stack', label: 'Full-stack Development', href: '/diensten/full-stack-development' },
  { id: 'projectmanagement', label: 'Projectmanagement', href: '/diensten/projectmanagement' },
  { id: 'product-consultatie', label: 'Productconsultatie', href: '/diensten/product-business-consultatie' },
  { id: 'support-itsm', label: 'Support & ITSM', href: '/diensten/support-itsm' },
];

// Voor wie dropdown items
const voorWieItems = [
  { id: 'startups', label: 'Startups', href: '/diensten#startups' },
  { id: 'scaleups', label: 'Scale-ups', href: '/diensten#scaleups' },
  { id: 'mkb', label: 'MKB', href: '/diensten#mkb' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current.every(ref => ref && !ref.contains(event.target as Node))) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const navItems: NavItem[] = [
    { id: 'oplossingen', label: 'Oplossingen', hasDropdown: true, items: dienstenItems },
    { id: 'voor-wie', label: 'Voor wie', hasDropdown: true, items: voorWieItems },
    { id: 'resources', label: 'Resources', href: '/blog' },
    { id: 'tarieven', label: 'Tarieven', href: '/tarieven' },
    { id: 'over-mij', label: 'Over', href: '/over-mij' },
  ];

  const isActive = (href: string) => pathname === href;

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-nav rounded-[2rem] px-6 lg:px-10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex justify-between h-full items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="relative w-9 h-9 group-hover:scale-110 transition-transform">
                <Image
                  src="/logo-transparent.png"
                  alt="Digitech Solutions Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tighter text-slate-900">
                Digitech<span className="text-slate-400">Solutions</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <div key={item.id} className="relative" ref={(el) => { if (el) dropdownRefs.current.push(el); }}>
                  {item.hasDropdown && item.items ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className={`px-5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1 ${
                          activeDropdown === item.id
                            ? 'bg-primary/10 text-primary shadow-sm'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                        }`}
                        aria-expanded={activeDropdown === item.id}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <span className="material-icons text-sm transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}">
                          expand_more
                        </span>
                      </button>
                      {activeDropdown === item.id && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl border border-slate-100 shadow-xl py-2 animate-fade-in">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-5 py-2.5 text-sm font-medium transition-colors ${
                                pathname === subItem.href ? 'text-primary bg-primary/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={'href' in item ? item.href : ''}
                      className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                        'href' in item && isActive(item.href)
                          ? 'bg-primary/10 text-primary shadow-sm'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="w-px h-6 bg-slate-200 mx-4"></div>

              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-xl text-sm font-bold shadow-xl transition-all active:scale-95 bg-slate-900 text-white shadow-slate-900/10 hover:bg-primary hover:shadow-primary/20 flex items-center gap-2"
              >
                Plan gratis intake
                <span className="material-icons text-sm">calendar_month</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-[2rem] border border-slate-200 shadow-2xl p-6 md:hidden max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col gap-2">
                {/* Oplossingen dropdown */}
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'oplossingen-mobile' ? null : 'oplossingen-mobile')}
                    className="w-full text-left px-6 py-3 rounded-2xl font-bold transition-all flex items-center justify-between text-slate-900"
                  >
                    Oplossingen
                    <span className="material-icons text-sm transition-transform duration-200">
                      {activeDropdown === 'oplossingen-mobile' ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {activeDropdown === 'oplossingen-mobile' && (
                    <div className="mt-2 space-y-1">
                      {dienstenItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                          className={`block px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            pathname === subItem.href ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Voor wie dropdown */}
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'voor-wie-mobile' ? null : 'voor-wie-mobile')}
                    className="w-full text-left px-6 py-3 rounded-2xl font-bold transition-all flex items-center justify-between text-slate-900"
                  >
                    Voor wie
                    <span className="material-icons text-sm transition-transform duration-200">
                      {activeDropdown === 'voor-wie-mobile' ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {activeDropdown === 'voor-wie-mobile' && (
                    <div className="mt-2 space-y-1">
                      {voorWieItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                          className="block px-6 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other nav items */}
                {navItems.filter(item => !item.hasDropdown).map((item) => (
                  <Link
                    key={item.id}
                    href={'href' in item ? (item as NavItemRegular).href : ''}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all ${
                      'href' in item && isActive((item as NavItemRegular).href)
                        ? 'bg-primary text-white'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* CTA Button */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left px-6 py-4 rounded-2xl font-bold transition-all bg-slate-900 text-white shadow-slate-900/10 hover:bg-primary flex items-center gap-2"
                >
                  Plan gratis intake
                  <span className="material-icons text-sm">calendar_month</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
