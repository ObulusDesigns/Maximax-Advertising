import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Belle Glade',
  county: 'Palm Beach County',
  state: 'Florida',
  canonicalPath: '/locations/belle-glade-billboard-advertising/',
  population: '19,719',
  description: 'Belle Glade billboard advertising connects with agricultural communities in the heart of Palm Beach County\'s Glades region. Our mobile LED displays reach residents along Main Street, target workers in the sugar industry, and engage families throughout this historic city. GPS-tracked billboard trucks deliver strategic visibility from downtown to Lake Okeechobee with dynamic 4K technology.',
  landmarks: [
    'Lake Okeechobee',
    'Torry Island',
    'Belle Glade Marina',
    'Pioneer Park',
    'Glades Central High School',
    'Lake Shore Middle School',
    'Belle Glade Library',
    'City Hall',
    'Everglades Agricultural Area',
    'Belle Glade Golf Course',
    'Lawrence E. Will Museum',
    'Glades Regional Medical Center',
    'Sugar Cane Growers Cooperative',
    'Belle Glade Housing Authority',
    'Tom Watson Park'
  ],
  popularRoutes: [
    'Main Street (US 27/SR 80) - Primary corridor',
    'State Road 715 - Lake access route',
    'Canal Street - Downtown connector',
    'Avenue A - Residential arterial',
    'MLK Jr Boulevard - Central avenue',
    'SW 2nd Street - Business district',
    'NW Avenue L - Northern route',
    'SE 1st Street - Eastern corridor',
    'State Road 717 - Southern connector',
    'Hooker Highway - Industrial area'
  ],
  events: [
    { name: 'Black Gold Jubilee', date: 'November', location: 'Pioneer Park' },
    { name: 'Harvest Festival', date: 'Spring', location: 'Downtown' },
    { name: 'July 4th Celebration', date: 'July', location: 'Pioneer Park' },
    { name: 'Christmas Parade', date: 'December', location: 'Main Street' },
    { name: 'MLK Day Parade', date: 'January', location: 'MLK Boulevard' },
    { name: 'Community Day', date: 'Quarterly', location: 'City Hall' }
  ],
  stats: {
    dailyImpressions: '25,000+',
    coverage: '4.7 sq mi',
    businessesServed: '85+'
  },
  coordinates: { lat: 26.6845, lng: -80.6676 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function BelleGladeBillboardAdvertisingPage() {
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