import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Highland Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/highland-beach-advertising/',
  population: '4K',
  description: 'Highland Beach advertising reaches an exclusive coastal enclave between Boca Raton and Delray Beach where privacy meets luxury. Our sophisticated mobile LED displays target ultra-wealthy retirees, seasonal residents, and beachfront estate owners in this prestigious community. Connect with discerning high-net-worth individuals who value exclusivity, oceanfront living, and the finest amenities South Florida offers.',
  landmarks: [
    'Highland Beach Club',
    'Toscana Tower North & South',
    'Parker Highland',
    'Villa Costa',
    'The Bel Lido',
    'Highlands Place',
    'Ocean Grande',
    'Delray Sands Resort',
    'Highland Beach Town Hall',
    'Highland Beach Library',
    'Milani Park',
    'Private Beach Access Points',
    'A1A Oceanfront Estates',
    'Intracoastal Waterway Marina',
    'Spanish River Park (nearby)'
  ],
  popularRoutes: [
    'State Road A1A - Millionaire\'s mile oceanfront',
    'Highland Beach Drive - Town center',
    'Ocean Boulevard - Beachfront luxury corridor',
    'Bel Air Drive - Exclusive residential',
    'South Ocean Boulevard - Estate properties',
    'North Ocean Boulevard - Premium condos',
    'Intracoastal waterway - Yacht access',
    'Spanish River Boulevard - Regional connector',
    'Yamato Road Bridge - Northern access',
    'Linton Boulevard Bridge - Southern gateway'
  ],
  events: [
    { name: 'Highland Beach Holiday Boat Parade', date: 'December', location: 'Intracoastal' },
    { name: 'Private Beach Club Events', date: 'Members Only', location: 'Beach Club' },
    { name: 'Luxury Real Estate Showcases', date: 'Seasonal', location: 'Oceanfront Properties' },
    { name: 'Yacht Club Gatherings', date: 'Monthly', location: 'Marina' },
    { name: 'Town Commission Meetings', date: 'Monthly', location: 'Town Hall' },
    { name: 'Seasonal Resident Welcome Events', date: 'November-April', location: 'Various Venues' }
  ],
  stats: {
    dailyImpressions: '35,000+',
    coverage: '3.4 sq mi',
    businessesServed: '80+ Luxury Properties'
  },
  coordinates: { lat: 26.3995, lng: -80.0656 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function HighlandBeachAdvertisingPage() {
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