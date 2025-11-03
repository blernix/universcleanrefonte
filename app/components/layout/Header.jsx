"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown, Facebook, Instagram } from 'lucide-react';
import { servicesData } from '@/app/data/services';

export default function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { label: 'Accueil', href: '/', anchor: null },
    { label: 'Services', href: '/', anchor: '#services', hasDropdown: true },
    { label: 'À propos', href: '/', anchor: '#about' },
    { label: 'Avis', href: '/', anchor: '#avis' },
  ];

  // Grouper les services par catégorie
  const servicesByCategory = {
    automobile: servicesData.filter(s => s.category === 'automobile'),
    mobilier: servicesData.filter(s => s.category === 'mobilier')
  };

  // Gestion du scroll pour masquer/afficher le header
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Toujours visible en haut de page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas : masquer
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll vers le haut : afficher
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Fonction pour gérer le clic sur un lien
  const handleNavClick = (e, link) => {
    if (isHomePage) {
      e.preventDefault();
      if (link.anchor) {
        // Scroll vers l'ancre
        const element = document.querySelector(link.anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Scroll en haut de page (pour Accueil)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    // Sinon : navigation normale vers la page (Next.js Link)
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto px-4 lg:px-6 max-w-[1400px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
           <div className="relative w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-1.5 shadow-sm">
              <Image
                src="/logo_univers_clean.png"
                alt="Logo Univers Clean"
                width={40}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">Univers</span>

            <span className="text-2xl font-bold text-gray-900">Clean</span>
            
          </Link>

          {/* Navigation Desktop */}
          <nav role="navigation" aria-label="Navigation principale" className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Desktop */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 pt-2 w-80">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-4 animate-fadeIn">
                      {/* Services Automobile */}
                      <div className="px-4 pb-3 mb-3 border-b border-gray-100">
                        <p className="text-xs font-bold text-gray-500 uppercase mb-3">Automobile</p>
                        <div className="!space-y-1">
                          {servicesByCategory.automobile.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors group"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <p className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                                {service.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Services Mobilier */}
                      <div className="px-4">
                        <p className="text-xs font-bold text-gray-500 uppercase mb-3">Mobilier</p>
                        <div className="space-y-1">
                          {servicesByCategory.mobilier.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors group"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <p className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                                {service.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={isHomePage && link.anchor ? link.anchor : link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-1">
              <a
                href="https://www.facebook.com/universclean77"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Univers Clean 77"
                className="p-1.5 rounded-full hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/universclean77/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Univers Clean 77"
                className="p-1.5 rounded-full hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="w-px h-6 bg-gray-300"></div>

            <a
              href="tel:+33782364263"
              className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm lg:text-base">07 82 36 42 63</span>
            </a>
            <button
              onClick={() => onOpenModal && onOpenModal()}
              className="btn-primary whitespace-nowrap"
            >
              Devis gratuit
            </button>
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeIn">
            <nav role="navigation" aria-label="Navigation mobile" className="flex flex-col gap-3">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Mobile */}
                    {isMobileServicesOpen && (
                      <div className="pl-4 mt-2 space-y-3 animate-fadeIn">
                        {/* Services Automobile */}
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase mb-2">Automobile</p>
                          <div className="space-y-1">
                            {servicesByCategory.automobile.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                              >
                                <p className="font-semibold text-gray-900 text-sm">{service.title}</p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Services Mobilier */}
                        <div className="pt-3 border-t border-gray-100">
                          <p className="text-xs font-bold text-gray-500 uppercase mb-2">Mobilier</p>
                          <div className="space-y-1">
                            {servicesByCategory.mobilier.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                              >
                                <p className="font-semibold text-gray-900 text-sm">{service.title}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={isHomePage && link.anchor ? link.anchor : link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  >
                    {link.label}
                  </Link>
                )
              ))}

              {/* Séparateur */}
              <div className="border-t border-gray-200 my-3"></div>

              {/* Réseaux sociaux Mobile */}
              <div className="flex items-center gap-3 py-2">
                <span className="text-sm font-medium text-gray-700">Suivez-nous :</span>
                <a
                  href="https://www.facebook.com/universclean77"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Univers Clean 77"
                  className="p-2 rounded-full hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/universclean77/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Univers Clean 77"
                  className="p-2 rounded-full hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <a
                href="tel:+33782364263"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">07 82 36 42 63</span>
              </a>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenModal && onOpenModal();
                }}
                className="btn-primary w-full mt-2"
              >
                Devis gratuit
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
