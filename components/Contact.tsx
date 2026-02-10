'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-stone-900 mt-4 mb-6">
            Vamos Começar a Sua{' '}
            <span className="text-gradient">Mudança</span>
          </h2>
          <p className="text-lg text-stone-600">
            Entre em contacto connosco. Estamos prontos para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="font-display font-bold text-3xl text-stone-900 mb-6">
                Fale Connosco
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Estamos disponíveis para responder a todas as suas questões e fornecer 
                um orçamento personalizado sem qualquer compromisso.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Morada</h4>
                  <p className="text-stone-600">
                    R. da Eira 30<br />
                    2500-413 Carvalhal Benfeito
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Telefone</h4>
                  <a href="tel:919369582" className="text-primary-600 hover:text-primary-700 font-semibold">
                    919 369 582
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Email</h4>
                  <a href="mailto:geral@fialhoesilva.pt" className="text-primary-600 hover:text-primary-700">
                    geral@fialhoesilva.pt
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Horário</h4>
                  <p className="text-stone-600">
                    Segunda a Sexta: 08:00 - 20:00<br />
                    Sábado: 09:00 - 18:00<br />
                    Domingo: Disponível para emergências
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-stone-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97743.95087478868!2d-8.738877450000001!3d39.36187765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18d5b2c86e22fb%3A0x500ebbde490b7a0!2s2500%20Caldas%20da%20Rainha!5e0!3m2!1spt-PT!2spt!4v1234567890123!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-stone-50 to-white p-8 rounded-2xl shadow-elevation border border-stone-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="O seu nome"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="919 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-stone-700 mb-2">
                    Tipo de Serviço *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="residencial">Mudança Residencial</option>
                    <option value="comercial">Mudança Comercial</option>
                    <option value="transporte">Transporte de Mercadorias</option>
                    <option value="internacional">Mudança Internacional</option>
                    <option value="armazenamento">Armazenamento</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    placeholder="Conte-nos mais sobre a sua mudança..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>A enviar...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Pedido</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Mensagem enviada com sucesso!</p>
                    <p className="text-sm">Entraremos em contacto brevemente.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
