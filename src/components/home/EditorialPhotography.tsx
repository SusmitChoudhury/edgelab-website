'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowRight, Aperture, Sliders, CheckCircle2, ZoomIn, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const EditorialPhotography: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'technology' | 'studio' | 'fashion'>('all');

  const photos = [
    {
      src: '/assets/showcase/tech-workstation.jpg',
      title: 'Digital Engineering Workstation',
      category: 'technology',
      caption: 'Focused engineering setup with natural directional window illumination and crisp contrast.',
      meta: '35mm • f/1.8 • ISO 100',
    },
    {
      src: '/assets/showcase/architectural-studio.jpg',
      title: 'Minimalist Scandinavian Studio',
      category: 'studio',
      caption: 'Spatial architecture, balanced natural timber, and clean negative space.',
      meta: '24mm • f/4.0 • ISO 100',
    },
    {
      src: '/assets/showcase/cinema-production.jpg',
      title: 'Commercial Cinema Camera Rig',
      category: 'technology',
      caption: 'On-location cinematography setup capturing genuine craft and tactile detail.',
      meta: '50mm • f/2.0 • ISO 200',
    },
    {
      src: '/assets/showcase/editorial-fashion.jpg',
      title: 'High-Fashion Editorial Lookbook',
      category: 'fashion',
      caption: 'Textile drape and couture silhouette captured in crisp natural daylight.',
      meta: '85mm • f/2.8 • ISO 100',
    },
    {
      src: '/assets/showcase/brand-identity.jpg',
      title: 'Brand Identity & Material Craft',
      category: 'studio',
      caption: 'Tactile macro focus on bespoke editorial paper stocks and brand typography.',
      meta: '50mm Macro • f/3.2 • ISO 100',
    },
    {
      src: '/assets/showcase/analytics-growth.jpg',
      title: 'Digital Analytics Command Interface',
      category: 'technology',
      caption: 'Live operational metrics and business growth dashboards on modern displays.',
      meta: '35mm • f/2.0 • ISO 400',
    },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter((p) => p.category === filter);

  return (
    <section id="photography" className="py-24 md:py-36 bg-white text-[#0B281B] border-t border-[#E2ECE6] relative overflow-hidden">
      {/* Soft Mint Radial Light */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[#E8F5EE] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EE] border border-[#A7F3D0] text-[#059669] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>07 // Commercial Studio Photography</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#0B281B] tracking-tight leading-[1.08]">
              Photography that belongs to one brand world.
            </h2>
            <p className="text-base sm:text-lg text-[#5C7468] mt-4 max-w-2xl">
              We shoot high-resolution commercial imagery on location. No stock libraries. No mismatched aesthetics. Pure visual cohesion.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F0F7F3] p-1.5 rounded-full border border-[#D4EEDB] self-start md:self-auto">
            {(['all', 'technology', 'studio', 'fashion'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  filter === cat
                    ? 'bg-[#059669] text-white shadow-xs'
                    : 'text-[#5C7468] hover:text-[#0B281B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetrical Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-12">
          {/* Main Large Hero Frame (7 cols) */}
          <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden border border-[#D4EEDB] shadow-[0_20px_50px_rgba(11,40,27,0.08)] group min-h-[460px] bg-[#F8FAF9]">
            <Image
              src={filteredPhotos[0].src}
              alt={filteredPhotos[0].title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B281B]/90 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#A7F3D0] font-bold">
                <Camera className="w-4 h-4" />
                <span>{filteredPhotos[0].meta}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {filteredPhotos[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E2EEE7] mt-1 max-w-xl leading-relaxed">
                {filteredPhotos[0].caption}
              </p>
            </div>
          </div>

          {/* Surrounding Editorial Gallery Frames (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {filteredPhotos.slice(1, 5).map((photo, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden border border-[#D4EEDB] bg-[#F8FAF9] group shadow-xs"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B281B]/85 via-transparent to-transparent flex flex-col justify-end p-3.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-[#A7F3D0] font-semibold">{photo.meta}</span>
                  <span className="text-xs font-serif font-bold text-white truncate">{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Bottom Note & Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-[#E8F5EE] border border-[#A7F3D0] shadow-xs">
          <div className="text-xs sm:text-sm text-[#233E32] text-center sm:text-left leading-relaxed">
            <span className="font-bold text-[#0B281B]">Dedicated Production Gear:</span> 4K Cinema cameras, continuous soft lighting, macro prime lenses, and on-location art direction.
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold transition-all shadow-[0_10px_25px_rgba(5,150,105,0.25)] shrink-0"
          >
            <span>BOOK A SHOOT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
