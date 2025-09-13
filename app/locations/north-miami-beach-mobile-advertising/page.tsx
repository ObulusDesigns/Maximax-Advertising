import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'North Miami Beach',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/north-miami-beach-mobile-advertising/',
  population: '43,676',
  description: 'North Miami Beach mobile advertising reaches diverse communities throughout this vibrant Miami-Dade city. Our LED billboard trucks deliver targeted campaigns along Biscayne Boulevard, connect with shoppers at local centers, and engage residents in established neighborhoods. GPS-tracked displays provide comprehensive coverage from Eastern Shores to Highland Village with brilliant 4K technology.',
  landmarks: [
    'Ancient Spanish Monastery',
    'Greynolds Park',
    'Eastern Shores',
    'Highland Village',
    'Uleta Park',
    'FIU Biscayne Bay Campus',
    'North Miami Beach Library',
    'Snake Creek Canal',
    'Allen Park',
    'Washington Park',
    'Enchanted Forest Elaine Gordon Park',
    'NMB Water Tower',
    'Sunny Isles Beach Border',
    'Victory Park',
    'North Shore Recreation Center'
  ],
  popularRoutes: [
    'Biscayne Boulevard (US-1) - Main commercial strip',
    'NE 163rd Street (Sunny Isles Boulevard) - East-west connector',
    'West Dixie Highway - Parallel arterial',
    'NE 167th Street - Shopping district',
    'NE 171st Street - Residential corridor',
    'NE 6th Avenue - North-south route',
    'NE 15th Avenue - Central avenue',
    'NE 19th Avenue - Eastern corridor',
    'NE 159th Street - Southern boundary',
    'NE 175th Street - Northern connector'
  ],
  events: [
    { name: 'Jazz Festival', date: 'Spring', location: 'Greynolds Park' },
    { name: 'International Music & Food Festival', date: 'Fall', location: 'Downtown' },
    { name: 'Holiday Boat Parade', date: 'December', location: 'Waterways' },
    { name: 'Green Market', date: 'Sundays', location: 'City Hall' },
    { name: 'Summer Concert Series', date: 'Summer', location: 'Allen Park' },
    { name: 'Halloween Spooktacular', date: 'October', location: 'Victory Park' }
  ],
  stats: {
    dailyImpressions: '55,000+',
    coverage: '5.3 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 25.9291, lng: -80.1625 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function NorthMiamiBeachMobileAdvertisingPage() {
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