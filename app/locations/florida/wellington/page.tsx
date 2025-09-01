import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Wellington',
  county: 'Palm Beach County',
  state: 'Florida',
  population: '65K',
  description: 'Specialized mobile billboard advertising in Wellington, the Winter Equestrian Capital of the World. Our LED trucks reach equestrian events, polo matches, and affluent residents. Target luxury markets at Mall at Wellington Green and International Polo Club with GPS-tracked campaigns tailored to this unique community.',
  landmarks: [
    'International Polo Club Palm Beach',
    'Wellington Environmental Preserve',
    'Mall at Wellington Green',
    'Palm Beach International Equestrian Center',
    'Wellington Amphitheater',
    'Village Park',
    'Scott\'s Place Park',
    'Peaceful Waters Sanctuary',
    'Wellington Town Center',
    'Wellington Medical Arts',
    'Olympia Shopping Center',
    'Wellington Marketplace'
  ],
  popularRoutes: [
    'Forest Hill Boulevard (Main East-West)',
    'Wellington Trace',
    'State Road 7 (441)',
    'Southern Boulevard',
    'Lake Worth Road',
    'Greenview Shores Boulevard',
    'South Shore Boulevard',
    'Pierson Road'
  ],
  events: [
    { name: 'Winter Equestrian Festival', date: 'Jan-March', location: 'Equestrian Center' },
    { name: 'International Polo Season', date: 'Jan-April', location: 'Polo Club' },
    { name: 'Wellington Bacon & Bourbon Fest', date: 'November', location: 'Amphitheater' },
    { name: 'Winterfest', date: 'December', location: 'Town Center' }
  ],
  stats: {
    dailyImpressions: '40,000+',
    coverage: '32 sq mi',
    businessesServed: '250+'
  },
  coordinates: { lat: 26.6617, lng: -80.2683 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WellingtonPage() {
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