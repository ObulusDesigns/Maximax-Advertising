import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Lantana',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/lantana-billboard-advertising/',
  population: '11,687',
  description: 'Lantana billboard advertising delivers coastal visibility in this charming Palm Beach County town. Our mobile LED displays reach beachgoers along Ocean Avenue, target commuters on Dixie Highway, and connect with residents in waterfront neighborhoods. GPS-tracked billboard trucks ensure comprehensive coverage from downtown to the Intracoastal with dynamic 4K screens.',
  landmarks: [
    'Lantana Beach',
    'Bicentennial Park',
    'Sportsman\'s Park Marina',
    'Old Key Lime House',
    'Lantana Nature Preserve',
    'Recreation Center',
    'Lantana Town Hall',
    'K-8 School',
    'Lantana Shopping Center',
    'Moorings Neighborhood',
    'Hypoluxo Island',
    'Lake Worth Lagoon',
    'Eau Palm Beach Resort',
    'Lantana Bridge',
    'Ocean Avenue Beach'
  ],
  popularRoutes: [
    'Ocean Avenue - Beach access and downtown',
    'Dixie Highway (US-1) - Main commercial strip',
    'Federal Highway - Parallel arterial',
    'Lantana Road - East-west connector',
    'Hypoluxo Road - Southern boundary',
    'Lake Drive - Waterfront route',
    'Broadway Avenue - Residential connector',
    'Oak Street - Downtown core',
    'East Coast Avenue - Beach corridor',
    'Greynolds Circle - Neighborhood route'
  ],
  events: [
    { name: 'Fishing Derby', date: 'Summer', location: 'Sportsman\'s Park' },
    { name: 'July 4th Beach Bash', date: 'July', location: 'Lantana Beach' },
    { name: 'Halloween Parade', date: 'October', location: 'Ocean Avenue' },
    { name: 'Holiday Boat Parade', date: 'December', location: 'Intracoastal' },
    { name: 'Sea Turtle Awareness Day', date: 'Spring', location: 'Beach' },
    { name: 'Friday Night Live', date: 'Monthly', location: 'Bicentennial Park' }
  ],
  stats: {
    dailyImpressions: '25,000+',
    coverage: '2.5 sq mi',
    businessesServed: '75+'
  },
  coordinates: { lat: 26.5867, lng: -80.0519 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function LantanaBillboardAdvertisingPage() {
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