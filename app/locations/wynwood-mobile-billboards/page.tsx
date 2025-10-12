import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TrendingUp, Users, Clock, Palette, Music } from 'lucide-react'
import { ServicesAvailableSection } from '@/app/components/ServicesAvailableSection'
import { RelatedLocationsWidget } from '@/app/components/RelatedLocationsWidget'

export const metadata: Metadata = {
  title: 'Wynwood Mobile Billboard Advertising | LED Trucks Miami Art District',
  description: 'Mobile billboard advertising in Wynwood Miami. Target art lovers, foodies & nightlife crowds with LED trucks. Perfect for galleries, restaurants & events.',
  keywords: ['wynwood mobile billboards', 'wynwood advertising', 'miami art district marketing', 'wynwood led trucks'],
  openGraph: {
    title: 'Wynwood Mobile Billboard Advertising | Maximax',
    description: 'Reach Wynwood\'s creative crowd with mobile LED billboard trucks. Perfect for galleries, restaurants, and events.',
  },
}

export default function WynwoodPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Wynwood Mobile Billboard
            <br />
            Advertising
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Reach Miami's most creative neighborhood with mobile LED billboards targeting art lovers, foodies, and nightlife crowds in Wynwood.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/" className="btn-secondary">
              Get Wynwood Quote
            </Link>
            <a href="tel:5617200521" className="btn-secondary">
              Call (561) 720-0521
            </a>
          </div>
        </div>
      </section>

      {/* Why Wynwood */}
      <section className="section section-padding">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Advertise in <span className="gradient-text">Wynwood?</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-glass p-6 text-center">
                  <Palette className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Art District Hub</h3>
                  <p className="text-gray-600">50+ galleries, Wynwood Walls, Art Basel HQ - creative professionals everywhere</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <Users className="w-12 h-12 text-maximax-cyan mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">100K+ Monthly Visitors</h3>
                  <p className="text-gray-600">Tourists, locals, art collectors - highest foot traffic in Miami</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <Music className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Nightlife Central</h3>
                  <p className="text-gray-600">Bars, clubs, restaurants - evening crowds until 3 AM</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <Clock className="w-12 h-12 text-maximax-cyan mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">24/7 Activity</h3>
                  <p className="text-gray-600">Morning coffee crowds, lunch rush, evening art walks, late-night clubbers</p>
                </div>
              </div>
            </div>

            {/* Sidebar - Related Locations */}
            <div className="lg:col-span-1">
              <RelatedLocationsWidget
                currentLocation="Wynwood"
                county="Miami-Dade"
                relatedLocations={[
                  { name: 'Design District', slug: 'design-district-billboards', county: 'Miami-Dade', distance: '1 mile' },
                  { name: 'Brickell', slug: 'brickell-mobile-billboards', county: 'Miami-Dade', distance: '3 miles' },
                  { name: 'South Beach', slug: 'south-beach-mobile-billboards', county: 'Miami-Dade', distance: '4 miles' },
                  { name: 'Coconut Grove', slug: 'coconut-grove-advertising', county: 'Miami-Dade', distance: '5 miles' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="section section-padding bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Perfect For Wynwood Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🎨 Art Galleries & Studios</h3>
              <p className="text-gray-600">Promote exhibitions, openings, artist showcases</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🍽️ Restaurants & Bars</h3>
              <p className="text-gray-600">Happy hour specials, new menu items, events</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🎪 Events & Festivals</h3>
              <p className="text-gray-600">Concerts, art shows, pop-ups, street festivals</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-2">🏢 Creative Agencies</h3>
              <p className="text-gray-600">Brand launches, campaigns, hiring events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Locations */}
      <section className="section section-padding">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Prime <span className="gradient-text-cyan">Wynwood Routes</span>
          </h2>
          <div className="bg-white rounded-xl p-8">
            <h3 className="font-bold text-xl mb-4">📍 High-Impact Coverage Areas:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>NW 2nd Avenue (Wynwood Walls)</strong>
                  <p className="text-gray-600">Peak traffic: 50K+ weekly visitors, Instagram central</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>NW 25th-29th Streets</strong>
                  <p className="text-gray-600">Gallery row, restaurant strip, evening crowds</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>Wynwood Marketplace</strong>
                  <p className="text-gray-600">Food hall, breweries, weekend events</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-1" />
                <div>
                  <strong>NW 20th Street Corridor</strong>
                  <p className="text-gray-600">Commercial corridor, high vehicle traffic</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <ServicesAvailableSection cityName="Wynwood" />

      {/* Pricing CTA */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Wynwood Campaign Pricing</h2>
          <p className="text-xl text-white/90 mb-8">
            Starting at <strong>$895/day</strong> for 8-hour coverage reaching 30K-50K Wynwood visitors
          </p>
          <Link href="/pricing/" className="btn-secondary">
            View All Pricing
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-padding">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Dominate <span className="gradient-text">Wynwood?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our mobile billboards reach more Wynwood visitors than any static billboard. Get your free quote today.
          </p>
          <Link href="/contact/" className="btn-primary">
            Get Wynwood Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
