'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ParallaxEffect from '@/components/animations/ParallaxEffect';
import { CheckCircle, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glowing element */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[rgb(var(--accent-green))] rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[rgb(var(--accent-red))] rounded-full filter blur-[120px] opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <ScrollReveal threshold={0.1} direction="left">
              <div className="relative h-[400px] flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src="/assets/WhatsApp Image 2025-06-03 at 18.02.25_b37a3d6f.jpg"
                  alt="Yuvi Gym Interior"
                  width={600}
                  height={300}
                  className="w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
              </div>
            </ScrollReveal>
            
            {/* Stats Overlay */}
            <ScrollReveal 
              threshold={0.1} 
              delay={0.3} 
              direction="right"
              className="absolute -bottom-8 -right-8 glass-panel p-6 max-w-xs hidden md:block"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-[rgb(var(--accent-green))]">8+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[rgb(var(--accent-green))]">10+</p>
                  <p className="text-gray-400 text-sm">Expert Trainers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[rgb(var(--accent-green))]">200+</p>
                  <p className="text-gray-400 text-sm">Happy Members</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[rgb(var(--accent-green))]">24/7</p>
                  <p className="text-gray-400 text-sm">Hours Open</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Content Side */}
          <div>
            <ScrollReveal threshold={0.1} direction="up">
              <h2 className="heading-lg mb-6">
                <span className="text-gradient">About</span> Yuvi Gym
              </h2>
            </ScrollReveal>
            
            <ParallaxEffect speed={0.2}>
              <ScrollReveal threshold={0.1} delay={0.2} direction="up">
                <p className="text-gray-300 mb-8">
                  Located in the heart of Dr. Ambedkar Nagar, Mhow, Yuvi Gym is your premier fitness destination. We specialize in bodybuilding, strength training, and complete body transformation, offering personalized workout and diet plans that deliver real results.
                </p>
              </ScrollReveal>
            </ParallaxEffect>
            
            <div className="space-y-4 mb-8">
              <ScrollReveal threshold={0.1} delay={0.3} direction="up">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[rgb(var(--accent-green))] h-5 w-5" />
                  <p className="text-gray-200">Modern equipment and air-conditioned facility</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal threshold={0.1} delay={0.4} direction="up">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[rgb(var(--accent-green))] h-5 w-5" />
                  <p className="text-gray-200">Personalized training and diet plans</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal threshold={0.1} delay={0.5} direction="up">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[rgb(var(--accent-green))] h-5 w-5" />
                  <p className="text-gray-200">Expert trainers with bodybuilding expertise</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal threshold={0.1} delay={0.6} direction="up">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[rgb(var(--accent-green))] h-5 w-5" />
                  <p className="text-gray-200">Affordable monthly and yearly packages</p>
                </div>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;