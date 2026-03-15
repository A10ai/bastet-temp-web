'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AboutPage() {
  const t = useTranslations('about');

  const milestones = [
    { year: t('milestone1Year'), title: t('milestone1Title'), desc: t('milestone1Desc') },
    { year: t('milestone2Year'), title: t('milestone2Title'), desc: t('milestone2Desc') },
    { year: t('milestone3Year'), title: t('milestone3Title'), desc: t('milestone3Desc') },
    { year: t('milestone4Year'), title: t('milestone4Title'), desc: t('milestone4Desc') },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${basePath}/hero/1.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bastet-navy/85 to-bastet-midnight/90" />
        </div>
        <div className="container relative z-10 py-24 md:py-32 lg:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bastet-cream mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-bastet-sand max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* The Bastet Story */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="mb-12 md:mb-16">
            <SectionHeader title={t('story')} centered={false} />
          </div>
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl text-bastet-charcoal leading-relaxed">
              {t('storyP1')}
            </p>
            <p className="text-lg md:text-xl text-bastet-charcoal leading-relaxed">
              {t('storyP2')}
            </p>
            <p className="text-lg md:text-xl text-bastet-charcoal leading-relaxed">
              {t('storyP3')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding bg-bastet-cream">
        <div className="container max-w-3xl">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bastet-navy mb-6">
              {t('philosophy')}
            </h2>
          </div>
          <div className="p-8 md:p-12 rounded-xl bg-white border-2 border-bastet-sand hover:border-bastet-gold transition-colors duration-300 shadow-lg">
            <p className="text-lg md:text-xl text-bastet-charcoal leading-relaxed">
              {t('philosophyP1')}
            </p>
          </div>
        </div>
      </section>

      {/* In Numbers */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-12 md:mb-16 text-center">
            <SectionHeader
              title={t('numbers')}
              subtitle={t('numbersSubtitle')}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="group p-8 rounded-xl bg-gradient-to-br from-bastet-coral to-orange-500 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-3">270</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{t('units')}</h3>
              <p className="text-sm text-white/90">{t('unitsDesc')}</p>
            </div>

            <div className="group p-8 rounded-xl bg-gradient-to-br from-bastet-navy to-bastet-midnight text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl md:text-6xl font-display font-bold text-bastet-gold mb-3">32,000</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{t('sqm')}</h3>
              <p className="text-sm text-bastet-sand">{t('sqmDesc')}</p>
            </div>

            <div className="group p-8 rounded-xl bg-gradient-to-br from-yellow-400 to-bastet-gold text-bastet-navy hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl md:text-6xl font-display font-bold mb-3">3,500+</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{t('sunshine')}</h3>
              <p className="text-sm text-bastet-charcoal">{t('sunshineDesc')}</p>
            </div>

            <div className="group p-8 rounded-xl bg-gradient-to-br from-bastet-sage to-emerald-500 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl md:text-6xl font-display font-bold mb-3">6</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{t('techSystems')}</h3>
              <p className="text-sm text-white/90">{t('techSystemsDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="mb-12 md:mb-16 text-center">
            <SectionHeader
              title={t('journey')}
              subtitle={t('journeySubtitle')}
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-bastet-gold flex items-center justify-center text-white font-display font-bold text-lg group-hover:scale-125 transition-transform duration-300">
                    {idx + 1}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-bastet-gold to-bastet-gold-light mt-2" />
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <div className="text-bastet-gold font-semibold text-sm uppercase tracking-wider mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-bastet-navy mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-bastet-charcoal-light leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-bastet-navy to-bastet-midnight text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-cream mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-bastet-sand mb-8">
            {t('ctaDesc')}
          </p>
          <Link
            href="/book"
            className="inline-block px-8 py-4 bg-gradient-to-r from-bastet-gold to-bastet-gold-light text-bastet-navy font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}
