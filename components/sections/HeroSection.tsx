'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const featuredWorks = [
  {
    title: 'GAMING ZONE',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    description: 'High-end gaming PCs with RTX 4080/4090',
    category: 'PC GAMING',
  },
  {
    title: 'VR EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80',
    description: 'Immersive virtual reality adventures',
    category: 'VR GAMING',
  },
  {
    title: 'TOURNAMENTS',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf23?auto=format&fit=crop&w=600&q=80',
    description: 'Competitive esports tournaments',
    category: 'ESPORTS',
  },
  {
    title: 'SNACK BAR',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    description: 'Gaming fuel and refreshments',
    category: 'LOUNGE',
  },
  {
    title: 'GAMING LOUNGE',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
    description: 'Comfortable gaming environment',
    category: 'COMFORT',
  },
];

const getScale = (hoveredIdx: number | null, idx: number) => {
  if (hoveredIdx === null) return 1.0;
  const dist = Math.abs(hoveredIdx - idx);
  if (dist === 0) return 1.12;
  if (dist === 1) return 0.95;
  if (dist === 2) return 0.90;
  if (dist === 3) return 0.85;
  return 0.80;
};

const getOpacity = (hoveredIdx: number | null, idx: number) => {
  if (hoveredIdx === null) return 1.0;
  const dist = Math.abs(hoveredIdx - idx);
  if (dist === 0) return 1.0;
  if (dist === 1) return 0.8;
  if (dist === 2) return 0.6;
  if (dist === 3) return 0.4;
  return 0.2;
};

const getZ = (hoveredIdx: number | null, idx: number) => {
  if (hoveredIdx === null) return 1;
  const dist = Math.abs(hoveredIdx - idx);
  if (dist === 0) return 50;
  if (dist === 1) return 30;
  if (dist === 2) return 20;
  return 10;
};

const getRotateY = (hoveredIdx: number | null, idx: number) => {
  if (hoveredIdx === null) return 0;
  const dist = Math.abs(hoveredIdx - idx);
  const direction = hoveredIdx > idx ? -1 : 1;
  if (dist === 0) return 0;
  if (dist === 1) return direction * 8;
  if (dist === 2) return direction * 12;
  return direction * 15;
};

const HeroSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
      className="w-full min-h-screen h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ffff] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ffff] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff0080] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-8xl mx-auto h-full relative z-10">
        {/* Enhanced Headline */}
        <div className="flex flex-col items-center justify-center w-full h-1/2 justify-center mx-auto">
          <motion.div
            style={{
              x: mouseXSpring,
              y: mouseYSpring,
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: loaded ? 1 : 0.2, y: loaded ? 0 : 30 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-center mt-20 relative"
              style={{
                fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif',
                letterSpacing: '0.04em',
                lineHeight: 1.08,
              }}
            >
              {/* Glitch effect overlay */}
              <motion.span
                className="absolute inset-0 text-[#00ffff] opacity-0"
                animate={{
                  opacity: [0, 0.3, 0],
                  x: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: 'linear',
                }}
              >
                LEVEL UP YOUR<br />GAMING EXPERIENCE
              </motion.span>
              
              {/* Main text with enhanced effects */}
              <span className="relative z-10">
                LEVEL UP YOUR<br />
                <motion.span
                  className="inline-block"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(0, 255, 255, 0)',
                      '0 0 20px rgba(0, 255, 255, 0.5)',
                      '0 0 0px rgba(0, 255, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  GAMING EXPERIENCE
                </motion.span>
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 1.1, delay: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-[#bcbcbc] text-xs md:text-sm font-mono tracking-widest uppercase text-center mt-4"
            style={{
              letterSpacing: '0.08em',
              fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif',
            }}
          >
            PREMIUM GAMING CAFE WITH HIGH-END PCs<br />
            VR EXPERIENCE & TOURNAMENTS<br />
            OPEN 24/7 FOR GAMERS
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 1.1, delay: 1, ease: [0.4, 0.0, 0.2, 1] }}
            className="mt-8 px-8 py-3 bg-[#00ffff] text-black font-bold tracking-wider uppercase text-sm hover:bg-[#00cccc] transition-all duration-300 rounded-sm relative overflow-hidden group"
            style={{
              letterSpacing: '0.08em',
              fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">EXPLORE NOW</span>
          </motion.button>
        </div>

        {/* Fixed Featured Works Grid - Cards with Images Only */}
        <div className="w-full h-1/2 flex justify-center items-end pb-8">
          <div className="w-full max-w-7xl mx-auto px-4">
            {/* Mobile: Horizontal scroll */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {featuredWorks.map((work, idx) => (
                  <motion.div
                    key={work.title}
                    className="flex-none w-[280px] snap-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: loaded ? 1 : 0,
                      y: loaded ? 0 : 20,
                    }}
                    transition={{
                      delay: loaded ? idx * 0.15 : 0,
                      duration: 0.6
                    }}
                  >
                    <Card className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ffff] overflow-hidden h-[300px] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00ffff]/20 relative group">
                      <div className="w-full h-full relative overflow-hidden rounded-lg">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
                          sizes="280px"
                        />
                        
                        {/* Enhanced Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-[#00ffff]/20 backdrop-blur-sm border border-[#00ffff]/50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-[#00ffff] text-xs font-bold uppercase tracking-wider">
                            {work.category}
                          </span>
                        </div>
                        
                        {/* Title Overlay at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                          <span
                            className="text-[#888] text-xs font-medium tracking-[0.15em] uppercase group-hover:text-[#00ffff] transition-colors duration-300 block"
                            style={{ 
                              letterSpacing: '0.15em', 
                              fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif' 
                            }}
                          >
                            {work.title}
                          </span>
                          <p className="text-gray-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: Fixed grid with hover effects */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 h-[360px]">
              {featuredWorks.map((work, idx) => {
                const scale = getScale(hoveredIdx, idx);
                const opacity = getOpacity(hoveredIdx, idx);
                const z = getZ(hoveredIdx, idx);
                const rotateY = getRotateY(hoveredIdx, idx);
                
                return (
                  <motion.div
                    key={work.title}
                    className="relative overflow-visible cursor-pointer select-none group h-full"
                    style={{
                      transformOrigin: 'bottom center',
                      zIndex: z,
                      perspective: 1000,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: loaded ? opacity : 0,
                      y: loaded ? 0 : 20,
                      scale: scale,
                      rotateY: rotateY,
                    }}
                    transition={{
                      type: hoveredIdx !== null ? 'spring' : 'spring',
                      stiffness: 300,
                      damping: 25,
                      mass: 0.8,
                      delay: loaded && hoveredIdx === null ? idx * 0.15 : 0,
                      duration: hoveredIdx !== null ? 0.4 : 0.6
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Enhanced Card with Only Image */}
                    <Card className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ffff] overflow-hidden w-full h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#00ffff]/20 relative">
                      {/* Animated Border Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: 'linear-gradient(45deg, #00ffff, #ff0080, #00ffff)',
                          padding: '2px',
                        }}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full bg-[#0a0a0a] rounded-lg" />
                      </motion.div>
                      
                      {/* Image Container - Full Card */}
                      <div className="w-full h-full relative overflow-hidden rounded-lg">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:contrast-125 group-hover:brightness-75"
                          sizes="(max-width: 1024px) 33vw, 20vw"
                        />
                        
                        {/* Enhanced Gradient Overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                          initial={{ opacity: 0.6 }}
                          whileHover={{ opacity: 0.8 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Scan Line Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffff]/30 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                        />
                        
                        {/* Category Badge */}
                        <motion.div
                          className="absolute top-4 left-4 bg-[#00ffff]/20 backdrop-blur-sm border border-[#00ffff]/50 px-3 py-1 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <span className="text-[#00ffff] text-xs font-bold uppercase tracking-wider">
                            {work.category}
                          </span>
                        </motion.div>
                        
                        {/* Title Overlay at Bottom */}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.span
                            className="text-[#888] text-xs font-medium tracking-[0.15em] uppercase group-hover:text-[#00ffff] transition-colors duration-300 block"
                            style={{ 
                              letterSpacing: '0.15em', 
                              fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif' 
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {work.title}
                          </motion.span>
                          <motion.p
                            className="text-gray-400 text-xs mt-1"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {work.description}
                          </motion.p>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;