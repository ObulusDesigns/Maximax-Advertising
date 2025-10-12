import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Sun, Users, PartyPopper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'South Beach Mobile Billboard Advertising | Miami Beach LED Trucks',
  description: 'Mobile billboard advertising in South Beach Miami. Target tourists, beachgoers & Ocean Drive crowds. Perfect for nightclubs, hotels & restaurants.',
  keywords: ['south beach mobile billboards', 'miami beach advertising', 'ocean drive marketing'],
}

export default function SouthBeachPage() {
  return (
    <main>
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">South Beach Mobile Billboards</h1>
          <p className="text-xl text-white/90 mb-8">
            Reach 5M+ annual tourists on Ocean Drive & Collins Avenue. Perfect for hotels, nightclubs & luxury brands.
          </p>
          <Link href="/contact/" className="btn-secondary">Get Quote</Link>
        </div>
      </section>
      <section className="section section-padding">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why <span className="gradient-text">South Beach?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-6 text-center">
              <Sun className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">5M+ Annual Tourists</h3>
              <p className="text-gray-600">#1 Florida destination</p>
            </div>
            <div className="card-glass p-6 text-center">
              <Users className="w-12 h-12 text-maximax-cyan mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Affluent Demographics</h3>
              <p className="text-gray-600">High-income travelers</p>
            </div>
            <div className="card-glass p-6 text-center">
              <PartyPopper className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">24/7 Activity</h3>
              <p className="text-gray-600">Always busy</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-padding bg-gray-50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">Prime Routes</h2>
          <div className="bg-white rounded-xl p-8 space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-maximax-cyan mt-1" />
              <div><strong>Ocean Drive</strong> - 100K+ weekly visitors</div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-maximax-cyan mt-1" />
              <div><strong>Collins Avenue</strong> - Hotel row, luxury shopping</div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-maximax-cyan mt-1" />
              <div><strong>Washington Avenue</strong> - Club district</div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-maximax-cyan mt-1" />
              <div><strong>Lincoln Road</strong> - Pedestrian mall</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-padding">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Dominate South Beach</h2>
          <p className="text-xl text-gray-600 mb-8">Starting at $895/day</p>
          <Link href="/pricing/" className="btn-primary">View Pricing</Link>
        </div>
      </section>
    </main>
  )
}
