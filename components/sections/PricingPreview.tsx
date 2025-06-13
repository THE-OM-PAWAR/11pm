'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Casual Gaming',
    price: 50,
    period: 'hour',
    description: 'Perfect for casual gaming sessions',
    features: [
      'High-end gaming PC access',
      'All popular games included',
      'Comfortable gaming chair',
      'Free snacks & drinks',
      'High-speed internet',
    ],
    cta: 'Book Now',
    popular: false,
  },
  {
    title: 'VIP Gaming Package',
    price: 200,
    period: '4 hours',
    description: 'Ultimate gaming experience',
    features: [
      'Premium gaming station',
      'VR gaming access',
      'Tournament participation',
      'Priority booking',
      'Unlimited snacks & drinks',
    ],
    cta: 'Book Now',
    popular: true,
  },
];

const PricingPreview = () => {
  const handleWhatsAppClick = (plan: typeof pricingPlans[0]) => {
    const message = `Hi, I'm interested in the ${plan.title} package for ₹${plan.price}. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918966968087?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* Background accent */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[#00ffff] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal threshold={0.1}>
            <h2 className="heading-lg mb-6">
              Gaming <span className="text-gradient">Packages</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} delay={0.2}>
            <p className="text-gray-300">
              Choose the perfect gaming package that suits your style and budget. Level up your gaming experience with us.
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
              <div className={`glass-panel rounded-lg overflow-hidden transition-all duration-300 hover:border-[#00ffff] hover:border-opacity-50 h-full flex flex-col ${
                plan.popular ? 'border-[#00ffff] border-opacity-50' : ''
              }`}>
                {plan.popular && (
                  <div className="bg-[#00ffff] text-black text-xs font-semibold py-1 px-3 absolute top-6 right-6 rounded-full">
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
                        <Check className="h-5 w-5 text-[#00ffff] mt-0.5 flex-shrink-0" />
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
              View All Packages & Details
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingPreview;