import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { transformServiceData } from '@/app/lib/utils/icons'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Event Advertising Miami | Art Basel, Ultra, Miami Open | Maximax',
  description: 'Event advertising with mobile billboards for Miami\'s biggest events: Art Basel, Ultra Music Festival, Miami Open, and more. Maximum visibility. Call (561) 720-0521',
  keywords: [
    'event advertising Miami',
    'Art Basel billboard advertising',
    'Ultra Music Festival advertising',
    'Miami Open advertising',
    'Miami event marketing',
    'festival advertising Miami',
    'conference advertising Miami',
    'Miami Beach event billboards',
    'sports event advertising Miami',
    'concert promotion Miami'
  ],
  openGraph: {
    title: 'Event Advertising Miami | Mobile Billboards for Major Events',
    description: 'Dominate Miami events with mobile billboard advertising. Art Basel, Ultra, Miami Open, Food & Wine Festival. Reach thousands of attendees. Call (561) 720-0521.',
    url: 'https://maximaxmobileadvertising.com/locations/miami/services/event-advertising/',
    images: [
      {
        url: '/images/miami-event-billboard-art-basel.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Billboard at Art Basel Miami'
      }
    ]
  }
}

const miamiEventAdvertisingData = {
  serviceName: 'Event Advertising in Miami',
  tagline: 'Dominate Miami\'s Premier Events with Strategic Mobile Advertising',
  description: `Maximize your brand's impact at Miami's world-renowned events with strategic mobile billboard advertising that captures attention when engagement is at its peak. From the international art collectors at Art Basel to the 165,000+ attendees at Ultra Music Festival, our mobile billboards position your message directly in the path of highly qualified, event-focused audiences who are primed for discovery and spending.

Miami's event calendar represents unparalleled marketing opportunities, with over 15 million annual visitors attending conferences, festivals, sporting events, and cultural celebrations. Our event advertising expertise ensures your brand doesn't just attend these events – it dominates the conversation. Whether circling the Miami Beach Convention Center during Art Basel, cruising Collins Avenue during Miami Music Week, or targeting the crowds at Hard Rock Stadium for Miami Open, our strategic positioning guarantees visibility when it matters most.

Our event advertising advantage extends beyond simple proximity. We understand the unique dynamics of each Miami event – the VIP arrival routes for Art Basel, the hotel clusters for Ultra attendees, the dining districts activated during Food & Wine Festival. This insider knowledge allows us to position your mobile billboards not just near events, but along the critical paths where attendees congregate, travel, and make purchasing decisions.

The ROI of event advertising in Miami is exceptional. Event attendees demonstrate higher purchasing intent, with Art Basel visitors averaging $5,000+ in discretionary spending and Ultra attendees spending $1,200+ during their stay. Our mobile billboards capitalize on this heightened engagement, delivering your message when audiences are most receptive and wallets are open. Real-time tracking ensures you capture every opportunity, from pre-event buzz building to post-event momentum.`,
  
  features: [
    {
      icon: 'Calendar',
      title: 'Major Event Coverage',
      description: 'Exclusive routes for Art Basel, Ultra, Miami Open, and 50+ annual events'
    },
    {
      icon: 'Users',
      title: 'Audience Targeting',
      description: 'Reach specific attendee demographics at each unique event'
    },
    {
      icon: 'Clock',
      title: 'Strategic Timing',
      description: 'Pre-event buzz, peak attendance hours, and after-party targeting'
    },
    {
      icon: 'MapPin',
      title: 'VIP Route Access',
      description: 'Premium positioning near convention centers, hotels, and venues'
    },
    {
      icon: 'TrendingUp',
      title: 'Amplified Reach',
      description: 'Capitalize on increased foot and vehicle traffic during events'
    },
    {
      icon: 'Camera',
      title: 'Social Media Integration',
      description: 'Photo-worthy displays that generate organic social sharing'
    },
    {
      icon: 'Award',
      title: 'Exclusive Opportunities',
      description: 'First-mover advantage with early event booking options'
    }
  ],

  benefits: [
    {
      title: 'Captive Event Audiences',
      description: 'Reach highly engaged attendees with specific interests and spending power',
      metric: '95% brand recall at events'
    },
    {
      title: 'Premium Demographics',
      description: 'Access affluent, influential audiences at cultural and luxury events',
      metric: '$5,000+ avg spend at Art Basel'
    },
    {
      title: 'Viral Potential',
      description: 'Event attendees share 3x more content, amplifying your reach',
      metric: '3x social media amplification'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Event Selection',
      description: 'Identify optimal events matching your target audience',
      icon: 'Search'
    },
    {
      step: 2,
      title: 'Route Strategy',
      description: 'Map exclusive routes covering venues, hotels, and hotspots',
      icon: 'Map'
    },
    {
      step: 3,
      title: 'Creative Alignment',
      description: 'Design event-specific messaging that resonates with attendees',
      icon: 'Palette'
    },
    {
      step: 4,
      title: 'Live Activation',
      description: 'Deploy during peak times with real-time optimization',
      icon: 'Zap'
    }
  ],

  pricing: [
    {
      name: 'Single Event',
      price: '$1,299/day',
      description: 'Target one major Miami event',
      features: [
        '10 hours event coverage',
        'Venue perimeter routes',
        'Hotel district coverage',
        'Event-specific creative',
        'Post-event report'
      ]
    },
    {
      name: 'Event Weekend',
      price: '$3,499/3 days',
      description: 'Full weekend event domination',
      features: [
        '30 hours total coverage',
        'Pre-event buzz building',
        'Peak attendance targeting',
        'After-party routes',
        'Social media metrics',
        'Heat map analysis'
      ],
      popular: true
    },
    {
      name: 'Festival Package',
      price: '$9,999/week',
      description: 'Complete festival or conference coverage',
      features: [
        'Full event duration',
        'Multiple truck options',
        'VIP area targeting',
        'Sponsor zone exclusivity',
        'Real-time content updates',
        'Comprehensive analytics'
      ]
    },
    {
      name: 'Annual Event Pass',
      price: 'Custom Quote',
      description: 'Priority access to all major Miami events',
      features: [
        'Art Basel Miami Beach',
        'Ultra Music Festival',
        'Miami Open',
        'Food & Wine Festival',
        'Miami Music Week',
        'Exclusive route rights'
      ],
      customQuote: true
    }
  ],

  faqs: [
    {
      question: 'Which Miami events provide the best advertising ROI?',
      answer: 'Top ROI events include Art Basel (December) with 80,000+ affluent art collectors, Ultra Music Festival (March) with 165,000+ attendees, Miami Open (March) attracting sports enthusiasts, Food & Wine Festival (February) reaching luxury consumers, and Miami Music Week drawing international visitors. Each event offers unique demographic advantages.'
    },
    {
      question: 'How far in advance should I book for major Miami events?',
      answer: 'For premier events like Art Basel and Ultra, we recommend booking 60-90 days in advance to secure prime routes and times. For smaller events, 30 days is typically sufficient. We offer early-bird discounts for bookings made 90+ days before events.'
    },
    {
      question: 'Can mobile billboards access restricted event areas?',
      answer: 'While we cannot enter secured event grounds, our strategic routes cover all public areas surrounding venues, including entrance/exit points, parking areas, official hotels, shuttle routes, and nearby entertainment districts where attendees congregate before and after events.'
    },
    {
      question: 'How do you handle event cancellations or weather issues?',
      answer: 'We offer flexible rescheduling for weather-related issues and full credits for officially cancelled events. For outdoor events, we monitor weather closely and can adjust routes to covered areas or high-traffic alternate locations to maintain visibility.'
    },
    {
      question: 'What makes mobile billboards effective for event advertising?',
      answer: 'Mobile billboards excel at events because they reach attendees multiple times throughout their journey - at hotels, en route to venues, in parking areas, and at after-event gatherings. Unlike static signs, we can adjust positioning based on crowd movement and peak activity times.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising Miami',
      description: 'High-impact displays perfect for events',
      href: '/locations/miami/services/led-truck-advertising',
      icon: 'Monitor'
    },
    {
      title: 'Digital Mobile Billboards Miami',
      description: 'Dynamic content for multi-day events',
      href: '/locations/miami/services/digital-mobile-billboards',
      icon: 'Smartphone'
    },
    {
      title: 'Political Campaign Advertising',
      description: 'Target political events and rallies',
      href: '/locations/miami/services/political-campaign-advertising',
      icon: 'Vote'
    }
  ],

  testimonials: [
    {
      name: 'Jennifer Walsh',
      company: 'Luxury Fashion Brand',
      role: 'Event Marketing Director',
      content: 'Our Art Basel campaign exceeded all expectations. The mobile billboards reached collectors at hotels, galleries, and private events. We saw a 400% increase in boutique traffic compared to previous years.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      company: 'Music Festival Sponsor',
      role: 'Brand Manager',
      content: 'During Ultra Music Festival, the LED trucks were everywhere attendees looked. The ability to update content for different DJ sets and after-parties was invaluable. Best event marketing investment we\'ve made.',
      rating: 5
    },
    {
      name: 'Diana Chen',
      company: 'Miami Restaurant Group',
      role: 'Marketing VP',
      content: 'Food & Wine Festival advertising drove incredible traffic to all five of our locations. The geo-targeted routes brought food enthusiasts directly to our doors. Reservations increased 250% during the event.',
      rating: 5
    }
  ],

  gallery: [
    {
      src: '/images/miami-art-basel-billboard.jpg',
      alt: 'Mobile billboard at Art Basel Miami Beach'
    },
    {
      src: '/images/miami-ultra-festival-truck.jpg',
      alt: 'LED truck at Ultra Music Festival'
    },
    {
      src: '/images/miami-open-tennis-advertising.jpg',
      alt: 'Billboard truck at Miami Open tennis event'
    },
    {
      src: '/images/miami-food-wine-festival-billboard.jpg',
      alt: 'Mobile advertising at Food & Wine Festival'
    }
  ],

  serviceAreas: [
    'Miami Beach Convention Center',
    'Bayfront Park',
    'Hard Rock Stadium',
    'FTX Arena (Kaseya Center)',
    'Wynwood Arts District',
    'Design District Venues',
    'Coconut Grove Convention Center',
    'Adrienne Arsht Center',
    'Marlins Park',
    'Key Biscayne Tennis Center',
    'Downtown Event Spaces',
    'South Beach Hotels',
    'Brickell City Centre',
    'Pérez Art Museum',
    'Museum Park'
  ]
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Event Advertising in Miami',
  description: 'Mobile billboard advertising for Miami events including Art Basel, Ultra Music Festival, Miami Open, and major conferences. Strategic positioning for maximum event attendee reach.',
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
    name: 'Event Advertising Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Single Event Coverage',
          description: '10 hours of mobile billboard advertising at one Miami event'
        },
        price: '1299.00',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Event Weekend Package',
          description: '30 hours of coverage for weekend events and festivals'
        },
        price: '3499.00',
        priceCurrency: 'USD'
      }
    ]
  }
}

export default function MiamiEventAdvertisingPage() {
  return (
    <>
      <Script
        id="miami-event-advertising-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <ServicePageTemplate {...transformServiceData(miamiEventAdvertisingData)} />
      <Footer />
      <FloatingContact />
    </>
  )
}