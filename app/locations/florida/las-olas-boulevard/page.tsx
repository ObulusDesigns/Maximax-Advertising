import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Las Olas Boulevard',
  county: 'Broward County',
  state: 'Florida',
  population: '25K',
  description: 'Premier mobile billboard advertising on Las Olas Boulevard reaches upscale shoppers, diners, and tourists in Fort Lauderdale\'s most prestigious corridor. Our LED trucks target boutiques, galleries, and restaurants from downtown to the beach. Perfect for luxury brands and high-end services seeking visibility on "The Boulevard."',
  landmarks: [
    'Las Olas Riverfront',
    'Museum of Discovery and Science',
    'Broward Center for Performing Arts',
    'NSU Art Museum',
    'The Shops at Las Olas',
    'Las Olas Beach',
    'Stranahan House',
    'Riverside Hotel',
    'Cheesecake Factory',
    'Historic Downtown',
    'Las Olas Marina',
    'Himmarshee Village'
  ],
  popularRoutes: [
    'Las Olas Boulevard (Main Strip)',
    'SE 3rd Avenue',
    'Andrews Avenue',
    'Federal Highway Connection',
    'A1A Beach Access',
    'SE 8th Street',
    'Riverwalk Connection',
    'Downtown Loop'
  ],
  events: [
    { name: 'Las Olas Art Fair', date: 'January & October', location: 'Las Olas Blvd' },
    { name: 'Wine & Food Festival', date: 'March', location: 'Various Venues' },
    { name: 'Jazz Brunch', date: 'First Sunday Monthly', location: 'Riverwalk' },
    { name: 'Holiday Lighting', date: 'December', location: 'Throughout Boulevard' }
  ],
  stats: {
    dailyImpressions: '60,000+',
    coverage: '2 sq mi',
    businessesServed: '300+'
  },
  coordinates: { lat: 26.1195, lng: -80.1357 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function LasOlasBoulevardPage() {
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