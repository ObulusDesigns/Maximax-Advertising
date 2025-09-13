import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Lake Worth Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/lake-worth-beach-mobile-billboards/',
  population: '39,192',
  description: 'Lake Worth Beach mobile billboards reach diverse audiences in this vibrant coastal Palm Beach County city. Our LED billboard trucks deliver targeted advertising along Lake Avenue, connect with beachgoers at the municipal beach, and engage residents in historic neighborhoods. GPS-tracked displays ensure comprehensive coverage from downtown to College Park with brilliant 4K screens.',
  landmarks: [
    'Lake Worth Beach',
    'Lake Worth Pier',
    'Downtown Lake Worth',
    'Bryant Park',
    'Lake Worth Playhouse',
    'Cultural Plaza',
    'Lake Worth Casino Building',
    'Snook Islands Natural Area',
    'John Prince Park',
    'Lake Worth Golf Club',
    'Palm Beach State College',
    'Lake Worth Beach City Hall',
    'Lake Worth Beach Marina',
    'Gulfstream Hotel',
    'Compass Community Center'
  ],
  popularRoutes: [
    'Lake Avenue - Downtown main street',
    'Lucerne Avenue - Historic corridor',
    'Dixie Highway (US-1) - Major north-south route',
    'Federal Highway - Coastal arterial',
    'Lake Worth Road - East-west connector',
    '6th Avenue South - Beach access',
    '10th Avenue North - Northern route',
    'Boutwell Road - Western corridor',
    '2nd Avenue South - Residential connector',
    'Ocean Boulevard (A1A) - Beachfront drive'
  ],
  events: [
    { name: 'Street Painting Festival', date: 'February', location: 'Downtown' },
    { name: 'Lake Worth Beach Pride', date: 'March', location: 'Bryant Park' },
    { name: 'July 4th Celebration', date: 'July', location: 'Beach & Pier' },
    { name: 'Evening on the Avenue', date: 'Monthly', location: 'Lake Avenue' },
    { name: 'Farmers Market', date: 'Saturdays', location: 'Old Bridge Park' },
    { name: 'Holiday Parade', date: 'December', location: 'Downtown' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '7 sq mi',
    businessesServed: '175+'
  },
  coordinates: { lat: 26.6168, lng: -80.0581 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function LakeWorthBeachMobileBillboardsPage() {
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