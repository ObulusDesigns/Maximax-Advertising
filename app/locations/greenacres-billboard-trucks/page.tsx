import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Greenacres',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/greenacres-billboard-trucks/',
  population: '44K',
  description: 'Greenacres mobile billboards deliver strategic advertising coverage throughout central Palm Beach County. Our LED billboard trucks navigate Jog Road, Lake Worth Road, and 10th Avenue North, reaching diverse communities with stunning 4K displays. From shopping centers to residential neighborhoods, maximize your brand visibility with GPS-tracked precision throughout this growing Palm Beach hub.',
  landmarks: [
    'Greenacres Community Park',
    'Jog Road',
    'Lake Worth Road',
    '10th Avenue North',
    'Greenacres City Hall',
    'Okeeheelee Park (nearby)',
    'Veterans Park',
    'Greenacres Freedom Park',
    'Ira Van Bullock Park',
    'The Shoppes at Greenacres',
    'Palm Beach State College (nearby)',
    'Wellington Green Mall (nearby)',
    'Atlantis Shopping Center',
    'Greenacres Bowl',
    'Lake Worth Corridor'
  ],
  popularRoutes: [
    'Jog Road - Major north-south arterial',
    'Lake Worth Road - Primary east-west corridor',
    '10th Avenue North - Central business route',
    'Haverhill Road - Western connector',
    'Forest Hill Boulevard - Northern boundary',
    'Melaleuca Lane - Southern route',
    'Swain Boulevard - Residential arterial',
    'Purdy Lane - Community connector',
    'Jennings Road - Eastern access',
    'Atlantis Road - Shopping district'
  ],
  events: [
    { name: 'Greenacres Founders Day', date: 'May', location: 'Community Park' },
    { name: 'Fall Festival', date: 'October', location: 'Freedom Park' },
    { name: 'Holiday Tree Lighting', date: 'December', location: 'City Hall' },
    { name: 'Summer Concert Series', date: 'June-August', location: 'Veterans Park' },
    { name: 'Food Truck Invasion', date: 'Monthly', location: 'Community Park' },
    { name: 'Movies in the Park', date: 'Fridays', location: 'Ira Van Bullock Park' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '5.9 sq mi',
    businessesServed: '140+'
  },
  coordinates: { lat: 26.6276, lng: -80.1372 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function GreenacresBillboardTrucksPage() {
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