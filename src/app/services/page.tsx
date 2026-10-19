'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare,
  Globe,
  ShoppingBag,
  Cpu,
  Camera,
  Film,
  FileText,
  Share2,
  MapPin,
  TrendingUp,
  Wrench
} from 'lucide-react';
import { CORE_CAPABILITIES, getWhatsAppUrl, CONTACT } from '@/config/site';

export default function ServicesPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev': return <Globe className="w-5 h-5 text-[#444F24]" />;
      case 'ecommerce': return <ShoppingBag className="w-5 h-5 text-[#444F24]" />;
      case 'business-systems': return <Cpu className="w-5 h-5 text-[#444F24]" />;
      case 'photography': return <Camera className="w-5 h-5 text-[#444F24]" />;
      case 'video': return <Film className="w-5 h-5 text-[#444F24]" />;
      case 'content-strategy': return <FileText className="w-5 h-5 text-[#444F24]" />;
      case 'social-media': return <Share2 className="w-5 h-5 text-[#444F24]" />;
      case 'gmb': return <MapPin className="w-5 h-5 text-[#444F24]" />;
      case 'marketing': return <TrendingUp className="w-5 h-5 text-[#444F24]" />;
      case 'maintenance': return <Wrench className="w-5 h-5 text-[#444F24]" />;
      default: return <Sparkles className="w-5 h-5 text-[#444F24]" />;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white text-[#212413] min-h-screen">
      {/* Background Lighting */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#F2F5ED] via-[#F9FAF8] to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5ED] text-[#444F24] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#C2D5C8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AD8820] animate-pulse" />
            <span>DISCIPLINES &amp; DELIVERABLES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#212413] tracking-tight leading-[1.05] mb-6">
            Comprehensive Digital Capabilities. <span className="italic font-light text-[#444F24]">Measured Impact.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#565F45] leading-relaxed font-light">
            EdgeLab provides end-to-end digital services covering bespoke web engineering, on-location media, and performance marketing. Each discipline is delivered with craft and precision.
          </p>
        </div>

        {/* 10 Services Detailed Stack */}
        <div className="space-y-12 mb-20">
          {CORE_CAPABILITIES.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#F9FAF8] border border-[#E4E8DE] hover:border-[#444F24] transition-all scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left 7 cols: Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#F2F5ED] border border-[#C2D5C8] flex items-center justify-center">
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#90844A] uppercase tracking-wider block">
                        DISCIPLINE 0{idx + 1} &bull; {service.tag}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#212413]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-[#565F45] leading-relaxed font-light">
                    {service.summary}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-[#E4E8DE]">
                    <div className="text-xs font-mono text-[#212413] font-semibold uppercase tracking-wider mb-3">
                      Included Deliverables:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[#212413]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#444F24] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={getWhatsAppUrl(`Hi EdgeLab, I'd like to discuss ${service.title} for my project.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold transition-all shadow-xs active:scale-[0.98]"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#AD8820]" />
                      <span>{service.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B6BBD9]" />
                    </a>
                  </div>
                </div>

                {/* Right 5 cols: Image Visual */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#122311] border border-[#E4E8DE] group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#122311]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Scope Disclosures */}
        <div className="p-6 rounded-3xl bg-[#F2F5ED] border border-[#C2D5C8] text-xs text-[#565F45] text-center max-w-3xl mx-auto space-y-1">
          <div className="font-semibold text-[#212413]">Notice Regarding Package Inclusions:</div>
          <p>
            EdgeLab services are configured according to your agreed contract scope. Not every service is included in every package tier. Meta ad spend and external software/API charges are billed directly by their respective providers.
          </p>
        </div>

      </div>
    </div>
  );
}
