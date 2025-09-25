import { Metadata } from 'next'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import { 
  Calendar, 
  MapPin, 
  Users, 
  Music, 
  Target, 
  TrendingUp,
  Star,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  Trophy,
  CheckCircle,
  PartyPopper
} from 'lucide-react'

const serviceName = 'Event Advertising in Miami'
const canonicalPath = '/services/miami/event-advertising/'

export const metadata: Metadata = {
  title: 'Event Advertising Miami | Mobile Billboards for Events | Maximax',
  description: 'Maximize event visibility with mobile billboard advertising in Miami. From Art Basel to Ultra Music Festival, our LED trucks amplify event promotion throughout Miami-Dade County.',
  keywords: 'event advertising Miami, Miami event marketing, festival advertising Miami, conference advertising Miami, Art Basel advertising, Ultra Music Festival advertising, Miami event promotion',
  openGraph: {
    title: 'Event Advertising in Miami - Maximax Mobile Billboards',
    description: 'Amplify your Miami event with mobile billboard trucks. Target attendees before, during, and after events with strategic mobile advertising.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Event Advertising Mobile Billboard in Miami',
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
  tagline: 'Make Your Miami Event Impossible to Miss',
  description: 'Transform Miami events into city-wide experiences with strategic mobile billboard advertising. Whether it\'s Art Basel, Ultra Music Festival, Miami Music Week, or your corporate event, our LED trucks create buzz before, during, and after your event, driving attendance and engagement across Miami-Dade County.',
  
  features: [
    {
      icon: Calendar,
      title: 'Event Timeline Strategy',
      description: 'Pre-event buzz, day-of promotion, and post-event momentum campaigns'
    },
    {
      icon: Users,
      title: 'Audience Targeting',
      description: 'Reach event-goers at hotels, venues, airports, and entertainment districts'
    },
    {
      icon: Music,
      title: 'Festival Expertise',
      description: 'Specialized experience with Miami\'s major festivals and cultural events'
    },
    {
      icon: MapPin,
      title: 'Venue Proximity',
      description: 'Strategic positioning near event venues and attendee hotspots'
    }
  ],
  
  benefits: [
    {
      title: 'Ticket Sales Boost',
      description: 'Drive last-minute ticket sales with day-of event promotion',
      metric: '35% sales increase'
    },
    {
      title: 'Event Awareness',
      description: 'Build awareness among locals and tourists throughout Miami',
      metric: '500K+ impressions/event'
    },
    {
      title: 'Sponsor Visibility',
      description: 'Maximize sponsor ROI with mobile billboard exposure',
      metric: '5x sponsor value'
    },
    {
      title: 'Multi-Event Coverage',
      description: 'Promote multiple events or venues during busy Miami seasons',
      metric: '10+ events/day capability'
    }
  ],
  
  process: [
    {
      step: 1,
      title: 'Event Analysis',
      description: 'Understand your event goals, audience, and Miami venue logistics',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Timeline Planning',
      description: 'Create pre-event, day-of, and follow-up advertising schedule',
      icon: Calendar
    },
    {
      step: 3,
      title: 'Creative Development',
      description: 'Design compelling visuals that capture event excitement',
      icon: Palette
    },
    {
      step: 4,
      title: 'Strategic Deployment',
      description: 'Execute targeted routes maximizing attendee exposure',
      icon: Rocket
    }
  ],
  
  pricing: [
    {
      name: 'Event Day Special',
      price: '$1,200/day',
      description: 'Maximum visibility on your event day',
      features: [
        '10 hours event coverage',
        'Venue-focused routing',
        'Pre and post event hours',
        'Social media coordination',
        'Real-time tracking'
      ]
    },
    {
      name: 'Event Week Package',
      price: '$6,500/week',
      description: 'Build anticipation with week-long promotion',
      features: [
        'Full week coverage',
        'Multiple venue targeting',
        'Attendee hotel circuits',
        'Airport visibility',
        'Performance reporting',
        'Content variations'
      ],
      popular: true
    },
    {
      name: 'Festival Partnership',
      price: 'Custom Quote',
      description: 'Comprehensive festival and major event campaigns',
      features: [
        'Multi-week campaigns',
        'Multiple truck fleet',
        'VIP area targeting',
        'Sponsor integration',
        'Media coordination',
        'Post-event analytics'
      ],
      customQuote: true
    }
  ],
  
  testimonials: [
    {
      name: 'Jessica Palmer',
      company: 'Miami Music Festival',
      role: 'Marketing Director',
      content: 'Maximax\'s mobile billboards were essential for our festival promotion. We saw a 40% increase in day-of ticket sales thanks to their strategic routing.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'Corporate Events Miami',
      role: 'Event Producer',
      content: 'For our conference at the Miami Convention Center, the mobile billboards created incredible buzz. Attendance exceeded our goals by 25%.',
      rating: 5
    },
    {
      name: 'Amanda Chen',
      company: 'Art Gallery Opening',
      role: 'Gallery Owner',
      content: 'The trucks circulating Wynwood during Art Basel brought amazing foot traffic to our opening. Best marketing investment we\'ve made.',
      rating: 5
    }
  ],
  
  stats: {
    clientsSatisfied: '300+',
    averageROI: '6x',
    campaignsCompleted: '600+',
    yearEstablished: '2019'
  },
  
  faqs: [
    {
      question: 'Which Miami events do you cover?',
      answer: 'We cover all major Miami events including Art Basel, Ultra Music Festival, Miami Music Week, Food & Wine Festival, Miami Beach Pride, corporate conferences, concerts, sporting events, and private functions throughout Miami-Dade County.'
    },
    {
      question: 'How far in advance should I book for my event?',
      answer: 'For major events like Art Basel or Ultra, we recommend booking 2-3 months in advance. For smaller events, 2-4 weeks is typically sufficient. Last-minute bookings may be available based on fleet availability.'
    },
    {
      question: 'Can you coordinate with multiple event venues?',
      answer: 'Absolutely! We can create routes that cover multiple venues, satellite events, and official event locations. This is particularly effective for festival weeks and conference circuits.'
    },
    {
      question: 'Do you offer event-day real-time updates?',
      answer: 'Yes! We can update messaging in real-time to announce schedule changes, ticket availability, special appearances, or weather-related updates during your event.'
    },
    {
      question: 'Can you target event attendees at hotels?',
      answer: 'Definitely! We strategically route through Miami Beach hotels, Downtown hotels, and airport areas to reach attendees before and after events, maximizing your event visibility.'
    }
  ],
  
  relatedServices: [
    {
      title: 'Mobile Billboard Advertising Miami',
      description: 'Year-round mobile advertising solutions',
      href: '/services/miami/mobile-billboard-advertising/',
      icon: TrendingUp
    },
    {
      title: 'Digital Mobile Billboards Miami',
      description: 'Dynamic digital displays for events',
      href: '/services/miami/digital-mobile-billboards/',
      icon: Star
    },
    {
      title: 'Political Campaign Advertising Miami',
      description: 'Political event and rally promotion',
      href: '/services/miami/political-campaign-advertising/',
      icon: Trophy
    }
  ],
  
  serviceType: 'event' as const,
  industries: ['Entertainment', 'Arts & Culture', 'Sports', 'Corporate', 'Non-Profit', 'Tourism'],
  locations: ['Miami Beach', 'Downtown Miami', 'Wynwood', 'Brickell', 'Coconut Grove', 'Coral Gables'],
  
  primaryCTA: 'Book Event Campaign',
  secondaryCTA: 'See Event Calendar',
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

export default function EventAdvertisingMiamiPage() {
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