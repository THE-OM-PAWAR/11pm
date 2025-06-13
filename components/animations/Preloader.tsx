'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DumbbellIcon } from 'lucide-react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 2000);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.5 }
            }}
            exit={{ 
              opacity: 0, 
              scale: 1.2,
              transition: { duration: 0.5 }
            }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "linear"
                }
              }}
              className="mb-6"
            >
              <DumbbellIcon size={64} className="text-[rgb(var(--accent-green))]" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3, duration: 0.5 }
              }}
            >
              YUVI <span className="text-[rgb(var(--accent-green))]">GYM</span>
            </motion.h1>
            
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 }
              }}
            >
              FUEL YOUR STRENGTH
            </motion.p>
            
            <motion.div 
              className="w-40 h-1 bg-gray-800 rounded-full mt-8 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.7, duration: 0.5 }
              }}
            >
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[rgb(var(--accent-green))]"
                initial={{ width: 0 }}
                animate={{ 
                  width: "100%",
                  transition: { 
                    delay: 0.8, 
                    duration: 1.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;