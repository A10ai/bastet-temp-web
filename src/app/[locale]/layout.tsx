import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Montserrat, DM_Sans } from 'next/font/google';
import { locales, rtlLocales } from '@/i18n';
import type { Locale } from '@/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

const montserrat = Montserrat({
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

async function loadMessages(locale: string) {
  return (await import(`@/messages/${locale}.json`)).default;
}

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await loadMessages(locale);
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages;

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === 'string' ? value : key;
  };

  return {
    title: {
      default: t('meta.title') || 'Bastet Hotel - The Smartest Address on the Red Sea',
      template: `%s | ${t('meta.title') || 'Bastet Hotel'}`,
    },
    description: t('meta.description') || 'Experience luxury living at Bastet Hotel. Modern apartments with smart technology by the sea.',
    metadataBase: new URL('https://bastethotels.com'),
    alternates: {
      canonical: '/',
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `https://bastethotels.com/${loc}`])
      ),
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://bastethotels.com',
      siteName: 'Bastet Hotel',
      title: t('meta.title') || 'Bastet Hotel - The Smartest Address on the Red Sea',
      description: t('meta.description') || 'Experience luxury living at Bastet Hotel.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Bastet Hotel',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title') || 'Bastet Hotel',
      description: t('meta.description') || 'Experience luxury living at Bastet Hotel.',
      images: ['/twitter-image.jpg'],
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  const messages = await loadMessages(locale);
  const isRtl = rtlLocales.includes(locale);

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${montserrat.variable} ${dmSans.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0C1B2A" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-body antialiased text-bastet-charcoal bg-bastet-cream ${isRtl ? 'rtl' : 'ltr'}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
