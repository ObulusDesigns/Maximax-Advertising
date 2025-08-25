import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Hialeah',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '224K',
  description: 'Hialeah billboards reach one of the largest Hispanic markets in the US. Our mobile billboard advertising and LED trucks deliver messages in English and Spanish throughout Hialeah\'s bustling commercial districts and residential neighborhoods.',
  landmarks: [
    'Westland Mall',
    'Hialeah Park Racing',
    'Amelia Earhart Park',
    'Bucky Dent Water Park',
    'Hialeah Market Station',
    'Leah Arts District',
    'Flamingo Plaza',
    'Palm Avenue',
    'Hialeah Hospital',
    'Goodlet Park',
    'Milander Park',
    'McDonald Water Park'
  ],
  popularRoutes: [
    'West 49th Street (Main Commercial)',
    'Palm Avenue (North-South)',
    'Hialeah Drive',
    'East 4th Avenue',
    'West 12th Avenue',
    'NW 103rd Street',
    'Red Road (57th Avenue)',
    'Okeechobee Road'
  ],
  events: [
    { name: 'Festival Hispanico', date: 'October', location: 'Milander Park' },
    { name: 'Hialeah Christmas Festival', date: 'December', location: 'City Hall' },
    { name: 'Three Kings Parade', date: 'January', location: 'Downtown Hialeah' }
  ],
  stats: {
    dailyImpressions: '52,000+',
    coverage: '21 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 25.8576, lng: -80.2781 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function HialeahPage() {
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