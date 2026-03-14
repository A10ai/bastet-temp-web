'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import SectionHeader from '@/components/shared/SectionHeader';
import { Smartphone, ScanLine, MessageCircle, Thermometer, AppWindow, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SmartHotelPage() {
  const t = useTranslations('smartHotel');

  const features = [
    {
      number: '01',
      icon: Smartphone,
      title: t('keyless.title'),
      description: t('keyless.description'),
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      number: '02',
      icon: ScanLine,
      title: t('checkin.title'),
      description: t('checkin.description'),
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      number: '03',
      icon: MessageCircle,
      title: t('concierge.title'),
      description: t('concierge.description'),
      gradient: 'from-pink-400 to-rose-600',
    },
    {
      number: '04',
      icon: Thermometer,
      title: t('climate.title'),
      description: t('climate.description'),
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      number: '05',
      icon: AppWindow,
      title: t('app.title'),
      description: t('app.description'),
      gradient: 'from-orange-400 to-red-600',
    },
    {
      number: '06',
      icon: TrendingDown,
      title: t('pricing.title'),
      description: t('pricing.description'),
      gradient: 'from-bastet-gold to-orange-500',
    },
  ];

  const comparisonData = [
    {
      category: 'Check-in',
      bastet: 'Instant via app',
      traditional: '15-30 mins queue',
      airbnb: 'Manual coordination',
    },
    {
      category: 'Climate',
      bastet: 'AI learns your preferences',
      traditional: 'Manual thermostat',
      airbnb: 'Manual thermostat',
    },
    {
      category: 'Support',
      bastet: '24/7 AI concierge',
      traditional: 'Desk hours only',
      airbnb: 'Messaging only',
    },
    {
      category: 'Kitchen',
      bastet: 'Full equipped',
      traditional: 'None',
      airbnb: 'Maybe',
    },
    {
      category: 'Facilities',
      bastet: 'Pool, spa, gym, bar',
      traditional: 'Limited',
      airbnb: 'None',
    },
    {
      category: 'Pricing',
      bastet: 'Dynamic AI pricing',
      traditional: 'Fixed rates',
      airbnb: 'Variable rates',
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

      {/* How It Works Section */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <SectionHeader
            title={t('howItWorks')}
            centered={true}
          />

          <div className="mt-16 md:mt-20">
            {/* Desktop Timeline - Vertical Center Layout */}
            <div className="hidden md:block">
              <div className="space-y-20">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  const isLeft = idx % 2 === 0;

                  return (
                    <div key={idx} className={cn(
                      'grid md:grid-cols-2 gap-8 md:gap-12 items-center relative',
                      !isLeft && 'md:grid-flow-dense'
                    )}>
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                        <div className="w-6 h-6 rounded-full bg-bastet-gold border-4 border-bastet-cream" />
                      </div>

                      {/* Feature Card */}
                      <div className={cn(
                        'bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group',
                        !isLeft && 'md:col-start-1'
                      )}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-5xl font-display font-bold text-bastet-gold/30 group-hover:text-bastet-gold transition-colors duration-300">
                            {feature.number}
                          </div>
                          <div className={cn(
                            'p-3 rounded-lg group-hover:scale-110 transition-transform duration-300',
                            `bg-gradient-to-br ${feature.gradient}`
                          )}>
                            <Icon className="text-white" size={32} />
                          </div>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-bastet-navy mb-3 group-hover:text-bastet-gold transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-bastet-charcoal-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Spacer for grid */}
                      <div />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group border-l-4 border-bastet-gold"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={cn(
                        'p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300',
                        `bg-gradient-to-br ${feature.gradient}`
                      )}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-display font-bold text-bastet-gold/30">
                          {feature.number}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-bastet-navy mb-2 group-hover:text-bastet-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-bastet-charcoal-light text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Not a Robot Hotel Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-navy">
              Not a robot hotel.
            </h2>
            <p className="text-lg md:text-xl text-bastet-charcoal-light leading-relaxed">
              Bastet's AI is invisible. You won't interact with a machine. You'll just notice that your room knows your temperature preference before you ask. That your concierge responds in seconds, not hours. That everything works — seamlessly.
            </p>
            <p className="text-lg md:text-xl text-bastet-charcoal leading-relaxed">
              The technology disappears. The experience remains. That's the Bastet difference.
            </p>

            {/* Visual Highlight */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
              <div className="p-8 bg-bastet-cream rounded-lg border border-bastet-gold/20 hover:border-bastet-gold hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-display font-bold text-bastet-gold mb-2">24/7</div>
                <p className="text-bastet-charcoal font-semibold">AI Support</p>
                <p className="text-sm text-bastet-charcoal-light mt-2">Instant answers anytime</p>
              </div>
              <div className="p-8 bg-bastet-cream rounded-lg border border-bastet-gold/20 hover:border-bastet-gold hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-display font-bold text-bastet-gold mb-2">30s</div>
                <p className="text-bastet-charcoal font-semibold">Check-in</p>
                <p className="text-sm text-bastet-charcoal-light mt-2">Straight to your room</p>
              </div>
              <div className="p-8 bg-bastet-cream rounded-lg border border-bastet-gold/20 hover:border-bastet-gold hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-display font-bold text-bastet-gold mb-2">∞</div>
                <p className="text-bastet-charcoal font-semibold">Possibilities</p>
                <p className="text-sm text-bastet-charcoal-light mt-2">All from your phone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <SectionHeader
            title="How Bastet Compares"
            centered={true}
          />

          <div className="mt-12 md:mt-16 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-bastet-navy text-white">
                  <th className="px-6 py-4 text-left font-display font-bold">Feature</th>
                  <th className="px-6 py-4 text-left font-display font-bold text-bastet-gold">Bastet</th>
                  <th className="px-6 py-4 text-left font-display font-bold">Traditional Hotel</th>
                  <th className="px-6 py-4 text-left font-display font-bold">Airbnb</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={cn(
                      'border-b border-bastet-gold/20',
                      idx % 2 === 0 ? 'bg-white' : 'bg-bastet-sand'
                    )}
                  >
                    <td className="px-6 py-4 font-semibold text-bastet-navy">{row.category}</td>
                    <td className="px-6 py-4 text-bastet-gold font-semibold">{row.bastet}</td>
                    <td className="px-6 py-4 text-bastet-charcoal-light">{row.traditional}</td>
                    <td className="px-6 py-4 text-bastet-charcoal-light">{row.airbnb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bastet-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-cream mb-6">
            Experience smart living
          </h2>
          <p className="text-lg md:text-xl text-bastet-sand mb-8 max-w-2xl mx-auto leading-relaxed">
            Bastet opens Q3 2027. Be among the first to experience AI-powered apartment living at its finest.
          </p>
          <Link href="/apartments" className="btn-primary text-base md:text-lg">
            Explore Apartments
          </Link>
        </div>
      </section>
    </div>
  );
}
