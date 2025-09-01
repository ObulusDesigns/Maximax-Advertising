import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Downtown Fort Lauderdale',
  county: 'Broward County',
  state: 'Florida',
  population: '35K',
  description: 'Business district mobile billboard advertising in Downtown Fort Lauderdale reaches professionals, tourists, and residents. Our LED trucks target the financial district, courthouse area, and Riverwalk. GPS-tracked campaigns perfect for B2B services, restaurants, and entertainment venues in Broward\'s urban core.',
  landmarks: [
    'Broward County Courthouse',
    'Fort Lauderdale City Hall',
    'Riverwalk Fort Lauderdale',
    'Broward Center for the Performing Arts',
    'Museum of Discovery and Science',
    'NSU Art Museum',
    'Huizenga Plaza',
    'Esplanade Park',
    'Main Library',
    'All Saints Episcopal Church',
    'Bank of America Tower',
    'AutoNation Headquarters'
  ],
  popularRoutes: [
    'Broward Boulevard (Main Artery)',
    'Andrews Avenue',
    'Federal Highway (US-1)',
    'Las Olas Boulevard',
    'SE 3rd Avenue',
    'Flagler Drive',
    'New River Drive',
    'SE 6th Street'
  ],
  events: [
    { name: 'Fort Lauderdale International Boat Show', date: 'October', location: 'Convention Center' },
    { name: 'Riverwalk Arts & Entertainment', date: 'Monthly', location: 'Riverwalk' },
    { name: 'Downtown Countdown', date: 'December 31', location: 'Downtown' },
    { name: 'Jazz Brunch', date: 'First Sundays', location: 'Riverwalk' }
  ],
  stats: {
    dailyImpressions: '75,000+',
    coverage: '3 sq mi',
    businessesServed: '500+'
  },
  coordinates: { lat: 26.1224, lng: -80.1437 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function DowntownFortLauderdalePage() {
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