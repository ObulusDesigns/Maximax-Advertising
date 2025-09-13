import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import { 
  Smartphone, 
  MapPin, 
  Wifi, 
  BarChart3, 
  Target, 
  TrendingUp,
  Users,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  Monitor,
  CheckCircle,
  Star
} from 'lucide-react'

const serviceName = 'Digital Mobile Billboards in Miami'
const canonicalPath = '/services/miami/digital-mobile-billboards/'

export const metadata: Metadata = {
  title: 'Digital Mobile Billboards Miami | Smart Advertising | Maximax',
  description: 'Advanced digital mobile billboards in Miami with real-time content updates, GPS tracking, and data analytics. Target Miami audiences with precision using smart digital billboard technology.',
  keywords: 'digital mobile billboards Miami, smart billboards Miami, digital advertising trucks Miami, mobile digital displays Miami, programmatic billboards Miami, Miami digital outdoor advertising',
  openGraph: {
    title: 'Digital Mobile Billboards in Miami - Maximax Advertising',
    description: 'Smart digital billboard trucks with real-time capabilities in Miami. Advanced targeting, instant updates, and comprehensive analytics.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Mobile Billboard in Miami',
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
  tagline: 'Smart Digital Advertising That Moves with Miami',
  description: 'Experience the future of outdoor advertising with our digital mobile billboards in Miami. Combining cutting-edge display technology with smart data analytics, our digital trucks deliver targeted messaging that adapts to locations, times, and audiences throughout Miami-Dade County in real-time.',
  
  features: [
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'IoT-enabled displays with remote content management and real-time updates'
    },
    {
      icon: Wifi,
      title: 'Connected Campaigns',
      description: 'Sync with online campaigns and social media for integrated marketing'
    },
    {
      icon: BarChart3,
      title: 'Live Analytics',
      description: 'Real-time performance data including impressions and engagement metrics'
    },
    {
      icon: Target,
      title: 'Geo-Targeting',
      description: 'Location-based content triggering for neighborhood-specific messaging'
    }
  ],
  
  benefits: [
    {
      title: 'Data-Driven Results',
      description: 'Make informed decisions with comprehensive campaign analytics',
      metric: '98% tracking accuracy'
    },
    {
      title: 'Instant Adaptability',
      description: 'Change content based on weather, traffic, or events in real-time',
      metric: 'Updates in <30 seconds'
    },
    {
      title: 'Multi-Channel Integration',
      description: 'Sync with digital marketing campaigns for unified messaging',
      metric: '3x engagement boost'
    },
    {
      title: 'Audience Intelligence',
      description: 'Detailed demographics and behavioral insights for Miami markets',
      metric: '15+ data points'
    }
  ],
  
  process: [
    {
      step: 1,
      title: 'Digital Strategy',
      description: 'Develop data-driven approach for Miami market',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Content Programming',
      description: 'Create dynamic content sequences and triggers',
      icon: Palette
    },
    {
      step: 3,
      title: 'Smart Routing',
      description: 'AI-optimized routes based on traffic and demographics',
      icon: Map
    },
    {
      step: 4,
      title: 'Performance Tracking',
      description: 'Monitor and optimize campaign in real-time',
      icon: BarChart3
    }
  ],
  
  pricing: [
    {
      name: 'Digital Starter',
      price: '$900/day',
      description: 'Entry-level digital billboard advertising',
      features: [
        'Digital HD display',
        '8 hours coverage',
        'Basic analytics',
        '3 content variations',
        'GPS tracking'
      ]
    },
    {
      name: 'Digital Pro',
      price: '$5,500/week',
      description: 'Professional digital campaign with advanced features',
      features: [
        'Premium digital display',
        '40 hours coverage',
        'Advanced analytics dashboard',
        'Unlimited content changes',
        'A/B testing capabilities',
        'Heat map reporting'
      ],
      popular: true
    },
    {
      name: 'Digital Enterprise',
      price: 'Custom Quote',
      description: 'Full-scale digital transformation for your OOH advertising',
      features: [
        'Multiple digital trucks',
        'AI-powered optimization',
        'Custom API integration',
        'Programmatic capabilities',
        'Dedicated data analyst',
        'White-label reporting'
      ],
      customQuote: true
    }
  ],
  
  testimonials: [
    {
      name: 'Alex Rivera',
      company: 'Miami E-commerce Brand',
      role: 'Digital Marketing Director',
      content: 'The ability to sync our digital billboards with our online campaigns was revolutionary. We saw immediate spikes in web traffic from targeted areas.',
      rating: 5
    },
    {
      name: 'Patricia Lee',
      company: 'Miami Fashion Week',
      role: 'Event Coordinator',
      content: 'Real-time content updates let us promote different shows throughout the day. The analytics helped us understand which areas drove most ticket sales.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      company: 'Tech Conference Miami',
      role: 'Marketing Lead',
      content: 'The geo-targeted messaging was perfect. Different content for Brickell professionals versus Wynwood creatives. ROI exceeded all expectations.',
      rating: 5
    }
  ],
  
  stats: {
    clientsSatisfied: '180+',
    averageROI: '5.2x',
    campaignsCompleted: '400+',
    yearEstablished: '2019'
  },
  
  faqs: [
    {
      question: 'How do digital mobile billboards differ from traditional mobile billboards?',
      answer: 'Digital mobile billboards feature smart technology including real-time content updates, GPS-triggered messaging, performance analytics, and integration with digital marketing campaigns. Traditional billboards display static content.'
    },
    {
      question: 'Can I integrate with my existing digital marketing?',
      answer: 'Yes! Our digital billboards can sync with your online campaigns, social media, and marketing automation platforms for unified cross-channel messaging and attribution tracking.'
    },
    {
      question: 'What analytics are provided?',
      answer: 'You receive comprehensive analytics including impressions, route heat maps, demographic data, engagement metrics, peak viewing times, and ROI calculations through our real-time dashboard.'
    },
    {
      question: 'How quickly can content be updated?',
      answer: 'Content updates happen in real-time, typically within 30 seconds. You can schedule changes, trigger updates based on conditions, or manually push new content instantly through our platform.'
    },
    {
      question: 'Is programmatic advertising possible?',
      answer: 'Yes, our enterprise solutions support programmatic capabilities, allowing automated content delivery based on data triggers, audience segments, and campaign parameters.'
    }
  ],
  
  relatedServices: [
    {
      title: 'LED Truck Advertising Miami',
      description: 'High-brightness LED displays for maximum visibility',
      href: '/services/miami/led-truck-advertising/',
      icon: Monitor
    },
    {
      title: 'Mobile Billboard Advertising Miami',
      description: 'Traditional mobile billboard solutions',
      href: '/services/miami/mobile-billboard-advertising/',
      icon: TrendingUp
    },
    {
      title: 'Event Advertising Miami',
      description: 'Digital billboards for events and activations',
      href: '/services/miami/event-advertising/',
      icon: Star
    }
  ],
  
  serviceType: 'digital' as const,
  industries: ['Technology', 'E-commerce', 'Entertainment', 'Retail', 'Finance', 'Healthcare'],
  locations: ['Miami', 'Miami Beach', 'Brickell', 'Wynwood', 'Downtown', 'Coral Gables'],
  
  primaryCTA: 'Start Digital Campaign',
  secondaryCTA: 'View Analytics Demo',
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
    name: 'Digital Mobile Billboard Services',
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

export default function DigitalMobileBillboardsMiamiPage() {
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