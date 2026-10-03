'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Film, Play, Sparkles, CheckCircle2, ArrowRight, Volume2, Heart, MessageCircle, Share2 } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const ContentReels: React.FC = () => {
  const reels = [
    {
      title: 'Runway Drape & Silk Texture',
      type: 'Luxury Fashion Atelier',
      duration: '0:32',
      video: '/assets/projects/noire/fashion.webm',
      fallbackImage: '/assets/showcase/editorial-fashion.jpg',
      caption: 'Banarasi handloom drape in natural directional studio daylight. Real textile weight and fluid movement.',
      likes: '4.8k',
      comments: '246',
    },
    {
      title: 'Sub-Second Code & Interface Design',
      type: 'Engineering & Architecture',
      duration: '0:22',
      video: '/assets/projects/noire/fashion.webm',
      fallbackImage: '/assets/showcase/web-ui-code.jpg',
      caption: 'Live responsive viewports and instantaneous edge rendering. Mathematical precision in typography.',
      likes: '3.9k',
      comments: '182',
    },
    {
      title: 'On-Location Cinema Camera Rig',
      type: 'Commercial Media Direction',
      duration: '0:28',
      video: '/assets/projects/noire/fashion.webm',
      fallbackImage: '/assets/showcase/cinema-production.jpg',
      caption: '4K cinema rigs capturing genuine craft and tactile detail on location with custom sound design.',
      likes: '5.1k',
      comments: '319',
    },
  ];

  const [activeReelIdx, setActiveReelIdx] = useState(0);
  const activeReel = reels[activeReelIdx];

  return (
    <section id="reels" className="py-24 md:py-36 bg-[#F8FAF9] text-[#0B281B] border-t border-[#E2ECE6] relative overflow-hidden">
      {/* Soft Mint Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#D4EEDB]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EE] border border-[#A7F3D0] text-[10px] font-mono tracking-widest text-[#059669] uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>06 // Short-Form Video & Reels</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#0B281B] tracking-tight leading-[1.08] mb-6">
            Attention starts before the first click.
          </h2>
          <p className="text-base sm:text-lg text-[#5C7468] leading-relaxed">
            We produce the 9:16 vertical video content that makes your brand feel magnetic, authentic, and impossible to ignore. Filmed on location with cinema optics.
          </p>
        </div>

        {/* Vertical Reel + Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 9:16 Vertical Smartphone Chassis with Live Video (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[310px] aspect-[9/16] rounded-[2.8rem] p-3 bg-white border-4 border-[#D4EEDB] shadow-[0_25px_60px_rgba(11,40,27,0.12)] overflow-hidden group">
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-black">
                {/* Playing Motion Video */}
                <video
                  key={activeReel.video}
                  src={activeReel.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Vertical Reel UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 flex flex-col justify-between p-4 pointer-events-none">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-[10px] bg-black/60 px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-xs">
                      {activeReel.duration}
                    </span>
                    <span className="font-mono text-[10px] text-[#A7F3D0] font-bold bg-[#0B281B]/80 px-2.5 py-0.5 rounded-full border border-[#10B981]/40">
                      4K CINEMA
                    </span>
                  </div>

                  {/* Right Social Actions Floating Column */}
                  <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 text-white">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-[#A7F3D0] fill-[#A7F3D0]" />
                      </div>
                      <span className="text-[10px] font-mono">{activeReel.likes}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[10px] font-mono">{activeReel.comments}</span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <Share2 className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom Caption & Audio Pill */}
                  <div className="space-y-2 pr-12">
                    <div className="text-[10px] font-mono uppercase text-[#A7F3D0] font-bold tracking-wider">
                      {activeReel.type}
                    </div>
                    <div className="text-sm font-serif font-bold text-white leading-tight">
                      {activeReel.title}
                    </div>
                    <p className="text-[11px] text-white/90 line-clamp-2 leading-tight">
                      {activeReel.caption}
                    </p>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#D4EEDB] pt-1">
                      <Volume2 className="w-3 h-3 text-[#A7F3D0]" />
                      <span>EdgeLab Sound • Foley Audio Master</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reel Selectors & Craft Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold mb-2">
                Select Active Production Reel:
              </div>

              {reels.map((reel, idx) => {
                const isSelected = activeReelIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveReelIdx(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#E8F5EE] border-[#10B981] shadow-xs ring-1 ring-[#10B981]'
                        : 'bg-white border-[#E2ECE6] hover:bg-[#F0F7F3]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono text-[#059669] font-medium">{reel.type}</div>
                      <div className="text-base sm:text-lg font-serif font-bold text-[#0B281B] mt-0.5">
                        {reel.title}
                      </div>
                      <div className="text-xs text-[#5C7468] mt-1">{reel.caption}</div>
                    </div>
                    <span className="text-xs font-mono text-[#059669] font-bold bg-white px-3 py-1 rounded-full border border-[#A7F3D0] shrink-0 ml-3 shadow-2xs">
                      {reel.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E2ECE6] space-y-3">
              <div className="flex items-start gap-3 text-xs text-[#334E40]">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Paced vertical editing with sound design matching real brand atmosphere</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#334E40]">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Zero generic stock footage; filmed with cinema cameras directly on location</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold transition-all shadow-[0_10px_25px_rgba(5,150,105,0.25)]"
              >
                <span>CREATE MY CONTENT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl("Hi EdgeLab, I want to talk about short-form video & reels production.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-5 py-3.5 text-xs text-[#0B281B] hover:text-[#059669] font-medium transition-colors"
              >
                Inquire about filming dates on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
