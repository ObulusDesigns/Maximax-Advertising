import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Billboard Advertising Cost Guide 2025 | Mobile Billboard Pricing | Maximax',
  description: 'Complete guide to billboard advertising costs in South Florida. Compare mobile billboard pricing, static billboard rates, and digital display costs. Get transparent pricing for Miami, Fort Lauderdale, and West Palm Beach campaigns with ROI calculators.',
  openGraph: {
    title: 'Billboard Advertising Cost Guide 2025 | Pricing & ROI Calculator',
    description: 'Transparent mobile billboard pricing for South Florida. Daily rates from $500-$1,500. Compare costs vs static billboards and calculate your advertising ROI.',
    url: 'https://maximaxmobileadvertising.com/resources/billboard-cost-guide/',
    type: 'article',
  },
}

export default function BillboardCostGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Billboard Advertising Cost Guide 2025
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transparent pricing for mobile billboard advertising in South Florida.
            Compare costs, calculate ROI, and make informed decisions for your campaign.
          </p>
        </div>
      </section>

      {/* Mobile Billboard Pricing */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Mobile Billboard Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Basic Package */}
            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Basic Campaign</h3>
              <div className="text-4xl font-bold mb-4">$500-$750<span className="text-lg text-gray-400">/day</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 4-8 hours of display time</li>
                <li>✓ Single truck coverage</li>
                <li>✓ GPS tracking included</li>
                <li>✓ Basic route planning</li>
                <li>✓ Digital display changes</li>
              </ul>
            </div>

            {/* Standard Package */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-blue-600 p-8 rounded-lg transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Standard Campaign</h3>
              <div className="text-4xl font-bold mb-4">$900-$1,200<span className="text-lg">/day</span></div>
              <ul className="space-y-3">
                <li>✓ Full-day coverage (10-12 hours)</li>
                <li>✓ Multi-truck option available</li>
                <li>✓ Advanced GPS analytics</li>
                <li>✓ Strategic route optimization</li>
                <li>✓ Real-time display updates</li>
                <li>✓ Performance reporting</li>
              </ul>
            </div>

            {/* Premium Package */}
            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Premium Campaign</h3>
              <div className="text-4xl font-bold mb-4">$1,300-$1,800<span className="text-lg text-gray-400">/day</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 24/7 coverage options</li>
                <li>✓ Fleet deployment (3+ trucks)</li>
                <li>✓ Event-specific targeting</li>
                <li>✓ Video billboard capability</li>
                <li>✓ Dedicated campaign manager</li>
                <li>✓ Comprehensive analytics</li>
              </ul>
            </div>
          </div>

          {/* Cost Factors */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Pricing Factors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#00BFFF] mb-3">Campaign Duration</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Daily rate: Full pricing</li>
                  <li>• Weekly rate: 10-15% discount</li>
                  <li>• Monthly rate: 20-25% discount</li>
                  <li>• Quarterly rate: 30-35% discount</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#00BFFF] mb-3">Service Area</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Miami-Dade County: Standard rates</li>
                  <li>• Broward County: Standard rates</li>
                  <li>• Palm Beach County: Standard rates</li>
                  <li>• Multi-county: Volume discounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Mobile vs Static Billboard Costs</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
              <thead className="bg-[#00BFFF] text-black">
                <tr>
                  <th className="p-4 text-left">Billboard Type</th>
                  <th className="p-4 text-left">Monthly Cost</th>
                  <th className="p-4 text-left">Impressions</th>
                  <th className="p-4 text-left">Flexibility</th>
                  <th className="p-4 text-left">Setup Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="p-4 font-bold text-[#00BFFF]">Mobile LED Billboard</td>
                  <td className="p-4">$15,000-$30,000</td>
                  <td className="p-4">60,000-150,000/month</td>
                  <td className="p-4">✓ Change locations daily</td>
                  <td className="p-4">24-48 hours</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Static Billboard (Prime Location)</td>
                  <td className="p-4">$3,000-$10,000</td>
                  <td className="p-4">30,000-80,000/month</td>
                  <td className="p-4">✗ Fixed location only</td>
                  <td className="p-4">2-4 weeks</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Digital Billboard (Static Location)</td>
                  <td className="p-4">$10,000-$25,000</td>
                  <td className="p-4">40,000-100,000/month</td>
                  <td className="p-4">✗ Fixed location</td>
                  <td className="p-4">1-2 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#00BFFF]/20 to-blue-600/20 rounded-lg border border-[#00BFFF]">
            <h3 className="text-xl font-bold mb-4">Key Advantage: Cost Per Impression</h3>
            <p className="text-gray-300">
              Mobile billboards deliver <span className="text-[#00BFFF] font-bold">2-3x more impressions</span> than static billboards
              while maintaining flexibility to target high-traffic events, rush hours, and specific demographics.
              Your cost per thousand impressions (CPM) is often <span className="font-bold">30-50% lower</span> than static options.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Calculate Your ROI</h2>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-[#00BFFF]">Sample ROI Calculation</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
                <span>Campaign Cost (1 month, standard package)</span>
                <span className="font-bold">$25,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
                <span>Est. Monthly Impressions</span>
                <span className="font-bold">100,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
                <span>Conversion Rate (conservative 1%)</span>
                <span className="font-bold">1,000 actions</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
                <span>Average Customer Value</span>
                <span className="font-bold">$100</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded">
                <span className="font-bold text-lg">Total Revenue Generated</span>
                <span className="font-bold text-2xl">$100,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-900/50 rounded border border-green-500">
                <span className="font-bold text-lg">ROI</span>
                <span className="font-bold text-2xl text-green-400">300%</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              * Results vary by industry, location, and campaign strategy. This example uses conservative estimates.
              Many clients see significantly higher conversion rates with targeted campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Custom Pricing for Your Campaign</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every campaign is unique. Get a personalized quote based on your specific goals,
            target audience, and service area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services/billboard-truck-rental"
              className="px-8 py-4 bg-gray-800 border-2 border-[#00BFFF] rounded-lg font-bold text-lg hover:bg-gray-700 transition-all"
            >
              View Rental Options
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/mobile-billboard-rental-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Billboard Rental Guide</h3>
              <p className="text-gray-400">Self-service vs managed campaign options</p>
            </Link>
            <Link href="/resources/event-marketing-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Event Marketing Guide</h3>
              <p className="text-gray-400">Maximize ROI at South Florida events</p>
            </Link>
            <Link href="/resources/small-business-billboard-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Small Business Guide</h3>
              <p className="text-gray-400">Affordable billboard advertising strategies</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
