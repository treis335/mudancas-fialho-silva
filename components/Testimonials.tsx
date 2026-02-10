'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Lisboa',
    rating: 5,
    text: 'Excelente serviço! A equipa foi extremamente profissional e cuidadosa com todos os meus pertences. Recomendo vivamente!',
    date: 'Dezembro 2024',
  },
  {
    name: 'João Santos',
    location: 'Porto',
    rating: 5,
    text: 'Mudei o meu escritório com a Fialho & Silva e fiquei impressionado com a eficiência. Tudo foi feito em tempo recorde sem qualquer problema.',
    date: 'Novembro 2024',
  },
  {
    name: 'Ana Costa',
    location: 'Coimbra',
    rating: 5,
    text: 'Serviço de 5 estrelas! Desde o primeiro contacto até ao final da mudança, tudo foi perfeito. Muito obrigada à equipa!',
    date: 'Janeiro 2025',
  },
  {
    name: 'Pedro Oliveira',
    location: 'Braga',
    rating: 5,
    text: 'Profissionais de confiança! Trataram os meus móveis antigos com um cuidado especial. Voltarei a contratar com certeza.',
    date: 'Dezembro 2024',
  },
  {
    name: 'Carla Ferreira',
    location: 'Faro',
    rating: 5,
    text: 'A minha mudança para o Algarve foi muito tranquila graças à Fialho & Silva. Equipa simpática e muito competente!',
    date: 'Outubro 2024',
  },
  {
    name: 'Ricardo Alves',
    location: 'Setúbal',
    rating: 5,
    text: 'Preço justo e serviço impecável. A comunicação foi excelente do início ao fim. Altamente recomendado!',
    date: 'Janeiro 2025',
  },
];

export default function Testimonials() {
  return (
    <section id="testemunhos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Testemunhos
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-stone-900 mt-4 mb-6">
            O Que Dizem os Nossos{' '}
            <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-lg text-stone-600">
            A satisfação dos nossos clientes é a nossa maior conquista. 
            Veja o que dizem sobre nós!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-stone-50 to-white p-8 rounded-2xl shadow-elevation hover-lift border border-stone-100 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Quote className="w-6 h-6 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary-500 fill-primary-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <div>
                  <p className="font-semibold text-stone-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-stone-600">
                    {testimonial.location}
                  </p>
                </div>
                <p className="text-xs text-stone-500">
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-stone-600">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-stone-600">Mudanças Realizadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="text-stone-600">Classificação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">8+</div>
            <div className="text-stone-600">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
}
