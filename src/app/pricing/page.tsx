'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Calculator, 
  ChevronDown,
  Info,
  Server
} from 'lucide-react';
import { getWhatsAppUrl, CONTACT } from '@/config/site';
import { useCurrency } from '@/context/CurrencyContext';
import { PricingSectionObserver } from '@/components/ui/PricingSectionObserver';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [businessPlusCloudflareFree, setBusinessPlusCloudflareFree] = useState<boolean>(false);
  const { currency, pricingTiers, cloudflarePromo, monthlyRunningCost } = useCurrency();

  const starterTier = pricingTiers.find((t) => t.id === 'starter');
  const businessPlusTier = pricingTiers.find((t) => t.id === 'business-plus');
  const edgeCareTier = pricingTiers.find((t) => t.id === 'edgecare');
  const ultimateTier = pricingTiers.find((t) => t.id === 'ultimate');

  const faqs = [
    {
      q: 'How does the included running cost benefit work?',
      a: `Business Plus includes your first 3 months of running cost, EdgeCare includes your first 6 months, and EdgeLab Ultimate includes lifetime running cost under a qualifying written service agreement. After any included period, the standard running cost is ${monthlyRunningCost}/month according to your agreed service scope. Starter has no free period and runs at standard ${monthlyRunningCost}/month.`,
    },
    {
      q: 'How does the 18% Cloudflare Workers Free promotion work?',
      a: `This is an EdgeLab promotional offer (not provided by Cloudflare). It gives 18% off the qualifying EdgeLab service fee on eligible purchases above ${cloudflarePromo.qualifyingThresholdFormatted} when the customer explicitly selects Cloudflare Workers Free hosting. For Business Plus at ${businessPlusTier?.price}, the 18% discount is ${cloudflarePromo.discountAmountFormatted}, bringing your final qualifying service fee to ${cloudflarePromo.discountedPriceFormatted}. If a paid hosting setup is chosen, standard package pricing applies.`,
    },
    {
      q: 'Are third-party costs like domain names or Meta ads included?',
      a: 'No. Third-party expenses—including custom domain registrations, external email services, paid third-party AI APIs, and Meta advertising spend—are separate costs paid directly to their respective providers. EdgeLab manages and executes the campaigns and infrastructure transparently.',
    },
    {
      q: 'Do I own the website source code and digital assets?',
      a: 'Yes, 100%. We provide clean, hand-written Next.js code with zero proprietary builder lock-in. All photography, video files, and source code belong to your business upon project completion.',
    },
    {
      q: 'What is included in ongoing website maintenance?',
      a: 'Maintenance includes continuous 24/7 uptime monitoring, menu and price updates, security patches, regular speed and performance checks, and direct priority WhatsApp communication with our engineering team.',
    },
  ];

  return (
    <PricingSectionObserver id="pricing">
      <div className="pt-32 pb-24 bg-white text-[#212413] min-h-screen">
      {/* Radiant Subtle Lighting */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#F2F5ED] via-[#F9FAF8] to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5ED] text-[#444F24] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#C2D5C8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820] animate-pulse" />
            <span>TRANSPARENT INVESTMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#212413] tracking-tight leading-[1.05] mb-6">
            Predictable Pricing. <span className="italic font-light text-[#444F24]">Clear Value.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#565F45] leading-relaxed font-light">
            Every business foundation is engineered with precision. Clear upfront investments, defined running-cost benefits, and zero hidden surprise invoices.
          </p>
        </div>

        {/* 4 Approved Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {pricingTiers.map((tier) => {
            const isHighlighted = tier.highlighted;
            const isBusinessPlus = tier.id === 'business-plus';
            const displayPrice = isBusinessPlus && businessPlusCloudflareFree ? tier.cloudflareDiscountedPrice : tier.price;

            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-[#122311] text-white border-2 border-[#444F24] shadow-xl z-10'
                    : 'bg-[#F9FAF8] border border-[#E4E8DE] hover:border-[#444F24] shadow-xs'
                }`}
              >
                {/* Popular / Eligible Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#AD8820] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider ${
                        isHighlighted ? 'text-[#AD8820]' : 'text-[#444F24]'
                      }`}
                    >
                      {tier.name}
                    </span>
                    <span
                      className={`text-[11px] font-mono ${
                        isHighlighted ? 'text-[#B6BBD9]' : 'text-[#7A846B]'
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      {tier.referencePrice && (
                        <span
                          className={`text-base font-mono line-through ${
                            isHighlighted ? 'text-[#B6BBD9]/60' : 'text-[#7A846B]'
                          }`}
                        >
                          {tier.referencePrice}
                        </span>
                      )}
                      <span className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                        {displayPrice}
                      </span>
                    </div>

                    {/* Running Cost Benefit Pill */}
                    <div
                      className={`mt-2 py-1 px-2.5 rounded-lg text-xs font-mono inline-block ${
                        isHighlighted
                          ? 'bg-[#1e341c] text-[#AD8820] border border-[#444F24]'
                          : 'bg-[#F2F5ED] text-[#444F24] border border-[#C2D5C8]'
                      }`}
                    >
                      Running Cost: <strong>{tier.runningCostBenefit}</strong>
                    </div>

                    {/* Interactive Cloudflare Toggle for Business Plus */}
                    {isBusinessPlus && (
                      <div className="mt-4 p-3 rounded-2xl bg-[#1e341c] border border-[#444F24] text-xs">
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={businessPlusCloudflareFree}
                            onChange={(e) => setBusinessPlusCloudflareFree(e.target.checked)}
                            className="mt-0.5 rounded accent-[#AD8820] cursor-pointer"
                          />
                          <span className="text-[11px] text-[#B6BBD9]">
                            Apply <strong>18% EdgeLab discount</strong> with Cloudflare Workers Free hosting ({tier.cloudflareDiscountedPrice})
                          </span>
                        </label>
                        {businessPlusCloudflareFree && (
                          <div className="mt-2 text-[10px] text-[#AD8820] font-mono">
                            Discount: {tier.cloudflareDiscountAmount} applied.
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <p
                    className={`text-xs mb-6 leading-relaxed font-light ${
                      isHighlighted ? 'text-[#B6BBD9]' : 'text-[#565F45]'
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Deliverables */}
                  <div
                    className={`space-y-2.5 pt-4 border-t mb-8 ${
                      isHighlighted ? 'border-[#444F24]' : 'border-[#E4E8DE]'
                    }`}
                  >
                    {tier.deliverables.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isHighlighted ? 'text-[#AD8820]' : 'text-[#444F24]'
                          }`}
                        />
                        <span className={isHighlighted ? 'text-[#E4E8DE]' : 'text-[#212413]'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={getWhatsAppUrl(`Hi EdgeLab, I'd like to book the ${tier.name} package (${displayPrice}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full min-h-[46px] inline-flex items-center justify-center py-3.5 px-4 rounded-xl text-xs font-bold font-mono text-center transition-all shadow-xs active:scale-[0.98] ${
                      isHighlighted
                        ? 'bg-[#444F24] hover:bg-[#52602c] text-white border border-[#52602c]'
                        : 'bg-white hover:bg-[#F2F5ED] text-[#212413] border border-[#E4E8DE] hover:border-[#444F24]'
                    }`}
                  >
                    <span>{tier.cta} →</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cloudflare Calculator Promotional Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#122311] text-white border border-[#444F24] mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#AD8820]">
              <Server className="w-4 h-4 text-[#F6821F]" />
              <span>CLOUDFLARE WORKERS CAMPAIGN</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white">
              Want to see if your backend can run on Cloudflare Workers Free?
            </h3>
            <p className="text-xs sm:text-sm text-[#B6BBD9] font-light">
              Use our interactive calculator to estimate daily backend requests, explore plan limits, and verify your hosting eligibility.
            </p>
          </div>

          <Link
            href="/cloudflare-workers-calculator"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold tracking-wide transition-all shrink-0 border border-[#52602c] active:scale-[0.98]"
          >
            <span>Launch Cloudflare Calculator</span>
            <ArrowRight className="w-4 h-4 text-[#B6BBD9]" />
          </Link>
        </div>

        {/* Pricing Terms & Disclosures */}
        <div className="p-6 rounded-3xl bg-[#F9FAF8] border border-[#E4E8DE] mb-16 text-xs text-[#565F45] space-y-2">
          <h4 className="font-serif font-bold text-sm text-[#212413]">Official Pricing Conditions:</h4>
          <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
            <li><strong>Starter:</strong> {starterTier?.price} one-time. Standard running cost is {monthlyRunningCost}/month according to the agreed service scope.</li>
            <li><strong>Business Plus:</strong> {businessPlusTier?.price} one-time. First 3 months of running cost included. Standard running cost of {monthlyRunningCost}/month begins after the included period. The 18% Cloudflare promotion applies only if Cloudflare Workers Free hosting is selected for this qualifying purchase above {cloudflarePromo.qualifyingThresholdFormatted}.</li>
            <li><strong>EdgeCare:</strong> {edgeCareTier?.price} one-time. First 6 months of running cost included. Standard running cost of {monthlyRunningCost}/month begins after the included period.</li>
            <li><strong>EdgeLab Ultimate:</strong> {ultimateTier?.price} one-time. Running cost is free for the lifetime of the qualifying service agreement, subject to clear written terms. Meta advertising spend must be paid separately by the client. External expenses (domains, external hosting, email services, premium software, paid AI usage) are separate.</li>
          </ul>
        </div>

        {/* Pricing FAQ */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#212413] tracking-tight">
              Investment &amp; Service FAQ
            </h2>
            <p className="text-xs text-[#565F45] mt-1">
              Transparent answers to common investment questions.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#F9FAF8] border border-[#E4E8DE] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-sm text-[#212413]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#565F45] transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-[#444F24]' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-[#565F45] leading-relaxed border-t border-[#E4E8DE]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </PricingSectionObserver>
  );
}
