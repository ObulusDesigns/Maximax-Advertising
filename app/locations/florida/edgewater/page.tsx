import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Edgewater',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '15K',
  description: 'Waterfront mobile billboard advertising in Edgewater Miami reaches luxury condo residents and bayfront visitors. Our LED trucks target Biscayne Boulevard high-rises, Margaret Pace Park, and new developments. Perfect for real estate, luxury services, and lifestyle brands in this rapidly growing Miami neighborhood.',
  landmarks: [
    'Margaret Pace Park',
    'Publix at The Shops of Paraiso',
    'Paraiso Bay Complex',
    'Icon Bay',
    'Quantum on the Bay',
    'Aria on the Bay',
    'Missoni Baia',
    'The Venetia',
    'Biscayne Beach',
    'Elysee Miami',
    'Bay Point',
    'Miami City Ballet'
  ],
  popularRoutes: [
    'Biscayne Boulevard (Main Corridor)',
    'NE 17th Terrace',
    'NE 20th Street',
    'NE 23rd Street',
    'NE 29th Street',
    'NE 36th Street (Midtown Access)',
    'Bayshore Drive',
    'NE 15th Street'
  ],
  events: [
    { name: 'Margaret Pace Park Events', date: 'Weekly', location: 'Margaret Pace Park' },
    { name: 'Edgewater Art Walk', date: 'Quarterly', location: 'Various Venues' },
    { name: 'Bayfront Concerts', date: 'Monthly', location: 'Park Areas' },
    { name: 'Waterfront Markets', date: 'Weekends', location: 'Paraiso Bay' }
  ],
  stats: {
    dailyImpressions: '48,000+',
    coverage: '2 sq mi',
    businessesServed: '150+'
  },
  coordinates: { lat: 25.8005, lng: -80.1908 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function EdgewaterPage() {
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