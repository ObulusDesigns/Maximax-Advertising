import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Kendall',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '75K',
  description: 'Kendall outdoor advertising reaches diverse suburban communities throughout Southwest Miami-Dade. Our mobile billboard trucks navigate busy commercial corridors from Dadeland to The Falls, targeting families, young professionals, and Hispanic markets. LED displays deliver vibrant messaging across this thriving residential and retail hub with crystal-clear 4K technology.',
  landmarks: [
    'Dadeland Mall',
    'The Falls Shopping Center',
    'Baptist Hospital',
    'Town and Country Mall',
    'Kendall Town Center',
    'Miami Dade College Kendall',
    'Pinecrest Gardens',
    'Tropical Park',
    'Gold Coast Railroad Museum',
    'Coral Reef Park',
    'Indian Hammocks Park',
    'Kendall Ice Arena',
    'Sunset Place',
    'Devon Aire Park',
    'Kings Creek Shopping'
  ],
  popularRoutes: [
    'US-1 (South Dixie Highway) - Primary commercial artery',
    'Kendall Drive (SW 88th Street) - Major east-west route',
    'Sunset Drive (SW 72nd Street) - Shopping corridor',
    'SW 137th Avenue - North-south connector',
    'SW 152nd Street (Coral Reef Drive) - Residential thoroughfare',
    'Old Cutler Road - Scenic route',
    'SW 117th Avenue - Central corridor',
    'Miller Drive (SW 56th Street) - Northern boundary',
    'Caribbean Boulevard - Commercial district',
    'SW 127th Avenue - Retail corridor'
  ],
  events: [
    { name: 'Kendall Art Festival', date: 'Spring', location: 'Town Center' },
    { name: 'Hispanic Heritage Festival', date: 'October', location: 'Tropical Park' },
    { name: 'Dadeland Mall Events', date: 'Year-round', location: 'Dadeland Mall' },
    { name: 'Farmers Market', date: 'Weekends', location: 'Pinecrest Gardens' },
    { name: 'Summer Concert Series', date: 'June-August', location: 'Various Parks' },
    { name: 'Holiday Parade', date: 'December', location: 'Kendall Drive' }
  ],
  stats: {
    dailyImpressions: '70,000+',
    coverage: '40 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 25.6706, lng: -80.3530 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function KendallOutdoorAdvertisingPage() {
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