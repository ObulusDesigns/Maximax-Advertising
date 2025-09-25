import { Metadata } from 'next'
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

const serviceName = 'Political Campaign Advertising in Fort Lauderdale'
const canonicalPath = '/services/fort-lauderdale/political-campaign-advertising/'

export const metadata: Metadata = {
  title: 'Political Campaign Advertising Fort Lauderdale | Election Marketing',
  description: 'Win elections in Fort Lauderdale with strategic mobile billboard campaigns. Target voters across Broward County with GPS-tracked routes. From city commission to county-wide races, maximize voter reach and awareness.',
  keywords: 'political advertising Fort Lauderdale, campaign advertising Fort Lauderdale, election marketing Fort Lauderdale, political billboards Fort Lauderdale, campaign trucks Fort Lauderdale, voter outreach Fort Lauderdale',
  openGraph: {
    title: 'Political Campaign Advertising Fort Lauderdale - Mobile Billboards',
    description: 'Strategic political campaign advertising throughout Fort Lauderdale and Broward County. Reach voters effectively with mobile billboard trucks.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Political Campaign Mobile Billboard Fort Lauderdale',
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
  tagline: 'Win Fort Lauderdale Elections with Strategic Mobile Advertising',
  description: 'Dominate the political landscape in Fort Lauderdale and Broward County with targeted mobile billboard campaigns. Our GPS-tracked trucks deliver your campaign message directly to voters in key precincts, from beachside communities to inland neighborhoods. Whether running for city commission, mayor, county positions, or state offices, our mobile billboards ensure maximum voter visibility during critical campaign periods, early voting, and election day.',

  features: [
    {
      icon: Vote,
      title: 'Voter Targeting',
      description: 'Precise routing through high-turnout precincts and swing districts'
    },
    {
      icon: Users,
      title: 'Demographic Focus',
      description: 'Reach specific voter segments across Fort Lauderdale communities'
    },
    {
      icon: Calendar,
      title: 'Election Timeline',
      description: 'Strategic deployment during early voting and election day'
    },
    {
      icon: Megaphone,
      title: 'Message Amplification',
      description: 'Reinforce campaign themes with repeated neighborhood presence'
    }
  ],

  benefits: [
    {
      title: 'Precinct Coverage',
      description: 'Target all 500+ Broward County voting precincts',
      metric: '500+ precincts'
    },
    {
      title: 'Voter Reach',
      description: 'Connect with 1.3M registered Broward voters',
      metric: '1.3M registered voters'
    },
    {
      title: 'Early Voting Impact',
      description: 'Visibility at all early voting locations',
      metric: '22 early voting sites'
    },
    {
      title: 'Name Recognition',
      description: 'Increase candidate awareness by up to 40%',
      metric: '40% awareness boost'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Campaign Strategy',
      description: 'Analyze districts, demographics, and election timeline',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Voter Mapping',
      description: 'Create routes based on voter density and turnout history',
      icon: Map
    },
    {
      step: 3,
      title: 'Message Design',
      description: 'Develop compelling bilingual campaign visuals',
      icon: Palette
    },
    {
      step: 4,
      title: 'Deploy & Adapt',
      description: 'Execute campaign with real-time strategy adjustments',
      icon: Rocket
    }
  ],

  pricing: [
    {
      name: 'Campaign Week',
      price: '$4,500/week',
      description: 'Build momentum during critical campaign periods',
      features: [
        '40 hours coverage',
        'Targeted precinct routing',
        'Bilingual messaging',
        'Early voting site coverage',
        'GPS tracking reports'
      ]
    },
    {
      name: 'Election Month',
      price: '$15,000/month',
      description: 'Comprehensive coverage throughout election season',
      features: [
        '160 hours total coverage',
        'All key precincts covered',
        'Multiple message rotations',
        'Opposition response capability',
        'Detailed voter analytics',
        'Priority routing'
      ],
      popular: true
    },
    {
      name: 'Full Campaign',
      price: 'Custom Quote',
      description: 'Complete primary through general election coverage',
      features: [
        'Full campaign management',
        'Strategic consulting included',
        'Rapid response team',
        'Polling location coverage',
        'GOTV final push',
        'Best value pricing'
      ],
      customQuote: true
    }
  ],

  testimonials: [
    {
      name: 'Jennifer Martinez',
      company: 'Campaign for County Commission',
      role: 'Campaign Manager',
      content: 'Mobile billboards were crucial in our upset victory. The ability to target specific precincts and adjust routes based on early voting data was game-changing.',
      rating: 5
    },
    {
      name: 'David Cohen',
      company: 'Mayoral Campaign 2023',
      role: 'Political Consultant',
      content: 'The mobile billboards helped us reach voters who don\'t watch traditional media. Our name recognition increased 35% in targeted neighborhoods.',
      rating: 5
    },
    {
      name: 'Rosa Alvarez',
      company: 'School Board Campaign',
      role: 'Candidate',
      content: 'As a first-time candidate, the mobile billboards gave me visibility I couldn\'t afford through traditional media. We won by just 400 votes!',
      rating: 5
    }
  ],

  stats: {
    clientsSatisfied: '75+',
    averageROI: '5.5x',
    campaignsCompleted: '150+',
    yearEstablished: '2019'
  },

  faqs: [
    {
      question: 'How do mobile billboards help Fort Lauderdale political campaigns?',
      answer: 'Mobile billboards provide unmatched flexibility to target specific precincts, adjust messaging based on polling, and maintain visibility throughout the campaign. They\'re especially effective for reaching voters in diverse Fort Lauderdale neighborhoods where traditional media may have limited impact.'
    },
    {
      question: 'Can you target specific voting precincts in Broward County?',
      answer: 'Yes! We create custom routes based on voter registration data, turnout history, and demographic analysis. Whether you need to shore up your base or persuade swing voters, we\'ll position your message precisely where it needs to be.'
    },
    {
      question: 'Do you offer bilingual political advertising?',
      answer: 'Absolutely! Fort Lauderdale\'s diverse population requires multilingual outreach. We create compelling campaign messages in English, Spanish, Creole, and Portuguese to ensure maximum voter engagement across all communities.'
    },
    {
      question: 'How effective are mobile billboards during early voting?',
      answer: 'Extremely effective! We position trucks at all 22 Broward County early voting sites during operational hours. Many campaigns see their biggest voter response during the two-week early voting period when voters are actively making decisions.'
    },
    {
      question: 'What are the campaign finance reporting requirements?',
      answer: 'All our political advertising services are fully compliant with Florida election law. We provide detailed invoices with dates, times, and routes for your campaign finance reports. Our team is familiar with local, state, and federal reporting requirements.'
    }
  ],

  relatedServices: [
    {
      title: 'Mobile Billboard Advertising Fort Lauderdale',
      description: 'Comprehensive mobile advertising solutions',
      href: '/services/fort-lauderdale/mobile-billboard-advertising/',
      icon: Target
    },
    {
      title: 'Digital Mobile Billboards Fort Lauderdale',
      description: 'Dynamic campaign messaging',
      href: '/services/fort-lauderdale/digital-mobile-billboards/',
      icon: TrendingUp
    },
    {
      title: 'Event Advertising Fort Lauderdale',
      description: 'Rally and event promotion',
      href: '/services/fort-lauderdale/event-advertising/',
      icon: Users
    }
  ],

  serviceType: 'advertising' as const,
  industries: ['Political', 'Government', 'Advocacy', 'Non-Profit', 'Public Affairs'],
  locations: ['Fort Lauderdale', 'Broward County', 'Voting Precincts', 'Early Voting Sites'],

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

export default function PoliticalCampaignAdvertisingFortLauderdalePage() {
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