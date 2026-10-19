'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Server, ShieldCheck, Zap, Calculator } from 'lucide-react';

export const CloudflareCampaignSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#122311] text-white relative overflow-hidden border-b border-[#444F24]">
      {/* Restrained Cloudflare Campaign Subtle Lighting */}
      <div 
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[350px] bg-[#F6821F]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left 7 cols: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e341c] border border-[#444F24] text-xs font-mono text-[#B6BBD9]">
              <span className="w-2 h-2 rounded-full bg-[#F6821F] animate-pulse" />
              <span>CLOUDFLARE WORKERS CAMPAIGN &bull; HOSTING ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.12]">
              Could Your Website Backend Run on a Free Tier?
            </h2>

            <p className="text-base sm:text-lg text-[#B6BBD9] leading-relaxed font-light">
              Estimate your daily backend request usage and understand whether Cloudflare Workers Free may suit your website&apos;s workload.
            </p>

            <p className="text-xs text-[#90844A] leading-relaxed">
              *Free-tier suitability depends on your actual workload, usage limits and external service costs (such as separate databases, third-party APIs, and domain registration).
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/cloudflare-workers-calculator"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold tracking-wide transition-all shadow-md group border border-[#52602c]"
              >
                <span>Calculate My Usage</span>
                <ArrowRight className="w-4 h-4 text-[#B6BBD9] transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/cloudflare-workers-calculator#comparison"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1e341c] hover:bg-[#284426] border border-[#444F24] text-[#B6BBD9] hover:text-white text-xs font-medium transition-all"
              >
                <span>Understand Free vs Paid</span>
              </Link>
            </div>
          </div>

          {/* Right 5 cols: Interactive Preview Teaser Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1e341c] border border-[#444F24] shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#444F24]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B6BBD9]">
                  <Calculator className="w-4 h-4 text-[#AD8820]" />
                  <span>USAGE ESTIMATOR PREVIEW</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#F6821F]/20 text-[#F6821F] text-[10px] font-mono font-bold">
                  100k Req/Day Quota
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#B6BBD9] mb-1">
                    <span>Baseline Sample: 1,000 Visitors / Day</span>
                    <span className="text-white font-bold">~2,350 Requests</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#122311] rounded-full overflow-hidden p-0.5 border border-[#444F24]">
                    <div className="h-full bg-emerald-400 rounded-full w-[2.4%]" />
                  </div>
                  <span className="text-[10px] text-[#90844A] mt-1 block">
                    Uses only 2.4% of the Free daily quota.
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#122311] border border-[#444F24] text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#AD8820] shrink-0" />
                    <span>Special EdgeLab Promotion</span>
                  </div>
                  <p className="text-[11px] text-[#B6BBD9] leading-relaxed">
                    Select eligible Cloudflare Workers Free hosting with Business Plus and receive <strong>18% off</strong> our qualifying service fee (₹12,299.18).
                  </p>
                </div>
              </div>

              <Link
                href="/cloudflare-workers-calculator"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold transition-all"
              >
                <span>Launch Interactive Calculator</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B6BBD9]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
