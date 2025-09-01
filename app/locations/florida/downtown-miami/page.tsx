import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Downtown Miami',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '92K',
  description: 'High-impact mobile billboards in Downtown Miami and Brickell reach business professionals, residents, and tourists in the city\'s urban core. Our LED trucks dominate Biscayne Boulevard, Flagler Street, and the Financial District. Target office workers, luxury condo residents, and nightlife enthusiasts with GPS-tracked precision throughout Miami\'s bustling downtown.',
  landmarks: [
    'Brickell City Centre',
    'Bayfront Park',
    'American Airlines Arena',
    'Bayside Marketplace',
    'Pérez Art Museum Miami',
    'Frost Science Museum',
    'Miami-Dade County Courthouse',
    'Freedom Tower',
    'Adrienne Arsht Center',
    'Mary Brickell Village',
    'Miami Circle',
    'Flagler Street Shopping'
  ],
  popularRoutes: [
    'Biscayne Boulevard (Main Corridor)',
    'Brickell Avenue (Financial District)',
    'Flagler Street (Shopping)',
    'SE 1st Street',
    'NE 2nd Avenue',
    'Miami Avenue',
    'Port Boulevard (Cruise Port)',
    'Bayshore Drive'
  ],
  events: [
    { name: 'Ultra Music Festival', date: 'March', location: 'Bayfront Park' },
    { name: 'Miami Marathon', date: 'January', location: 'Downtown Streets' },
    { name: 'New Year\'s Eve at Bayfront', date: 'December', location: 'Bayfront Park' },
    { name: 'Miami Heat Games', date: 'Oct-June', location: 'American Airlines Arena' }
  ],
  stats: {
    dailyImpressions: '95,000+',
    coverage: '8 sq mi',
    businessesServed: '600+'
  },
  coordinates: { lat: 25.7751, lng: -80.1947 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function DowntownMiamiPage() {
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