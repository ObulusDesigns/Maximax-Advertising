import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Seasonal Billboard Advertising Guide | Holiday & Event Marketing | Maximax',
  description: 'Maximize seasonal sales with strategic mobile billboard advertising in South Florida. Holiday campaigns, back-to-school promotions, spring break marketing, and seasonal event targeting for Miami, Fort Lauderdale, and Palm Beach businesses.',
  openGraph: {
    title: 'Seasonal Billboard Advertising Guide | Holiday Marketing Strategies',
    description: 'Strategic mobile billboard campaigns for every season. Holiday advertising, peak travel seasons, and event-based marketing in South Florida.',
    url: 'https://maximaxmobileadvertising.com/resources/seasonal-billboard-guide/',
    type: 'article',
  },
}

export default function SeasonalBillboardGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seasonal Billboard Advertising Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Capitalize on seasonal opportunities with strategic mobile billboard campaigns.
            From holiday shopping to spring break, maximize ROI during South Florida's peak seasons.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">South Florida Seasonal Calendar</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                season: 'Winter Holiday Season',
                months: 'November - December',
                icon: '🎄',
                opportunities: [
                  'Black Friday & Cyber Monday',
                  'Holiday shopping season',
                  'New Year\'s Eve events',
                  'Tourist influx (snowbirds)',
                ],
                bestFor: 'Retail, restaurants, entertainment venues',
                budget: '$$$',
              },
              {
                season: 'Spring Break',
                months: 'March - April',
                icon: '🏖️',
                opportunities: [
                  'College spring breakers',
                  'Family vacations',
                  'Beach events & parties',
                  'Ultra Music Festival',
                ],
                bestFor: 'Hotels, beach clubs, restaurants, nightlife',
                budget: '$$$',
              },
              {
                season: 'Summer Travel',
                months: 'June - August',
                icon: '☀️',
                opportunities: [
                  'Peak tourist season',
                  'Family vacations',
                  'Summer camps & activities',
                  'Outdoor events',
                ],
                bestFor: 'Tourism, water parks, family attractions',
                budget: '$$',
              },
              {
                season: 'Art Basel',
                months: 'December',
                icon: '🎨',
                opportunities: [
                  'Art Basel Miami Beach',
                  'Affluent international visitors',
                  'Gallery openings',
                  'Luxury brand activations',
                ],
                bestFor: 'Luxury retail, fine dining, high-end services',
                budget: '$$$$',
              },
              {
                season: 'Hurricane Season',
                months: 'June - November',
                icon: '🌀',
                opportunities: [
                  'Home improvement promotions',
                  'Insurance services',
                  'Emergency preparedness',
                  'Contractor services',
                ],
                bestFor: 'Home services, insurance, hardware stores',
                budget: '$',
              },
              {
                season: 'Back-to-School',
                months: 'July - August',
                icon: '🎒',
                opportunities: [
                  'School supply shopping',
                  'Clothing & shoes',
                  'Tutoring services',
                  'After-school programs',
                ],
                bestFor: 'Retail, education services, family businesses',
                budget: '$$',
              },
            ].map((season) => (
              <div key={season.season} className="bg-gray-900 p-6 rounded-lg border border-[#00BFFF]">
                <div className="text-4xl mb-3 text-center">{season.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-[#00BFFF] text-center">{season.season}</h3>
                <p className="text-gray-400 text-center mb-4">{season.months}</p>

                <div className="mb-4">
                  <h4 className="font-bold text-sm mb-2">Key Opportunities:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {season.opportunities.map((opp, idx) => (
                      <li key={idx}>• {opp}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <h4 className="font-bold text-sm mb-1">Best For:</h4>
                  <p className="text-sm text-gray-400">{season.bestFor}</p>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                  <span className="text-sm text-gray-400">Competition Level:</span>
                  <span className="text-[#00BFFF] font-bold">{season.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Holiday Campaign Strategies</h2>

          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎃</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-[#00BFFF]">Halloween (October)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Target Audience:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Families with children</li>
                        <li>• Party-goers (18-35)</li>
                        <li>• Event organizers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Best Messages:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• "HAUNTED HOUSE OPENS OCT 15"</li>
                        <li>• "COSTUME CONTEST - $500 PRIZE"</li>
                        <li>• "SPOOKY DEALS ALL OCTOBER"</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-800 rounded">
                    <strong className="text-[#00BFFF]">Pro Tip:</strong>
                    <span className="text-gray-300"> Target high-traffic residential neighborhoods 2 weeks before Halloween for maximum family reach.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎄</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-[#00BFFF]">Winter Holidays (Nov-Dec)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Peak Dates:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Black Friday (Nov 29)</li>
                        <li>• Cyber Monday (Dec 2)</li>
                        <li>• Dec 15-24 (last-minute shoppers)</li>
                        <li>• Dec 26-31 (after-Christmas sales)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Best Routes:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Shopping malls & retail districts</li>
                        <li>• Tourist destinations</li>
                        <li>• Affluent neighborhoods</li>
                        <li>• Airport routes (travelers)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-800 rounded">
                    <strong className="text-[#00BFFF]">Pro Tip:</strong>
                    <span className="text-gray-300"> Book 6-8 weeks in advance - holiday slots fill fast. Consider multi-truck campaigns for major retail events.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💘</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-[#00BFFF]">Valentine's Day (February)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Top Industries:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Restaurants (reservations)</li>
                        <li>• Florists & gift shops</li>
                        <li>• Jewelry stores</li>
                        <li>• Spas & wellness centers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Campaign Timeline:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Feb 1-7: Early planners</li>
                        <li>• Feb 8-13: Last-minute shoppers</li>
                        <li>• Feb 14: Day-of dining promotions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-800 rounded">
                    <strong className="text-[#00BFFF]">Pro Tip:</strong>
                    <span className="text-gray-300"> Target business districts during lunch hours (Feb 13-14) to capture last-minute gift buyers.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎆</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-[#00BFFF]">Summer (Memorial Day - Labor Day)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Key Weekends:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Memorial Day (late May)</li>
                        <li>• July 4th weekend</li>
                        <li>• Labor Day (early Sept)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Best Targets:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Beach routes (A1A corridor)</li>
                        <li>• Water parks & attractions</li>
                        <li>• Outdoor dining areas</li>
                        <li>• Tourist hotspots</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-800 rounded">
                    <strong className="text-[#00BFFF]">Pro Tip:</strong>
                    <span className="text-gray-300"> Run campaigns Thursday-Sunday during summer weekends for maximum tourist and local family reach.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Seasonal Pricing & Planning</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">Peak Season Pricing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
                  <div>
                    <div className="font-bold">Holiday Season</div>
                    <div className="text-sm text-gray-400">Nov-Dec</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00BFFF] font-bold">+20-30%</div>
                    <div className="text-xs text-gray-400">vs standard rates</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
                  <div>
                    <div className="font-bold">Spring Break</div>
                    <div className="text-sm text-gray-400">March-April</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00BFFF] font-bold">+15-25%</div>
                    <div className="text-xs text-gray-400">vs standard rates</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
                  <div>
                    <div className="font-bold">Art Basel Week</div>
                    <div className="text-sm text-gray-400">Early December</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00BFFF] font-bold">+30-40%</div>
                    <div className="text-xs text-gray-400">vs standard rates</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
                  <div>
                    <div className="font-bold">Off-Season</div>
                    <div className="text-sm text-gray-400">May, Sept-Oct</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">-10-15%</div>
                    <div className="text-xs text-gray-400">discount available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">Booking Timeline</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <strong>6-8 Weeks Ahead</strong>
                    <span className="text-green-400">✓ Best Availability</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Ideal for major holidays and events. Secure prime routes and dates.
                  </p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <strong>4-6 Weeks Ahead</strong>
                    <span className="text-yellow-400">⚠ Good Availability</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Still good options for most campaigns. Some premium slots may be taken.
                  </p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <strong>2-4 Weeks Ahead</strong>
                    <span className="text-orange-400">⚠ Limited Availability</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Limited inventory, especially for peak seasons and weekends.
                  </p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <strong>Last-Minute (1-2 weeks)</strong>
                    <span className="text-red-400">✗ Very Limited</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    May have openings, but expect limited route/date options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00BFFF]/20 to-blue-600/20 p-8 rounded-lg border border-[#00BFFF]">
            <h3 className="text-2xl font-bold mb-4 text-center">Early Bird Discounts Available</h3>
            <p className="text-center text-gray-300 mb-6">
              Book your seasonal campaign 8+ weeks in advance and receive up to 15% off standard rates.
              Applies to all major holiday and event campaigns.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
              >
                Reserve Your Seasonal Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Plan Your Seasonal Campaign</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance on timing, routes, and creative for your seasonal billboard campaign.
            Free consultation and campaign calendar planning included.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            Get Free Seasonal Campaign Plan
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/event-marketing-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Event Marketing Guide</h3>
              <p className="text-gray-400">Target major South Florida events</p>
            </Link>
            <Link href="/resources/billboard-cost-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Billboard Cost Guide</h3>
              <p className="text-gray-400">Pricing and ROI calculators</p>
            </Link>
            <Link href="/resources/billboard-design-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Design Best Practices</h3>
              <p className="text-gray-400">Create high-impact seasonal creative</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
