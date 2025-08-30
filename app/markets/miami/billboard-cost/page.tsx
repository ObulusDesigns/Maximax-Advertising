import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import Script from 'next/script'
import Link from 'next/link'
import { DollarSign, TrendingDown, Calculator, MapPin, CheckCircle, ArrowRight, BarChart3, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Does a Billboard Cost in Miami? | Miami Billboard Advertising Cost',
  description: 'Discover Miami billboard advertising costs. Mobile LED billboards are 70% cheaper than traditional billboards. Get transparent pricing for South Beach, Wynwood, Brickell, and Downtown Miami. Free quotes available.',
  keywords: [
    'how much does a billboard cost in Miami',
    'Miami billboard advertising cost',
    'billboard cost Miami',
    'Miami billboard prices',
    'billboard advertising Miami pricing',
    'Miami mobile billboard cost',
    'LED billboard truck Miami prices',
    'digital billboard Miami cost',
    'Miami outdoor advertising rates',
    'billboard rental Miami',
    'Miami advertising costs',
    'South Beach billboard cost',
    'Wynwood billboard prices',
    'Brickell advertising rates',
    'Downtown Miami billboard cost'
  ],
  openGraph: {
    title: 'Miami Billboard Cost - 70% Less Than Traditional Billboards',
    description: 'Get transparent Miami billboard advertising costs. Mobile LED billboards from $799/day. No hidden fees, no long contracts. Serving South Beach, Wynwood, Brickell.',
    url: 'https://maximaxmobileadvertising.com/markets/miami/billboard-cost',
    siteName: 'Maximax Advertising',
    images: [
      {
        url: '/images/miami-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Miami Mobile Billboard Truck Cost Comparison',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miami Billboard Cost - Save 70% with Mobile LED Billboards',
    description: 'Transparent Miami billboard pricing. Mobile LED trucks from $799/day vs $10,000+/month for static billboards.',
  },
  alternates: {
    canonical: 'https://maximaxmobileadvertising.com/markets/miami/billboard-cost',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AdvertisingAgency"],
  "name": "Maximax Advertising - Miami Billboard Cost",
  "description": "Affordable mobile billboard advertising in Miami. 70% cheaper than traditional billboards with transparent pricing.",
  "url": "https://maximaxmobileadvertising.com/markets/miami/billboard-cost",
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
  "areaServed": [
    {
      "@type": "City",
      "name": "Miami",
      "@id": "https://www.wikidata.org/wiki/Q8652"
    },
    {
      "@type": "Place",
      "name": "South Beach"
    },
    {
      "@type": "Place",
      "name": "Wynwood"
    },
    {
      "@type": "Place",
      "name": "Brickell"
    }
  ],
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Mobile Billboard Advertising",
      "description": "LED billboard trucks with GPS tracking in Miami"
    },
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "799",
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
      "name": "How much does a billboard cost in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile billboard advertising in Miami starts at $799/day, which is 70% less than traditional static billboards that cost $3,000-$15,000/month. Our LED billboard trucks provide better targeting and flexibility with no long-term contracts."
      }
    },
    {
      "@type": "Question",
      "name": "What areas in Miami can mobile billboards cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our mobile billboards cover all major Miami areas including South Beach, Wynwood, Brickell, Downtown Miami, Coconut Grove, Coral Gables, Miami Beach, and Aventura. GPS tracking ensures your ads reach your target neighborhoods."
      }
    },
    {
      "@type": "Question",
      "name": "How do Miami mobile billboard costs compare to digital billboards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital billboards in Miami cost $2,000-$10,000/month and you share screen time with 7-8 other advertisers. Mobile LED billboards cost $799-$1,499/day with 100% share of voice and the ability to target specific locations."
      }
    }
  ]
}

const costComparisonData = [
  {
    type: 'Mobile LED Billboard',
    dailyCost: '$799-$1,499',
    monthlyCost: '$4,794-$8,994',
    setupFee: '$0',
    contract: 'No minimum',
    shareOfVoice: '100%',
    targeting: 'GPS-tracked routes',
    flexibility: 'Change daily',
    recommended: true
  },
  {
    type: 'Traditional Static Billboard',
    dailyCost: 'N/A',
    monthlyCost: '$3,000-$15,000',
    setupFee: '$2,000+',
    contract: '12 months minimum',
    shareOfVoice: '100%',
    targeting: 'Fixed location',
    flexibility: 'Cannot change',
    recommended: false
  },
  {
    type: 'Digital Billboard',
    dailyCost: 'N/A',
    monthlyCost: '$2,000-$10,000',
    setupFee: '$500+',
    contract: '4 weeks minimum',
    shareOfVoice: '12.5%',
    targeting: 'Fixed location',
    flexibility: 'Weekly changes',
    recommended: false
  }
]

const miamiAreas = [
  { name: 'South Beach', traffic: 'Very High', bestFor: 'Tourism, Nightlife, Restaurants', priceRange: '$999-$1,499/day' },
  { name: 'Wynwood', traffic: 'High', bestFor: 'Art, Dining, Tech, Real Estate', priceRange: '$899-$1,299/day' },
  { name: 'Brickell', traffic: 'High', bestFor: 'Finance, Luxury, Real Estate', priceRange: '$899-$1,299/day' },
  { name: 'Downtown Miami', traffic: 'Very High', bestFor: 'B2B, Events, General Consumer', priceRange: '$799-$1,199/day' },
  { name: 'Coconut Grove', traffic: 'Medium', bestFor: 'Local Business, Dining, Retail', priceRange: '$799-$999/day' },
  { name: 'Coral Gables', traffic: 'Medium', bestFor: 'Professional Services, Healthcare', priceRange: '$799-$999/day' }
]

export default function MiamiBillboardCostPage() {
  return (
    <>
      <Script
        id="schema-billboard-cost"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-maximax-cyan" />
                <span className="text-maximax-cyan font-semibold">Miami Billboard Pricing</span>
              </div>
              <h1 className="text-white mb-6">
                How Much Does a <span className="gradient-text-premium">Billboard Cost in Miami?</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Mobile LED Billboards: 70% Less Than Traditional Billboard Advertising
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Get transparent Miami billboard advertising costs with no hidden fees. Our mobile LED billboard trucks 
                deliver better ROI than static billboards at a fraction of the cost. Serving South Beach, Wynwood, 
                Brickell, Downtown Miami, and all of Miami-Dade County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                  className="btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Miami Quote
                </a>
                <Link href="/contact" className="btn-accent btn-lg">
                  See Pricing Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Cost Summary */}
        <section className="section py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">$799+</div>
                <div className="text-sm text-gray-600">Daily Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">70%</div>
                <div className="text-sm text-gray-600">Less Than Static</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">$0</div>
                <div className="text-sm text-gray-600">Setup Fees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">No</div>
                <div className="text-sm text-gray-600">Long Contracts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Table */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Miami Billboard <span className="gradient-text">Cost Comparison</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how mobile LED billboards deliver better value than traditional and digital billboards in Miami
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
                    <th className="px-6 py-4 text-left">Billboard Type</th>
                    <th className="px-6 py-4 text-center">Daily Cost</th>
                    <th className="px-6 py-4 text-center">Monthly Cost</th>
                    <th className="px-6 py-4 text-center">Setup Fee</th>
                    <th className="px-6 py-4 text-center">Contract</th>
                    <th className="px-6 py-4 text-center">Share of Voice</th>
                    <th className="px-6 py-4 text-center">Targeting</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparisonData.map((item, index) => (
                    <tr key={index} className={`border-b ${item.recommended ? 'bg-maximax-cyan/5' : ''}`}>
                      <td className="px-6 py-4 font-semibold">
                        {item.type}
                        {item.recommended && (
                          <span className="ml-2 text-xs bg-maximax-cyan text-white px-2 py-1 rounded">BEST VALUE</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">{item.dailyCost}</td>
                      <td className="px-6 py-4 text-center font-semibold">{item.monthlyCost}</td>
                      <td className="px-6 py-4 text-center">{item.setupFee}</td>
                      <td className="px-6 py-4 text-center">{item.contract}</td>
                      <td className="px-6 py-4 text-center">{item.shareOfVoice}</td>
                      <td className="px-6 py-4 text-center">{item.targeting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-lg border border-maximax-pink/20">
              <div className="flex items-start gap-4">
                <Calculator className="w-6 h-6 text-maximax-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">ROI Calculator Insight</h3>
                  <p className="text-gray-700">
                    A typical Miami restaurant spending $5,000/month on a static billboard could reach 4x more customers 
                    with mobile billboards for the same budget, targeting lunch crowds in Brickell, dinner traffic in 
                    Wynwood, and late-night audiences in South Beach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Area-Specific Pricing */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Miami Area <span className="gradient-text-cyan">Billboard Pricing</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Target specific Miami neighborhoods with GPS-tracked mobile billboards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miamiAreas.map((area, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg">{area.name}</h3>
                    <MapPin className="w-5 h-5 text-maximax-pink" />
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Traffic Level:</span>
                      <span className="font-semibold">{area.traffic}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price Range:</span>
                      <span className="font-semibold text-maximax-cyan">{area.priceRange}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Best For:</span> {area.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-maximax-pink/5 to-maximax-cyan/5 rounded-lg p-8">
                <h3 className="font-bold text-xl mb-4">Miami Beach & Tourist Areas</h3>
                <p className="text-gray-700 mb-4">
                  South Beach, Ocean Drive, and Lincoln Road command premium rates due to year-round tourist traffic 
                  and high visibility. Perfect for hospitality, entertainment, and retail businesses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <span>30,000+ daily impressions during peak season</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <span>International audience exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <span>24/7 foot and vehicle traffic</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-maximax-cyan/5 to-maximax-pink/5 rounded-lg p-8">
                <h3 className="font-bold text-xl mb-4">Business Districts</h3>
                <p className="text-gray-700 mb-4">
                  Brickell, Downtown Miami, and Coral Gables offer excellent B2B advertising opportunities with 
                  high-income professional audiences during weekday rush hours.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-maximax-pink flex-shrink-0 mt-0.5" />
                    <span>Target decision-makers and executives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-maximax-pink flex-shrink-0 mt-0.5" />
                    <span>Rush hour traffic guarantees visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-maximax-pink flex-shrink-0 mt-0.5" />
                    <span>Repetitive exposure builds brand awareness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Why Mobile Billboards Are <span className="gradient-text">70% Cheaper</span>
                </h2>
                <p className="text-lg text-gray-600">
                  And deliver better results than traditional Miami billboards
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <TrendingDown className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">No Infrastructure Costs</h3>
                      <p className="text-gray-600">
                        Traditional billboards require expensive real estate leases, permits, and maintenance. 
                        Mobile billboards eliminate these overhead costs, passing savings to you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Better Targeting = Better ROI</h3>
                      <p className="text-gray-600">
                        Why pay for a fixed location when you can follow your customers? Target beaches in the 
                        morning, business districts at lunch, and entertainment areas at night.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">No Long-Term Contracts</h3>
                      <p className="text-gray-600">
                        Traditional billboards lock you into 12-month contracts. With mobile billboards, you can 
                        run campaigns for days, weeks, or months based on your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <BarChart3 className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">100% Share of Voice</h3>
                      <p className="text-gray-600">
                        Digital billboards rotate your ad with 7-8 competitors. Mobile LED billboards display 
                        only your message, all day long, maximizing impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Miami-Specific Benefits */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Miami's Unique <span className="gradient-text-cyan">Advertising Advantages</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Why mobile billboards work exceptionally well in the Magic City
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Year-Round Outdoor Weather</h3>
                  <p className="text-gray-700">
                    Miami's beautiful weather means people are outdoors year-round. Unlike northern cities where 
                    winter limits outdoor exposure, your mobile billboard campaigns work effectively 365 days a year, 
                    reaching beach-goers, outdoor diners, and pedestrians consistently.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">International Tourist Market</h3>
                  <p className="text-gray-700">
                    With over 24 million annual visitors, Miami offers unique exposure to international tourists. 
                    Mobile billboards in South Beach, Downtown, and near cruise ports reach affluent travelers from 
                    Latin America, Europe, and beyond - perfect for luxury brands and hospitality businesses.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Diverse Neighborhood Demographics</h3>
                  <p className="text-gray-700">
                    From the art scene in Wynwood to the financial district in Brickell, each Miami neighborhood has 
                    distinct demographics. Mobile billboards let you precisely target Cuban communities in Little Havana, 
                    young professionals in Brickell, or luxury shoppers in Bal Harbour.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Major Events & Conventions</h3>
                  <p className="text-gray-700">
                    Art Basel, Ultra Music Festival, Miami Beach Food & Wine Festival, and countless conventions bring 
                    targeted audiences to specific areas. Mobile billboards can capitalize on these events without the 
                    premium pricing of fixed event advertising.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Miami Billboard Cost <span className="gradient-text">FAQs</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">How much does a billboard cost in Miami?</h3>
                  <p className="text-gray-700">
                    Mobile billboard advertising in Miami starts at $799/day, which is 70% less than traditional static 
                    billboards that cost $3,000-$15,000/month. Our LED billboard trucks provide better targeting and 
                    flexibility with no long-term contracts. Prices vary based on areas covered and campaign duration, 
                    with discounts available for weekly and monthly campaigns.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What areas in Miami can mobile billboards cover?</h3>
                  <p className="text-gray-700">
                    Our mobile billboards cover all major Miami areas including South Beach, Wynwood, Brickell, Downtown 
                    Miami, Coconut Grove, Coral Gables, Miami Beach, Aventura, Little Havana, and Doral. GPS tracking 
                    ensures your ads reach your target neighborhoods, and we can create custom routes based on your 
                    specific audience demographics.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">How do Miami mobile billboard costs compare to digital billboards?</h3>
                  <p className="text-gray-700">
                    Digital billboards in Miami cost $2,000-$10,000/month and you share screen time with 7-8 other 
                    advertisers, getting only 8 seconds every minute. Mobile LED billboards cost $799-$1,499/day with 
                    100% share of voice and the ability to target specific locations throughout the day.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What's included in the Miami billboard pricing?</h3>
                  <p className="text-gray-700">
                    Our transparent pricing includes everything: the LED billboard truck, professional driver, fuel, 
                    insurance, GPS tracking, and campaign reporting. There are no hidden fees, setup costs, or surprise 
                    charges. You can also update your creative at no additional cost during your campaign.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Can I target specific events or times in Miami?</h3>
                  <p className="text-gray-700">
                    Absolutely! We can target Miami Heat games at FTX Arena, concerts at Bayfront Park, Art Basel in 
                    Miami Beach, Ultra Music Festival, or any other event. You can also specify times like morning 
                    beach traffic, lunch hours in Brickell, or nightlife in South Beach and Wynwood.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">How quickly can I start a billboard campaign in Miami?</h3>
                  <p className="text-gray-700">
                    Unlike traditional billboards that take 4-6 weeks for permits and installation, mobile billboard 
                    campaigns can start within 48-72 hours. Simply provide your artwork, choose your routes, and we'll 
                    have your campaign running throughout Miami almost immediately.
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
                Ready to Save 70% on <span className="gradient-text-premium">Miami Billboard Advertising?</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Get a free custom quote for your Miami billboard campaign. No obligations, no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                  className="btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Miami Quote
                </a>
                <a href="tel:786-633-4449" className="btn-accent btn-lg">
                  Call 786-633-4449
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Serving all of Miami-Dade County including South Beach, Wynwood, Brickell, Downtown, and surrounding areas
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