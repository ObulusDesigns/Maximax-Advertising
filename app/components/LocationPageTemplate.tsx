import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, TrendingUp, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { LocationData } from '@/app/types'

// Support both old and new prop structures for backward compatibility
interface LocationPageProps extends Partial<LocationData> {
  location?: LocationData
  nearbyLocations?: LocationData[]
}

export function LocationPageTemplate(props: LocationPageProps) {
  // Support both new structure (location prop) and old structure (direct props)
  const locationData = props.location || props;
  const city = locationData.city || '';
  const county = locationData.county || '';
  const state = locationData.state || '';
  const population = locationData.population || '';
  const description = locationData.description || '';
  const landmarks = locationData.landmarks || [];
  const popularRoutes = locationData.popularRoutes || [];
  const events = locationData.events || [];
  const stats = locationData.stats || { dailyImpressions: '50,000+', coverage: '25 sq mi', businessesServed: '200+' };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-maximax-cyan" />
              <span className="text-maximax-cyan font-semibold">{county}, {state}</span>
            </div>
            <h1 className="text-white mb-6">
              Mobile Billboard Advertising in <span className="gradient-text-premium">{city}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5" 
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get {city} Quote
              </a>
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5" 
                className="btn-accent btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Campaign
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="section py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-pink mb-2">{stats.dailyImpressions}</div>
              <div className="text-sm text-gray-600">Daily Impressions in {city}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-cyan mb-2">{population}</div>
              <div className="text-sm text-gray-600">Population Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-pink mb-2">{stats.coverage}</div>
              <div className="text-sm text-gray-600">Coverage Area</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-cyan mb-2">{stats.businessesServed}</div>
              <div className="text-sm text-gray-600">Local Businesses Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Routes */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Popular Routes */}
            <div>
              <h2 className="mb-6">
                High-Traffic Routes in <span className="gradient-text">{city}</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Our GPS-tracked mobile billboards target the busiest areas in {city} for maximum visibility and engagement.
              </p>
              <div className="space-y-3">
                {popularRoutes.map((route, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{route}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Landmarks */}
            <div>
              <h2 className="mb-6">
                Key Landmarks & <span className="gradient-text-cyan">Destinations</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Reach your audience at {city}'s most visited locations and high-traffic destinations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                    <MapPin className="w-4 h-4 text-maximax-pink flex-shrink-0" />
                    <span className="text-sm font-medium">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile Billboards in This City */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Why Mobile Billboards Work in <span className="gradient-text">{city}</span>
              </h2>
              <p className="text-lg text-gray-600">
                {city} presents unique advertising opportunities with its diverse demographics, 
                vibrant business districts, and year-round events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Diverse Demographics</h3>
                  <p className="text-gray-600">
                    Reach a wide range of audiences from tourists to local residents, 
                    business professionals to families.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Growing Market</h3>
                  <p className="text-gray-600">
                    {city}'s expanding economy creates endless opportunities for businesses 
                    to connect with new customers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Year-Round Activity</h3>
                  <p className="text-gray-600">
                    With events, festivals, and consistent tourist traffic, your message 
                    gets seen by thousands daily.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Strategic Location</h3>
                  <p className="text-gray-600">
                    Target specific neighborhoods, business districts, or event venues 
                    with precision GPS tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {events.length > 0 && (
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Upcoming Events in <span className="gradient-text-cyan">{city}</span>
              </h2>
              <p className="text-lg text-gray-600">
                Maximize your advertising impact during {city}'s biggest events and gatherings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm text-maximax-cyan font-semibold mb-2">{event.date}</div>
                  <h3 className="font-bold mb-2">{event.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Success Story */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Success Stories from {city} Businesses
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Local businesses in {city} have seen remarkable results with our mobile billboard campaigns, 
              averaging a 4.2x return on investment.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm text-white/80">Increase in Foot Traffic</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.2x</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm text-white/80">Daily Impressions</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Start Your {city} Campaign
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">
              Frequently Asked Questions About <span className="gradient-text">{city}</span> Advertising
            </h2>

            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-bold mb-3">
                  How much does mobile billboard advertising cost in {city}?
                </h3>
                <p className="text-gray-600">
                  Mobile billboard advertising in {city} starts at $500 per day for standard routes. 
                  Premium routes and custom campaigns range from $800-$2000 per day depending on 
                  coverage area and duration. Contact us for a customized quote.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold mb-3">
                  What areas of {city} do your mobile billboards cover?
                </h3>
                <p className="text-gray-600">
                  We provide complete coverage throughout {city} and surrounding areas in {county}. 
                  Our GPS-tracked trucks can target specific neighborhoods, business districts, beaches, 
                  shopping centers, and event venues based on your campaign goals.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold mb-3">
                  How many people will see my ad in {city}?
                </h3>
                <p className="text-gray-600">
                  Our mobile billboards in {city} generate {stats.dailyImpressions} daily impressions on average. 
                  The exact number depends on routes, timing, and campaign duration. Our GPS tracking 
                  provides detailed analytics on reach and engagement.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold mb-3">
                  Can I target specific events or areas in {city}?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Our GPS-tracked mobile billboards can target specific events, neighborhoods, 
                  or business districts in {city}. We'll work with you to create custom routes that reach 
                  your ideal audience at the right time and place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">
              Ready to Advertise in <span className="gradient-text">{city}</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of successful businesses using mobile billboard advertising to reach 
              customers throughout {city} and {county}. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5617200521" className="btn-primary btn-lg">
                <Phone className="w-5 h-5" />
                Call (561) 720-0521
              </a>
              <a 
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5" 
                className="btn-accent btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}