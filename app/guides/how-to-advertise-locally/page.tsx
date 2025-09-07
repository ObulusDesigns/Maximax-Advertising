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
  Clock,
  Truck,
  Calendar,
  Phone,
  ChevronRight,
  AlertCircle,
  Zap,
  PieChart,
  BookOpen,
  Lightbulb,
  MessageCircle,
  PlayCircle,
  FileText,
  Settings,
  Rocket
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Advertise Locally in Florida | Step-by-Step Guide for Small Business',
  description: 'Learn how to advertise locally with proven strategies for small business success. Complete guide to local business advertising in Miami, Fort Lauderdale, and Palm Beach with costs, ROI, and best practices.',
  keywords: 'how to advertise locally, local business advertising, best local advertising for small business, advertise small business locally, local advertising strategies, Florida local advertising, Miami business advertising, small business marketing',
  openGraph: {
    title: 'How to Advertise Locally: Complete Small Business Guide',
    description: 'Master local advertising with this comprehensive guide. Learn proven strategies, costs, and ROI for small business success in Florida.',
    type: 'article',
    publishedTime: '2025-01-07',
    authors: ['Maximax Advertising'],
    images: [
      {
        url: '/images/local-advertising-how-to.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Advertise Locally Guide'
      }
    ]
  },
  alternates: {
    canonical: 'https://maximaxmobileadvertising.com/guides/how-to-advertise-locally'
  }
}

// Small business advertising data
const smallBusinessStats = {
  averageBudget: "$2,500-5,000/month",
  recommendedAllocation: "5-10% of revenue",
  bestROI: "Mobile Billboards (5.97x)",
  timeToResults: "48-72 hours",
  successRate: "87% see positive ROI"
}

// Step-by-step advertising process
const advertisingSteps = [
  {
    title: "Audit Your Current Marketing",
    timeframe: "Day 1-2",
    tasks: [
      "Calculate current customer acquisition cost",
      "Review past marketing performance",
      "Identify what's working and what's not",
      "Survey customers on how they found you"
    ],
    tools: ["Google Analytics", "Customer surveys", "Sales data"],
    expectedOutcome: "Clear baseline metrics and improvement areas"
  },
  {
    title: "Define Your Local Market",
    timeframe: "Day 3-4",
    tasks: [
      "Map your service area radius",
      "Identify top customer ZIP codes",
      "Research local competition",
      "Define ideal customer profile"
    ],
    tools: ["Google Maps", "Census data", "Competition analysis"],
    expectedOutcome: "Targeted geographic and demographic focus"
  },
  {
    title: "Set SMART Goals",
    timeframe: "Day 5",
    tasks: [
      "Define specific revenue targets",
      "Set customer acquisition goals",
      "Establish brand awareness metrics",
      "Create tracking mechanisms"
    ],
    tools: ["Goal setting templates", "KPI dashboards"],
    expectedOutcome: "Measurable objectives with timelines"
  },
  {
    title: "Allocate Your Budget",
    timeframe: "Day 6",
    tasks: [
      "Calculate 5-10% of revenue for marketing",
      "Split budget across channels (60/40 rule)",
      "Reserve testing budget (20%)",
      "Plan for seasonal adjustments"
    ],
    tools: ["Budget calculator", "ROI projections"],
    expectedOutcome: "Strategic budget allocation plan"
  },
  {
    title: "Launch Mobile Billboard Campaign",
    timeframe: "Day 7-14",
    tasks: [
      "Design eye-catching creative",
      "Select high-traffic routes",
      "Schedule optimal times",
      "Implement tracking codes"
    ],
    tools: ["Design templates", "Route planning", "GPS tracking"],
    expectedOutcome: "Live campaign reaching 30,000+ daily"
  },
  {
    title: "Implement Digital Support",
    timeframe: "Day 15-21",
    tasks: [
      "Set up Google My Business",
      "Launch Google Ads campaign",
      "Create social media presence",
      "Implement retargeting pixels"
    ],
    tools: ["Google Ads", "Facebook Ads", "Instagram"],
    expectedOutcome: "Multi-channel presence capturing intent"
  },
  {
    title: "Track and Optimize",
    timeframe: "Ongoing",
    tasks: [
      "Monitor daily metrics",
      "A/B test messaging",
      "Adjust routes based on data",
      "Calculate ROI weekly"
    ],
    tools: ["Analytics dashboard", "A/B testing tools"],
    expectedOutcome: "Continuous improvement and ROI growth"
  }
]

// Local advertising channels breakdown
const advertisingChannels = [
  {
    channel: "Mobile Billboards",
    budget: "$3,000-8,000/month",
    reach: "30,000-50,000 daily",
    setupTime: "48 hours",
    bestFor: "Brand awareness, grand openings, events",
    pros: ["Highest recall rate (97%)", "Can't be blocked", "GPS tracking"],
    cons: ["Higher upfront cost", "Weather dependent"],
    roi: "5.97x average",
    recommendation: "Essential - allocate 60% of budget"
  },
  {
    channel: "Google My Business",
    budget: "Free",
    reach: "500-5,000 monthly",
    setupTime: "1-2 weeks",
    bestFor: "Local searches, reviews, directions",
    pros: ["Free listing", "Shows in map searches", "Customer reviews"],
    cons: ["Limited control", "Requires maintenance"],
    roi: "N/A (foundational)",
    recommendation: "Mandatory - set up immediately"
  },
  {
    channel: "Google Ads",
    budget: "$500-3,000/month",
    reach: "1,000-10,000 clicks",
    setupTime: "24 hours",
    bestFor: "High-intent searches, services",
    pros: ["Intent-based", "Measurable", "Flexible budget"],
    cons: ["Click fraud", "Competitive keywords expensive"],
    roi: "2.00x average",
    recommendation: "Important - allocate 20% of budget"
  },
  {
    channel: "Facebook/Instagram Ads",
    budget: "$500-2,000/month",
    reach: "10,000-50,000 impressions",
    setupTime: "24 hours",
    bestFor: "Demographics targeting, retargeting",
    pros: ["Precise targeting", "Visual format", "Engagement"],
    cons: ["Ad fatigue", "iOS tracking issues"],
    roi: "2.80x average",
    recommendation: "Supportive - allocate 15% of budget"
  },
  {
    channel: "Local SEO",
    budget: "$500-2,000/month",
    reach: "Organic growth",
    setupTime: "3-6 months",
    bestFor: "Long-term visibility",
    pros: ["Sustainable", "Credibility", "Free traffic"],
    cons: ["Slow results", "Ongoing effort"],
    roi: "5.20x long-term",
    recommendation: "Investment - allocate 5% of budget"
  }
]

// Florida-specific strategies
const floridaStrategies = [
  {
    market: "Miami-Dade",
    population: "2.7M",
    strategy: "Bilingual campaigns essential (Spanish/English). Focus on Brickell for business, South Beach for tourists, Wynwood for millennials.",
    bestTimes: "7-9 AM, 5-8 PM weekdays; All day weekends",
    topLocations: ["Brickell", "South Beach", "Wynwood", "Coral Gables", "Downtown"],
    seasonality: "Year-round with peak Oct-April"
  },
  {
    market: "Broward County",
    population: "1.9M",
    strategy: "Target affluent beach communities and growing suburban areas. Focus on Las Olas, Fort Lauderdale Beach, and Pembroke Pines.",
    bestTimes: "7-9 AM, 4-7 PM weekdays; Beach areas on weekends",
    topLocations: ["Fort Lauderdale Beach", "Las Olas", "Hollywood", "Pembroke Pines"],
    seasonality: "Peak season Nov-April"
  },
  {
    market: "Palm Beach County",
    population: "1.5M",
    strategy: "Upscale messaging for affluent retirees and families. Target Worth Avenue, Clematis Street, and coastal communities.",
    bestTimes: "10 AM-2 PM, 4-7 PM daily",
    topLocations: ["Worth Avenue", "Clematis Street", "Delray Atlantic Ave", "Boca Town Center"],
    seasonality: "Strong seasonal market Oct-May"
  }
]

// Success metrics
const successMetrics = [
  {
    metric: "Cost Per Acquisition (CPA)",
    formula: "Total Ad Spend ÷ New Customers",
    benchmark: "$50-200 depending on industry",
    howToTrack: "Use unique promo codes, call tracking numbers"
  },
  {
    metric: "Return on Ad Spend (ROAS)",
    formula: "Revenue from Ads ÷ Ad Spend",
    benchmark: "3:1 minimum, 5:1 excellent",
    howToTrack: "Attribution tracking, sales data analysis"
  },
  {
    metric: "Brand Recall Rate",
    formula: "People who remember ad ÷ Total exposed",
    benchmark: "Mobile billboards: 97%, Digital: 10-20%",
    howToTrack: "Survey customers, brand lift studies"
  },
  {
    metric: "Foot Traffic Increase",
    formula: "(New Traffic - Baseline) ÷ Baseline × 100",
    benchmark: "30-50% increase is excellent",
    howToTrack: "Door counters, POS data, appointments"
  }
]

// Common mistakes to avoid
const commonMistakes = [
  {
    mistake: "Spreading budget too thin",
    impact: "Poor results across all channels",
    solution: "Focus on 2-3 channels maximum, prioritize high-ROI options"
  },
  {
    mistake: "No tracking mechanisms",
    impact: "Can't measure ROI or optimize",
    solution: "Implement tracking codes, unique phone numbers, promo codes"
  },
  {
    mistake: "Ignoring mobile users",
    impact: "Missing 70% of local searches",
    solution: "Mobile-optimized website, click-to-call buttons, mobile ads"
  },
  {
    mistake: "Set it and forget it",
    impact: "Declining performance over time",
    solution: "Weekly optimization, A/B testing, route adjustments"
  },
  {
    mistake: "Wrong timing",
    impact: "Wasted impressions",
    solution: "Advertise when customers are active, not just 9-5"
  }
]

// FAQ data
const faqs = [
  {
    question: "How much should a small business spend on local advertising?",
    answer: "Small businesses should allocate 5-10% of gross revenue to marketing, with 60-70% dedicated to local advertising. For a business making $500,000 annually, that's $2,500-5,000 monthly for marketing, with $1,500-3,500 for local advertising. Start with mobile billboards (60%) for awareness and digital ads (40%) for conversions."
  },
  {
    question: "What's the fastest way to get local customers?",
    answer: "Mobile billboard advertising delivers the fastest results, typically within 48-72 hours of launch. Unlike SEO (3-6 months) or social media growth (weeks to months), mobile billboards immediately put your message in front of 30,000-50,000 people daily in your target area. Combine with Google Ads for immediate online visibility."
  },
  {
    question: "How do I compete with bigger businesses in my area?",
    answer: "Focus on hyperlocal targeting and personalized messaging that big businesses can't match. Use mobile billboards to dominate specific neighborhoods, leverage your local knowledge in messaging, offer community-specific promotions, and build relationships through consistent local presence. Your agility and local focus are competitive advantages."
  },
  {
    question: "Should I advertise year-round or seasonally?",
    answer: "Maintain a baseline presence year-round (40% of budget) and increase spending during peak seasons (60% of budget). In Florida, October-April sees 40% higher engagement due to seasonal residents and tourists. Never go completely dark - consistent visibility builds brand equity and captures customers when competitors pull back."
  },
  {
    question: "How do I know if my local advertising is working?",
    answer: "Track these key indicators: foot traffic increases (door counters), phone call volume (call tracking), website traffic from local IPs, unique promo code redemptions, and revenue lift during campaign periods. Mobile billboards with GPS tracking provide exact impression counts and route analytics. Aim for 3:1 ROAS minimum."
  },
  {
    question: "What's better: one big campaign or consistent smaller efforts?",
    answer: "Consistent smaller efforts outperform sporadic big campaigns. The 'mere exposure effect' shows people need 5-7 touchpoints before taking action. Regular mobile billboard presence combined with steady digital advertising builds familiarity and trust. Reserve only 20% of budget for special campaign bursts."
  }
]

export default function HowToAdvertiseLocallyGuide() {
  // Schema markup for How-To
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Advertise Locally for Small Business Success",
    "description": "Complete guide to local advertising for small businesses in Florida",
    "totalTime": "PT720H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "2500-5000"
    },
    "step": advertisingSteps.map((step, index) => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.tasks.join(", "),
      "url": `#step-${index + 1}`
    }))
  }

  // FAQ Schema
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

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <BookOpen className="w-5 h-5 text-maximax-cyan" />
              <span className="text-maximax-cyan font-semibold uppercase text-sm tracking-wide">
                Complete Small Business Guide
              </span>
            </div>
            
            <h1 className="text-white mb-6">
              How to Advertise Locally: <br />
              <span className="gradient-text">Step-by-Step Small Business Guide</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Master local advertising with proven strategies that deliver 5.97x ROI. 
              From zero to profitable in 30 days with this comprehensive Florida business guide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Campaign
                <Rocket className="w-5 h-5" />
              </a>
              <a href="#step-by-step" className="btn-secondary btn-lg">
                Follow the Guide
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-xl font-bold text-maximax-pink mb-1">{smallBusinessStats.averageBudget}</div>
                <div className="text-xs text-gray-400 uppercase">Avg Budget</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-xl font-bold text-maximax-cyan mb-1">{smallBusinessStats.recommendedAllocation}</div>
                <div className="text-xs text-gray-400 uppercase">Of Revenue</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-xl font-bold text-maximax-pink mb-1">{smallBusinessStats.bestROI}</div>
                <div className="text-xs text-gray-400 uppercase">Best ROI</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-xl font-bold text-maximax-cyan mb-1">{smallBusinessStats.timeToResults}</div>
                <div className="text-xs text-gray-400 uppercase">First Results</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-xl font-bold text-maximax-pink mb-1">{smallBusinessStats.successRate}</div>
                <div className="text-xs text-gray-400 uppercase">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Checklist */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-maximax-pink" />
                Quick Start: Your First 48 Hours
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-4">Immediate Actions (Do Today):</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Calculate your budget:</span>
                        <span className="text-gray-600 block text-sm">5-10% of monthly revenue</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Define your service area:</span>
                        <span className="text-gray-600 block text-sm">Map 5-mile radius from location</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Identify peak times:</span>
                        <span className="text-gray-600 block text-sm">When are customers most active?</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Create tracking system:</span>
                        <span className="text-gray-600 block text-sm">Unique phone, promo codes</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-4">Launch Actions (Within 48 Hours):</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Book mobile billboard:</span>
                        <span className="text-gray-600 block text-sm">60% of budget, immediate visibility</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Set up Google My Business:</span>
                        <span className="text-gray-600 block text-sm">Free, essential for local search</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Launch Google Ads:</span>
                        <span className="text-gray-600 block text-sm">20% of budget, capture intent</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Create landing page:</span>
                        <span className="text-gray-600 block text-sm">Dedicated page for campaign</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="tel:5617200521"
                  className="btn-primary btn-lg"
                >
                  <Phone className="w-5 h-5" />
                  Get Started Now: (561) 720-0521
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="step-by-step" className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                7-Step Process to <span className="gradient-text">Local Advertising Success</span>
              </h2>
              <p className="text-lg text-gray-600">
                Follow this proven roadmap to transform your local marketing in 30 days
              </p>
            </div>

            <div className="space-y-8">
              {advertisingSteps.map((step, index) => (
                <div key={index} id={`step-${index + 1}`} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 p-6 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="text-sm text-gray-600">Timeframe: {step.timeframe}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Clock className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Tasks:</h4>
                        <ul className="space-y-2">
                          {step.tasks.map((task, tIndex) => (
                            <li key={tIndex} className="text-sm text-gray-700 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Tools Needed:</h4>
                        <ul className="space-y-2">
                          {step.tools.map((tool, toolIndex) => (
                            <li key={toolIndex} className="text-sm text-gray-700 flex items-start gap-2">
                              <Settings className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Expected Outcome:</h4>
                        <div className="bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5 rounded-lg p-4">
                          <p className="text-sm text-gray-700">{step.expectedOutcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Ready to implement this proven system?</p>
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Expert Guidance
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Comparison */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Local Advertising <span className="gradient-text-cyan">Channel Breakdown</span>
              </h2>
              <p className="text-lg text-gray-600">
                Detailed analysis of each channel with budget recommendations
              </p>
            </div>

            <div className="space-y-6">
              {advertisingChannels.map((channel, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <h3 className="font-bold text-lg mb-2">{channel.channel}</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Budget:</span>
                          <span className="block font-semibold">{channel.budget}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">ROI:</span>
                          <span className="block font-bold text-maximax-pink">{channel.roi}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Setup:</span>
                          <span className="block font-semibold">{channel.setupTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-green-600 text-sm">Pros:</h4>
                          <ul className="space-y-1">
                            {channel.pros.map((pro, pIndex) => (
                              <li key={pIndex} className="text-xs text-gray-700 flex items-start gap-1">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-red-600 text-sm">Cons:</h4>
                          <ul className="space-y-1">
                            {channel.cons.map((con, cIndex) => (
                              <li key={cIndex} className="text-xs text-gray-700 flex items-start gap-1">
                                <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="text-xs text-gray-600">Best for: </span>
                        <span className="text-xs font-semibold">{channel.bestFor}</span>
                      </div>
                    </div>
                    
                    <div className="md:col-span-1">
                      <div className={`rounded-lg p-4 ${
                        channel.recommendation.includes('Essential') ? 'bg-gradient-to-br from-maximax-pink/10 to-maximax-cyan/10 border border-maximax-pink/30' :
                        channel.recommendation.includes('Mandatory') ? 'bg-green-50 border border-green-200' :
                        channel.recommendation.includes('Important') ? 'bg-blue-50 border border-blue-200' :
                        'bg-gray-100 border border-gray-300'
                      }`}>
                        <div className="text-sm font-bold mb-1">Recommendation:</div>
                        <p className="text-xs">{channel.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-maximax-pink" />
                Optimal Budget Allocation for $5,000/month:
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-maximax-pink">$3,000</div>
                  <div className="text-sm text-gray-600">Mobile Billboards (60%)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-maximax-cyan">$1,000</div>
                  <div className="text-sm text-gray-600">Google Ads (20%)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-maximax-pink">$750</div>
                  <div className="text-sm text-gray-600">Social Media (15%)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-maximax-cyan">$250</div>
                  <div className="text-sm text-gray-600">Local SEO (5%)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$0</div>
                  <div className="text-sm text-gray-600">GMB (Free)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Market Strategies */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Florida Market <span className="gradient-text">Strategies</span>
              </h2>
              <p className="text-lg text-gray-600">
                Location-specific tactics for maximum local impact
              </p>
            </div>

            <div className="grid gap-6">
              {floridaStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 p-6 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-maximax-pink" />
                          {strategy.market}
                        </h3>
                        <p className="text-sm text-gray-600">Population: {strategy.population}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Peak Season:</div>
                        <div className="font-semibold">{strategy.seasonality}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Strategy:</h4>
                      <p className="text-gray-700">{strategy.strategy}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Best Times:</h4>
                        <p className="text-sm text-gray-600">{strategy.bestTimes}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Top Locations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {strategy.topLocations.map((location, lIndex) => (
                            <span key={lIndex} className="bg-gray-100 px-2 py-1 rounded text-xs">
                              {location}
                            </span>
                          ))}
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

      {/* Success Metrics */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Measuring <span className="gradient-text-cyan">Success</span>
              </h2>
              <p className="text-lg text-gray-600">
                Key metrics to track your local advertising performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink/20 to-maximax-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-maximax-pink" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">{metric.metric}</h3>
                      <div className="text-sm space-y-2">
                        <div>
                          <span className="text-gray-600">Formula:</span>
                          <span className="block font-mono text-xs bg-gray-100 rounded px-2 py-1 mt-1">
                            {metric.formula}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Benchmark:</span>
                          <span className="block font-semibold text-sm">{metric.benchmark}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">How to Track:</span>
                          <span className="block text-sm">{metric.howToTrack}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5 rounded-2xl p-6 border border-gray-200 text-center">
              <h3 className="font-bold mb-3">Track Your Campaign Performance</h3>
              <p className="text-gray-600 mb-4">
                Get real-time analytics and ROI tracking with our GPS-enabled mobile billboards
              </p>
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Analytics Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Avoid These <span className="gradient-text">Common Mistakes</span>
              </h2>
              <p className="text-lg text-gray-600">
                Learn from others' errors to maximize your advertising success
              </p>
            </div>

            <div className="space-y-4">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <h3 className="font-bold text-red-600">Mistake:</h3>
                      </div>
                      <p className="text-sm text-gray-700">{mistake.mistake}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1 text-gray-600">Impact:</div>
                      <p className="text-sm text-gray-700">{mistake.impact}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-bold text-green-600">Solution:</span>
                      </div>
                      <p className="text-sm text-gray-700">{mistake.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                Frequently Asked <span className="gradient-text-cyan">Questions</span>
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

      {/* Resource Downloads */}
      <section className="section section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Free <span className="gradient-text">Resources</span> for Small Business Success
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-maximax-pink/20 to-maximax-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-8 h-8 text-maximax-pink" />
                  </div>
                  <h3 className="font-bold mb-2">Budget Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Calculate your optimal advertising budget
                  </p>
                  <a 
                    href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                    className="text-maximax-cyan font-semibold text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Template →
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-maximax-pink/20 to-maximax-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-maximax-cyan" />
                  </div>
                  <h3 className="font-bold mb-2">ROI Tracker</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Track and measure campaign performance
                  </p>
                  <a 
                    href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                    className="text-maximax-cyan font-semibold text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Spreadsheet →
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-maximax-pink/20 to-maximax-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <PlayCircle className="w-8 h-8 text-maximax-pink" />
                  </div>
                  <h3 className="font-bold mb-2">Video Guide</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    30-minute walkthrough of local advertising
                  </p>
                  <a 
                    href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                    className="text-maximax-cyan font-semibold text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Transform Your Local Business in 30 Days
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 500+ Florida small businesses achieving exceptional growth with strategic local advertising. 
              Get expert guidance and proven strategies tailored to your market.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">87%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5.97x</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">48hrs</div>
                <div className="text-sm text-white/80">To First Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:5617200521" 
                className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Start Today: (561) 720-0521
              </a>
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No Long-Term Contracts
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                100% Satisfaction Guarantee
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Expert Local Knowledge
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}