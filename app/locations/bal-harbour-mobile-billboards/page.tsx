import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Bal Harbour',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/bal-harbour-mobile-billboards/',
  population: '3K',
  description: 'Bal Harbour mobile billboard advertising reaches the pinnacle of luxury retail and ultra-high-net-worth residents. Our premium LED displays target affluent shoppers at Bal Harbour Shops featuring Chanel, Gucci, and Prada, exclusive oceanfront condominiums, and sophisticated beachgoers. Connect with Florida\'s most discerning consumers through strategic mobile advertising in this world-renowned luxury destination.',
  landmarks: [
    'Bal Harbour Shops - Luxury Retail Paradise',
    'St. Regis Bal Harbour Resort',
    'Four Seasons Hotel at The Surf Club',
    'Ritz-Carlton Bal Harbour',
    'One Bal Harbour Resort & Spa',
    'Oceana Bal Harbour',
    'Rivage Bal Harbour',
    'Majestic Tower',
    'Bal Harbour Village Hall',
    'Haulover Beach Park',
    'Bal Harbour Beach Path',
    'Collins Avenue Luxury Corridor',
    'Kane Concourse Shopping',
    'Harbour House',
    'Sea View Hotel'
  ],
  popularRoutes: [
    'Collins Avenue (A1A) - Ultra-luxury hotel & condo corridor',
    'Bal Harbour Shops Circuit - Premium retail destination',
    'Kane Concourse (96th Street) - Village center',
    'Broad Causeway - Gateway from mainland',
    'Haulover Park Drive - Beach and marina access',
    'Bay Harbor Islands Bridge - Exclusive island connection',
    'Indian Creek Drive - Waterfront luxury homes',
    'Surfside Bridge - Southern luxury corridor',
    'North Bay Road - Elite residential route',
    '96th Street - Shopping and dining district'
  ],
  events: [
    { name: 'Art Basel Miami Beach VIP Events', date: 'December', location: 'Various Luxury Venues' },
    { name: 'Bal Harbour Shops Fashion Shows', date: 'Seasonal', location: 'Bal Harbour Shops' },
    { name: 'Luxury Brand Launches', date: 'Year-round', location: 'Bal Harbour Shops' },
    { name: 'Private Yacht Shows', date: 'February & November', location: 'Haulover Marina' },
    { name: 'Exclusive Gallery Openings', date: 'Monthly', location: 'Village Center' },
    { name: 'High-End Real Estate Showcases', date: 'Quarterly', location: 'Luxury Properties' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '1.5 sq mi',
    businessesServed: '100+ Luxury Brands'
  },
  coordinates: { lat: 25.8881, lng: -80.1267 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function BalHarbourMobileBillboardsPage() {
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