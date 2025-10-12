import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Building2, TrendingUp, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Brickell Mobile Billboard Advertising | Miami Financial District LED Trucks',
  description: 'Mobile billboard advertising in Brickell Miami. Target finance professionals, luxury condo residents & business executives.',
  keywords: ['brickell mobile billboards', 'brickell advertising', 'miami financial district marketing'],
}

export default function BrickellPage() {
  return (
    <main>
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Brickell Mobile Billboards</h1>
          <p className="text-xl text-white/90 mb-8">
            Reach Miami's financial district - executives, professionals & luxury residents
          </p>
          <Link href="/contact/" className="btn-secondary">Get Quote</Link>
        </div>
      </section>
      <section className="section section-padding">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why <span className="gradient-text">Brickell?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-6 text-center">
              <Building2 className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Financial Hub</h3>
              <p className="text-gray-600">Banks, law firms, Fortune 500 offices</p>
            </div>
            <div className="card-glass p-6 text-center">
              <TrendingUp className="w-12 h-12 text-maximax-cyan mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">High-Income Residents</h3>
              <p className="text-gray-600">$150K+ median household income</p>
            </div>
            <div className="card-glass p-6 text-center">
              <Briefcase className="w-12 h-12 text-maximax-pink mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">50K+ Daily Commuters</h3>
              <p className="text-gray-600">Rush hour traffic goldmine</p>
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
              <div><strong>Brickell Avenue</strong> - Main artery, 80K+ vehicles/day</div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-maximax-cyan mt-1" />
              <div><strong>Brickell Key Drive</strong> - Luxury condos, waterfront</div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-maximax-cyan mt-1" />
              <div><strong>Mary Brickell Village</strong> - Shopping & dining hub</div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-maximax-cyan mt-1" />
              <div><strong>SW 8th Street</strong> - Commercial corridor</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-padding">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Reach Brickell Professionals</h2>
          <p className="text-xl text-gray-600 mb-8">Starting at $895/day</p>
          <Link href="/pricing/" className="btn-primary">View Pricing</Link>
        </div>
      </section>
    </main>
  )
}
