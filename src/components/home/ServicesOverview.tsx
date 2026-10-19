'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { CORE_CAPABILITIES } from '@/config/site';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFBFE] text-[#212413] border-b border-[#E3E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF1F9] border border-[#B6BBD9]/60 text-[#212413] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820]" />
              <span>01 &bull; Core Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#212413] tracking-tight leading-[1.12]">
              Everything Your Brand Needs to Win Online.
            </h2>
            <p className="text-base text-gray-600 mt-4 leading-relaxed font-light">
              We connect custom web engineering, studio-grade creative production, and performance marketing into a singular, high-converting digital presence.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#444F24] hover:bg-[#53612c] text-white text-xs font-semibold tracking-wide transition-all self-start md:self-end shrink-0 shadow-sm"
          >
            <span>View All Services in Detail</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B6BBD9]" />
          </Link>
        </div>

        {/* 10 Services Grid (Modern Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_CAPABILITIES.map((service, idx) => (
            <div
              key={service.id}
              className="group rounded-3xl bg-white border border-[#DFE2EC] hover:border-[#AD8820]/70 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-xl shadow-xs"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#EEF1F9]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#16181F]/85 backdrop-blur-xs text-[10px] font-mono font-bold text-[#B6BBD9] tracking-wider uppercase border border-white/10">
                    {service.tag}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#90844A] mb-1">
                  <span className="font-bold text-[#AD8820]">0{idx + 1}</span>
                  <span>&bull;</span>
                  <span>SERVICE SCOPE</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#212413] mb-2 group-hover:text-[#AD8820] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {service.summary}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 pt-3 border-t border-[#EEF1F9] mb-6">
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#212413]">
                      <Check className="w-3.5 h-3.5 text-[#AD8820] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href="/services"
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-[#F7F8FC] hover:bg-[#EEF1F9] text-[#212413] border border-[#DFE2EC] hover:border-[#B6BBD9] text-xs font-semibold transition-all"
                >
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#AD8820]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Transparency Note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#EEF1F9] border border-[#B6BBD9]/50 text-xs text-gray-700 text-center max-w-2xl mx-auto">
          <span className="font-semibold text-[#212413]">Transparent Service Scope:</span> Services are tailored to your specific project agreement and package. Not every service is included in every package tier.
        </div>

      </div>
    </section>
  );
};
