'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '../ui/BrandLogo';
import { BRAND, CONTACT, NAVIGATION_LINKS, SITE_URL, getWhatsAppUrl } from '@/config/site';
import { ArrowUp, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { name: 'Website Design & Engineering', href: '/services#web' },
    { name: 'Enterprise Operations & Portals', href: '/services#systems' },
    { name: 'E-Commerce & Digital Ateliers', href: '/services#commerce' },
    { name: 'Social Media Management', href: '/services#social' },
    { name: 'Commercial Studio & Architecture', href: '/services#photo' },
    { name: 'Reels & 4K Vertical Video', href: '/services#video' },
    { name: 'Website Management & Care', href: '/services#management' },
    { name: 'Local Search & SEO Strategy', href: '/services#strategy' },
  ];

  return (
    <footer className="bg-[#121C15] text-[#D8E4DC] border-t border-[#263A2D] pt-20 pb-12 relative overflow-hidden">
      {/* Subtle Olive Ambient Wash */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#263A2D]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" href="/" withTagline={true} />
            <p className="text-xs sm:text-sm text-[#A0B4A7] leading-relaxed max-w-sm pt-2">
              {BRAND.shortDescription}
            </p>
            <div className="pt-2 text-xs font-mono text-[#798E81]">
              Official Domain: <span className="text-[#A7F3D0] font-semibold">{SITE_URL}</span>
            </div>
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A7F3D0] font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#D8E4DC] hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A7F3D0] font-bold">
              Capabilities
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesList.map((srv, idx) => (
                <li key={idx}>
                  <Link href={srv.href} className="text-[#D8E4DC] hover:text-white transition-colors">
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A7F3D0] font-bold">
              Direct Contact
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={getWhatsAppUrl("Hi EdgeLab, I'd like to get in touch.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A7F3D0] hover:text-white transition-colors font-medium font-mono"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: {CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-2 text-[#D8E4DC] hover:text-white transition-colors font-mono"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#A7F3D0]" />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-[#D8E4DC] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#A7F3D0]" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#D8E4DC] hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 shrink-0 text-[#A7F3D0]" />
                  <span>{CONTACT.instagramHandle}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#263A2D] hover:bg-[#344E3E] px-5 py-2.5 rounded-full border border-white/10 shadow-xs transition-all"
              >
                <span>Start a Project</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#798E81]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-[#A7F3D0] hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
