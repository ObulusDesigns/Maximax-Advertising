import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Fort Lauderdale Beach',
  county: 'Broward County',
  state: 'Florida',
  population: '18K',
  description: 'Beachfront mobile billboard advertising on Fort Lauderdale Beach reaches millions of tourists, Spring Breakers, and beach-goers. Our LED trucks dominate A1A, beach bars, and hotels from Las Olas to Sunrise Boulevard. Perfect for hospitality, entertainment, and tourist-focused businesses.',
  landmarks: [
    'Fort Lauderdale Beach Park',
    'Las Olas Beach',
    'Beach Place',
    'Bonnet House Museum',
    'Hugh Taylor Birch State Park',
    'Fort Lauderdale Aquatic Complex',
    'DC Alexander Park',
    'Elbo Room',
    'W Fort Lauderdale',
    'Ritz-Carlton Fort Lauderdale',
    'Conrad Fort Lauderdale Beach',
    'Bahia Mar Marina'
  ],
  popularRoutes: [
    'A1A Fort Lauderdale Beach Boulevard',
    'Las Olas Boulevard (Beach Section)',
    'Sunrise Boulevard',
    'Seabreeze Boulevard',
    'Alhambra Street',
    'Terramar Street',
    'Vistamar Street',
    'Oakland Park Boulevard Beach'
  ],
  events: [
    { name: 'Spring Break', date: 'March', location: 'Beach Area' },
    { name: 'Fort Lauderdale Air Show', date: 'May', location: 'Beach' },
    { name: 'Great American Beach Party', date: 'May', location: 'Beach Park' },
    { name: 'Tortuga Music Festival', date: 'April', location: 'Beach Park' }
  ],
  stats: {
    dailyImpressions: '90,000+',
    coverage: '4 sq mi',
    businessesServed: '400+'
  },
  coordinates: { lat: 26.1175, lng: -80.1047 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function FortLauderdaleBeachPage() {
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