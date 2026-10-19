'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SELECTED_PROJECTS } from '@/config/site';

export const SelectedWorkSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F9FAF8] text-[#212413] border-b border-[#E4E8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4E8DE] text-[#444F24] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              02 &bull; Selected Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#212413] tracking-tight leading-[1.12]">
              Real Products. Live Productions.
            </h2>
            <p className="text-base text-[#565F45] mt-4 leading-relaxed font-light">
              We design and build bespoke web platforms, operational portals, and digital storefronts engineered for real business use.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122311] hover:bg-[#444F24] text-white text-xs font-semibold tracking-wide transition-all self-start md:self-end shrink-0"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#AD8820]" />
          </Link>
        </div>

        {/* 2 Featured Live Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {SELECTED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-[#E4E8DE] hover:border-[#444F24] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Project Media Visual */}
                <div className="relative aspect-[16/10] bg-[#122311] overflow-hidden group">
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

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="text-xs font-mono text-[#90844A] uppercase tracking-wider mb-2">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#212413] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#565F45] leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-[#E4E8DE] mb-6">
                    {project.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#212413]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#444F24] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>View Live Experience</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#AD8820]" />
                </a>

                {project.adminDemoUrl && (
                  <a
                    href={project.adminDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-[#F2F5ED] hover:bg-[#E4E8DE] text-[#444F24] border border-[#C2D5C8] text-xs font-semibold transition-all"
                  >
                    <span>View Admin Portal Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
