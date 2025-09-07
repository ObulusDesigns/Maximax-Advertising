import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp,
  DollarSign,
  Target,
  BarChart3,
  Eye,
  Users,
  MapPin,
  Clock,
  Zap,
  Building,
  Truck,
  Monitor,
  Shield,
  ChevronRight,
  Calculator,
  MessageCircle,
  Award,
  Globe,
  Smartphone,
  Play,
  Info,
  TrendingDown,
  AlertCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'What is OOH Advertising? Complete Guide to Out-of-Home Advertising | Maximax',
  description: 'Learn everything about OOH advertising (out-of-home advertising). Discover types, costs, benefits, ROI statistics, and why mobile billboards are the most flexible OOH solution.',
  keywords: 'ooh advertising, out of home advertising, what is ooh, outdoor advertising costs, ooh advertising types, billboard advertising, mobile billboards, digital ooh, transit advertising, outdoor advertising ROI, ooh advertising benefits, dooh advertising, out of home media, ooh advertising examples, outdoor advertising effectiveness',
  openGraph: {
    title: 'What is OOH Advertising? Complete Guide to Out-of-Home Advertising',
    description: 'The definitive guide to OOH advertising. Learn about types, costs, benefits, and ROI of out-of-home advertising solutions.',
    images: ['/images/mobile-billboard-truck.jpg'],
    type: 'article',
  },
  alternates: {
    canonical: 'https://maximaxmobileadvertising.com/education/what-is-ooh-advertising'
  }
}

// OOH Type Interface
interface OOHType {
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  avgCost: string
  reach: string
  flexibility: 'Low' | 'Medium' | 'High'
  setupTime: string
  pros: string[]
  cons: string[]
}

// Statistic Interface
interface OOHStatistic {
  value: string
  label: string
  source?: string
  trend?: 'up' | 'down' | 'stable'
}

// Cost Comparison Interface
interface CostComparison {
  method: string
  monthlyRange: string
  cpm: string // Cost per thousand impressions
  setupCost: string
  flexibility: 'Low' | 'Medium' | 'High'
  targetingCapability: 'Basic' | 'Moderate' | 'Advanced'
}

// Case Study Interface
interface CaseStudy {
  industry: string
  challenge: string
  solution: string
  results: string[]
  roi: string
}

// FAQ Interface
interface OOHFaq {
  question: string
  answer: string
  category: 'general' | 'cost' | 'effectiveness' | 'types'
}

export default function WhatIsOOHAdvertisingPage() {
  // OOH Types Data
  const oohTypes: OOHType[] = [
    {
      name: 'Traditional Billboards',
      icon: Building,
      description: 'Large static displays in high-traffic locations',
      avgCost: '$750-$14,000/month',
      reach: '30,000-50,000 daily impressions',
      flexibility: 'Low',
      setupTime: '4-8 weeks',
      pros: [
        'High visibility in prime locations',
        'Builds brand awareness',
        '24/7 exposure',
        'Large format impact'
      ],
      cons: [
        'Fixed location limits reach',
        'Long-term contracts required',
        'Cannot change message easily',
        'Weather can affect visibility'
      ]
    },
    {
      name: 'Mobile Billboards',
      icon: Truck,
      description: 'LED trucks that bring advertising directly to target audiences',
      avgCost: '$600-$3,500/day',
      reach: '40,000-70,000 targeted impressions',
      flexibility: 'High',
      setupTime: '24-48 hours',
      pros: [
        'Goes where your audience is',
        'No long-term contracts',
        'Real-time route optimization',
        'GPS tracking and analytics',
        '97% recall rate'
      ],
      cons: [
        'Daily operational costs',
        'Limited to driving hours',
        'Weather dependent'
      ]
    },
    {
      name: 'Digital Billboards (DOOH)',
      icon: Monitor,
      description: 'Electronic displays with rotating advertisements',
      avgCost: '$1,200-$15,000/month',
      reach: '35,000-60,000 daily impressions',
      flexibility: 'Medium',
      setupTime: '1-2 weeks',
      pros: [
        'Dynamic content capabilities',
        'Multiple advertisers share costs',
        'Day-parting options',
        'Weather-triggered messaging'
      ],
      cons: [
        'Shared screen time',
        'Higher costs than static',
        'Location still fixed',
        'Technical issues possible'
      ]
    },
    {
      name: 'Transit Advertising',
      icon: MapPin,
      description: 'Ads on buses, trains, and transit stations',
      avgCost: '$250-$5,000/month',
      reach: '15,000-40,000 daily impressions',
      flexibility: 'Medium',
      setupTime: '2-4 weeks',
      pros: [
        'Captive audience',
        'Urban market penetration',
        'Multiple touchpoints',
        'Cost-effective in cities'
      ],
      cons: [
        'Limited to transit routes',
        'Wear and tear issues',
        'Vandalism risk',
        'Cluttered environment'
      ]
    }
  ]

  // Statistics Data
  const statistics: OOHStatistic[] = [
    {
      value: '71%',
      label: 'of consumers feel OOH advertising stands out',
      source: 'OAAA/Harris Poll 2023',
      trend: 'up'
    },
    {
      value: '$8.96B',
      label: 'U.S. OOH advertising revenue in 2023',
      source: 'OAAA',
      trend: 'up'
    },
    {
      value: '97%',
      label: 'recall rate for mobile billboard advertising',
      source: 'Outdoor Advertising Association',
      trend: 'stable'
    },
    {
      value: '46%',
      label: 'of U.S. adults noticed OOH ads that directed them to a website',
      source: 'Nielsen 2023',
      trend: 'up'
    },
    {
      value: '4x',
      label: 'more effective than static billboards (mobile billboards)',
      source: 'American Trucking Association',
      trend: 'up'
    },
    {
      value: '68%',
      label: 'of OOH viewers make purchase decisions while in the car',
      source: 'Arbitron National Study',
      trend: 'stable'
    }
  ]

  // Cost Comparison Data
  const costComparisons: CostComparison[] = [
    {
      method: 'Mobile LED Billboards',
      monthlyRange: '$15,000-$45,000',
      cpm: '$0.50-$2.00',
      setupCost: '$0-500',
      flexibility: 'High',
      targetingCapability: 'Advanced'
    },
    {
      method: 'Static Billboards',
      monthlyRange: '$750-$14,000',
      cpm: '$1.00-$4.00',
      setupCost: '$500-$2,500',
      flexibility: 'Low',
      targetingCapability: 'Basic'
    },
    {
      method: 'Digital Billboards',
      monthlyRange: '$1,200-$15,000',
      cpm: '$2.00-$5.00',
      setupCost: '$0-$1,000',
      flexibility: 'Medium',
      targetingCapability: 'Moderate'
    },
    {
      method: 'Bus/Transit Ads',
      monthlyRange: '$250-$5,000',
      cpm: '$1.50-$3.50',
      setupCost: '$200-$1,500',
      flexibility: 'Medium',
      targetingCapability: 'Basic'
    },
    {
      method: 'TV Advertising',
      monthlyRange: '$10,000-$500,000',
      cpm: '$15.00-$30.00',
      setupCost: '$5,000-$50,000',
      flexibility: 'Low',
      targetingCapability: 'Moderate'
    },
    {
      method: 'Radio Advertising',
      monthlyRange: '$2,000-$20,000',
      cpm: '$10.00-$20.00',
      setupCost: '$500-$5,000',
      flexibility: 'Medium',
      targetingCapability: 'Basic'
    }
  ]

  // Case Studies
  const caseStudies: CaseStudy[] = [
    {
      industry: 'Real Estate Development',
      challenge: 'New luxury condo development needed to reach high-income prospects in specific Miami neighborhoods',
      solution: 'Mobile billboard campaign targeting Brickell, Coral Gables, and Key Biscayne during peak hours',
      results: [
        '312% increase in property tour bookings',
        '47 units sold in first 60 days',
        '$18.5M in sales attributed to campaign'
      ],
      roi: '1,247% ROI'
    },
    {
      industry: 'Restaurant Chain Launch',
      challenge: 'New restaurant needed immediate local awareness in competitive Fort Lauderdale market',
      solution: 'Dual-truck mobile billboard fleet with lunch/dinner hour targeting and special offer codes',
      results: [
        '2,800+ first-week customers',
        '67% used promo code from billboard',
        'Break-even achieved 3 months early'
      ],
      roi: '892% ROI'
    },
    {
      industry: 'Political Campaign',
      challenge: 'Congressional candidate needed to increase name recognition in diverse districts quickly',
      solution: 'Multi-language mobile billboards with GPS-tracked routes through key voting precincts',
      results: [
        '43% increase in name recognition',
        '28% boost in favorable ratings',
        'Won election by 3.2% margin'
      ],
      roi: 'Electoral Victory'
    }
  ]

  // FAQs
  const faqs: OOHFaq[] = [
    {
      question: 'What is OOH advertising?',
      answer: 'OOH (Out-of-Home) advertising refers to any advertising that reaches consumers while they are outside their homes. This includes billboards, mobile billboards, transit ads, digital displays, and street furniture advertising. It\'s designed to reach audiences in public spaces, on the go, and during their daily routines.',
      category: 'general'
    },
    {
      question: 'How much does OOH advertising cost?',
      answer: 'OOH advertising costs vary widely based on format, location, and duration. Static billboards range from $750-$14,000/month, mobile billboards cost $600-$3,500/day, and transit ads run $250-$5,000/month. Mobile billboards often provide the best ROI with costs of $0.50-$2.00 per thousand impressions.',
      category: 'cost'
    },
    {
      question: 'What\'s the difference between OOH and DOOH?',
      answer: 'OOH (Out-of-Home) encompasses all outdoor advertising formats, while DOOH (Digital Out-of-Home) specifically refers to digital screens and electronic displays. DOOH allows for dynamic content, real-time updates, and programmatic buying, while traditional OOH includes static billboards and printed materials.',
      category: 'types'
    },
    {
      question: 'How effective is OOH advertising compared to digital marketing?',
      answer: 'OOH advertising offers unique advantages: 71% of consumers feel it stands out more than online ads, it can\'t be blocked or skipped, and it has a 97% recall rate for mobile billboards. While digital marketing excels at targeting and tracking, OOH builds brand awareness and drives online activity with 46% of viewers visiting advertised websites.',
      category: 'effectiveness'
    },
    {
      question: 'What are mobile billboards and why are they effective?',
      answer: 'Mobile billboards are LED trucks that display advertisements while driving through targeted areas. They\'re highly effective because they achieve 97% recall rates, can\'t be ignored or blocked, go directly to your audience, and offer GPS tracking for optimization. They\'re 4x more effective than static billboards.',
      category: 'types'
    },
    {
      question: 'How do I measure OOH advertising ROI?',
      answer: 'OOH ROI is measured through: impression estimates based on traffic data, GPS tracking for mobile billboards, unique promo codes or URLs, QR code scans, website traffic spikes during campaigns, sales lift studies, and brand awareness surveys. Mobile billboards provide the most accurate tracking with GPS data and defined routes.',
      category: 'effectiveness'
    },
    {
      question: 'What types of businesses benefit most from OOH advertising?',
      answer: 'Businesses with local/regional focus, impulse purchase products, event promotions, and brand awareness goals see the best results. This includes restaurants, retail stores, real estate, healthcare, entertainment venues, political campaigns, and service businesses. Mobile billboards work especially well for grand openings and time-sensitive promotions.',
      category: 'general'
    },
    {
      question: 'How long should an OOH campaign run?',
      answer: 'Campaign duration depends on objectives. Brand awareness campaigns typically run 3-6 months, while promotional campaigns can be effective in 2-4 weeks. Mobile billboards offer flexibility with daily rentals, allowing you to test and optimize. Most successful campaigns combine short bursts with sustained presence.',
      category: 'general'
    },
    {
      question: 'Can OOH advertising target specific demographics?',
      answer: 'Yes, especially with mobile billboards and DOOH. Mobile billboards can target specific neighborhoods, events, and times when your audience is most active. Digital billboards can daypart messaging. Transit ads reach commuters. Combining location data with demographic insights enables precise targeting.',
      category: 'effectiveness'
    },
    {
      question: 'What are the advantages of mobile billboards over static billboards?',
      answer: 'Mobile billboards offer: flexibility to change routes daily, no long-term contracts, ability to target multiple locations, GPS tracking and analytics, 97% recall rate vs 50% for static, lower entry costs, faster campaign launch (24-48 hours vs weeks), and the ability to reach audiences at events and specific times.',
      category: 'types'
    }
  ]

  // Schema Markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "What is OOH Advertising? Complete Guide to Out-of-Home Advertising",
        "description": "Learn everything about OOH advertising (out-of-home advertising). Discover types, costs, benefits, ROI statistics, and why mobile billboards are the most flexible OOH solution.",
        "author": {
          "@type": "Organization",
          "name": "Maximax Advertising"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Maximax Advertising",
          "logo": {
            "@type": "ImageObject",
            "url": "https://maximaxmobileadvertising.com/images/logo.png"
          }
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to Choose the Right OOH Advertising Method",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Define Your Target Audience",
            "text": "Identify who you want to reach and where they spend time"
          },
          {
            "@type": "HowToStep",
            "name": "Set Your Budget",
            "text": "Determine your advertising budget and campaign duration"
          },
          {
            "@type": "HowToStep",
            "name": "Choose Your OOH Format",
            "text": "Select between mobile billboards, static billboards, digital, or transit based on your needs"
          },
          {
            "@type": "HowToStep",
            "name": "Plan Your Campaign",
            "text": "Design creative, select locations/routes, and set campaign timeline"
          },
          {
            "@type": "HowToStep",
            "name": "Launch and Track",
            "text": "Execute campaign and monitor performance metrics"
          }
        ]
      }
    ]
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl animate-float animation-delay-400" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-maximax-cyan" />
              <span className="text-maximax-cyan font-semibold uppercase text-sm tracking-wide">
                The Complete Guide to OOH Advertising
              </span>
            </div>
            
            <h1 className="text-white mb-6">
              What is <span className="gradient-text">OOH Advertising?</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Out-of-Home advertising reaches 96% of Americans weekly, generating over $8.96 billion annually. 
              This comprehensive guide covers everything you need to know about OOH advertising types, costs, 
              benefits, and why mobile billboards deliver the highest ROI.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-pink mb-1">$8.96B</div>
                <div className="text-xs text-gray-400">Market Size</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-cyan mb-1">96%</div>
                <div className="text-xs text-gray-400">Weekly Reach</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-pink mb-1">97%</div>
                <div className="text-xs text-gray-400">Recall Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-cyan mb-1">4x</div>
                <div className="text-xs text-gray-400">More Effective</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#cost-calculator" 
                className="btn-primary btn-lg"
              >
                <Calculator className="w-5 h-5" />
                Calculate OOH Costs
              </Link>
              <a 
                href="tel:5617200521" 
                className="btn-accent btn-lg"
              >
                <Phone className="w-5 h-5" />
                Get Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section py-8 bg-white border-b sticky top-0 z-40">
        <div className="container">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">Jump to:</span>
            <a href="#definition" className="text-sm text-gray-700 hover:text-maximax-pink whitespace-nowrap">Definition</a>
            <a href="#types" className="text-sm text-gray-700 hover:text-maximax-pink whitespace-nowrap">Types of OOH</a>
            <a href="#statistics" className="text-sm text-gray-700 hover:text-maximax-pink whitespace-nowrap">Statistics</a>
            <a href="#costs" className="text-sm text-gray-700 hover:text-maximax-pink whitespace-nowrap">Costs</a>
            <a href="#benefits" className="text-sm text-gray-700 hover:text-maximax-pink whitespace-nowrap">Benefits</a>
            <a href="#case-studies" className="text-sm text-gray-700 hover:text-maximax-pink whitespace-nowrap">Case Studies</a>
            <a href="#faq" className="text-sm text-gray-700 hover:text-maximax-pink whitespace-nowrap">FAQ</a>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section id="definition" className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              Understanding <span className="gradient-text">Out-of-Home Advertising</span>
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-maximax-pink/10 to-maximax-cyan/10 rounded-xl flex items-center justify-center">
                  <Info className="w-6 h-6 text-maximax-pink" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">What is OOH Advertising?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Out-of-Home (OOH) advertising encompasses all advertising media that reaches consumers outside their homes. 
                    It's one of the oldest forms of advertising, evolving from simple painted signs to today's sophisticated 
                    digital displays and mobile billboards.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    OOH advertising works by placing brand messages in high-traffic public spaces where they can't be turned off, 
                    skipped, or blocked. This "always-on" nature makes OOH uniquely powerful in our digital age where consumers 
                    actively avoid online ads.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Eye className="w-8 h-8 text-maximax-cyan mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">High Visibility</h4>
                  <p className="text-sm text-gray-600">Can't be blocked or skipped like digital ads</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-maximax-pink mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Mass Reach</h4>
                  <p className="text-sm text-gray-600">96% of Americans see OOH ads weekly</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-maximax-cyan mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Growing Impact</h4>
                  <p className="text-sm text-gray-600">$8.96B market growing 5% annually</p>
                </div>
              </div>
            </div>

            {/* Evolution Timeline */}
            <div className="mt-12">
              <h3 className="text-center font-bold text-2xl mb-8">The Evolution of OOH Advertising</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-maximax-pink to-maximax-cyan"></div>
                
                {[
                  { year: '1830s', event: 'First billboard appears in New York', side: 'left' },
                  { year: '1960s', event: 'Highway Beautification Act regulates billboards', side: 'right' },
                  { year: '1990s', event: 'Digital billboards introduced', side: 'left' },
                  { year: '2000s', event: 'Mobile billboards gain popularity', side: 'right' },
                  { year: '2020s', event: 'Programmatic DOOH and AI targeting', side: 'left' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center mb-8 ${item.side === 'right' ? 'justify-end' : ''}`}>
                    <div className={`w-5/12 ${item.side === 'right' ? 'text-right pr-8' : 'pl-8'}`}>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div className="font-bold text-maximax-pink mb-1">{item.year}</div>
                        <div className="text-sm text-gray-700">{item.event}</div>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of OOH Section */}
      <section id="types" className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-6">
              Types of <span className="gradient-text-cyan">OOH Advertising</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Compare different OOH advertising formats to find the best fit for your campaign goals and budget.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {oohTypes.map((type, index) => {
                const IconComponent = type.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-xl flex items-center justify-center text-white">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2">{type.name}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Avg Cost</div>
                        <div className="font-semibold text-sm text-gray-900">{type.avgCost}</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Daily Reach</div>
                        <div className="font-semibold text-sm text-gray-900">{type.reach}</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Flexibility</div>
                        <div className={`font-semibold text-sm ${
                          type.flexibility === 'High' ? 'text-green-600' :
                          type.flexibility === 'Medium' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>{type.flexibility}</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Setup Time</div>
                        <div className="font-semibold text-sm text-gray-900">{type.setupTime}</div>
                      </div>
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-green-700 mb-2">Pros</h4>
                        <ul className="space-y-1">
                          {type.pros.map((pro, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-red-700 mb-2">Cons</h4>
                        <ul className="space-y-1">
                          {type.cons.map((con, cIndex) => (
                            <li key={cIndex} className="flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Special Badge for Mobile Billboards */}
                    {type.name === 'Mobile Billboards' && (
                      <div className="mt-4 bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white rounded-lg p-3 text-center">
                        <Award className="w-5 h-5 inline-block mr-2" />
                        <span className="font-semibold text-sm">Highest ROI & Flexibility</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Mobile Billboard CTA */}
            <div className="mt-12 bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-2xl p-8 text-center border border-maximax-pink/20">
              <Truck className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-4">
                Why Mobile Billboards Are the <span className="gradient-text">Smart Choice</span>
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Mobile billboards combine the impact of traditional billboards with the flexibility of digital marketing. 
                With 97% recall rates, GPS tracking, and no long-term contracts, they deliver the highest ROI in OOH advertising.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services/mobile-billboards" className="btn-primary">
                  Learn About Our Mobile Billboards
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a href="tel:5617200521" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call (561) 720-0521
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="section section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-6">
              OOH Advertising <span className="gradient-text">by the Numbers</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Data-driven insights that prove the effectiveness and growth of out-of-home advertising.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    {stat.trend && (
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                        stat.trend === 'up' ? 'bg-green-100 text-green-700' :
                        stat.trend === 'down' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> :
                         stat.trend === 'down' ? <TrendingDown className="w-3 h-3" /> :
                         <ArrowRight className="w-3 h-3" />}
                        {stat.trend === 'up' ? 'Growing' : stat.trend === 'down' ? 'Declining' : 'Stable'}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 mb-2">{stat.label}</p>
                  {stat.source && (
                    <p className="text-xs text-gray-500">Source: {stat.source}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Market Growth Chart */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-6 text-center">OOH Market Growth & Projections</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Market Size by Year</h4>
                  <div className="space-y-3">
                    {[
                      { year: '2020', value: '$7.1B', growth: '-29%', note: 'COVID Impact' },
                      { year: '2021', value: '$7.8B', growth: '+10%', note: 'Recovery Begins' },
                      { year: '2022', value: '$8.4B', growth: '+8%', note: 'Strong Rebound' },
                      { year: '2023', value: '$8.96B', growth: '+7%', note: 'Exceeds Pre-COVID' },
                      { year: '2024', value: '$9.5B', growth: '+6%', note: 'Projected' },
                      { year: '2025', value: '$10.1B', growth: '+6%', note: 'Projected' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-gray-900">{item.year}</span>
                          <span className="text-maximax-pink font-bold">{item.value}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-sm font-semibold ${
                            item.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>{item.growth}</span>
                          <span className="text-xs text-gray-500">{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Growth by Segment</h4>
                  <div className="space-y-4">
                    {[
                      { segment: 'Digital OOH', growth: '+12%', share: '32%' },
                      { segment: 'Mobile Billboards', growth: '+18%', share: '8%' },
                      { segment: 'Transit', growth: '+5%', share: '15%' },
                      { segment: 'Static Billboards', growth: '+2%', share: '35%' },
                      { segment: 'Street Furniture', growth: '+4%', share: '10%' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{item.segment}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-green-600">{item.growth}/yr</span>
                            <span className="text-sm text-gray-500">{item.share} share</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-maximax-pink to-maximax-cyan h-2 rounded-full"
                            style={{ width: item.share }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section id="costs" className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-6">
              OOH Advertising <span className="gradient-text-cyan">Cost Breakdown</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Compare costs across different advertising methods to make informed budget decisions.
            </p>

            {/* Cost Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Advertising Method</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monthly Cost Range</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CPM</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Setup Cost</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Flexibility</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Targeting</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparisons.map((comparison, index) => (
                    <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      comparison.method === 'Mobile LED Billboards' ? 'bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5' : ''
                    }`}>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {comparison.method}
                        {comparison.method === 'Mobile LED Billboards' && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-maximax-pink text-white">
                            Best ROI
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{comparison.monthlyRange}</td>
                      <td className="px-6 py-4 font-semibold text-maximax-cyan">{comparison.cpm}</td>
                      <td className="px-6 py-4 text-gray-700">{comparison.setupCost}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                          comparison.flexibility === 'High' ? 'bg-green-100 text-green-700' :
                          comparison.flexibility === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {comparison.flexibility}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                          comparison.targetingCapability === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                          comparison.targetingCapability === 'Moderate' ? 'bg-gray-100 text-gray-700' :
                          'bg-gray-50 text-gray-600'
                        }`}>
                          {comparison.targetingCapability}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cost Calculator */}
            <div id="cost-calculator" className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <Calculator className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">OOH Campaign Cost Calculator</h3>
                <p className="text-gray-600">Get an instant estimate for your campaign</p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Duration</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maximax-pink focus:border-transparent">
                        <option>1 Week</option>
                        <option>2 Weeks</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                        <option>6 Months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">OOH Type</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maximax-pink focus:border-transparent">
                        <option>Mobile LED Billboard</option>
                        <option>Static Billboard</option>
                        <option>Digital Billboard</option>
                        <option>Transit Advertising</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-lg p-6 text-center">
                    <div className="text-sm text-gray-600 mb-2">Estimated Campaign Cost</div>
                    <div className="text-4xl font-bold gradient-text mb-4">$8,500 - $12,000</div>
                    <div className="text-sm text-gray-600 mb-4">Approximately 250,000 - 350,000 impressions</div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Get Exact Quote
                      </a>
                      <a href="tel:5617200521" className="btn-secondary">
                        <Phone className="w-4 h-4" />
                        Call for Pricing
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-6">
              Why Businesses Choose <span className="gradient-text">OOH Advertising</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover the unique advantages that make OOH advertising essential for modern marketing strategies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Can't Be Blocked or Skipped",
                  description: "Unlike digital ads with 47% ad-blocker usage, OOH advertising is always visible and can't be turned off, ensuring your message reaches your audience."
                },
                {
                  icon: Eye,
                  title: "97% Recall Rate",
                  description: "Mobile billboards achieve the highest recall rate of any advertising medium, with viewers remembering your brand days after exposure."
                },
                {
                  icon: Target,
                  title: "Hyper-Local Targeting",
                  description: "Reach specific neighborhoods, events, or demographics with precision. Mobile billboards can follow your customers' daily routines."
                },
                {
                  icon: BarChart3,
                  title: "Drives Online Activity",
                  description: "46% of adults search online after seeing an OOH ad, with 38% visiting the advertiser's website immediately."
                },
                {
                  icon: DollarSign,
                  title: "Lowest CPM in Advertising",
                  description: "At $0.50-$2.00 per thousand impressions, OOH delivers more reach per dollar than TV, radio, or digital advertising."
                },
                {
                  icon: Smartphone,
                  title: "Mobile Integration",
                  description: "Perfect companion to digital campaigns with QR codes, hashtags, and location-based mobile targeting for seamless omnichannel marketing."
                },
                {
                  icon: Clock,
                  title: "24/7 Brand Presence",
                  description: "Your message works around the clock, reaching audiences during commutes, shopping trips, and entertainment outings."
                },
                {
                  icon: Award,
                  title: "Builds Brand Credibility",
                  description: "Large-format OOH advertising signals business success and stability, enhancing brand perception and trust."
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-maximax-pink/10 to-maximax-cyan/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-maximax-pink" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-6">
              Real Results: <span className="gradient-text-cyan">OOH Success Stories</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              See how businesses across industries achieved remarkable results with strategic OOH campaigns.
            </p>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <h3 className="font-bold text-xl">{study.industry}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-600 mb-2">Challenge:</h4>
                          <p className="text-gray-700">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm text-gray-600 mb-2">Solution:</h4>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <h4 className="font-semibold text-sm text-gray-600 mb-3">Results:</h4>
                      <ul className="space-y-2 mb-4">
                        {study.results.map((result, rIndex) => (
                          <li key={rIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold">{study.roi}</div>
                        <div className="text-xs uppercase tracking-wide">Return on Investment</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Success Metrics */}
            <div className="mt-12 bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold text-center mb-8">Average Results from Our OOH Campaigns</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">487%</div>
                  <div className="text-sm text-white/80">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">73%</div>
                  <div className="text-sm text-white/80">Brand Recall</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">41%</div>
                  <div className="text-sm text-white/80">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2.8x</div>
                  <div className="text-sm text-white/80">Web Traffic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Get answers to common questions about OOH advertising and outdoor marketing.
            </p>

            {/* FAQ Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['All', 'General', 'Cost', 'Effectiveness', 'Types'].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    category === 'All' 
                      ? 'bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4 flex-1">
                        <MessageCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-9 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            {/* Contact for More Questions */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Have more questions about OOH advertising?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg"
                >
                  Get Free Consultation
                </a>
                <a href="tel:5617200521" className="btn-accent btn-lg">
                  <Phone className="w-5 h-5" />
                  Call (561) 720-0521
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Launch Your OOH Advertising Campaign?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of successful businesses using OOH advertising to grow their brand. 
              Start with mobile billboards for maximum flexibility and ROI.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-white/80" />
                <div className="text-sm">Mobile LED Trucks</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-white/80" />
                <div className="text-sm">GPS Tracking</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-white/80" />
                <div className="text-sm">24-48hr Start</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-white/80" />
                <div className="text-sm">No Contracts</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:5617200521" 
                className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call (561) 720-0521
              </a>
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Serving South Florida Since 2019
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                500+ Successful Campaigns
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                97% Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">
              Related <span className="gradient-text-cyan">Resources</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/services/mobile-billboards" className="group">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Truck className="w-10 h-10 text-maximax-pink mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-maximax-cyan transition-colors">Mobile Billboard Services</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore our fleet of LED trucks and campaign options for South Florida.
                  </p>
                  <div className="flex items-center gap-2 text-maximax-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/pricing" className="group">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <DollarSign className="w-10 h-10 text-maximax-cyan mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-maximax-cyan transition-colors">Pricing & Packages</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    View detailed pricing for all our OOH advertising solutions.
                  </p>
                  <div className="flex items-center gap-2 text-maximax-cyan text-sm font-semibold">
                    View Pricing
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/compare/mobile-billboard-vs-static" className="group">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <BarChart3 className="w-10 h-10 text-maximax-pink mb-4" />
                  <h3 className="font-bold mb-2 group-hover:text-maximax-cyan transition-colors">Compare Advertising Methods</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    See detailed comparisons of different advertising options.
                  </p>
                  <div className="flex items-center gap-2 text-maximax-cyan text-sm font-semibold">
                    Compare Options
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}