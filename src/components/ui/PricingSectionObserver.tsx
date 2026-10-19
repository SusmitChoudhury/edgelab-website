'use client';

import React, { useEffect, useRef } from 'react';
import { useCurrency } from '@/context/CurrencyContext';

interface PricingSectionObserverProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const PricingSectionObserver: React.FC<PricingSectionObserverProps> = ({
  children,
  id = 'pricing',
  className = '',
}) => {
  const { notifyPricingSectionVisible } = useCurrency();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            notifyPricingSectionVisible();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [notifyPricingSectionVisible]);

  return (
    <div ref={containerRef} id={id} className={className}>
      {children}
    </div>
  );
};
