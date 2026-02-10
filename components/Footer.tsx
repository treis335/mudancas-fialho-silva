'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-display font-bold text-2xl">F&S</span>
                </div>
              </Link>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Fialho & Silva
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Transformamos mudanças em experiências tranquilas desde 2015. 
                Profissionalismo e confiança em cada serviço.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('galeria')}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testemunhos')}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Testemunhos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="hover:text-primary-400 transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Serviços</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Mudanças Residenciais
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Mudanças Comerciais
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Transporte de Mercadorias
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Mudanças Internacionais
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Armazenamento
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  R. da Eira 30<br />
                  2500-413 Carvalhal Benfeito
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <a href="tel:919369582" className="text-sm hover:text-primary-400 transition-colors">
                  919 369 582
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:geral@fialhoesilva.pt" className="text-sm hover:text-primary-400 transition-colors">
                  geral@fialhoesilva.pt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-stone-400">
              © {currentYear} Mudanças Fialho & Silva. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
