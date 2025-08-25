import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FloatingContact } from '../components/FloatingContact'
import { CTASection } from '../components/CTASection'
import Image from 'next/image'
import { Truck, Monitor, MapPin, Zap, BarChart3, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const detailedServices = [
  {
    id: 'mobile-billboards',
    icon: Truck,
    title: 'Mobile Billboard Trucks',
    description: 'Our fleet of mobile billboard trucks brings your advertising message directly to your target audience throughout Palm Beach County.',
    image: '/images/1-1.png',
    features: [
      '10x20 feet high-visibility displays',
      'Custom route planning based on demographics',
      'Coverage from Boca Raton to West Palm Beach',
      '16+ hours daily operation (7AM-11PM)',
      'Weather-resistant all-season advertising',
      'Driver-operated professional service',
    ],
    benefits: [
      'Reach audiences where they live, work, and play',
      'No permit requirements or location restrictions',
      'Change messages instantly without printing costs',
      'Target specific events, neighborhoods, or businesses',
    ],
  },
  {
    id: 'led-displays',
    icon: Monitor,
    title: 'LED Digital Displays',
    description: 'State-of-the-art 4K Ultra HD LED screens deliver crystal-clear messaging that captures attention day and night.',
    image: '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
    features: [
      '4K Ultra HD resolution (3840 x 2160 pixels)',
      'Brightness optimized for day/night visibility',
      'Full-color dynamic content support',
      'Video and animation capabilities',
      'Remote content updates available',
      'Energy-efficient LED technology',
    ],
    benefits: [
      'Stand out with vibrant, eye-catching displays',
      'Update content remotely in real-time',
      'Display multiple messages in rotation',
      'Perfect visibility in all lighting conditions',
    ],
  },
  {
    id: 'gps-tracking',
    icon: MapPin,
    title: 'GPS Live Tracking',
    description: 'Real-time GPS tracking provides complete transparency and allows for route optimization to maximize your campaign effectiveness.',
    features: [
      'Live location tracking via web portal',
      'Historical route playback',
      'Geo-fence notifications',
      'Speed and stop duration monitoring',
      'Daily route reports',
      'Coverage heat maps',
    ],
    benefits: [
      'Verify your campaign is running as planned',
      'Optimize routes based on traffic patterns',
      'Measure time spent in target areas',
      'Receive proof of performance reports',
    ],
  },
  {
    id: '4k-screens',
    icon: Zap,
    title: '4K Ultra HD Screens',
    description: 'Industry-leading display technology ensures your message is delivered with stunning clarity and impact.',
    features: [
      'Ultra-high definition resolution',
      '10-bit color depth for vivid imagery',
      'Anti-glare coating for readability',
      '178° viewing angle',
      'Automatic brightness adjustment',
      'Weather-sealed enclosures',
    ],
    benefits: [
      'Maximum visibility from all angles',
      'Professional presentation of your brand',
      'Clear messaging even in bright sunlight',
      'Attention-grabbing visual quality',
    ],
  },
  {
    id: 'campaign-management',
    icon: BarChart3,
    title: 'Campaign Management',
    description: 'Full-service campaign management from design to deployment, with detailed analytics and reporting.',
    features: [
      'Professional graphic design services',
      'Campaign strategy consultation',
      'A/B testing capabilities',
      'Performance analytics dashboard',
      'Monthly performance reports',
      'Dedicated account management',
    ],
    benefits: [
      'Hassle-free campaign execution',
      'Data-driven optimization',
      'Professional creative services included',
      'Measurable ROI tracking',
    ],
  },
  {
    id: 'coverage-areas',
    icon: Clock,
    title: 'Coverage Areas',
    description: 'Strategic coverage throughout Palm Beach County, focusing on high-traffic areas and target demographics.',
    features: [
      'Boca Raton - Downtown & Beach Areas',
      'Delray Beach - Atlantic Ave & Beach',
      'Boynton Beach - Commercial Districts',
      'Deerfield Beach - Shopping Centers',
      'West Palm Beach - Business Districts',
      'Wellington, Lake Worth, Pompano Beach',
    ],
    benefits: [
      'Reach your exact target market',
      'Coverage where your customers are',
      'Flexible routing options',
      'Event and seasonal targeting available',
    ],
  },
]

export default function ServicesPage() {
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
                Our <span className="gradient-text-premium">Services</span>
              </h1>
              <p className="text-xl text-gray-300">
                Comprehensive mobile billboard advertising solutions designed to maximize your 
                brand visibility and deliver measurable results across Palm Beach County.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-primary mb-4">What We Offer</span>
              <h2 className="mb-6">
                Complete <span className="gradient-text">Mobile Advertising</span> Solutions
              </h2>
              <p className="text-lg text-gray-600">
                From concept to execution, we provide everything you need for successful 
                mobile billboard advertising campaigns.
              </p>
            </div>

            {/* Detailed Service Sections */}
            <div className="space-y-20">
              {detailedServices.map((service, index) => {
                const Icon = service.icon
                const isReversed = index % 2 === 1
                
                return (
                  <div key={service.id} id={service.id} className="scroll-mt-24">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? '' : ''}`}>
                      {/* Content */}
                      <div className={isReversed ? 'lg:order-2' : ''}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-maximax-pink/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-maximax-pink" />
                          </div>
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                        </div>
                        
                        <p className="text-lg text-gray-600 mb-6">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        {service.benefits && (
                          <div className="bg-gray-50 rounded-xl p-6">
                            <h4 className="font-semibold mb-3">Benefits for Your Business:</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit) => (
                                <li key={benefit} className="flex items-start gap-2">
                                  <ArrowRight className="w-5 h-5 text-maximax-pink flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-600">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Image */}
                      {service.image && (
                        <div className={`relative ${isReversed ? 'lg:order-1' : ''}`}>
                          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={600}
                              height={400}
                              className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">How It Works</span>
              <h2 className="mb-6">
                Simple <span className="gradient-text-cyan">4-Step Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Consultation</h4>
                <p className="text-sm text-gray-600">
                  Discuss your goals and target audience with our team
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Design & Planning</h4>
                <p className="text-sm text-gray-600">
                  Create compelling visuals and plan optimal routes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Launch Campaign</h4>
                <p className="text-sm text-gray-600">
                  Deploy your mobile billboard campaign within 48 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Track & Optimize</h4>
                <p className="text-sm text-gray-600">
                  Monitor performance and optimize for maximum ROI
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">
                Custom Pricing for <span className="gradient-text">Your Needs</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every business is unique, and so are our pricing plans. We offer flexible 
                packages tailored to your budget, campaign goals, and target market.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">Package Options Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-maximax-pink mb-2">Starter Package</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 1-week campaigns</li>
                      <li>• Single truck deployment</li>
                      <li>• Basic route planning</li>
                      <li>• Design assistance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-maximax-cyan mb-2">Growth Package</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 2-4 week campaigns</li>
                      <li>• Multiple truck options</li>
                      <li>• Advanced targeting</li>
                      <li>• Full design service</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-maximax-pink mb-2">Enterprise Package</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Long-term campaigns</li>
                      <li>• Fleet deployment</li>
                      <li>• Custom routing</li>
                      <li>• Dedicated account manager</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5617200521" className="btn-primary btn-lg">
                  Get Custom Quote
                </a>
                <Link href="/contact" className="btn-accent btn-lg">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}