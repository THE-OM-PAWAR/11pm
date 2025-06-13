'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const featuredWorks = [
  {
    title: 'GAMING ZONE',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'VR EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'TOURNAMENTS',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf23?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'SNACK BAR',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'GAMING LOUNGE',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
  },
];

const getScale = (hoveredIdx: number | null, idx: number) => {
  if (hoveredIdx === null) return 1.0;
  const dist = Math.abs(hoveredIdx - idx);
  if (dist === 0) return 1.08;
  if (dist === 1) return 0.96;
  if (dist === 2) return 0.92;
  if (dist === 3) return 0.88;
  return 0.85;
};

const getOpacity = (hoveredIdx: number | null, idx: number) => {
  if (hoveredIdx === null) return 1.0;
  const dist = Math.abs(hoveredIdx - idx);
  if (dist === 0) return 1.0;
  if (dist === 1) return 0.7;
  if (dist === 2) return 0.5;
  if (dist === 3) return 0.3;
  return 0.2;
};

const getZ = (hoveredIdx: number | null, idx: number) => {
  if (hoveredIdx === null) return 1;
  const dist = Math.abs(hoveredIdx - idx);
  if (dist === 0) return 30;
  if (dist === 1) return 20;
  if (dist === 2) return 10;
  return 1;
};

const HeroSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
      className="w-full min-h-screen h-screen bg-black flex flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-8xl mx-auto h-full">
        {/* Headline */}
        <div className="flex flex-col items-center justify-center w-full h-1/2 justify-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loaded ? 1 : 0.2, y: loaded ? 0 : 30 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-center mt-20"
            style={{
              fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif',
              letterSpacing: '0.04em',
              lineHeight: 1.08,
            }}
          >
            LEVEL UP YOUR<br />GAMING EXPERIENCE
          </motion.h1>
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
            className="mt-8 px-8 py-3 bg-[#00ffff] text-black font-bold tracking-wider uppercase text-sm hover:bg-[#00cccc] transition-colors duration-300 rounded-sm"
            style={{
              letterSpacing: '0.08em',
              fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif',
            }}
          >
            EXPLORE NOW
          </motion.button>
        </div>

        {/* Featured Works Grid */}
        <div className="w-screen h-1/2 flex justify-center">
          <div className="flex overflow-x-auto snap-x snap-mandatory overflow-y-visible w-full max-w-7xl mt-auto mb-auto gap-6 px-4 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-8 h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {featuredWorks.map((work, idx) => {
              const scale = getScale(hoveredIdx, idx);
              const opacity = getOpacity(hoveredIdx, idx);
              const z = getZ(hoveredIdx, idx);
              return (
                <motion.div
                  key={work.title}
                  className="relative flex flex-col items-center justify-end overflow-visible cursor-pointer select-none snap-center h-full flex-none w-[calc(100%-2rem)] md:w-auto group"
                  style={{
                    transformOrigin: 'bottom center',
                    zIndex: z,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: loaded ? opacity : 0,
                    y: loaded ? 0 : 20,
                    scale: window.innerWidth >= 768 ? scale : 1,
                  }}
                  transition={{
                    type: hoveredIdx !== null ? 'tween' : 'spring',
                    stiffness: 400,
                    damping: 32,
                    mass: 1.1,
                    ease: [0.4, 0.0, 0.2, 1],
                    delay: loaded && hoveredIdx === null ? idx * 0.2 : 0,
                    duration: hoveredIdx !== null ? 0.2 : 0.5
                  }}
                  onMouseEnter={() => window.innerWidth >= 768 && setHoveredIdx(idx)}
                  onMouseLeave={() => window.innerWidth >= 768 && setHoveredIdx(null)}
                >
                  <Card className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] flex flex-col items-start p-0 overflow-hidden w-full h-[360px] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/50">
                    <div className="w-full h-[320px] relative overflow-hidden">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:contrast-125 group-hover:brightness-75"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                      
                      {/* Hover overlay with centered text */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-white text-sm font-bold uppercase tracking-[0.2em] px-4 py-2 border border-white/30 bg-black/40 backdrop-blur-sm">
                          VIEW PROJECT
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-full flex flex-col items-start px-4 py-3 bg-[#0a0a0a] group-hover:bg-[#111] transition-colors duration-300">
                      <span
                        className="text-[#888] text-xs font-medium tracking-[0.15em] uppercase group-hover:text-white transition-colors duration-300"
                        style={{ 
                          letterSpacing: '0.15em', 
                          fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif' 
                        }}
                      >
                        {work.title}
                      </span>
                    </div>
                  </Card>

                  {/* Floating indicator on hover */}
                  <AnimatePresence>
                    {window.innerWidth >= 768 && hoveredIdx === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute left-1/2 -translate-x-1/2 -bottom-4 pointer-events-none"
                      >
                        <div className="w-2 h-2 bg-[#00ffff] rounded-full shadow-lg shadow-[#00ffff]/50" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;