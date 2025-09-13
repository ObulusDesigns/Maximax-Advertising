import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Pinecrest',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/pinecrest-mobile-advertising/',
  population: '19K',
  description: 'Pinecrest mobile advertising reaches one of Miami\'s most prestigious suburban communities with tree-lined streets and multi-acre estates. Our LED displays target affluent families, successful entrepreneurs, and professionals in this exclusive enclave. Connect with high-income households near top-rated schools, country clubs, and the elegant Pinecrest Gardens through sophisticated mobile billboard campaigns.',
  landmarks: [
    'Pinecrest Gardens',
    'Riviera Country Club',
    'Palmetto Bay Country Club',
    'The Falls Shopping Center',
    'Dadeland Mall (nearby)',
    'Pinecrest Community Center',
    'Evelyn Greer Park',
    'Suniland Park',
    'Coral Pine Park',
    'Pinecrest Elementary',
    'Palmetto Middle & High School',
    'Gulliver Schools',
    'Miami Palmetto Senior High',
    'Fairchild Tropical Botanic Garden',
    'Matheson Hammock Park'
  ],
  popularRoutes: [
    'US-1/South Dixie Highway - Main commercial artery',
    'Kendall Drive (SW 88th Street) - Shopping corridor',
    'Red Road (SW 57th Avenue) - Historic canopy road',
    'Palmetto Expressway - Regional access',
    'SW 136th Street - Luxury residential',
    'Old Cutler Road - Scenic estate route',
    'SW 124th Street - Central Pinecrest',
    'Chapman Field Drive - Park access',
    'Killian Drive - School district route',
    'Sunset Drive - Premium shopping access'
  ],
  events: [
    { name: 'Pinecrest Gardens Art Festival', date: 'January', location: 'Pinecrest Gardens' },
    { name: 'Pinecrest Farmers Market', date: 'Sundays', location: 'Pinecrest Gardens' },
    { name: 'Fourth of July Celebration', date: 'July 4th', location: 'Evelyn Greer Park' },
    { name: 'Holiday Tree Lighting', date: 'December', location: 'Pinecrest Gardens' },
    { name: 'Fine Arts Festival', date: 'March', location: 'Gardens' },
    { name: 'Concert Series', date: 'Monthly', location: 'Banyan Bowl' }
  ],
  stats: {
    dailyImpressions: '70,000+',
    coverage: '7.5 sq mi',
    businessesServed: '175+ Luxury Brands'
  },
  coordinates: { lat: 25.6672, lng: -80.3081 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PinecrestMobileAdvertisingPage() {
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