'use client';

import React from 'react';
import { Cpu, Palette, FileText, Globe, Compass, Sparkles } from 'lucide-react';
import { BRAND } from '@/config/site';

export const AboutWhyWeExist: React.FC = () => {
  const disciplines = [
    { title: 'Web', icon: Globe, detail: 'Hand-crafted sub-second code' },
    { title: 'Design', icon: Palette, detail: 'Tactile editorial layouts' },
    { title: 'Content', icon: FileText, detail: 'Commercial photo & 4K video' },
    { title: 'Technology', icon: Cpu, detail: 'Live ordering & admin tools' },
    { title: 'Strategy', icon: Compass, detail: 'Local search discoverability' },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-white text-[#0B281B] border-t border-[#E2ECE6] relative overflow-hidden">
      {/* Soft Mint Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E8F5EE] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5EE] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>08 // Why EdgeLab Exists</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#0B281B] tracking-tight leading-[1.08] mb-6">
            Good businesses deserve better digital experiences.
          </h2>
          <p className="text-lg sm:text-xl text-[#5C7468] leading-relaxed font-sans">
            EdgeLab exists to help businesses move from simply having an online presence to having a digital presence that actually feels like their business.
          </p>
        </div>

        {/* 5 Core Disciplines */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 mb-16">
          {disciplines.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6] hover:border-[#10B981] hover:bg-[#E8F5EE]/40 transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5EE] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-serif font-bold text-[#0B281B] group-hover:text-[#059669] transition-colors">{d.title}</div>
                  <div className="text-xs text-[#5C7468] mt-1 leading-snug">{d.detail}</div>
                </div>
                <div className="pt-3 mt-4 border-t border-[#E2ECE6] text-[10px] font-mono text-[#059669] font-bold">
                  Discipline 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Grounded Studio Statement */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#E8F5EE] via-[#F0F7F3] to-[#E8F5EE] border border-[#A7F3D0] text-[#0B281B] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#059669] mb-2 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
              <span>The Standard</span>
            </div>
            <div className="text-xl sm:text-2xl font-serif font-medium text-[#0B281B] max-w-xl leading-snug">
              No fabricated metrics. No template shortcuts. Just real digital systems engineered for long-term growth.
            </div>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono text-[#0B281B] bg-white px-5 py-2.5 rounded-full border border-[#A7F3D0] shadow-xs font-medium">
              EdgeLab • Digital Solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
