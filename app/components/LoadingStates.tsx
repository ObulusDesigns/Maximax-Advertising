'use client'

import React, { Suspense } from 'react'
import { Loader2 } from 'lucide-react'

// Spinner Loading Component
export function Spinner({ 
  size = 'md', 
  color = 'pink',
  text 
}: { 
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'pink' | 'gray' | 'white'
  text?: string 
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const colorClasses = {
    pink: 'text-maximax-pink',
    gray: 'text-gray-600',
    white: 'text-white'
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2 
        className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
        aria-label="Loading"
      />
      {text && (
        <p className={`text-sm font-medium ${colorClasses[color]}`}>
          {text}
        </p>
      )}
    </div>
  )
}

// Full Page Loading
export function PageLoading({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <Spinner size="xl" color="pink" />
        <p className="mt-4 text-lg font-medium text-gray-700">{message}</p>
      </div>
    </div>
  )
}

// Section Loading
export function SectionLoading({ 
  height = '400px',
  message 
}: { 
  height?: string
  message?: string 
}) {
  return (
    <div 
      className="flex items-center justify-center bg-gray-50 rounded-lg"
      style={{ minHeight: height }}
    >
      <Spinner size="lg" color="gray" text={message} />
    </div>
  )
}

// Inline Loading
export function InlineLoading({ text = 'Loading' }: { text?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-gray-600">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span className="text-sm">{text}</span>
    </span>
  )
}

// Button Loading State
export function ButtonLoading({ 
  text = 'Processing...',
  className = ''
}: { 
  text?: string
  className?: string
}) {
  return (
    <button
      disabled
      className={`inline-flex items-center gap-2 px-6 py-3 bg-gray-400 text-white rounded-lg font-semibold cursor-not-allowed opacity-75 ${className}`}
      aria-busy="true"
    >
      <Loader2 className="w-5 h-5 animate-spin" />
      {text}
    </button>
  )
}

// Data Fetching Wrapper with Loading State
export function DataLoader<T>({
  loading,
  error,
  data,
  loadingComponent,
  errorComponent,
  emptyComponent,
  children
}: {
  loading: boolean
  error?: Error | null
  data?: T | null
  loadingComponent?: React.ReactNode
  errorComponent?: React.ReactNode
  emptyComponent?: React.ReactNode
  children: (data: T) => React.ReactNode
}) {
  if (loading) {
    return <>{loadingComponent || <SectionLoading />}</>
  }

  if (error) {
    return (
      <>
        {errorComponent || (
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-600 font-medium">Error loading data</p>
            <p className="text-sm text-gray-600 mt-1">{error.message}</p>
          </div>
        )}
      </>
    )
  }

  if (!data) {
    return (
      <>
        {emptyComponent || (
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg text-center">
            <p className="text-gray-600">No data available</p>
          </div>
        )}
      </>
    )
  }

  return <>{children(data)}</>
}

// Lazy Loading Wrapper with Suspense
export function LazyLoad({
  children,
  fallback,
  delay = 0
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
  delay?: number
}) {
  const [show, setShow] = React.useState(delay === 0)

  React.useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setShow(true), delay)
      return () => clearTimeout(timer)
    }
  }, [delay])

  if (!show) {
    return <>{fallback || <SectionLoading />}</>
  }

  return (
    <Suspense fallback={fallback || <SectionLoading />}>
      {children}
    </Suspense>
  )
}

// Progressive Image Loading
export function ProgressiveImage({
  src,
  alt,
  className = '',
  placeholderSrc,
  onLoad
}: {
  src: string
  alt: string
  className?: string
  placeholderSrc?: string
  onLoad?: () => void
}) {
  const [imgSrc, setImgSrc] = React.useState(placeholderSrc || '')
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImgSrc(src)
      setIsLoading(false)
      onLoad?.()
    }
  }, [src, onLoad])

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      {imgSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        />
      )}
    </div>
  )
}

// List Loading with Staggered Animation
export function ListLoading({ 
  items = 5,
  delay = 100
}: { 
  items?: number
  delay?: number
}) {
  return (
    <div className="space-y-3">
      {[...Array(items)].map((_, index) => (
        <div
          key={index}
          className="h-16 bg-gray-200 rounded-lg animate-pulse"
          style={{
            animationDelay: `${index * delay}ms`
          }}
        />
      ))}
    </div>
  )
}

// Content Placeholder
export function ContentPlaceholder({
  lines = 3,
  showTitle = true,
  showImage = false
}: {
  lines?: number
  showTitle?: boolean
  showImage?: boolean
}) {
  return (
    <div className="space-y-4 animate-pulse">
      {showTitle && (
        <div className="h-8 bg-gray-200 rounded w-3/4" />
      )}
      {showImage && (
        <div className="h-48 bg-gray-200 rounded-lg" />
      )}
      <div className="space-y-2">
        {[...Array(lines)].map((_, index) => (
          <div
            key={index}
            className="h-4 bg-gray-200 rounded"
            style={{
              width: `${100 - (index * 10)}%`
            }}
          />
        ))}
      </div>
    </div>
  )
}