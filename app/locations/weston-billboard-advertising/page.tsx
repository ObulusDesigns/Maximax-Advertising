import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Weston',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/weston-billboard-advertising/',
  population: '69K',
  description: 'Weston mobile billboards target one of Florida\'s most affluent suburban communities. Our LED billboard trucks cover Weston Road, Indian Trace, and Bonaventure Boulevard, reaching upscale families and professionals with premium 4K displays. From Town Center to the prestigious country clubs, maximize your brand presence with GPS-tracked precision advertising in this master-planned Broward gem.',
  landmarks: [
    'Weston Town Center',
    'Cleveland Clinic Florida',
    'Bonaventure Town Center',
    'Weston Regional Park',
    'Markham Park',
    'Indian Trace',
    'Weston Road',
    'Bonaventure Boulevard',
    'The Waterways',
    'Country Isles',
    'Savanna',
    'Botaniko Weston',
    'Tequesta Trace Park',
    'Vista Park',
    'Peace Mound Park'
  ],
  popularRoutes: [
    'Weston Road - Main north-south thoroughfare',
    'Royal Palm Boulevard - Central east-west connector',
    'Indian Trace - Scenic residential corridor',
    'Bonaventure Boulevard - Eastern arterial',
    'Griffin Road - Northern boundary route',
    'Saddle Club Road - Western connector',
    'South Post Road - Southern arterial',
    'Arvida Parkway - Commercial district',
    'Three Village Road - Community connector',
    'Racquet Club Road - Residential loop'
  ],
  events: [
    { name: 'Weston Celebrates America', date: 'July 4th', location: 'Regional Park' },
    { name: 'Fall Festival', date: 'October', location: 'Town Center' },
    { name: 'Art in the Park', date: 'March', location: 'Peace Mound Park' },
    { name: 'Concerts in the Park', date: 'Monthly', location: 'Weston Town Center' },
    { name: 'Holiday Light Display', date: 'December', location: 'Vista Park' },
    { name: 'Farmers Market', date: 'Saturdays', location: 'Town Center' }
  ],
  stats: {
    dailyImpressions: '55,000+',
    coverage: '26.6 sq mi',
    businessesServed: '175+'
  },
  coordinates: { lat: 26.1003, lng: -80.3997 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WestonBillboardAdvertisingPage() {
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