import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Billboard Design Best Practices 2025 | Mobile Billboard Creative Guide | Maximax',
  description: 'Professional billboard design guide for mobile LED displays. Learn best practices for fonts, colors, messaging, readability, and high-impact creative for South Florida mobile billboard campaigns. Expert tips for Miami, Fort Lauderdale, and Palm Beach advertising.',
  openGraph: {
    title: 'Billboard Design Best Practices | LED Display Creative Guide',
    description: 'Master mobile billboard design with proven best practices for readability, branding, and conversions. Expert creative guidance for 4K LED displays.',
    url: 'https://maximaxmobileadvertising.com/resources/billboard-design-guide/',
    type: 'article',
  },
}

export default function BillboardDesignGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Billboard Design Best Practices
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Create high-impact mobile billboard designs that grab attention, communicate clearly,
            and drive action. Professional design principles for 4K LED displays.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The 5-Second Rule</h2>

          <div className="bg-gradient-to-br from-[#00BFFF]/20 to-blue-600/20 p-8 rounded-lg border border-[#00BFFF] mb-12">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-[#00BFFF] mb-4">5 Seconds</div>
              <p className="text-xl text-gray-300">
                Average time viewers have to read and understand your billboard message
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">7 Words or Less</h3>
                <p className="text-gray-300">
                  Keep your main message under 7 words for instant comprehension
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">High Contrast</h3>
                <p className="text-gray-300">
                  Use bold color contrasts for maximum readability from a distance
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">Single Focus</h3>
                <p className="text-gray-300">
                  One clear call-to-action, not multiple competing messages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Typography Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <h3 className="text-2xl font-bold mb-6 text-green-400">✓ DO THIS</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Use sans-serif fonts</strong> (Arial, Helvetica, Futura) - cleaner and more readable from a distance
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Bold, thick letterforms</strong> - minimum stroke width for visibility
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <div>
                    <strong>ALL CAPS for headlines</strong> - easier to read at speed
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Generous letter spacing</strong> - improves readability on LED screens
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <div>
                    <strong>Minimum 18-inch letters</strong> for main message (viewable from 300+ feet)
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-red-500">
              <h3 className="text-2xl font-bold mb-6 text-red-400">✗ AVOID THIS</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <div>
                    <strong>Serif fonts</strong> (Times New Roman, Georgia) - thin strokes disappear at distance
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <div>
                    <strong>Script or decorative fonts</strong> - illegible at high speeds
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <div>
                    <strong>All lowercase text</strong> - harder to read quickly
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <div>
                    <strong>Tight letter spacing</strong> - letters blur together on LED pixels
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <div>
                    <strong>Small font sizes</strong> - unreadable beyond 100 feet
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Color Psychology & Contrast</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-full h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-2xl">HIGH CONTRAST</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Yellow + Black</h3>
              <p className="text-gray-400 text-sm mb-2">Best for: Caution, urgency, attention</p>
              <p className="text-gray-300 text-sm">Highest contrast ratio (19.56:1) - most visible combination</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-full h-32 bg-gradient-to-r from-white to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-2xl">CLASSIC</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">White + Black</h3>
              <p className="text-gray-400 text-sm mb-2">Best for: Elegance, professionalism</p>
              <p className="text-gray-300 text-sm">Second-highest contrast (21:1) - timeless and clean</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">BOLD</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Red + White</h3>
              <p className="text-gray-400 text-sm mb-2">Best for: Sales, urgency, action</p>
              <p className="text-gray-300 text-sm">High energy - drives immediate response</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">TRUST</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Blue + White</h3>
              <p className="text-gray-400 text-sm mb-2">Best for: Healthcare, finance, trust</p>
              <p className="text-gray-300 text-sm">Professional and calming - builds credibility</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-full h-32 bg-gradient-to-r from-green-500 to-green-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">GROWTH</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Green + White</h3>
              <p className="text-gray-400 text-sm mb-2">Best for: Environmental, health, wealth</p>
              <p className="text-gray-300 text-sm">Positive associations - eco-friendly brands</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="w-full h-32 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">ENERGY</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Orange + Black</h3>
              <p className="text-gray-400 text-sm mb-2">Best for: Food, sports, entertainment</p>
              <p className="text-gray-300 text-sm">High visibility - stimulates appetite and excitement</p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-red-500">
            <h3 className="text-xl font-bold mb-4 text-red-400">❌ Avoid Low-Contrast Combinations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-gray-300">Red on green (color-blind issues)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-gray-300">Blue on purple (too similar)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-gray-300">Yellow on white (washes out)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-gray-300">Gray on gray (no contrast)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Message Hierarchy & Layout</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">Information Priority</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">1. Main Message</span>
                    <span className="text-[#00BFFF]">50-60% of space</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Your core value proposition or offer (e.g., "50% OFF GRAND OPENING")
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">2. Call-to-Action</span>
                    <span className="text-[#00BFFF]">20-25% of space</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    What you want them to do (e.g., "CALL NOW" or "VISIT TODAY")
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">3. Contact Info</span>
                    <span className="text-[#00BFFF]">15-20% of space</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Phone number, website, or location (choose ONE, max TWO)
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">4. Logo/Branding</span>
                    <span className="text-[#00BFFF]">5-10% of space</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Company logo or brand identifier (don't dominate the design)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">Layout Guidelines</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Use whitespace generously</strong> - Don't cram every pixel. Open space improves readability.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Align to a grid</strong> - Center or left-align text, avoid diagonal or curved text paths.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Visual balance</strong> - Distribute elements evenly, don't overload one side.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Limit to 2-3 fonts max</strong> - Too many typefaces create visual clutter.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00BFFF] mr-3">•</span>
                  <div>
                    <strong>Use imagery sparingly</strong> - Photos/graphics should support the message, not distract.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry-Specific Design Tips</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">Restaurants</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Show mouth-watering food imagery</li>
                <li>✓ Use warm colors (red, orange, yellow)</li>
                <li>✓ Include specific offer ("$5 LUNCH SPECIAL")</li>
                <li>✓ Add proximity ("EXIT 23" or "2 BLOCKS AHEAD")</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">Real Estate</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ High-quality property photos</li>
                <li>✓ Bold price or "OPEN HOUSE TODAY"</li>
                <li>✓ Minimal text, maximum visual appeal</li>
                <li>✓ Agent photo builds trust</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">Healthcare</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Professional, clean design</li>
                <li>✓ Blue/green for trust and calm</li>
                <li>✓ Clear service ("SAME-DAY APPOINTMENTS")</li>
                <li>✓ Phone number prominent</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">Automotive</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Glamour shot of featured vehicle</li>
                <li>✓ Bold pricing or financing offer</li>
                <li>✓ Strong CTA ("TEST DRIVE TODAY")</li>
                <li>✓ Brand logo clearly visible</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">Events</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Event name + date prominent</li>
                <li>✓ High-energy colors and design</li>
                <li>✓ QR code for ticket sales</li>
                <li>✓ Countdown timer for urgency</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-[#00BFFF]">Retail</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Percentage off in huge font</li>
                <li>✓ Product imagery or lifestyle shots</li>
                <li>✓ Limited-time language ("3 DAYS ONLY")</li>
                <li>✓ Store location or website</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Mobile Billboard Design Checklist</h2>

          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#00BFFF]">Before Finalizing Your Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">7 words or less in main message</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">High contrast color combination</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">Sans-serif, bold fonts only</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">Single, clear call-to-action</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">ONE contact method (not 3+)</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">Tested from 300+ feet away</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#00BFFF]">Design Quality Checks</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">Readable in 5 seconds or less</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">Brand colors match guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">Images are high-resolution (300+ DPI)</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">No cluttered or busy backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">Optimized for 4K LED display (3840×2160)</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-gray-300">Proofread for typos and errors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Design Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our in-house design team creates high-impact billboard creative optimized for
            mobile LED displays. Free design consultation with every campaign.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            Get Free Design Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/measure-billboard-roi" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Measure Billboard ROI</h3>
              <p className="text-gray-400">Track campaign performance and conversions</p>
            </Link>
            <Link href="/resources/billboard-cost-guide" className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">Billboard Cost Guide</h3>
              <p className="text-gray-400">Transparent pricing and budget planning</p>
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
