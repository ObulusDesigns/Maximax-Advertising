import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miami Beach',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '92K',
  description: 'Miami Beach mobile billboards deliver unmatched visibility for your brand. Our LED billboard trucks navigate from Ocean Drive to Lincoln Road, targeting tourists and locals with precision GPS tracking. Reach South Beach crowds, Art Deco visitors, and beachfront traffic with stunning 4K displays that capture attention day and night.',
  landmarks: [
    'Ocean Drive',
    'Lincoln Road Mall',
    'South Beach',
    'Art Deco District',
    'Miami Beach Convention Center',
    'Collins Avenue',
    'Lummus Park',
    'North Beach',
    'Mid-Beach District',
    'Flamingo Park',
    'Miami Beach Marina',
    'Holocaust Memorial',
    'Bass Museum',
    'New World Symphony',
    'Fillmore Miami Beach'
  ],
  popularRoutes: [
    'Ocean Drive (5th to 15th Street) - Prime tourist corridor',
    'Collins Avenue (1st to 71st Street) - Main thoroughfare',
    'Lincoln Road - High-end shopping district',
    'Washington Avenue - Restaurant and nightlife hub',
    'Alton Road - Business and residential corridor',
    '41st Street - Cross-island connector',
    'Arthur Godfrey Road - Major east-west route',
    'South Pointe Drive - Luxury residential area',
    '17th Street - Beach to bay connector',
    'Dade Boulevard - Northern gateway route'
  ],
  events: [
    { name: 'Art Basel Miami Beach', date: 'December', location: 'Convention Center & Various Venues' },
    { name: 'Miami Beach Pride', date: 'April', location: 'Ocean Drive & Lummus Park' },
    { name: 'South Beach Wine & Food Festival', date: 'February', location: 'Multiple Beachfront Venues' },
    { name: 'Miami Music Week', date: 'March', location: 'South Beach & Mid-Beach' },
    { name: 'Miami Beach Pop Festival', date: 'November', location: 'North Beach Bandshell' },
    { name: 'Art Deco Weekend', date: 'January', location: 'Ocean Drive' }
  ],
  stats: {
    dailyImpressions: '85,000+',
    coverage: '18.7 sq mi',
    businessesServed: '250+'
  },
  coordinates: { lat: 25.7907, lng: -80.1300 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiamiBeachMobileBillboardsPage() {
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