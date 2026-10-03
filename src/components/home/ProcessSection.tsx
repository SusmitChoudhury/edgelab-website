'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS, getWhatsAppUrl } from '@/config/site';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2EA] text-[#14573D] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            10 / Our Working Method
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0F1713] tracking-tight leading-[1.12] mb-6">
            From first conversation to live operation.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4E44] leading-relaxed">
            A disciplined, five-stage journey that eliminates guesswork and delivers tangible craftsmanship at every milestone.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="space-y-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#F6FAF7] border-[#18553D] shadow-[0_8px_30px_rgba(24,85,61,0.08)]'
                    : 'bg-white border-[#E2EDE6] hover:border-[#CADBD0]'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Step ID & Title */}
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-base font-bold shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#0F382A] text-[#A7E8C7]'
                          : 'bg-[#EBF4EE] text-[#164F38]'
                      }`}
                    >
                      {step.step}
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-serif text-[#121A16] font-bold">
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono text-[#657C70] hidden sm:inline">
                          — {step.subtitle}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#465A50] mt-2 max-w-2xl leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Deliverable Badge */}
                  <div className="self-start md:self-auto shrink-0">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D5E5DC] text-xs font-mono text-[#18553D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#18553D]" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Footer CTA */}
        <div className="mt-14 pt-8 border-t border-[#E5EFE8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#597063] font-mono">
            Average deployment timeline: 7 to 14 business days depending on scope.
          </div>

          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#18553D] hover:text-[#0F382A] transition-colors"
          >
            <span>Start with Stage 01 Discover</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
