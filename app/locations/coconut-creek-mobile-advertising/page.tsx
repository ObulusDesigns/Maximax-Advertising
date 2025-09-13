import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Coconut Creek',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/coconut-creek-mobile-advertising/',
  population: '59,547',
  description: 'Coconut Creek mobile advertising reaches engaged audiences throughout the "Butterfly Capital of the World". Our LED billboard trucks deliver impactful campaigns at Promenade at Coconut Creek, target golfers at championship courses, and connect with families in master-planned communities. GPS-tracked displays ensure strategic coverage across this green city with vibrant 4K screens.',
  landmarks: [
    'Promenade at Coconut Creek',
    'Seminole Casino Coconut Creek',
    'Butterfly World',
    'Coconut Creek Recreation Complex',
    'Sabal Pines Park',
    'Tradewinds Park',
    'Coconut Creek Golf Club',
    'Monarch Lakes Golf Club',
    'Deerfield Country Club',
    'Winston Park',
    'Coconut Creek Community Center',
    'City Hall',
    'Coconut Creek High School',
    'North Broward Preparatory School',
    'Creek District Park'
  ],
  popularRoutes: [
    'Coconut Creek Parkway - Main east-west corridor',
    'Lyons Road - Western arterial',
    'State Road 7 (US 441) - Eastern boundary',
    'Sample Road - Southern connector',
    'Wiles Road - Northern route',
    'Atlantic Boulevard - Major thoroughfare',
    'Hillsboro Boulevard - Southern access',
    'Banks Road - Central avenue',
    'NW 39th Avenue - Residential route',
    'Riverside Drive - Waterway corridor'
  ],
  events: [
    { name: 'Butterfly Festival', date: 'Spring', location: 'Butterfly World' },
    { name: 'July 4th Celebration', date: 'July', location: 'Recreation Complex' },
    { name: 'Green Market', date: 'Saturdays', location: 'Promenade' },
    { name: 'Art Walk', date: 'Monthly', location: 'Promenade' },
    { name: 'Holiday Light Display', date: 'December', location: 'Tradewinds Park' },
    { name: 'Earth Day Festival', date: 'April', location: 'Sabal Pines Park' }
  ],
  stats: {
    dailyImpressions: '60,000+',
    coverage: '12 sq mi',
    businessesServed: '250+'
  },
  coordinates: { lat: 26.2517, lng: -80.1797 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CoconutCreekMobileAdvertisingPage() {
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