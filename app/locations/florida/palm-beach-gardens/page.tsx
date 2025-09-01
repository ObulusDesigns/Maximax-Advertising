import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Palm Beach Gardens',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '59K',
  description: 'Premium mobile billboard advertising in Palm Beach Gardens reaches upscale shoppers at Gardens Mall and PGA Boulevard businesses. Our LED trucks target luxury communities, golf clubs, and Downtown at the Gardens. GPS-tracked campaigns perfect for high-end brands and professional services in this affluent North County city.',
  landmarks: [
    'The Gardens Mall',
    'Downtown at the Gardens',
    'PGA National Resort',
    'Legacy Place',
    'Midtown Palm Beach Gardens',
    'Palm Beach Gardens Medical Center',
    'PGA Commons',
    'Alton Town Center',
    'BallenIsles Country Club',
    'Frenchman\'s Reserve',
    'Mirasol Country Club',
    'Eissey Campus Theatre'
  ],
  popularRoutes: [
    'PGA Boulevard (Main Commercial)',
    'Military Trail',
    'Northlake Boulevard',
    'Donald Ross Road',
    'Burns Road',
    'Hood Road',
    'Alternate A1A',
    'RCA Boulevard'
  ],
  events: [
    { name: 'Honda Classic', date: 'February', location: 'PGA National' },
    { name: 'Palm Beach Gardens GreenMarket', date: 'Sundays', location: 'City Hall' },
    { name: 'Concerts in the Gardens', date: 'Monthly', location: 'Downtown' },
    { name: 'Art in the Gardens', date: 'Quarterly', location: 'Downtown' }
  ],
  stats: {
    dailyImpressions: '52,000+',
    coverage: '24 sq mi',
    businessesServed: '400+'
  },
  coordinates: { lat: 26.8233, lng: -80.1387 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PalmBeachGardensPage() {
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