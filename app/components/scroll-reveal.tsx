'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback timeout - reveal after 3 seconds regardless of intersection
    // This ensures elements are visible even if observer fails
    const fallbackTimeout = setTimeout(() => {
      setIsIntersecting(true);
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
          clearTimeout(fallbackTimeout);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return [ref, isIntersecting] as const;
}
