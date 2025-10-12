import { Metadata } from 'next'
import Link from 'next/link'
import { Check, Star, TrendingUp, MapPin, Clock, Zap, Shield, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Billboard Pricing Miami | Transparent Rates | Maximax',
  description: 'Transparent mobile billboard advertising pricing in South Florida. LED truck campaigns starting at $895/day. No hidden fees. Get instant quote.',
  keywords: [
    'mobile billboard pricing',
    'billboard truck cost',
    'LED truck advertising rates',
    'miami billboard prices',
    'advertising truck rental cost',
    'mobile advertising pricing',
    'digital billboard cost miami',
    'billboard advertising rates florida'
  ],
  openGraph: {
    title: 'Mobile Billboard Pricing - Starting at $895/day | Maximax',
    description: 'Transparent pricing for mobile billboard advertising in Miami. See rates, compare packages, get instant quotes. No hidden fees.',
  },
}

const packages = [
  {
    name: 'Bronze',
    price: 895,
    duration: '8 hours',
    impressions: '30K-50K',
    features: [
      '8 hours daily coverage',
      'Preset high-traffic routes',
      'GPS tracking included',
      'Basic campaign report',
      '2 ad design changes included',
      'Email support',
    ],
    ideal: 'Small businesses, grand openings, local events',
    color: 'orange',
  },
  {
    name: 'Silver',
    price: 1595,
    duration: '12 hours',
    impressions: '50K-70K',
    features: [
      '12 hours daily coverage',
      'Custom route planning',
      'Real-time GPS dashboard',
      'Detailed analytics report',
      'Unlimited ad changes',
      'Priority email & phone support',
      'Social media content (5 photos)',
    ],
    ideal: 'Growing businesses, product launches, extended campaigns',
    color: 'cyan',
    popular: true,
  },
  {
    name: 'Gold',
    price: 2495,
    duration: '16 hours',
    impressions: '70K-100K',
    features: [
      '16 hours daily coverage',
      'Premium route optimization',
      'Live campaign dashboard',
      'Real-time impression tracking',
      'Unlimited ad changes',
      'Dedicated account manager',
      'Professional photography (10 photos)',
      'Video content for social media',
      'Competitor visibility analysis',
    ],
    ideal: 'Established brands, major events, maximum visibility',
    color: 'pink',
  },
]

const addons = [
  { name: 'Weekend Coverage', price: '+$200/day', description: 'Saturday & Sunday premium' },
  { name: 'Holiday Campaigns', price: '+$300/day', description: 'Major holidays (Memorial Day, July 4, etc.)' },
  { name: 'Event Parking', price: '+$400/event', description: 'Stationary display at specific event' },
  { name: 'Multi-Truck Discount', price: '-15%', description: '2+ trucks running simultaneously' },
  { name: 'Weekly Rate', price: '-10%', description: 'Book 5+ consecutive days' },
  { name: 'Monthly Rate', price: '-20%', description: 'Book 20+ days per month' },
]

const comparison = [
  { method: 'Traditional Billboard', cost: '$5,000/month', reach: 'Fixed location', cons: 'One spot only, weather-dependent visibility' },
  { method: 'Radio Ads', cost: '$3,000/month', reach: '10K-50K listeners', cons: 'Skippable, no visual impact' },
  { method: 'Facebook Ads', cost: '$2,500/month', reach: '50K-100K impressions', cons: 'Easy to scroll past, ad fatigue' },
  { method: 'Mobile Billboard (Silver)', cost: '$1,595/day', reach: '50K-70K daily', cons: 'None - mobile, visual, unavoidable' },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-5xl">
          <div className="text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💎 TRANSPARENT PRICING - NO HIDDEN FEES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Billboard Pricing
              <br />
              <span className="text-white/90">That Makes Sense</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Unlike our competitors, we show you exactly what you'll pay. Starting at just <strong>$895/day</strong> for 30,000+ daily impressions in South Florida.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Check className="w-5 h-5" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Check className="w-5 h-5" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Check className="w-5 h-5" />
                <span>Price Match Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section section-padding">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Campaign Package</span>
            </h2>
            <p className="text-xl text-gray-600">
              All packages include GPS tracking, professional support, and guaranteed impressions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative card-glass p-8 hover:shadow-2xl transition-all ${
                  pkg.popular ? 'ring-2 ring-maximax-cyan scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white px-4 py-1 rounded-full text-sm font-bold">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-900">${pkg.price}</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {pkg.duration} coverage • {pkg.impressions} impressions
                  </div>
                  <Link
                    href="/contact/"
                    className={`btn-${pkg.popular ? 'primary' : 'secondary'} w-full`}
                  >
                    Get Started
                  </Link>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 text-maximax-${pkg.color}`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Perfect For:</div>
                  <p className="text-sm text-gray-600">{pkg.ideal}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise */}
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Enterprise & Custom Campaigns</h3>
                <p className="text-white/80 mb-4">
                  Need 24-hour coverage, multi-truck campaigns, or month-long visibility? We've got you covered.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-maximax-cyan" />
                    <span>Multiple trucks coordinated campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-maximax-cyan" />
                    <span>Volume discounts up to 30%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-maximax-cyan" />
                    <span>Dedicated campaign strategist</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Custom</div>
                <Link href="/contact/" className="btn-secondary">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section section-padding bg-gray-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Add-Ons & <span className="gradient-text-cyan">Discounts</span>
            </h2>
            <p className="text-xl text-gray-600">Customize your campaign with these options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-maximax-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {addon.price.includes('-') ? (
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  ) : (
                    <Zap className="w-6 h-6 text-maximax-cyan" />
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{addon.name}</h3>
                    <span className={`font-bold ${addon.price.includes('-') ? 'text-green-600' : 'text-maximax-pink'}`}>
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="gradient-text">Compare</span>
            </h2>
            <p className="text-xl text-gray-600">
              See why mobile billboards deliver the best ROI for local advertising
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Advertising Method</th>
                  <th className="px-6 py-4 text-left">Monthly Cost</th>
                  <th className="px-6 py-4 text-left">Reach</th>
                  <th className="px-6 py-4 text-left">Limitations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((item, index) => (
                  <tr key={item.method} className={index === 3 ? 'bg-maximax-cyan/5' : ''}>
                    <td className="px-6 py-4 font-semibold">
                      {item.method}
                      {index === 3 && (
                        <span className="ml-2 text-xs bg-maximax-cyan text-white px-2 py-1 rounded-full">
                          BEST VALUE
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">{item.cost}</td>
                    <td className="px-6 py-4">{item.reach}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Price Match Guarantee */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-4xl text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Price Match Guarantee</h2>
          <p className="text-xl text-white/90 mb-6">
            Found a lower price from a local competitor for the same service? We'll match it and give you an
            extra <strong>$100 off</strong>.
          </p>
          <p className="text-white/80 mb-8">
            *Applies to similar package (coverage hours, truck quality, GPS tracking included). Competitor quote
            must be in writing.
          </p>
          <Link href="/contact/" className="btn-secondary">
            Claim Price Match
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-padding bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pricing <span className="gradient-text-cyan">Questions?</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">What's included in the price?</h3>
              <p className="text-gray-600">
                All packages include truck rental, fuel, driver, GPS tracking, ad installation, basic design
                support, and campaign reporting. No hidden fees.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">How do I pay?</h3>
              <p className="text-gray-600">
                We accept credit cards, ACH transfers, and checks. Payment is due 50% upfront, 50% on campaign
                completion. Monthly campaigns can be invoiced.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">What if I need to cancel?</h3>
              <p className="text-gray-600">
                Cancel up to 72 hours before your campaign start date for a full refund. Cancellations within 72
                hours forfeit the 50% deposit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-600">
                Yes! For campaigns over $5,000, we offer flexible payment plans with approved credit. Contact us to
                discuss options.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">How do I get a custom quote?</h3>
              <p className="text-gray-600">
                Call us at <strong>(561) 720-0521</strong> or fill out our contact form. We'll respond within 2
                hours during business hours with a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-padding">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get <span className="gradient-text">Noticed?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your mobile billboard campaign today and start reaching 50,000+ South Florida residents daily.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-lg px-8 py-4">
              Get Your Free Quote
            </Link>
            <a href="tel:5617200521" className="btn-secondary text-lg px-8 py-4">
              Call (561) 720-0521
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            💬 Average response time: Under 2 hours • 📍 Serving Miami-Dade, Broward & Palm Beach
          </p>
        </div>
      </section>
    </main>
  )
}
