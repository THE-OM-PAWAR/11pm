'use client';

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Show the cursor when it first moves
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Track links and buttons hover
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], input, .hover-trigger')
        .forEach(el => {
          el.addEventListener('mouseenter', () => setLinkHovered(true));
          el.addEventListener('mouseleave', () => setLinkHovered(false));
        });
    };

    // Add cursor effect after a short delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      addEventListeners();
      handleLinkHoverEvents();
    }, 1000);

    return () => {
      clearTimeout(timer);
      removeEventListeners();
    };
  }, []);

  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor-dot transition-transform duration-150 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-50' : ''} ${
          linkHovered ? 'scale-150' : ''
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transitionTimingFunction: 'ease-out',
        }}
      />
      <div
        className={`custom-cursor border-2 border-white transition-all duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''} ${
          linkHovered ? 'scale-150' : ''
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          transitionTimingFunction: 'ease-out',
          transitionDelay: '0.05s',
        }}
      />
    </>
  );
};

export default CustomCursor;