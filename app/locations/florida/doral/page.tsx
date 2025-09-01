import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Doral',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '75K',
  description: 'Mobile billboard advertising in Doral reaches the heart of Miami\'s business district and Miami International Airport travelers. Our LED trucks target corporate offices, CityPlace Doral, and the thousands of daily airport visitors. With GPS tracking, we ensure maximum visibility in this thriving commercial hub known for its international businesses and luxury shopping.',
  landmarks: [
    'Miami International Airport',
    'CityPlace Doral',
    'Trump National Doral Golf Club',
    'Dolphin Mall',
    'Downtown Doral',
    'Doral City Center',
    'Miami International Mall',
    'Costa Verde Shopping',
    'Doral Central Park',
    'International Corporate Park',
    'Blue Lagoon',
    'Miami Jai-Alai'
  ],
  popularRoutes: [
    'NW 36th Street (Airport Expressway)',
    'NW 41st Street (Doral Boulevard)',
    'NW 87th Avenue',
    'NW 107th Avenue',
    'Palmetto Expressway (SR 826)',
    'NW 25th Street (Business Corridor)',
    'NW 58th Street',
    'Dolphin Expressway (SR 836) Access'
  ],
  events: [
    { name: 'Doral Food & Wine Festival', date: 'November', location: 'Downtown Doral' },
    { name: 'July 4th Celebration', date: 'July', location: 'Doral Central Park' },
    { name: 'Doral Business Expo', date: 'September', location: 'City Center' },
    { name: 'Art Basel Satellite Events', date: 'December', location: 'Various Venues' }
  ],
  stats: {
    dailyImpressions: '85,000+',
    coverage: '25 sq mi',
    businessesServed: '500+'
  },
  coordinates: { lat: 25.8195, lng: -80.3554 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function DoralPage() {
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