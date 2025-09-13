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
  canonicalPath: '/locations/plantation-mobile-billboards/',
  population: '92,233',
  description: 'Plantation mobile billboards deliver strategic advertising throughout this thriving Broward County city. Our LED billboard trucks reach shoppers at Westfield Broward Mall, target professionals along University Drive, and connect with families in planned communities. GPS-tracked displays ensure comprehensive coverage from Plantation Acres to Sawgrass Mills area with brilliant 4K screens.',
  landmarks: [
    'Westfield Broward Mall',
    'American Heritage School',
    'Plantation Central Park',
    'Volunteer Park',
    'Plantation Preserve Golf Course',
    'University of Phoenix Campus',
    'Plantation Historical Museum',
    'Plantation Acres',
    'Jacaranda Golf Club',
    'Helen B. Hoffman Library',
    'Deicke Auditorium',
    'Jim Ward Community Center',
    'Nova Southeastern University',
    'Plantation General Hospital',
    'Fashion Mall at Plantation'
  ],
  popularRoutes: [
    'University Drive - Primary commercial corridor',
    'Broward Boulevard (SR 842) - Major east-west route',
    'Pine Island Road - Northern arterial',
    'Peters Road - Southern boundary',
    'Sunrise Boulevard - Business district',
    'Nob Hill Road - Central connector',
    'SW 84th Avenue - Residential route',
    'Cleary Boulevard - Eastern corridor',
    'Davie Road - Western access',
    'State Road 7 - Major north-south highway'
  ],
  events: [
    { name: 'Plantation Heritage Festival', date: 'Spring', location: 'Central Park' },
    { name: 'July 4th Spectacular', date: 'July', location: 'Central Park' },
    { name: 'Art in the Park', date: 'Monthly', location: 'Volunteer Park' },
    { name: 'Holiday Parade', date: 'December', location: 'Pine Island Road' },
    { name: 'Farmers Market', date: 'Saturdays', location: 'Plantation Acres' },
    { name: 'Jazz Brunch', date: 'Quarterly', location: 'Deicke Auditorium' }
  ],
  stats: {
    dailyImpressions: '85,000+',
    coverage: '21.8 sq mi',
    businessesServed: '350+'
  },
  coordinates: { lat: 26.1276, lng: -80.2332 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PlantationMobileBillboardsPage() {
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