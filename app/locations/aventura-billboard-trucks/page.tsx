import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Aventura',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '40K',
  description: 'Aventura billboard trucks deliver premium advertising to one of South Florida\'s most affluent communities. Our mobile LED displays target luxury shoppers at Aventura Mall, reach waterfront residents, and connect with business professionals. GPS-tracked billboard trucks ensure maximum visibility throughout this upscale destination with vibrant 4K displays.',
  landmarks: [
    'Aventura Mall',
    'Turnberry Isle Resort',
    'Aventura Arts & Cultural Center',
    'Founders Park',
    'Waterways Marina',
    'Aventura Hospital',
    'Gulfstream Park',
    'JW Marriott Turnberry',
    'Don Soffer Trail',
    'Aventura Circle',
    'Williams Island',
    'Mystic Pointe',
    'The Shops at Skylake',
    'Aventura Golf Club',
    'Waterways Shoppes'
  ],
  popularRoutes: [
    'Biscayne Boulevard (US-1) - Main commercial corridor',
    'Aventura Boulevard - Central business district',
    'Country Club Drive - Aventura Mall access',
    'NE 199th Street - East-west connector',
    'William Lehman Causeway - Waterfront route',
    'Ives Dairy Road - Northern boundary',
    'NE 203rd Street - Residential connector',
    'West Dixie Highway - Parallel corridor',
    'NE 207th Street - Mall perimeter route',
    'Yacht Club Way - Luxury residential area'
  ],
  events: [
    { name: 'Aventura Mall Events', date: 'Year-round', location: 'Aventura Mall' },
    { name: 'Arts & Culture Performances', date: 'Monthly', location: 'Cultural Center' },
    { name: 'Farmers Market', date: 'Sundays', location: 'Founders Park' },
    { name: 'Food & Wine Experience', date: 'Quarterly', location: 'Turnberry Resort' },
    { name: 'Boat Show', date: 'Spring', location: 'Waterways Marina' },
    { name: 'Holiday Festival', date: 'December', location: 'City Center' }
  ],
  stats: {
    dailyImpressions: '75,000+',
    coverage: '3.5 sq mi',
    businessesServed: '150+'
  },
  coordinates: { lat: 25.9563, lng: -80.1392 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function AventuraBillboardTrucksPage() {
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