'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageSquare, CheckCircle2, Zap, Calculator } from 'lucide-react';
import { getWhatsAppUrl, CONTACT } from '@/config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-[#0D0F14] text-white overflow-hidden">
      {/* ── Multi-Color Ambient Lighting (Mist + Harvest + Cloudflare Orange + Forest) ── */}
      <div 
        className="absolute top-12 left-10 w-[500px] h-[400px] bg-[#B6BBD9]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[550px] h-[450px] bg-[#AD8820]/12 rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-1/3 w-[600px] h-[350px] bg-[#F6821F]/10 rounded-full blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#444F24]/15 rounded-full blur-[180px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ── Left Column: Headline, Copy, Cloudflare Campaign & CTAs (6 cols) ── */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Top Brand Pill using Mist & Harvest */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1D24] border border-[#B6BBD9]/30 text-xs font-mono text-[#B6BBD9] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#AD8820] animate-pulse" />
              <span>DIGITAL AGENCY &bull; WEB &bull; MEDIA &bull; MARKETING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white tracking-tight leading-[1.08]">
              Build Your Digital Presence.{' '}
              <span className="italic font-light text-[#B6BBD9]">
                Grow Your Business.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#B6BBD9]/90 leading-relaxed font-light">
              Websites, content creation and performance marketing designed to help your business get noticed and turn attention into real customer enquiries.
            </p>

            {/* ── Official Cloudflare Offer Campaign Banner (Special Hero Feature) ── */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-[#14171F]/95 border border-[#F6821F]/40 hover:border-[#F6821F] transition-all shadow-[0_4px_30px_rgba(246,130,31,0.12)] group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F6821F] text-white text-[11px] font-mono font-bold tracking-wider uppercase">
                    <Zap className="w-3 h-3 fill-current" />
                    CLOUDFLARE WORKERS® OFFER
                  </span>
                  <span className="text-[11px] font-mono text-[#AD8820] font-semibold">
                    18% OFF PROMO
                  </span>
                </div>
                <div className="text-xs font-mono text-[#B6BBD9]">
                  100k Req/Day Free Tier
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-200 leading-snug mb-3">
                Host your website backend on Cloudflare Workers Free Tier and get <span className="text-[#AD8820] font-bold">18% OFF</span> our Business Plus Package (<span className="line-through text-gray-400">₹14,999</span> <span className="text-white font-bold">₹12,299.18</span>).
              </p>

              <div className="flex items-center gap-3 pt-1">
                <Link
                  href="/cloudflare-workers-calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6821F] hover:text-[#FAAD3F] transition-colors group-hover:underline"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Launch Cloudflare Calculator</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-gray-600">&bull;</span>
                <span className="text-[11px] font-mono text-[#90844A]">Zero server fee eligibility</span>
              </div>
            </div>

            {/* Conversion CTAs — Green limited to primary action tab */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#444F24] hover:bg-[#53612c] text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B6BBD9] group border border-[#52602c]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#B6BBD9] transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#1A1D24] hover:bg-[#232731] border border-[#B6BBD9]/30 text-[#B6BBD9] hover:text-white text-sm font-medium transition-all"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Value Indicators using Harvest Gold & Mist */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-[#B6BBD9]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>Bespoke Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>Studio Photography</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>Performance Marketing</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Enlarged Hero Visual Asset (6 cols) ── */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-[#B6BBD9]/30 hover:border-[#AD8820]/60 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#16181F] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1/1] w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[560px]">
              <Image
                src="/Image for the Website/Hero Section main image.png"
                alt="EdgeLab Digital Solutions — Websites, Content and Performance Marketing"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Multi-tone Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Badge with Mist & Harvest accents */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0F14]/85 backdrop-blur-md border border-[#B6BBD9]/30 text-[11px] font-mono text-[#B6BBD9] shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#AD8820]" />
                  <span>EDGELAB STUDIO & ENGINEERING</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F6821F]/90 backdrop-blur-md text-[10px] font-mono font-bold text-white uppercase shadow-md">
                  <span>CF ARCHITECTURE</span>
                </div>
              </div>

              {/* Verified Direct Contact Floating Strip */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0D0F14]/90 backdrop-blur-md border border-[#B6BBD9]/20 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#AD8820]">
                    DIRECT AGENCY LINE
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-white">
                    {CONTACT.phoneDisplay}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss building our digital presence and the Cloudflare Workers offer.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#444F24] hover:bg-[#53612c] text-white text-xs font-semibold transition-all shadow-xs"
                  aria-label="Direct WhatsApp Enquiry"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#AD8820]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
