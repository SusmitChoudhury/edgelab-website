'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SELECTED_PROJECTS } from '@/config/site';

export const SelectedWorkSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F2F4FA] text-[#212413] border-b border-[#DDE2EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B6BBD9]/60 text-[#212413] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820]" />
              <span>02 &bull; Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#212413] tracking-tight leading-[1.12]">
              Real Products. Live Productions.
            </h2>
            <p className="text-base text-gray-600 mt-4 leading-relaxed font-light">
              We design and build bespoke web platforms, operational portals, and digital storefronts engineered for real business use.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#444F24] hover:bg-[#53612c] text-white text-xs font-semibold tracking-wide transition-all self-start md:self-end shrink-0 shadow-sm"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B6BBD9]" />
          </Link>
        </div>

        {/* 2 Featured Live Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {SELECTED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-[#DCE1EE] hover:border-[#AD8820]/70 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Project Media Visual */}
                <div className="relative aspect-[16/10] bg-[#16181F] overflow-hidden group">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#16181F]/90 backdrop-blur-xs text-[10px] font-mono font-bold text-[#AD8820] uppercase tracking-wider border border-white/10">
                    {project.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="text-xs font-mono text-[#90844A] uppercase tracking-wider mb-2 font-semibold">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#212413] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-[#EEF1F8] mb-6">
                    {project.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#212413]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#AD8820] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons — Responsive Touch Stacking */}
              <div className="p-5 sm:p-8 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#444F24] hover:bg-[#53612c] text-white text-xs font-bold transition-all shadow-xs active:scale-[0.98]"
                >
                  <span>View Live Experience</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#AD8820]" />
                </a>

                {project.adminDemoUrl && (
                  <a
                    href={project.adminDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#F5F7FC] hover:bg-[#EEF1F8] text-[#212413] border border-[#DCE1EE] hover:border-[#B6BBD9] text-xs font-semibold transition-all active:scale-[0.98]"
                  >
                    <span>View Admin Portal Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#90844A]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
