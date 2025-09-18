import { Metadata } from 'next'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { getServiceBySlug } from '@/app/lib/data/services'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'
import { transformServiceData } from '@/app/lib/utils/icons'

const serviceSlug = 'vehicle-wrap-advertising'

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(serviceSlug)
  if (!service) {
    return {
      title: 'Vehicle Wrap Advertising | Maximax Advertising',
      description: 'Professional car wrap advertising services in South Florida',
    }
  }

  return generateServiceMetadata({
    name: service.serviceName,
    description: service.description,
    keywords: service.keywords || [],
    slug: service.slug
  })
}

export default function VehicleWrapAdvertisingPage() {
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
    return <div>Service not found</div>
  }

  // Transform service data to match template props
  const transformedService = transformServiceData(service)

  return <ServicePageTemplate {...transformedService} />
}