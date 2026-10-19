'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Server, ShieldCheck, Zap, Calculator } from 'lucide-react';

export const CloudflareCampaignSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0D1017] text-white relative overflow-hidden border-b border-white/10">
      {/* Official Cloudflare Theme Ambient Glow */}
      <div 
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[400px] bg-[#F6821F]/15 rounded-full blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#B6BBD9]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left 7 cols: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B24] border border-[#F6821F]/40 text-xs font-mono text-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F6821F] animate-pulse" />
              <span>CLOUDFLARE WORKERS CAMPAIGN &bull; HOSTING ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.12]">
              Could Your Website Backend Run on a Free Tier?
            </h2>

            <p className="text-base sm:text-lg text-[#B6BBD9]/90 leading-relaxed font-light">
              Estimate your daily backend request usage and understand whether Cloudflare Workers Free may suit your website&apos;s workload.
            </p>

            <p className="text-xs text-[#AD8820] leading-relaxed">
              *Free-tier suitability depends on your actual workload, usage limits and external service costs (such as separate databases, third-party APIs, and domain registration).
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/cloudflare-workers-calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[46px] rounded-full bg-[#F6821F] hover:bg-[#ff9538] text-white text-xs font-bold tracking-wide transition-all shadow-[0_4px_25px_rgba(246,130,31,0.25)] group active:scale-[0.98]"
              >
                <span>Calculate My Usage</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/cloudflare-workers-calculator#comparison"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-full bg-[#181B24] hover:bg-[#232733] border border-[#B6BBD9]/30 text-[#B6BBD9] hover:text-white text-xs font-medium transition-all active:scale-[0.98]"
              >
                <span>Understand Free vs Paid</span>
              </Link>
            </div>
          </div>

          {/* Right 5 cols: Interactive Preview Teaser Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#13161F] border border-[#F6821F]/30 hover:border-[#F6821F] transition-all shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B6BBD9]">
                  <Calculator className="w-4 h-4 text-[#F6821F]" />
                  <span>USAGE ESTIMATOR PREVIEW</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#F6821F] text-white text-[10px] font-mono font-bold">
                  100k Req/Day Quota
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#B6BBD9] mb-1">
                    <span>Baseline Sample: 1,000 Visitors / Day</span>
                    <span className="text-white font-bold">~2,350 Requests</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#0D1017] rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-[#F6821F] rounded-full w-[2.4%]" />
                  </div>
                  <span className="text-[10px] text-[#AD8820] mt-1 block">
                    Uses only 2.4% of the Free daily quota.
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#181B24] border border-white/10 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#AD8820] shrink-0" />
                    <span>Special EdgeLab Promotion</span>
                  </div>
                  <p className="text-[11px] text-[#B6BBD9] leading-relaxed">
                    Select eligible Cloudflare Workers Free hosting with Business Plus and receive <strong className="text-white">18% off</strong> our qualifying service fee (<span className="text-[#AD8820] font-bold">₹12,299.18</span>).
                  </p>
                </div>
              </div>

              <Link
                href="/cloudflare-workers-calculator"
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#F6821F] hover:bg-[#ff9538] text-white text-xs font-bold transition-all shadow-md active:scale-[0.98]"
              >
                <span>Launch Interactive Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
