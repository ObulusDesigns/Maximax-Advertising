import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Palm Beach Gardens',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/palm-beach-gardens-mobile-advertising/',
  population: '57,784',
  description: 'Palm Beach Gardens mobile advertising reaches affluent audiences throughout this premier Palm Beach County city. Our LED billboard trucks deliver targeted campaigns at Gardens Mall, connect with golfers at PGA National, and engage residents in upscale communities. GPS-tracked displays provide strategic coverage from Downtown to Mirasol with brilliant 4K technology.',
  landmarks: [
    'The Gardens Mall',
    'PGA National Resort',
    'Downtown at the Gardens',
    'Roger Dean Chevrolet Stadium',
    'Abacoa Golf Club',
    'Sandhill Crane Golf Club',
    'Palm Beach Gardens Medical Center',
    'City Hall',
    'Burns Road Community Center',
    'Eissey Campus Theatre',
    'Palm Beach State College',
    'PGA Commons',
    'Legacy Place',
    'Midtown Gardens',
    'Alton Town Center'
  ],
  popularRoutes: [
    'PGA Boulevard - Main commercial corridor',
    'Northlake Boulevard - Southern arterial',
    'Military Trail - Western boundary',
    'US Highway 1 - Eastern corridor',
    'Burns Road - Central connector',
    'Donald Ross Road - Northern route',
    'Hood Road - Residential arterial',
    'RCA Boulevard - Business district',
    'Central Boulevard - Abacoa access',
    'Alternate A1A - Coastal connection'
  ],
  events: [
    { name: 'Concerts in the Gardens', date: 'Monthly', location: 'Downtown' },
    { name: 'GreenMarket', date: 'Sundays', location: 'City Hall' },
    { name: 'Honda Classic', date: 'February', location: 'PGA National' },
    { name: 'July 4th Celebration', date: 'July', location: 'City Hall' },
    { name: 'Art in the Gardens', date: 'Quarterly', location: 'Downtown' },
    { name: 'Food & Wine Festival', date: 'Fall', location: 'PGA Commons' }
  ],
  stats: {
    dailyImpressions: '70,000+',
    coverage: '55.3 sq mi',
    businessesServed: '325+'
  },
  coordinates: { lat: 26.8234, lng: -80.1382 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PalmBeachGardensMobileAdvertisingPage() {
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