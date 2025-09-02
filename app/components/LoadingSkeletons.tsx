import React from 'react'

// Base shimmer animation styles
const shimmerStyles = {
  backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.5s ease-in-out infinite',
}

// Card Skeleton - for service cards, testimonials, etc.
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4" style={shimmerStyles} />
      <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" style={shimmerStyles} />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded w-5/6" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded w-4/6" style={shimmerStyles} />
      </div>
    </div>
  )
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="h-16 bg-gray-300 rounded mb-6 w-3/4" style={shimmerStyles} />
          <div className="h-8 bg-gray-300 rounded mb-4 w-full" style={shimmerStyles} />
          <div className="h-8 bg-gray-300 rounded mb-8 w-5/6" style={shimmerStyles} />
          <div className="flex gap-4">
            <div className="h-12 w-40 bg-gray-300 rounded-lg" style={shimmerStyles} />
            <div className="h-12 w-40 bg-gray-300 rounded-lg" style={shimmerStyles} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Service List Skeleton
export function ServiceListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  )
}

// Testimonial Skeleton
export function TestimonialSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 animate-pulse">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-gray-200 rounded" style={shimmerStyles} />
        ))}
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-200 rounded" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded w-5/6" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded w-4/6" style={shimmerStyles} />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full" style={shimmerStyles} />
        <div>
          <div className="h-5 bg-gray-200 rounded w-32 mb-2" style={shimmerStyles} />
          <div className="h-4 bg-gray-200 rounded w-24" style={shimmerStyles} />
        </div>
      </div>
    </div>
  )
}

// Page Content Skeleton
export function PageContentSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-10 bg-gray-200 rounded mb-6 w-2/3" style={shimmerStyles} />
      <div className="space-y-4 mb-8">
        <div className="h-4 bg-gray-200 rounded" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded w-5/6" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded w-4/6" style={shimmerStyles} />
      </div>
      <div className="h-64 bg-gray-200 rounded-lg mb-8" style={shimmerStyles} />
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded w-5/6" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded" style={shimmerStyles} />
        <div className="h-4 bg-gray-200 rounded w-3/4" style={shimmerStyles} />
      </div>
    </div>
  )
}

// Table Skeleton
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg animate-pulse">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {[...Array(4)].map((_, i) => (
              <th key={i} className="px-6 py-3">
                <div className="h-4 bg-gray-200 rounded" style={shimmerStyles} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {[...Array(rows)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(4)].map((_, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded" style={shimmerStyles} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Form Skeleton
export function FormSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <div className="h-4 bg-gray-200 rounded w-24 mb-2" style={shimmerStyles} />
          <div className="h-10 bg-gray-200 rounded" style={shimmerStyles} />
        </div>
      ))}
      <div className="h-12 bg-gray-300 rounded-lg w-32" style={shimmerStyles} />
    </div>
  )
}

// Image Gallery Skeleton
export function ImageGallerySkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="aspect-square bg-gray-200 rounded-lg" style={shimmerStyles} />
      ))}
    </div>
  )
}

// Navigation Skeleton
export function NavigationSkeleton() {
  return (
    <nav className="bg-white shadow-md animate-pulse">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="h-10 w-40 bg-gray-200 rounded" style={shimmerStyles} />
          <div className="hidden md:flex items-center gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-20 bg-gray-200 rounded" style={shimmerStyles} />
            ))}
          </div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg" style={shimmerStyles} />
        </div>
      </div>
    </nav>
  )
}

// Add shimmer keyframe animation to global styles
export function ShimmerStyles() {
  return (
    <style jsx global>{`
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    `}</style>
  )
}