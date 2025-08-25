import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Coral Gables',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '50K',
  description: 'Coral Gables billboards target affluent residents and businesses in the City Beautiful. Our mobile billboard trucks and LED displays reach Miracle Mile, University of Miami, and prestigious neighborhoods with premium advertising throughout Coral Gables.',
  landmarks: [
    'Miracle Mile',
    'University of Miami',
    'Venetian Pool',
    'Fairchild Tropical Garden',
    'Biltmore Hotel',
    'Merrick Park',
    'Coral Gables Museum',
    'Matheson Hammock Park',
    'Granada Golf Course',
    'Doctors Hospital',
    'Books & Books',
    'Actors Playhouse'
  ],
  popularRoutes: [
    'Miracle Mile (Shopping District)',
    'Coral Way (Main Thoroughfare)',
    'US-1 (South Dixie Highway)',
    'Bird Road',
    'Ponce de Leon Boulevard',
    'LeJeune Road',
    'Granada Boulevard',
    'Alhambra Circle'
  ],
  events: [
    { name: 'Coral Gables Art Festival', date: 'January', location: 'Ponce Circle Park' },
    { name: 'Gallery Night', date: 'First Friday Monthly', location: 'Miracle Mile' },
    { name: 'Fourth of July Celebration', date: 'July 4', location: 'Granada Golf Course' }
  ],
  stats: {
    dailyImpressions: '32,000+',
    coverage: '13 sq mi',
    businessesServed: '90+'
  },
  coordinates: { lat: 25.7215, lng: -80.2684 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CoralGablesPage() {
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