import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { LocationPageTemplate } from '@/app/components/LocationPageTemplate'
import { generateLocationMetadata } from '@/app/lib/seo/metadata'
import { locationStructuredData } from '@/app/lib/seo/metadata'
import { getLocationBySlug, getAllLocationSlugs, floridaLocations } from '@/app/lib/data/florida-locations'
import Script from 'next/script'

// Generate static params for all locations
export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }))
}

// Generate metadata for each location
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const locationData = getLocationBySlug(params.slug)
  
  if (!locationData) {
    return {
      title: 'Location Not Found',
      description: 'The requested location could not be found.'
    }
  }
  
  return generateLocationMetadata(locationData)
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const locationData = getLocationBySlug(params.slug)
  
  if (!locationData) {
    notFound()
  }
  
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