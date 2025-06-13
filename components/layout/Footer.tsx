"use client"
import React from 'react';
import Link from 'next/link';
import { DumbbellIcon, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <DumbbellIcon className="h-8 w-8 text-[rgb(var(--accent-green))]" />
              <span className="text-xl font-bold tracking-tight">
                YUVI <span className="text-[rgb(var(--accent-green))]">GYM</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Fuel your strength with cutting-edge equipment, expert trainers, and a motivating atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/yuvifitnessgym?igsh=MWNqZmphMnFudXR6eQ%3D%3D&utm_source=qr" className="text-gray-400 hover:text-[rgb(var(--accent-green))] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[rgb(var(--accent-green))] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[rgb(var(--accent-green))] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-[rgb(var(--accent-green))] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[rgb(var(--accent-green))] transition-colors">
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
                <MapPin className="h-5 w-5 text-[rgb(var(--accent-green))] mt-1" />
                <a 
                  href="https://maps.app.goo.gl/gHm5tGpYoSLEsXDa8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[rgb(var(--accent-green))] transition-colors"
                >
                  989 A, Main Street, Dreamland Square, Dr. Ambedkar Nagar, Madhya Pradesh 453441
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[rgb(var(--accent-green))]" />
                <span 
                  className="text-gray-400 cursor-pointer hover:text-[rgb(var(--accent-green))] transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText('08966968087');
                  }}
                  title="Click to copy"
                >
                  08966968087
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[rgb(var(--accent-green))]" />
                <span className="text-gray-400">yuviipatidar@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-[rgb(var(--accent-green))]">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-[rgb(var(--accent-green))]">7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-[rgb(var(--accent-green))]">8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Yuvi Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;