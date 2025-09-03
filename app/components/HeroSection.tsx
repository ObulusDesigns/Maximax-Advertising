'use client'

import Link from 'next/link'
import { Phone, MapPin, TrendingUp, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [impressions, setImpressions] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setImpressions(prev => {
        const target = 50000
        const increment = Math.floor(Math.random() * 1000) + 500
        return prev < target ? prev + increment : target
      })
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-maximax-cyan/10 backdrop-blur-sm border border-maximax-cyan/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maximax-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-maximax-cyan"></span>
            </span>
            <span className="text-sm font-semibold text-white">Now Serving All of Palm Beach County</span>
          </div>

          {/* Headline */}
          <h1 className="text-white mb-6 animate-slide-up">
            <span className="block text-maximax-cyan text-lg sm:text-xl mb-2">Digital Mobile Marketing</span>
            <span className="gradient-text-premium">Mobile Billboard</span>
            <br />
            <span>Advertising That Drives Results</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
            Transform your advertising with GPS-tracked mobile billboard trucks featuring 
            stunning 4K LED displays. Reach thousands daily across Boca Raton, Delray Beach, 
            and Palm Beach County.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 animate-slide-up animation-delay-400">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-maximax-cyan">
                {impressions.toLocaleString()}+
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Daily Impressions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-maximax-cyan">4K</div>
              <div className="text-xs sm:text-sm text-gray-300">Ultra HD Display</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hidden sm:block">
              <div className="text-2xl sm:text-3xl font-bold text-maximax-cyan">GPS</div>
              <div className="text-xs sm:text-sm text-gray-300">Live Tracking</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
            <a 
              href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5" 
              className="btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free Quote
            </a>
            <Link href="/services" className="btn-accent btn-lg">
              <Monitor className="w-5 h-5" />
              View Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-gray-300 animate-fade-in animation-delay-800">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-maximax-cyan" />
              <span>Average 4.2x ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-maximax-cyan" />
              <span>Serving Palm Beach County</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 animate-float">
          <div className="text-center">
            <div className="text-4xl font-bold text-maximax-pink mb-2">200+</div>
            <div className="text-sm text-white">Successful Campaigns</div>
          </div>
        </div>
      </div>
    </section>
  )
}