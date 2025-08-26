import Link from 'next/link'
import { Phone, ArrowRight, Check } from 'lucide-react'

export function CTASection() {
  return (
    <section className="section section-padding bg-gradient-to-br from-maximax-pink via-pink-600 to-maximax-cyan">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-sm font-semibold">Limited Time Offer</span>
          </div>

          {/* Headline */}
          <h2 className="text-white mb-6">
            Ready to Take Your Advertising to the Streets?
          </h2>
          
          {/* Description */}
          <p className="text-xl mb-8 text-white/90">
            Get started with mobile billboard advertising today and reach thousands of potential 
            customers across Palm Beach County. Free consultation and campaign strategy included.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 justify-center">
              <Check className="w-5 h-5 text-white" />
              <span>Free Design Service</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Check className="w-5 h-5 text-white" />
              <span>GPS Tracking Included</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Check className="w-5 h-5 text-white" />
              <span>48-Hour Launch</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5617200521"
              className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call (561) 720-0521
            </a>
            <a
              href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Urgency Text */}
          <p className="mt-6 text-sm text-white/80">
            Spots filling fast for Q1 2025. Reserve your campaign dates now!
          </p>
        </div>
      </div>
    </section>
  )
}