'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  MessageSquare,
  X,
  Send,
  ArrowRight,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Phone,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { getWhatsAppUrl, CONTACT } from '@/config/site';

// ─────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

// ─────────────────────────────────────────────────
// Helper: Render Markdown, Tables, and Badges Cleanly
// ─────────────────────────────────────────────────
const FormattedMessage: React.FC<{
  content: string;
  onQuickAction: (action: string) => void;
}> = ({ content, onQuickAction }) => {
  // Parse message into segments: text, table, bullet points
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let tableRows: string[] = [];
  let inTable = false;

  const flushTable = (key: string) => {
    if (tableRows.length === 0) return;
    const headerRow = tableRows[0];
    const dataRows = tableRows.slice(2); // Skip separator row

    const parseCells = (row: string) =>
      row
        .split('|')
        .map((c) => c.trim())
        .filter((c, i, arr) => i > 0 && i < arr.length - 1 || c.length > 0);

    const headers = parseCells(headerRow);

    elements.push(
      <div key={key} className="my-2.5 overflow-x-auto rounded-xl border border-[#1A281E]/15 shadow-2xs">
        <table className="w-full text-left text-[11px] border-collapse bg-white">
          <thead>
            <tr className="bg-[#162319] text-white">
              {headers.map((h, i) => (
                <th key={i} className="px-2.5 py-1.5 font-bold tracking-tight border-b border-[#25392B]">
                  {h.replace(/\*\*/g, '')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((r, rIdx) => {
              const cells = parseCells(r);
              const isRecommended = r.includes('RECOMMENDED') || r.includes('⭐') || r.includes('8,999');
              return (
                <tr
                  key={rIdx}
                  className={`border-b border-[#E8EEEA] transition-colors ${
                    isRecommended ? 'bg-[#EBF7EF] font-semibold text-[#0B281B]' : 'hover:bg-[#F9FAF8]'
                  }`}
                >
                  {cells.map((c, cIdx) => (
                    <td key={cIdx} className="px-2.5 py-2 leading-tight">
                      {c.includes('RECOMMENDED') ? (
                        <span className="inline-block px-1.5 py-0.5 rounded-sm bg-[#10B981] text-white text-[9px] font-bold tracking-wider">
                          ⭐ RECOMMENDED
                        </span>
                      ) : (
                        c.replace(/\*\*/g, '')
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Check if line is part of a markdown table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      inTable = true;
      tableRows.push(trimmed);
      return;
    } else if (inTable) {
      flushTable(`table-${index}`);
    }

    if (!trimmed) {
      elements.push(<div key={`sp-${index}`} className="h-1.5" />);
      return;
    }

    // Recommendation Banner
    if (trimmed.startsWith('⭐ **OUR RECOMMENDATION') || trimmed.startsWith('⭐ **Recommended Plan')) {
      elements.push(
        <div
          key={`rec-${index}`}
          className="my-2 p-2.5 rounded-xl bg-gradient-to-r from-[#EBF7EF] to-[#D8F0E1] border border-[#A7F3D0] text-[#0C1E12] text-[11.5px]"
        >
          <div className="font-bold text-[#047857] flex items-center gap-1.5 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>RECOMMENDED BEST-VALUE PLAN</span>
          </div>
          <div>{trimmed.replace(/^⭐ \*\*.*?\*\*/, '').trim()}</div>
        </div>
      );
      return;
    }

    // Bullet points
    if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
      const textOnly = trimmed.replace(/^[•\-\*]\s*/, '');
      const parts = textOnly.split(/(\*\*.*?\*\*)/g);

      elements.push(
        <div key={`li-${index}`} className="flex items-start gap-1.5 my-1 text-[12px] text-[#1F2C24]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0" />
          <span>
            {parts.map((p, pIdx) => {
              if (p.startsWith('**') && p.endsWith('**')) {
                return (
                  <strong key={pIdx} className="font-bold text-[#0B281B]">
                    {p.slice(2, -2)}
                  </strong>
                );
              }
              return p;
            })}
          </span>
        </div>
      );
      return;
    }

    // Numbered points (e.g. 1. 2. 3.)
    if (/^\d+\.\s/.test(trimmed)) {
      const numMatch = trimmed.match(/^(\d+)\.\s*(.*)$/);
      if (numMatch) {
        const num = numMatch[1];
        const body = numMatch[2];
        const parts = body.split(/(\*\*.*?\*\*)/g);

        elements.push(
          <div key={`num-${index}`} className="flex items-start gap-2 my-1.5 text-[12px] text-[#1F2C24]">
            <span className="w-4 h-4 rounded-full bg-[#162319] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {num}
            </span>
            <span>
              {parts.map((p, pIdx) => {
                if (p.startsWith('**') && p.endsWith('**')) {
                  return (
                    <strong key={pIdx} className="font-bold text-[#0B281B]">
                      {p.slice(2, -2)}
                    </strong>
                  );
                }
                return p;
              })}
            </span>
          </div>
        );
        return;
      }
    }

    // Standard paragraph with bolding and links
    const parts = trimmed.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    elements.push(
      <p key={`p-${index}`} className="my-1 text-[12px] text-[#1F2C24] leading-relaxed">
        {parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={pIdx} className="font-bold text-[#0B281B]">
                {part.slice(2, -2)}
              </strong>
            );
          }
          const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
          if (linkMatch) {
            return (
              <a
                key={pIdx}
                href={linkMatch[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#059669] underline font-semibold hover:text-[#047857]"
              >
                {linkMatch[1]}
              </a>
            );
          }
          return part;
        })}
      </p>
    );
  });

  if (inTable) {
    flushTable('table-final');
  }

  // If plans or pricing were mentioned, append quick CTA action chips
  const hasPlans = content.includes('Starter') || content.includes('Business Plan') || content.includes('₹8,999');

  return (
    <div>
      {elements}

      {hasPlans && (
        <div className="mt-2.5 pt-2 border-t border-[#1A281E]/10 flex flex-wrap gap-1.5">
          <button
            onClick={() => onQuickAction('I want to start with the Business Plan (₹8,999)')}
            className="px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-[#162319] text-white hover:bg-[#25392B] transition-all flex items-center gap-1 shadow-2xs"
          >
            <span>⭐ Lock In Business Plan (₹8,999)</span>
          </button>
          <a
            href={getWhatsAppUrl("Hi EdgeLab, I'd like to get started with the Business Plan (₹8,999).")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-full text-[10.5px] font-semibold bg-[#EBF7EF] text-[#047857] border border-[#A7F3D0] hover:bg-[#D8F0E1] transition-all flex items-center gap-1"
          >
            <MessageSquare className="w-3 h-3 text-[#10B981]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────
export const ChatbotAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Quick action prompts
  const quickActions = [
    { label: '💰 Show all plans & pricing', prompt: 'What plans do you have? Show me all pricing' },
    { label: '🚗 Website for my car shop', prompt: 'I need a website for my car shop' },
    { label: '🍽️ Restaurant / Cafe platform', prompt: 'I need a website for my restaurant' },
    { label: '🛠️ What services do you offer?', prompt: 'What services do you offer?' },
    { label: '📞 Connect with EdgeLab team', prompt: 'Connect me with the team on WhatsApp' },
  ];

  // ─── Auto-open on first visit ────────────────
  useEffect(() => {
    if (hasAutoOpened) return;
    const hasOpened = sessionStorage.getItem('edgelab-chat-opened');
    if (!hasOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem('edgelab-chat-opened', 'true');
        // Welcome message with quick options
        setMessages([
          {
            id: 'welcome',
            role: 'assistant',
            content:
              "Hello! Welcome to EdgeLab Digital Solutions 👋\n\nWe build high-performance bespoke websites, commercial video reels, and complete digital systems. Tell me what type of business you run, or choose an option below!",
            timestamp: Date.now(),
          },
        ]);
      }, 2500); // 2.5 second delay after page load
      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  // ─── Scroll to bottom on new messages ────────
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // ─── Focus input when panel opens ────────────
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // ─── Send message to API ─────────────────────
  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: content.trim(),
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');
      setIsLoading(true);
      setError(null);

      try {
        const history = [...messages, userMessage]
          .filter((m) => m.role !== 'system')
          .slice(-8)
          .map((m) => ({ role: m.role, content: m.content }));

        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history }),
        });

        const data = await res.json();

        if (!res.ok) {
          if (res.status === 429) {
            setError(`Rate limit reached. Please wait ${data.resetIn || 60} seconds.`);
          } else {
            setError(data.error || 'Something went wrong. Please connect on WhatsApp.');
          }
          return;
        }

        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: data.response,
          timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        setError('Network issue. You can chat directly on WhatsApp at +91 60001 56107.');
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleQuickAction = (promptText: string) => {
    sendMessage(promptText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content:
          "Conversation reset! I'm the EdgeLab Assistant — ready to help with our web packages, pricing, or custom business solutions. What can I build for you?",
        timestamp: Date.now(),
      },
    ]);
    setError(null);
  };

  const openWhatsApp = () => {
    const url = getWhatsAppUrl("Hi EdgeLab, I'm inquiring about starting a website project for my business.");
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end"
      style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
    >
      {/* ────── Chat Panel ────── */}
      {isOpen && (
        <div
          className="mb-3 w-[360px] sm:w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#162319]/20"
          style={{
            background: 'linear-gradient(180deg, #FAFCFA 0%, #FFFFFF 100%)',
            boxShadow: '0 25px 70px -10px rgba(22, 35, 25, 0.4), 0 0 0 1px rgba(22, 35, 25, 0.1)',
            animation: 'chatSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* ── Olive Green Header ── */}
          <div
            className="px-4 py-3.5 flex items-center justify-between"
            style={{
              background: 'linear-gradient(135deg, #142017 0%, #1F3323 100%)',
              borderBottom: '1px solid #263C2D',
            }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(5, 150, 105, 0.5)',
                }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white flex items-center gap-1.5">
                  <span>EdgeLab AI</span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: '#10B981',
                      boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)',
                    }}
                  />
                </div>
                <div className="text-[10.5px] text-[#A7F3D0] font-medium tracking-wide">
                  Digital Concierge • Always Active
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 rounded-lg text-[#A7F3D0] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Reset conversation"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={openWhatsApp}
                className="p-1.5 rounded-lg text-[#A7F3D0] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Contact on WhatsApp"
                title="Direct WhatsApp"
              >
                <Phone className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#A7F3D0] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ── Messages Area ── */}
          <div
            ref={chatContainerRef}
            className="px-3.5 py-3 space-y-3 overflow-y-auto"
            style={{ height: '360px', scrollbarWidth: 'thin', scrollbarColor: '#C2D5C8 transparent' }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 ${
                    msg.role === 'user'
                      ? 'bg-[#142017] text-white'
                      : 'bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-2xs'
                  }`}
                  style={{ fontSize: '10px' }}
                >
                  {msg.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[92%] px-3.5 py-2.5 rounded-2xl text-[12px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#162319] text-white rounded-tr-sm shadow-2xs'
                      : 'bg-[#F2F7F4] text-[#0C120E] border border-[#DFEAE3] rounded-tl-sm shadow-2xs'
                  }`}
                  style={{ wordBreak: 'break-word' }}
                >
                  {msg.role === 'user' ? (
                    <div>{msg.content}</div>
                  ) : (
                    <FormattedMessage content={msg.content} onQuickAction={handleQuickAction} />
                  )}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-2.5">
                <div
                  className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#059669] to-[#10B981] text-white mt-0.5"
                  style={{ fontSize: '10px' }}
                >
                  <Bot className="w-3 h-3" />
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-[#F2F7F4] border border-[#DFEAE3]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-[#059669] font-medium mr-1">Analyzing</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="flex items-start gap-2 px-3 py-2.5 rounded-xl bg-red-50 border border-red-100 text-red-700 text-[11px]">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <div>
                  <span>{error}</span>
                  <button
                    onClick={() => setError(null)}
                    className="block mt-1 text-red-500 underline text-[10px]"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Quick Action Pills (visible when conversation is young) ── */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-3.5 pb-2">
              <div className="text-[10px] uppercase tracking-wider text-[#52665A] font-bold font-mono mb-1.5">
                Suggested Inquiries:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickAction(action.prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[#EBF3EE] hover:bg-[#DCEEE2] text-[#142017] border border-[#C6DDD0] transition-all hover:scale-[1.02] active:scale-[0.98] text-left"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Input Bar ── */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-[#E2EEE7] flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about plans, car shops, pricing..."
              maxLength={800}
              disabled={isLoading}
              className="flex-1 text-[12px] px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-[#D2E2D7] text-[#0C120E] placeholder-[#768C7E] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#142017] hover:bg-[#203325] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all transform active:scale-95 shadow-2xs"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* ── Footer ── */}
          <div className="px-3.5 py-1.5 bg-[#F2F7F4] border-t border-[#E8EEEA] flex items-center justify-between text-[10px] text-[#52665A]">
            <a
              href={getWhatsAppUrl('Hi EdgeLab, I was chatting with your AI concierge and want to talk.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#059669] hover:underline font-semibold flex items-center gap-1"
            >
              <span>Or chat directly on WhatsApp</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="font-mono text-[9px] text-[#718579]">EdgeLab v2.4</span>
          </div>
        </div>
      )}

      {/* ────── Floating Trigger Button (Olive Green) ────── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close EdgeLab AI' : 'Open EdgeLab AI'}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(20,32,23,0.35)] hover:shadow-[0_14px_40px_rgba(20,32,23,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        style={{
          background: 'linear-gradient(135deg, #142017 0%, #1F3323 100%)',
          border: '1px solid #2B4533',
        }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
        </span>

        <span className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
          <span>EdgeLab AI</span>
        </span>

        {isOpen ? (
          <X className="w-3.5 h-3.5 text-[#A7F3D0]" />
        ) : (
          <MessageSquare className="w-3.5 h-3.5 text-[#A7F3D0] group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};
