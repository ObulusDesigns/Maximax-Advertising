'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'

interface RelatedLocation {
  name: string
  slug: string
  distance?: string
  county: 'Miami-Dade' | 'Broward' | 'Palm Beach'
}

interface RelatedLocationsWidgetProps {
  currentLocation: string
  county: 'Miami-Dade' | 'Broward' | 'Palm Beach'
  relatedLocations?: RelatedLocation[]
}

// Default nearby locations by county
const defaultLocationsByCounty: Record<string, RelatedLocation[]> = {
  'Miami-Dade': [
    { name: 'Miami Beach', slug: 'miami-beach-mobile-billboards', county: 'Miami-Dade' },
    { name: 'Coral Gables', slug: 'coral-gables-mobile-advertising', county: 'Miami-Dade' },
    { name: 'Brickell', slug: 'brickell-mobile-billboards', county: 'Miami-Dade' },
    { name: 'Wynwood', slug: 'wynwood-mobile-billboards', county: 'Miami-Dade' },
    { name: 'Aventura', slug: 'aventura-billboard-trucks', county: 'Miami-Dade' },
  ],
  'Broward': [
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale-mobile-billboards', county: 'Broward' },
    { name: 'Hollywood', slug: 'hollywood-fl-billboard-trucks', county: 'Broward' },
    { name: 'Pembroke Pines', slug: 'pembroke-pines-advertising', county: 'Broward' },
    { name: 'Plantation', slug: 'plantation-mobile-billboards', county: 'Broward' },
    { name: 'Weston', slug: 'weston-billboard-advertising', county: 'Broward' },
  ],
  'Palm Beach': [
    { name: 'West Palm Beach', slug: 'west-palm-beach-mobile-billboards', county: 'Palm Beach' },
    { name: 'Boca Raton', slug: 'boca-raton-billboard-advertising', county: 'Palm Beach' },
    { name: 'Palm Beach', slug: 'palm-beach-billboard-advertising', county: 'Palm Beach' },
    { name: 'Jupiter', slug: 'jupiter-billboard-advertising', county: 'Palm Beach' },
    { name: 'Delray Beach', slug: 'delray-beach-mobile-advertising', county: 'Palm Beach' },
  ],
}

export function RelatedLocationsWidget({
  currentLocation,
  county,
  relatedLocations,
}: RelatedLocationsWidgetProps) {
  // Use provided locations or fall back to county defaults
  const locations = relatedLocations || defaultLocationsByCounty[county] || []

  // Filter out current location
  const filteredLocations = locations.filter(
    (loc) => loc.name.toLowerCase() !== currentLocation.toLowerCase()
  ).slice(0, 4) // Show max 4 related locations

  if (filteredLocations.length === 0) return null

  return (
    <div className="card-glass p-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-maximax-cyan" />
        <h3 className="font-bold text-lg">Nearby Service Areas</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        We also provide mobile billboard advertising in these {county} locations:
      </p>

      <div className="space-y-2">
        {filteredLocations.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}/`}
            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-900">{location.name}</span>
                {location.distance && (
                  <span className="text-sm text-gray-500 ml-2">
                    {location.distance}
                  </span>
                )}
              </div>
              <MapPin className="w-4 h-4 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>

      <Link
        href={`/locations/${county.toLowerCase().replace(' ', '-')}-county/`}
        className="block mt-4 text-center text-sm font-medium text-maximax-cyan hover:text-maximax-pink transition-colors"
      >
        View All {county} Locations →
      </Link>
    </div>
  )
}
