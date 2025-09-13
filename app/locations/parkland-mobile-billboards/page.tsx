import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Parkland',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/parkland-mobile-billboards/',
  population: '35K',
  description: 'Parkland mobile billboard advertising targets one of Florida\'s most affluent family communities with top-rated schools and pristine neighborhoods. Our LED displays reach successful professionals, business owners, and families in this upscale Broward County city. Connect with high-income households through strategic routes near country clubs, equestrian centers, and luxury shopping destinations.',
  landmarks: [
    'Parkland Golf & Country Club',
    'Heron Bay Golf Club',
    'The Shops at Heron Bay',
    'Pine Trails Park',
    'Terramar Park',
    'Parkland Equestrian Center',
    'Temple Kol Tikvah',
    'Cascata at MiraLago',
    'Parkland Commons',
    'Liberty Park',
    'Marjory Stoneman Douglas High School',
    'Riverglades Elementary',
    'Country Club Middle School',
    'Parkland City Hall',
    'Northwest Medical Center'
  ],
  popularRoutes: [
    'University Drive - Main commercial corridor',
    'Parkside Drive - Central thoroughfare',
    'Holmberg Road - Western luxury homes',
    'Coral Ridge Drive - Premium residential',
    'Riverside Drive - Waterfront estates',
    'Trails End - Equestrian district',
    'Heron Bay Boulevard - Golf community',
    'Pine Island Road - Shopping access',
    'Loxahatchee Road - Rural estates',
    'State Road 7 - Regional connector'
  ],
  events: [
    { name: 'Parkland Farmers Market', date: 'Sundays', location: 'City Hall' },
    { name: 'Run for Parkland', date: 'April', location: 'Pine Trails Park' },
    { name: 'Holiday Festival', date: 'December', location: 'Amphitheater' },
    { name: 'Country Club Championships', date: 'Seasonal', location: 'Golf Clubs' },
    { name: 'Equestrian Events', date: 'Year-round', location: 'Equestrian Center' },
    { name: 'Community Concert Series', date: 'Monthly', location: 'Amphitheater' }
  ],
  stats: {
    dailyImpressions: '75,000+',
    coverage: '37 sq mi',
    businessesServed: '200+ Premium Businesses'
  },
  coordinates: { lat: 26.3100, lng: -80.2372 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function ParklandMobileBillboardsPage() {
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