'use client';

import React from 'react';
import Image from 'next/image';
import { Video, Film, Smartphone, Users, Play, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const ReelsVideoSection: React.FC = () => {
  const transitionSteps = [
    { name: 'CAMERA', icon: Video, note: '4K cinema rigs & mobile stabilization' },
    { name: 'VIDEO', icon: Film, note: 'High frame-rate capture & Foley audio' },
    { name: 'REEL', icon: Smartphone, note: 'Fast-paced vertical edit & subtitle hooks' },
    { name: 'AUDIENCE', icon: Users, note: 'Engaged patrons discovering your venue' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0C2D20] text-white relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#175C41]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#144734] border border-[#21674E] text-[#A7E8C7] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            07 / Vertical Video & Reels
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12] mb-6">
            Turn your story into something people watch.
          </h2>
          <p className="text-base sm:text-lg text-[#B1D5C4] leading-relaxed">
            Static posts get skipped. Dynamic vertical video hooks human curiosity. We film, grade, sound-design, and edit short-form reels that highlight the energy of your business.
          </p>
        </div>

        {/* Transition Sequence Bar */}
        <div className="mb-16 p-6 rounded-2xl bg-[#092419] border border-[#174F3B]">
          <div className="text-xs font-mono uppercase tracking-wider text-[#73A890] mb-4 font-semibold">
            Video Production Workflow:
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {transitionSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#144734] border border-[#236F52] flex items-center justify-center text-[#4ADE80] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono font-bold tracking-wider text-white flex items-center gap-2">
                      <span>{step.name}</span>
                      {idx < transitionSteps.length - 1 && (
                        <span className="text-[#3F7C61] hidden md:inline">→</span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#86BAA1] truncate mt-0.5">{step.note}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2-Column Composition: Vertical Reel Simulator & Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Vertical Reel Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] p-3 bg-black border-4 border-[#22674E] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Inner video frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#0A1A12]">
                <Image
                  src="/assets/projects/restaurant/cocktail.png"
                  alt="Reel production preview"
                  fill
                  className="object-cover"
                />

                {/* Video controls & UI mockup */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between text-xs text-white/90">
                    <span className="font-mono text-[11px] bg-black/50 px-2 py-0.5 rounded-full border border-white/20">
                      0:28
                    </span>
                    <span className="font-mono text-[11px] text-[#4ADE80]">EdgeLab Reels</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#18553D] flex items-center justify-center text-xs font-bold text-[#A7E8C7]">
                        EL
                      </div>
                      <div className="text-xs text-white font-semibold">Your Business Reel</div>
                    </div>

                    <p className="text-xs text-white/90 leading-tight">
                      Crafting signature cocktails with hand-foraged botanical infusions. 🍸✨ #foodie #cocktails
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-[#A7E8C7] font-mono">
                      <span>♫ Original Audio • EdgeLab Studio Sound</span>
                    </div>
                  </div>
                </div>

                {/* Floating Play Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white pointer-events-none">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative & Feature Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-white leading-snug">
              Engineered for the first 3 seconds of modern attention.
            </h3>

            <p className="text-sm sm:text-base text-[#B1D5C4] leading-relaxed">
              Anyone can hold a phone and film a shaky video. EdgeLab approaches short-form video with cinema-level framing, crisp audio recording, calculated pacing, and text overlays designed to keep viewers engaged until the final call to action.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Visual Hook Architecture</div>
                  <div className="text-xs text-[#8BB7A2] mt-0.5">
                    Framed specifically to prevent the thumb from swiping away in the first two seconds.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Sound-Designed Pacing</div>
                  <div className="text-xs text-[#8BB7A2] mt-0.5">
                    Crisp knife chops, sizzling grills, fabric rustle, and synchronized beats that heighten sensory desire.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Delivered Ready-to-Publish</div>
                  <div className="text-xs text-[#8BB7A2] mt-0.5">
                    Exported in 9:16 vertical 4K with baked captions and accompanying caption copy ready for Instagram and YouTube Shorts.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4ADE80] hover:bg-[#22C55E] text-[#071F16] text-xs sm:text-sm font-bold shadow-lg transition-all"
              >
                <span>CREATE MY CONTENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss short-form video and reels production.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full bg-[#144734] hover:bg-[#1A5741] text-xs font-semibold text-[#D1F2E2] border border-[#21674E] transition-colors"
              >
                <span>Talk on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
