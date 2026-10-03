'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Globe, 
  ShoppingBag, 
  Cpu, 
  Share2, 
  Film, 
  Camera, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Play,
  Layers,
  Smartphone
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

interface ServiceItem {
  id: string;
  num: string;
  name: string;
  category: string;
  headline: string;
  explanation: string;
  deliverables: string[];
  cta: string;
}

export const ServicesSystem: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'web',
      num: '01',
      name: 'Websites',
      category: 'Web Engineering',
      headline: 'Lightning-fast, bespoke websites that command authority.',
      explanation: 'Hand-crafted React & Next.js architectures with sub-second page loads, mobile fluidity, and zero template bloat.',
      deliverables: ['Custom Next.js & React Frontend', 'Sub-second Google PageSpeed Score', 'SEO & OpenGraph Architecture', 'Zero-Downtime Cloud Deployment'],
      cta: 'BUILD MY WEBSITE',
    },
    {
      id: 'commerce',
      num: '02',
      name: 'E-commerce',
      category: 'Digital Retail',
      headline: 'Editorial commerce designed to inspire and convert.',
      explanation: 'Runway-style product storytelling with friction-free cart checkouts and seamless payment gateway integrations.',
      deliverables: ['Editorial Collection Catalogues', '1-Click Fast Checkout Workflows', 'Stripe, Razorpay & UPI Gateway Sync', 'Automated Inventory & Invoice Alerts'],
      cta: 'BUILD AN ONLINE STORE',
    },
    {
      id: 'systems',
      num: '03',
      name: 'Digital Systems',
      category: 'Enterprise Operations',
      headline: 'Operational tools that eliminate administrative bottlenecks.',
      explanation: 'Interactive client briefing portals, live ticket dispatch, automated scheduling, and administrative analytics in real time.',
      deliverables: ['Client Intake & Onboarding Portals', 'Direct Real-Time Ticket Dispatch', 'Resource & Availability Management', 'Executive Analytics Dashboard'],
      cta: 'DEPLOY CUSTOM SYSTEMS',
    },
    {
      id: 'social',
      num: '04',
      name: 'Social Media',
      category: 'Brand Presence',
      headline: 'Curated social media that looks as good as your physical craft.',
      explanation: 'End-to-end Instagram and LinkedIn management. We plan calendars, write engaging copy, and curate an aesthetic grid.',
      deliverables: ['Cohesive Visual Grid Curation', 'Weekly Content Publishing Pipeline', 'Persuasive Storytelling & Copywriting', 'Community Interaction & Lead DMs'],
      cta: 'MANAGE MY SOCIALS',
    },
    {
      id: 'content',
      num: '05',
      name: 'Content & Reels',
      category: 'Vertical Motion',
      headline: 'Short-form video engineered for modern attention spans.',
      explanation: 'Vertical 9:16 reels filmed with cinema rigs and paced to hook curiosity in the first 2 seconds.',
      deliverables: ['4K Vertical Cinema Production', 'Sound Design & Foley Audio Matching', 'Dynamic Subtitle & Hook Framing', 'Ready-to-Post Multi-Platform Formats'],
      cta: 'PRODUCE REELS',
    },
    {
      id: 'photo',
      num: '06',
      name: 'Photography',
      category: 'Commercial Studio',
      headline: 'Architectural, studio, and product photography with tactile depth.',
      explanation: 'On-site commercial sessions capturing your physical spaces, craftsmanship, and products with calibrated directional lighting.',
      deliverables: ['Architectural Spaces & Interiors', 'Luxury Product & Catalog Shoots', 'Editorial Lookbooks & Brand Assets', 'Hand-Crafted Master Color Grading'],
      cta: 'BOOK A SHOOT',
    },
    {
      id: 'strategy',
      num: '07',
      name: 'Digital Strategy',
      category: 'Visibility Engine',
      headline: 'Search discoverability that brings high-intent clients to your door.',
      explanation: 'Google Maps optimization, local citation architecture, and intent-driven SEO so serious customers find you first.',
      deliverables: ['Google Business Profile Dominance', 'Local Citation & Directory Clean-Up', 'Conversion Rate Optimization (CRO)', 'Quarterly Competitor Landscape Audits'],
      cta: 'GROW LOCAL REACH',
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section id="services" className="py-24 md:py-36 bg-white text-[#0C120E] border-t border-[#D8E4DC] relative overflow-hidden">
      {/* Background Soft Olive Ambient Wash */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#E8F0EA]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-[#1A281E] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
            <span>03 // Capabilities in Action</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#0C120E] tracking-tight leading-[1.08] mb-6">
            What we build.
          </h2>
          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            EdgeLab replaces fragmented freelancers with one integrated team. Click any capability to preview the visual artifacts we engineer.
          </p>
        </div>

        {/* 2-Column Interactive Capabilities Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Capability Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((srv, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#E8F5EE] border-[#10B981] shadow-xs translate-x-1'
                      : 'bg-[#F8FAF9] border-[#E2ECE6] hover:bg-[#F0F7F3] hover:border-[#D5E5DC]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 rounded-lg bg-white border border-[#D5E5DC] text-xs font-mono font-bold flex items-center justify-center text-[#059669] shadow-2xs">
                        {srv.num}
                      </span>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-[#5C7468]">
                          {srv.category}
                        </div>
                        <div className="text-base sm:text-lg font-serif font-bold text-[#0B281B]">
                          {srv.name}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#059669] translate-x-1' : 'text-[#A0B5AA]'
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-[#D1EEDB] text-xs text-[#233E32] leading-relaxed animate-in fade-in duration-200">
                      {srv.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Impact Visual Artifact Stage (7 cols) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white via-[#F8FAF9] to-[#F0F7F3] border border-[#D5E5DC] shadow-[0_25px_60px_-15px_rgba(11,40,27,0.08)] relative overflow-hidden min-h-[520px] flex flex-col justify-between">
              
              <div className="relative z-10">
                {/* Visual Stage Top Telemetry */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2ECE6] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold">
                      {active.num} // {active.name} Artifact
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#047857] bg-[#E8F5EE] px-3 py-1 rounded-full border border-[#A7F3D0] font-semibold">
                    Live Specification
                  </span>
                </div>

                {/* ═══════════ FRESH HIGH-RES VISUAL ARTIFACTS ═══════════ */}

                {/* 01 — WEBSITES: MacBook Browser Mockup with Fresh Studio Photo */}
                {active.id === 'web' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="rounded-2xl bg-white border border-[#D5E5DC] overflow-hidden shadow-xl">
                      {/* Browser Chrome */}
                      <div className="px-4 py-2.5 bg-[#F8FAF9] border-b border-[#E2ECE6] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                        </div>
                        <span className="text-[11px] font-mono text-[#0B281B] bg-white px-4 py-0.5 rounded-md border border-[#E2ECE6]">
                          https://edgelab-platform.app
                        </span>
                        <span className="text-[10px] font-mono text-[#059669] font-bold bg-[#E8F5EE] px-2 py-0.5 rounded">
                          99/100 SPEED
                        </span>
                      </div>

                      {/* Fresh Studio Visual */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src="/assets/showcase/tech-workstation.jpg"
                          alt="Web engineering studio platform"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#059669] pt-1 font-semibold">
                      <span>✓ 100% Bespoke Next.js Architecture</span>
                      <span>✓ Sub-second Load Times</span>
                    </div>
                  </div>
                )}

                {/* 02 — E-COMMERCE: Luxury Product Showcase */}
                {active.id === 'commerce' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E5DC] flex flex-col sm:flex-row items-center gap-5 shadow-xl">
                      <div className="w-full sm:w-36 aspect-[4/5] rounded-xl overflow-hidden relative shrink-0 border border-[#E2ECE6]">
                        <Image
                          src="/assets/showcase/editorial-fashion.jpg"
                          alt="Luxury Collection"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 rounded text-[9px] font-mono text-white">
                          Editorial
                        </div>
                      </div>

                      <div className="flex-1 space-y-2 text-left w-full">
                        <div className="text-[10px] font-mono uppercase text-[#059669] font-bold tracking-wider">
                          Contemporary Atelier
                        </div>
                        <div className="text-lg font-serif font-bold text-[#0B281B]">
                          Artisanal Cashmere & Silk Ensemble
                        </div>
                        <div className="text-sm font-mono text-[#047857] font-semibold">₹34,000 INR</div>
                        <p className="text-xs text-[#5C7468] leading-tight">
                          Editorial storytelling with high-resolution fabric texture zoom and direct UPI/Card integration.
                        </p>
                        <div className="pt-2">
                          <Link href="/work" className="inline-block px-4 py-2 bg-[#059669] text-white font-bold text-xs rounded-xl hover:bg-[#047857] transition-colors shadow-2xs">
                            Simulate Frictionless Checkout →
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#059669] font-semibold">
                      <span>✓ Zero Transaction Friction</span>
                      <span>✓ Editorial Runway Visuals</span>
                    </div>
                  </div>
                )}

                {/* 03 — DIGITAL SYSTEMS: Live Client Intake & Operations Dispatch */}
                {active.id === 'systems' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-5 rounded-2xl bg-white border border-[#D5E5DC] space-y-3 shadow-xl">
                      {/* Operations Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-[#E2ECE6] text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                          <span className="text-[#059669] font-bold">CLIENT DISPATCH & QUEUE</span>
                        </div>
                        <span className="text-[#047857] bg-[#E8F5EE] px-2 py-0.5 rounded">Live Sync: Active</span>
                      </div>

                      {/* Operations Queue */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-xs space-y-1">
                          <div className="flex justify-between items-center font-bold text-[#0B281B]">
                            <span>Session 04</span>
                            <span className="text-[#059669] font-mono text-[10px]">ACTIVE (4m)</span>
                          </div>
                          <div className="text-[11px] text-[#5C7468]">Bespoke Web Platform Spec</div>
                          <div className="text-[11px] text-[#5C7468]">Automated Invoice Dispatch</div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-xs space-y-1">
                          <div className="flex justify-between items-center font-bold text-[#0B281B]">
                            <span>Intake 12</span>
                            <span className="text-[#0284C7] font-mono text-[10px]">DEPLOYED</span>
                          </div>
                          <div className="text-[11px] text-[#5C7468]">Cloud Edge CDN Routing</div>
                          <div className="text-[11px] text-[#5C7468]">SSL Security Handshake</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-[#5C7468] pt-1">
                        <span>Average Telemetry Latency: 0.32s</span>
                        <span className="text-[#059669] font-bold">Zero Paper Waste</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#059669] font-semibold">
                      <span>✓ Real-time Queue Turnover</span>
                      <span>✓ Automated WhatsApp Notifications</span>
                    </div>
                  </div>
                )}

                {/* 04 — SOCIAL MEDIA: Verified Profile Grid */}
                {active.id === 'social' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E5DC] shadow-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#E8F5EE] border border-[#A7F3D0] flex items-center justify-center font-serif font-bold text-[#059669]">
                            EL
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0B281B] flex items-center gap-1">
                              <span>edgelab.work</span>
                              <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[8px]">✓</span>
                            </div>
                            <div className="text-[10px] text-[#5C7468]">Digital Systems & Brand Studios</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-[#059669] bg-[#E8F5EE] px-2.5 py-1 rounded-full font-bold">
                          Curated Grid
                        </span>
                      </div>

                      {/* 3x3 Social Feed Preview using Tech & Design Images */}
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        <div className="relative aspect-square rounded-lg overflow-hidden border border-[#E2ECE6]">
                          <Image src="/assets/showcase/tech-workstation.jpg" alt="Engineering studio" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-square rounded-lg overflow-hidden border border-[#E2ECE6]">
                          <Image src="/assets/showcase/brand-identity.jpg" alt="Brand identity" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-square rounded-lg overflow-hidden border border-[#E2ECE6]">
                          <Image src="/assets/showcase/architectural-studio.jpg" alt="Architecture" fill className="object-cover" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#059669] font-semibold">
                      <span>✓ Cohesive Visual Tone</span>
                      <span>✓ Weekly Content Cadence</span>
                    </div>
                  </div>
                )}

                {/* 05 — CONTENT & REELS: Vertical Video Chassis */}
                {active.id === 'content' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E5DC] flex items-center gap-5 shadow-xl">
                      <div className="w-28 sm:w-32 aspect-[9/16] rounded-2xl overflow-hidden relative shrink-0 border border-[#D5E5DC] shadow-md bg-black">
                        <video
                          src="/assets/projects/noire/fashion.webm"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/60 rounded text-[8px] font-mono text-[#A7F3D0]">
                          4K
                        </div>
                      </div>

                      <div className="space-y-2 text-left flex-1">
                        <div className="text-[10px] font-mono uppercase text-[#059669] font-bold">
                          9:16 Video Engineering
                        </div>
                        <div className="text-base sm:text-lg font-serif font-bold text-[#0B281B] leading-tight">
                          Paced for Retention & Visual Desire
                        </div>
                        <p className="text-xs text-[#5C7468] leading-tight">
                          Filmed with cinema cameras and paired with custom sound foley matching real studio atmosphere.
                        </p>
                        <div className="text-[10px] font-mono text-[#047857] flex items-center gap-1.5 pt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          <span>Average View-Through Rate: 68%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#059669] font-semibold">
                      <span>✓ Professional Cinema Rigs</span>
                      <span>✓ Custom Foley Audio Mastering</span>
                    </div>
                  </div>
                )}

                {/* 06 — PHOTOGRAPHY: Commercial Studio Artifact */}
                {active.id === 'photo' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="rounded-2xl overflow-hidden border border-[#D5E5DC] shadow-xl relative aspect-[16/10]">
                      <Image
                        src="/assets/showcase/cinema-production.jpg"
                        alt="Commercial Studio Photography"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5 text-white">
                        <div>
                          <div className="text-[10px] font-mono text-[#A7F3D0] uppercase">
                            Commercial Media Studio
                          </div>
                          <div className="text-base font-serif font-bold">
                            On-Location Studio & Space Capture
                          </div>
                          <div className="text-xs text-[#E2ECE6] mt-0.5">
                            Natural directional lighting without harsh direct flash.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#059669] font-semibold">
                      <span>✓ Calibrated Directional Lighting</span>
                      <span>✓ High-Resolution Retouching</span>
                    </div>
                  </div>
                )}

                {/* 07 — STRATEGY: Search Authority Preview */}
                {active.id === 'strategy' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-5 rounded-2xl bg-white border border-[#D5E5DC] shadow-xl space-y-4">
                      <div className="flex items-center justify-between border-b border-[#E2ECE6] pb-3">
                        <div className="text-xs font-mono text-[#059669] font-bold">
                          GOOGLE LOCAL 3-PACK RANKING
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#E8F5EE] text-[#059669] text-[10px] font-mono font-bold">
                          Position #1
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] space-y-1.5">
                        <div className="text-xs font-bold text-[#0B281B] flex items-center justify-between">
                          <span>EdgeLab Partner Business</span>
                          <span className="text-[#059669] font-mono text-[11px]">4.9 ★★★★★ (240+)</span>
                        </div>
                        <div className="text-[11px] text-[#5C7468]">
                          High-Performance Digital Solutions • Open Now
                        </div>
                        <div className="text-[10px] font-mono text-[#047857]">
                          ✓ Verified Google Profile • Complete Schema Markup
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#059669] font-semibold">
                      <span>✓ High-Intent Local Searches</span>
                      <span>✓ Organic Inquiries</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-6 mt-6 border-t border-[#E2ECE6] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs font-bold text-[#0B281B]">
                    Included in {active.name}:
                  </div>
                  <div className="text-[11px] text-[#5C7468] flex flex-wrap gap-x-3 gap-y-1">
                    {active.deliverables.map((item, dIdx) => (
                      <span key={dIdx} className="flex items-center gap-1">
                        <span className="text-[#059669]">✓</span> {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold tracking-wider font-mono transition-all shadow-[0_4px_16px_rgba(26,40,30,0.25)] shrink-0"
                >
                  <span>{active.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
