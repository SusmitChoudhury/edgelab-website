'use client';

import React, { useRef, useState, useEffect } from 'react';
import { 
  Building2, 
  Globe, 
  Smartphone, 
  Camera, 
  Video, 
  TrendingUp, 
  Layers, 
  CheckCircle,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { getWhatsAppUrl } from '@/config/site';

export const Signature3DExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const transformationSteps = [
    {
      id: 'physical',
      title: 'Physical Business',
      tag: '01 / Ground Level',
      icon: Building2,
      headline: 'The Physical Craft',
      description: 'Your real-world restaurant, boutique, or office where your product, service, and passion come to life.',
      status: 'Real World Foundation',
      range: [0, 0.12],
    },
    {
      id: 'website',
      title: 'Web Architecture',
      tag: '02 / Digital Anchor',
      icon: Globe,
      headline: 'Custom Web Engineering',
      description: 'Your storefront becomes accessible worldwide through high-speed, bespoke web architecture and domain authority.',
      status: 'Sub-Second Global Access',
      range: [0.12, 0.25],
    },
    {
      id: 'mobile',
      title: 'Mobile Experience',
      tag: '03 / In Their Pocket',
      icon: Smartphone,
      headline: 'Seamless Touch & QR Systems',
      description: 'Customers scan table QR codes, browse responsive digital menus, and order instantly from their smartphones.',
      status: 'Instant Customer Ordering',
      range: [0.25, 0.38],
    },
    {
      id: 'social',
      title: 'Social Media Engine',
      tag: '04 / Community Reach',
      icon: InstagramIcon,
      headline: 'Curated Social Brand',
      description: 'Daily presence on Instagram and Facebook that translates your real ambiance into an active, engaged audience.',
      status: 'Continuous Engagement',
      range: [0.38, 0.50],
    },
    {
      id: 'photo',
      title: 'Commercial Photography',
      tag: '05 / Visual Proof',
      icon: Camera,
      headline: 'Studio & On-Site Imagery',
      description: 'Rich, tactile photographs of food, interiors, and crafts that make your business look undeniably premium.',
      status: 'High-Res Asset Bank',
      range: [0.50, 0.63],
    },
    {
      id: 'video',
      title: 'Reels & Short Video',
      tag: '06 / Movement & Sound',
      icon: Video,
      headline: 'High-Retention Video',
      description: 'Dynamic vertical videos and behind-the-scenes stories crafted specifically to capture the modern attention span.',
      status: 'Scroll-Stopping Motion',
      range: [0.63, 0.76],
    },
    {
      id: 'marketing',
      title: 'Digital Visibility',
      tag: '07 / Discovery',
      icon: TrendingUp,
      headline: 'Targeted Growth & Search',
      description: 'Connecting Google Maps, local SEO, Meta campaigns, and review engines so the right customers find you first.',
      status: 'High-Intent Inquiries',
      range: [0.76, 0.88],
    },
    {
      id: 'ecosystem',
      title: 'Complete Ecosystem',
      tag: '08 / Fully Online',
      icon: Layers,
      headline: 'One Connected Machine',
      description: 'All eight channels now function together under EdgeLab management. Your business is finally fully online.',
      status: 'Full Digital Maturity',
      range: [0.88, 1.0],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setScrollProgress(progress);

      // Map progress to active step
      const stepIdx = transformationSteps.findIndex(
        (step) => progress >= step.range[0] && progress <= step.range[1]
      );
      if (stepIdx !== -1) {
        setActiveStepIndex(stepIdx);
      }

      // Sync video currentTime to scroll progress if user is scrolling
      if (videoRef.current && videoRef.current.duration) {
        const targetTime = progress * videoRef.current.duration;
        if (!isPlaying && Math.abs(videoRef.current.currentTime - targetTime) > 0.05) {
          videoRef.current.currentTime = targetTime;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying]);

  const activeStep = transformationSteps[activeStepIndex] || transformationSteps[0];

  // Manual scrub to specific stage
  const jumpToStage = (idx: number) => {
    const targetProgress = (transformationSteps[idx].range[0] + transformationSteps[idx].range[1]) / 2;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerRef.current.offsetTop + targetProgress * totalScrollable;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      ref={containerRef}
      id="ecosystem"
      className="relative bg-[#071F16] text-white border-y border-[#124230]"
      style={{ height: '350vh' }}
    >
      {/* Sticky 3D Experience Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden p-4 sm:p-8">
        {/* Subtle green ambient lighting & studio vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#071F16]/50 to-[#04120C] pointer-events-none z-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#16553E]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header & Stage Progress Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-16 sm:pt-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#144A36]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#7EE787] font-semibold">
                  Signature 3D Experience
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
                EdgeLab takes your business into the digital world.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-[11px] font-mono text-[#8CBFA7]">Scroll Narrative</div>
                <div className="text-xs font-semibold text-[#A7E8C7]">
                  Stage {activeStepIndex + 1} of {transformationSteps.length}
                </div>
              </div>

              {/* Video play/pause toggle */}
              <button
                onClick={toggleVideoPlayback}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#113B2C] hover:bg-[#18533E] text-xs font-medium text-[#D1F2E2] border border-[#21674E] transition-colors"
                title={isPlaying ? 'Pause Auto-Spin' : 'Auto Play Transformation'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Auto Rotate'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Stage Step Indicator */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 mt-3">
            {transformationSteps.map((step, idx) => {
              const isPassed = scrollProgress >= step.range[0];
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => jumpToStage(idx)}
                  className={`text-left p-1.5 rounded-lg transition-all border ${
                    isActive
                      ? 'bg-[#144734] border-[#4ADE80] text-white shadow-[0_0_12px_rgba(74,222,128,0.25)]'
                      : isPassed
                      ? 'bg-[#0E3325]/70 border-[#1B573F] text-[#86BAA1]'
                      : 'bg-[#092218]/40 border-transparent text-[#446656] hover:bg-[#0D2D20]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono opacity-80">{String(idx + 1).padStart(2, '0')}</span>
                    {isPassed && <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />}
                  </div>
                  <div className="text-[11px] font-medium truncate mt-0.5">{step.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center: The Physical 3D Object & Digital Transformation */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-4 sm:my-6 overflow-hidden">
          {/* 3D Video Screen Canvas */}
          <div className="relative w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#174F3B] bg-[#04120C] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex items-center justify-center">
            <video
              ref={videoRef}
              src="/assets/3d/hero-bg.mp4"
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setIsVideoLoaded(true)}
              className="w-full h-full object-cover select-none pointer-events-none"
            />

            {/* If video hasn't loaded or fallback */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#071E16] text-[#81B99E] text-xs font-mono">
                Initializing 3D Transformation Engine...
              </div>
            )}

            {/* Physical Reflection & Green Studio Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071F16]/70 via-transparent to-transparent pointer-events-none" />

            {/* Active Node Callout Badge Overlay */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-[#071F16]/85 backdrop-blur-md border border-[#21674E] p-3 sm:p-4 rounded-xl max-w-xs shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-[#4ADE80] font-semibold uppercase">
                <activeStep.icon className="w-4 h-4 text-[#4ADE80]" />
                <span>{activeStep.tag}</span>
              </div>
              <div className="text-sm sm:text-base font-serif text-white mt-1 font-semibold">
                {activeStep.headline}
              </div>
              <div className="text-xs text-[#A1C9B6] mt-1 leading-snug hidden sm:block">
                {activeStep.description}
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#184F3B] flex items-center justify-between text-[11px] font-mono text-[#6EA48C]">
                <span>State</span>
                <span className="text-[#4ADE80] font-semibold">{activeStep.status}</span>
              </div>
            </div>

            {/* Scroll Indicator Prompt */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071F16]/85 backdrop-blur-md border border-[#1C5E45] text-xs font-mono text-[#A8D8C0]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
              <span>Scroll to Transform ({(scrollProgress * 100).toFixed(0)}%)</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Active State Narrative & Call to Action */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pb-6">
          <div className="bg-[#0C2D20]/90 backdrop-blur-md border border-[#1B573F] rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-[#144734] border border-[#267C5B] flex items-center justify-center shrink-0 text-[#4ADE80]">
                <activeStep.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#86BAA1] uppercase tracking-wider">
                  Transformation Progression
                </div>
                <div className="text-base sm:text-lg font-serif text-white font-medium">
                  {scrollProgress < 0.88 ? (
                    <span>
                      Physical Reality <span className="text-[#4ADE80]">→</span> Digital Ecosystem: {activeStep.title}
                    </span>
                  ) : (
                    <span className="text-[#4ADE80] font-semibold">
                      One Business. One Connected Digital Team.
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="#enquiry"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4ADE80] hover:bg-[#22C55E] text-[#071F16] text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <span>TRANSFORM MY BUSINESS</span>
              </a>

              <a
                href={getWhatsAppUrl(`Hi EdgeLab, I'm watching your 3D transformation and want to digitize my business.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#123E2D] hover:bg-[#18533E] border border-[#22674E] text-xs font-semibold text-[#D1F2E2] transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
