import { Metadata } from 'next'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import {
  Truck,
  Monitor,
  Zap,
  Eye,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react'

const serviceName = 'LED Truck Advertising in Fort Lauderdale'
const canonicalPath = '/services/fort-lauderdale/led-truck-advertising/'

export const metadata: Metadata = {
  title: 'LED Truck Advertising Fort Lauderdale | Digital Billboard Trucks',
  description: 'Premium LED truck advertising in Fort Lauderdale with 4K displays and GPS tracking. Reach 75,000+ viewers daily across Broward County. From Las Olas to Port Everglades, maximize your brand visibility.',
  keywords: 'LED truck advertising Fort Lauderdale, digital billboard trucks Fort Lauderdale, mobile LED displays Fort Lauderdale, LED advertising Fort Lauderdale, digital truck advertising Fort Lauderdale, LED mobile billboards Fort Lauderdale',
  openGraph: {
    title: 'LED Truck Advertising in Fort Lauderdale - Maximax Advertising',
    description: 'High-impact LED truck advertising throughout Fort Lauderdale. 4K displays, GPS tracking, and strategic routing for maximum brand exposure.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'LED Advertising Truck in Fort Lauderdale',
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
  tagline: 'Illuminate Fort Lauderdale with Premium LED Truck Displays',
  description: 'Experience the power of cutting-edge LED truck advertising in Fort Lauderdale. Our fleet features ultra-bright 4K LED displays that command attention day and night, from the vibrant Las Olas Boulevard to the bustling Fort Lauderdale Beach. With advanced GPS tracking and dynamic content capabilities, your message reaches the right audience at the perfect moment throughout Broward County.',

  features: [
    {
      icon: Monitor,
      title: '4K LED Technology',
      description: 'Ultra-high resolution displays with 5000+ nits brightness for perfect visibility'
    },
    {
      icon: Zap,
      title: 'Dynamic Content',
      description: 'Change messages instantly, run multiple ads, and update content remotely'
    },
    {
      icon: Eye,
      title: 'Day & Night Impact',
      description: 'Auto-adjusting brightness ensures perfect visibility 24/7'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'GPS-guided routes to reach specific Fort Lauderdale demographics'
    }
  ],

  benefits: [
    {
      title: 'Superior Visibility',
      description: 'LED displays 10x brighter than traditional billboards',
      metric: '98% recall rate'
    },
    {
      title: 'Beach & Marina Impact',
      description: 'Perfect visibility along A1A and waterfront areas',
      metric: '75,000+ daily views'
    },
    {
      title: 'Real-Time Updates',
      description: 'Change content instantly for time-sensitive promotions',
      metric: 'Instant updates'
    },
    {
      title: 'Weather Resistant',
      description: 'Marine-grade LEDs designed for coastal conditions',
      metric: '100% uptime'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Display Strategy',
      description: 'Optimize LED content for Fort Lauderdale markets',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Content Creation',
      description: 'Design high-impact visuals for 4K LED displays',
      icon: Palette
    },
    {
      step: 3,
      title: 'Route Programming',
      description: 'Program GPS routes for maximum LED visibility',
      icon: Map
    },
    {
      step: 4,
      title: 'Launch & Optimize',
      description: 'Deploy LED trucks with real-time performance tracking',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'LED Day Campaign',
      price: '$900/day',
      description: 'High-impact LED advertising for events and promotions',
      features: [
        '8 hours LED display time',
        '4K resolution graphics',
        'Beach and downtown routes',
        'Content updates included',
        'GPS tracking dashboard'
      ]
    },
    {
      name: 'LED Week Package',
      price: '$5,000/week',
      description: 'Sustained LED visibility across Fort Lauderdale',
      features: [
        '40 hours LED coverage',
        'Multiple content rotations',
        'All prime locations',
        'A/B testing capability',
        'Weekly performance reports',
        'Priority routing'
      ],
      popular: true
    },
    {
      name: 'LED Monthly Program',
      price: 'Custom Quote',
      description: 'Maximum LED impact with full campaign management',
      features: [
        'Unlimited content changes',
        'Premium route access',
        'Dedicated campaign manager',
        'Advanced analytics',
        'Creative services included',
        'Best value pricing'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Amanda Foster',
      company: 'Galleria Fort Lauderdale',
      role: 'Marketing Manager',
      content: 'The LED trucks were impossible to ignore! Our grand opening campaign generated massive foot traffic, especially along Las Olas and the beach areas.',
      rating: 5
    },
    {
      name: 'James Mitchell',
      company: 'Fort Lauderdale Auto Group',
      role: 'Owner',
      content: 'The ability to showcase our vehicles on bright LED screens while driving past our target customers was game-changing. Sales increased 40% during the campaign.',
      rating: 5
    },
    {
      name: 'Patricia Chen',
      company: 'Broward Health',
      role: 'Communications Director',
      content: 'LED truck advertising helped us reach diverse communities across Fort Lauderdale with health awareness messages. The visibility was exceptional.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '200+',
    averageROI: '4.5x',
    campaignsCompleted: '450+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'How bright are your LED truck displays in Fort Lauderdale?',
      answer: 'Our LED displays feature 5000+ nits brightness, making them clearly visible even in bright Florida sunshine. They automatically adjust for optimal viewing in all lighting conditions, from sunny beach days to evening entertainment districts.'
    },
    {
      question: 'Can LED content be changed during the Fort Lauderdale campaign?',
      answer: 'Yes! Content can be updated remotely in real-time. Run different messages for lunch crowds downtown, beach-goers in the afternoon, and nightlife audiences in the evening. Perfect for time-sensitive promotions and event countdowns.'
    },
    {
      question: 'How do LED trucks perform along Fort Lauderdale Beach?',
      answer: 'Exceptionally well! The high brightness and contrast of our LED displays ensure perfect visibility along A1A, even with ocean glare. Beach visitors and slow-moving traffic provide extended viewing times.'
    },
    {
      question: 'What file formats work best for LED truck advertising?',
      answer: 'We accept all major formats including MP4, MOV, JPG, and PNG. Our design team optimizes your content for 4K LED display, ensuring crisp, vibrant visuals that capture attention throughout Fort Lauderdale.'
    },
    {
      question: 'Are LED trucks effective for Fort Lauderdale nightlife advertising?',
      answer: 'Absolutely! Our LED displays are particularly impactful at night, standing out brilliantly in entertainment districts like Las Olas, downtown, and beach bar areas. Many clients see their best response rates during evening hours.'
    }
  ],

  relatedServices: [
    {
      title: 'Mobile Billboard Advertising Fort Lauderdale',
      description: 'Complete mobile advertising solutions',
      href: '/services/fort-lauderdale/mobile-billboard-advertising/',
      icon: Truck
    },
    {
      title: 'Digital Mobile Billboards Fort Lauderdale',
      description: 'Advanced digital display technology',
      href: '/services/fort-lauderdale/digital-mobile-billboards/',
      icon: Monitor
    },
    {
      title: 'Event Advertising Fort Lauderdale',
      description: 'Target major Fort Lauderdale events',
      href: '/services/fort-lauderdale/event-advertising/',
      icon: Star
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Retail', 'Automotive', 'Healthcare', 'Entertainment', 'Real Estate', 'Marine'],
  locations: ['Fort Lauderdale', 'Las Olas', 'Fort Lauderdale Beach', 'Downtown', 'Port Everglades'],

  primaryCTA: 'Get LED Quote',
  secondaryCTA: 'View LED Examples',
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
    name: 'LED Truck Advertising Services',
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

export default function LEDTruckAdvertisingFortLauderdalePage() {
  return (
    <>
      <Script
        id="service-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
            <ServicePageTemplate {...serviceData} />
                </>
  )
}