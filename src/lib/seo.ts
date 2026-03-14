import type { Locale } from '@/i18n';

const BASE_URL = 'https://bastethotels.com';

export function getBaseUrl() {
  return BASE_URL;
}

export function getCanonicalUrl(locale: Locale, path: string = '') {
  return `${BASE_URL}/${locale}${path}`;
}

// Hotel Schema (JSON-LD)
export function generateHotelSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Bastet Hurghada',
    description:
      "The Red Sea's first AI-powered smart apartment hotel. 270 fully equipped apartments with smart technology, rooftop bar, pool, spa & co-working.",
    url: getCanonicalUrl(locale),
    image: `${BASE_URL}/images/bastet-hero.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kawthar District',
      addressLocality: 'Hurghada',
      addressRegion: 'Red Sea Governorate',
      addressCountry: 'EG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.1767,
      longitude: 33.8311,
    },
    telephone: '+20-65-XXX-XXXX',
    email: 'info@bastethotels.com',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Rooftop Bar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Fitness Centre', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Co-Working Space', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'EV Charging', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
    ],
    numberOfRooms: 270,
    petsAllowed: false,
    checkinTime: '15:00',
    checkoutTime: '11:00',
    currenciesAccepted: 'USD, EUR, EGP',
    paymentAccepted: 'Cash, Credit Card',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.instagram.com/bastethurghada',
      'https://www.facebook.com/bastethurghada',
      'https://www.tiktok.com/@bastethurghada',
    ],
  };
}

// Apartment/Room Schema
export function generateApartmentSchema(
  locale: Locale,
  apartment: {
    name: string;
    description: string;
    size: number;
    occupancy: number;
    slug: string;
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: apartment.name,
    description: apartment.description,
    url: getCanonicalUrl(locale, `/apartments/${apartment.slug}`),
    floorSize: {
      '@type': 'QuantitativeValue',
      value: apartment.size,
      unitCode: 'MTK',
    },
    occupancy: {
      '@type': 'QuantitativeValue',
      value: apartment.occupancy,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Smart Lock', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Smart Climate', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Balcony', value: true },
    ],
    bed: {
      '@type': 'BedDetails',
      typeOfBed: apartment.slug === 'studio' ? 'Queen' : 'King',
    },
  };
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bastet Hotels',
    url: BASE_URL,
    logo: `${BASE_URL}/images/bastet-logo.png`,
    sameAs: [
      'https://www.instagram.com/bastethurghada',
      'https://www.facebook.com/bastethurghada',
      'https://www.tiktok.com/@bastethurghada',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@bastethotels.com',
      availableLanguage: ['English', 'German', 'Russian', 'Italian', 'Polish', 'Czech', 'Arabic'],
    },
  };
}

// FAQ Schema (for SEO-rich pages)
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
