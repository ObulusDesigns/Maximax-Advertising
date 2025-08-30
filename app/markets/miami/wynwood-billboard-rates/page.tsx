import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import Script from 'next/script'
import Link from 'next/link'
import { DollarSign, Palette, Camera, MapPin, CheckCircle, ArrowRight, TrendingUp, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wynwood Billboard Rates | Art District Advertising Costs Miami',
  description: 'Wynwood billboard rates from $899/day. Target the Arts District, Wynwood Walls, galleries, restaurants. Mobile LED billboards perfect for creative brands. 70% cheaper than fixed murals.',
  keywords: [
    'Wynwood billboard rates',
    'Wynwood advertising cost',
    'Wynwood Walls billboard prices',
    'Miami Arts District advertising',
    'Wynwood mobile billboard',
    'LED truck Wynwood',
    'Wynwood mural advertising',
    'NW 2nd Avenue billboard',
    'Wynwood restaurant advertising',
    'art gallery billboard Miami',
    'Wynwood nightlife advertising',
    'creative district billboard',
    'Wynwood event advertising',
    'Art Basel billboard rates',
    'Wynwood business advertising'
  ],
  openGraph: {
    title: 'Wynwood Billboard Rates - Target Miami\'s Creative Arts District',
    description: 'Mobile LED billboards in Wynwood from $899/day. Reach artists, millennials, tourists at Wynwood Walls, galleries, trendy restaurants.',
    url: 'https://maximaxmobileadvertising.com/markets/miami/wynwood-billboard-rates',
    siteName: 'Maximax Advertising',
    images: [
      {
        url: '/images/wynwood-billboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Wynwood Miami Mobile Billboard in Arts District',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wynwood Billboard Rates - Creative District Advertising',
    description: 'Target Wynwood\'s 35,000+ daily visitors. Mobile LED billboards from $899/day in Miami\'s Arts District.',
  },
  alternates: {
    canonical: 'https://maximaxmobileadvertising.com/markets/miami/wynwood-billboard-rates',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AdvertisingAgency"],
  "name": "Maximax Advertising - Wynwood Billboard Rates",
  "description": "Mobile billboard advertising in Wynwood Miami Arts District. Target galleries, restaurants, and creative businesses with LED billboard trucks.",
  "url": "https://maximaxmobileadvertising.com/markets/miami/wynwood-billboard-rates",
  "telephone": "786-633-4449",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.8013,
    "longitude": -80.1994
  },
  "areaServed": {
    "@type": "Place",
    "name": "Wynwood",
    "description": "Wynwood Arts District including Wynwood Walls, NW 2nd Avenue, galleries, and creative spaces"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Wynwood Mobile Billboard Advertising",
      "description": "LED billboard trucks in Miami's Arts District"
    },
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "899",
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
      "name": "What are billboard rates in Wynwood Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile billboard advertising in Wynwood starts at $899/day, with weekly rates from $699/day. This is 70% less than traditional wall murals which cost $5,000-$15,000/month. Peak rates apply during Art Basel and Wynwood Art Walk events."
      }
    },
    {
      "@type": "Question",
      "name": "What Wynwood areas do mobile billboards cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our mobile billboards cover all key Wynwood locations including NW 2nd Avenue (main strip), Wynwood Walls, NW 23rd to 29th Streets, gallery districts, restaurant row, Wynwood Marketplace, and the Design District border. Custom routes target your specific audience."
      }
    },
    {
      "@type": "Question",
      "name": "When should I advertise in Wynwood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wynwood thrives year-round but peaks during Art Basel (December), monthly Art Walks (second Saturday), Friday nights, and weekend brunch hours. The area sees 35,000+ daily visitors with heavy foot traffic from noon to midnight."
      }
    }
  ]
}

const wynwoodStats = {
  visitors: '35,000+',
  galleries: '70+',
  restaurants: '50+',
  murals: '200+',
  demographics: {
    millennials: '65%',
    tourists: '40%',
    locals: '60%',
    income: '$75K+'
  }
}

const wynwoodRoutes = [
  {
    route: 'NW 2nd Avenue Circuit',
    coverage: 'Main gallery & restaurant strip',
    traffic: '25,000+ daily',
    bestFor: 'Galleries, Restaurants, Retail',
    peakHours: '12pm-midnight'
  },
  {
    route: 'Wynwood Walls Loop',
    coverage: 'Tourist hotspot & photo ops',
    traffic: '20,000+ daily',
    bestFor: 'Tourism, Events, Brand Awareness',
    peakHours: '10am-8pm'
  },
  {
    route: 'Gallery District',
    coverage: 'NW 23rd to 29th Streets',
    traffic: '15,000+ daily',
    bestFor: 'Art Events, Creative Services',
    peakHours: '11am-9pm'
  },
  {
    route: 'Restaurant Row',
    coverage: 'Dining & nightlife corridor',
    traffic: '18,000+ daily',
    bestFor: 'F&B, Nightlife, Entertainment',
    peakHours: '6pm-2am'
  }
]

const rateComparison = [
  {
    type: 'Mobile LED Billboard',
    daily: '$899-$1,299',
    monthly: '$5,394-$7,794',
    visibility: '100% mobile',
    flexibility: 'Change daily',
    reach: '35,000+ impressions',
    best: true
  },
  {
    type: 'Wall Mural',
    daily: 'N/A',
    monthly: '$5,000-$15,000',
    visibility: 'Fixed location',
    flexibility: 'Permanent',
    reach: '10,000+ impressions',
    best: false
  },
  {
    type: 'Digital Screen',
    daily: 'N/A',
    monthly: '$3,000-$8,000',
    visibility: 'Fixed, shared',
    flexibility: 'Weekly changes',
    reach: '15,000+ impressions',
    best: false
  }
]

export default function WynwoodBillboardRatesPage() {
  return (
    <>
      <Script
        id="schema-wynwood"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="schema-faq-wynwood"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-maximax-cyan" />
                <span className="text-maximax-cyan font-semibold">Wynwood Arts District</span>
              </div>
              <h1 className="text-white mb-6">
                Wynwood <span className="gradient-text-premium">Billboard Rates</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Advertise in Miami's Creative Capital - The Arts & Innovation District
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Mobile LED billboards in Wynwood connect your brand with 35,000+ daily visitors exploring 
                galleries, murals, restaurants, and creative spaces. Perfect for brands targeting millennials, 
                tourists, art enthusiasts, and Miami's trendsetting community. Our dynamic displays complement 
                the district's creative energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                  className="btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Wynwood Quote
                </a>
                <Link href="/contact" className="btn-accent btn-lg">
                  View Sample Routes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Wynwood Stats */}
        <section className="section py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">{wynwoodStats.visitors}</div>
                <div className="text-sm text-gray-600">Daily Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">{wynwoodStats.galleries}</div>
                <div className="text-sm text-gray-600">Art Galleries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">{wynwoodStats.restaurants}</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">{wynwoodStats.murals}</div>
                <div className="text-sm text-gray-600">Street Murals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">$899</div>
                <div className="text-sm text-gray-600">Starting Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Comparison */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Wynwood Advertising <span className="gradient-text">Rate Comparison</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See why mobile billboards deliver superior value in Wynwood's creative landscape
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white">
                    <th className="px-6 py-4 text-left">Advertising Type</th>
                    <th className="px-6 py-4 text-center">Daily Rate</th>
                    <th className="px-6 py-4 text-center">Monthly Rate</th>
                    <th className="px-6 py-4 text-center">Visibility</th>
                    <th className="px-6 py-4 text-center">Flexibility</th>
                    <th className="px-6 py-4 text-center">Daily Reach</th>
                  </tr>
                </thead>
                <tbody>
                  {rateComparison.map((item, index) => (
                    <tr key={index} className={`border-b ${item.best ? 'bg-maximax-cyan/5' : ''}`}>
                      <td className="px-6 py-4 font-semibold">
                        {item.type}
                        {item.best && (
                          <span className="ml-2 text-xs bg-maximax-cyan text-white px-2 py-1 rounded">BEST ROI</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">{item.daily}</td>
                      <td className="px-6 py-4 text-center font-semibold">{item.monthly}</td>
                      <td className="px-6 py-4 text-center">{item.visibility}</td>
                      <td className="px-6 py-4 text-center">{item.flexibility}</td>
                      <td className="px-6 py-4 text-center">{item.reach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-maximax-pink/10 to-transparent rounded-lg p-6 border border-maximax-pink/20">
                <Sparkles className="w-6 h-6 text-maximax-pink mb-3" />
                <h3 className="font-bold mb-2">Creative Flexibility Advantage</h3>
                <p className="text-gray-700">
                  Unlike static wall murals that require permits and painters, mobile LED billboards let you update 
                  creative instantly. Test different messages, promote daily specials, or sync with Wynwood events 
                  - all without additional costs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-maximax-cyan/10 to-transparent rounded-lg p-6 border border-maximax-cyan/20">
                <Camera className="w-6 h-6 text-maximax-cyan mb-3" />
                <h3 className="font-bold mb-2">Instagram-Worthy Impact</h3>
                <p className="text-gray-700">
                  In Wynwood's visual culture, mobile billboards become part of the street art experience. 
                  Visitors photograph and share your moving display alongside famous murals, amplifying your 
                  reach through social media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prime Routes */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Strategic Wynwood <span className="gradient-text-cyan">Advertising Routes</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Target specific audiences throughout Wynwood's diverse creative ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {wynwoodRoutes.map((route, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{route.route}</h3>
                      <p className="text-sm text-gray-600">{route.coverage}</p>
                    </div>
                    <MapPin className="w-5 h-5 text-maximax-pink flex-shrink-0" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Daily Traffic</div>
                      <div className="font-semibold text-maximax-cyan">{route.traffic}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Peak Hours</div>
                      <div className="font-semibold">{route.peakHours}</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm"><span className="font-semibold">Ideal For:</span> {route.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Wynwood Walls Special Section */}
            <div className="bg-gradient-to-br from-maximax-pink/5 to-maximax-cyan/5 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl mb-4">Wynwood Walls: The Instagram Capital</h3>
                  <p className="text-gray-700 mb-6">
                    The world-famous Wynwood Walls attract over 3 million visitors annually, making it Miami's 
                    most photographed location after South Beach. Your mobile billboard becomes part of this 
                    visual experience, appearing in thousands of social media posts alongside iconic street art.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                      <span>Peak photo hours: 10am-4pm daily</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                      <span>International tourist concentration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                      <span>Art Basel epicenter in December</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="font-bold mb-4">Wynwood Walls Impact Zone</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-sm">Daily Visitors</span>
                      <span className="font-semibold">8,000+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-sm">Instagram Posts/Day</span>
                      <span className="font-semibold">2,500+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-sm">Tour Groups/Day</span>
                      <span className="font-semibold">25+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Social Reach</span>
                      <span className="font-semibold">1M+ daily</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wynwood Audience */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Who You'll Reach in <span className="gradient-text">Wynwood</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Wynwood attracts a unique mix of creatives, professionals, and tourists
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-lg p-6">
                  <Users className="w-8 h-8 text-maximax-pink mb-4" />
                  <h3 className="font-bold text-lg mb-3">Millennial Professionals (65%)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Average income: $75,000+</li>
                    <li>• Tech, creative, and startup workers</li>
                    <li>• Live in nearby Edgewater/Midtown</li>
                    <li>• Active on social media</li>
                    <li>• Dining and entertainment spenders</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <Camera className="w-8 h-8 text-maximax-cyan mb-4" />
                  <h3 className="font-bold text-lg mb-3">Cultural Tourists (40%)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• International and domestic visitors</li>
                    <li>• Art and culture enthusiasts</li>
                    <li>• Average stay: 3-5 days</li>
                    <li>• High disposable income</li>
                    <li>• Instagram content creators</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-maximax-pink/10 to-maximax-cyan/10 rounded-lg p-8">
                <h3 className="font-bold text-xl mb-4">Peak Wynwood Events & Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Monthly Events</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                        <span><strong>Art Walk (2nd Saturday):</strong> 15,000+ attendees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                        <span><strong>Gallery Nights:</strong> First Fridays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-cyan flex-shrink-0 mt-0.5" />
                        <span><strong>Food Truck Rallies:</strong> Last Fridays</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Annual Events</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Art Basel (December):</strong> 80,000+ visitors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Wynwood Pride (June):</strong> 30,000+ attendees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-maximax-pink flex-shrink-0 mt-0.5" />
                        <span><strong>Life in Color Festival:</strong> 20,000+ attendees</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">
                  Perfect for These <span className="gradient-text-cyan">Wynwood Businesses</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="font-bold mb-2">Art Galleries</h3>
                  <p className="text-sm text-gray-600">Exhibition openings & artist showcases</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍴</span>
                  </div>
                  <h3 className="font-bold mb-2">Restaurants</h3>
                  <p className="text-sm text-gray-600">Brunch spots & trendy dining</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍺</span>
                  </div>
                  <h3 className="font-bold mb-2">Breweries</h3>
                  <p className="text-sm text-gray-600">Craft beer & taprooms</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">👗</span>
                  </div>
                  <h3 className="font-bold mb-2">Boutiques</h3>
                  <p className="text-sm text-gray-600">Fashion & lifestyle brands</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-bold mb-2">Tech Startups</h3>
                  <p className="text-sm text-gray-600">Recruitment & brand awareness</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="font-bold mb-2">Real Estate</h3>
                  <p className="text-sm text-gray-600">New developments & rentals</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h3 className="font-bold mb-2">Events</h3>
                  <p className="text-sm text-gray-600">Festivals & pop-ups</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maximax-cyan to-maximax-pink rounded-full flex items-center justify-center">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="font-bold mb-2">Fitness</h3>
                  <p className="text-sm text-gray-600">Gyms & wellness studios</p>
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
                  Wynwood Billboard <span className="gradient-text">FAQs</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What are billboard rates in Wynwood Miami?</h3>
                  <p className="text-gray-700">
                    Mobile billboard advertising in Wynwood starts at $899/day, with weekly rates from $699/day and 
                    monthly rates as low as $599/day. This is 70% less than traditional wall murals which cost 
                    $5,000-$15,000/month. During Art Basel (December), rates increase 30-50% due to massive demand 
                    and international visitor influx.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What Wynwood areas do mobile billboards cover?</h3>
                  <p className="text-gray-700">
                    Our mobile billboards cover all key Wynwood locations including NW 2nd Avenue (main gallery strip), 
                    Wynwood Walls complex, NW 23rd to 29th Streets (gallery district), restaurant row, Wynwood Marketplace, 
                    and the Design District border. We create custom routes based on your target audience, whether 
                    that's art collectors, foodies, or nightlife enthusiasts.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">When should I advertise in Wynwood?</h3>
                  <p className="text-gray-700">
                    Wynwood thrives year-round but peaks during: Art Basel (December), monthly Art Walks (second Saturday), 
                    Friday nights (gallery openings), weekend brunch hours (10am-3pm), and special events. The area sees 
                    35,000+ daily visitors with heavy foot traffic from noon to midnight. Book 2-3 weeks ahead for events.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">How do mobile billboards work with Wynwood's artistic vibe?</h3>
                  <p className="text-gray-700">
                    Mobile LED billboards complement Wynwood's creative energy perfectly. Our high-resolution displays 
                    can showcase artistic content, animations, and dynamic visuals that resonate with the art-conscious 
                    audience. Many brands create special artistic campaigns specifically for Wynwood, turning their 
                    mobile billboard into a moving art installation.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Can I target specific Wynwood events or gallery openings?</h3>
                  <p className="text-gray-700">
                    Absolutely! We specialize in event-based targeting. Whether it's Art Walk, gallery openings, 
                    food festivals, or Wynwood Pride, we position your mobile billboard for maximum impact. We can 
                    also coordinate with specific venue events, ensuring your message reaches attendees arriving 
                    and departing.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What types of businesses succeed with Wynwood billboards?</h3>
                  <p className="text-gray-700">
                    Restaurants, galleries, breweries, boutiques, and creative services see excellent ROI in Wynwood. 
                    The area's demographic (65% millennials, average income $75K+) responds well to experiential brands, 
                    artisanal products, and innovative services. Tech startups also use mobile billboards for recruitment 
                    and brand awareness among the creative professional community.
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
                Stand Out in <span className="gradient-text-premium">Wynwood's Creative Scene</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Join the brands making an impact in Miami's Arts District
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436" 
                  className="btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Wynwood Quote
                </a>
                <a href="tel:786-633-4449" className="btn-accent btn-lg">
                  Call 786-633-4449
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Serving Wynwood Walls, NW 2nd Avenue, Gallery District, and all creative spaces
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