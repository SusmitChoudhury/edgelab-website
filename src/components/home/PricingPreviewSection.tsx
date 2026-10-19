'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';
import { useCurrency } from '@/context/CurrencyContext';
import { PricingSectionObserver } from '@/components/ui/PricingSectionObserver';

export const PricingPreviewSection: React.FC = () => {
  const { pricingTiers, cloudflarePromo, monthlyRunningCost } = useCurrency();

  return (
    <PricingSectionObserver id="pricing">
      <section className="py-20 sm:py-28 bg-[#F5F7FC] text-[#212413] border-b border-[#DDE2EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B6BBD9]/60 text-[#212413] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820]" />
              <span>04 &bull; Investment Structure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#212413] tracking-tight leading-[1.12]">
              Predictable Pricing. Transparent Value.
            </h2>
            <p className="text-base text-gray-600 mt-4 leading-relaxed font-light">
              Clear upfront investment, included running cost allowances, and zero hidden charges. Choose the foundation suited to your current scale.
            </p>
          </div>

          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-full bg-[#444F24] hover:bg-[#53612c] text-white text-xs font-semibold tracking-wide transition-all self-start md:self-end shrink-0 shadow-sm active:scale-[0.98]"
          >
            <span>Compare Full Pricing Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B6BBD9]" />
          </Link>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {pricingTiers.map((tier) => {
            const isHighlighted = tier.highlighted;
            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-[#13161F] text-white border-2 border-[#AD8820] shadow-2xl scale-[1.02] z-10'
                    : 'bg-white text-[#212413] border border-[#DCE1EE] hover:border-[#AD8820]/70 shadow-xs hover:shadow-xl'
                }`}
              >
                {/* Badge if Popular */}
                {isHighlighted && tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#AD8820] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Top Tier Label */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider font-bold ${
                        isHighlighted ? 'text-[#AD8820]' : 'text-[#212413]'
                      }`}
                    >
                      {tier.name}
                    </span>
                    <span
                      className={`text-[11px] font-mono ${
                        isHighlighted ? 'text-[#B6BBD9]' : 'text-gray-500'
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>

                  {/* Pricing Display */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      {tier.referencePrice && (
                        <span
                          className={`text-base font-mono line-through ${
                            isHighlighted ? 'text-[#B6BBD9]/60' : 'text-gray-400'
                          }`}
                        >
                          {tier.referencePrice}
                        </span>
                      )}
                      <span className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                        {tier.price}
                      </span>
                    </div>

                    {/* Running Cost Benefit Tag */}
                    <div
                      className={`mt-2 py-1 px-2.5 rounded-lg text-xs font-mono inline-block ${
                        isHighlighted
                          ? 'bg-[#1E222D] text-[#AD8820] border border-[#AD8820]/30'
                          : 'bg-[#EEF1F9] text-[#212413] border border-[#B6BBD9]/50'
                      }`}
                    >
                      Running Cost: <strong>{tier.runningCostBenefit}</strong>
                    </div>

                    {isHighlighted && (
                      <div className="mt-2 text-[11px] font-mono text-[#F6821F] font-semibold">
                        CF Promo: {cloudflarePromo.discountedPriceFormatted} (Save {cloudflarePromo.percent}%)
                      </div>
                    )}
                  </div>

                  <p
                    className={`text-xs leading-relaxed mb-6 font-light ${
                      isHighlighted ? 'text-[#B6BBD9]/90' : 'text-gray-600'
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Deliverables List */}
                  <div
                    className={`space-y-2.5 pt-4 border-t mb-8 ${
                      isHighlighted ? 'border-white/10' : 'border-[#EEF1F8]'
                    }`}
                  >
                    {tier.deliverables.slice(0, 5).map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isHighlighted ? 'text-[#AD8820]' : 'text-[#AD8820]'
                          }`}
                        />
                        <span className={isHighlighted ? 'text-gray-200' : 'text-[#212413]'}>
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div>
                  <a
                    href={getWhatsAppUrl(`Hi EdgeLab, I'd like to choose the ${tier.name} package (${tier.price}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full min-h-[46px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-[0.98] ${
                      isHighlighted
                        ? 'bg-[#444F24] hover:bg-[#53612c] text-white border border-[#53612c]'
                        : 'bg-[#F5F7FC] hover:bg-[#EEF1F8] text-[#212413] border border-[#DCE1EE] hover:border-[#B6BBD9]'
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

        {/* Pricing Clarification Bar */}
        <div className="p-4 rounded-2xl bg-white border border-[#DCE1EE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-700 max-w-4xl mx-auto text-center sm:text-left shadow-2xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#AD8820] shrink-0" />
            <span className="font-semibold text-[#212413]">
              Running costs begin after the included period at standard {monthlyRunningCost}/month.
            </span>
          </div>

          <Link
            href="/pricing"
            className="text-[#212413] font-semibold hover:text-[#AD8820] transition-colors shrink-0"
          >
            Review Full Pricing Terms & FAQ &rarr;
          </Link>
        </div>

      </div>
    </section>
    </PricingSectionObserver>
  );
};
