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

const serviceName = 'Digital Mobile Billboards in Fort Lauderdale'
const canonicalPath = '/services/fort-lauderdale/digital-mobile-billboards/'

export const metadata: Metadata = {
  title: 'Digital Mobile Billboards Fort Lauderdale | Interactive Displays',
  description: 'Advanced digital mobile billboards in Fort Lauderdale featuring interactive displays, real-time content updates, and data analytics. Target 75,000+ viewers daily with dynamic advertising throughout Broward County.',
  keywords: 'digital mobile billboards Fort Lauderdale, digital advertising trucks Fort Lauderdale, mobile digital displays Fort Lauderdale, interactive billboards Fort Lauderdale, digital outdoor advertising Fort Lauderdale',
  openGraph: {
    title: 'Digital Mobile Billboards in Fort Lauderdale - Maximax Advertising',
    description: 'Next-generation digital mobile billboards with real-time updates and analytics. Dominate Fort Lauderdale streets with dynamic content.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Mobile Billboard in Fort Lauderdale',
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
  tagline: 'Next-Generation Digital Advertising on Fort Lauderdale Streets',
  description: 'Transform your advertising with cutting-edge digital mobile billboards that captivate Fort Lauderdale audiences. Our digital displays offer unparalleled flexibility with instant content updates, video capabilities, and interactive features. From Las Olas Boulevard\'s upscale shoppers to Port Everglades\' international travelers, deliver dynamic messages that adapt to your audience in real-time throughout Broward County.',

  features: [
    {
      icon: Monitor,
      title: 'HD Digital Displays',
      description: 'Crystal-clear 4K resolution with vibrant colors and perfect contrast'
    },
    {
      icon: Smartphone,
      title: 'Remote Management',
      description: 'Update content instantly from anywhere via cloud platform'
    },
    {
      icon: Wifi,
      title: 'Connected Analytics',
      description: 'Real-time performance data and audience engagement metrics'
    },
    {
      icon: Play,
      title: 'Video & Animation',
      description: 'Full motion video and animated content capabilities'
    }
  ],

  benefits: [
    {
      title: 'Dynamic Content',
      description: 'Change messages based on time, location, or events',
      metric: 'Unlimited updates'
    },
    {
      title: 'Enhanced Engagement',
      description: 'Digital displays generate 400% more views than static',
      metric: '400% more engagement'
    },
    {
      title: 'Data-Driven Results',
      description: 'Track impressions, engagement, and ROI in real-time',
      metric: 'Live analytics'
    },
    {
      title: 'Weather Optimization',
      description: 'Auto-adjust content based on Fort Lauderdale weather',
      metric: '24/7 optimization'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Digital Strategy',
      description: 'Develop dynamic content strategy for Fort Lauderdale market',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Content Production',
      description: 'Create compelling digital content with motion graphics',
      icon: Palette
    },
    {
      step: 3,
      title: 'Campaign Setup',
      description: 'Configure scheduling, routing, and content rotation',
      icon: Map
    },
    {
      step: 4,
      title: 'Monitor & Optimize',
      description: 'Track performance and optimize in real-time',
      icon: BarChart
    }
  ],

  pricing: [
    {
      name: 'Digital Day Pass',
      price: '$950/day',
      description: 'Perfect for events, launches, and flash promotions',
      features: [
        '8 hours digital display',
        'Up to 5 content variations',
        'Real-time updates',
        'Performance dashboard',
        'Beach and downtown routes'
      ]
    },
    {
      name: 'Digital Week Campaign',
      price: '$5,200/week',
      description: 'Build digital presence across Fort Lauderdale',
      features: [
        '40 hours coverage',
        'Unlimited content changes',
        'Video content support',
        'A/B testing included',
        'Detailed analytics',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Digital Monthly',
      price: 'Custom Quote',
      description: 'Full-scale digital dominance in Broward County',
      features: [
        'Dedicated campaign management',
        'Custom content production',
        'Advanced targeting',
        'API integration available',
        'White-label reporting',
        'Volume discounts'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Nicole Anderson',
      company: 'Fort Lauderdale Fashion Week',
      role: 'Event Director',
      content: 'The digital billboards allowed us to update show times and featured designers in real-time. The video capabilities showcased runway highlights perfectly.',
      rating: 5
    },
    {
      name: 'Marcus Rivera',
      company: 'Broward County Tourism',
      role: 'Marketing Coordinator',
      content: 'Being able to change our messaging for different events and weather conditions was invaluable. The analytics helped us understand our reach better than ever.',
      rating: 5
    },
    {
      name: 'Diana Walsh',
      company: 'Las Olas Company',
      role: 'Retail Manager',
      content: 'The digital displays brought our products to life with video and animation. We could promote lunch specials during noon and happy hour in the evening.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '150+',
    averageROI: '5.2x',
    campaignsCompleted: '350+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'How quickly can digital content be updated in Fort Lauderdale?',
      answer: 'Content updates happen instantly through our cloud platform. You can change your message in seconds, perfect for flash sales, weather-based promotions, or responding to real-time events in Fort Lauderdale.'
    },
    {
      question: 'Can digital billboards show video content?',
      answer: 'Yes! Our digital displays support full HD video at 30fps. Show product demos, event highlights, or branded content as your trucks navigate Fort Lauderdale\'s busiest areas.'
    },
    {
      question: 'What analytics do digital mobile billboards provide?',
      answer: 'You\'ll receive comprehensive data including impressions, dwell time, route performance, peak engagement hours, and demographic heat maps for Fort Lauderdale areas. Real-time dashboards show campaign performance.'
    },
    {
      question: 'How do digital billboards perform at Fort Lauderdale events?',
      answer: 'Exceptionally well! Digital displays can show event schedules, countdown timers, live social media feeds, and instant updates. Perfect for boat shows, festivals, and beach events.'
    },
    {
      question: 'Can I run different ads for different Fort Lauderdale neighborhoods?',
      answer: 'Absolutely! Geo-targeting allows different content in Las Olas versus the beach, or downtown versus residential areas. The system automatically switches content based on GPS location.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising Fort Lauderdale',
      description: 'High-brightness LED display technology',
      href: '/services/fort-lauderdale/led-truck-advertising/',
      icon: Monitor
    },
    {
      title: 'Mobile Billboard Advertising Fort Lauderdale',
      description: 'Complete mobile advertising solutions',
      href: '/services/fort-lauderdale/mobile-billboard-advertising/',
      icon: TrendingUp
    },
    {
      title: 'Event Advertising Fort Lauderdale',
      description: 'Specialized event targeting',
      href: '/services/fort-lauderdale/event-advertising/',
      icon: Star
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Technology', 'Retail', 'Entertainment', 'Hospitality', 'Real Estate', 'Healthcare'],
  locations: ['Fort Lauderdale', 'Las Olas', 'Beach Boulevard', 'Downtown', 'Port Everglades'],

  primaryCTA: 'Start Digital Campaign',
  secondaryCTA: 'See Digital Examples',
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
      addressLocality: 'Fort Lauderdale',
      addressRegion: 'FL',
      addressCountry: 'US'
    }
  },
  areaServed: {
    '@type': 'City',
    name: 'Fort Lauderdale',
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

export default function DigitalMobileBillboardsFortLauderdalePage() {
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