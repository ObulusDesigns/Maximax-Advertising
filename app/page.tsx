import { HeroSection } from './components/HeroSection'
import { ServiceCards } from './components/ServiceCards'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CTASection } from './components/CTASection'
import { GoogleReviewWidget } from './components/GoogleReviewWidget'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Users, Target, Award, ChevronRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile Billboard Advertising Florida | LED Trucks | Maximax',
  description: 'Mobile billboard advertising in Florida. LED billboard trucks with GPS tracking serving Miami, Fort Lauderdale, and Palm Beach. Professional mobile advertising campaigns.',
  keywords: [
    'mobile billboard advertising',
    'billboard trucks Florida',
    'LED billboard trucks',
    'digital billboard advertising',
    'mobile advertising Florida',
    'billboard advertising Miami',
    'mobile billboards Fort Lauderdale',
    'advertising trucks Palm Beach',
    'outdoor advertising Florida',
    'mobile marketing Florida'
  ],
  openGraph: {
    title: 'Mobile Billboard Advertising | LED Trucks | Maximax Advertising',
    description: 'Professional mobile billboard advertising in Florida. GPS-tracked billboard trucks, LED displays, and mobile advertising campaigns throughout South Florida.',
  },
}

export default function HomePage() {
  return (
    <>
            <main id="main-content" role="main">
        <HeroSection />

        <ServiceCards />

        {/* About Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <span className="badge-primary mb-4">About Maximax</span>
                <h2 className="mb-6">
                  South Florida&apos;s Premier <span className="gradient-text">Mobile Billboard</span> Company
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Maximax Advertising provides professional mobile billboard advertising solutions throughout South Florida.
                  Our fleet of LED billboard trucks delivers high-impact outdoor advertising campaigns
                  throughout Miami-Dade, Broward, and Palm Beach Counties with GPS tracking and real-time reporting.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">GPS-Tracked Campaigns</h4>
                      <p className="text-gray-600">Real-time tracking and route optimization for maximum exposure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">4K Ultra HD Displays</h4>
                      <p className="text-gray-600">Crystal-clear messaging that captures attention day and night</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Extended Operating Hours</h4>
                      <p className="text-gray-600">7 AM to 11 PM daily coverage for maximum impressions</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-bold text-maximax-pink">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-maximax-pink">200+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-maximax-pink">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl transform rotate-3"></div>
                  <Image
                    src="/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg"
                    alt="Maximax Billboard Truck"
                    width={600}
                    height={400}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">Why Choose Us</span>
              <h2 className="mb-6">
                The <span className="gradient-text-cyan">Smart Choice</span> for Mobile Advertising
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Features */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-maximax-pink" />
                    </div>
                    <h4 className="font-semibold mb-2">Targeted Reach</h4>
                    <p className="text-sm text-gray-600">Strategic routes through high-traffic areas in South Florida</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-maximax-cyan" />
                    </div>
                    <h4 className="font-semibold mb-2">50,000+ Impressions</h4>
                    <p className="text-sm text-gray-600">Daily visibility to thousands of potential customers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-maximax-pink" />
                    </div>
                    <h4 className="font-semibold mb-2">Proven Results</h4>
                    <p className="text-sm text-gray-600">Track record of successful campaigns across industries</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-maximax-cyan" />
                    </div>
                    <h4 className="font-semibold mb-2">Full Service</h4>
                    <p className="text-sm text-gray-600">Complete campaign management from design to reporting</p>
                  </div>
                </div>
              </div>

              {/* Google Review Widget Sidebar */}
              <div>
                <GoogleReviewWidget />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-primary mb-4">Frequently Asked Questions</span>
              <h2 className="mb-6">
                Mobile Billboard <span className="gradient-text">Advertising</span> Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our mobile billboard advertising services and campaigns.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border-l-4 border-maximax-cyan">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What areas do you serve in Florida?
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide mobile billboard advertising services throughout <strong>South Florida</strong>,
                  including Miami-Dade, Broward, and Palm Beach Counties. Our trucks operate in all major cities
                  and communities from Miami to West Palm Beach.
                </p>
                <Link href="/contact/" className="inline-flex items-center text-maximax-cyan font-semibold hover:text-maximax-pink transition-colors">
                  Contact us for availability <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  How do mobile billboards work?
                </h3>
                <p className="text-gray-700">
                  Our mobile billboard trucks feature large LED displays that showcase your advertisement while
                  driving through targeted areas. Each truck is GPS-tracked, allowing you to monitor your campaign
                  in real-time and ensure maximum exposure to your target audience.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  What types of businesses use mobile billboards?
                </h3>
                <p className="text-gray-700">
                  Mobile billboards are effective for all types of businesses including restaurants, retail stores,
                  real estate agencies, healthcare providers, entertainment venues, political campaigns, and special events.
                  Any business looking to increase brand awareness and reach local customers can benefit.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  How far in advance should I book?
                </h3>
                <p className="text-gray-700">
                  We recommend booking at least 2 weeks in advance to ensure availability, especially during peak seasons
                  and major events. However, we can often accommodate last-minute requests depending on fleet availability.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  Can I track my mobile billboard campaign?
                </h3>
                <p className="text-gray-700">
                  Yes! All our trucks are equipped with GPS tracking. You'll receive access to a real-time dashboard
                  where you can monitor your truck's location, route coverage, and campaign performance metrics.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3 text-gray-900">
                  What creative formats do you accept?
                </h3>
                <p className="text-gray-700">
                  We accept various digital formats including images and videos. Our design team can also help create
                  custom advertisements optimized for mobile billboard displays. We'll ensure your message looks great
                  on our 4K LED screens.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <CTASection />
      </main>
                </>
  )
}