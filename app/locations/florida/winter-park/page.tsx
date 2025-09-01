import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Winter Park',
  county: 'Orange County',
  state: 'Florida',
  population: '30K',
  description: 'Upscale mobile billboard advertising in Winter Park reaches affluent shoppers on Park Avenue and students at Rollins College. Our LED trucks provide sophisticated advertising solutions for luxury brands, boutiques, and professional services throughout this charming Central Florida city known for its museums, shopping, and dining.',
  landmarks: [
    'Park Avenue Shopping District',
    'Rollins College',
    'Winter Park Village',
    'Charles Hosmer Morse Museum',
    'Central Park',
    'Hannibal Square',
    'Albin Polasek Museum',
    'Winter Park Farmers Market',
    'Mead Botanical Garden',
    'Winter Park Country Club',
    'Full Sail University',
    'AdventHealth Winter Park'
  ],
  popularRoutes: [
    'Park Avenue (Shopping & Dining)',
    'Fairbanks Avenue (East-West Corridor)',
    'Aloma Avenue (SR 426)',
    'Lee Road (Business District)',
    'Orlando Avenue (US 17-92)',
    'Morse Boulevard',
    'Webster Avenue (Rollins Area)',
    'New York Avenue'
  ],
  events: [
    { name: 'Winter Park Sidewalk Art Festival', date: 'March', location: 'Park Avenue' },
    { name: 'Winter Park Concours', date: 'October', location: 'Park Avenue' },
    { name: 'Ye Olde Hometown Christmas', date: 'December', location: 'Central Park' },
    { name: 'Wine & Dine on Park', date: 'Monthly', location: 'Park Avenue' }
  ],
  stats: {
    dailyImpressions: '45,000+',
    coverage: '15 sq mi',
    businessesServed: '150+'
  },
  coordinates: { lat: 28.5999, lng: -81.3393 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WinterParkPage() {
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