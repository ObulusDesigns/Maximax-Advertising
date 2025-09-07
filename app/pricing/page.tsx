import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { CheckCircleIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const BillboardCostCalculator = dynamic(() => import('../components/BillboardCostCalculator'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Billboard Advertising Cost & Pricing | Mobile Billboard Rates Florida | Maximax',
  description: 'How much does a billboard cost in Florida? Get instant pricing for mobile billboard advertising in Miami, Fort Lauderdale, and West Palm Beach. Free cost calculator and custom quotes.',
  keywords: 'billboard cost, mobile billboard pricing, billboard advertising rates, how much does a billboard cost, billboard prices Florida, mobile billboard cost Miami, LED truck advertising prices, outdoor advertising costs',
  openGraph: {
    title: 'Billboard Advertising Cost Calculator | Get Instant Pricing',
    description: 'Calculate mobile billboard advertising costs instantly. Transparent pricing for Miami, Fort Lauderdale, Palm Beach. Volume discounts available.',
    url: 'https://maximaxmobileadvertising.com/pricing',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/billboard-cost-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Billboard Cost Calculator - Maximax Advertising',
      },
    ],
  },
};

const pricingTiers = [
  {
    name: 'Basic',
    duration: '1-3 Days',
    price: '$600-800',
    unit: 'per day',
    features: [
      '8 hours daily operation',
      'Single truck deployment',
      'GPS tracking included',
      'Basic route planning',
      'Daily performance reports',
    ],
    best: false,
  },
  {
    name: 'Professional',
    duration: '1-2 Weeks',
    price: '$500-700',
    unit: 'per day',
    features: [
      '8-10 hours daily operation',
      'Multi-truck options',
      'Premium GPS tracking',
      'Strategic route optimization',
      'Real-time analytics dashboard',
      '10-15% volume discount',
    ],
    best: true,
  },
  {
    name: 'Enterprise',
    duration: '1+ Month',
    price: '$400-600',
    unit: 'per day',
    features: [
      'Flexible hours (4-12 daily)',
      'Fleet deployment available',
      'Dedicated account manager',
      'Custom route planning',
      'Advanced analytics & ROI tracking',
      '20-25% volume discount',
      'Free creative design services',
    ],
    best: false,
  },
];

const comparisonData = [
  {
    method: 'Mobile LED Billboard',
    impressions: '30,000-50,000',
    cpm: '$15-25',
    flexibility: 'Excellent',
    targeting: 'Precise GPS',
  },
  {
    method: 'Static Billboard',
    impressions: '20,000-40,000',
    cpm: '$30-50',
    flexibility: 'None',
    targeting: 'Fixed Location',
  },
  {
    method: 'Radio Advertising',
    impressions: '10,000-20,000',
    cpm: '$40-60',
    flexibility: 'Limited',
    targeting: 'Demographic',
  },
  {
    method: 'Car Wrap',
    impressions: '8,000-12,000',
    cpm: '$10-15',
    flexibility: 'Limited',
    targeting: 'Random',
  },
];

const locationPricing = [
  { city: 'Miami', baseRate: '$800/day', premium: '+10-15%', popular: 'Downtown, Brickell, South Beach' },
  { city: 'Fort Lauderdale', baseRate: '$750/day', premium: '+5-10%', popular: 'Las Olas, Beach, Downtown' },
  { city: 'West Palm Beach', baseRate: '$700/day', premium: '+5%', popular: 'Clematis, CityPlace, PGA' },
  { city: 'Boca Raton', baseRate: '$650/day', premium: 'Standard', popular: 'Mizner Park, Town Center' },
  { city: 'Orlando', baseRate: '$600/day', premium: '+10%', popular: 'Theme Parks, I-Drive, Downtown' },
];

export default function PricingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile Billboard Advertising',
    provider: {
      '@type': 'Organization',
      name: 'Maximax Advertising',
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '400',
      highPrice: '900',
      priceValidUntil: '2025-12-31',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-800">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Billboard Advertising Cost & Pricing
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              Transparent pricing for mobile billboard advertising in Florida. 
              Calculate costs instantly or get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Calculate Your Cost
              </a>
              <a
                href="tel:5617200521"
                className="bg-red-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-950 transition-colors"
              >
                Call (561) 720-0521
              </a>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">$15-25</p>
                <p className="text-gray-600 mt-2">Cost per 1000 impressions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">50K+</p>
                <p className="text-gray-600 mt-2">Daily impressions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">25%</p>
                <p className="text-gray-600 mt-2">Volume discounts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">$400</p>
                <p className="text-gray-600 mt-2">Starting daily rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculator */}
        <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Instant Cost Calculator
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Calculate your mobile billboard advertising costs based on location, duration, and campaign requirements.
              </p>
            </div>
            <BillboardCostCalculator />
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing Tiers
              </h2>
              <p className="text-xl text-gray-600">
                Choose the package that fits your advertising goals and budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`bg-white rounded-2xl shadow-lg p-8 ${
                    tier.best ? 'ring-2 ring-red-600 relative' : ''
                  }`}
                >
                  {tier.best && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.duration}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-red-600">{tier.price}</span>
                    <span className="text-gray-600 ml-2">{tier.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center font-bold py-3 px-6 rounded-lg transition-colors ${
                      tier.best
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location-Based Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Location-Based Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Rates vary by city and specific areas within each market
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">City</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Base Rate</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Premium Areas</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Popular Routes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {locationPricing.map((location) => (
                      <tr key={location.city} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{location.city}</td>
                        <td className="px-6 py-4 text-gray-700">{location.baseRate}</td>
                        <td className="px-6 py-4 text-gray-700">{location.premium}</td>
                        <td className="px-6 py-4 text-gray-700">{location.popular}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  * Premium pricing applies during peak hours, special events, and high-traffic areas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Our Costs Compare
              </h2>
              <p className="text-xl text-gray-600">
                Mobile billboards offer the best value for outdoor advertising
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold">Advertising Method</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Daily Impressions</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">CPM (Cost/1000)</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Flexibility</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Targeting</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={index === 0 ? 'bg-red-50' : 'hover:bg-gray-50'}>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {item.method}
                          {index === 0 && (
                            <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded">BEST VALUE</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{item.impressions}</td>
                        <td className="px-6 py-4 text-gray-700">{item.cpm}</td>
                        <td className="px-6 py-4 text-gray-700">{item.flexibility}</td>
                        <td className="px-6 py-4 text-gray-700">{item.targeting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions About Billboard Costs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much does a mobile billboard cost per day?
                </h3>
                <p className="text-gray-700">
                  Mobile billboard costs in Florida typically range from $400-900 per day depending on location, 
                  duration, and hours of operation. Miami and high-traffic areas command premium rates, while 
                  longer campaigns receive volume discounts up to 25%.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is mobile billboard advertising cheaper than traditional billboards?
                </h3>
                <p className="text-gray-700">
                  Yes, mobile billboards typically offer better value with CPM rates of $15-25 compared to 
                  $30-50 for static billboards. Plus, you get the flexibility to target multiple locations 
                  and adjust routes based on your audience.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What factors affect mobile billboard pricing?
                </h3>
                <p className="text-gray-700">
                  Key pricing factors include: location (city and specific routes), campaign duration, 
                  hours of daily operation, number of trucks, special events or peak seasons, and 
                  custom requirements like specific targeting or multiple creative changes.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you offer discounts for longer campaigns?
                </h3>
                <p className="text-gray-700">
                  Yes! We offer volume discounts starting at 10% for weekly campaigns, 15-18% for 2-3 weeks, 
                  and up to 25% for monthly campaigns. Enterprise clients with multi-month contracts can 
                  receive additional custom pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Get a custom quote for your mobile billboard campaign today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5617200521"
                className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call (561) 720-0521
              </a>
              <Link
                href="/contact"
                className="bg-red-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-900 transition-colors"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}