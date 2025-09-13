import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Palmetto Bay',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/palmetto-bay-mobile-billboards/',
  population: '24,439',
  description: 'Palmetto Bay mobile billboards reach engaged audiences throughout this family-friendly Miami-Dade community. Our LED billboard trucks deliver impactful advertising along US-1, target shoppers at Southland Mall, and connect with residents in established neighborhoods. GPS-tracked mobile displays ensure comprehensive coverage across this suburban village with vibrant 4K screens.',
  landmarks: [
    'Southland Mall',
    'Coral Reef Park',
    'Palmetto Bay Park',
    'Deering Estate',
    'Palmer Trinity School',
    'Old Cutler Road',
    'Village Center',
    'Ludovici Park',
    'Thalatta Estate Park',
    'Sacred Heart Church',
    'Westminster Christian School',
    'Palmetto Bay Marina',
    'Falls Shopping Center',
    'Palmetto Bay Village Hall',
    'Perrine Wayside Park'
  ],
  popularRoutes: [
    'US-1 (South Dixie Highway) - Primary commercial corridor',
    'Old Cutler Road - Scenic residential route',
    'SW 184th Street (Eureka Drive) - East-west connector',
    'SW 144th Street - Northern boundary',
    'SW 168th Street - Central business area',
    'Franjo Road - Commercial district',
    'SW 87th Avenue - North-south arterial',
    'SW 97th Avenue - Residential collector',
    'SW 176th Street - School zone corridor',
    'Caribbean Boulevard - Waterfront access'
  ],
  events: [
    { name: 'Village Green Music Series', date: 'Monthly', location: 'Village Center' },
    { name: 'Palmetto Bay Farmers Market', date: 'Saturdays', location: 'Coral Reef Park' },
    { name: 'Holiday Tree Lighting', date: 'December', location: 'Village Hall' },
    { name: 'Earth Day Festival', date: 'April', location: 'Palmetto Bay Park' },
    { name: 'July 4th Celebration', date: 'July', location: 'Coral Reef Park' },
    { name: 'Food Truck Friday', date: 'Monthly', location: 'Village Center' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '8.5 sq mi',
    businessesServed: '125+'
  },
  coordinates: { lat: 25.6217, lng: -80.3153 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PalmettoBayMobileBillboardsPage() {
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