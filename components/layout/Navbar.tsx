'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-40 transition-all duration-300',
        isScrolled
          ? 'bg-black bg-opacity-80 backdrop-blur-md py-4 shadow-md'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Enhanced Animated Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-1 hover-trigger group relative"
          onClick={handleLinkClick}
        >
          <motion.div 
            className="relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          >
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-[#00ffff] opacity-0 blur-xl rounded-full"
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Rotating Ring */}
            <motion.div
              className="absolute inset-0 w-16 h-16 -translate-x-2 -translate-y-2"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg viewBox="0 0 64 64" className="w-full h-full opacity-20">
                <circle 
                  cx="32" 
                  cy="32" 
                  r="28" 
                  fill="none" 
                  stroke="#00ffff" 
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
            </motion.div>

            {/* Pulsing Dots */}
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-[#00ffff] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Main Logo Text with Enhanced Animation */}
            <motion.span 
              className="block text-2xl font-bold tracking-tight leading-none relative z-10"
              style={{
                fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              {/* "11" with floating animation */}
              <motion.span 
                className="block text-white transition-all duration-500 group-hover:text-[#00ffff] relative"
                animate={{ 
                  y: [0, -2, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  y: -4,
                  textShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
                }}
              >
                11
                {/* Glitch effect overlay */}
                <motion.span
                  className="absolute inset-0 text-[#00ffff] opacity-0"
                  animate={{ 
                    opacity: [0, 0.3, 0],
                    x: [0, 1, -1, 0],
                  }}
                  transition={{ 
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear"
                  }}
                >
                  11
                </motion.span>
              </motion.span>
              
              {/* "PM" with counter-floating animation */}
              <motion.span 
                className="block text-white transition-all duration-500 group-hover:text-[#00ffff] -mt-1 relative"
                animate={{ 
                  y: [0, 2, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                whileHover={{ 
                  y: 4,
                  textShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
                }}
              >
                PM
                {/* Glitch effect overlay */}
                <motion.span
                  className="absolute inset-0 text-[#00ffff] opacity-0"
                  animate={{ 
                    opacity: [0, 0.3, 0],
                    x: [0, -1, 1, 0],
                  }}
                  transition={{ 
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "linear",
                    delay: 0.05
                  }}
                >
                  PM
                </motion.span>
              </motion.span>
            </motion.span>
            
            {/* Animated underline with wave effect */}
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#00ffff] via-white to-[#00ffff]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: ["0%", "100%", "0%"],
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{ 
                width: "100%",
                opacity: 1,
                transition: { duration: 0.4 }
              }}
            />
            
            {/* Scanning line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffff]/20 to-transparent"
              animate={{ 
                x: ["-100%", "100%"],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 3
              }}
            />
            
            {/* Corner brackets animation */}
            <motion.div
              className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#00ffff] opacity-0"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#00ffff] opacity-0"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wider font-medium text-white hover:text-gray-300 transition-colors duration-300 animated-border hover-trigger"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <motion.button 
              className="bg-white text-black px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Join Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none hover-trigger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden transition-transform duration-300 ease-in-out',
          isMobileMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/" 
              className="flex items-center gap-1"
              onClick={handleLinkClick}
            >
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">11</span>
                <br />
                <span className="text-white">PM</span>
              </span>
            </Link>
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl uppercase tracking-wider font-medium text-white hover:text-gray-300 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="mt-6"
              onClick={handleLinkClick}
            >
              <button className="bg-white text-black px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                Join Now
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;