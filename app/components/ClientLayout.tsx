'use client'

import { useEffect } from 'react'
import { observePerformance, reportWebVitals } from '@/app/lib/performance/web-vitals'
import { ServiceWorkerRegistration } from './ServiceWorkerRegistration'
import { Providers } from './Providers'

interface ClientLayoutProps {
  children: React.ReactNode
}

/**
 * Client-side layout wrapper for performance monitoring and optimizations
 */
export function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    // Initialize performance monitoring
    observePerformance()

    // Report Next.js web vitals
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      const vitals = ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP']
      vitals.forEach(vital => {
        try {
          import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
            const handlers: Record<string, any> = {
              CLS: onCLS,
              FID: onFID,
              FCP: onFCP,
              LCP: onLCP,
              TTFB: onTTFB,
              INP: onINP
            }
            
            const handler = handlers[vital]
            if (handler) {
              handler((metric: any) => {
                reportWebVitals({
                  name: metric.name,
                  value: metric.value,
                  delta: metric.delta,
                  id: metric.id,
                  isFinal: metric.isFinal || false
                })
              })
            }
          })
        } catch (e) {
          // Web vitals not available
        }
      })
    }

    // Prefetch critical resources
    const prefetchCriticalResources = () => {
      // Prefetch fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap'
      ]
      
      fontLinks.forEach(href => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = href
        link.as = 'style'
        document.head.appendChild(link)
      })

      // Preconnect to external domains
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ]
      
      domains.forEach(href => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = href
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    // Defer non-critical resource loading
    if (document.readyState === 'complete') {
      prefetchCriticalResources()
    } else {
      window.addEventListener('load', prefetchCriticalResources)
    }

    // Clean up
    return () => {
      window.removeEventListener('load', prefetchCriticalResources)
    }
  }, [])

  return (
    <Providers>
      <ServiceWorkerRegistration />
      {children}
    </Providers>
  )
}