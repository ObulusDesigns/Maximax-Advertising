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

const serviceName = 'Mobile Billboard Advertising in West Palm Beach'
const canonicalPath = '/services/west-palm-beach/mobile-billboard-advertising/'

export const metadata: Metadata = {
  title: 'Mobile Billboard Advertising West Palm Beach | LED Trucks | Maximax',
  description: 'Premium mobile billboard advertising in West Palm Beach. Reach affluent audiences from Clematis Street to Worth Avenue. GPS-tracked LED trucks deliver 70,000+ daily impressions throughout Palm Beach County.',
  keywords: 'mobile billboard advertising West Palm Beach, LED truck advertising West Palm Beach, digital billboards West Palm Beach, mobile advertising West Palm Beach, billboard trucks West Palm Beach, outdoor advertising West Palm Beach',
  openGraph: {
    title: 'Mobile Billboard Advertising in West Palm Beach - Maximax Advertising',
    description: 'Reach West Palm Beach\'s affluent market with mobile billboard trucks. 70,000+ daily impressions with GPS tracking throughout Palm Beach County.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Billboard Truck in West Palm Beach',
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
  tagline: 'Elevate Your Brand in West Palm Beach\'s Premier Markets',
  description: 'Capture the attention of West Palm Beach\'s sophisticated audience with our premium mobile billboard trucks. From the vibrant Clematis Street entertainment district to the exclusive Worth Avenue shopping corridor, from downtown\'s business centers to the pristine Palm Beach Island, our LED trucks deliver your message with unmatched elegance and impact. Target Palm Beach County\'s most affluent demographics with precision routing and real-time GPS tracking.',

  features: [
    {
      icon: Truck,
      title: 'Premium Fleet',
      description: 'Luxury-grade LED trucks suited for West Palm Beach\'s upscale market'
    },
    {
      icon: MapPin,
      title: 'Elite Area Coverage',
      description: 'Target Clematis, CityPlace, Worth Avenue, and Palm Beach Island'
    },
    {
      icon: Clock,
      title: 'Strategic Timing',
      description: 'Reach business professionals, shoppers, and social scene at peak times'
    },
    {
      icon: Shield,
      title: 'All-Weather Technology',
      description: 'Tropical-ready displays for year-round West Palm Beach visibility'
    }
  ],

  benefits: [
    {
      title: 'Affluent Demographics',
      description: 'Connect with Palm Beach County\'s high-net-worth residents',
      metric: '70,000+ daily impressions'
    },
    {
      title: 'Business District Impact',
      description: 'Reach 200,000+ professionals in downtown West Palm Beach',
      metric: '200,000+ professionals'
    },
    {
      title: 'Luxury Shopping Areas',
      description: 'Target Worth Avenue and premium retail destinations',
      metric: '$2B+ annual retail sales'
    },
    {
      title: 'Cultural Event Coverage',
      description: 'Visibility at Kravis Center, museums, and social events',
      metric: '500+ annual events'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Market Analysis',
      description: 'Identify your target segments in Palm Beach County',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Route Design',
      description: 'Create routes through downtown, Palm Beach Island, and key areas',
      icon: Map
    },
    {
      step: 3,
      title: 'Creative Excellence',
      description: 'Develop sophisticated content for discerning audiences',
      icon: Palette
    },
    {
      step: 4,
      title: 'Launch & Monitor',
      description: 'Deploy with GPS tracking and performance analytics',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'Palm Beach Day Pass',
      price: '$850/day',
      description: 'Perfect for events, launches, and targeted campaigns',
      features: [
        '8 hours coverage',
        'Downtown and Palm Beach Island',
        'GPS tracking included',
        'Clematis Street access',
        'Event targeting available'
      ]
    },
    {
      name: 'Weekly Elite Package',
      price: '$4,800/week',
      description: 'Build brand presence across West Palm Beach',
      features: [
        '40 hours coverage',
        'All premium zones',
        'Worth Avenue visibility',
        'Route optimization',
        'Weekly analytics',
        '10% multi-week discount'
      ],
      popular: true
    },
    {
      name: 'Monthly Dominance',
      price: 'Custom Quote',
      description: 'Sustained presence in Palm Beach County\'s premier markets',
      features: [
        'Unlimited customization',
        'Priority placement',
        'Dedicated account executive',
        'Monthly strategy sessions',
        'Creative refresh included',
        'Best value pricing'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Elizabeth Harrison',
      company: 'Worth Avenue Boutique',
      role: 'Owner',
      content: 'The mobile billboards brought sophisticated visibility to our grand opening. We saw immediate results with foot traffic from both locals and Palm Beach visitors.',
      rating: 5
    },
    {
      name: 'James Wellington',
      company: 'West Palm Beach Marina',
      role: 'Marketing Director',
      content: 'Targeting yacht owners and marine enthusiasts with mobile billboards was incredibly effective. Our slip rentals increased 30% during the campaign.',
      rating: 5
    },
    {
      name: 'Sofia Rodriguez',
      company: 'CityPlace Development',
      role: 'Retail Manager',
      content: 'Maximax\'s trucks helped us reach shoppers and diners throughout West Palm Beach. The ability to update messages for different times of day was invaluable.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '200+',
    averageROI: '4.5x',
    campaignsCompleted: '450+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'What areas of West Palm Beach do your mobile billboards cover?',
      answer: 'We cover all of West Palm Beach including downtown, Clematis Street, CityPlace, Northwood Village, Palm Beach Island, Worth Avenue, and surrounding Palm Beach County areas. Routes are customized to your target audience.'
    },
    {
      question: 'Can you target Palm Beach Island specifically?',
      answer: 'Yes! We have special routes designed for Palm Beach Island, including Worth Avenue, Royal Poinciana Way, and the exclusive residential areas. Perfect for luxury brands and high-end services.'
    },
    {
      question: 'How effective is mobile billboard advertising for West Palm Beach businesses?',
      answer: 'Extremely effective! West Palm Beach\'s compact downtown and defined shopping districts mean concentrated visibility. The combination of local professionals, residents, and tourists provides diverse reach.'
    },
    {
      question: 'Do you cover West Palm Beach events and galas?',
      answer: 'Absolutely! We target major events at the Kravis Center, Norton Museum, Palm Beach Convention Center, and the many charity galas and social events throughout the season.'
    },
    {
      question: 'What\'s the best season for advertising in West Palm Beach?',
      answer: 'While year-round advertising works well, peak season is November through April when seasonal residents return and tourist traffic peaks. The social season offers exceptional opportunities for luxury brands.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising West Palm Beach',
      description: 'High-impact LED displays for maximum visibility',
      href: '/services/west-palm-beach/led-truck-advertising/',
      icon: BarChart3
    },
    {
      title: 'Event Advertising West Palm Beach',
      description: 'Target galas, cultural events, and festivals',
      href: '/services/west-palm-beach/event-advertising/',
      icon: Star
    },
    {
      title: 'Digital Mobile Billboards West Palm Beach',
      description: 'Dynamic digital displays with real-time updates',
      href: '/services/west-palm-beach/digital-mobile-billboards/',
      icon: TrendingUp
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Luxury Retail', 'Real Estate', 'Marine', 'Healthcare', 'Financial Services', 'Hospitality'],
  locations: ['West Palm Beach', 'Palm Beach Island', 'Worth Avenue', 'Clematis Street', 'CityPlace', 'Downtown'],

  primaryCTA: 'Get West Palm Beach Quote',
  secondaryCTA: 'View Palm Beach Routes',
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

export default function MobileBillboardAdvertisingWestPalmBeachPage() {
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