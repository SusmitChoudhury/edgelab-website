import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Newsreader } from 'next/font/google';
import './globals.css';
import { SITE_URL, BRAND, CONTACT } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChatbotAssistant } from '@/components/layout/ChatbotAssistant';
import { SmoothScroll } from '@/components/layout/SmoothScroll';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const serifFont = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1A281E',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EdgeLab — Your Business, Finally Online | Premium Digital Solutions',
    template: '%s | EdgeLab',
  },
  description:
    'EdgeLab builds bespoke websites, digital ordering systems, commercial photography, short-form reels, and manages ongoing digital presence for ambitious businesses.',
  keywords: [
    'website development',
    'website design',
    'digital solutions',
    'social media management',
    'content creation',
    'commercial photography',
    'reels production',
    'digital marketing',
    'e-commerce',
    'website management',
    'business websites',
    'restaurant digital ordering',
    'India',
  ],
  authors: [{ name: 'EdgeLab Digital Solutions' }],
  creator: 'EdgeLab',
  publisher: 'EdgeLab',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EdgeLab — Your Business, Finally Online',
    description:
      'EdgeLab is a complete digital partner for businesses: from building bespoke websites to managing social media, shooting commercial photography, producing reels, and ongoing care.',
    url: SITE_URL,
    siteName: 'EdgeLab',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/projects/restaurant/hero.png',
        width: 1200,
        height: 630,
        alt: 'EdgeLab Digital Solutions & Web Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdgeLab — Your Business, Finally Online',
    description:
      'Bespoke web engineering, commercial photography, reels production, and ongoing digital management.',
    images: ['/assets/projects/restaurant/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Organization and LocalBusiness schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND.name,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/brand/logo-full.png`,
        sameAs: [CONTACT.instagramUrl],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONTACT.phoneDisplay,
          contactType: 'Customer Service',
          email: CONTACT.email,
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#service`,
        name: BRAND.legalName,
        image: `${SITE_URL}/assets/projects/restaurant/hero.png`,
        url: SITE_URL,
        telephone: CONTACT.phoneDisplay,
        email: CONTACT.email,
        priceRange: '₹4,999 - ₹49,999',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        description: BRAND.shortDescription,
      },
    ],
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[#0C120E] bg-white selection:bg-[#1A281E] selection:text-white">
        <SmoothScroll>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <ChatbotAssistant />
        </SmoothScroll>
      </body>
    </html>
  );
}
