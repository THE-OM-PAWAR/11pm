'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLoad = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = 'auto';
    }, 300);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 2,
            transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
          }}
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.2 }
            }}
          >
            11 PM
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoad; 