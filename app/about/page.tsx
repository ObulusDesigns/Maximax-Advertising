import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FloatingContact } from '../components/FloatingContact'
import Image from 'next/image'
import { CheckCircle, Users, Target, Award, TrendingUp, Shield, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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
                About <span className="gradient-text-premium">Maximax Advertising</span>
              </h1>
              <p className="text-xl text-gray-300">
                Leading the revolution in mobile billboard advertising across Palm Beach County 
                with innovative LED technology and data-driven campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge-primary mb-4">Our Story</span>
                <h2 className="mb-6">
                  Driving <span className="gradient-text">Innovation</span> in Mobile Advertising
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2019, Maximax Advertising emerged from a simple vision: to revolutionize 
                  outdoor advertising in South Florida. We recognized that traditional billboards were 
                  static, expensive, and limited in reach. Our solution? Mobile billboard trucks that 
                  bring your message directly to your audience.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we operate a fleet of state-of-the-art LED billboard trucks equipped with 
                  4K displays and GPS tracking technology. Our coverage spans across Boca Raton, 
                  Delray Beach, Boynton Beach, and the entire Palm Beach County area, delivering 
                  over 50,000 impressions daily.
                </p>
                <p className="text-gray-600">
                  What sets us apart is our commitment to measurable results. Every campaign is 
                  backed by data, from GPS route tracking to impression analytics, ensuring our 
                  clients achieve maximum ROI on their advertising investment.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg"
                  alt="Maximax Advertising Fleet"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">Our Values</span>
              <h2 className="mb-6">
                What Drives <span className="gradient-text-cyan">Our Success</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-maximax-pink" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mission</h3>
                <p className="text-gray-600">
                  To provide innovative, measurable, and impactful mobile advertising solutions 
                  that drive real results for businesses in Palm Beach County.
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We believe in transparency, honest communication, and delivering on our promises. 
                  Your success is our success.
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-maximax-pink" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">
                  We're proud to serve local businesses and contribute to the economic growth 
                  of Boca Raton and surrounding communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-primary mb-4">Our Team</span>
              <h2 className="mb-6">
                Meet the <span className="gradient-text">Experts</span> Behind Your Success
              </h2>
              <p className="text-lg text-gray-600">
                Our dedicated team of advertising professionals, designers, and campaign managers 
                work tirelessly to ensure your message reaches the right audience at the right time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <Image
                  src="/images/Team/FB_IMG_1727195998551.jpeg"
                  alt="Maximax Advertising Team"
                  width={800}
                  height={400}
                  className="rounded-xl shadow-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">Naser & The Maximax Team</h3>
                <p className="text-gray-600 mb-6">
                  With over 5 years of experience in digital marketing and outdoor advertising, 
                  our team brings expertise, creativity, and dedication to every campaign.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div>
                    <div className="text-2xl font-bold text-maximax-pink">15+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-maximax-cyan">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-maximax-pink">100%</div>
                    <div className="text-sm text-gray-600">Dedicated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section section-padding bg-gradient-to-br from-maximax-pink to-maximax-cyan">
          <div className="container">
            <div className="text-center text-white max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-6">Why Businesses Choose Maximax</h2>
              <p className="text-xl text-white/90">
                We don't just display ads – we create impactful campaigns that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold mb-2">4.2x Average ROI</h4>
                <p className="text-sm text-white/80">Proven results that exceed expectations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold mb-2">50K+ Daily Views</h4>
                <p className="text-sm text-white/80">Massive reach across Palm Beach County</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold mb-2">GPS Tracking</h4>
                <p className="text-sm text-white/80">Real-time campaign monitoring</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Full Service</h4>
                <p className="text-sm text-white/80">Design to deployment included</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Advertising?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join 200+ successful businesses that have elevated their brand visibility 
                with Maximax Advertising's mobile billboard solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary btn-lg">
                  Get Started Today
                </Link>
                <a href="tel:5617200521" className="btn-accent btn-lg">
                  Call (561) 720-0521
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}