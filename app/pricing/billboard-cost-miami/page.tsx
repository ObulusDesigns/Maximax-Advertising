import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MapPinIcon, TruckIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const BillboardCostCalculator = dynamic(() => import('../../components/BillboardCostCalculator'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'How Much Does a Billboard Cost in Miami? | 2025 Pricing Guide | Maximax',
  description: 'Billboard advertising costs in Miami range from $800-900/day for mobile billboards. Compare prices for Downtown, Brickell, South Beach, Wynwood. Get instant quotes and cost calculator.',
  keywords: 'billboard cost Miami, Miami billboard prices, how much does a billboard cost in Miami, Miami advertising costs, mobile billboard Miami rates, South Beach billboard cost, Brickell advertising prices, Downtown Miami billboard rates',
  openGraph: {
    title: 'Billboard Cost in Miami - Complete 2025 Pricing Guide',
    description: 'Detailed billboard advertising costs for Miami. Mobile billboards from $800/day with 50,000+ daily impressions. Compare areas and get instant quotes.',
    url: 'https://maximaxmobileadvertising.com/pricing/billboard-cost-miami',
  },
};

const miamiAreaPricing = [
  {
    area: 'Downtown Miami',
    dailyRate: '$900',
    monthlyRate: '$18,000',
    impressions: '60,000+',
    bestFor: 'Business professionals, tourists, events',
    peakHours: '7-9am, 5-7pm',
  },
  {
    area: 'Brickell',
    dailyRate: '$850',
    monthlyRate: '$17,000',
    impressions: '55,000+',
    bestFor: 'Finance professionals, luxury market',
    peakHours: '7-9am, 12-2pm, 5-8pm',
  },
  {
    area: 'South Beach',
    dailyRate: '$900',
    monthlyRate: '$18,000',
    impressions: '65,000+',
    bestFor: 'Tourists, nightlife, events',
    peakHours: '11am-2am',
  },
  {
    area: 'Wynwood',
    dailyRate: '$800',
    monthlyRate: '$16,000',
    impressions: '50,000+',
    bestFor: 'Young professionals, art crowd',
    peakHours: '12pm-12am',
  },
  {
    area: 'Miami Beach',
    dailyRate: '$850',
    monthlyRate: '$17,000',
    impressions: '55,000+',
    bestFor: 'Tourists, beach-goers, hotels',
    peakHours: '10am-8pm',
  },
  {
    area: 'Coral Gables',
    dailyRate: '$750',
    monthlyRate: '$15,000',
    impressions: '45,000+',
    bestFor: 'Affluent residents, University of Miami',
    peakHours: '8-10am, 4-7pm',
  },
];

const costFactors = [
  {
    factor: 'Location & Route',
    impact: '20-30%',
    description: 'Premium areas like South Beach and Downtown command higher rates',
  },
  {
    factor: 'Campaign Duration',
    impact: '10-25%',
    description: 'Longer campaigns receive volume discounts',
  },
  {
    factor: 'Time of Day',
    impact: '15-20%',
    description: 'Peak hours and evening rates are higher',
  },
  {
    factor: 'Special Events',
    impact: '25-50%',
    description: 'Art Basel, Ultra Music Festival, and major events increase rates',
  },
  {
    factor: 'Number of Trucks',
    impact: '5-15%',
    description: 'Multi-truck campaigns receive fleet discounts',
  },
];

const competitorComparison = [
  {
    company: 'Maximax (Our Rates)',
    dailyRate: '$800-900',
    features: 'GPS tracking, 4K displays, free design',
    flexibility: 'Excellent',
    minimumDays: 1,
  },
  {
    company: 'Static Billboard',
    dailyRate: '$1,500-3,000',
    features: 'Fixed location, 24/7 visibility',
    flexibility: 'None',
    minimumDays: 30,
  },
  {
    company: 'Digital Billboard',
    dailyRate: '$2,000-5,000',
    features: 'Multiple ads rotation',
    flexibility: 'Limited',
    minimumDays: 7,
  },
  {
    company: 'Bus Advertising',
    dailyRate: '$500-1,000',
    features: 'Fixed routes, multiple buses',
    flexibility: 'Limited',
    minimumDays: 30,
  },
];

export default function MiamiBillboardCostPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a billboard cost in Miami?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobile billboard advertising in Miami costs between $800-900 per day for a single truck with 8 hours of operation. Static billboards range from $1,500-3,000 per day with 30-day minimums. Prices vary by location, with South Beach and Downtown Miami commanding premium rates.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cheapest billboard advertising in Miami?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobile billboards offer the most cost-effective solution starting at $800/day with no long-term contracts. This provides 50,000+ impressions daily with flexible routing and GPS tracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to advertise in South Beach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'South Beach mobile billboard advertising costs approximately $900 per day, providing 65,000+ impressions. During peak season and events, rates may increase 25-50%.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                How Much Does a Billboard Cost in Miami?
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Complete 2025 pricing guide for billboard advertising in Miami, 
                from South Beach to Downtown. Mobile billboards starting at $800/day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">$800-900</p>
                <p className="text-blue-100 mt-1">Daily Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">50K+</p>
                <p className="text-blue-100 mt-1">Daily Impressions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">$15-18</p>
                <p className="text-blue-100 mt-1">CPM Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">25%</p>
                <p className="text-blue-100 mt-1">Max Discount</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CurrencyDollarIcon className="w-8 h-8 text-green-600 mr-3" />
                Quick Answer: Miami Billboard Costs
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  <strong>Mobile billboard advertising in Miami costs $800-900 per day</strong> for a single 
                  LED truck operating 8 hours daily. This includes GPS tracking, route optimization, and 
                  reaches 50,000-65,000 people per day.
                </p>
                <p>
                  Compare this to static billboards at $1,500-3,000/day (30-day minimum) or digital 
                  billboards at $2,000-5,000/day. Mobile billboards offer the best CPM at $15-18 per 
                  thousand impressions.
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="#calculator"
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Calculate Your Cost
                </a>
                <a
                  href="tel:5617200521"
                  className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  Get Instant Quote: (561) 720-0521
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Area-by-Area Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Miami Billboard Costs by Area
              </h2>
              <p className="text-xl text-gray-600">
                Pricing varies by neighborhood based on traffic, demographics, and demand
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miamiAreaPricing.map((area) => (
                <div key={area.area} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{area.area}</h3>
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Daily Rate:</span>
                      <span className="font-bold text-gray-900">{area.dailyRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly:</span>
                      <span className="font-bold text-gray-900">{area.monthlyRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Impressions:</span>
                      <span className="font-bold text-blue-600">{area.impressions}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Best for:</strong> {area.bestFor}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Peak hours:</strong> {area.peakHours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Calculator */}
        <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Miami Billboard Cost
              </h2>
              <p className="text-xl text-gray-600">
                Get instant pricing for your specific campaign requirements
              </p>
            </div>
            <BillboardCostCalculator />
          </div>
        </section>

        {/* Cost Factors */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Affects Billboard Costs in Miami?
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the factors that influence pricing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costFactors.map((factor, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{factor.factor}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {factor.impact}
                    </span>
                  </div>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Special Event Pricing in Miami
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Peak Season Events:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Art Basel (December): +50% rates</li>
                    <li>• Ultra Music Festival (March): +40% rates</li>
                    <li>• Miami Beach Pride (April): +30% rates</li>
                    <li>• Super Bowl (when hosted): +75% rates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Year-Round Premium Times:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Friday & Saturday nights: +20% rates</li>
                    <li>• Beach weekends: +15% rates</li>
                    <li>• Heat games: +25% rates</li>
                    <li>• Cruise ship days: +15% rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitor Comparison */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Miami Billboard Cost Comparison
              </h2>
              <p className="text-xl text-gray-600">
                How mobile billboards compare to other advertising options
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Advertising Type</th>
                      <th className="px-6 py-4 text-left">Daily Rate</th>
                      <th className="px-6 py-4 text-left">Features</th>
                      <th className="px-6 py-4 text-left">Flexibility</th>
                      <th className="px-6 py-4 text-left">Minimum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {competitorComparison.map((comp, index) => (
                      <tr key={index} className={index === 0 ? 'bg-blue-50' : ''}>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {comp.company}
                          {index === 0 && (
                            <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">
                              BEST VALUE
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{comp.dailyRate}</td>
                        <td className="px-6 py-4 text-gray-700">{comp.features}</td>
                        <td className="px-6 py-4 text-gray-700">{comp.flexibility}</td>
                        <td className="px-6 py-4 text-gray-700">{comp.minimumDays} day(s)</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💰 Why Mobile Billboards Offer the Best Value in Miami
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ No long-term contracts - start with just 1 day</li>
                <li>✓ Target multiple neighborhoods in a single campaign</li>
                <li>✓ Reach beach-goers, downtown workers, and nightlife crowds</li>
                <li>✓ GPS tracking shows exactly where your ad was displayed</li>
                <li>✓ Change creative or messaging anytime at no extra cost</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Miami Billboard Cost FAQs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much does a billboard cost in Miami per month?
                </h3>
                <p className="text-gray-700">
                  Mobile billboard advertising in Miami costs $16,000-18,000 per month for a single truck 
                  operating 8 hours daily. This includes a 20% volume discount and provides approximately 
                  1.5 million impressions monthly. Static billboards range from $45,000-90,000 per month.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the cheapest way to advertise on a billboard in Miami?
                </h3>
                <p className="text-gray-700">
                  Mobile billboards are the most affordable option starting at $800/day with no minimum 
                  commitment. For budget-conscious advertisers, we recommend 4-hour campaigns at $480/day 
                  targeting specific high-traffic times and locations.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much does it cost to advertise in Downtown Miami?
                </h3>
                <p className="text-gray-700">
                  Downtown Miami mobile billboard advertising costs $900 per day for 8 hours of operation. 
                  This covers the business district, Biscayne Boulevard, and American Airlines Arena area, 
                  reaching 60,000+ people daily. Peak hours (7-9am, 5-7pm) may have premium rates.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are billboard costs higher during Art Basel?
                </h3>
                <p className="text-gray-700">
                  Yes, billboard rates increase 25-50% during Art Basel week in December. Mobile billboard 
                  rates typically go from $800/day to $1,200-1,600/day. We recommend booking 2-3 months 
                  in advance for major events to lock in better rates.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What areas in Miami have the best ROI for billboard advertising?
                </h3>
                <p className="text-gray-700">
                  Wynwood and Coral Gables offer excellent ROI at $750-800/day with strong local engagement. 
                  South Beach provides maximum visibility for tourist-focused campaigns. Brickell is ideal 
                  for B2B and luxury brands targeting professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Your Miami Billboard Campaign Started Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already advertising on Miami's streets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5617200521"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <span>📞 Call (561) 720-0521</span>
              </a>
              <Link
                href="/contact"
                className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-900 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
            <p className="text-blue-100 mt-6">
              Same-day campaign launch available • No setup fees • Free design services
            </p>
          </div>
        </section>
      </div>
    </>
  );
}