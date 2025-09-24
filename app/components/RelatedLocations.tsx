import Link from 'next/link'
import { MapPin, ArrowRight, Navigation, Users } from 'lucide-react'
import { LocationInfo, getNearbyLocations, calculateDistance } from '@/app/lib/data/locations-data'

interface RelatedLocationsProps {
  currentSlug: string
  currentLocation?: LocationInfo
  limit?: number
  showDistance?: boolean
}

export function RelatedLocations({
  currentSlug,
  currentLocation,
  limit = 5,
  showDistance = true
}: RelatedLocationsProps) {
  const nearbyLocations = getNearbyLocations(currentSlug, limit)

  if (nearbyLocations.length === 0) return null

  return (
    <section className="section section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4">
              Nearby <span className="gradient-text">Service Areas</span>
            </h2>
            <p className="text-lg text-gray-600">
              We also provide mobile billboard advertising in these nearby cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyLocations.map((location) => {
              const distance = currentLocation && showDistance
                ? calculateDistance(
                    currentLocation.coordinates.lat,
                    currentLocation.coordinates.lng,
                    location.coordinates.lat,
                    location.coordinates.lng
                  )
                : null

              return (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}/`}
                  className="group block"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-maximax-cyan/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-maximax-cyan transition-colors">
                          {location.city}
                        </h3>
                        <p className="text-sm text-gray-600">{location.county}</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink/10 to-maximax-cyan/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5 text-maximax-pink" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>Population: {location.population}</span>
                      </div>
                      {distance && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Navigation className="w-4 h-4 text-gray-400" />
                          <span>{Math.round(distance)} miles away</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-maximax-cyan text-sm font-semibold group-hover:gap-3 transition-all">
                      View Services
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/locations/`}
              className="inline-flex items-center gap-2 text-maximax-cyan hover:text-maximax-pink font-semibold transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}