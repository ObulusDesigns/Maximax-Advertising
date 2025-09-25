import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miami Gardens',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/miami-gardens-mobile-billboards/',
  population: '113K',
  description: 'Miami Gardens mobile billboards offer exceptional visibility in Florida\'s third-largest city. Our LED billboard trucks cover major corridors from Hard Rock Stadium to Aventura Mall access points, reaching diverse communities with high-impact 4K displays. Target sports fans, shoppers, and commuters throughout this thriving North Miami-Dade hub with GPS-tracked precision advertising.',
  landmarks: [
    'Hard Rock Stadium',
    'Calder Race Course',
    'Miami Gardens Drive',
    'NW 27th Avenue',
    'Norland Shopping Center',
    'Bunche Park',
    'Betty T. Ferguson Park',
    'Rolling Oaks Park',
    'Miami Gardens City Hall',
    'Lakes on the Green',
    'Palmetto Expressway (826)',
    'Florida Turnpike Access',
    'St. Thomas University',
    'Florida Memorial University',
    'Miami Gardens Medical Center'
  ],
  popularRoutes: [
    'Miami Gardens Drive (NW 183rd St) - Main commercial corridor',
    'NW 27th Avenue - Major north-south arterial',
    'NW 2nd Avenue (US-441) - High-traffic business route',
    'NW 167th Street - East-west connector',
    'NW 199th Street - Stadium access route',
    'NW 57th Avenue (Red Road) - Residential connector',
    'County Line Road (NW 215th St) - Northern boundary',
    'NW 37th Avenue - Commercial district',
    'NW 177th Street - Shopping center access',
    'NW 7th Avenue - Eastern corridor'
  ],
  events: [
    { name: 'Miami Dolphins Games', date: 'September-January', location: 'Hard Rock Stadium' },
    { name: 'Rolling Loud Festival', date: 'July', location: 'Hard Rock Stadium' },
    { name: 'Miami Gardens Jazz Festival', date: 'November', location: 'Betty T. Ferguson Park' },
    { name: 'Miami Gardens Food & Wine Festival', date: 'March', location: 'City Hall Complex' },
    { name: 'Caribbean Carnival', date: 'October', location: 'Bunche Park' },
    { name: 'Formula 1 Miami Grand Prix', date: 'May', location: 'Hard Rock Stadium Campus' }
  ],
  stats: {
    dailyImpressions: '75,000+',
    coverage: '20.0 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 25.9420, lng: -80.2456 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiamiGardensMobileBillboardsPage() {
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