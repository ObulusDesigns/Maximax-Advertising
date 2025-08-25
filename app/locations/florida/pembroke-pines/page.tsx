import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Pembroke Pines',
  county: 'Broward County',
  state: 'Florida',
  population: '173K',
  description: 'Pembroke Pines billboards reach one of Florida\'s most populous cities. Our mobile billboard trucks and LED advertising displays target Pembroke Lakes Mall, shopping districts, and residential communities throughout Pembroke Pines with maximum visibility.',
  landmarks: [
    'Pembroke Lakes Mall',
    'Shops at Pembroke Gardens',
    'CB Smith Park',
    'Pembroke Pines City Center',
    'Memorial Hospital West',
    'Frank C. Ortis Dog Park',
    'Pines Recreation Center',
    'Carl F. Silver Lakes',
    'Chapel Trail Nature Preserve',
    'Pembroke Falls',
    'Grand Palms',
    'Century Village'
  ],
  popularRoutes: [
    'Pines Boulevard (Main East-West)',
    'University Drive (North-South)',
    'Flamingo Road',
    'Sheridan Street',
    'Pembroke Road',
    'Taft Street',
    'Dykes Road',
    'Palm Avenue'
  ],
  events: [
    { name: 'Pines City Market', date: 'Sundays', location: 'City Center' },
    { name: 'Fall Festival', date: 'October', location: 'CB Smith Park' },
    { name: 'Holiday Tree Lighting', date: 'December', location: 'City Center' }
  ],
  stats: {
    dailyImpressions: '42,000+',
    coverage: '34 sq mi',
    businessesServed: '140+'
  },
  coordinates: { lat: 26.0031, lng: -80.2241 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PembrokePinesPage() {
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