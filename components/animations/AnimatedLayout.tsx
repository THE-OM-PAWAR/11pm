'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(
        [<Navbar key="nav" />, <main key="main" className="relative">{children}</main>, <Footer key="footer" />],
        (child) => (
          <motion.div variants={itemVariants}>
            {child}
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default AnimatedLayout; 