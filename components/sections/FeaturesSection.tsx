'use client';

import React from 'react';
import { Gamepad2, Users, Clock, Zap, Monitor, Coffee } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const features = [
  {
    icon: <Gamepad2 className="h-10 w-10" />,
    title: 'Premium Gaming PCs',
    description: 'High-end gaming rigs with RTX 4080/4090 graphics cards and latest processors',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Esports Community',
    description: 'Join our vibrant gaming community and participate in competitive tournaments',
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: '24/7 Gaming',
    description: 'Game anytime with our round-the-clock access and flexible booking options',
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'VR Experiences',
    description: 'Immerse yourself in virtual reality with our cutting-edge VR gaming setups',
  },
  {
    icon: <Monitor className="h-10 w-10" />,
    title: 'Multiple Platforms',
    description: 'PC gaming, console gaming, and mobile gaming tournaments all under one roof',
  },
  {
    icon: <Coffee className="h-10 w-10" />,
    title: 'Gaming Lounge',
    description: 'Comfortable seating, snacks, energy drinks, and a chill gaming atmosphere',
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* Background glowing elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
        <div className="absolute top-0 right-1/4 w-60 h-60 bg-[#00ffff] rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-[#ff0080] rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal threshold={0.1}>
            <h2 className="heading-lg mb-6">
              Why Choose <span className="text-gradient">11 PM Gaming</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} delay={0.2}>
            <p className="text-gray-300">
              Experience the ultimate gaming destination with cutting-edge technology, competitive atmosphere, and a community that shares your passion for gaming.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Mobile horizontal scroll with snap points, desktop grid */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <div className="flex md:contents overflow-x-auto md:overflow-visible pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {features.map((feature, index) => (
              <ScrollReveal 
                key={index} 
                threshold={0.1} 
                delay={0.1 * (index + 1)}
                className="glass-panel p-8 rounded-lg transition-all duration-300 hover:border-[#00ffff] hover:border-opacity-50 group flex-none w-[280px] md:w-auto snap-center snap-stop mr-4 md:mr-0 relative"
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#ff0080] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 text-[#00ffff] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00ffff] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;