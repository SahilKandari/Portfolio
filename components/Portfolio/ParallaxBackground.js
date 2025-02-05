'use client'
import React, { useEffect, useState } from 'react'

const ParallaxBackground = () => {
    const [scroll, setScroll] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Adjust these speed multipliers for smooth effect
    const backgroundSpeed = 0.01; // Lower = slower parallax
    const floatingSpeed = 0.02;  // Adjusts the floating elements' movement
    const rotationSpeed = 0.002; // Adjusts the rotation speed

    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{
            transform: `translateY(${scroll * backgroundSpeed}px)`
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => {
            const size = Math.random() * 300 + 50;
            return (
              <div
                key={i}
                className="absolute rounded-full bg-purple-500/10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: `translateY(${scroll * floatingSpeed}px) rotate(${scroll * rotationSpeed}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              />
            );
          })}
        </div>
      </div>
    );
};

export default ParallaxBackground;
