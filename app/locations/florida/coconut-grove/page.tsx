import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Coconut Grove',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '20K',
  description: 'Mobile billboard trucks in Coconut Grove reach Miami\'s bohemian arts district and waterfront community. Our LED displays capture attention at CocoWalk, the marina, and along Main Highway. Target affluent residents, tourists, and the vibrant nightlife scene with GPS-tracked campaigns throughout "The Grove."',
  landmarks: [
    'CocoWalk Shopping Center',
    'Coconut Grove Marina',
    'Vizcaya Museum & Gardens',
    'Peacock Park',
    'The Barnacle Historic State Park',
    'Coconut Grove Playhouse',
    'Fresh Market',
    'Bayshore Drive',
    'Kennedy Park',
    'The Kampong Garden',
    'Mayfair Hotel & Spa',
    'Grove Harbor Marina'
  ],
  popularRoutes: [
    'Main Highway (Primary Corridor)',
    'Bayshore Drive (Waterfront)',
    'Grand Avenue',
    'McFarlane Road',
    'South Bayshore Drive',
    'Commodore Plaza',
    'Mary Street',
    'Oak Avenue'
  ],
  events: [
    { name: 'Coconut Grove Arts Festival', date: 'February', location: 'Peacock Park' },
    { name: 'King Mango Strut', date: 'December', location: 'Main Highway' },
    { name: 'Goombay Festival', date: 'June', location: 'Grand Avenue' },
    { name: 'Great Taste of the Grove', date: 'April', location: 'Peacock Park' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '5 sq mi',
    businessesServed: '250+'
  },
  coordinates: { lat: 25.7247, lng: -80.2408 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CoconutGrovePage() {
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