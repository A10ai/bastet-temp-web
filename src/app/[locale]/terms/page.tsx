'use client';

import SectionHeader from '@/components/shared/SectionHeader';

export default function TermsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bastet-navy to-bastet-midnight text-white py-20 md:py-28 lg:py-36">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bastet-cream mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-bastet-sand max-w-3xl mx-auto leading-relaxed">
            Booking terms and conditions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="p-12 rounded-xl bg-bastet-cream border-2 border-bastet-sand text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-3xl font-display font-bold text-bastet-navy mb-3">
              This page is being updated
            </h2>
            <p className="text-lg text-bastet-charcoal-light">
              We're currently drafting our Terms of Service. Complete booking terms, cancellation policies, and guest agreements will be available soon.
            </p>
            <p className="text-bastet-charcoal-light mt-6">
              For immediate questions, reach out to us at <a href="mailto:hello@bastet.com" className="text-bastet-gold font-semibold hover:text-bastet-gold-light">hello@bastet.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
