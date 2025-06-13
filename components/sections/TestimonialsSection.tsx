'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Aditya Jat',
    role: 'Member for 2 years',
    quote: "I like the crowd of the gym all the person are very friendly and respectful . \n \nTrainer are also very good in nature ..",
  },
  {
    id: 2,
    name: 'Kratagya Agrawal',
    role: 'Member for 6 months',
    quote: "Understanding owner, good equipments for workout and flexible timings",
    image: '/testimonial/image.png',
  },
  {
    id: 3,
    name: 'Golu Singh',
    role: 'Member for 3 years',
    quote: "Best gym at a cheap price in mhow \n Yuvi bhaiya ka bhi bhadya behaviour hain or bhadya trainner hain ✅💯💯💯 …",
    image: '/testimonial/unnamed.png',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Generate a background color based on name (for avatar)
  const getAvatarBgColor = (name: string): string => {
    const colors = [
      'bg-gradient-to-br from-purple-500 to-indigo-600',
      'bg-gradient-to-br from-blue-500 to-teal-400',
      'bg-gradient-to-br from-red-500 to-pink-500',
      'bg-gradient-to-br from-amber-500 to-orange-600',
      'bg-gradient-to-br from-emerald-500 to-teal-700',
    ];
    
    // Simple hash function to pick a color based on name
    const hash = name.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-[rgb(var(--accent-green))] rounded-full filter blur-[140px] opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[rgb(var(--accent-red))] rounded-full filter blur-[140px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <ScrollReveal threshold={0.1}>
          <h2 className="heading-lg text-center mb-16">
            What Our <span className="text-gradient">Members Say</span>
          </h2>
        </ScrollReveal>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Testimonial Content */}
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <ScrollReveal threshold={0.1} delay={0.2} className="mb-8">
              <Quote className="h-16 w-16 text-[rgb(var(--accent-green))] opacity-20" />
            </ScrollReveal>
            
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <blockquote className="text-xl md:text-2xl font-light text-gray-200 mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      {testimonial.image ? (
                        <div className="mr-4 rounded-full overflow-hidden w-14 h-14 relative">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`mr-4 rounded-full w-14 h-14 ${getAvatarBgColor(testimonial.name)} flex items-center justify-center text-white text-xl font-semibold shadow-lg`}>
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-[rgb(var(--accent-green))]' 
                      : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 hidden md:block hover-trigger"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full text-white transition-all duration-300 hover:scale-110 hidden md:block hover-trigger"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;