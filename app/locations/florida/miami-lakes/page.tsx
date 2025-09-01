import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miami Lakes',
  county: 'Miami-Dade County',
  state: 'Florida',
  population: '31K',
  description: 'Mobile billboard trucks in Miami Lakes reach affluent families and businesses in this master-planned community. Our LED displays target Main Street shops, corporate parks, and residential areas throughout Northwest Miami-Dade. GPS-tracked campaigns ensure visibility at Miami Lakes Educational Center and local shopping destinations.',
  landmarks: [
    'Main Street Miami Lakes',
    'Miami Lakes Town Center',
    'Miami Lakes Educational Center',
    'Shula\'s Athletic Club',
    'Miami Lakes Optimist Park',
    'Don Shula\'s Hotel',
    'Bob Graham Education Center',
    'Miami Lakes Shopping Plaza',
    'Our Lady of the Lakes Catholic Church',
    'Miami Lakes Middle School',
    'Royal Oaks Park',
    'Miami Lakes Business Park'
  ],
  popularRoutes: [
    'Main Street (Shopping & Dining)',
    'Miami Lakes Drive (East-West)',
    'NW 154th Street',
    'NW 67th Avenue',
    'Palmetto Expressway (SR 826) Access',
    'NW 57th Avenue (Red Road)',
    'Commerce Way (Business District)',
    'Miami Lakeway North & South'
  ],
  events: [
    { name: 'Miami Lakes Town Fair', date: 'March', location: 'Town Center' },
    { name: 'Veterans Day Parade', date: 'November', location: 'Main Street' },
    { name: 'Tree Lighting Ceremony', date: 'December', location: 'Town Center' },
    { name: 'Summer Concert Series', date: 'June-August', location: 'Optimist Park' }
  ],
  stats: {
    dailyImpressions: '35,000+',
    coverage: '8 sq mi',
    businessesServed: '200+'
  },
  coordinates: { lat: 25.9086, lng: -80.3086 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiamiLakesPage() {
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