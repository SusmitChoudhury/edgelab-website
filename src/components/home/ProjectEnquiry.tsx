'use client';

import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { CONTACT, getWhatsAppUrl } from '@/config/site';
import { useCurrency } from '@/context/CurrencyContext';

export const ProjectEnquiry: React.FC = () => {
  const { currency, pricingTiers } = useCurrency();
  const starterTier = pricingTiers.find((t) => t.id === 'starter');
  const starterPrice = starterTier ? starterTier.price : (currency === 'USD' ? '$399' : '₹4,999');

  const budgetTiers = currency === 'USD' ? [
    `Starter (${starterPrice}+)`,
    '$500 – $1,000',
    '$1,000 – $2,500',
    'Custom / Enterprise ($2,500+)',
  ] : [
    `Starter (${starterPrice}+)`,
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    'Custom / Enterprise (₹50,000+)',
  ];

  const selectableServices = [
    'Website',
    'E-commerce',
    'Digital System',
    'Social Media',
    'Content',
    'Photography',
    'Reels',
    'Digital Strategy',
    'Other',
  ];

  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Website']);
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(1);
  const budget = budgetTiers[selectedBudgetIndex] || budgetTiers[0];
  const [message, setMessage] = useState('');
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

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    const formatted = `*EdgeLab Project Briefing*
• *Name:* ${name || 'N/A'}
• *Business:* ${business || 'N/A'}
• *Phone/WhatsApp:* ${phone || 'N/A'}
• *Email:* ${email || 'N/A'}
• *What we need:* ${selectedServices.join(', ')}
• *Budget:* ${budget}
• *Message:* ${message || 'No additional notes'}

Hi EdgeLab, let's build something worth remembering.`;

    const url = getWhatsAppUrl(formatted);
    window.open(url, '_blank');
  };

  return (
    <section id="enquiry" className="py-24 md:py-36 bg-[#F8FAF9] text-[#0B281B] border-t border-[#E2ECE6] relative overflow-hidden">
      {/* Soft Mint Radial Light */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-[#E8F5EE] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#D4EEDB]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5EE] border border-[#A7F3D0] text-xs font-mono font-bold uppercase tracking-wider text-[#059669] mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>09 // Project Consultation</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-serif text-[#0B281B] tracking-tight leading-[1.08] mb-6">
                Let&apos;s build something <span className="italic font-light text-[#059669] block sm:inline">worth remembering.</span>
              </h2>
              <p className="text-base text-[#5C7468] leading-relaxed">
                Tell us about your business, the systems you need, and where you want to be. An EdgeLab project director reviews every enquiry personally within 30 minutes.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl("Hi EdgeLab, I'd like to discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#F0F7F3] border border-[#E2ECE6] hover:border-[#10B981] transition-all group shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#059669] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                  <MessageSquare className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#059669] font-bold">Fastest Response</div>
                  <div className="text-sm font-semibold text-[#0B281B]">WhatsApp Consultation</div>
                  <div className="text-xs text-[#5C7468] mt-0.5 font-mono">{CONTACT.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#F0F7F3] border border-[#E2ECE6] hover:border-[#10B981] transition-all group shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8F5EE] border border-[#A7F3D0] text-[#059669] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#059669] font-bold">Official Email</div>
                  <div className="text-sm font-semibold text-[#0B281B]">{CONTACT.email}</div>
                  <div className="text-xs text-[#5C7468] mt-0.5">Direct written proposals</div>
                </div>
              </a>

              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#F0F7F3] border border-[#E2ECE6] hover:border-[#10B981] transition-all group shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8F5EE] border border-[#A7F3D0] text-[#059669] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#059669] font-bold">Instagram</div>
                  <div className="text-sm font-semibold text-[#0B281B]">{CONTACT.instagramHandle}</div>
                  <div className="text-xs text-[#5C7468] mt-0.5">Behind-the-scenes shoots & stories</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Briefing Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E2ECE6] shadow-[0_20px_50px_rgba(11,40,27,0.06)] relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#E8F5EE] text-[#059669] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0B281B]">
                  Enquiry Received.
                </h3>
                <p className="text-sm text-[#5C7468] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0B281B]">{name}</span>. We will review your briefing for <span className="font-semibold text-[#059669]">{business || 'your business'}</span> and reply within 30 minutes.
                </p>
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleWhatsAppDispatch}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#059669] text-white text-xs font-bold shadow-[0_10px_25px_rgba(5,150,105,0.25)] transition-all hover:bg-[#047857]"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#059669] mb-2 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-sm text-[#0B281B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#059669] mb-2 font-bold">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Heritage Table"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-sm text-[#0B281B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#059669] mb-2 font-bold">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-sm text-[#0B281B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#059669] mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-sm text-[#0B281B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] focus:bg-white"
                    />
                  </div>
                </div>

                {/* What do you need? (Selectable Services) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#059669] mb-2.5 font-bold">
                    What do you need? (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectableServices.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                            isSelected
                              ? 'bg-[#059669] text-white shadow-sm border border-[#059669]'
                              : 'bg-[#F8FAF9] text-[#233E32] border border-[#E2ECE6] hover:border-[#10B981]'
                          }`}
                        >
                          {isSelected && '✓ '}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#059669] mb-2 font-bold">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetTiers.map((tier, idx) => {
                      const isSelected = selectedBudgetIndex === idx;
                      return (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setSelectedBudgetIndex(idx)}
                          className={`p-3 rounded-xl text-xs font-mono text-left transition-all ${
                            isSelected
                              ? 'bg-[#E8F5EE] text-[#059669] border-2 border-[#10B981] font-bold shadow-xs'
                              : 'bg-[#F8FAF9] text-[#5C7468] border border-[#E2ECE6] hover:border-[#A7F3D0]'
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#059669] mb-2 font-bold">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives, existing brand assets, or target launch date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-sm text-[#0B281B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] focus:bg-white"
                  />
                </div>

                {/* Primary CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-bold shadow-[0_10px_25px_rgba(5,150,105,0.25)] transition-all transform hover:-translate-y-0.5 group"
                  >
                    <span>SUBMIT PROJECT BRIEFING →</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDispatch}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#E8F5EE] hover:bg-[#D4EEDB] text-[#0B281B] border border-[#A7F3D0] text-xs sm:text-sm font-mono font-semibold transition-all hover:border-[#059669]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#059669]" />
                    <span>Send to WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
