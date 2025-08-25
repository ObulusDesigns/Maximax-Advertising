export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://maximaxadvertising.com/#organization",
  "name": "Maximax Advertising",
  "alternateName": "Maximax Digital Marketing",
  "url": "https://maximaxadvertising.com",
  "logo": "https://maximaxadvertising.com/images/maximax-logo.png",
  "image": "https://maximaxadvertising.com/images/1-1.png",
  "description": "Premier mobile billboard advertising company serving Miami-Dade and Palm Beach Counties with GPS-tracked LED billboard trucks featuring 4K displays.",
  "telephone": "+1-561-720-0521",
  "email": "naser@maximaxadvertising.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "601 N Congress Ave #410",
    "addressLocality": "Delray Beach",
    "addressRegion": "FL",
    "postalCode": "33445",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.4614625",
    "longitude": "-80.0728243"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Miami-Dade County",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Palm Beach County",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Check", "Wire Transfer"],
  "currenciesAccepted": "USD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile Billboard Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Billboard Trucks",
          "description": "GPS-tracked mobile billboard trucks with 10x20 ft displays"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LED Digital Billboards",
          "description": "4K Ultra HD LED screens with day/night visibility"
        }
      }
    ]
  },
  "sameAs": [
    "https://facebook.com/maximaxadvertising",
    "https://instagram.com/maximaxadvertising",
    "https://linkedin.com/company/maximax-advertising",
    "https://twitter.com/maximaxads",
    "https://youtube.com/@maximaxadvertising"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mobile Billboard Advertising",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Maximax Advertising",
    "telephone": "+1-561-720-0521"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Miami-Dade County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Palm Beach County"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile Advertising Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Mobile Billboard Truck Rental",
        "description": "Daily, weekly, and monthly mobile billboard truck rentals"
      },
      {
        "@type": "Service",
        "name": "LED Digital Display Advertising",
        "description": "4K LED digital billboard displays on mobile trucks"
      },
      {
        "@type": "Service",
        "name": "GPS Campaign Tracking",
        "description": "Real-time GPS tracking and route optimization"
      },
      {
        "@type": "Service",
        "name": "Campaign Management",
        "description": "Full-service campaign planning and execution"
      }
    ]
  }
}

export const vehicleSchema = {
  "@context": "https://schema.org",
  "@type": "Vehicle",
  "name": "Mobile Billboard Truck",
  "vehicleSpecialUsage": "Mobile Advertising",
  "vehicleConfiguration": "LED Billboard Truck",
  "manufacturer": {
    "@type": "Organization",
    "name": "Custom Fleet Solutions"
  },
  "feature": [
    "GPS Tracking System",
    "4K LED Display (10x20 feet)",
    "Weather-Resistant Design",
    "Day/Night Visibility",
    "Remote Content Updates",
    "Route Optimization",
    "Real-time Analytics"
  ],
  "fuelType": "Diesel",
  "numberOfDoors": 2,
  "vehicleSeatingCapacity": 2
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does mobile billboard advertising cost in Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile billboard advertising in Miami starts at $500 per day for standard routes. Custom campaigns and premium routes range from $800-$2000 per day depending on coverage area, duration, and specific requirements. Contact us at (561) 720-0521 for a customized quote."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do your mobile billboards cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide complete coverage throughout Miami-Dade County (including Miami, Miami Beach, Aventura, Coral Gables) and Palm Beach County (including West Palm Beach, Boca Raton, Delray Beach, Jupiter). Our GPS-tracked trucks can target specific neighborhoods, events, or high-traffic areas."
      }
    },
    {
      "@type": "Question",
      "name": "How effective is mobile billboard advertising?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile billboard advertising generates an average of 50,000+ daily impressions with a 97% recall rate. Our clients typically see a 4.2x ROI on their campaigns. The combination of mobility, size, and LED technology makes it one of the most effective forms of outdoor advertising."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my mobile billboard campaign in real-time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All our mobile billboard trucks are equipped with GPS tracking. You'll receive access to our 24/7 dashboard where you can monitor your truck's location, route history, and campaign analytics in real-time."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I launch a mobile billboard campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day booking for available trucks and can launch most campaigns within 48 hours. This includes design assistance, route planning, and campaign setup. For complex campaigns, we recommend 3-5 days lead time."
      }
    }
  ]
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const eventSchema = (event: {
  name: string
  startDate: string
  endDate: string
  location: string
  description: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "location": {
    "@type": "Place",
    "name": event.location,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": event.location,
      "addressRegion": "FL"
    }
  },
  "description": event.description,
  "organizer": {
    "@type": "Organization",
    "name": "Maximax Advertising",
    "url": "https://maximaxadvertising.com"
  }
})

export const aggregateOfferSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "priceCurrency": "USD",
  "lowPrice": "500",
  "highPrice": "2000",
  "priceValidUntil": "2025-12-31",
  "itemCondition": "https://schema.org/NewCondition",
  "availability": "https://schema.org/InStock",
  "seller": {
    "@type": "Organization",
    "name": "Maximax Advertising"
  },
  "itemOffered": {
    "@type": "Service",
    "name": "Mobile Billboard Advertising",
    "description": "Daily mobile billboard truck rental with GPS tracking and 4K LED displays"
  }
}