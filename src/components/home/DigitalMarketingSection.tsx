'use client';

import React from 'react';
import { Users, FileText, Globe, Share2, Target, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const DigitalMarketingSection: React.FC = () => {
  const ecosystemNodes = [
    { title: 'Audience', icon: Users, desc: 'Local patrons searching for dining, services, or luxury goods in your city.' },
    { title: 'Content', icon: FileText, desc: 'Studio photography & vertical video that capture interest instantly.' },
    { title: 'Website', icon: Globe, desc: 'Fast, authoritative digital home with complete pricing and ordering details.' },
    { title: 'Social', icon: Share2, desc: 'Active community validation on Instagram and Facebook showing real proof.' },
    { title: 'Marketing', icon: Target, desc: 'Local Google Maps optimization and targeted Meta discovery campaigns.' },
    { title: 'Enquiries', icon: MessageSquare, desc: 'Direct WhatsApp leads, table reservations, and foot traffic.' },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            08 / Strategic Direction
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.12] mb-6">
            Visibility needs a strategy.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            We help connect your website, content and social presence into one coherent digital direction.
          </p>
        </div>

        {/* Connected Strategy Loop */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F6FAF7] border border-[#DEEDE3] mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-[#637C6E] mb-8 font-semibold text-center md:text-left">
            The Connected Visibility Engine:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {ecosystemNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#DFEBE3] shadow-sm flex flex-col justify-between relative group hover:border-[#18553D] transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4EE] text-[#164F38] flex items-center justify-center mb-3 group-hover:bg-[#0F382A] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-[#14261E] mb-1">{node.title}</div>
                    <div className="text-xs text-[#597063] leading-relaxed">{node.desc}</div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#F0F5F2] flex items-center justify-between text-[10px] font-mono text-[#7B9286]">
                    <span>Node 0{idx + 1}</span>
                    {idx < ecosystemNodes.length - 1 && <span className="text-[#18553D] font-bold">→</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-[#DFEBE3]">
            <div className="text-xs font-mono text-[#18553D] font-bold uppercase mb-2">01 / Unified Direction</div>
            <div className="text-base font-serif font-bold text-[#121A16] mb-2">Eliminate Brand Confusion</div>
            <p className="text-xs sm:text-sm text-[#465A50] leading-relaxed">
              When your Instagram looks premium but your website is broken, customers hesitate. When all channels speak the same visual language, trust is instantaneous.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DFEBE3]">
            <div className="text-xs font-mono text-[#18553D] font-bold uppercase mb-2">02 / Local Discoverability</div>
            <div className="text-base font-serif font-bold text-[#121A16] mb-2">Found by High-Intent Buyers</div>
            <p className="text-xs sm:text-sm text-[#465A50] leading-relaxed">
              We configure your Google Business Profile, local schemas, and keyword architecture so customers looking for what you offer in your city find you directly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DFEBE3]">
            <div className="text-xs font-mono text-[#18553D] font-bold uppercase mb-2">03 / Frictionless Conversion</div>
            <div className="text-base font-serif font-bold text-[#121A16] mb-2">Zero-Friction Inquiries</div>
            <p className="text-xs sm:text-sm text-[#465A50] leading-relaxed">
              We make contacting your business as easy as tapping a button. Direct WhatsApp prefilled links, clickable phone numbers, and instant booking forms.
            </p>
          </div>
        </div>

        {/* Section Action */}
        <div className="text-center">
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F382A] hover:bg-[#164D3A] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
          >
            <span>DISCUSS DIGITAL STRATEGY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
