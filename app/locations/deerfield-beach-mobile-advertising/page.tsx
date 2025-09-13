import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Deerfield Beach',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/deerfield-beach-mobile-advertising/',
  population: '87K',
  description: 'Deerfield Beach mobile billboards deliver impactful advertising from the pristine beaches to bustling commercial districts. Our LED billboard trucks navigate A1A, Hillsboro Boulevard, and Powerline Road, reaching beach-goers, residents, and business professionals. With brilliant 4K displays and GPS tracking, connect with diverse audiences throughout this vibrant coastal Broward community.',
  landmarks: [
    'Deerfield Beach Pier',
    'Deerfield Beach Boardwalk',
    'Hillsboro Boulevard',
    'Powerline Road',
    'Federal Highway (US-1)',
    'Ocean Way (A1A)',
    'Quiet Waters Park',
    'Deerfield Island Park',
    'JM Krebs Park',
    'Sullivan Park',
    'The Cove Shopping Center',
    'Hillsboro Mile',
    'Deerfield Beach Arboretum',
    'Pioneer Park',
    'Westside Regional Park'
  ],
  popularRoutes: [
    'Hillsboro Boulevard - Main east-west corridor',
    'Federal Highway (US-1) - Primary north-south route',
    'Powerline Road - Western commercial arterial',
    'Ocean Way (A1A) - Beachfront scenic drive',
    'SW 10th Street - Central connector',
    'Military Trail - Western boundary route',
    'Sample Road - Northern commercial strip',
    'Dixie Highway - Parallel business route',
    'SE 10th Street - Beach access road',
    'Century Boulevard - Industrial corridor'
  ],
  events: [
    { name: 'Festival of the Arts', date: 'January', location: 'Pioneer Park' },
    { name: 'Beach Wine & Food Festival', date: 'April', location: 'Beach Pavilion' },
    { name: 'Mango Festival', date: 'July', location: 'Quiet Waters Park' },
    { name: 'Founders Day Festival', date: 'June', location: 'Sullivan Park' },
    { name: 'Holiday Boat Parade', date: 'December', location: 'Intracoastal Waterway' },
    { name: 'Music & Arts Series', date: 'Monthly', location: 'Main Beach' }
  ],
  stats: {
    dailyImpressions: '70,000+',
    coverage: '16.3 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 26.3184, lng: -80.0998 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function DeerfieldBeachMobileAdvertisingPage() {
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