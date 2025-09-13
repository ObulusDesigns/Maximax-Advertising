import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Jupiter',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/jupiter-billboard-advertising/',
  population: '65K',
  description: 'Jupiter billboard advertising reaches affluent coastal communities, world-class golf resorts, and luxury waterfront estates. Our mobile LED displays target wealthy retirees, successful professionals, and seasonal residents throughout this premier Palm Beach County destination. Connect with high-net-worth individuals at championship golf courses, exclusive marinas, and upscale shopping districts.',
  landmarks: [
    'Jupiter Hills Club',
    'The Bear\'s Club (Jack Nicklaus)',
    'Trump National Golf Club Jupiter',
    'Admirals Cove',
    'Jonathan\'s Landing Golf Club',
    'Jupiter Inlet Lighthouse',
    'Harbourside Place',
    'Abacoa Town Center',
    'Jupiter Medical Center',
    'Roger Dean Chevrolet Stadium',
    'Maltz Jupiter Theatre',
    'Riverbend Park',
    'Carlin Park Beach',
    'Jupiter Yacht Club',
    'The Gardens Mall (nearby)'
  ],
  popularRoutes: [
    'US Highway 1 - Coastal luxury corridor',
    'Indiantown Road - Main east-west artery',
    'A1A/Ocean Boulevard - Beachfront millionaire row',
    'Donald Ross Road - Golf club district',
    'Center Street - Downtown core',
    'Tequesta Drive - Waterfront shopping',
    'Military Trail - Western communities',
    'Jupiter Farms Road - Equestrian estates',
    'Island Way - Exclusive Jupiter Island access',
    'Alternate A1A - Scenic coastal route'
  ],
  events: [
    { name: 'Jupiter Seafood Festival', date: 'February', location: 'Waterfront' },
    { name: 'PGA Tour Events', date: 'February-March', location: 'PGA National' },
    { name: 'ArtiGras Fine Arts Festival', date: 'February', location: 'Abacoa' },
    { name: 'Jupiter Jubilee', date: 'January', location: 'Town Center' },
    { name: 'Yacht Club Regattas', date: 'Seasonal', location: 'Jupiter Yacht Club' },
    { name: 'Lighthouse Tours & Events', date: 'Year-round', location: 'Jupiter Lighthouse' }
  ],
  stats: {
    dailyImpressions: '95,000+',
    coverage: '69 sq mi',
    businessesServed: '300+ Premium Brands'
  },
  coordinates: { lat: 26.9342, lng: -80.0942 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function JupiterBillboardAdvertisingPage() {
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