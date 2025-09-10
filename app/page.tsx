import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServiceCards } from './components/ServiceCards'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Users, Target, Award, DollarSign, Calculator, TrendingUp, ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Mobile Billboard Advertising Cost & Pricing Florida | LED Trucks | Maximax',
  description: 'Mobile billboard advertising cost and pricing in Florida. Billboard truck rates from $500/day. Learn how much mobile billboards cost and get instant quotes for LED truck advertising in Miami, Fort Lauderdale, and Palm Beach.',
  keywords: [
    'mobile billboard cost',
    'billboard advertising cost',
    'how much does a billboard cost',
    'mobile billboard pricing',
    'billboard truck rates',
    'LED billboard cost',
    'digital billboard pricing',
    'billboard advertising prices',
    'mobile advertising rates',
    'billboard expenses',
    'outdoor advertising cost Florida',
    'Miami billboard prices',
    'billboard truck rental cost',
    'advertising truck pricing',
    'mobile billboard rates Florida'
  ],
  openGraph: {
    title: 'Mobile Billboard Cost & Pricing | Starting at $500/day | Maximax Advertising',
    description: 'Affordable mobile billboard advertising in Florida. Get transparent pricing for billboard trucks, LED displays, and mobile advertising campaigns. Free quotes available.',
  },
}

export default function HomePage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mobile Billboard Advertising Services",
    "description": "Professional mobile billboard truck advertising with GPS tracking and 4K LED displays in South Florida",
    "brand": {
      "@type": "Brand",
      "name": "Maximax Advertising"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "500",
      "highPrice": "2000",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://maximaxmobileadvertising.com",
      "seller": {
        "@type": "Organization",
        "name": "Maximax Advertising",
        "telephone": "+1-561-720-0521"
      }
    }
  }

  const costFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does mobile billboard advertising cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile billboard advertising costs start at $500 per day for standard routes. LED billboard trucks range from $800-$2000 per day depending on coverage area and campaign duration. Monthly packages offer significant discounts."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the billboard truck pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our billboard truck pricing includes the vehicle, driver, fuel, insurance, GPS tracking, campaign reporting, and basic design services. There are no hidden fees or additional billboard expenses."
        }
      },
      {
        "@type": "Question",
        "name": "How do mobile billboard costs compare to traditional billboards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile billboard advertising costs 80% less than traditional static billboards while delivering 2.5x more impressions. Traditional billboards cost $3,000-$15,000 per month, while our mobile billboards start at just $500 per day with no long-term contracts."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <Script
        id="cost-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(costFAQSchema) }}
      />
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <ServiceCards />
        
        {/* Pricing Section - NEW */}
        <section className="section section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-primary mb-4">Transparent Pricing</span>
              <h2 className="mb-6">
                Mobile Billboard <span className="gradient-text">Advertising Cost</span> & Pricing
              </h2>
              <p className="text-lg text-gray-600">
                Discover how much billboard advertising costs and why mobile billboards offer the best ROI. 
                No hidden billboard expenses - transparent pricing for all advertising truck services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Standard Package */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-maximax-cyan transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Standard Mobile Billboard</h3>
                  <p className="text-gray-600 mb-4">Perfect for local campaigns</p>
                  <div className="text-4xl font-bold text-maximax-pink mb-2">
                    $500<span className="text-lg font-normal text-gray-600">/day</span>
                  </div>
                  <p className="text-sm text-gray-500">Billboard truck rental cost</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">10x20 ft static billboard display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">8 hours daily operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">GPS tracking included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Single county coverage</span>
                  </li>
                </ul>
                <Link href="/pricing/" className="btn-primary w-full text-center">
                  View Billboard Costs
                </Link>
              </div>

              {/* Premium LED Package */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-maximax-cyan relative transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-maximax-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">MOST POPULAR</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">LED Digital Billboard</h3>
                  <p className="text-gray-600 mb-4">Maximum impact & flexibility</p>
                  <div className="text-4xl font-bold text-maximax-cyan mb-2">
                    $1,200<span className="text-lg font-normal text-gray-600">/day</span>
                  </div>
                  <p className="text-sm text-gray-500">LED billboard truck pricing</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">4K Ultra HD LED display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">12 hours daily (7AM-11PM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multiple ad rotations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-county coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time content updates</span>
                  </li>
                </ul>
                <Link href="/pricing/" className="btn-accent w-full text-center">
                  Get LED Truck Pricing
                </Link>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-maximax-pink transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Fleet Campaign</h3>
                  <p className="text-gray-600 mb-4">Multi-truck campaigns</p>
                  <div className="text-4xl font-bold text-maximax-pink mb-2">
                    Custom<span className="text-lg font-normal text-gray-600">/quote</span>
                  </div>
                  <p className="text-sm text-gray-500">Volume discounts available</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multiple billboard trucks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Coordinated campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom route planning</span>
                  </li>
                </ul>
                <Link href="/contact/" className="btn-primary w-full text-center">
                  Request Custom Quote
                </Link>
              </div>
            </div>

            {/* Cost Comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-center mb-8">Billboard Advertising Cost Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-maximax-pink" />
                  </div>
                  <h4 className="font-bold mb-2">80% Lower Cost</h4>
                  <p className="text-sm text-gray-600">
                    Mobile billboard pricing beats traditional static billboards. 
                    Save on billboard expenses while reaching more customers.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-maximax-cyan" />
                  </div>
                  <h4 className="font-bold mb-2">No Hidden Fees</h4>
                  <p className="text-sm text-gray-600">
                    Transparent billboard advertising prices include everything - 
                    truck, driver, fuel, and insurance. No surprise costs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-maximax-pink" />
                  </div>
                  <h4 className="font-bold mb-2">Flexible Terms</h4>
                  <p className="text-sm text-gray-600">
                    Unlike traditional billboards with 12-month contracts, 
                    our mobile billboard rates offer daily, weekly, or monthly options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <span className="badge-primary mb-4">About Maximax</span>
                <h2 className="mb-6">
                  South Florida&apos;s Premier <span className="gradient-text">Vehicle Advertising</span> & Mobile Billboard Company
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Maximax Advertising provides cheap ads and cost-effective vehicle advertising solutions with the best mobile billboard advertising cost in South Florida. 
                  Our fleet of car billboard advertising trucks offers competitive billboard truck rates and transparent pricing for out-of-home advertising 
                  throughout Miami-Dade, Broward, and Palm Beach Counties. No hidden billboard expenses or long-term contracts.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">GPS-Tracked Campaigns</h4>
                      <p className="text-gray-600">Real-time tracking and route optimization for maximum exposure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">4K Ultra HD Displays</h4>
                      <p className="text-gray-600">Crystal-clear messaging that captures attention day and night</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Extended Operating Hours</h4>
                      <p className="text-gray-600">7 AM to 11 PM daily coverage for maximum impressions</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-bold text-maximax-pink">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-maximax-pink">200+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-maximax-pink">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl transform rotate-3"></div>
                  <Image
                    src="/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg"
                    alt="Maximax Billboard Truck"
                    width={600}
                    height={400}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">Why Choose Us</span>
              <h2 className="mb-6">
                The <span className="gradient-text-cyan">Smart Choice</span> for Cheap Ads & Vehicle Advertising
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-maximax-pink" />
                </div>
                <h4 className="font-semibold mb-2">Targeted Reach</h4>
                <p className="text-sm text-gray-600">Strategic routes through high-traffic areas in Palm Beach County</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h4 className="font-semibold mb-2">50K+ Daily Views</h4>
                <p className="text-sm text-gray-600">Massive exposure to potential customers every single day</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-maximax-pink" />
                </div>
                <h4 className="font-semibold mb-2">Proven ROI</h4>
                <p className="text-sm text-gray-600">Average 4.2x return on investment for our clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h4 className="font-semibold mb-2">Full Service</h4>
                <p className="text-sm text-gray-600">Design, campaign management, and analytics included</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Cost FAQ Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-primary mb-4">Frequently Asked Questions</span>
              <h2 className="mb-6">
                Mobile Billboard <span className="gradient-text">Cost & Pricing</span> Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about billboard cost, billboard price, billboard advertising costs, 
                and vehicle advertising rates. Get affordable cheap ads for your out-of-home advertising campaign.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Primary cost question */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border-l-4 border-maximax-cyan">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does mobile billboard advertising cost in Florida?
                </h3>
                <p className="text-gray-700 mb-4">
                  Mobile billboard advertising costs in Florida start at <strong>$500 per day</strong> for standard billboard trucks. 
                  Our car billboard advertising and vehicle advertising rates are the most competitive in South Florida.
                  LED digital billboard truck pricing ranges from <strong>$800 to $2,000 per day</strong> depending on:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <span>Coverage area (single vs. multi-county campaigns)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <span>Campaign duration (daily, weekly, or monthly rates)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <span>Display type (static vs. digital LED screens)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <span>Operating hours (standard 8-hour vs. extended 12-hour coverage)</span>
                  </li>
                </ul>
                <Link href="/pricing/" className="inline-flex items-center text-maximax-cyan font-semibold hover:text-maximax-pink transition-colors">
                  View detailed pricing guide <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Comparison question */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  How do mobile billboard costs compare to traditional billboards?
                </h3>
                <p className="text-gray-700 mb-3">
                  Mobile billboard advertising costs <strong>80% less</strong> than traditional static billboards while delivering 
                  <strong>2.5x more impressions</strong>. Traditional billboard expenses in Miami range from $3,000 to $15,000 per month 
                  with 12-month contracts, while our mobile billboard pricing starts at just $500/day with no long-term commitments.
                </p>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-maximax-pink">Traditional Billboard:</p>
                      <p>$3,000-15,000/month</p>
                      <p>12-month contract required</p>
                      <p>Fixed location only</p>
                    </div>
                    <div>
                      <p className="font-semibold text-maximax-cyan">Mobile Billboard:</p>
                      <p>$500-2,000/day</p>
                      <p>No contract required</p>
                      <p>Reaches entire market</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's included question */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  What's included in billboard truck pricing?
                </h3>
                <p className="text-gray-700 mb-3">
                  Our transparent billboard advertising prices include everything you need for a successful campaign - 
                  no hidden billboard expenses or surprise costs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Billboard truck and professional driver</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Fuel and vehicle insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">GPS tracking and reporting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic design assistance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Campaign management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Performance analytics</span>
                  </div>
                </div>
              </div>

              {/* ROI question */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  What ROI can I expect from mobile billboard advertising?
                </h3>
                <p className="text-gray-700">
                  Our clients typically see a <strong>4.2x return on investment</strong> from mobile billboard campaigns. 
                  With advertising truck costs starting at $500/day and average daily impressions of 50,000+, 
                  the cost per thousand impressions (CPM) is just <strong>$10</strong> - significantly lower than other advertising methods. 
                  The combination of low billboard expenses and high visibility makes mobile billboards the most cost-effective 
                  outdoor advertising solution in Florida.
                </p>
              </div>

              {/* Budget question */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  Can I get custom pricing for longer campaigns?
                </h3>
                <p className="text-gray-700 mb-3">
                  Yes! We offer volume discounts for extended campaigns. Weekly and monthly billboard truck rates 
                  provide significant savings compared to daily pricing. Multi-truck fleet campaigns also qualify 
                  for custom billboard advertising cost packages.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link href="/pricing/" className="btn-primary">
                    View All Pricing Options
                  </Link>
                  <Link href="/contact/" className="btn-outline">
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Keywords Section */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">Our Services</span>
              <h2 className="mb-6">
                Complete <span className="gradient-text-cyan">Vehicle Advertising</span> & OOH Solutions
              </h2>
              <p className="text-lg text-gray-600">
                From car billboard advertising to mobile outdoor advertising, we're your advertisement company for comprehensive out-of-home advertising. 
                What is OOH in marketing? It's advertising that reaches consumers outside their homes - and we're South Florida's leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Digital Billboard Trucks</h3>
                <p className="text-gray-600">
                  Our digital billboard truck fleet features mobile digital billboards with 4K LED displays. 
                  These digital mobile billboard trucks deliver crystal-clear messaging day and night.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Mobile LED Trucks</h3>
                <p className="text-gray-600">
                  LED trucks and mobile LED billboard trucks provide brilliant visibility. Our LED billboard 
                  trucks feature the latest in mobile LED billboard technology.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Billboard Truck Rental</h3>
                <p className="text-gray-600">
                  Rent billboard trucks for events, promotions, or campaigns. Our truck billboard and 
                  mobile truck billboard options include full-service campaign management.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Advertising Trucks</h3>
                <p className="text-gray-600">
                  Our advertising truck and advertisement truck fleet covers all of South Florida. 
                  Mobile advertising trucks deliver your message with maximum impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Moving Billboards</h3>
                <p className="text-gray-600">
                  Moving billboard and portable billboard solutions for flexible campaigns. Our movable 
                  billboard options adapt to your marketing needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Local Advertisements & OOH</h3>
                <p className="text-gray-600">
                  Local advertisements and out-of-home advertising solutions. What is OOH in marketing? It's the most effective way to 
                  advertise on car platforms and reach customers through vehicle advertising and mobile outdoor advertising.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}