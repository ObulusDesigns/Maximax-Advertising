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

const serviceName = 'Event Advertising in Fort Lauderdale'
const canonicalPath = '/services/fort-lauderdale/event-advertising/'

export const metadata: Metadata = {
  title: 'Event Advertising Fort Lauderdale | Mobile Billboards for Events',
  description: 'Maximize event visibility in Fort Lauderdale with mobile billboard advertising. Target boat shows, festivals, concerts, and conferences. GPS-tracked routes ensure optimal coverage for your Fort Lauderdale events.',
  keywords: 'event advertising Fort Lauderdale, Fort Lauderdale event marketing, mobile billboards for events, festival advertising Fort Lauderdale, boat show advertising, conference marketing Fort Lauderdale',
  openGraph: {
    title: 'Event Advertising in Fort Lauderdale - Mobile Billboard Solutions',
    description: 'Drive attendance and engagement for Fort Lauderdale events with targeted mobile billboard advertising. From boat shows to beach festivals.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Event Advertising Mobile Billboard Fort Lauderdale',
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
  tagline: 'Drive Event Success with Strategic Mobile Billboard Advertising',
  description: 'Make your Fort Lauderdale event impossible to miss with targeted mobile billboard advertising. From the world-renowned Fort Lauderdale International Boat Show to beach festivals, concerts at the Parker Playhouse, and conferences at the Broward Convention Center, our GPS-tracked mobile billboards ensure maximum visibility before, during, and after your event. Reach attendees, tourists, and locals with perfectly timed messaging that drives attendance and engagement.',

  features: [
    {
      icon: Calendar,
      title: 'Event-Specific Routing',
      description: 'Custom routes designed around Fort Lauderdale event venues and traffic patterns'
    },
    {
      icon: Users,
      title: 'Audience Targeting',
      description: 'Reach event-goers, tourists, and locals at optimal times'
    },
    {
      icon: Clock,
      title: 'Timeline Coordination',
      description: 'Pre-event awareness, day-of reminders, and post-event messaging'
    },
    {
      icon: MapPin,
      title: 'Venue Optimization',
      description: 'Coverage at Convention Center, beaches, Las Olas, and event spaces'
    }
  ],

  benefits: [
    {
      title: 'Boat Show Dominance',
      description: 'Target 100,000+ attendees at the International Boat Show',
      metric: '100,000+ boat show visitors'
    },
    {
      title: 'Festival Coverage',
      description: 'Reach audiences at 50+ annual Fort Lauderdale festivals',
      metric: '50+ festivals yearly'
    },
    {
      title: 'Conference Impact',
      description: 'Target business travelers and convention attendees',
      metric: '500+ conventions annually'
    },
    {
      title: 'Beach Event Visibility',
      description: 'Capture attention at Air Show, Spring Break, and beach events',
      metric: '2M+ beach event attendees'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Event Analysis',
      description: 'Understand your event goals and target audience',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Route Planning',
      description: 'Design routes around venues and attendee patterns',
      icon: Map
    },
    {
      step: 3,
      title: 'Creative Development',
      description: 'Create compelling event-focused messaging',
      icon: Palette
    },
    {
      step: 4,
      title: 'Execute & Track',
      description: 'Deploy with real-time tracking and optimization',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'Event Day Special',
      price: '$850/day',
      description: 'Perfect for single-day events and festivals',
      features: [
        '8 hours event coverage',
        'Venue-focused routing',
        'Pre-event promotion',
        'Day-of visibility',
        'GPS tracking included'
      ]
    },
    {
      name: 'Event Week Package',
      price: '$4,800/week',
      description: 'Build momentum for major Fort Lauderdale events',
      features: [
        '40 hours total coverage',
        'Pre-event awareness campaign',
        'Event day saturation',
        'Multiple venue coverage',
        'Performance analytics',
        'Content updates included'
      ],
      popular: true
    },
    {
      name: 'Festival Season',
      price: 'Custom Quote',
      description: 'Comprehensive coverage for event series or seasons',
      features: [
        'Multi-event coordination',
        'Seasonal campaign strategy',
        'Priority venue placement',
        'Dedicated event specialist',
        'Custom analytics reports',
        'Volume event pricing'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Thomas Bradley',
      company: 'Fort Lauderdale Boat Show',
      role: 'Marketing Director',
      content: 'Mobile billboards were crucial for driving attendance. The trucks navigating around the convention center and marinas created incredible buzz for our show.',
      rating: 5
    },
    {
      name: 'Maria Gonzalez',
      company: 'Las Olas Art Festival',
      role: 'Event Coordinator',
      content: 'The mobile advertising campaign increased our foot traffic by 45%. Being able to target both locals and tourists along the beach and Las Olas was perfect.',
      rating: 5
    },
    {
      name: 'Kevin O\'Brien',
      company: 'Fort Lauderdale Air Show',
      role: 'Promotions Manager',
      content: 'Maximax\'s strategic routing along the beach and A1A during Air Show week was brilliant. We saw record attendance and the mobile billboards were a big part of that.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '200+',
    averageROI: '4.8x',
    campaignsCompleted: '500+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'Which Fort Lauderdale events benefit most from mobile billboard advertising?',
      answer: 'All major events see great results, including the International Boat Show, Air Show, Pride Festival, Las Olas Art Fair, Tortuga Music Festival, and hundreds of beach events. Corporate conferences at the Convention Center also benefit significantly.'
    },
    {
      question: 'How far in advance should I book for Fort Lauderdale events?',
      answer: 'For major events like the Boat Show or Air Show, book 4-6 weeks in advance. For smaller events, 2-3 weeks is typically sufficient. We offer pre-event awareness campaigns starting weeks before your event.'
    },
    {
      question: 'Can you coordinate with multiple Fort Lauderdale venues?',
      answer: 'Absolutely! We create custom routes covering multiple venues like the Convention Center, Parker Playhouse, War Memorial Auditorium, and beach event spaces. Our GPS tracking ensures optimal coverage at each location.'
    },
    {
      question: 'How do you handle Fort Lauderdale event traffic and road closures?',
      answer: 'Our drivers are experienced with Fort Lauderdale event logistics. We work around road closures, adjust for event traffic patterns, and position trucks for maximum visibility during peak attendance times.'
    },
    {
      question: 'Can you target specific event demographics?',
      answer: 'Yes! We customize routes and timing based on your event audience. For boat shows, we focus on marinas and luxury areas. For concerts, we target entertainment districts. Each campaign is tailored to your specific audience.'
    }
  ],

  relatedServices: [
    {
      title: 'Mobile Billboard Advertising Fort Lauderdale',
      description: 'Comprehensive mobile advertising solutions',
      href: '/services/fort-lauderdale/mobile-billboard-advertising/',
      icon: Award
    },
    {
      title: 'Digital Mobile Billboards Fort Lauderdale',
      description: 'Dynamic digital displays for events',
      href: '/services/fort-lauderdale/digital-mobile-billboards/',
      icon: Music
    },
    {
      title: 'Political Campaign Advertising Fort Lauderdale',
      description: 'Event and rally promotion',
      href: '/services/fort-lauderdale/political-campaign-advertising/',
      icon: Users
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Events', 'Entertainment', 'Sports', 'Conventions', 'Festivals', 'Tourism'],
  locations: ['Convention Center', 'Fort Lauderdale Beach', 'Las Olas', 'Port Everglades', 'Downtown'],

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

export default function EventAdvertisingFortLauderdalePage() {
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