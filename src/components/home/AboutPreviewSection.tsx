'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { BRAND, CONTACT, SITE_URL, getWhatsAppUrl } from '@/config/site';

export const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F9FAF8] text-[#212413] border-b border-[#E4E8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 7 cols: About Mission & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4E8DE] text-[#444F24] text-xs font-mono font-semibold uppercase tracking-wider">
              06 &bull; About EdgeLab
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#212413] tracking-tight leading-[1.12]">
              A Creative Technology Studio Built for Practical Business Impact.
            </h2>

            <p className="text-base text-[#565F45] leading-relaxed font-light">
              EdgeLab was founded on a simple premise: businesses shouldn&apos;t have to juggle fragmented freelancers, generic website templates, or overpriced retainers that fail to generate enquiries.
            </p>

            <p className="text-sm text-[#565F45] leading-relaxed font-light">
              We operate as a complete digital partner—combining custom web engineering, on-location commercial photography, high-retention short-form video reels, and performance marketing under one accountable roof.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122311] hover:bg-[#444F24] text-white text-xs font-semibold tracking-wide transition-all shadow-xs"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#AD8820]" />
              </Link>
            </div>
          </div>

          {/* Right 5 cols: Verified Agency Contact Card */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E4E8DE] shadow-xs space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#AD8820] font-bold mb-1">
                  VERIFIED DIRECT CONTACT
                </div>
                <h3 className="text-xl font-serif font-bold text-[#212413]">
                  Connect with EdgeLab
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Phone / WhatsApp */}
                <a
                  href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss bringing my business online.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#F2F5ED] hover:bg-[#E4E8DE] border border-[#C2D5C8] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#444F24] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#AD8820]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#565F45] block">PHONE &amp; WHATSAPP</span>
                    <span className="font-mono font-bold text-[#212413] group-hover:text-[#444F24]">
                      {CONTACT.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#F9FAF8] hover:bg-[#F2F5ED] border border-[#E4E8DE] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#122311] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#AD8820]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#565F45] block">OFFICIAL EMAIL</span>
                    <span className="font-mono font-semibold text-[#212413] group-hover:text-[#444F24]">
                      {CONTACT.email}
                    </span>
                  </div>
                </a>

                {/* Website */}
                <a
                  href={SITE_URL}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#F9FAF8] hover:bg-[#F2F5ED] border border-[#E4E8DE] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#122311] text-white flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-[#AD8820]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#565F45] block">OFFICIAL DOMAIN</span>
                    <span className="font-mono font-semibold text-[#212413] group-hover:text-[#444F24]">
                      https://edge-lab.dev
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#F9FAF8] hover:bg-[#F2F5ED] border border-[#E4E8DE] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#122311] text-white flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-4 h-4 text-[#AD8820]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#565F45] block">INSTAGRAM</span>
                    <span className="font-mono font-semibold text-[#212413] group-hover:text-[#444F24]">
                      {CONTACT.instagramHandle}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
