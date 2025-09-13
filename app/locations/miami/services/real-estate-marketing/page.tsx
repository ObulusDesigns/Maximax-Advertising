import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { transformServiceData } from '@/app/lib/utils/icons'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Real Estate Marketing Miami | Luxury Property Billboard Advertising | Maximax',
  description: 'Real estate marketing with mobile billboards in Miami. Promote luxury condos, new developments, open houses. Target affluent buyers. Call (561) 720-0521',
  keywords: [
    'real estate marketing Miami',
    'property advertising Miami',
    'luxury condo marketing Miami',
    'Miami real estate billboards',
    'new development advertising Miami',
    'open house promotion Miami',
    'Miami property marketing',
    'real estate billboard trucks Miami',
    'condo sales advertising Miami',
    'Miami Beach real estate marketing'
  ],
  openGraph: {
    title: 'Real Estate Marketing Miami | Mobile Billboards for Properties',
    description: 'Sell Miami real estate faster with mobile billboard advertising. Target luxury buyers in Brickell, Miami Beach, Coral Gables. Premium visibility. Call (561) 720-0521.',
    url: 'https://maximaxmobileadvertising.com/locations/miami/services/real-estate-marketing/',
    images: [
      {
        url: '/images/miami-real-estate-billboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Mobile Billboard in Miami'
      }
    ]
  }
}

const miamiRealEstateMarketingData = {
  serviceName: 'Real Estate Marketing in Miami',
  tagline: 'Accelerate Property Sales with Strategic Mobile Billboard Advertising',
  description: `Transform your Miami real estate marketing with mobile billboards that showcase properties directly to qualified buyers in their natural habitat. In a market where luxury condos average $600+ per square foot and competition for buyer attention is fierce, our mobile advertising delivers the visibility and prestige your properties deserve. From pre-construction projects in Brickell to waterfront estates in Miami Beach, our strategic positioning ensures your listings capture the attention of serious buyers when they're most receptive.

Miami's real estate market demands innovative marketing approaches that match its sophistication. With international buyers comprising 36% of purchases and median home prices exceeding $450,000, traditional marketing often fails to reach the diverse, mobile audience driving today's transactions. Our mobile billboards bridge this gap, showcasing properties along the commute routes of financial district professionals, in front of luxury shopping destinations where affluent buyers congregate, and throughout neighborhoods where your target demographic lives and works.

The psychology of real estate marketing aligns perfectly with mobile billboard capabilities. Buyers often make emotional connections with properties through repeated exposure, and our trucks ensure your development or listing remains top-of-mind throughout their decision journey. Whether promoting a glass tower's ocean views to drivers on the MacArthur Causeway or highlighting a Coral Gables estate's exclusivity along Miracle Mile, we position your property as the premium choice in Miami's competitive market.

Our data-driven approach maximizes real estate marketing ROI. By analyzing buyer demographics, traffic patterns, and competitive developments, we create routes that generate qualified leads at a fraction of traditional advertising costs. Real estate professionals using our mobile billboards report 40% more property inquiries, 3x open house attendance, and faster sales cycles. In Miami's fast-moving market, the visibility advantage of mobile billboards can mean the difference between a quick sale and months on the market.`,
  
  features: [
    {
      icon: 'Home',
      title: 'Property Showcase',
      description: 'High-resolution displays perfect for architectural renderings and property photos'
    },
    {
      icon: 'MapPin',
      title: 'Neighborhood Targeting',
      description: 'Route through specific ZIP codes matching buyer demographics'
    },
    {
      icon: 'DollarSign',
      title: 'Affluent Area Focus',
      description: 'Target luxury shopping districts, country clubs, and high-income neighborhoods'
    },
    {
      icon: 'Calendar',
      title: 'Open House Promotion',
      description: 'Drive traffic to weekend showings and broker events'
    },
    {
      icon: 'Globe',
      title: 'International Reach',
      description: 'Multilingual capabilities for Miami\'s global buyer market'
    },
    {
      icon: 'TrendingUp',
      title: 'Market Timing',
      description: 'Capitalize on seasonal buying patterns and market conditions'
    },
    {
      icon: 'Users',
      title: 'Agent Branding',
      description: 'Build personal brand alongside property promotion'
    }
  ],

  benefits: [
    {
      title: 'Qualified Lead Generation',
      description: 'Reach serious buyers with purchasing power in target neighborhoods',
      metric: '40% more inquiries'
    },
    {
      title: 'Luxury Market Positioning',
      description: 'Mobile billboards convey exclusivity and premium quality',
      metric: '3x open house traffic'
    },
    {
      title: 'Faster Sales Velocity',
      description: 'Increased visibility accelerates the sales cycle',
      metric: '25% faster closings'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Property Analysis',
      description: 'Identify unique selling points and target buyer profile',
      icon: 'Search'
    },
    {
      step: 2,
      title: 'Route Planning',
      description: 'Map routes through buyer neighborhoods and commute paths',
      icon: 'Map'
    },
    {
      step: 3,
      title: 'Creative Development',
      description: 'Design compelling visuals showcasing property features',
      icon: 'Image'
    },
    {
      step: 4,
      title: 'Lead Tracking',
      description: 'Monitor inquiries and optimize for maximum conversion',
      icon: 'BarChart3'
    }
  ],

  pricing: [
    {
      name: 'Open House Special',
      price: '$699/weekend',
      description: 'Drive traffic to weekend showings',
      features: [
        '16 hours (Fri-Sun)',
        'Neighborhood saturation',
        'Directional messaging',
        'QR code for details',
        'Lead capture metrics'
      ]
    },
    {
      name: 'Listing Launch',
      price: '$3,999/week',
      description: 'New listing or price reduction campaigns',
      features: [
        '40 hours coverage',
        'Multi-neighborhood routes',
        'Buyer demographic targeting',
        'Virtual tour QR codes',
        'Weekly lead reports',
        'Social media amplification'
      ],
      popular: true
    },
    {
      name: 'Development Marketing',
      price: '$12,999/month',
      description: 'Pre-construction and new development promotion',
      features: [
        '160 hours monthly',
        'Investor area targeting',
        'Model center directions',
        'Multiple creative rotations',
        'Competitive area coverage',
        'Broker event support'
      ]
    },
    {
      name: 'Brokerage Package',
      price: 'Custom Quote',
      description: 'Multi-property and agent branding',
      features: [
        'Portfolio promotion',
        'Team branding',
        'Luxury market positioning',
        'Year-round presence',
        'Exclusive territories',
        'Co-marketing opportunities'
      ],
      customQuote: true
    }
  ],

  faqs: [
    {
      question: 'Which Miami neighborhoods are best for real estate mobile billboards?',
      answer: 'Prime areas include Brickell (young professionals buying condos), Coral Gables (luxury family homes), Miami Beach (international buyers), Aventura (retirees and investors), and Coconut Grove (established professionals). We also target feeder neighborhoods where buyers typically upgrade from.'
    },
    {
      question: 'How do mobile billboards help sell luxury properties?',
      answer: 'Mobile billboards create prestige and exclusivity through strategic positioning in affluent areas. They reach high-net-worth individuals during their daily routines - at luxury gyms, high-end shopping districts, private clubs, and financial districts where traditional advertising can\'t penetrate.'
    },
    {
      question: 'Can you promote multiple properties simultaneously?',
      answer: 'Yes! Digital displays can rotate between multiple listings, perfect for brokerages or developments with various units. We can showcase different properties based on neighborhood, alternate between coming soon and active listings, or feature your entire portfolio with agent branding.'
    },
    {
      question: 'What\'s the ROI for real estate mobile billboard advertising?',
      answer: 'Real estate clients typically see 40% more inquiries, 3x increase in open house attendance, and 25% faster sales. For a $1 million property, even one additional buyer generated by billboard visibility can yield 3% ($30,000) in commission - far exceeding campaign costs.'
    },
    {
      question: 'How do mobile billboards complement digital real estate marketing?',
      answer: 'Mobile billboards drive online engagement by increasing brand searches by 35%, boosting property website traffic, and improving social media engagement. QR codes connect offline visibility to online property tours, while retargeting captures billboard viewers for digital follow-up.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising Miami',
      description: 'Stunning property visuals on 4K displays',
      href: '/locations/miami/services/led-truck-advertising',
      icon: 'Monitor'
    },
    {
      title: 'Digital Mobile Billboards',
      description: 'Rotate multiple listings dynamically',
      href: '/locations/miami/services/digital-mobile-billboards',
      icon: 'Smartphone'
    },
    {
      title: 'Event Advertising Miami',
      description: 'Target real estate expos and home shows',
      href: '/locations/miami/services/event-advertising',
      icon: 'Calendar'
    }
  ],

  testimonials: [
    {
      name: 'Michael Rodriguez',
      company: 'Brickell Luxury Realty',
      role: 'Broker/Owner',
      content: 'Mobile billboards transformed our pre-construction sales. We sold 60% of units before groundbreaking by targeting financial district commuters. The ROI was incredible - every dollar spent returned $12 in commissions.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Miami Beach Properties',
      role: 'Top Producer',
      content: 'For waterfront properties, nothing beats mobile billboards along A1A and Collins. My open houses went from 5-10 visitors to 40+ attendees. I\'ve closed three deals directly attributed to billboard visibility.',
      rating: 5
    },
    {
      name: 'David Thompson',
      company: 'Coral Gables Estates',
      role: 'Luxury Specialist',
      content: 'The ability to target specific country clubs and shopping areas where my buyers spend time is invaluable. Mobile billboards position properties as must-see listings in the luxury market.',
      rating: 5
    }
  ],

  gallery: [
    {
      src: '/images/miami-luxury-condo-billboard.jpg',
      alt: 'Luxury condo billboard in Brickell Miami'
    },
    {
      src: '/images/miami-beach-property-truck.jpg',
      alt: 'Waterfront property advertising on Miami Beach'
    },
    {
      src: '/images/miami-real-estate-open-house.jpg',
      alt: 'Open house promotion mobile billboard'
    },
    {
      src: '/images/miami-development-marketing-truck.jpg',
      alt: 'New development marketing in Design District'
    }
  ],

  serviceAreas: [
    'Brickell Financial District',
    'Miami Beach (South Beach to Bal Harbour)',
    'Coral Gables',
    'Coconut Grove',
    'Key Biscayne',
    'Aventura',
    'Sunny Isles Beach',
    'Design District',
    'Wynwood',
    'Edgewater',
    'Downtown Miami',
    'Fisher Island Ferry',
    'Pinecrest',
    'Palmetto Bay',
    'Doral'
  ]
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Real Estate Marketing in Miami',
  description: 'Mobile billboard advertising for Miami real estate. Promote luxury properties, new developments, and open houses to qualified buyers in target neighborhoods.',
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
    name: 'Real Estate Marketing Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Open House Weekend Special',
          description: '16 hours of mobile billboard coverage for property showings'
        },
        price: '699.00',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Listing Launch Campaign',
          description: '40 hours weekly coverage for new property listings'
        },
        price: '3999.00',
        priceCurrency: 'USD'
      }
    ]
  }
}

export default function MiamiRealEstateMarketingPage() {
  return (
    <>
      <Script
        id="miami-real-estate-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <ServicePageTemplate {...transformServiceData(miamiRealEstateMarketingData)} />
      <Footer />
      <FloatingContact />
    </>
  )
}