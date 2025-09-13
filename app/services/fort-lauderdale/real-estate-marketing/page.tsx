import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
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

const serviceName = 'Real Estate Marketing in Fort Lauderdale'
const canonicalPath = '/services/fort-lauderdale/real-estate-marketing/'

export const metadata: Metadata = {
  title: 'Real Estate Marketing Fort Lauderdale | Property Advertising',
  description: 'Sell properties faster in Fort Lauderdale with mobile billboard advertising. Target luxury buyers, promote new developments, and drive open house traffic throughout Broward County. GPS-tracked campaigns for maximum ROI.',
  keywords: 'real estate marketing Fort Lauderdale, property advertising Fort Lauderdale, real estate billboards Fort Lauderdale, condo marketing Fort Lauderdale, luxury real estate advertising, Fort Lauderdale property marketing',
  openGraph: {
    title: 'Real Estate Marketing Fort Lauderdale - Mobile Billboard Advertising',
    description: 'Drive property sales and open house traffic with targeted mobile billboard advertising throughout Fort Lauderdale and Broward County.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Marketing Mobile Billboard Fort Lauderdale',
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
  tagline: 'Accelerate Fort Lauderdale Property Sales with Mobile Billboards',
  description: 'Transform your Fort Lauderdale real estate marketing with strategic mobile billboard advertising. From luxury waterfront estates in Las Olas to new condo developments along the beach, our GPS-tracked mobile billboards deliver your property message to qualified buyers throughout Broward County. Perfect for new developments, open houses, and luxury listings, our campaigns drive measurable results in Fort Lauderdale\'s competitive real estate market.',

  features: [
    {
      icon: Home,
      title: 'Property Showcasing',
      description: 'Display stunning property visuals on high-resolution LED screens'
    },
    {
      icon: Building,
      title: 'Development Marketing',
      description: 'Promote new construction and pre-sales throughout Fort Lauderdale'
    },
    {
      icon: MapPin,
      title: 'Neighborhood Targeting',
      description: 'Focus on specific Fort Lauderdale neighborhoods and demographics'
    },
    {
      icon: Key,
      title: 'Open House Traffic',
      description: 'Drive immediate foot traffic to showings and open houses'
    }
  ],

  benefits: [
    {
      title: 'Luxury Market Reach',
      description: 'Target Fort Lauderdale\'s affluent buyers and investors',
      metric: '$500K+ median home price'
    },
    {
      title: 'Waterfront Visibility',
      description: 'Showcase properties along Intracoastal and beaches',
      metric: '165 miles of waterways'
    },
    {
      title: 'International Buyers',
      description: 'Reach foreign investors and seasonal residents',
      metric: '30% international buyers'
    },
    {
      title: 'Quick Sales Impact',
      description: 'Properties sell 25% faster with mobile billboard campaigns',
      metric: '25% faster sales'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Property Analysis',
      description: 'Identify target buyers and optimal marketing areas',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Route Strategy',
      description: 'Design routes through target neighborhoods and commuter paths',
      icon: Map
    },
    {
      step: 3,
      title: 'Visual Creation',
      description: 'Develop stunning property visuals and compelling messaging',
      icon: Palette
    },
    {
      step: 4,
      title: 'Campaign Launch',
      description: 'Deploy with tracking and lead generation focus',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'Open House Special',
      price: '$750/weekend',
      description: 'Drive traffic to weekend open houses',
      features: [
        'Friday-Sunday coverage',
        'Neighborhood saturation',
        'Directional messaging',
        'GPS tracking included',
        'Lead capture support'
      ]
    },
    {
      name: 'Property Launch',
      price: '$4,200/week',
      description: 'Comprehensive new listing or development campaign',
      features: [
        '40 hours coverage',
        'Multi-neighborhood routing',
        'Luxury area focus',
        'Beach and downtown visibility',
        'Weekly performance reports',
        'Content updates included'
      ],
      popular: true
    },
    {
      name: 'Development Campaign',
      price: 'Custom Quote',
      description: 'Long-term campaigns for major developments',
      features: [
        'Multi-phase marketing',
        'Pre-construction through closing',
        'Investor targeting',
        'International buyer focus',
        'Dedicated account management',
        'Volume pricing available'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Michael Sterling',
      company: 'Las Olas Luxury Realty',
      role: 'Broker/Owner',
      content: 'Our waterfront listing had been on the market for months. After launching mobile billboards along A1A and Las Olas, we had three offers within two weeks.',
      rating: 5
    },
    {
      name: 'Sandra Walsh',
      company: 'Fort Lauderdale Beach Condos',
      role: 'Sales Director',
      content: 'Mobile billboards helped us achieve 40% pre-sales for our new beachfront development. The ability to showcase renderings to beach traffic was invaluable.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'Broward Commercial Properties',
      role: 'Marketing VP',
      content: 'We use Maximax for all our major listings now. The GPS tracking shows us exactly where potential buyers are seeing our properties, and the ROI is exceptional.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '150+',
    averageROI: '6.2x',
    campaignsCompleted: '300+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'How do mobile billboards help sell Fort Lauderdale real estate?',
      answer: 'Mobile billboards create massive local awareness for your properties, reaching potential buyers during their daily routines. They\'re especially effective for open houses, new developments, and luxury properties that benefit from visual showcasing.'
    },
    {
      question: 'Can you target specific Fort Lauderdale neighborhoods?',
      answer: 'Absolutely! We create custom routes through target neighborhoods like Las Olas, Victoria Park, Coral Ridge, Harbor Beach, and Rio Vista. We also target complementary areas where potential buyers currently live or work.'
    },
    {
      question: 'What types of properties benefit most from mobile billboard marketing?',
      answer: 'All property types see results, but luxury homes, waterfront properties, new developments, and condo projects see exceptional ROI. Commercial properties and investment opportunities also benefit from the B2B visibility during business hours.'
    },
    {
      question: 'How quickly can you launch a real estate campaign?',
      answer: 'We can launch within 48 hours for urgent needs like open houses. For optimal results, we recommend 1-2 weeks planning to create compelling visuals and strategic routing that maximizes your property\'s exposure.'
    },
    {
      question: 'Do you work with real estate developers?',
      answer: 'Yes! We specialize in long-term campaigns for developers, from pre-construction awareness through final sales. Our campaigns have helped launch dozens of successful Fort Lauderdale developments.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising Fort Lauderdale',
      description: 'Showcase properties in stunning 4K resolution',
      href: '/services/fort-lauderdale/led-truck-advertising/',
      icon: Building
    },
    {
      title: 'Digital Mobile Billboards Fort Lauderdale',
      description: 'Update listings and prices in real-time',
      href: '/services/fort-lauderdale/digital-mobile-billboards/',
      icon: TrendingUp
    },
    {
      title: 'Event Advertising Fort Lauderdale',
      description: 'Promote grand openings and broker events',
      href: '/services/fort-lauderdale/event-advertising/',
      icon: Star
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Real Estate', 'Property Development', 'Commercial Real Estate', 'Luxury Real Estate', 'Property Management'],
  locations: ['Las Olas', 'Fort Lauderdale Beach', 'Victoria Park', 'Coral Ridge', 'Harbor Beach', 'Downtown'],

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

export default function RealEstateMarketingFortLauderdalePage() {
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