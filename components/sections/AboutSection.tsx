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
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#00ffff] rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#ff0080] rounded-full filter blur-[120px] opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <ScrollReveal threshold={0.1} direction="left">
              <div className="relative h-[400px] flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
                  alt="11 PM Gaming Cafe Interior"
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
                  <p className="text-4xl font-bold text-[#00ffff]">50+</p>
                  <p className="text-gray-400 text-sm">Gaming Stations</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#00ffff]">24/7</p>
                  <p className="text-gray-400 text-sm">Open Hours</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#00ffff]">500+</p>
                  <p className="text-gray-400 text-sm">Happy Gamers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#00ffff]">VR</p>
                  <p className="text-gray-400 text-sm">Experience</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Content Side */}
          <div>
            <ScrollReveal threshold={0.1} direction="up">
              <h2 className="heading-lg mb-6">
                <span className="text-gradient">About</span> 11 PM Gaming Cafe
              </h2>
            </ScrollReveal>
            
            <ParallaxEffect speed={0.2}>
              <ScrollReveal threshold={0.1} delay={0.2} direction="up">
                <p className="text-gray-300 mb-8">
                  Welcome to 11 PM Gaming Cafe, the ultimate gaming destination where passion meets performance. Our state-of-the-art facility features high-end gaming PCs, immersive VR experiences, and a vibrant community of gamers. Whether you're a casual player or a competitive esports athlete, we provide the perfect environment to level up your gaming experience.
                </p>
              </ScrollReveal>
            </ParallaxEffect>
            
            <div className="space-y-4 mb-8">
              <ScrollReveal threshold={0.1} delay={0.3} direction="up">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#00ffff] h-5 w-5" />
                  <p className="text-gray-200">High-end gaming PCs with latest graphics cards</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal threshold={0.1} delay={0.4} direction="up">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#00ffff] h-5 w-5" />
                  <p className="text-gray-200">Immersive VR gaming experiences</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal threshold={0.1} delay={0.5} direction="up">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#00ffff] h-5 w-5" />
                  <p className="text-gray-200">Regular tournaments and gaming events</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal threshold={0.1} delay={0.6} direction="up">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#00ffff] h-5 w-5" />
                  <p className="text-gray-200">Comfortable gaming lounge with snacks & drinks</p>
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