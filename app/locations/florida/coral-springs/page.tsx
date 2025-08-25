import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Coral Springs',
  county: 'Broward County',
  state: 'Florida',
  population: '134K',
  description: 'Coral Springs billboards reach families and businesses in this thriving Broward County city. Our mobile billboard advertising and LED trucks target shopping centers, schools, and residential areas throughout Coral Springs with GPS-tracked precision.',
  landmarks: [
    'Coral Square Mall',
    'Coral Springs Center for the Arts',
    'Sportsplex',
    'Tall Cypress Natural Area',
    'Mullins Park',
    'Sandy Ridge Park',
    'Coral Springs Museum',
    'The Walk Shopping Center',
    'Coral Springs Medical Center',
    'Downtown Coral Springs',
    'Coral Ridge',
    'Eagle Trace'
  ],
  popularRoutes: [
    'University Drive (North-South)',
    'Sample Road (East-West)',
    'Coral Springs Drive',
    'Atlantic Boulevard',
    'Wiles Road',
    'Royal Palm Boulevard',
    'Coral Ridge Drive',
    'Riverside Drive'
  ],
  events: [
    { name: 'Coral Springs Festival of the Arts', date: 'March', location: 'Downtown' },
    { name: 'Fourth of July Celebration', date: 'July 4', location: 'Mullins Park' },
    { name: 'Holiday Festival', date: 'December', location: 'City Centre' }
  ],
  stats: {
    dailyImpressions: '38,000+',
    coverage: '24 sq mi',
    businessesServed: '110+'
  },
  coordinates: { lat: 26.2708, lng: -80.2593 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CoralSpringsPage() {
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