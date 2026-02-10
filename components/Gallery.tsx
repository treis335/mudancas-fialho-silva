'use client';

import Image from 'next/image';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&q=80',
    alt: 'Mudança residencial',
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    alt: 'Equipa profissional',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    alt: 'Embalamento cuidadoso',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80',
    alt: 'Transporte seguro',
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    alt: 'Camião de mudanças',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    alt: 'Organização perfeita',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Galeria
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-stone-900 mt-4 mb-6">
            Veja o Nosso{' '}
            <span className="text-gradient">Trabalho</span>
          </h2>
          <p className="text-lg text-stone-600">
            Cada mudança é única. Veja alguns exemplos do nosso trabalho e atenção aos detalhes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-elevation hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-stone-600">
            Quer ver o seu projeto aqui? Contacte-nos hoje mesmo!
          </p>
        </div>
      </div>
    </section>
  );
}
