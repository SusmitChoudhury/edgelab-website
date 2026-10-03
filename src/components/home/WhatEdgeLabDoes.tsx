'use client';

import React, { useState } from 'react';
import { 
  Globe, 
  Share2, 
  FileText, 
  Camera, 
  Video, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

interface EcosystemNode {
  id: string;
  name: string;
  shortTag: string;
  icon: React.ElementType;
  position: string; // Coordinate for circular/satellite visual
  summary: string;
  deliverables: string[];
  output: string;
  ctaText: string;
  inquiryField: string;
}

export const WhatEdgeLabDoes: React.FC = () => {
  const nodes: EcosystemNode[] = [
    {
      id: 'website',
      name: 'Website Architecture',
      shortTag: 'WEB',
      icon: Globe,
      position: 'top',
      summary: 'Bespoke, high-performance websites built from scratch. Lightning-fast load speeds, responsive layouts, and zero generic templates.',
      deliverables: ['Custom Next.js & React Frontend', 'Mobile-Responsive Fluid Layouts', 'SEO & Schema Markup Built-in', 'Custom Domain & SSL Setup'],
      output: 'A digital headquarters that commands market authority.',
      ctaText: 'BUILD MY WEBSITE',
      inquiryField: 'Website Development',
    },
    {
      id: 'social',
      name: 'Social Media Management',
      shortTag: 'SOCIAL',
      icon: Share2,
      position: 'top-right',
      summary: 'End-to-end Instagram and Facebook handling. We plan your calendar, write persuasive captions, design cohesive feed layouts, and handle publishing.',
      deliverables: ['Monthly Curated Content Calendar', 'Brand-Aligned Visual Grid Design', 'Compelling Copywriting & Hashtag Research', 'Community & DM Management'],
      output: 'A thriving social presence without you spending hours on your phone.',
      ctaText: 'MANAGE MY SOCIALS',
      inquiryField: 'Social Media',
    },
    {
      id: 'content',
      name: 'Content Creation',
      shortTag: 'CONTENT',
      icon: FileText,
      position: 'right',
      summary: 'Every word, banner, and graphic crafted to speak your brand’s exact tone of voice. No generic quotes or outdated clip-art.',
      deliverables: ['Brand Story & Messaging Architecture', 'Promotional Banners & Seasonal Campaigns', 'Customer Education Carousels', 'Print & Digital Collateral'],
      output: 'High-clarity messaging that explains why you are worth your price.',
      ctaText: 'CREATE MY CONTENT',
      inquiryField: 'Content Creation',
    },
    {
      id: 'photo',
      name: 'Professional Photography',
      shortTag: 'PHOTO',
      icon: Camera,
      position: 'bottom-right',
      summary: 'Commercial studio and on-site photography that captures food, ambiance, interior, products, and brand identity in stunning detail.',
      deliverables: ['Culinary & Food Styling Shoots', 'Architectural Interior & Ambiance Shots', 'Product Catalog Photography', 'Color-Graded High-Res Deliverables'],
      output: 'Visual assets so appetizing and polished that people stop scrolling.',
      ctaText: 'SCHEDULE A SHOOT',
      inquiryField: 'Photography',
    },
    {
      id: 'video',
      name: 'Reels & Short-Form Video',
      shortTag: 'VIDEO',
      icon: Video,
      position: 'bottom',
      summary: 'Paced, vertical reels filmed and edited to hook attention in the first two seconds and convert viewers into paying patrons.',
      deliverables: ['Cinematic Smartphone & Cinema Rig Filming', 'Trending Sound & Rhythm-Matched Cuts', 'Dynamic Text Overlays & Subtitles', 'Behind-The-Scenes Documentaries'],
      output: 'Videos that communicate the atmosphere of your business.',
      ctaText: 'PRODUCE REELS',
      inquiryField: 'Reels / Video',
    },
    {
      id: 'marketing',
      name: 'Digital Marketing & Strategy',
      shortTag: 'MARKETING',
      icon: TrendingUp,
      position: 'bottom-left',
      summary: 'Connecting your website, content, and socials into a coherent growth system that drives real business inquiries.',
      deliverables: ['Google Business Profile & Local Maps Optimization', 'High-Intent Meta Ad Campaign Direction', 'Customer Journey Funnel Optimization', 'Inquiry & Lead Tracking Architecture'],
      output: 'Predictable discoverability when customers search for what you do.',
      ctaText: 'PLAN MY STRATEGY',
      inquiryField: 'Digital Marketing',
    },
    {
      id: 'systems',
      name: 'Digital Ordering & Systems',
      shortTag: 'SYSTEMS',
      icon: Cpu,
      position: 'left',
      summary: 'Custom operational tools that streamline sales: QR table menus, live kitchen ordering portals, appointment booking, and custom customer dashboards.',
      deliverables: ['Direct-to-Kitchen Order Dispatch', 'Realtime Table Management', 'Custom Booking & Appointment Engines', 'Admin Inventory & Analytics Hub'],
      output: 'Operational software that cuts wait times and saves staff labor.',
      ctaText: 'DEPLOY DIGITAL SYSTEMS',
      inquiryField: 'Custom Digital Solution',
    },
    {
      id: 'management',
      name: 'Ongoing Website Management',
      shortTag: 'CARE',
      icon: ShieldCheck,
      position: 'top-left',
      summary: 'We stay on retainer to ensure your website never goes out of date. Update menu prices, post announcements, and monitor security with zero stress.',
      deliverables: ['Daily / Weekly Menu & Price Updates', 'Zero-Downtime Infrastructure Monitoring', 'Security Patches & Performance Audits', 'Direct WhatsApp Priority Support Channel'],
      output: 'A digital presence that is always fresh, fast, and completely protected.',
      ctaText: 'MANAGE MY WEBSITE',
      inquiryField: 'Website Management',
    },
  ];

  const [activeNode, setActiveNode] = useState<EcosystemNode>(nodes[0]);

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5EF] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            02 / Unified Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.15] mb-6">
            Everything your business needs to exist online.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            EdgeLab is not simply a website shop. We build, produce, capture, market, and manage the full digital reality of your business.
          </p>
        </div>

        {/* Interactive Satellite Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left/Center Satellite Node Selector (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7FAF8] rounded-3xl p-6 sm:p-10 border border-[#E1EDE5] relative overflow-hidden">
            {/* Ambient center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E8F4EC]/80 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between pb-6 border-b border-[#E1EDE5] mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#546C60] font-semibold">
                Interactive Ecosystem
              </span>
              <span className="text-xs font-mono text-[#18553D] font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Select any node to explore
              </span>
            </div>

            {/* Central Business Core & Orbiting Buttons */}
            <div className="space-y-4">
              {/* Central Core Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0F382A] text-white flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A5741] flex items-center justify-center font-serif text-lg font-bold text-[#A7E8C7]">
                    01
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A7E8C7]">Central Engine</div>
                    <div className="text-base sm:text-lg font-serif font-semibold">Your Business Enterprise</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#86BAA1] hidden sm:block">8 Connected Channels</div>
              </div>

              {/* 8 Satellite Nodes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {nodes.map((node) => {
                  const isSelected = activeNode.id === node.id;
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between h-28 ${
                        isSelected
                          ? 'bg-white border-[#1B5F43] shadow-[0_4px_16px_rgba(27,95,67,0.12)] ring-2 ring-[#1B5F43]/20'
                          : 'bg-white/80 hover:bg-white border-[#DFEBE3] hover:border-[#CADBD0]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-[#0F382A] text-white' : 'bg-[#EBF4EE] text-[#1B5F43]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-[#7D9186] font-medium">{node.shortTag}</span>
                      </div>
                      <div className={`text-xs font-semibold leading-tight ${isSelected ? 'text-[#0F382A]' : 'text-[#283830]'}`}>
                        {node.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Deep-Dive Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F382A] text-white rounded-3xl p-6 sm:p-8 border border-[#164E3A] shadow-[0_16px_40px_rgba(15,56,42,0.18)] flex flex-col justify-between relative overflow-hidden">
            {/* Ambient light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F7453]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-[#1A4F3B] mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A7E8C7] font-semibold">
                    {activeNode.shortTag} Architecture
                  </span>
                </div>
                <activeNode.icon className="w-5 h-5 text-[#4ADE80]" />
              </div>

              <h3 className="text-2xl font-serif text-white mb-3 leading-snug">
                {activeNode.name}
              </h3>

              <p className="text-sm text-[#A9C7B8] leading-relaxed mb-6">
                {activeNode.summary}
              </p>

              <div className="text-xs font-mono uppercase tracking-wider text-[#86BAA1] mb-3 font-semibold">
                What EdgeLab Delivers:
              </div>

              <div className="space-y-2.5 mb-6">
                {activeNode.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E1EFE7]">
                    <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#092218] border border-[#174F3B] mb-6">
                <div className="text-[11px] font-mono text-[#86BAA1] uppercase tracking-wide">The Impact</div>
                <div className="text-xs text-[#D8EFE4] font-medium mt-0.5 leading-snug">{activeNode.output}</div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-[#1A4F3B] flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#enquiry"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4ADE80] hover:bg-[#22C55E] text-[#071F16] text-xs font-bold transition-all"
              >
                <span>{activeNode.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={getWhatsAppUrl(`Hi EdgeLab, I'd like to discuss ${activeNode.name} for my business.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#144734] hover:bg-[#1A5741] text-xs font-semibold text-[#D1F2E2] border border-[#21674E] transition-colors"
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
