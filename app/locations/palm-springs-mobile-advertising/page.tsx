import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Palm Springs',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/palm-springs-mobile-advertising/',
  population: '27K',
  description: 'Palm Springs mobile billboard advertising reaches Palm Beach County\'s fastest-growing residential community. Our LED billboard trucks target Park Ridge Golf Course visitors, Wycliffe Golf & Country Club members, and families at John Prince Memorial Park. GPS-tracked campaigns deliver visibility throughout this family-oriented village, serving as the headquarters location for the School District of Palm Beach County with strategic access to educational and residential corridors.',
  landmarks: [
    'Park Ridge Golf Course',
    'Wycliffe Golf & Country Club',
    'John Prince Memorial Park',
    'Fulton-Holland Educational Services Center',
    'School District of Palm Beach County HQ',
    'Palm Springs Plaza',
    'Lake Clarke Shores',
    'Palm Springs Community Park',
    'Palm Springs Village Hall',
    'Palm Springs Golf Course',
    'Kirk Road Community Center',
    'Palm Springs Shopping Center',
    'Congress Park',
    'Palm Springs Library',
    'Forest Hill Community Park'
  ],
  popularRoutes: [
    'Congress Avenue - Primary north-south corridor',
    'Lake Worth Road - Main east-west route',
    '10th Avenue North - Central connector',
    'Kirk Road - Community route',
    'Forest Hill Boulevard - Southern boundary',
    'Military Trail - Western corridor',
    'Davis Road - Eastern access',
    'Coconut Road - Residential area',
    '6th Avenue South - Commercial district',
    'Lantana Road - Southern access'
  ],
  events: [
    { name: 'Golf Tournaments', date: 'Year-round', location: 'Park Ridge Golf Course' },
    { name: 'John Prince Park Festivals', date: 'Quarterly', location: 'John Prince Park' },
    { name: 'School District Events', date: 'Monthly', location: 'Fulton-Holland Center' },
    { name: 'Community Recreation Programs', date: 'Year-round', location: 'Community Park' },
    { name: 'Youth Sports Leagues', date: 'Seasonal', location: 'Various Parks' },
    { name: 'Family Movie Nights', date: 'Monthly', location: 'Village Park' }
  ],
  stats: {
    dailyImpressions: '52,000+',
    coverage: '3.7 sq mi',
    businessesServed: '215+'
  },
  coordinates: { lat: 26.6342, lng: -80.0961 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PalmSpringsMobileAdvertisingPage() {
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
