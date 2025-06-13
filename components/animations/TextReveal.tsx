'use client';

import React, { useEffect, useRef } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  threshold?: number;
  delay?: number;
  splitBy?: 'word' | 'letter' | 'line';
  staggerDelay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  threshold = 0.1,
  delay = 0,
  splitBy = 'word',
  staggerDelay = 0.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let elements: HTMLElement[] = [];
    
    // Split the text based on the specified method
    if (splitBy === 'word') {
      const words = text.split(' ');
      container.innerHTML = '';
      
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = (index < words.length - 1) ? `${word} ` : word;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        span.style.transitionDelay = `${delay + (index * staggerDelay)}s`;
        container.appendChild(span);
        elements.push(span);
      });
    } else if (splitBy === 'letter') {
      const letters = text.split('');
      container.innerHTML = '';
      
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        span.style.transitionDelay = `${delay + (index * staggerDelay)}s`;
        container.appendChild(span);
        elements.push(span);
      });
    } else if (splitBy === 'line') {
      const lines = text.split('\n');
      container.innerHTML = '';
      
      lines.forEach((line, index) => {
        const div = document.createElement('div');
        div.textContent = line;
        div.style.opacity = '0';
        div.style.transform = 'translateY(20px)';
        div.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        div.style.transitionDelay = `${delay + (index * staggerDelay)}s`;
        container.appendChild(div);
        elements.push(div);
      });
    }
    
    // Set up intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
          observer.unobserve(container);
        }
      },
      { threshold }
    );
    
    observer.observe(container);
    
    return () => {
      if (container) observer.unobserve(container);
    };
  }, [text, threshold, delay, splitBy, staggerDelay]);
  
  return (
    <div ref={containerRef} className={className}>
      {text}
    </div>
  );
};

export default TextReveal;