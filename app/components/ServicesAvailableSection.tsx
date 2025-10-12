'use client'

import Link from 'next/link'
import { Truck, Monitor, Calendar, Building, Users, Home } from 'lucide-react'

interface Service {
  name: string
  slug: string
  icon: typeof Truck
  description: string
}

interface ServicesAvailableSectionProps {
  cityName: string
  citySlug?: string
}

const services: Service[] = [
  {
    name: 'Mobile Billboard Trucks',
    slug: 'mobile-billboard-trucks',
    icon: Truck,
    description: '4K LED displays reaching thousands daily',
  },
  {
    name: 'LED Digital Displays',
    slug: 'led-digital-displays',
    icon: Monitor,
    description: 'High-resolution 4K screens with live content updates',
  },
  {
    name: 'Event Advertising',
    slug: 'event-advertising',
    icon: Calendar,
    description: 'Concerts, festivals, sports events & conferences',
  },
  {
    name: 'Political Campaigns',
    slug: 'political-campaign-advertising',
    icon: Users,
    description: 'Election campaigns, ballot measures & voter outreach',
  },
  {
    name: 'Real Estate Marketing',
    slug: 'real-estate-marketing',
    icon: Home,
    description: 'Open houses, new developments & luxury properties',
  },
  {
    name: 'Business Advertising',
    slug: 'local-advertising-solutions',
    icon: Building,
    description: 'Retail stores, restaurants, services & grand openings',
  },
]

export function ServicesAvailableSection({ cityName, citySlug }: ServicesAvailableSectionProps) {
  return (
    <section className="section section-padding bg-gray-50">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          Services Available in <span className="gradient-text">{cityName}</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our full range of mobile billboard advertising services are available throughout {cityName} and surrounding areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="card-glass p-6 hover:shadow-lg transition-all group"
              >
                <Icon className="w-10 h-10 text-maximax-cyan group-hover:text-maximax-pink transition-colors mb-4" />
                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <span className="text-maximax-cyan text-sm font-medium group-hover:text-maximax-pink transition-colors">
                  Learn More →
                </span>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/services/" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
