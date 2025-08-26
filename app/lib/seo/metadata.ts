import { Metadata } from 'next'

export const siteConfig = {
  name: 'Maximax Advertising',
  url: 'https://maximaxadvertising.com',
  description: 'Premier mobile billboard advertising in Miami-Dade and Palm Beach Counties. LED digital billboard trucks with GPS tracking and 4K displays.',
  keywords: [
    'mobile billboard advertising Florida',
    'LED truck advertising',
    'mobile advertising trucks',
    'billboard truck rental Florida',
    'mobile billboard cost',
    'billboard trucks Miami',
    'mobile billboards Palm Beach',
    'GPS tracked billboards',
    'digital billboard trucks',
    '4K LED mobile advertising',
    'billboard advertising prices',
    'advertising trucks',
    'led truck',
    'mobile billboards',
    'billboard truck',
    'digital billboard truck',
    'mobile billboard advertising',
    'led billboard truck',
    'billboard expenses',
    'mobile billboard trucks',
    'advertising truck',
    'led advertising truck',
    'mobile outdoor advertising',
    'billboard for sale',
    'digital billboard ad cost',
    'mobile advertising truck',
    'mobile billboard truck',
    'miami billboards',
    'fort lauderdale billboards',
    'boca raton billboards',
    'west palm beach billboards',
    'hialeah billboards',
    'coral gables billboards',
    'pembroke pines billboards',
    'coral springs billboards',
    'billboard company',
    'ooh advertising',
    'what is ooh in marketing',
    'outdoor advertising miami',
    'outdoor advertising fort lauderdale',
    'mobile led truck',
    'led billboard trucks',
    'digital mobile billboard',
    'portable billboard',
    'moving billboards',
    'billboard advertising cost',
    'mobile billboard near me',
    'billboard advertising services'
  ]
}

export const defaultMetadata: Metadata = {
  title: {
    default: 'Mobile Billboard Advertising Florida | LED Trucks | Maximax Advertising',
    template: '%s | Maximax Advertising'
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
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Mobile Billboard Advertising Florida | LED Trucks | Maximax Advertising',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/maximax-logo.png',
        width: 1200,
        height: 630,
        alt: 'Maximax Advertising - Mobile Billboard Trucks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Billboard Advertising Florida | Maximax',
    description: siteConfig.description,
    images: ['/images/maximax-logo.png'],
    creator: '@maximaxads',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

// Page-specific metadata generators
export function generatePageMetadata(page: {
  title: string
  description: string
  keywords?: string[]
  path: string
}): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords || siteConfig.keywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: `${page.title} | Maximax Advertising`,
      description: page.description,
      url: `${siteConfig.url}${page.path}`,
    },
    twitter: {
      title: `${page.title} | Maximax`,
      description: page.description,
    },
  }
}

// Location page metadata generator
export function generateLocationMetadata(location: {
  city: string
  county: string
  state: string
}): Metadata {
  const title = `Mobile Billboard Advertising ${location.city}, ${location.state}`
  const description = `Premier mobile billboard trucks and LED advertising in ${location.city}, ${location.county}. GPS-tracked campaigns with 4K displays. Call (561) 720-0521 for quotes.`
  
  return {
    title,
    description,
    keywords: [
      `mobile billboard ${location.city}`,
      `billboard trucks ${location.city}`,
      `LED advertising ${location.city}`,
      `mobile advertising ${location.county}`,
      `billboard rental ${location.city} FL`,
      `digital billboards ${location.city}`,
      `outdoor advertising ${location.city}`,
      `mobile marketing ${location.city}`
    ],
    openGraph: {
      title: `${title} | Maximax Advertising`,
      description,
      images: [
        {
          url: '/images/1-1.png',
          width: 1200,
          height: 630,
          alt: `Mobile Billboard Truck in ${location.city}`,
        },
      ],
    },
  }
}

// Service page metadata generator
export function generateServiceMetadata(service: {
  name: string
  description: string
  keywords: string[]
}): Metadata {
  const title = `${service.name} | Mobile Billboard Services`
  
  return {
    title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${title} | Maximax Advertising`,
      description: service.description,
    },
  }
}

// Blog post metadata generator
export function generateBlogMetadata(post: {
  title: string
  excerpt: string
  author: string
  publishedAt: string
  tags: string[]
  image?: string
}): Metadata {
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

// Market/Industry page metadata generator
export function generateMarketMetadata(market: {
  industry: string
  description: string
  keywords: string[]
}): Metadata {
  const title = `Mobile Billboard Advertising for ${market.industry}`
  
  return {
    title,
    description: market.description,
    keywords: market.keywords,
    openGraph: {
      title: `${title} | Maximax Advertising`,
      description: market.description,
      images: [
        {
          url: '/images/1-1.png',
          width: 1200,
          height: 630,
          alt: `Mobile Billboard Advertising for ${market.industry}`,
        },
      ],
    },
    twitter: {
      title: `${title} | Maximax`,
      description: market.description,
    },
  }
}

// Structured data for location pages
export const locationStructuredData = (location: {
  city: string
  county: string
  state: string
  coordinates: { lat: number; lng: number }
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Maximax Advertising - ${location.city}`,
  "description": `Mobile billboard advertising services in ${location.city}, ${location.state}`,
  "areaServed": {
    "@type": "City",
    "name": location.city,
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": location.county
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": location.coordinates.lat,
    "longitude": location.coordinates.lng
  }
})

// Structured data for market/industry pages
export const marketStructuredData = (market: {
  industry: string
  description: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": `Mobile Billboard Advertising for ${market.industry}`,
  "provider": {
    "@type": "Organization",
    "name": "Maximax Advertising",
    "url": "https://maximaxadvertising.com"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Miami-Dade County"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Palm Beach County"
    }
  ],
  "description": market.description
})