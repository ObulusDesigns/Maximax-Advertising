import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Sunny Isles Beach',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '22K',
  description: 'Premium LED billboard trucks in Sunny Isles Beach, Florida\'s Riviera. Our mobile billboards reach luxury condo residents, international tourists, and beachgoers along Collins Avenue. Target high-net-worth individuals at Aventura Mall, upscale restaurants, and beachfront hotels with GPS-tracked advertising campaigns.',
  landmarks: [
    'Collins Avenue Beachfront',
    'Sunny Isles Beach Pier',
    'Aventura Mall (nearby)',
    'Heritage Park',
    'Town Center Park',
    'Trump International Beach Resort',
    'Acqualina Resort & Spa',
    'Porsche Design Tower',
    'Jade Signature',
    'The Mansions at Acqualina',
    'Samson Oceanfront Park',
    'Gateway Park'
  ],
  popularRoutes: [
    'Collins Avenue (A1A Beachfront)',
    'Sunny Isles Boulevard (SR 826)',
    'Ocean Boulevard',
    'Atlantic Boulevard',
    'William Lehman Causeway',
    '163rd Street (North Miami Beach)',
    'Biscayne Boulevard Access',
    'Golden Beach Connection'
  ],
  events: [
    { name: 'Jazz Fest', date: 'January', location: 'Heritage Park' },
    { name: 'International Music Festival', date: 'March', location: 'Town Center' },
    { name: 'Beach Cleanup Day', date: 'April', location: 'Beachfront' },
    { name: 'Holiday Festival', date: 'December', location: 'Gateway Park' }
  ],
  stats: {
    dailyImpressions: '40,000+',
    coverage: '4 sq mi',
    businessesServed: '150+'
  },
  coordinates: { lat: 25.9429, lng: -80.1234 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function SunnyIslesBeachPage() {
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