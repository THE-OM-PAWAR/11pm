'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Gym + CrossFit',
    price: 1200,
    period: 'month',
    description: 'Essential fitness package',
    features: [
      'Access to all gym equipment',
      'CrossFit training',
      'Basic fitness assessment',
      'Locker room access',
      'Progress tracking',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    title: 'Gym + CrossFit + Cardio',
    price: 1500,
    period: 'month',
    description: 'Complete fitness experience',
    features: [
      'All Basic features',
      'Cardio zone access',
      'Group cardio classes',
      'Personal trainer consultation',
      'Custom workout plans',
    ],
    cta: 'Get Started',
    popular: true,
  },
];

const PricingPreview = () => {
  const handleWhatsAppClick = (plan: typeof pricingPlans[0]) => {
    const message = `Hi, I'm interested in the ${plan.title} plan for ₹${plan.price}. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918966968087?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* Background accent */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[rgb(var(--accent-green))] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal threshold={0.1}>
            <h2 className="heading-lg mb-6">
              Membership <span className="text-gradient">Plans</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} delay={0.2}>
            <p className="text-gray-300">
              Choose the perfect membership plan that aligns with your fitness goals and budget.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal 
              key={index} 
              threshold={0.1} 
              delay={0.2 * (index + 1)}
              className={`relative ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              <div className={`glass-panel rounded-lg overflow-hidden transition-all duration-300 hover:border-[rgb(var(--accent-green))] hover:border-opacity-50 h-full flex flex-col ${
                plan.popular ? 'border-[rgb(var(--accent-green))] border-opacity-50' : ''
              }`}>
                {plan.popular && (
                  <div className="bg-[rgb(var(--accent-green))] text-black text-xs font-semibold py-1 px-3 absolute top-6 right-6 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[rgb(var(--accent-green))] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal threshold={0.1} delay={0.8} className="text-center mt-12">
          <Link href="/pricing">
            <button className="btn-secondary hover-trigger">
              View All Plans & Details
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingPreview;