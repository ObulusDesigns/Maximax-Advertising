import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Pompano Beach',
  county: 'Broward County',
  state: 'Florida',
  population: '112K',
  description: 'Mobile billboard advertising throughout Pompano Beach reaches beachgoers, boaters, and North Broward residents. Our LED trucks target Pompano Beach Pier, Atlantic Boulevard shopping, and the Pompano Beach Amphitheater. Maximize visibility in this growing coastal city with GPS-tracked campaigns along A1A and major commercial corridors.',
  landmarks: [
    'Pompano Beach Pier',
    'Pompano Beach Amphitheater',
    'Isle Casino Racing Pompano Park',
    'Festival Marketplace',
    'Pompano Citi Centre',
    'Pompano Beach Airpark',
    'Hillsboro Inlet Lighthouse',
    'Pompano Beach Golf Course',
    'Founders Park',
    'Pompano Beach Aquatics Center',
    'Sample-McDougald House',
    'Pompano Beach Cultural Center'
  ],
  popularRoutes: [
    'Atlantic Boulevard (Main Commercial)',
    'Federal Highway (US-1)',
    'A1A (Beachfront)',
    'Pompano Beach Boulevard',
    'Copans Road',
    'Sample Road',
    'McNab Road',
    'Powerline Road'
  ],
  events: [
    { name: 'Pompano Beach Seafood Festival', date: 'April', location: 'Beach Area' },
    { name: 'St. Patrick\'s Day Festival', date: 'March', location: 'Amphitheater' },
    { name: 'Holiday Boat Parade', date: 'December', location: 'Intracoastal' },
    { name: 'Pompano Beach Music Festival', date: 'October', location: 'Beach & Pier' }
  ],
  stats: {
    dailyImpressions: '55,000+',
    coverage: '25 sq mi',
    businessesServed: '350+'
  },
  coordinates: { lat: 26.2378, lng: -80.1248 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PompanoBeachPage() {
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