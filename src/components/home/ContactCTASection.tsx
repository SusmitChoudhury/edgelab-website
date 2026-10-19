'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Phone, Mail } from 'lucide-react';
import { CONTACT, getWhatsAppUrl } from '@/config/site';

export const ContactCTASection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0D0F14] text-white relative overflow-hidden">
      {/* Multi-tone Ambient Glow (Harvest Gold + Mist + Forest) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#AD8820]/10 rounded-full blur-[170px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-5 left-1/4 w-[500px] h-[300px] bg-[#B6BBD9]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B24] border border-[#B6BBD9]/30 text-xs font-mono text-[#B6BBD9] mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#AD8820] animate-pulse" />
          <span>START YOUR DIGITAL TRANSFORMATION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-[1.08] mb-6">
          Ready to Build a Website that Turns Attention into Enquiries?
        </h2>

        <p className="text-base sm:text-lg text-[#B6BBD9]/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Tell us about your brand, your goals, and your timeline. We will prepare a clear architectural recommendation and transparent scope.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss a project for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#444F24] hover:bg-[#53612c] text-white text-sm font-semibold tracking-wide transition-all shadow-lg border border-[#52602c] group"
          >
            <MessageSquare className="w-4 h-4 text-[#AD8820]" />
            <span>Chat on WhatsApp Directly</span>
            <ArrowRight className="w-4 h-4 text-[#B6BBD9] transition-transform group-hover:translate-x-1" />
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#181B24] hover:bg-[#232733] border border-[#B6BBD9]/30 text-[#B6BBD9] hover:text-white text-sm font-medium transition-all"
          >
            <span>Submit Detailed Project Brief</span>
          </Link>
        </div>

        {/* Quick Contact Line */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#B6BBD9] pt-8 border-t border-white/10">
          <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#AD8820]" />
            <span>{CONTACT.phoneDisplay}</span>
          </a>
          <span>&bull;</span>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#AD8820]" />
            <span>{CONTACT.email}</span>
          </a>
          <span>&bull;</span>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            {CONTACT.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
};
