import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miami-Dade County',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '2.8M',
  description: 'Reach millions of residents and tourists across Miami-Dade County with GPS-tracked mobile billboard trucks featuring 4K LED displays. From South Beach to Aventura, Homestead to Downtown Miami, maximize your advertising impact in South Florida\'s largest market.',
  landmarks: [
    'Miami International Airport',
    'Port of Miami',
    'South Beach',
    'Brickell Financial District',
    'Wynwood Arts District',
    'Design District',
    'Dadeland Mall',
    'Aventura Mall',
    'American Airlines Arena',
    'Marlins Park',
    'University of Miami',
    'Florida International University'
  ],
  popularRoutes: [
    'I-95 Corridor (Downtown to Aventura)',
    'US-1 (Homestead to Downtown)',
    'Miami Beach (Ocean Drive & Collins Ave)',
    'Brickell Avenue Business District',
    'Coral Gables (Miracle Mile)',
    'Kendall (US-1 & Dadeland)',
    'Aventura (Biscayne Blvd)',
    'Airport Area (NW 36th Street)'
  ],
  events: [
    { name: 'Art Basel Miami', date: 'December', location: 'Miami Beach Convention Center' },
    { name: 'Miami Open Tennis', date: 'March', location: 'Hard Rock Stadium' },
    { name: 'Ultra Music Festival', date: 'March', location: 'Bayfront Park' }
  ],
  stats: {
    dailyImpressions: '75,000+',
    coverage: '2,431 sq mi',
    businessesServed: '500+'
  },
  coordinates: { lat: 25.7617, lng: -80.1918 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiamiDadeCountyPage() {
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