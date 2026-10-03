'use client';

import React from 'react';
import { PRICING_TIERS, getWhatsAppUrl } from '@/config/site';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F6FAF7] border-y border-[#E2EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            13 / Investment Scope
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.12] mb-6">
            Transparent starting tiers.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            Every business is unique. We provide transparent starting points with zero hidden surprise fees.
          </p>
        </div>

        {/* 4-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {PRICING_TIERS.map((tier, idx) => {
            return (
              <div
                key={tier.name}
                className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-[#0F382A] text-white border-2 border-[#1E6B4E] shadow-[0_16px_40px_rgba(15,56,42,0.18)] relative'
                    : 'bg-white text-[#121A16] border border-[#DEEDE3] shadow-sm'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#4ADE80] text-[#071F16] text-[10px] font-mono font-bold uppercase tracking-wider">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono uppercase tracking-widest font-bold ${
                        tier.highlighted ? 'text-[#A7E8C7]' : 'text-[#18553D]'
                      }`}
                    >
                      {tier.name}
                    </span>
                    <span
                      className={`text-[11px] font-mono ${
                        tier.highlighted ? 'text-[#8BB7A2]' : 'text-[#7D9487]'
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                      {tier.price}
                    </div>
                  </div>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      tier.highlighted ? 'text-[#B1D5C4]' : 'text-[#566B60]'
                    }`}
                  >
                    {tier.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#DFEDE4]/30 mb-8">
                    {tier.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.highlighted ? 'text-[#4ADE80]' : 'text-[#18553D]'
                          }`}
                        />
                        <span className={tier.highlighted ? 'text-[#E1EFE7]' : 'text-[#2A3E33]'}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href="#enquiry"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                      tier.highlighted
                        ? 'bg-[#4ADE80] hover:bg-[#22C55E] text-[#071F16] shadow-md'
                        : 'bg-[#F2F7F4] hover:bg-[#E3EFE8] text-[#14573D] border border-[#CFE1D6]'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Clarification Note */}
        <div className="p-4 rounded-2xl bg-white border border-[#DFEBE3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#52685D] max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#18553D] shrink-0" />
            <span className="font-medium text-[#182620]">
              Final pricing depends on project requirements.
            </span>
            <span className="hidden sm:inline">• Custom scopes receive a detailed itemized proposal before work begins.</span>
          </div>

          <a
            href={getWhatsAppUrl("Hi EdgeLab, I'd like a custom estimate for my business project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#18553D] font-semibold hover:underline shrink-0"
          >
            Request Custom Quote on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
