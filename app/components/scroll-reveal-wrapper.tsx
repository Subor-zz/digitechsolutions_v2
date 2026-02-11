'use client';

import { useScrollReveal } from './scroll-reveal';

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Client wrapper component for scroll reveal animations.
 * Use this to wrap sections that need scroll animations in Server Components.
 */
export default function ScrollRevealWrapper({
  children,
  className = '',
  delay = 0,
}: ScrollRevealWrapperProps) {
  const [ref, isIntersecting] = useScrollReveal();
  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  const baseClass = `scroll-reveal reveal-pending${isIntersecting ? ' revealed' : ''}${delayClass}`;

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
