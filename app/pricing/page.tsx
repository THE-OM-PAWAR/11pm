'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Info, Check, Phone } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface PricingPlan {
  duration: string;
  price: number;
  features: string[];
}

interface PricingPlans {
  hourly: PricingPlan[];
  packages: PricingPlan[];
}

// Pricing data
const pricingPlans: PricingPlans = {
  hourly: [
    {
      duration: '1 Hour',
      price: 50,
      features: [
        'High-end gaming PC access',
        'All popular games included',
        'Comfortable gaming chair',
        'High-speed internet',
      ],
    },
    {
      duration: '3 Hours',
      price: 120,
      features: [
        'High-end gaming PC access',
        'All popular games included',
        'Comfortable gaming chair',
        'High-speed internet',
        'Free snacks',
      ],
    },
    {
      duration: '6 Hours',
      price: 200,
      features: [
        'High-end gaming PC access',
        'All popular games included',
        'Comfortable gaming chair',
        'High-speed internet',
        'Free snacks & drinks',
        'VR gaming session (30 min)',
      ],
    },
    {
      duration: '12 Hours',
      price: 350,
      features: [
        'High-end gaming PC access',
        'All popular games included',
        'Comfortable gaming chair',
        'High-speed internet',
        'Unlimited snacks & drinks',
        'VR gaming session (1 hour)',
        'Tournament participation',
      ],
    },
  ],
  packages: [
    {
      duration: 'VIP Gaming',
      price: 150,
      features: [
        'Premium gaming station',
        'Priority booking',
        'VR gaming access',
        'Tournament participation',
        'Unlimited refreshments',
      ],
    },
    {
      duration: 'Party Package',
      price: 500,
      features: [
        'Group gaming area (5 PCs)',
        'Private tournament setup',
        'Dedicated gaming host',
        'Food & beverage service',
        'Custom gaming experience',
      ],
    },
    {
      duration: 'Monthly Pass',
      price: 2000,
      features: [
        'Unlimited gaming access',
        'VR gaming included',
        'Tournament participation',
        'Priority booking',
        'Member exclusive events',
        'Discounted food & drinks',
      ],
    },
    {
      duration: 'Annual Pass',
      price: 15000,
      features: [
        'Unlimited gaming access',
        'VR gaming included',
        'Tournament participation',
        'Priority booking',
        'Member exclusive events',
        'Free food & drinks',
        'Personal gaming locker',
      ],
    },
  ],
};

// Additional notes
const additionalNotes = [
  'All gaming sessions include access to latest games and software',
  'VR experiences available with advance booking',
  'Tournament entry fees may apply for special events',
  'Group discounts available for 5+ people',
  'Birthday party packages with special rates',
  'Gaming peripherals and accessories available for purchase',
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'hourly' | 'packages'>('hourly');

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-20 mb-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
            alt="Gaming setup"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-lg mb-6">
              Gaming <span className="text-gradient">Packages</span> & Pricing
            </h1>
            <p className="text-gray-300 text-lg">
              Discover affordable gaming solutions at 11 PM Gaming Cafe. Our flexible pricing options are designed 
              to accommodate casual gamers, hardcore enthusiasts, and competitive esports players with premium 
              gaming experiences and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      {/* Package Tabs */}
      <div className="container-custom mb-12">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('hourly')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'hourly'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🎮 Hourly Gaming
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'packages'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🏆 Special Packages
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans[activeTab].map((plan: PricingPlan, index: number) => (
            <ScrollReveal key={plan.duration} delay={index * 0.1}>
              <div className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-light">₹{plan.price}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0">
                  <Link href="/contact">
                    <button className="w-full py-3 rounded-md bg-white text-black font-medium transition-all duration-300 hover:bg-opacity-90 flex items-center justify-center gap-2">
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="container-custom">
        <div className="glass-panel rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <Info className="h-6 w-6 text-white mt-1 flex-shrink-0" />
            <h2 className="text-2xl font-semibold mb-6">Why Choose 11 PM Gaming Cafe?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalNotes.map((note: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{note}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-2 mt-8">Hourly Gaming Sessions</h3>
          <p className="text-gray-400 text-sm mb-6">Perfect for casual gaming and trying out new games</p>
          <h3 className="text-2xl font-bold mb-2">Premium Gaming Packages</h3>
          <p className="text-gray-400 text-sm mb-6">Best value for serious gamers and esports enthusiasts</p>

          <p className="text-gray-300 mb-8">
            As the premier gaming destination, 11 PM Gaming Cafe offers unmatched value with our 
            comprehensive gaming packages. Our state-of-the-art facility features the latest gaming hardware, 
            immersive VR experiences, and a vibrant gaming community. Join the ultimate gaming experience 
            and level up your skills with us.
          </p>

          {/* Contact Section */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-gray-300">Contact: Gaming Manager – 08966968087</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}