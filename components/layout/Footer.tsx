"use client"
import React from 'react';
import Link from 'next/link';
import { Gamepad2, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#00ffff] opacity-0 blur-lg"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <Gamepad2 className="h-8 w-8 text-[#00ffff] relative z-10 transition-all duration-300 group-hover:rotate-12" />
              </motion.div>
              
              <motion.span 
                className="text-xl font-bold tracking-tight"
                style={{
                  fontFamily: 'var(--font-grotesk), Bebas Neue, Impact, Arial Narrow, Arial, sans-serif',
                  letterSpacing: '0.02em',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-white transition-colors duration-300 group-hover:text-[#00ffff]"
                  initial={{ y: 0 }}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  11 
                </motion.span>
                <motion.span 
                  className="text-[#00ffff] transition-colors duration-300 group-hover:text-white"
                  initial={{ y: 0 }}
                  whileHover={{ y: 1 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  PM
                </motion.span>
              </motion.span>
            </Link>
            <p className="text-gray-400 text-sm">
              Level up your gaming experience with cutting-edge PCs, VR adventures, and an electrifying gaming community.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.instagram.com/11pmgaming" 
                className="text-gray-400 hover:text-[#00ffff] transition-colors relative"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#00ffff] opacity-0 blur-md"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <Instagram size={20} className="relative z-10" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#00ffff] mt-1" />
                <a 
                  href="https://maps.app.goo.gl/gHm5tGpYoSLEsXDa8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#00ffff] transition-colors"
                >
                  989 A, Main Street, Dreamland Square, Gaming District, Tech City 453441
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#00ffff]" />
                <span 
                  className="text-gray-400 cursor-pointer hover:text-[#00ffff] transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText('08966968087');
                  }}
                  title="Click to copy"
                >
                  08966968087
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#00ffff]" />
                <span className="text-gray-400">info@11pmgaming.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Gaming Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-[#00ffff]">10:00 AM - 2:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-[#00ffff]">10:00 AM - 3:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-[#00ffff]">12:00 PM - 1:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 11 PM Gaming Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;