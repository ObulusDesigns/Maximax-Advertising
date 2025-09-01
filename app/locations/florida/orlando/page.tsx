import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Orlando',
  county: 'Orange County',
  state: 'Florida',
  population: '309K',
  description: 'Premier mobile billboard advertising in Orlando, the Theme Park Capital of the World. Our LED billboard trucks provide unmatched visibility throughout Orange County, reaching tourists, convention attendees, and locals along I-4, International Drive, and downtown Orlando. With GPS-tracked precision, we target high-traffic areas near Universal Studios, Disney Springs, and the Orange County Convention Center.',
  landmarks: [
    'Universal Studios Orlando',
    'Disney Springs',
    'Orange County Convention Center',
    'Downtown Orlando',
    'Amway Center',
    'Orlando International Airport',
    'Lake Eola Park',
    'International Drive',
    'Orlando City Stadium',
    'Dr. Phillips Center',
    'Florida Mall',
    'Millenia Mall'
  ],
  popularRoutes: [
    'International Drive (Tourist Corridor)',
    'Interstate 4 (East-West Connector)',
    'Sand Lake Road (Restaurant Row)',
    'Colonial Drive (State Road 50)',
    'Orange Avenue (Downtown)',
    'Universal Boulevard (Theme Park Area)',
    'Semoran Boulevard (SR 436)',
    'Orlando International Airport Routes'
  ],
  events: [
    { name: 'MegaCon Orlando', date: 'February', location: 'Convention Center' },
    { name: 'EDC Orlando', date: 'November', location: 'Tinker Field' },
    { name: 'Orlando Film Festival', date: 'October', location: 'Downtown' },
    { name: 'IAAPA Expo', date: 'November', location: 'Convention Center' },
    { name: 'Arnold Palmer Invitational', date: 'March', location: 'Bay Hill' }
  ],
  stats: {
    dailyImpressions: '75,000+',
    coverage: '110 sq mi',
    businessesServed: '400+'
  },
  coordinates: { lat: 28.5383, lng: -81.3792 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function OrlandoPage() {
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