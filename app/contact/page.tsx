'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {

  return (
    <>
            <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
          <div className="absolute inset-0 bg-[url('/images/1-1.png')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-white mb-6">
                Get in <span className="gradient-text-premium">Touch</span>
              </h1>
              <p className="text-xl text-gray-300">
                Ready to take your advertising to the streets? Contact us today for a free 
                consultation and custom quote for your mobile billboard campaign.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <span className="badge-accent mb-4">Contact Info</span>
                <h2 className="mb-4">Let's Start a <span className="gradient-text-cyan">Conversation</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Have questions? Want to discuss your advertising needs? We're here to help
                  and ready to create a custom mobile billboard solution for your business.
                </p>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-maximax-pink/10 to-maximax-pink/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-maximax-pink" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <a href="tel:5617200521" className="text-xl font-bold text-maximax-pink hover:text-pink-700 transition-colors block mb-2">
                        (561) 720-0521
                      </a>
                      <p className="text-sm text-gray-600">Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-maximax-cyan/10 to-maximax-cyan/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-maximax-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <a href="mailto:naser@maximaxmobileadvertising.com" className="text-lg font-bold text-maximax-cyan hover:text-cyan-700 transition-colors block mb-2 break-all">
                        naser@maximaxmobileadvertising.com
                      </a>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-maximax-pink/10 to-maximax-pink/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-maximax-pink" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Office Location</h3>
                      <p className="text-gray-700 mb-2">
                        601 N Congress Ave #410<br />
                        Delray Beach, FL 33445
                      </p>
                      <p className="text-sm text-gray-600">Serving all of Palm Beach County</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-maximax-cyan/10 to-maximax-cyan/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path className="text-maximax-cyan" fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Google Business</h3>
                      <a
                        href="https://g.page/r/YOUR_GOOGLE_BUSINESS_PROFILE_ID"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-maximax-cyan hover:text-cyan-700 transition-colors block mb-2"
                      >
                        View Our Profile
                      </a>
                      <p className="text-sm text-gray-600">See our reviews and ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">Get Started</span>
              <h2 className="mb-4">Request a <span className="gradient-text-cyan">Free Quote</span></h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours with a custom
                proposal for your mobile billboard campaign.
              </p>
            </div>

            {/* Google Form Container - Fixed Height */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfAExdUoPlSxoJ8OtcxzvgH2ggYadYM1ViNyv31qL1zb7eIIw/viewform?embedded=true"
                  className="w-full border-0"
                  style={{ height: '1800px' }}
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="mb-4">Service <span className="gradient-text">Coverage Area</span></h2>
              <p className="text-lg text-gray-600">
                We proudly serve Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, 
                and all of Palm Beach County with our mobile billboard advertising services.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500 mt-2">
                  601 N Congress Ave #410, Delray Beach, FL 33445
                </p>
              </div>
            </div>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
              {['Boca Raton', 'Delray Beach', 'Boynton Beach', 'Deerfield Beach', 'West Palm Beach', 'Wellington'].map((area) => (
                <div key={area} className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-gray-700">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
                </>
  )
}