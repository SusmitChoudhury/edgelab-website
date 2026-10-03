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
  Sparkles, 
  Zap, 
  TrendingUp, 
  Layout, 
  Code2 
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export default function WorkPage() {
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'operations' | 'web'>('all');

  const projects = [
    {
      id: 'noire-couture',
      category: 'ecommerce',
      categoryLabel: 'Luxury E-Commerce & Editorial',
      title: 'NOIRÉ Couture & Digital Atelier',
      client: 'Haute Fashion Atelier',
      year: '2025',
      headline: 'Editorial storytelling meets fluid, high-conversion visual commerce.',
      challenge: 'Discerning luxury clients were lost on generic Shopify/WooCommerce templates that felt cluttered, slow, and mechanically cheap.',
      solution: 'EdgeLab crafted a bespoke digital runway with haute typography, interactive fabric inspection, 1-click checkout flows, and sub-second page transitions.',
      metrics: [
        { label: 'Cart Conversion', value: '+340% Speed' },
        { label: 'Page Latency', value: '0.31s Edge' },
        { label: 'Mobile Performance', value: '100 / 100' },
      ],
      features: [
        'Cinematic full-bleed editorial imagery with curated collection narratives',
        'Interactive visual catalogue showcasing fabric texture, drape, and artisan details',
        'Friction-free payment gateway integration supporting UPI, Cards, and Net Banking',
        'Fluid choreographed transitions inspired by global haute couture publications',
      ],
      image: '/assets/showcase/editorial-fashion.jpg',
      liveUrl: 'https://noire-couture.netlify.app/',
      tags: ['React', 'Tailwind CSS', 'Headless Commerce', 'Cloudflare Edge'],
    },
    {
      id: 'enterprise-ops',
      category: 'operations',
      categoryLabel: 'Operations & Real-Time Software',
      title: 'Enterprise Digital Operations & Dispatch Hub',
      client: 'Multi-Location Enterprise',
      year: '2025',
      headline: 'Synchronizing client intake, service queues, and operational dispatch in real time.',
      challenge: 'Fast-moving physical operations suffered from manual paper tickets, staff communication lag, and zero visibility into hourly throughput.',
      solution: 'EdgeLab engineered an end-to-end cloud operational hub. Clients and staff interact via responsive mobile portals, routing live tickets to an administrative command board.',
      metrics: [
        { label: 'Queue Turnover', value: '-42% Wait Time' },
        { label: 'Telemetry Sync', value: '< 200ms Socket' },
        { label: 'Paper Reliance', value: '0% Waste' },
      ],
      features: [
        'Dynamic digital service catalogue with instant price & availability sync',
        'Direct order & ticket dispatch with automated status routing',
        'Unified administrative control center for revenue telemetry and staff access',
        'Zero paper reliance and zero third-party aggregator commission cuts',
      ],
      image: '/assets/showcase/analytics-growth.jpg',
      liveUrl: 'https://restaurant-live-portal.netlify.app/',
      tags: ['Next.js', 'Node.js', 'WebSockets', 'Admin Dashboard'],
    },
    {
      id: 'architectural-studio',
      category: 'web',
      categoryLabel: 'Corporate Architecture & Identity',
      title: 'Scandinavian Architectural Atelier Flagship',
      client: 'Contemporary Architecture Group',
      year: '2024',
      headline: 'A digital headquarters engineered with mathematical balance and negative space.',
      challenge: 'Architectural practices require spatial elegance, high-density project portfolios, and rapid client inquiry workflows without compromising page loading speed.',
      solution: 'EdgeLab delivered a minimalist digital flagship with clean negative space, interactive project blueprints, client consultation booking, and complete search discoverability.',
      metrics: [
        { label: 'Google PageSpeed', value: '99 / 100' },
        { label: 'SEO Authority', value: '#1 Search Pack' },
        { label: 'Inquiry Velocity', value: '+210% Leads' },
      ],
      features: [
        'Interactive project blueprint gallery with high-resolution spatial zoom',
        'Integrated project briefing terminal routing inquiries directly to directors',
        'Search engine optimized metadata hierarchy driving organic corporate contracts',
        'Sub-second page transitions with zero cumulative layout shifts',
      ],
      image: '/assets/showcase/architectural-studio.jpg',
      liveUrl: 'https://edgelab.work/',
      tags: ['Next.js 16', 'Bespoke CSS Tokens', 'SEO Architecture', 'Turbopack'],
    },
    {
      id: 'tech-platform',
      category: 'web',
      categoryLabel: 'Web Engineering & SaaS',
      title: 'Cloud Telemetry & Software Command System',
      client: 'Technology Practice',
      year: '2025',
      headline: 'Hand-crafted sub-second code engineered for mission-critical digital workflows.',
      challenge: 'Enterprise users faced slow response times and cognitive overload with bloated legacy dashboard software.',
      solution: 'EdgeLab built a streamlined, dark-mode-optional, sub-second web application featuring real-time data streaming, modular UI widgets, and keyboard-first navigation.',
      metrics: [
        { label: 'Bundle Size', value: '< 45 KB First Load' },
        { label: 'TTFB', value: '28ms Global Edge' },
        { label: 'User Satisfaction', value: '99.4%' },
      ],
      features: [
        'Sub-second edge caching across 300+ global data centers',
        'Modular dashboard components with real-time websocket synchronization',
        'Strict TypeScript type safety and automated unit & integration testing',
        'WCAG AAA accessible color contrast and keyboard navigation shortcuts',
      ],
      image: '/assets/showcase/tech-workstation.jpg',
      liveUrl: 'https://edgelab.work/',
      tags: ['TypeScript', 'Edge Compute', 'Turbopack', 'Realtime WebSockets'],
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-white text-[#0C120E] min-h-screen">
      {/* Radiant Olive Ambient Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#E8F0EA] via-[#F0F4F1]/40 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono font-bold uppercase tracking-wider text-[#1A281E] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
            <span>SELECTED REAL WORK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#0C120E] tracking-tight leading-[1.05] mb-6">
            Systems engineered to <span className="italic font-light text-[#263A2D]">perform.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            We don&apos;t build hypothetical design concepts. We engineer production-ready digital flagships, operational systems, and luxury commerce engines.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-8">
            {(['all', 'web', 'ecommerce', 'operations'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  filter === cat
                    ? 'bg-[#1A281E] text-white shadow-xs'
                    : 'bg-[#F9FAF8] text-[#52665A] border border-[#D8E4DC] hover:border-[#1A281E] hover:text-[#0C120E]'
                }`}
              >
                {cat === 'all' ? 'All Systems' : cat === 'web' ? 'Web Platforms' : cat === 'ecommerce' ? 'E-Commerce' : 'Operations'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#F9FAF8] border border-[#D8E4DC] shadow-[0_20px_50px_rgba(18,28,21,0.04)] space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image (6 cols) */}
                <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#D8E4DC] shadow-sm group bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A281E] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-2xs">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Narrative Details (6 cols) */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="text-xs font-mono text-[#52665A]">
                    Client: <strong className="text-[#0C120E]">{project.client}</strong> • {project.year}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0C120E] leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#1F2C24] leading-relaxed">
                    {project.headline}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-[#D8E4DC] space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#1A281E] font-bold">
                      The Challenge & Resolution:
                    </div>
                    <p className="text-xs text-[#52665A] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white border border-[#D8E4DC] text-center">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[9px] font-mono uppercase text-[#52665A]">{m.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-[#0C120E] font-mono mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags & CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-[#E8F0EA] text-[#1A281E] text-[10px] font-mono font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold font-mono transition-all shadow-[0_4px_16px_rgba(26,40,30,0.25)]"
                    >
                      <span>Launch System Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Page Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#E8F0EA] via-[#F0F4F1] to-[#E8F0EA] border border-[#D8E4DC] text-center space-y-5">
          <h3 className="text-2xl sm:text-4xl font-serif text-[#0C120E]">
            Have a project in mind?
          </h3>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#52665A]">
            Whether you need a bespoke website, custom operational system, or complete brand production, we review every brief within 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)]"
            >
              <span>START A BRIEFING →</span>
            </Link>
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss a project from your work page.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9FAF8] text-[#0C120E] border border-[#D8E4DC] text-xs font-mono font-semibold transition-all"
            >
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
