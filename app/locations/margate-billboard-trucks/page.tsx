import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Margate',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/margate-billboard-trucks/',
  population: '58,796',
  description: 'Margate billboard trucks provide targeted advertising throughout this growing Broward County community. Our mobile LED displays reach residents along State Road 7, connect with shoppers at local plazas, and engage families in established neighborhoods. GPS-tracked billboard vehicles deliver strategic visibility from North Margate to Oriole Estates with dynamic 4K technology.',
  landmarks: [
    'Calypso Cove Aquatic Facility',
    'Margate Sports Complex',
    'Firefighters Park',
    'Royal Palm Park',
    'Northwest Medical Center',
    'Oriole Golf Club',
    'Veterans Park',
    'David Park',
    'Margate Middle School',
    'Atlantic West Shopping Plaza',
    'Margate City Hall',
    'Southgate Shopping Center',
    'Peppertree Plaza',
    'Coconut Creek Casino',
    'Margate Community Center'
  ],
  popularRoutes: [
    'State Road 7 (US 441) - Main commercial strip',
    'Coconut Creek Parkway - Northern connector',
    'Atlantic Boulevard - Southern boundary',
    'Rock Island Road - Central arterial',
    'Royal Palm Boulevard - East-west route',
    'Banks Road - Western corridor',
    'NW 58th Avenue - Residential route',
    'Southgate Boulevard - Shopping district',
    'Margate Boulevard - City center',
    'Sample Road - Major thoroughfare'
  ],
  events: [
    { name: 'Sounds at Sundown Concert Series', date: 'Monthly', location: 'Sports Complex' },
    { name: 'July 4th Festival', date: 'July', location: 'Firefighters Park' },
    { name: 'Fall Festival', date: 'October', location: 'Calypso Cove' },
    { name: 'Holiday Celebration', date: 'December', location: 'City Hall' },
    { name: 'Spring Egg Hunt', date: 'Spring', location: 'Veterans Park' },
    { name: 'Food Truck Monday', date: 'Weekly', location: 'Sports Complex' }
  ],
  stats: {
    dailyImpressions: '55,000+',
    coverage: '8.8 sq mi',
    businessesServed: '225+'
  },
  coordinates: { lat: 26.2445, lng: -80.2064 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MargateBillboardTrucksPage() {
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