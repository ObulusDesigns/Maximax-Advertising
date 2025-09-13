import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import {
  Truck,
  MapPin,
  Clock,
  Shield,
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

const serviceName = 'Mobile Billboard Advertising in Fort Lauderdale'
const canonicalPath = '/services/fort-lauderdale/mobile-billboard-advertising/'

export const metadata: Metadata = {
  title: 'Mobile Billboard Advertising Fort Lauderdale | LED Trucks | Maximax',
  description: 'Transform Fort Lauderdale streets into your advertising canvas. Mobile billboard trucks deliver 75,000+ daily impressions from Las Olas to beach areas. GPS tracking and strategic Broward County routing.',
  keywords: 'mobile billboard advertising Fort Lauderdale, LED truck advertising Fort Lauderdale, digital billboards Fort Lauderdale, mobile advertising Fort Lauderdale, billboard trucks Fort Lauderdale, outdoor advertising Fort Lauderdale, Fort Lauderdale mobile billboards, truck advertising Fort Lauderdale',
  openGraph: {
    title: 'Mobile Billboard Advertising in Fort Lauderdale - Maximax Advertising',
    description: 'Reach Fort Lauderdale audiences with mobile billboard trucks. 75,000+ daily impressions, GPS tracking, and strategic routing throughout Broward County.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Billboard Truck in Fort Lauderdale',
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
  tagline: 'Dominate Fort Lauderdale Streets with Premium Mobile Billboards',
  description: 'Capture the attention of Fort Lauderdale\'s affluent residents and millions of annual visitors with our state-of-the-art mobile billboard trucks. From the bustling Las Olas Boulevard to the pristine beaches, from downtown business districts to the Port Everglades cruise terminals, our LED trucks deliver your message with unmatched impact across Broward County\'s most valuable demographics.',

  features: [
    {
      icon: Truck,
      title: 'Fort Lauderdale Fleet',
      description: 'Modern LED trucks optimized for Fort Lauderdale\'s coastal climate and traffic patterns'
    },
    {
      icon: MapPin,
      title: 'Strategic Broward Routing',
      description: 'Target Las Olas, Beach Boulevard, downtown, Port Everglades, and key neighborhoods'
    },
    {
      icon: Clock,
      title: 'Tourist & Business Hours',
      description: 'Reach cruise passengers, beach-goers, and business professionals at optimal times'
    },
    {
      icon: Shield,
      title: 'Weather-Resistant Tech',
      description: 'Marine-grade displays built for Fort Lauderdale\'s tropical environment'
    }
  ],

  benefits: [
    {
      title: 'Affluent Market Access',
      description: 'Connect with Fort Lauderdale\'s high-income residents and luxury travelers',
      metric: '75,000+ daily impressions'
    },
    {
      title: 'Cruise Port Coverage',
      description: 'Target 4 million annual cruise passengers at Port Everglades',
      metric: '4M cruise passengers/year'
    },
    {
      title: 'Beach & Marina Visibility',
      description: 'Reach yacht owners, beach visitors, and waterfront diners',
      metric: '10M+ beach visitors annually'
    },
    {
      title: 'Business District Impact',
      description: 'Penetrate downtown Fort Lauderdale\'s corporate market',
      metric: '150,000+ professionals'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Fort Lauderdale Analysis',
      description: 'Identify your target demographics across Broward County',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Route Planning',
      description: 'Design routes covering beaches, downtown, and target neighborhoods',
      icon: Map
    },
    {
      step: 3,
      title: 'Creative Development',
      description: 'Create compelling content for Fort Lauderdale\'s sophisticated market',
      icon: Palette
    },
    {
      step: 4,
      title: 'Launch & Track',
      description: 'Deploy with real-time GPS tracking and performance monitoring',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'Fort Lauderdale Day Pass',
      price: '$800/day',
      description: 'Perfect for events, grand openings, and weekend promotions',
      features: [
        '8 hours coverage',
        'Beach and downtown routes',
        'GPS tracking included',
        'Port Everglades access',
        'Event targeting available'
      ]
    },
    {
      name: 'Broward Week Package',
      price: '$4,500/week',
      description: 'Build brand awareness across Fort Lauderdale and Broward County',
      features: [
        '40 hours coverage',
        'All Fort Lauderdale zones',
        'Route optimization',
        'Weekly analytics reports',
        'Creative updates included',
        '10% multi-week discount'
      ],
      popular: true
    },
    {
      name: 'Monthly Campaign',
      price: 'Custom Quote',
      description: 'Dominate Fort Lauderdale market with sustained presence',
      features: [
        'Unlimited customization',
        'Priority placement',
        'Dedicated account manager',
        'Monthly performance reports',
        'Creative refresh included',
        'Volume pricing available'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Michael Thompson',
      company: 'Las Olas Marina',
      role: 'Marketing Director',
      content: 'The mobile billboards helped us reach yacht owners and luxury travelers along A1A and Las Olas. We saw a 35% increase in marina inquiries.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'Fort Lauderdale Beach Resort',
      role: 'General Manager',
      content: 'Targeting cruise passengers and beach visitors with mobile billboards was incredibly effective. Our occupancy rates improved significantly during the campaign.',
      rating: 5
    },
    {
      name: 'Robert Johnson',
      company: 'Downtown Fort Lauderdale Business Alliance',
      role: 'President',
      content: 'Maximax\'s trucks helped promote our downtown events and brought measurable foot traffic increases to our member businesses.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '180+',
    averageROI: '3.8x',
    campaignsCompleted: '400+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'What areas of Fort Lauderdale do your mobile billboards cover?',
      answer: 'We cover all of Fort Lauderdale including Las Olas Boulevard, Fort Lauderdale Beach, downtown, Port Everglades, Victoria Park, Colee Hammock, and surrounding Broward County areas. Routes are customized to your target audience.'
    },
    {
      question: 'Can you target cruise passengers at Port Everglades?',
      answer: 'Yes! We have special routes designed to reach cruise passengers during embarkation and disembarkation days. With over 4 million passengers annually, Port Everglades is a prime advertising location.'
    },
    {
      question: 'How effective is mobile billboard advertising along Fort Lauderdale Beach?',
      answer: 'Extremely effective! The slow-moving traffic on A1A and high pedestrian activity means extended viewing times. Beach-goers, tourists, and locals all engage with our mobile billboards along the beach corridor.'
    },
    {
      question: 'Do you cover Fort Lauderdale events and festivals?',
      answer: 'Absolutely! We target major events like the Fort Lauderdale International Boat Show, Air Show, Pride Festival, Las Olas Art Fair, and numerous beach events throughout the year.'
    },
    {
      question: 'What\'s the best season for advertising in Fort Lauderdale?',
      answer: 'Fort Lauderdale is a year-round market, but peak seasons include October-April (tourist season), March (Spring Break), and during major events like the Boat Show. We\'ll help optimize your campaign timing.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising Fort Lauderdale',
      description: 'High-impact LED displays for maximum visibility',
      href: '/services/fort-lauderdale/led-truck-advertising/',
      icon: BarChart3
    },
    {
      title: 'Event Advertising Fort Lauderdale',
      description: 'Target Fort Lauderdale\'s premier events',
      href: '/services/fort-lauderdale/event-advertising/',
      icon: Star
    },
    {
      title: 'Digital Mobile Billboards Fort Lauderdale',
      description: 'Dynamic digital displays with real-time updates',
      href: '/services/fort-lauderdale/digital-mobile-billboards/',
      icon: TrendingUp
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Marine & Yachting', 'Hospitality', 'Real Estate', 'Retail', 'Healthcare', 'Entertainment'],
  locations: ['Fort Lauderdale', 'Fort Lauderdale Beach', 'Las Olas', 'Port Everglades', 'Downtown Fort Lauderdale'],

  primaryCTA: 'Get Fort Lauderdale Quote',
  secondaryCTA: 'View Broward Routes',
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
    name: 'Mobile Billboard Advertising Services',
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

export default function MobileBillboardAdvertisingFortLauderdalePage() {
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