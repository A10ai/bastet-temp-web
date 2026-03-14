import { Link } from '@/lib/navigation';
import SectionHeader from '@/components/shared/SectionHeader';
import {
  UtensilsCrossed,
  Smartphone,
  Thermometer,
  Tv,
  Wifi,
  Wind,
} from 'lucide-react';

async function loadMessages(locale: string) {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return messages.apartments || {};
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const apt = await loadMessages(locale);
  return {
    title: apt.title || 'Apartments',
  };
}

export default async function ApartmentsPage({ params: { locale } }: { params: { locale: string } }) {
  const aptMessages = await loadMessages(locale);
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = aptMessages;
    for (const k of keys) value = value?.[k];
    return typeof value === 'string' ? value : '';
  };

  const apartments = [
    {
      id: 'studio',
      name: t('studio') || 'Studio',
      description: 'Compact and smart',
      size: '35 sqm',
      gradient: 'from-bastet-coral to-bastet-gold',
      image: 'bg-gradient-to-br from-bastet-coral to-bastet-gold',
    },
    {
      id: 'one-bed',
      name: t('oneBed') || 'One Bedroom',
      description: 'Perfect for couples',
      size: '70 sqm',
      gradient: 'from-bastet-sage to-bastet-sage-dark',
      image: 'bg-gradient-to-br from-bastet-sage to-bastet-sage-dark',
    },
    {
      id: 'two-bed',
      name: t('twoBed') || 'Two Bedroom',
      description: 'Family living',
      size: '90 sqm',
      gradient: 'from-blue-400 to-blue-600',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      id: 'penthouse',
      name: t('penthouse') || 'Penthouse',
      description: 'Luxury panoramic views',
      size: '150 sqm',
      gradient: 'from-purple-400 to-purple-600',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
  ];

  const features = [
    {
      icon: <UtensilsCrossed size={32} />,
      label: t('features.kitchen') || 'Full kitchenette with dishwasher',
    },
    {
      icon: <Smartphone size={32} />,
      label: t('features.smartLock') || 'Smart lock — keyless entry via phone',
    },
    {
      icon: <Thermometer size={32} />,
      label: t('features.climate') || 'Smart climate that learns your preferences',
    },
    {
      icon: <Tv size={32} />,
      label: t('features.tv') || 'Smart TV with streaming apps',
    },
    {
      icon: <Wifi size={32} />,
      label: t('features.wifi') || 'Enterprise-grade high-speed Wi-Fi',
    },
    {
      icon: <Wind size={32} />,
      label: t('features.balcony') || 'Private balcony or terrace',
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-bastet-navy to-bastet-midnight text-white py-20 md:py-28 lg:py-36">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bastet-cream mb-4">
            {t('title') || 'Apartments'}
          </h1>
          <p className="text-lg md:text-xl text-bastet-sand max-w-3xl mx-auto leading-relaxed">
            {t('subtitle') || 'Every unit comes fully equipped with a kitchen — because freedom means choice.'}
          </p>
        </div>
      </section>

      {/* In Every Apartment Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeader
            title={t('everyApartment') || 'In every apartment'}
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-bastet-sand border border-bastet-gold/20 hover:border-bastet-gold transition-all duration-300 hover:shadow-lg group cursor-pointer"
              >
                <div className="flex-shrink-0 text-bastet-gold group-hover:scale-110 transition-transform duration-300 mt-1">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg text-bastet-charcoal font-medium leading-relaxed">
                    {feature.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {apartments.map((apt) => (
              <Link
                key={apt.id}
                href={`/apartments/${apt.id}`}
                className="group"
              >
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className={`h-48 md:h-56 ${apt.image} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="p-6 bg-white flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-bastet-navy mb-2">
                      {apt.name}
                    </h3>
                    <p className="text-bastet-charcoal-light text-sm md:text-base mb-4 flex-1">
                      {apt.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-bastet-gold font-semibold text-lg">
                        {apt.size}
                      </span>
                      <span className="text-bastet-gold font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bastet-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-cream mb-6">
            Ready to find your perfect apartment?
          </h2>
          <p className="text-lg md:text-xl text-bastet-sand mb-8 max-w-2xl mx-auto leading-relaxed">
            Opening Q3 2027. Sign up for early-bird rates and exclusive launch offers.
          </p>
          <Link href="/" className="btn-primary text-base md:text-lg">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
