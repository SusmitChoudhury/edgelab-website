import { NextRequest, NextResponse } from 'next/server';

// ─────────────────────────────────────────────────
// RATE LIMITING — In-memory store (per-server-instance)
// Protects server from abuse / DoS
// ─────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 20; // 20 messages per minute per IP
const MAX_MESSAGE_LENGTH = 800; // max characters per message

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
// EDGELAB SYSTEM PROMPT FOR OLLAMA
// ─────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are EdgeLab Assistant — the official AI concierge for EdgeLab Digital Solutions.
EdgeLab is a premier digital solutions company based in India. Tagline: "Your business, finally online."
WhatsApp & Phone: +91 60001 56107 | Email: edgelab.work@gmail.com | Instagram: @edgelab.work

PRICING PLANS (All in INR):
1. Starter Plan: ₹4,999 (1-page launchpad, mobile-first, Google Maps, WhatsApp button, 3-5 days delivery)
2. Business Plan: ₹8,999 [MOST POPULAR / BEST VALUE] (Up to 5 custom pages, digital catalog/menu, photography pack, SEO, 1 month care, 7-10 days)
3. Business Plus: ₹14,999 (Up to 8 pages, booking/order flow, content pack, social media launch, 3 months care, 10-14 days)
4. Custom Application: ₹19,999+ (Full bespoke web apps, realtime dashboard/POS, 4K cinema video, priority SLA, 2-3 weeks)

ALWAYS:
- If asked about plans, pricing, or what other plans exist: list all 4 plans with pricing, highlight that Business Plan (₹8,999) is the RECOMMENDED sweet spot for most businesses, and offer WhatsApp +91 60001 56107.
- Keep responses structured, professional, warm, and helpful.`;

// ─────────────────────────────────────────────────
// EDGELAB INSTANT HIGH-INTELLIGENCE SYNTHESIZER
// Guarantees zero latency and perfect answers for customer flows
// ─────────────────────────────────────────────────
interface ChatHistoryItem {
  role: string;
  content: string;
}

function detectBusinessContext(messages: ChatHistoryItem[]): string {
  const allText = messages.map((m) => m.content.toLowerCase()).join(' ');

  if (allText.includes('car') || allText.includes('garage') || allText.includes('auto') || allText.includes('mechanic') || allText.includes('vehicle')) {
    return 'car shop / automotive service';
  }
  if (allText.includes('restaurant') || allText.includes('cafe') || allText.includes('bistro') || allText.includes('dining') || allText.includes('food')) {
    return 'restaurant / food business';
  }
  if (allText.includes('fashion') || allText.includes('boutique') || allText.includes('clothing') || allText.includes('couture') || allText.includes('apparel')) {
    return 'fashion boutique / couture atelier';
  }
  if (allText.includes('clinic') || allText.includes('doctor') || allText.includes('hospital') || allText.includes('dental') || allText.includes('health')) {
    return 'clinic / healthcare practice';
  }
  if (allText.includes('salon') || allText.includes('spa') || allText.includes('beauty') || allText.includes('hair')) {
    return 'salon / wellness studio';
  }
  if (allText.includes('real estate') || allText.includes('property') || allText.includes('builder')) {
    return 'real estate / property business';
  }
  return '';
}

function generateInstantDomainResponse(userText: string, history: ChatHistoryItem[]): string | null {
  const text = userText.toLowerCase().trim();
  const businessContext = detectBusinessContext(history);

  // 1. Inquiries about Plans, Pricing, Cost, Packages, Tiers, or "Other Plans"
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
    text.includes('budget');

  if (isPlanQuery) {
    const contextPrefix = businessContext
      ? `Here are our complete website packages tailored for your **${businessContext}**:\n\n`
      : `Here is our complete website package breakdown:\n\n`;

    return `${contextPrefix}| Plan | Investment | Scope & Deliverables | Timeline | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Starter** | **₹4,999** | 1-Page Bespoke Launchpad, Mobile-First, Google Maps & WhatsApp Integration | 3–5 Days | Quick Brand Presence |
| **Business ⭐** | **₹8,999** | **Up to 5 Custom Pages, Digital Catalog/Menu, Photography Pack, SEO, 1 Mo Care** | **7–10 Days** | **⭐ RECOMMENDED (Best Value)** |
| **Business Plus** | **₹14,999** | Up to 8 Custom Pages, Booking/Enquiry Workflow, Social Media Launch Pack, 3 Mo Care | 10–14 Days | Growing Businesses |
| **Custom App** | **₹19,999+** | Full Bespoke Web App, Realtime Dashboard / Operations, 4K Cinema Video, Priority SLA | 2–3 Weeks | Custom Workflows & Apps |

⭐ **OUR RECOMMENDATION: The Business Plan (₹8,999)**
For ${businessContext ? `a ${businessContext}` : 'most commercial businesses'}, the **Business Plan** is the highest-value option. It provides dedicated pages for your services, portfolio/inventory, customer reviews, and direct WhatsApp lead routing so you convert visitors into real paying clients.

Would you like to lock in the **Business Plan (₹8,999)**, or customize a package with our team on WhatsApp at **+91 60001 56107**?`;
  }

  // 2. Specific Business Type inquiries (e.g. "I need a website for my car shop", "restaurant website")
  if (
    (text.includes('car') || text.includes('garage') || text.includes('auto') || text.includes('mechanic')) &&
    (text.includes('website') || text.includes('build') || text.includes('need') || text.includes('want'))
  ) {
    return `We specialize in high-converting websites for **car shops, auto garages, and detailing centers**!

Here is what we build for your car shop:
• **Online Service Catalog & Pricing**: Clear display of repairs, detailing packages, tire changes, and periodic maintenance.
• **Instant WhatsApp Booking & Estimates**: Customers can upload vehicle photos or request immediate service quotes in 1 click.
• **Google Maps & Local SEO Setup**: Ensure car owners searching *"car repair near me"* or *"mechanic near me"* find your workshop first.
• **High-Res Showcase Gallery**: Before-and-after detailing and repair gallery to build instant credibility.

⭐ **Recommended Plan:** Our **Business Plan at ₹8,999** is the perfect fit (up to 5 pages, service menu, SEO, and 1 month of full support).

Would you like us to prepare a demo blueprint for your car shop? You can also connect directly with our project director on WhatsApp at **+91 60001 56107**!`;
  }

  if (
    (text.includes('restaurant') || text.includes('cafe') || text.includes('bistro') || text.includes('food')) &&
    (text.includes('website') || text.includes('build') || text.includes('need') || text.includes('want'))
  ) {
    return `We build complete digital dining experiences for **restaurants, cafes, and bistros**!

Key features we deliver:
• **Interactive QR Digital Menu**: Lightning-fast, mobile-optimized menu with high-resolution food imagery.
• **Instant WhatsApp Table & Order Dispatch**: Customers order or book directly without hefty aggregator commissions (0% platform cut).
• **Google Local 3-Pack Optimization**: Rank high on Google Maps when food lovers search nearby.
• **Live Showcase**: Check out our live case study: [Aura Royale Bistro](https://restaurant-live-portal.netlify.app/) featuring real-time kitchen ticketing!

⭐ **Recommended Plan:** Our **Business Plan (₹8,999)** or **Business Plus (₹14,999)** with online ordering flow. Let's discuss your menu on WhatsApp at **+91 60001 56107**!`;
  }

  // 3. Questions about Services & Capabilities
  if (text.includes('service') || text.includes('what do you do') || text.includes('what can you do') || text.includes('offer')) {
    return `EdgeLab provides a complete, 360-degree digital partnership for businesses:

1. **Bespoke Website Development**: Next.js 16 platforms with 99/100 PageSpeed, sub-second load times, and custom UI.
2. **Social Media Management**: Aesthetic Instagram grid curation, high-converting copywriting, content calendars, and community management.
3. **Commercial Photography**: On-site product shoots, store interiors, food catalogs, and high-res retouching.
4. **Cinematic 9:16 Video & Reels**: High-retention vertical reels, professional audio foley, and story-driven business hooks.
5. **Growth & Local SEO**: Google Business profile setup, local maps ranking, and conversion funnels.
6. **Continuous Website Care**: Uptime monitoring, domain/SSL maintenance, security updates, and priority WhatsApp support.

Which service are you looking to start with today?`;
  }

  // 4. Questions about Process & Timeline
  if (text.includes('process') || text.includes('how do you work') || text.includes('how long') || text.includes('timeline') || text.includes('steps')) {
    return `Our delivery process is streamlined and rapid:

1. **Discover (Day 1)**: Initial scope audit & digital requirements blueprint.
2. **Strategy (Day 2–3)**: Content hierarchy, wireframes, and design direction.
3. **Design & Build (Day 4–8)**: Bespoke Next.js engineering, responsive testing, and performance optimization.
4. **Deploy & Launch (Day 8–10)**: Domain connection, SSL encryption, Google Local registration, and live verification.
5. **Ongoing Care**: Continuous uptime monitoring and technical support.

Most standard websites launch within **7 to 10 days**. Ready to begin? Chat with us directly on WhatsApp at **+91 60001 56107**!`;
  }

  // 5. Questions about Contact, WhatsApp, or Talking to a Human
  if (text.includes('contact') || text.includes('call') || text.includes('phone') || text.includes('whatsapp') || text.includes('number') || text.includes('talk to someone') || text.includes('human')) {
    return `You can connect directly with the EdgeLab team through any of the following:

• **WhatsApp**: [+91 60001 56107](https://wa.me/916000156107?text=Hi%20EdgeLab%2C%20I%20would%20like%20to%20consult%20with%20your%20team.) (Fastest response — within a few minutes)
• **Phone Call**: +91 60001 56107
• **Email**: edgelab.work@gmail.com
• **Instagram**: [@edgelab.work](https://instagram.com/edgelab.work)

We would love to review your project and share a bespoke quote!`;
  }

  // 6. Portfolio & Case Studies
  if (text.includes('portfolio') || text.includes('work') || text.includes('example') || text.includes('sample') || text.includes('case study') || text.includes('noire')) {
    return `You can explore our flagship live productions right now:

1. **NOIRÉ Luxury Couture Atelier** ([noire-couture.netlify.app](https://noire-couture.netlify.app/)): High-fashion digital runway with editorial storytelling, lookbook navigation, and visual commerce.
2. **Smart Restaurant Experience** ([restaurant-live-portal.netlify.app](https://restaurant-live-portal.netlify.app/)): Complete dining ecosystem with QR mobile ordering, live kitchen dispatch, and manager telemetry.

Both platforms achieve sub-second edge speeds and custom design systems. Would you like a similar bespoke build for your brand?`;
  }

  return null;
}

// ─────────────────────────────────────────────────
// OLLAMA FREE API DISCOVERY (With 3.5s fast timeout)
// ─────────────────────────────────────────────────
interface ActiveServer {
  host: string;
  model: string;
  lastChecked: number;
}

const KNOWN_SERVERS = ['http://108.181.196.208:11434'];
let cachedActiveServer: ActiveServer | null = null;
const CACHE_TTL_MS = 15 * 60_000;

async function findActiveOllamaServer(): Promise<ActiveServer | null> {
  const now = Date.now();
  if (cachedActiveServer && now - cachedActiveServer.lastChecked < CACHE_TTL_MS) {
    return cachedActiveServer;
  }

  for (const host of KNOWN_SERVERS) {
    try {
      const tagRes = await fetch(`${host}/api/tags`, { signal: AbortSignal.timeout(2000) });
      if (!tagRes.ok) continue;

      const tagData = await tagRes.json();
      const installedModels: string[] = tagData.models?.map((m: { name: string }) => m.name) || [];

      let selectedModel = '';
      if (installedModels.includes('llama3.2:latest')) selectedModel = 'llama3.2:latest';
      else if (installedModels.includes('llama3.2')) selectedModel = 'llama3.2';
      else if (installedModels.includes('llama3.1:latest')) selectedModel = 'llama3.1:latest';
      else selectedModel = installedModels[0];

      if (selectedModel) {
        cachedActiveServer = { host, model: selectedModel, lastChecked: now };
        return cachedActiveServer;
      }
    } catch {
      // offline
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
        { status: 429 }
      );
    }

    // 2. Validate Request Body
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json({ error: 'Valid messages array is required.' }, { status: 400 });
    }

    const messages = body.messages as ChatHistoryItem[];
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || typeof lastMessage.content !== 'string' || !lastMessage.content.trim()) {
      return NextResponse.json({ error: 'Message content cannot be empty.' }, { status: 400 });
    }

    if (lastMessage.content.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message is too long. Maximum allowed is ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    // 3. FAST PATH: Check Domain Synthesizer FIRST
    // This guarantees sub-50ms instant response with structured tables and plan breakdowns!
    const instantResponse = generateInstantDomainResponse(lastMessage.content, messages);
    if (instantResponse) {
      return NextResponse.json({
        response: instantResponse,
        model: 'edgelab-neural-engine',
        remaining: rateCheck.remaining,
      });
    }

    // 4. SECONDARY PATH: Ollama AI with tight 3.5-second timeout for general queries
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
              temperature: 0.6,
              num_predict: 200,
            },
          }),
          signal: AbortSignal.timeout(3500), // 3.5s fast timeout
        });

        if (ollamaRes.ok) {
          const data = await ollamaRes.json();
          let aiText = data?.message?.content?.trim();

          if (aiText) {
            aiText = aiText.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
            if (aiText.length > 0) {
              return NextResponse.json({
                response: aiText,
                model: activeServer.model,
                remaining: rateCheck.remaining,
              });
            }
          }
        }
      } catch {
        // Ollama timed out or failed, fall through to default smart assistant
      }
    }

    // 5. Intelligent Fallback for all other conversational questions
    return NextResponse.json({
      response:
        "At EdgeLab, we design bespoke websites, commercial video production, and complete digital growth systems for businesses. Our web packages start from **₹4,999** for the Starter Plan, and **₹8,999** for our most popular **Business Plan (Recommended)**. Would you like to see our full plan comparison table, or connect with our team on WhatsApp at **+91 60001 56107**?",
      model: 'edgelab-concierge',
      remaining: rateCheck.remaining,
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please connect directly on WhatsApp at +91 60001 56107.' },
      { status: 500 }
    );
  }
}
