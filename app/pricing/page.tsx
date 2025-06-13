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
  basic: PricingPlan[];
  premium: PricingPlan[];
}

// Pricing data
const pricingPlans: PricingPlans = {
  basic: [
    {
      duration: '1 Month',
      price: 1200,
      features: [
        'Access to all gym equipment',
        'CrossFit training',
        'Basic fitness assessment',
        'Locker room access',
      ],
    },
    {
      duration: '3 Months',
      price: 3000,
      features: [
        'Access to all gym equipment',
        'CrossFit training',
        'Basic fitness assessment',
        'Locker room access',
        'Progress tracking',
      ],
    },
    {
      duration: '6 Months',
      price: 4500,
      features: [
        'Access to all gym equipment',
        'CrossFit training',
        'Basic fitness assessment',
        'Locker room access',
        'Progress tracking',
        'Nutrition consultation',
      ],
    },
    {
      duration: '12 Months',
      price: 6500,
      features: [
        'Access to all gym equipment',
        'CrossFit training',
        'Basic fitness assessment',
        'Locker room access',
        'Progress tracking',
        'Nutrition consultation',
        'Priority booking',
      ],
    },
  ],
  premium: [
    {
      duration: '1 Month',
      price: 1500,
      features: [
        'All Basic features',
        'Cardio zone access',
        'Group cardio classes',
        'Personal trainer consultation',
      ],
    },
    {
      duration: '3 Months',
      price: 3600,
      features: [
        'All Basic features',
        'Cardio zone access',
        'Group cardio classes',
        'Personal trainer consultation',
        'Custom workout plans',
      ],
    },
    {
      duration: '6 Months',
      price: 5200,
      features: [
        'All Basic features',
        'Cardio zone access',
        'Group cardio classes',
        'Personal trainer consultation',
        'Custom workout plans',
        'Recovery sessions',
      ],
    },
    {
      duration: '12 Months',
      price: 7200,
      features: [
        'All Basic features',
        'Cardio zone access',
        'Group cardio classes',
        'Personal trainer consultation',
        'Custom workout plans',
        'Recovery sessions',
        'VIP locker access',
      ],
    },
  ],
};

// Additional notes
const additionalNotes = [
  'One-time registration fee: ₹200 (applicable only on monthly package)',
  '100% transformation on personal training by certified trainers',
  '₹500 extra charge for payments made in 2 installments',
  'All payments should be made in one shot',
  '2nd installment must be paid within 20 days, else package will be discontinued',
  'Authentic Supplements Available',
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'basic' | 'premium'>('basic');

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-20 mb-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
            alt="Gym interior"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-lg mb-6">
              Best Gym Membership <span className="text-gradient">Plans</span> in Dr. Ambedkar Nagar
            </h1>
            <p className="text-gray-300 text-lg">
              Discover affordable fitness solutions at Yuvi Gym, the best gym in Dr. Ambedkar Nagar, Mhow. 
              Our competitive membership plans are designed to help you achieve your fitness goals with 
              state-of-the-art equipment and expert guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Package Tabs */}
      <div className="container-custom mb-12">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'basic'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🏋️ Basic Fitness Package
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'premium'
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🏋️‍♂️ Premium Fitness Package
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
                      Get Started
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
            <h2 className="text-2xl font-semibold mb-6">Why Choose Yuvi Gym in Dr. Ambedkar Nagar?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalNotes.map((note: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{note}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-2">Monthly Fitness Plan</h3>
          <p className="text-gray-400 text-sm mb-6">Perfect for beginners and fitness enthusiasts in Dr. Ambedkar Nagar</p>
          <h3 className="text-2xl font-bold mb-2">Yearly Fitness Package</h3>
          <p className="text-gray-400 text-sm mb-6">Best value for dedicated fitness enthusiasts in Mhow</p>

          <p className="text-gray-300 mb-8">
            As the leading fitness center in Dr. Ambedkar Nagar, Mhow, Yuvi Gym offers unmatched value with our 
            comprehensive membership plans. Our state-of-the-art facility features modern equipment, certified 
            trainers, and 24/7 access, making us the preferred choice for fitness enthusiasts in the area. 
            Join the best gym in Dr. Ambedkar Nagar and start your fitness journey today.
          </p>

          {/* Contact Section */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-gray-300">Contact: Yuvraj Patidar – 9869698087</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
