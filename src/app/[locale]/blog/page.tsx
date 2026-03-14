'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      title: '15 Best Dive Sites in the Red Sea',
      excerpt: 'Explore the world\'s most vibrant coral reefs and crystal-clear waters. From Elphinstone to the Brother Islands, discover the Red Sea\'s underwater treasures.',
      date: '2025-03-10',
      readTime: '8 min read',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Work from Hurghada: The Digital Nomad\'s Guide',
      excerpt: 'Fast internet, affordable living, and world-class beaches. Everything you need to know about extending your stay in Egypt\'s Red Sea capital.',
      date: '2025-03-08',
      readTime: '12 min read',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Sustainable Travel: How to Protect the Red Sea',
      excerpt: 'Learn eco-friendly practices when diving, dining, and exploring Hurghada. Small actions make a big difference for marine conservation.',
      date: '2025-03-05',
      readTime: '10 min read',
      gradient: 'from-green-500 to-emerald-400',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bastet-navy to-bastet-midnight text-white py-20 md:py-28 lg:py-36">
        <div className="container text-center">
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
              title="What We're Working On"
              subtitle="Check back soon for guides, stories, and insider tips"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative"
              >
                {/* Image Placeholder */}
                <div className={cn(
                  'relative h-48 bg-gradient-to-br overflow-hidden',
                  article.gradient
                )}>
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-300 bg-black" />

                  {/* Coming Soon Badge */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
                    <span className="px-6 py-2 bg-bastet-gold text-bastet-navy font-semibold rounded-full text-sm">
                      {t('comingSoon')}
                    </span>
                  </div>
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
            Never Miss a Story
          </h2>
          <p className="text-lg text-bastet-sand mb-8">
            Subscribe to get articles, guides, and Red Sea tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>

          <p className="text-sm text-bastet-sand-light mt-4">
            No spam. Just insights, inspiration, and early-bird offers.
          </p>
        </div>
      </section>
    </div>
  );
}
