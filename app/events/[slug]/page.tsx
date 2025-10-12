import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, Calendar, MapPin, Users, TrendingUp, Target, CheckCircle, ArrowRight, Clock, DollarSign } from 'lucide-react'
import { eventsData, getEventBySlug, getAllEventSlugs, EventData } from '@/app/lib/data/events'

// Generate static params for all event pages
export async function generateStaticParams() {
  return getAllEventSlugs().map(slug => ({ slug }))
}

// Generate metadata for each event page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = getEventBySlug(params.slug)

  if (!event) {
    return {
      title: 'Event Not Found - Maximax Advertising',
      description: 'The requested event page could not be found.',
    }
  }

  const title = `${event.name} Mobile Billboard Advertising | Maximax`
  const description = event.description.slice(0, 160)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://maximaxmobileadvertising.com/events/${params.slug}/`,
      siteName: 'Maximax Advertising',
      type: 'website',
      images: [
        {
          url: 'https://maximaxmobileadvertising.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${event.name} Mobile Billboard Advertising`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://maximaxmobileadvertising.com/images/og-image.jpg'],
    },
    keywords: event.keywords,
    alternates: {
      canonical: `https://maximaxmobileadvertising.com/events/${params.slug}/`,
    },
  }
}

function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Event',
        name: event.name,
        description: event.description,
        startDate: event.eventDates,
        location: {
          '@type': 'Place',
          name: event.location,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'South Florida',
            addressRegion: 'FL',
            addressCountry: 'US',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'Maximax Advertising',
          url: 'https://maximaxmobileadvertising.com',
        },
      },
      {
        '@type': 'Service',
        name: `${event.name} Mobile Billboard Advertising`,
        description: event.description,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Maximax Advertising',
          telephone: '+1-561-720-0521',
        },
        areaServed: {
          '@type': 'State',
          name: 'Florida',
        },
        serviceType: 'Event Mobile Billboard Advertising',
      },
    ],
  }

  return (
    <>
      <Script
        id="event-structured-data"
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
              <Calendar className="w-5 h-5 text-maximax-cyan" />
              <span className="text-maximax-cyan font-semibold">Event Marketing</span>
            </div>
            <h1 className="text-white mb-6">
              <span className="gradient-text-premium">{event.name}</span> Mobile Billboard Advertising
            </h1>
            <p className="text-xl text-gray-300 mb-4">{event.tagline}</p>
            <p className="text-lg text-gray-400 mb-8">{event.description}</p>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-maximax-pink mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Event Dates</p>
                  <p className="text-white font-semibold">{event.eventDates}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maximax-cyan mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-semibold">{event.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-maximax-pink mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Target Audience</p>
                  <p className="text-white font-semibold">{event.targetAudience.split(',').slice(0, 3).join(', ')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-maximax-cyan mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Expected Reach</p>
                  <p className="text-white font-semibold">{event.expectedReach}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Event Quote
              </a>
              <Link href="/contact/" className="btn-accent btn-lg">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Routes Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Strategic <span className="gradient-text">Routes & Targeting</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our mobile billboards target key areas where {event.name} attendees travel and gather.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.strategicRoutes.map((route, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Target className="w-5 h-5 text-maximax-cyan mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{route}</p>
                </div>
              ))}
            </div>

            {/* Timing Strategy */}
            <div className="mt-8 bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-maximax-pink mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Timing Strategy</h3>
                  <p className="text-gray-700">{event.timingStrategy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Why Advertise at <span className="gradient-text-cyan">{event.name}</span>
              </h2>
              <p className="text-lg text-gray-600">
                Maximize your brand exposure and ROI during this premier South Florida event.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-maximax-cyan flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Details */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">
              Who You'll <span className="gradient-text">Reach</span>
            </h2>
            <div className="bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-xl p-8">
              <Users className="w-8 h-8 text-maximax-pink mb-4" />
              <h3 className="font-bold mb-4">Target Audience</h3>
              <div className="flex flex-wrap gap-2">
                {event.targetAudience.split(',').map((audience, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700"
                  >
                    {audience.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <DollarSign className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-white mb-6">Event Advertising Pricing</h2>
            <p className="text-xl mb-8 text-white/90">{event.pricing}</p>
            <a
              href="https://maximaxmobileadvertising.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Get Your Custom Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">
              Frequently Asked Questions About <span className="gradient-text">{event.name} Advertising</span>
            </h2>

            <div className="space-y-6">
              {event.faqs.map((faq, index) => (
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
              Ready to Dominate <span className="gradient-text">{event.name}</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book your mobile billboard campaign now to secure premium routes and maximize your event marketing ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5617200521" className="btn-primary btn-lg">
                <Phone className="w-5 h-5" />
                Call (561) 720-0521
              </a>
              <Link href="/contact/" className="btn-accent btn-lg">
                Schedule Free Consultation
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Book early for best availability • No contracts required • Campaign starts in 48 hours
            </p>
          </div>
        </div>
      </section>

      {/* Related Events & Markets */}
      <section className="section py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold mb-6 text-center">Related Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {event.relatedMarkets.slice(0, 3).map((marketSlug, index) => (
                <Link
                  key={index}
                  href={`/markets/${marketSlug}/`}
                  className="p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow text-center"
                >
                  <p className="font-semibold text-maximax-pink capitalize">
                    {marketSlug.replace(/-/g, ' ')}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">View market page</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventPage
