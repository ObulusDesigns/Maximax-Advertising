import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Cutler Bay',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/cutler-bay-mobile-billboards/',
  population: '45K',
  description: 'Cutler Bay mobile billboards provide targeted advertising throughout South Miami-Dade\'s fastest-growing community. Our LED billboard trucks travel Old Cutler Road, Caribbean Boulevard, and Southland Mall areas, reaching families and professionals with brilliant 4K displays. From Black Point Marina to the Falls shopping district, maximize your brand visibility with GPS-tracked mobile advertising.',
  landmarks: [
    'Southland Mall',
    'Old Cutler Road',
    'Black Point Park & Marina',
    'Cutler Ridge Park',
    'Lakes by the Bay',
    'Caribbean Boulevard',
    'Franjo Road',
    'Biscayne National Park (nearby)',
    'The Falls Shopping Center (nearby)',
    'Cutler Bay Town Center',
    'Whispering Pines Park',
    'Lincoln City Park',
    'Saga Bay',
    'Cutler Ridge',
    'Palmetto Bay (adjacent)'
  ],
  popularRoutes: [
    'Old Cutler Road - Scenic main thoroughfare',
    'Caribbean Boulevard (SW 87th Ave) - Central business corridor',
    'SW 184th Street (Eureka Drive) - Major east-west route',
    'SW 211th Street - Southern commercial strip',
    'Franjo Road (SW 217th Ave) - Coastal connector',
    'SW 97th Avenue - Residential arterial',
    'SW 216th Street - Town center access',
    'Marlin Road - Marina district',
    'SW 89th Avenue - Shopping district connector',
    'Coral Sea Road - Waterfront communities'
  ],
  events: [
    { name: 'Cutler Bay Unity Festival', date: 'April', location: 'Town Center' },
    { name: 'Summer Concert Series', date: 'June-August', location: 'Cutler Ridge Park' },
    { name: 'Holiday Tree Lighting', date: 'December', location: 'Town Hall' },
    { name: 'Family Fun Day', date: 'March', location: 'Whispering Pines Park' },
    { name: 'Food Truck Friday', date: 'Monthly', location: 'Lakes by the Bay' },
    { name: 'Earth Day Festival', date: 'April', location: 'Black Point Marina' }
  ],
  stats: {
    dailyImpressions: '50,000+',
    coverage: '10.1 sq mi',
    businessesServed: '150+'
  },
  coordinates: { lat: 25.5807, lng: -80.3468 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CutlerBayMobileBillboardsPage() {
  const structuredData = locationStructuredData(locationData)

  return (
    <>
      <Script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <LocationPageTemplate {...locationData} />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}