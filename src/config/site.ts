// EdgeLab Configuration & Content Directory
// Single configurable site URL variable so the domain can be changed easily after purchase.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://edgelab.in';

export const BRAND = {
  name: 'EdgeLab',
  legalName: 'EdgeLab Digital Solutions',
  tagline: 'Your business, finally online.',
  headlinePrimary: "Build the business.",
  headlineSecondary: "We'll build what the internet sees.",
  shortDescription:
    'EdgeLab builds websites, digital experiences and content systems that help businesses establish a stronger online presence.',
  longDescription:
    'EdgeLab helps businesses build, launch, manage and grow their digital presence. A complete digital partner providing web engineering, social media management, studio photography, video production, and ongoing management.',
  estYear: '2024',
};

export const CONTACT = {
  phoneDisplay: '+91 60001 56107',
  phoneRaw: '+916000156107',
  whatsappNumber: '916000156107',
  email: 'edgelab.work@gmail.com',
  instagramHandle: '@edgelab.work',
  instagramUrl: 'https://instagram.com/edgelab.work',
};

// Generates direct, pre-filled WhatsApp links for high conversion
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = `Hi EdgeLab, I'd like to discuss building our digital presence.`;
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}

export const NAVIGATION_LINKS = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Ecosystem', href: '/ecosystem' },
  { name: 'Process', href: '/process' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const CORE_CAPABILITIES = [
  {
    id: 'web',
    title: 'Website Design & Development',
    tag: 'Web Engineering',
    summary: 'High-performance bespoke websites, custom portals, digital ordering systems, and e-commerce architectures.',
    deliverables: ['Custom Next.js & React Architectures', 'Digital Ordering & QR Menus', 'Admin Dashboards & Portals', 'Sub-second Load Times', 'SEO Infrastructure'],
    cta: 'BUILD MY WEBSITE',
    enquiryService: 'Website Development',
  },
  {
    id: 'social',
    title: 'Social Media Management',
    tag: 'Audience Growth',
    summary: 'End-to-end social media direction. Content calendars, grid curation, caption copywriting, and daily publishing.',
    deliverables: ['Instagram & Facebook Strategy', 'Aesthetic Feed Architecture', 'Story & Highlight Production', 'Hashtag & Discovery Research', 'Community Engagement'],
    cta: 'MANAGE MY SOCIALS',
    enquiryService: 'Social Media',
  },
  {
    id: 'photo',
    title: 'Professional Photography',
    tag: 'Visual Craft',
    summary: 'Commercial studio and on-site photography that captures food, ambiance, interior, products, and brand identity.',
    deliverables: ['Culinary & Food Styling Photography', 'Interior & Architectural Imagery', 'Product Catalog Shoots', 'High-Res Retouching', 'Social-Ready Asset Packs'],
    cta: 'SCHEDULE A SHOOT',
    enquiryService: 'Photography',
  },
  {
    id: 'video',
    title: 'Reels & Short-Form Video',
    tag: 'Storytelling',
    summary: 'High-retention vertical reels and short videos filmed and edited to stop the scroll and build brand intrigue.',
    deliverables: ['Vertical Reel Direction & Cinematography', 'Dynamic Sound & Color Grading', 'Behind-The-Scenes Documentaries', 'Pacing Optimized for Retention', 'Ready-to-Post Formats'],
    cta: 'CREATE MY CONTENT',
    enquiryService: 'Reels / Video',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Strategy',
    tag: 'Visibility',
    summary: 'Connecting your website, content, and socials into a coherent growth system that drives real business inquiries.',
    deliverables: ['Local Search & Google Business Setup', 'Meta & Search Campaign Direction', 'Customer Conversion Funnels', 'Consistent Brand Positioning', 'Inquiry Tracking'],
    cta: 'PLAN MY STRATEGY',
    enquiryService: 'Digital Marketing',
  },
  {
    id: 'management',
    title: 'Website Management & Care',
    tag: 'Continuity',
    summary: 'Launch day is just the start. Ongoing uptime monitoring, menu/content updates, security, and continuous refinement.',
    deliverables: ['Daily / Weekly Menu & Price Updates', 'Zero-Downtime Infrastructure', 'Domain & SSL Maintenance', 'Speed & Performance Audits', 'Priority Support on WhatsApp'],
    cta: 'MANAGE MY WEBSITE',
    enquiryService: 'Website Management',
  },
];

export const SELECTED_PROJECTS = [
  {
    id: 'smart-restaurant',
    title: 'Smart Restaurant Experience',
    badge: 'Live EdgeLab Production',
    category: 'Digital Dining & Operational Portal',
    client: 'Hospitality Partner',
    year: '2025',
    headline: 'From physical table QR to automated kitchen dispatch in 30 seconds.',
    description:
      'A bespoke digital dining ecosystem built to eliminate physical menu bottlenecks. Customers scan a table QR code to explore high-res visual menus with dietary filters, place realtime orders, and request service. Behind the scenes, the synchronized admin portal handles kitchen dispatch, inventory alerts, and instant table turnover management.',
    liveUrl: 'https://restaurant-live-portal.netlify.app/',
    adminDemoUrl: 'https://restaurant-live-portal.netlify.app/admin',
    adminNote: 'Admin demo available without exposing private production credentials.',
    stats: [
      { label: 'Customer Workflow', value: 'QR → Live Order' },
      { label: 'Admin Architecture', value: 'Live Kitchen Dispatch' },
      { label: 'Menu Catalog', value: 'Dynamic High-Res UI' },
      { label: 'Infrastructure', value: 'React + Node + Realtime' },
    ],
    highlights: [
      'Interactive visual menu with dietary filtering (Veg, Non-Veg, Chef Specials)',
      'Direct order cart with table assignment & live order status',
      'Unified admin dashboard for live order tracking, bill settlement, and analytics',
      'Zero paper menu friction, instant updates for out-of-stock items',
    ],
    coverImage: '/assets/projects/restaurant/hero.png',
    gallery: [
      '/assets/projects/restaurant/hero.png',
      '/assets/projects/restaurant/dining.png',
      '/assets/projects/restaurant/bar.png',
      '/assets/projects/restaurant/pizza.png',
      '/assets/projects/restaurant/burger.png',
      '/assets/projects/restaurant/cocktail.png',
    ],
  },
  {
    id: 'noire-couture',
    title: 'NOIRÉ Couture & Fashion Atelier',
    badge: 'EdgeLab Fashion Concept',
    category: 'Luxury E-Commerce & Editorial Storytelling',
    client: 'Atelier Concept',
    year: '2025',
    headline: 'Editorial storytelling meets fluid, high-conversion visual commerce.',
    description:
      'A luxury fashion and contemporary Indian couture platform engineered as an immersive digital runway. Featuring cinematic visual compositions, editorial lookbooks, curated collection catalogs, and tactile product detail interactions designed to inspire confidence and convert discerning buyers.',
    liveUrl: 'https://noire-couture.netlify.app/',
    stats: [
      { label: 'Experience Style', value: 'Editorial Runway' },
      { label: 'Interactions', value: 'Fluid Visual Catalog' },
      { label: 'Typography', value: 'Bespoke Haute Typography' },
      { label: 'Performance', value: 'Optimized Image Stack' },
    ],
    highlights: [
      'Cinematic full-bleed editorial imagery with curated collection narratives',
      'Interactive visual catalogue showcasing fabric texture, drape, and artisan details',
      'Distraction-free shopping journeys calibrated for luxury brand perception',
      'Smooth choreographed transitions inspired by high-fashion publication aesthetics',
    ],
    coverImage: '/assets/projects/noire/hero-poster.jpg',
    gallery: [
      '/assets/projects/noire/hero-poster.jpg',
      '/assets/projects/noire/arc-aaranya.jpg',
      '/assets/projects/noire/arc-kalyani.jpg',
      '/assets/projects/noire/arc-leela.jpg',
      '/assets/projects/noire/look-emerald.jpg',
      '/assets/projects/noire/craft-hands.jpg',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the business',
    description:
      'We dive deep into how your business actually operates: your customer touchpoints, your physical space, your competitors, and the exact impression you need to make online.',
    deliverable: 'Digital Audit & Scope Blueprint',
  },
  {
    step: '02',
    title: 'STRATEGY',
    subtitle: 'Define the digital direction',
    description:
      'We map out the architecture: how your website, visual content, photography, and social channels connect together into a singular cohesive engine.',
    deliverable: 'Content Roadmap & Architecture Map',
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Create the experience',
    description:
      'We craft tailored layouts, shoot on-brand photography, film high-retention video, and design custom UI interactions that reflect the real quality of your craft.',
    deliverable: 'High-Fidelity Prototypes & Asset Catalog',
  },
  {
    step: '04',
    title: 'BUILD',
    subtitle: 'Develop and launch',
    description:
      'Clean, hand-written engineering. We build lightning-fast web infrastructure, integrate customer portals, optimize for Google Search, and deploy flawlessly.',
    deliverable: 'Production Deployment & Launch Verification',
  },
  {
    step: '05',
    title: 'GROW',
    subtitle: 'Manage, improve and evolve',
    description:
      'We don’t disappear after launch day. We keep your menus updated, produce fresh reels, handle monthly social calendars, monitor uptime, and refine your presence.',
    deliverable: 'Continuous Management & Priority Support',
  },
];

export const PRICING_TIERS = [
  {
    name: 'STARTER',
    price: '₹4,999',
    period: 'Starting from',
    description: 'Ideal for small local establishments needing a crisp, authoritative launchpad.',
    features: [
      'Bespoke Single-Page or Launchpad Web Presence',
      'Mobile-First Responsive Layout',
      'Google Maps & WhatsApp Click-to-Chat Integration',
      'Essential SEO & Meta Configuration',
      'High-Speed Cloud Hosting Setup',
      'Basic Contact & Inquiry Capture',
    ],
    highlighted: false,
    cta: 'START WITH STARTER',
  },
  {
    name: 'BUSINESS',
    price: '₹8,999',
    period: 'Starting from',
    description: 'Our most popular setup for established businesses wanting a competitive web presence.',
    features: [
      'Multi-Page Bespoke Custom Website (Up to 5 Pages)',
      'Digital Menu or Service Catalog Presentation',
      'Custom Visual Photography Integration',
      'Enhanced Google Search & Local SEO Structure',
      'Interactive Inquiry & WhatsApp Lead Router',
      'Speed Optimization & Sub-Second Loading',
      '1 Month Included Maintenance & Revisions',
    ],
    highlighted: true,
    badge: 'RECOMMENDED',
    cta: 'CHOOSE BUSINESS',
  },
  {
    name: 'BUSINESS PLUS',
    price: '₹14,999',
    period: 'Starting from',
    description: 'Designed for ambitious brands combining web, high-res visual assets, and social kickoff.',
    features: [
      'Comprehensive Bespoke Website (Up to 8 Pages)',
      'Dynamic Ordering or Booking Workflow Integration',
      'Professional Visual Content Kickoff Pack (Photos & Reels)',
      'Social Media Grid Layout & Launch Content Calendar',
      'Advanced On-Page & Schema Markup SEO',
      'Admin Content Management or QR Portal Access',
      '3 Months Ongoing Website Care & Monitoring',
    ],
    highlighted: false,
    cta: 'CHOOSE BUSINESS PLUS',
  },
  {
    name: 'CUSTOM / ADVANCED',
    price: '₹19,999',
    period: 'Starting from',
    description: 'For unique digital solutions, custom portals, e-commerce, or enterprise requirements.',
    features: [
      'Full Custom Web Application or E-Commerce Portal',
      'Realtime Admin Portals, Kitchen Systems, or Client Areas',
      'Full Creative Production: On-site Photography & Reels',
      'Complete Social Media Engine (Content, Captions, Publishing)',
      'Custom API Integrations & Database Architecture',
      'Dedicated Priority WhatsApp Support Channel',
      'Flexible Retainer & Continuous Evolution',
    ],
    highlighted: false,
    cta: 'DISCUSS CUSTOM SCOPE',
  },
];
