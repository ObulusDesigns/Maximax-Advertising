import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miami Springs',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/miami-springs-billboard-advertising/',
  population: '14,520',
  description: 'Miami Springs billboard advertising delivers strategic visibility near Miami International Airport and major transportation corridors. Our mobile LED displays reach airport travelers, business professionals, and residents throughout this historic city. GPS-tracked billboard trucks ensure optimal exposure along NW 36th Street and the Palmetto Expressway with dynamic 4K screens.',
  landmarks: [
    'Miami International Airport',
    'Miami Springs Golf Course',
    'Circle Park',
    'Miami Springs Aquatic Center',
    'Curtiss Parkway Historic District',
    'Miami Springs Senior High',
    'Fair Haven School',
    'Miami Springs Community Center',
    'Prince Field',
    'Stafford Park',
    'Miami Springs Library',
    'Miami Springs Country Club',
    'Blessed Trinity Catholic Church',
    'Miami Springs Middle School',
    'Virginia Gardens Town Hall'
  ],
  popularRoutes: [
    'NW 36th Street - Airport corridor',
    'Okeechobee Road (US 27) - Major thoroughfare',
    'Palmetto Expressway (SR 826) - Highway access',
    'Curtiss Parkway - Historic main street',
    'NW 42nd Avenue (LeJeune Road) - North-south arterial',
    'Westward Drive - Residential connector',
    'Fairway Drive - Golf course perimeter',
    'Hook Square - Commercial center',
    'Royal Poinciana Boulevard - East-west route',
    'South Drive - Southern boundary'
  ],
  events: [
    { name: 'River Cities Festival', date: 'Spring', location: 'Circle Park' },
    { name: 'July 4th Fireworks', date: 'July', location: 'Golf Course' },
    { name: 'Holiday Festival', date: 'December', location: 'Circle Park' },
    { name: 'Food Truck Rally', date: 'Monthly', location: 'Community Center' },
    { name: 'Farmers Market', date: 'Saturdays', location: 'Downtown' },
    { name: 'Halloween Parade', date: 'October', location: 'Curtiss Parkway' }
  ],
  stats: {
    dailyImpressions: '65,000+',
    coverage: '3.2 sq mi',
    businessesServed: '175+'
  },
  coordinates: { lat: 25.8173, lng: -80.3737 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiamiSpringsBillboardAdvertisingPage() {
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