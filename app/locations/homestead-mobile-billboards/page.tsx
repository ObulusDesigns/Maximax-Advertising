import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Homestead',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/homestead-mobile-billboards/',
  population: '80K',
  description: 'Homestead mobile billboards connect with South Dade\'s growing agricultural and residential communities. Our LED billboard trucks reach NASCAR fans at Homestead-Miami Speedway, agricultural workers, and families throughout this historic gateway to the Florida Keys. GPS-tracked displays ensure optimal coverage from downtown to Florida City with brilliant 4K technology.',
  landmarks: [
    'Homestead-Miami Speedway',
    'Everglades National Park Entrance',
    'Coral Castle',
    'Homestead Historic Downtown',
    'Homestead Air Reserve Base',
    'Biscayne National Park',
    'Robert Is Here Fruit Stand',
    'Homestead Hospital',
    'Cauley Square Historic Village',
    'Schnebly Redland\'s Winery',
    'Fruit & Spice Park',
    'Homestead Pavilion',
    'Keys Gate Shopping',
    'Homestead Town Square',
    'Losner Park'
  ],
  popularRoutes: [
    'US-1 (South Dixie Highway) - Main commercial corridor',
    'Krome Avenue (SW 177th Ave) - Agricultural route',
    'Campbell Drive - Downtown connector',
    'Lucy Street - Historic district',
    'Palm Drive (SW 344th Street) - East-west thoroughfare',
    'SW 312th Street - Speedway access',
    'SW 137th Avenue - Residential corridor',
    'Mowry Drive - Central business route',
    'SW 328th Street - Florida City connector',
    'Card Sound Road - Keys alternate route'
  ],
  events: [
    { name: 'NASCAR Championship Weekend', date: 'November', location: 'Homestead-Miami Speedway' },
    { name: 'Homestead Rodeo', date: 'January', location: 'Harris Field' },
    { name: 'Art of Homestead Festival', date: 'February', location: 'Historic Downtown' },
    { name: 'Everglades Seafood Festival', date: 'February', location: 'Everglades City' },
    { name: 'Homestead Championship Rodeo', date: 'Winter', location: 'Rodeo Grounds' },
    { name: 'Historic Downtown Festival', date: 'Monthly', location: 'Krome Avenue' }
  ],
  stats: {
    dailyImpressions: '55,000+',
    coverage: '77 sq mi',
    businessesServed: '125+'
  },
  coordinates: { lat: 25.4687, lng: -80.4776 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function HomesteadMobileBillboardsPage() {
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