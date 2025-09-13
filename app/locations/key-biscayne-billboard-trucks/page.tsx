import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const locationData = {
  city: 'Key Biscayne',
  county: 'Miami-Dade County',
  state: 'Florida',
  canonicalPath: '/locations/key-biscayne-billboard-trucks/',
  population: '14K',
  description: 'Key Biscayne billboard trucks deliver premium advertising on this exclusive island paradise. Our mobile LED displays reach affluent residents, luxury resort guests at the Ritz-Carlton, yacht club members, and beach club visitors. Target high-net-worth individuals in this pristine barrier island community known for world-class tennis, pristine beaches, and multimillion-dollar oceanfront estates.',
  landmarks: [
    'The Ritz-Carlton Key Biscayne',
    'Crandon Park Tennis Center',
    'Key Biscayne Yacht Club',
    'Key Biscayne Beach Club',
    'Bill Baggs Cape Florida State Park',
    'Cape Florida Lighthouse',
    'Crandon Park Beach',
    'Village Green Park',
    'The Ocean Club',
    'Grand Bay Club',
    'Key Colony Towers',
    'Crandon Golf Course',
    'Miami Seaquarium',
    'St. Christopher\'s by-the-Sea',
    'Harbor Point'
  ],
  popularRoutes: [
    'Crandon Boulevard - Main island thoroughfare',
    'Rickenbacker Causeway - Exclusive island access',
    'Harbor Drive - Luxury waterfront estates',
    'Ocean Lane - Beachfront mansion row',
    'Sunrise Drive - Premium residential',
    'Fernwood Road - Village center access',
    'West Mashta Drive - Bay-front luxury homes',
    'Galen Drive - Yacht club district',
    'Cape Florida Drive - State park route',
    'Key Biscayne Village Center - Shopping & dining'
  ],
  events: [
    { name: 'Miami Open Tennis Tournament', date: 'March', location: 'Crandon Park' },
    { name: 'Key Biscayne Yacht Club Regatta', date: 'November', location: 'Yacht Club' },
    { name: 'Cape Florida Day', date: 'February', location: 'Bill Baggs Park' },
    { name: 'Island Wine & Food Festival', date: 'April', location: 'Village Green' },
    { name: 'Key Biscayne Art Festival', date: 'January', location: 'Village Center' },
    { name: 'Lighthouse Full Moon Tours', date: 'Monthly', location: 'Cape Florida' }
  ],
  stats: {
    dailyImpressions: '60,000+',
    coverage: '6.8 sq mi',
    businessesServed: '150+ Luxury Brands'
  },
  coordinates: { lat: 25.6933, lng: -80.1625 }
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function KeyBiscayneBillboardTrucksPage() {
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