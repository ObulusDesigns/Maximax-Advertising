import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Fort Lauderdale',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/fort-lauderdale-mobile-billboards/',
  population: '183K',
  description: 'Fort Lauderdale mobile billboards deliver premium visibility throughout the "Venice of America". Our LED billboard trucks navigate from Las Olas Boulevard to Fort Lauderdale Beach, targeting tourists, cruise passengers, and locals. Reach beachfront crowds, downtown professionals, and yacht show attendees with stunning 4K displays that command attention day and night.',
  landmarks: [
    'Fort Lauderdale Beach',
    'Las Olas Boulevard',
    'Port Everglades Cruise Terminal',
    'Riverwalk Arts District',
    'Broward Center for Performing Arts',
    'Museum of Discovery and Science',
    'Galleria Mall',
    'Sawgrass Mills Outlet',
    'Fort Lauderdale Airport',
    'Bonnet House Museum',
    'NSU Art Museum',
    'Stranahan House',
    'Beach Place',
    'Bahia Mar Marina',
    'Las Olas Marina'
  ],
  popularRoutes: [
    'A1A (Fort Lauderdale Beach Blvd) - Beachfront corridor',
    'Las Olas Boulevard - Entertainment and dining district',
    'Federal Highway (US-1) - Main north-south artery',
    'Sunrise Boulevard - Major east-west route',
    'Commercial Boulevard - Business corridor',
    'Oakland Park Boulevard - Cross-county connector',
    'Andrews Avenue - Downtown thoroughfare',
    'Broward Boulevard - Central business route',
    '17th Street Causeway - Beach access',
    'Griffin Road - Airport corridor'
  ],
  events: [
    { name: 'Fort Lauderdale International Boat Show', date: 'October', location: 'Various Marinas' },
    { name: 'Fort Lauderdale Air Show', date: 'May', location: 'Fort Lauderdale Beach' },
    { name: 'Las Olas Art Festival', date: 'March & October', location: 'Las Olas Boulevard' },
    { name: 'Fort Lauderdale International Film Festival', date: 'November', location: 'Downtown' },
    { name: 'Tortuga Music Festival', date: 'April', location: 'Fort Lauderdale Beach' },
    { name: 'Pride Fort Lauderdale', date: 'February', location: 'Beach & Downtown' }
  ],
  stats: {
    dailyImpressions: '95,000+',
    coverage: '36 sq mi',
    businessesServed: '300+'
  },
  coordinates: { lat: 26.1224, lng: -80.1373 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function FortLauderdaleMobileBillboardsPage() {
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