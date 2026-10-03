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
  Lock
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

interface EcosystemLayer {
  id: string;
  name: string;
  icon: React.ElementType;
  role: string;
  connectionToBusiness: string;
  benefit: string;
  visualPreview: string;
  metric: string;
}

export const SignatureEcosystem: React.FC = () => {
  const layers: EcosystemLayer[] = [
    {
      id: 'website',
      name: 'WEBSITE',
      icon: Globe,
      role: 'The Digital Headquarters',
      connectionToBusiness: 'Commands global authority and presents complete offerings 24/7 with zero middleman commissions.',
      benefit: 'Sub-second speed & proprietary domain equity.',
      visualPreview: '/assets/showcase/tech-workstation.jpg',
      metric: '0.34s Page Speed',
    },
    {
      id: 'content',
      name: 'CONTENT',
      icon: Film,
      role: 'Commercial Visual Proof',
      connectionToBusiness: 'Captures physical craftsmanship, studio atmosphere, and luxury products through high-res photography and 9:16 vertical reels.',
      benefit: 'Stops scrollers and commands retention.',
      visualPreview: '/assets/showcase/cinema-production.jpg',
      metric: '4K Cinema Optics',
    },
    {
      id: 'social',
      name: 'SOCIAL',
      icon: Share2,
      role: 'The Active Community',
      connectionToBusiness: 'Nurtures relationships on Instagram & LinkedIn with cohesive feed curation, persuasive copy, and weekly storytelling.',
      benefit: 'Continuous engagement and word-of-mouth validation.',
      visualPreview: '/assets/showcase/brand-identity.jpg',
      metric: '3x Weekly Grid',
    },
    {
      id: 'commerce',
      name: 'COMMERCE',
      icon: ShoppingBag,
      role: 'Direct Monetization',
      connectionToBusiness: 'Facilitates direct online checkout, pre-orders, and client invoicing without third-party aggregator platform commissions.',
      benefit: 'Maximized profit margins and customer data ownership.',
      visualPreview: '/assets/showcase/editorial-fashion.jpg',
      metric: 'Zero Platform Cuts',
    },
    {
      id: 'customer',
      name: 'CLIENT PORTAL',
      icon: Users,
      role: 'Frictionless Client Touchpoints',
      connectionToBusiness: 'Enables clients to review proposals, submit briefing materials, and communicate directly with your team on WhatsApp.',
      benefit: 'Eliminates friction and delivers immediate response.',
      visualPreview: '/assets/showcase/digital-tablet-ui.jpg',
      metric: '1-Click WhatsApp',
    },
    {
      id: 'data',
      name: 'DATA & OPS',
      icon: Cpu,
      role: 'Operational Architecture',
      connectionToBusiness: 'Synchronizes client requests, automated inventory alerts, service scheduling, and administrative dashboards in real time.',
      benefit: 'Eliminates miscommunications and operational bottlenecks.',
      visualPreview: '/assets/showcase/analytics-growth.jpg',
      metric: 'Realtime Sync',
    },
    {
      id: 'visibility',
      name: 'VISIBILITY',
      icon: TrendingUp,
      role: 'Search & Market Discovery',
      connectionToBusiness: 'Ranks the business at the top of Google Search and Maps, capturing high-intent clients actively searching in your market.',
      benefit: 'Predictable high-intent customer acquisition.',
      visualPreview: '/assets/showcase/architectural-studio.jpg',
      metric: '#1 Local Pack',
    },
  ];

  const [activeLayerId, setActiveLayerId] = useState<string>('website');
  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[0];

  return (
    <section id="ecosystem" className="py-24 md:py-36 bg-[#F9FAF8] text-[#0C120E] border-y border-[#D8E4DC] relative overflow-hidden">
      {/* Soft Olive Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#E8F0EA] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono tracking-widest text-[#1A281E] uppercase mb-6 shadow-2xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
            <span>04 // THE CONNECTED ECOSYSTEM</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-[#0C120E] tracking-tight leading-[1.08] mb-6">
            We don&apos;t build isolated things.{' '}
            <span className="italic font-light text-[#263A2D] block sm:inline">
              We build connected digital experiences.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            A single physical business transforming into an integrated digital machine. Select any satellite node to inspect its live operational connection.
          </p>
        </div>

        {/* 3D Radar & Visual Demonstration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-12 border border-[#D8E4DC] shadow-[0_20px_50px_rgba(18,28,21,0.06)]">
          {/* Left Orbital Node Array & Center Core (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52665A] mb-8 flex items-center gap-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#1A281E]" />
              <span>CLICK ANY LAYER TO ACTIVATE CONNECTION</span>
            </div>

            {/* Radar Orbital Stage */}
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Outer Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-[#D8E4DC] animate-spin-slower opacity-70" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#C2D5C8] opacity-60" />
              <div className="absolute inset-20 rounded-full border border-[#D8E4DC]" />

              {/* Center Core: Your Physical Business */}
              <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#121C15] to-[#1A281E] border-2 border-[#344E3E] flex flex-col items-center justify-center p-2 text-center shadow-[0_10px_25px_rgba(18,28,21,0.25)]">
                <Building2 className="w-6 h-6 text-[#A7F3D0] mb-1" />
                <span className="text-[10px] font-mono uppercase text-[#A7F3D0] font-bold tracking-wider">YOUR</span>
                <span className="text-xs font-serif font-bold text-white leading-none">BUSINESS</span>
                <span className="text-[9px] font-mono text-[#D8E4DC] mt-1">CORE HUB</span>
              </div>

              {/* Satellite Orbital Nodes */}
              {layers.map((layer, idx) => {
                const angle = (idx / layers.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 150; // pixels from center
                const x = Math.round(Math.cos(angle) * radius);
                const y = Math.round(Math.sin(angle) * radius);
                const isSelected = activeLayerId === layer.id;

                const Icon = layer.icon;

                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayerId(layer.id)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute z-20 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#1A281E] text-white scale-125 shadow-[0_0_20px_rgba(26,40,30,0.4)] border-2 border-white'
                        : 'bg-white text-[#1F2C24] border border-[#D8E4DC] hover:border-[#1A281E] hover:scale-110 shadow-xs'
                    }`}
                    title={layer.name}
                  >
                    <Icon className="w-5 h-5" />
                    {isSelected && (
                      <span className="absolute -bottom-5 text-[9px] font-mono font-bold text-[#1A281E] whitespace-nowrap bg-white px-2 py-0.5 rounded-full border border-[#D8E4DC] shadow-2xs">
                        {layer.name}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Inspection Terminal (5 cols) */}
          <div className="lg:col-span-5 bg-[#F9FAF8] rounded-2xl p-6 sm:p-8 border border-[#D8E4DC] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#D8E4DC]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#1A281E] font-bold">
                <activeLayer.icon className="w-4 h-4 text-[#1A281E]" />
                <span>Layer: {activeLayer.name}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-white text-[#1A281E] text-[10px] font-mono font-bold border border-[#C2D5C8] shadow-2xs">
                {activeLayer.metric}
              </span>
            </div>

            {/* Visual Image Preview of Active Node */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D8E4DC] bg-white shadow-2xs">
              <Image
                key={activeLayer.visualPreview}
                src={activeLayer.visualPreview}
                alt={activeLayer.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C120E]/90 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-mono uppercase text-[#A7F3D0] font-bold tracking-wider">
                  Operational Preview
                </span>
                <span className="text-sm font-serif font-bold text-white">
                  {activeLayer.role}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#52665A] mb-1 font-semibold">
                  How It Connects To Your Operation:
                </div>
                <p className="text-xs sm:text-sm text-[#0C120E] leading-relaxed font-medium">
                  {activeLayer.connectionToBusiness}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#D8E4DC]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#1A281E] mb-1 font-bold">
                  Business Impact & Deliverable:
                </div>
                <div className="text-xs text-[#1F2C24] flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A281E] shrink-0 mt-0.5" />
                  <span>{activeLayer.benefit}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/ecosystem"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold font-mono transition-all shadow-[0_4px_16px_rgba(26,40,30,0.2)]"
              >
                <span>EXPLORE BLUEPRINT →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
