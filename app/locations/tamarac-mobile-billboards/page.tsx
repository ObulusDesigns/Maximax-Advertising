import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Tamarac',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/tamarac-mobile-billboards/',
  population: '66K+',
  description: 'Tamarac mobile billboards reach over 66,000 residents in this vibrant Broward County community. Our LED billboard trucks navigate from Commercial Boulevard to University Drive, targeting active adults, families, and local businesses with GPS-tracked precision. Perfect for reaching the diverse demographics of this centrally-located city with stunning 4K displays.',
  landmarks: [
    'Tamarac Community Center',
    'Caporella Park & Aquatic Complex',
    'Tamarac Sports Complex',
    'Colony West Golf Club',
    'Woodlands Country Club',
    'Tamarac Village Shopping Center',
    'University Marketplace',
    'Tephford Park',
    'Veterans\' Park',
    'Sunset Point Park',
    'Gary B. Jones Park',
    'Tamarac Lakes',
    'MainStreet at Tamarac',
    'Commercial Boulevard Corridor',
    'University Drive Shopping District'
  ],
  popularRoutes: [
    'Commercial Boulevard - Major east-west corridor',
    'University Drive - Primary north-south route',
    'McNab Road - Northern connector',
    'Southgate Boulevard - Southern boundary',
    'Pine Island Road - Western thoroughfare',
    'Rock Island Road - Eastern route',
    'NW 88th Avenue - Central connector',
    'Prospect Road - Mid-city route',
    'NW 57th Street - Residential connector',
    'Nob Hill Road - Golf community access'
  ],
  events: [
    { name: 'Tamarac Turkey Trot', date: 'November', location: 'Caporella Park' },
    { name: 'Independence Day Celebration', date: 'July 4th', location: 'Veterans\' Park' },
    { name: 'Movies in the Park', date: 'Monthly', location: 'Various Parks' },
    { name: 'Tamarac Tam-O-Shanter Games', date: 'April', location: 'Sports Complex' },
    { name: 'Holiday Festival', date: 'December', location: 'Community Center' },
    { name: 'Senior Games', date: 'February', location: 'Various Venues' }
  ],
  stats: {
    dailyImpressions: '62,000+',
    coverage: '12.1 sq mi',
    businessesServed: '160+'
  },
  coordinates: { lat: 26.2128, lng: -80.2497 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function TamaracMobileBillboardsPage() {
  const structuredData = locationStructuredData(locationData)

  return (
    <>
      <Script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
            <main>
        <LocationPageTemplate {...locationData} />
      </main>
                </>
  )
}