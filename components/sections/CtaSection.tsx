'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-[rgb(var(--accent-green))] bg-opacity-10 filter blur-[100px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal threshold={0.1}>
            <h2 className="heading-lg mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Body?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} delay={0.2}>
            <p className="text-gray-300 text-lg mb-10">
              Join Yuvi Gym today and start your journey towards a stronger, healthier you.
              The first step is always the hardest, but we'll be with you every step of the way.
            </p>
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="btn-primary px-8 py-4 flex items-center gap-2 hover-trigger">
                Join Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-secondary px-8 py-4 hover-trigger">
                Contact Us
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;