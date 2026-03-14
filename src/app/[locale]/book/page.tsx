'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import { Calendar, Users, Building2, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BookPage() {
  const t = useTranslations('booking');
  const [email, setEmail] = useState('');
  const [isNotified, setIsNotified] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsNotified(true);
      setEmail('');
      setTimeout(() => setIsNotified(false), 3000);
    }
  };

  const roomTypes = [
    { id: 'studio', name: 'Studio', size: '35 sqm' },
    { id: 'one-bed', name: 'One Bedroom', size: '70 sqm' },
    { id: 'two-bed', name: 'Two Bedroom', size: '90 sqm' },
    { id: 'penthouse', name: 'Penthouse', size: '150 sqm' },
  ];

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

      {/* Coming Soon Status */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="p-8 md:p-12 bg-gradient-to-br from-bastet-gold to-bastet-gold-light rounded-xl mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <Clock className="text-bastet-navy" size={32} />
              <div>
                <p className="text-sm font-semibold text-bastet-navy uppercase tracking-wider">
                  Direct Booking Opening
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-navy">
                  {t('comingSoon')}
                </h2>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-bastet-charcoal-light mb-12">
            For now, you can book through our trusted partners or join the early access list below for exclusive launch rates and VIP benefits.
          </p>

          {/* Third-Party Booking Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a
              href="#"
              className="p-8 rounded-xl border-2 border-bastet-sand hover:border-bastet-gold bg-white hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl font-bold text-bastet-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                🏨
              </div>
              <h3 className="text-xl font-semibold text-bastet-navy mb-2">Booking.com</h3>
              <p className="text-sm text-bastet-charcoal-light mb-4">
                Find and book your apartment now
              </p>
              <span className="inline-block text-bastet-gold font-semibold">Browse →</span>
            </a>

            <a
              href="#"
              className="p-8 rounded-xl border-2 border-bastet-sand hover:border-bastet-gold bg-white hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl font-bold text-bastet-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                ✈️
              </div>
              <h3 className="text-xl font-semibold text-bastet-navy mb-2">Expedia</h3>
              <p className="text-sm text-bastet-charcoal-light mb-4">
                Explore rates and availability
              </p>
              <span className="inline-block text-bastet-gold font-semibold">Browse →</span>
            </a>

            <a
              href="#"
              className="p-8 rounded-xl border-2 border-bastet-sand hover:border-bastet-gold bg-white hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl font-bold text-bastet-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                🏠
              </div>
              <h3 className="text-xl font-semibold text-bastet-navy mb-2">Airbnb</h3>
              <p className="text-sm text-bastet-charcoal-light mb-4">
                Search by room type and dates
              </p>
              <span className="inline-block text-bastet-gold font-semibold">Browse →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mock Booking Widget */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="mb-12">
            <SectionHeader
              title="How Booking Will Work"
              subtitle="A preview of our direct booking experience, opening Q3 2027"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Mock Widget */}
              <div className="p-8 md:p-10 space-y-8">
                {/* Heading */}
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-display font-bold text-bastet-navy mb-2">
                    Book Your Perfect Getaway
                  </h3>
                  <p className="text-bastet-charcoal-light">
                    Select your dates, apartment type, and guests
                  </p>
                </div>

                {/* Search Grid */}
                <div className="grid md:grid-cols-4 gap-4 md:gap-3">
                  {/* Check-in */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-bastet-navy uppercase mb-2 tracking-wider">
                      {t('checkIn')}
                    </label>
                    <div className="px-4 py-3 rounded-lg bg-bastet-sand-light border border-bastet-sand text-bastet-charcoal flex items-center gap-2 opacity-60 cursor-not-allowed">
                      <Calendar size={18} className="text-bastet-gold" />
                      <span className="text-sm">Mar 20, 2027</span>
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-bastet-navy uppercase mb-2 tracking-wider">
                      {t('checkOut')}
                    </label>
                    <div className="px-4 py-3 rounded-lg bg-bastet-sand-light border border-bastet-sand text-bastet-charcoal flex items-center gap-2 opacity-60 cursor-not-allowed">
                      <Calendar size={18} className="text-bastet-gold" />
                      <span className="text-sm">Mar 27, 2027</span>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-bastet-navy uppercase mb-2 tracking-wider">
                      {t('guests')}
                    </label>
                    <div className="px-4 py-3 rounded-lg bg-bastet-sand-light border border-bastet-sand text-bastet-charcoal flex items-center gap-2 opacity-60 cursor-not-allowed">
                      <Users size={18} className="text-bastet-gold" />
                      <span className="text-sm">2 Guests</span>
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-bastet-navy uppercase mb-2 tracking-wider">
                      Room Type
                    </label>
                    <div className="px-4 py-3 rounded-lg bg-bastet-sand-light border border-bastet-sand text-bastet-charcoal flex items-center gap-2 opacity-60 cursor-not-allowed">
                      <Building2 size={18} className="text-bastet-gold" />
                      <span className="text-sm">Studio</span>
                    </div>
                  </div>
                </div>

                {/* Room Types */}
                <div>
                  <h4 className="text-sm font-semibold text-bastet-navy uppercase mb-4 tracking-wider">
                    Choose Your Apartment
                  </h4>
                  <div className="grid md:grid-cols-4 gap-3">
                    {roomTypes.map(room => (
                      <div
                        key={room.id}
                        className="p-4 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-bastet-sand opacity-60 cursor-not-allowed text-center hover:shadow-md transition-shadow"
                      >
                        <Building2 className="text-bastet-gold mx-auto mb-2" size={24} />
                        <h4 className="font-semibold text-bastet-navy text-sm">{room.name}</h4>
                        <p className="text-xs text-bastet-charcoal-light">{room.size}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Search Button */}
                <div className="pt-4 flex gap-4">
                  <button
                    disabled
                    className="flex-1 py-4 bg-bastet-sand text-bastet-charcoal font-semibold rounded-lg opacity-50 cursor-not-allowed"
                  >
                    {t('search')}
                  </button>
                </div>
              </div>

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-bastet-gold mx-auto mb-4" />
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    {t('comingSoon')}
                  </h3>
                  <p className="text-bastet-sand text-lg">
                    Direct booking opens Q3 2027
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="section-padding bg-gradient-to-br from-bastet-navy to-bastet-midnight text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-cream mb-3">
            Be First to Book
          </h2>
          <p className="text-lg text-bastet-sand mb-2 font-semibold">
            Get exclusive early-bird rates and VIP launch benefits
          </p>
          <p className="text-bastet-sand-light mb-8">
            Join our early access list and we'll notify you the moment direct booking opens with special launch pricing.
          </p>

          <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-bastet-navy focus:outline-none focus:ring-2 focus:ring-bastet-gold"
              required
            />
            <button
              type="submit"
              className={cn(
                'px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap',
                isNotified
                  ? 'bg-bastet-sage text-white'
                  : 'bg-gradient-to-r from-bastet-gold to-bastet-gold-light text-bastet-navy hover:shadow-lg'
              )}
            >
              {isNotified ? '✓ Got it!' : 'Notify Me'}
            </button>
          </form>

          <p className="text-sm text-bastet-sand-light">
            We'll send you exclusive pre-opening deals and early-bird rates — plus insider tips from Hurghada.
          </p>

          {/* Benefits */}
          <div className="mt-12 pt-12 border-t border-bastet-gold/30">
            <h3 className="text-xl font-semibold text-bastet-cream mb-6">
              Early Access Perks
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-white/10 border border-bastet-gold/20">
                <div className="text-bastet-gold font-bold mb-2">✓ 15% OFF</div>
                <p className="text-bastet-sand">Launch week rates</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 border border-bastet-gold/20">
                <div className="text-bastet-gold font-bold mb-2">✓ FLEXIBLE</div>
                <p className="text-bastet-sand">Free cancellation</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 border border-bastet-gold/20">
                <div className="text-bastet-gold font-bold mb-2">✓ VIP</div>
                <p className="text-bastet-sand">Priority support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
