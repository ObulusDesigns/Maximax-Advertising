import { Metadata } from 'next'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { transformServiceData } from '@/app/lib/utils/icons'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Political Campaign Advertising Miami | Election Mobile Billboards | Maximax',
  description: 'Political campaign advertising in Miami with mobile billboards. Reach 442,241+ voters across diverse districts. Bilingual capabilities. Call (561) 720-0521',
  keywords: [
    'political advertising Miami',
    'campaign billboards Miami',
    'election advertising Miami FL',
    'political mobile billboards Miami',
    'voter outreach Miami',
    'campaign trucks Miami',
    'Miami political marketing',
    'election campaign Miami',
    'political signs Miami',
    'campaign advertising Miami-Dade'
  ],
  openGraph: {
    title: 'Political Campaign Advertising Miami | Mobile Billboard Campaigns',
    description: 'Win elections in Miami with strategic mobile billboard advertising. Target specific districts, bilingual messaging, maximum voter reach. Call (561) 720-0521.',
    url: 'https://maximaxmobileadvertising.com/locations/miami/services/political-campaign-advertising/',
    images: [
      {
        url: '/images/miami-political-campaign-billboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Political Campaign Mobile Billboard in Miami'
      }
    ]
  }
}

const miamiPoliticalAdvertisingData = {
  serviceName: 'Political Campaign Advertising in Miami',
  tagline: 'Win Miami Elections with Strategic Mobile Billboard Campaigns',
  description: `Navigate Miami's complex political landscape with mobile billboard advertising that reaches voters where traditional campaigns can't. In a city where 69% of residents are Hispanic, political messaging requires nuanced, culturally relevant approaches that our mobile billboards deliver with precision. From county-wide races reaching Miami-Dade's 2.7 million residents to hyper-local city commission campaigns, our strategic positioning ensures your message resonates with the right voters at the critical moments that decide elections.

Miami's unique political environment demands innovative campaign strategies. With restrictions on traditional signage, oversaturated media markets, and diverse communities speaking multiple languages, mobile billboards offer unparalleled advantages for political campaigns. Our trucks navigate from the Cuban-American neighborhoods of West Miami to the Haitian communities of North Miami, delivering targeted messages that respect and reflect each area's distinct political priorities and cultural values.

The effectiveness of political mobile billboards in Miami is proven through numerous successful campaigns. Voters report 97% recall of mobile billboard political messages compared to just 35% for traditional yard signs. Our ability to rapidly deploy bilingual content, respond to breaking campaign developments, and maintain visibility during early voting and election day provides campaigns with the flexibility needed in today's fast-paced political environment.

Campaign finance efficiency is crucial, and mobile billboards deliver exceptional value. Compared to Miami television advertising averaging $2,500 per 30-second spot reaching scattered audiences, our targeted mobile billboards cost 75% less while reaching voters multiple times in their own neighborhoods. This cost-effectiveness allows campaigns to maintain consistent visibility throughout the election cycle, building name recognition and message retention that translates directly to votes.`,
  
  features: [
    {
      icon: 'Vote',
      title: 'District-Specific Targeting',
      description: 'Precise routing through specific voting districts and precincts'
    },
    {
      icon: 'Globe',
      title: 'Bilingual Messaging',
      description: 'Seamless English/Spanish content rotation for Miami\'s diverse electorate'
    },
    {
      icon: 'Users',
      title: 'Voter Demographics',
      description: 'Target by party registration, voting history, and demographic data'
    },
    {
      icon: 'Calendar',
      title: 'Election Timeline',
      description: 'Strategic deployment for early voting, registration deadlines, and election day'
    },
    {
      icon: 'MessageCircle',
      title: 'Rapid Response',
      description: 'Quick content updates to address opponents or breaking news'
    },
    {
      icon: 'Shield',
      title: 'Compliance Assured',
      description: 'Full adherence to campaign finance and disclosure requirements'
    },
    {
      icon: 'BarChart3',
      title: 'Voter Analytics',
      description: 'Track reach by precinct with detailed impression reporting'
    }
  ],

  benefits: [
    {
      title: 'Unblockable Messaging',
      description: 'Reach voters who skip TV ads and ignore mailers',
      metric: '97% message recall'
    },
    {
      title: 'Community Presence',
      description: 'Build grassroots support with consistent neighborhood visibility',
      metric: '5x more touchpoints than mail'
    },
    {
      title: 'Cost-Effective Reach',
      description: 'Lower cost per voter impression than TV or radio',
      metric: '75% less than TV advertising'
    }
  ],

  process: [
    {
      step: 1,
      title: 'District Analysis',
      description: 'Map key precincts, demographics, and voting patterns',
      icon: 'Map'
    },
    {
      step: 2,
      title: 'Message Development',
      description: 'Create compelling bilingual content for target voters',
      icon: 'FileText'
    },
    {
      step: 3,
      title: 'Strategic Deployment',
      description: 'Launch timed campaigns for maximum voter impact',
      icon: 'Send'
    },
    {
      step: 4,
      title: 'Optimize & Adjust',
      description: 'Refine routes and messaging based on campaign dynamics',
      icon: 'RefreshCw'
    }
  ],

  pricing: [
    {
      name: 'Local Race',
      price: '$799/day',
      description: 'City commission or local elections',
      features: [
        '8 hours daily coverage',
        'Single district focus',
        'Bilingual content',
        'Basic voter analytics',
        'Compliance documentation'
      ]
    },
    {
      name: 'County Campaign',
      price: '$4,499/week',
      description: 'County-wide or mayoral races',
      features: [
        '40 hours weekly coverage',
        'Multi-district routing',
        'A/B message testing',
        'Voter heat mapping',
        'Early voting coverage',
        'Rapid response updates'
      ],
      popular: true
    },
    {
      name: 'Full Campaign',
      price: '$14,999/month',
      description: 'Comprehensive election cycle coverage',
      features: [
        '160+ hours monthly',
        'All key districts covered',
        'Opposition tracking',
        'GOTV deployment',
        'Election day saturation',
        'Complete analytics suite'
      ]
    },
    {
      name: 'Multi-Candidate',
      price: 'Custom Quote',
      description: 'Slate or party-wide campaigns',
      features: [
        'Multiple truck fleet',
        'Coordinated messaging',
        'District prioritization',
        'Spanish media integration',
        'Debate/event coverage',
        'Victory tour included'
      ],
      customQuote: true
    }
  ],

  faqs: [
    {
      question: 'How effective are mobile billboards for Miami political campaigns?',
      answer: 'Extremely effective. Mobile billboards achieve 97% recall among voters, compared to 35% for yard signs and 20% for mailers. In Miami\'s diverse communities, the ability to deliver bilingual messages in specific neighborhoods dramatically increases voter engagement and name recognition.'
    },
    {
      question: 'Can political mobile billboards target specific voting districts?',
      answer: 'Yes, we use precinct maps and voter data to create precise routes through targeted districts. Whether you need to reach high-turnout precincts in Coral Gables or increase visibility in underserved areas of Liberty City, we customize routes for maximum political impact.'
    },
    {
      question: 'Do you provide Spanish-language political advertising?',
      answer: 'Absolutely. We offer full bilingual capabilities with native Spanish copywriting. Content can alternate between languages, display both simultaneously, or run language-specific campaigns in predominantly Spanish-speaking areas like Hialeah or Westchester.'
    },
    {
      question: 'What are the compliance requirements for political mobile billboards?',
      answer: 'All political advertising includes required "Paid for by" disclaimers in appropriate text size. We provide documentation for campaign finance reports and ensure full compliance with Miami-Dade County and Florida election laws. Our team is experienced with political advertising regulations.'
    },
    {
      question: 'When should political campaigns book mobile billboards?',
      answer: 'For maximum impact, begin 6-8 weeks before election day to build name recognition. Increase frequency during early voting (2 weeks before election day) and saturate on election day. For primaries, book early as availability is limited during peak political seasons.'
    }
  ],

  relatedServices: [
    {
      title: 'Digital Mobile Billboards',
      description: 'Dynamic political messaging with real-time updates',
      href: '/locations/miami/services/digital-mobile-billboards',
      icon: 'Smartphone'
    },
    {
      title: 'Event Advertising Miami',
      description: 'Target political rallies and debates',
      href: '/locations/miami/services/event-advertising',
      icon: 'Calendar'
    },
    {
      title: 'LED Truck Advertising',
      description: 'High-visibility displays for campaigns',
      href: '/locations/miami/services/led-truck-advertising',
      icon: 'Monitor'
    }
  ],

  testimonials: [
    {
      name: 'Campaign Manager',
      company: 'Miami Mayoral Campaign 2023',
      role: 'Strategic Director',
      content: 'Mobile billboards were crucial to our victory. The ability to target specific districts with bilingual messaging gave us the edge in a tight race. Worth every penny of our campaign budget.',
      rating: 5
    },
    {
      name: 'Patricia Hernandez',
      company: 'County Commission Campaign',
      role: 'Candidate',
      content: 'As a first-time candidate with limited budget, mobile billboards gave me visibility equal to well-funded opponents. The trucks in my district built name recognition that translated directly to votes.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      company: 'Political Action Committee',
      role: 'Executive Director',
      content: 'We used mobile billboards for our voter registration drive in underserved communities. The Spanish-language messaging and consistent presence helped register 2,000+ new voters.',
      rating: 5
    }
  ],

  gallery: [
    {
      src: '/images/miami-political-billboard-downtown.jpg',
      alt: 'Political campaign billboard in Downtown Miami'
    },
    {
      src: '/images/miami-election-truck-little-havana.jpg',
      alt: 'Campaign truck in Little Havana with Spanish messaging'
    },
    {
      src: '/images/miami-voter-outreach-mobile-billboard.jpg',
      alt: 'Voter outreach mobile billboard at early voting site'
    },
    {
      src: '/images/miami-bilingual-political-advertising.jpg',
      alt: 'Bilingual political advertising truck in Miami'
    }
  ],

  serviceAreas: [
    'District 1 - Key Biscayne/Downtown',
    'District 2 - Coconut Grove/Coral Way',
    'District 3 - Coral Gables/Coconut Grove',
    'District 4 - Coral Gables/Flagami',
    'District 5 - Liberty City/Little Haiti',
    'Little Havana',
    'Hialeah',
    'Westchester',
    'Kendall',
    'Aventura',
    'North Miami',
    'Miami Beach',
    'Doral',
    'Palmetto Bay',
    'Cutler Bay'
  ]
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Political Campaign Advertising in Miami',
  description: 'Political campaign mobile billboard advertising in Miami-Dade County. Bilingual capabilities, district targeting, and compliance with election laws for maximum voter reach.',
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
    name: 'Political Campaign Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Local Political Campaign',
          description: '8 hours daily mobile billboard coverage for local elections'
        },
        price: '799.00',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'County Campaign Package',
          description: '40 hours weekly coverage for county-wide political races'
        },
        price: '4499.00',
        priceCurrency: 'USD'
      }
    ]
  }
}

export default function MiamiPoliticalAdvertisingPage() {
  return (
    <>
      <Script
        id="miami-political-advertising-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
            <ServicePageTemplate {...transformServiceData(miamiPoliticalAdvertisingData)} />
                </>
  )
}