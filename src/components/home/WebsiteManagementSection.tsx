'use client';

import React from 'react';
import { ShieldCheck, RefreshCw, Activity, Clock, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const WebsiteManagementSection: React.FC = () => {
  const pillars = [
    {
      title: 'Updated',
      icon: RefreshCw,
      desc: 'Price changes, seasonal menus, festive hours, and new photography uploaded within hours.',
    },
    {
      title: 'Maintained',
      icon: ShieldCheck,
      desc: 'Cloud servers, security patches, SSL certificates, and domain registrations kept in flawless order.',
    },
    {
      title: 'Improved',
      icon: Activity,
      desc: 'Continuous performance audits, mobile enhancements, and UX tweaks as your business grows.',
    },
    {
      title: 'Monitored',
      icon: Clock,
      desc: '24/7 uptime diagnostics and instant alerts so your customers never hit an error page.',
    },
    {
      title: 'Supported',
      icon: MessageSquare,
      desc: 'Direct priority WhatsApp line to our engineering team. No ticketing bureaucratic delay.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F6FAF7] border-y border-[#E2EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            09 / Ongoing Continuity
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.12] mb-6">
            Launch day isn&apos;t the finish line.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            Most agencies disappear the moment the final invoice is paid. EdgeLab remains your dedicated digital team so your website stays modern, secure, and accurate forever.
          </p>
        </div>

        {/* 5 Continuity Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#DFEBE3] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4EE] text-[#164F38] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif text-[#121A16] font-semibold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#597063] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F0F5F2] text-[10px] font-mono text-[#8C9E94]">
                  Pillar 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-Life Workflow Comparison Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DFEBE3] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-[#18553D] uppercase tracking-wider font-semibold">
              The WhatsApp Quick-Update Experience
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#0F1713] leading-snug">
              Need a menu price changed? Drop a message. Done by dinner.
            </h3>
            <p className="text-sm text-[#465A50] leading-relaxed">
              You shouldn&apos;t have to log into complex WordPress backends or decipher code when you change a dessert item or adjust cocktail hours. Send our team a photo or a text on WhatsApp, and our developers handle the deployment cleanly.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#2A3E33]">
                <CheckCircle2 className="w-4 h-4 text-[#18553D]" />
                <span>Zero login headaches or CMS plugin crashes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2A3E33]">
                <CheckCircle2 className="w-4 h-4 text-[#18553D]" />
                <span>Mobile responsive menu updates across all customer phones</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F382A] hover:bg-[#164D3A] text-white text-xs sm:text-sm font-semibold shadow-md transition-all text-center"
            >
              <span>MANAGE MY WEBSITE</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss ongoing management for my website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#F2F7F4] text-[#164D3A] text-xs sm:text-sm font-semibold border border-[#CFE1D6] transition-all text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to our Support Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
