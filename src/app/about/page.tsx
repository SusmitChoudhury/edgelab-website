'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Cpu, 
  Palette, 
  FileText, 
  Globe, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Film,
  Zap,
  Building2
} from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '@/config/site';

export default function AboutPage() {
  const disciplines = [
    { 
      title: 'Web Engineering', 
      icon: Globe, 
      detail: 'Hand-crafted Next.js & React architectures with sub-second page loads and zero template bloat.',
      tag: '0.34s Global Edge'
    },
    { 
      title: 'Design & Art Direction', 
      icon: Palette, 
      detail: 'Haute typography, generous negative space, and tactile editorial layouts inspired by global publications.',
      tag: 'Bespoke Design Tokens'
    },
    { 
      title: 'Commercial Film & Media', 
      icon: Film, 
      detail: 'On-location cinematography with 4K cinema optics, continuous soft lighting, and Foley sound design.',
      tag: 'Zero Generic Stock'
    },
    { 
      title: 'Operational Software', 
      icon: Cpu, 
      detail: 'Live client portals, WebSocket order dispatch, and executive administrative dashboards.',
      tag: 'Real-Time Telemetry'
    },
    { 
      title: 'Market Dominance', 
      icon: Compass, 
      detail: 'Local 3-Pack Google Search authority, review generation systems, and automated lead capture.',
      tag: 'Rank #1 Local Pack'
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white text-[#0C120E] min-h-screen">
      {/* Radiant Olive Ambient Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#E8F0EA] via-[#F0F4F1]/40 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono font-bold uppercase tracking-wider text-[#1A281E] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
            <span>THE EDGELAB PHILOSOPHY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#0C120E] tracking-tight leading-[1.05] mb-6">
            Why EdgeLab <span className="italic font-light text-[#263A2D]">exists.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            The traditional digital services industry is broken. Businesses are forced to coordinate between web developers who don’t understand visual craft, social media managers who post generic Canva templates, and video creators who don’t understand conversion. EdgeLab was created to replace the chaos with a single, disciplined standard.
          </p>
        </div>

        {/* 2-Column Core Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C120E]">
              We believe great businesses deserve a digital presence that feels like their physical quality.
            </h2>
            <p className="text-sm sm:text-base text-[#1F2C24] leading-relaxed">
              When a customer visits your boutique, restaurant, clinic, or design practice, they feel the craftsmanship, the ambiance, and the care you put into every detail. But when they visit your website or social media, they are met with slow templates, low-res photos, and broken links.
            </p>
            <p className="text-sm sm:text-base text-[#52665A] leading-relaxed">
              EdgeLab bridges this divide. We treat your digital footprint as an architectural extension of your business. Every pixel, every line of code, and every video frame is engineered with mathematical balance and artistic poise.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#D8E4DC] shadow-[0_20px_50px_rgba(18,28,21,0.08)] bg-[#F9FAF8]">
            <Image
              src="/assets/showcase/tech-workstation.jpg"
              alt="EdgeLab Engineering & Creative Studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C120E]/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="text-[10px] font-mono text-[#A7F3D0] uppercase font-bold tracking-wider">
                EdgeLab Studio Standard
              </span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                Mathematical precision in code. High-fashion elegance in motion.
              </span>
            </div>
          </div>
        </div>

        {/* 5 Core Disciplines Grid */}
        <div className="space-y-6 mb-24">
          <div className="text-xs font-mono uppercase tracking-widest text-[#1A281E] font-bold">
            Our Five Integrated Disciplines:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#F9FAF8] border border-[#D8E4DC] hover:border-[#1A281E] transition-all hover:-translate-y-1 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F0EA] border border-[#C2D5C8] text-[#1A281E] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-[#1A281E] font-bold bg-white px-2.5 py-0.5 rounded-full border border-[#D8E4DC]">
                        {d.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#0C120E]">{d.title}</h3>
                    <p className="text-xs text-[#52665A] leading-relaxed">{d.detail}</p>
                  </div>

                  <div className="pt-3 border-t border-[#D8E4DC] flex items-center gap-1.5 text-[10px] font-mono text-[#1A281E] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>In-House Execution</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#E8F0EA] via-[#F0F4F1] to-[#E8F0EA] border border-[#D8E4DC] text-center space-y-5">
          <h3 className="text-2xl sm:text-4xl font-serif text-[#0C120E]">
            Experience the single-partner standard.
          </h3>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#52665A]">
            Let’s review your current digital footprint and discuss how EdgeLab can elevate your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)]"
            >
              <span>CONNECT WITH EDGELAB →</span>
            </Link>
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I read your About page and want to talk to a director.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9FAF8] text-[#0C120E] border border-[#D8E4DC] text-xs font-mono font-semibold transition-all"
            >
              <span>Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
