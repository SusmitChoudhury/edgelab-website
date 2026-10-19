'use client';

import React from 'react';
import { useCurrency } from '@/context/CurrencyContext';

interface CurrencySwitcherProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const CurrencySwitcher: React.FC<CurrencySwitcherProps> = ({
  className = '',
  size = 'sm',
}) => {
  const { currency, setCurrency, isPulsing, onSwitcherInteract } = useCurrency();

  const handleKeyDown = (e: React.KeyboardEvent, targetCurrency: 'USD' | 'INR') => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setCurrency(targetCurrency);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setCurrency(currency === 'USD' ? 'INR' : 'USD');
    }
  };

  const isSmall = size === 'sm';

  return (
    <div
      role="radiogroup"
      aria-label="Currency selection"
      onClick={onSwitcherInteract}
      className={`inline-flex items-center p-0.5 rounded-full bg-[#181B24] border border-[#444F24]/60 transition-all duration-300 relative select-none ${
        isPulsing
          ? 'animate-currency-pulse ring-2 ring-[#AD8820] shadow-[0_0_16px_rgba(173,136,32,0.5)]'
          : 'hover:border-[#AD8820]/60'
      } ${className}`}
    >
      {/* USD Button */}
      <button
        type="button"
        role="radio"
        aria-checked={currency === 'USD'}
        tabIndex={currency === 'USD' ? 0 : -1}
        onClick={() => setCurrency('USD')}
        onKeyDown={(e) => handleKeyDown(e, 'USD')}
        className={`relative inline-flex items-center justify-center font-mono font-bold tracking-tight rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AD8820] ${
          isSmall
            ? 'px-2.5 py-1 text-[11px]'
            : 'px-3 py-1.5 text-xs'
        } ${
          currency === 'USD'
            ? 'bg-[#444F24] text-white shadow-sm'
            : 'text-[#B6BBD9] hover:text-white hover:bg-white/5'
        }`}
      >
        <span>USD $</span>
      </button>

      {/* Separator Line */}
      <span className="w-px h-3 bg-white/10 mx-0.5 pointer-events-none" aria-hidden="true" />

      {/* INR Button */}
      <button
        type="button"
        role="radio"
        aria-checked={currency === 'INR'}
        tabIndex={currency === 'INR' ? 0 : -1}
        onClick={() => setCurrency('INR')}
        onKeyDown={(e) => handleKeyDown(e, 'INR')}
        className={`relative inline-flex items-center justify-center font-mono font-bold tracking-tight rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AD8820] ${
          isSmall
            ? 'px-2.5 py-1 text-[11px]'
            : 'px-3 py-1.5 text-xs'
        } ${
          currency === 'INR'
            ? 'bg-[#444F24] text-white shadow-sm'
            : 'text-[#B6BBD9] hover:text-white hover:bg-white/5'
        }`}
      >
        <span>INR ₹</span>
      </button>
    </div>
  );
};
