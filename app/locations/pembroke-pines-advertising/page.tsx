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
  description: 'Pembroke Pines advertising reaches one of Florida\'s most family-friendly cities. Our mobile billboard trucks navigate through residential neighborhoods, shopping districts, and business corridors. LED displays connect with diverse communities from Pembroke Lakes Mall to CB Smith Park, delivering your message with brilliant 4K technology throughout this thriving suburban hub.',
  landmarks: [
    'Pembroke Lakes Mall',
    'CB Smith Park',
    'Pembroke Gardens',
    'City Center',
    'Memorial Hospital West',
    'Shops at Pembroke Gardens',
    'Broward College South Campus',
    'Florida International University',
    'Chapel Trail Nature Preserve',
    'Century Village',
    'Silver Lakes',
    'Grand Palms Golf',
    'Pembroke Falls',
    'Pembroke Isles',
    'Towngate Shopping'
  ],
  popularRoutes: [
    'Pines Boulevard - Main east-west corridor',
    'University Drive - Major north-south route',
    'Flamingo Road - Western thoroughfare',
    'Sheridan Street - Northern boundary',
    'Pembroke Road - Central connector',
    'Dykes Road (SW 184th Ave) - Western edge',
    'Taft Street - Commercial route',
    'Johnson Street - Residential connector',
    'Douglas Road - Eastern corridor',
    'Palm Avenue - North-south connector'
  ],
  events: [
    { name: 'Food & Wine Festival', date: 'Spring', location: 'City Center' },
    { name: 'Fourth of July Celebration', date: 'July 4th', location: 'CB Smith Park' },
    { name: 'Fall Festival', date: 'October', location: 'City Center' },
    { name: 'Holiday Tree Lighting', date: 'December', location: 'City Hall' },
    { name: 'Farmers Market', date: 'Saturdays', location: 'Shops at Pembroke Gardens' },
    { name: 'Concert Series', date: 'Monthly', location: 'CB Smith Park' }
  ],
  stats: {
    dailyImpressions: '75,000+',
    coverage: '35 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 26.0030, lng: -80.2241 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PembrokePinesAdvertisingPage() {
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