import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'West Palm Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '120K',
  description: 'West Palm Beach billboards reach business professionals and residents with mobile billboard advertising. Our LED billboard trucks target downtown, CityPlace, Clematis Street delivering premium West Palm Beach billboard advertising with GPS-tracked precision for maximum visibility.',
  landmarks: [
    'CityPlace',
    'Clematis Street',
    'Kravis Center',
    'Palm Beach Outlets',
    'Downtown West Palm Beach',
    'Flagler Drive Waterfront',
    'Rosemary Square',
    'Palm Beach Convention Center',
    'Norton Museum of Art',
    'Palm Beach International Airport',
    'Brightline Station',
    'Raymond F. Kravis Center'
  ],
  popularRoutes: [
    'Okeechobee Boulevard (East-West Corridor)',
    'Flagler Drive (Waterfront)',
    'Clematis Street (Entertainment District)',
    'Quadrille Boulevard (Downtown)',
    'Australian Avenue (North-South)',
    'Palm Beach Lakes Boulevard',
    'Belvedere Road',
    'Southern Boulevard'
  ],
  events: [
    { name: 'SunFest', date: 'May', location: 'Flagler Drive' },
    { name: 'Clematis by Night', date: 'Thursdays', location: 'Clematis Street' },
    { name: 'GreenMarket', date: 'Saturdays', location: 'Waterfront' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '58 sq mi',
    businessesServed: '150+'
  },
  coordinates: { lat: 26.7153, lng: -80.0534 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WestPalmBeachPage() {
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