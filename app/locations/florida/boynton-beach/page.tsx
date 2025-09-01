import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Boynton Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '80K',
  description: 'Mobile billboard trucks throughout Boynton Beach reach Central Palm Beach County residents and visitors. Our LED displays target Boynton Beach Mall, downtown renaissance areas, and beach communities. GPS-tracked campaigns maximize exposure in this growing coastal city bridging Delray Beach and West Palm Beach.',
  landmarks: [
    'Boynton Beach Mall',
    'Boynton Harbor Marina',
    'Oceanfront Park Beach',
    'Green Cay Nature Center',
    'Boynton Beach Inlet',
    'Schoolhouse Children\'s Museum',
    'Canyon Town Center',
    'Renaissance Commons',
    'Bethesda Hospital East',
    'Hunters Run Golf Club',
    'Boynton Beach Arts District',
    'Mangrove Nature Park'
  ],
  popularRoutes: [
    'Boynton Beach Boulevard (Main)',
    'Federal Highway (US-1)',
    'Congress Avenue',
    'Gateway Boulevard',
    'Ocean Avenue (A1A)',
    'Woolbright Road',
    'Old Boynton Road',
    'Military Trail'
  ],
  events: [
    { name: 'Boynton Beach Haunted Pirate Fest', date: 'October', location: 'Downtown' },
    { name: 'Holiday Boat Parade', date: 'December', location: 'Intracoastal' },
    { name: 'Boynton Beach Green Market', date: 'Saturdays', location: 'Downtown' },
    { name: 'Music on the Rocks', date: 'Monthly', location: 'Oceanfront Park' }
  ],
  stats: {
    dailyImpressions: '48,000+',
    coverage: '16 sq mi',
    businessesServed: '325+'
  },
  coordinates: { lat: 26.5318, lng: -80.0905 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function BoyntonBeachPage() {
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