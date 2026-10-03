'use client';

import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const ProblemSection: React.FC = () => {
  const fragmentedRoles = [
    { title: 'Freelance Web Developer', pain: 'Disappears after launch; leaves you with broken plugins' },
    { title: 'Template Graphic Designer', pain: 'Delivers flat graphics that don’t fit your actual code' },
    { title: 'Local Photographer', pain: 'Shoots generic photos without understanding web layouts' },
    { title: 'Social Media Agency', pain: 'Posts meaningless stock quotes without real visuals' },
    { title: 'Video Reel Editor', pain: 'Waits for footage you don’t have time to shoot' },
    { title: 'Marketing Consultant', pain: 'Hands you a PDF deck but implements nothing' },
    { title: 'Maintenance Guy', pain: 'Charges hourly just to update your restaurant menu pricing' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F6FAF7] border-y border-[#E2EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            01 / The Business Dilemma
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.15] mb-6">
            Your business is one thing.{' '}
            <span className="italic font-light text-[#1B6347] block sm:inline">
              Your digital presence shouldn&apos;t be seven.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            Running a business is demanding enough without having to manage seven different freelancers who never speak to each other.
          </p>
        </div>

        {/* Visual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Fragmented Reality (Left Column - 6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E1ECE5] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F0F5F2] mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#735A2B] font-bold">
                    The Fragmented Way
                  </span>
                </div>
                <span className="text-xs font-mono text-[#8C9E94]">7 Disconnected Vendors</span>
              </div>

              <div className="space-y-3.5 mb-8">
                {fragmentedRoles.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAFBFB] border border-[#EDF3EF] flex items-start gap-3 transition-colors hover:bg-[#F5F8F6]"
                  >
                    <XCircle className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#1F2C25]">{item.title}</div>
                      <div className="text-[11px] text-[#697B72] leading-tight mt-0.5">{item.pain}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF9F5] border border-[#FED7AA]/60 text-xs text-[#9A3412]">
              <span className="font-semibold">The Result:</span> Brand inconsistency, finger-pointing when something breaks, and weeks wasted coordinating.
            </div>
          </div>

          {/* The EdgeLab System (Right Column - 6 cols) */}
          <div className="lg:col-span-6 bg-[#0E3527] text-white rounded-3xl p-6 sm:p-10 border border-[#174F3B] shadow-[0_20px_50px_rgba(10,38,26,0.22)] flex flex-col justify-between relative overflow-hidden">
            {/* Ambient emerald illumination */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1D7453]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-[#1A4F3B] mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A7E8C7] font-bold">
                    The EdgeLab Solution
                  </span>
                </div>
                <span className="text-xs font-mono text-[#8BB7A2]">One Dedicated Team</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6 leading-snug">
                One connected partner that designs, builds, shoots, and manages everything.
              </h3>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">Zero Coordinator Overhead</div>
                    <div className="text-xs text-[#A9C7B8] mt-0.5">
                      Your website developers, camera crew, and social managers sit in the exact same room.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">Consistent High-End Aesthetics</div>
                    <div className="text-xs text-[#A9C7B8] mt-0.5">
                      Your reels match your photography. Your photography matches your website. Your brand looks like an institution.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">Lifelong Operational Support</div>
                    <div className="text-xs text-[#A9C7B8] mt-0.5">
                      Need a menu item changed or a seasonal announcement? Drop a message on WhatsApp. Done within hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#1A4F3B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#A9C7B8] text-center sm:text-left">
                Built for busy owners who value craftsmanship and peace of mind.
              </div>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0F382A] text-xs font-bold hover:bg-[#EFF8F3] transition-colors shrink-0"
              >
                <span>SIMPLIFY MY PRESENCE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
