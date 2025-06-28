"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Sparkle = ({ className }: { className?: string }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const animationDelay = `${Math.random() * 2}s`;
    const animationDuration = `${1 + Math.random() * 1.5}s`;
    
    setStyle({
      top,
      left,
      animationDelay,
      animationDuration,
    });
  }, []);

  return (
    <div
      className={cn(
        "absolute rounded-full bg-accent animate-sparkle",
        "w-1 h-1 md:w-2 md:h-2",
        className
      )}
      style={style}
    />
  );
};

export function Sparkles() {
  const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const isClient = typeof window !== 'undefined';
      if(isClient) {
        const numSparkles = window.innerWidth > 768 ? 40 : 20;
        const newSparkles = Array.from({ length: numSparkles }).map((_, i) => <Sparkle key={i} />);
        setSparkles(newSparkles);
      }
    };

    generateSparkles();
    window.addEventListener('resize', generateSparkles);
    return () => window.removeEventListener('resize', generateSparkles);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {sparkles}
    </div>
  );
}
