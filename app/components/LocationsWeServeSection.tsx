'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'

interface Location {
  name: string
  slug: string
  county: string
  isHighlight?: boolean
}

interface LocationsWeServeSectionProps {
  serviceName: string
}

const locations: Location[] = [
  // Major Cities (Highlighted)
  { name: 'Miami', slug: 'miami-beach-mobile-billboards', county: 'Miami-Dade', isHighlight: true },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale-mobile-billboards', county: 'Broward', isHighlight: true },
  { name: 'West Palm Beach', slug: 'west-palm-beach-mobile-billboards', county: 'Palm Beach', isHighlight: true },
  { name: 'Boca Raton', slug: 'boca-raton-billboard-advertising', county: 'Palm Beach', isHighlight: true },

  // Miami-Dade
  { name: 'Miami Beach', slug: 'miami-beach-mobile-billboards', county: 'Miami-Dade' },
  { name: 'Coral Gables', slug: 'coral-gables-mobile-advertising', county: 'Miami-Dade' },
  { name: 'Brickell', slug: 'brickell-mobile-billboards', county: 'Miami-Dade' },
  { name: 'Wynwood', slug: 'wynwood-mobile-billboards', county: 'Miami-Dade' },
  { name: 'South Beach', slug: 'south-beach-mobile-billboards', county: 'Miami-Dade' },
  { name: 'Design District', slug: 'design-district-billboards', county: 'Miami-Dade' },
  { name: 'Coconut Grove', slug: 'coconut-grove-advertising', county: 'Miami-Dade' },
  { name: 'Aventura', slug: 'aventura-billboard-trucks', county: 'Miami-Dade' },
  { name: 'Kendall', slug: 'kendall-outdoor-advertising', county: 'Miami-Dade' },
  { name: 'Homestead', slug: 'homestead-mobile-billboards', county: 'Miami-Dade' },

  // Broward
  { name: 'Hollywood', slug: 'hollywood-fl-billboard-trucks', county: 'Broward' },
  { name: 'Pembroke Pines', slug: 'pembroke-pines-advertising', county: 'Broward' },
  { name: 'Plantation', slug: 'plantation-mobile-billboards', county: 'Broward' },
  { name: 'Weston', slug: 'weston-billboard-advertising', county: 'Broward' },
  { name: 'Deerfield Beach', slug: 'deerfield-beach-mobile-advertising', county: 'Broward' },
  { name: 'Pompano Beach', slug: 'fort-lauderdale-mobile-billboards', county: 'Broward' },

  // Palm Beach
  { name: 'Palm Beach', slug: 'palm-beach-billboard-advertising', county: 'Palm Beach' },
  { name: 'Delray Beach', slug: 'delray-beach-mobile-advertising', county: 'Palm Beach' },
  { name: 'Jupiter', slug: 'jupiter-billboard-advertising', county: 'Palm Beach' },
  { name: 'Boynton Beach', slug: 'boca-raton-billboard-advertising', county: 'Palm Beach' },
  { name: 'Palm Beach Gardens', slug: 'palm-beach-gardens-mobile-advertising', county: 'Palm Beach' },
]

export function LocationsWeServeSection({ serviceName }: LocationsWeServeSectionProps) {
  // Group locations by county
  const locationsByCounty = locations.reduce((acc, location) => {
    if (!acc[location.county]) {
      acc[location.county] = []
    }
    acc[location.county].push(location)
    return acc
  }, {} as Record<string, Location[]>)

  return (
    <section className="section section-padding">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="gradient-text">{serviceName}</span> Available Throughout South Florida
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide {serviceName.toLowerCase()} services across Miami-Dade, Broward, and Palm Beach counties.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {Object.entries(locationsByCounty).map(([county, countyLocations]) => (
            <div key={county} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-4 text-gray-900">{county} County</h3>
              <ul className="space-y-3">
                {countyLocations.slice(0, 8).map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}/`}
                      className="flex items-center gap-2 text-gray-700 hover:text-maximax-cyan transition-colors group"
                    >
                      <MapPin className="w-4 h-4 text-gray-400 group-hover:text-maximax-cyan" />
                      <span>{location.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/locations/${county.toLowerCase().replace(' ', '-')}-county/`}
                className="block mt-4 text-sm font-medium text-maximax-cyan hover:text-maximax-pink transition-colors"
              >
                View All {county} Locations →
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Don't See Your City?</h3>
          <p className="mb-6 text-white/90">
            We serve 50+ locations across South Florida. Contact us to discuss coverage in your area.
          </p>
          <Link href="/contact/" className="btn-secondary">
            Get Custom Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
