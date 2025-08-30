import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import Script from 'next/script'
import Link from 'next/link'
import { DollarSign, Building2, Briefcase, MapPin, CheckCircle, ArrowRight, TrendingUp, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Brickell Advertising Costs | Financial District Billboard Prices Miami',
  description: 'Brickell advertising costs from $899/day. Target Miami\'s financial district with mobile LED billboards. Reach executives, professionals, luxury consumers. 70% cheaper than Brickell Avenue static billboards.',
  keywords: [
    'Brickell advertising costs',
    'Brickell billboard prices',
    'Miami financial district advertising',
    'Brickell Avenue billboard cost',
    'Brickell City Centre advertising',
    'Mary Brickell Village billboard',
    'downtown Miami advertising rates',
    'financial district billboard Miami',
    'Brickell mobile billboard',
    'LED truck Brickell',
    'business district advertising Miami',
    'B2B advertising Brickell',
    'luxury advertising Miami',
    'professional services billboard',
    'Brickell real estate advertising'
  ],
  openGraph: {
    title: 'Brickell Advertising Costs - Miami Financial District Billboard Prices',
    description: 'Mobile LED billboards in Brickell from $899/day. Target 100,000+ professionals in Miami\'s financial district. Perfect for B2B, luxury brands, real estate.',
    url: 'https://maximaxmobileadvertising.com/markets/miami/brickell-advertising-costs',
    siteName: 'Maximax Advertising',
    images: [
      {
        url: '/images/brickell-billboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Brickell Miami Financial District Mobile Billboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brickell Billboard Costs - Target Miami\'s Business Elite',
    description: 'Reach 100,000+ professionals in Brickell. Mobile LED billboards from $899/day in Miami\'s financial hub.',
  },
  alternates: {
    canonical: 'https://maximaxmobileadvertising.com/markets/miami/brickell-advertising-costs',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AdvertisingAgency"],
  "name": "Maximax Advertising - Brickell Advertising Costs",
  "description": "Mobile billboard advertising in Brickell Miami Financial District. Target executives and professionals with LED billboard trucks.",
  "url": "https://maximaxmobileadvertising.com/markets/miami/brickell-advertising-costs",
  "telephone": "786-633-4449",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "areaServed": {
    "@type": "Place",
    "name": "Brickell",
    "description": "Brickell Financial District including Brickell Avenue, Mary Brickell Village, and Brickell City Centre"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Brickell Mobile Billboard Advertising",
      "description": "LED billboard trucks in Miami's Financial District"
    },
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "899",
      "priceCurrency": "USD",
      "unitText": "per day"
    }
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does advertising cost in Brickell Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile billboard advertising in Brickell starts at $899/day, with weekly rates from $699/day. This is 70% less than static billboards on Brickell Avenue which cost $5,000-$12,000/month. Rush hour campaigns (7-9am, 5-7pm) maximize exposure to 100,000+ professionals."
      }
    },
    {
      "@type": "Question",
      "name": "What Brickell areas can mobile billboards cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our mobile billboards cover all Brickell hotspots including Brickell Avenue (25th to 8th Street), Mary Brickell Village, Brickell City Centre, Financial District towers, and connections to Downtown Miami. We target office buildings, luxury condos, and high-end retail areas."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to advertise in Brickell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weekday rush hours (7-9am and 5-7pm) offer maximum visibility to professionals. Lunch hours (11:30am-2pm) capture foot traffic. Happy hour (5-8pm) reaches the after-work crowd. Brickell is less active on weekends, making weekday campaigns most effective."
      }
    }
  ]
}

const brickellStats = {
  professionals: '100,000+',
  avgIncome: '$120K+',
  businesses: '1,500+',
  residents: '80,000+',
  towers: '60+',
  restaurants: '200+'
}

const brickellRoutes = [
  {
    route: 'Brickell Avenue Corridor',
    coverage: 'Main financial artery',
    traffic: '50,000+ daily',
    bestFor: 'B2B, Financial Services, Luxury',
    peakHours: '7-9am, 5-7pm'
  },
  {
    route: 'Mary Brickell Village',
    coverage: 'Shopping & dining district',
    traffic: '30,000+ daily',
    bestFor: 'Retail, Restaurants, Services',
    peakHours: '11am-2pm, 5-10pm'
  },
  {
    route: 'Brickell City Centre',
    coverage: 'Luxury shopping complex',
    traffic: '25,000+ daily',
    bestFor: 'Luxury Brands, High-End Retail',
    peakHours: '10am-9pm'
  },
  {
    route: 'Financial District Loop',
    coverage: 'Office towers circuit',
    traffic: '40,000+ daily',
    bestFor: 'B2B Services, Recruitment',
    peakHours: '7-9am, 12-1pm, 5-7pm'
  }
]

const targetAudiences = [
  {
    segment: 'C-Suite Executives',
    percentage: '15%',
    avgIncome: '$250K+',
    interests: 'Luxury, Investment, Travel'
  },
  {
    segment: 'Finance Professionals',
    percentage: '35%',
    avgIncome: '$150K+',
    interests: 'Wealth Management, Real Estate'
  },
  {
    segment: 'Tech Workers',
    percentage: '25%',
    avgIncome: '$120K+',
    interests: 'Innovation, Startups, Apps'
  },
  {
    segment: 'Legal Professionals',
    percentage: '15%',
    avgIncome: '$180K+',
    interests: 'Professional Services'
  },
  {
    segment: 'Luxury Residents',
    percentage: '10%',
    avgIncome: '$200K+',
    interests: 'Lifestyle, Dining, Shopping'
  }
]

const pricingPackages = [
  {
    name: 'Rush Hour Special',
    timing: '7-9am & 5-7pm',
    price: '$1,299/day',
    features: ['Peak professional traffic', 'Maximum visibility', 'Guaranteed impressions'],
    best: false
  },
  {
    name: 'Business Day',
    timing: '7am-7pm',
    price: '$999/day',
    features: ['Full business hours', 'Lunch crowd included', 'Evening happy hour'],
    best: true
  },
  {
    name: 'Weekly Executive',
    timing: '5 business days',
    price: '$3,995/week',
    features: ['Monday-Friday coverage', 'All peak hours', '20% discount included'],
    best: false
  },
  {
    name: 'Monthly Domination',
    timing: '20 business days',
    price: '$13,980/month',
    features: ['Maximum brand presence', 'Flexible scheduling', '30% discount included'],
    best: false
  }
]

export default function BrickellAdvertisingCostsPage() {
  return (
    <>
      <Script
        id="schema-brickell"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="schema-faq-brickell"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-maximax-cyan" />
                <span className="text-maximax-cyan font-semibold">Brickell Financial District</span>
              </div>
              <h1 className="text-white mb-6">
                Brickell <span className="gradient-text-premium">Advertising Costs</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Reach 100,000+ Professionals in Miami's Financial Hub
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Mobile LED billboards in Brickell deliver your message to Miami's business elite - executives, 
                entrepreneurs, and high-income professionals. Target office towers during rush hour, Mary Brickell 
                Village at lunch, or Brickell City Centre shoppers. Our dynamic displays command attention in 
                this fast-paced financial district where decision-makers work and live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                  className="btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Brickell Quote
                </a>
                <Link href="/contact" className="btn-accent btn-lg">
                  View B2B Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brickell Stats */}
        <section className="section py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">{brickellStats.professionals}</div>
                <div className="text-sm text-gray-600">Daily Workers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">{brickellStats.avgIncome}</div>
                <div className="text-sm text-gray-600">Avg Income</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">{brickellStats.businesses}</div>
                <div className="text-sm text-gray-600">Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">{brickellStats.residents}</div>
                <div className="text-sm text-gray-600">Residents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">{brickellStats.towers}</div>
                <div className="text-sm text-gray-600">Office Towers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">$899</div>
                <div className="text-sm text-gray-600">Starting Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Brickell Business District <span className="gradient-text">Advertising Packages</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic pricing designed to maximize your reach to Miami's business professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPackages.map((pkg, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-6 ${pkg.best ? 'ring-2 ring-maximax-cyan' : ''}`}>
                  {pkg.best && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-maximax-cyan to-maximax-pink text-white text-sm font-semibold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                  <div className="text-sm text-gray-600 mb-3">{pkg.timing}</div>
                  <div className="text-3xl font-bold text-maximax-pink mb-4">{pkg.price}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                    className={`btn w-full ${pkg.best ? 'btn-primary' : 'btn-secondary'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choose Package
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-lg p-8 border border-maximax-pink/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-xl mb-4">Why Brickell Commands Premium Rates</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-maximax-pink flex-shrink-0 mt-0.5" />
                      <span>Highest concentration of decision-makers in Florida</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                      <span>Average household income exceeds $120,000</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-maximax-pink flex-shrink-0 mt-0.5" />
                      <span>Home to 50+ Fortune 500 regional headquarters</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="font-bold mb-4">ROI Calculator Example</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    A B2B software company targeting financial professionals:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Weekly Investment:</span>
                      <span className="font-semibold">$3,995</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Impressions Generated:</span>
                      <span className="font-semibold">250,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost Per Impression:</span>
                      <span className="font-semibold">$0.016</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t font-bold">
                      <span>One Client Value:</span>
                      <span className="text-maximax-cyan">$50,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Routes */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Strategic Brickell <span className="gradient-text-cyan">Advertising Routes</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Precision-targeted routes to reach Brickell's diverse professional ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {brickellRoutes.map((route, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{route.route}</h3>
                      <p className="text-sm text-gray-600">{route.coverage}</p>
                    </div>
                    <MapPin className="w-5 h-5 text-maximax-pink flex-shrink-0" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Daily Traffic</div>
                      <div className="font-semibold text-maximax-cyan">{route.traffic}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Peak Hours</div>
                      <div className="font-semibold">{route.peakHours}</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm"><span className="font-semibold">Best For:</span> {route.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Brickell Avenue Special Focus */}
            <div className="bg-gradient-to-br from-maximax-cyan/5 to-maximax-pink/5 rounded-lg p-8">
              <h3 className="font-bold text-2xl mb-6">Brickell Avenue: The Billion Dollar Boulevard</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Clock className="w-8 h-8 text-maximax-pink mb-3" />
                  <h4 className="font-bold mb-2">Rush Hour Gridlock Advantage</h4>
                  <p className="text-sm text-gray-700">
                    Heavy traffic during peak hours means extended viewing time. Commuters spend 15-30 minutes 
                    on Brickell Avenue, ensuring multiple exposures to your message.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Target className="w-8 h-8 text-maximax-cyan mb-3" />
                  <h4 className="font-bold mb-2">Precision B2B Targeting</h4>
                  <p className="text-sm text-gray-700">
                    Target specific office towers housing your ideal clients. From Wells Fargo Center to 
                    Brickell City Centre, reach decision-makers where they work.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <TrendingUp className="w-8 h-8 text-maximax-pink mb-3" />
                  <h4 className="font-bold mb-2">After-Work Opportunities</h4>
                  <p className="text-sm text-gray-700">
                    Happy hour culture thrives in Brickell. Target professionals unwinding at Mary Brickell 
                    Village or upscale restaurants from 5-8pm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audiences */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Who You'll Reach in <span className="gradient-text">Brickell</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Brickell's professional demographic offers unmatched purchasing power
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {targetAudiences.map((audience, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-2">{audience.segment}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Percentage:</span>
                        <span className="font-semibold">{audience.percentage}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Avg Income:</span>
                        <span className="font-semibold text-maximax-cyan">{audience.avgIncome}</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold">Interests:</span> {audience.interests}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-lg p-8">
                <h3 className="font-bold text-xl mb-4">Brickell Lifestyle Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Work Culture</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                        <span>70% work in finance, law, or tech</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                        <span>Average workday: 7am-7pm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                        <span>85% have college degrees or higher</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Living & Spending</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-pink flex-shrink-0 mt-0.5" />
                        <span>60% live in luxury high-rises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-pink flex-shrink-0 mt-0.5" />
                        <span>Dining budget: $2,000+/month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-pink flex-shrink-0 mt-0.5" />
                        <span>45% own luxury vehicles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Perfect for These <span className="gradient-text-cyan">Brickell Businesses</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <h3 className="font-bold mb-2">Financial Services</h3>
                  <p className="text-sm text-gray-600">Wealth management & investment</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="font-bold mb-2">Law Firms</h3>
                  <p className="text-sm text-gray-600">Corporate & litigation services</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-bold mb-2">Real Estate</h3>
                  <p className="text-sm text-gray-600">Luxury condos & commercial</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="font-bold mb-2">B2B Services</h3>
                  <p className="text-sm text-gray-600">Consulting & professional</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="font-bold mb-2">Luxury Brands</h3>
                  <p className="text-sm text-gray-600">High-end retail & services</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍷</span>
                  </div>
                  <h3 className="font-bold mb-2">Fine Dining</h3>
                  <p className="text-sm text-gray-600">Upscale restaurants & bars</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏋️</span>
                  </div>
                  <h3 className="font-bold mb-2">Premium Fitness</h3>
                  <p className="text-sm text-gray-600">Boutique gyms & wellness</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h3 className="font-bold mb-2">Luxury Auto</h3>
                  <p className="text-sm text-gray-600">Premium car sales & leasing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Success Story: Law Firm Recruitment Campaign</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3">The Challenge</h3>
                    <p className="text-gray-700 mb-4">
                      A prestigious Miami law firm needed to recruit senior attorneys from competing firms 
                      in Brickell's legal district during a competitive hiring season.
                    </p>
                    <h3 className="font-bold mb-3">The Solution</h3>
                    <p className="text-gray-700">
                      Deployed mobile billboards during morning rush hour (7-9am) and lunch hours (12-2pm) 
                      targeting specific office towers housing competitor firms. Creative featured firm 
                      achievements and "Now Hiring Senior Partners" messaging.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-maximax-pink/5 to-maximax-cyan/5 rounded-lg p-6">
                    <h3 className="font-bold mb-4">Results After 2 Weeks</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span>Qualified Inquiries</span>
                        <span className="font-bold text-maximax-cyan">47</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span>Partner-Level Applications</span>
                        <span className="font-bold text-maximax-pink">12</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span>Successful Hires</span>
                        <span className="font-bold text-maximax-cyan">3</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span>Campaign Investment</span>
                        <span className="font-bold">$7,990</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Value of Hires</span>
                        <span className="font-bold text-green-600">$1.5M+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Brickell Advertising <span className="gradient-text">FAQs</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">How much does advertising cost in Brickell Miami?</h3>
                  <p className="text-gray-700">
                    Mobile billboard advertising in Brickell starts at $899/day for standard hours, with rush hour 
                    packages at $1,299/day. Weekly business packages run $3,995 (Monday-Friday), offering 20% savings. 
                    This is 70% less than static billboards on Brickell Avenue which cost $5,000-$12,000/month. 
                    Our rates include everything: truck, driver, fuel, and GPS tracking.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What Brickell areas can mobile billboards cover?</h3>
                  <p className="text-gray-700">
                    Our mobile billboards cover all key Brickell locations: Brickell Avenue (25th to 8th Street), 
                    Mary Brickell Village shopping and dining district, Brickell City Centre luxury mall, Financial 
                    District office towers, Brickell Key, and connections to Downtown Miami. We create custom routes 
                    targeting specific buildings or business clusters.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">When is the best time to advertise in Brickell?</h3>
                  <p className="text-gray-700">
                    Weekday rush hours (7-9am and 5-7pm) offer maximum visibility to 100,000+ professionals. 
                    Lunch hours (11:30am-2pm) capture foot traffic at Mary Brickell Village. Happy hour (5-8pm) 
                    reaches the after-work crowd. Brickell is significantly less active on weekends, making 
                    Monday-Friday campaigns most cost-effective for B2B advertisers.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What types of businesses succeed with Brickell advertising?</h3>
                  <p className="text-gray-700">
                    B2B services, financial firms, law offices, luxury real estate, high-end restaurants, and 
                    premium brands see excellent ROI in Brickell. The demographic (average income $120K+, 85% 
                    college-educated) responds to professional services, investment opportunities, and luxury 
                    lifestyle offerings. Tech companies also use Brickell billboards for recruitment.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Can I target specific office buildings in Brickell?</h3>
                  <p className="text-gray-700">
                    Yes! We can create routes focusing on specific towers like Wells Fargo Center, Brickell City 
                    Centre offices, Four Seasons Tower, or SLS Brickell. Our GPS tracking ensures your billboard 
                    spends maximum time near your target buildings during arrival (7-9am), lunch (12-2pm), and 
                    departure (5-7pm) times when visibility is highest.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">How does Brickell traffic affect billboard visibility?</h3>
                  <p className="text-gray-700">
                    Brickell's notorious rush hour traffic is actually an advantage for mobile billboards. Slow-moving 
                    traffic on Brickell Avenue means extended viewing times - commuters see your message for 30-60 
                    seconds instead of the typical 3-5 seconds. This increased dwell time significantly improves 
                    message retention and response rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-padding bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">
                Reach Brickell's <span className="gradient-text-premium">Business Elite Today</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Target 100,000+ professionals with mobile billboards in Miami's Financial District
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                  className="btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Brickell Quote
                </a>
                <a href="tel:786-633-4449" className="btn-accent btn-lg">
                  Call 786-633-4449
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Serving Brickell Avenue, Mary Brickell Village, Brickell City Centre, and the entire Financial District
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}