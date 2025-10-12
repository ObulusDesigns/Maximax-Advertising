import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, TrendingUp, Users, Building, Navigation, HelpCircle } from 'lucide-react'
import { County } from '@/app/types'
import { getLocationsByCounty } from '@/app/lib/data/locations-data'
import { services } from '@/app/lib/data/services-data'
import { ServiceAreaMap } from '@/app/components/ServiceAreaMap'
import { ServicesAvailableSection } from '@/app/components/ServicesAvailableSection'

export const metadata: Metadata = {
  title: 'Mobile Billboard Advertising in Palm Beach County | West Palm Beach & All Cities',
  description: 'Complete mobile billboard advertising coverage across all 39 cities in Palm Beach County. LED trucks serving West Palm Beach, Boca Raton, Delray Beach, Jupiter, and more.',
  keywords: [
    'Palm Beach County mobile billboards',
    'West Palm Beach advertising',
    'Boca Raton billboards',
    'Delray Beach LED trucks',
    'Jupiter advertising',
    'Palm Beach Gardens mobile ads',
    'Wellington billboards',
    'Palm Beach outdoor advertising'
  ],
  openGraph: {
    title: 'Palm Beach County Mobile Billboard Advertising | Maximax',
    description: 'Reach 1.5 million residents across Palm Beach County with our mobile billboard trucks. Complete coverage from Jupiter to Boca Raton.',
    images: ['/images/palm-beach-coverage.jpg'],
    type: 'website',
  },
}

export default function PalmBeachCountyPage() {
  const locations = getLocationsByCounty(County.PALM_BEACH)
  const primaryLocations = locations.filter(loc => loc.isPrimary)
  const secondaryLocations = locations.filter(loc => loc.isSecondary)
  const otherLocations = locations.filter(loc => !loc.isPrimary && !loc.isSecondary)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
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
              Palm Beach County <span className="gradient-text-premium">Mobile Billboard Advertising</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Reach 1.5 million residents across all 39 municipalities in Palm Beach County. From the exclusive island of Palm Beach
              to the vibrant downtown of West Palm Beach, from the tech hub of Boca Raton to the coastal charm of Jupiter,
              our GPS-tracked mobile billboards deliver your message to Florida's most affluent county.
            </p>

            {/* County Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-pink mb-1">39</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Cities Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-cyan mb-1">1.5M</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Population Reach</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-pink mb-1">350K+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Daily Impressions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-maximax-cyan mb-1">2,383</div>
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
                Get Palm Beach Quote
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
                Elite <span className="gradient-text">Affluent Markets</span>
              </h2>
              <p className="text-lg text-gray-600">
                Target ultra-high net worth demographics in Palm Beach County's most exclusive communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {primaryLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}/`}
                  className="group block"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-purple-600 transition-colors">
                          {location.city}
                        </h3>
                        <p className="text-sm text-gray-600">Population: {location.population}</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500/10 to-maximax-pink/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-purple-600 text-sm font-semibold group-hover:gap-3 transition-all">
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
                Growing <span className="gradient-text-cyan">Business Districts</span>
              </h2>
              <p className="text-lg text-gray-600">
                Reach diverse audiences in Palm Beach County's thriving commercial centers
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

      {/* Services Available Section */}
      <ServicesAvailableSection cityName="Palm Beach County" />

      {/* Interactive Map */}
      <ServiceAreaMap highlightedCounty={County.PALM_BEACH} />

      {/* Why Choose Palm Beach */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4">
                Why Advertise in <span className="gradient-text">Palm Beach County</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Building className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Affluent Demographics</h3>
                  <p className="text-gray-600">
                    Florida's wealthiest county with median household income 20% above state average and luxury lifestyle centers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Seasonal Population Surge</h3>
                  <p className="text-gray-600">
                    Population increases by 300,000+ during winter months with affluent seasonal residents and tourists.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Business Innovation Hub</h3>
                  <p className="text-gray-600">
                    Growing tech sector, corporate headquarters, and entrepreneurial ecosystem in Boca Raton and West Palm Beach.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Navigation className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Prime Routes</h3>
                  <p className="text-gray-600">
                    I-95, Florida Turnpike, and A1A coastal highway provide premium visibility for mobile advertising campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4">
                <span className="gradient-text">Frequently Asked Questions</span> - Palm Beach County
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about mobile billboard advertising in Palm Beach County
              </p>
            </div>

            <div className="space-y-6">
              <details className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg cursor-pointer flex items-start gap-3 list-none">
                  <HelpCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="flex-1">Do you serve all 39 cities in Palm Beach County?</span>
                </summary>
                <div className="mt-4 pl-9 text-gray-600">
                  Yes! We provide comprehensive coverage across all 39 municipalities in Palm Beach County, from the Island of Palm Beach and West Palm Beach to Boca Raton, Delray Beach, Jupiter, Wellington, and everywhere in between. Our fleet can target any neighborhood or commercial district in the county.
                </div>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg cursor-pointer flex items-start gap-3 list-none">
                  <HelpCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0 mt-1" />
                  <span className="flex-1">What are the premium advertising routes in Palm Beach County?</span>
                </summary>
                <div className="mt-4 pl-9 text-gray-600">
                  Top routes include Worth Avenue and the Island of Palm Beach, Clematis Street and CityPlace in West Palm Beach, Town Center at Boca Raton, Atlantic Avenue in Delray Beach, A1A coastal highway, Gardens Mall vicinity, Wellington equestrian areas, and major highways like I-95 and Florida Turnpike. Each route targets specific affluent demographics.
                </div>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg cursor-pointer flex items-start gap-3 list-none">
                  <HelpCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="flex-1">Are permits required for mobile billboards in Palm Beach County?</span>
                </summary>
                <div className="mt-4 pl-9 text-gray-600">
                  Palm Beach County has specific regulations, and some municipalities like the Town of Palm Beach have additional restrictions. We handle all compliance and permitting requirements across all 39 cities. Our team ensures your campaign meets local ordinances while maximizing visibility in your target areas.
                </div>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg cursor-pointer flex items-start gap-3 list-none">
                  <HelpCircle className="w-6 h-6 text-maximax-pink flex-shrink-0 mt-1" />
                  <span className="flex-1">Can I target luxury markets and affluent neighborhoods?</span>
                </summary>
                <div className="mt-4 pl-9 text-gray-600">
                  Absolutely! Palm Beach County is our specialty for luxury brand advertising. We can target ultra-high net worth areas like the Island of Palm Beach, Palm Beach Gardens' exclusive communities, Boca Raton's gated neighborhoods, Delray Beach's Atlantic Avenue district, and Jupiter's luxury waterfront areas. Perfect for luxury real estate, high-end retail, and premium services.
                </div>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg cursor-pointer flex items-start gap-3 list-none">
                  <HelpCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="flex-1">What does a county-wide campaign cost in Palm Beach County?</span>
                </summary>
                <div className="mt-4 pl-9 text-gray-600">
                  County-wide campaigns in Palm Beach start at $2,795/day for multi-city coverage. Luxury market targeting (Island of Palm Beach, exclusive areas) starts at $1,495/day for focused routes. Pricing varies based on specific cities, hours of operation, and campaign duration. We create custom packages to match your budget and target audience.
                </div>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg cursor-pointer flex items-start gap-3 list-none">
                  <HelpCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0 mt-1" />
                  <span className="flex-1">How effective are mobile billboards in Palm Beach County?</span>
                </summary>
                <div className="mt-4 pl-9 text-gray-600">
                  Extremely effective! In high-traffic areas like Worth Avenue, Clematis Street, and Town Center Boca, our trucks generate 25,000-40,000+ impressions per day. County-wide campaigns can reach 150,000-300,000+ daily impressions. We provide GPS tracking and comprehensive reporting for every campaign, showing exact routes and impression data.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-padding bg-gradient-to-r from-purple-600 via-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Reach Palm Beach County's Elite?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Launch your mobile billboard campaign across all 39 cities in Palm Beach County.
              From the Island of Palm Beach to Boca Raton's tech corridor, we deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
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