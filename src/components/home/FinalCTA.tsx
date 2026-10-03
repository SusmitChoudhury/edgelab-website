'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '@/config/site';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-28 md:py-40 bg-gradient-to-b from-[#F0F4F1] via-white to-[#E8F0EA] text-[#0C120E] relative overflow-hidden text-center border-t border-[#D8E4DC]">
      {/* Radiant Olive Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#E8F0EA]/70 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono font-bold tracking-widest text-[#1A281E] uppercase mb-8 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
          <span>11 // The Next Step</span>
        </div>

        {/* The Exact Final Statement */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#0C120E] tracking-tight leading-[1.05] mb-8">
          YOUR BUSINESS DESERVES
          <span className="italic font-light text-[#263A2D] block mt-2">
            A DIGITAL PRESENCE THAT FEELS LIKE IT.
          </span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#52665A] font-sans leading-relaxed mb-12">
          Let&apos;s build the digital presence your business deserves.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs sm:text-sm font-bold shadow-[0_12px_30px_rgba(26,40,30,0.3)] transition-all transform hover:-translate-y-0.5 group"
          >
            <span>START A PROJECT →</span>
          </Link>

          <a
            href={getWhatsAppUrl("Hi EdgeLab, I'm ready to build our digital presence.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#F9FAF8] text-[#0C120E] border border-[#D8E4DC] text-xs sm:text-sm font-mono font-semibold transition-all hover:border-[#1A281E] shadow-2xs"
          >
            <MessageSquare className="w-4 h-4 text-[#1A281E]" />
            <span>WhatsApp Consultation</span>
          </a>
        </div>

        {/* EdgeLab Wordmark & Tagline Stamp */}
        <div className="pt-10 border-t border-[#D8E4DC] flex flex-col items-center">
          <div className="font-serif text-2xl font-bold tracking-tight text-[#0C120E] flex items-center gap-1">
            <span>Edge</span>
            <span className="text-[#263A2D]">Lab</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] mb-1" />
          </div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#52665A] mt-1">
            {BRAND.tagline}
          </div>
        </div>
      </div>
    </section>
  );
};
