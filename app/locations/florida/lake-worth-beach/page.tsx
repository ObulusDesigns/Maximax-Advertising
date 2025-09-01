import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Lake Worth Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '38K',
  description: 'Vibrant mobile billboard advertising in Lake Worth Beach reaches the arts district and diverse beach community. Our LED trucks target downtown Lake Avenue, the Cultural Plaza, and beach visitors. Perfect for local businesses, cultural events, and restaurants in this eclectic Palm Beach County city.',
  landmarks: [
    'Lake Worth Beach & Casino',
    'Downtown Lake Avenue',
    'Lake Worth Playhouse',
    'Cultural Plaza',
    'Bryant Park',
    'Lake Worth Beach Golf Club',
    'Snook Islands Natural Area',
    'Lake Worth Pier',
    'Palm Beach State College',
    'Compass Community Center',
    'Lake Worth Art League',
    'Historic Gulfstream Hotel'
  ],
  popularRoutes: [
    'Lake Avenue (Downtown Arts)',
    'Federal Highway (US-1)',
    'Dixie Highway',
    'Lake Worth Road',
    '6th Avenue South',
    '10th Avenue North',
    'Lucerne Avenue',
    'Ocean Boulevard (A1A)'
  ],
  events: [
    { name: 'Street Painting Festival', date: 'February', location: 'Lake Avenue' },
    { name: 'Lake Worth Beach Pride', date: 'March', location: 'Downtown' },
    { name: 'Evening on the Avenue', date: 'First Fridays', location: 'Lake Avenue' },
    { name: 'Holiday Parade', date: 'December', location: 'Downtown' }
  ],
  stats: {
    dailyImpressions: '32,000+',
    coverage: '7 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 26.6168, lng: -80.0553 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function LakeWorthBeachPage() {
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