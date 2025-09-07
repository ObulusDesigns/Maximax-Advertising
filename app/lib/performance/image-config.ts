/**
 * Image optimization configuration for responsive loading
 */

export const imageConfig = {
  // Device sizes for responsive images
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  
  // Image sizes for srcset generation
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  
  // Default quality for images
  quality: 75,
  
  // Formats to use
  formats: ['image/webp', 'image/jpeg'],
  
  // Minimum cache time
  minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
}

/**
 * Generate responsive sizes string for different contexts
 */
export const responsiveSizes = {
  // Full width images
  full: '100vw',
  
  // Hero images
  hero: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
  
  // Card images
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  
  // Thumbnail images
  thumbnail: '(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px',
  
  // Article images
  article: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px',
  
  // Icon/Logo
  icon: '(max-width: 640px) 120px, 160px',
}

/**
 * Image loading priorities
 */
export const imagePriority = {
  // Above the fold images
  hero: true,
  header: true,
  
  // Below the fold images
  content: false,
  footer: false,
  
  // Lazy load these
  testimonial: false,
  gallery: false,
}

/**
 * Blur data URLs for common aspect ratios
 * These are base64 encoded 8x8 pixel images
 */
export const blurDataURLs = {
  // 16:9 aspect ratio (common for hero images)
  '16:9': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  
  // 4:3 aspect ratio
  '4:3': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  
  // 1:1 aspect ratio (square)
  '1:1': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
}

/**
 * Get optimized image loader for external URLs
 */
export function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // For GitHub Pages static export, return original image
  // In production with a server, you could use an image optimization service
  return src
}

/**
 * Preload critical images
 */
export const criticalImages = [
  '/images/maximax-dark-logo.png',
  '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
]

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(src: string, sizes: number[]): string {
  return sizes.map(size => `${src} ${size}w`).join(', ')
}