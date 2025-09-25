import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Miami Shores',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/miami-shores-mobile-billboards/',
  population: '11,567',
  description: 'Miami Shores mobile billboards deliver premium advertising throughout this charming village known for its tree-lined streets and historic architecture. Our LED billboard trucks reach affluent residents along Biscayne Boulevard, target families near Barry University, and connect with visitors at local boutiques. GPS-tracked displays ensure strategic visibility across this picturesque community with vibrant 4K screens.',
  landmarks: [
    'Barry University',
    'Miami Shores Country Club',
    'Miami Shores Aquatic Center',
    'Miami Shores Community Center',
    'Brockway Memorial Library',
    'Downtown Miami Shores',
    'Recreation Department Fields',
    'Miami Shores Presbyterian Church',
    'St. Rose of Lima Catholic School',
    'Miami Shores Elementary',
    'Grand Concourse',
    'Miami Shores Village Hall',
    'Bayfront Park',
    'Miami Shores Golf Course',
    'The Shores Theatre'
  ],
  popularRoutes: [
    'Biscayne Boulevard (US-1) - Main commercial corridor',
    'NE 2nd Avenue - Village main street',
    'NE 6th Avenue - Residential arterial',
    'NE 96th Street - Southern gateway',
    'NE 103rd Street - Central crossing',
    'NE 91st Street - Barry University access',
    'NE 105th Street - Northern boundary',
    'Grand Concourse - Historic boulevard',
    'Park Drive - Waterfront route',
    'NE 95th Street - School zone corridor'
  ],
  events: [
    { name: 'Green Day Festival', date: 'March', location: 'Community Center' },
    { name: 'July 4th Celebration', date: 'July', location: 'Recreation Fields' },
    { name: 'Art in the Shores', date: 'Quarterly', location: 'Downtown' },
    { name: 'Holiday Tree Lighting', date: 'December', location: 'Village Hall' },
    { name: 'Farmers Market', date: 'Saturdays', location: 'Downtown' },
    { name: 'Music in the Park', date: 'Monthly', location: 'Bayfront Park' }
  ],
  stats: {
    dailyImpressions: '35,000+',
    coverage: '2.5 sq mi',
    businessesServed: '85+'
  },
  coordinates: { lat: 25.8634, lng: -80.1831 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function MiamiShoresMobileBillboardsPage() {
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