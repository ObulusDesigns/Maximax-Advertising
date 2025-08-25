import Image from 'next/image'
import Link from 'next/link'
import { Phone, TrendingUp, Users, Target, DollarSign, CheckCircle, ArrowRight, BarChart3, Award, Clock } from 'lucide-react'

interface MarketPageProps {
  industry: string
  slug: string
  tagline: string
  description: string
  painPoints: string[]
  solutions: Array<{
    title: string
    description: string
  }>
  benefits: string[]
  stats: {
    roi: string
    reach: string
    engagement: string
  }
  caseStudy?: {
    title: string
    result: string
    metric: string
  }
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function MarketPageTemplate({
  industry,
  slug,
  tagline,
  description,
  painPoints,
  solutions,
  benefits,
  stats,
  caseStudy,
  faqs
}: MarketPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-maximax-cyan" />
              <span className="text-maximax-cyan font-semibold">Industry Solutions</span>
            </div>
            <h1 className="text-white mb-6">
              Mobile Billboard Advertising for <span className="gradient-text-premium">{industry}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {tagline}
            </p>
            <p className="text-lg text-gray-400 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5617200521" className="btn-primary btn-lg">
                <Phone className="w-5 h-5" />
                Get Custom Quote
              </a>
              <Link href="/contact" className="btn-accent btn-lg">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-pink mb-2">{stats.roi}</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-cyan mb-2">{stats.reach}</div>
              <div className="text-sm text-gray-600">Daily Reach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-pink mb-2">{stats.engagement}</div>
              <div className="text-sm text-gray-600">Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pain Points */}
            <div>
              <h2 className="mb-6">
                Common Challenges for <span className="gradient-text">{industry}</span>
              </h2>
              <p className="text-gray-600 mb-6">
                We understand the unique advertising challenges faced by {industry.toLowerCase()} in today's competitive market.
              </p>
              <div className="space-y-4">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <div className="w-2 h-2 bg-maximax-pink rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="mb-6">
                How Mobile Billboards <span className="gradient-text-cyan">Solve These Challenges</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Our LED billboard trucks provide targeted, flexible advertising solutions specifically designed for {industry.toLowerCase()}.
              </p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg">
                    <h3 className="font-bold mb-2 text-maximax-cyan">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Why {industry} Choose <span className="gradient-text">Mobile Billboard Advertising</span>
              </h2>
              <p className="text-lg text-gray-600">
                Discover the competitive advantages that make mobile billboards the smart choice for {industry.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Case Study if provided */}
            {caseStudy && (
              <div className="mt-12 bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-xl p-8">
                <Award className="w-8 h-8 text-maximax-pink mb-4" />
                <h3 className="font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-gray-700 mb-4">{caseStudy.result}</p>
                <div className="text-2xl font-bold gradient-text">{caseStudy.metric}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              How Mobile Billboard Advertising Works for <span className="gradient-text-cyan">{industry}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-maximax-pink" />
                </div>
                <h3 className="font-bold mb-2">1. Consultation</h3>
                <p className="text-sm text-gray-600">Discuss your goals and target audience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h3 className="font-bold mb-2">2. Route Planning</h3>
                <p className="text-sm text-gray-600">Design custom routes for maximum impact</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-maximax-pink" />
                </div>
                <h3 className="font-bold mb-2">3. Campaign Launch</h3>
                <p className="text-sm text-gray-600">Deploy GPS-tracked LED billboard trucks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h3 className="font-bold mb-2">4. Track Results</h3>
                <p className="text-sm text-gray-600">Monitor performance and optimize routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Affordable Advertising Solutions for {industry}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Mobile billboard advertising costs 80% less than traditional billboards while delivering 
              4x more impressions. Plans start at just $500/day with no long-term contracts required.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">$500+</div>
                <div className="text-sm text-white/80">Starting Daily Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">No Contract</div>
                <div className="text-sm text-white/80">Flexible Terms</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">Campaign Control</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Get Your Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">
              Frequently Asked Questions from <span className="gradient-text">{industry}</span>
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-6">
                  <h3 className="font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">
              Ready to Grow Your <span className="gradient-text">{industry.replace(/s$/, '')}</span> Practice?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of successful {industry.toLowerCase()} using mobile billboard advertising 
              to attract new patients and grow their practice in Miami-Dade and Palm Beach Counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5617200521" className="btn-primary btn-lg">
                <Phone className="w-5 h-5" />
                Call (561) 720-0521
              </a>
              <Link href="/contact" className="btn-accent btn-lg">
                Schedule Free Consultation
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No contracts required • Campaign starts in 48 hours • 100% satisfaction guaranteed
            </p>
          </div>
        </div>
      </section>
    </>
  )
}