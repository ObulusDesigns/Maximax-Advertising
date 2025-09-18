import { Metadata } from 'next'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { getServiceBySlug } from '@/app/lib/data/services'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'
import { transformServiceData } from '@/app/lib/utils/icons'

const serviceSlug = 'local-advertising-solutions'

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(serviceSlug)
  if (!service) {
    return {
      title: 'Local Advertising Solutions | Maximax Advertising',
      description: 'Comprehensive local advertising services including mobile billboards, direct mail, radio, and TV',
    }
  }

  return generateServiceMetadata({
    name: service.serviceName,
    description: service.description,
    keywords: service.keywords || [],
    slug: service.slug
  })
}

export default function LocalAdvertisingSolutionsPage() {
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
    return <div>Service not found</div>
  }

  // Transform service data to match template props
  const transformedService = transformServiceData(service)

  return <ServicePageTemplate {...transformedService} />
}