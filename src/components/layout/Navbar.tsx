'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '../ui/BrandLogo';
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
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#142017]/95 backdrop-blur-xl border-b border-[#25392B] py-3 shadow-[0_10px_35px_-5px_rgba(10,20,13,0.6)]'
          : 'bg-[#162319] backdrop-blur-md border-b border-[#223527] py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* ── Left Zone: Brand Logo & Optional Wide-Screen Beacon ── */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <BrandLogo size="md" href="/" withTagline={false} theme="dark" />

            {/* Operational badge — Only on wide desktop (>= 1400px) to prevent crowded links */}
            <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C2C20] border border-[#2B4432] text-xs font-mono text-[#A7F3D0]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="font-semibold tracking-wide">Accepting New Partners Q4</span>
            </div>
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
                    isActive ? 'text-white' : 'text-[#C5D8CB] hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-1 right-1 h-0.5 bg-[#10B981] transition-all duration-300 rounded-full ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Right Zone: Actions (Desktop >= 1024px) ── */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            {/* Quick WhatsApp Link */}
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold text-[#E2EFE6] bg-[#1E3023] hover:bg-[#283F2E] border border-[#2F4936] rounded-full transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
              <span>WhatsApp</span>
            </a>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 text-xs xl:text-sm font-bold text-[#142017] bg-white hover:bg-[#EAF3EE] rounded-full shadow-[0_4px_18px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap group"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#142017]" />
            </Link>
          </div>

          {/* ── Mobile / Tablet Zone (< 1024px) ── */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            {/* WhatsApp Icon for mobile */}
            <a
              href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-[#A7F3D0] hover:text-white bg-[#1E3023] border border-[#2F4936] rounded-full"
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
            </a>

            {/* Quick Start Button */}
            <Link
              href="/contact"
              className="px-3.5 py-1.5 text-xs font-bold text-[#142017] bg-white rounded-full shadow-2xs whitespace-nowrap"
            >
              Start
            </Link>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#A7F3D0] focus:outline-none rounded-lg"
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
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#142017]/98 backdrop-blur-2xl border-t border-[#263C2D] p-6 flex flex-col justify-between overflow-y-auto z-50 animate-fadeIn">
          <div className="space-y-3 pt-2">
            <div className="text-xs uppercase tracking-widest text-[#10B981] font-mono mb-3 font-bold">
              Navigation Menu
            </div>
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-sans font-bold py-2.5 border-b border-[#1E3023] transition-colors ${
                    isActive ? 'text-[#10B981] pl-2 border-l-2 border-l-[#10B981]' : 'text-white hover:text-[#A7F3D0]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 space-y-3 pb-8">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-[#142017] bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#EAF3EE] transition-all"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 text-[#142017]" />
            </Link>

            <a
              href={getWhatsAppUrl("Hi EdgeLab, I want to talk about my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-mono font-medium text-white bg-[#1E3023] border border-[#2F4936] rounded-xl hover:bg-[#283F2E] transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>Talk on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-3 text-xs font-mono text-[#A7D3B5]">
              <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-1 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#10B981]" />
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
    </header>
  );
};
