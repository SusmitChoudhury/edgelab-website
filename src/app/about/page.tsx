'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Mail, 
  Globe, 
  Terminal, 
  Camera, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { BRAND, CONTACT, SITE_URL, WORKSPACE_IMAGES, getWhatsAppUrl } from '@/config/site';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-[#212413] min-h-screen">
      {/* Subtle Background Lighting */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#F2F5ED] via-[#F9FAF8] to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5ED] text-[#444F24] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#C2D5C8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820] animate-pulse" />
            <span>AUTHENTIC STUDIO PROFILE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#212413] tracking-tight leading-[1.05] mb-6">
            About EdgeLab. <span className="italic font-light text-[#444F24]">Craft &amp; Discipline.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#565F45] leading-relaxed font-light">
            We are an independent digital agency and creative technology studio based in India. We design and build websites, produce commercial visual media, and run performance marketing focused on genuine customer enquiries.
          </p>
        </div>

        {/* 2-Column Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#212413] leading-snug">
              Bridging the gap between code quality and visual craft.
            </h2>
            <p className="text-sm sm:text-base text-[#565F45] leading-relaxed font-light">
              Too often, businesses face a frustrating disconnect: developers who build fast software that lacks aesthetic appeal, or marketing agencies that produce creative graphics on sluggish, broken templates.
            </p>
            <p className="text-sm sm:text-base text-[#565F45] leading-relaxed font-light">
              EdgeLab was created to unite these capabilities under one accountable standard. We engineer modern Next.js frontends, shoot authentic brand photography on location, produce short-form video reels, and manage ongoing digital presence with transparency.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/11] rounded-3xl overflow-hidden border border-[#E4E8DE] shadow-md bg-[#122311]">
            <Image
              src="/Image for the Website/Modern EdgeLab Tech Workspace.png"
              alt="EdgeLab Tech Workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#122311]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] font-mono text-[#AD8820] uppercase font-bold tracking-wider">
                EdgeLab Lab &bull; Guwahati, India
              </span>
              <span className="text-sm font-serif font-bold">
                Where engineering, camera optics, and marketing strategy meet.
              </span>
            </div>
          </div>
        </div>

        {/* Workspace & Team Image Gallery (User Requested) */}
        <div className="mb-24">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-[#AD8820] font-bold mb-2">
              INSIDE THE WORKSPACE
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#212413]">
              How We Actually Work
            </h2>
            <p className="text-xs sm:text-sm text-[#565F45] mt-1 font-light">
              Real perspectives from our studio and technical lab during project planning, design, and media production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSPACE_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#F9FAF8] border border-[#E4E8DE] hover:border-[#444F24] overflow-hidden transition-all duration-300 group shadow-xs"
              >
                <div className="relative aspect-[16/11] bg-[#122311] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#122311]/85 backdrop-blur-xs text-[10px] font-mono font-bold text-[#AD8820] uppercase tracking-wider">
                    0{idx + 1} &bull; STUDIO GALLERY
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-[#212413] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#565F45] font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Direct Contact & Company Information */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#122311] text-white border border-[#444F24] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#AD8820] font-bold">
                COMMUNICATION &amp; VERIFICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Work Directly with Our Directors.
              </h3>
              <p className="text-xs sm:text-sm text-[#B6BBD9] leading-relaxed font-light">
                We believe in direct, un-bureaucratic communication. When you work with EdgeLab, you communicate directly with the engineers and creative directors building your presence.
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold transition-all shadow-xs border border-[#52602c]"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#AD8820]" />
                  <span>Start WhatsApp Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B6BBD9]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#1e341c] p-6 rounded-2xl border border-[#444F24] space-y-3 text-xs font-mono">
              <div className="text-[10px] text-[#AD8820] uppercase font-bold tracking-wider mb-2">
                VERIFIED DETAILS
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>{CONTACT.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>{CONTACT.email}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>{SITE_URL}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <InstagramIcon className="w-4 h-4 text-[#AD8820] shrink-0" />
                <span>{CONTACT.instagramHandle}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
