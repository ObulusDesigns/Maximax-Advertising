'use client'

import dynamic from 'next/dynamic'
import { LazyLoad } from '@/app/lib/performance/lazy-load'

// Loading placeholder for TestimonialsSection
const TestimonialsSkeleton = () => (
  <section className="section section-padding bg-white">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse mb-4" />
        <div className="h-12 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-50 rounded-lg p-6">
            <div className="h-24 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Dynamically import TestimonialsSection
const DynamicTestimonials = dynamic(
  () => import('../TestimonialsSection').then(mod => mod.TestimonialsSection),
  {
    loading: () => <TestimonialsSkeleton />,
    ssr: true
  }
)

export function LazyTestimonials() {
  return (
    <LazyLoad
      placeholder={<TestimonialsSkeleton />}
      threshold={0.1}
      rootMargin="200px"
    >
      <DynamicTestimonials />
    </LazyLoad>
  )
}