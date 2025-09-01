import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Design District',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '8K',
  description: 'Luxury mobile billboard advertising in Miami Design District reaches high-end shoppers and art enthusiasts. Our LED trucks target flagship stores, galleries, and showrooms along NE 40th Street. Perfect for luxury brands, fashion houses, and cultural events in Miami\'s premier creative neighborhood.',
  landmarks: [
    'Design Miami Flagship Stores',
    'Institute of Contemporary Art',
    'de la Cruz Collection',
    'Palm Court',
    'Jungle Plaza',
    'Paradise Plaza',
    'Buckminster Fuller Fly\'s Eye Dome',
    'Craig Robins Collection',
    'Locust Projects',
    'Moore Building',
    'City Furniture Showroom',
    'DACRA Headquarters'
  ],
  popularRoutes: [
    'NE 40th Street (Luxury Row)',
    'NE 41st Street',
    'NE 39th Street',
    'NE 2nd Avenue',
    'North Miami Avenue',
    'Biscayne Boulevard Access',
    'NE 38th Street',
    'Design District Loop'
  ],
  events: [
    { name: 'Design Miami/', date: 'December', location: 'Convention Center' },
    { name: 'Art Basel Satellite Events', date: 'December', location: 'District-wide' },
    { name: 'Design District Art Night', date: 'Monthly', location: 'Various Galleries' },
    { name: 'Fashion Week Events', date: 'May & November', location: 'Various Venues' }
  ],
  stats: {
    dailyImpressions: '65,000+',
    coverage: '1 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 25.8128, lng: -80.1917 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function DesignDistrictPage() {
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