import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Lauderhill',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/lauderhill-billboard-advertising/',
  population: '72,094',
  description: 'Lauderhill billboard advertising connects with diverse communities in this central Broward County city. Our mobile LED displays reach shoppers at Lauderhill Mall, target commuters along State Road 7, and engage residents throughout established neighborhoods. GPS-tracked billboard trucks deliver impactful campaigns from Inverrary to Central Broward Regional Park with dynamic 4K technology.',
  landmarks: [
    'Lauderhill Mall',
    'Central Broward Regional Park',
    'Lauderhill Performing Arts Center',
    'Inverrary Country Club',
    'Lauderhill Sports Park',
    'City Hall',
    'Ilene Lieberman Park',
    'Reverend Samuel Delevoe Memorial Park',
    'Lauderhill 6 Cinema',
    'Lauderhill Lions Park',
    'St. George Park',
    'MLK Jr. Recreation Complex',
    'Sadkin Community Center',
    'Boyd Anderson High School',
    'Lauderhill Middle School'
  ],
  popularRoutes: [
    'State Road 7 (US 441) - Major commercial corridor',
    'Oakland Park Boulevard - East-west arterial',
    'Sunrise Boulevard - Major thoroughfare',
    'Commercial Boulevard (SR 870) - Business district',
    'NW 19th Street - Central connector',
    'NW 31st Avenue - North-south route',
    'Inverrary Boulevard - Golf course area',
    'NW 56th Avenue - Residential arterial',
    'Broward Boulevard - Southern access',
    'NW 44th Street - Northern boundary'
  ],
  events: [
    { name: 'Caribbean Carnival', date: 'Summer', location: 'Central Broward Park' },
    { name: 'Jazz & Blues Festival', date: 'Spring', location: 'Sports Park' },
    { name: 'Martin Luther King Jr. Parade', date: 'January', location: 'MLK Boulevard' },
    { name: 'International Festival', date: 'Fall', location: 'City Hall' },
    { name: 'July 4th Celebration', date: 'July', location: 'Regional Park' },
    { name: 'Holiday Winterfest', date: 'December', location: 'Performing Arts Center' }
  ],
  stats: {
    dailyImpressions: '65,000+',
    coverage: '8.5 sq mi',
    businessesServed: '275+'
  },
  coordinates: { lat: 26.1426, lng: -80.2086 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function LauderhillBillboardAdvertisingPage() {
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