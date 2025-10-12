'use client'

import { Star, ExternalLink, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export function GoogleReviewWidget() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900">Google Reviews</div>
            <div className="text-sm text-gray-600">See what our clients say</div>
          </div>
        </div>
        <a
          href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
          target="_blank"
          rel="noopener noreferrer"
          className="text-maximax-cyan hover:text-maximax-pink transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Rating Display */}
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">4.9</div>
            <div className="flex gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-maximax-cyan text-maximax-cyan"
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-600 mb-1">Based on <strong>50+</strong> reviews</div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span>Growing every week!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reviews Preview */}
      <div className="space-y-3 mb-4">
        <div className="border-l-2 border-maximax-cyan pl-3 text-sm">
          <div className="flex gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 fill-maximax-cyan text-maximax-cyan" />
            ))}
          </div>
          <p className="text-gray-700 italic text-xs mb-1">
            "Amazing results! Our event got 3x more attendance than expected."
          </p>
          <div className="text-xs text-gray-500">- Miami Event Planner</div>
        </div>

        <div className="border-l-2 border-maximax-pink pl-3 text-sm">
          <div className="flex gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 fill-maximax-pink text-maximax-pink" />
            ))}
          </div>
          <p className="text-gray-700 italic text-xs mb-1">
            "Best advertising investment we've made. Highly recommend!"
          </p>
          <div className="text-xs text-gray-500">- Boca Raton Restaurant Owner</div>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="/reviews/"
        className="block w-full text-center bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-shadow"
      >
        Leave a Review & Get $50 Off
      </Link>
    </div>
  )
}
