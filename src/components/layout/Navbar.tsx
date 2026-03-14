'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Navbar = () => {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#apartments', label: t('apartments') },
    { href: '#facilities', label: t('facilities') },
    { href: '#smart-hotel', label: t('smartHotel') },
    { href: '#location', label: t('location') },
    { href: '#digital-nomads', label: t('digitalNomads') },
    { href: '#blog', label: t('blog') },
    { href: '#about', label: t('about') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={isScrolled ? `${basePath}/logo-dark.png` : `${basePath}/logo-white.png`}
              alt="Bastet"
              className="h-10 md:h-12 w-auto transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'btn-nav text-sm font-medium transition-colors duration-200',
                  isScrolled ? 'text-bastet-charcoal hover:text-bastet-gold' : 'text-white hover:text-bastet-gold'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side: Language Switcher + Book Now */}
          <div className="flex items-center gap-4 md:gap-6">
            <LanguageSwitcher />

            <button className="btn-primary text-sm md:text-base py-2 md:py-3 px-4 md:px-6">
              {t('bookNow')}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors duration-200',
                isScrolled
                  ? 'text-bastet-charcoal hover:bg-bastet-sand'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-down">
            <div className="flex flex-col px-4 py-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="btn-nav text-bastet-charcoal py-2 px-4 rounded-lg hover:bg-bastet-sand transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">
                {t('bookNow')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
