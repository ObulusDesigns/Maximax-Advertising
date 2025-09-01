import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Wilton Manors',
  county: 'Broward County',
  state: 'Florida',
  population: '12K',
  description: 'Inclusive mobile billboard advertising in Wilton Manors, South Florida\'s most LGBTQ-friendly city. Our LED trucks reach diverse communities along Wilton Drive\'s vibrant entertainment district. Perfect for businesses targeting progressive audiences, nightlife venues, and community events with GPS-tracked precision.',
  landmarks: [
    'Wilton Drive Entertainment District',
    'Richardson Historic Park',
    'Island City Park Preserve',
    'Colohatchee Park',
    'Hagen Park',
    'Wilton Manors City Hall',
    'The Manor Complex',
    'Pride Center',
    'Stonewall National Museum',
    'World AIDS Museum',
    'Eucalyptus Gardens',
    'Five Points Intersection'
  ],
  popularRoutes: [
    'Wilton Drive (Main Entertainment)',
    'Oakland Park Boulevard',
    'Andrews Avenue',
    'Powerline Road',
    'NE 26th Street',
    'Dixie Highway',
    'Federal Highway (US-1)',
    'NE 6th Avenue'
  ],
  events: [
    { name: 'Wilton Manors Stonewall Pride', date: 'June', location: 'Wilton Drive' },
    { name: 'Wicked Manors Halloween', date: 'October', location: 'Entertainment District' },
    { name: 'Taste of the Island', date: 'April', location: 'Wilton Drive' },
    { name: 'Holiday Lighting', date: 'December', location: 'City Hall' }
  ],
  stats: {
    dailyImpressions: '25,000+',
    coverage: '2 sq mi',
    businessesServed: '150+'
  },
  coordinates: { lat: 26.1605, lng: -80.1389 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WiltonManorsPage() {
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