import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automotive Dealership Billboard Advertising | Car Dealer Marketing | Maximax',
  description: 'Drive showroom traffic with mobile billboard advertising for car dealerships in South Florida. Promote new inventory, sales events, and service specials in Miami, Fort Lauderdale, and Palm Beach. Proven automotive marketing strategies.',
  openGraph: {
    title: 'Automotive Dealership Advertising | Mobile Billboard Marketing for Car Dealers',
    description: 'Dominate your market with mobile billboard campaigns. Showcase inventory, promote sales events, and drive test drives for South Florida car dealerships.',
    url: 'https://maximaxmobileadvertising.com/resources/automotive-dealership-advertising/',
    type: 'article',
  },
}

export default function AutomotiveDealershipAdvertisingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Automotive Dealership Billboard Advertising
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Drive showroom traffic and test drives with high-impact mobile billboard campaigns.
            Showcase inventory, promote sales events, and dominate your South Florida market.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Mobile Billboards for Auto Dealers?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Showcase Inventory</h3>
              <p className="text-gray-300 mb-4">
                Display stunning vehicle imagery on 4K LED screens. Highlight new models,
                certified pre-owned, and special editions with showroom-quality visuals.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ High-res vehicle photos</li>
                <li>✓ Pricing & incentives</li>
                <li>✓ Model comparisons</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Target Shoppers</h3>
              <p className="text-gray-300 mb-4">
                Route trucks to competitor dealerships, affluent neighborhoods, and high-traffic
                commuter routes where car buyers are actively shopping.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ Competitive conquest</li>
                <li>✓ Demographic targeting</li>
                <li>✓ Rush hour visibility</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Track ROI</h3>
              <p className="text-gray-300 mb-4">
                Measure campaign impact with unique promo codes, dedicated phone lines,
                and GPS analytics showing exactly where potential buyers saw your ad.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ Test drive tracking</li>
                <li>✓ Showroom foot traffic</li>
                <li>✓ Sales attribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Campaign Types for Auto Dealers</h2>

          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">New Model Launch Campaigns</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3">Strategy:</h4>
                  <p className="text-gray-300 mb-4">
                    Create buzz for new model arrivals with teaser campaigns followed by launch-day
                    blitz. Showcase key features, pricing, and availability.
                  </p>
                  <h4 className="font-bold mb-3">Best Timing:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• 2 weeks before arrival: Teaser campaign</li>
                    <li>• Launch week: High-frequency coverage</li>
                    <li>• First month: Sustained awareness</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-[#00BFFF]">Example Messages:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-gray-700 rounded">
                      "2025 [MODEL] - ARRIVING SOON"
                    </div>
                    <div className="p-3 bg-gray-700 rounded">
                      "NOW IN STOCK - TEST DRIVE TODAY"
                    </div>
                    <div className="p-3 bg-gray-700 rounded">
                      "LIMITED EDITION - ONLY 10 AVAILABLE"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">Sales Event Promotions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-3">President's Day Sale</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Target: February long weekend</li>
                    <li>• Routes: High-traffic commuter</li>
                    <li>• Message: "$5,000 off MSRP"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Memorial/Labor Day</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Target: Summer travel weekends</li>
                    <li>• Routes: Beach, mall, highways</li>
                    <li>• Message: "0% APR financing"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Year-End Clearance</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Target: November-December</li>
                    <li>• Routes: Affluent neighborhoods</li>
                    <li>• Message: "2024 models - up to 30% off"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">Service Department Marketing</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3">Target Audience:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Existing vehicle owners (3+ years old)</li>
                    <li>• Out-of-warranty customers</li>
                    <li>• Competitive service defectors</li>
                    <li>• High-mileage vehicle owners</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Promotional Offers:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• "$99 oil change + inspection"</li>
                    <li>• "Free brake inspection"</li>
                    <li>• "10% off service (first visit)"</li>
                    <li>• "Same-day service available"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Targeting Strategies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">Competitive Conquest</h3>
              <p className="text-gray-300 mb-4">
                Position mobile billboards near competing dealerships to intercept shoppers
                actively in the market.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Route billboards past competitor lots</strong> during peak shopping hours (weekends, evenings)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Highlight your advantages:</strong> Better pricing, larger selection, superior service
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Brand comparison messaging:</strong> "Compare before you buy - visit us first"
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">Demographic Precision</h3>
              <p className="text-gray-300 mb-4">
                Target specific buyer demographics based on vehicle type and price point.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-sm mb-2">Luxury Vehicles:</h4>
                  <p className="text-gray-400 text-sm">High-income zip codes, country clubs, upscale shopping districts</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-2">Family SUVs/Minivans:</h4>
                  <p className="text-gray-400 text-sm">Suburban neighborhoods, schools, family entertainment venues</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-2">Sports Cars/Performance:</h4>
                  <p className="text-gray-400 text-sm">Beach areas, nightlife districts, sporting events</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-2">Trucks/Commercial:</h4>
                  <p className="text-gray-400 text-sm">Construction zones, industrial parks, rural areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Auto Dealer Campaign Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-[#00BFFF]">
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">Weekend Blitz</h3>
              <div className="text-3xl font-bold mb-4">$1,800<span className="text-lg text-gray-400">/weekend</span></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Sat-Sun coverage (8hrs/day)</li>
                <li>✓ Competitor lot routes</li>
                <li>✓ High-traffic corridors</li>
                <li>✓ Test drive promo codes</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF] to-blue-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sales Event</h3>
              <div className="text-3xl font-bold mb-4">$6,500<span className="text-lg">/week</span></div>
              <ul className="space-y-2 text-sm">
                <li>✓ 7-day full coverage</li>
                <li>✓ Multi-route deployment</li>
                <li>✓ Event coordination</li>
                <li>✓ Performance analytics</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-[#00BFFF]">
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">Monthly Brand</h3>
              <div className="text-3xl font-bold mb-4">$18,000<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ 20 days coverage</li>
                <li>✓ Market dominance strategy</li>
                <li>✓ Inventory rotation</li>
                <li>✓ Monthly reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Drive More Showroom Traffic</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom automotive dealership campaign plan. We'll create targeting strategies,
            creative concepts, and ROI projections tailored to your inventory and market.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            Get Free Dealership Campaign Plan
          </Link>
        </div>
      </section>
    </main>
  )
}
