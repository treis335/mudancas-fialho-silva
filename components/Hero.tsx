'use client';

import { ArrowRight, Star, TruckIcon, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Star className="w-4 h-4 text-primary-500 fill-primary-500" />
              <span className="text-sm font-medium text-stone-700">
                Empresa de Confiança desde 2015
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-tight">
                Mudanças{' '}
                <span className="text-gradient">Sem Stress</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 font-light">
                Transformamos mudanças em experiências tranquilas e seguras
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl">
              Na <strong>Fialho & Silva</strong>, cuidamos de cada detalhe da sua mudança com profissionalismo, 
              rapidez e segurança. Da embalagem ao transporte, garantimos que os seus bens chegam 
              em perfeitas condições.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-stone-600">Mudanças</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-stone-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24h</div>
                <div className="text-sm text-stone-600">Disponíveis</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Pedir Orçamento Grátis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:919369582"
                className="bg-white text-stone-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stone-50 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>919 369 582</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-stone-600">Totalmente Segurado</span>
              </div>
              <div className="flex items-center space-x-2">
                <TruckIcon className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-stone-600">Frota Moderna</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-stone-600">Pontualidade</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in animate-delay-200">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-elevation-lg">
              <Image
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80"
                alt="Mudanças Profissionais"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-elevation-lg max-w-xs animate-float">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary-600 fill-primary-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-primary-500 fill-primary-500" />
                    ))}
                  </div>
                  <p className="text-sm text-stone-600">
                    "Excelente serviço! Profissionais cuidadosos e eficientes."
                  </p>
                  <p className="text-xs text-stone-500 mt-2">- Maria S., Lisboa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
