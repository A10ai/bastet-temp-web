import { unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/navigation';
import { Waves, UtensilsCrossed, Wine, Flower2, Dumbbell, Laptop, Clock, Users, MapPin, Smartphone } from 'lucide-react';
import { notFound } from 'next/navigation';
import SectionHeader from '@/components/shared/SectionHeader';

type FacilityType = 'pool-beach' | 'restaurant' | 'rooftop-bar' | 'spa-wellness' | 'fitness' | 'coworking';

interface FacilityData {
  id: FacilityType;
  title: string;
  icon: React.ComponentType<any>;
  gradient: string;
  description: string;
  fullDescription: string;
  features: string[];
  hours: string;
  capacity?: string;
  amenities: string[];
  relatedFacilities: FacilityType[];
}

const facilities: Record<FacilityType, FacilityData> = {
  'pool-beach': {
    id: 'pool-beach',
    title: 'Pool & Sun Deck',
    icon: Waves,
    gradient: 'from-blue-400 to-cyan-500',
    description: 'Main pool with loungers and poolside food & drinks service.',
    fullDescription: 'The heart of Bastet\'s social space. Our Olympic-sized pool features heated water year-round, professional lifeguards, and dedicated sun decks with premium loungers. Perfect for lap swimming, leisure, or simply soaking up the Red Sea sun.',
    features: [
      'Olympic-sized heated pool',
      'Premium lounge chairs and umbrellas',
      'Poolside bar and snack service',
      'Professional lifeguard on duty',
      'Family zones and quiet areas',
      'Underwater lighting for evening swims',
    ],
    hours: 'Daily 7:00 AM – 10:00 PM',
    capacity: '200+ guests',
    amenities: [
      'Fresh water facilities',
      'Towel service included',
      'Waterproof lockers',
      'Shower facilities',
      'Beach volleyball court',
    ],
    relatedFacilities: ['restaurant', 'fitness', 'spa-wellness'],
  },
  restaurant: {
    id: 'restaurant',
    title: 'The Terrace Restaurant',
    icon: UtensilsCrossed,
    gradient: 'from-amber-400 to-orange-500',
    description: 'Mediterranean-Egyptian cuisine, live cooking station, poolside terrace.',
    fullDescription: 'Celebrating the fusion of Mediterranean and Egyptian flavors. Our terrace restaurant features an open kitchen with live cooking demonstrations, sourced local ingredients, and a seasonally changing menu inspired by Red Sea coastal traditions.',
    features: [
      'Mediterranean-Egyptian fusion cuisine',
      'Live cooking station',
      'Poolside seating with Red Sea views',
      'Seasonal menu using local ingredients',
      'Private dining options available',
      'Breakfast, lunch, and dinner service',
    ],
    hours: 'Breakfast 6:30 AM – 10:30 AM | Lunch 12:00 PM – 4:00 PM | Dinner 6:00 PM – 11:00 PM',
    capacity: '150 guests',
    amenities: [
      'Wine and craft beverage selection',
      'Dietary accommodation available',
      'Outdoor and indoor seating',
      'Live music on weekends',
      'Private event spaces',
    ],
    relatedFacilities: ['pool-beach', 'rooftop-bar', 'coworking'],
  },
  'rooftop-bar': {
    id: 'rooftop-bar',
    title: 'Rooftop Lounge',
    icon: Wine,
    gradient: 'from-indigo-900 to-bastet-gold',
    description: 'Sunset cocktails, Red Sea views, signature drinks, live DJ weekends.',
    fullDescription: 'The crown jewel of Bastet. Our rooftop lounge commands 360-degree views of the Red Sea and Hurghada skyline. Signature cocktails infused with Egyptian botanicals, soft ambient lighting, and premium spirits create an unforgettable evening experience.',
    features: [
      'Panoramic Red Sea sunset views',
      'Signature cocktails with Egyptian ingredients',
      'Craft beer and wine selection',
      'Live DJ Friday & Saturday nights',
      'Ambient lounge seating',
      'Private event and celebration options',
    ],
    hours: 'Daily 5:00 PM – 2:00 AM',
    capacity: '120 guests',
    amenities: [
      'Premium spirit collection',
      'Shisha lounge',
      'Tapas and light bites',
      'Reserved seating areas',
      'Sound system for events',
    ],
    relatedFacilities: ['restaurant', 'spa-wellness', 'coworking'],
  },
  'spa-wellness': {
    id: 'spa-wellness',
    title: 'Spa & Wellness',
    icon: Flower2,
    gradient: 'from-bastet-sage to-emerald-500',
    description: 'Treatment rooms, hammam, sauna, indoor pool, yoga studio.',
    fullDescription: 'A 500-800 sqm sanctuary dedicated to relaxation and rejuvenation. Experience traditional hammam treatments, private massage therapy, yoga and meditation classes, and state-of-the-art wellness facilities overlooking the Red Sea.',
    features: [
      'Private treatment rooms',
      'Traditional Turkish hammam',
      'Infrared sauna',
      'Indoor heated pool',
      'Yoga and meditation studio',
      'Hydrotherapy facilities',
    ],
    hours: 'Daily 8:00 AM – 10:00 PM (Yoga classes throughout the day)',
    capacity: 'Spa treatments by appointment',
    amenities: [
      'Organic skincare products',
      'Professional therapists',
      'Relaxation lounge',
      'Healthy beverage bar',
      'Changing and shower facilities',
    ],
    relatedFacilities: ['pool-beach', 'fitness', 'rooftop-bar'],
  },
  fitness: {
    id: 'fitness',
    title: 'Fitness Centre',
    icon: Dumbbell,
    gradient: 'from-rose-400 to-red-500',
    description: '300 sqm gym with cardio, strength, and free weights. Free for all guests.',
    fullDescription: 'A fully equipped 300 sqm fitness facility with the latest cardio and strength training equipment. Personal training available, group fitness classes throughout the day, and ocean-view cardio equipment for motivation.',
    features: [
      'Cardio equipment with ocean views',
      'Full strength training gym',
      'Free weight area',
      'TRX and functional training equipment',
      'Daily fitness classes',
      'Personal training available',
    ],
    hours: 'Daily 6:00 AM – 10:00 PM',
    capacity: 'Continuous access',
    amenities: [
      'Towel service',
      'Locker rooms with showers',
      'Water and electrolyte station',
      'Changing facilities',
      'WiFi connectivity',
    ],
    relatedFacilities: ['pool-beach', 'spa-wellness', 'coworking'],
  },
  coworking: {
    id: 'coworking',
    title: 'Co-Working Space',
    icon: Laptop,
    gradient: 'from-slate-500 to-slate-700',
    description: 'Ergonomic desks, fast Wi-Fi, power outlets. Built for remote work.',
    fullDescription: 'Designed for digital nomads and remote professionals. High-speed enterprise Wi-Fi, ergonomic workstations, natural light, and reliable power infrastructure. Perfect for focused work or productive collaboration.',
    features: [
      'Ergonomic workstations',
      'Enterprise-grade Wi-Fi',
      'Dedicated quiet zones',
      'Collaborative work areas',
      'Multiple meeting rooms',
      'Phone booths for calls',
    ],
    hours: 'Daily 7:00 AM – 10:00 PM (24/7 access for monthly members)',
    capacity: '40 seats',
    amenities: [
      'Coffee and tea bar',
      'Printing and scanning',
      'Monitor and keyboard available',
      'Power outlets everywhere',
      'Community events and networking',
    ],
    relatedFacilities: ['restaurant', 'fitness', 'spa-wellness'],
  },
};

export function generateStaticParams() {
  return Object.keys(facilities).map((id) => ({
    facility: id,
  }));
}

export async function generateMetadata({ params: { facility, locale } }: { params: { facility: FacilityType; locale: string } }) {
  const data = facilities[facility];
  if (!data) return { title: 'Not Found' };
  return { title: data.title };
}

export default function FacilityPage({ params: { facility, locale } }: { params: { facility: FacilityType; locale: string } }) {
  unstable_setRequestLocale(locale);
  const data = facilities[facility];
  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${data.gradient} text-white py-20 md:py-28 lg:py-36`}>
        <div className="container">
          <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="p-4 bg-white/20 rounded-lg">
              <Icon size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              {data.title}
            </h1>
          </div>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed opacity-95">
            {data.fullDescription}
          </p>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex gap-4 p-6 md:p-8 bg-white rounded-lg border-2 border-bastet-gold/20">
              <Clock className="text-bastet-gold flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-bastet-navy mb-1">Hours of Operation</h3>
                <p className="text-bastet-charcoal-light">{data.hours}</p>
              </div>
            </div>

            {data.capacity && (
              <div className="flex gap-4 p-6 md:p-8 bg-white rounded-lg border-2 border-bastet-gold/20">
                <Users className="text-bastet-gold flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-semibold text-bastet-navy mb-1">Capacity</h3>
                  <p className="text-bastet-charcoal-light">{data.capacity}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeader title="What's Included" centered={false} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
            {data.features.map((feature, idx) => (
              <div key={idx} className="flex gap-3 p-5 bg-bastet-sand rounded-lg border border-bastet-gold/20 hover:border-bastet-gold hover:shadow-md transition-all duration-300 group cursor-pointer">
                <span className="text-bastet-gold font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">✓</span>
                <p className="text-bastet-charcoal">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <SectionHeader title="Amenities" centered={false} />
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">
            {data.amenities.map((amenity, idx) => (
              <div key={idx} className="flex gap-3 p-5 bg-white rounded-lg border border-bastet-charcoal/10 hover:border-bastet-gold/30 hover:shadow-md transition-all duration-300">
                <Smartphone className="text-bastet-gold flex-shrink-0" size={24} />
                <p className="text-bastet-charcoal">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Facilities */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeader title="Explore Other Facilities" centered={true} />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {data.relatedFacilities.map((facilityId) => {
              const related = facilities[facilityId];
              const RelatedIcon = related.icon;
              return (
                <Link
                  key={facilityId}
                  href={`/facilities/${facilityId}`}
                  className="group"
                >
                  <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className={`h-full bg-gradient-to-br ${related.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                      <RelatedIcon className="text-white/40 group-hover:text-white/60 transition-colors duration-300" size={64} />
                    </div>
                  </div>
                  <h4 className="text-xl font-display font-bold text-bastet-navy group-hover:text-bastet-gold transition-colors duration-300 mb-2">
                    {related.title}
                  </h4>
                  <p className="text-bastet-charcoal-light text-sm">{related.description}</p>
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
            Experience {data.title}
          </h2>
          <p className="text-lg md:text-xl text-bastet-sand mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your stay at Bastet and enjoy all these world-class facilities.
          </p>
          <Link href="/apartments" className="btn-primary text-base md:text-lg">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
