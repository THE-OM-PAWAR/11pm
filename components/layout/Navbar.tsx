'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-1 hover-trigger"
          onClick={handleLinkClick}
        >
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">11</span>
            <br />
            <span className="text-white">PM</span>
          </span>
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
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105">
              Join Now
            </button>
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