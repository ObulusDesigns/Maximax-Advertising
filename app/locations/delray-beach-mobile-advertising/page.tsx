import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Delray Beach',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/delray-beach-mobile-advertising/',
  population: '69K',
  description: 'Delray Beach mobile advertising reaches "Florida\'s Most Fun Small Town". Our LED billboard trucks navigate Atlantic Avenue\'s vibrant arts district, pristine beaches, and downtown entertainment areas. Target tourists, art enthusiasts, and affluent residents with GPS-tracked displays featuring crystal-clear 4K technology throughout this charming coastal community.',
  landmarks: [
    'Atlantic Avenue',
    'Delray Beach Public Beach',
    'Pineapple Grove Arts District',
    'Old School Square',
    'Morikami Museum and Gardens',
    'Wakodahatchee Wetlands',
    'Cornell Art Museum',
    'Delray Marketplace',
    'Silverball Museum',
    'Delray Beach Tennis Center',
    'Arts Garage',
    'Cason Cottage Museum',
    'Sandoway Discovery Center',
    'Delray Beach Golf Club',
    'Atlantic Dunes Park'
  ],
  popularRoutes: [
    'Atlantic Avenue - Main entertainment corridor',
    'A1A (Ocean Avenue) - Beachfront route',
    'Federal Highway (US-1) - Primary north-south',
    'Linton Boulevard - Major east-west route',
    'Congress Avenue - Western corridor',
    'Military Trail - North-south connector',
    'Swinton Avenue - Downtown thoroughfare',
    'Lake Ida Road - Residential connector',
    'George Bush Boulevard - Northern route',
    'Pineapple Grove Way - Arts district'
  ],
  events: [
    { name: 'Delray Beach Art Festival', date: 'January', location: 'Atlantic Avenue' },
    { name: 'Delray Affair', date: 'April', location: 'Downtown' },
    { name: 'Garlic Fest', date: 'February', location: 'Old School Square' },
    { name: 'On The Ave', date: 'First Fridays', location: 'Atlantic Avenue' },
    { name: 'GreenMarket', date: 'Saturdays', location: 'Old School Square' },
    { name: 'First Fridays Art Walk', date: 'Monthly', location: 'Pineapple Grove' }
  ],
  stats: {
    dailyImpressions: '65,000+',
    coverage: '16 sq mi',
    businessesServed: '175+'
  },
  coordinates: { lat: 26.4615, lng: -80.0728 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function DelrayBeachMobileAdvertisingPage() {
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