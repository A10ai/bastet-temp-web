'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Instagram, Facebook, Music2, Youtube, Mail, ArrowRight } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
import { cn } from '@/lib/utils';

const Footer = () => {
  const tFooter = useTranslations('footer');
  const tNav = useTranslations('nav');
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');

    // Simulate API call
    setTimeout(() => {
      if (email) {
        setSubscribeStatus('success');
        setEmail('');
        setTimeout(() => setSubscribeStatus('idle'), 3000);
      } else {
        setSubscribeStatus('error');
      }
    }, 500);
  };

  const exploreLinks = [
    { href: '#apartments', label: tNav('apartments') },
    { href: '#facilities', label: tNav('facilities') },
    { href: '#smart-hotel', label: tNav('smartHotel') },
    { href: '#location', label: tNav('location') },
    { href: '#digital-nomads', label: tNav('digitalNomads') },
  ];

  const companyLinks = [
    { href: '#about', label: tNav('about') },
    { href: '#contact', label: tNav('contact') },
    { href: '#blog', label: tNav('blog') },
  ];

  const legalLinks = [
    { href: '#privacy', label: tFooter('privacy') },
    { href: '#terms', label: tFooter('terms') },
    { href: '#cookies', label: tFooter('cookies') },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/bastet', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/bastet', label: 'Facebook' },
    { icon: Music2, href: 'https://tiktok.com/@bastet', label: 'TikTok' },
    { icon: Youtube, href: 'https://youtube.com/@bastet', label: 'YouTube' },
  ];

  return (
    <footer className="bg-bastet-navy text-bastet-cream">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-bastet-navy to-bastet-charcoal py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
              {tFooter('newsletter')}
            </h3>
            <p className="text-bastet-sand mb-6 text-sm md:text-base">
              {tFooter('newsletterDesc')}
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tFooter('emailPlaceholder')}
                className="flex-grow px-4 py-3 rounded-lg bg-bastet-cream text-bastet-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bastet-gold"
                disabled={subscribeStatus === 'loading'}
              />
              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="btn-primary py-3 px-4 md:px-6 flex items-center gap-2 whitespace-nowrap"
              >
                {subscribeStatus === 'loading' ? (
                  <span>...</span>
                ) : (
                  <>
                    <span className="hidden sm:inline">{tFooter('subscribe')}</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-bastet-sage mt-2 text-sm">{tFooter('subscribeSuccess')}</p>
            )}
            {subscribeStatus === 'error' && (
              <p className="text-bastet-coral mt-2 text-sm">{tFooter('subscribeError')}</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-bastet-charcoal">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img
                src={`${basePath}/logo-white.png`}
                alt="Bastet"
                className="h-12 w-auto mb-2"
              />
              <p className="text-bastet-sand text-sm leading-relaxed">
                {tFooter('tagline')}
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bastet-gold hover:text-bastet-coral transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4 text-bastet-gold">
                {tFooter('explore')}
              </h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-bastet-sand hover:text-bastet-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4 text-bastet-gold">
                {tFooter('company')}
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-bastet-sand hover:text-bastet-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4 text-bastet-gold">
                {tFooter('legal')}
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-bastet-sand hover:text-bastet-gold transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4 text-bastet-gold">
                {tFooter('contact')}
              </h4>
              <div className="space-y-3">
                <p className="text-bastet-sand text-sm">
                  <span className="font-semibold block">{tFooter('email')}</span>
                  <a href="mailto:hello@bastet.com" className="hover:text-bastet-gold transition-colors">
                    hello@bastet.com
                  </a>
                </p>
                <p className="text-bastet-sand text-sm">
                  <span className="font-semibold block">{tFooter('phone')}</span>
                  <a href="tel:+1234567890" className="hover:text-bastet-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-bastet-charcoal pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-bastet-sand text-sm">
              <p>
                &copy; {new Date().getFullYear()} {tFooter('copyright')}
              </p>
              <p className="text-bastet-gold">
                {tFooter('madeWith')} 💙
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
