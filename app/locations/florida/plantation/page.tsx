import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Plantation',
  county: 'Broward County',
  state: 'Florida',
  population: '95K',
  description: 'Professional mobile billboard advertising in Plantation reaches families and businesses in this well-planned Broward city. Our LED trucks target Broward Mall, Plantation Walk, and corporate offices along University Drive. GPS-tracked campaigns ensure visibility throughout this thriving suburban community.',
  landmarks: [
    'Broward Mall',
    'Plantation Walk',
    'Westfield Broward',
    'Plantation Preserve Golf Course',
    'Central Park',
    'Plantation Historical Museum',
    'American Top Team',
    'Volunteer Park',
    'Plantation Acres',
    'Jacaranda Golf Club',
    'Helen B. Hoffman Library',
    'Plantation General Hospital'
  ],
  popularRoutes: [
    'University Drive (Major Corridor)',
    'Broward Boulevard',
    'Sunrise Boulevard',
    'Peters Road',
    'Pine Island Road',
    'Cleary Boulevard',
    'Nob Hill Road',
    'Plantation Road'
  ],
  events: [
    { name: 'Plantation Heritage Festival', date: 'April', location: 'Central Park' },
    { name: 'July 4th Celebration', date: 'July', location: 'Central Park' },
    { name: 'Holiday Parade', date: 'December', location: 'Downtown' },
    { name: 'Art in the Park', date: 'March', location: 'Volunteer Park' }
  ],
  stats: {
    dailyImpressions: '50,000+',
    coverage: '22 sq mi',
    businessesServed: '300+'
  },
  coordinates: { lat: 26.1276, lng: -80.2628 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PlantationPage() {
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