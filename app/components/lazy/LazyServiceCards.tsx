'use client'

import dynamic from 'next/dynamic'
import { LazyLoad } from '@/app/lib/performance/lazy-load'

// Loading placeholder for ServiceCards
const ServiceCardsSkeleton = () => (
  <section className="section section-padding bg-gray-50">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse mb-4" />
        <div className="h-12 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-lg">
            <div className="h-12 w-12 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-20 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Dynamically import ServiceCards
const DynamicServiceCards = dynamic(
  () => import('../ServiceCards').then(mod => mod.ServiceCards),
  {
    loading: () => <ServiceCardsSkeleton />,
    ssr: true
  }
)

export function LazyServiceCards() {
  return (
    <LazyLoad
      placeholder={<ServiceCardsSkeleton />}
      threshold={0.1}
      rootMargin="100px"
    >
      <DynamicServiceCards />
    </LazyLoad>
  )
}