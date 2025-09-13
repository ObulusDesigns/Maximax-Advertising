import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Fisher Island',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/fisher-island-advertising/',
  population: '400',
  description: 'Fisher Island advertising reaches America\'s wealthiest ZIP code 33109, accessible only by ferry or yacht. Our exclusive mobile advertising targets ultra-high-net-worth residents where the average income exceeds $2.5 million. Connect with billionaires, celebrities, and international elite through strategic campaigns at ferry terminals, luxury marinas, and during exclusive island events in this ultimate private paradise.',
  landmarks: [
    'Fisher Island Club',
    'Palazzo Del Sol',
    'Palazzo Della Luna',
    'Fisher Island Hotel & Resort',
    'Vanderbilt Mansion',
    'Links Golf Course',
    'Spa Internazionale',
    'Fisher Island Marina',
    'Private Beach Club',
    'Tennis Center & Pro Shop',
    'Garwood Lounge',
    'La Trattoria Restaurant',
    'Island Market',
    'Seaside Village',
    'Fisher Island Day School'
  ],
  popularRoutes: [
    'MacArthur Causeway Ferry Terminal - Island gateway',
    'Government Cut Marina - Yacht access point',
    'Fisher Island Drive - Main island road',
    'Ocean Drive - Beachfront luxury corridor',
    'Bay View Drive - Waterfront estates',
    'Fisher Island Ferry Route - Water crossing',
    'Marina Village - Yacht club district',
    'Beach Club Drive - Exclusive beach access',
    'Golf Course Perimeter - Links estates',
    'Seaside Village Center - Island hub'
  ],
  events: [
    { name: 'Fisher Island Concours d\'Elegance', date: 'Private Events', location: 'Island Club' },
    { name: 'Ultra-Luxury Real Estate Showcases', date: 'By Invitation', location: 'Palazzo Properties' },
    { name: 'Private Art Basel Events', date: 'December', location: 'Select Estates' },
    { name: 'International Yacht Gatherings', date: 'Year-round', location: 'Marina' },
    { name: 'Members-Only Galas', date: 'Seasonal', location: 'Fisher Island Club' },
    { name: 'Celebrity Charity Events', date: 'Quarterly', location: 'Private Venues' }
  ],
  stats: {
    dailyImpressions: '20,000+',
    coverage: '0.34 sq mi',
    businessesServed: '75+ Ultra-Luxury Brands'
  },
  coordinates: { lat: 25.7614, lng: -80.1444 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function FisherIslandAdvertisingPage() {
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