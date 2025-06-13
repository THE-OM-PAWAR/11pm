"use client"
import React from 'react';
import Link from 'next/link';
import { Gamepad2, Instagram, Linkedin, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-black relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Bold Statement */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight mb-6"
                style={{
                  fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.9,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                READY TO LEVEL UP?<br />
                <span className="text-gray-800">LET'S GAME TOGETHER!</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 text-lg max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Join the ultimate gaming experience at 11 PM Gaming Cafe. 
                High-end PCs, VR adventures, and an electrifying community await.
              </motion.p>
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button 
                  className="bg-black text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-gray-800 hover:text-white transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                    letterSpacing: '0.1em',
                  }}
                >
                  <span className="relative z-10">BOOK NOW</span>
                  <motion.div
                    className="absolute inset-0 bg-gray-800"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Navigation & Info */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            {/* Navigation */}
            <div>
              <motion.h3 
                className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6"
                style={{ letterSpacing: '0.2em' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                SITEMAP
              </motion.h3>
              <nav className="space-y-4">
                {[
                  { href: '/', label: 'HOME' },
                  { href: '/gallery', label: 'GALLERY' },
                  { href: '/pricing', label: 'PRICING' },
                  { href: '/contact', label: 'CONTACT' },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={link.href}
                      className="block text-xl font-bold uppercase tracking-wide text-black hover:text-gray-600 transition-colors duration-300 group"
                      style={{
                        fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                        letterSpacing: '0.05em',
                      }}
                    >
                      <span className="relative">
                        {link.label}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gray-600 w-0 group-hover:w-full transition-all duration-300"
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <motion.h3 
                className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6"
                style={{ letterSpacing: '0.2em' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                CONNECT
              </motion.h3>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/11pmgaming', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Globe, href: '#', label: 'Website' },
                  { icon: Mail, href: 'mailto:info@11pmgaming.com', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo & Copyright */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center gap-2 group">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <Gamepad2 className="h-6 w-6 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.div>
                
                <motion.span 
                  className="text-2xl font-black tracking-tight"
                  style={{
                    fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                    letterSpacing: '0.02em',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-black group-hover:text-gray-600 transition-colors duration-300">11</span>
                  <span className="text-gray-800 group-hover:text-black transition-colors duration-300">PM</span>
                </motion.span>
              </Link>

              <motion.p 
                className="text-sm font-medium text-gray-600 uppercase tracking-wider"
                style={{ letterSpacing: '0.1em' }}
              >
                11 PM GAMING © {currentYear}
              </motion.p>
            </motion.div>

            {/* Credits */}
            <motion.div
              className="text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-300 uppercase tracking-wider"
                style={{ letterSpacing: '0.1em' }}
              >
                INFOS & CREDITS
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <motion.div
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="100" y="105" textAnchor="middle" className="text-4xl font-black" fill="currentColor">11PM</text>
          </svg>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;