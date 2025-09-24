// Services Data for Cross-Linking
import { ServiceData } from '@/app/types'

export interface ServiceInfo {
  name: string
  slug: string
  description: string
  icon: string
  category: 'mobile' | 'event' | 'digital' | 'marketing'
  keywords: string[]
}

export const services: ServiceInfo[] = [
  {
    name: 'Mobile Billboard Advertising',
    slug: 'mobile-billboard-advertising',
    description: 'High-impact mobile LED billboard trucks with 4K displays',
    icon: 'Truck',
    category: 'mobile',
    keywords: ['mobile billboards', 'LED trucks', 'outdoor advertising']
  },
  {
    name: 'Digital Mobile Billboards',
    slug: 'digital-mobile-billboards',
    description: 'State-of-the-art digital LED displays on wheels',
    icon: 'Monitor',
    category: 'digital',
    keywords: ['digital billboards', 'LED displays', '4K screens']
  },
  {
    name: 'LED Truck Advertising',
    slug: 'led-truck-advertising',
    description: 'GPS-tracked LED trucks with real-time campaign management',
    icon: 'MapPin',
    category: 'mobile',
    keywords: ['LED trucks', 'GPS tracking', 'mobile advertising']
  },
  {
    name: 'Event Advertising',
    slug: 'event-advertising',
    description: 'Target major events, festivals, and gatherings',
    icon: 'Calendar',
    category: 'event',
    keywords: ['event marketing', 'festival advertising', 'concert promotion']
  },
  {
    name: 'Political Campaign Advertising',
    slug: 'political-campaign-advertising',
    description: 'Strategic political messaging and voter outreach',
    icon: 'Megaphone',
    category: 'marketing',
    keywords: ['political ads', 'campaign marketing', 'voter outreach']
  },
  {
    name: 'Real Estate Marketing',
    slug: 'real-estate-marketing',
    description: 'Property promotion and open house advertising',
    icon: 'Home',
    category: 'marketing',
    keywords: ['real estate ads', 'property marketing', 'open house promotion']
  },
  {
    name: 'Grand Opening Advertising',
    slug: 'grand-opening-advertising',
    description: 'Launch your business with maximum visibility',
    icon: 'Star',
    category: 'event',
    keywords: ['grand opening', 'business launch', 'new store advertising']
  },
  {
    name: 'Retail Promotion',
    slug: 'retail-promotion',
    description: 'Drive foot traffic and boost sales for retail locations',
    icon: 'ShoppingBag',
    category: 'marketing',
    keywords: ['retail advertising', 'store promotion', 'sales marketing']
  },
  {
    name: 'Restaurant Marketing',
    slug: 'restaurant-marketing',
    description: 'Attract diners and promote special offers',
    icon: 'Utensils',
    category: 'marketing',
    keywords: ['restaurant ads', 'food promotion', 'dining marketing']
  },
  {
    name: 'Healthcare Advertising',
    slug: 'healthcare-advertising',
    description: 'Reach patients and promote medical services',
    icon: 'Heart',
    category: 'marketing',
    keywords: ['healthcare marketing', 'medical advertising', 'patient outreach']
  }
]

// Get all service slugs for sitemap generation
export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug)
}

// Get service by slug
export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return services.find(service => service.slug === slug)
}

// Get services by category
export function getServicesByCategory(category: ServiceInfo['category']): ServiceInfo[] {
  return services.filter(service => service.category === category)
}

// Get related services (same category, excluding current)
export function getRelatedServices(currentSlug: string, limit: number = 3): ServiceInfo[] {
  const currentService = getServiceBySlug(currentSlug)
  if (!currentService) return []

  return services
    .filter(service =>
      service.category === currentService.category &&
      service.slug !== currentSlug
    )
    .slice(0, limit)
}