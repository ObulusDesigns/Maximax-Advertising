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
    
    // Dynamic Market Pages (generated from data store)
    ...marketPages,
    
    // Dynamic Service Pages (generated from data store)
    ...servicePages,
    
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