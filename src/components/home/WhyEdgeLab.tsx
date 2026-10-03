'use client';

import React from 'react';
import { Check, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export const WhyEdgeLab: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Point of Contact',
      without: '6 to 7 disparate freelancers across multiple WhatsApp groups',
      withEdgeLab: 'One dedicated project director & unified engineering studio',
    },
    {
      feature: 'Visual Identity',
      without: 'Photos clash with website layouts; fonts change on every post',
      withEdgeLab: 'Harmonious brand design across your code, camera shoots, and feeds',
    },
    {
      feature: 'Production Quality',
      without: 'Uncompressed stock photos, template themes, and slow load times',
      withEdgeLab: 'Custom Next.js hand-written code and bespoke commercial photography',
    },
    {
      feature: 'Operational Updates',
      without: 'Chasing the developer for weeks just to update a restaurant menu price',
      withEdgeLab: 'Direct WhatsApp communication with same-day deployment',
    },
    {
      feature: 'Digital Ordering & QR',
      without: 'Expensive 3rd-party SaaS fees cutting into table margins',
      withEdgeLab: 'Custom proprietary ordering portals integrated directly into your brand',
    },
    {
      feature: 'Accountability',
      without: 'Finger-pointing when an inquiry form fails or server crashes',
      withEdgeLab: 'End-to-end accountability under a single partner',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F6FAF7] border-y border-[#E2EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            11 / The EdgeLab Integration
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.12] mb-6">
            One team for your digital presence.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            We don’t believe businesses should have to assemble a digital presence through disjointed fragments. Here is what changes when everything is connected.
          </p>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#DFEBE3] shadow-sm overflow-hidden mb-12">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#EDF4F0] bg-[#FAFDFB]">
            <div className="md:col-span-4 p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-[#688174] font-bold">
              Operational Dimension
            </div>
            <div className="md:col-span-4 p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-[#8A5028] font-bold border-t md:border-t-0 md:border-l border-[#EDF4F0] bg-[#FFFBF8]">
              Without EdgeLab (Fragmented)
            </div>
            <div className="md:col-span-4 p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-[#14573D] font-bold border-t md:border-t-0 md:border-l border-[#EDF4F0] bg-[#F1F9F4]">
              With EdgeLab (Connected)
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#EDF4F0]">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-[#FAFCFA]">
                <div className="md:col-span-4 p-5 sm:p-6 flex items-center font-medium text-xs sm:text-sm text-[#14261E]">
                  {item.feature}
                </div>

                <div className="md:col-span-4 p-5 sm:p-6 flex items-start gap-3 border-t md:border-t-0 md:border-l border-[#EDF4F0] text-xs sm:text-sm text-[#735A42]">
                  <X className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                  <span>{item.without}</span>
                </div>

                <div className="md:col-span-4 p-5 sm:p-6 flex items-start gap-3 border-t md:border-t-0 md:border-l border-[#EDF4F0] text-xs sm:text-sm text-[#14573D] font-medium bg-[#FAFDFA]">
                  <Check className="w-4 h-4 text-[#1A8754] shrink-0 mt-0.5" />
                  <span>{item.withEdgeLab}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#627B6E]">
          <span>Simple, integrated convenience. One conversation drives your entire online presence.</span>
          <a href="#enquiry" className="text-[#18553D] font-semibold hover:underline flex items-center gap-1">
            <span>Explore partnership</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
