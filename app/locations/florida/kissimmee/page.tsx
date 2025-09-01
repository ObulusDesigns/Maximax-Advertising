import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Kissimmee',
  county: 'Osceola County',
  state: 'Florida',
  population: '79K',
  description: 'Mobile billboard trucks in Kissimmee deliver powerful advertising near Disney World and throughout Osceola County. Our LED displays reach millions of tourists on US-192, Osceola Parkway, and near theme park entrances. Target vacation rentals, restaurants, and attractions with GPS-tracked campaigns that maximize your reach in this tourist-heavy market.',
  landmarks: [
    'Old Town Kissimmee',
    'Osceola County Stadium',
    'Celebration Town Center',
    'Kissimmee Lakefront Park',
    'Fun Spot America',
    'Gatorland',
    'Medieval Times',
    'The Loop Shopping Center',
    'Osceola Heritage Park',
    'Silver Spurs Arena',
    'Disney\'s Animal Kingdom (nearby)',
    'ESPN Wide World of Sports'
  ],
  popularRoutes: [
    'US-192 (Irlo Bronson Highway)',
    'Osceola Parkway (Theme Park Connector)',
    'John Young Parkway',
    'Orange Blossom Trail',
    'World Drive (Disney Area)',
    'Poinciana Boulevard',
    'Pleasant Hill Road',
    'Simpson Road (SR 530)'
  ],
  events: [
    { name: 'Silver Spurs Rodeo', date: 'February & June', location: 'Silver Spurs Arena' },
    { name: 'Osceola County Fair', date: 'February', location: 'Heritage Park' },
    { name: 'Spring Training Games', date: 'March', location: 'Osceola Stadium' },
    { name: 'Festival of Lights', date: 'December', location: 'Lakefront Park' }
  ],
  stats: {
    dailyImpressions: '65,000+',
    coverage: '35 sq mi',
    businessesServed: '250+'
  },
  coordinates: { lat: 28.2920, lng: -81.4076 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function KissimmeePage() {
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