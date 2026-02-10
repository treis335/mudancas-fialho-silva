'use client';

import { Home, Building2, Package, Plane, Archive, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Mudanças Residenciais',
    description: 'Mudanças completas de casas e apartamentos com total cuidado e atenção aos seus pertences.',
    features: ['Embalamento profissional', 'Desmontagem de móveis', 'Proteção de objetos frágeis'],
  },
  {
    icon: Building2,
    title: 'Mudanças Comerciais',
    description: 'Relocação de escritórios e estabelecimentos comerciais com mínimo impacto nas suas operações.',
    features: ['Planeamento detalhado', 'Mudanças ao fim de semana', 'Transporte de equipamentos'],
  },
  {
    icon: Package,
    title: 'Transporte de Mercadorias',
    description: 'Serviço de transporte seguro e eficiente para todo o tipo de mercadorias e volumes.',
    features: ['Seguros incluídos', 'Rastreamento em tempo real', 'Entregas urgentes'],
  },
  {
    icon: Plane,
    title: 'Mudanças Internacionais',
    description: 'Experiência em mudanças para o estrangeiro com toda a documentação necessária.',
    features: ['Customs clearance', 'Embalagem internacional', 'Seguro global'],
  },
  {
    icon: Archive,
    title: 'Armazenamento',
    description: 'Soluções de armazenamento seguro e climatizado para curto e longo prazo.',
    features: ['Segurança 24/7', 'Acesso flexível', 'Diferentes dimensões'],
  },
  {
    icon: Briefcase,
    title: 'Mudanças Corporativas',
    description: 'Serviços especializados para grandes empresas e relocações de colaboradores.',
    features: ['Gestor dedicado', 'Logística complexa', 'Reporting detalhado'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Os Nossos Serviços
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-stone-900 mt-4 mb-6">
            Soluções Completas para Todas as Suas{' '}
            <span className="text-gradient">Necessidades</span>
          </h2>
          <p className="text-lg text-stone-600">
            Desde mudanças residenciais a relocações empresariais complexas, 
            temos a experiência e equipamento para garantir um serviço impecável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-stone-50 to-white p-8 rounded-2xl hover-lift shadow-elevation animate-slide-up border border-stone-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-2xl text-stone-900 mb-3">
                {service.title}
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-stone-600 mb-6">
            Não encontra o que procura? Contacte-nos para soluções personalizadas.
          </p>
          <a
            href="tel:919369582"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Falar com um Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}
