'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import SectionHeader from '@/components/shared/SectionHeader';
import FeatureCard from '@/components/shared/FeatureCard';
import { Link } from '@/lib/navigation';
import {
  Smartphone,
  Thermometer,
  MessageCircle,
  ScanLine,
  Waves,
  UtensilsCrossed,
  Building2,
  Flower2,
  Dumbbell,
  Laptop2,
  Sun,
  Navigation,
  TrendingDown,
  Leaf,
  Check,
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');
  const tHero = useTranslations('hero');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const apartments = [
    {
      id: 'studio',
      name: t('studio'),
      description: t('studioDesc'),
      size: '35 sqm',
      gradient: 'from-bastet-coral to-bastet-gold',
    },
    {
      id: 'one-bed',
      name: t('oneBed'),
      description: t('oneBedDesc'),
      size: '70 sqm',
      gradient: 'from-bastet-sage to-bastet-sage-dark',
    },
    {
      id: 'two-bed',
      name: t('twoBed'),
      description: t('twoBedDesc'),
      size: '90 sqm',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      id: 'penthouse',
      name: t('penthouse'),
      description: t('penthouseDesc'),
      size: '150 sqm',
      gradient: 'from-purple-400 to-purple-600',
    },
  ];

  const smartFeatures = [
    {
      icon: <Smartphone size={40} />,
      title: t('smartKeyless'),
      description: t('smartKeylessDesc'),
    },
    {
      icon: <Thermometer size={40} />,
      title: t('smartClimate'),
      description: t('smartClimateDesc'),
    },
    {
      icon: <MessageCircle size={40} />,
      title: t('smartConcierge'),
      description: t('smartConciergeDesc'),
    },
    {
      icon: <ScanLine size={40} />,
      title: t('smartCheckin'),
      description: t('smartCheckinDesc'),
    },
  ];

  const facilities = [
    {
      icon: <Waves size={40} />,
      title: t('pool'),
      description: t('poolDesc'),
    },
    {
      icon: <UtensilsCrossed size={40} />,
      title: t('restaurant'),
      description: t('restaurantDesc'),
    },
    {
      icon: <Building2 size={40} />,
      title: t('rooftop'),
      description: t('rooftopDesc'),
    },
    {
      icon: <Flower2 size={40} />,
      title: t('spa'),
      description: t('spaDesc'),
    },
    {
      icon: <Dumbbell size={40} />,
      title: t('gym'),
      description: t('gymDesc'),
    },
    {
      icon: <Laptop2 size={40} />,
      title: t('coworking'),
      description: t('coworkingDesc'),
    },
  ];

  const locationStats = [
    {
      icon: <Navigation size={32} />,
      label: t('locationAirport'),
    },
    {
      icon: <Sun size={32} />,
      label: t('locationMamsha'),
    },
    {
      icon: <Waves size={32} />,
      label: t('locationDiving'),
    },
    {
      icon: <Sun size={32} />,
      label: t('locationSunshine'),
    },
  ];

  const sustainabilityHighlights = [
    {
      icon: <Sun size={40} />,
      title: t('sustainSolar'),
      description: t('sustainSolarDesc'),
    },
    {
      icon: <TrendingDown size={40} />,
      title: t('sustainPlastic'),
      description: t('sustainPlasticDesc'),
    },
    {
      icon: <Leaf size={40} />,
      title: t('sustainEnergy'),
      description: t('sustainEnergyDesc'),
    },
    {
      icon: <Check size={40} />,
      title: t('sustainGreen'),
      description: t('sustainGreenDesc'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        tagline={tHero('tagline')}
        subtitle={tHero('subtitle')}
        ctaPrimary={tHero('cta')}
        ctaSecondary={tHero('ctaSecondary')}
      />

      {/* Concept Section */}
      <section id="concept" className="section-padding bg-bastet-cream">
        <div className="container max-w-3xl mx-auto">
          <SectionHeader
            title={t('conceptTitle')}
            subtitle={t('conceptText')}
            centered={true}
          />
        </div>
      </section>

      {/* Apartments Preview Section */}
      <section id="apartments" className="section-padding bg-white">
        <div className="container">
          <SectionHeader
            title={t('apartmentsTitle')}
            subtitle={t('apartmentsSubtitle')}
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {apartments.map((apt) => (
              <Link
                key={apt.id}
                href={`/apartments/${apt.id}`}
                className="group"
              >
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image placeholder */}
                  <div className={`h-48 md:h-56 bg-gradient-to-br ${apt.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="p-6 bg-white">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-bastet-navy mb-2">
                      {apt.name}
                    </h3>
                    <p className="text-bastet-charcoal-light text-sm md:text-base mb-4 leading-relaxed">
                      {apt.description}
                    </p>
                    <p className="text-bastet-gold font-semibold text-lg">
                      {apt.size}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <Link href="/apartments" className="btn-primary text-base md:text-lg">
              {t('viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Smart Technology Section */}
      <section id="smart-hotel" className="section-padding bg-bastet-navy text-white">
        <div className="container">
          <SectionHeader
            title={t('smartTitle')}
            subtitle={t('smartSubtitle')}
            centered={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {smartFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-lg bg-bastet-midnight border border-bastet-gold/20 hover:border-bastet-gold transition-all duration-300 hover:shadow-lg group cursor-pointer"
              >
                <div className="mb-4 text-bastet-gold group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-bastet-cream mb-3">
                  {feature.title}
                </h3>
                <p className="text-bastet-sand leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <Link href="/smart-hotel" className="btn-primary text-base md:text-lg">
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="section-padding bg-white">
        <div className="container">
          <SectionHeader
            title={t('facilitiesTitle')}
            subtitle={t('facilitiesSubtitle')}
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {facilities.map((facility, idx) => (
              <FeatureCard
                key={idx}
                icon={facility.icon}
                title={facility.title}
                description={facility.description}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <Link href="/facilities" className="btn-primary text-base md:text-lg">
              {t('viewFacilities')}
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section-padding bg-bastet-navy text-white">
        <div className="container">
          <SectionHeader
            title={t('locationTitle')}
            subtitle={t('locationSubtitle')}
            centered={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {locationStats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 md:p-8 rounded-lg bg-bastet-midnight border border-bastet-gold/20 hover:border-bastet-gold transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4 text-bastet-gold">
                  {stat.icon}
                </div>
                <p className="text-lg md:text-xl text-bastet-sand font-semibold leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <Link href="/location" className="btn-primary text-base md:text-lg">
              {t('exploreLocation')}
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="section-padding bg-white">
        <div className="container">
          <SectionHeader
            title={t('sustainTitle')}
            subtitle={t('sustainSubtitle')}
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {sustainabilityHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-lg bg-bastet-sand border-2 border-bastet-sage hover:border-bastet-sage-dark transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 text-bastet-sage">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-bastet-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-bastet-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA Section */}
      <section id="cta" className="section-padding bg-gradient-to-br from-bastet-navy to-bastet-charcoal text-white">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-cream mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-lg md:text-xl text-bastet-sand mb-8 leading-relaxed">
              {t('ctaSubtitle')}
            </p>

            {/* Email Form */}
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('ctaPlaceholder')}
                required
                className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg bg-white text-bastet-navy placeholder-bastet-charcoal-light focus:outline-none focus:ring-2 focus:ring-bastet-gold"
              />
              <button
                type="submit"
                className="btn-primary text-base md:text-lg whitespace-nowrap"
              >
                {isSubmitted ? '✓ Submitted' : t('ctaButton')}
              </button>
            </form>

            <p className="text-sm md:text-base text-bastet-sand/80">
              {t('ctaDisclaimer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
