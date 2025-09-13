import { MetadataRoute } from 'next'
import { getAllLocationSlugs } from '@/app/lib/data/florida-locations'
import { getAllMarketSlugs } from '@/app/lib/data/markets'
import { getAllServiceSlugs } from '@/app/lib/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maximaxmobileadvertising.com'
  const currentDate = new Date()
  const dateString = currentDate.toISOString()

  // Get all dynamic slugs from data stores
  const locationSlugs = getAllLocationSlugs()
  const marketSlugs = getAllMarketSlugs()
  const serviceSlugs = getAllServiceSlugs()

  // Generate location pages entries with SEO optimization
  const locationPages = locationSlugs.map(slug => ({
    url: `${baseUrl}/locations/florida/${slug}/`,
    lastModified: dateString,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate market pages entries with enhanced metadata
  const marketPages = marketSlugs.map(slug => ({
    url: `${baseUrl}/markets/${slug}/`,
    lastModified: dateString,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate service pages entries with high priority
  const servicePages = serviceSlugs.map(slug => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: dateString,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    // Main Pages with enhanced metadata
    {
      url: `${baseUrl}/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: dateString,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/markets/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: dateString,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: dateString,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Dynamic Location Pages (generated from data store)
    ...locationPages,
    
    // Static Location Pages (standalone pages not generated from florida-locations data)
    // Major cities with priority 0.9
    {
      url: `${baseUrl}/locations/miami-beach-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/fort-lauderdale-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/west-palm-beach-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/boca-raton-billboard-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/hollywood-fl-billboard-trucks/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/pembroke-pines-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/coral-gables-mobile-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // High-population cities with priority 0.85
    {
      url: `${baseUrl}/locations/miami-gardens-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/locations/north-miami-billboard-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/locations/miramar-billboard-trucks/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/locations/aventura-billboard-trucks/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/locations/delray-beach-mobile-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/locations/kendall-outdoor-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Mid-size cities with priority 0.8
    {
      url: `${baseUrl}/locations/cutler-bay-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/deerfield-beach-mobile-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/weston-billboard-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/tamarac-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/greenacres-billboard-trucks/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/royal-palm-beach-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/homestead-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // Dynamic Market Pages (generated from data store)
    ...marketPages,
    
    // Dynamic Service Pages (generated from data store)
    ...servicePages,

    // Service-Location Combination Pages (Miami)
    {
      url: `${baseUrl}/services/miami/mobile-billboard-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/miami/led-truck-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/miami/digital-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/miami/event-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/miami/political-campaign-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/miami/real-estate-marketing/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // Service-Location Combination Pages (Fort Lauderdale)
    {
      url: `${baseUrl}/services/fort-lauderdale/mobile-billboard-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/fort-lauderdale/led-truck-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/fort-lauderdale/digital-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/fort-lauderdale/event-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/fort-lauderdale/political-campaign-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/fort-lauderdale/real-estate-marketing/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // Service-Location Combination Pages (West Palm Beach)
    {
      url: `${baseUrl}/services/west-palm-beach/mobile-billboard-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/west-palm-beach/led-truck-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/west-palm-beach/digital-mobile-billboards/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/west-palm-beach/event-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/west-palm-beach/political-campaign-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/west-palm-beach/real-estate-marketing/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // Comparison Pages with high priority for SEO
    {
      url: `${baseUrl}/compare/mobile-billboard-vs-car-wrap/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Educational Pages with high priority for SEO
    {
      url: `${baseUrl}/education/what-is-ooh-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    
    // Guide Pages with highest priority for SEO (targeting high-value keywords)
    {
      url: `${baseUrl}/guides/best-local-advertising/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/guides/how-to-advertise-locally/`,
      lastModified: dateString,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Legal Pages
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: dateString,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service/`,
      lastModified: dateString,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    
    // Blog Posts
    {
      url: `${baseUrl}/blog/what-is-ooh-in-marketing/`,
      lastModified: dateString,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cheap-ads-that-work/`,
      lastModified: dateString,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/labor-day-advertising-sales/`,
      lastModified: dateString,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/labor-day-advertising-maximize-holiday-weekend/`,
      lastModified: dateString,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/labor-day-mobile-billboard-advertising/`,
      lastModified: dateString,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}