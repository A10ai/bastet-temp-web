'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function BlogPage() {
  const t = useTranslations('blog');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const articles = [
    {
      id: 1,
      title: t('article1Title'),
      excerpt: t('article1Excerpt'),
      date: '2025-03-10',
      readTime: '8 min',
      image: 'red-sea-hotel',
    },
    {
      id: 2,
      title: t('article2Title'),
      excerpt: t('article2Excerpt'),
      date: '2025-03-08',
      readTime: '12 min',
      image: 'smart-home',
    },
    {
      id: 3,
      title: t('article3Title'),
      excerpt: t('article3Excerpt'),
      date: '2025-03-05',
      readTime: '10 min',
      image: 'hurghada-beach',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${basePath}/images/blog/hurghada-beach.jpg`}
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

      {/* Coming Soon Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-2xl text-center">
          <div className="p-12 bg-gradient-to-br from-bastet-cream to-bastet-sand-light rounded-xl border-2 border-bastet-gold">
            <AlertCircle className="w-16 h-16 text-bastet-gold mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-bastet-navy mb-3">
              {t('comingSoon')}
            </h2>
            <p className="text-lg text-bastet-charcoal-light leading-relaxed">
              {t('comingSoonText')}
            </p>
          </div>
        </div>
      </section>

      {/* Article Cards Preview */}
      <section className="section-padding bg-bastet-cream">
        <div className="container">
          <div className="mb-12">
            <SectionHeader
              title={t('workingOn')}
              subtitle={t('workingOnSubtitle')}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${basePath}/images/blog/${article.image}.jpg`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-bastet-navy mb-3 line-clamp-2 group-hover:text-bastet-gold transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-bastet-charcoal-light mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-bastet-charcoal-light border-t border-bastet-sand pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="section-padding bg-gradient-to-r from-bastet-navy to-bastet-midnight text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bastet-cream mb-4">
            {t('neverMiss')}
          </h2>
          <p className="text-lg text-bastet-sand mb-8">
            {t('neverMissDesc')}
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              className="flex-1 px-6 py-4 rounded-lg text-bastet-navy focus:outline-none focus:ring-2 focus:ring-bastet-gold"
              required
            />
            <button
              type="submit"
              className={cn(
                'px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap',
                isSubscribed
                  ? 'bg-bastet-sage text-white'
                  : 'bg-gradient-to-r from-bastet-gold to-bastet-gold-light text-bastet-navy hover:shadow-lg'
              )}
            >
              {isSubscribed ? `\u2713 ${t('subscribed')}` : t('subscribe')}
            </button>
          </form>

          <p className="text-sm text-bastet-sand-light mt-4">
            {t('noSpam')}
          </p>
        </div>
      </section>
    </div>
  );
}
