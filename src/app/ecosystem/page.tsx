'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Globe, 
  Film, 
  Share2, 
  ShoppingBag, 
  Users, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Layers,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Radio,
  BarChart3,
  Search,
  ExternalLink
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

interface BlueprintNode {
  id: string;
  stationNum: string;
  name: string;
  category: string;
  clientPerspective: string;
  staffPerspective: string;
  businessAdvantage: string;
  metrics: string;
  image: string;
}

export default function EcosystemPage() {
  const [activeStation, setActiveStation] = useState<string>('web');

  const stations: BlueprintNode[] = [
    {
      id: 'web',
      stationNum: '01',
      name: 'Bespoke Web Platform',
      category: 'The Digital Front Door',
      clientPerspective: 'Opens instantly on smartphone or laptop in 0.34 seconds. Crisp typography, smooth scrolling, and zero lag.',
      staffPerspective: 'Requires zero technical maintenance. Automatic cloud backups, global SSL encryption, and instant content updates.',
      businessAdvantage: 'Replaces generic slow templates with a proprietary digital flagship that commands high perceived value and client trust.',
      metrics: '0.34s LCP • 99/100 PageSpeed • 100% Owned Domain Equity',
      image: '/assets/showcase/tech-workstation.jpg',
    },
    {
      id: 'commerce',
      stationNum: '02',
      name: 'Direct Monetization & 0% Platform Fees',
      category: 'Friction-Free Revenue',
      clientPerspective: '1-click checkout supporting UPI, Credit Cards, Apple Pay, and Net Banking without clunky redirects.',
      staffPerspective: 'Orders and payments reconcile automatically into an administrative dashboard with instant payment receipt generation.',
      businessAdvantage: 'Eliminates 15% to 30% third-party aggregator commissions. You keep 100% of customer lifetime value and transaction revenue.',
      metrics: '0% Aggregator Cuts • 1-Click Fast Pay • Instant UPI Reconciliation',
      image: '/assets/showcase/editorial-fashion.jpg',
    },
    {
      id: 'operations',
      stationNum: '03',
      name: 'Live Operational Dispatch & Queue',
      category: 'Real-Time Telemetry',
      clientPerspective: 'Real-time order confirmation and live status notifications directly sent to their WhatsApp or mobile screen.',
      staffPerspective: 'Incoming client requests route straight to back-office kitchen or service floor screens via sub-200ms WebSockets.',
      businessAdvantage: 'Eliminates lost paper tickets, staff communication errors, and floor bottlenecks, increasing table and order turnover by 42%.',
      metrics: '< 200ms Socket Latency • 100% Paperless • Real-Time Order Routing',
      image: '/assets/showcase/analytics-growth.jpg',
    },
    {
      id: 'video',
      stationNum: '04',
      name: 'Commercial Cinema & 9:16 Video',
      category: 'Visual Desire & Hook Pacing',
      clientPerspective: 'Captivating vertical reels on Instagram and YouTube with directional lighting and authentic sound design.',
      staffPerspective: 'EdgeLab films on-location during quiet hours with zero disruption to daily customer operations.',
      businessAdvantage: 'Builds organic brand awareness, commands attention in the first 2 seconds, and drives constant local foot traffic.',
      metrics: '4K Cinema Optics • Foley Sound Mastering • 68% View-Through Rate',
      image: '/assets/showcase/cinema-production.jpg',
    },
    {
      id: 'social',
      stationNum: '05',
      name: 'Curated Social & Community',
      category: 'Ongoing Brand Narrative',
      clientPerspective: 'A cohesive, aesthetic Instagram feed that mirrors the physical quality and elegance of your brand.',
      staffPerspective: 'EdgeLab handles weekly content calendar planning, copywriting, hashtag research, and community inquiry filtering.',
      businessAdvantage: 'Maintains top-of-mind recall, transforms one-time buyers into loyal regulars, and filters incoming client DMs.',
      metrics: '3x Weekly Content Drops • Curated Palette • Automated Lead Routing',
      image: '/assets/showcase/brand-identity.jpg',
    },
    {
      id: 'search',
      stationNum: '06',
      name: 'Local Search & Google Authority',
      category: 'High-Intent Acquisition',
      clientPerspective: 'Your business appears #1 on Google Search and Google Maps when searching for your craft in your city.',
      staffPerspective: 'Incoming phone calls and map direction requests arrive pre-qualified with verified reviews and accurate operating hours.',
      businessAdvantage: 'Captures ready-to-buy clients at the exact moment of search intent without ongoing expensive pay-per-click ad spend.',
      metrics: 'Google 3-Pack Rank #1 • Complete Schema Markup • 4.9★ Review Strategy',
      image: '/assets/showcase/architectural-studio.jpg',
    },
  ];

  const currentStation = stations.find((s) => s.id === activeStation) || stations[0];

  return (
    <div className="pt-32 pb-24 bg-white text-[#0C120E] min-h-screen">
      {/* Radiant Olive & Porcelain Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#E8F0EA] via-[#F0F4F1]/40 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#D8E4DC] text-xs font-mono font-bold uppercase tracking-wider text-[#1A281E] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
            <span>SYSTEM ARCHITECTURE & BLUEPRINT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#0C120E] tracking-tight leading-[1.05] mb-6">
            The Connected <span className="italic font-light text-[#263A2D]">Digital Machine.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            Most businesses waste capital on disconnected freelancers: a website that doesn’t match their social media, social media that fails to generate revenue, and third-party platforms taking 20% to 30% cuts. EdgeLab transforms your business into a synchronized digital system.
          </p>
        </div>

        {/* ═══════════════ INTERACTIVE OPERATIONAL BLUEPRINT CONSOLE ═══════════════ */}
        <div className="mb-20 rounded-3xl bg-[#1A281E] text-white p-6 sm:p-10 border border-[#344E3E] shadow-[0_25px_60px_rgba(18,28,21,0.25)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="text-xs font-mono text-[#A7F3D0] uppercase font-bold flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
                <span>Interactive Architecture Blueprint • Live Station Telemetry</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                How Your Physical Business Operates in the EdgeLab Network
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#D8E4DC]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Click Any Station Below to Inspect</span>
            </div>
          </div>

          {/* Interactive Station Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            {stations.map((st) => {
              const isActive = activeStation === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStation(st.id)}
                  className={`p-3.5 rounded-xl text-left transition-all flex flex-col justify-between border ${
                    isActive
                      ? 'bg-white text-[#0C120E] border-white shadow-md transform -translate-y-0.5'
                      : 'bg-[#263A2D]/60 text-[#D8E4DC] border-white/10 hover:bg-[#263A2D] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#1A281E]' : 'text-[#A7F3D0]'}`}>
                      {st.stationNum}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />}
                  </div>
                  <div className="text-xs font-bold leading-tight line-clamp-1">{st.name.split(' ')[0]}</div>
                  <div className={`text-[9px] font-mono mt-0.5 truncate ${isActive ? 'text-[#52665A]' : 'text-[#8EA696]'}`}>
                    {st.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Station Blueprint Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121C15] p-6 sm:p-8 rounded-2xl border border-white/10">
            {/* Visual Image Stage (5 cols) */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                key={currentStation.image}
                src={currentStation.image}
                alt={currentStation.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121C15]/90 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono uppercase text-[#A7F3D0] font-bold">
                  Station {currentStation.stationNum} Inspection
                </span>
                <span className="text-base font-serif font-bold text-white">
                  {currentStation.name}
                </span>
              </div>
            </div>

            {/* Interactive Blueprint Explanation (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#A7F3D0] uppercase tracking-wider font-bold">
                  {currentStation.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#263A2D] text-[#D8E4DC] text-[10px] font-mono font-bold border border-white/10">
                  {currentStation.metrics}
                </span>
              </div>

              {/* 3-Part Operational Reality */}
              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[10px] font-mono text-[#A7F3D0] uppercase font-bold flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>What Your Client Experiences:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E5EDE8] leading-relaxed">
                    {currentStation.clientPerspective}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-[10px] font-mono text-[#D8E4DC] uppercase font-bold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#A7F3D0]" />
                    <span>What Your Internal Team & Staff Experience:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E5EDE8] leading-relaxed">
                    {currentStation.staffPerspective}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#263A2D]/80 border border-[#344E3E] space-y-1">
                  <div className="text-[10px] font-mono text-[#A7F3D0] uppercase font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>The Direct Financial & Strategic Advantage:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    {currentStation.businessAdvantage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Connected Pillars Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#D8E4DC]">
            <div className="text-xs font-mono uppercase tracking-widest text-[#1A281E] font-bold">
              The 6 Disciplines of the EdgeLab Ecosystem:
            </div>
            <span className="text-xs font-mono text-[#52665A]">Synchronized Architecture</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stations.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-3xl bg-[#F9FAF8] border border-[#D8E4DC] hover:border-[#263A2D] transition-all hover:-translate-y-1 shadow-xs flex flex-col justify-between group space-y-5"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D8E4DC] bg-white">
                    <Image
                      src={pillar.image}
                      alt={pillar.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <div className="text-xs font-mono text-[#263A2D] font-bold">Station {pillar.stationNum} // {pillar.category}</div>
                    <h3 className="text-lg font-serif font-bold text-[#0C120E] mt-1">{pillar.name}</h3>
                    <p className="text-xs text-[#52665A] mt-2 leading-relaxed">{pillar.clientPerspective}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D8E4DC] flex items-center justify-between text-[11px] font-mono text-[#1F2C24]">
                  <span className="font-semibold">{pillar.metrics.split('•')[0]}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#263A2D] shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#E8F0EA] via-[#F0F4F1] to-[#E8F0EA] border border-[#D8E4DC] text-center space-y-5">
          <h3 className="text-2xl sm:text-4xl font-serif text-[#0C120E]">
            Ready to connect your business ecosystem?
          </h3>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#52665A]">
            Let’s replace disconnected freelancers and third-party commissions with a single, synchronized digital infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)]"
            >
              <span>CONNECT MY ECOSYSTEM →</span>
            </Link>
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I want to talk about building a connected digital ecosystem for my business.")}
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
