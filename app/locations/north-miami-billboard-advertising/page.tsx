import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'North Miami',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/north-miami-billboard-advertising/',
  population: '63K',
  description: 'North Miami mobile billboards deliver strategic advertising coverage between Miami and Aventura. Our LED billboard trucks navigate Biscayne Boulevard, NE 125th Street, and West Dixie Highway, reaching diverse neighborhoods and business districts. Connect with shoppers, students at FIU Biscayne Bay Campus, and residents with dynamic 4K displays throughout this vibrant northeast Miami-Dade community.',
  landmarks: [
    'FIU Biscayne Bay Campus',
    'Museum of Contemporary Art (MOCA)',
    'Biscayne Boulevard',
    'NE 125th Street Shopping District',
    'Enchanted Forest Elaine Gordon Park',
    'Arch Creek Park',
    'North Miami City Hall',
    'Griffing Park',
    'West Dixie Highway',
    'Sans Souci Estates',
    'Keystone Point',
    'North Miami Athletic Stadium',
    'Johnson & Wales University',
    'Barry University (nearby)',
    'Aventura Mall (nearby)'
  ],
  popularRoutes: [
    'Biscayne Boulevard (US-1) - Main commercial artery',
    'NE 125th Street - Major shopping corridor',
    'West Dixie Highway - Parallel business route',
    'NE 135th Street - Cross-town connector',
    'NE 123rd Street - Downtown access',
    'NE 6th Avenue - North-south arterial',
    'NE 163rd Street - Northern boundary route',
    'NE 119th Street - Southern gateway',
    'NW 7th Avenue - Western corridor',
    'NE Miami Court - Central business district'
  ],
  events: [
    { name: 'North Miami Jazz Festival', date: 'February', location: 'MOCA Plaza' },
    { name: 'Haitian Heritage Month Celebration', date: 'May', location: 'Downtown North Miami' },
    { name: 'Art in the Park', date: 'Monthly', location: 'Griffing Park' },
    { name: 'Caribbean Marketplace Festival', date: 'June', location: 'NE 125th Street' },
    { name: 'North Miami Beach Green Market', date: 'Saturdays', location: 'City Hall' },
    { name: 'Holiday on the Boulevard', date: 'December', location: 'Biscayne Boulevard' }
  ],
  stats: {
    dailyImpressions: '65,000+',
    coverage: '5.9 sq mi',
    businessesServed: '175+'
  },
  coordinates: { lat: 25.8900, lng: -80.1867 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function NorthMiamiBillboardAdvertisingPage() {
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