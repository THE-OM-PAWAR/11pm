'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxEffectProps {
  children: ReactNode;
  speed?: number; // positive values move slower, negative values move faster
  className?: string;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    let startPosition = 0;
    let elementHeight = 0;
    let windowHeight = 0;
    
    // Calculate initial positions
    const calculatePositions = () => {
      const rect = element.getBoundingClientRect();
      startPosition = rect.top + window.scrollY;
      elementHeight = rect.height;
      windowHeight = window.innerHeight;
    };
    
    // Update position based on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementTop = startPosition - scrollPosition;
      const elementCenter = elementTop + elementHeight / 2;
      const windowCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - windowCenter;
      
      // Apply transform based on distance from center and speed
      element.style.transform = `translateY(${distanceFromCenter * speed * -0.1}px)`;
    };
    
    // Initialize
    calculatePositions();
    handleScroll();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculatePositions);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculatePositions);
    };
  }, [speed]);
  
  return (
    <div ref={ref} className={`transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxEffect;