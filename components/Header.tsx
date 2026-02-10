'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-elevation py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-2xl">F&S</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-stone-800">
                Fialho & Silva
              </h1>
              <p className="text-xs text-stone-600">Mudanças Profissionais</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-stone-700 hover:text-primary-600 transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-stone-700 hover:text-primary-600 transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-stone-700 hover:text-primary-600 transition-colors font-medium"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('testemunhos')}
              className="text-stone-700 hover:text-primary-600 transition-colors font-medium"
            >
              Testemunhos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-stone-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <a
            href="tel:919369582"
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">919 369 582</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-800 p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left text-stone-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left text-stone-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="text-left text-stone-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('testemunhos')}
                className="text-left text-stone-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Testemunhos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left text-stone-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Contacto
              </button>
              <a
                href="tel:919369582"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg mt-4"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">919 369 582</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
