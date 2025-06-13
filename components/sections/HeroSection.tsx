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
  if (dist === 0) return 1.22;
  if (dist === 1) return 0.92;
  if (dist === 2) return 0.85;
  if (dist === 3) return 0.8;
  return 0.75;
};

const getOpacity = (hoveredIdx: number | null, idx: number) => {
  if (hoveredIdx === null) return 1.0;
  const dist = Math.abs(hoveredIdx - idx);
  if (dist === 0) return 1.0;
  if (dist === 1) return 0.85;
  if (dist === 2) return 0.7;
  if (dist === 3) return 0.5;
  return 0.5;
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
        <div className="flex flex-col items-center justify-center w-full h-1/2 justify-center mx-auto  ">
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
          <div className="flex overflow-x-auto snap-x snap-mandatory overflow-y-visible w-full max-w-7xl mt-auto mb-auto gap-4 px-4 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {featuredWorks.map((work, idx) => {
              const scale = getScale(hoveredIdx, idx);
              const opacity = getOpacity(hoveredIdx, idx);
              const z = getZ(hoveredIdx, idx);
              return (
                <motion.div
                  key={work.title}
                  className="relative flex flex-col items-center justify-end overflow-visible cursor-pointer select-none snap-center h-full flex-none w-[calc(100%-2rem)] md:w-auto"
                  style={{
                    transformOrigin: 'bottom center',
                    zIndex: z,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: loaded ? 1 : 0,
                    y: loaded ? 0 : 20,
                    scale: window.innerWidth >= 768 ? scale : 1,
                    boxShadow: window.innerWidth >= 768 && hoveredIdx === idx
                      ? '0 8px 32px 0 rgba(0,255,255,0.18), 0 2px 8px 0 rgba(0,0,0,0.25)'
                      : '0 2px 8px 0 rgba(0,0,0,0.18)',
                  }}
                  transition={{
                    type: hoveredIdx !== null ? 'tween' : 'spring',
                    stiffness: 400,
                    damping: 32,
                    mass: 1.1,
                    ease: [0.4, 0.0, 0.2, 1],
                    delay: loaded && hoveredIdx === null ? idx * 0.2 : 0,
                    duration: hoveredIdx !== null ? 0.15 : 0.5
                  }}
                  onMouseEnter={() => window.innerWidth >= 768 && setHoveredIdx(idx)}
                  onMouseLeave={() => window.innerWidth >= 768 && setHoveredIdx(null)}
                >
                  <Card className="bg-[#181818] border-none flex flex-col items-start p-0 overflow-hidden w-full h-[360px] transition-shadow duration-300" style={{ boxShadow: 'none' }}>
                    <div className="w-full h-[340px] relative">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="w-full flex flex-col items-start px-2 pt-2">
                      <span
                        className="text-[#bcbcbc] text-xs font-bold tracking-widest uppercase"
                        style={{ letterSpacing: '0.08em', fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif' }}
                      >
                        {work.title}
                      </span>
                    </div>
                    {/* Hover text */}
                    <AnimatePresence>
                      {window.innerWidth >= 768 && hoveredIdx === idx && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="absolute left-1/2 -translate-x-1/2 bottom-6 text-white text-xs font-mono px-3 py-1 rounded bg-black/80 pointer-events-none shadow-lg"
                          style={{ letterSpacing: '0.08em' }}
                        >
                          OPEN PROJECT
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Card>
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