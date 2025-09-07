'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Only log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Application Error:', error)
    }
    
    // In production, you could send to an error reporting service
    // Example: sendErrorToService(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
      <div className="text-center px-4 py-16 max-w-2xl mx-auto">
        <div className="mb-8">
          <AlertCircle className="w-24 h-24 text-red-500 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          We encountered an unexpected error. Don't worry, our team has been notified and we're working on fixing it.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-maximax-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
        </div>
        
        {error.digest && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">
              Error Reference: <code className="font-mono text-xs">{error.digest}</code>
            </p>
          </div>
        )}
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">Need immediate assistance?</p>
          <a 
            href="tel:+15617200521" 
            className="inline-block text-maximax-pink font-semibold hover:underline"
            aria-label="Call us for support"
          >
            Call (561) 720-0521
          </a>
        </div>
      </div>
    </main>
  )
}