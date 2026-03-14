import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bastet Brand Colors
        bastet: {
          navy: '#0C1B2A',       // Deep navy — sophistication, Red Sea depth
          midnight: '#132D46',   // Slightly lighter navy for cards/surfaces
          gold: '#C9975B',       // Warm gold — Egyptian heritage, sunset
          'gold-light': '#E3C28B', // Light gold for hover states
          sand: '#F5F0E8',       // Warm sand — desert warmth backgrounds
          'sand-light': '#FAF8F4', // Lighter sand for page bg
          cream: '#FFFDF8',      // Cream white — warm alternative to pure white
          sage: '#7A9E7E',       // Sage green — sustainability accent
          'sage-dark': '#5B7D5F',
          coral: '#E8734A',      // Warm coral — CTA accent
          charcoal: '#2D2D2D',   // Body text
          'charcoal-light': '#6B6B6B', // Secondary text
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        'brand': '0.5rem',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9975B 0%, #E3C28B 100%)',
        'gradient-navy': 'linear-gradient(180deg, #0C1B2A 0%, #132D46 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(12,27,42,0) 0%, rgba(12,27,42,0.8) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
