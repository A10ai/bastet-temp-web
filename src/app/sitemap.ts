import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const BASE_URL = 'https://bastethotels.com';

const pages = [
  '',
  '/apartments',
  '/apartments/studio',
  '/apartments/one-bedroom',
  '/apartments/two-bedroom',
  '/apartments/penthouse',
  '/facilities',
  '/facilities/pool-beach',
  '/facilities/restaurant',
  '/facilities/rooftop-bar',
  '/facilities/spa-wellness',
  '/facilities/fitness',
  '/facilities/coworking',
  '/smart-hotel',
  '/sustainability',
  '/digital-nomads',
  '/location',
  '/about',
  '/contact',
  '/book',
  '/blog',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' || page === '/blog' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : page.startsWith('/apartments') ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
