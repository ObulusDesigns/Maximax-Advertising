import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-maximax-black text-white" role="contentinfo" aria-label="Site footer">
      {/* Main Footer */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Image
                src="/images/maximax-logo.png"
                alt="Maximax Advertising - Mobile Billboard Services"
                width={200}
                height={63}
                className="h-14 w-auto"
              />
              <p className="mt-4 text-sm text-gray-300">
                Premier vehicle advertising and cheap ads in South Florida. Car billboard advertising 
                and mobile outdoor advertising with GPS tracking. Your trusted advertisement company for out-of-home advertising.
              </p>
            </div>
            
            {/* Google Business Profile Link */}
            <div className="flex gap-3">
              <a
                href="https://g.page/r/YOUR_GOOGLE_BUSINESS_PROFILE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-maximax-pink transition-colors group"
                aria-label="Google Business Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-maximax-cyan">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services#coverage-areas" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Coverage Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-maximax-cyan">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#mobile-billboards" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Mobile Billboard Trucks
                </Link>
              </li>
              <li>
                <Link href="/services#led-displays" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  LED Digital Displays
                </Link>
              </li>
              <li>
                <Link href="/services#gps-tracking" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  GPS Tracking
                </Link>
              </li>
              <li>
                <Link href="/services#4k-screens" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  4K Ultra HD Screens
                </Link>
              </li>
              <li>
                <Link href="/services#campaign-management" className="text-sm text-gray-300 hover:text-maximax-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Campaign Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-maximax-cyan">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:5617200521" className="flex items-start gap-3 text-sm text-gray-300 hover:text-maximax-cyan transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">(561) 720-0521</div>
                    <div className="text-xs">24/7 Emergency Service</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:naser@maximaxmobileadvertising.com" className="flex items-start gap-3 text-sm text-gray-300 hover:text-maximax-cyan transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>naser@maximaxmobileadvertising.com</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>601 N Congress Ave #410</div>
                    <div>Delray Beach, FL 33445</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>Mon-Fri: 8AM-8PM</div>
                    <div>Sat-Sun: 9AM-6PM</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-maximax-cyan mb-2">Service Areas</h4>
            <p className="text-xs text-gray-400">
              Proudly serving Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, Palm Beach County, and surrounding areas
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Maximax Advertising. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-maximax-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-maximax-cyan transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}