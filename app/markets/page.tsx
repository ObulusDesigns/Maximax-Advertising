import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { 
  Heart, 
  Stethoscope, 
  Scale, 
  Globe, 
  Home, 
  Shield, 
  HardHat, 
  Thermometer,
  TrendingUp,
  Users,
  Target,
  ArrowRight
} from 'lucide-react'

const markets = [
  {
    title: 'Plastic Surgeons',
    slug: 'plastic-surgeons',
    icon: Heart,
    description: 'Reach high-value patients seeking cosmetic procedures in affluent neighborhoods.',
    stats: '5.2x ROI',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Chiropractors',
    slug: 'chiropractors',
    icon: Stethoscope,
    description: 'Connect with patients suffering from back pain and auto injuries.',
    stats: '4.8x ROI',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Personal Injury Lawyers',
    slug: 'personal-injury-lawyers',
    icon: Scale,
    description: 'Dominate accident zones and hospital districts for maximum case intake.',
    stats: '8.5x ROI',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Immigration Lawyers',
    slug: 'immigration-lawyers',
    icon: Globe,
    description: 'Reach immigrant communities with multilingual targeted advertising.',
    stats: '6.3x ROI',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Home Builders',
    slug: 'home-builders',
    icon: Home,
    description: 'Drive traffic to model homes and new community grand openings.',
    stats: '7.2x ROI',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Impact Windows & Doors',
    slug: 'impact-windows-doors',
    icon: Shield,
    description: 'Target homeowners before hurricane season for protection upgrades.',
    stats: '5.8x ROI',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'Roofing Companies',
    slug: 'roofing',
    icon: HardHat,
    description: 'Generate emergency leads after storms and maintain year-round business.',
    stats: '6.5x ROI',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'HVAC Companies',
    slug: 'hvac',
    icon: Thermometer,
    description: 'Capture emergency repairs during temperature extremes and seasonal maintenance.',
    stats: '7.8x ROI',
    color: 'from-blue-500 to-indigo-500'
  }
]

export const metadata: Metadata = {
  title: 'Industries We Serve | Mobile Billboard Advertising by Market',
  description: 'Specialized mobile billboard advertising solutions for plastic surgeons, lawyers, contractors, and more in Miami-Dade and Palm Beach Counties.',
  keywords: [
    'industry specific advertising',
    'mobile billboard industries',
    'LED truck advertising markets',
    'business advertising solutions',
    'targeted mobile advertising',
    'industry marketing Florida'
  ]
}

export default function MarketsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white mb-6">
                Industry-Specific <span className="gradient-text-premium">Mobile Billboard Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Tailored advertising strategies for your industry with proven ROI and targeted reach 
                throughout Miami-Dade and Palm Beach Counties.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-maximax-pink">500+</div>
                <div className="text-sm text-gray-600">Businesses Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-maximax-cyan">6.2x</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-maximax-pink">40K+</div>
                <div className="text-sm text-gray-600">Daily Impressions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-maximax-cyan">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Choose Your <span className="gradient-text">Industry</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges and opportunities in your industry. 
                Select your market below to discover customized mobile billboard solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {markets.map((market) => {
                const Icon = market.icon
                return (
                  <Link
                    key={market.slug}
                    href={`/markets/${market.slug}`}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${market.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-maximax-pink transition-colors">
                      {market.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {market.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-maximax-cyan">
                        {market.stats}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-maximax-pink transition-colors" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Industry-Specific */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12">
                Why Industry-Specific <span className="gradient-text-cyan">Mobile Billboard Advertising</span> Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Targeted Messaging</h3>
                    <p className="text-gray-600">
                      Craft messages that speak directly to your ideal customers' pain points and needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Right Audience</h3>
                    <p className="text-gray-600">
                      Target specific demographics, neighborhoods, and locations where your customers are.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-maximax-pink flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Proven Strategies</h3>
                    <p className="text-gray-600">
                      Leverage industry-specific tactics that have generated success for similar businesses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-maximax-cyan flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Competitive Edge</h3>
                    <p className="text-gray-600">
                      Stand out from competitors with mobile advertising they can't match or replicate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-white mb-6">
                Success Across All Industries
              </h2>
              <p className="text-xl mb-12 text-white/90">
                Our industry-specific approach delivers measurable results for businesses of all sizes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">2.5M+</div>
                  <div className="text-sm text-white/80">Monthly Impressions Generated</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">15,000+</div>
                  <div className="text-sm text-white/80">Leads Generated Monthly</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">$2M+</div>
                  <div className="text-sm text-white/80">Client Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">
                Ready to Dominate Your <span className="gradient-text">Market</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's create a custom mobile billboard campaign that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5617200521" className="btn-primary btn-lg">
                  Call (561) 720-0521
                </a>
                <Link href="/contact" className="btn-accent btn-lg">
                  Get Industry-Specific Quote
                </Link>
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