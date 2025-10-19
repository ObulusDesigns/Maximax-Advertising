import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Measure Billboard ROI | Mobile Billboard Analytics & Tracking | Maximax',
  description: 'Comprehensive guide to measuring mobile billboard advertising ROI in South Florida. Track impressions, conversions, GPS analytics, and campaign performance. Learn proven methods to calculate billboard advertising return on investment for Miami, Fort Lauderdale, and West Palm Beach campaigns.',
  openGraph: {
    title: 'How to Measure Billboard ROI | GPS Analytics & Performance Tracking',
    description: 'Master billboard ROI tracking with GPS analytics, conversion tracking, and performance metrics. Real-time data for South Florida mobile billboard campaigns.',
    url: 'https://maximaxmobileadvertising.com/resources/measure-billboard-roi/',
    type: 'article',
  },
}

export default function MeasureBillboardROIPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to Measure Billboard ROI
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Track and prove the value of your mobile billboard campaigns with GPS analytics,
            conversion tracking, and performance metrics. Data-driven insights for South Florida advertisers.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">5 Key Metrics to Track</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">GPS Impressions</h3>
              <p className="text-gray-300 mb-4">
                Real-time tracking shows exactly where your truck traveled and how many people
                saw your ad based on traffic density.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Heatmap visualization</li>
                <li>• Time-of-day analysis</li>
                <li>• Route optimization data</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Call Tracking</h3>
              <p className="text-gray-300 mb-4">
                Use unique phone numbers on your billboard to track exactly how many calls
                your campaign generates.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Campaign-specific numbers</li>
                <li>• Call recording available</li>
                <li>• Peak calling times</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Website Traffic</h3>
              <p className="text-gray-300 mb-4">
                Monitor spikes in direct traffic, branded searches, and campaign-specific
                landing page visits during billboard run times.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Google Analytics integration</li>
                <li>• UTM parameter tracking</li>
                <li>• Custom landing pages</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Conversion Rate</h3>
              <p className="text-gray-300 mb-4">
                Track how many billboard impressions convert to actual customers through
                promo codes, unique URLs, or QR codes.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Promo code redemption</li>
                <li>• QR code scans</li>
                <li>• Form submissions</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Revenue Attribution</h3>
              <p className="text-gray-300 mb-4">
                Calculate total revenue generated from billboard-driven leads and customers
                to determine true campaign profitability.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Customer lifetime value</li>
                <li>• Average transaction size</li>
                <li>• Repeat purchase rate</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Brand Lift</h3>
              <p className="text-gray-300 mb-4">
                Measure increases in brand awareness, search volume, and social media
                engagement during and after campaigns.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Google Trends data</li>
                <li>• Social media mentions</li>
                <li>• Brand search volume</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ROI Calculation Formula</h2>

          <div className="bg-gray-900 p-8 rounded-lg mb-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-[#00BFFF] to-blue-600 p-6 rounded-lg">
                <p className="text-sm mb-2">Billboard ROI Formula</p>
                <p className="text-2xl font-bold">
                  ROI = [(Revenue - Campaign Cost) / Campaign Cost] × 100
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#00BFFF]">What to Include in Campaign Cost</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Billboard truck rental/service fees</li>
                  <li>✓ Creative design costs</li>
                  <li>✓ Route planning/optimization</li>
                  <li>✓ GPS tracking & analytics</li>
                  <li>✓ Landing page development</li>
                  <li>✓ Call tracking setup</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#00BFFF]">What to Include in Revenue</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Direct sales from billboard leads</li>
                  <li>✓ Phone call conversions</li>
                  <li>✓ Promo code redemptions</li>
                  <li>✓ Web form submissions</li>
                  <li>✓ In-store visits (if tracked)</li>
                  <li>✓ Long-term customer value</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00BFFF]/20 to-blue-600/20 p-8 rounded-lg border border-[#00BFFF]">
            <h3 className="text-2xl font-bold mb-6">Real Example Calculation</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded">
                <span>Campaign Cost (1 week, standard package)</span>
                <span className="font-bold">$6,500</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded">
                <span>GPS-Tracked Impressions</span>
                <span className="font-bold">85,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded">
                <span>Phone Calls Received (call tracking)</span>
                <span className="font-bold">127</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded">
                <span>Conversions (42% close rate)</span>
                <span className="font-bold">53 customers</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded">
                <span>Average Customer Value</span>
                <span className="font-bold">$450</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded">
                <span className="font-bold text-lg">Total Revenue Generated</span>
                <span className="font-bold text-2xl">$23,850</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-900/50 rounded border border-green-500">
                <span className="font-bold text-lg">ROI</span>
                <span className="font-bold text-2xl text-green-400">267%</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              * Real campaign data from a Fort Lauderdale home services client. Results may vary by industry,
              location, and campaign strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tracking Tools We Provide</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">GPS Analytics Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Real-time map showing truck location, route history, and estimated impressions
                based on traffic density at each location.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ Live truck tracking</li>
                <li>✓ Heatmap visualization</li>
                <li>✓ Hourly impression reports</li>
                <li>✓ Route replay feature</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">Performance Reports</h3>
              <p className="text-gray-300 mb-4">
                Weekly and monthly reports summarizing campaign reach, engagement metrics,
                and ROI calculations with visual charts.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ Impression totals</li>
                <li>✓ Geographic breakdown</li>
                <li>✓ Peak performance times</li>
                <li>✓ Comparison to benchmarks</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">Conversion Integration</h3>
              <p className="text-gray-300 mb-4">
                Connect your CRM, Google Analytics, and call tracking to attribute revenue
                directly to billboard campaigns.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ CRM integration</li>
                <li>✓ Google Analytics tags</li>
                <li>✓ Call tracking numbers</li>
                <li>✓ Promo code tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Industry Benchmarks</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
              <thead className="bg-[#00BFFF] text-black">
                <tr>
                  <th className="p-4 text-left">Industry</th>
                  <th className="p-4 text-left">Avg. Conversion Rate</th>
                  <th className="p-4 text-left">Typical ROI</th>
                  <th className="p-4 text-left">Best Tracking Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="p-4 font-bold">Restaurants</td>
                  <td className="p-4">2.5-4%</td>
                  <td className="p-4 text-green-400">150-250%</td>
                  <td className="p-4">Promo codes, foot traffic</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Real Estate</td>
                  <td className="p-4">0.8-1.5%</td>
                  <td className="p-4 text-green-400">300-500%</td>
                  <td className="p-4">Call tracking, unique URLs</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Auto Services</td>
                  <td className="p-4">1.5-2.5%</td>
                  <td className="p-4 text-green-400">200-350%</td>
                  <td className="p-4">Phone calls, appointments</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Healthcare</td>
                  <td className="p-4">1-2%</td>
                  <td className="p-4 text-green-400">250-400%</td>
                  <td className="p-4">Call tracking, web forms</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Retail/E-commerce</td>
                  <td className="p-4">3-5%</td>
                  <td className="p-4 text-green-400">180-280%</td>
                  <td className="p-4">Promo codes, web analytics</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Events/Entertainment</td>
                  <td className="p-4">4-6%</td>
                  <td className="p-4 text-green-400">200-400%</td>
                  <td className="p-4">Ticket sales, QR codes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Tracking Your Billboard ROI</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free campaign analysis and learn how to maximize ROI with GPS tracking,
            conversion monitoring, and performance analytics.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            Get Free ROI Analysis
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/billboard-cost-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Billboard Cost Guide</h3>
              <p className="text-gray-400">Transparent pricing and ROI calculators</p>
            </Link>
            <Link href="/resources/event-marketing-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Event Marketing Guide</h3>
              <p className="text-gray-400">Maximize ROI at South Florida events</p>
            </Link>
            <Link href="/resources/small-business-billboard-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Small Business Guide</h3>
              <p className="text-gray-400">Budget-friendly advertising strategies</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
