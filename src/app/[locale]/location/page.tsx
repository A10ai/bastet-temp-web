'use client';

import { useTranslations } from 'next-intl';
import SectionHeader from '@/components/shared/SectionHeader';
import FeatureCard from '@/components/shared/FeatureCard';
import { Waves, Plane, Fish, Sun, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LocationPage() {
  const t = useTranslations('location');

  const highlights = [
    {
      icon: <Waves size={40} />,
      title: t('mamsha'),
      description: t('mamshaDesc'),
    },
    {
      icon: <Plane size={40} />,
      title: t('airport'),
      description: t('airportDesc'),
    },
    {
      icon: <Fish size={40} />,
      title: t('diving'),
      description: t('divingDesc'),
    },
    {
      icon: <Sun size={40} />,
      title: t('sunshine'),
      description: t('sunshineDesc'),
    },
    {
      icon: <MapPin size={40} />,
      title: t('flights'),
      description: t('flightsDesc'),
    },
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

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container max-w-2xl text-center">
          <p className="text-lg md:text-xl text-bastet-charcoal leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="relative h-96 md:h-[32rem] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-200 to-slate-300 border-4 border-bastet-sand flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-20 h-20 text-bastet-navy mx-auto mb-4 opacity-30" />
              <p className="text-bastet-charcoal-light text-lg">Map coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              title="Why Hurghada"
              subtitle="Five reasons Kawthar is the perfect location for your Red Sea escape"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((highlight, idx) => (
              <FeatureCard
                key={idx}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Hurghada */}
      <section className="section-padding bg-gradient-to-br from-bastet-navy via-bastet-midnight to-bastet-navy text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-cream mb-6">
            {t('hurghada')}
          </h2>
          <p className="text-lg md:text-xl text-bastet-sand leading-relaxed mb-8">
            {t('hurghadaText')}
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-white/10 border border-bastet-gold/30 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-display font-bold text-bastet-gold mb-2">
                15.8M
              </div>
              <p className="text-bastet-sand">Visitors in 2024</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 border border-bastet-gold/30 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-display font-bold text-bastet-gold mb-2">
                30M
              </div>
              <p className="text-bastet-sand">Target by 2030</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 border border-bastet-gold/30 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-display font-bold text-bastet-gold mb-2">
                ↑89%
              </div>
              <p className="text-bastet-sand">Growth projected</p>
            </div>
          </div>

          {/* Source Markets */}
          <div className="mt-12 pt-12 border-t border-bastet-gold/30">
            <h3 className="text-2xl font-display font-bold text-bastet-cream mb-6">
              Direct Flights From
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Germany', 'Russia', 'UK', 'Italy', 'Poland', 'Czech Republic'].map((country) => (
                <div
                  key={country}
                  className="px-6 py-3 rounded-full bg-bastet-gold/20 border border-bastet-gold/50 text-bastet-cream font-semibold hover:bg-bastet-gold/30 transition-colors duration-300"
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bastet-cream">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-navy mb-4">
            Ready to discover your Red Sea home?
          </h2>
          <p className="text-lg text-bastet-charcoal-light mb-8">
            Browse apartments and secure your spot at Bastet.
          </p>
          <button className="inline-block px-8 py-4 bg-gradient-to-r from-bastet-gold to-bastet-gold-light text-bastet-navy font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Explore Apartments
          </button>
        </div>
      </section>
    </div>
  );
}
