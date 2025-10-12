import { Metadata } from 'next'
import Link from 'next/link'
import { Star, ExternalLink, MessageSquare, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leave a Review | Maximax Mobile Billboard Advertising',
  description: 'Share your experience with Maximax Advertising. Help other South Florida businesses discover our mobile billboard services.',
  robots: 'noindex, nofollow', // Don't index review collection page
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-full mb-6">
            <Star className="w-10 h-10 text-white fill-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Value Your <span className="gradient-text">Feedback</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for choosing Maximax Advertising! Your review helps us improve and helps other businesses discover mobile billboard advertising.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="card-glass p-8 md:p-12 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Leave a Google Review</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Share your experience on Google and help other South Florida businesses discover the power of mobile billboard advertising. It only takes 60 seconds!
          </p>

          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <Star className="w-5 h-5" />
            Write Google Review
            <ExternalLink className="w-5 h-5" />
          </a>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Your review helps us in many ways:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-maximax-pink flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <strong>Build Trust</strong>
                  <p className="text-gray-600">Help other businesses feel confident choosing us</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <strong>Improve Service</strong>
                  <p className="text-gray-600">Your feedback helps us serve you better</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 text-maximax-pink flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <strong>Share Results</strong>
                  <p className="text-gray-600">Let others know about your campaign success</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Review Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card-glass p-6 text-center">
            <h3 className="font-bold text-lg mb-3">Facebook Review</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Prefer Facebook? Leave a review there too!
            </p>
            <a
              href="https://www.facebook.com/YOUR_PAGE/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Review on Facebook
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="card-glass p-6 text-center">
            <h3 className="font-bold text-lg mb-3">Direct Feedback</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Have specific feedback? Contact us directly.
            </p>
            <Link href="/contact/" className="btn-secondary inline-flex items-center gap-2">
              Send Feedback
              <MessageSquare className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Thank You Gift 🎁</h3>
          <p className="mb-4">
            As a thank you for leaving a review, get <strong>$50 off</strong> your next mobile billboard campaign!
          </p>
          <p className="text-sm opacity-90">
            Mention code <strong>REVIEW50</strong> when booking your next campaign
          </p>
        </div>

        {/* What to Include */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-center">What Makes a Great Review?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-maximax-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-maximax-cyan font-bold">1</span>
              </div>
              <div>
                <strong className="block mb-1">Your Results</strong>
                <p className="text-sm text-gray-600">Did you get more customers, calls, or sales?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-maximax-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-maximax-cyan font-bold">2</span>
              </div>
              <div>
                <strong className="block mb-1">Service Experience</strong>
                <p className="text-sm text-gray-600">How was working with our team?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-maximax-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-maximax-pink font-bold">3</span>
              </div>
              <div>
                <strong className="block mb-1">What You Liked</strong>
                <p className="text-sm text-gray-600">GPS tracking? Display quality? Response time?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-maximax-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-maximax-pink font-bold">4</span>
              </div>
              <div>
                <strong className="block mb-1">Your Recommendation</strong>
                <p className="text-sm text-gray-600">Would you recommend us to other businesses?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link href="/" className="text-maximax-cyan hover:text-maximax-pink transition-colors">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
