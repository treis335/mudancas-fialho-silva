'use client';

import { Phone, Calendar, TruckIcon, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Contacte-nos',
    description: 'Ligue-nos ou preencha o formulário. Responderemos em menos de 2 horas.',
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Orçamento Gratuito',
    description: 'Visitamos o local para avaliar e apresentar um orçamento sem compromisso.',
  },
  {
    number: '03',
    icon: TruckIcon,
    title: 'Dia da Mudança',
    description: 'A nossa equipa chega pontualmente e cuida de tudo com profissionalismo.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Satisfação Garantida',
    description: 'Verificamos que tudo está perfeito e só paramos quando estiver satisfeito.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Como Funciona
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-stone-900 mt-4 mb-6">
            Simples, Rápido e{' '}
            <span className="text-gradient">Sem Complicações</span>
          </h2>
          <p className="text-lg text-stone-600">
            Em apenas 4 passos, transformamos a sua mudança numa experiência tranquila e eficiente.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Card */}
                <div className="bg-gradient-to-br from-white to-stone-50 p-8 rounded-2xl shadow-elevation hover-lift border border-stone-100 relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-white text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-2xl text-stone-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-stone-600 mb-6">
            Pronto para começar? É só um telefonema de distância!
          </p>
          <a
            href="tel:919369582"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>919 369 582</span>
          </a>
        </div>
      </div>
    </section>
  );
}
