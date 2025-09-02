'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ComponentErrorBoundary } from './Providers'
import { 
  CardSkeleton, 
  HeroSkeleton, 
  ServiceListSkeleton,
  TestimonialSkeleton,
  NavigationSkeleton,
  FormSkeleton
} from './LoadingSkeletons'
import { SectionLoading } from './LoadingStates'

// Dynamically import heavy components with loading states
const HeroSection = dynamic(
  () => import('./HeroSection').then(mod => ({ default: mod.HeroSection })),
  { 
    loading: () => <HeroSkeleton />,
    ssr: true 
  }
)

const ServiceCards = dynamic(
  () => import('./ServiceCards').then(mod => ({ default: mod.ServiceCards })),
  { 
    loading: () => <ServiceListSkeleton />,
    ssr: true 
  }
)

const TestimonialsSection = dynamic(
  () => import('./TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })),
  { 
    loading: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => <TestimonialSkeleton key={i} />)}
    </div>,
    ssr: true 
  }
)

const CTASection = dynamic(
  () => import('./CTASection').then(mod => ({ default: mod.CTASection })),
  { 
    loading: () => <SectionLoading height="200px" />,
    ssr: true 
  }
)

const FloatingContact = dynamic(
  () => import('./FloatingContact').then(mod => ({ default: mod.FloatingContact })),
  { 
    loading: () => null,
    ssr: false // Client-side only 
  }
)

// Safe Hero Section with Error Boundary
export function SafeHeroSection(props: any) {
  return (
    <ComponentErrorBoundary
      errorTitle="Hero Section Unavailable"
      errorDescription="The hero section is temporarily unavailable."
      fallback={
        <div className="min-h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Maximax Advertising
            </h1>
            <p className="text-lg text-gray-600">
              Mobile Billboard Advertising in South Florida
            </p>
          </div>
        </div>
      }
    >
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection {...props} />
      </Suspense>
    </ComponentErrorBoundary>
  )
}

// Safe Service Cards with Error Boundary
export function SafeServiceCards(props: any) {
  return (
    <ComponentErrorBoundary
      errorTitle="Services Loading Error"
      errorDescription="Unable to load services at this time."
      fallback={
        <div className="text-center py-12">
          <p className="text-gray-600">
            Services are temporarily unavailable. Please contact us at{' '}
            <a href="tel:+15617200521" className="text-maximax-pink font-semibold">
              (561) 720-0521
            </a>
          </p>
        </div>
      }
    >
      <Suspense fallback={<ServiceListSkeleton />}>
        <ServiceCards {...props} />
      </Suspense>
    </ComponentErrorBoundary>
  )
}

// Safe Testimonials Section with Error Boundary
export function SafeTestimonialsSection(props: any) {
  return (
    <ComponentErrorBoundary
      errorTitle="Testimonials Unavailable"
      errorDescription="Customer testimonials are temporarily unavailable."
    >
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => <TestimonialSkeleton key={i} />)}
        </div>
      }>
        <TestimonialsSection {...props} />
      </Suspense>
    </ComponentErrorBoundary>
  )
}

// Safe CTA Section with Error Boundary
export function SafeCTASection(props: any) {
  return (
    <ComponentErrorBoundary
      errorTitle="Contact Section Error"
      errorDescription="The contact section encountered an error."
      fallback={
        <div className="bg-maximax-pink text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">Contact us for your mobile billboard campaign</p>
          <a
            href="tel:+15617200521"
            className="inline-block bg-white text-maximax-pink px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call (561) 720-0521
          </a>
        </div>
      }
    >
      <Suspense fallback={<SectionLoading height="200px" />}>
        <CTASection {...props} />
      </Suspense>
    </ComponentErrorBoundary>
  )
}

// Safe Floating Contact with Error Boundary (Client-side only)
export function SafeFloatingContact(props: any) {
  return (
    <ComponentErrorBoundary
      errorTitle=""
      errorDescription=""
      fallback={null} // Silent failure for floating contact
    >
      <Suspense fallback={null}>
        <FloatingContact {...props} />
      </Suspense>
    </ComponentErrorBoundary>
  )
}

// Safe Header with Error Boundary
export function SafeHeader({ children }: { children: React.ReactNode }) {
  return (
    <ComponentErrorBoundary
      errorTitle="Navigation Error"
      errorDescription="Navigation is temporarily unavailable."
      fallback={
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-maximax-pink">
                Maximax Advertising
              </a>
              <a
                href="tel:+15617200521"
                className="bg-maximax-pink text-white px-6 py-2 rounded-lg font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>
        </header>
      }
    >
      <Suspense fallback={<NavigationSkeleton />}>
        {children}
      </Suspense>
    </ComponentErrorBoundary>
  )
}

// Safe Footer with Error Boundary
export function SafeFooter({ children }: { children: React.ReactNode }) {
  return (
    <ComponentErrorBoundary
      errorTitle=""
      errorDescription=""
      fallback={
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-2">© 2024 Maximax Advertising. All rights reserved.</p>
            <p>
              Contact:{' '}
              <a href="tel:+15617200521" className="text-maximax-pink hover:underline">
                (561) 720-0521
              </a>
            </p>
          </div>
        </footer>
      }
    >
      {children}
    </ComponentErrorBoundary>
  )
}

// Safe Form Component
export function SafeForm({ children }: { children: React.ReactNode }) {
  return (
    <ComponentErrorBoundary
      errorTitle="Form Error"
      errorDescription="The form encountered an error. Please contact us directly."
      fallback={
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 font-medium mb-2">
            Form temporarily unavailable
          </p>
          <p className="text-gray-700">
            Please contact us directly at{' '}
            <a href="tel:+15617200521" className="text-maximax-pink font-semibold hover:underline">
              (561) 720-0521
            </a>
          </p>
        </div>
      }
    >
      <Suspense fallback={<FormSkeleton />}>
        {children}
      </Suspense>
    </ComponentErrorBoundary>
  )
}

// Generic Safe Component Wrapper
export function SafeComponent({ 
  children,
  fallback,
  loadingComponent,
  errorTitle = 'Component Error',
  errorDescription = 'This component is temporarily unavailable.'
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode
  loadingComponent?: React.ReactNode
  errorTitle?: string
  errorDescription?: string
}) {
  return (
    <ComponentErrorBoundary
      errorTitle={errorTitle}
      errorDescription={errorDescription}
      fallback={fallback}
    >
      <Suspense fallback={loadingComponent || <SectionLoading />}>
        {children}
      </Suspense>
    </ComponentErrorBoundary>
  )
}