import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, TrendingUp, Users, Building, Navigation } from 'lucide-react'
import { County } from '@/app/types'
import { getLocationsByCounty } from '@/app/lib/data/locations-data'
import { services } from '@/app/lib/data/services-data'
import { ServiceAreaMap } from '@/app/components/ServiceAreaMap'

export const metadata: Metadata = {
  title: 'Mobile Billboard Advertising in Miami-Dade County | All Cities & Services',
  description: 'Complete mobile billboard advertising coverage across all 34 cities in Miami-Dade County. LED trucks, digital displays, and GPS-tracked campaigns from Miami to Homestead.',
  keywords: [
    'Miami-Dade County mobile billboards',
    'Miami advertising',
    'Coral Gables billboards',
    'Miami Beach LED trucks',
    'Aventura mobile advertising',
    'Kendall billboard trucks',
    'South Florida advertising',
    'Miami-Dade outdoor advertising'
  ],
  openGraph: {
    title: 'Miami-Dade County Mobile Billboard Advertising | Maximax',
    description: 'Reach 2.7 million residents across Miami-Dade County with our mobile billboard trucks. Complete coverage of all 34 cities.',
    images: ['/images/miami-dade-coverage.jpg'],
    type: 'website',
  },
}

export default function MiamiDadeCountyPage() {
  const locations = getLocationsByCounty(County.MIAMI_DADE)
  const primaryLocations = locations.filter(loc => loc.isPrimary)
  const secondaryLocations = locations.filter(loc => loc.isSecondary)
  const otherLocations = locations.filter(loc => !loc.isPrimary && !loc.isSecondary)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-maximax-cyan" />
              <span className="text-maximax-cyan font-semibold uppercase text-sm tracking-wide">
                Complete County Coverage
              </span>
            </div>

            <h1 className="text-white mb-6">
              Miami-Dade County <span className="gradient-text-premium">Mobile Billboard Advertising</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Reach 2.7 million residents across all 34 cities in Miami-Dade County. From the bustling streets of Miami
              and Miami Beach to the affluent neighborhoods of Coral Gables and Aventura, our GPS-tracked mobile billboards
              deliver your message where it matters most.
            </p>

            {/* County Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-pink mb-1">34</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Cities Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-cyan mb-1">2.7M</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Population Reach</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-pink mb-1">500K+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Daily Impressions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-cyan mb-1">2,431</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Sq Miles Coverage</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Miami-Dade Quote
              </a>
              <a href="tel:5617200521" className="btn-accent btn-lg">
                <Phone className="w-5 h-5" />
                Call (561) 720-0521
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Markets */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4">
                Primary <span className="gradient-text">Affluent Markets</span>
              </h2>
              <p className="text-lg text-gray-600">
                Target high-income demographics in Miami-Dade's most prestigious neighborhoods
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {primaryLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}/`}
                  className="group block"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-maximax-pink/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-maximax-pink transition-colors">
                          {location.city}
                        </h3>
                        <p className="text-sm text-gray-600">Population: {location.population}</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-maximax-pink/10 to-maximax-cyan/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-maximax-pink" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-maximax-pink text-sm font-semibold group-hover:gap-3 transition-all">
                      Explore Services
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Markets */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4">
                High-Traffic <span className="gradient-text-cyan">Secondary Markets</span>
              </h2>
              <p className="text-lg text-gray-600">
                Maximize reach in Miami-Dade's busiest commercial and residential areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {secondaryLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}/`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-maximax-cyan/30 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-maximax-cyan flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-maximax-cyan transition-colors">
                          {location.city}
                        </div>
                        <div className="text-xs text-gray-600">{location.population}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Other locations if any */}
            {otherLocations.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-gray-700 mb-4">Additional Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {otherLocations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}/`}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-maximax-cyan hover:text-maximax-cyan transition-all"
                    >
                      {location.city}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4">
                Complete <span className="gradient-text">Service Portfolio</span> for Miami-Dade
              </h2>
              <p className="text-lg text-gray-600">
                Full range of mobile advertising solutions available across all Miami-Dade locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group block"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-maximax-pink/30 transition-all duration-300">
                    <h3 className="font-bold mb-2 text-gray-900 group-hover:text-maximax-pink transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-maximax-pink text-sm font-semibold">
                      Available County-Wide
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <ServiceAreaMap highlightedCounty={County.MIAMI_DADE} />

      {/* Why Choose Miami-Dade */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4">
                Why Advertise in <span className="gradient-text">Miami-Dade County</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Building className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Economic Powerhouse</h3>
                  <p className="text-gray-600">
                    Florida's most populous county with a GDP of $184 billion, making it larger than many countries' economies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Diverse Demographics</h3>
                  <p className="text-gray-600">
                    Reach a multicultural audience of 2.7 million residents plus 15+ million annual tourists.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Year-Round Activity</h3>
                  <p className="text-gray-600">
                    365 days of outdoor activity with beaches, shopping districts, business centers, and entertainment venues.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Navigation className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Strategic Coverage</h3>
                  <p className="text-gray-600">
                    Target specific neighborhoods, from South Beach to Aventura, Downtown Miami to Coral Gables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Dominate Miami-Dade County?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Launch your mobile billboard campaign across all 34 cities in Miami-Dade County.
              From Miami Beach to Homestead, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:5617200521"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call (561) 720-0521
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}