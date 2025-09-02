'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

interface BreadcrumbItem {
  name: string
  href: string
}

export function Breadcrumbs() {
  const pathname = usePathname()
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/' || pathname === '') return null
  
  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ]
    
    let currentPath = ''
    paths.forEach((path, index) => {
      currentPath += `/${path}`
      
      // Format the breadcrumb name
      let name = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      // Special handling for known paths
      if (path === 'florida') {
        name = 'Florida'
      } else if (path === 'locations') {
        name = 'Locations'
      } else if (path === 'markets') {
        name = 'Markets'
      } else if (path === 'services') {
        name = 'Services'
      } else if (path === 'miami') {
        name = 'Miami'
      }
      
      breadcrumbs.push({
        name,
        href: currentPath
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  // Generate schema markup for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://maximaxmobileadvertising.com${item.href}`
    }))
  }
  
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <nav 
        aria-label="Breadcrumb navigation"
        className="bg-gray-50 border-b border-gray-200"
      >
        <div className="container">
          <ol 
            className="flex items-center space-x-2 py-3 text-sm"
            role="list"
          >
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight 
                    className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" 
                    aria-hidden="true"
                  />
                )}
                
                {index === breadcrumbs.length - 1 ? (
                  // Current page (last item)
                  <span 
                    className="text-gray-700 font-medium"
                    aria-current="page"
                  >
                    {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                    {item.name}
                  </span>
                ) : (
                  // Link to parent pages
                  <Link
                    href={item.href}
                    className="text-maximax-cyan hover:text-maximax-pink transition-colors font-medium inline-flex items-center"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}