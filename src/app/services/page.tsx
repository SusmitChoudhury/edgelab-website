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
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers,
  Sparkles 
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'web',
      num: '01',
      title: 'Website Design & Engineering',
      tag: 'Web Engineering',
      headline: 'Lightning-fast, bespoke websites engineered to command market authority.',
      summary: 'We build hand-crafted Next.js & React web platforms. Every line of code is optimized for sub-second page loads, mobile responsiveness, and high conversion.',
      deliverables: [
        'Bespoke Next.js & React Frontend Architecture',
        'Sub-second Google PageSpeed Score (95+ Guaranteed)',
        'Comprehensive Technical SEO & OpenGraph Schema',
        'High-Speed Global Edge CDN Deployment',
        'Mobile-First Responsive Layout & Fluid Typography',
        'Interactive Contact & Invoicing Lead Router',
      ],
      techStack: 'Next.js 16, React 19, TypeScript, Tailwind CSS, Turbopack, Cloudflare Edge',
      timeline: '2 to 3 Weeks',
      image: '/assets/showcase/tech-workstation.jpg',
    },
    {
      id: 'commerce',
      num: '02',
      title: 'E-Commerce & Digital Stores',
      tag: 'Digital Retail',
      headline: 'Editorial commerce platforms designed to inspire desire and convert buyers.',
      summary: 'We merge high-fashion editorial aesthetics with friction-free payment checkouts. Sell products directly to your audience without third-party marketplace cuts.',
      deliverables: [
        'Editorial Collection & Lookbook Layouts',
        '1-Click Friction-Free Checkout Workflows',
        'Automated Inventory & Invoice Alerts',
        'Payment Gateway Sync (UPI, Cards, Net Banking)',
        'Customer Account & Order History Portal',
        'Abandoned Cart Recovery Automation',
      ],
      techStack: 'Headless Commerce, Stripe, Razorpay, Node.js, Next.js',
      timeline: '3 to 4 Weeks',
      image: '/assets/showcase/editorial-fashion.jpg',
    },
    {
      id: 'systems',
      num: '03',
      title: 'Enterprise Operations & Digital Systems',
      tag: 'Operational Software',
      headline: 'Custom operational tools that eliminate administrative bottlenecks and human lag.',
      summary: 'We engineer responsive web portals for client intake, queue management, staff dispatch, and administrative analytics.',
      deliverables: [
        'Interactive Client Intake & Onboarding Portals',
        'Real-time Queue & Dispatch Dashboard (WebSockets)',
        'Staff Role-Based Permissions & Access Controls',
        'Unified Administrative Telemetry Dashboard',
        'Automated WhatsApp Client Notification Triggers',
        'Zero Paper Reliance & Complete Data Export',
      ],
      techStack: 'Next.js, Node.js, WebSockets, Redis, PostgreSQL, Docker',
      timeline: '3 to 5 Weeks',
      image: '/assets/showcase/analytics-growth.jpg',
    },
    {
      id: 'social',
      num: '04',
      title: 'Social Media Management & Direction',
      tag: 'Brand Presence',
      headline: 'Curated digital storytelling that mirrors the true quality of your physical craft.',
      summary: 'We manage your brand’s Instagram and LinkedIn presence end-to-end. We plan publishing calendars, craft persuasive copy, and maintain an aesthetic visual grid.',
      deliverables: [
        'Complete Visual Grid & Storytelling Direction',
        '3x Weekly High-Impact Publishing Cadence',
        'Persuasive Narrative Copywriting & Hashtag Strategy',
        'Active Community Management & Inquiry Triage',
        'Monthly Audience Growth & Engagement Analytics',
        'Cohesive Highlight Covers & Profile Optimization',
      ],
      techStack: 'Meta Business Suite, Buffer, Figma Studio, Notion Content Pipeline',
      timeline: 'Monthly Retainer',
      image: '/assets/showcase/brand-identity.jpg',
    },
    {
      id: 'content',
      num: '05',
      title: 'Short-Form Video & 9:16 Reels',
      tag: 'Vertical Motion',
      headline: 'Cinema-quality vertical video engineered to hook curiosity and command retention.',
      summary: 'We shoot on location with professional cinema camera rigs. Every second is paced to maximize watch time, paired with custom sound foley matching real studio atmosphere.',
      deliverables: [
        '4K Vertical Video Captured On-Location',
        'Cinema Optics, Directional Lighting & Sound Foley',
        'Retention-Optimized Pacing (First 2-Second Hook)',
        'Dynamic Styled Subtitles & Sound Design',
        'Exported Formats for Reels, TikTok & Shorts',
        'Raw Asset Archive for Future Content Iterations',
      ],
      techStack: 'Blackmagic Pocket Cinema, DaVinci Resolve Studio, Sony FX3, Premiere Pro',
      timeline: 'Monthly / Per-Shoot',
      image: '/assets/showcase/cinema-production.jpg',
    },
    {
      id: 'photo',
      num: '06',
      title: 'Commercial Photography',
      tag: 'Studio & Spaces',
      headline: 'High-resolution imagery that establishes instant premium perception.',
      summary: 'We shoot commercial photography on-location at your business. From interior architecture to product details, we capture your physical space with calibrated natural lighting.',
      deliverables: [
        'Architectural Interior & Exterior Photography',
        'Tactile Product & Material Macro Focus',
        'Editorial Lookbook & Lifestyle Sessions',
        'Master Color Grading & Retouching in 8K',
        'Full Commercial Usage & Print Rights',
        'Optimized WebP / AVIF Formats for Instant Loading',
      ],
      techStack: 'Sony Alpha Full-Frame, Prime Master Lenses, Capture One Pro, Profoto Lighting',
      timeline: 'Per-Session',
      image: '/assets/showcase/architectural-studio.jpg',
    },
    {
      id: 'management',
      num: '07',
      title: 'Website Management & Active Care',
      tag: 'Ongoing Support',
      headline: 'Continuous technical stewardship so you never worry about your digital presence.',
      summary: 'Websites shouldn’t be launched and abandoned. EdgeLab acts as your in-house web team, updating menu prices, deploying security patches, and monitoring uptime.',
      deliverables: [
        '24/7 Server & Domain Uptime Monitoring',
        'Priority Turnaround for Content & Price Changes',
        'Automated Weekly Cloud Backups & SSL Maintenance',
        'Monthly Core Web Vitals & Speed Optimization',
        'Quarterly Security & Dependency Audits',
        'Direct WhatsApp Priority Line to Project Directors',
      ],
      techStack: 'Cloudflare Edge, GitHub Actions CI/CD, Next.js Engine, Vercel Enterprise',
      timeline: 'Monthly Retainer',
      image: '/assets/showcase/code-terminal.jpg',
    },
    {
      id: 'strategy',
      num: '08',
      title: 'Local SEO & Digital Visibility',
      tag: 'Search Dominance',
      headline: 'Ensuring high-intent customers in your market find your business first.',
      summary: 'We optimize your Google Business Profile, structure local schema metadata, and build review acquisition pipelines so ready-to-buy clients choose you over competitors.',
      deliverables: [
        'Google Business Profile Optimization for Local 3-Pack',
        'Local Citation & Directory Clean-Up (NAP Consistency)',
        'Rich Snippet & Local Business JSON-LD Schema',
        'Automated Review Acquisition Strategy & QR Touchpoints',
        'Monthly Local Search Impression & Direction Analytics',
        'Quarterly Competitive Search Landscape Audits',
      ],
      techStack: 'Google Search Console, Schema.org Validator, BrightLocal, Semrush',
      timeline: 'Quarterly Campaign',
      image: '/assets/showcase/digital-tablet-ui.jpg',
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
            <span>FULL CAPABILITIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#0C120E] tracking-tight leading-[1.05] mb-6">
            The Complete <span className="italic font-light text-[#263A2D]">Digital Suite.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            EdgeLab replaces fragmented freelancers with one integrated engineering and creative partner. Explore our eight core disciplines engineered to elevate your business.
          </p>
        </div>

        {/* Services Deep-Dive List */}
        <div className="space-y-16">
          {servicesList.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#F9FAF8] border border-[#D8E4DC] shadow-[0_20px_50px_rgba(18,28,21,0.04)] space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Imagery (5 cols) */}
                <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#D8E4DC] shadow-sm group bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A281E] text-[#A7F3D0] text-[10px] font-mono font-bold tracking-wider uppercase shadow-2xs">
                    {service.num} • {service.tag}
                  </div>
                </div>

                {/* Details (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#52665A]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#1A281E]" />
                      <span>Turnaround: <strong className="text-[#0C120E]">{service.timeline}</strong></span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0C120E] leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#1F2C24] leading-relaxed">
                    {service.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#52665A] leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Tech stack badge */}
                  <div className="p-3 rounded-xl bg-white border border-[#D8E4DC] text-xs font-mono text-[#1F2C24]">
                    <span className="text-[#52665A] uppercase text-[10px] font-bold block mb-0.5">Technology Stack:</span>
                    <span>{service.techStack}</span>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#1A281E] font-bold">
                      Verified Deliverables:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#1F2C24]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1A281E] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold font-mono transition-all shadow-[0_4px_16px_rgba(26,40,30,0.25)]"
                    >
                      <span>Inquire About {service.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(`Hi EdgeLab, I'd like to ask about your ${service.title} service.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center px-4 py-3 text-xs font-mono text-[#1A281E] hover:text-[#263A2D] transition-colors underline"
                    >
                      Ask on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#E8F0EA] via-[#F0F4F1] to-[#E8F0EA] border border-[#D8E4DC] text-center space-y-5">
          <h3 className="text-2xl sm:text-4xl font-serif text-[#0C120E]">
            Need a combined custom scope?
          </h3>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#52665A]">
            Most partners bundle a bespoke website, commercial video production, and ongoing monthly care for maximum digital impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)]"
            >
              <span>CREATE CUSTOM BUNDLE →</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9FAF8] text-[#0C120E] border border-[#D8E4DC] text-xs font-mono font-semibold transition-all"
            >
              <span>Explore Pricing Tiers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
