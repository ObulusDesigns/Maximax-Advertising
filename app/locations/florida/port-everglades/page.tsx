import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Port Everglades',
  county: 'Broward County',
  state: 'Florida',
  population: '5K',
  description: 'Strategic mobile billboard advertising at Port Everglades reaches cruise passengers, port workers, and cargo traffic. Our LED trucks target cruise terminals, convention center, and port access roads. Perfect for travel services, hospitality, and businesses targeting the millions passing through one of the world\'s busiest cruise ports.',
  landmarks: [
    'Cruise Terminal 2',
    'Cruise Terminal 4',
    'Cruise Terminal 18',
    'Cruise Terminal 19',
    'Cruise Terminal 21',
    'Cruise Terminal 25',
    'Cruise Terminal 26',
    'Cruise Terminal 29',
    'Greater Fort Lauderdale Convention Center',
    'Port Administration Building',
    'Harpoon Harry\'s',
    'FLL Airport Connection'
  ],
  popularRoutes: [
    'Eisenhower Boulevard (Port Access)',
    'SE 17th Street Causeway',
    'Eller Drive',
    'SE 20th Street',
    'SE 24th Street',
    'State Road 84',
    'Griffin Road Port Access',
    'Convention Center Loop'
  ],
  events: [
    { name: 'Cruise Ship Departures', date: 'Daily', location: 'Various Terminals' },
    { name: 'Fort Lauderdale Boat Show', date: 'October', location: 'Convention Center' },
    { name: 'Trade Shows', date: 'Year-round', location: 'Convention Center' },
    { name: 'Fleet Week', date: 'May', location: 'Port Area' }
  ],
  stats: {
    dailyImpressions: '100,000+',
    coverage: '3 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 26.0929, lng: -80.1127 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PortEvergladesPage() {
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