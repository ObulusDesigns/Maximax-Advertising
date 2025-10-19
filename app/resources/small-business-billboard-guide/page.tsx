import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Small Business Billboard Advertising Guide | Affordable Marketing | Maximax',
  description: 'Affordable billboard advertising for small businesses in South Florida. Budget-friendly mobile billboard campaigns starting at $500/day. Local marketing strategies for Miami, Fort Lauderdale, and West Palm Beach small businesses.',
  openGraph: {
    title: 'Small Business Billboard Guide | Affordable Mobile Advertising',
    description: 'Budget-friendly billboard advertising for small businesses. Flexible campaigns from $500/day with no long-term contracts. Target your local market effectively.',
    url: 'https://maximaxmobileadvertising.com/resources/small-business-billboard-guide/',
    type: 'article',
  },
}

export default function SmallBusinessBillboardGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Small Business Billboard Advertising Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Affordable mobile billboard campaigns designed for local small businesses.
            No long-term contracts, flexible budgets, and maximum local impact.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Budget-Friendly Options</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Weekend Special</h3>
              <div className="text-3xl font-bold mb-4">$1,200<span className="text-lg text-gray-400">/weekend</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Saturday & Sunday coverage</li>
                <li>✓ 8 hours each day</li>
                <li>✓ Local neighborhood targeting</li>
                <li>✓ Perfect for grand openings</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Weekly Campaign</h3>
              <div className="text-3xl font-bold mb-4">$3,500<span className="text-lg text-gray-400">/week</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 5 days of coverage</li>
                <li>✓ Rush hour targeting</li>
                <li>✓ GPS tracking & analytics</li>
                <li>✓ Ideal for promotions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF] to-blue-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Monthly Package</h3>
              <div className="text-3xl font-bold mb-4">$12,000<span className="text-lg">/month</span></div>
              <ul className="space-y-3">
                <li>✓ 20 days of coverage</li>
                <li>✓ Full campaign management</li>
                <li>✓ Performance reporting</li>
                <li>✓ Best value for sustained growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Perfect for Local Businesses</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🍽️', type: 'Restaurants', example: 'Grand openings, new menu launches' },
              { icon: '🏠', type: 'Real Estate', example: 'Open houses, new developments' },
              { icon: '💪', type: 'Gyms & Fitness', example: 'Membership drives, class promotions' },
              { icon: '🏥', type: 'Medical', example: 'New practice announcements' },
              { icon: '🚗', type: 'Auto Services', example: 'Seasonal promotions, service specials' },
              { icon: '🏪', type: 'Retail Stores', example: 'Sales events, new store openings' },
              { icon: '🎓', type: 'Education', example: 'Enrollment periods, open houses' },
              { icon: '🔧', type: 'Home Services', example: 'Seasonal campaigns, special offers' },
            ].map((business) => (
              <div key={business.type} className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">{business.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">{business.type}</h3>
                <p className="text-sm text-gray-400">{business.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Local Campaign Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and custom quote for your small business.
            No long-term contracts, flexible scheduling, and transparent pricing.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            Get Free Small Business Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
