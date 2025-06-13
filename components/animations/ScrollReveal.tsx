'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
  direction = 'up',
  distance = 30,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Set initial styles based on direction
    let initialTransform = '';
    switch (direction) {
      case 'up':
        initialTransform = `translateY(${distance}px)`;
        break;
      case 'down':
        initialTransform = `translateY(-${distance}px)`;
        break;
      case 'left':
        initialTransform = `translateX(${distance}px)`;
        break;
      case 'right':
        initialTransform = `translateX(-${distance}px)`;
        break;
      case 'none':
        initialTransform = 'none';
        break;
    }
    
    element.style.opacity = '0';
    element.style.transform = initialTransform;
    element.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
    element.style.transitionDelay = `${delay}s`;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
          }, 100);
          observer.unobserve(element);
        }
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, direction, distance, threshold]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;