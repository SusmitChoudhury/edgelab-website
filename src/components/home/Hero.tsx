'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, CONTACT } from '@/config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#122311] text-white overflow-hidden">
      {/* Subtle Ambient Background Lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#444F24]/25 rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Subtle Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1e341c] border border-[#444F24] text-xs font-mono text-[#B6BBD9] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#AD8820] animate-pulse" />
              <span>DIGITAL AGENCY &bull; WEB &bull; MEDIA &bull; MARKETING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.08]">
              Build Your Digital Presence.{' '}
              <span className="italic font-light text-[#B6BBD9]">
                Grow Your Business.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#B6BBD9] leading-relaxed max-w-2xl font-light">
              Websites, content creation and performance marketing designed to help your business get noticed and turn attention into enquiries.
            </p>

            {/* Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B6BBD9] group border border-[#52602c]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#B6BBD9] transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-[#1e341c] border border-[#444F24] text-[#B6BBD9] hover:text-white text-sm font-medium transition-all"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Value Indicators */}
            <div className="pt-6 border-t border-[#444F24]/50 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#B6BBD9]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>Bespoke Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>Studio Photography</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>Performance Marketing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#444F24] shadow-2xl bg-[#1e341c]/50 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/Image for the Website/Hero Section main image.png"
                alt="EdgeLab Digital Solutions — Websites, Content and Performance Marketing"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Ambient Edge Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#122311]/80 via-transparent to-transparent pointer-events-none" />

              {/* Verified Direct Contact Floating Strip */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#122311]/90 backdrop-blur-md border border-[#444F24] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#90844A]">
                    DIRECT AGENCY LINE
                  </div>
                  <div className="text-xs font-mono font-bold text-white">
                    {CONTACT.phoneDisplay}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss building our digital presence.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-semibold transition-all"
                  aria-label="Direct WhatsApp Enquiry"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#AD8820]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
