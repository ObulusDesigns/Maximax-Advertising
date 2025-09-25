import { Metadata } from 'next'
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

const serviceName = 'Mobile Billboard Advertising in Miami'
const canonicalPath = '/services/miami/mobile-billboard-advertising/'

export const metadata: Metadata = {
  title: 'Mobile Billboard Advertising Miami | LED Truck Ads | Maximax',
  description: 'Premium mobile billboard advertising in Miami. Our LED billboard trucks deliver 85,000+ daily impressions throughout Miami-Dade County. GPS tracking, 4K displays, and strategic routing from Downtown to South Beach.',
  keywords: 'mobile billboard advertising Miami, LED truck advertising Miami, digital billboards Miami, mobile advertising Miami, billboard trucks Miami, outdoor advertising Miami, Miami mobile billboards, truck advertising Miami',
  openGraph: {
    title: 'Mobile Billboard Advertising in Miami - Maximax Advertising',
    description: 'Reach Miami audiences with mobile billboard trucks. 85,000+ daily impressions, GPS tracking, and strategic routing throughout Miami-Dade County.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Billboard Truck in Miami',
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
  tagline: 'Dominate Miami Streets with Mobile Billboard Trucks',
  description: 'Transform Miami\'s bustling streets into your advertising canvas. Our mobile billboard trucks navigate from Brickell to Wynwood, South Beach to Coral Gables, delivering your message to 85,000+ viewers daily. With GPS tracking and 4K LED displays, we ensure maximum visibility across Miami-Dade County\'s most trafficked areas.',
  
  features: [
    {
      icon: Truck,
      title: 'Premium Miami Fleet',
      description: 'Modern LED trucks designed for Miami\'s unique traffic patterns and weather conditions'
    },
    {
      icon: MapPin,
      title: 'Strategic Miami Routing',
      description: 'Target Downtown, Brickell, South Beach, Wynwood, and all major Miami neighborhoods'
    },
    {
      icon: Clock,
      title: 'Peak Hour Coverage',
      description: 'Maximize exposure during Miami rush hours and evening entertainment districts'
    },
    {
      icon: Shield,
      title: 'Weather-Proof Displays',
      description: 'Hurricane-rated displays ensure visibility through Miami\'s tropical weather'
    }
  ],
  
  benefits: [
    {
      title: 'Miami Market Penetration',
      description: 'Reach diverse Miami demographics from business professionals to tourists',
      metric: '85,000+ daily impressions'
    },
    {
      title: 'Event & Festival Coverage',
      description: 'Target Art Basel, Ultra Music Festival, Miami Beach events, and more',
      metric: '300+ annual events'
    },
    {
      title: 'Bilingual Messaging',
      description: 'Connect with Miami\'s multicultural audience in English and Spanish',
      metric: '70% Hispanic market reach'
    },
    {
      title: 'Tourist & Local Reach',
      description: 'Capture both Miami residents and 15M+ annual visitors',
      metric: '15M+ tourist impressions/year'
    }
  ],
  
  process: [
    {
      step: 1,
      title: 'Miami Market Analysis',
      description: 'We analyze your target demographics across Miami neighborhoods',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Route Optimization',
      description: 'Design routes covering Brickell, Downtown, Beach, and target areas',
      icon: Map
    },
    {
      step: 3,
      title: 'Creative Localization',
      description: 'Create compelling bilingual content for Miami\'s diverse market',
      icon: Palette
    },
    {
      step: 4,
      title: 'Campaign Launch',
      description: 'Deploy throughout Miami with real-time GPS tracking',
      icon: Rocket
    }
  ],
  
  pricing: [
    {
      name: 'Miami Day Pass',
      price: '$850/day',
      description: 'Perfect for Miami events and weekend promotions',
      features: [
        '8 hours Miami coverage',
        'Downtown & Beach routes',
        'GPS tracking included',
        'Bilingual messaging',
        'Event targeting available'
      ]
    },
    {
      name: 'Miami Week Package',
      price: '$4,800/week',
      description: 'Build brand awareness across Miami-Dade County',
      features: [
        '40 hours coverage',
        'All Miami zones included',
        'Route optimization',
        'Weekly performance reports',
        'A/B testing available',
        '10% multi-week discount'
      ],
      popular: true
    },
    {
      name: 'Miami Monthly',
      price: 'Custom Quote',
      description: 'Dominate Miami market with sustained presence',
      features: [
        'Unlimited route customization',
        'Priority event placement',
        'Dedicated account manager',
        'Monthly analytics',
        'Creative refresh included',
        'Best value pricing'
      ],
      customQuote: true
    }
  ],
  
  testimonials: [
    {
      name: 'Carlos Rodriguez',
      company: 'Miami Restaurant Group',
      role: 'Marketing Director',
      content: 'Our mobile billboard campaign in Wynwood and Brickell drove a 40% increase in foot traffic. The ability to target lunch and dinner hours was game-changing.',
      rating: 5
    },
    {
      name: 'Jennifer Martinez',
      company: 'South Beach Fitness',
      role: 'Owner',
      content: 'Maximax helped us reach both locals and tourists along Ocean Drive and Collins Avenue. The GPS tracking showed exactly where our ads were seen.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Miami Real Estate Partners',
      role: 'VP Marketing',
      content: 'The mobile billboards helped us promote our new Brickell development. We saw immediate increases in showroom visits and website traffic.',
      rating: 5
    }
  ],
  
  stats: {
    clientsSatisfied: '250+',
    averageROI: '4.2x',
    campaignsCompleted: '500+',
    yearEstablished: '2019'
  },
  
  faqs: [
    {
      question: 'What areas of Miami do your mobile billboards cover?',
      answer: 'Our trucks cover all of Miami-Dade County including Downtown, Brickell, South Beach, Wynwood, Design District, Coral Gables, Coconut Grove, and surrounding areas. We customize routes based on your target audience.'
    },
    {
      question: 'Can I target specific Miami events or festivals?',
      answer: 'Absolutely! We specialize in event targeting including Art Basel, Ultra Music Festival, Miami Beach Pride, Food & Wine Festival, and hundreds of other Miami events throughout the year.'
    },
    {
      question: 'Do you offer Spanish language advertising?',
      answer: 'Yes! We offer bilingual advertising to reach Miami\'s diverse population. Our design team can create content in English, Spanish, or both to maximize your campaign effectiveness.'
    },
    {
      question: 'How do Miami traffic patterns affect visibility?',
      answer: 'Miami traffic actually works in your favor! Slow-moving traffic on I-95, US-1, and major streets like Biscayne Boulevard means more viewing time. We optimize routes for maximum exposure during peak hours.'
    },
    {
      question: 'What\'s the best time to advertise in Miami?',
      answer: 'Year-round advertising works in Miami, but peak seasons include October-April (tourist season), December (Art Basel), March (Spring Break), and during major events. We\'ll help you choose optimal timing.'
    }
  ],
  
  relatedServices: [
    {
      title: 'LED Truck Advertising Miami',
      description: 'High-resolution LED displays for maximum impact',
      href: '/services/miami/led-truck-advertising/',
      icon: BarChart3
    },
    {
      title: 'Event Advertising Miami',
      description: 'Target Miami\'s premier events and festivals',
      href: '/services/miami/event-advertising/',
      icon: Star
    },
    {
      title: 'Digital Mobile Billboards Miami',
      description: 'Dynamic digital displays with real-time content',
      href: '/services/miami/digital-mobile-billboards/',
      icon: TrendingUp
    }
  ],
  
  serviceType: 'advertising' as const,
  industries: ['Retail', 'Real Estate', 'Healthcare', 'Entertainment', 'Hospitality', 'Automotive'],
  locations: ['Miami', 'Miami Beach', 'Coral Gables', 'Brickell', 'Wynwood', 'Downtown Miami'],
  
  primaryCTA: 'Get Miami Quote',
  secondaryCTA: 'View Miami Routes',
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
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US'
    }
  },
  areaServed: {
    '@type': 'City',
    name: 'Miami',
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

export default function MobileBillboardAdvertisingMiamiPage() {
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