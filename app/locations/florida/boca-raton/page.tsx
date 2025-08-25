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
  population: '100K',
  description: 'Boca Raton billboards target affluent residents and businesses with mobile billboard advertising. Our LED billboard trucks reach Mizner Park to Town Center Mall, delivering premium Boca Raton billboard advertising throughout this upscale Palm Beach County city with GPS-tracked displays.',
  landmarks: [
    'Mizner Park',
    'Town Center at Boca Raton',
    'Florida Atlantic University',
    'Boca Raton Resort & Club',
    'Spanish River Beach',
    'Gumbo Limbo Nature Center',
    'Sugar Sand Park',
    'Boca Raton Museum of Art',
    'Royal Palm Place',
    'Boca Town Center',
    'Deerfield Beach Pier',
    'Red Reef Park'
  ],
  popularRoutes: [
    'Federal Highway (US-1)',
    'Glades Road (East-West)',
    'Palmetto Park Road',
    'Camino Real',
    'Spanish River Boulevard',
    'Yamato Road',
    'Military Trail',
    'A1A Ocean Boulevard'
  ],
  events: [
    { name: 'Boca Raton Concours d\'Elegance', date: 'February', location: 'Boca Raton Resort' },
    { name: 'Festival of the Arts BOCA', date: 'March', location: 'Mizner Park' },
    { name: 'Boca Raton Wine & Food Festival', date: 'November', location: 'Various Venues' }
  ],
  stats: {
    dailyImpressions: '40,000+',
    coverage: '31 sq mi',
    businessesServed: '120+'
  },
  coordinates: { lat: 26.3683, lng: -80.1289 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function BocaRatonPage() {
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