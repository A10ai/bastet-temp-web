'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import { MapPin, Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  const subjects = ['General Inquiry', 'Partnership', 'Media Inquiry', 'Support', 'Other'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bastet-navy to-bastet-midnight text-white py-20 md:py-28 lg:py-36">
        <div className="container text-center">
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
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-bastet-navy mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-bastet-sand focus:border-bastet-gold focus:outline-none transition-colors duration-300 text-bastet-charcoal"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-bastet-navy mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-bastet-sand focus:border-bastet-gold focus:outline-none transition-colors duration-300 text-bastet-charcoal"
                    required
                  />
                </div>

                {/* Subject */}
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
                    <option value="">Choose a subject...</option>
                    {subjects.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-bastet-navy mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-bastet-sand focus:border-bastet-gold focus:outline-none transition-colors duration-300 text-bastet-charcoal resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={cn(
                    'w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105',
                    isSubmitted
                      ? 'bg-bastet-sage text-white'
                      : 'bg-gradient-to-r from-bastet-gold to-bastet-gold-light text-bastet-navy hover:shadow-lg'
                  )}
                >
                  {isSubmitted ? '✓ Message Sent!' : t('send')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-bastet-navy mb-8">
                {t('info')}
              </h2>

              <div className="space-y-6 mb-10">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-bastet-coral/20">
                      <MapPin className="text-bastet-coral" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bastet-navy mb-1">Address</h3>
                    <p className="text-bastet-charcoal-light">
                      {t('address')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bastet-navy mb-1">{t('emailLabel')}</h3>
                    <a href="mailto:hello@bastet.com" className="text-bastet-gold hover:text-bastet-gold-light transition-colors">
                      hello@bastet.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                      <Phone className="text-green-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bastet-navy mb-1">{t('phoneLabel')}</h3>
                    <a href="tel:+20123456789" className="text-bastet-charcoal-light hover:text-bastet-navy transition-colors">
                      +20 (123) 456-789
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                      <MessageCircle className="text-green-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-bastet-navy mb-1">{t('whatsapp')}</h3>
                    <a href="https://wa.me/201234567890" className="text-bastet-charcoal-light hover:text-bastet-navy transition-colors">
                      +20 (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-bastet-sand flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-bastet-navy mx-auto mb-2 opacity-30" />
                  <p className="text-bastet-charcoal-light">Map coming soon</p>
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
              { icon: Facebook, label: 'Facebook', color: 'text-blue-600 hover:text-blue-700' },
              { icon: Instagram, label: 'Instagram', color: 'text-pink-600 hover:text-pink-700' },
              { icon: Linkedin, label: 'LinkedIn', color: 'text-blue-700 hover:text-blue-800' },
              { icon: Twitter, label: 'Twitter', color: 'text-sky-500 hover:text-sky-600' },
            ].map(({ icon: Icon, label, color }) => (
              <a
                key={label}
                href="#"
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
