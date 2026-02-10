'use client';

import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-accent-900/95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-slide-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Pronto Para Uma Mudança{' '}
            <span className="text-primary-200">Sem Stress?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
            Peça já o seu orçamento gratuito e sem compromisso. 
            Responderemos em menos de 2 horas!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="group bg-white text-primary-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Pedir Orçamento Grátis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:919369582"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>919 369 582</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Garantia</div>
              <div className="text-sm text-primary-200">100% Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Seguro</div>
              <div className="text-sm text-primary-200">Cobertura Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Rápido</div>
              <div className="text-sm text-primary-200">Resposta em 2h</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Profissional</div>
              <div className="text-sm text-primary-200">Equipa Certificada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
