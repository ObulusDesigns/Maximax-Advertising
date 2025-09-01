import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Key Biscayne',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '14K',
  description: 'Exclusive mobile billboard advertising in Key Biscayne reaches affluent island residents and visitors to this tropical paradise. Our LED trucks target Crandon Park, Bill Baggs State Park, and the Village center. Perfect for luxury brands, marine services, and upscale businesses seeking to reach Key Biscayne\'s discerning demographic.',
  landmarks: [
    'Crandon Park Beach',
    'Bill Baggs Cape Florida State Park',
    'Cape Florida Lighthouse',
    'Miami Seaquarium',
    'Crandon Golf Course',
    'The Ritz-Carlton Key Biscayne',
    'Village Green Park',
    'Key Biscayne Beach Club',
    'Crandon Marina',
    'Key Biscayne Community Center',
    'St. Agnes Catholic Church',
    'Key Biscayne Yacht Club'
  ],
  popularRoutes: [
    'Crandon Boulevard (Main Artery)',
    'Harbor Drive',
    'Ocean Drive',
    'Rickenbacker Causeway',
    'Village Area Loop',
    'West Mashta Drive',
    'Fernwood Road',
    'Galen Drive'
  ],
  events: [
    { name: 'Miami Open Tennis', date: 'March', location: 'Crandon Park' },
    { name: 'Key Biscayne Art Festival', date: 'January', location: 'Village Green' },
    { name: 'Fourth of July Parade', date: 'July', location: 'Crandon Boulevard' },
    { name: 'Lighthouse Run', date: 'February', location: 'Bill Baggs Park' }
  ],
  stats: {
    dailyImpressions: '25,000+',
    coverage: '6 sq mi',
    businessesServed: '100+'
  },
  coordinates: { lat: 25.6939, lng: -80.1628 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function KeyBiscaynePage() {
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