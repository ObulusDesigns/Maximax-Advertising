import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Davie',
  county: 'Broward County',
  state: 'Florida',
  population: '106K',
  description: 'Mobile billboard trucks in Davie reach students at Nova Southeastern University and families throughout Western Broward. Our LED displays target educational institutions, equestrian areas, and shopping centers. With GPS tracking, we ensure maximum exposure in this unique town known for its western heritage and educational facilities.',
  landmarks: [
    'Nova Southeastern University',
    'Broward College Davie Campus',
    'Tower Shops',
    'Davie Pro Rodeo Arena',
    'Bergeron Rodeo Grounds',
    'Young At Art Museum',
    'Flamingo Gardens',
    'Tree Tops Park',
    'Davie Pine Island Park',
    'Old Davie School Museum',
    'Seminole Hard Rock Hotel & Casino',
    'Cleveland Clinic Florida'
  ],
  popularRoutes: [
    'University Drive (Main Corridor)',
    'Davie Road',
    'Griffin Road',
    'State Road 84',
    'Orange Drive',
    'Nova Drive',
    'Pine Island Road',
    'Stirling Road'
  ],
  events: [
    { name: 'Orange Bowl Rodeo', date: 'January', location: 'Bergeron Rodeo' },
    { name: 'Davie Pro Rodeo', date: 'Monthly', location: 'Rodeo Arena' },
    { name: 'Fall Festival', date: 'October', location: 'Town Center' },
    { name: 'Independence Day Celebration', date: 'July', location: 'Pine Island Park' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '35 sq mi',
    businessesServed: '275+'
  },
  coordinates: { lat: 26.0765, lng: -80.2521 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function DaviePage() {
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