import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Little Havana',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '75K',
  description: 'Cultural mobile billboard advertising on Calle Ocho reaches Miami\'s vibrant Hispanic community and tourists exploring Little Havana. Our LED trucks deliver bilingual campaigns targeting local businesses, restaurants, and cultural venues. Perfect for brands connecting with the Hispanic market in this iconic Miami neighborhood.',
  landmarks: [
    'Calle Ocho Walk of Fame',
    'Domino Park (Maximo Gomez Park)',
    'Tower Theater',
    'Ball & Chain',
    'Azucar Ice Cream Company',
    'Cuba Tobacco Cigar Co',
    'Little Havana Cigar Factory',
    'Cubaocho Museum',
    'Bay of Pigs Museum',
    'Miami Dade College',
    'Jose Marti Park',
    'Versailles Restaurant'
  ],
  popularRoutes: [
    'SW 8th Street (Calle Ocho)',
    'SW 17th Avenue',
    'SW 12th Avenue',
    'SW 27th Avenue',
    'Flagler Street',
    'SW 7th Street',
    'SW 1st Street',
    'SW 22nd Avenue'
  ],
  events: [
    { name: 'Calle Ocho Festival', date: 'March', location: 'Calle Ocho' },
    { name: 'Viernes Culturales', date: 'Last Friday Monthly', location: 'Calle Ocho' },
    { name: 'Three Kings Parade', date: 'January', location: 'Calle Ocho' },
    { name: 'Miami Film Festival Events', date: 'March', location: 'Tower Theater' }
  ],
  stats: {
    dailyImpressions: '70,000+',
    coverage: '4 sq mi',
    businessesServed: '500+'
  },
  coordinates: { lat: 25.7653, lng: -80.2198 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function LittleHavanaPage() {
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