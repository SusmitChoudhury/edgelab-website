import React from 'react';
import { Hero } from '@/components/home/Hero';
import { IntroTransition } from '@/components/home/IntroTransition';
import { ServicesSystem } from '@/components/home/ServicesSystem';
import { SignatureEcosystem } from '@/components/home/SignatureEcosystem';
import { SelectedWork } from '@/components/home/SelectedWork';
import { ContentReels } from '@/components/home/ContentReels';
import { EditorialPhotography } from '@/components/home/EditorialPhotography';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { AboutWhyWeExist } from '@/components/home/AboutWhyWeExist';
import { ProjectEnquiry } from '@/components/home/ProjectEnquiry';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero: 3D Business Ecosystem & Cinematic Statement */}
      <Hero />

      {/* 02 — Introduction: The Connected Brand Experience */}
      <IntroTransition />

      {/* 03 — What We Build: Interactive 7-Service System */}
      <ServicesSystem />

      {/* 04 — Signature 3D: The Digital Ecosystem */}
      <SignatureEcosystem />

      {/* 05 — Selected Real Work: Smart Restaurant & NOIRÉ Case Studies */}
      <SelectedWork />

      {/* 06 — Content & Reels: 9:16 Vertical Video Production */}
      <ContentReels />

      {/* 07 — Editorial Photography: Unified Studio Gallery */}
      <EditorialPhotography />

      {/* 08 — How We Work: 4-Step Milestone Architecture */}
      <ProcessTimeline />

      {/* 09 — Why EdgeLab Exists: Core Disciplines & Craftsmanship */}
      <AboutWhyWeExist />

      {/* 10 — Project Consultation & Briefing */}
      <ProjectEnquiry />

      {/* 11 — Cinematic Final CTA */}
      <FinalCTA />
    </>
  );
}
