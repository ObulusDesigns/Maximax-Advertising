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

const serviceName = 'LED Truck Advertising in West Palm Beach'
const canonicalPath = '/services/west-palm-beach/led-truck-advertising/'

export const metadata: Metadata = {
  title: 'LED Truck Advertising West Palm Beach | Digital Billboard Trucks',
  description: 'Premium LED truck advertising in West Palm Beach with ultra-bright 4K displays. Target affluent Palm Beach County audiences with 70,000+ daily impressions. From Worth Avenue to downtown business districts.',
  keywords: 'LED truck advertising West Palm Beach, digital billboard trucks West Palm Beach, mobile LED displays West Palm Beach, LED advertising Palm Beach, digital truck advertising West Palm Beach',
  openGraph: {
    title: 'LED Truck Advertising in West Palm Beach - Maximax Advertising',
    description: 'High-impact LED truck advertising throughout West Palm Beach and Palm Beach County. 4K displays with GPS tracking for maximum ROI.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'LED Advertising Truck in West Palm Beach',
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
  tagline: 'Illuminate Palm Beach County with Premium LED Technology',
  description: 'Experience the power of cutting-edge LED truck advertising in West Palm Beach\'s most prestigious markets. Our fleet features ultra-bright 4K LED displays that command attention from Clematis Street\'s nightlife to Worth Avenue\'s luxury shoppers. With advanced GPS tracking and dynamic content capabilities, your brand shines brilliantly throughout Palm Beach County\'s affluent communities, business districts, and entertainment venues.',

  features: [
    {
      icon: Monitor,
      title: '4K LED Excellence',
      description: 'Ultra-high resolution displays with 6000+ nits brightness'
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Change content remotely for time-sensitive promotions'
    },
    {
      icon: Eye,
      title: '24/7 Visibility',
      description: 'Auto-adjusting brightness for perfect day and night viewing'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'GPS-guided routes through West Palm Beach\'s premier areas'
    }
  ],

  benefits: [
    {
      title: 'Superior Brightness',
      description: 'LED displays 12x brighter than traditional billboards',
      metric: '99% visibility rate'
    },
    {
      title: 'Luxury Market Impact',
      description: 'Perfect for Worth Avenue and upscale Palm Beach areas',
      metric: '70,000+ affluent viewers'
    },
    {
      title: 'Dynamic Content',
      description: 'Run multiple campaigns and messages throughout the day',
      metric: 'Unlimited variations'
    },
    {
      title: 'Weather Resilient',
      description: 'Tropical-rated LEDs maintain clarity in all conditions',
      metric: '100% uptime guarantee'
    }
  ],

  process: [
    {
      step: 1,
      title: 'LED Strategy',
      description: 'Optimize content for West Palm Beach markets',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Content Design',
      description: 'Create stunning 4K visuals for LED impact',
      icon: Palette
    },
    {
      step: 3,
      title: 'Route Programming',
      description: 'Program GPS routes for maximum LED exposure',
      icon: Map
    },
    {
      step: 4,
      title: 'Launch & Track',
      description: 'Deploy LED trucks with real-time monitoring',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'LED Day Package',
      price: '$950/day',
      description: 'High-impact LED advertising for immediate results',
      features: [
        '8 hours LED display',
        '4K content optimization',
        'Downtown and Palm Beach routes',
        'Real-time updates',
        'GPS tracking dashboard'
      ]
    },
    {
      name: 'LED Week Campaign',
      price: '$5,400/week',
      description: 'Sustained LED presence across Palm Beach County',
      features: [
        '40 hours LED coverage',
        'Multiple content rotations',
        'All premium locations',
        'A/B testing capability',
        'Weekly analytics reports',
        'Priority routing'
      ],
      popular: true
    },
    {
      name: 'LED Monthly Program',
      price: 'Custom Quote',
      description: 'Maximum LED impact with comprehensive management',
      features: [
        'Unlimited content changes',
        'Premium route access',
        'Dedicated campaign manager',
        'Advanced analytics suite',
        'Creative services included',
        'Volume pricing'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Victoria Pemberton',
      company: 'Palm Beach Luxury Mall',
      role: 'Marketing Director',
      content: 'The LED trucks were absolutely stunning! Our holiday campaign along Worth Avenue generated unprecedented foot traffic. The display quality rivals Times Square.',
      rating: 5
    },
    {
      name: 'Charles Davidson',
      company: 'West Palm Beach Auto Collection',
      role: 'Owner',
      content: 'Showcasing our luxury vehicles on LED screens while driving through affluent neighborhoods was brilliant. Sales inquiries increased 50% during the campaign.',
      rating: 5
    },
    {
      name: 'Maria Castellano',
      company: 'Palm Beach Health System',
      role: 'Communications VP',
      content: 'LED truck advertising helped us reach diverse communities with health messages. The brightness and clarity ensured our message was seen day and night.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '175+',
    averageROI: '5.1x',
    campaignsCompleted: '400+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'How bright are LED truck displays in West Palm Beach sunshine?',
      answer: 'Our LED displays feature 6000+ nits brightness, making them clearly visible even in bright Florida sunshine. They automatically adjust throughout the day for optimal viewing in all conditions, from sunny Palm Beach afternoons to Clematis Street nightlife.'
    },
    {
      question: 'Can LED content be updated during the West Palm Beach campaign?',
      answer: 'Yes! Content can be changed instantly via our cloud platform. Perfect for flash sales, happy hour promotions, or adjusting messages for different West Palm Beach neighborhoods and demographics throughout the day.'
    },
    {
      question: 'How do LED trucks perform on Worth Avenue and Palm Beach Island?',
      answer: 'Exceptionally well! The premium LED quality matches the luxury environment perfectly. High-net-worth shoppers and residents appreciate the sophisticated, high-resolution displays that complement the upscale setting.'
    },
    {
      question: 'What content formats work best for LED truck advertising?',
      answer: 'We support all major formats including MP4, MOV, JPG, and PNG. Our design team optimizes your content for 4K LED display, ensuring vibrant colors and crystal-clear text visibility throughout West Palm Beach.'
    },
    {
      question: 'Are LED trucks effective for West Palm Beach nightlife advertising?',
      answer: 'Absolutely! Our LED displays are particularly impactful at night along Clematis Street, CityPlace, and entertainment districts. The brilliant displays create an unmissable presence that drives evening traffic to restaurants, bars, and events.'
    }
  ],

  relatedServices: [
    {
      title: 'Mobile Billboard Advertising West Palm Beach',
      description: 'Complete mobile advertising solutions',
      href: '/services/west-palm-beach/mobile-billboard-advertising/',
      icon: Truck
    },
    {
      title: 'Digital Mobile Billboards West Palm Beach',
      description: 'Advanced digital display technology',
      href: '/services/west-palm-beach/digital-mobile-billboards/',
      icon: Monitor
    },
    {
      title: 'Event Advertising West Palm Beach',
      description: 'Target Palm Beach social events',
      href: '/services/west-palm-beach/event-advertising/',
      icon: Star
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Luxury Retail', 'Automotive', 'Healthcare', 'Financial Services', 'Real Estate', 'Hospitality'],
  locations: ['West Palm Beach', 'Palm Beach', 'Worth Avenue', 'Clematis Street', 'CityPlace', 'Downtown'],

  primaryCTA: 'Get LED Quote',
  secondaryCTA: 'View LED Portfolio',
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

export default function LEDTruckAdvertisingWestPalmBeachPage() {
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
