'use client';

import React from 'react';
import { Cpu, Palette, FileText, Compass, CheckCircle2 } from 'lucide-react';
import { BRAND } from '@/config/site';

export const AboutSection: React.FC = () => {
  const pillars = [
    { title: 'Technology', icon: Cpu, desc: 'Bespoke hand-crafted code, custom portals, high-speed cloud infrastructure, and zero bloat.' },
    { title: 'Design', icon: Palette, desc: 'Editorial typography, responsive layouts, and curated aesthetics tailored to your business identity.' },
    { title: 'Content', icon: FileText, desc: 'Real commercial studio photography, paced vertical video, and persuasive brand copywriting.' },
    { title: 'Digital Strategy', icon: Compass, desc: 'Local Google search discoverability, customer journey maps, and consistent brand direction.' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            12 / About EdgeLab
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0F1713] tracking-tight leading-[1.15] mb-6">
            A digital solutions company for modern businesses.
          </h2>
          <p className="text-lg sm:text-xl text-[#364D41] leading-relaxed font-sans max-w-2xl mx-auto">
            EdgeLab is a digital solutions company focused on helping businesses establish and manage a stronger online presence.
          </p>
        </div>

        {/* 4 Pillars of EdgeLab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EBF4EE] text-[#18553D] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif text-[#121A16] font-bold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52685D] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E8F0EA] text-[10px] font-mono text-[#7D9487]">
                  Element 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Philosophy Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F382A] text-white max-w-3xl mx-auto text-center relative overflow-hidden">
          <div className="text-xs font-mono uppercase tracking-widest text-[#A7E8C7] mb-3 font-semibold">
            Our Core Philosophy
          </div>
          <p className="text-xl sm:text-2xl font-serif text-white leading-relaxed mb-4">
            &ldquo;Craftsmanship over fake claims. Real working code, real cameras, and real accountability.&rdquo;
          </p>
          <div className="text-xs text-[#8BB7A2] font-mono">
            EdgeLab • Digital Solutions & Creative Studio
          </div>
        </div>
      </div>
    </section>
  );
};
