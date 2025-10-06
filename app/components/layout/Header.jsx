"use client";

import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'Pourquoi nous', href: '#pourquoi' },
    { label: 'Avis', href: '#avis' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Univers</span>
            <span className="text-2xl font-bold text-gray-900">Clean</span>
            <span className="text-sm text-gray-600">77</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+33XXXXXXXXX"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">XX XX XX XX XX</span>
            </a>
            <button
              onClick={onOpenModal}
              className="btn-primary"
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
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+33XXXXXXXXX"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">XX XX XX XX XX</span>
              </a>
              <button
                onClick={() => {
                  onOpenModal();
                  setIsMenuOpen(false);
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
