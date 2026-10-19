'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '../ui/BrandLogo';
import { CurrencySwitcher } from '../ui/CurrencySwitcher';
import { NAVIGATION_LINKS, getWhatsAppUrl, CONTACT } from '@/config/site';
import { MessageSquare, ArrowRight, Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#122311]/95 backdrop-blur-xl border-b border-[#444F24]/40 py-3 shadow-md'
          : 'bg-[#122311] backdrop-blur-md border-b border-[#444F24]/30 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* ── Left Zone: Brand Logo ── */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <BrandLogo size="md" href="/" withTagline={false} theme="dark" />
          </div>

          {/* ── Center Zone: Desktop Navigation (>= 1024px) ── */}
          <nav
            className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 flex-1 mx-2"
            aria-label="Main Navigation"
          >
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] xl:text-sm font-semibold transition-all tracking-tight relative py-1 px-1 whitespace-nowrap group ${
                    isActive ? 'text-white' : 'text-[#B6BBD9] hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-1 right-1 h-0.5 bg-[#AD8820] transition-all duration-300 rounded-full ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Right Zone: Actions (Desktop >= 1024px) ── */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            {/* Global Currency Switcher */}
            <CurrencySwitcher size="sm" />

            {/* Quick WhatsApp Link */}
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss building our digital presence.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold text-[#B6BBD9] hover:text-white bg-[#1e341c] hover:bg-[#254222] border border-[#444F24] rounded-full transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#AD8820]" />
              <span>WhatsApp</span>
            </a>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 text-xs xl:text-sm font-bold text-white bg-[#444F24] hover:bg-[#52602c] rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap group border border-[#52602c]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#B6BBD9]" />
            </Link>
          </div>

          {/* ── Mobile / Tablet Zone (< 1024px) ── */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            {/* Mobile Header Currency Switcher */}
            <CurrencySwitcher size="sm" />

            {/* Quick Start Button */}
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#444F24] rounded-full shadow-xs whitespace-nowrap"
            >
              Discuss
            </Link>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#B6BBD9] focus:outline-none rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile / Tablet Full-Screen Drawer (< 1024px) ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full h-[calc(100dvh-100%)] bg-[#0D0F14]/98 backdrop-blur-2xl border-t border-white/10 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto z-50 animate-fadeIn pb-28">
          <div className="space-y-3 pt-2">
            {/* Mobile Drawer Currency Switcher Row */}
            <div className="flex items-center justify-between py-2 px-3 mb-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-[#B6BBD9] font-medium">Select Currency:</span>
              <CurrencySwitcher size="sm" />
            </div>

            <div className="text-[11px] uppercase tracking-widest text-[#AD8820] font-mono mb-2 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820] animate-pulse" />
              <span>Navigation Menu</span>
            </div>
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isCalculator = link.href === '/cloudflare-workers-calculator';
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-lg font-sans font-bold py-3 px-3 rounded-xl border border-transparent transition-all ${
                    isActive 
                      ? 'text-white bg-[#1A1D24] border-white/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820]" />}
                    <span>{link.name}</span>
                  </div>
                  {isCalculator && (
                    <span className="px-2 py-0.5 rounded-full bg-[#F6821F] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                      18% OFF
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 space-y-3 pb-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white bg-[#444F24] hover:bg-[#53612c] rounded-xl shadow-md transition-all border border-[#52602c]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 text-[#B6BBD9]" />
            </Link>

            <a
              href={getWhatsAppUrl("Hi EdgeLab, I want to discuss building our digital presence.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-mono font-medium text-white bg-[#181B24] border border-white/10 rounded-xl hover:bg-[#232733] transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#AD8820]" />
              <span>Talk on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs font-mono text-[#B6BBD9]">
              <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-1 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#AD8820]" />
                <span>{CONTACT.phoneDisplay}</span>
              </a>
              <span>•</span>
              <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {CONTACT.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile Sticky Bottom Conversion Bar (< 768px) ── */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0F14]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.4)] pb-safe"
        aria-label="Mobile Quick Action Bar"
      >
        <a
          href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss a project on WhatsApp.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#181B24] border border-white/10 text-white text-xs font-mono font-semibold active:scale-95 transition-all shadow-xs"
        >
          <MessageSquare className="w-4 h-4 text-[#AD8820]" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#444F24] border border-[#52602c] text-white text-xs font-bold active:scale-95 transition-all shadow-md"
        >
          <span>Discuss Project</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#B6BBD9]" />
        </Link>
      </div>
    </header>
  );
};
