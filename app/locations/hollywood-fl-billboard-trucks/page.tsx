import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Hollywood',
  county: 'Broward County',
  state: 'Florida',
  population: '154K',
  description: 'Hollywood FL billboard trucks deliver dynamic advertising from the beach to downtown. Our mobile LED displays reach visitors at Hollywood Beach Broadwalk, Seminole Hard Rock Hotel & Casino, and throughout this vibrant coastal city. GPS-tracked billboard trucks ensure optimal coverage with eye-catching 4K displays that capture attention across diverse demographics.',
  landmarks: [
    'Hollywood Beach Broadwalk',
    'Seminole Hard Rock Hotel & Casino',
    'Downtown Hollywood',
    'ArtsPark at Young Circle',
    'Hollywood Beach Theater',
    'Anne Kolb Nature Center',
    'West Lake Park',
    'Gulfstream Park Racing & Casino',
    'Aventura Mall (nearby)',
    'Hollywood North Beach Park',
    'Memorial Regional Hospital',
    'Oakwood Plaza',
    'Radius at Hollywood',
    'TY Park',
    'Hollywood Hills Country Club'
  ],
  popularRoutes: [
    'Hollywood Boulevard - Main east-west corridor',
    'A1A (Ocean Drive) - Beachfront route',
    'Federal Highway (US-1) - Primary north-south',
    'Sheridan Street - Major thoroughfare',
    'Hallandale Beach Boulevard - Southern connector',
    'Stirling Road - Commercial corridor',
    'Hollywood Beach Boulevard - Beach access',
    'Young Circle - Downtown loop',
    'Pembroke Road - Northern boundary',
    'Dixie Highway - Parallel route'
  ],
  events: [
    { name: 'Hollywood Beach Latin Festival', date: 'August', location: 'Hollywood Beach' },
    { name: 'Hollywood Beach Candy Cane Parade', date: 'December', location: 'Hollywood Boulevard' },
    { name: 'Downtown Hollywood Mural Project', date: 'Year-round', location: 'Downtown' },
    { name: 'Food Truck Mondays', date: 'Weekly', location: 'ArtsPark' },
    { name: 'Hollywood Beach Concerts', date: 'Monthly', location: 'Beach Theater' },
    { name: 'St. Patrick\'s Day Parade', date: 'March', location: 'Downtown' }
  ],
  stats: {
    dailyImpressions: '80,000+',
    coverage: '30 sq mi',
    businessesServed: '225+'
  },
  coordinates: { lat: 26.0112, lng: -80.1495 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function HollywoodFLBillboardTrucksPage() {
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