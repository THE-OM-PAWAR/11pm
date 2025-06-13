'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ParallaxEffect from '@/components/animations/ParallaxEffect';
import { CheckCircle, ArrowRight, Gamepad2, Users, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { number: '50+', label: 'Gaming Stations', icon: Gamepad2 },
    { number: '24/7', label: 'Open Hours', icon: Clock },
    { number: '500+', label: 'Happy Gamers', icon: Users },
    { number: 'VR', label: 'Experience', icon: Zap },
  ];

  const features = [
    'High-end gaming PCs with latest graphics',
    'Immersive VR gaming experiences',
    'Regular tournaments and events',
    'Comfortable gaming lounge',
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#00ffff] rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#ff0080] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <ScrollReveal threshold={0.1} direction="up">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="heading-lg mb-8">
                  <span className="text-gradient">About</span> 11 PM Gaming
                </h2>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal threshold={0.1} delay={0.2} direction="up">
              <motion.p 
                className="text-gray-300 text-lg mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The ultimate gaming destination where passion meets performance. 
                Experience cutting-edge technology and join our vibrant community.
              </motion.p>
            </ScrollReveal>
            
            {/* Minimal Feature List */}
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <ScrollReveal key={index} threshold={0.1} delay={0.3 + (index * 0.1)} direction="up">
                  <motion.div 
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#00ffff] rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Button */}
            <ScrollReveal threshold={0.1} delay={0.7} direction="up">
              <Link href="/contact">
                <motion.button 
                  className="group relative overflow-hidden bg-transparent border border-[#00ffff] text-[#00ffff] px-8 py-4 font-medium transition-all duration-300 hover:text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#00ffff] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </ScrollReveal>
          </div>
          
          {/* Right Side - Image & Stats */}
          <div className="order-1 lg:order-2 relative">
            <ScrollReveal threshold={0.1} direction="right">
              <motion.div 
                className="relative h-[500px] rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
                  alt="11 PM Gaming Cafe Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffff]/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                />
              </motion.div>
            </ScrollReveal>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 right-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <ScrollReveal 
                  key={index}
                  threshold={0.1} 
                  delay={0.8 + (index * 0.1)} 
                  direction="up"
                >
                  <motion.div
                    className="glass-panel p-4 text-center group hover:border-[#00ffff]/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <motion.div
                      className="flex justify-center mb-2"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <stat.icon className="h-5 w-5 text-[#00ffff]" />
                    </motion.div>
                    <motion.p 
                      className="text-2xl font-bold text-[#00ffff] mb-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.number}
                    </motion.p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;