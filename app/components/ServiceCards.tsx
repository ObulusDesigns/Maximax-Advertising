import { Truck, Monitor, MapPin, Zap, BarChart3, Clock } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Truck,
    title: 'Mobile Billboard Trucks',
    description: 'High-impact advertising on wheels. Our fleet of mobile billboards brings your message directly to your target audience.',
    features: ['10x20 ft displays', 'Routes customized', '7AM-11PM operation'],
    color: 'bg-maximax-pink',
  },
  {
    icon: Monitor,
    title: 'LED Digital Displays',
    description: '4K Ultra HD LED screens that capture attention day and night with vibrant, crystal-clear messaging.',
    features: ['4K resolution', 'Day/night visibility', 'Dynamic content'],
    color: 'bg-maximax-cyan',
  },
  {
    icon: MapPin,
    title: 'GPS Live Tracking',
    description: 'Real-time GPS tracking lets you monitor your campaign and optimize routes for maximum exposure.',
    features: ['Live tracking', 'Route reports', 'Coverage analytics'],
    color: 'bg-maximax-pink',
  },
  {
    icon: Zap,
    title: 'Quick Campaign Launch',
    description: 'Get your campaign running within 48 hours. Fast turnaround from concept to street-ready advertising.',
    features: ['48-hour launch', 'Design assistance', 'Instant updates'],
    color: 'bg-maximax-cyan',
  },
  {
    icon: BarChart3,
    title: 'ROI Analytics',
    description: 'Detailed campaign analytics and impression reports to measure your advertising effectiveness.',
    features: ['Impression data', 'ROI tracking', 'Monthly reports'],
    color: 'bg-maximax-pink',
  },
  {
    icon: Clock,
    title: 'Extended Hours',
    description: 'Maximum visibility with extended operating hours from 7 AM to 11 PM, seven days a week.',
    features: ['16-hour daily', '7 days/week', 'Peak hour focus'],
    color: 'bg-maximax-cyan',
  },
]

export function ServiceCards() {
  return (
    <section className="section section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-4">Our Services</span>
          <h2 className="mb-6">
            Powerful <span className="gradient-text">Mobile Advertising</span> Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From mobile billboard trucks to GPS tracking, we provide comprehensive advertising 
            solutions that deliver measurable results for your business.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="service-card group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-maximax-pink transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-maximax-cyan rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-maximax-pink hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary btn-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}