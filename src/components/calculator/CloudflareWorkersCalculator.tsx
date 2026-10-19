'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import { 
  Server, 
  Cpu, 
  Database, 
  Zap, 
  HelpCircle, 
  ShieldCheck, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Sparkles,
  Info,
  ChevronDown
} from 'lucide-react';
import { getWhatsAppUrl, CONTACT } from '@/config/site';
import { useCurrency } from '@/context/CurrencyContext';

interface BreakdownRow {
  label: string;
  count: number;
  description: string;
}

export const CloudflareWorkersCalculator: React.FC = () => {
  const { cloudflarePromo, monthlyRunningCost } = useCurrency();
  // Unique accessible IDs for inputs
  const visitorsId = useId();
  const formId = useId();
  const apiId = useId();
  const adminId = useId();
  const adminReqId = useId();
  const aiChatId = useId();
  const aiMsgId = useId();

  // Calculator State with prompt default values
  const [dailyVisitors, setDailyVisitors] = useState<number>(1000); // 100 - 20000, step 100
  const [formPercentage, setFormPercentage] = useState<number>(5); // 0 - 30%, step 1
  const [apiCallsPerVisitor, setApiCallsPerVisitor] = useState<number>(2); // 0 - 10, step 1
  const [adminUsers, setAdminUsers] = useState<number>(20); // 0 - 100, step 1
  const [requestsPerAdminUser, setRequestsPerAdminUser] = useState<number>(5); // 1 - 20, step 1
  const [aiChatPercentage, setAiChatPercentage] = useState<number>(5); // 0 - 50%, step 1
  const [aiMessagesPerUser, setAiMessagesPerUser] = useState<number>(5); // 1 - 20, step 1

  // Hosting Plan Intent Selection
  const [hostingSelection, setHostingSelection] = useState<'free' | 'paid' | 'help'>('free');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Free Tier Daily Quota Limit (Configurable)
  const FREE_TIER_DAILY_QUOTA = 100000;

  // Exact Calculation Formulas
  const formRequests = Math.round(dailyVisitors * (formPercentage / 100));
  const apiRequests = dailyVisitors * apiCallsPerVisitor;
  const adminRequests = adminUsers * requestsPerAdminUser;
  const aiRequests = Math.round(dailyVisitors * (aiChatPercentage / 100)) * aiMessagesPerUser;
  const estimatedDailyRequests = formRequests + apiRequests + adminRequests + aiRequests;
  const quotaPercentage = Number(((estimatedDailyRequests / FREE_TIER_DAILY_QUOTA) * 100).toFixed(2));

  // Determine Quota Status
  const isOverQuota = estimatedDailyRequests > FREE_TIER_DAILY_QUOTA;
  const isApproachingQuota = !isOverQuota && estimatedDailyRequests > (FREE_TIER_DAILY_QUOTA * 0.75);

  // Breakdown Data
  const breakdown: BreakdownRow[] = [
    {
      label: 'Visitor Form Submissions',
      count: formRequests,
      description: `${formPercentage}% of ${dailyVisitors.toLocaleString()} daily visitors submitting enquiry or contact forms`,
    },
    {
      label: 'Visitor API Endpoints',
      count: apiRequests,
      description: `${apiCallsPerVisitor} interactive API requests per visitor (dynamic search, catalog filters, live stock)`,
    },
    {
      label: 'Admin & Staff Portals',
      count: adminRequests,
      description: `${adminUsers} staff users performing ${requestsPerAdminUser} backend dashboard updates daily`,
    },
    {
      label: 'AI Chatbot Interactions',
      count: aiRequests,
      description: `${aiChatPercentage}% visitors opening chat with an average of ${aiMessagesPerUser} messages per session`,
    },
  ];

  // Prefilled WhatsApp Message for Conversion
  const generateWhatsAppMessage = () => {
    return `*Cloudflare Workers Backend Estimate — EdgeLab*
• *Daily Visitors:* ${dailyVisitors.toLocaleString()}
• *Estimated Daily Requests:* ${estimatedDailyRequests.toLocaleString()} / 100,000 (${quotaPercentage}% of Free limit)
• *Form Requests:* ${formRequests.toLocaleString()}
• *API Requests:* ${apiRequests.toLocaleString()}
• *Admin Requests:* ${adminRequests.toLocaleString()}
• *AI Chat Requests:* ${aiRequests.toLocaleString()}
• *Hosting Preference:* ${hostingSelection === 'free' ? 'Workers Free (18% Promotion Eligible)' : hostingSelection === 'paid' ? 'Workers Paid' : 'Need EdgeLab Architectural Advice'}

Hi EdgeLab, I ran my backend estimates on your calculator and want to discuss hosting and building my website.`;
  };

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          1. Hero Section
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 bg-[#122311] text-white overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div 
          className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#444F24]/30 rounded-full blur-[140px] pointer-events-none" 
          aria-hidden="true"
        />
        <div 
          className="absolute -bottom-20 left-10 w-[400px] h-[300px] bg-[#F6821F]/10 rounded-full blur-[120px] pointer-events-none" 
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Campaign Badge with restrained Cloudflare Orange */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1e341c] border border-[#444F24] text-xs font-mono tracking-wider text-[#B6BBD9] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F6821F] animate-pulse" />
              <span>CLOUDFLARE WORKERS CAMPAIGN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-6">
              Estimate Your Website&apos;s <span className="italic text-[#B6BBD9]">Backend Usage.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#B6BBD9] leading-relaxed mb-8">
              Calculate your estimated daily Worker requests and explore whether Cloudflare Workers Free may suit your website&apos;s workload. Transparent planning with zero sales hype.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#calculator-controls"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-sm font-semibold tracking-wide transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#B6BBD9] active:scale-[0.98]"
              >
                <span>Calculate My Requests</span>
                <ArrowRight className="w-4 h-4 text-[#B6BBD9]" />
              </a>

              <a
                href={getWhatsAppUrl("Hi EdgeLab, I'd like to talk about hosting our website on Cloudflare Workers.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#182e16] hover:bg-[#203a1e] border border-[#444F24] text-white text-sm font-medium transition-all active:scale-[0.98]"
              >
                <span>Talk to EdgeLab</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. Interactive Calculator Controls & Real-Time Monitor
      ───────────────────────────────────────────────────────────── */}
      <section id="calculator-controls" className="py-16 sm:py-24 bg-white text-[#212413]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Cols: Sliders & Controls */}
            <div className="lg:col-span-7 bg-[#F9FAF8] rounded-3xl p-6 sm:p-8 border border-[#E4E8DE] shadow-xs">
              <div className="flex items-center justify-between pb-6 border-b border-[#E4E8DE] mb-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#212413] tracking-tight">
                    Website Traffic & Usage Parameters
                  </h2>
                  <p className="text-xs text-[#565F45] mt-1">
                    Adjust the sliders below to model your expected daily traffic and dynamic operations.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E4E8DE] text-[11px] font-mono text-[#444F24]">
                  <Sparkles className="w-3.5 h-3.5 text-[#AD8820]" />
                  <span>Real-time</span>
                </div>
              </div>

              {/* Slider 1: Daily Visitors */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={visitorsId} className="text-sm font-semibold text-[#212413] flex items-center gap-2">
                    <span>Daily Website Visitors</span>
                    <span className="text-xs font-normal text-[#565F45]">(Unique visits/day)</span>
                  </label>
                  <span className="font-mono text-sm font-bold text-[#444F24] bg-white px-3 py-1 rounded-lg border border-[#E4E8DE]">
                    {dailyVisitors.toLocaleString()}
                  </span>
                </div>
                <input
                  id={visitorsId}
                  type="range"
                  min={100}
                  max={20000}
                  step={100}
                  value={dailyVisitors}
                  onChange={(e) => setDailyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-[#E4E8DE] rounded-lg appearance-none cursor-pointer accent-[#444F24] focus:outline-none"
                  aria-valuemin={100}
                  aria-valuemax={20000}
                  aria-valuenow={dailyVisitors}
                />
                <div className="flex justify-between text-[11px] font-mono text-[#7A846B] mt-1">
                  <span>100 visitors</span>
                  <span>Default: 1,000</span>
                  <span>20,000 visitors</span>
                </div>
              </div>

              {/* Slider 2: Form Submissions */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={formId} className="text-sm font-semibold text-[#212413] flex items-center gap-2">
                    <span>Form Submissions Percentage</span>
                    <span className="text-xs font-normal text-[#565F45]">(Enquiry / Contact forms)</span>
                  </label>
                  <span className="font-mono text-sm font-bold text-[#444F24] bg-white px-3 py-1 rounded-lg border border-[#E4E8DE]">
                    {formPercentage}%
                  </span>
                </div>
                <input
                  id={formId}
                  type="range"
                  min={0}
                  max={30}
                  step={1}
                  value={formPercentage}
                  onChange={(e) => setFormPercentage(Number(e.target.value))}
                  className="w-full h-2 bg-[#E4E8DE] rounded-lg appearance-none cursor-pointer accent-[#444F24] focus:outline-none"
                  aria-valuemin={0}
                  aria-valuemax={30}
                  aria-valuenow={formPercentage}
                />
                <div className="flex justify-between text-[11px] font-mono text-[#7A846B] mt-1">
                  <span>0% (None)</span>
                  <span>Default: 5%</span>
                  <span>30% (High Lead Gen)</span>
                </div>
              </div>

              {/* Slider 3: Backend API Calls */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={apiId} className="text-sm font-semibold text-[#212413] flex items-center gap-2">
                    <span>API Calls per Visitor</span>
                    <span className="text-xs font-normal text-[#565F45]">(Search, filter, live stock)</span>
                  </label>
                  <span className="font-mono text-sm font-bold text-[#444F24] bg-white px-3 py-1 rounded-lg border border-[#E4E8DE]">
                    {apiCallsPerVisitor} calls
                  </span>
                </div>
                <input
                  id={apiId}
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={apiCallsPerVisitor}
                  onChange={(e) => setApiCallsPerVisitor(Number(e.target.value))}
                  className="w-full h-2 bg-[#E4E8DE] rounded-lg appearance-none cursor-pointer accent-[#444F24] focus:outline-none"
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-valuenow={apiCallsPerVisitor}
                />
                <div className="flex justify-between text-[11px] font-mono text-[#7A846B] mt-1">
                  <span>0 (Static Site)</span>
                  <span>Default: 2</span>
                  <span>10 (Dynamic Portal)</span>
                </div>
              </div>

              {/* Dual Slider Grid: Admin Users & Admin Requests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-white border border-[#E4E8DE]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={adminId} className="text-xs font-semibold text-[#212413]">
                      Admin / Staff Users
                    </label>
                    <span className="font-mono text-xs font-bold text-[#444F24]">
                      {adminUsers}
                    </span>
                  </div>
                  <input
                    id={adminId}
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={adminUsers}
                    onChange={(e) => setAdminUsers(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#E4E8DE] rounded-lg appearance-none cursor-pointer accent-[#444F24]"
                  />
                  <span className="text-[10px] text-[#7A846B]">Range: 0 – 100</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={adminReqId} className="text-xs font-semibold text-[#212413]">
                      Requests / Admin
                    </label>
                    <span className="font-mono text-xs font-bold text-[#444F24]">
                      {requestsPerAdminUser}
                    </span>
                  </div>
                  <input
                    id={adminReqId}
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={requestsPerAdminUser}
                    onChange={(e) => setRequestsPerAdminUser(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#E4E8DE] rounded-lg appearance-none cursor-pointer accent-[#444F24]"
                  />
                  <span className="text-[10px] text-[#7A846B]">Range: 1 – 20</span>
                </div>
              </div>

              {/* Dual Slider Grid: AI Chatbot Usage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-white border border-[#E4E8DE]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={aiChatId} className="text-xs font-semibold text-[#212413]">
                      Visitors Using AI Chat
                    </label>
                    <span className="font-mono text-xs font-bold text-[#444F24]">
                      {aiChatPercentage}%
                    </span>
                  </div>
                  <input
                    id={aiChatId}
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    value={aiChatPercentage}
                    onChange={(e) => setAiChatPercentage(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#E4E8DE] rounded-lg appearance-none cursor-pointer accent-[#444F24]"
                  />
                  <span className="text-[10px] text-[#7A846B]">Range: 0% – 50%</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={aiMsgId} className="text-xs font-semibold text-[#212413]">
                      Messages / AI User
                    </label>
                    <span className="font-mono text-xs font-bold text-[#444F24]">
                      {aiMessagesPerUser}
                    </span>
                  </div>
                  <input
                    id={aiMsgId}
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={aiMessagesPerUser}
                    onChange={(e) => setAiMessagesPerUser(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#E4E8DE] rounded-lg appearance-none cursor-pointer accent-[#444F24]"
                  />
                  <span className="text-[10px] text-[#7A846B]">Range: 1 – 20</span>
                </div>
              </div>

              {/* Reset to Defaults */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setDailyVisitors(1000);
                    setFormPercentage(5);
                    setApiCallsPerVisitor(2);
                    setAdminUsers(20);
                    setRequestsPerAdminUser(5);
                    setAiChatPercentage(5);
                    setAiMessagesPerUser(5);
                  }}
                  className="text-xs font-mono text-[#565F45] hover:text-[#212413] underline transition-colors"
                >
                  Reset Sliders to Standard Defaults
                </button>
              </div>
            </div>

            {/* Right 5 Cols: Result Panel & Quota Indicator */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Calculation Result Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#122311] text-white border border-[#444F24] shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-wider text-[#B6BBD9] uppercase">
                    ESTIMATED DAILY USAGE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1e341c] text-[#AD8820] text-[10px] font-mono font-bold">
                    Daily Estimate
                  </span>
                </div>

                {/* Big Number */}
                <div className="mb-4">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                    {estimatedDailyRequests.toLocaleString()}
                  </div>
                  <div className="text-xs text-[#B6BBD9] mt-1 font-mono">
                    Estimated Worker requests per day
                  </div>
                </div>

                {/* Quota Progress Bar */}
                <div className="mb-6 pt-2">
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[#B6BBD9]">Free Plan Allowance:</span>
                    <span className={`font-bold ${isOverQuota ? 'text-red-400' : isApproachingQuota ? 'text-[#AD8820]' : 'text-emerald-400'}`}>
                      {quotaPercentage}% of 100,000 / day
                    </span>
                  </div>

                  <div className="w-full h-3 bg-[#1e341c] rounded-full overflow-hidden p-0.5 border border-[#444F24]">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isOverQuota 
                          ? 'bg-red-500' 
                          : isApproachingQuota 
                            ? 'bg-[#AD8820]' 
                            : 'bg-emerald-400'
                      }`}
                      style={{ width: `${Math.min(quotaPercentage, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Quota Status Alert Callout */}
                {isOverQuota ? (
                  <div className="p-3.5 rounded-2xl bg-red-950/70 border border-red-800 text-xs text-red-200 flex items-start gap-2.5 mb-6">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block text-red-100">Exceeds Free Daily Quota</strong>
                      Your workload requires Cloudflare Workers Paid ($5/month includes 10M requests) or backend caching optimization.
                    </div>
                  </div>
                ) : isApproachingQuota ? (
                  <div className="p-3.5 rounded-2xl bg-[#AD8820]/20 border border-[#AD8820]/40 text-xs text-[#E4E8DE] flex items-start gap-2.5 mb-6">
                    <AlertTriangle className="w-4 h-4 text-[#AD8820] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block text-white">Approaching Daily Limit (&gt;75%)</strong>
                      Consider edge caching static assets or preparing for Workers Paid during traffic spikes.
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-[#1e341c] border border-[#444F24] text-xs text-[#B6BBD9] flex items-start gap-2.5 mb-6">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block text-white">Well Within Free Tier Quota</strong>
                      This estimated workload fits smoothly inside Cloudflare Workers Free (100,000 requests/day).
                    </div>
                  </div>
                )}

                {/* Request Breakdown List */}
                <div className="space-y-2.5 pt-4 border-t border-[#444F24]/50 mb-6">
                  {breakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-[#B6BBD9]">{item.label}</span>
                      <span className="font-mono font-bold text-white">
                        {item.count.toLocaleString()} reqs
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={getWhatsAppUrl(generateWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#444F24] hover:bg-[#52602c] text-white text-xs font-bold tracking-wide transition-all shadow-md"
                  >
                    <span>Discuss My Website on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-transparent hover:bg-[#182e16] text-[#B6BBD9] hover:text-white border border-[#444F24] text-xs font-medium transition-all"
                  >
                    <span>Get a Cost Estimate via Email</span>
                  </Link>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────
                  3. Calculator-Linked Hosting Choice & 18% Offer Flow
              ───────────────────────────────────────────────────────────── */}
              <div className="p-6 rounded-3xl bg-[#F9FAF8] border border-[#E4E8DE]">
                <h3 className="text-sm font-serif font-bold text-[#212413] mb-3">
                  Select Your Hosting Architecture Preference
                </h3>

                {/* 3 Buttons Choice */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setHostingSelection('free')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      hostingSelection === 'free'
                        ? 'bg-[#444F24] text-white border-[#444F24] shadow-xs'
                        : 'bg-white text-[#565F45] border-[#E4E8DE] hover:border-[#444F24]'
                    }`}
                  >
                    Workers Free
                  </button>

                  <button
                    type="button"
                    onClick={() => setHostingSelection('paid')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      hostingSelection === 'paid'
                        ? 'bg-[#444F24] text-white border-[#444F24] shadow-xs'
                        : 'bg-white text-[#565F45] border-[#E4E8DE] hover:border-[#444F24]'
                    }`}
                  >
                    Workers Paid
                  </button>

                  <button
                    type="button"
                    onClick={() => setHostingSelection('help')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      hostingSelection === 'help'
                        ? 'bg-[#444F24] text-white border-[#444F24] shadow-xs'
                        : 'bg-white text-[#565F45] border-[#E4E8DE] hover:border-[#444F24]'
                    }`}
                  >
                    Help Me Choose
                  </button>
                </div>

                {/* Conditional Display of the 18% EdgeLab Promotion */}
                {hostingSelection === 'free' ? (
                  <div className="p-4 rounded-2xl bg-[#F2F5ED] border border-[#C2D5C8] text-xs text-[#212413]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#AD8820] text-white font-mono font-bold text-[10px]">
                        EDGELAB 18% PROMOTION
                      </span>
                    </div>
                    <p className="font-semibold text-sm text-[#444F24] mb-1">
                      Choose eligible Cloudflare Workers Free hosting and receive 18% off the qualifying EdgeLab service fee on purchases above {cloudflarePromo.qualifyingThresholdFormatted}.
                    </p>
                    <p className="text-xs text-[#565F45] mb-3">
                      Applied to our <strong>Business Plus</strong> package ({cloudflarePromo.baseFormatted} base fee):
                    </p>
                    <div className="bg-white p-3 rounded-xl border border-[#D8E4DC] font-mono text-xs space-y-1 mb-3">
                      <div className="flex justify-between">
                        <span className="text-[#565F45]">Base Package Fee:</span>
                        <span>{cloudflarePromo.baseFormatted}</span>
                      </div>
                      <div className="flex justify-between text-[#AD8820] font-bold">
                        <span>18% Promotional Discount:</span>
                        <span>- {cloudflarePromo.discountAmountFormatted}</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-[#E4E8DE] text-[#444F24] font-bold text-sm">
                        <span>Final Qualifying Fee:</span>
                        <span>{cloudflarePromo.discountedPriceFormatted}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#7A846B] leading-relaxed">
                      *Note: The first 3 months of running cost remain included. Standard running cost of {monthlyRunningCost}/month begins after 3 months. This discount is an EdgeLab agency promotion, not a discount provided by Cloudflare. Free hosting has limits, and external provider costs (such as databases or third-party APIs) may still apply.
                    </p>
                  </div>
                ) : hostingSelection === 'paid' ? (
                  <div className="p-4 rounded-2xl bg-white border border-[#E4E8DE] text-xs text-[#565F45]">
                    <strong className="block text-[#212413] mb-1">Workers Paid Plan Selected</strong>
                    <p className="leading-relaxed mb-2">
                      Cloudflare Workers Paid starts at $5/month (includes 10M requests/month with $0.50 per additional million). Ideal for high-traffic websites, advanced microservices, and longer CPU execution times.
                    </p>
                    <p className="text-[11px] text-[#7A846B]">
                      The 18% EdgeLab discount applies specifically to qualifying purchases selecting Cloudflare Workers Free hosting.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-white border border-[#E4E8DE] text-xs text-[#565F45]">
                    <strong className="block text-[#212413] mb-1">Unsure Which Plan Fits?</strong>
                    <p className="leading-relaxed mb-2">
                      EdgeLab engineers analyze your exact user flows, database needs, and traffic velocity to architect the most cost-effective hosting arrangement.
                    </p>
                    <a
                      href={getWhatsAppUrl("Hi EdgeLab, I ran the Cloudflare calculator and need help choosing between Workers Free and Paid.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#444F24] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Consult an EdgeLab Architect on WhatsApp →
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. Educational Section: What Counts as a Request?
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F3F5FA] border-y border-[#E4E8DE] text-[#212413]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#B6BBD9] text-xs font-mono text-[#444F24] mb-3">
              <Info className="w-3.5 h-3.5 text-[#444F24]" />
              <span>TECHNICAL TRANSPARENCY</span>
            </div>
            <h2 className="text-3xl font-serif text-[#212413] tracking-tight">
              Understanding What Counts as a Worker Request
            </h2>
            <p className="text-sm text-[#565F45] mt-2">
              Cloudflare counts incoming requests that invoke Worker code. Here is how EdgeLab architects keep requests efficient:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E4E8DE]">
              <div className="w-9 h-9 rounded-xl bg-[#F2F5ED] text-[#444F24] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#212413] mb-2">Static Asset Caching</h3>
              <p className="text-xs text-[#565F45] leading-relaxed">
                Static files (images, CSS, pre-rendered HTML) served directly from the CDN edge cache generally do not count as Worker invocation requests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E8DE]">
              <div className="w-9 h-9 rounded-xl bg-[#F2F5ED] text-[#444F24] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#212413] mb-2">Direct WhatsApp Routing</h3>
              <p className="text-xs text-[#565F45] leading-relaxed">
                Click-to-chat WhatsApp links bypass backend servers entirely, generating <strong>zero</strong> Worker requests while delivering instant mobile conversions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E8DE]">
              <div className="w-9 h-9 rounded-xl bg-[#F2F5ED] text-[#444F24] flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#212413] mb-2">Backend Form Handling</h3>
              <p className="text-xs text-[#565F45] leading-relaxed">
                Submitting a lead form handled by a backend worker endpoint invokes Worker code once per submission. Spam protection prevents abuse.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E8DE]">
              <div className="w-9 h-9 rounded-xl bg-[#F2F5ED] text-[#444F24] flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#212413] mb-2">Subrequests &amp; Databases</h3>
              <p className="text-xs text-[#565F45] leading-relaxed">
                Database queries (Cloudflare D1, Supabase, Neon) or external API calls made <em>from inside</em> a Worker do not count as additional incoming Worker requests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E8DE]">
              <div className="w-9 h-9 rounded-xl bg-[#F2F5ED] text-[#444F24] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#212413] mb-2">CPU &amp; Resource Limits</h3>
              <p className="text-xs text-[#565F45] leading-relaxed">
                CPU execution time limits (10ms on Free vs 30s configurable on Paid) and memory allowances are governed separately from the daily request count.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E8DE]">
              <div className="w-9 h-9 rounded-xl bg-[#F2F5ED] text-[#444F24] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#212413] mb-2">SSR vs Static Generation</h3>
              <p className="text-xs text-[#565F45] leading-relaxed">
                Full server-side dynamic rendering (SSR) on every page load consumes requests, whereas Next.js static site generation (SSG) delivers blazing speed with minimal backend requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. Cloudflare Workers Free vs Paid Comparison Chart
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white text-[#212413]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5ED] text-xs font-mono font-semibold text-[#444F24] mb-3">
              <span>PLAN COMPARISON ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#212413] tracking-tight">
              Cloudflare Workers: Free vs. Paid
            </h2>
            <p className="text-sm text-[#565F45] mt-2">
              Authority comparison based on official Cloudflare platform documentation. Helps non-technical business owners understand architectural trade-offs.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto rounded-3xl border border-[#E4E8DE] shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#122311] text-white">
                  <th className="py-4 px-6 font-mono uppercase tracking-wider text-[11px] w-1/4">Feature</th>
                  <th className="py-4 px-6 font-mono uppercase tracking-wider text-[11px] w-3/8 text-[#B6BBD9]">Workers Free</th>
                  <th className="py-4 px-6 font-mono uppercase tracking-wider text-[11px] w-3/8 text-[#F6821F]">Workers Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E8DE] bg-[#F9FAF8]">
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#212413]">Best suited for</td>
                  <td className="py-4 px-6 text-[#565F45]">Small websites, prototypes, personal portfolios, and lightweight APIs</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">Business-critical applications, commercial e-commerce, and higher workloads</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-semibold text-[#212413]">Request allowance</td>
                  <td className="py-4 px-6 text-[#565F45]">100,000 requests per day (resets daily at 00:00 UTC)</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">10,000,000 requests/month included in base $5/month plan</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#212413]">Request overage</td>
                  <td className="py-4 px-6 text-red-700">Requests return error (HTTP 1027) once daily quota is exhausted</td>
                  <td className="py-4 px-6 text-emerald-800 font-medium">$0.50 per additional 1,000,000 requests (never abruptly dropped)</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-semibold text-[#212413]">CPU allowance</td>
                  <td className="py-4 px-6 text-[#565F45]">10ms CPU execution time per request</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">Configurable up to 30,000ms (30s) standard CPU time</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#212413]">Subrequests</td>
                  <td className="py-4 px-6 text-[#565F45]">Up to 50 subrequests per single invocation</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">Up to 1,000 subrequests per single invocation</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-semibold text-[#212413]">Database product</td>
                  <td className="py-4 px-6 text-[#565F45]">A separate database product (e.g. D1 Free or external DB) may be required</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">A database may still be separately required based on schema requirements</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#212413]">AI usage (Workers AI)</td>
                  <td className="py-4 px-6 text-[#565F45]">External AI usage is not automatically free; basic neurons allowance applies</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">External AI usage is not automatically included; billed per model consumption</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-semibold text-[#212413]">External provider costs</td>
                  <td className="py-4 px-6 text-[#565F45]">May apply (third-party APIs, transactional email, domain registration)</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">May apply (third-party APIs, transactional email, domain registration)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#212413]">Suitable use</td>
                  <td className="py-4 px-6 text-[#565F45]">Low-traffic and lightweight workloads that comfortably fit within daily limits</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">Higher traffic velocity, greater CPU needs, or missions requiring paid SLAs</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-semibold text-[#212413]">Upgrade requirement</td>
                  <td className="py-4 px-6 text-[#565F45]">Upgrade or optimise caching when workload approaches 100k requests/day</td>
                  <td className="py-4 px-6 text-[#212413] font-medium">Monitor monthly request volumes and optimize database queries</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards View */}
          <div className="md:hidden space-y-4">
            {[
              { title: 'Best suited for', free: 'Small websites, prototypes and lightweight APIs', paid: 'Business-critical applications and higher workloads' },
              { title: 'Request allowance', free: '100,000 requests per day (resets daily)', paid: '10,000,000 requests/month included in $5/mo' },
              { title: 'Request overage', free: 'Requests fail when limit exceeded (HTTP 1027)', paid: 'Usage billed at $0.50/M without downtime' },
              { title: 'CPU allowance', free: '10ms CPU execution time', paid: 'Up to 30,000ms (30s) standard CPU time' },
              { title: 'Subrequests', free: '50 subrequests per request', paid: '1,000 subrequests per request' },
              { title: 'Database', free: 'Separate DB (D1 / external) may be required', paid: 'Separate DB may still be required' },
              { title: 'AI usage', free: 'External AI not free; subject to quotas', paid: 'External AI billed separately' },
              { title: 'External costs', free: 'May apply for domains, email & APIs', paid: 'May apply for domains, email & APIs' },
              { title: 'Suitable use', free: 'Low-traffic workloads within limits', paid: 'High traffic, higher CPU requirements' },
              { title: 'Upgrade requirement', free: 'Upgrade when approaching 100k daily', paid: 'Monitor monthly billing and growth' },
            ].map((row, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#F9FAF8] border border-[#E4E8DE]">
                <h3 className="font-semibold text-xs text-[#212413] mb-2">{row.title}</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E4E8DE]">
                    <span className="text-[10px] font-mono text-[#565F45] uppercase block mb-1">Free</span>
                    <span className="text-[#565F45]">{row.free}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F2F5ED] border border-[#C2D5C8]">
                    <span className="text-[10px] font-mono text-[#444F24] uppercase block mb-1">Paid</span>
                    <span className="text-[#212413] font-medium">{row.paid}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Official Authority Citation & Verification Date */}
          <div className="mt-8 p-4 rounded-2xl bg-[#F9FAF8] border border-[#E4E8DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#565F45]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#444F24] shrink-0" />
              <span>
                <strong>Verified Authority:</strong> Limits and pricing verified October 2026 from official Cloudflare documentation.
              </span>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://developers.cloudflare.com/workers/platform/pricing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#444F24] font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>Cloudflare Pricing Docs</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://developers.cloudflare.com/workers/platform/limits/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#444F24] font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>Platform Limits Docs</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Disclaimer regarding Cloudflare Endorsement */}
          <p className="text-[11px] text-[#7A846B] mt-4 text-center">
            Cloudflare and Cloudflare Workers are trademarks of Cloudflare, Inc. EdgeLab is an independent digital agency providing web architecture and development. EdgeLab is not officially endorsed or partnered with Cloudflare. The 18% promotional offer is provided solely by EdgeLab.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. Calculator FAQ Accordion
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F9FAF8] border-t border-[#E4E8DE] text-[#212413]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#212413] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#565F45] mt-2">
              Common architectural questions regarding serverless backend hosting.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Can my entire business website run on Cloudflare Workers Free forever?',
                a: 'If your traffic, form submissions, and dynamic API calls consistently stay under 100,000 requests per day (which comfortably supports up to 1,000–3,000 typical daily visitors with proper edge caching), you can run on the Free tier indefinitely. However, external costs such as domains, transactional email providers, or separate databases may still apply.',
              },
              {
                q: 'What happens if my website suddenly gets a traffic spike above 100,000 requests?',
                a: 'On Cloudflare Workers Free, requests beyond the 100k daily quota will return an error until the daily quota resets at 00:00 UTC. If your business experiences unexpected viral spikes, upgrading to Workers Paid ($5/month) ensures seamless overflow handling at just $0.50 per million requests with zero downtime.',
              },
              {
                q: 'Does EdgeLab automatically apply the 18% discount to all website packages?',
                a: `No. The 18% discount is an EdgeLab agency promotion offered specifically to customers who purchase qualifying packages above ${cloudflarePromo.qualifyingThresholdFormatted} (such as our ${cloudflarePromo.baseFormatted} Business Plus package) and choose the Cloudflare Workers Free hosting option. It does not apply to other packages unless explicitly approved in writing.`,
              },
              {
                q: 'How does EdgeLab ensure my website stays under the free limits?',
                a: 'We architect your Next.js application with static generation (SSG) for all marketing pages, cache assets aggressively at the CDN edge, route customer enquiries directly to WhatsApp where appropriate, and optimize backend worker endpoints so unnecessary requests are never triggered.',
              },
              {
                q: 'Are database and AI API costs included in the Workers Free tier?',
                a: 'No. Cloudflare provides separate products (like Cloudflare D1 SQL database or Workers AI) which have their own independent free and paid tiers. External third-party APIs (like OpenAI or payment gateways) charge their own fees and are not made free by hosting on Workers.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E4E8DE] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-sm text-[#212413]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#565F45] transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-[#444F24]' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-[#565F45] leading-relaxed border-t border-[#F3F5FA]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. Final Calculator Conversion Banner
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#122311] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight mb-4 text-white">
            Ready to Architect Your Website Backend?
          </h2>
          <p className="text-sm text-[#B6BBD9] max-w-xl mx-auto mb-8 leading-relaxed">
            Get an exact technical assessment and deployment roadmap from EdgeLab engineers. No guesswork, no hidden hosting fees.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(generateWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full bg-[#444F24] hover:bg-[#52602c] text-white text-sm font-semibold tracking-wide transition-all shadow-lg active:scale-[0.98]"
            >
              <span>Discuss My Website on WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-[#B6BBD9]" />
            </a>

            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#1e341c] hover:bg-[#284426] border border-[#444F24] text-white text-sm font-medium transition-all active:scale-[0.98]"
            >
              <span>Explore All Packages</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
