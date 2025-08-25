'use client'

import { Star, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Bella Vista Restaurant',
    role: 'Restaurant Owner',
    content: 'Maximax Advertising transformed our marketing strategy. Their mobile billboards brought in new customers we never reached before.',
    stats: '+85% Foot Traffic',
    roi: '4.2x ROI',
    rating: 5,
  },
  {
    name: 'Summer Beach Festival',
    role: 'Event Organizer',
    content: 'The LED billboard trucks were perfect for promoting our festival. The GPS tracking helped us target beach-goers effectively.',
    stats: '+120% Ticket Sales',
    roi: '6.8x ROI',
    rating: 5,
  },
  {
    name: 'Fitness First Gym',
    role: 'Marketing Director',
    content: 'Best advertising investment we made. The mobile billboards reached our target demographic perfectly in Boca Raton.',
    stats: '+200% Sign-ups',
    roi: '5.5x ROI',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-accent mb-4">Success Stories</span>
          <h2 className="mb-6">
            Trusted by <span className="gradient-text-cyan">200+ Businesses</span>
          </h2>
          <p className="text-lg text-gray-600">
            See how our mobile billboard advertising has helped businesses across Palm Beach County 
            achieve remarkable results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-glass p-6 hover:shadow-2xl transition-all animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-maximax-cyan text-maximax-cyan" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Stats */}
              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-maximax-pink" />
                  <span className="text-sm font-semibold text-maximax-pink">{testimonial.stats}</span>
                </div>
                <div className="text-sm font-semibold text-maximax-cyan">{testimonial.roi}</div>
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">200+</div>
              <div className="text-sm opacity-90">Campaigns Launched</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-90">Daily Impressions</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">4.2x</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}