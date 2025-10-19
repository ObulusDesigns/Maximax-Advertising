import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Hallandale Beach',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/hallandale-beach-billboard-advertising/',
  population: '42K',
  description: 'Hallandale Beach billboard advertising dominates Broward County\'s luxury entertainment destination, home to Gulfstream Park and the 110-foot Pegasus statue. Our LED billboard trucks target horse racing fans, casino visitors at Gulfstream Park and Big Easy Casino, shoppers at The Village, and beachgoers at South City Beach Park. GPS-tracked 4K displays deliver premium visibility across this high-traffic corridor between Miami and Fort Lauderdale.',
  landmarks: [
    'Gulfstream Park (Racing & Casino)',
    'The Village at Gulfstream Park',
    'Big Easy Casino',
    '110-ft Pegasus Statue',
    'Hallandale Beach Boulevard',
    'South City Beach Park',
    'Curci House (Villa Providence)',
    'Historic Hallandale Schoolhouse (1910)',
    'Three Islands Park',
    'Peter Bluesten Park',
    'Gulfstream Park Racing Track',
    'The Champagne Bar',
    'Hallandale Beach Cultural Center',
    'Diplomat Golf & Tennis Club',
    'Golden Isles Tennis Center'
  ],
  popularRoutes: [
    'Hallandale Beach Boulevard - Main corridor',
    'US-1 (Federal Highway) - Primary north-south route',
    'I-95 - Interstate access',
    'Diplomat Parkway - Entertainment district',
    'Pembroke Road - Northern boundary',
    'Three Islands Boulevard - Waterfront access',
    'Ocean Drive (A1A) - Beachfront route',
    'West Park Drive - Western area',
    'NE 14th Avenue - Central route',
    'Gulfstream Road - Racing venue access'
  ],
  events: [
    { name: 'Pegasus World Cup (Horse Racing)', date: 'January', location: 'Gulfstream Park' },
    { name: 'Florida Derby', date: 'March-April', location: 'Gulfstream Park' },
    { name: 'Championship & Sunshine Meet Stakes', date: 'Year-round', location: 'Gulfstream Park' },
    { name: 'World Classic Greyhound Racing', date: 'Year-round', location: 'Big Easy Casino' },
    { name: 'Gulfstream Park Shopping Events', date: 'Monthly', location: 'The Village' },
    { name: 'Beach Festival & Concerts', date: 'Seasonal', location: 'South City Beach Park' }
  ],
  stats: {
    dailyImpressions: '75,000+',
    coverage: '4.4 sq mi',
    businessesServed: '310+'
  },
  coordinates: { lat: 25.9812, lng: -80.1484 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function HallandaleBeachBillboardAdvertisingPage() {
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
