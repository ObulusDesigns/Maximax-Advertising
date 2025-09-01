import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Midtown Miami',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '10K',
  description: 'Dynamic mobile billboard advertising in Midtown Miami reaches young professionals and urban dwellers. Our LED trucks target The Shops at Midtown, residential towers, and the Wynwood overflow crowd. GPS-tracked campaigns perfect for restaurants, lifestyle brands, and entertainment venues in this trendy neighborhood.',
  landmarks: [
    'The Shops at Midtown Miami',
    'Target Midtown',
    'Midtown Park',
    'HomeGoods & Marshalls',
    'Total Wine & More',
    'Pet Supermarket',
    'LA Fitness Midtown',
    'Sugarcane Raw Bar Grill',
    'Beaker & Gray',
    'Ring Power Tower',
    'Midtown Residences',
    'Hyde Midtown'
  ],
  popularRoutes: [
    'NE 36th Street (Main Shopping)',
    'Midtown Boulevard',
    'NE 29th Street',
    'North Miami Avenue',
    'NE 2nd Avenue',
    'Buena Vista Avenue',
    'NE 34th Street',
    'Wynwood Connection Routes'
  ],
  events: [
    { name: 'Midtown Miami Art Week', date: 'December', location: 'Throughout District' },
    { name: 'Food & Wine Events', date: 'Monthly', location: 'Various Restaurants' },
    { name: 'Midtown Park Events', date: 'Weekly', location: 'Midtown Park' },
    { name: 'Halloween Block Party', date: 'October', location: 'Shops at Midtown' }
  ],
  stats: {
    dailyImpressions: '55,000+',
    coverage: '1.5 sq mi',
    businessesServed: '175+'
  },
  coordinates: { lat: 25.8085, lng: -80.1938 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MidtownMiamiPage() {
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