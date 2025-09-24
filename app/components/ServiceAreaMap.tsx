'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Navigation, Info } from 'lucide-react'
import { County } from '@/app/types'
import { getLocationsByCounty, LocationInfo } from '@/app/lib/data/locations-data'

interface ServiceAreaMapProps {
  highlightedCounty?: County
  showAllLocations?: boolean
}

export function ServiceAreaMap({
  highlightedCounty,
  showAllLocations = false
}: ServiceAreaMapProps) {
  const [selectedCounty, setSelectedCounty] = useState<County | null>(highlightedCounty || null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  const counties = [
    {
      id: County.MIAMI_DADE,
      name: 'Miami-Dade',
      color: 'from-pink-500 to-pink-600',
      position: 'bottom-0 left-1/2',
      stats: { cities: 34, population: '2.7M' }
    },
    {
      id: County.BROWARD,
      name: 'Broward',
      color: 'from-cyan-500 to-cyan-600',
      position: 'bottom-1/3 left-1/2',
      stats: { cities: 31, population: '1.9M' }
    },
    {
      id: County.PALM_BEACH,
      name: 'Palm Beach',
      color: 'from-purple-500 to-purple-600',
      position: 'top-0 left-1/2',
      stats: { cities: 39, population: '1.5M' }
    }
  ]

  const getLocationsForCounty = (county: County) => {
    const locations = getLocationsByCounty(county)
    return showAllLocations ? locations : locations.slice(0, 5)
  }

  return (
    <section className="section section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-4">
              Our <span className="gradient-text">Service Coverage Area</span>
            </h2>
            <p className="text-lg text-gray-600">
              Complete coverage across South Florida's three major counties
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interactive Map Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-gray-400" />
                    ))}
                  </div>
                </div>

                {/* County Areas */}
                {counties.map((county) => {
                  const isSelected = selectedCounty === county.id
                  const locations = getLocationsForCounty(county.id)

                  return (
                    <div key={county.id}>
                      {/* County Block */}
                      <button
                        onClick={() => setSelectedCounty(county.id === selectedCounty ? null : county.id)}
                        className={`absolute transform -translate-x-1/2 w-48 h-32 rounded-xl bg-gradient-to-r ${county.color}
                          shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105
                          ${isSelected ? 'ring-4 ring-white ring-offset-2 scale-105' : ''}
                          ${county.position}`}
                        style={{
                          top: county.name === 'Palm Beach' ? '10%' : county.name === 'Broward' ? '40%' : '70%'
                        }}
                      >
                        <div className="text-white p-4">
                          <h3 className="font-bold text-lg mb-1">{county.name}</h3>
                          <div className="flex justify-center gap-4 text-xs">
                            <span>{county.stats.cities} cities</span>
                            <span>{county.stats.population}</span>
                          </div>
                        </div>
                      </button>

                      {/* Location Dots */}
                      {isSelected && locations.map((location, index) => {
                        const angle = (index / locations.length) * 2 * Math.PI
                        const radius = 100
                        const centerY = county.name === 'Palm Beach' ? 25 : county.name === 'Broward' ? 50 : 75

                        return (
                          <div
                            key={location.slug}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-scale-in"
                            style={{
                              left: `${50 + radius * Math.cos(angle) / 3}%`,
                              top: `${centerY + radius * Math.sin(angle) / 3}%`,
                              animationDelay: `${index * 50}ms`
                            }}
                            onMouseEnter={() => setHoveredLocation(location.slug)}
                            onMouseLeave={() => setHoveredLocation(null)}
                          >
                            <Link
                              href={`/locations/${location.slug}/`}
                              className="block"
                            >
                              <div className={`w-3 h-3 bg-white border-2 border-${county.color.split(' ')[0].split('-')[1]}-500
                                rounded-full hover:scale-150 transition-transform cursor-pointer relative`}>
                                {hoveredLocation === location.slug && (
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                                    bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-20">
                                    {location.city}
                                  </div>
                                )}
                              </div>
                            </Link>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <Info className="w-3 h-3" />
                    Click a county to explore cities
                  </div>
                  <div className="space-y-1">
                    {counties.map((county) => (
                      <div key={county.id} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded bg-gradient-to-r ${county.color}`} />
                        <span className="text-xs text-gray-700">{county.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location List */}
            <div>
              <h3 className="font-bold text-xl mb-4">
                {selectedCounty
                  ? `${counties.find(c => c.id === selectedCounty)?.name} County Locations`
                  : 'Select a County to Explore'}
              </h3>

              {selectedCounty ? (
                <div>
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    {getLocationsForCounty(selectedCounty).map((location) => (
                      <Link
                        key={location.slug}
                        href={`/locations/${location.slug}/`}
                        className="block group"
                      >
                        <div className="flex items-center justify-between p-3 bg-white border border-gray-200
                          rounded-lg hover:shadow-md hover:border-maximax-cyan/30 transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-maximax-pink" />
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-maximax-cyan transition-colors">
                                {location.city}
                              </div>
                              <div className="text-sm text-gray-600">
                                Pop: {location.population}
                              </div>
                            </div>
                          </div>
                          <Navigation className="w-4 h-4 text-gray-400 group-hover:text-maximax-cyan
                            group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/locations/${counties.find(c => c.id === selectedCounty)?.name.toLowerCase().replace(' ', '-')}-county/`}
                    className="inline-flex items-center gap-2 mt-4 text-maximax-cyan hover:text-maximax-pink
                      font-semibold transition-colors"
                  >
                    View All {counties.find(c => c.id === selectedCounty)?.name} County Locations
                    <Navigation className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Click on any county on the map to see our service locations
                  </p>
                  <div className="mt-6 space-y-2">
                    {counties.map((county) => (
                      <button
                        key={county.id}
                        onClick={() => setSelectedCounty(county.id)}
                        className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg
                          hover:border-maximax-cyan/30 hover:shadow-sm transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{county.name} County</span>
                          <span className="text-sm text-gray-600">
                            {county.stats.cities} cities
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Coverage Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-maximax-pink mb-2">3</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Counties Covered</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-maximax-cyan mb-2">104+</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Cities Served</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-maximax-pink mb-2">6.1M+</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Population Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Add animation styles to global CSS
const animationStyles = `
@keyframes scale-in {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out forwards;
}
`