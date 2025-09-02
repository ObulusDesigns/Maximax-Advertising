'use client'
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, ReactNode } from 'react'

interface LazyLoadProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  placeholder?: ReactNode
  onVisible?: () => void
}

/**
 * LazyLoad component for deferred rendering of children
 * Uses Intersection Observer API for efficient visibility detection
 */
export function LazyLoad({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  placeholder = <div className="animate-pulse bg-gray-200 rounded h-64" />,
  onVisible
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            onVisible?.()
            // Once visible, disconnect the observer
            observer.disconnect()
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, onVisible])

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? children : placeholder}
    </div>
  )
}

/**
 * LazyImage component for optimized image loading
 * Includes blur placeholder and responsive loading
 */
interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  placeholder = 'empty',
  blurDataURL
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.01,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority])

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Placeholder */}
      {!isLoaded && placeholder === 'blur' && blurDataURL && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full filter blur-sm"
          aria-hidden="true"
        />
      )}
      
      {/* Main Image */}
      <img
        ref={imgRef}
        src={isVisible ? src : undefined}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}