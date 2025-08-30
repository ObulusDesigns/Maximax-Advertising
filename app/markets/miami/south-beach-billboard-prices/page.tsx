import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import Script from 'next/script'
import Link from 'next/link'
import { DollarSign, Umbrella, Users, MapPin, CheckCircle, ArrowRight, TrendingUp, Clock, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'South Beach Billboard Prices | Ocean Drive Advertising Costs Miami Beach',
  description: 'South Beach billboard prices starting at $999/day. Mobile LED billboards on Ocean Drive, Lincoln Road, Collins Avenue. 70% cheaper than fixed billboards with better targeting for restaurants, nightclubs, hotels.',
  keywords: [
    'South Beach billboard prices',
    'Ocean Drive billboard cost',
    'Miami Beach advertising rates',
    'Lincoln Road billboard advertising',
    'Collins Avenue billboard prices',
    'South Beach mobile billboard',
    'Miami Beach LED truck advertising',
    'SoBe billboard rental',
    'beach advertising Miami',
    'tourist area billboard prices',
    'nightclub advertising South Beach',
    'restaurant billboard Miami Beach',
    'hotel advertising Ocean Drive',
    'Art Deco District billboards',
    'South Pointe billboard cost'
  ],
  openGraph: {
    title: 'South Beach Billboard Prices - Ocean Drive & Lincoln Road Advertising',
    description: 'Advertise in South Beach Miami with mobile LED billboards. Target Ocean Drive, Lincoln Road, Collins Avenue. Starting at $999/day with no contracts.',
    url: 'https://maximaxmobileadvertising.com/markets/miami/south-beach-billboard-prices',
    siteName: 'Maximax Advertising',
    images: [
      {
        url: '/images/south-beach-billboard.jpg',
        width: 1200,
        height: 630,
        alt: 'South Beach Miami Mobile Billboard on Ocean Drive',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South Beach Billboard Prices - Target Miami Beach Tourists',
    description: 'Mobile LED billboards in South Beach from $999/day. Reach 40,000+ tourists daily on Ocean Drive and Lincoln Road.',
  },
  alternates: {
    canonical: 'https://maximaxmobileadvertising.com/markets/miami/south-beach-billboard-prices',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AdvertisingAgency"],
  "name": "Maximax Advertising - South Beach Billboard Prices",
  "description": "Mobile billboard advertising in South Beach Miami. Target Ocean Drive, Lincoln Road, and Collins Avenue with LED billboard trucks.",
  "url": "https://maximaxmobileadvertising.com/markets/miami/south-beach-billboard-prices",
  "telephone": "786-633-4449",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami Beach",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.7907,
    "longitude": -80.1300
  },
  "areaServed": {
    "@type": "Place",
    "name": "South Beach",
    "alternateName": "SoBe",
    "description": "South Beach Miami including Ocean Drive, Lincoln Road, Collins Avenue, and the Art Deco District"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "South Beach Mobile Billboard Advertising",
      "description": "LED billboard trucks targeting South Beach tourist areas"
    },
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "999",
      "priceCurrency": "USD",
      "unitText": "per day"
    }
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do billboards cost in South Beach Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile billboard advertising in South Beach starts at $999/day during regular season and $1,299-$1,499/day during peak season (December-April). This is 70% less than fixed billboards on Ocean Drive which cost $8,000-$20,000/month."
      }
    },
    {
      "@type": "Question",
      "name": "What South Beach areas can mobile billboards cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our mobile billboards cover all prime South Beach locations including Ocean Drive (5th to 15th Street), Lincoln Road pedestrian mall, Collins Avenue, Washington Avenue, Alton Road, and South Pointe. We also target beach access points and Art Deco hotels."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to advertise in South Beach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "South Beach has year-round traffic, but peak seasons include December-April (winter tourists), March (Spring Break), and during major events like Art Basel, Miami Music Week, and Food & Wine Festival. Mobile billboards let you capitalize on these periods without long-term contracts."
      }
    }
  ]
}

const southBeachRoutes = [
  {
    route: 'Ocean Drive Circuit',
    description: '5th to 15th Street along the beach',
    traffic: '40,000+ daily',
    bestFor: 'Restaurants, Nightclubs, Hotels',
    peakHours: '11am-2am'
  },
  {
    route: 'Lincoln Road Loop',
    description: 'Pedestrian mall and surrounding blocks',
    traffic: '35,000+ daily',
    bestFor: 'Retail, Dining, Entertainment',
    peakHours: '12pm-11pm'
  },
  {
    route: 'Collins Avenue Corridor',
    description: '5th to 23rd Street hotel row',
    traffic: '30,000+ daily',
    bestFor: 'Luxury Brands, Hotels, Services',
    peakHours: '10am-midnight'
  },
  {
    route: 'Washington Avenue',
    description: 'Main north-south thoroughfare',
    traffic: '25,000+ daily',
    bestFor: 'Local Services, Dining, Retail',
    peakHours: '8am-10pm'
  }
]

const pricingTiers = [
  {
    name: 'Day Pass',
    duration: '1 Day',
    price: '$999',
    perDay: '$999',
    best: false,
    features: ['8 hours coverage', 'Single route selection', 'Basic GPS tracking', 'Same-day setup available']
  },
  {
    name: 'Weekend Package',
    duration: '3 Days',
    price: '$2,697',
    perDay: '$899',
    best: false,
    features: ['Friday-Sunday coverage', 'Multiple route rotation', 'Real-time GPS tracking', 'Creative changes included']
  },
  {
    name: 'Week Campaign',
    duration: '7 Days',
    price: '$5,593',
    perDay: '$799',
    best: true,
    features: ['Full week coverage', 'All South Beach routes', 'Detailed analytics', 'Free creative updates', '10% discount included']
  },
  {
    name: 'Monthly Domination',
    duration: '30 Days',
    price: '$20,970',
    perDay: '$699',
    best: false,
    features: ['Maximum exposure', 'Priority routing', 'Weekly reports', 'Unlimited creative changes', '30% discount included']
  }
]

export default function SouthBeachBillboardPricesPage() {
  return (
    <>
      <Script
        id="schema-south-beach"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="schema-faq-sb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Umbrella className="w-5 h-5 text-maximax-cyan" />
                <span className="text-maximax-cyan font-semibold">South Beach Advertising</span>
              </div>
              <h1 className="text-white mb-6">
                South Beach <span className="gradient-text-premium">Billboard Prices</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Target 40,000+ Daily Tourists on Ocean Drive & Lincoln Road
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Mobile LED billboards in South Beach deliver unmatched visibility in Miami's premier tourist 
                destination. Reach affluent visitors, locals, and the vibrant nightlife crowd with dynamic 
                advertising that moves through the Art Deco District, Ocean Drive, and Lincoln Road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                  className="btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get South Beach Quote
                </a>
                <Link href="/contact" className="btn-accent btn-lg">
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* South Beach Stats */}
        <section className="section py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">24M+</div>
                <div className="text-sm text-gray-600">Annual Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">40K+</div>
                <div className="text-sm text-gray-600">Daily Impressions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">$999</div>
                <div className="text-sm text-gray-600">Starting Daily Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">365</div>
                <div className="text-sm text-gray-600">Days of Sunshine</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                South Beach Billboard <span className="gradient-text">Pricing Packages</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Flexible packages designed for South Beach's unique market dynamics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${tier.best ? 'ring-2 ring-maximax-cyan' : ''}`}>
                  {tier.best && (
                    <div className="bg-gradient-to-r from-maximax-cyan to-maximax-pink text-white text-center py-2 text-sm font-semibold">
                      BEST VALUE
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-maximax-pink mb-1">{tier.price}</div>
                    <div className="text-sm text-gray-600 mb-4">{tier.perDay}/day • {tier.duration}</div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                      className={`btn w-full mt-6 ${tier.best ? 'btn-primary' : 'btn-secondary'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Select Package
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-lg border border-maximax-pink/20">
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-maximax-pink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Peak Season Pricing (December - April)</h3>
                  <p className="text-gray-700">
                    During peak tourist season and major events like Art Basel, Miami Music Week, and Spring Break, 
                    rates increase 20-30% due to high demand. Book early to lock in better rates and ensure availability 
                    for these premium advertising periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prime Routes */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Prime South Beach <span className="gradient-text-cyan">Advertising Routes</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic routes designed to maximize your visibility in South Beach's hottest areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {southBeachRoutes.map((route, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{route.route}</h3>
                      <p className="text-sm text-gray-600">{route.description}</p>
                    </div>
                    <MapPin className="w-5 h-5 text-maximax-pink flex-shrink-0" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Traffic</div>
                      <div className="font-semibold text-maximax-cyan">{route.traffic}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Peak Hours</div>
                      <div className="font-semibold">{route.peakHours}</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm"><span className="font-semibold">Best For:</span> {route.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="bg-gradient-to-br from-maximax-cyan/5 to-maximax-pink/5 rounded-lg p-8">
                <h3 className="font-bold text-xl mb-4">Ocean Drive: The Crown Jewel</h3>
                <p className="text-gray-700 mb-6">
                  Ocean Drive is the heart of South Beach, featuring iconic Art Deco hotels, world-famous restaurants, 
                  and vibrant nightlife. Your mobile billboard will be seen by tourists from around the world, local 
                  influencers, and the see-and-be-seen crowd that defines South Beach culture.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <Users className="w-6 h-6 text-maximax-pink mb-2" />
                    <h4 className="font-semibold mb-1">Tourist Traffic</h4>
                    <p className="text-sm text-gray-600">90% tourist audience with high disposable income</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Clock className="w-6 h-6 text-maximax-cyan mb-2" />
                    <h4 className="font-semibold mb-1">24/7 Activity</h4>
                    <p className="text-sm text-gray-600">Continuous foot and vehicle traffic day and night</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <TrendingUp className="w-6 h-6 text-maximax-pink mb-2" />
                    <h4 className="font-semibold mb-1">Social Media</h4>
                    <p className="text-sm text-gray-600">Most photographed street in Miami</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why South Beach Section */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Why Advertise in <span className="gradient-text">South Beach?</span>
                </h2>
                <p className="text-lg text-gray-600">
                  South Beach offers unique advantages for mobile billboard advertising
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">International Tourist Destination</h3>
                  <p className="text-gray-700 mb-4">
                    South Beach attracts over 24 million visitors annually from Latin America, Europe, and across the 
                    United States. These tourists have high disposable income and are actively seeking dining, 
                    entertainment, and shopping experiences. Your mobile billboard reaches them at the perfect moment 
                    of decision-making.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-maximax-pink/10 text-maximax-pink rounded-full text-sm">
                      Brazilian Tourists
                    </span>
                    <span className="px-3 py-1 bg-maximax-cyan/10 text-maximax-cyan rounded-full text-sm">
                      European Visitors
                    </span>
                    <span className="px-3 py-1 bg-maximax-pink/10 text-maximax-pink rounded-full text-sm">
                      NYC Weekenders
                    </span>
                    <span className="px-3 py-1 bg-maximax-cyan/10 text-maximax-cyan rounded-full text-sm">
                      Latin American VIPs
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Captive Beach Audience</h3>
                  <p className="text-gray-700">
                    Beach-goers spend 4-6 hours on South Beach, creating multiple touchpoints for your mobile billboard. 
                    As they walk Ocean Drive, dine on sidewalk cafes, or cruise Collins Avenue, your message reinforces 
                    brand awareness. The slow traffic and pedestrian-friendly streets ensure maximum visibility and 
                    message retention.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Nightlife & Entertainment Hub</h3>
                  <p className="text-gray-700">
                    South Beach's legendary nightlife scene runs from happy hour through sunrise. Mobile billboards 
                    capture the pre-party crowd on Lincoln Road, dinner traffic on Ocean Drive, and late-night 
                    revelers heading between clubs. No other advertising medium provides this 24-hour coverage 
                    at a fraction of the cost.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Event & Festival Central</h3>
                  <p className="text-gray-700">
                    From Art Basel to Miami Music Week, Food & Wine Festival to Spring Break, South Beach hosts 
                    world-class events year-round. Mobile billboards let you capitalize on these massive audiences 
                    without the premium pricing and long-term commitments of fixed event sponsorships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Industries */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Perfect for These <span className="gradient-text-cyan">South Beach Businesses</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <h3 className="font-bold mb-2">Restaurants & Bars</h3>
                  <p className="text-sm text-gray-600">Target hungry tourists and locals with dynamic menu displays and happy hour specials</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h3 className="font-bold mb-2">Nightclubs & Venues</h3>
                  <p className="text-sm text-gray-600">Promote events, DJs, and VIP experiences to the party crowd</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <h3 className="font-bold mb-2">Hotels & Resorts</h3>
                  <p className="text-sm text-gray-600">Drive direct bookings and showcase amenities to arriving tourists</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="font-bold mb-2">Retail & Fashion</h3>
                  <p className="text-sm text-gray-600">Showcase collections and sales to fashion-conscious beach-goers</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚤</span>
                  </div>
                  <h3 className="font-bold mb-2">Tours & Activities</h3>
                  <p className="text-sm text-gray-600">Promote boat tours, water sports, and excursions to adventure seekers</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏝️</span>
                  </div>
                  <h3 className="font-bold mb-2">Beach Services</h3>
                  <p className="text-sm text-gray-600">Advertise rentals, cabanas, and beach amenities to sun seekers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  South Beach Billboard <span className="gradient-text">FAQs</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">How much do billboards cost in South Beach Miami?</h3>
                  <p className="text-gray-700">
                    Mobile billboard advertising in South Beach starts at $999/day during regular season and 
                    $1,299-$1,499/day during peak season (December-April) and major events. This is 70% less than 
                    fixed billboards on Ocean Drive which cost $8,000-$20,000/month. Weekly packages offer better 
                    value starting at $799/day.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What South Beach areas can mobile billboards cover?</h3>
                  <p className="text-gray-700">
                    Our mobile billboards cover all prime South Beach locations including Ocean Drive (5th to 15th Street), 
                    Lincoln Road pedestrian mall, Collins Avenue hotel corridor, Washington Avenue, Alton Road, and 
                    South Pointe. We also target beach access points, Art Deco hotels, and can create custom routes 
                    for your specific audience.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">When is the best time to advertise in South Beach?</h3>
                  <p className="text-gray-700">
                    South Beach has strong year-round traffic, but peak advertising periods include: December-April 
                    (winter tourist season), March (Spring Break), December (Art Basel), March (Miami Music Week), 
                    February (Food & Wine Festival), and October (Miami Beach Pride). Book 2-3 weeks in advance 
                    during these periods.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Can I target specific times of day in South Beach?</h3>
                  <p className="text-gray-700">
                    Absolutely! We can customize routes by time: morning beach traffic (8am-noon), lunch crowds on 
                    Lincoln Road (noon-3pm), happy hour on Ocean Drive (4pm-7pm), dinner rush (7pm-10pm), and 
                    nightlife traffic (10pm-2am). This flexibility ensures your message reaches the right audience 
                    at the optimal time.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">How do South Beach mobile billboards handle traffic and parking?</h3>
                  <p className="text-gray-700">
                    Our experienced drivers know South Beach's unique traffic patterns and restrictions. We navigate 
                    around pedestrian zones, utilize legal parking for stationary displays during events, and maintain 
                    optimal speeds for visibility. During peak congestion, slow traffic actually increases viewing time 
                    and engagement with your advertisement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-padding bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">
                Ready to Dominate <span className="gradient-text-premium">South Beach Advertising?</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Lock in your South Beach billboard campaign before peak season rates apply
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                  className="btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get South Beach Quote
                </a>
                <a href="tel:786-633-4449" className="btn-accent btn-lg">
                  Call 786-633-4449
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Covering Ocean Drive, Lincoln Road, Collins Avenue, and all of South Beach Miami
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}