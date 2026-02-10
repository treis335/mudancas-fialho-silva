'use client';

import { Award, Users, TrendingUp, Heart, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Mais de 8 anos de experiência no setor de mudanças e transportes.',
  },
  {
    icon: Users,
    title: 'Equipa Profissional',
    description: 'Equipa treinada e certificada para garantir um serviço de excelência.',
  },
  {
    icon: TrendingUp,
    title: 'Preços Competitivos',
    description: 'Orçamentos transparentes sem custos ocultos. Melhor relação qualidade-preço.',
  },
  {
    icon: Heart,
    title: 'Cuidado Personalizado',
    description: 'Tratamos os seus bens como se fossem nossos, com atenção a cada detalhe.',
  },
  {
    icon: Shield,
    title: 'Seguro Total',
    description: 'Todos os nossos serviços incluem seguro completo para sua tranquilidade.',
  },
  {
    icon: Clock,
    title: 'Disponibilidade 24/7',
    description: 'Atendimento rápido e flexível, adaptado às suas necessidades e horários.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="sobre" className="py-24 gradient-bg relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-elevation-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Equipa Profissional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-elevation-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-sm text-stone-600">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Porquê Escolher-nos
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-stone-900 mt-4 mb-6">
                A Sua Confiança é a Nossa{' '}
                <span className="text-gradient">Prioridade</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Na Fialho & Silva, combinamos profissionalismo com um toque pessoal. 
                Entendemos que uma mudança é mais do que transportar objetos - é mover 
                memórias, sonhos e o seu futuro.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-stone-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="tel:919369582"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Contacte-nos Agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
