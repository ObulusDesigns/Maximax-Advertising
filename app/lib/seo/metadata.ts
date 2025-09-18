import { Metadata } from 'next'

export const siteConfig = {
  name: 'Maximax Advertising',
  url: 'https://maximaxmobileadvertising.com',
  description: 'Premier vehicle advertising and mobile outdoor advertising in South Florida. LED billboard trucks, car billboard advertising, and GPS tracking. Out-of-home advertising solutions.',
  keywords: [
    // Primary Keywords (High Search Volume)
    'vehicle advertising',
    'mobile outdoor advertising',
    'car billboard advertising',
    'advertise on car',
    'advertise on vehicle',
    'advertisement company',
    'out-of-home advertising',
    'what is ooh in marketing',
    'local advertisements',

    // Major City Billboard Keywords
    'miami billboards',
    'tampa billboards',
    'fort lauderdale billboards',
    'boca raton billboards',
    'west palm beach billboards',

    // Vehicle Wrap & Car Advertising Keywords
    'car wrap advertising',
    'vehicle wrap advertising',
    'wrap advertising',
    'car advertising wrap',
    'vehicle graphics',
    'auto wraps',
    'car decals',
    'truck wraps',
    'van wraps',
    'fleet wraps',

    // Local Advertising Keywords
    'how to advertise locally',
    'local advertising solutions',
    'best local advertising',
    'local advertising agencies',
    'community advertising',
    'neighborhood marketing',
    'local promotional strategies',

    // Mobile Billboard Specific
    'mobile billboard advertising',
    'mobile billboards',
    'billboard trucks',
    'led billboard trucks',
    'digital billboard trucks',
    'mobile advertising trucks',
    'rolling billboards',
    'truck advertising',
    'mobile digital billboards',

    // Industry/Market Keywords
    'travel advertising',
    'tourism advertising',
    'nightlife advertising',
    'real estate advertising',
    'restaurant advertising',
    'retail advertising',
    'healthcare advertising',
    'education advertising',
    'fashion advertising',
    'entertainment advertising',

    // Other Advertising Types
    'bench advertising',
    'bus advertising',
    'outdoor advertising',
    'transit advertising',
    'street advertising',
    'guerrilla marketing',
    'ambient advertising',
    'direct mail marketing',

    // Florida-Specific Keywords
    'florida advertising',
    'miami advertising',
    'fort lauderdale advertising',
    'west palm beach advertising',
    'south florida marketing',
    'miami mobile billboards',
    'florida billboard trucks',
    'south beach advertising',
    'brickell advertising',
    'wynwood advertising',

    // Question-Based Keywords
    'what is ooh advertising',
    'what is out of home advertising',
    'how does billboard advertising work',
    'why use mobile billboards',
    'when to use outdoor advertising',
    'where to advertise locally',

    // Service-Specific Keywords
    'gps tracked advertising',
    'led mobile displays',
    '4k billboard screens',
    'digital outdoor advertising',
    'programmatic outdoor advertising',
    'mobile marketing services',
    'advertising truck rental',
    'billboard truck services',

    // Campaign Keywords
    'advertising campaign',
    'marketing campaign',
    'promotional campaign',
    'brand awareness campaign',
    'product launch advertising',
    'event promotion',
    'grand opening advertising',
    'seasonal marketing',

    // Business Type Keywords
    'small business advertising',
    'startup marketing',
    'franchise advertising',
    'corporate advertising',
    'b2b advertising',
    'b2c marketing',
    'retail marketing',
    'service business advertising'
  ],
}

export const defaultMetadata: Metadata = {
  title: {
    template: '%s | Maximax Advertising',
    default: 'Maximax Advertising | Mobile Billboard Trucks | LED Displays | South Florida',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Maximax Advertising' }],
  creator: 'Maximax Advertising',
  publisher: 'Maximax Advertising',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Maximax Advertising | Mobile Billboard Advertising | South Florida',
    description: 'Premier mobile billboard advertising company in South Florida. LED billboard trucks with GPS tracking serving Miami-Dade, Broward, and Palm Beach counties.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maximax Advertising Mobile Billboard Trucks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maximax Advertising | Mobile Billboards South Florida',
    description: 'Professional mobile billboard advertising with LED trucks. GPS-tracked campaigns throughout Miami-Dade, Broward, and Palm Beach.',
    images: ['/images/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export function generatePageMetadata(
  title: string,
  description: string,
  keywords?: string[],
  path?: string
): Metadata {
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url

  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}

// Location-specific metadata generator
export function generateLocationMetadata(location: {
  city: string
  state: string
  description?: string
  keywords?: string[]
}): Metadata {
  const title = `${location.city} Mobile Billboards | Billboard Trucks ${location.city} ${location.state}`
  const description = location.description ||
    `Professional mobile billboard advertising in ${location.city}, ${location.state}. LED billboard trucks with GPS tracking for maximum visibility and impact.`

  return generatePageMetadata(
    title,
    description,
    location.keywords,
    `/locations/${location.city.toLowerCase().replace(/\s+/g, '-')}/`
  )
}

// Service-specific metadata generator
export function generateServiceMetadata(service: {
  name: string
  description: string
  keywords?: string[]
  slug: string
}): Metadata {
  const title = `${service.name} | Mobile Billboard Services`

  return generatePageMetadata(
    title,
    service.description,
    service.keywords,
    `/services/${service.slug}/`
  )
}

// Market-specific metadata generator
export function generateMarketMetadata(market: {
  industry: string
  description: string
  keywords?: string[]
  slug: string
}): Metadata {
  const title = `${market.industry} Advertising | Mobile Billboards for ${market.industry}`

  return generatePageMetadata(
    title,
    market.description,
    market.keywords,
    `/markets/${market.slug}/`
  )
}

// Schema.org structured data for local business
export function locationStructuredData(location: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Maximax Advertising - ${location.city}`,
    description: location.description,
    url: `${siteConfig.url}/locations/${location.city.toLowerCase().replace(/\s+/g, '-')}/`,
    telephone: '+1-561-720-0521',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
    geo: location.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    } : undefined,
    areaServed: {
      '@type': 'City',
      name: location.city,
    },
  }
}

// Schema.org structured data for service
export function serviceStructuredData(service: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.serviceName,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Maximax Advertising',
      telephone: '+1-561-720-0521',
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  }
}

// Schema.org structured data for market
export function marketStructuredData(market: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Mobile Billboard Advertising for ${market.industry}`,
    description: market.description,
    provider: {
      '@type': 'Organization',
      name: 'Maximax Advertising',
      telephone: '+1-561-720-0521',
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  }
}