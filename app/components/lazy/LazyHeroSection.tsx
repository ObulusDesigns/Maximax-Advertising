'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Loading placeholder for HeroSection
const HeroSkeleton = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black">
    <div className="container">
      <div className="max-w-3xl">
        <div className="h-10 w-64 bg-gray-800 rounded animate-pulse mb-6" />
        <div className="space-y-4 mb-8">
          <div className="h-12 bg-gray-800 rounded animate-pulse" />
          <div className="h-12 bg-gray-800 rounded animate-pulse w-3/4" />
        </div>
        <div className="h-20 bg-gray-800 rounded animate-pulse mb-8" />
        <div className="flex gap-4">
          <div className="h-14 w-40 bg-gray-800 rounded animate-pulse" />
          <div className="h-14 w-40 bg-gray-800 rounded animate-pulse" />
        </div>
      </div>
    </div>
  </section>
)

// Dynamically import HeroSection with no SSR for performance
const DynamicHeroSection = dynamic(
  () => import('../HeroSection').then(mod => mod.HeroSection),
  {
    loading: () => <HeroSkeleton />,
    ssr: true // Keep SSR for SEO
  }
)

export function LazyHeroSection() {
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <DynamicHeroSection />
    </Suspense>
  )
}