'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { locales } from '@/i18n';
import type { Locale } from '@/i18n';
import { cn } from '@/lib/utils';

const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
  it: 'Italiano',
  pl: 'Polski',
  cs: 'Čeština',
  ar: 'العربية',
};

const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  ru: '🇷🇺',
  it: '🇮🇹',
  pl: '🇵🇱',
  cs: '🇨🇿',
  ar: '🇸🇦',
};

const LanguageSwitcher = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setIsOpen(false);
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm md:text-base',
          'hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-bastet-gold'
        )}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{localeFlags[locale]}</span>
        <ChevronDown
          size={16}
          className={cn(
            'transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white text-bastet-charcoal rounded-lg shadow-lg overflow-hidden z-50 min-w-48">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={cn(
                'w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-200',
                locale === loc
                  ? 'bg-bastet-gold text-bastet-navy font-semibold'
                  : 'hover:bg-bastet-sand'
              )}
            >
              <span className="text-lg">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
              {locale === loc && (
                <span className="ml-auto text-sm">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
