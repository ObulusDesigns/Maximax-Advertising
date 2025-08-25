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
  population: '183K',
  description: 'Fort Lauderdale billboards deliver your message throughout the Venice of America. Our mobile billboard trucks and LED displays reach Las Olas Boulevard, beachfront areas, and downtown business districts with Fort Lauderdale billboard advertising that captures attention.',
  landmarks: [
    'Las Olas Boulevard',
    'Fort Lauderdale Beach',
    'Galleria Mall',
    'Las Olas Beach',
    'Riverwalk',
    'Port Everglades',
    'Broward Center',
    'Museum of Discovery',
    'Bonnet House',
    'Hugh Taylor Birch Park',
    'Downtown Fort Lauderdale',
    'Sawgrass Mills'
  ],
  popularRoutes: [
    'Las Olas Boulevard (Beach to Downtown)',
    'A1A (Fort Lauderdale Beach)',
    'Federal Highway (US-1)',
    'Sunrise Boulevard',
    'Commercial Boulevard',
    'Oakland Park Boulevard',
    'Andrews Avenue',
    'Broward Boulevard'
  ],
  events: [
    { name: 'Fort Lauderdale Boat Show', date: 'October', location: 'Convention Center' },
    { name: 'Las Olas Art Fair', date: 'January/March', location: 'Las Olas Boulevard' },
    { name: 'Fort Lauderdale Air Show', date: 'May', location: 'Fort Lauderdale Beach' }
  ],
  stats: {
    dailyImpressions: '55,000+',
    coverage: '36 sq mi',
    businessesServed: '180+'
  },
  coordinates: { lat: 26.1224, lng: -80.1373 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function FortLauderdalePage() {
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