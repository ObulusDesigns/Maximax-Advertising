import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'West Palm Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/west-palm-beach-mobile-billboards/',
  population: '117K',
  description: 'West Palm Beach mobile billboards deliver premium advertising throughout Palm Beach County\'s cultural and business hub. Our LED billboard trucks reach affluent audiences from CityPlace to Clematis Street, targeting professionals, tourists, and residents. GPS-tracked displays ensure maximum visibility across this sophisticated market with stunning 4K technology.',
  landmarks: [
    'CityPlace',
    'Clematis Street',
    'Kravis Center',
    'Norton Museum of Art',
    'Palm Beach International Airport',
    'The Square',
    'Palm Beach Outlets',
    'Flagler Drive Waterfront',
    'Antique Row',
    'Palm Beach Convention Center',
    'Raymond F. Kravis Center',
    'South Florida Science Center',
    'Rapids Water Park',
    'Wellington Green Mall',
    'Downtown at the Gardens'
  ],
  popularRoutes: [
    'Okeechobee Boulevard - Main east-west artery',
    'Flagler Drive - Waterfront scenic route',
    'Clematis Street - Entertainment district',
    'Palm Beach Lakes Boulevard - Commercial corridor',
    'Southern Boulevard - Major thoroughfare',
    'Australian Avenue - North-south connector',
    'Military Trail - Western corridor',
    'Congress Avenue - Major north-south route',
    'Forest Hill Boulevard - Cross-county route',
    'Belvedere Road - Residential connector'
  ],
  events: [
    { name: 'SunFest', date: 'May', location: 'Flagler Drive' },
    { name: 'Palm Beach International Boat Show', date: 'March', location: 'Waterfront' },
    { name: 'Winter Equestrian Festival', date: 'January-March', location: 'Wellington' },
    { name: 'Clematis by Night', date: 'Thursdays', location: 'Clematis Street' },
    { name: 'GreenMarket', date: 'Saturdays', location: 'Waterfront Commons' },
    { name: 'Palm Beach Food & Wine Festival', date: 'December', location: 'Various Venues' }
  ],
  stats: {
    dailyImpressions: '90,000+',
    coverage: '58 sq mi',
    businessesServed: '275+'
  },
  coordinates: { lat: 26.7153, lng: -80.0534 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WestPalmBeachMobileBillboardsPage() {
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