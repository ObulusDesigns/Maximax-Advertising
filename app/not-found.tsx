'use client'

import Link from 'next/link'
import { Home, Phone, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Graphic */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text-premium">404</h1>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-maximax-pink rounded"></div>
            <div className="w-24 h-1 bg-maximax-cyan rounded ml-2"></div>
          </div>
        </div>
        
        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you're looking for. It might have been moved, 
          deleted, or the URL might be incorrect.
        </p>
        
        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center">
            <Search className="w-5 h-5 mr-2 text-maximax-cyan" />
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link 
              href="/services"
              className="text-maximax-cyan hover:text-maximax-pink transition-colors font-medium"
            >
              Our Services
            </Link>
            <Link 
              href="/locations/florida"
              className="text-maximax-cyan hover:text-maximax-pink transition-colors font-medium"
            >
              Service Areas
            </Link>
            <Link 
              href="/markets"
              className="text-maximax-cyan hover:text-maximax-pink transition-colors font-medium"
            >
              Markets We Serve
            </Link>
            <Link 
              href="/contact"
              className="text-maximax-cyan hover:text-maximax-pink transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="btn-primary btn-lg inline-flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          <Link 
            href="/"
            className="btn-accent btn-lg inline-flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
        
        {/* Contact Support */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-3">
            Need help? Our team is here to assist you!
          </p>
          <a 
            href="tel:5617200521"
            className="inline-flex items-center text-maximax-pink font-bold hover:text-pink-700 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            (561) 720-0521
          </a>
        </div>
      </div>
    </main>
  )
}