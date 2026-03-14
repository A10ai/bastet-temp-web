'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import SectionHeader from '@/components/shared/SectionHeader';
import { Wifi, Laptop, UtensilsCrossed, Calendar, Users, Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DigitalNomadsPage() {
  const t = useTranslations('digitalNomads');

  const whyBastetFeatures = [
    {
      icon: Wifi,
      title: t('wifi'),
      description: t('wifiDesc'),
      color: 'from-blue-400 to-blue-600',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-900',
    },
    {
      icon: Laptop,
      title: t('coworking'),
      description: t('coworkingDesc'),
      color: 'from-slate-500 to-slate-700',
      bgLight: 'bg-slate-50',
      textColor: 'text-slate-900',
    },
    {
      icon: UtensilsCrossed,
      title: t('kitchen'),
      description: t('kitchenDesc'),
      color: 'from-orange-400 to-red-500',
      bgLight: 'bg-orange-50',
      textColor: 'text-orange-900',
    },
    {
      icon: Calendar,
      title: t('monthly'),
      description: t('monthlyDesc'),
      color: 'from-emerald-400 to-green-600',
      bgLight: 'bg-emerald-50',
      textColor: 'text-emerald-900',
    },
    {
      icon: Users,
      title: t('community'),
      description: t('communityDesc'),
      color: 'from-purple-400 to-purple-600',
      bgLight: 'bg-purple-50',
      textColor: 'text-purple-900',
    },
    {
      icon: Anchor,
      title: t('diving'),
      description: t('divingDesc'),
      color: 'from-cyan-400 to-blue-500',
      bgLight: 'bg-cyan-50',
      textColor: 'text-cyan-900',
    },
  ];

  const typicalDay = [
    {
      time: t('morning'),
      description: t('morningDesc'),
      gradient: 'from-yellow-300 to-orange-400',
      icon: '🌅',
    },
    {
      time: t('midday'),
      description: t('middayDesc'),
      gradient: 'from-blue-400 to-cyan-500',
      icon: '☀️',
    },
    {
      time: t('afternoon'),
      description: t('afternoonDesc'),
      gradient: 'from-cyan-500 to-blue-500',
      icon: '🌊',
    },
    {
      time: t('evening'),
      description: t('eveningDesc'),
      gradient: 'from-purple-500 to-pink-500',
      icon: '🌅',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bastet-navy via-blue-900 to-bastet-midnight text-white py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201, 151, 91, 0.3) 0%, transparent 50%)',
        }} />

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bastet-cream mb-4">
            {t('headline')}
          </h1>
          <p className="text-lg md:text-xl text-bastet-sand max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Why Bastet */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <SectionHeader
            title={t('whyBastet')}
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {whyBastetFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={cn(
                    'group p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2',
                    feature.bgLight
                  )}
                >
                  <div className={cn(
                    'inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300',
                    `bg-gradient-to-br ${feature.color}`
                  )}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-bastet-navy mb-2 group-hover:text-bastet-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-bastet-charcoal-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A Typical Day */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeader
            title={t('typicalDay')}
            centered={true}
          />

          {/* Desktop Timeline */}
          <div className="hidden md:block mt-16 md:mt-20">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-bastet-gold via-bastet-gold to-transparent transform -translate-y-1/2" />

              <div className="grid md:grid-cols-4 gap-6 md:gap-8">
                {typicalDay.map((item, idx) => (
                  <div key={idx} className="group">
                    {/* Timeline dot */}
                    <div className="flex justify-center mb-6">
                      <div className={cn(
                        'w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-125',
                        `bg-gradient-to-br ${item.gradient}`
                      )}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="bg-bastet-sand rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                      <h4 className="text-xl font-display font-bold text-bastet-navy mb-3 text-center">
                        {item.time}
                      </h4>
                      <p className="text-bastet-charcoal text-center text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden mt-12 space-y-6">
            {typicalDay.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md',
                    `bg-gradient-to-br ${item.gradient}`
                  )}>
                    {item.icon}
                  </div>
                  {idx < typicalDay.length - 1 && (
                    <div className="w-1 h-12 bg-bastet-gold/30 my-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h4 className="text-lg font-display font-bold text-bastet-navy mb-1">
                    {item.time}
                  </h4>
                  <p className="text-bastet-charcoal-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Rate Callout */}
      <section className="section-padding bg-gradient-to-br from-bastet-gold/10 to-bastet-coral/10">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-12 shadow-lg border-2 border-bastet-gold text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bastet-gold rounded-full mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-navy mb-4">
                Long-stay pricing
              </h2>
              <p className="text-5xl md:text-6xl font-display font-bold text-bastet-gold mb-4">
                From ~$35/night
              </p>
              <p className="text-lg text-bastet-charcoal-light mb-8">
                for monthly and quarterly stays. The best value for digital nomads and remote workers looking for a real home by the sea.
              </p>
              <div className="pt-4 border-t border-bastet-gold/20">
                <p className="text-sm text-bastet-charcoal-light mt-4">
                  Prices vary by season. Early-bird rates available for Q3 2027 opening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nomad Testimonial Section */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-navy">
              Made for nomads, by nomads
            </h2>
            <p className="text-lg md:text-xl text-bastet-charcoal leading-relaxed">
              We've stayed in a hundred apartments. We know what breaks, what matters, and what kills productivity. Bastet was designed with our experience in mind.
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12">
              <div className="p-8 bg-white rounded-lg border border-bastet-gold/20 hover:border-bastet-gold hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-bastet-gold mb-3">⚡</div>
                <h4 className="font-display font-bold text-bastet-navy mb-2">Reliable Internet</h4>
                <p className="text-bastet-charcoal-light text-sm">Not a hope and a prayer. Enterprise-grade Wi-Fi that works for video calls, large uploads, and real work.</p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-bastet-gold/20 hover:border-bastet-gold hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-bastet-gold mb-3">🏠</div>
                <h4 className="font-display font-bold text-bastet-navy mb-2">Real Kitchens</h4>
                <p className="text-bastet-charcoal-light text-sm">Cook your own food. Save money. Eat healthy. Every apartment has a full kitchen, not a hotplate.</p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-bastet-gold/20 hover:border-bastet-gold hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-bastet-gold mb-3">🌊</div>
                <h4 className="font-display font-bold text-bastet-navy mb-2">Work-Life Balance</h4>
                <p className="text-bastet-charcoal-light text-sm">Three time zones ahead of Europe. Mornings free for diving, work during cool afternoons, sunsets on the rooftop.</p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-bastet-gold/20 hover:border-bastet-gold hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-bastet-gold mb-3">👥</div>
                <h4 className="font-display font-bold text-bastet-navy mb-2">Community</h4>
                <p className="text-bastet-charcoal-light text-sm">Meet other nomads. Collaborate. Dive together. A built-in social structure without the isolation of a rental apartment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bastet-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-cream mb-6">
            Ready to work from the Red Sea?
          </h2>
          <p className="text-lg md:text-xl text-bastet-sand mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch for personalized advice on monthly stays, community events, and early-bird rates.
          </p>
          <Link href="/contact" className="btn-primary text-base md:text-lg">
            Contact Us About Monthly Rates
          </Link>
        </div>
      </section>
    </div>
  );
}
