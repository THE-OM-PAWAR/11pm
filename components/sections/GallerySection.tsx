'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { X } from 'lucide-react';

const galleryImages = [

  {
    src: '/gallery/WhatsApp Image 2025-06-03 at 18.02.25_7b74f63d.jpg',
    alt: 'Gym Interior',
    category: 'Facility',
  },
  {
    src: '/gallery/WhatsApp Image 2025-06-03 at 18.02.25_43c8a413.jpg',
    alt: 'Gym Equipment',
    category: 'Equipment',
  },
  {
    src: '/gallery/WhatsApp Image 2025-06-03 at 18.02.25_b37a3d6f.jpg',
    alt: 'Gym Space',
    category: 'Facility',
  },
  {
    src: '/gallery/WhatsApp Image 2025-06-06 at 13.05.42_6251c2b5.jpg',
    alt: 'Training Area',
    category: 'Training',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-black">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal threshold={0.1}>
            <h2 className="heading-lg mb-6">
              <span className="text-gradient">Gallery</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} delay={0.2}>
            <p className="text-gray-300">
              Take a glimpse at our premium facilities and the inspiring atmosphere where transformations happen.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <ScrollReveal 
              key={index} 
              threshold={0.1} 
              delay={0.1 * (index % 3)}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              direction="up"
            >
              <div 
                className="aspect-[4/3] relative" 
                onClick={() => openLightbox(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-[rgb(var(--accent-green))] font-medium mb-1">{image.category}</p>
                  <h3 className="text-xl text-white font-semibold">{image.alt}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[rgb(var(--accent-green))] transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;