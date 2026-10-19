'use client';

import React from 'react';
import { HOW_EDGE_LAB_WORKS } from '@/config/site';
import { CheckCircle2 } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#212413] border-b border-[#E3E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF1F9] border border-[#B6BBD9]/60 text-[#212413] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820]" />
            <span>03 &bull; Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#212413] tracking-tight leading-[1.12]">
            How EdgeLab Works.
          </h2>
          <p className="text-base text-gray-600 mt-4 leading-relaxed font-light">
            A clear, dependable five-step delivery model designed to eliminate confusion, respect timelines, and produce measurable commercial results.
          </p>
        </div>

        {/* 5-Step Process Horizontal / Stacked Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {HOW_EDGE_LAB_WORKS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-3xl bg-[#F8F9FD] border border-[#DFE3EE] hover:border-[#AD8820]/70 transition-all flex flex-col justify-between hover:shadow-lg group"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#16181F] text-[#AD8820] font-mono font-bold text-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                  {step.step}
                </div>

                <h3 className="text-lg font-serif font-bold text-[#212413] mb-3 leading-snug group-hover:text-[#AD8820] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3E6F0] flex items-center gap-2 text-[11px] font-mono text-[#90844A]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#AD8820] shrink-0" />
                <span className="truncate font-medium">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
