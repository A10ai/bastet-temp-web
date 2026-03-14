import { unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/navigation';
import { ChevronLeft } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

async function loadAptMessages(locale: string) {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return messages.apartments || {};
}

export async function generateStaticParams() {
  return [
    { type: 'studio' },
    { type: 'one-bed' },
    { type: 'two-bed' },
    { type: 'penthouse' },
  ];
}

export async function generateMetadata({ params: { locale, type } }: { params: { locale: string; type: string } }) {
  const apt = await loadAptMessages(locale);
  const typeName = type === 'studio' ? apt.studio :
                   type === 'one-bed' ? apt.oneBed :
                   type === 'two-bed' ? apt.twoBed : apt.penthouse;
  return {
    title: typeName || type,
  };
}

interface ApartmentDetails {
  name: string;
  size: string;
  description: string;
  gradient: string;
  features: string[];
  amenities: string[];
}

const apartmentData: Record<string, ApartmentDetails> = {
  studio: {
    name: 'Studio',
    size: '35 sqm',
    description: 'Compact and perfectly designed for solo travellers and couples. Full kitchenette, smart climate, and a private balcony.',
    gradient: 'from-bastet-coral to-bastet-gold',
    features: [
      'Full kitchenette with appliances',
      'Smart climate control',
      'Keyless smart lock entry',
      'Smart TV with streaming',
      'High-speed Wi-Fi',
      'Private balcony',
      'Luxury bathroom with rain shower',
      'Work desk area',
    ],
    amenities: [
      'Linens & towels included',
      'Air conditioning',
      'Heating',
      'Coffee maker',
      'Hairdryer',
      'Safe for valuables',
      'Phone charging stations',
    ],
  },
  'one-bed': {
    name: 'One Bedroom',
    size: '70 sqm',
    description: 'Spacious living with a separate bedroom and lounge area. Ideal for couples and extended stays.',
    gradient: 'from-bastet-sage to-bastet-sage-dark',
    features: [
      'Separate bedroom & living area',
      'Full kitchen with dishwasher',
      'Smart climate throughout',
      'Multiple smart TVs',
      'High-speed Wi-Fi',
      'Large private balcony/terrace',
      'Ensuite bathroom',
      'Large work desk',
    ],
    amenities: [
      'Washing machine in unit',
      'Full kitchen utilities',
      'Premium linens',
      'Multiple bathrooms',
      'Climate zoning',
      'Smart lighting',
      'Storage spaces',
      'Iron & ironing board',
    ],
  },
  'two-bed': {
    name: 'Two Bedroom',
    size: '90 sqm',
    description: 'Perfect for families. Two bedrooms with en-suite bathrooms, full kitchen, and in-unit laundry.',
    gradient: 'from-blue-400 to-blue-600',
    features: [
      'Two spacious bedrooms',
      'Two full bathrooms',
      'Full-size kitchen',
      'Separate dining area',
      'Living room with smart TV',
      'Large terrace/balcony',
      'In-unit washer & dryer',
      'Multiple work zones',
    ],
    amenities: [
      'Double kitchenware',
      'Kids welcome',
      'Family-size linens',
      'Ample storage',
      'Climate zones',
      'Smart lighting system',
      'Premium amenities',
      'Blackout curtains',
    ],
  },
  penthouse: {
    name: 'Penthouse',
    size: '150 sqm',
    description: 'The ultimate luxury. Panoramic Red Sea views, private rooftop pool, and premium finishes throughout.',
    gradient: 'from-purple-400 to-purple-600',
    features: [
      'Three spacious bedrooms',
      'Three full bathrooms',
      'Luxury chef\'s kitchen',
      'Formal dining area',
      'Spacious living areas',
      'Private rooftop pool',
      ' 360° panoramic terrace',
      'Home automation system',
    ],
    amenities: [
      'Premium linens & furnishings',
      'Chef amenities package',
      'In-unit washer & dryer',
      'Smart home control',
      'Concierge service',
      'Private parking',
      'VIP amenities',
      'Personal climate zones',
    ],
  },
};

export default async function ApartmentDetailPage({ params: { locale, type } }: { params: { locale: string; type: string } }) {
  unstable_setRequestLocale(locale);
  const aptMsg = await loadAptMessages(locale);
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = aptMsg;
    for (const k of keys) value = value?.[k];
    return typeof value === 'string' ? value : '';
  };
  const apartment = apartmentData[type as keyof typeof apartmentData];

  if (!apartment) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold text-bastet-navy mb-4">Apartment not found</h1>
        <Link href="/apartments" className="btn-primary">
          Back to Apartments
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${apartment.gradient} text-white py-20 md:py-28`}>
        <div className="container">
          <Link href="/apartments" className="flex items-center gap-2 text-white hover:text-bastet-sand mb-8 transition-colors">
            <ChevronLeft size={20} />
            <span>Back to Apartments</span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {apartment.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            {apartment.size}
          </p>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed opacity-95">
            {apartment.description}
          </p>
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-navy mb-8 md:mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={`${basePath}/images/apartments/interior-${i + 1}.jpg`}
                  alt={`${apartment.name} interior ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Features Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-navy mb-8">
                Features
              </h2>
              <div className="space-y-4">
                {apartment.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-bastet-sand hover:bg-bastet-gold/10 transition-colors">
                    <span className="text-bastet-gold font-bold text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-bastet-charcoal font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-navy mb-8">
                Amenities
              </h2>
              <div className="space-y-4">
                {apartment.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-bastet-sand hover:bg-bastet-gold/10 transition-colors">
                    <span className="text-bastet-gold font-bold text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-bastet-charcoal font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Placeholder */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-navy mb-8 md:mb-12 text-center">
            Floor Plan
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden bg-bastet-sand flex items-center justify-center">
            <p className="text-bastet-charcoal-light text-xl font-semibold text-center">Floor plans coming soon</p>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="section-padding bg-bastet-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-cream mb-6">
            Ready to book your {apartment.name}?
          </h2>
          <p className="text-lg md:text-xl text-bastet-sand mb-8 max-w-2xl mx-auto leading-relaxed">
            Opening Q3 2027. Secure your early-bird reservation for exclusive launch rates.
          </p>
          <Link href="/book" className="btn-primary text-base md:text-lg">
            {t('bookThis') || 'Book This Apartment'}
          </Link>
        </div>
      </section>
    </div>
  );
}
