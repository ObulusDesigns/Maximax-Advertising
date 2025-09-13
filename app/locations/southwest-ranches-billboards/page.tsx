import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Southwest Ranches',
  county: 'Broward County',
  state: 'Florida',
  canonicalPath: '/locations/southwest-ranches-billboards/',
  population: '7K',
  description: 'Southwest Ranches billboard advertising reaches ultra-affluent equestrian estates and luxury ranch properties. Our mobile LED displays target wealthy horse owners, agricultural entrepreneurs, and families living on multi-acre estates in this exclusive rural community. Connect with high-net-worth individuals who value privacy, land ownership, and the equestrian lifestyle through strategic mobile advertising campaigns.',
  landmarks: [
    'Grande Oaks Golf Club',
    'Rolling Hills Golf Resort',
    'Sunshine Ranches Equestrian Park',
    'Peace Mound Park',
    'Country Estates Park',
    'Volunteer Park',
    'Southwest Ranches Town Hall',
    'Davie Ranch',
    'Green Meadows Farm',
    'Fox Trail Stables',
    'Elite Equestrian Center',
    'Archbishop McCarthy High School',
    'Somerset Academy',
    'Bergeron Rodeo Grounds',
    'Tree Tops Park (nearby)'
  ],
  popularRoutes: [
    'Griffin Road - Main east-west corridor',
    'Dykes Road - Central thoroughfare',
    'Flamingo Road - North-south connector',
    'Sheridan Street - Northern boundary',
    'Stirling Road - Commercial access',
    'Southwest 160th Avenue - Equestrian trail',
    'Bonaventure Boulevard - Residential estates',
    'Hancock Road - Rural luxury homes',
    'Southwest Ranches Boulevard - Town center',
    'Volunteer Road - Park and estates access'
  ],
  events: [
    { name: 'Southwest Ranches Country Fair', date: 'March', location: 'Town Hall' },
    { name: 'Equestrian Events & Shows', date: 'Year-round', location: 'Various Stables' },
    { name: 'Rodeo Championships', date: 'Seasonal', location: 'Bergeron Rodeo' },
    { name: 'Farm Tours', date: 'Monthly', location: 'Local Farms' },
    { name: 'Holiday Parade', date: 'December', location: 'Griffin Road' },
    { name: 'Founders Day Festival', date: 'June', location: 'Town Center' }
  ],
  stats: {
    dailyImpressions: '40,000+',
    coverage: '13 sq mi',
    businessesServed: '100+ Premium Properties'
  },
  coordinates: { lat: 26.0587, lng: -80.3317 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function SouthwestRanchesBillboardsPage() {
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