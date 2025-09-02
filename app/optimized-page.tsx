import { Header } from './components/Header'
import { LazyHeroSection } from './components/lazy/LazyHeroSection'
import { LazyServiceCards } from './components/lazy/LazyServiceCards'
import { LazyTestimonials } from './components/lazy/LazyTestimonials'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'
import { OptimizedImage } from './lib/performance/optimized-image'
import { LazyLoad } from './lib/performance/lazy-load'
import { CheckCircle, Users, Target, Award } from 'lucide-react'

export default function OptimizedHomePage() {
  return (
    <>
      <Header />
      <main>
        <LazyHeroSection />
        <LazyServiceCards />
        
        {/* About Section with Lazy Loading */}
        <LazyLoad threshold={0.1} rootMargin="100px">
          <section className="section section-padding bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <span className="badge-primary mb-4">About Maximax</span>
                  <h2 className="mb-6">
                    South Florida&apos;s Premier <span className="gradient-text">Mobile Billboard</span> & LED Truck Company
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Maximax Advertising operates the largest fleet of mobile billboards, billboard trucks, and LED trucks 
                    serving Miami-Dade, Broward, and Palm Beach Counties. Our digital billboard trucks and mobile advertising trucks 
                    deliver unmatched visibility with GPS-tracked campaigns and 4K LED displays.
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

                {/* Optimized Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl transform rotate-3"></div>
                    <OptimizedImage
                      src="/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg"
                      alt="Maximax Billboard Truck"
                      width={600}
                      height={400}
                      className="relative rounded-2xl shadow-2xl"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazyLoad>

        {/* Why Choose Us with Lazy Loading */}
        <LazyLoad threshold={0.1} rootMargin="150px">
          <section className="section section-padding bg-gray-50">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="badge-accent mb-4">Why Choose Us</span>
                <h2 className="mb-6">
                  The <span className="gradient-text-cyan">Smart Choice</span> for Mobile Advertising
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-maximax-pink to-maximax-magenta rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Targeted Reach</h3>
                  <p className="text-gray-600">GPS-tracked routes ensure your message reaches the right audience at the right time</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-maximax-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Maximum Visibility</h3>
                  <p className="text-gray-600">4K LED displays visible from 300+ feet away, day or night</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-maximax-pink to-maximax-magenta rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                  <p className="text-gray-600">Average 4.2x ROI with detailed campaign analytics and reporting</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-maximax-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Full Service</h3>
                  <p className="text-gray-600">Complete campaign management from design to deployment</p>
                </div>
              </div>
            </div>
          </section>
        </LazyLoad>

        <LazyTestimonials />
        
        <LazyLoad threshold={0.1} rootMargin="100px">
          <CTASection />
        </LazyLoad>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}