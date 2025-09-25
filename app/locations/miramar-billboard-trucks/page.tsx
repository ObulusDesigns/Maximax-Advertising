import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miramar',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/miramar-billboard-trucks/',
  population: '142K',
  description: 'Miramar mobile billboards reach one of South Florida\'s most diverse and rapidly growing cities. Our LED billboard trucks cover Miramar Parkway, Red Road, and Flamingo Road corridors, connecting with families, professionals, and students. From the Miramar Cultural Center to Memorial Hospital, deliver your message with stunning 4K displays and GPS-tracked precision throughout this dynamic Broward community.',
  landmarks: [
    'Miramar Cultural Center',
    'Memorial Hospital Miramar',
    'Miramar Regional Park',
    'Miramar Town Center',
    'Silver Lakes',
    'Flamingo Road',
    'Miramar Parkway',
    'Red Road (SW 57th Ave)',
    'Ansin Sports Complex',
    'Vizcaya Park',
    'Shirley Branca Park',
    'Sunset Lakes',
    'Monarch Lakes',
    'Riviera Isles',
    'Country Club Ranches'
  ],
  popularRoutes: [
    'Miramar Parkway - Main east-west thoroughfare',
    'Red Road (SW 57th Ave) - Major north-south corridor',
    'Flamingo Road - Western arterial route',
    'Pembroke Road - Northern boundary',
    'Hiatus Road - Central connector',
    'SW 172nd Avenue - Residential arterial',
    'Palm Avenue - Eastern corridor',
    'Dykes Road - Western boundary',
    'Bass Creek Road - Southern route',
    'University Drive - Commercial strip'
  ],
  events: [
    { name: 'Miramar Cultural Festival', date: 'October', location: 'Miramar Cultural Center' },
    { name: 'Hispanic Heritage Celebration', date: 'September', location: 'Town Center' },
    { name: 'Caribbean American Heritage Festival', date: 'June', location: 'Regional Park' },
    { name: 'Movies in the Park', date: 'Monthly', location: 'Miramar Regional Park' },
    { name: 'Holiday Snow Festival', date: 'December', location: 'Ansin Sports Complex' },
    { name: 'Unity in the Community', date: 'February', location: 'Shirley Branca Park' }
  ],
  stats: {
    dailyImpressions: '80,000+',
    coverage: '31.0 sq mi',
    businessesServed: '225+'
  },
  coordinates: { lat: 25.9877, lng: -80.2331 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiramarBillboardTrucksPage() {
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