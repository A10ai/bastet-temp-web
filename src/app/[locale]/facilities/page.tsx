'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import SectionHeader from '@/components/shared/SectionHeader';
import { Waves, UtensilsCrossed, Wine, Flower2, Dumbbell, Laptop, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function FacilitiesPage() {
  const t = useTranslations('facilities');
  const tHome = useTranslations('home');

  const facilities = [
    {
      id: 'pool-beach',
      icon: Waves,
      title: tHome('pool'),
      description: tHome('poolDesc'),
      details: 'Main pool with sun loungers, poolside bar, and Mediterranean cuisine. Perfect for families and social gatherings.',
      gradient: 'from-blue-400 to-cyan-500',
      textColor: 'text-blue-900',
      bgLight: 'bg-blue-50',
    },
    {
      id: 'restaurant',
      icon: UtensilsCrossed,
      title: tHome('restaurant'),
      description: tHome('restaurantDesc'),
      details: 'Mediterranean-Egyptian fusion cuisine, live cooking station, and poolside seating with Red Sea views.',
      gradient: 'from-amber-400 to-orange-500',
      textColor: 'text-amber-900',
      bgLight: 'bg-amber-50',
    },
    {
      id: 'rooftop-bar',
      icon: Wine,
      title: tHome('rooftop'),
      description: tHome('rooftopDesc'),
      details: 'Signature cocktails with Egyptian ingredients, panoramic Red Sea sunsets, and live DJ on weekends.',
      gradient: 'from-indigo-900 to-bastet-gold',
      textColor: 'text-indigo-950',
      bgLight: 'bg-indigo-50',
    },
    {
      id: 'spa-wellness',
      icon: Flower2,
      title: tHome('spa'),
      description: tHome('spaDesc'),
      details: '500-800 sqm spa with treatment rooms, hammam, sauna, indoor pool, and yoga studio. Pure relaxation.',
      gradient: 'from-bastet-sage to-emerald-500',
      textColor: 'text-bastet-sage-dark',
      bgLight: 'bg-green-50',
    },
    {
      id: 'fitness',
      icon: Dumbbell,
      title: tHome('gym'),
      description: tHome('gymDesc'),
      details: '300 sqm state-of-the-art fitness centre with cardio, strength training, free weights, and personal training available.',
      gradient: 'from-rose-400 to-red-500',
      textColor: 'text-rose-900',
      bgLight: 'bg-rose-50',
    },
    {
      id: 'coworking',
      icon: Laptop,
      title: tHome('coworking'),
      description: tHome('coworkingDesc'),
      details: 'Ergonomic desks, enterprise Wi-Fi, power outlets, quiet zones, and meeting rooms. Built for focused work.',
      gradient: 'from-slate-500 to-slate-700',
      textColor: 'text-slate-900',
      bgLight: 'bg-slate-50',
    },
    {
      id: 'retail',
      icon: ShoppingBag,
      title: 'Retail Area',
      description: 'Curated boutique shops and local vendors.',
      details: 'Premium retail space with local artisan shops, beachwear, and Red Sea souvenirs.',
      gradient: 'from-pink-400 to-fuchsia-500',
      textColor: 'text-pink-900',
      bgLight: 'bg-pink-50',
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

      {/* Facilities Grid */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="space-y-24 md:space-y-32">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              const isLeft = idx % 2 === 0;

              return (
                <Link
                  key={facility.id}
                  href={`/facilities/${facility.id}`}
                  className="group block"
                >
                  <div className={cn(
                    'grid md:grid-cols-2 gap-8 md:gap-12 items-center',
                    !isLeft && 'md:grid-flow-dense'
                  )}>
                    {/* Image Placeholder */}
                    <div className={cn(
                      'relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300',
                      `bg-gradient-to-br ${facility.gradient}`,
                      !isLeft && 'md:col-start-2'
                    )}>
                      <img
                      src={`${basePath}/images/facilities/${facility.id === 'pool-beach' ? 'pool' : facility.id === 'spa-wellness' ? 'spa' : facility.id}.jpg`}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                    </div>

                    {/* Content */}
                    <div className={cn(
                      'space-y-4 md:space-y-6',
                      !isLeft && 'md:col-start-1'
                    )}>
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className={cn(
                          'p-3 rounded-lg group-hover:scale-110 transition-transform duration-300',
                          facility.bgLight
                        )}>
                          <Icon className={cn('transition-colors duration-300', facility.textColor)} size={32} />
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-bastet-navy">
                          {facility.title}
                        </h3>
                      </div>

                      <p className="text-lg text-bastet-charcoal-light leading-relaxed">
                        {facility.description}
                      </p>

                      <p className="text-base md:text-lg text-bastet-charcoal leading-relaxed">
                        {facility.details}
                      </p>

                      <div className="pt-4">
                        <span className="inline-flex items-center gap-2 text-bastet-gold font-semibold group-hover:gap-4 transition-all duration-300">
                          Learn More
                          <span className="text-xl">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bastet-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-cream mb-6">
            Ready to experience Bastet?
          </h2>
          <p className="text-lg md:text-xl text-bastet-sand mb-8 max-w-2xl mx-auto leading-relaxed">
            Every facility is designed to enhance your stay. From work to wellness to celebration.
          </p>
          <Link href="/apartments" className="btn-primary text-base md:text-lg">
            Explore Apartments
          </Link>
        </div>
      </section>
    </div>
  );
}
