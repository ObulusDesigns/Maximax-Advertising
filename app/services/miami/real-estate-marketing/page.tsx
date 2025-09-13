import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import { 
  Home, 
  MapPin, 
  Building, 
  TrendingUp, 
  Target, 
  Users,
  Key,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  BarChart3,
  CheckCircle,
  Award
} from 'lucide-react'

const serviceName = 'Real Estate Marketing in Miami'
const canonicalPath = '/services/miami/real-estate-marketing/'

export const metadata: Metadata = {
  title: 'Real Estate Marketing Miami | Property Mobile Billboards | Maximax',
  description: 'Drive property sales with mobile billboard real estate marketing in Miami. Promote luxury condos, new developments, and open houses throughout Miami-Dade with targeted mobile advertising.',
  keywords: 'real estate marketing Miami, property advertising Miami, condo marketing Miami, real estate billboards Miami, property mobile billboards Miami, new development advertising Miami, open house promotion Miami',
  openGraph: {
    title: 'Real Estate Marketing Mobile Billboards in Miami - Maximax',
    description: 'Sell properties faster with mobile billboard advertising in Miami. Target luxury buyers, promote developments, and drive open house traffic.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Mobile Billboard in Miami',
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
  tagline: 'Showcase Miami Properties Where Buyers Live and Work',
  description: 'Elevate your Miami real estate marketing with mobile billboards that reach qualified buyers throughout the city. From Brickell\'s luxury towers to Coral Gables estates, our LED trucks showcase properties to target demographics, drive open house attendance, and accelerate sales in Miami\'s competitive real estate market.',
  
  features: [
    {
      icon: Building,
      title: 'Development Marketing',
      description: 'Promote new constructions and pre-construction projects city-wide'
    },
    {
      icon: Home,
      title: 'Luxury Property Focus',
      description: 'Target high-net-worth areas and luxury buyer demographics'
    },
    {
      icon: MapPin,
      title: 'Neighborhood Targeting',
      description: 'Focus on specific Miami neighborhoods and communities'
    },
    {
      icon: Key,
      title: 'Open House Traffic',
      description: 'Drive immediate foot traffic to property showings and events'
    }
  ],
  
  benefits: [
    {
      title: 'Qualified Leads',
      description: 'Reach serious buyers in target income brackets and areas',
      metric: '3x lead quality'
    },
    {
      title: 'Faster Sales',
      description: 'Properties advertised sell faster than traditional listings',
      metric: '45% faster sales'
    },
    {
      title: 'International Buyers',
      description: 'Reach foreign investors in Miami Beach and luxury areas',
      metric: '30% international reach'
    },
    {
      title: 'Brand Building',
      description: 'Establish developer and broker brand recognition',
      metric: '85% brand recall'
    }
  ],
  
  process: [
    {
      step: 1,
      title: 'Property Analysis',
      description: 'Evaluate property features and target buyer profile',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Buyer Targeting',
      description: 'Map routes through qualified buyer neighborhoods',
      icon: Map
    },
    {
      step: 3,
      title: 'Visual Creation',
      description: 'Design stunning property showcases for mobile display',
      icon: Palette
    },
    {
      step: 4,
      title: 'Market Launch',
      description: 'Deploy strategic campaign with performance tracking',
      icon: Rocket
    }
  ],
  
  pricing: [
    {
      name: 'Single Property',
      price: '$800/day',
      description: 'Promote individual listings and open houses',
      features: [
        '8 hours coverage',
        'Neighborhood targeting',
        'Open house promotion',
        'QR code integration',
        'Lead tracking'
      ]
    },
    {
      name: 'Development Package',
      price: '$5,000/week',
      description: 'New development and multi-unit projects',
      features: [
        'Full week coverage',
        'Multiple property showcase',
        'Buyer demographic targeting',
        'Sales center traffic',
        'Weekly analytics',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Broker Partnership',
      price: 'Custom Quote',
      description: 'Ongoing campaigns for brokerages and developers',
      features: [
        'Monthly campaigns',
        'Portfolio marketing',
        'Brand building',
        'Event coordination',
        'Priority scheduling',
        'ROI reporting'
      ],
      customQuote: true
    }
  ],
  
  testimonials: [
    {
      name: 'Andrea Williams',
      company: 'Brickell Luxury Realty',
      role: 'Broker',
      content: 'Our mobile billboard campaign for a new Brickell tower generated 200+ qualified leads in just one week. The ROI was exceptional.',
      rating: 5
    },
    {
      name: 'David Martinez',
      company: 'Miami Beach Developments',
      role: 'Developer',
      content: 'We sold 30% of our units during the mobile billboard campaign. The ability to target specific buyer demographics was game-changing.',
      rating: 5
    },
    {
      name: 'Lisa Chang',
      company: 'Coral Gables Properties',
      role: 'Marketing Director',
      content: 'Open house attendance increased by 300% when we used mobile billboards. The neighborhood targeting was incredibly effective.',
      rating: 5
    }
  ],
  
  stats: {
    clientsSatisfied: '175+',
    averageROI: '7x',
    campaignsCompleted: '350+',
    yearEstablished: '2019'
  },
  
  faqs: [
    {
      question: 'Which Miami real estate markets do you cover?',
      answer: 'We cover all Miami-Dade markets including luxury condos in Brickell and Miami Beach, single-family homes in Coral Gables and Coconut Grove, new developments in Downtown and Edgewater, and emerging markets throughout the county.'
    },
    {
      question: 'Can you target specific buyer demographics?',
      answer: 'Yes! We use demographic data to route through neighborhoods matching your buyer profile, including income levels, age groups, and lifestyle preferences. We also target international buyers in tourist areas.'
    },
    {
      question: 'How do mobile billboards help with open houses?',
      answer: 'We create same-day awareness by routing through nearby neighborhoods 2-3 hours before your open house, displaying property details and directions. This drives significant foot traffic from curious neighbors and passersby.'
    },
    {
      question: 'Can you promote pre-construction projects?',
      answer: 'Absolutely! Mobile billboards are perfect for building buzz around pre-construction projects. We can showcase renderings, floor plans, and incentives while targeting qualified buyers throughout the development timeline.'
    },
    {
      question: 'Do you work with commercial real estate?',
      answer: 'Yes, we promote commercial properties including office buildings, retail spaces, and mixed-use developments. We target business owners, investors, and commercial brokers in relevant Miami business districts.'
    }
  ],
  
  relatedServices: [
    {
      title: 'Mobile Billboard Advertising Miami',
      description: 'General advertising solutions for Miami',
      href: '/services/miami/mobile-billboard-advertising/',
      icon: TrendingUp
    },
    {
      title: 'Digital Mobile Billboards Miami',
      description: 'Dynamic property showcases with video',
      href: '/services/miami/digital-mobile-billboards/',
      icon: BarChart3
    },
    {
      title: 'Event Advertising Miami',
      description: 'Promote property launches and events',
      href: '/services/miami/event-advertising/',
      icon: Award
    }
  ],
  
  serviceType: 'marketing' as const,
  industries: ['Real Estate', 'Construction', 'Property Management', 'Architecture', 'Interior Design'],
  locations: ['Brickell', 'Miami Beach', 'Coral Gables', 'Coconut Grove', 'Aventura', 'Downtown Miami'],
  
  primaryCTA: 'Market Property',
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

export default function RealEstateMarketingMiamiPage() {
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