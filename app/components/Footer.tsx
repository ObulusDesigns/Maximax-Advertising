import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Youtube, ChevronRight } from 'lucide-react'

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
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/maximaxadvertising"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-maximax-pink transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/maximaxadvertising"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-maximax-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/maximax-advertising"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-maximax-pink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/maximaxads"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-maximax-pink transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@maximaxadvertising"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-maximax-pink transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
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