'use client'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FloatingContact } from '../components/FloatingContact'
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // You would typically send this to your backend
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <span className="badge-primary mb-4">Get Started</span>
                  <h2 className="mb-4">Request a <span className="gradient-text">Free Quote</span></h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours 
                    with a custom proposal for your mobile billboard campaign.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maximax-pink focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maximax-pink focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maximax-pink focus:border-transparent transition-all"
                        placeholder="(561) 555-0123"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maximax-pink focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maximax-pink focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="mobile-billboard">Mobile Billboard Trucks</option>
                      <option value="led-display">LED Digital Displays</option>
                      <option value="campaign-management">Full Campaign Management</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maximax-pink focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your advertising goals and target audience..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary btn-lg w-full"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <span className="badge-accent mb-4">Contact Info</span>
                  <h2 className="mb-4">Let's Start a <span className="gradient-text-cyan">Conversation</span></h2>
                  <p className="text-gray-600">
                    Have questions? Want to discuss your advertising needs? We're here to help 
                    and ready to create a custom mobile billboard solution for your business.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-maximax-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-maximax-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:5617200521" className="text-lg font-bold text-maximax-pink hover:text-pink-700 transition-colors">
                          (561) 720-0521
                        </a>
                        <p className="text-sm text-gray-600 mt-1">24/7 Emergency Service Available</p>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-maximax-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-maximax-cyan" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:naser@maximaxadvertising.com" className="text-lg font-bold text-maximax-cyan hover:text-cyan-700 transition-colors">
                          naser@maximaxadvertising.com
                        </a>
                        <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-maximax-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-maximax-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Office Location</h4>
                        <p className="text-gray-700">
                          601 N Congress Ave #410<br />
                          Delray Beach, FL 33445
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Serving all of Palm Beach County</p>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-maximax-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-maximax-cyan" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <div className="space-y-1 text-gray-700">
                          <div className="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span className="font-semibold">8:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday - Sunday:</span>
                            <span className="font-semibold">9:00 AM - 6:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/maximaxadvertising"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-maximax-pink hover:text-white transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com/maximaxadvertising"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-maximax-pink hover:text-white transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/company/maximax-advertising"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-maximax-pink hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/maximaxads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-maximax-pink hover:text-white transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://youtube.com/@maximaxadvertising"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-maximax-pink hover:text-white transition-all"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section section-padding bg-gray-50">
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
      <Footer />
      <FloatingContact />
    </>
  )
}