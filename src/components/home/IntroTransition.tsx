'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, Share2, Film, ShoppingBag, Cpu, ArrowRight, Layers, Sparkles } from 'lucide-react';

export const IntroTransition: React.FC = () => {
  const [activeElement, setActiveElement] = useState<number | null>(null);

  const pillars = [
    { name: 'Web Flagship', icon: Globe, detail: 'High-speed custom architecture' },
    { name: 'Social Presence', icon: Share2, detail: 'Curated narrative & aesthetic grid' },
    { name: 'Commercial Media', icon: Film, detail: '4K cinema photo & reels' },
    { name: 'Direct Commerce', icon: ShoppingBag, detail: 'Frictionless 1-click checkout' },
    { name: 'Operations & POS', icon: Cpu, detail: 'Real-time ordering & telemetry' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F9FAF8] text-[#0C120E] border-y border-[#D8E4DC] relative overflow-hidden">
      {/* Subtle radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-[#E8F0EA] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Small Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono tracking-widest text-[#1A281E] uppercase mb-8 font-bold shadow-2xs">
          <span>02 // THE CONNECTED STANDARD</span>
        </div>

        {/* Large Statement */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#0C120E] leading-[1.12] max-w-4xl mx-auto mb-16">
          Your customers don&apos;t experience your business in separate departments.{' '}
          <span className="italic font-light text-[#263A2D] block sm:inline">
            They experience one brand.
          </span>
        </h2>

        {/* Visual Merger: 5 Elements converging into One Connected System */}
        <div className="max-w-4xl mx-auto">
          {/* Top 5 Disparate Channels */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = activeElement === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveElement(idx)}
                  onMouseLeave={() => setActiveElement(null)}
                  className={`p-4 rounded-2xl border transition-all duration-300 text-left ${
                    isHovered
                      ? 'bg-white border-[#1A281E] shadow-[0_10px_25px_rgba(26,40,30,0.12)] transform -translate-y-1'
                      : 'bg-white/80 border-[#D8E4DC] hover:border-[#263A2D]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${isHovered ? 'text-[#1A281E]' : 'text-[#52665A]'}`} />
                    <span className="text-[10px] font-mono text-[#263A2D] font-bold">0{idx + 1}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#0C120E]">{item.name}</div>
                  <div className="text-[11px] text-[#52665A] mt-0.5 truncate">{item.detail}</div>
                </div>
              );
            })}
          </div>

          {/* Converging Connection Signal Lines */}
          <div className="flex items-center justify-center my-4">
            <div className="h-10 w-px bg-gradient-to-b from-[#1A281E] to-transparent relative shadow-sm">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1A281E] animate-ping" />
            </div>
          </div>

          {/* Central Unified Result Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E4DC] shadow-[0_20px_50px_rgba(18,28,21,0.06)] flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F0EA] border border-[#C2D5C8] flex items-center justify-center text-[#1A281E] shadow-2xs shrink-0">
                <Layers className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#1A281E] font-bold">
                  Unified Execution
                </div>
                <div className="text-lg sm:text-xl font-serif text-[#0C120E] font-medium mt-0.5">
                  One cohesive partner engineering your entire digital presence.
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold transition-all shadow-[0_4px_16px_rgba(26,40,30,0.2)]"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
