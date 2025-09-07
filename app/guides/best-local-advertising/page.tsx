import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Target, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  TrendingUp,
  MapPin,
  Users,
  Shield,
  Award,
  BarChart3,
  Smartphone,
  Radio,
  Truck,
  Mail,
  Monitor,
  Calendar,
  Phone,
  ChevronRight,
  AlertCircle,
  Zap,
  PieChart,
  Calculator,
  Lightbulb,
  MessageCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Local Advertising in Florida | Complete Guide to Local Marketing 2025',
  description: 'Discover the best way to advertise your business locally in Florida. Compare all local advertising methods, costs, and ROI. Learn where to advertise your business in Miami, Fort Lauderdale, and West Palm Beach.',
  keywords: 'local advertising, best way to advertise your business, where to advertise your business, local business advertising, local advertising Florida, Miami local advertising, Fort Lauderdale advertising, best local advertising for small business',
  openGraph: {
    title: 'Best Local Advertising in Florida | Complete Guide 2025',
    description: 'The definitive guide to local advertising in Florida. Compare methods, costs, and ROI to find the best way to advertise your business.',
    type: 'article',
    publishedTime: '2025-01-07',
    authors: ['Maximax Advertising'],
    images: [
      {
        url: '/images/local-advertising-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Local Advertising Guide Florida'
      }
    ]
  },
  alternates: {
    canonical: 'https://maximaxmobileadvertising.com/guides/best-local-advertising'
  }
}

// Local advertising methods data
const advertisingMethods = [
  {
    name: "Mobile Billboard Advertising",
    icon: Truck,
    costPerMonth: "$3,000-$8,000",
    impressions: "30,000-50,000/day",
    roi: "5.97x",
    effectiveness: 97,
    pros: [
      "Can't be blocked or skipped",
      "97% recall rate",
      "GPS tracking & analytics",
      "Flexible targeting by location/time",
      "Reaches people outside their homes"
    ],
    cons: [
      "Higher upfront cost than digital",
      "Weather dependent",
      "Limited to daylight hours for best impact"
    ],
    bestFor: "Grand openings, events, local awareness campaigns, reaching specific neighborhoods",
    localReach: "Excellent - covers entire metro areas"
  },
  {
    name: "Social Media Advertising",
    icon: Smartphone,
    costPerMonth: "$500-$5,000",
    impressions: "10,000-100,000",
    roi: "2.80x",
    effectiveness: 65,
    pros: [
      "Precise demographic targeting",
      "Lower entry cost",
      "Real-time analytics",
      "Interactive engagement",
      "Shareable content"
    ],
    cons: [
      "Ad fatigue and blindness",
      "Algorithm changes affect reach",
      "Requires constant content creation",
      "High competition for attention",
      "Limited organic reach"
    ],
    bestFor: "E-commerce, younger demographics, brand engagement",
    localReach: "Good - with geo-targeting"
  },
  {
    name: "Radio Advertising",
    icon: Radio,
    costPerMonth: "$2,000-$10,000",
    impressions: "20,000-200,000",
    roi: "1.38x",
    effectiveness: 45,
    pros: [
      "Wide local reach",
      "Targets commuters",
      "Frequency builds familiarity",
      "Local personality endorsements",
      "Cost-effective for repetition"
    ],
    cons: [
      "No visual component",
      "Difficult to measure ROI",
      "Channel switching during ads",
      "Production costs extra",
      "Limited targeting options"
    ],
    bestFor: "Local services, time-sensitive offers, drive-time marketing",
    localReach: "Very Good - station dependent"
  },
  {
    name: "Direct Mail",
    icon: Mail,
    costPerMonth: "$1,000-$5,000",
    impressions: "5,000-25,000",
    roi: "1.29x",
    effectiveness: 40,
    pros: [
      "Tangible and personal",
      "Target specific ZIP codes",
      "Less competition in mailbox",
      "Good for coupons/offers",
      "Measurable with codes"
    ],
    cons: [
      "Often discarded unread",
      "Printing and postage costs",
      "Environmental concerns",
      "Slow turnaround time",
      "Limited design flexibility"
    ],
    bestFor: "Local services, senior demographics, special offers",
    localReach: "Excellent - ZIP code specific"
  },
  {
    name: "Google Ads (Local)",
    icon: Monitor,
    costPerMonth: "$500-$3,000",
    impressions: "5,000-50,000",
    roi: "2.00x",
    effectiveness: 70,
    pros: [
      "Intent-based targeting",
      "Pay per click model",
      "Immediate visibility",
      "Detailed analytics",
      "Mobile optimized"
    ],
    cons: [
      "Click fraud risk",
      "Competitive keywords expensive",
      "Requires expertise to optimize",
      "Stops when budget ends",
      "Ad blockers reduce reach"
    ],
    bestFor: "Service businesses, emergency services, high-intent searches",
    localReach: "Good - with location extensions"
  },
  {
    name: "Local TV Advertising",
    icon: Monitor,
    costPerMonth: "$5,000-$50,000",
    impressions: "50,000-500,000",
    roi: "1.40x",
    effectiveness: 50,
    pros: [
      "High production value",
      "Wide household reach",
      "Builds brand credibility",
      "Visual storytelling",
      "Prime time impact"
    ],
    cons: [
      "Very expensive production",
      "Cord-cutting reduces audience",
      "DVR skipping common",
      "Difficult to target demographics",
      "Long lead times"
    ],
    bestFor: "Large businesses, brand awareness, mass market products",
    localReach: "Excellent - DMA wide"
  }
]

// Florida market data
const floridaMarkets = [
  {
    city: "Miami",
    population: "6.2M (Metro)",
    avgIncome: "$63,000",
    bestMethods: ["Mobile Billboards", "Social Media", "Google Ads"],
    keyInsight: "Highly diverse market requires multilingual approach. Mobile billboards excel in high-traffic areas like Brickell and South Beach."
  },
  {
    city: "Fort Lauderdale",
    population: "1.9M (Metro)",
    avgIncome: "$71,000",
    bestMethods: ["Mobile Billboards", "Direct Mail", "Radio"],
    keyInsight: "Mix of tourists and affluent locals. Mobile billboards on A1A and Las Olas Boulevard deliver exceptional ROI."
  },
  {
    city: "West Palm Beach",
    population: "1.5M (Metro)",
    avgIncome: "$78,000",
    bestMethods: ["Mobile Billboards", "Local TV", "Direct Mail"],
    keyInsight: "Affluent market with older demographics. Mobile billboards during season (Oct-Apr) see 40% higher engagement."
  }
]

// Case studies
const caseStudies = [
  {
    business: "Miami Restaurant Chain",
    challenge: "New location awareness",
    solution: "Mobile billboard + social media campaign",
    investment: "$8,500/month",
    results: {
      footTraffic: "+156%",
      sales: "+89%",
      roi: "4.2x",
      timeframe: "30 days"
    }
  },
  {
    business: "Fort Lauderdale Real Estate",
    challenge: "Luxury property visibility",
    solution: "Mobile billboard targeting affluent areas",
    investment: "$6,000/month",
    results: {
      inquiries: "+210%",
      showings: "+125%",
      roi: "8.5x",
      timeframe: "45 days"
    }
  },
  {
    business: "Palm Beach Boutique",
    challenge: "Compete with online retail",
    solution: "Hyperlocal mobile billboard campaign",
    investment: "$4,500/month",
    results: {
      storeVisits: "+78%",
      sales: "+62%",
      roi: "3.8x",
      timeframe: "60 days"
    }
  }
]

// FAQ data
const faqs = [
  {
    question: "What is the best way to advertise a small business locally?",
    answer: "The best way to advertise locally combines high-visibility mobile billboards with targeted digital marketing. Mobile billboards offer 97% recall rates and reach people throughout their day, while digital ads capture high-intent searches. For Florida businesses, starting with a $3,000-5,000 monthly budget split 60/40 between mobile billboards and digital typically yields the best ROI."
  },
  {
    question: "Where should I advertise my business in Miami?",
    answer: "In Miami, focus on high-traffic areas: Brickell (business district), South Beach (tourists), Wynwood (young professionals), and Coral Gables (affluent residents). Mobile billboards excel here because they can target multiple areas daily. Digital advertising should geo-target these same zones with Spanish and English content."
  },
  {
    question: "How much should a small business spend on local advertising?",
    answer: "Small businesses should allocate 5-10% of gross revenue to marketing, with 60-70% going to local advertising. For a business making $500,000 annually, that's $2,000-4,000 monthly for local advertising. Start with mobile billboards for broad awareness, then add digital for targeted conversions."
  },
  {
    question: "What's the ROI of mobile billboard advertising vs other methods?",
    answer: "Mobile billboards deliver an average 5.97x ROI compared to 2.80x for social media, 2.00x for Google Ads, and 1.29x for direct mail. The higher ROI comes from superior recall rates (97% vs 10-20% for digital), inability to block ads, and reaching consumers during purchase decisions."
  },
  {
    question: "How do I measure local advertising effectiveness?",
    answer: "Track these metrics: foot traffic increases (use door counters), phone call volume, website traffic from local IPs, unique promo code redemptions, and sales lift during campaign periods. Mobile billboards with GPS tracking provide route analytics, impression counts, and demographic data for precise ROI calculation."
  },
  {
    question: "What's the fastest way to get local customers?",
    answer: "Mobile billboard advertising produces results within 48-72 hours of launch. Unlike digital ads that require optimization periods or direct mail with 2-week lead times, mobile billboards generate immediate brand awareness and drive traffic from day one, especially for location-based businesses."
  }
]

export default function BestLocalAdvertisingGuide() {
  // Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  // Schema markup for How-To
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Choose the Best Local Advertising Method",
    "description": "A comprehensive guide to selecting the most effective local advertising strategy for your Florida business",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Define Your Target Audience",
        "text": "Identify your ideal customer demographics, location, and behavior patterns"
      },
      {
        "@type": "HowToStep",
        "name": "Set Your Budget",
        "text": "Allocate 5-10% of gross revenue to marketing, with 60-70% for local advertising"
      },
      {
        "@type": "HowToStep",
        "name": "Compare Advertising Methods",
        "text": "Evaluate ROI, reach, and effectiveness of each method for your market"
      },
      {
        "@type": "HowToStep",
        "name": "Start with High-ROI Options",
        "text": "Begin with mobile billboards for awareness, add digital for conversions"
      },
      {
        "@type": "HowToStep",
        "name": "Track and Optimize",
        "text": "Monitor metrics and adjust strategy based on performance data"
      }
    ]
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl animate-float animation-delay-400" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-5 h-5 text-maximax-cyan" />
              <span className="text-maximax-cyan font-semibold uppercase text-sm tracking-wide">
                The Definitive Guide
              </span>
            </div>
            
            <h1 className="text-white mb-6">
              Best Local Advertising in Florida: <br />
              <span className="gradient-text">Complete 2025 Guide</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Discover the best way to advertise your business locally. Compare all methods, 
              costs, and ROI to maximize your marketing budget in Miami, Fort Lauderdale, and West Palm Beach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#comparison" className="btn-secondary btn-lg">
                Compare Methods
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-maximax-pink mb-1">$8.5B</div>
                <div className="text-xs text-gray-400 uppercase">Florida Ad Spend 2024</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-maximax-cyan mb-1">5.97x</div>
                <div className="text-xs text-gray-400 uppercase">Mobile Billboard ROI</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-maximax-pink mb-1">97%</div>
                <div className="text-xs text-gray-400 uppercase">Recall Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-maximax-cyan mb-1">48hrs</div>
                <div className="text-xs text-gray-400 uppercase">To First Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-maximax-pink" />
                Key Findings: Local Advertising in Florida 2025
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">Most Effective Methods:</h3>
                  <ol className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-maximax-pink font-bold">1.</span>
                      <span><strong>Mobile Billboards:</strong> 5.97x ROI, 97% recall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-maximax-cyan font-bold">2.</span>
                      <span><strong>Google Ads:</strong> 2.00x ROI, high intent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-maximax-pink font-bold">3.</span>
                      <span><strong>Social Media:</strong> 2.80x ROI, precise targeting</span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Budget Recommendations:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Allocate 5-10% of revenue to marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>60% to high-visibility (mobile billboards)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>40% to targeted digital marketing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Comparison Table */}
      <section id="comparison" className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Complete <span className="gradient-text">Comparison</span> of Local Advertising Methods
              </h2>
              <p className="text-lg text-gray-600">
                Data-driven analysis of every local advertising option available in Florida
              </p>
            </div>

            <div className="grid gap-8">
              {advertisingMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5 p-6 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <IconComponent className="w-6 h-6 text-maximax-pink" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{method.name}</h3>
                            <p className="text-sm text-gray-600">{method.bestFor}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-maximax-cyan">{method.roi}</div>
                          <div className="text-sm text-gray-600">Average ROI</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid md:grid-cols-4 gap-6 mb-6">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Monthly Cost</div>
                          <div className="font-bold text-lg">{method.costPerMonth}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Impressions</div>
                          <div className="font-bold text-lg">{method.impressions}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Effectiveness</div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-maximax-pink to-maximax-cyan h-2 rounded-full"
                                style={{ width: `${method.effectiveness}%` }}
                              />
                            </div>
                            <span className="font-bold text-sm">{method.effectiveness}%</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Local Reach</div>
                          <div className="font-bold text-sm">{method.localReach}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-3 text-green-600 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {method.pros.map((pro, pIndex) => (
                              <li key={pIndex} className="text-sm text-gray-700 flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-3 text-red-600 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {method.cons.map((con, cIndex) => (
                              <li key={cIndex} className="text-sm text-gray-700 flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Florida Market Analysis */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Florida <span className="gradient-text-cyan">Market Analysis</span>
              </h2>
              <p className="text-lg text-gray-600">
                Local advertising strategies optimized for each major Florida market
              </p>
            </div>

            <div className="grid gap-6">
              {floridaMarkets.map((market, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-maximax-pink" />
                        {market.city}
                      </h3>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>Population: {market.population}</span>
                        <span>Avg Income: {market.avgIncome}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-semibold mb-2">Best Methods:</div>
                    <div className="flex flex-wrap gap-2">
                      {market.bestMethods.map((method, mIndex) => (
                        <span key={mIndex} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-300">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-maximax-cyan flex-shrink-0" />
                      <p className="text-sm text-gray-700">{market.keyInsight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Real <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600">
                How Florida businesses achieved exceptional ROI with strategic local advertising
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-maximax-pink to-maximax-cyan p-6 text-white">
                    <h3 className="font-bold text-lg mb-2">{study.business}</h3>
                    <p className="text-sm text-white/90">{study.challenge}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-1">Solution:</div>
                      <p className="font-semibold text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-1">Investment:</div>
                      <p className="font-bold text-lg text-maximax-pink">{study.investment}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-semibold mb-3">Results ({study.results.timeframe}):</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Foot Traffic:</span>
                          <span className="font-bold text-green-600">{study.results.footTraffic}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Sales:</span>
                          <span className="font-bold text-green-600">{study.results.sales}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">ROI:</span>
                          <span className="font-bold text-maximax-cyan text-lg">{study.results.roi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-maximax-pink" />
                Quick ROI Calculator: Mobile Billboards vs. Other Methods
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-4">$5,000 Monthly Budget Comparison:</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Mobile Billboards</span>
                        <span className="text-maximax-pink font-bold">$29,850</span>
                      </div>
                      <div className="text-sm text-gray-600">Expected Return (5.97x ROI)</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Social Media</span>
                        <span className="text-gray-700 font-bold">$14,000</span>
                      </div>
                      <div className="text-sm text-gray-600">Expected Return (2.80x ROI)</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Google Ads</span>
                        <span className="text-gray-700 font-bold">$10,000</span>
                      </div>
                      <div className="text-sm text-gray-600">Expected Return (2.00x ROI)</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold mb-4">Why Mobile Billboards Win:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-maximax-cyan flex-shrink-0" />
                      <span className="text-sm">Can't be blocked, skipped, or ignored</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-maximax-pink flex-shrink-0" />
                      <span className="text-sm">Reaches 30,000-50,000 people daily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-maximax-cyan flex-shrink-0" />
                      <span className="text-sm">97% recall rate vs 10-20% for digital</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-maximax-pink flex-shrink-0" />
                      <span className="text-sm">GPS tracking for precise targeting</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                    className="btn-primary btn-lg w-full mt-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculate Your ROI
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                How to Start Your <span className="gradient-text-cyan">Local Advertising Campaign</span>
              </h2>
              <p className="text-lg text-gray-600">
                Follow this proven 5-step process to maximize your local advertising ROI
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Define Your Target Audience & Goals</h3>
                    <p className="text-gray-600 mb-3">
                      Identify your ideal customer demographics, their daily routes, and where they spend time. 
                      Set specific goals: brand awareness, foot traffic, or direct sales.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="font-semibold text-sm">Pro Tip:</span>
                      <span className="text-sm text-gray-700 ml-2">
                        In Florida, target seasonal residents Oct-Apr for 40% higher engagement.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Set Your Budget (5-10% of Revenue)</h3>
                    <p className="text-gray-600 mb-3">
                      Allocate 5-10% of gross revenue to marketing. Split 60/40 between high-visibility 
                      (mobile billboards) and targeted digital marketing for optimal results.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="font-semibold text-sm">Example:</span>
                      <span className="text-sm text-gray-700 ml-2">
                        $500K annual revenue = $2,500-5,000/month marketing budget.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Start with Mobile Billboard Advertising</h3>
                    <p className="text-gray-600 mb-3">
                      Launch with mobile billboards for immediate visibility and 5.97x ROI. Target high-traffic 
                      areas during peak hours. GPS tracking ensures you reach your audience.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="font-semibold text-sm">Quick Win:</span>
                      <span className="text-sm text-gray-700 ml-2">
                        Results visible within 48-72 hours of campaign launch.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Add Digital Marketing for Conversions</h3>
                    <p className="text-gray-600 mb-3">
                      Complement mobile billboards with Google Ads and social media to capture high-intent 
                      searches. Use retargeting to reach people who've seen your mobile ads.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="font-semibold text-sm">Integration Tip:</span>
                      <span className="text-sm text-gray-700 ml-2">
                        Use same messaging across all channels for 23% better recall.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Track, Measure, and Optimize</h3>
                    <p className="text-gray-600 mb-3">
                      Monitor foot traffic, phone calls, website visits, and sales. Use unique promo codes 
                      and GPS analytics to calculate exact ROI. Adjust routes and messaging based on data.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="font-semibold text-sm">Success Metric:</span>
                      <span className="text-sm text-gray-700 ml-2">
                        Expect 30-50% traffic increase within first 30 days.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Campaign Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-gray-600 mt-4">
                Free consultation • Campaign live in 48 hours • No contracts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Expert answers to your local advertising questions
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-sm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-maximax-cyan/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-maximax-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-3 text-gray-900 pr-8">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Dominate Your Local Market?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 500+ Florida businesses achieving 5.97x ROI with mobile billboard advertising. 
              Get your free consultation and custom strategy today.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5.97x</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">97%</div>
                <div className="text-sm text-white/80">Recall Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">48hrs</div>
                <div className="text-sm text-white/80">To Launch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K</div>
                <div className="text-sm text-white/80">Daily Impressions</div>
              </div>
            </div>

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
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No Contracts
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                5-Star Rated
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}