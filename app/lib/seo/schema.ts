export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://maximaxmobileadvertising.com/#organization",
  "name": "Maximax Advertising",
  "alternateName": "Maximax Digital Marketing",
  "url": "https://maximaxmobileadvertising.com",
  "logo": "https://maximaxmobileadvertising.com/images/maximax-logo.png",
  "image": "https://maximaxmobileadvertising.com/images/1-1.png",
  "description": "Premier vehicle advertising and cheap ads company providing car billboard advertising and mobile outdoor advertising. Leading advertisement company for out-of-home advertising with GPS-tracked LED billboard trucks featuring 4K displays in South Florida.",
  "telephone": "+1-561-720-0521",
  "email": "naser@maximaxmobileadvertising.com",
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
  "serviceType": "Vehicle Advertising and Mobile Outdoor Advertising",
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
        "name": "Vehicle Advertising and Car Billboard Advertising",
        "description": "Cheap ads through vehicle advertising, car billboard advertising, and mobile outdoor advertising. Advertise on car platforms with our fleet."
      },
      {
        "@type": "Service",
        "name": "Digital Billboards Price and LED Display Advertising",
        "description": "Competitive digital billboards price with 4K LED displays. Out-of-home advertising solutions from a leading advertisement company."
      },
      {
        "@type": "Service",
        "name": "Billboard Advertising Metrics and GPS Tracking",
        "description": "Real-time billboard advertising metrics with GPS tracking for vehicle advertising and mobile outdoor advertising campaigns."
      },
      {
        "@type": "Service",
        "name": "Marketing Advertising Companies Services",
        "description": "Full-service campaign management from leading marketing advertising companies. Local advertisements and cheap ads management."
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
    },
    {
      "@type": "Question",
      "name": "What is OOH in marketing and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OOH advertising (Out-of-Home) includes all advertising that reaches consumers outside their homes. This includes vehicle advertising, mobile outdoor advertising, billboards, and transit ads. Our car billboard advertising is a modern form of OOH that combines mobility with high visibility."
      }
    },
    {
      "@type": "Question",
      "name": "How do you provide cheap ads compared to traditional advertising?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our vehicle advertising offers cheap ads by eliminating the high costs of static billboard installation and maintenance. With mobile outdoor advertising, you get better targeting and flexibility at a fraction of traditional billboard cost, making it ideal for businesses seeking affordable out-of-home advertising."
      }
    },
    {
      "@type": "Question",
      "name": "What are billboard advertising costs and digital billboards price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Billboard cost varies by type: traditional static billboards cost $3,000-$25,000/month, while our mobile billboard advertising costs just $500-$2,000/day. Digital billboards price for our LED trucks ranges from $800-$1,500/day, offering better value than fixed digital displays."
      }
    },
    {
      "@type": "Question",
      "name": "Can I advertise on car platforms in specific neighborhoods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our car billboard advertising allows precise neighborhood targeting. Whether you want local advertisements in Miami Beach or vehicle advertising in Boca Raton, our GPS-tracked mobile outdoor advertising ensures your message reaches the exact areas you specify."
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
    "url": "https://maximaxmobileadvertising.com"
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