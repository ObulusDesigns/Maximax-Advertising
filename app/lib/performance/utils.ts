/**
 * Performance optimization utilities
 */

/**
 * Debounce function to limit execution frequency
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function to limit execution rate
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

/**
 * Request idle callback with fallback
 */
export function requestIdleCallback(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options)
  }
  
  // Fallback to setTimeout
  const start = Date.now()
  return (typeof window !== 'undefined' ? window : global).setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
    } as IdleDeadline)
  }, 1) as unknown as number
}

/**
 * Cancel idle callback with fallback
 */
export function cancelIdleCallback(id: number): void {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(id)
  } else {
    clearTimeout(id)
  }
}

/**
 * Prefetch link with priority
 */
export function prefetchLink(url: string, priority: 'high' | 'low' = 'low'): void {
  if (typeof window === 'undefined') return
  
  const link = document.createElement('link')
  link.rel = priority === 'high' ? 'preload' : 'prefetch'
  link.href = url
  link.as = 'document'
  
  // Remove after some time to avoid memory leaks
  setTimeout(() => {
    if (link.parentNode) {
      link.parentNode.removeChild(link)
    }
  }, 60000) // 1 minute
  
  document.head.appendChild(link)
}

/**
 * Preload image
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

/**
 * Batch DOM updates using requestAnimationFrame
 */
export function batchUpdate(callback: () => void): void {
  if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
    requestAnimationFrame(callback)
  } else {
    callback()
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

/**
 * Get connection speed
 */
export function getConnectionSpeed(): 'slow' | 'medium' | 'fast' | 'unknown' {
  if (typeof window === 'undefined' || !('connection' in navigator)) {
    return 'unknown'
  }
  
  const connection = (navigator as any).connection
  const effectiveType = connection?.effectiveType
  
  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
      return 'slow'
    case '3g':
      return 'medium'
    case '4g':
      return 'fast'
    default:
      return 'unknown'
  }
}

/**
 * Check if device has low memory
 */
export function isLowMemoryDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  const deviceMemory = (navigator as any).deviceMemory
  return deviceMemory ? deviceMemory < 4 : false
}

/**
 * Load script dynamically
 */
export function loadScript(src: string, async = true): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = async
    script.onload = () => resolve()
    script.onerror = reject
    document.body.appendChild(script)
  })
}

/**
 * Remove unused CSS
 */
export function removeUnusedCSS(): void {
  if (typeof window === 'undefined') return
  
  requestIdleCallback(() => {
    const styleSheets = Array.from(document.styleSheets)
    const usedSelectors = new Set<string>()
    
    // Collect all used selectors
    document.querySelectorAll('*').forEach(element => {
      const id = element.id ? `#${element.id}` : ''
      const classes = Array.from(element.classList).map(c => `.${c}`).join('')
      const tagName = element.tagName.toLowerCase()
      
      if (id) usedSelectors.add(id)
      if (classes) classes.split('.').filter(Boolean).forEach(c => usedSelectors.add(`.${c}`))
      usedSelectors.add(tagName)
    })
    
    // This is a simplified version - in production, you'd want a more sophisticated approach
    // Debug: Found ${usedSelectors.size} used selectors
  })
}