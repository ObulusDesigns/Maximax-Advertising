import { Metadata } from 'next'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { transformServiceData } from '@/app/lib/utils/icons'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Mobile Billboard Advertising Miami | LED Truck Advertising | Maximax',
  description: 'Mobile billboard advertising in Miami reaches 442,241+ residents with 4K LED trucks. Target Brickell, Wynwood, Downtown. 97% recall rate. Call (561) 720-0521',
  keywords: [
    'mobile billboard advertising Miami',
    'Miami billboard trucks',
    'mobile advertising Miami FL',
    'LED truck advertising Miami',
    'digital billboard trucks Miami',
    'Miami outdoor advertising',
    'Brickell mobile billboards',
    'Wynwood advertising trucks',
    'Downtown Miami billboards',
    'Miami vehicle advertising'
  ],
  openGraph: {
    title: 'Mobile Billboard Advertising in Miami | Maximax Advertising',
    description: 'Reach Miami\'s 442,241+ residents with mobile billboard advertising. 4K LED displays, GPS tracking, 97% recall rate. Call (561) 720-0521 for rates.',
    url: 'https://maximaxmobileadvertising.com/locations/miami/services/mobile-billboard-advertising/',
    images: [
      {
        url: '/images/miami-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Billboard Truck in Downtown Miami'
      }
    ]
  }
}

const miamiMobileBillboardData = {
  serviceName: 'Mobile Billboard Advertising in Miami',
  tagline: 'Reach 442,241+ Miami Residents with Dynamic Mobile Advertising',
  description: `Transform your Miami advertising strategy with mobile billboard trucks that deliver unparalleled visibility across the Magic City's diverse neighborhoods. Our fleet of 4K LED display trucks navigates Miami's high-traffic corridors from Brickell's financial district to the artistic streets of Wynwood, ensuring your message reaches the right audience at the perfect moment.

Miami's unique urban landscape, with its mix of business districts, entertainment zones, and residential communities, creates ideal conditions for mobile billboard advertising. Our trucks capture attention during rush hour on US-1, cruise past the shops of Lincoln Road, and make impressions at major events from Art Basel to Ultra Music Festival. With Miami's year-round outdoor lifestyle and average 248 sunny days, your mobile billboard enjoys consistent visibility that static advertising simply can't match.

Our data-driven approach leverages Miami's demographic diversity, targeting specific communities from the luxury high-rises of Edgewater to the family neighborhoods of Kendall. Real-time GPS tracking allows you to monitor your campaign's progress as it moves through Miami's 56 square miles, while our analytics dashboard provides detailed impression data for each route segment.

The advantages of mobile billboard advertising in Miami extend beyond mere visibility. In a city where traditional billboard space commands premium prices and faces increasing restrictions, mobile billboards offer a cost-effective alternative with greater flexibility. You can adjust routes daily to target specific events, avoid construction zones, or capitalize on emerging opportunities like Heat games at Kaseya Center or concerts at Bayfront Park Amphitheater.`,
  
  features: [
    {
      icon: 'MapPin',
      title: 'Strategic Miami Coverage',
      description: 'Target high-traffic areas including Brickell, Downtown, Wynwood, Design District, Miami Beach, and Coral Gables'
    },
    {
      icon: 'Users',
      title: 'Diverse Audience Reach',
      description: 'Connect with Miami\'s multicultural population across 34 distinct neighborhoods'
    },
    {
      icon: 'BarChart3',
      title: 'Real-Time Analytics',
      description: 'Track impressions by neighborhood with heat mapping and demographic data'
    },
    {
      icon: 'Clock',
      title: 'Flexible Scheduling',
      description: 'Optimize for rush hour traffic, special events, or nightlife districts'
    },
    {
      icon: 'Shield',
      title: 'Weather-Resistant Displays',
      description: 'Engineered for Miami\'s tropical climate with rain-proof 4K LED screens'
    },
    {
      icon: 'Target',
      title: 'Event Targeting',
      description: 'Maximize exposure at Art Basel, Ultra, Miami Open, and local festivals'
    },
    {
      icon: 'DollarSign',
      title: 'Cost-Effective CPM',
      description: '60% lower cost per thousand impressions than static Miami billboards'
    }
  ],

  benefits: [
    {
      title: 'Unmatched Miami Visibility',
      description: 'Reach areas where traditional billboards are restricted or unavailable',
      metric: '250,000+ daily impressions'
    },
    {
      title: 'Bilingual Messaging',
      description: 'Rotate between English and Spanish content for Miami\'s diverse market',
      metric: '69% Hispanic population'
    },
    {
      title: 'Traffic Advantage',
      description: 'Capitalize on Miami\'s heavy traffic with average commute of 29.8 minutes',
      metric: '97% message recall'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Miami Market Analysis',
      description: 'We analyze your target demographics and identify optimal Miami neighborhoods',
      icon: 'Search'
    },
    {
      step: 2,
      title: 'Route Optimization',
      description: 'Custom routes designed for maximum exposure in your target areas',
      icon: 'Map'
    },
    {
      step: 3,
      title: 'Creative Localization',
      description: 'Develop compelling visuals that resonate with Miami\'s diverse culture',
      icon: 'Palette'
    },
    {
      step: 4,
      title: 'Campaign Deployment',
      description: 'Launch with real-time GPS tracking and performance monitoring',
      icon: 'Rocket'
    }
  ],

  pricing: [
    {
      name: 'Miami Day Pass',
      price: '$899/day',
      description: 'Perfect for event marketing and promotions',
      features: [
        '8 hours coverage',
        'Custom Miami routes',
        'GPS tracking',
        'Basic analytics',
        'Single truck'
      ]
    },
    {
      name: 'Miami Week Package',
      price: '$4,899/week',
      description: 'Build brand awareness across Miami',
      features: [
        '40 hours coverage',
        'Multi-neighborhood routes',
        'Real-time GPS tracking',
        'Detailed analytics',
        'Route optimization',
        'Creative updates'
      ],
      popular: true
    },
    {
      name: 'Miami Month Campaign',
      price: '$16,999/month',
      description: 'Dominate Miami\'s outdoor advertising',
      features: [
        '160 hours coverage',
        'Full Miami-Dade coverage',
        'Advanced analytics dashboard',
        'A/B testing capabilities',
        'Multiple creative rotations',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Enterprise Miami',
      price: 'Custom Quote',
      description: 'Multi-truck fleets and extended campaigns',
      features: [
        'Multiple trucks available',
        'Miami-Dade + Broward coverage',
        'Event partnerships',
        'Annual contracts',
        'Priority scheduling',
        'Custom reporting'
      ],
      customQuote: true
    }
  ],

  faqs: [
    {
      question: 'What are the best areas in Miami for mobile billboard advertising?',
      answer: 'High-impact areas include Brickell (financial district), Wynwood (arts and nightlife), Downtown Miami (business hub), South Beach (tourism), and Coral Gables (affluent shoppers). We also recommend targeting US-1, I-95, and the Dolphin Expressway during peak hours for maximum impressions.'
    },
    {
      question: 'Can mobile billboards operate in Miami Beach?',
      answer: 'Yes! Our mobile billboards are fully permitted to operate in Miami Beach, including Ocean Drive, Lincoln Road, and Collins Avenue. This is a significant advantage over static billboards which face strict regulations in Miami Beach.'
    },
    {
      question: 'How do you handle Miami\'s traffic and weather conditions?',
      answer: 'Our experienced drivers know Miami\'s traffic patterns and use real-time navigation to maintain optimal visibility even during congestion. Our 4K LED displays are weather-sealed and bright enough to remain visible in Miami\'s intense sun and sudden rain showers.'
    },
    {
      question: 'What languages can you display on Miami mobile billboards?',
      answer: 'We can display content in any language, with English and Spanish being most common for Miami\'s market. We can also rotate between multiple languages throughout the day to reach different demographic segments.'
    },
    {
      question: 'How much does mobile billboard advertising cost in Miami?',
      answer: 'Miami mobile billboard campaigns start at $899/day for single-truck coverage. Weekly campaigns average $4,899 with route optimization, while monthly campaigns at $16,999 provide the best value with comprehensive coverage and analytics. Custom quotes are available for multi-truck fleets.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising Miami',
      description: 'High-resolution 4K displays for maximum impact',
      href: '/locations/miami/services/led-truck-advertising',
      icon: 'Monitor'
    },
    {
      title: 'Event Advertising Miami',
      description: 'Target major Miami events and festivals',
      href: '/locations/miami/services/event-advertising',
      icon: 'Calendar'
    },
    {
      title: 'Digital Mobile Billboards Miami',
      description: 'Dynamic content that captures attention',
      href: '/locations/miami/services/digital-mobile-billboards',
      icon: 'Smartphone'
    }
  ],

  testimonials: [
    {
      name: 'Carlos Rodriguez',
      company: 'Miami Real Estate Group',
      role: 'Marketing Director',
      content: 'Our mobile billboard campaign in Brickell and Downtown Miami generated 150+ qualified leads for our luxury condo development. The ability to target specific neighborhoods was invaluable.',
      rating: 5
    },
    {
      name: 'Sofia Martinez',
      company: 'Wynwood Restaurant Group',
      role: 'Owner',
      content: 'The mobile billboards helped us reach both locals and tourists. We saw a 40% increase in foot traffic during our campaign, especially from the routes through Design District.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Miami Tech Startup',
      role: 'CEO',
      content: 'Cost-effective way to build brand awareness across Miami. The real-time tracking showed us exactly where our ads were getting the most engagement.',
      rating: 5
    }
  ],

  gallery: [
    {
      src: '/images/miami-brickell-billboard-truck.jpg',
      alt: 'Mobile billboard truck in Brickell Financial District'
    },
    {
      src: '/images/miami-wynwood-led-truck.jpg',
      alt: 'LED advertising truck in Wynwood Arts District'
    },
    {
      src: '/images/miami-beach-mobile-billboard.jpg',
      alt: 'Mobile billboard on Ocean Drive Miami Beach'
    },
    {
      src: '/images/miami-downtown-digital-truck.jpg',
      alt: 'Digital billboard truck in Downtown Miami'
    }
  ],

  serviceAreas: [
    'Downtown Miami',
    'Brickell',
    'Wynwood',
    'Design District',
    'Midtown Miami',
    'Edgewater',
    'Miami Beach',
    'South Beach',
    'Coral Gables',
    'Coconut Grove',
    'Key Biscayne',
    'Aventura',
    'Kendall',
    'Doral',
    'Little Havana'
  ]
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Billboard Advertising in Miami',
  description: 'Mobile billboard advertising services in Miami, FL. LED truck advertising with 4K displays, GPS tracking, and targeted routing throughout Miami-Dade County.',
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
    '@id': 'https://www.wikidata.org/wiki/Q8652'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mobile Billboard Advertising Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Daily Mobile Billboard Campaign',
          description: '8 hours of mobile billboard advertising in Miami'
        },
        price: '899.00',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Weekly Mobile Billboard Campaign',
          description: '40 hours of mobile billboard advertising across Miami'
        },
        price: '4899.00',
        priceCurrency: 'USD'
      }
    ]
  }
}

export default function MiamiMobileBillboardPage() {
  return (
    <>
      <Script
        id="miami-mobile-billboard-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
            <ServicePageTemplate {...transformServiceData(miamiMobileBillboardData)} />
                </>
  )
}