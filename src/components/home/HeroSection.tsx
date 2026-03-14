'use client';

import { Link } from '@/lib/navigation';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type Props = {
  tagline: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export default function HeroSection({ tagline, subtitle, ctaPrimary, ctaSecondary }: Props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-bastet-navy">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 opacity-75"
        style={{
          background: `linear-gradient(180deg, rgba(12, 27, 42, 0.3) 0%, rgba(12, 27, 42, 0.8) 100%)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="space-y-6 md:space-y-8 max-w-4xl">
          {/* Logo */}
          <div className="animate-fade-up">
            <img
              src={`${basePath}/logo-white.png`}
              alt="Bastet"
              className="h-20 md:h-28 lg:h-32 w-auto mx-auto"
            />
          </div>

          {/* Tagline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-display-xl font-display font-bold text-bastet-cream leading-tight animate-fade-up">
            {tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-bastet-sand leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/apartments" className="btn-primary text-base md:text-lg">
              {ctaPrimary}
            </Link>
            <button className="btn-secondary text-base md:text-lg">
              {ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-bastet-gold" size={32} />
      </div>
    </div>
  );
}
