'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Clock,
  MapPin
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { CONTACT, getWhatsAppUrl } from '@/config/site';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const selectedPackageFromQuery = searchParams.get('package');

  const selectableServices = [
    'Website Engineering',
    'E-Commerce & Online Store',
    'Custom Digital System / Operations',
    'Social Media Management',
    'Commercial Studio Photography',
    '4K Reels & Video Production',
    'Website Care & Management',
    'Local Search & SEO',
  ];

  const budgetTiers = [
    'Starter (₹4,999 – ₹9,999)',
    'Business (₹10,000 – ₹25,000)',
    'Growth (₹25,000 – ₹50,000)',
    'Custom Enterprise (₹50,000+)',
  ];

  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Website Engineering']);
  const [budget, setBudget] = useState(budgetTiers[1]);
  const [timeline, setTimeline] = useState('Standard (2 to 4 weeks)');
  const [message, setMessage] = useState(
    selectedPackageFromQuery ? `Interested in package: ${selectedPackageFromQuery}` : ''
  );
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleWhatsAppDispatch = () => {
    const formattedMessage = `*New Project Briefing via EdgeLab Portal*
----------------------------------------
• *Name:* ${name || 'Prospective Partner'}
• *Business / Brand:* ${business || 'Not specified'}
• *Phone:* ${phone || 'Not specified'}
• *Email:* ${email || 'Not specified'}
• *Required Capabilities:* ${selectedServices.join(', ')}
• *Target Budget Bracket:* ${budget}
• *Target Timeline:* ${timeline}
• *Project Notes:* ${message || 'Ready to discuss on WhatsApp'}
----------------------------------------
Hi EdgeLab, I have submitted our project brief and would like to connect with a Project Director.`;

    window.open(getWhatsAppUrl(formattedMessage), '_blank');
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white text-[#0C120E] min-h-screen">
      {/* Radiant Olive Ambient Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#E8F0EA] via-[#F0F4F1]/40 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono font-bold uppercase tracking-wider text-[#1A281E] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#263A2D] animate-pulse" />
            <span>START A PROJECT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#0C120E] tracking-tight leading-[1.05] mb-6">
            Direct access to our <span className="italic font-light text-[#263A2D]">directors.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#52665A] leading-relaxed">
            Every inquiry is routed directly to an active EdgeLab Project Director. We respond within 30 minutes with an honest evaluation and actionable timeline.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F9FAF8] border border-[#D8E4DC] space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#0C120E]">
                Direct Studio Channels
              </h2>
              <p className="text-xs sm:text-sm text-[#52665A] leading-relaxed">
                Skip bureaucratic account managers. Reach our partners directly on WhatsApp, phone, or email.
              </p>
            </div>

            {/* Contact Action Tiles */}
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl("Hi EdgeLab, I'd like to talk directly with a Project Director.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#E8F0EA] hover:bg-[#D8E4DC] border border-[#C2D5C8] transition-all group shadow-2xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1A281E] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <MessageSquare className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#1A281E] font-bold">Fastest Response</div>
                  <div className="text-sm font-semibold text-[#0C120E]">WhatsApp Consultation</div>
                  <div className="text-xs text-[#52665A] mt-0.5 font-mono">{CONTACT.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F9FAF8] hover:bg-[#E8F0EA] border border-[#D8E4DC] hover:border-[#1A281E] transition-all group shadow-2xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8F0EA] border border-[#C2D5C8] text-[#1A281E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#1A281E] font-bold">Direct Phone</div>
                  <div className="text-sm font-semibold text-[#0C120E]">{CONTACT.phoneDisplay}</div>
                  <div className="text-xs text-[#52665A] mt-0.5">Mon–Sat • 9:00 AM – 8:00 PM IST</div>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F9FAF8] hover:bg-[#E8F0EA] border border-[#D8E4DC] hover:border-[#1A281E] transition-all group shadow-2xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8F0EA] border border-[#C2D5C8] text-[#1A281E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#1A281E] font-bold">Official Email</div>
                  <div className="text-sm font-semibold text-[#0C120E]">{CONTACT.email}</div>
                  <div className="text-xs text-[#52665A] mt-0.5">Direct written proposals & NDAs</div>
                </div>
              </a>

              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F9FAF8] hover:bg-[#E8F0EA] border border-[#D8E4DC] hover:border-[#1A281E] transition-all group shadow-2xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8F0EA] border border-[#C2D5C8] text-[#1A281E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#1A281E] font-bold">Instagram</div>
                  <div className="text-sm font-semibold text-[#0C120E]">{CONTACT.instagramHandle}</div>
                  <div className="text-xs text-[#52665A] mt-0.5">Behind-the-scenes shoots & stories</div>
                </div>
              </a>
            </div>

            {/* Response SLA Guarantee */}
            <div className="p-4 rounded-2xl bg-[#E8F0EA] border border-[#C2D5C8] text-xs font-mono text-[#0C120E] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#1A281E] shrink-0" />
              <span><strong>30-Minute Review Commitment:</strong> All briefings are assigned directly to an active project director.</span>
            </div>
          </div>

          {/* Right Column: Briefing Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F9FAF8] rounded-3xl p-6 sm:p-10 border border-[#D8E4DC] shadow-[0_20px_50px_rgba(18,28,21,0.06)] relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#E8F0EA] text-[#1A281E] flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#0C120E]">
                  Briefing Received.
                </h2>
                <p className="text-sm text-[#52665A] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0C120E]">{name}</span>. We will review your briefing for <span className="font-semibold text-[#1A281E]">{business || 'your business'}</span> and reply within 30 minutes.
                </p>
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleWhatsAppDispatch}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A281E] text-white text-xs font-bold shadow-[0_10px_25px_rgba(26,40,30,0.25)] transition-all hover:bg-[#263A2D]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open on WhatsApp for Instant Confirmation</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleStandardSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1A281E] mb-2 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E4DC] text-sm text-[#0C120E] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1A281E] focus:ring-1 focus:ring-[#1A281E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1A281E] mb-2 font-bold">
                      Brand / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aurelia Atelier"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E4DC] text-sm text-[#0C120E] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1A281E] focus:ring-1 focus:ring-[#1A281E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1A281E] mb-2 font-bold">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E4DC] text-sm text-[#0C120E] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1A281E] focus:ring-1 focus:ring-[#1A281E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#1A281E] mb-2 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="partner@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E4DC] text-sm text-[#0C120E] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1A281E] focus:ring-1 focus:ring-[#1A281E]"
                    />
                  </div>
                </div>

                {/* Required Capabilities Multi-Select Chips */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#1A281E] mb-2 font-bold">
                    Select Required Capabilities:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectableServices.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                            isSelected
                              ? 'bg-[#1A281E] text-white border-[#1A281E] font-bold shadow-2xs'
                              : 'bg-white text-[#52665A] border-[#D8E4DC] hover:border-[#1A281E]'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}{srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Target Budget Tiers */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#1A281E] mb-2 font-bold">
                    Target Investment Bracket:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetTiers.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`p-2.5 rounded-xl text-center text-xs font-mono transition-all border ${
                          budget === b
                            ? 'bg-[#1A281E] text-white border-[#1A281E] font-bold'
                            : 'bg-white text-[#52665A] border-[#D8E4DC] hover:border-[#1A281E]'
                        }`}
                      >
                        {b.split('(')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#1A281E] mb-2 font-bold">
                    Project Vision / Objectives:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your brand, current challenges, and goals for this project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8E4DC] text-sm text-[#0C120E] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1A281E] focus:ring-1 focus:ring-[#1A281E]"
                  />
                </div>

                {/* Submit Dual Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDispatch}
                    className="w-full sm:flex-1 py-4 px-6 rounded-full bg-[#1A281E] hover:bg-[#263A2D] text-white text-xs font-bold font-mono tracking-wider transition-all shadow-[0_10px_25px_rgba(26,40,30,0.25)] flex items-center justify-center gap-2 group"
                  >
                    <MessageSquare className="w-4 h-4 text-[#A7F3D0]" />
                    <span>DISPATCH VIA WHATSAPP →</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto py-4 px-6 rounded-full bg-white hover:bg-[#F9FAF8] text-[#0C120E] border border-[#D8E4DC] text-xs font-mono font-semibold transition-all hover:border-[#1A281E]"
                  >
                    Send Standard Brief
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-32 pb-24 text-center font-mono text-xs">Loading Briefing Terminal...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
