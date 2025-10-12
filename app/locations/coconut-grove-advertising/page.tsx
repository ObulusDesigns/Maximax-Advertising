import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Home, TreePine, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Coconut Grove Mobile Billboard Advertising | Miami Historic District LED Trucks',
  description: 'Mobile billboard advertising in Coconut Grove Miami. Target affluent families, waterfront residents & outdoor enthusiasts with LED trucks.',
  keywords: ['coconut grove mobile billboards', 'coconut grove advertising', 'miami grove marketing'],
  openGraph: {
    title: 'Coconut Grove Mobile Billboard Advertising | Maximax',
    description: 'Reach Coconut Grove\'s upscale residential community with mobile LED billboard trucks. Perfect for local businesses and family-focused brands.',
  },
}

export default function CoconutGrovePage() {
  return (
    <main>
      {/* Hero */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Coconut Grove Mobile Billboard
            <br />
            Advertising
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Reach Miami's most charming neighborhood - affluent families, waterfront residents & outdoor enthusiasts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/" className="btn-secondary">
              Get Coconut Grove Quote
            </Link>
            <a href="tel:5617200521" className="btn-secondary">
              Call (561) 720-0521
            </a>
          </div>
        </div>
      </section>

      {/* Why Coconut Grove */}
      <section className="section section-padding">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Advertise in <span className="gradient-text">Coconut Grove?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-6 text-center">
              <Home className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Affluent Residential</h3>
              <p className="text-gray-600">$180K+ median household income, $1M+ waterfront homes, established families</p>
            </div>
            <div className="card-glass p-6 text-center">
              <TreePine className="w-12 h-12 text-maximax-cyan mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Historic Village Charm</h3>
              <p className="text-gray-600">Founded 1873 - walkable streets, boutique shopping, outdoor dining</p>
            </div>
            <div className="card-glass p-6 text-center">
              <Users className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Family-Oriented</h3>
              <p className="text-gray-600">Top-rated schools, parks, farmers markets - community-focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="section section-padding bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Perfect For Grove Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🏠 Real Estate</h3>
              <p className="text-gray-600">Luxury homes, waterfront properties, open houses</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🍴 Restaurants & Cafes</h3>
              <p className="text-gray-600">Brunch specials, happy hour, local favorites</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🛍️ Boutique Retail</h3>
              <p className="text-gray-600">Local shops, CocoWalk stores, gift boutiques</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🎪 Community Events</h3>
              <p className="text-gray-600">Art festivals, farmers markets, Goombay Festival</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Routes */}
      <section className="section section-padding">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Prime <span className="gradient-text-cyan">Coconut Grove Routes</span>
          </h2>
          <div className="bg-white rounded-xl p-8">
            <h3 className="font-bold text-xl mb-4">📍 High-Impact Coverage Areas:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>Grand Avenue (Main Street)</strong>
                  <p className="text-gray-600">Shopping district - boutiques, restaurants, pedestrian traffic</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>CocoWalk</strong>
                  <p className="text-gray-600">Shopping & entertainment center - evening crowds, parking lot visibility</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>Bayshore Drive</strong>
                  <p className="text-gray-600">Waterfront route - luxury condos, marina, Peacock Park</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>Virginia Street</strong>
                  <p className="text-gray-600">Residential corridor - high-income families, morning/evening commute</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Coconut Grove Campaign Pricing</h2>
          <p className="text-xl text-white/90 mb-8">
            Starting at <strong>$895/day</strong> for 8-hour coverage reaching 25K-40K Grove residents & visitors
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
            Ready to Reach <span className="gradient-text">Coconut Grove?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our mobile billboards reach more Grove residents than any static billboard. Perfect for local businesses and community-focused brands.
          </p>
          <Link href="/contact/" className="btn-primary">
            Get Coconut Grove Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
