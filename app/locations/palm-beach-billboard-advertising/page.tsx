import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Palm Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/palm-beach-billboard-advertising/',
  population: '9K',
  description: 'Palm Beach billboard advertising delivers premium brand messaging to America\'s wealthiest ZIP codes. Our sophisticated LED displays reach ultra-affluent residents and visitors along Worth Avenue\'s luxury boutiques, exclusive private clubs, historic estates, and pristine beaches. Target billionaires, CEOs, and international elite with precision mobile advertising in this legendary enclave of wealth and prestige.',
  landmarks: [
    'Worth Avenue - America\'s Premier Shopping Street',
    'The Breakers Palm Beach',
    'Four Seasons Resort Palm Beach',
    'The Colony Hotel',
    'Palm Beach Country Club',
    'Mar-a-Lago Club',
    'The Everglades Club',
    'Bath & Tennis Club',
    'Royal Poinciana Plaza',
    'Via Mizner & Via Parigi',
    'Flagler Museum',
    'Society of the Four Arts',
    'Norton Museum of Art',
    'Palm Beach International Boat Show',
    'Bradley Park'
  ],
  popularRoutes: [
    'Worth Avenue - Legendary luxury shopping district',
    'Ocean Boulevard (A1A) - Billionaire\'s Row oceanfront',
    'South County Road - Exclusive residential corridor',
    'Royal Poinciana Way - Premium shopping & dining',
    'Cocoanut Row - Historic luxury route',
    'Bradley Place - Elite shopping enclave',
    'Royal Palm Way - Bridge to mainland',
    'Peruvian Avenue - Gallery and boutique row',
    'Chilean Avenue - Waterfront dining district',
    'Brazilian Avenue - Resort and club access'
  ],
  events: [
    { name: 'Palm Beach International Boat Show', date: 'March', location: 'Flagler Drive' },
    { name: 'Palm Beach Food & Wine Festival', date: 'December', location: 'Four Seasons' },
    { name: 'Worth Avenue Art Festival', date: 'February', location: 'Worth Avenue' },
    { name: 'Palm Beach Jewelry, Art & Antique Show', date: 'February', location: 'Convention Center' },
    { name: 'International Polo Club Events', date: 'January-April', location: 'Wellington/Palm Beach' },
    { name: 'Preservation Foundation Events', date: 'Year-round', location: 'Historic Properties' }
  ],
  stats: {
    dailyImpressions: '55,000+',
    coverage: '10.4 sq mi',
    businessesServed: '200+ Luxury Establishments'
  },
  coordinates: { lat: 26.7056, lng: -80.0364 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PalmBeachBillboardAdvertisingPage() {
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