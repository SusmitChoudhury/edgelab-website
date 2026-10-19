/**
 * EdgeLab Official Currency & Pricing Architecture
 * 
 * Provides centralized currency configuration, international USD package pricing,
 * preserved Indian INR package pricing, and Intl.NumberFormat utilities.
 */

export const SUPPORTED_CURRENCIES = ['USD', 'INR'] as const;
export type Currency = typeof SUPPORTED_CURRENCIES[number];

export const DEFAULT_CURRENCY: Currency = 'USD';

/**
 * Fixed Initial International USD Package Pricing
 */
export const USD_PRICES = {
  starter: 399,
  businessPlus: 899,
  edgeCare: 1499,
  ultimate: 2499,
} as const;

/**
 * Preserved Official Indian INR Package Pricing
 */
export const INR_PRICES = {
  starter: 4999,
  businessPlus: 14999,
  edgeCare: 24999,
  ultimate: 37999,
} as const;

/**
 * Reference Crossed-out Prices
 */
export const USD_REFERENCE_PRICES = {
  starter: 499,
  businessPlus: null,
  edgeCare: 1699,
  ultimate: 2799,
} as const;

export const INR_REFERENCE_PRICES = {
  starter: 5999,
  businessPlus: null,
  edgeCare: 25999,
  ultimate: 39999,
} as const;

/**
 * Monthly Standard Running / Maintenance Costs
 */
export const MONTHLY_RUNNING_COSTS = {
  USD: 25,
  INR: 1699,
} as const;

/**
 * EdgeLab Agency 18% Cloudflare Workers Free Campaign Promotion
 */
export const CLOUDFLARE_PROMO_DISCOUNT_PERCENT = 18;

export const CLOUDFLARE_QUALIFYING_THRESHOLDS = {
  USD: 500,
  INR: 9000,
} as const;

/**
 * Configurable exchange rate for ancillary conversions
 */
export const CONFIGURABLE_EXCHANGE_RATE_USD_TO_INR = 85;

/**
 * Formats monetary amounts using the ECMAScript Internationalization API (Intl.NumberFormat).
 * Supports standard US currency formatting ($399, $1,499) and official Indian digit grouping (₹4,999, ₹14,999).
 */
export function formatCurrency(
  amount: number,
  currency: Currency = 'USD',
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
): string {
  const hasDecimals = amount % 1 !== 0;
  const minDigits = options?.minimumFractionDigits ?? (hasDecimals ? 2 : 0);
  const maxDigits = options?.maximumFractionDigits ?? (hasDecimals ? 2 : 0);

  if (currency === 'INR') {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: minDigits,
      maximumFractionDigits: maxDigits,
    }).format(amount);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  }).format(amount);
}

/**
 * Computes exact promo numbers for Cloudflare Workers campaign based on currency.
 */
export function getCloudflarePromo(currency: Currency) {
  const base = currency === 'USD' ? USD_PRICES.businessPlus : INR_PRICES.businessPlus;
  const discountAmount = Number((base * (CLOUDFLARE_PROMO_DISCOUNT_PERCENT / 100)).toFixed(2));
  const discountedPrice = Number((base - discountAmount).toFixed(2));
  const qualifyingThreshold = CLOUDFLARE_QUALIFYING_THRESHOLDS[currency];

  return {
    base,
    baseFormatted: formatCurrency(base, currency),
    discountAmount,
    discountAmountFormatted: formatCurrency(discountAmount, currency),
    discountedPrice,
    discountedPriceFormatted: formatCurrency(discountedPrice, currency),
    qualifyingThreshold,
    qualifyingThresholdFormatted: formatCurrency(qualifyingThreshold, currency),
    percent: CLOUDFLARE_PROMO_DISCOUNT_PERCENT,
  };
}

export interface PricingTierData {
  id: 'starter' | 'business-plus' | 'edgecare' | 'ultimate';
  name: string;
  rawPrice: number;
  price: string;
  referencePrice: string | null;
  period: string;
  tagline: string;
  description: string;
  runningCost: string;
  runningCostBenefit: string;
  displayRunningCostNote?: string;
  hasFreePeriod: boolean;
  freePeriodMonths?: number | string;
  cloudflareEligible: boolean;
  cloudflareDiscountAmount?: string;
  cloudflareDiscountedPrice?: string;
  highlighted: boolean;
  badge?: string;
  disclosures?: string;
  deliverables: string[];
  features: string[];
  cta: string;
}

/**
 * Returns dynamic, localized package pricing tiers for the selected currency.
 */
export function getPricingTiers(currency: Currency): PricingTierData[] {
  const isUSD = currency === 'USD';
  const promo = getCloudflarePromo(currency);
  const monthlyRunningFormatted = formatCurrency(MONTHLY_RUNNING_COSTS[currency], currency);

  return [
    {
      id: 'starter',
      name: 'Starter',
      rawPrice: isUSD ? USD_PRICES.starter : INR_PRICES.starter,
      price: formatCurrency(isUSD ? USD_PRICES.starter : INR_PRICES.starter, currency),
      referencePrice: formatCurrency(isUSD ? USD_REFERENCE_PRICES.starter : INR_REFERENCE_PRICES.starter, currency),
      period: 'one-time setup',
      tagline: 'Essential online presence package',
      description: 'Essential digital foundation for businesses establishing a verified, professional online presence.',
      runningCost: `Standard ${monthlyRunningFormatted}/month, according to the agreed service scope.`,
      runningCostBenefit: `Standard ${monthlyRunningFormatted}/month`,
      displayRunningCostNote: `${formatCurrency(isUSD ? USD_PRICES.starter : INR_PRICES.starter, currency)} one-time. Standard running cost is ${monthlyRunningFormatted}/month according to the agreed service scope.`,
      hasFreePeriod: false,
      cloudflareEligible: false,
      highlighted: false,
      deliverables: [
        'Professional business website',
        'Mobile-first responsive design',
        'Essential business pages & layout',
        'Verified contact information',
        'Direct WhatsApp and social links',
        'Basic SEO setup & meta tags',
        'Production deployment & verification',
      ],
      features: [
        'Professional business website',
        'Mobile-first responsive design',
        'Essential business pages & layout',
        'Verified contact information',
        'Direct WhatsApp and social links',
        'Basic SEO setup & meta tags',
        'Production deployment & verification',
      ],
      cta: 'Choose Starter',
    },
    {
      id: 'business-plus',
      name: 'Business Plus',
      rawPrice: isUSD ? USD_PRICES.businessPlus : INR_PRICES.businessPlus,
      price: formatCurrency(isUSD ? USD_PRICES.businessPlus : INR_PRICES.businessPlus, currency),
      referencePrice: null,
      period: 'one-time setup',
      tagline: 'Custom design with 3 months running cost included',
      description: 'Comprehensive digital presence for businesses ready to stand out and capture more enquiries.',
      runningCost: `First 3 months free. Standard running cost of ${monthlyRunningFormatted}/month begins after the included period.`,
      runningCostBenefit: 'First 3 months free running cost',
      displayRunningCostNote: `${formatCurrency(isUSD ? USD_PRICES.businessPlus : INR_PRICES.businessPlus, currency)} one-time. First 3 months of running cost included. Standard running cost of ${monthlyRunningFormatted}/month begins after the included period.`,
      hasFreePeriod: true,
      freePeriodMonths: 3,
      cloudflareEligible: true,
      cloudflareDiscountAmount: promo.discountAmountFormatted,
      cloudflareDiscountedPrice: promo.discountedPriceFormatted,
      highlighted: true,
      badge: 'POPULAR & CLOUDFLARE ELIGIBLE',
      deliverables: [
        'Everything included in Starter where applicable',
        'Additional tailored pages and sections',
        'Bespoke custom UI & brand layout',
        'Interactive gallery or service catalogue',
        'Contact and enquiry lead form',
        'Improved SEO & local schema implementation',
        'Additional frontend features & integrations defined in agreement',
        `Qualifies for 18% Cloudflare Workers Free offer (${promo.discountedPriceFormatted})`,
      ],
      features: [
        'Everything included in Starter where applicable',
        'Additional tailored pages and sections',
        'Bespoke custom UI & brand layout',
        'Interactive gallery or service catalogue',
        'Contact and enquiry lead form',
        'Improved SEO & local schema implementation',
        'Additional frontend features & integrations defined in agreement',
        `Qualifies for 18% Cloudflare Workers Free offer (${promo.discountedPriceFormatted})`,
      ],
      cta: 'Choose Business Plus',
    },
    {
      id: 'edgecare',
      name: 'EdgeCare',
      rawPrice: isUSD ? USD_PRICES.edgeCare : INR_PRICES.edgeCare,
      price: formatCurrency(isUSD ? USD_PRICES.edgeCare : INR_PRICES.edgeCare, currency),
      referencePrice: formatCurrency(isUSD ? USD_REFERENCE_PRICES.edgeCare : INR_REFERENCE_PRICES.edgeCare, currency),
      period: 'one-time setup',
      tagline: 'Extended care with 6 months continuous maintenance',
      description: 'For businesses that want proactive upkeep, routine monitoring and dependable technical support.',
      runningCost: `First 6 months free. Standard running cost of ${monthlyRunningFormatted}/month begins after the included period.`,
      runningCostBenefit: 'First 6 months free running cost',
      displayRunningCostNote: `${formatCurrency(isUSD ? USD_PRICES.edgeCare : INR_PRICES.edgeCare, currency)} one-time. First 6 months of running cost included. Standard running cost of ${monthlyRunningFormatted}/month begins after the included period.`,
      hasFreePeriod: true,
      freePeriodMonths: 6,
      cloudflareEligible: false,
      highlighted: false,
      deliverables: [
        'Everything included in Business Plus where applicable',
        'First 6 months of running cost included',
        'Defined ongoing website maintenance',
        '24/7 uptime & health monitoring',
        'Bug fixes, software updates & patches',
        'Routine speed & performance checks',
        'Defined support allowance & priority response channel',
        'Clear support duration and documented terms',
      ],
      features: [
        'Everything included in Business Plus where applicable',
        'First 6 months of running cost included',
        'Defined ongoing website maintenance',
        '24/7 uptime & health monitoring',
        'Bug fixes, software updates & patches',
        'Routine speed & performance checks',
        'Defined support allowance & priority response channel',
        'Clear support duration and documented terms',
      ],
      cta: 'Choose EdgeCare',
    },
    {
      id: 'ultimate',
      name: 'EdgeLab Ultimate',
      rawPrice: isUSD ? USD_PRICES.ultimate : INR_PRICES.ultimate,
      price: formatCurrency(isUSD ? USD_PRICES.ultimate : INR_PRICES.ultimate, currency),
      referencePrice: formatCurrency(isUSD ? USD_REFERENCE_PRICES.ultimate : INR_REFERENCE_PRICES.ultimate, currency),
      period: 'one-time setup',
      tagline: 'Complete digital partner: web, studio media & performance marketing',
      description: 'Full-spectrum digital transformation covering website, photography, reels and performance marketing.',
      runningCost: 'Free for the lifetime of the qualifying service agreement, subject to clear written terms.',
      runningCostBenefit: 'Free for lifetime of qualifying agreement',
      displayRunningCostNote: `${formatCurrency(isUSD ? USD_PRICES.ultimate : INR_PRICES.ultimate, currency)} one-time. Running cost is free for the lifetime of the qualifying service agreement, subject to clear written terms.`,
      hasFreePeriod: true,
      freePeriodMonths: 'Lifetime under agreement',
      cloudflareEligible: false,
      highlighted: false,
      disclosures: 'Meta advertising spend must be paid separately by the client. External expenses (domains, third-party hosting, email services, premium software, paid AI usage) are separate.',
      deliverables: [
        'Full bespoke website design and development',
        'Brand and product commercial photography shoot',
        'Reels and short-form video production',
        'Content planning and monthly creative production',
        'Social media creatives and account management',
        'Google Business Profile setup and local SEO support',
        'Performance marketing management & campaign reporting',
        'Website maintenance and priority technical support',
        'Customer acquisition strategy and conversion optimisation',
        'Free running cost for the lifetime of qualifying agreement',
      ],
      features: [
        'Full bespoke website design and development',
        'Brand and product commercial photography shoot',
        'Reels and short-form video production',
        'Content planning and monthly creative production',
        'Social media creatives and account management',
        'Google Business Profile setup and local SEO support',
        'Performance marketing management & campaign reporting',
        'Website maintenance and priority technical support',
        'Customer acquisition strategy and conversion optimisation',
        'Free running cost for the lifetime of qualifying agreement',
      ],
      cta: 'Discuss Ultimate Scope',
    },
  ];
}
