import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  Target,
  TrendingUp,
  Award,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  Music,
  CheckCircle,
  Star
} from 'lucide-react'

const serviceName = 'Event Advertising in West Palm Beach'
const canonicalPath = '/services/west-palm-beach/event-advertising/'

export const metadata: Metadata = {
  title: 'Event Advertising West Palm Beach | Mobile Billboards for Events',
  description: 'Maximize event visibility in West Palm Beach with mobile billboard advertising. Target galas, festivals, polo matches, and cultural events. GPS-tracked campaigns for Palm Beach County\'s premier social calendar.',
  keywords: 'event advertising West Palm Beach, Palm Beach event marketing, mobile billboards for events, gala advertising West Palm Beach, festival advertising Palm Beach, conference marketing West Palm Beach',
  openGraph: {
    title: 'Event Advertising in West Palm Beach - Mobile Billboard Solutions',
    description: 'Drive attendance for West Palm Beach events with targeted mobile billboard advertising. From charity galas to cultural festivals.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Event Advertising Mobile Billboard West Palm Beach',
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
  tagline: 'Elevate Palm Beach Events with Strategic Mobile Advertising',
  description: 'Make your West Palm Beach event the talk of the social season with targeted mobile billboard advertising. From exclusive charity galas at The Breakers to cultural events at the Kravis Center, from polo matches in Wellington to art shows on Worth Avenue, our GPS-tracked mobile billboards ensure maximum visibility among Palm Beach County\'s most influential audiences. Reach the right people at the perfect moment with strategic positioning throughout the Palm Beach social circuit.',

  features: [
    {
      icon: Calendar,
      title: 'Social Season Coverage',
      description: 'Target Palm Beach\'s November-April high season events'
    },
    {
      icon: Users,
      title: 'Elite Audience Reach',
      description: 'Connect with philanthropists, socialites, and cultural patrons'
    },
    {
      icon: Clock,
      title: 'Perfect Timing',
      description: 'Pre-event awareness, day-of reminders, and VIP arrival targeting'
    },
    {
      icon: MapPin,
      title: 'Premium Venues',
      description: 'Coverage at Kravis Center, The Breakers, Mar-a-Lago area, and more'
    }
  ],

  benefits: [
    {
      title: 'Gala & Charity Events',
      description: 'Reach Palm Beach\'s philanthropic community',
      metric: '200+ annual galas'
    },
    {
      title: 'Cultural Impact',
      description: 'Target Kravis Center and museum patrons',
      metric: '1M+ cultural attendees'
    },
    {
      title: 'Polo & Equestrian',
      description: 'Wellington and Palm Beach polo event coverage',
      metric: '300,000+ polo fans'
    },
    {
      title: 'Social Calendar',
      description: 'Visibility during peak November-April season',
      metric: '500+ society events'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Event Strategy',
      description: 'Analyze your event goals and target attendees',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Route Planning',
      description: 'Design routes around venues and attendee hotels',
      icon: Map
    },
    {
      step: 3,
      title: 'Creative Excellence',
      description: 'Develop sophisticated messaging for discerning audiences',
      icon: Palette
    },
    {
      step: 4,
      title: 'Execute & Track',
      description: 'Deploy with real-time GPS monitoring',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'Event Day Special',
      price: '$900/day',
      description: 'Perfect for galas, openings, and one-day events',
      features: [
        '8 hours event coverage',
        'Venue-focused routing',
        'VIP arrival targeting',
        'GPS tracking included',
        'Same-day setup available'
      ]
    },
    {
      name: 'Event Week Elite',
      price: '$5,000/week',
      description: 'Build anticipation for major Palm Beach events',
      features: [
        '40 hours coverage',
        'Pre-event buzz building',
        'Day-of saturation',
        'Multiple venue coverage',
        'Social media integration',
        'Performance analytics'
      ],
      popular: true
    },
    {
      name: 'Season Package',
      price: 'Custom Quote',
      description: 'Comprehensive coverage for the Palm Beach social season',
      features: [
        'Multi-event coordination',
        'November-April coverage',
        'Priority placement',
        'Dedicated event specialist',
        'Custom reporting',
        'Volume pricing'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Margaret Vanderbilt',
      company: 'Palm Beach Charity Ball',
      role: 'Event Chair',
      content: 'The mobile billboards created exceptional visibility for our gala. We reached capacity three weeks before the event, a first in our 20-year history.',
      rating: 5
    },
    {
      name: 'Richard Pemberton',
      company: 'International Polo Club',
      role: 'Marketing Director',
      content: 'Targeting Wellington and Palm Beach with mobile billboards brought a younger, affluent audience to our matches. Attendance increased 40%.',
      rating: 5
    },
    {
      name: 'Sophia Laurent',
      company: 'Kravis Center',
      role: 'Promotions Manager',
      content: 'Mobile billboard advertising helped us reach beyond our traditional audience. The ability to target specific neighborhoods for different performances was invaluable.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '150+',
    averageROI: '5.2x',
    campaignsCompleted: '400+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'Which West Palm Beach events benefit most from mobile billboard advertising?',
      answer: 'All major events see excellent results, including charity galas, Kravis Center performances, polo matches, art shows, food and wine festivals, and corporate conferences. The Palm Beach social season (November-April) offers exceptional opportunities.'
    },
    {
      question: 'How far in advance should I book for Palm Beach events?',
      answer: 'For major events like charity galas or during peak season, book 6-8 weeks in advance. For smaller events, 3-4 weeks is typically sufficient. We offer rush service for last-minute needs.'
    },
    {
      question: 'Can you target specific Palm Beach social circles?',
      answer: 'Yes! We create routes through neighborhoods like Palm Beach Island, Wellington equestrian areas, and waterfront communities where your target attendees live, work, and socialize.'
    },
    {
      question: 'How do you handle Palm Beach\'s exclusive venues?',
      answer: 'We maintain excellent relationships with area venues and understand access protocols. We position strategically on public roads near The Breakers, Mar-a-Lago area, country clubs, and private venues for maximum visibility.'
    },
    {
      question: 'Can you coordinate with Palm Beach society publications?',
      answer: 'Absolutely! We often coordinate campaigns with Palm Beach Daily News, Palm Beach Illustrated, and society photographers to maximize your event\'s media coverage and social presence.'
    }
  ],

  relatedServices: [
    {
      title: 'Mobile Billboard Advertising West Palm Beach',
      description: 'Comprehensive mobile advertising solutions',
      href: '/services/west-palm-beach/mobile-billboard-advertising/',
      icon: Award
    },
    {
      title: 'Digital Mobile Billboards West Palm Beach',
      description: 'Dynamic digital displays for events',
      href: '/services/west-palm-beach/digital-mobile-billboards/',
      icon: Music
    },
    {
      title: 'Political Campaign Advertising West Palm Beach',
      description: 'Campaign events and fundraisers',
      href: '/services/west-palm-beach/political-campaign-advertising/',
      icon: Users
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Events', 'Non-Profit', 'Arts & Culture', 'Entertainment', 'Hospitality', 'Luxury'],
  locations: ['West Palm Beach', 'Palm Beach', 'Wellington', 'Kravis Center', 'Worth Avenue', 'The Breakers'],

  primaryCTA: 'Book Event Campaign',
  secondaryCTA: 'View Event Calendar',
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
    name: 'Event Advertising Services',
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

export default function EventAdvertisingWestPalmBeachPage() {
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
