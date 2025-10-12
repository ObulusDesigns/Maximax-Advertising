'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Add your actual client logos here
const clients = [
  { name: 'Client 1', logo: '/images/clients/client1.png' },
  { name: 'Client 2', logo: '/images/clients/client2.png' },
  { name: 'Client 3', logo: '/images/clients/client3.png' },
  { name: 'Client 4', logo: '/images/clients/client4.png' },
  { name: 'Client 5', logo: '/images/clients/client5.png' },
  { name: 'Client 6', logo: '/images/clients/client6.png' },
  { name: 'Client 7', logo: '/images/clients/client7.png' },
  { name: 'Client 8', logo: '/images/clients/client8.png' },
  { name: 'Client 9', logo: '/images/clients/client9.png' },
  { name: 'Client 10', logo: '/images/clients/client10.png' },
  { name: 'Client 11', logo: '/images/clients/client11.png' },
  { name: 'Client 12', logo: '/images/clients/client12.png' },
  { name: 'Client 13', logo: '/images/clients/client13.png' },
  { name: 'Client 14', logo: '/images/clients/client14.png' },
  { name: 'Client 15', logo: '/images/clients/client15.png' },
  { name: 'Client 16', logo: '/images/clients/client16.png' },
  { name: 'Client 17', logo: '/images/clients/client17.png' },
  { name: 'Client 18', logo: '/images/clients/client18.png' },
  { name: 'Client 19', logo: '/images/clients/client19.png' },
  { name: 'Client 20', logo: '/images/clients/client20.png' },
  { name: 'Client 21', logo: '/images/clients/client21.png' },
  { name: 'Client 22', logo: '/images/clients/client22.png' },
  { name: 'Client 23', logo: '/images/clients/client23.png' },
  { name: 'Client 24', logo: '/images/clients/client24.png' },
  { name: 'Client 25', logo: '/images/clients/client25.png' },
  { name: 'Client 26', logo: '/images/clients/client26.png' },
  { name: 'Client 27', logo: '/images/clients/client27.png' },
  { name: 'Client 28', logo: '/images/clients/client28.png' },
  { name: 'Client 29', logo: '/images/clients/client29.png' },
  { name: 'Client 30', logo: '/images/clients/client30.png' },
]

export function ClientLogoWall() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="section section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-4">Trusted By</span>
          <h2 className="mb-6">
            <span className="gradient-text">200+ Businesses</span> Trust Maximax
          </h2>
          <p className="text-lg text-gray-600">
            From local restaurants to major events, businesses across South Florida choose Maximax for mobile billboard advertising.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="bg-white rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 grayscale hover:grayscale-0"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Placeholder div - replace with actual Image component when logos are ready */}
              <div className="w-full h-16 flex items-center justify-center text-gray-400 text-xs font-medium">
                {client.name}
              </div>
              {/*
              Uncomment when you have actual logo images:
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="w-full h-auto object-contain"
              />
              */}
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-maximax-pink mb-2">200+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-maximax-cyan mb-2">500+</div>
            <div className="text-sm text-gray-600">Campaigns Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-maximax-pink mb-2">5+</div>
            <div className="text-sm text-gray-600">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-maximax-cyan mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join hundreds of successful South Florida businesses</p>
          <a href="/contact/" className="btn-primary inline-flex items-center gap-2">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
