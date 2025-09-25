import { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'North Palm Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/north-palm-beach-billboard-trucks/',
  population: '13,090',
  description: 'North Palm Beach billboard trucks deliver premium advertising to this affluent waterfront village. Our mobile LED displays reach golfers at the North Palm Beach Country Club, target boaters at marinas, and connect with residents in upscale neighborhoods. GPS-tracked billboard vehicles ensure strategic visibility from Frigate\'s to Old Port Cove with vibrant 4K screens.',
  landmarks: [
    'North Palm Beach Country Club',
    'Jack Nicklaus Signature Golf Course',
    'North Palm Beach Marina',
    'Anchorage Park',
    'Osborne Park',
    'Lakeside Park',
    'John D. MacArthur Beach State Park',
    'Village Hall',
    'North Palm Beach Library',
    'Old Port Cove Marina',
    'Frigate\'s Waterfront Bar',
    'Crystal Cay',
    'Prosperity Harbor',
    'Village Golf Club',
    'Earman River'
  ],
  popularRoutes: [
    'US Highway 1 - Main commercial corridor',
    'Northlake Boulevard - Primary east-west route',
    'Prosperity Farms Road - Western arterial',
    'Lighthouse Drive - Marina access',
    'Yacht Club Drive - Waterfront route',
    'Shore Road - Residential connector',
    'Lakeside Drive - Scenic route',
    'Anchorage Drive - Park access',
    'Country Club Way - Golf course perimeter',
    'Ebbtide Drive - Coastal neighborhood'
  ],
  events: [
    { name: 'Holiday Boat Parade', date: 'December', location: 'Marina' },
    { name: 'July 4th Fireworks', date: 'July', location: 'Country Club' },
    { name: 'Fridays on the Green', date: 'Monthly', location: 'Golf Course' },
    { name: 'Village Green Market', date: 'Sundays', location: 'Anchorage Park' },
    { name: 'Art in the Park', date: 'Quarterly', location: 'Osborne Park' },
    { name: 'Spring Regatta', date: 'March', location: 'Marina' }
  ],
  stats: {
    dailyImpressions: '30,000+',
    coverage: '5.4 sq mi',
    businessesServed: '95+'
  },
  coordinates: { lat: 26.8173, lng: -80.0806 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function NorthPalmBeachBillboardTrucksPage() {
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