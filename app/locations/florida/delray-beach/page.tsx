import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Delray Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '70K',
  description: 'Connect with Delray Beach\'s vibrant community through mobile billboard advertising. Target Atlantic Avenue, Pineapple Grove, and beach-goers with LED billboard trucks that deliver your message throughout this artistic Palm Beach County destination.',
  landmarks: [
    'Atlantic Avenue',
    'Delray Beach Market',
    'Pineapple Grove Arts District',
    'Delray Municipal Beach',
    'Old School Square',
    'Morikami Museum',
    'Wakodahatchee Wetlands',
    'Cornell Art Museum',
    'Sandoway Discovery Center',
    'Veterans Park',
    'Atlantic Crossing',
    'Delray Marketplace'
  ],
  popularRoutes: [
    'Atlantic Avenue (Downtown to Beach)',
    'Federal Highway (US-1)',
    'A1A Ocean Boulevard',
    'Linton Boulevard',
    'Congress Avenue',
    'Military Trail',
    'Pineapple Grove Way',
    'Lake Ida Road'
  ],
  events: [
    { name: 'Delray Affair', date: 'April', location: 'Downtown Delray' },
    { name: 'Art & Jazz on the Avenue', date: 'Monthly', location: 'Atlantic Avenue' },
    { name: 'Garlic Fest', date: 'February', location: 'Old School Square' }
  ],
  stats: {
    dailyImpressions: '35,000+',
    coverage: '16 sq mi',
    businessesServed: '100+'
  },
  coordinates: { lat: 26.4615, lng: -80.0728 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function DelrayBeachPage() {
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