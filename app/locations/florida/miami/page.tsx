import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miami',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '450K',
  description: 'Miami billboards and mobile billboard advertising throughout Miami-Dade County. Our LED billboard trucks provide the best billboard in Miami, reaching Downtown, Brickell, Wynwood with Miami billboard advertising. Choose from our fleet of billboards in Miami and billboards Miami residents see daily with GPS-tracked precision.',
  landmarks: [
    'Downtown Miami',
    'Brickell City Centre',
    'Bayside Marketplace',
    'American Airlines Arena',
    'Wynwood Walls',
    'Port of Miami',
    'Bayfront Park',
    'Miami Design District',
    'Marlins Park',
    'Coconut Grove',
    'Mary Brickell Village',
    'Museum Park'
  ],
  popularRoutes: [
    'Brickell Avenue (Financial District)',
    'Biscayne Boulevard (Downtown to Edgewater)',
    'Flagler Street (East-West Corridor)',
    'NW 2nd Avenue (Wynwood)',
    'SW 8th Street (Calle Ocho)',
    'Coral Way (Downtown to Coral Gables)',
    'NE 2nd Avenue (Design District)',
    'Bayshore Drive (Coconut Grove)'
  ],
  events: [
    { name: 'Miami Music Week', date: 'March', location: 'Various Venues' },
    { name: 'Miami Book Fair', date: 'November', location: 'Downtown Miami' },
    { name: 'Calle Ocho Festival', date: 'March', location: 'SW 8th Street' }
  ],
  stats: {
    dailyImpressions: '60,000+',
    coverage: '56 sq mi',
    businessesServed: '300+'
  },
  coordinates: { lat: 25.7617, lng: -80.1918 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiamiPage() {
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