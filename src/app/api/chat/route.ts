import { NextRequest, NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// ─────────────────────────────────────────────────
// RATE LIMITING — In-memory store (per-server-instance)
// Protects server from abuse / DoS
// ─────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 30; // 30 messages per minute per IP
const MAX_MESSAGE_LENGTH = 1000; // max characters per message

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1'
  );
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now };
  }

  record.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count, resetIn: record.resetTime - now };
}

// Clean stale entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap) {
    if (now > record.resetTime) rateLimitMap.delete(ip);
  }
}, 5 * 60_000);

// ─────────────────────────────────────────────────
// EDGELAB SYSTEM PROMPT FOR AI LLM
// ─────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are EdgeLab Assistant — the official AI client concierge and digital strategy consultant for EdgeLab Digital Solutions.
EdgeLab is a premier creative technology studio and digital agency based in India. Tagline: "Your business, finally online."
Official Contact:
- WhatsApp & Phone: +91 60001 56107
- Email: edgelab.work@gmail.com
- Instagram: @edgelab.work (https://instagram.com/edgelab.work)
- Official Website: https://edge-lab.dev

CORE CAPABILITIES:
1. Bespoke Web Engineering: Next.js 16, React 19, Tailwind CSS, 99/100 Google PageSpeed, sub-second edge loading, zero template bloat.
2. Digital Operations & Portals: Interactive QR ordering menus, real-time kitchen dispatch, administrative command suites, client intake portals.
3. Commercial Studio Photography: On-site food, interior, architectural, and product photography.
4. Cinematic Vertical Video & Reels: 4K cinema cameras, sound foley, pacing optimized for high retention on Instagram and YouTube Shorts.
5. Social Media Management: Complete aesthetic feed direction, grid curation, weekly copywriting, content calendar, and publishing.
6. Website Management & Care: Continuous uptime monitoring, SSL, menu/pricing updates, security, and priority WhatsApp support.

PRICING PACKAGES & RUNNING-COST BENEFITS (Available in USD for international clients, and INR for Indian clients):
1. Starter Package: $399 USD / ₹4,999 INR (Reference: $499 USD / ₹5,999 INR). Standard running cost $25/month or ₹1,699/month according to agreed scope. Essential business website, mobile-first, contact info, WhatsApp & social links, basic SEO.
2. Business Plus: $899 USD / ₹14,999 INR one-time. First 3 months of running cost included (standard $25/mo or ₹1,699/mo begins after 3 months). Custom design, gallery/catalogue, enquiry forms, enhanced SEO. Eligible for EdgeLab 18% Cloudflare Workers Free offer ($737.18 USD / ₹12,299.18 INR, save $161.82 USD / ₹2,699.82 INR) when choosing eligible Cloudflare Workers Free hosting.
3. EdgeCare: $1,499 USD / ₹24,999 INR (Reference: $1,699 USD / ₹25,999 INR). First 6 months of running cost included (then $25/mo or ₹1,699/mo). Everything in Business Plus + defined website maintenance, 24/7 uptime monitoring, bug fixes, updates, speed checks, and priority support allowance.
4. EdgeLab Ultimate: $2,499 USD / ₹37,999 INR (Reference: $2,799 USD / ₹39,999 INR). Running cost is free for the lifetime of qualifying service agreement. Full-spectrum: website design & dev, brand/product photography, reels and short-form video production, social media management, Google Business Profile support, and performance marketing management. (Meta ad spend paid separately by client).

CLOUDFLARE WORKERS CALCULATOR:
- Route: /cloudflare-workers-calculator
- Allows visitors to estimate their daily backend Worker requests and determine if Cloudflare Workers Free (100,000 req/day quota) fits their workload.
- EdgeLab 18% discount applies to qualifying purchases above $500 USD / ₹9,000 INR (such as Business Plus at $899 -> $737.18, or ₹14,999 -> ₹12,299.18) when choosing Cloudflare Workers Free hosting. Note: This is an EdgeLab agency offer, not a Cloudflare discount.

LIVE SHOWCASE PROJECTS:
- NOIRÉ Luxury Couture Atelier (https://noire-couture.netlify.app/): High-fashion digital runway with editorial storytelling and visual commerce.
- Smart Restaurant Experience (https://restaurant-live-portal.netlify.app/): Digital dining platform with table QR ordering and real-time kitchen ticketing.

CONVERSATION GUIDELINES:
- Speak like a friendly, sharp, knowledgeable digital agency consultant talking directly to a prospective client.
- Always address the user's specific question or comment first. Never give robotic, repetitive answers.
- If the user says "hi", "hello", "hey", greet them warmly, introduce EdgeLab, and ask what kind of business or project they are looking to bring online.
- If asked about pricing or plans, present the 4 tiers (in the user's preferred currency, mentioning USD $399 - $2,499 and INR ₹4,999 - ₹37,999), highlight why Business Plus ($899 / ₹14,999 with 3 months free running cost and 18% Cloudflare promotion eligibility) is our featured package, and invite them to discuss on WhatsApp at +91 60001 56107.
- If the user mentions a specific industry (car shop, restaurant, salon, fashion, clinic, real estate), give specific advice on what EdgeLab builds for that industry.
- Keep answers formatted with markdown (bolding, lists, tables) for readability.
- Maintain a warm, encouraging, high-end professional tone at all times.`;

// ─────────────────────────────────────────────────
// TYPES & HELPER FUNCTIONS
// ─────────────────────────────────────────────────
interface ChatHistoryItem {
  role: string;
  content: string;
}

function detectIndustryContext(history: ChatHistoryItem[]): string {
  const allText = history.map((m) => m.content.toLowerCase()).join(' ');

  if (allText.includes('car') || allText.includes('garage') || allText.includes('auto') || allText.includes('mechanic') || allText.includes('vehicle') || allText.includes('detailing')) {
    return 'car shop & automotive workshop';
  }
  if (allText.includes('restaurant') || allText.includes('cafe') || allText.includes('bistro') || allText.includes('dining') || allText.includes('food') || allText.includes('kitchen')) {
    return 'restaurant & dining hospitality';
  }
  if (allText.includes('fashion') || allText.includes('boutique') || allText.includes('clothing') || allText.includes('couture') || allText.includes('apparel') || allText.includes('jewelry')) {
    return 'fashion boutique & luxury atelier';
  }
  if (allText.includes('clinic') || allText.includes('doctor') || allText.includes('hospital') || allText.includes('dental') || allText.includes('health') || allText.includes('medical')) {
    return 'healthcare clinic & medical practice';
  }
  if (allText.includes('salon') || allText.includes('spa') || allText.includes('beauty') || allText.includes('hair') || allText.includes('makeup')) {
    return 'beauty salon & wellness spa';
  }
  if (allText.includes('real estate') || allText.includes('property') || allText.includes('builder') || allText.includes('architect')) {
    return 'real estate & architectural studio';
  }
  return '';
}

// ─────────────────────────────────────────────────
// DYNAMIC CONVERSATIONAL AGENT ENGINE
// Provides rich, dynamic, multi-turn dialogue with zero static repetition
// ─────────────────────────────────────────────────
function generateDynamicAgentResponse(userText: string, history: ChatHistoryItem[], currency: 'USD' | 'INR' = 'USD'): string {
  const text = userText.toLowerCase().trim();
  const industry = detectIndustryContext(history);
  const userTurnsCount = history.filter((m) => m.role === 'user').length;

  const isUSD = currency === 'USD';
  const starterPrice = isUSD ? '$399' : '₹4,999';
  const starterRef = isUSD ? '$499' : '₹5,999';
  const businessPlusPrice = isUSD ? '$899' : '₹14,999';
  const businessPlusDiscounted = isUSD ? '$737.18' : '₹12,299.18';
  const edgeCarePrice = isUSD ? '$1,499' : '₹24,999';
  const edgeCareRef = isUSD ? '$1,699' : '₹25,999';
  const ultimatePrice = isUSD ? '$2,499' : '₹37,999';
  const ultimateRef = isUSD ? '$2,799' : '₹39,999';
  const runningCost = isUSD ? '$25/mo' : '₹1,699/mo';

  // 1. GREETINGS & INTRODUCTIONS
  const isGreeting =
    /^(hi|hello|hey|heya|howdy|good\s*(morning|afternoon|evening)|yo|hola|namaste)(\s|!|\.|\?|$)/i.test(text) ||
    text === 'hi' ||
    text === 'hello' ||
    text === 'hey' ||
    text === 'helo';

  if (isGreeting) {
    if (userTurnsCount <= 1) {
      return (
        "Hello! Welcome to EdgeLab Digital Solutions 👋\n\n" +
        "I'm your AI digital consultant. We help ambitious businesses establish a world-class digital presence — from bespoke Next.js websites and custom portals to commercial video reels and ongoing social media management.\n\n" +
        "What type of business or project are you looking to bring online today? Tell me a little about your brand, and I'll walk you through our best solutions!"
      );
    } else if (userTurnsCount === 2) {
      return (
        "Hey again! How can I assist you right now?\n\n" +
        "Here are a few quick ways I can help:\n" +
        `• **Pricing & Packages**: We offer 4 clear tiers: Starter (${starterPrice}), Business Plus (${businessPlusPrice} — our most popular), EdgeCare (${edgeCarePrice}), and Ultimate (${ultimatePrice}).\n` +
        "• **Cloudflare Workers Calculator**: Estimate whether your backend can run on Cloudflare Workers Free (100k requests/day).\n" +
        "• **Direct Consultation**: Connect with our project directors directly on WhatsApp at **+91 60001 56107**.\n\n" +
        "What would you like to explore?"
      );
    } else {
      return (
        "Still right here with you! What's on your mind? Feel free to ask about our website development process, commercial photography, or request a custom price estimate for your business."
      );
    }
  }

  // 2. GRATITUDE / ACKNOWLEDGEMENT
  const isGratitude =
    /^(thank\s*you|thanks|thx|great|awesome|cool|nice|okay|ok|got it|sounds good|perfect|super)(\s|!|\.|$)/i.test(text);

  if (isGratitude) {
    const contextNote = industry ? ` for your **${industry}**` : '';
    return (
      `You're very welcome! Glad I could help.\n\n` +
      `If you'd like to take the next step${contextNote}, we can prepare a tailored blueprint and discuss exact timelines.\n\n` +
      `Feel free to message our team directly on WhatsApp at **+91 60001 56107** or let me know if you have any more questions about our plans, features, or process!`
    );
  }

  // 3. IDENTITY & CAPABILITIES
  if (
    text.includes('who are you') ||
    text.includes('what are you') ||
    text.includes('are you an ai') ||
    text.includes('are you human') ||
    text.includes('what is this')
  ) {
    return (
      "I am the **EdgeLab AI Assistant** — an intelligent concierge built directly by EdgeLab Digital Solutions.\n\n" +
      "I'm trained on all of EdgeLab's engineering frameworks, service capabilities, design methodologies, and pricing packages. I can:\n" +
      "• Help you pick the ideal website package for your business\n" +
      "• Explain our technical stack (Next.js 16, sub-second speed, 99/100 PageSpeed)\n" +
      "• Share examples of our live production work\n" +
      "• Connect you directly with an EdgeLab Project Director on WhatsApp\n\n" +
      "How can I assist your business today?"
    );
  }

  // 4. PRICING, PLANS, TIERS, PACKAGES, COSTS
  const isPlanQuery =
    text.includes('plan') ||
    text.includes('pln') ||
    text.includes('price') ||
    text.includes('pricing') ||
    text.includes('cost') ||
    text.includes('rate') ||
    text.includes('charge') ||
    text.includes('how much') ||
    text.includes('package') ||
    text.includes('tier') ||
    text.includes('budget') ||
    text.includes('fee');

  if (isPlanQuery) {
    const contextHeader = industry
      ? `Here are our approved packages and running-cost benefits tailored for your **${industry}**:\n\n`
      : `Here is our approved EdgeLab package breakdown:\n\n`;

    return (
      `${contextHeader}| Package | Investment | Running Cost Benefit | Key Deliverables |\n` +
      `| :--- | :--- | :--- | :--- |\n` +
      `| **Starter** | **${starterPrice}** ~${starterRef}~ | Standard ${runningCost} | Professional business website, responsive, essential pages, contact, basic SEO |\n` +
      `| **Business Plus ⭐** | **${businessPlusPrice}** | **First 3 Months FREE** (then ${runningCost}) | Custom design, catalogue, contact forms, enhanced SEO. **Eligible for 18% off (${businessPlusDiscounted}) with Cloudflare Workers Free!** |\n` +
      `| **EdgeCare** | **${edgeCarePrice}** ~${edgeCareRef}~ | **First 6 Months FREE** (then ${runningCost}) | Everything in Business Plus + defined maintenance, 24/7 uptime monitoring, updates & priority support |\n` +
      `| **EdgeLab Ultimate** | **${ultimatePrice}** ~${ultimateRef}~ | **FREE for Lifetime** of agreement | Complete partner: bespoke web + photo shoot + reels production + social media + performance marketing |\n\n` +
      `⭐ **POPULAR CHOICE: Business Plus (${businessPlusPrice})**\n` +
      `Includes 3 months of running costs completely free! Plus, if you choose eligible Cloudflare Workers Free hosting, our 18% promotion drops the service fee to **${businessPlusDiscounted}**.\n\n` +
      `You can also calculate your backend usage on our new [Cloudflare Workers Calculator](/cloudflare-workers-calculator).\n\n` +
      `Would you like to discuss the best fit for your project with our team on WhatsApp at **+91 60001 56107**?`
    );
  }

  // 5. CAR SHOPS & AUTOMOTIVE WORKSHOPS
  if (
    text.includes('car') ||
    text.includes('garage') ||
    text.includes('auto') ||
    text.includes('mechanic') ||
    text.includes('detailing') ||
    text.includes('vehicle') ||
    text.includes('repair shop')
  ) {
    return (
      "We build high-converting bespoke platforms specifically for **car workshops, auto garages, and car detailing studios**!\n\n" +
      "Here is the exact setup we engineer for automotive businesses:\n" +
      "1. **Interactive Service Menu**: Clear breakdown of repair services, periodic maintenance, detailing tiers, and ceramic coating packages.\n" +
      "2. **Instant WhatsApp Quote & Photo Upload**: Customers can send a photo of vehicle damage or request instant service quotes directly to your WhatsApp in 1 click.\n" +
      "3. **Google Local SEO & Maps Domination**: We optimize your platform so local car owners searching *'car repair near me'* or *'best auto workshop'* find your shop first.\n" +
      "4. **Before & After Work Showcase**: Interactive visual sliders showcasing recent detailing and repair transformations.\n" +
      "5. **Customer Reviews & Trust Badges**: Real Google reviews embedded directly to build immediate trust.\n\n" +
      "⭐ **Recommended Package:** Our **Business Plus at " + businessPlusPrice + "** includes custom design, full service menu, SEO optimization, and 3 months of free running cost (plus Cloudflare 18% promotion eligibility).\n\n" +
      "Would you like us to prepare a custom blueprint for your car shop? You can also message our team directly on WhatsApp at **+91 60001 56107**!"
    );
  }

  // 6. RESTAURANTS, CAFES, DINING & FOOD
  if (
    text.includes('restaurant') ||
    text.includes('cafe') ||
    text.includes('bistro') ||
    text.includes('food') ||
    text.includes('dining') ||
    text.includes('menu') ||
    text.includes('kitchen')
  ) {
    return (
      "We build complete digital dining ecosystems for **restaurants, cafes, and bistros**!\n\n" +
      "Key capabilities we provide:\n" +
      "• **Interactive Digital QR Menus**: Mobile-first menus with high-resolution food imagery, dietary filters (Veg/Non-Veg), and chef specials.\n" +
      "• **Direct WhatsApp Ordering & Table Reservations**: Keep 100% of your revenue with **0% commission cuts** to aggregators like Zomato/Swiggy.\n" +
      "• **Live Kitchen & Dispatch Portal**: Real-time staff queue and table status management.\n" +
      "• **Live Production Example**: Check out our live case study: [Aura Royale Bistro](https://restaurant-live-portal.netlify.app/) to see the customer and kitchen portals in action!\n\n" +
      "⭐ **Recommended Plan:** Our **Business Plus (" + businessPlusPrice + ")** with full online ordering and 3 months of free running cost included. Let's discuss your menu on WhatsApp at **+91 60001 56107**!"
    );
  }

  // 7. FASHION, LUXURY, ATELIER & BOUTIQUE
  if (
    text.includes('fashion') ||
    text.includes('boutique') ||
    text.includes('clothing') ||
    text.includes('couture') ||
    text.includes('apparel') ||
    text.includes('jewelry')
  ) {
    return (
      "We craft immersive digital runways and visual commerce platforms for **fashion ateliers, boutiques, and couture designers**.\n\n" +
      "What we deliver for fashion brands:\n" +
      "• **Editorial Runway Presentation**: Haute-couture typography, cinematic lookbooks, and smooth micro-interactions.\n" +
      "• **High-Res Fabric & Drape Inspection**: Tactile product zoom and curated collection storytelling.\n" +
      "• **1-Click Checkout & WhatsApp Inquiries**: Direct purchasing with zero aggregator commission fees.\n" +
      "• **Live Flagship Example**: Explore our production platform [NOIRÉ Luxury Couture](https://noire-couture.netlify.app/) to see how we blend luxury aesthetics with sub-second speeds.\n\n" +
      "Shall we discuss creating a digital runway for your collection? Let's connect on WhatsApp at **+91 60001 56107**!"
    );
  }

  // 8. SERVICES & CAPABILITIES OVERVIEW
  if (
    text.includes('service') ||
    text.includes('what do you do') ||
    text.includes('what can you do') ||
    text.includes('offer') ||
    text.includes('help me')
  ) {
    return (
      "EdgeLab is a complete digital partner for growing businesses. We cover the entire digital stack under one roof:\n\n" +
      "1. **Bespoke Website Engineering**: Custom Next.js 16 platforms with sub-second speed, 99/100 PageSpeed, and custom UI design.\n" +
      "2. **Social Media Management**: Curated Instagram feed aesthetics, engaging copywriting, content calendars, and community growth.\n" +
      "3. **Commercial Studio Photography**: On-site product shoots, store interiors, food catalogs, and high-res retouching.\n" +
      "4. **Cinematic 9:16 Video & Reels**: 4K vertical reels with hook pacing and sound foley designed to stop the scroll.\n" +
      "5. **Local SEO & Google Search**: Google Business profile setup and local map ranking to drive organic walk-in inquiries.\n" +
      "6. **Website Care & Management**: Continuous uptime monitoring, SSL security, menu updates, and priority WhatsApp support.\n\n" +
      "Which of these capabilities are you most interested in for your business?"
    );
  }

  // 9. TIMELINE, PROCESS & SPEED
  if (
    text.includes('how long') ||
    text.includes('timeline') ||
    text.includes('time') ||
    text.includes('fast') ||
    text.includes('process') ||
    text.includes('steps') ||
    text.includes('how do you work')
  ) {
    return (
      "Our delivery process is streamlined, collaborative, and fast:\n\n" +
      "• **Starter Plan (1 Page)**: Delivered in **3 to 5 business days**.\n" +
      "• **Business Plan (Up to 5 Pages)**: Delivered in **7 to 10 business days**.\n" +
      "• **Business Plus (Up to 8 Pages)**: Delivered in **10 to 14 business days**.\n" +
      "• **Custom Applications**: Typically **2 to 3 weeks** depending on backend complexity.\n\n" +
      "Our 5-step milestone roadmap: Discover → Strategy → Design → Build → Launch & Grow.\n\n" +
      "Need a fast turnaround for an upcoming launch? Let us know your deadline on WhatsApp at **+91 60001 56107**!"
    );
  }

  // 10. TECHNICAL STACK & ARCHITECTURE
  if (
    text.includes('tech') ||
    text.includes('stack') ||
    text.includes('next.js') ||
    text.includes('react') ||
    text.includes('wordpress') ||
    text.includes('speed') ||
    text.includes('hosting') ||
    text.includes('seo')
  ) {
    return (
      "We build with a modern, high-performance engineering stack:\n\n" +
      "• **Frontend**: Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.\n" +
      "• **Performance**: 99/100 Google PageSpeed scores with sub-second LCP (Largest Contentful Paint) and edge deployment.\n" +
      "• **Zero Template Bloat**: Unlike slow WordPress or Wix sites, our platforms are 100% hand-crafted with clean, semantic code that Google loves to rank.\n" +
      "• **Infrastructure**: Global CDN edge hosting, automatic SSL encryption, and automated mobile responsiveness.\n\n" +
      "Would you like us to run a performance audit on your current website?"
    );
  }

  // 11. CONTACT & WHATSAPP
  if (
    text.includes('contact') ||
    text.includes('phone') ||
    text.includes('call') ||
    text.includes('whatsapp') ||
    text.includes('number') ||
    text.includes('talk to someone') ||
    text.includes('human') ||
    text.includes('lead') ||
    text.includes('director')
  ) {
    return (
      "You can connect directly with the EdgeLab team through any of our channels:\n\n" +
      "• **WhatsApp**: [+91 60001 56107](https://wa.me/916000156107?text=Hi%20EdgeLab%2C%20I%20would%20like%20to%20consult%20with%20your%20team.) *(Fastest response — within a few minutes)*\n" +
      "• **Direct Phone Call**: +91 60001 56107\n" +
      "• **Official Email**: edgelab.work@gmail.com\n" +
      "• **Instagram**: [@edgelab.work](https://instagram.com/edgelab.work)\n\n" +
      "We'd love to review your requirements, share demo blueprints, and give you an exact price and timeline!"
    );
  }

  // 12. PORTFOLIO & LIVE WORK
  if (
    text.includes('portfolio') ||
    text.includes('work') ||
    text.includes('example') ||
    text.includes('sample') ||
    text.includes('case study') ||
    text.includes('projects')
  ) {
    return (
      "You can inspect our live productions right now:\n\n" +
      "1. **NOIRÉ Luxury Couture Atelier** ([noire-couture.netlify.app](https://noire-couture.netlify.app/))\n" +
      "   • High-fashion digital runway with editorial lookbooks and tactile product interactions.\n\n" +
      "2. **Smart Restaurant Experience** ([restaurant-live-portal.netlify.app](https://restaurant-live-portal.netlify.app/))\n" +
      "   • Full digital dining platform with table QR ordering and real-time kitchen ticketing.\n\n" +
      "Both platforms achieve 99/100 PageSpeed scores and sub-second load times. Would you like a similar bespoke build for your business?"
    );
  }

  // 13. CONVERSATIONAL FALLBACK (Contextual, never repetitive)
  const lastUserTopic = history
    .slice(-3)
    .filter((m) => m.role === 'user')
    .map((m) => m.content)
    .join(' ');

  if (industry) {
    return (
      `Thanks for sharing that! For your **${industry}**, our standard recommendation is the **Business Plus Package (${businessPlusPrice})** because it includes bespoke custom design, product/service catalogue, contact forms, enhanced local SEO, and **3 months of free running costs**.\n\n` +
      `Plus, if you host your backend with Cloudflare Workers Free, you qualify for our **18% promotional discount (${businessPlusDiscounted})**.\n\n` +
      `Is there a specific feature you'd like your website to have (such as an online catalog, booking calendar, or photo gallery), or would you prefer a custom quote from our team on WhatsApp at **+91 60001 56107**?`
    );
  }

  return (
    `I understand you're looking into "${userText.slice(0, 50)}...". At EdgeLab, we design and build bespoke digital solutions tailored to your exact business model.\n\n` +
    `Our packages start at **${starterPrice}** for the Starter Package and **${businessPlusPrice}** for our most popular **Business Plus Package** (with 3 months free running cost and 18% Cloudflare promotion eligibility).\n\n` +
    `Could you tell me a little more about your business or industry? That way I can give you an exact recommendation and scope breakdown!`
  );
}

// ─────────────────────────────────────────────────
// OLLAMA FREE API DISCOVERY (With 15s generous timeout)
// ─────────────────────────────────────────────────
interface ActiveServer {
  host: string;
  model: string;
  lastChecked: number;
}

const KNOWN_SERVERS = [
  'http://108.181.196.208:11434',
  'http://127.0.0.1:11434',
  'http://localhost:11434',
];

let cachedActiveServer: ActiveServer | null = null;
const CACHE_TTL_MS = 10 * 60_000;

async function findActiveOllamaServer(): Promise<ActiveServer | null> {
  const now = Date.now();
  if (cachedActiveServer && now - cachedActiveServer.lastChecked < CACHE_TTL_MS) {
    return cachedActiveServer;
  }

  for (const host of KNOWN_SERVERS) {
    try {
      const tagRes = await fetch(`${host}/api/tags`, { signal: AbortSignal.timeout(2500) });
      if (!tagRes.ok) continue;

      const tagData = await tagRes.json();
      const installedModels: string[] = tagData.models?.map((m: { name: string }) => m.name) || [];

      let selectedModel = '';
      if (installedModels.includes('llama3.2:latest')) selectedModel = 'llama3.2:latest';
      else if (installedModels.includes('llama3.2')) selectedModel = 'llama3.2';
      else if (installedModels.includes('llama3.1:latest')) selectedModel = 'llama3.1:latest';
      else if (installedModels.some((m) => m.includes('qwen') || m.includes('llama'))) {
        selectedModel = installedModels.find((m) => m.includes('qwen') || m.includes('llama')) || installedModels[0];
      } else {
        selectedModel = installedModels[0];
      }

      if (selectedModel) {
        cachedActiveServer = { host, model: selectedModel, lastChecked: now };
        return cachedActiveServer;
      }
    } catch {
      // try next server
    }
  }

  return null;
}

// ─────────────────────────────────────────────────
// POST HANDLER
// ─────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = getClientIp(req);
    const rateCheck = checkRateLimit(ip);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: 'Rate limit reached. Please wait a moment before sending more messages.',
          resetIn: Math.ceil(rateCheck.resetIn / 1000),
        },
        { status: 429, headers: corsHeaders }
      );
    }

    // 2. Validate Request Body
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json({ error: 'Valid messages array is required.' }, { status: 400, headers: corsHeaders });
    }

    const messages = body.messages as ChatHistoryItem[];
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || typeof lastMessage.content !== 'string' || !lastMessage.content.trim()) {
      return NextResponse.json({ error: 'Message content cannot be empty.' }, { status: 400, headers: corsHeaders });
    }

    if (lastMessage.content.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message is too long. Maximum allowed is ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400, headers: corsHeaders }
      );
    }

    const userText = lastMessage.content.trim();

    // 3. PRIMARY ATTEMPT: True Ollama AI LLM with 15-second timeout
    const activeServer = await findActiveOllamaServer();
    if (activeServer) {
      try {
        const recentHistory = messages.slice(-6).map((m) => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: m.content.trim(),
        }));

        const ollamaRes = await fetch(`${activeServer.host}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: activeServer.model,
            messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...recentHistory],
            stream: false,
            options: {
              temperature: 0.7,
              num_predict: 250,
              top_p: 0.9,
            },
          }),
          signal: AbortSignal.timeout(15000), // 15-second generous timeout for real LLM reasoning
        });

        if (ollamaRes.ok) {
          const data = await ollamaRes.json();
          let aiText = data?.message?.content?.trim();

          if (aiText) {
            // Strip any <think> tags from thinking models
            aiText = aiText.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
            if (aiText.length > 0) {
              return NextResponse.json(
                {
                  response: aiText,
                  model: activeServer.model,
                  remaining: rateCheck.remaining,
                },
                { headers: corsHeaders }
              );
            }
          }
        }
      } catch (ollamaErr) {
        console.warn('Ollama attempt timed out or failed, engaging EdgeLab Dynamic Agent Engine:', ollamaErr);
      }
    }

    // 4. SECONDARY ATTEMPT: Dynamic Agent Engine (Non-repetitive, context-aware, instant)
    const currency = (body.currency === 'INR' ? 'INR' : 'USD') as 'USD' | 'INR';
    const agentResponse = generateDynamicAgentResponse(userText, messages, currency);
    return NextResponse.json(
      {
        response: agentResponse,
        model: 'edgelab-agent-engine',
        remaining: rateCheck.remaining,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please connect directly on WhatsApp at +91 60001 56107.' },
      { status: 500, headers: corsHeaders }
    );
  }
}
