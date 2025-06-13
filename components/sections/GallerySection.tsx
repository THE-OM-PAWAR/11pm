'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    alt: 'Gaming Zone',
    category: 'Gaming Stations',
    description: 'High-end gaming PCs with RTX 4080/4090 graphics cards',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80',
    alt: 'VR Experience',
    category: 'VR Gaming',
    description: 'Immersive virtual reality gaming experiences',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1542751110-97427bbecf23?auto=format&fit=crop&w=600&q=80',
    alt: 'Tournament Area',
    category: 'Esports',
    description: 'Professional esports tournament setup',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
    alt: 'Gaming Lounge',
    category: 'Lounge',
    description: 'Comfortable gaming environment with premium seating',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    alt: 'Snack Bar',
    category: 'Lounge',
    description: 'Gaming fuel and refreshments available 24/7',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    alt: 'Premium Setup',
    category: 'Gaming Stations',
    description: 'Latest gaming hardware and peripherals',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth animations
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);
  const scale = useTransform(x, [-200, 0, 200], [0.95, 1, 0.95]);

  // Calculate how many cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(3);
  const [cardWidth, setCardWidth] = useState(33.33);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
        setCardWidth(100);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
        setCardWidth(50);
      } else {
        setCardsToShow(3);
        setCardWidth(33.33);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - cardsToShow);

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
    const currentIdx = galleryImages.findIndex(img => img.id === selectedImage);
    const nextIdx = (currentIdx + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIdx].id);
  };

  const showPrevImage = () => {
    if (selectedImage === null) return;
    const currentIdx = galleryImages.findIndex(img => img.id === selectedImage);
    const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIdx].id);
  };

  // Handle swipe gestures in lightbox
  const handleLightboxDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      showPrevImage();
    } else if (info.offset.x < -threshold) {
      showNextImage();
    }
  };

  // Handle carousel navigation
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  // Handle carousel drag
  const handleCarouselDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold && currentIndex > 0) {
      prevSlide();
    } else if (info.offset.x < -threshold && currentIndex < maxIndex) {
      nextSlide();
    }
    setIsDragging(false);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-black">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal threshold={0.1}>
            <h2 className="heading-lg mb-6">
              <span className="text-gradient">Gallery</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} delay={0.2}>
            <p className="text-gray-300">
              Swipe through our premium gaming facilities and experience the atmosphere where gaming legends are born.
            </p>
          </ScrollReveal>
        </div>

        {/* Swipeable Cards Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hidden md:flex ${
              currentIndex === 0 
                ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed' 
                : 'bg-black/50 text-white hover:bg-[#00ffff] hover:text-black'
            }`}
            whileHover={currentIndex > 0 ? { scale: 1.1 } : {}}
            whileTap={currentIndex > 0 ? { scale: 0.9 } : {}}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hidden md:flex ${
              currentIndex >= maxIndex 
                ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed' 
                : 'bg-black/50 text-white hover:bg-[#00ffff] hover:text-black'
            }`}
            whileHover={currentIndex < maxIndex ? { scale: 1.1 } : {}}
            whileTap={currentIndex < maxIndex ? { scale: 0.9 } : {}}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Cards Container */}
          <div className="overflow-hidden rounded-2xl" ref={containerRef}>
            <motion.div
              className="flex"
              animate={{ 
                x: `-${currentIndex * cardWidth}%` 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                mass: 0.8
              }}
              drag="x"
              dragConstraints={{ 
                left: -maxIndex * (100 / cardsToShow), 
                right: 0 
              }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleCarouselDragEnd}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="flex-none px-3"
                  style={{ width: `${cardWidth}%` }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-900 h-[400px]"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={() => !isDragging && openLightbox(image.id)}
                    layout
                  >
                    {/* Card Image */}
                    <div className="relative h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-[#00ffff]/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Scan Line Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffff]/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      />
                      
                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4 bg-[#00ffff]/20 backdrop-blur-sm border border-[#00ffff]/50 px-3 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-[#00ffff] text-xs font-bold uppercase tracking-wider">
                          {image.category}
                        </span>
                      </motion.div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.h3 
                          className="text-white text-xl font-semibold mb-2"
                          initial={{ opacity: 1, y: 0 }}
                          whileHover={{ opacity: 1, y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {image.alt}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        >
                          {image.description}
                        </motion.p>
                      </div>

                      {/* Floating Zoom Icon */}
                      <motion.div
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 255, 0.2)' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </motion.div>

                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 border-2 border-[#00ffff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 1.05 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-[#00ffff] scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Swipe Hint for Mobile */}
          <motion.div
            className="text-center mt-4 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-500 text-sm">← Swipe to explore more →</p>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Lightbox with Swipe Support */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button 
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#00ffff] hover:text-black transition-colors"
              onClick={closeLightbox}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            {/* Navigation Buttons */}
            <motion.button 
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#00ffff] hover:text-black transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showPrevImage();
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button 
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#00ffff] hover:text-black transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
            
            {/* Swipeable Image Container */}
            <motion.div 
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
              ref={constraintsRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {galleryImages.map((image) => (
                image.id === selectedImage && (
                  <motion.div 
                    key={image.id} 
                    className="w-full h-full relative"
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    onDragEnd={handleLightboxDragEnd}
                    style={{ x, opacity, scale }}
                    whileDrag={{ cursor: 'grabbing' }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={800}
                      className="object-contain w-full h-full rounded-lg"
                    />
                    
                    {/* Image Info */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-[#00ffff] text-sm font-medium tracking-wide">{image.category}</span>
                      <h3 className="text-white text-2xl font-semibold mb-2">{image.alt}</h3>
                      <p className="text-gray-300">{image.description}</p>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </motion.div>

            {/* Image Counter */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {galleryImages.findIndex(img => img.id === selectedImage) + 1} / {galleryImages.length}
            </motion.div>

            {/* Swipe Hint */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ← Swipe to navigate →
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;