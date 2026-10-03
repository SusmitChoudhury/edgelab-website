'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Sun, Aperture, Layers, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const PhotographySection: React.FC = () => {
  const pipeline = [
    {
      step: '01',
      title: 'REAL WORLD',
      desc: 'The physical kitchen, boutique interior, handmade garment, or crafted cocktail as it exists in your physical business.',
      icon: Sun,
    },
    {
      step: '02',
      title: 'CAMERA & STUDIO',
      desc: 'Dedicated commercial cinema rigs, macro lenses, diffused softbox lighting, and calibrated white balance.',
      icon: Aperture,
    },
    {
      step: '03',
      title: 'PHOTOGRAPH',
      desc: 'High-resolution RAW capture, hand color-graded to match your brand palette with natural, appetizing tones.',
      icon: Camera,
    },
    {
      step: '04',
      title: 'SOCIAL & WEB ASSET',
      desc: 'Formatted and deployed into your digital menu, website heroes, promotional banners, and Instagram feed.',
      icon: Layers,
    },
  ];

  const studioImages = [
    { src: '/assets/projects/restaurant/pizza.png', title: 'Culinary Photography', note: 'Woodfired Neapolitan Pizza' },
    { src: '/assets/projects/noire/look-emerald.jpg', title: 'Editorial Apparel Shoot', note: 'Contemporary Handloom Silk' },
    { src: '/assets/projects/restaurant/bar.png', title: 'Interior & Ambiance Shoot', note: 'Bespoke Cocktail Bar Environment' },
    { src: '/assets/projects/noire/craft-hands.jpg', title: 'Macro Artisan Detail', note: 'Zari Weaving Craftsmanship' },
  ];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            06 / Commercial Photography Studio
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.12] mb-6">
            Make people stop scrolling.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            Professional visual content for businesses that want to look as good online as they do in real life.
          </p>
        </div>

        {/* 4-Step Visual Transition Pipeline */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-[#688174] mb-4 font-semibold">
            Visual Transformation Pipeline:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipeline.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F6FAF7] border border-[#DEEDE3] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#18553D]">{p.step}</span>
                      <Icon className="w-4 h-4 text-[#18553D]" />
                    </div>
                    <div className="text-sm font-bold text-[#14261E] mb-1">{p.title}</div>
                    <div className="text-xs text-[#597063] leading-relaxed">{p.desc}</div>
                  </div>
                  {idx < pipeline.length - 1 && (
                    <div className="hidden lg:block text-right pt-3 text-[#A8C7B7] font-mono text-xs">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Studio Showcase Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F9FBFA] rounded-3xl p-6 sm:p-10 border border-[#DFEBE3]">
          {/* Main Visual Frame (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-[#D5E5DC] shadow-md group">
              <Image
                src={studioImages[activeImage].src}
                alt={studioImages[activeImage].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <div className="text-xs font-mono text-[#A7E8C7] uppercase">{studioImages[activeImage].title}</div>
                  <div className="text-base sm:text-lg font-serif text-white font-medium">
                    {studioImages[activeImage].note}
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {studioImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all ${
                    activeImage === idx
                      ? 'border-[#18553D] ring-2 ring-[#18553D]/30 shadow-sm'
                      : 'border-[#DFEDE4] opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img.src} alt={img.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Editorial Story (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#18553D] font-semibold uppercase">
              <Sliders className="w-4 h-4" />
              <span>Studio Craftsmanship</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#0F1713] leading-snug">
              Stock photos tell customers you don&apos;t care. Real photography builds desire.
            </h3>

            <p className="text-sm text-[#465A50] leading-relaxed">
              We bring professional cinema cameras and dedicated food and interior lighting directly to your establishment. We capture your actual food, your real dining room, your actual team, and your authentic products.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-[#2A3E33]">
                <CheckCircle2 className="w-4 h-4 text-[#18553D] shrink-0 mt-0.5" />
                <span>On-site culinary, product, and architectural interior sessions</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#2A3E33]">
                <CheckCircle2 className="w-4 h-4 text-[#18553D] shrink-0 mt-0.5" />
                <span>Retouched, high-res web & print deliverables with perpetual license</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#2A3E33]">
                <CheckCircle2 className="w-4 h-4 text-[#18553D] shrink-0 mt-0.5" />
                <span>Synchronized with your web developers so photos fit your UI perfectly</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F382A] hover:bg-[#164D3A] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
              >
                <span>BOOK A SHOOT</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl("Hi EdgeLab, I want to discuss a photography session for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-white hover:bg-[#F2F7F4] text-[#164D3A] text-xs sm:text-sm font-semibold border border-[#CFE1D6] transition-all"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
