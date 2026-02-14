'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// Type definitions for navigation items
type NavItemDropdownItem = {
  id: string;
  label: string;
  href: string;
};

type NavItemDivider = {
  type: 'divider';
};

type NavItemWithDropdown = {
  id: string;
  label: string;
  hasDropdown: true;
  items: (NavItemDropdownItem | NavItemDivider)[];
};

type NavItemRegular = {
  id: string;
  label: string;
  hasDropdown?: false;
  href: string;
};

type NavItem = NavItemWithDropdown | NavItemRegular;

// Type guard for divider items
function isDivider(item: NavItemDropdownItem | NavItemDivider): item is NavItemDivider {
  return 'type' in item && item.type === 'divider';
}

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
    {
      id: 'diensten',
      label: 'Diensten',
      hasDropdown: true,
      items: [
        { id: 'applicatiebeheerder', label: 'ZZP Applicatiebeheerder', href: '/diensten/zzp-applicatiebeheerder' },
        { id: 'functioneel-beheerder', label: 'ZZP Functioneel Beheerder', href: '/diensten/zzp-functioneel-beheerder' },
        { id: 'support-itsm', label: 'IT Support & ITSM', href: '/diensten/support-itsm' },
        { type: 'divider' },
        { id: 'full-stack', label: 'Full Stack Developer', href: '/diensten/full-stack-development' },
        { id: 'project-manager', label: 'IT Project Manager', href: '/diensten/it-project-manager' },
        { id: 'productconsultatie', label: 'Productconsultatie & Technische Validatie', href: '/diensten/productconsultatie' },
      ]
    },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'over-mij', label: 'Over mij', href: '/over-mij' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className={`glass-nav rounded-[1.5rem] sm:rounded-[2rem] px-4 sm:px-6 lg:px-10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex justify-between h-full items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform">
                <Image
                  src="/logo-transparent.png"
                  alt="Digitech Solutions Logo"
                  width={32}
                  height={32}
                  className="object-contain sm:w-9 sm:h-9"
                />
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tighter text-slate-900">
                Digitech<span className="text-slate-600">Solutions</span>
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
                          {item.items.map((subItem, idx) =>
                            isDivider(subItem) ? (
                              <div key={`divider-${idx}`} className="my-2 mx-5 border-t border-slate-200" />
                            ) : (
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
                            )
                          )}
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
                className="shimmer-btn animate-shimmer px-6 py-2.5 rounded-xl text-sm font-bold shadow-[0_10px_40px_rgba(245,158,11,0.4)] transition-all active:scale-95 text-white hover:scale-105 flex items-center gap-2"
              >
                Beschikbaarheid bespreken
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
            <div className="absolute top-full left-3 right-3 mt-2 bg-white rounded-[1.5rem] border border-slate-200 shadow-2xl p-4 sm:p-6 md:hidden max-h-[80vh] overflow-x-hidden overflow-y-auto">
              <div className="flex flex-col gap-2">
                {/* Nav items with dropdowns */}
                {navItems.map((item) => (
                  item.hasDropdown && item.items ? (
                    <div key={item.id} className="mb-2">
                      <div className="px-3 py-2 font-bold text-slate-900 text-sm">
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-1 ml-2">
                        {item.items.map((subItem, idx) =>
                          isDivider(subItem) ? (
                            <div key={`divider-${idx}`} className="my-2 mx-3 border-t border-slate-200" />
                          ) : (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={`w-full text-left px-3 py-2 rounded-xl font-medium text-sm break-words transition-all ${
                                pathname === subItem.href
                                  ? 'bg-primary/10 text-primary'
                                  : 'text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.id}
                      href={'href' in item ? (item as NavItemRegular).href : ''}
                      onClick={() => setIsOpen(false)}
                      className={`w-full text-left px-3 py-3 rounded-2xl font-bold text-sm transition-all ${
                        'href' in item && isActive((item as NavItemRegular).href)
                          ? 'bg-primary text-white'
                          : 'text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}

                {/* CTA Button */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="shimmer-btn animate-shimmer w-full text-center px-3 py-3 rounded-2xl font-bold text-sm shadow-[0_10px_40px_rgba(245,158,11,0.4)] transition-all active:scale-95 text-white hover:scale-105 flex items-center justify-center gap-2 mt-2"
                >
                  Beschikbaarheid bespreken
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
