'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Heart, 
  MessageCircle, 
  Bookmark,
  Share2
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const SocialMediaSection: React.FC = () => {
  const socialFeed = [
    { image: '/assets/projects/restaurant/hero.png', title: 'Signature Culinary Craft', tag: 'Reel' },
    { image: '/assets/projects/noire/look-emerald.jpg', title: 'Handloom Atelier Narrative', tag: 'Post' },
    { image: '/assets/projects/restaurant/dining.png', title: 'Friday Night Ambiance', tag: 'Story' },
    { image: '/assets/projects/noire/arc-kalyani.jpg', title: 'Heritage Silk Drape', tag: 'Carousel' },
    { image: '/assets/projects/restaurant/pizza.png', title: 'Woodfired Oven Process', tag: 'Reel' },
    { image: '/assets/projects/restaurant/cocktail.png', title: 'Botanical Mixology', tag: 'Post' },
  ];

  const pillars = [
    { title: 'Aesthetic Feed Architecture', desc: 'A visually cohesive grid where every photo, palette, and typography element feels intentionally curated.' },
    { title: 'Strategic Content Planning', desc: 'Monthly content calendars structured around your menu specials, seasonal campaigns, and operational hours.' },
    { title: 'Persuasive Copywriting', desc: 'Engaging, human captions that tell the story of your craftsmanship and invite real conversations.' },
    { title: 'Zero Work for You', desc: 'We film, edit, design, caption, and schedule. You never have to wonder what to post on a Tuesday afternoon.' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F6FAF7] border-y border-[#E2EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            05 / Social Media Direction
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.12] mb-6">
            Your website is only the beginning.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            Customers check your Instagram before they visit your doors. We build and manage an authentic social ecosystem that reflects the exact quality of your physical space.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Realistic Interactive Social Feed Mockup (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#DFEBE3] shadow-sm">
            {/* Feed Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#EDF4F0] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0F382A] text-[#A7E8C7] flex items-center justify-center font-bold text-sm border-2 border-[#1A5F44]">
                  EL
                </div>
                <div>
                  <div className="text-sm font-bold text-[#14261E] flex items-center gap-1.5">
                    <span>brand.official</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#18553D] text-white flex items-center justify-center text-[9px]">
                      ✓
                    </span>
                  </div>
                  <div className="text-xs text-[#637C6E]">Curated & Managed by EdgeLab</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#EFF8F3] text-[#14573D] text-xs font-mono font-medium">
                  Active Feed
                </span>
              </div>
            </div>

            {/* 6-Grid Realistic Content Display */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
              {socialFeed.map((item, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden bg-[#EDF4F0] group border border-[#DFEDE4]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[#071F16]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center">
                    <span className="text-[10px] font-mono uppercase bg-[#14573D] px-2 py-0.5 rounded-full mb-1">
                      {item.tag}
                    </span>
                    <span className="text-xs font-medium leading-tight">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#F6FAF7] border border-[#DEEDE3] flex items-center justify-between text-xs text-[#546C60]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#18553D]" />
                <span>Scheduled 3x Weekly with Custom Captions</span>
              </span>
              <span className="font-mono text-[#18553D] font-semibold">100% On-Brand</span>
            </div>
          </div>

          {/* Right Column: Narrative & Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#0F1713] leading-snug">
              Consistent, aesthetic storytelling that turns scrollers into regulars.
            </h3>

            <p className="text-sm sm:text-base text-[#465A50] leading-relaxed">
              We don’t post generic stock graphics or make false promises about &quot;viral follower hacks.&quot; We shoot real content from your kitchen, salon, or store and publish with deliberate craftsmanship.
            </p>

            <div className="space-y-4 pt-2">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#18553D] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[#14261E]">{p.title}</div>
                    <div className="text-xs text-[#597063] mt-0.5 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F382A] hover:bg-[#164D3A] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
              >
                <span>MANAGE MY SOCIALS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss social media management for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-white hover:bg-[#F2F7F4] text-[#164D3A] text-xs sm:text-sm font-semibold border border-[#CFE1D6] transition-all"
              >
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
