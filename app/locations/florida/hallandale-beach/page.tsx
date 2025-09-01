import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Hallandale Beach',
  county: 'Broward County',
  state: 'Florida',
  population: '41K',
  description: 'Beachfront mobile billboard advertising in Hallandale Beach reaches Gulfstream Park visitors and beach tourists. Our LED trucks target the casino, racetrack, shopping at The Village, and beachfront condos. GPS-tracked campaigns maximize exposure in this diverse South Broward coastal city.',
  landmarks: [
    'Gulfstream Park Racing & Casino',
    'The Village at Gulfstream Park',
    'Hallandale Beach Boulevard',
    'Diplomat Beach Resort',
    'South City Beach Park',
    'Peter Bluesten Park',
    'OB Johnson Park',
    'Mardi Gras Casino',
    'The Big Easy Casino',
    'Golden Isles Shopping',
    'Hallandale Beach Cultural Center',
    'Heritage Park'
  ],
  popularRoutes: [
    'Hallandale Beach Boulevard (Main)',
    'Federal Highway (US-1)',
    'A1A Ocean Drive',
    'Pembroke Road',
    'Dixie Highway',
    'Atlantic Shores Boulevard',
    'Three Islands Boulevard',
    'Golden Isles Drive'
  ],
  events: [
    { name: 'Gulfstream Park Events', date: 'Year-round', location: 'Gulfstream Park' },
    { name: 'Food & Groove Festival', date: 'March', location: 'Beach Area' },
    { name: 'Halloween Spooktacular', date: 'October', location: 'Community Park' },
    { name: 'Holiday Concert', date: 'December', location: 'Cultural Center' }
  ],
  stats: {
    dailyImpressions: '40,000+',
    coverage: '5 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 25.9812, lng: -80.1484 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function HallandaleBeachPage() {
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