'use client'
/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  priority?: boolean
  className?: string
  containerClassName?: string
  quality?: number
}

/**
 * OptimizedImage wrapper around Next.js Image with performance enhancements
 * Includes responsive sizing, lazy loading, and blur placeholder
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  className = '',
  containerClassName = '',
  quality = 75
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || 
    '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'

  // For static export, we need to handle images differently
  // Since unoptimized is true in next.config.js
  const imageProps: any = {
    src,
    alt,
    quality,
    className: `${className} ${isLoading ? 'blur-sm grayscale' : 'blur-0 grayscale-0'} transition-all duration-300`,
    onLoadingComplete: () => setIsLoading(false),
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async'
  }

  if (fill) {
    imageProps.fill = true
    imageProps.sizes = responsiveSizes
    imageProps.style = { objectFit: 'cover' }
  } else {
    imageProps.width = width
    imageProps.height = height
  }

  if (priority) {
    imageProps.priority = true
  }

  return fill ? (
    <div className={`relative ${containerClassName}`}>
      <Image {...imageProps} />
    </div>
  ) : (
    <Image {...imageProps} />
  )
}

/**
 * Responsive picture element for art direction
 */
interface ResponsivePictureProps {
  sources: {
    media: string
    srcSet: string
    type?: string
  }[]
  fallbackSrc: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export function ResponsivePicture({
  sources,
  fallbackSrc,
  alt,
  className = '',
  loading = 'lazy'
}: ResponsivePictureProps) {
  return (
    <picture>
      {sources.map((source, index) => (
        <source
          key={index}
          media={source.media}
          srcSet={source.srcSet}
          type={source.type}
        />
      ))}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
      />
    </picture>
  )
}