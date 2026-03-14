import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'de', 'ru', 'it', 'pl', 'cs', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
  it: 'Italiano',
  pl: 'Polski',
  cs: 'Čeština',
  ar: 'العربية',
};

export const rtlLocales: Locale[] = ['ar'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
