import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import {
  Monitor,
  Smartphone,
  Wifi,
  BarChart,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  Play,
  CheckCircle,
  Star
} from 'lucide-react'

const serviceName = 'Digital Mobile Billboards in West Palm Beach'
const canonicalPath = '/services/west-palm-beach/digital-mobile-billboards/'

export const metadata: Metadata = {
  title: 'Digital Mobile Billboards West Palm Beach | Interactive Displays',
  description: 'Advanced digital mobile billboards in West Palm Beach with real-time updates and analytics. Target Palm Beach County\'s affluent market with dynamic content. 70,000+ daily impressions from Worth Avenue to downtown.',
  keywords: 'digital mobile billboards West Palm Beach, digital advertising trucks West Palm Beach, mobile digital displays Palm Beach, interactive billboards West Palm Beach, digital outdoor advertising Palm Beach County',
  openGraph: {
    title: 'Digital Mobile Billboards in West Palm Beach - Maximax Advertising',
    description: 'Next-generation digital mobile billboards with real-time updates. Dominate West Palm Beach and Palm Beach County with dynamic content.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Mobile Billboard in West Palm Beach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `https://maximaxmobileadvertising.com${canonicalPath}`,
  },
}

const serviceData = {
  serviceName,
  tagline: 'Next-Generation Digital Advertising for Palm Beach County',
  description: 'Transform your West Palm Beach advertising with cutting-edge digital mobile billboards that adapt to your audience in real-time. Our digital displays offer unparalleled flexibility with instant content updates, video capabilities, and data-driven optimization. From the sophisticated shoppers on Worth Avenue to the business professionals downtown, deliver dynamic messages that resonate with Palm Beach County\'s most valuable demographics.',

  features: [
    {
      icon: Monitor,
      title: 'HD Digital Excellence',
      description: 'Crystal-clear 4K displays with perfect contrast and color'
    },
    {
      icon: Smartphone,
      title: 'Cloud Management',
      description: 'Update content instantly from anywhere via mobile app'
    },
    {
      icon: Wifi,
      title: 'Smart Analytics',
      description: 'Real-time performance metrics and audience insights'
    },
    {
      icon: Play,
      title: 'Video Content',
      description: 'Full HD video and animation capabilities'
    }
  ],

  benefits: [
    {
      title: 'Dynamic Messaging',
      description: 'Adapt content based on time, weather, or events',
      metric: 'Real-time updates'
    },
    {
      title: 'Premium Engagement',
      description: 'Digital displays capture 450% more attention',
      metric: '450% more views'
    },
    {
      title: 'Data Intelligence',
      description: 'Track ROI with precision analytics',
      metric: 'Live dashboard'
    },
    {
      title: 'Luxury Market Ready',
      description: 'Premium quality for Palm Beach\'s discerning audience',
      metric: '99% brand recall'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Digital Strategy',
      description: 'Develop dynamic content plan for Palm Beach markets',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Content Creation',
      description: 'Design compelling digital content with motion',
      icon: Palette
    },
    {
      step: 3,
      title: 'Smart Deployment',
      description: 'Configure geo-targeting and scheduling',
      icon: Map
    },
    {
      step: 4,
      title: 'Optimize & Scale',
      description: 'Monitor performance and refine in real-time',
      icon: BarChart
    }
  ],

  pricing: [
    {
      name: 'Digital Day Pass',
      price: '$1,000/day',
      description: 'Perfect for launches, events, and flash campaigns',
      features: [
        '8 hours digital display',
        'Up to 10 content variations',
        'Real-time updates',
        'Performance dashboard',
        'Premium area coverage'
      ]
    },
    {
      name: 'Digital Week Elite',
      price: '$5,500/week',
      description: 'Build digital presence across Palm Beach County',
      features: [
        '40 hours coverage',
        'Unlimited content changes',
        'Video content support',
        'A/B testing included',
        'Detailed analytics suite',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Digital Dominance',
      price: 'Custom Quote',
      description: 'Full-scale digital campaign management',
      features: [
        'Dedicated campaign team',
        'Custom content production',
        'API integration',
        'White-label reporting',
        'Competitive monitoring',
        'Best rates available'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Alexandra Rothschild',
      company: 'Palm Beach Fashion Week',
      role: 'Executive Director',
      content: 'The digital billboards allowed us to showcase runway footage and update show schedules in real-time. The quality matched our luxury brand perfectly.',
      rating: 5
    },
    {
      name: 'Jonathan Sterling',
      company: 'West Palm Beach Chamber',
      role: 'President',
      content: 'Being able to change our messaging for different neighborhoods and times of day was revolutionary. The analytics showed exactly where we had the most impact.',
      rating: 5
    },
    {
      name: 'Isabella Martinez',
      company: 'Worth Avenue Association',
      role: 'Marketing Director',
      content: 'The digital displays brought our seasonal campaigns to life with stunning video content. Sales among participating retailers increased 35%.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '125+',
    averageROI: '5.8x',
    campaignsCompleted: '300+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'How quickly can digital content be updated in West Palm Beach?',
      answer: 'Content updates happen instantly through our cloud platform. Perfect for flash sales on Worth Avenue, happy hour promotions on Clematis Street, or real-time event updates. You can even schedule different content for different times automatically.'
    },
    {
      question: 'Can digital billboards display video in Palm Beach County?',
      answer: 'Yes! Our digital displays support full HD video at 30fps. Showcase luxury products, event highlights, or brand stories as your trucks navigate West Palm Beach\'s most prestigious areas.'
    },
    {
      question: 'What analytics do digital billboards provide?',
      answer: 'Comprehensive metrics including impressions by location, peak engagement times, demographic heat maps, and dwell time analysis. Our Palm Beach County campaigns include detailed reporting on Worth Avenue, Clematis Street, and downtown performance.'
    },
    {
      question: 'How do digital billboards perform at Palm Beach events?',
      answer: 'Exceptionally well! Update content for different event phases, show live social feeds, display countdown timers, and adjust messaging based on crowd response. Perfect for galas, art shows, and seasonal events.'
    },
    {
      question: 'Can I target different Palm Beach neighborhoods with different content?',
      answer: 'Absolutely! Geo-fencing technology allows automatic content switching. Show luxury goods on Worth Avenue, dining options on Clematis Street, and professional services downtown - all in one campaign.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising West Palm Beach',
      description: 'High-brightness LED display technology',
      href: '/services/west-palm-beach/led-truck-advertising/',
      icon: Monitor
    },
    {
      title: 'Mobile Billboard Advertising West Palm Beach',
      description: 'Complete mobile advertising solutions',
      href: '/services/west-palm-beach/mobile-billboard-advertising/',
      icon: TrendingUp
    },
    {
      title: 'Event Advertising West Palm Beach',
      description: 'Target Palm Beach social events',
      href: '/services/west-palm-beach/event-advertising/',
      icon: Star
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Luxury Retail', 'Technology', 'Financial Services', 'Healthcare', 'Real Estate', 'Hospitality'],
  locations: ['West Palm Beach', 'Palm Beach', 'Worth Avenue', 'Clematis Street', 'CityPlace', 'Downtown'],

  primaryCTA: 'Launch Digital Campaign',
  secondaryCTA: 'View Digital Portfolio',
  phone: '(561) 720-0521'
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: serviceData.description,
  provider: {
    '@type': 'Organization',
    name: 'Maximax Advertising',
    url: 'https://maximaxmobileadvertising.com',
    telephone: '(561) 720-0521',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'West Palm Beach',
      addressRegion: 'FL',
      addressCountry: 'US'
    }
  },
  areaServed: {
    '@type': 'City',
    name: 'West Palm Beach',
    containedInPlace: {
      '@type': 'State',
      name: 'Florida'
    }
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Mobile Billboard Services',
    itemListElement: serviceData.pricing.map((price, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: price.name,
        description: price.description
      },
      price: price.customQuote ? 'Contact for quote' : price.price,
      position: index + 1
    }))
  }
}

export default function DigitalMobileBillboardsWestPalmBeachPage() {
  return (
    <>
      <Script
        id="service-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <ServicePageTemplate {...serviceData} />
      <Footer />
      <FloatingContact />
    </>
  )
}