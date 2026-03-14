'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import SectionHeader from '@/components/shared/SectionHeader';
import { Sun, Zap, Droplets, Leaf, Zap as Lightning, Certificate, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SustainabilityPage() {
  const t = useTranslations('sustainability');

  const stats = [
    {
      icon: Sun,
      stat: t('solar.stat'),
      title: t('solar.title'),
      description: t('solar.description'),
      color: 'from-yellow-400 to-orange-500',
      textColor: 'text-yellow-900',
    },
    {
      icon: Zap,
      stat: t('energy.stat'),
      title: t('energy.title'),
      description: t('energy.description'),
      color: 'from-blue-400 to-blue-600',
      textColor: 'text-blue-900',
    },
    {
      icon: Lightning,
      stat: t('ev.stat'),
      title: t('ev.title'),
      description: t('ev.description'),
      color: 'from-emerald-400 to-green-600',
      textColor: 'text-emerald-900',
    },
  ];

  const features = [
    {
      icon: Sun,
      title: t('solar.title'),
      description: t('solar.description'),
      color: 'from-yellow-400 to-orange-500',
      bgLight: 'bg-yellow-50',
    },
    {
      icon: Zap,
      title: t('energy.title'),
      description: t('energy.description'),
      color: 'from-blue-400 to-blue-600',
      bgLight: 'bg-blue-50',
    },
    {
      icon: Wind,
      title: t('plastic.title'),
      description: t('plastic.description'),
      color: 'from-cyan-400 to-blue-500',
      bgLight: 'bg-cyan-50',
    },
    {
      icon: Leaf,
      title: t('food.title'),
      description: t('food.description'),
      color: 'from-green-400 to-emerald-600',
      bgLight: 'bg-green-50',
    },
    {
      icon: Lightning,
      title: t('ev.title'),
      description: t('ev.description'),
      color: 'from-emerald-400 to-teal-600',
      bgLight: 'bg-emerald-50',
    },
    {
      icon: Certificate,
      title: t('certification.title'),
      description: t('certification.description'),
      color: 'from-bastet-sage to-emerald-500',
      bgLight: 'bg-green-50',
    },
    {
      icon: Droplets,
      title: t('water.title'),
      description: t('water.description'),
      color: 'from-blue-300 to-cyan-500',
      bgLight: 'bg-blue-50',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bastet-sage to-bastet-sage-dark text-white py-20 md:py-28 lg:py-36">
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
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-bastet-charcoal leading-relaxed">
              {t('intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={cn(
                    'p-8 md:p-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group',
                    `bg-gradient-to-br ${stat.color} text-white`
                  )}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="group-hover:scale-110 transition-transform duration-300" size={40} />
                    <div className="text-4xl md:text-5xl font-display font-bold">
                      {stat.stat}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeader
            title="Our Sustainability Initiatives"
            centered={true}
          />

          <div className="mt-16 md:mt-20">
            <div className="space-y-12 md:space-y-16">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={cn(
                      'grid md:grid-cols-2 gap-8 md:gap-12 items-center',
                      !isLeft && 'md:grid-flow-dense'
                    )}
                  >
                    {/* Image Placeholder */}
                    <div
                      className={cn(
                        'relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg',
                        `bg-gradient-to-br ${feature.color}`,
                        !isLeft && 'md:col-start-2'
                      )}
                    >
                      <div className="absolute inset-0 opacity-20 bg-black" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="text-white/40" size={80} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={cn(
                      'space-y-4',
                      !isLeft && 'md:col-start-1'
                    )}>
                      <div className={cn(
                        'inline-flex items-center justify-center w-16 h-16 rounded-lg',
                        feature.bgLight
                      )}>
                        <Icon className={cn(
                          'transition-colors duration-300',
                          feature.color === 'from-bastet-sage to-emerald-500'
                            ? 'text-bastet-sage-dark'
                            : `text-${feature.color.split('-')[1]}-900`
                        )} size={32} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-bastet-navy">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-bastet-charcoal leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="p-12 bg-white rounded-xl border-2 border-bastet-sage">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="text-bastet-sage" size={40} />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-bastet-navy">
                  Our Commitment
                </h2>
              </div>
              <p className="text-lg text-bastet-charcoal leading-relaxed mb-6">
                Bastet is more than a place to stay. It's a statement about tourism's future on the Red Sea coast. Every guest at Bastet contributes to the preservation of one of the world's most precious marine ecosystems.
              </p>
              <p className="text-lg text-bastet-charcoal leading-relaxed">
                We're pursuing EDGE certification from the IFC/World Bank — the gold standard for resource-efficient buildings. Our goal: show that hospitality and environmental responsibility aren't mutually exclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bastet-sage text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-cream mb-6">
            Be part of the solution
          </h2>
          <p className="text-lg md:text-xl text-bastet-sand mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose accommodation that respects the Red Sea. Bastet opens Q3 2027.
          </p>
          <Link href="/apartments" className="btn-primary text-base md:text-lg">
            Book Your Stay
          </Link>
        </div>
      </section>
    </div>
  );
}
