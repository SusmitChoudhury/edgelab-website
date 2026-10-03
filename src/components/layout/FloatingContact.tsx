'use client';

import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl, CONTACT } from '@/config/site';
import { MessageSquare, Phone, Mail, X } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded quick contact drawer */}
      {isOpen && (
        <div className="mb-3 p-4 bg-white/95 backdrop-blur-xl border border-[#D5E5DC] rounded-2xl shadow-[0_12px_36px_rgba(10,38,26,0.14)] w-72 transition-all animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#EDF4F0] mb-3">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#14573D] font-bold">Direct Channels</div>
              <div className="text-[11px] text-[#556960]">Direct response within 30 mins</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#6A7E74] hover:text-[#182620] rounded-full hover:bg-[#F2F7F4]"
              aria-label="Close contact drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I'd like to talk directly about my business presence.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#EFF8F3] hover:bg-[#E3F2E9] border border-[#CDE5D8] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#14573D] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#14573D]">WhatsApp Direct</div>
                <div className="text-[11px] text-[#4F685C] truncate">+91 60001 56107</div>
              </div>
            </a>

            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F5FAF7] border border-transparent hover:border-[#DFEBE4] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAEFEA] flex items-center justify-center text-[#1E332A] shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#17241E]">Direct Call</div>
                <div className="text-[11px] text-[#5F7369] truncate">{CONTACT.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F5FAF7] border border-transparent hover:border-[#DFEBE4] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAEFEA] flex items-center justify-center text-[#1E332A] shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#17241E]">Official Email</div>
                <div className="text-[11px] text-[#5F7369] truncate">{CONTACT.email}</div>
              </div>
            </a>

            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F5FAF7] border border-transparent hover:border-[#DFEBE4] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAEFEA] flex items-center justify-center text-[#1E332A] shrink-0 group-hover:scale-105 transition-transform">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#17241E]">Instagram</div>
                <div className="text-[11px] text-[#5F7369] truncate">{CONTACT.instagramHandle}</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-[#0F382A] hover:bg-[#154E3A] text-white rounded-full shadow-[0_6px_24px_rgba(15,56,42,0.28)] hover:shadow-[0_8px_30px_rgba(15,56,42,0.38)] transition-all transform hover:scale-105 group"
        aria-label="Contact EdgeLab"
        aria-expanded={isOpen}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
        </span>
        <span className="text-xs font-semibold tracking-wide">Talk to EdgeLab</span>
        <MessageSquare className="w-4 h-4 ml-0.5 text-[#A7E8C7] group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
