'use client';

import React from 'react';
import { Dumbbell, Users, Clock, Heart, Tablet, Coffee } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const features = [
  {
    icon: <Dumbbell className="h-10 w-10" />,
    title: 'Bodybuilding Focus',
    description: 'Specialized equipment and programs for muscle building and strength training',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Expert Trainers',
    description: 'Certified trainers specializing in bodybuilding and transformation',
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: '24/7 Access',
    description: 'Train anytime with our round-the-clock gym access in Dr. Ambedkar Nagar',
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: 'Personalized Plans',
    description: 'Custom workout and diet plans tailored to your fitness goals',
  },
  {
    icon: <Tablet className="h-10 w-10" />,
    title: 'Weight Management',
    description: 'Specialized programs for weight loss and muscle gain',
  },
  {
    icon: <Coffee className="h-10 w-10" />,
    title: 'Nutrition Guidance',
    description: 'Expert diet plans and nutrition advice for optimal results',
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* Background glowing elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
        <div className="absolute top-0 right-1/4 w-60 h-60 bg-[rgb(var(--accent-green))] rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-[rgb(var(--accent-red))] rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal threshold={0.1}>
            <h2 className="heading-lg mb-6">
              Why Choose <span className="text-gradient">Yuvi Gym</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} delay={0.2}>
            <p className="text-gray-300">
              Experience the best fitness center in Dr. Ambedkar Nagar, Mhow. Our state-of-the-art facility and expert trainers are dedicated to helping you achieve your fitness goals.
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
                className="glass-panel p-8 rounded-lg transition-all duration-300 hover:border-[rgb(var(--accent-green))] hover:border-opacity-50 group flex-none w-[280px] md:w-auto snap-center snap-stop mr-4 md:mr-0 relative"
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent-green))] to-[rgb(var(--accent-red))] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 text-[rgb(var(--accent-green))] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[rgb(var(--accent-green))] transition-colors duration-300">
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