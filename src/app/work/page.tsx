'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Globe
} from 'lucide-react';
import { SELECTED_PROJECTS, getWhatsAppUrl } from '@/config/site';

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-[#212413] min-h-screen">
      {/* Background Lighting */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#F2F5ED] via-[#F9FAF8] to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5ED] text-[#444F24] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#C2D5C8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820] animate-pulse" />
            <span>CASE STUDIES &amp; PORTFOLIO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#212413] tracking-tight leading-[1.05] mb-6">
            Selected Work. <span className="italic font-light text-[#444F24]">Live Digital Platforms.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#565F45] leading-relaxed font-light">
            We build real, production-tested digital experiences. Explore our live case studies across digital hospitality and luxury e-commerce.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 mb-20">
          {SELECTED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#F9FAF8] border border-[#E4E8DE] hover:border-[#444F24] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual Image (6 cols) */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#122311] border border-[#E4E8DE] group">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#122311]/90 backdrop-blur-xs text-[10px] font-mono font-bold text-[#AD8820] uppercase tracking-wider">
                      {project.badge}
                    </div>
                  </div>

                  {/* Gallery Thumbnails */}
                  {project.gallery && project.gallery.length > 1 && (
                    <div className="grid grid-cols-5 gap-2 mt-3">
                      {project.gallery.slice(1, 6).map((img, gIdx) => (
                        <div key={gIdx} className="relative aspect-square rounded-xl overflow-hidden bg-[#122311] border border-[#E4E8DE]">
                          <Image
                            src={img}
                            alt={`${project.title} gallery thumbnail ${gIdx + 1}`}
                            fill
                            sizes="120px"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Details (6 cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-[#90844A] uppercase tracking-wider">
                    {project.category} &bull; Case 0{idx + 1}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#212413]">
                    {project.title}
                  </h2>

                  <p className="text-sm text-[#444F24] font-medium">
                    {project.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#565F45] leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Deliverables / Highlights */}
                  <div className="space-y-2 pt-3 border-t border-[#E4E8DE]">
                    <div className="text-xs font-mono text-[#212413] font-semibold uppercase tracking-wider mb-2">
                      Key Capabilities Delivered:
                    </div>
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#212413]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#444F24] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 min-h-[46px] rounded-xl bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold transition-all shadow-xs active:scale-[0.98]"
                    >
                      <span>Open Live Production Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#AD8820]" />
                    </a>

                    {project.adminDemoUrl && (
                      <a
                        href={project.adminDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 min-h-[46px] rounded-xl bg-[#F2F5ED] hover:bg-[#E4E8DE] text-[#444F24] border border-[#C2D5C8] text-xs font-semibold transition-all active:scale-[0.98]"
                      >
                        <span>Open Admin Portal Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#122311] text-white text-center space-y-4 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-serif text-white">
            Have a project in mind for your brand?
          </h3>
          <p className="text-xs sm:text-sm text-[#B6BBD9] max-w-xl mx-auto font-light leading-relaxed">
            We build websites, custom portals, and visual content tailored to your exact industry. Let&apos;s talk about what your business needs.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I looked at your live work and would like to discuss building something similar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold transition-all shadow-md border border-[#52602c] active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#AD8820]" />
              <span>Discuss Your Project on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B6BBD9]" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
