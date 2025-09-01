import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Sunrise',
  county: 'Broward County',
  state: 'Florida',
  population: '96K',
  description: 'Mobile billboard trucks in Sunrise reach millions at Sawgrass Mills Mall and BB&T Center event attendees. Our LED displays dominate high-traffic areas near Florida\'s largest outlet mall and major sports venues. Target shoppers, hockey fans, and concert-goers with GPS-tracked advertising campaigns.',
  landmarks: [
    'Sawgrass Mills Mall',
    'BB&T Center (FLA Live Arena)',
    'Sunrise Civic Center',
    'Markham Park',
    'Amerant Bank Arena',
    'IKEA Sunrise',
    'Sunrise Lakes Shopping',
    'Welleby Golf Club',
    'Sunrise Country Club',
    'Sunset Strip Shopping',
    'Sawgrass International Corporate Park',
    'Sunrise Athletic Complex'
  ],
  popularRoutes: [
    'Sunrise Boulevard (Main East-West)',
    'Flamingo Road',
    'University Drive',
    'Pine Island Road',
    'Oakland Park Boulevard',
    'Nob Hill Road',
    'Northwest 136th Avenue',
    'Sawgrass Expressway Access'
  ],
  events: [
    { name: 'Florida Panthers Games', date: 'Oct-April', location: 'BB&T Center' },
    { name: 'Major Concerts', date: 'Year-round', location: 'BB&T Center' },
    { name: 'Sawgrass Mills Events', date: 'Monthly', location: 'Mall Property' },
    { name: 'Earth Day Festival', date: 'April', location: 'Markham Park' }
  ],
  stats: {
    dailyImpressions: '85,000+',
    coverage: '18 sq mi',
    businessesServed: '400+'
  },
  coordinates: { lat: 26.1504, lng: -80.3213 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function SunrisePage() {
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