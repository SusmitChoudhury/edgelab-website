'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  Calculator, 
  MessageSquare, 
  ShieldCheck, 
  ChevronDown 
} from 'lucide-react';
import { PRICING_TIERS, getWhatsAppUrl } from '@/config/site';

export default function PricingPage() {
  // Interactive Calculator State
  const [includeWeb, setIncludeWeb] = useState(true);
  const [includeCommerce, setIncludeCommerce] = useState(false);
  const [includeReels, setIncludeReels] = useState(false);
  const [includeCare, setIncludeCare] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Dynamic estimate calculation
  let calculatedEstimate = 8999;
  if (includeCommerce) calculatedEstimate += 6000;
  if (includeReels) calculatedEstimate += 5000;
  if (!includeCare) calculatedEstimate -= 2000;

  const faqs = [
    {
      q: 'Do I own the website and source code?',
      a: 'Yes, 100%. Unlike agencies that hold you hostage on proprietary website builders, we transfer the complete, hand-coded Next.js repository, assets, and DNS domain equity directly to you.',
    },
    {
      q: 'How fast will our project be delivered?',
      a: 'Starter launchpads go live within 7 business days. Custom multi-page business platforms deliver within 10 to 14 days. Enterprise operational systems deliver in 3 to 4 weeks with weekly staged previews.',
    },
    {
      q: 'Are there any hidden recurring fees or plugin costs?',
      a: 'Zero hidden fees. We build hand-crafted Next.js code with zero plugin bloat, eliminating the expensive monthly plugin subscriptions of traditional WordPress agencies.',
    },
    {
      q: 'What does the Monthly Care & Management retainer include?',
      a: 'Our monthly retainer handles 24/7 uptime monitoring, catalog and pricing updates, security patches, monthly performance audits, and a direct priority WhatsApp line with our project directors.',
    },
    {
      q: 'Can you shoot photography and video at our business location?',
      a: 'Yes. Our media directors bring 4K cinema cameras, prime optics, and soft studio lighting directly to your business to capture authentic craftsmanship on location.',
    },
  ];

  const handleCalculatorWhatsApp = () => {
    const services = [
      includeWeb && 'Bespoke Website',
      includeCommerce && 'E-Commerce / Online Store',
      includeReels && '4K Video & Reels Production',
      includeCare && 'Ongoing Monthly Care & Retainer',
    ].filter(Boolean).join(', ');

    const msg = `*EdgeLab Calculator Inquiry*
• *Selected Package:* ${services}
• *Estimated Investment:* ₹${calculatedEstimate.toLocaleString()} INR

Hi EdgeLab, I used your pricing calculator and would like to confirm project availability.`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-white text-[#0C120E] min-h-screen">
      {/* Radiant Olive Ambient Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#E8F0EA] via-[#F0F4F1]/40 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono font-bold uppercase tracking-wider text-[#1A281E] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
            <span>TRANSPARENT INVESTMENT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#0C120E] tracking-tight leading-[1.05] mb-6">
            Predictable pricing. <span className="italic font-light text-[#263A2D]">Exceptional return.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            No surprise invoices. No hostage code. Transparent tiers engineered for businesses wanting high-performance digital results.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isHighlighted = tier.highlighted;
            return (
              <div
                key={tier.name}
                className={`p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-[#E8F0EA] border-2 border-[#1A281E] shadow-[0_15px_35px_rgba(26,40,30,0.12)] scale-102 z-10'
                    : 'bg-[#F9FAF8] border border-[#D8E4DC] hover:border-[#1A281E] shadow-2xs'
                }`}
              >
                <div>
                  {isHighlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#1A281E] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs">
                      MOST POPULAR
                    </span>
                  )}

                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A281E] mb-1">
                    {tier.name}
                  </div>

                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0C120E]">
                      {tier.price}
                    </span>
                    <span className="text-[11px] font-mono text-[#52665A]">
                      {tier.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#52665A] mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#D8E4DC]">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#1F2C24]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A281E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/contact?package=${tier.name}`}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold font-mono text-center transition-all block ${
                      isHighlighted
                        ? 'bg-[#1A281E] hover:bg-[#263A2D] text-white shadow-xs'
                        : 'bg-white hover:bg-[#E8F0EA] text-[#0C120E] border border-[#D8E4DC] hover:border-[#1A281E]'
                    }`}
                  >
                    {tier.cta} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & ROI Calculator */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F9FAF8] border border-[#D8E4DC] shadow-sm mb-24">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#1A281E] font-bold mb-2">
              <Calculator className="w-4 h-4 text-[#1A281E]" />
              <span>INTERACTIVE SCOPE ESTIMATOR</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0C120E]">
              Configure your customized digital package
            </h2>
            <p className="text-xs sm:text-sm text-[#52665A] mt-1">
              Toggle specific deliverables to see real-time estimated investment and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Toggles (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div
                onClick={() => setIncludeWeb(!includeWeb)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  includeWeb ? 'bg-[#E8F0EA] border-[#1A281E]' : 'bg-white border-[#D8E4DC]'
                }`}
              >
                <div>
                  <div className="text-sm font-serif font-bold text-[#0C120E]">Bespoke Web Engineering</div>
                  <div className="text-xs text-[#52665A]">Custom Next.js layout, sub-second speed, Google SEO</div>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                  includeWeb ? 'bg-[#1A281E] text-white' : 'border border-[#C2D5C8]'
                }`}>
                  {includeWeb && '✓'}
                </div>
              </div>

              <div
                onClick={() => setIncludeCommerce(!includeCommerce)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  includeCommerce ? 'bg-[#E8F0EA] border-[#1A281E]' : 'bg-white border-[#D8E4DC]'
                }`}
              >
                <div>
                  <div className="text-sm font-serif font-bold text-[#0C120E]">E-Commerce / Online Ordering (+₹6,000)</div>
                  <div className="text-xs text-[#52665A]">Catalog presentation, 1-click cart, UPI & Card gateway sync</div>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                  includeCommerce ? 'bg-[#1A281E] text-white' : 'border border-[#C2D5C8]'
                }`}>
                  {includeCommerce && '✓'}
                </div>
              </div>

              <div
                onClick={() => setIncludeReels(!includeReels)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  includeReels ? 'bg-[#E8F0EA] border-[#1A281E]' : 'bg-white border-[#D8E4DC]'
                }`}
              >
                <div>
                  <div className="text-sm font-serif font-bold text-[#0C120E]">4K Commercial Video & Reels (+₹5,000)</div>
                  <div className="text-xs text-[#52665A]">On-location shoot, cinema cameras, Foley sound mastering</div>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                  includeReels ? 'bg-[#1A281E] text-white' : 'border border-[#C2D5C8]'
                }`}>
                  {includeReels && '✓'}
                </div>
              </div>

              <div
                onClick={() => setIncludeCare(!includeCare)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  includeCare ? 'bg-[#E8F0EA] border-[#1A281E]' : 'bg-white border-[#D8E4DC]'
                }`}
              >
                <div>
                  <div className="text-sm font-serif font-bold text-[#0C120E]">Included Ongoing Care & Retainer (+₹2,000/mo)</div>
                  <div className="text-xs text-[#52665A]">24/7 uptime monitoring, menu/content updates, priority WhatsApp line</div>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                  includeCare ? 'bg-[#1A281E] text-white' : 'border border-[#C2D5C8]'
                }`}>
                  {includeCare && '✓'}
                </div>
              </div>
            </div>

            {/* Output Card (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#1A281E] shadow-lg space-y-5 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A281E] font-bold bg-[#E8F0EA] px-3 py-1 rounded-full">
                ESTIMATED INVESTMENT
              </span>

              <div>
                <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0C120E]">
                  ₹{calculatedEstimate.toLocaleString()}
                </div>
                <div className="text-xs font-mono text-[#52665A] mt-1">
                  Estimated Delivery: 7–10 Business Days
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9FAF8] border border-[#D8E4DC] text-xs text-[#52665A] text-left space-y-1.5">
                <div className="font-bold text-[#0C120E] font-mono text-[11px] uppercase">Included in Estimate:</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1A281E]">✓</span> 100% Owned Code & DNS Setup
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1A281E]">✓</span> 0.34s LCP Sub-Second Speed
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1A281E]">✓</span> Dedicated Project Director
                </div>
              </div>

              <button
                onClick={handleCalculatorWhatsApp}
                className="w-full py-4 px-6 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold font-mono tracking-wider transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)] flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#A7F3D0]" />
                <span>CONFIRM ESTIMATE ON WHATSAPP →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Transparent FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#1A281E] font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#0C120E]">
              Clear answers before you commit.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#F9FAF8] border border-[#D8E4DC] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#0C120E]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#52665A] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#1A281E]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#52665A] leading-relaxed border-t border-[#D8E4DC]/60 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
