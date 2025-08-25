import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Palm Beach County',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '1.5M',
  description: 'Maximize your reach across Palm Beach County with mobile billboard advertising. From West Palm Beach to Boca Raton, Jupiter to Delray Beach, our GPS-tracked LED trucks deliver your message to affluent communities and high-traffic areas throughout the county.',
  landmarks: [
    'Palm Beach International Airport',
    'Worth Avenue',
    'CityPlace',
    'Kravis Center',
    'Palm Beach Outlets',
    'The Gardens Mall',
    'Town Center at Boca Raton',
    'Mizner Park',
    'Atlantic Avenue Delray',
    'Jupiter Lighthouse',
    'PGA National Resort',
    'Wellington Equestrian Center'
  ],
  popularRoutes: [
    'I-95 Corridor (Jupiter to Boca Raton)',
    'US-1 Federal Highway',
    'Florida Turnpike',
    'Atlantic Avenue (Delray Beach)',
    'Okeechobee Boulevard (West Palm Beach)',
    'Glades Road (Boca Raton)',
    'PGA Boulevard (Palm Beach Gardens)',
    'Southern Boulevard (Wellington)'
  ],
  events: [
    { name: 'Palm Beach International Boat Show', date: 'March', location: 'West Palm Beach' },
    { name: 'SunFest', date: 'May', location: 'Downtown West Palm Beach' },
    { name: 'Delray Affair', date: 'April', location: 'Delray Beach' }
  ],
  stats: {
    dailyImpressions: '50,000+',
    coverage: '2,383 sq mi',
    businessesServed: '400+'
  },
  coordinates: { lat: 26.7056, lng: -80.0364 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PalmBeachCountyPage() {
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