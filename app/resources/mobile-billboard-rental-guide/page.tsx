import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobile Billboard Rental Guide 2025 | Self-Service & Managed Options | Maximax',
  description: 'Complete guide to renting mobile billboard trucks in South Florida. Compare self-service rental vs fully managed campaigns. Daily, weekly, and monthly rental rates for Miami, Fort Lauderdale, and Palm Beach County.',
  openGraph: {
    title: 'Mobile Billboard Rental Guide | Self-Service & Fully Managed Options',
    description: 'Rent LED billboard trucks for your South Florida campaign. Self-drive from $400/day or fully managed campaigns from $900/day. Flexible rental terms available.',
    url: 'https://maximaxmobileadvertising.com/resources/mobile-billboard-rental-guide/',
    type: 'article',
  },
}

export default function MobileBillboardRentalGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mobile Billboard Rental Guide 2025
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Rent LED billboard trucks for your campaign. Choose between self-service rental
            or fully managed campaigns with professional route planning and analytics.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Rental Options</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-[#00BFFF]">
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Self-Service Rental</h3>
              <div className="text-3xl font-bold mb-4">$400-$600<span className="text-lg text-gray-400">/day</span></div>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li>✓ Drive the truck yourself</li>
                <li>✓ Control your own routes</li>
                <li>✓ Basic training provided</li>
                <li>✓ 4K LED display included</li>
                <li>✓ Insurance required</li>
              </ul>
              <Link href="/services/billboard-truck-rental" className="block w-full text-center px-6 py-3 bg-[#00BFFF] rounded-lg font-bold hover:bg-blue-500 transition-all">
                Learn More
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF] to-blue-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Fully Managed Campaign</h3>
              <div className="text-3xl font-bold mb-4">$900-$1,800<span className="text-lg">/day</span></div>
              <ul className="space-y-3 mb-6">
                <li>✓ Professional drivers</li>
                <li>✓ GPS route optimization</li>
                <li>✓ Real-time analytics</li>
                <li>✓ Campaign management</li>
                <li>✓ Performance reporting</li>
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Rent a Mobile Billboard?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with a free consultation. We'll help you choose the best option for your campaign goals and budget.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
