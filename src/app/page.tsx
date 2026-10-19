import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { HowWeWorkSection } from '@/components/home/HowWeWorkSection';
import { PricingPreviewSection } from '@/components/home/PricingPreviewSection';
import { CloudflareCampaignSection } from '@/components/home/CloudflareCampaignSection';
import { WorkspaceSection } from '@/components/home/WorkspaceSection';
import { AboutPreviewSection } from '@/components/home/AboutPreviewSection';
import { ContactCTASection } from '@/components/home/ContactCTASection';

export const metadata: Metadata = {
  title: 'EdgeLab — Build Your Digital Presence. Grow Your Business.',
  description:
    'Websites, content creation and performance marketing designed to help your business get noticed and turn attention into enquiries.',
};

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero Section: Build Your Digital Presence. Grow Your Business. */}
      <Hero />

      {/* 02 — Services Overview: 10 Actual EdgeLab Service Disciplines */}
      <ServicesOverview />

      {/* 03 — Selected Work: Real Projects & Working Production Demos */}
      <SelectedWorkSection />

      {/* 04 — How EdgeLab Works: 5-Step Delivery Methodology */}
      <HowWeWorkSection />

      {/* 05 — Pricing Preview: 4 Approved Packages & Running-Cost Benefits */}
      <PricingPreviewSection />

      {/* 06 — Cloudflare Workers Campaign: Free Tier Request Estimator Teaser */}
      <CloudflareCampaignSection />

      {/* 07 — Workspace & How We Actually Work: Inside the EdgeLab Lab & Team */}
      <WorkspaceSection />

      {/* 08 — About EdgeLab Preview: Mission & Verified Direct Contacts */}
      <AboutPreviewSection />

      {/* 09 — Contact CTA: Direct WhatsApp & Project Consultation */}
      <ContactCTASection />
    </>
  );
}
