import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Golden Beach',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/golden-beach-mobile-advertising/',
  population: '900',
  description: 'Golden Beach mobile advertising reaches one of Florida\'s most exclusive gated communities. Our discreet LED displays target ultra-wealthy residents in this private town where median home values exceed $3 million. Access this elite demographic through strategic placement along A1A and during luxury events, connecting premium brands with discerning consumers who value privacy and excellence.',
  landmarks: [
    'Golden Beach Private Town Hall',
    'Exclusive Beachfront Estates',
    'Private Beach Club',
    'Golden Beach Marina',
    'The Strand Private Development',
    'Ocean Boulevard Luxury Corridor',
    'Tweddle Park',
    'Golden Beach Police Station',
    'Private Tennis Courts',
    'Massini Avenue Estates',
    'Center Island Waterfront Homes',
    'Parkview Point',
    'North Beach Pavilion',
    'South Beach Access',
    'Golden Beach Bridge'
  ],
  popularRoutes: [
    'Collins Avenue (A1A) - Exclusive oceanfront boulevard',
    'Golden Beach Bridge - Private town entrance',
    'Ocean Boulevard - Billionaire beachfront estates',
    'Massini Avenue - Waterfront luxury homes',
    'Center Island Drive - Private island estates',
    'The Strand - Ultra-luxury development',
    'Terracina Avenue - Gated community access',
    'South Island Drive - Exclusive residential',
    'North Ocean Drive - Private beach access',
    'Parkview Point Circle - Elite neighborhood'
  ],
  events: [
    { name: 'Private Estate Sales & Showings', date: 'By Appointment', location: 'Luxury Properties' },
    { name: 'Exclusive Charity Galas', date: 'Seasonal', location: 'Private Estates' },
    { name: 'Luxury Auto Showcases', date: 'Quarterly', location: 'Select Venues' },
    { name: 'Private Art Collections', date: 'By Invitation', location: 'Estate Galleries' },
    { name: 'Yacht Club Gatherings', date: 'Monthly', location: 'Private Marina' },
    { name: 'High-Net-Worth Networking', date: 'Year-round', location: 'Exclusive Venues' }
  ],
  stats: {
    dailyImpressions: '25,000+',
    coverage: '1.8 sq mi',
    businessesServed: '50+ Premium Brands'
  },
  coordinates: { lat: 25.9651, lng: -80.1222 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function GoldenBeachMobileAdvertisingPage() {
  const structuredData = locationStructuredData(locationData)

  return (
    <>
      <Script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
            <main>
        <LocationPageTemplate {...locationData} />
      </main>
                </>
  )
}