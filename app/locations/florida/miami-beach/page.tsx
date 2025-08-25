import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miami Beach',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '92K',
  description: 'Miami Beach billboards deliver unmatched visibility for your brand. Our mobile billboard trucks and LED displays target tourists and locals from Ocean Drive to Lincoln Road. Premium Miami Beach billboard advertising reaches South Beach to North Beach audiences with stunning 4K displays.',
  landmarks: [
    'Ocean Drive',
    'Lincoln Road',
    'South Beach',
    'Art Deco District',
    'Miami Beach Convention Center',
    'Collins Avenue Shopping',
    'Lummus Park Beach',
    'North Beach',
    'Mid-Beach',
    'Flamingo Park',
    'Miami Beach Marina',
    'Holocaust Memorial'
  ],
  popularRoutes: [
    'Ocean Drive (5th to 15th Street)',
    'Collins Avenue (1st to 71st Street)',
    'Lincoln Road Pedestrian Mall',
    'Washington Avenue (South to North)',
    'Alton Road (Full Length)',
    '41st Street (Beach to Bay)',
    'Arthur Godfrey Road',
    'South Pointe Drive'
  ],
  events: [
    { name: 'Art Basel Miami Beach', date: 'December', location: 'Convention Center' },
    { name: 'Miami Beach Pride', date: 'April', location: 'Ocean Drive' },
    { name: 'South Beach Wine & Food Festival', date: 'February', location: 'Various Venues' }
  ],
  stats: {
    dailyImpressions: '80,000+',
    coverage: '18 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 25.7907, lng: -80.1300 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiamiBeachPage() {
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