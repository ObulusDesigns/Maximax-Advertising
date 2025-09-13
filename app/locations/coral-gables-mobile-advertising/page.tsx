import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Coral Gables',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/coral-gables-mobile-advertising/',
  population: '51K',
  description: 'Coral Gables mobile advertising reaches affluent audiences in "The City Beautiful". Our LED billboard trucks target Miracle Mile shoppers, University of Miami students, and business professionals throughout this prestigious community. Premium mobile billboards deliver your message through tree-lined streets and historic neighborhoods with sophisticated 4K displays.',
  landmarks: [
    'Miracle Mile',
    'University of Miami',
    'Venetian Pool',
    'Fairchild Tropical Garden',
    'Biltmore Hotel',
    'Coral Gables Museum',
    'Matheson Hammock Park',
    'Merrick Park Shopping',
    'Downtown Coral Gables',
    'Granada Golf Course',
    'Doctors Hospital',
    'Books & Books',
    'Actors Playhouse',
    'Giralda Plaza',
    'Ponce Circle Park'
  ],
  popularRoutes: [
    'Miracle Mile (Coral Way to Giralda) - Premier shopping district',
    'US-1 (South Dixie Highway) - Major north-south corridor',
    'Coral Way (SW 24th Street) - Main east-west thoroughfare',
    'Bird Road (SW 40th Street) - High-traffic commercial route',
    'Ponce de Leon Boulevard - Central business corridor',
    'Le Jeune Road - North-south connector',
    'Granada Boulevard - Residential and commercial mix',
    'Alhambra Circle - Historic business loop',
    'University Drive - Campus perimeter route',
    'Red Road (SW 57th Avenue) - Western boundary route'
  ],
  events: [
    { name: 'Coral Gables Art Cinema Series', date: 'Monthly', location: 'Aragon Avenue' },
    { name: 'Gallery Night', date: 'First Friday Monthly', location: 'Ponce de Leon' },
    { name: 'Farmers Market', date: 'Saturdays', location: 'City Hall' },
    { name: 'Books & Books Author Events', date: 'Weekly', location: 'Aragon Avenue' },
    { name: 'University of Miami Football Season', date: 'Fall', location: 'Campus Area' },
    { name: 'Coral Gables Food Tour', date: 'Monthly', location: 'Downtown District' }
  ],
  stats: {
    dailyImpressions: '65,000+',
    coverage: '37.2 sq mi',
    businessesServed: '175+'
  },
  coordinates: { lat: 25.7215, lng: -80.2684 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CoralGablesMobileAdvertisingPage() {
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