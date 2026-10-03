'use client';

import React, { useState } from 'react';
import { 
  Building, 
  UtensilsCrossed, 
  ShoppingBag, 
  Layers, 
  Palette, 
  Cpu, 
  CreditCard, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Search,
  Smartphone
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const WebsiteDevelopment: React.FC = () => {
  const capabilities = [
    {
      title: 'Business Websites',
      category: 'Corporate & Services',
      icon: Building,
      desc: 'Clean, authoritative web platforms engineered to establish instant trust and capture high-value customer inquiries.',
      idealFor: 'Law firms, clinics, consultancies, architectural studios, and enterprises.',
    },
    {
      title: 'Restaurant & Café Systems',
      category: 'Hospitality',
      icon: UtensilsCrossed,
      desc: 'Table QR code access, visual digital menus with dietary filters, realtime kitchen tickets, and staff ordering portals.',
      idealFor: 'Restaurants, specialty cafés, cocktail lounges, and cloud kitchens.',
    },
    {
      title: 'E-Commerce & Digital Boutiques',
      category: 'Retail & Fashion',
      icon: ShoppingBag,
      desc: 'Editorial visual commerce experiences inspired by high-fashion runways with friction-free cart and payment checkouts.',
      idealFor: 'Apparel brands, jewelry ateliérs, artisanal goods, and direct-to-consumer labels.',
    },
    {
      title: 'High-Impact Landing Pages',
      category: 'Campaigns & Launches',
      icon: Layers,
      desc: 'Laser-focused single-page destinations engineered with psychological hierarchy to maximize campaign conversion.',
      idealFor: 'Product launches, real estate pre-bookings, and targeted ad campaigns.',
    },
    {
      title: 'Portfolio & Creative Websites',
      category: 'Editorial & Exhibition',
      icon: Palette,
      desc: 'Cinematic visual spaces designed to showcase photography, architectural designs, and creative portfolios in high definition.',
      idealFor: 'Photographers, interior designers, artists, and production agencies.',
    },
    {
      title: 'Custom Customer & Admin Portals',
      category: 'Enterprise Software',
      icon: Cpu,
      desc: 'Secure role-based systems with live databases, client document hubs, staff management, and internal operational workflows.',
      idealFor: 'Businesses needing specialized back-office automation.',
    },
    {
      title: 'Digital Ordering & Booking Engines',
      category: 'Self-Service Workflows',
      icon: CreditCard,
      desc: 'Direct customer reservation, custom ticket generation, slot scheduling, and direct payment integrations.',
      idealFor: 'Experience centers, wellness studios, event venues, and salons.',
    },
  ];

  const [activeCap, setActiveCap] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            04 / Core Engineering Capability
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.12] mb-6">
            Websites engineered for performance, not templates.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            Every line of code is written by hand. We build responsive, lightning-fast digital destinations that convert visitors into paying clients.
          </p>
        </div>

        {/* Technical Benchmarks Bar */}
        <div className="mb-14 p-6 rounded-2xl bg-[#F6FAF7] border border-[#DEEDE3] grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-[#18553D] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase text-[#698174]">Speed</div>
              <div className="text-sm font-bold text-[#14261E]">Sub-Second Loading</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-[#18553D] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase text-[#698174]">Responsiveness</div>
              <div className="text-sm font-bold text-[#14261E]">Flawless On Mobile</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Search className="w-5 h-5 text-[#18553D] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase text-[#698174]">SEO Architecture</div>
              <div className="text-sm font-bold text-[#14261E]">Clean Semantic HTML</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#18553D] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase text-[#698174]">Longevity</div>
              <div className="text-sm font-bold text-[#14261E]">Zero Plugin Vulnerability</div>
            </div>
          </div>
        </div>

        {/* Interactive Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#DFEBE3] hover:border-[#1E6044] hover:shadow-[0_8px_24px_rgba(30,96,68,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4EE] text-[#164F38] flex items-center justify-center group-hover:bg-[#0F382A] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#7B9286] uppercase tracking-wider">{cap.category}</span>
                  </div>

                  <h3 className="text-lg font-serif text-[#121A16] font-semibold mb-2 group-hover:text-[#14573D] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#465A50] leading-relaxed mb-4">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0F5F2] text-[11px] text-[#698073]">
                  <span className="font-semibold text-[#164F38]">Ideal for:</span> {cap.idealFor}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Primary CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F382A] text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F7453]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A7E8C7] mb-2 font-semibold">
              Ready to Upgrade Your Web Reality?
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white leading-snug">
              Let&apos;s build a website that gives your business an unfair advantage.
            </h3>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="#enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4ADE80] hover:bg-[#22C55E] text-[#071F16] text-sm font-bold shadow-lg transition-all"
            >
              <span>BUILD MY WEBSITE</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss building a website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full bg-[#144734] hover:bg-[#1A5741] text-xs font-semibold text-[#D1F2E2] border border-[#21674E] transition-colors"
            >
              <span>Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
