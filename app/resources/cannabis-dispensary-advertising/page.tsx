import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cannabis Dispensary Advertising | CBD & Marijuana Billboard Marketing | Maximax',
  description: 'Compliant cannabis and CBD dispensary advertising in South Florida. Mobile billboard marketing for marijuana dispensaries, CBD shops, and cannabis brands in Miami, Fort Lauderdale, and Palm Beach. Navigate advertising restrictions with strategic billboard campaigns.',
  openGraph: {
    title: 'Cannabis Dispensary Advertising | Compliant Mobile Billboard Marketing',
    description: 'Navigate cannabis advertising restrictions with mobile billboards. Compliant marketing for dispensaries, CBD shops, and cannabis brands in South Florida.',
    url: 'https://maximaxmobileadvertising.com/resources/cannabis-dispensary-advertising/',
    type: 'article',
  },
}

export default function CannabisDispensaryAdvertisingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cannabis Dispensary Advertising
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Navigate advertising restrictions with compliant mobile billboard campaigns.
            Reach cannabis consumers in South Florida without violating state or local regulations.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Mobile Billboards for Cannabis?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Limited Ad Options</h3>
              <p className="text-gray-300 mb-4">
                Facebook, Google, and most traditional media ban cannabis advertising.
                Mobile billboards provide a compliant alternative.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ No social media bans</li>
                <li>✓ No search engine restrictions</li>
                <li>✓ Direct local reach</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Precise Targeting</h3>
              <p className="text-gray-300 mb-4">
                Route trucks to avoid schools, playgrounds, and restricted areas while
                maximizing exposure in compliant zones.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ GPS route compliance</li>
                <li>✓ Age-restricted targeting</li>
                <li>✓ Avoid sensitive areas</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">High Conversion</h3>
              <p className="text-gray-300 mb-4">
                Cannabis consumers actively seek local dispensaries. Mobile billboards
                drive immediate foot traffic and online orders.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ Same-day store visits</li>
                <li>✓ Menu browsing online</li>
                <li>✓ Loyalty program signups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Florida Cannabis Advertising Compliance</h2>

          <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 p-8 rounded-lg border-2 border-yellow-500 mb-12">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">⚠️</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Compliance Requirements</h3>
                <p className="text-gray-200 mb-4">
                  Florida law restricts cannabis advertising to ensure it doesn't target minors or
                  appear near schools. Our mobile billboard campaigns are designed for full compliance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-yellow-300">Required Elements:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>✓ 21+ age restriction messaging</li>
                      <li>✓ Medical card requirement (if applicable)</li>
                      <li>✓ Florida Department of Health compliance</li>
                      <li>✓ No health claims or medical advice</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-yellow-300">Route Restrictions:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>✓ 500+ feet from schools</li>
                      <li>✓ Avoid playgrounds and daycares</li>
                      <li>✓ No youth-focused events</li>
                      <li>✓ GPS-verified compliance routes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <h3 className="text-2xl font-bold mb-6 text-green-400">✓ COMPLIANT Messages</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded">
                  <div className="font-bold text-green-300 mb-1">"NEW DISPENSARY NOW OPEN"</div>
                  <p className="text-sm text-gray-400">Direct, informational, no health claims</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="font-bold text-green-300 mb-1">"21+ MEDICAL MARIJUANA - VALID FL MMJ CARD REQUIRED"</div>
                  <p className="text-sm text-gray-400">Includes age restriction and card requirement</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="font-bold text-green-300 mb-1">"PREMIUM CBD PRODUCTS - SHOP NOW"</div>
                  <p className="text-sm text-gray-400">CBD is legal, clear call-to-action</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="font-bold text-green-300 mb-1">"FIRST-TIME PATIENT DISCOUNT - 25% OFF"</div>
                  <p className="text-sm text-gray-400">Promotional offer with patient focus</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-red-500">
              <h3 className="text-2xl font-bold mb-6 text-red-400">✗ NON-COMPLIANT Messages</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded">
                  <div className="font-bold text-red-300 mb-1">"FEEL BETTER - TRY CANNABIS"</div>
                  <p className="text-sm text-gray-400">❌ Health claim violation</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="font-bold text-red-300 mb-1">"CURE YOUR PAIN NATURALLY"</div>
                  <p className="text-sm text-gray-400">❌ Medical claim, implies treatment</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="font-bold text-red-300 mb-1">"GET HIGH QUALITY CANNABIS"</div>
                  <p className="text-sm text-gray-400">❌ "Get high" implies recreational use</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <div className="font-bold text-red-300 mb-1">"WEED DEALS - NO CARD NEEDED"</div>
                  <p className="text-sm text-gray-400">❌ Suggests illegal sales without MMJ card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Campaign Strategies by Business Type</h2>

          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏪</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Medical Marijuana Dispensaries</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Target Audience:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Florida MMJ cardholders (21+)</li>
                        <li>• Chronic pain patients</li>
                        <li>• Cancer/PTSD patients</li>
                        <li>• Seniors seeking alternatives</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Best Routes:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Medical districts</li>
                        <li>• Senior communities (55+)</li>
                        <li>• Near pain clinics</li>
                        <li>• Residential neighborhoods</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Key Messages:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• "Now accepting new patients"</li>
                        <li>• "Expert consultations available"</li>
                        <li>• "Wide product selection"</li>
                        <li>• "First-time patient discounts"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌿</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">CBD Shops & Wellness Stores</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Target Audience:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Health-conscious consumers</li>
                        <li>• Athletes & fitness enthusiasts</li>
                        <li>• Pet owners (CBD for pets)</li>
                        <li>• General wellness seekers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Best Routes:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Shopping centers</li>
                        <li>• Gyms & yoga studios</li>
                        <li>• Health food stores</li>
                        <li>• Beach areas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Key Messages:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• "Premium CBD products"</li>
                        <li>• "Lab-tested quality"</li>
                        <li>• "CBD for wellness"</li>
                        <li>• "Pet CBD available"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏭</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Cannabis Brands & Cultivators</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Campaign Goals:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Brand awareness building</li>
                        <li>• New strain launches</li>
                        <li>• Retail partner promotions</li>
                        <li>• Event sponsorship visibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Strategic Timing:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• 4/20 (major cannabis holiday)</li>
                        <li>• Cannabis industry events</li>
                        <li>• Product launch windows</li>
                        <li>• Harvest season campaigns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Key Messages:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• "Now available at [retailers]"</li>
                        <li>• "Locally grown in Florida"</li>
                        <li>• "New strain: [name]"</li>
                        <li>• "Award-winning cultivator"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Cannabis Advertising Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">Design Guidelines</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Professional & Clean</strong> - Avoid stereotypical cannabis imagery (smoke, tie-dye, etc.)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Green Color Palette</strong> - Use greens, whites, and earth tones for wellness association
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Medical Focus</strong> - Emphasize wellness, relief, and quality over recreational aspects
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Age Disclaimer</strong> - Always include "21+" or "18+" prominently in design
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">Route Optimization</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>GPS Compliance Zones</strong> - Pre-programmed routes avoid schools and restricted areas
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Adult Demographics</strong> - Target affluent neighborhoods, business districts, medical areas
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Event Avoidance</strong> - Stay clear of youth sports, family festivals, school events
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Documentation</strong> - GPS tracking provides proof of compliance for regulatory audits
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing for Cannabis Dispensary Campaigns</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-[#00BFFF]">
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">Grand Opening</h3>
              <div className="text-3xl font-bold mb-4">$4,500<span className="text-lg text-gray-400">/week</span></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ 5 days of coverage</li>
                <li>✓ Compliance-verified routes</li>
                <li>✓ GPS tracking & analytics</li>
                <li>✓ Age-restricted targeting</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF] to-blue-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Monthly Brand</h3>
              <div className="text-3xl font-bold mb-4">$15,000<span className="text-lg">/month</span></div>
              <ul className="space-y-2 text-sm">
                <li>✓ 20 days of coverage</li>
                <li>✓ Multi-route deployment</li>
                <li>✓ Compliance consultation</li>
                <li>✓ Performance reporting</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-[#00BFFF]">
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">Product Launch</h3>
              <div className="text-3xl font-bold mb-4">$2,800<span className="text-lg text-gray-400">/weekend</span></div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Fri-Sun coverage</li>
                <li>✓ High-traffic routes</li>
                <li>✓ Event coordination</li>
                <li>✓ QR code tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Launch Your Compliant Cannabis Campaign</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance on Florida cannabis advertising compliance and strategic
            route planning for maximum legal exposure.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            Get Compliant Campaign Plan
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            Free compliance consultation • GPS-verified routes • Full regulatory documentation
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/grand-opening-billboard-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Grand Opening Guide</h3>
              <p className="text-gray-400">Launch strategies for new dispensaries</p>
            </Link>
            <Link href="/resources/billboard-design-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Design Best Practices</h3>
              <p className="text-gray-400">Professional cannabis billboard creative</p>
            </Link>
            <Link href="/resources/measure-billboard-roi" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Measure Billboard ROI</h3>
              <p className="text-gray-400">Track dispensary foot traffic and sales</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
