import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Cooper City',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/cooper-city-billboard-advertising/',
  population: '35,970',
  description: 'Cooper City billboard advertising delivers family-focused campaigns throughout this suburban Broward community. Our mobile LED displays reach residents along Sheridan Street, target parents near top-rated schools, and connect with shoppers at local centers. GPS-tracked billboard trucks provide strategic visibility across planned neighborhoods from Country Glen to Monterra with dynamic 4K technology.',
  landmarks: [
    'Brian Piccolo Park',
    'Cooper City Sports Complex',
    'Tree Tops Park',
    'Cooper City High School',
    'Pioneer Middle School',
    'Embassy Lakes Elementary',
    'Cooper City Town Center',
    'Flamingo Gardens',
    'Country Glen',
    'Monterra',
    'Rock Creek',
    'Copper City Church',
    'Cooper City Library',
    'Bill Lips Park',
    'Flamingo West Shopping Center'
  ],
  popularRoutes: [
    'Sheridan Street - Main east-west corridor',
    'Griffin Road - Southern boundary',
    'Stirling Road - Northern connector',
    'Pine Island Road - Eastern arterial',
    'Hiatus Road - Western boundary',
    'Palm Avenue - Central route',
    'SW 90th Avenue - Residential connector',
    'Flamingo Road - North-south arterial',
    'SW 100th Avenue - Neighborhood access',
    'Cooper City Parkway - Local connector'
  ],
  events: [
    { name: 'Founder\'s Day Festival', date: 'March', location: 'Sports Complex' },
    { name: 'July 4th Celebration', date: 'July', location: 'Brian Piccolo Park' },
    { name: 'Fall Festival', date: 'October', location: 'Town Center' },
    { name: 'Holiday Tree Lighting', date: 'December', location: 'City Hall' },
    { name: 'Cooper City 5K', date: 'Spring', location: 'Sports Complex' },
    { name: 'Food Truck Friday', date: 'Monthly', location: 'Town Center' }
  ],
  stats: {
    dailyImpressions: '40,000+',
    coverage: '8.3 sq mi',
    businessesServed: '125+'
  },
  coordinates: { lat: 26.0573, lng: -80.2717 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CooperCityBillboardAdvertisingPage() {
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