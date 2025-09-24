'use client'

import { useEffect } from 'react'

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Only register service worker in production
      if (process.env.NODE_ENV === 'production') {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
              // Service Worker registered successfully

              // Check for updates periodically
              setInterval(() => {
                registration.update()
              }, 60 * 60 * 1000) // Check every hour

              // Handle updates
              registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing
                if (newWorker) {
                  newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                      // New service worker available
                      // You could show a notification to the user here
                    }
                  })
                }
              })
            })
            .catch((error) => {
              // Service Worker registration failed
            })
        })
      }
    }
  }, [])
  
  return null
}