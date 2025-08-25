import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServiceCards } from './components/ServiceCards'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'
import Image from 'next/image'
import { CheckCircle, Users, Target, Award } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-maximax-pink" />
                </div>
                <h4 className="font-semibold mb-2">Targeted Reach</h4>
                <p className="text-sm text-gray-600">Strategic routes through high-traffic areas in Palm Beach County</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h4 className="font-semibold mb-2">50K+ Daily Views</h4>
                <p className="text-sm text-gray-600">Massive exposure to potential customers every single day</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-maximax-pink" />
                </div>
                <h4 className="font-semibold mb-2">Proven ROI</h4>
                <p className="text-sm text-gray-600">Average 4.2x return on investment for our clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h4 className="font-semibold mb-2">Full Service</h4>
                <p className="text-sm text-gray-600">Design, campaign management, and analytics included</p>
              </div>
            </div>
          </div>
        </section>

        {/* Billboard Advertising Prices FAQ Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-primary mb-4">Pricing & Cost</span>
              <h2 className="mb-6">
                Billboard Advertising Prices & <span className="gradient-text">Mobile Billboard Cost</span>
              </h2>
              <p className="text-lg text-gray-600">
                Understanding billboard advertising prices, billboard expenses, and mobile billboard advertising cost 
                for your campaign in South Florida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">How much do billboard trucks cost?</h3>
                <p className="text-gray-600 mb-3">
                  Our billboard truck rental and mobile billboard advertising rates start at $500 per day. 
                  Digital billboard truck pricing varies based on campaign duration and routes.
                </p>
                <div className="text-2xl font-bold text-maximax-pink">From $500/day</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">LED truck advertising costs?</h3>
                <p className="text-gray-600 mb-3">
                  LED billboard truck and digital mobile billboard pricing ranges from $800-$2000 per day 
                  depending on coverage area and campaign specifications.
                </p>
                <div className="text-2xl font-bold text-maximax-cyan">$800-$2000/day</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">Mobile advertising trucks pricing?</h3>
                <p className="text-gray-600 mb-3">
                  Our advertising trucks and mobile billboard trucks offer flexible pricing. 
                  No long-term contracts required for our billboard advertising services.
                </p>
                <div className="text-2xl font-bold text-maximax-pink">Flexible Terms</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">What affects billboard costs?</h3>
                <p className="text-gray-600 mb-3">
                  Billboard expenses depend on route selection, campaign duration, and display type. 
                  Our mobile billboards cost less than traditional outdoor advertising.
                </p>
                <div className="text-2xl font-bold text-maximax-cyan">80% Less Than Static</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Keywords Section */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">Our Services</span>
              <h2 className="mb-6">
                Complete <span className="gradient-text-cyan">Mobile Billboard Advertising</span> Solutions
              </h2>
              <p className="text-lg text-gray-600">
                From billboard trucks to LED advertising trucks, we offer comprehensive mobile outdoor advertising 
                throughout South Florida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Digital Billboard Trucks</h3>
                <p className="text-gray-600">
                  Our digital billboard truck fleet features mobile digital billboards with 4K LED displays. 
                  These digital mobile billboard trucks deliver crystal-clear messaging day and night.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Mobile LED Trucks</h3>
                <p className="text-gray-600">
                  LED trucks and mobile LED billboard trucks provide brilliant visibility. Our LED billboard 
                  trucks feature the latest in mobile LED billboard technology.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Billboard Truck Rental</h3>
                <p className="text-gray-600">
                  Rent billboard trucks for events, promotions, or campaigns. Our truck billboard and 
                  mobile truck billboard options include full-service campaign management.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Advertising Trucks</h3>
                <p className="text-gray-600">
                  Our advertising truck and advertisement truck fleet covers all of South Florida. 
                  Mobile advertising trucks deliver your message with maximum impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Moving Billboards</h3>
                <p className="text-gray-600">
                  Moving billboard and portable billboard solutions for flexible campaigns. Our movable 
                  billboard options adapt to your marketing needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">OOH Advertising</h3>
                <p className="text-gray-600">
                  What is OOH in marketing? Out-of-home advertising including mobile outdoor advertising 
                  and outdoor mobile advertising throughout Miami-Dade and Palm Beach.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}