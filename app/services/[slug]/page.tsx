import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata, serviceStructuredData } from '@/app/lib/seo/metadata'
import { servicesData, getServiceBySlug } from '@/app/lib/data/services'
import { transformServiceData } from '@/app/lib/utils/icons'
import Script from 'next/script'

// Generate static params for all service pages
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found - Maximax Advertising',
      description: 'The requested service page could not be found.',
    }
  }

  return generateServiceMetadata({
    name: service.serviceName,
    description: `${service.tagline}. ${service.description}`,
    keywords: service.keywords || [],
    slug: service.slug,
  })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    notFound()
  }

  // Transform service data to match template props
  const transformedService = transformServiceData(service)

  const structuredData = serviceStructuredData({
    name: service.serviceName,
    description: service.description,
    features: service.features?.map(f => f.title) || [],
  })

  return (
    <>
      <Script
        id="service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <ServicePageTemplate {...transformedService} />
      <Footer />
      <FloatingContact />
    </>
  )
}