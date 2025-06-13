'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

// Gallery categories
const categories = [
  'All',
  'Gaming Stations',
  'VR Zone',
  'Tournament Area',
  'Lounge',
];

// Gallery data
const galleryImages = [
  { 
    id: 1,
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    alt: '11 PM Gaming Cafe - Premium Gaming Stations',
    category: 'Gaming Stations',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80',
    alt: 'VR Gaming Experience at 11 PM Gaming Cafe',
    category: 'VR Zone',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1542751110-97427bbecf23?auto=format&fit=crop&w=600&q=80',
    alt: 'Esports Tournament Arena',
    category: 'Tournament Area',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    alt: 'Gaming Lounge & Snack Bar',
    category: 'Lounge',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
    alt: 'Comfortable Gaming Environment',
    category: 'Gaming Stations',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    alt: 'High-End Gaming Setup',
    category: 'Gaming Stations',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Filter images based on selected category
  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);
  
  // Lightbox functions
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const showNextImage = () => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };
  
  const showPrevImage = () => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative py-20 mb-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
            alt="11 PM Gaming Cafe - Ultimate Gaming Experience"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="heading-lg mb-6">
              11 PM Gaming Cafe <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Explore our cutting-edge gaming facility featuring high-end gaming PCs, immersive VR experiences, 
              tournament areas, and comfortable gaming lounges that make 11 PM the ultimate gaming destination.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors hover-trigger ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-[#00ffff] font-medium mb-1">{image.category}</p>
                  <h3 className="text-xl text-white font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#00ffff] transition-colors hover-trigger"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all hover-trigger"
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
          >
            ‹
          </button>
          
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all hover-trigger"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
          >
            ›
          </button>
          
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredImages.map((image) => (
              image.id === selectedImage && (
                <div key={image.id} className="w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70">
                    <p className="text-sm text-[#00ffff]">{image.category}</p>
                    <h3 className="text-white text-lg font-medium">{image.alt}</h3>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}