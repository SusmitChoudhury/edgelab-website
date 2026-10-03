'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Lock, 
  Sparkles,
  Smartphone,
  Eye,
  Layers,
  Zap,
  TrendingUp,
  Layout
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const SelectedWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'operations' | 'atelier' | 'studio'>('operations');

  const caseStudies = [
    {
      id: 'operations' as const,
      num: '01',
      title: 'Enterprise Operations & Digital Command Suite',
      badge: 'Live Production System',
      category: 'Real-Time Operational Software & Dispatch',
      client: 'Multi-Location Enterprise',
      heroImage: '/assets/showcase/analytics-growth.jpg',
      headline: 'Synchronizing client intake, inventory alerts, and live operational dispatch in under 400ms.',
      challenge: 'Fast-moving physical businesses suffer from disconnected spreadsheets, paper workflows, and communication lag between service floors and administrative back-offices.',
      solution: 'EdgeLab engineered an end-to-end cloud operational hub. Staff and clients interface through responsive web portals while administrative dashboards track real-time queue states, resource allocation, and settlement analytics.',
      workflow: ['Client Touchpoint', 'QR / Digital Interface', 'Real-Time Dispatch', 'Admin Dashboard', 'Automated Settlement'],
      metrics: [
        { label: 'Latency', value: '0.34s LCP' },
        { label: 'Staff Efficiency', value: '+45% Throughput' },
        { label: 'Uptime', value: '99.98% Cloudflare Edge' },
        { label: 'Architecture', value: 'Next.js + Node + WebSockets' },
      ],
      features: [
        'Dynamic digital service catalogue with instant price & availability sync',
        'Direct order & ticket dispatch with automated status routing',
        'Unified administrative control center for revenue telemetry and staff access',
        'Zero paper reliance and zero third-party platform commission fees',
      ],
      liveUrl: 'https://restaurant-live-portal.netlify.app/',
      adminUrl: 'https://restaurant-live-portal.netlify.app/admin',
    },
    {
      id: 'atelier' as const,
      num: '02',
      title: 'NOIRÉ Couture & Luxury E-Commerce Atelier',
      badge: 'Editorial Commerce Flagship',
      category: 'Luxury Fashion & Digital Retail',
      client: 'Haute Atelier Brand',
      heroImage: '/assets/showcase/editorial-fashion.jpg',
      headline: 'Cinematic visual storytelling meets fluid, high-conversion visual commerce.',
      challenge: 'Luxury brands lose their premium aura on generic e-commerce templates that feel cheap, slow, and mechanically transactional.',
      solution: 'EdgeLab crafted a digital runway experience with editorial typography, tactile product interactions, 1-click checkout flows, and bespoke micro-animations calibrated for prestige brand equity.',
      workflow: ['Lookbook Narrative', 'Interactive Fabric Inspection', '1-Click Cart Flow', 'Automated Invoicing', 'VIP Concierge'],
      metrics: [
        { label: 'Conversion Velocity', value: '+340% Cart Speed' },
        { label: 'Visual Fidelity', value: 'High-Res Studio Optics' },
        { label: 'Checkout Time', value: '< 20 Seconds' },
        { label: 'Architecture', value: 'React + Tailwind + Headless' },
      ],
      features: [
        'Cinematic full-bleed editorial imagery with curated collection narratives',
        'Interactive visual catalogue showcasing fabric texture, drape, and artisan details',
        'Friction-free payment gateway integration supporting UPI, Cards, and Net Banking',
        'Fluid choreographed transitions inspired by global haute couture magazines',
      ],
      liveUrl: 'https://noire-couture.netlify.app/',
    },
    {
      id: 'studio' as const,
      num: '03',
      title: 'Architectural Atelier & Engineering Studio',
      badge: 'Brand Flagship & Portal',
      category: 'Architectural Tech & Digital Identity',
      client: 'Contemporary Architecture Group',
      heroImage: '/assets/showcase/architectural-studio.jpg',
      headline: 'A digital headquarters engineered with mathematical balance and sub-second performance.',
      challenge: 'Architectural practices require spatial elegance, high-density project portfolios, and rapid client inquiry workflows without compromising page loading speed.',
      solution: 'EdgeLab delivered a minimalist digital flagship with clean negative space, interactive project blueprints, client consultation booking, and complete search discoverability.',
      workflow: ['Spatial Showcase', 'Interactive Portfolio', 'Specification Sheets', 'Direct Consultation', 'Client Onboarding'],
      metrics: [
        { label: 'PageSpeed Score', value: '100 / 100 Mobile' },
        { label: 'Image Payload', value: 'Next-Gen AVIF / WebP' },
        { label: 'SEO Authority', value: '#1 Search Rank' },
        { label: 'Hosting', value: 'Global Edge Network' },
      ],
      features: [
        'Interactive project blueprint gallery with high-resolution spatial zoom',
        'Integrated project briefing terminal routing inquiries directly to directors',
        'Search engine optimized metadata hierarchy driving organic corporate contracts',
        'Sub-second page transitions with zero cumulative layout shifts',
      ],
      liveUrl: 'https://edgelab.work/',
    },
  ];

  const currentStudy = caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

  return (
    <section id="work" className="py-24 md:py-36 bg-white text-[#0C120E] border-t border-[#D8E4DC] relative overflow-hidden">
      {/* Soft Olive Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#E8F0EA]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono font-semibold uppercase tracking-wider text-[#1A281E] mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
              <span>05 // Selected Real Work</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#0C120E] tracking-tight leading-[1.08]">
              Proof of craftsmanship.
            </h2>
            <p className="text-base sm:text-lg text-[#52665A] mt-4 max-w-2xl leading-relaxed">
              Explore real digital systems engineered, designed, and deployed by EdgeLab. Tested in live production, not hypothetical Figma mockups.
            </p>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F0F4F1] p-1.5 rounded-full border border-[#D8E4DC] self-start md:self-auto">
            {caseStudies.map((cs) => {
              const isSelected = activeTab === cs.id;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActiveTab(cs.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                    isSelected
                      ? 'bg-[#1A281E] text-white shadow-xs'
                      : 'text-[#52665A] hover:text-[#0C120E]'
                  }`}
                >
                  {cs.num} • {cs.title.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Case Study Presentation */}
        <div className="space-y-16 animate-in fade-in duration-300">
          {/* 1. Large Hero Visual using Fresh High-Res Tech Photography */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[#D5E5DC] shadow-[0_20px_50px_rgba(11,40,27,0.08)] group">
            <Image
              src={currentStudy.heroImage}
              alt={currentStudy.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B281B]/95 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-12 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3.5 py-1 rounded-md bg-[#059669] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs">
                  {currentStudy.badge}
                </span>
                <span className="text-xs font-mono text-[#D4EEDB]">{currentStudy.category}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white font-medium max-w-3xl leading-tight">
                {currentStudy.title}
              </h3>
            </div>
          </div>

          {/* 2. Mini Case Study Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Challenge & Solution */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#5C7468] font-bold mb-2">
                  The Challenge
                </div>
                <p className="text-sm sm:text-base text-[#3E564B] leading-relaxed">
                  {currentStudy.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#E8F5EE] border border-[#A7F3D0]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#047857] font-bold mb-2">
                  What EdgeLab Built
                </div>
                <p className="text-sm sm:text-base text-[#0B281B] leading-relaxed font-medium">
                  {currentStudy.solution}
                </p>
              </div>

              {/* Workflow Transformation Journey */}
              <div className="p-5 rounded-2xl bg-white border border-[#D5E5DC] shadow-xs">
                <div className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold mb-3">
                  Operational Workflow:
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {currentStudy.workflow.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-3 py-1.5 rounded-lg bg-[#F8FAF9] border border-[#E2ECE6] text-[#0B281B] font-bold">
                        {item}
                      </span>
                      {idx < currentStudy.workflow.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Proof & Verified Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              {/* Performance Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {currentStudy.metrics.map((m, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6]">
                    <div className="text-[10px] font-mono text-[#5C7468] uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#0B281B] font-mono mt-1">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights Checklist */}
              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold mb-3">
                  Key Technical Features:
                </div>
                {currentStudy.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#233E32]">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Live Demo Links */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                {currentStudy.liveUrl && (
                  <a
                    href={currentStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)] group"
                  >
                    <span>LAUNCH LIVE SYSTEM DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}

                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E8F0EA] hover:bg-[#D8E4DC] text-[#1A281E] text-xs font-mono font-bold border border-[#C2D5C8] transition-all"
                >
                  <span>Explore All Case Studies</span>
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
