import React from 'react';
import type { Metadata } from 'next';
import { CloudflareWorkersCalculator } from '@/components/calculator/CloudflareWorkersCalculator';

export const metadata: Metadata = {
  title: 'Cloudflare Workers Backend Calculator — Free Tier Usage Estimate | EdgeLab',
  description:
    'Calculate your estimated daily backend requests and explore whether Cloudflare Workers Free may suit your website workload. Transparent estimates, plan comparisons, and EdgeLab hosting architectural guidance.',
  openGraph: {
    title: 'Cloudflare Workers Calculator — EdgeLab',
    description:
      'Estimate your daily backend Worker requests and understand Cloudflare Workers Free tier limits for your website.',
  },
};

export default function CloudflareCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <CloudflareWorkersCalculator />
    </main>
  );
}
