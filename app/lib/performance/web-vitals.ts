/**
 * Web Vitals monitoring and performance tracking
 */

export interface Metric {
  name: string
  value: number
  delta: number
  id: string
  isFinal: boolean
  rating?: 'good' | 'needs-improvement' | 'poor'
}

// Thresholds for Core Web Vitals
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 },   // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  INP: { good: 200, poor: 500 },   // Interaction to Next Paint
  TTFB: { good: 800, poor: 1800 }  // Time to First Byte
}

/**
 * Get rating for a metric based on its value
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS]
  if (!threshold) return 'good'
  
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

/**
 * Report web vitals to analytics or monitoring service
 */
export function reportWebVitals(metric: Metric) {
  // Add rating to metric
  const enrichedMetric = {
    ...metric,
    rating: getRating(metric.name, metric.value)
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    const color = enrichedMetric.rating === 'good' ? '\x1b[32m' : 
                  enrichedMetric.rating === 'needs-improvement' ? '\x1b[33m' : '\x1b[31m'
    console.log(
      `${color}[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)}ms (${enrichedMetric.rating})\x1b[0m`
    )
  }

  // Send to analytics (Google Analytics example)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: enrichedMetric.rating,
      non_interaction: true
    })
  }

  // Custom monitoring endpoint
  if (process.env.NEXT_PUBLIC_MONITORING_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_MONITORING_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        metric: enrichedMetric,
        url: window.location.href,
        timestamp: Date.now()
      })
    }).catch(() => {
      // Silently fail, don't break the app
    })
  }
}

/**
 * Performance observer for custom metrics
 */
export function observePerformance() {
  if (typeof window === 'undefined' || !window.PerformanceObserver) return

  try {
    // Observe Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as any
      reportWebVitals({
        name: 'LCP',
        value: lastEntry.renderTime || lastEntry.loadTime,
        delta: 0,
        id: `lcp-${Date.now()}`,
        isFinal: true
      })
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

    // Observe First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        reportWebVitals({
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          delta: 0,
          id: `fid-${Date.now()}`,
          isFinal: true
        })
      })
    })
    fidObserver.observe({ type: 'first-input', buffered: true })

    // Observe Cumulative Layout Shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      })
    })
    clsObserver.observe({ type: 'layout-shift', buffered: true })

    // Report CLS on page hide
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        reportWebVitals({
          name: 'CLS',
          value: clsValue,
          delta: 0,
          id: `cls-${Date.now()}`,
          isFinal: true
        })
      }
    })
  } catch (e) {
    // Performance Observer not supported
  }
}

/**
 * Get performance metrics summary
 */
export function getPerformanceMetrics() {
  if (typeof window === 'undefined' || !window.performance) return null

  const navigation = performance.getEntriesByType('navigation')[0] as any
  const paint = performance.getEntriesByType('paint')

  return {
    // Navigation Timing
    ttfb: navigation?.responseStart - navigation?.fetchStart || 0,
    domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.fetchStart || 0,
    loadComplete: navigation?.loadEventEnd - navigation?.fetchStart || 0,
    
    // Paint Timing
    fcp: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
    fp: paint.find(p => p.name === 'first-paint')?.startTime || 0,
    
    // Resource Timing
    resources: performance.getEntriesByType('resource').length,
    
    // Memory (if available)
    memory: (performance as any).memory ? {
      used: (performance as any).memory.usedJSHeapSize,
      total: (performance as any).memory.totalJSHeapSize,
      limit: (performance as any).memory.jsHeapSizeLimit
    } : null
  }
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}