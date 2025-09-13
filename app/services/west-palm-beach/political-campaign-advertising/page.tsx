import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import {
  Vote,
  Users,
  Target,
  Calendar,
  MapPin,
  TrendingUp,
  Megaphone,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react'

const serviceName = 'Political Campaign Advertising in West Palm Beach'
const canonicalPath = '/services/west-palm-beach/political-campaign-advertising/'

export const metadata: Metadata = {
  title: 'Political Campaign Advertising West Palm Beach | Election Marketing',
  description: 'Win elections in West Palm Beach with strategic mobile billboard campaigns. Target voters across Palm Beach County with GPS-tracked routes. From local races to state elections, maximize voter reach and name recognition.',
  keywords: 'political advertising West Palm Beach, campaign advertising Palm Beach, election marketing West Palm Beach, political billboards Palm Beach County, campaign trucks West Palm Beach, voter outreach Palm Beach',
  openGraph: {
    title: 'Political Campaign Advertising West Palm Beach - Mobile Billboards',
    description: 'Strategic political campaign advertising throughout West Palm Beach and Palm Beach County. Reach voters effectively with mobile billboard trucks.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Political Campaign Mobile Billboard West Palm Beach',
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
  tagline: 'Win Palm Beach County Elections with Strategic Mobile Advertising',
  description: 'Dominate the political landscape in West Palm Beach and Palm Beach County with precision-targeted mobile billboard campaigns. Our GPS-tracked trucks deliver your campaign message to key voting precincts, from the diverse neighborhoods of West Palm Beach to the exclusive enclaves of Palm Beach Island. Whether running for city council, county commission, or state offices, our mobile billboards ensure maximum voter visibility during critical campaign periods, early voting, and election day.',

  features: [
    {
      icon: Vote,
      title: 'Precinct Targeting',
      description: 'Strategic routing through high-turnout precincts and swing areas'
    },
    {
      icon: Users,
      title: 'Demographic Precision',
      description: 'Reach specific voter segments across Palm Beach County'
    },
    {
      icon: Calendar,
      title: 'Election Timeline',
      description: 'Optimal deployment during early voting and election day'
    },
    {
      icon: Megaphone,
      title: 'Message Amplification',
      description: 'Build name recognition in key neighborhoods'
    }
  ],

  benefits: [
    {
      title: 'County-Wide Reach',
      description: 'Access Palm Beach County\'s 900,000+ registered voters',
      metric: '900,000+ voters'
    },
    {
      title: 'High-Turnout Areas',
      description: 'Focus on precincts with 70%+ voter turnout',
      metric: '70%+ turnout zones'
    },
    {
      title: 'Early Voting Impact',
      description: 'Visibility at all Palm Beach County early voting sites',
      metric: '18 early voting sites'
    },
    {
      title: 'Name Recognition',
      description: 'Increase candidate awareness by up to 45%',
      metric: '45% awareness boost'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Campaign Analysis',
      description: 'Evaluate districts, demographics, and voter patterns',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Voter Mapping',
      description: 'Create routes based on registration and turnout data',
      icon: Map
    },
    {
      step: 3,
      title: 'Message Design',
      description: 'Develop compelling multilingual campaign visuals',
      icon: Palette
    },
    {
      step: 4,
      title: 'Deploy & Adapt',
      description: 'Execute with real-time strategy adjustments',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'Campaign Week',
      price: '$4,800/week',
      description: 'Build momentum during critical periods',
      features: [
        '40 hours coverage',
        'Precinct-focused routing',
        'Bilingual messaging',
        'Early voting coverage',
        'GPS tracking reports'
      ]
    },
    {
      name: 'Election Month',
      price: '$16,000/month',
      description: 'Comprehensive Palm Beach County coverage',
      features: [
        '160 hours coverage',
        'All key precincts',
        'Message variations',
        'Opposition response',
        'Voter analytics',
        'Priority placement'
      ],
      popular: true
    },
    {
      name: 'Full Campaign',
      price: 'Custom Quote',
      description: 'Primary through general election coverage',
      features: [
        'Complete management',
        'Strategic consulting',
        'Rapid response team',
        'GOTV final push',
        'Multi-language support',
        'Best rates'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Catherine Wellington',
      company: 'County Commission Campaign',
      role: 'Campaign Manager',
      content: 'Mobile billboards helped us win a tight race by just 2%. The ability to target specific precincts in West Palm Beach and Boca Raton was crucial.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'Mayoral Campaign 2023',
      role: 'Political Strategist',
      content: 'The mobile billboards reached voters who don\'t consume traditional media. Our name recognition in diverse communities increased dramatically.',
      rating: 5
    },
    {
      name: 'Rebecca Goldman',
      company: 'Judicial Campaign',
      role: 'Candidate',
      content: 'As a first-time judicial candidate, mobile billboards gave me the visibility I needed. The coverage at early voting sites was particularly effective.',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '60+',
    averageROI: '6.2x',
    campaignsCompleted: '120+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'How do mobile billboards help Palm Beach County political campaigns?',
      answer: 'Mobile billboards provide unmatched flexibility to target specific precincts, adapt messaging based on polling, and maintain visibility throughout the campaign. They\'re especially effective in diverse Palm Beach County communities where traditional media has limited reach.'
    },
    {
      question: 'Can you target specific voting precincts in West Palm Beach?',
      answer: 'Yes! We create custom routes based on voter registration data, turnout history, and demographic analysis. Whether targeting high-turnout areas in Palm Beach or swing precincts in West Palm Beach, we position your message precisely.'
    },
    {
      question: 'Do you offer multilingual political advertising?',
      answer: 'Absolutely! Palm Beach County\'s diverse population requires multilingual outreach. We create compelling messages in English, Spanish, Haitian Creole, and other languages to ensure maximum voter engagement.'
    },
    {
      question: 'How effective are mobile billboards during early voting?',
      answer: 'Extremely effective! We position trucks at all 18 Palm Beach County early voting sites during operational hours. Many campaigns see their biggest voter response during the early voting period.'
    },
    {
      question: 'Are you familiar with Florida campaign finance laws?',
      answer: 'Yes, all our political advertising services comply with Florida election law. We provide detailed invoices with dates, times, and routes for campaign finance reports. Our team understands reporting requirements at all levels.'
    }
  ],

  relatedServices: [
    {
      title: 'Mobile Billboard Advertising West Palm Beach',
      description: 'Comprehensive mobile advertising',
      href: '/services/west-palm-beach/mobile-billboard-advertising/',
      icon: Target
    },
    {
      title: 'Digital Mobile Billboards West Palm Beach',
      description: 'Dynamic campaign messaging',
      href: '/services/west-palm-beach/digital-mobile-billboards/',
      icon: TrendingUp
    },
    {
      title: 'Event Advertising West Palm Beach',
      description: 'Campaign rallies and events',
      href: '/services/west-palm-beach/event-advertising/',
      icon: Users
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Political', 'Government', 'Advocacy', 'Non-Profit', 'Public Affairs'],
  locations: ['West Palm Beach', 'Palm Beach County', 'Wellington', 'Lake Worth', 'Boynton Beach'],

  primaryCTA: 'Start Campaign',
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

export default function PoliticalCampaignAdvertisingWestPalmBeachPage() {
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
