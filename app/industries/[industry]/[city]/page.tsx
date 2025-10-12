import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, CheckCircle, Award, Target, TrendingUp, MapPin, ArrowRight } from 'lucide-react'
import {
  industryLocationsData,
  getIndustryLocationBySlug,
  getAllIndustryLocationSlugs,
  IndustryLocationData
} from '@/app/lib/data/industry-locations'

// Generate static params for all industry-location combinations
export async function generateStaticParams() {
  return getAllIndustryLocationSlugs()
}

// Generate metadata for each industry-location page
export async function generateMetadata({ params }: {
  params: { industry: string; city: string }
}): Promise<Metadata> {
  const data = getIndustryLocationBySlug(params.industry, params.city)

  if (!data) {
    return {
      title: 'Page Not Found - Maximax Advertising',
      description: 'The requested page could not be found.',
    }
  }

  const title = `${data.industry} Advertising in ${data.city} | Mobile Billboard Trucks`
  const description = data.description.slice(0, 160)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://maximaxmobileadvertising.com/industries/${params.industry}/${params.city}/`,
      siteName: 'Maximax Advertising',
      type: 'website',
      images: [
        {
          url: 'https://maximaxmobileadvertising.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${data.industry} Mobile Billboard Advertising in ${data.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://maximaxmobileadvertising.com/images/og-image.jpg'],
    },
    keywords: data.keywords,
    alternates: {
      canonical: `https://maximaxmobileadvertising.com/industries/${params.industry}/${params.city}/`,
    },
  }
}

function IndustryLocationPage({ params }: { params: { industry: string; city: string } }) {
  const data = getIndustryLocationBySlug(params.industry, params.city)

  if (!data) {
    notFound()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.industry} Mobile Billboard Advertising in ${data.city}`,
    description: data.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Maximax Advertising',
      image: 'https://maximaxmobileadvertising.com/images/maximax-logo.png',
      telephone: '+1-561-720-0521',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'South Florida',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: data.city,
    },
    serviceType: 'Mobile Billboard Advertising',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      description: 'Starting at $500/day',
    },
  }

  return (
    <>
      <Script
        id="industry-location-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-maximax-cyan" />
              <span className="text-maximax-cyan font-semibold">
                {data.city} • {data.industry}
              </span>
            </div>
            <h1 className="text-white mb-6">
              <span className="gradient-text-premium">{data.industry}</span> Advertising in {data.city}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {data.tagline}
            </p>
            <p className="text-lg text-gray-400 mb-8">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Custom Quote
              </a>
              <Link href="/contact/" className="btn-accent btn-lg">
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
              <div className="text-3xl font-bold text-maximax-pink mb-2">{data.stats.roi}</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-cyan mb-2">{data.stats.reach}</div>
              <div className="text-sm text-gray-600">Daily Reach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maximax-pink mb-2">{data.stats.engagement}</div>
              <div className="text-sm text-gray-600">Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Pain Points & Solutions */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pain Points */}
            <div>
              <h2 className="mb-6">
                Challenges for <span className="gradient-text">{data.industry}</span> in {data.city}
              </h2>
              <p className="text-gray-600 mb-6">
                {data.city} {data.industry.toLowerCase()} face unique marketing challenges in this competitive market.
              </p>
              <div className="space-y-4">
                {data.localPainPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <div className="w-2 h-2 bg-maximax-pink rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Solutions */}
            <div>
              <h2 className="mb-6">
                <span className="gradient-text-cyan">{data.city}-Specific</span> Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Our mobile billboards deliver targeted advertising solutions designed specifically for {data.city} {data.industry.toLowerCase()}.
              </p>
              <div className="space-y-4">
                {data.localSolutions.map((solution, index) => (
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
                Why {data.city} {data.industry} Choose <span className="gradient-text">Mobile Billboards</span>
              </h2>
              <p className="text-lg text-gray-600">
                Proven results for {data.industry.toLowerCase()} throughout {data.city}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Case Study */}
            <div className="mt-12 bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-xl p-8">
              <Award className="w-8 h-8 text-maximax-pink mb-4" />
              <h3 className="font-bold mb-3">{data.caseStudy.title}</h3>
              <p className="text-gray-700 mb-4">{data.caseStudy.result}</p>
              <div className="text-2xl font-bold gradient-text">{data.caseStudy.metric}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              How It Works for <span className="gradient-text-cyan">{data.city} {data.industry}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-maximax-pink" />
                </div>
                <h3 className="font-bold mb-2">1. Consultation</h3>
                <p className="text-sm text-gray-600">Discuss your {data.city} market goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h3 className="font-bold mb-2">2. Route Planning</h3>
                <p className="text-sm text-gray-600">Custom {data.city} routes for your audience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-maximax-pink" />
                </div>
                <h3 className="font-bold mb-2">3. Campaign Launch</h3>
                <p className="text-sm text-gray-600">Deploy trucks throughout {data.city}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h3 className="font-bold mb-2">4. Track Results</h3>
                <p className="text-sm text-gray-600">Monitor performance with GPS data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">
              Frequently Asked Questions from <span className="gradient-text">{data.city} {data.industry}</span>
            </h2>

            <div className="space-y-6">
              {data.faqs.map((faq, index) => (
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
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Grow Your {data.city} {data.industry.replace(/s$/, '')} Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join successful {data.city} {data.industry.toLowerCase()} using mobile billboard advertising to dominate their local market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5617200521" className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl">
                <Phone className="w-5 h-5" />
                Call (561) 720-0521
              </a>
              <a
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-maximax-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transform hover:scale-105 transition-all shadow-xl"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              No contracts required • Campaign starts in 48 hours • 100% satisfaction guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold mb-6 text-center">Related Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href={`/markets/${data.industrySlug}/`}
                className="p-4 bg-white rounded-lg hover:shadow-lg transition-shadow text-center"
              >
                <p className="font-semibold text-maximax-pink">{data.industry} Advertising</p>
                <p className="text-sm text-gray-600 mt-1">View all locations</p>
              </Link>
              <Link
                href={`/locations/${data.citySlug}/`}
                className="p-4 bg-white rounded-lg hover:shadow-lg transition-shadow text-center"
              >
                <p className="font-semibold text-maximax-cyan">{data.city} Mobile Billboards</p>
                <p className="text-sm text-gray-600 mt-1">All industries</p>
              </Link>
              <Link
                href="/contact/"
                className="p-4 bg-white rounded-lg hover:shadow-lg transition-shadow text-center"
              >
                <p className="font-semibold text-maximax-pink">Schedule Consultation</p>
                <p className="text-sm text-gray-600 mt-1">Free strategy session</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndustryLocationPage
