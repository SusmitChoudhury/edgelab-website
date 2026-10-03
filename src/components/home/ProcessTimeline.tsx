'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      summary: 'Understand the business, audience and objective.',
      detail: 'We audit your physical operation, competitive landscape, and customer journey touchpoints.',
    },
    {
      num: '02',
      title: 'DESIGN',
      summary: 'Shape the experience, identity and digital direction.',
      detail: 'We craft bespoke interface layouts, shoot on-brand photography, and curate tailored editorial content.',
    },
    {
      num: '03',
      title: 'BUILD',
      summary: 'Develop the website, systems and content.',
      detail: 'We write clean, high-performance Next.js code and engineer live contactless ordering & management portals.',
    },
    {
      num: '04',
      title: 'LAUNCH',
      summary: 'Deploy, refine and support the digital presence.',
      detail: 'We deploy to high-speed cloud edge infrastructure and provide active ongoing care and monthly growth.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 bg-[#F8FAF9] text-[#0B281B] border-t border-[#E2ECE6] relative overflow-hidden">
      {/* Soft Mint Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-[#D4EEDB]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5EE] border border-[#A7F3D0] text-xs font-mono font-bold tracking-widest text-[#059669] uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>07 // How We Work</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#0B281B] tracking-tight leading-[1.08] mb-6">
            Four disciplined milestones.
          </h2>
          <p className="text-base sm:text-lg text-[#5C7468] leading-relaxed">
            From initial audit to live deployment, every stage has a defined deliverable and zero guesswork.
          </p>
        </div>

        {/* 4-Step Connected Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Glowing connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-[#D4EEDB] via-[#10B981]/50 to-[#D4EEDB] -z-0" />

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2ECE6] relative z-10 flex flex-col justify-between hover:border-[#10B981] transition-all hover:-translate-y-1 group shadow-[0_10px_30px_rgba(11,40,27,0.04)] hover:shadow-[0_15px_35px_rgba(11,40,27,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F5EE] border border-[#A7F3D0] text-[#059669] font-mono text-base font-bold flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {step.num}
                  </div>
                  <span className="text-[10px] font-mono text-[#5C7468] uppercase font-semibold">Phase 0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B281B] mb-2 group-hover:text-[#059669] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0B281B] font-medium mb-3 leading-snug">
                  {step.summary}
                </p>

                <p className="text-xs text-[#5C7468] leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E2ECE6] text-[10px] font-mono text-[#059669] flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Deliverable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
