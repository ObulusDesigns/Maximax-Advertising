import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Jupiter',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '65K',
  description: 'Mobile billboard advertising in Jupiter reaches Northern Palm Beach County\'s affluent coastal communities. Our LED trucks target Harbourside Place, Jupiter beaches, and Abacoa Town Center. Perfect for luxury brands, marine businesses, and local services seeking visibility in this upscale beach town.',
  landmarks: [
    'Jupiter Inlet Lighthouse',
    'Harbourside Place',
    'Abacoa Town Center',
    'Roger Dean Chevrolet Stadium',
    'Jupiter Beach Park',
    'Carlin Park',
    'Riverbend Park',
    'Jupiter Medical Center',
    'Gardens Mall (nearby)',
    'Maltz Jupiter Theatre',
    'Busch Wildlife Sanctuary',
    'Jonathan Dickinson State Park'
  ],
  popularRoutes: [
    'US Highway 1 (Federal Highway)',
    'Indiantown Road',
    'A1A Ocean Boulevard',
    'Center Street',
    'Jupiter Beach Road',
    'Donald Ross Road',
    'Military Trail',
    'Alternate A1A'
  ],
  events: [
    { name: 'Jupiter Seafood Festival', date: 'February', location: 'Abacoa' },
    { name: 'Spring Training Baseball', date: 'March', location: 'Roger Dean Stadium' },
    { name: 'Jubilee on the Avenue', date: 'November', location: 'Abacoa' },
    { name: 'ArtiGras', date: 'February', location: 'Abacoa Town Center' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '21 sq mi',
    businessesServed: '300+'
  },
  coordinates: { lat: 26.9342, lng: -80.0942 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function JupiterPage() {
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