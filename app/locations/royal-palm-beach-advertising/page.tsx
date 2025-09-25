import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Royal Palm Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/royal-palm-beach-advertising/',
  population: '39K',
  description: 'Royal Palm Beach mobile billboards provide premium advertising throughout this affluent western Palm Beach County community. Our LED billboard trucks cover Royal Palm Beach Boulevard, Okeechobee Boulevard, and Southern Boulevard, reaching families and professionals with brilliant 4K displays. From Commons Park to Wellington Green Mall access points, maximize your brand impact with GPS-tracked mobile advertising.',
  landmarks: [
    'Royal Palm Beach Commons Park',
    'Royal Palm Beach Boulevard',
    'Okeechobee Boulevard',
    'Southern Boulevard',
    'Veterans Park',
    'Willows Sports Complex',
    'Royal Palm Beach Cultural Center',
    'Crestwood Boulevard',
    'Madison Green Golf Club',
    'Counterpoint Estates',
    'La Mancha',
    'Seminole Palms Park',
    'Wellington Green Mall (nearby)',
    'Village Golf Club',
    'Saratoga Lake'
  ],
  popularRoutes: [
    'Royal Palm Beach Boulevard - Main north-south thoroughfare',
    'Okeechobee Boulevard - Major east-west route',
    'Southern Boulevard (US-98) - Primary corridor',
    'Crestwood Boulevard - Central connector',
    'Sparrow Drive - Residential arterial',
    'Belvedere Road - Northern access',
    'Sansbury Way - Community route',
    'Wildcat Way - School district connector',
    'Madison Green Boulevard - Golf community access',
    'Counterpoint Boulevard - Eastern route'
  ],
  events: [
    { name: 'Royal Palm Beach Festival', date: 'March', location: 'Commons Park' },
    { name: 'July 4th Celebration', date: 'July', location: 'Veterans Park' },
    { name: 'Sunset Music Series', date: 'Monthly', location: 'Cultural Center' },
    { name: 'Holiday Parade & Festival', date: 'December', location: 'Royal Palm Beach Blvd' },
    { name: 'Food Truck Safari', date: 'Fridays', location: 'Commons Park' },
    { name: 'Spring Egg Hunt', date: 'April', location: 'Willows Sports Complex' }
  ],
  stats: {
    dailyImpressions: '40,000+',
    coverage: '15.8 sq mi',
    businessesServed: '130+'
  },
  coordinates: { lat: 26.7084, lng: -80.2306 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function RoyalPalmBeachAdvertisingPage() {
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