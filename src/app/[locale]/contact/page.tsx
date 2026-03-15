'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle, Facebook, Instagram, Music2, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const subjects = [
    t('subjectGeneral'),
    t('subjectPartnership'),
    t('subjectMedia'),
    t('subjectBooking'),
    t('subjectOther'),
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${basePath}/hero/3.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bastet-navy/85 to-bastet-midnight/90" />
        </div>
        <div className="container relative z-10 py-24 md:py-32 lg:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bastet-cream mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-bastet-sand max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold text-bastet-navy mb-8">
                {t('getInTouch')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-bastet-navy mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('namePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-bastet-sand focus:border-bastet-gold focus:outline-none transition-colors duration-300 text-bastet-charcoal"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-bastet-navy mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-bastet-sand focus:border-bastet-gold focus:outline-none transition-colors duration-300 text-bastet-charcoal"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-bastet-navy mb-2">
                    {t('subject')}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-bastet-sand focus:border-bastet-gold focus:outline-none transition-colors duration-300 text-bastet-charcoal appearance-none cursor-pointer"
                  >
                    <option value="">{t('subjectPlaceholder')}</option>
                    {subjects.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-bastet-navy mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('messagePlaceholder')}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-bastet-sand focus:border-bastet-gold focus:outline-none transition-colors duration-300 text-bastet-charcoal resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    'w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105',
                    isSubmitted
                      ? 'bg-bastet-sage text-white'
                      : 'bg-gradient-to-r from-bastet-gold to-bastet-gold-light text-bastet-navy hover:shadow-lg'
                  )}
                >
                  {isSubmitted ? `\u2713 ${t('sent')}` : t('send')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-bastet-navy mb-8">
                {t('info')}
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-bastet-coral/20">
                      <MapPin className="text-bastet-coral" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bastet-navy mb-1">{t('addressLabel')}</h3>
                    <p className="text-bastet-charcoal-light">{t('address')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bastet-navy mb-1">{t('emailLabel')}</h3>
                    <a href="mailto:info@bastethotels.ai" className="text-bastet-gold hover:text-bastet-gold-light transition-colors">
                      info@bastethotels.ai
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                      <Phone className="text-green-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bastet-navy mb-1">{t('phoneLabel')}</h3>
                    <a href="tel:+201000000000" className="text-bastet-charcoal-light hover:text-bastet-navy transition-colors">
                      +20 (100) 000-0000
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                      <MessageCircle className="text-green-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bastet-navy mb-1">{t('whatsapp')}</h3>
                    <a href="https://wa.me/201000000000" className="text-bastet-charcoal-light hover:text-bastet-navy transition-colors">
                      +20 (100) 000-0000
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-bastet-sand">
                <img
                  src={`${basePath}/images/location/hurghada-aerial.jpg`}
                  alt="Hurghada"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bastet-navy/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-10 h-10 mx-auto mb-2" />
                    <p className="font-semibold">{t('mapComing')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-bastet-cream">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold text-bastet-navy mb-8">
            {t('followUs')}
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { icon: Instagram, label: 'Instagram', color: 'text-pink-600 hover:text-pink-700', href: 'https://instagram.com/bastethotels' },
              { icon: Facebook, label: 'Facebook', color: 'text-blue-600 hover:text-blue-700', href: 'https://facebook.com/bastethotels' },
              { icon: Music2, label: 'TikTok', color: 'text-gray-800 hover:text-gray-900', href: 'https://tiktok.com/@bastethotels' },
              { icon: Youtube, label: 'YouTube', color: 'text-red-600 hover:text-red-700', href: 'https://youtube.com/@bastethotels' },
            ].map(({ icon: Icon, label, color, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-4 rounded-lg bg-white border-2 border-bastet-sand hover:border-bastet-gold transition-all duration-300 transform hover:scale-110',
                  color
                )}
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
