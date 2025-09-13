import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import { 
  Vote, 
  MapPin, 
  Users, 
  Megaphone, 
  Target, 
  TrendingUp,
  Calendar,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  BarChart3,
  CheckCircle,
  Award
} from 'lucide-react'

const serviceName = 'Political Campaign Advertising in Miami'
const canonicalPath = '/services/miami/political-campaign-advertising/'

export const metadata: Metadata = {
  title: 'Political Campaign Advertising Miami | Election Mobile Billboards',
  description: 'Win elections with mobile billboard political advertising in Miami. Target voters by district, reach diverse communities in multiple languages, and maximize campaign visibility throughout Miami-Dade County.',
  keywords: 'political advertising Miami, campaign advertising Miami, election billboards Miami, political mobile billboards Miami, voter outreach Miami, campaign trucks Miami, political marketing Miami',
  openGraph: {
    title: 'Political Campaign Advertising in Miami - Mobile Billboards',
    description: 'Strategic political campaign advertising with mobile billboards in Miami. Target voters by district and demographics with multilingual messaging.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Political Campaign Mobile Billboard in Miami',
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
  tagline: 'Win Hearts, Minds, and Votes Across Miami-Dade',
  description: 'Navigate Miami\'s complex political landscape with strategic mobile billboard advertising. From city commission races to congressional campaigns, our trucks deliver your message to voters in their communities. With bilingual capabilities and district-specific routing, we help campaigns connect with Miami\'s diverse electorate effectively.',
  
  features: [
    {
      icon: Vote,
      title: 'District Targeting',
      description: 'Precise routing through specific voting districts and precincts'
    },
    {
      icon: Users,
      title: 'Demographic Reach',
      description: 'Target specific voter demographics and community groups'
    },
    {
      icon: Megaphone,
      title: 'Bilingual Messaging',
      description: 'English and Spanish content for Miami\'s diverse voters'
    },
    {
      icon: Calendar,
      title: 'Election Timeline',
      description: 'Strategic scheduling for early voting, election day, and runoffs'
    }
  ],
  
  benefits: [
    {
      title: 'Voter Awareness',
      description: 'Build name recognition and campaign visibility across districts',
      metric: '95% recall rate'
    },
    {
      title: 'Community Presence',
      description: 'Show commitment by being visible in every neighborhood',
      metric: '40+ neighborhoods/day'
    },
    {
      title: 'Cost-Effective Reach',
      description: 'Lower cost per voter impression than TV or radio',
      metric: '70% less than TV ads'
    },
    {
      title: 'Last-Mile Impact',
      description: 'Reach voters in final days when decisions are made',
      metric: '3x voter engagement'
    }
  ],
  
  process: [
    {
      step: 1,
      title: 'Campaign Strategy',
      description: 'Analyze districts, demographics, and campaign goals',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Voter Targeting',
      description: 'Map routes through key precincts and communities',
      icon: Map
    },
    {
      step: 3,
      title: 'Message Creation',
      description: 'Develop compelling bilingual campaign visuals',
      icon: Palette
    },
    {
      step: 4,
      title: 'Campaign Execution',
      description: 'Deploy with real-time adjustments and tracking',
      icon: Rocket
    }
  ],
  
  pricing: [
    {
      name: 'Local Campaign',
      price: '$750/day',
      description: 'City commission and local races',
      features: [
        '8 hours coverage',
        'District-specific routing',
        'Bilingual options',
        'Voter area targeting',
        'Campaign reporting'
      ]
    },
    {
      name: 'County Campaign',
      price: '$4,200/week',
      description: 'County-wide and state legislative races',
      features: [
        '40 hours coverage',
        'Multiple district coverage',
        'Early voting site visits',
        'Community event presence',
        'Demographic analytics',
        'A/B message testing'
      ],
      popular: true
    },
    {
      name: 'Major Campaign',
      price: 'Custom Quote',
      description: 'Congressional, mayoral, and statewide races',
      features: [
        'Multiple truck fleet',
        'County-wide coverage',
        'Opposition tracking',
        'Rapid response capability',
        'Full analytics suite',
        'Strategic consulting'
      ],
      customQuote: true
    }
  ],
  
  testimonials: [
    {
      name: 'Campaign Manager',
      company: 'Miami City Commission Race',
      role: 'Political Strategist',
      content: 'The mobile billboards helped us reach voters in every corner of our district. The bilingual messaging was crucial for connecting with all constituents.',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      company: 'County Commissioner Campaign',
      role: 'Communications Director',
      content: 'Maximax\'s trucks gave us visibility we couldn\'t achieve with traditional media. We won by 3 points, and the mobile billboards were a key factor.',
      rating: 5
    },
    {
      name: 'Roberto Diaz',
      company: 'State House Campaign',
      role: 'Campaign Manager',
      content: 'The ability to quickly adjust routes based on early voting data was invaluable. We could target low-turnout areas in real-time.',
      rating: 5
    }
  ],
  
  stats: {
    clientsSatisfied: '150+',
    averageROI: '8x',
    campaignsCompleted: '200+',
    yearEstablished: '2019'
  },
  
  faqs: [
    {
      question: 'Can you target specific voting districts in Miami-Dade?',
      answer: 'Yes! We can precisely target any voting district, precinct, or combination of areas within Miami-Dade County. Our routes are customized based on voter registration data and district boundaries.'
    },
    {
      question: 'Do you offer Spanish language political advertising?',
      answer: 'Absolutely! We offer fully bilingual campaigns with professional Spanish translations. We can also alternate between English and Spanish messages or run side-by-side bilingual content.'
    },
    {
      question: 'Can you advertise near polling locations?',
      answer: 'We comply with all election laws regarding distance from polling places. We strategically position near high-traffic areas while maintaining legal compliance, typically focusing on main routes to polling locations.'
    },
    {
      question: 'How quickly can you respond to campaign developments?',
      answer: 'We offer rapid response capabilities with content updates within hours. This is crucial for addressing opponent attacks, news developments, or endorsement announcements.'
    },
    {
      question: 'Do you work with PACs and issue campaigns?',
      answer: 'Yes, we work with candidates, PACs, issue advocacy groups, and referendum campaigns. We maintain strict client confidentiality and never work for opposing campaigns simultaneously.'
    }
  ],
  
  relatedServices: [
    {
      title: 'Mobile Billboard Advertising Miami',
      description: 'General mobile advertising services',
      href: '/services/miami/mobile-billboard-advertising/',
      icon: TrendingUp
    },
    {
      title: 'Event Advertising Miami',
      description: 'Political rally and event promotion',
      href: '/services/miami/event-advertising/',
      icon: Calendar
    },
    {
      title: 'Digital Mobile Billboards Miami',
      description: 'Dynamic digital campaign messaging',
      href: '/services/miami/digital-mobile-billboards/',
      icon: BarChart3
    }
  ],
  
  serviceType: 'advertising' as const,
  industries: ['Political', 'Government', 'Non-Profit', 'Advocacy', 'Public Affairs'],
  locations: ['Miami', 'Miami Beach', 'Coral Gables', 'Hialeah', 'Homestead', 'Aventura'],
  
  primaryCTA: 'Start Campaign',
  secondaryCTA: 'View Districts',
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
    name: 'Political Campaign Advertising Services',
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

export default function PoliticalCampaignAdvertisingMiamiPage() {
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