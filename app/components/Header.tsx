'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDown, Phone, MapPin, Clock, Menu, X, Star, Calendar } from 'lucide-react'

const services = [
  { name: 'Mobile Billboard Trucks', href: '/services/mobile-billboard-trucks' },
  { name: 'LED Digital Displays', href: '/services/led-digital-displays' },
  { name: 'GPS Tracking', href: '/services/gps-tracking' },
  { name: '4K Ultra HD Screens', href: '/services/4k-screens' },
  { name: 'Campaign Management', href: '/services/campaign-management' },
  { name: 'Coverage Areas', href: '/services/coverage-areas' },
  { name: 'Pricing & Costs', href: '/pricing' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false)
    }, 300) // 300ms delay before closing
    setDropdownTimeout(timeout)
  }

  return (
    <div className="sticky top-0 bg-white" style={{ zIndex: 99999, isolation: 'isolate' }}>
      <header className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200' : 'bg-white shadow-sm'}`}>
        {/* Top Bar */}
        <div className="bg-maximax-black text-white py-2 text-xs sm:text-sm">
          <div className="container">
            {/* Mobile Layout */}
            <div className="flex sm:hidden justify-between items-center">
              <a href="tel:5617200521" className="flex items-center hover:text-maximax-cyan transition-colors">
                <Phone className="w-4 h-4 mr-1.5 animate-pulse" />
                <span className="font-bold">(561) 720-0521</span>
              </a>
              <a
                href="tel:5617200521"
                className="flex items-center gap-1 bg-maximax-pink text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-pink-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden sm:flex justify-between items-center">
              <div className="flex items-center gap-4 lg:gap-6">
                <a href="tel:5617200521" className="flex items-center hover:text-maximax-cyan transition-colors">
                  <Phone className="w-4 h-4 mr-2 animate-pulse" />
                  <span className="font-bold text-sm lg:text-base">(561) 720-0521</span>
                </a>
                <div className="hidden md:flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>601 N Congress Ave #410, Delray Beach</span>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-6PM</span>
                  <span className="lg:hidden">Mon-Sun: 8AM-8PM</span>
                </div>
                <a
                  href="tel:5617200521"
                  className="hidden sm:flex items-center gap-1.5 bg-maximax-pink text-white px-3 py-1.5 rounded-md text-sm font-bold hover:bg-pink-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <div className="hidden lg:flex items-center">
                  <Star className="w-4 h-4 mr-1 text-maximax-cyan fill-current" />
                  <span className="font-bold">4.9</span>
                  <span className="ml-1 text-gray-300">(200+ Campaigns)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav id="main-navigation" className="container" aria-label="Main navigation">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity" aria-label="Maximax Advertising - Home">
              <Image
                src="/images/maximax-dark-logo.png"
                alt="Maximax Advertising - Mobile Billboard and LED Truck Advertising"
                width={220}
                height={73}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="font-semibold text-gray-900 hover:text-maximax-pink transition-colors">
                Home
              </Link>
              
              <Link href="/about" className="font-semibold text-gray-900 hover:text-maximax-pink transition-colors">
                Who We Are
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="dropdown-wrapper relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 font-semibold text-gray-900 hover:text-maximax-pink transition-colors py-2"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-label="Services menu"
                >
                  What We Do
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div 
                    className="dropdown-menu absolute top-full left-0 mt-0 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 py-2 z-50"
                    style={{ marginTop: '-4px' }} // Slight overlap to prevent gap
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-maximax-pink/5 hover:text-maximax-pink transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/markets" className="font-semibold text-gray-900 hover:text-maximax-pink transition-colors">
                Markets
              </Link>
              
              <Link href="/blog" className="font-semibold text-gray-900 hover:text-maximax-pink transition-colors">
                Blog
              </Link>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-200" role="navigation" aria-label="Mobile navigation">
            <div className="container py-4 space-y-4">
              <Link
                href="/"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-maximax-pink"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link
                href="/about"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-maximax-pink"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who We Are
              </Link>
              
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-base font-semibold text-gray-900 hover:text-maximax-pink"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-label="Services menu"
                >
                  What We Do
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block py-1 text-sm text-gray-600 hover:text-maximax-pink"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                href="/markets"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-maximax-pink"
                onClick={() => setMobileMenuOpen(false)}
              >
                Markets
              </Link>
              
              <Link
                href="/blog"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-maximax-pink"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:5617200521"
                  className="btn-primary w-full"
                >
                  <Phone className="w-4 h-4" />
                  Call (561) 720-0521
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}