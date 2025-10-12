import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Sparkles, ShoppingBag, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Design District Mobile Billboard Advertising | Miami Luxury Brand LED Trucks',
  description: 'Mobile billboard advertising in Miami Design District. Target luxury shoppers, art collectors & high-net-worth individuals with LED trucks.',
  keywords: ['design district mobile billboards', 'miami design district advertising', 'luxury brand marketing miami'],
  openGraph: {
    title: 'Design District Mobile Billboard Advertising | Maximax',
    description: 'Reach Miami\'s luxury shopping district with mobile LED billboard trucks. Perfect for high-end brands, galleries, and events.',
  },
}

export default function DesignDistrictPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Design District Mobile Billboard
            <br />
            Advertising
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Reach Miami's luxury shopping district - high-net-worth individuals, art collectors & fashion enthusiasts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/" className="btn-secondary">
              Get Design District Quote
            </Link>
            <a href="tel:5617200521" className="btn-secondary">
              Call (561) 720-0521
            </a>
          </div>
        </div>
      </section>

      {/* Why Design District */}
      <section className="section section-padding">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Advertise in the <span className="gradient-text">Design District?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-6 text-center">
              <Sparkles className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Ultra-Luxury Shopping</h3>
              <p className="text-gray-600">Hermès, Louis Vuitton, Dior - 130+ designer boutiques, $200K+ avg. customer spend</p>
            </div>
            <div className="card-glass p-6 text-center">
              <ShoppingBag className="w-12 h-12 text-maximax-cyan mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Affluent Demographics</h3>
              <p className="text-gray-600">$250K+ household income, international luxury travelers</p>
            </div>
            <div className="card-glass p-6 text-center">
              <Palette className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Art & Culture Hub</h3>
              <p className="text-gray-600">ICA Miami, art galleries, architecture tours - high-value audiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="section section-padding bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Perfect For Luxury Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">👜 Fashion & Jewelry</h3>
              <p className="text-gray-600">High-end boutiques, designer launches, trunk shows</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🏎️ Luxury Automotive</h3>
              <p className="text-gray-600">Exotic car dealerships, test drive events, launches</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🏠 Real Estate</h3>
              <p className="text-gray-600">Ultra-luxury condos ($5M+), private sales, broker events</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🎨 Art Galleries</h3>
              <p className="text-gray-600">Exhibition openings, Art Basel promotions, collector events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Routes */}
      <section className="section section-padding">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Prime <span className="gradient-text-cyan">Design District Routes</span>
          </h2>
          <div className="bg-white rounded-xl p-8">
            <h3 className="font-bold text-xl mb-4">📍 High-Impact Coverage Areas:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>NE 39th-41st Streets</strong>
                  <p className="text-gray-600">Luxury Retail Row - Hermès, Dior, Valentino</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>NE 2nd Avenue</strong>
                  <p className="text-gray-600">Main corridor - valet parking, pedestrian traffic</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>Palm Court</strong>
                  <p className="text-gray-600">Outdoor dining plaza - evening crowds</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>ICA Miami (Institute of Contemporary Art)</strong>
                  <p className="text-gray-600">Art collectors, cultural events, gallery nights</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Design District Campaign Pricing</h2>
          <p className="text-xl text-white/90 mb-8">
            Starting at <strong>$895/day</strong> for 8-hour coverage reaching 20K-40K affluent shoppers
          </p>
          <Link href="/pricing/" className="btn-secondary">
            View All Pricing
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-padding">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Reach Miami's <span className="gradient-text">Luxury Shoppers?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our mobile billboards reach more Design District visitors than any static billboard. Perfect for luxury brands and high-end events.
          </p>
          <Link href="/contact/" className="btn-primary">
            Get Design District Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
