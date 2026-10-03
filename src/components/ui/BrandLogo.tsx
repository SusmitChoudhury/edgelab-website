'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark-only' | 'wordmark';
  href?: string;
  withTagline?: boolean;
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  href = '#top',
  withTagline = false,
  theme = 'light',
}) => {
  const sizeClasses = {
    sm: 'text-lg gap-2',
    md: 'text-xl gap-2.5',
    lg: 'text-2xl gap-3',
  };

  const markSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  const isDark = theme === 'dark';

  const content = (
    <div className={`group inline-flex items-center select-none ${sizeClasses[size]} ${className}`}>
      {variant !== 'wordmark' && (
        <div
          className={`${markSizes[size]} relative flex items-center justify-center rounded-xl ${
            isDark ? 'bg-[#0E1A11] border-[#10B981]/50' : 'bg-[#0B281B] border-[#10B981]/40'
          } text-white font-bold tracking-tighter border shadow-sm transition-all duration-300 group-hover:scale-105 overflow-hidden`}
        >
          <div className="relative z-10 flex items-center font-mono">
            <span className="text-[#34D399] font-extrabold">E</span>
            <span className="text-white font-bold">L</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#10B981]" />
        </div>
      )}

      {variant !== 'mark-only' && (
        <div className="flex flex-col">
          <div
            className={`flex items-center tracking-tight font-sans font-bold ${
              isDark ? 'text-white' : 'text-[#0B281B]'
            }`}
          >
            <span>edge</span>
            <span className="text-[#10B981] font-extrabold">Lab</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] ml-0.5 mb-1" />
          </div>
          {withTagline && (
            <span
              className={`text-[10px] tracking-wider uppercase font-medium -mt-0.5 font-mono ${
                isDark ? 'text-[#A7D3B5]' : 'text-[#5C7468]'
              }`}
            >
              Your business, finally online.
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5F44] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};
