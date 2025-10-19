import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Riviera Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/riviera-beach-mobile-billboards/',
  population: '39K',
  description: 'Riviera Beach mobile billboard advertising reaches Palm Beach County\'s coastal port city with strategic campaigns. Our LED billboard trucks target Port of Palm Beach visitors, Blue Heron Bridge divers, Rapids Water Park guests, and marina shoppers. GPS-tracked displays deliver maximum visibility across this waterfront community, from President Barack Obama Highway to the Intracoastal Waterway.',
  landmarks: [
    'Port of Palm Beach',
    'Blue Heron Bridge (Top Dive Site)',
    'Rapids Water Park',
    'Riviera Beach Marina',
    'Singer Island',
    'Peanut Island',
    'Phil Foster Park',
    'Dyer Park',
    'Bicentennial Park',
    'Lake Park Harbor Marina',
    'United States Coast Guard Station',
    'Riviera Beach Heights',
    'President Barack Obama Highway',
    'Riviera Beach Public Library',
    'Municipal Beach Complex'
  ],
  popularRoutes: [
    'President Barack Obama Highway (Old Dixie Hwy) - Historic route',
    'Blue Heron Boulevard - Main east-west corridor',
    'Broadway Avenue - Central commercial route',
    'Ocean Avenue - Beachfront access',
    'Australian Avenue - North-south connector',
    'Congress Avenue - Western boundary',
    'MLK Jr. Boulevard - Community corridor',
    'Singer Island Boulevard - Beach access',
    '45th Street - Commercial district',
    'Lake Shore Drive - Marina area'
  ],
  events: [
    { name: 'Riviera Beach Fishing Tournaments', date: 'Year-round', location: 'Marina' },
    { name: 'Port of Palm Beach Cruise Events', date: 'Year-round', location: 'Port Terminal' },
    { name: 'Blue Heron Bridge Dive Events', date: 'Weekly', location: 'Phil Foster Park' },
    { name: 'Community Beach Festivals', date: 'Seasonal', location: 'Municipal Beach' },
    { name: 'Maritime Heritage Events', date: 'Quarterly', location: 'Marina District' },
    { name: 'Summer Concert Series', date: 'June-August', location: 'Bicentennial Park' }
  ],
  stats: {
    dailyImpressions: '64,000+',
    coverage: '7.8 sq mi',
    businessesServed: '285+'
  },
  coordinates: { lat: 26.7753, lng: -80.0581 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function RivieraBeachMobileBillboardsPage() {
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
