import { Metadata } from 'next'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import {
  Home,
  Building,
  MapPin,
  DollarSign,
  Target,
  TrendingUp,
  Users,
  Key,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react'

const serviceName = 'Real Estate Marketing in West Palm Beach'
const canonicalPath = '/services/west-palm-beach/real-estate-marketing/'

export const metadata: Metadata = {
  title: 'Real Estate Marketing West Palm Beach | Property Advertising',
  description: 'Sell luxury properties faster in West Palm Beach with mobile billboard advertising. Target high-net-worth buyers from Palm Beach Island to Wellington. GPS-tracked campaigns for developments, estates, and open houses.',
  keywords: 'real estate marketing West Palm Beach, property advertising Palm Beach, real estate billboards West Palm Beach, luxury real estate advertising Palm Beach, condo marketing West Palm Beach, Palm Beach property marketing',
  openGraph: {
    title: 'Real Estate Marketing West Palm Beach - Mobile Billboard Advertising',
    description: 'Drive luxury property sales with targeted mobile billboard advertising throughout West Palm Beach and Palm Beach County.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Marketing Mobile Billboard West Palm Beach',
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
  tagline: 'Elevate Palm Beach Luxury Real Estate with Mobile Billboards',
  description: 'Transform your West Palm Beach real estate marketing with strategic mobile billboard advertising that reaches Palm Beach County\'s most affluent buyers. From oceanfront estates on Palm Beach Island to equestrian properties in Wellington, from luxury condos in downtown West Palm Beach to golf course communities, our GPS-tracked mobile billboards deliver your property message to qualified buyers where they live, work, and play. Perfect for new developments, luxury listings, and exclusive open houses.',

  features: [
    {
      icon: Home,
      title: 'Luxury Showcasing',
      description: 'Display stunning property visuals on premium LED displays'
    },
    {
      icon: Building,
      title: 'Development Marketing',
      description: 'Promote pre-construction and new developments effectively'
    },
    {
      icon: MapPin,
      title: 'Elite Neighborhoods',
      description: 'Target Palm Beach Island, Worth Avenue, and exclusive areas'
    },
    {
      icon: Key,
      title: 'Open House Driver',
      description: 'Generate immediate traffic to showings and broker events'
    }
  ],

  benefits: [
    {
      title: 'Ultra-Luxury Market',
      description: 'Reach buyers of $1M+ properties',
      metric: '$1.2M median price'
    },
    {
      title: 'Waterfront Properties',
      description: 'Target oceanfront and Intracoastal buyers',
      metric: '47 miles of shoreline'
    },
    {
      title: 'International Buyers',
      description: 'Connect with foreign investors and seasonal residents',
      metric: '35% international'
    },
    {
      title: 'Faster Sales',
      description: 'Properties sell 30% faster with mobile campaigns',
      metric: '30% faster closings'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Property Analysis',
      description: 'Identify target buyers and optimal marketing zones',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Route Strategy',
      description: 'Design routes through affluent neighborhoods',
      icon: Map
    },
    {
      step: 3,
      title: 'Luxury Visuals',
      description: 'Create stunning property presentations',
      icon: Palette
    },
    {
      step: 4,
      title: 'Launch & Convert',
      description: 'Deploy with lead tracking focus',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'Open House Elite',
      price: '$850/weekend',
      description: 'Drive traffic to luxury open houses',
      features: [
        'Friday-Sunday coverage',
        'Neighborhood saturation',
        'Directional messaging',
        'GPS tracking',
        'Lead capture support'
      ]
    },
    {
      name: 'Property Launch',
      price: '$4,500/week',
      description: 'Comprehensive luxury listing campaign',
      features: [
        '40 hours coverage',
        'Palm Beach Island access',
        'Worth Avenue visibility',
        'Wellington equestrian areas',
        'Weekly analytics',
        'Content updates'
      ],
      popular: true
    },
    {
      name: 'Development Campaign',
      price: 'Custom Quote',
      description: 'Long-term campaigns for major Palm Beach developments',
      features: [
        'Multi-phase marketing',
        'Pre-construction to closing',
        'International buyer focus',
        'VIP event support',
        'Dedicated management',
        'Volume pricing'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Alexander Rothschild',
      company: 'Palm Beach Luxury Estates',
      role: 'Broker/Owner',
      content: 'Our $8.5M oceanfront listing received multiple offers after mobile billboard exposure on Palm Beach Island. The quality of leads was exceptional.',
      rating: 5
    },
    {
      name: 'Victoria Sterling',
      company: 'Worth Avenue Properties',
      role: 'Sales Director',
      content: 'Mobile billboards helped us achieve 60% pre-sales for our new luxury condo development. The ability to target specific buyer demographics was invaluable.',
      rating: 5
    },
    {
      name: 'Jonathan Blake',
      company: 'Wellington Equestrian Realty',
      role: 'Marketing VP',
      content: 'Targeting the polo and equestrian community with mobile billboards was brilliant. We sold three estates totaling $15M during the winter season.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '100+',
    averageROI: '7.5x',
    campaignsCompleted: '250+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'How do mobile billboards help sell Palm Beach luxury real estate?',
      answer: 'Mobile billboards create unparalleled local awareness for luxury properties, reaching high-net-worth individuals during their daily routines in Palm Beach, Worth Avenue, and exclusive neighborhoods. The visual impact of showcasing properties on LED displays matches the premium nature of the real estate.'
    },
    {
      question: 'Can you target specific Palm Beach neighborhoods?',
      answer: 'Absolutely! We create custom routes through Palm Beach Island, Everglades Island, Manalapan, Gulf Stream, and other exclusive areas. We also target complementary luxury markets in Wellington, Jupiter Island, and Delray Beach.'
    },
    {
      question: 'What types of properties benefit most in West Palm Beach?',
      answer: 'Luxury estates over $1M, waterfront properties, new developments, and exclusive condo projects see exceptional results. Golf course communities, equestrian estates, and properties in gated communities also benefit significantly.'
    },
    {
      question: 'How quickly can you launch a Palm Beach real estate campaign?',
      answer: 'We can deploy within 48-72 hours for urgent needs. For optimal results with luxury properties, we recommend 1-2 weeks to create compelling visuals and strategic routing that maximizes exposure to qualified buyers.'
    },
    {
      question: 'Do you work with Palm Beach developers?',
      answer: 'Yes! We specialize in long-term campaigns for luxury developments, from groundbreaking through final sales. Our campaigns have helped launch successful projects throughout Palm Beach County, including waterfront condos and exclusive communities.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising West Palm Beach',
      description: 'Showcase properties in stunning 4K',
      href: '/services/west-palm-beach/led-truck-advertising/',
      icon: Building
    },
    {
      title: 'Digital Mobile Billboards West Palm Beach',
      description: 'Update listings and pricing instantly',
      href: '/services/west-palm-beach/digital-mobile-billboards/',
      icon: TrendingUp
    },
    {
      title: 'Event Advertising West Palm Beach',
      description: 'Promote broker events and grand openings',
      href: '/services/west-palm-beach/event-advertising/',
      icon: Star
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Luxury Real Estate', 'Property Development', 'Commercial Real Estate', 'Property Management', 'Real Estate Investment'],
  locations: ['Palm Beach Island', 'Worth Avenue', 'West Palm Beach', 'Wellington', 'Manalapan', 'Gulf Stream'],

  primaryCTA: 'Boost Property Sales',
  secondaryCTA: 'View Success Stories',
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
    name: 'Real Estate Marketing Services',
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

export default function RealEstateMarketingWestPalmBeachPage() {
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
