'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Compass, 
  MessageSquare, 
  Globe, 
  ShoppingBag, 
  Cpu, 
  Film, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  Lock,
  Activity,
  Zap,
  Tag,
  Briefcase,
  Send,
  ExternalLink,
  ChevronRight,
  Layers,
  Smartphone,
  PhoneCall
} from 'lucide-react';
import { BRAND, CONTACT, getWhatsAppUrl } from '@/config/site';

type HeroConsoleModule = 'services' | 'pricing' | 'work' | 'contact';

export const Hero: React.FC = () => {
  const [activeModule, setActiveModule] = useState<HeroConsoleModule>('services');

  // Sub-states for interactive exploration inside console
  const [selectedService, setSelectedService] = useState<'web' | 'commerce' | 'operations' | 'cinema'>('web');
  const [selectedTier, setSelectedTier] = useState<number>(0);
  const [selectedWorkIdx, setSelectedWorkIdx] = useState<number>(0);

  // Quick Briefing state in Hero
  const [briefServices, setBriefServices] = useState<string[]>(['Website']);
  const [briefBudget, setBriefBudget] = useState<string>('₹25k – ₹50k');

  const toggleBriefService = (item: string) => {
    setBriefServices(prev => 
      prev.includes(item) ? (prev.length > 1 ? prev.filter(s => s !== item) : prev) : [...prev, item]
    );
  };

  const getHeroBriefWhatsAppUrl = () => {
    const text = `*New Project Enquiry via EdgeLab Hero Console*%0A%0A*Required Capabilities:* ${briefServices.join(', ')}%0A*Budget Bracket:* ${briefBudget}%0A%0AHi EdgeLab, I'd like to discuss bringing my business online.`;
    return `https://api.whatsapp.com/send/?phone=${CONTACT.whatsappNumber}&text=${text}`;
  };

  const servicesData = [
    {
      id: 'web' as const,
      num: '01',
      title: 'Bespoke Web Platform',
      tagline: 'Hand-Crafted Next.js 16',
      badge: '99/100 PageSpeed',
      metrics: '0.34s LCP • Sub-Second Edge • 100% Owned',
      deliverables: ['Custom Next.js Frontend', 'Zero Template Bloat', 'Global CDN Edge Deploy', 'Enterprise Security'],
      image: '/assets/showcase/tech-workstation.jpg',
      route: '/services#web',
    },
    {
      id: 'commerce' as const,
      num: '02',
      title: 'Luxury Editorial Commerce',
      tagline: 'Runway Catalogs & 1-Click Fast Pay',
      badge: '+340% Cart Speed',
      metrics: 'Zero Aggregator Cuts • UPI & Cards • Instant Invoices',
      deliverables: ['Editorial Product Lookbooks', '1-Click Fast Checkout', 'UPI / Card Payment Sync', 'Realtime Inventory Alerts'],
      image: '/assets/showcase/editorial-fashion.jpg',
      route: '/services#commerce',
    },
    {
      id: 'operations' as const,
      num: '03',
      title: 'Digital Operations & POS Hub',
      tagline: 'Live Dispatch & Real-Time Queue',
      badge: 'Real-Time Telemetry',
      metrics: '< 200ms Socket Latency • 100% Paperless • Live Staff Routing',
      deliverables: ['Client Intake & QR Menus', 'Direct Kitchen/Staff Sockets', 'Administrative Dashboard', 'Zero Paper Reliance'],
      image: '/assets/showcase/analytics-growth.jpg',
      route: '/services#systems',
    },
    {
      id: 'cinema' as const,
      num: '04',
      title: 'Commercial Cinema & 9:16 Reels',
      tagline: 'On-Location 4K Video Production',
      badge: '4K Cinema Optics',
      metrics: 'Foley Audio Matching • 2s Hook Pacing • 68% Retention',
      deliverables: ['4K Cinema Camera Rig', 'On-Location Lighting', 'Paced 9:16 Vertical Video', 'Custom Sound Foley'],
      image: '/assets/showcase/cinema-production.jpg',
      route: '/services#content',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter Plan',
      price: '₹4,999',
      timeline: '3-5 Days',
      ideal: 'Single-page & fast launchpads',
      highlights: ['Bespoke 1-Page Architecture', 'Sub-second PageSpeed & Edge Deploy', 'Google Maps & Local Setup', 'Direct 1-Click WhatsApp Link'],
    },
    {
      name: 'Business Plan',
      price: '₹8,999',
      timeline: '7-10 Days',
      ideal: 'Most businesses (Car shops, cafes, retail)',
      badge: 'RECOMMENDED',
      highlights: ['Up to 5 Custom Tailored Pages', 'Digital Catalog & Menu Integration', 'Commercial Photography Pack', 'Enhanced SEO & 1 Mo Care'],
    },
    {
      name: 'Business Plus',
      price: '₹14,999',
      timeline: '10-14 Days',
      ideal: 'Growth businesses with booking flows',
      highlights: ['Up to 8 Pages with Booking Flow', 'Automated Enquiry Routing', 'Social Media Launch Calendar', '3 Months Dedicated Care'],
    },
    {
      name: 'Custom Application',
      price: '₹19,999+',
      timeline: '2-3 Weeks',
      ideal: 'Full custom systems & portals',
      highlights: ['Real-time Admin / POS Dashboard', 'Custom Database Architecture', '4K Cinema Video Production', 'Priority SLA 24/7 Care'],
    },
  ];

  const caseStudies = [
    {
      title: 'NOIRÉ Couture & Luxury Atelier',
      category: 'Editorial E-Commerce Flagship',
      headline: 'Sub-second digital runway with tactile product inspection and 1-click checkout.',
      metrics: '+340% Cart Speed • 0.31s Edge • 100/100 Mobile',
      liveUrl: 'https://noire-couture.netlify.app/',
      image: '/assets/showcase/editorial-fashion.jpg',
    },
    {
      title: 'Enterprise Operations Command Suite',
      category: 'Real-Time Operational Dispatch',
      headline: 'Synchronizing client intake, staff queues, and revenue telemetry in under 200ms.',
      metrics: '-42% Wait Times • Real-Time Sockets • Zero Paper',
      liveUrl: 'https://restaurant-live-portal.netlify.app/',
      image: '/assets/showcase/analytics-growth.jpg',
    },
  ];

  const currentService = servicesData.find(s => s.id === selectedService) || servicesData[0];
  const currentPricing = pricingTiers[selectedTier] || pricingTiers[0];
  const currentWork = caseStudies[selectedWorkIdx] || caseStudies[0];

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-white text-[#0C120E]"
    >
      {/* Radiant Olive & Porcelain Ambient Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#E8F0EA] via-[#F0F4F1]/60 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[#263A2D]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#E8F0EA]/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Precision Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D8E4DC 1px, transparent 1px), linear-gradient(90deg, #D8E4DC 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Eyebrow Status Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-5 border-b border-[#D8E4DC]">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono tracking-wider text-[#1A281E] shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="font-bold uppercase tracking-widest text-[11px]">
              DIGITAL SYSTEMS • CREATIVE TECHNOLOGY STUDIO
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#52665A]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#263A2D]" />
              <span className="text-[#0C120E] font-semibold">Single Digital Partner</span>
            </span>
            <span className="text-[#C2D5C8]">•</span>
            <span className="text-[#1A281E] font-medium">Web + Social + Video + Systems + Care</span>
          </div>
        </div>

        {/* 2-Column Hero Architecture: Executive Narrative (5 cols) & Command Console (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Bold Strategic Typography (5 cols) */}
          <div className="lg:col-span-5 space-y-7 text-center lg:text-left">
            <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] font-sans font-extrabold tracking-[-0.035em] text-[#0C120E] leading-[0.98]">
              Your business,
              <span className="block mt-2 font-serif italic font-medium text-[#1A281E]">
                finally online.
              </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-[#1F2C24] font-sans leading-relaxed">
              EdgeLab eliminates disconnected freelancers by designing bespoke web platforms, deploying custom operational systems, capturing commercial cinema video, and driving predictable business growth.
            </p>

            {/* Strategic High-Contrast CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-white bg-[#1A281E] hover:bg-[#263A2D] rounded-full shadow-[0_12px_30px_rgba(26,40,30,0.3)] hover:shadow-[0_16px_36px_rgba(26,40,30,0.45)] transition-all transform hover:-translate-y-0.5 group"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={getWhatsAppUrl("Hi EdgeLab, I would like to consult with an EdgeLab Project Director.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-[#0C120E] bg-white hover:bg-[#F9FAF8] border border-[#D8E4DC] rounded-full transition-all shadow-2xs hover:border-[#1A281E]"
              >
                <MessageSquare className="w-4 h-4 text-[#1A281E]" />
                <span>TALK ON WHATSAPP</span>
              </a>
            </div>

            {/* Trust Telemetry Pillars */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#D8E4DC] text-left">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#0C120E]">0.34s</div>
                <div className="text-[11px] font-mono text-[#52665A]">Sub-Second Speed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#0C120E]">100%</div>
                <div className="text-[11px] font-mono text-[#52665A]">Bespoke Code</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#0C120E]">1 Team</div>
                <div className="text-[11px] font-mono text-[#52665A]">Full Digital Stack</div>
              </div>
            </div>
          </div>

          {/* Right Column: The All-In-One Executive Command Console (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-2 border-[#D8E4DC] shadow-[0_25px_70px_rgba(26,40,30,0.12)] overflow-hidden">
              
              {/* Console Top Bar */}
              <div className="bg-[#1A281E] px-4 py-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/90" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/90" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/90" />
                  <span className="ml-2 text-xs font-mono font-bold tracking-wider text-[#A7F3D0] hidden sm:inline">
                    EDGELAB EXECUTIVE CONSOLE
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#263A2D] border border-white/10 text-[11px] font-mono text-[#D8E4DC]">
                  <Lock className="w-3 h-3 text-[#10B981]" />
                  <span className="hidden sm:inline">https://</span>edgelab.work/overview
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A7F3D0] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>28ms EDGE</span>
                </div>
              </div>

              {/* 4 Primary Module Tabs: SERVICES | PRICING | WORK | CONTACT */}
              <div className="grid grid-cols-4 bg-[#F0F4F1] border-b border-[#D8E4DC] text-xs font-mono">
                {[
                  { id: 'services' as const, label: 'SERVICES', icon: Globe },
                  { id: 'pricing' as const, label: 'PRICING', icon: Tag },
                  { id: 'work' as const, label: 'WORK', icon: Briefcase },
                  { id: 'contact' as const, label: 'QUICK BRIEF', icon: Send },
                ].map((mod) => {
                  const isActive = activeModule === mod.id;
                  const Icon = mod.icon;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => setActiveModule(mod.id)}
                      className={`py-3.5 px-2 text-center transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 relative ${
                        isActive
                          ? 'bg-white text-[#0C120E] font-bold shadow-xs'
                          : 'text-[#52665A] hover:text-[#0C120E] hover:bg-[#E8F0EA]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#1A281E]' : 'text-[#798E81]'}`} />
                      <span className="text-[11px] tracking-tight">{mod.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A281E]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Module Content Body */}
              <div className="p-5 sm:p-7 min-h-[460px] flex flex-col justify-between">
                
                {/* ═══════════ 1. SERVICES MODULE ═══════════ */}
                {activeModule === 'services' && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    {/* Capability Sub-Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {servicesData.map((s) => {
                        const isSelected = selectedService === s.id;
                        return (
                          <button
                            key={s.id}
                            onClick={() => setSelectedService(s.id)}
                            className={`p-2.5 rounded-xl text-left border transition-all text-xs font-mono ${
                              isSelected
                                ? 'bg-[#1A281E] text-white border-[#1A281E] shadow-xs'
                                : 'bg-[#F9FAF8] text-[#52665A] border-[#D8E4DC] hover:bg-[#E8F0EA]'
                            }`}
                          >
                            <div className="text-[9px] text-[#A7F3D0]">{s.num}</div>
                            <div className="font-bold truncate mt-0.5">{s.title.split(' ')[0]}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Service Showcase Display */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#D8E4DC] bg-[#F9FAF8] shadow-xs group">
                      <Image
                        key={currentService.image}
                        src={currentService.image}
                        alt={currentService.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C120E]/95 via-[#0C120E]/40 to-transparent flex flex-col justify-between p-4 sm:p-5 text-white">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-[#1A281E] text-[#A7F3D0] text-[10px] font-mono font-bold uppercase border border-white/20">
                            {currentService.badge}
                          </span>
                          <span className="text-[11px] font-mono text-[#D8E4DC] bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                            {currentService.tagline}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                            {currentService.title}
                          </h3>
                          <p className="text-xs text-[#D8E4DC] font-mono">
                            {currentService.metrics}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#1F2C24]">
                      {currentService.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1A281E] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex items-center justify-between border-t border-[#D8E4DC]">
                      <span className="text-xs font-mono text-[#52665A]">Full documentation & turnaround specs:</span>
                      <Link
                        href={currentService.route}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-mono font-bold transition-all shadow-xs"
                      >
                        <span>Explore Capabilities</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* ═══════════ 2. PRICING MODULE ═══════════ */}
                {activeModule === 'pricing' && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    {/* Tier Switcher */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {pricingTiers.map((t, idx) => {
                        const isSelected = selectedTier === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedTier(idx)}
                            className={`p-2.5 rounded-xl text-left border transition-all text-xs font-mono ${
                              isSelected
                                ? 'bg-[#1A281E] text-white border-[#1A281E] shadow-xs'
                                : 'bg-[#F9FAF8] text-[#52665A] border-[#D8E4DC] hover:bg-[#E8F0EA]'
                            }`}
                          >
                            <div className="text-[10px] text-[#A7F3D0] font-bold">{t.price}</div>
                            <div className="font-bold truncate mt-0.5">{t.name}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Tier Card */}
                    <div className="p-5 rounded-2xl bg-[#F9FAF8] border border-[#D8E4DC] space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#D8E4DC] gap-2">
                        <div>
                          <div className="text-xs font-mono text-[#52665A]">Estimated Delivery: <strong className="text-[#0C120E]">{currentPricing.timeline}</strong></div>
                          <h3 className="text-2xl font-serif font-bold text-[#0C120E] mt-0.5">
                            {currentPricing.name}
                          </h3>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-2xl font-serif font-bold text-[#1A281E]">{currentPricing.price}</div>
                          <div className="text-[10px] font-mono text-[#52665A]">{currentPricing.ideal}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#1F2C24]">
                        {currentPricing.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1A281E] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#D8E4DC]">
                      <div className="text-xs font-mono text-[#52665A]">Zero hidden fees • Transparent milestone contracts</div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <Link
                          href="/pricing"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#E8F0EA] hover:bg-[#D8E4DC] text-[#1A281E] text-xs font-mono font-bold transition-all"
                        >
                          <span>ROI Calculator</span>
                        </Link>
                        <Link
                          href="/contact"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-mono font-bold transition-all shadow-xs"
                        >
                          <span>Lock This Tier</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* ═══════════ 3. WORK MODULE ═══════════ */}
                {activeModule === 'work' && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    {/* Project Tabs */}
                    <div className="grid grid-cols-2 gap-2">
                      {caseStudies.map((cs, idx) => {
                        const isSelected = selectedWorkIdx === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedWorkIdx(idx)}
                            className={`p-3 rounded-xl text-left border transition-all text-xs font-mono ${
                              isSelected
                                ? 'bg-[#1A281E] text-white border-[#1A281E] shadow-xs'
                                : 'bg-[#F9FAF8] text-[#52665A] border-[#D8E4DC] hover:bg-[#E8F0EA]'
                            }`}
                          >
                            <div className="text-[10px] text-[#A7F3D0]">Case Study 0{idx + 1}</div>
                            <div className="font-bold truncate mt-0.5">{cs.title.split('&')[0]}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Work Visual */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#D8E4DC] bg-[#F9FAF8] shadow-xs group">
                      <Image
                        key={currentWork.image}
                        src={currentWork.image}
                        alt={currentWork.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C120E]/95 via-[#0C120E]/40 to-transparent flex flex-col justify-end p-5 text-white">
                        <span className="text-[10px] font-mono text-[#A7F3D0] uppercase font-bold tracking-wider mb-1">
                          {currentWork.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                          {currentWork.title}
                        </h3>
                        <p className="text-xs text-[#D8E4DC] max-w-lg line-clamp-2">
                          {currentWork.headline}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F9FAF8] border border-[#D8E4DC] text-xs font-mono text-[#1F2C24]">
                      <strong>Verified Production Telemetry:</strong> {currentWork.metrics}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex items-center justify-between border-t border-[#D8E4DC]">
                      <Link href="/work" className="text-xs font-mono text-[#52665A] hover:text-[#0C120E] underline">
                        View All Systems & Architecture →
                      </Link>
                      <a
                        href={currentWork.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-mono font-bold transition-all shadow-xs"
                      >
                        <span>Launch Live System Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}

                {/* ═══════════ 4. RAPID BRIEF / CONTACT MODULE ═══════════ */}
                {activeModule === 'contact' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div>
                      <div className="text-xs font-mono uppercase text-[#1A281E] font-bold">
                        30-Second Project Briefing
                      </div>
                      <div className="text-sm font-serif text-[#0C120E]">
                        Select what your business requires for an instant estimate:
                      </div>
                    </div>

                    {/* Capability Multi-select Chips */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono text-[#52665A]">1. Select Required Capabilities:</div>
                      <div className="flex flex-wrap gap-2">
                        {['Website', 'E-Commerce', 'Operations Hub', 'Reels / Video', 'Social Media', 'Local SEO'].map((svc) => {
                          const isSelected = briefServices.includes(svc);
                          return (
                            <button
                              key={svc}
                              onClick={() => toggleBriefService(svc)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                                isSelected
                                  ? 'bg-[#1A281E] text-white border-[#1A281E] font-bold shadow-2xs'
                                  : 'bg-[#F9FAF8] text-[#52665A] border-[#D8E4DC] hover:bg-[#E8F0EA]'
                              }`}
                            >
                              {isSelected ? '✓ ' : '+ '}{svc}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Pills */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono text-[#52665A]">2. Target Investment:</div>
                      <div className="grid grid-cols-3 gap-2">
                        {['₹10k – ₹25k', '₹25k – ₹50k', '₹50k+ (Enterprise)'].map((b) => {
                          const isSelected = briefBudget === b;
                          return (
                            <button
                              key={b}
                              onClick={() => setBriefBudget(b)}
                              className={`py-2 px-2 rounded-lg text-xs font-mono text-center transition-all border ${
                                isSelected
                                  ? 'bg-[#1A281E] text-white border-[#1A281E] font-bold'
                                  : 'bg-[#F9FAF8] text-[#52665A] border-[#D8E4DC] hover:bg-[#E8F0EA]'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Instant WhatsApp Dispatch Button */}
                    <div className="pt-3 border-t border-[#D8E4DC] space-y-2">
                      <a
                        href={getHeroBriefWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-mono font-bold tracking-wider transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)]"
                      >
                        <MessageSquare className="w-4 h-4 text-[#A7F3D0]" />
                        <span>DISPATCH BRIEF TO WHATSAPP DIRECTLY →</span>
                      </a>
                      <div className="text-center text-[10px] font-mono text-[#52665A]">
                        Routes directly to an EdgeLab Project Director • Typical response under 30 mins
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ HERO BOTTOM QUICK-NAVIGATION CONSOLE RIBBON ═══════════ */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#1A281E] text-white border border-[#344E3E] shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-mono text-[#A7F3D0] uppercase font-bold tracking-wider">
              Quick Directory:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <Link
              href="/services"
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Services (8) →
            </Link>
            <Link
              href="/pricing"
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Pricing Tiers →
            </Link>
            <Link
              href="/work"
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Selected Work →
            </Link>
            <Link
              href="/ecosystem"
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              System Blueprint →
            </Link>
            <Link
              href="/process"
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              How We Work →
            </Link>
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full bg-[#263A2D] hover:bg-[#344E3E] text-[#A7F3D0] font-bold border border-white/20 transition-colors"
            >
              Start Intake →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
