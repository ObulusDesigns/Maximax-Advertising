import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Boca Raton',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '97K',
  description: 'Boca Raton billboard advertising targets one of Florida\'s most affluent markets. Our mobile LED displays reach luxury shoppers at Mizner Park and Town Center Mall, business executives in office parks, and beach-goers along A1A. GPS-tracked billboard trucks deliver sophisticated messaging throughout this upscale community with brilliant 4K technology.',
  landmarks: [
    'Mizner Park',
    'Town Center at Boca Raton',
    'Boca Raton Resort & Club',
    'Florida Atlantic University',
    'Gumbo Limbo Nature Center',
    'Red Reef Park',
    'South Beach Park',
    'Royal Palm Place',
    'Boca Raton Museum of Art',
    'Sugar Sand Park',
    'Spanish River Park',
    'Daggerwing Nature Center',
    'Boca Raton Regional Hospital',
    'Mizner Park Amphitheater',
    'Lynn University'
  ],
  popularRoutes: [
    'Federal Highway (US-1) - Main commercial corridor',
    'Glades Road - Major east-west route',
    'Palmetto Park Road - Central thoroughfare',
    'Yamato Road - Northern connector',
    'Spanish River Boulevard - Scenic route',
    'A1A (Ocean Boulevard) - Beachfront drive',
    'Military Trail - Western corridor',
    'Powerline Road - North-south connector',
    'Camino Real - Historic route',
    'Boca Raton Boulevard - Downtown access'
  ],
  events: [
    { name: 'Boca Raton Wine & Food Festival', date: 'February', location: 'Various Venues' },
    { name: 'Festival of the Arts BOCA', date: 'March', location: 'Mizner Park' },
    { name: 'Boca Raton Concours d\'Elegance', date: 'February', location: 'Boca Raton Resort' },
    { name: 'Downtown Boca Festival', date: 'October', location: 'Sanborn Square' },
    { name: 'Meet Me on the Promenade', date: 'Monthly', location: 'Sanborn Square' },
    { name: 'Green Market', date: 'Saturdays', location: 'Royal Palm Place' }
  ],
  stats: {
    dailyImpressions: '85,000+',
    coverage: '31 sq mi',
    businessesServed: '250+'
  },
  coordinates: { lat: 26.3683, lng: -80.1289 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function BocaRatonBillboardAdvertisingPage() {
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