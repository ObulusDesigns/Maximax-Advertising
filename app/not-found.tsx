'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4 py-16 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, 
          or the URL might be incorrect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-maximax-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Popular pages you might be looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services" className="text-maximax-pink hover:underline">
              Our Services
            </Link>
            <Link href="/locations/florida/miami" className="text-maximax-pink hover:underline">
              Miami Location
            </Link>
            <Link href="/markets" className="text-maximax-pink hover:underline">
              Industries We Serve
            </Link>
            <Link href="/contact" className="text-maximax-pink hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}