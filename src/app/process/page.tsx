'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Compass, 
  Code2, 
  Rocket 
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export default function ProcessPage() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER & AUDIT',
      phase: 'Phase 01 — Days 1 to 4',
      headline: 'Deep operational immersion. Zero guesswork.',
      description: 'We audit your physical operation, competitive landscape, customer touchpoints, and existing brand equity to architect a precise technical and visual scope.',
      deliverables: [
        'Comprehensive Competitor & Market Landscape Audit',
        'Customer Journey Touchpoint Mapping',
        'Technical Architecture & Sitemap Blueprint',
        'Content & Commercial Shoot Production Plan',
      ],
      clientCommitment: '60-minute kick-off briefing and existing brand asset share.',
    },
    {
      num: '02',
      title: 'DESIGN & ART DIRECTION',
      phase: 'Phase 02 — Days 5 to 10',
      headline: 'Bespoke design systems. Zero generic templates.',
      description: 'We design high-fidelity editorial layouts, typography hierarchies, and mobile interaction prototypes. Simultaneously, our media team storyboards on-location shoots.',
      deliverables: [
        'High-Fidelity Desktop & Mobile UI Prototypes',
        'Custom Design Tokens (Typography, Palettes, Layouts)',
        'On-Location 4K Video Storyboard & Shot List',
        'Interactive Figma Prototype Review & Approval',
      ],
      clientCommitment: 'Review design direction and approve visual prototypes.',
    },
    {
      num: '03',
      title: 'ENGINEERING & PRODUCTION',
      phase: 'Phase 03 — Days 11 to 20',
      headline: 'Hand-crafted sub-second code & commercial media.',
      description: 'We hand-write clean Next.js & React code, build custom operational portals, and film commercial photography & 9:16 vertical reels on location.',
      deliverables: [
        'Bespoke Next.js 16 Web Application Engineering',
        'On-Location 4K Cinema Camera Filming & Photography',
        'Foley Sound Design & Master Color Grading',
        'Real-Time WebSockets & Payment Gateway Sync',
      ],
      clientCommitment: 'Provide access for on-site shoot and menu/catalog data.',
    },
    {
      num: '04',
      title: 'LAUNCH & STEWARDSHIP',
      phase: 'Phase 04 — Day 21 Onward',
      headline: 'Flawless edge deployment & active ongoing care.',
      description: 'We deploy to high-speed global cloud edge networks, execute DNS cutovers, and transition into your ongoing digital growth partner.',
      deliverables: [
        'Zero-Downtime Global Edge CDN Deployment',
        'Google Business Profile & Local 3-Pack Schema Verification',
        'Weekly Publishing Pipeline & Social Media Grid Execution',
        '24/7 Server Monitoring & Direct WhatsApp Priority Support',
      ],
      clientCommitment: 'Celebrate launch and review monthly telemetry reports.',
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
            <span>HOW WE WORK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#0C120E] tracking-tight leading-[1.05] mb-6">
            Four disciplined <span className="italic font-light text-[#263A2D]">milestones.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            Every phase of our partnership has a concrete timeline, a defined deliverable, and a single point of accountability. Zero confusion, zero wasted time.
          </p>
        </div>

        {/* 4 Phases Detailed Roadmap */}
        <div className="space-y-12 mb-24">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-6 sm:p-10 rounded-3xl bg-[#F9FAF8] border border-[#D8E4DC] shadow-[0_20px_50px_rgba(18,28,21,0.04)] space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D8E4DC] gap-2">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-[#E8F0EA] border border-[#C2D5C8] text-[#1A281E] text-lg font-mono font-bold flex items-center justify-center shadow-2xs">
                    {step.num}
                  </span>
                  <div>
                    <span className="text-xs font-mono text-[#1A281E] font-bold uppercase">{step.phase}</span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0C120E]">{step.title}</h2>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#52665A] bg-white px-3 py-1 rounded-full border border-[#D8E4DC] self-start sm:self-auto">
                  Milestone Verified
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-3">
                  <div className="text-base font-serif font-bold text-[#0C120E]">
                    {step.headline}
                  </div>
                  <p className="text-sm text-[#52665A] leading-relaxed">
                    {step.description}
                  </p>
                  <div className="p-3.5 rounded-xl bg-white border border-[#D8E4DC] text-xs text-[#1F2C24]">
                    <strong className="text-[#1A281E] font-mono uppercase block text-[10px] mb-0.5">Your Time Commitment:</strong>
                    {step.clientCommitment}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#1A281E] font-bold mb-2">
                    Phase Deliverables:
                  </div>
                  <div className="space-y-2">
                    {step.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#1F2C24]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A281E] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison: Traditional Agency vs EdgeLab */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A281E] text-white border border-[#344E3E] shadow-xl space-y-8 mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase text-[#A7F3D0] font-bold">THE EDGELAB DIFFERENCE</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
              Traditional Agency vs. EdgeLab Partnership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#EF4444] font-bold uppercase">The Traditional Agency Way:</div>
              <ul className="space-y-2 text-xs text-[#CBD5E1]">
                <li className="flex items-start gap-2"><span>✕</span> Clunky WordPress templates with 35+ vulnerable plugins</li>
                <li className="flex items-start gap-2"><span>✕</span> Fragmented freelancers who don&apos;t talk to each other</li>
                <li className="flex items-start gap-2"><span>✕</span> Cheap stock photos that look nothing like your venue</li>
                <li className="flex items-start gap-2"><span>✕</span> They disappear the moment the website is launched</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#263A2D] border border-white/20 space-y-3">
              <div className="text-xs font-mono text-[#A7F3D0] font-bold uppercase">The EdgeLab Standard:</div>
              <ul className="space-y-2 text-xs text-white">
                <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span> Hand-crafted Next.js 16 code with 99/100 PageSpeed scores</li>
                <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span> One synchronized team managing web, reels, photo & socials</li>
                <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span> On-location 4K cinema filming capturing real craftsmanship</li>
                <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span> Active monthly stewardship, uptime monitoring & priority WhatsApp line</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#E8F0EA] via-[#F0F4F1] to-[#E8F0EA] border border-[#D8E4DC] text-center space-y-5">
          <h3 className="text-2xl sm:text-4xl font-serif text-[#0C120E]">
            Ready to initiate Phase 01?
          </h3>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#52665A]">
            Schedule an initial 30-minute discovery consultation with an EdgeLab Project Director.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[46px] rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)] active:scale-[0.98]"
            >
              <span>SCHEDULE DISCOVERY →</span>
            </Link>
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I'd like to schedule a project discovery consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-full bg-white hover:bg-[#F9FAF8] text-[#0C120E] border border-[#D8E4DC] text-xs font-mono font-semibold transition-all active:scale-[0.98]"
            >
              <span>Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
