'use client';

import React from 'react';
import Image from 'next/image';
import { WORKSPACE_IMAGES } from '@/config/site';
import { Terminal, Camera, Users } from 'lucide-react';

export const WorkspaceSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFBFE] text-[#212413] border-b border-[#E3E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF1F9] border border-[#B6BBD9]/60 text-[#212413] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820]" />
            <span>05 &bull; The EdgeLab Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#212413] tracking-tight leading-[1.12]">
            Our Workspace &amp; How We Actually Work.
          </h2>
          <p className="text-base text-gray-600 mt-4 leading-relaxed font-light">
            Behind every EdgeLab launch is a collaborative environment where bespoke web engineering, cinema camera rigs, typography design, and performance strategy come together. Here is an inside look at our lab.
          </p>
        </div>

        {/* 4 Workspace & Team Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORKSPACE_IMAGES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#DFE3EE] hover:border-[#AD8820]/70 overflow-hidden transition-all duration-300 group shadow-xs hover:shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] bg-[#16181F] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#16181F]/90 backdrop-blur-xs text-[10px] font-mono font-bold text-[#AD8820] uppercase tracking-wider border border-white/10">
                  0{idx + 1} &bull; STUDIO PERSPECTIVE
                </div>
              </div>

              {/* Caption & Context */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-serif font-bold text-[#212413] mb-2 group-hover:text-[#AD8820] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E3E6F0]">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF1F9] text-[#AD8820] border border-[#B6BBD9]/40 flex items-center justify-center shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#212413] mb-1">Clean Engineering</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Handwritten TypeScript, Next.js App Router, and lightweight CSS. Zero template bloat or slow builder lock-in.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF1F9] text-[#AD8820] border border-[#B6BBD9]/40 flex items-center justify-center shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#212413] mb-1">On-Site Visual Direction</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We bring cinema cameras and studio optics directly to client locations to capture authentic craft.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF1F9] text-[#AD8820] border border-[#B6BBD9]/40 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#212413] mb-1">Direct Partner Access</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                You work directly with the developers and media directors building your presence, not junior account reps.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
