import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { transformServiceData } from '@/app/lib/utils/icons'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Digital Mobile Billboards Miami | Smart Advertising Technology | Maximax',
  description: 'Digital mobile billboards in Miami with real-time content updates, geo-targeting, and analytics. Smart advertising for 442,241+ residents. Call (561) 720-0521',
  keywords: [
    'digital mobile billboards Miami',
    'Miami digital billboard trucks',
    'smart billboard advertising Miami',
    'programmatic mobile billboards Miami',
    'digital outdoor advertising Miami FL',
    'connected billboards Miami',
    'Miami digital truck advertising',
    'mobile digital displays Miami',
    'data-driven billboards Miami',
    'Miami digital OOH advertising'
  ],
  openGraph: {
    title: 'Digital Mobile Billboards Miami | Smart Outdoor Advertising',
    description: 'Advanced digital mobile billboards in Miami with geo-targeting, real-time updates, and performance analytics. Next-gen outdoor advertising. Call (561) 720-0521.',
    url: 'https://maximaxmobileadvertising.com/locations/miami/services/digital-mobile-billboards/',
    images: [
      {
        url: '/images/miami-digital-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Mobile Billboard Truck in Miami'
      }
    ]
  }
}

const miamiDigitalBillboardData = {
  serviceName: 'Digital Mobile Billboards in Miami',
  tagline: 'Next-Generation Smart Advertising for Miami\'s Digital Age',
  description: `Revolutionary digital mobile billboard technology brings unprecedented advertising intelligence to Miami's streets. Our connected billboard trucks combine cutting-edge display technology with real-time data analytics, geo-targeting capabilities, and instant content management to deliver the most sophisticated mobile advertising solution in South Florida.

In Miami's tech-forward market, where innovation drives business and digital engagement defines success, our digital mobile billboards represent the evolution of outdoor advertising. These aren't just displays on wheels – they're smart advertising platforms that adapt to their environment, audience, and performance metrics in real-time. From automatically adjusting content based on traffic patterns in Brickell to triggering location-specific messages as the truck enters Miami Beach, every aspect is optimized for maximum relevance and impact.

Our digital infrastructure enables capabilities that transform how brands connect with Miami audiences. Programmatic content delivery ensures your message reaches the right people at the right time, whether targeting morning commuters on I-95, lunch crowds in Downtown, or nightlife seekers in Wynwood. Integration with weather data, traffic conditions, and local events allows for contextual messaging that resonates with viewers' immediate circumstances.

The data-driven approach of digital mobile billboards provides unprecedented campaign transparency and optimization opportunities. Real-time analytics track impressions by location, time, and demographic estimates, while heat mapping reveals which routes and messages generate the highest engagement. This intelligence enables continuous campaign refinement, ensuring every advertising dollar delivers measurable results in Miami's competitive marketplace.`,
  
  features: [
    {
      icon: 'Wifi',
      title: 'Cloud Content Management',
      description: 'Update campaigns instantly from anywhere via secure cloud platform'
    },
    {
      icon: 'MapPin',
      title: 'GPS Geo-Targeting',
      description: 'Trigger location-specific content as trucks enter defined zones'
    },
    {
      icon: 'BarChart3',
      title: 'Real-Time Analytics',
      description: 'Live dashboard showing impressions, routes, and engagement metrics'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Integration',
      description: 'QR codes and NFC enable instant audience interaction'
    },
    {
      icon: 'RefreshCw',
      title: 'Dynamic Content Rotation',
      description: 'Schedule and rotate unlimited campaigns throughout the day'
    },
    {
      icon: 'Database',
      title: 'Data-Driven Optimization',
      description: 'AI-powered route and content recommendations based on performance'
    },
    {
      icon: 'Shield',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    }
  ],

  benefits: [
    {
      title: 'Measurable ROI',
      description: 'Track every impression with detailed analytics and attribution',
      metric: '3.2x average ROAS'
    },
    {
      title: 'Instant Adaptability',
      description: 'Update campaigns in real-time based on performance or events',
      metric: 'Updates in <60 seconds'
    },
    {
      title: 'Audience Intelligence',
      description: 'Detailed insights into viewer demographics and behaviors',
      metric: '15+ data points tracked'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Digital Strategy',
      description: 'Define targeting parameters and content strategy',
      icon: 'Target'
    },
    {
      step: 2,
      title: 'Platform Setup',
      description: 'Configure geo-zones, schedules, and content rules',
      icon: 'Settings'
    },
    {
      step: 3,
      title: 'Content Deployment',
      description: 'Upload and schedule dynamic content rotations',
      icon: 'Upload'
    },
    {
      step: 4,
      title: 'Optimize & Scale',
      description: 'Refine based on analytics and expand successful tactics',
      icon: 'TrendingUp'
    }
  ],

  pricing: [
    {
      name: 'Digital Starter',
      price: '$1,099/day',
      description: 'Entry-level digital campaign',
      features: [
        '8 hours digital coverage',
        'Up to 10 content variations',
        'Basic geo-targeting',
        'Standard analytics',
        'Daily performance report'
      ]
    },
    {
      name: 'Digital Pro',
      price: '$5,999/week',
      description: 'Professional digital campaign with advanced features',
      features: [
        '40 hours digital coverage',
        'Unlimited content updates',
        'Advanced geo-targeting',
        'Real-time analytics dashboard',
        'A/B testing tools',
        'Audience insights report'
      ],
      popular: true
    },
    {
      name: 'Digital Enterprise',
      price: '$19,999/month',
      description: 'Full-scale digital domination of Miami',
      features: [
        '160+ hours coverage',
        'AI-optimized routing',
        'Programmatic capabilities',
        'Custom analytics dashboard',
        'Dedicated success manager',
        'API access for integration'
      ]
    },
    {
      name: 'Digital Custom',
      price: 'Contact for Quote',
      description: 'Tailored digital solutions for unique needs',
      features: [
        'Multi-truck synchronization',
        'Custom technology integration',
        'Exclusive route access',
        'White-label reporting',
        'Priority support 24/7',
        'Custom feature development'
      ],
      customQuote: true
    }
  ],

  faqs: [
    {
      question: 'How does geo-targeting work with digital mobile billboards?',
      answer: 'Our trucks use GPS to trigger specific content when entering predefined zones. For example, show restaurant ads near lunchtime in Brickell, club promotions in South Beach at night, or retail offers when passing shopping districts. You can set unlimited geo-zones with unique content for each.'
    },
    {
      question: 'What analytics do digital mobile billboards provide?',
      answer: 'Our platform tracks impressions by location and time, estimated audience demographics, engagement metrics (for interactive elements), route efficiency scores, content performance comparison, and weather/traffic impact on visibility. All data is available in real-time via our dashboard.'
    },
    {
      question: 'Can digital billboards integrate with my existing marketing stack?',
      answer: 'Yes! Our digital platform offers API integration with major marketing platforms, allowing you to sync campaigns with your CRM, trigger content based on inventory levels, coordinate with social media campaigns, and track conversions through unified analytics.'
    },
    {
      question: 'How quickly can I change content on digital mobile billboards?',
      answer: 'Content updates happen in under 60 seconds. You can schedule changes in advance, trigger updates based on conditions (weather, time, location), or push emergency updates instantly. Our cloud platform allows management from any device, anywhere.'
    },
    {
      question: 'What makes digital mobile billboards better than traditional mobile advertising?',
      answer: 'Digital billboards offer real-time content updates, measurable ROI with detailed analytics, A/B testing capabilities, interactive features like QR codes, weather/daypart optimization, and the ability to run multiple campaigns simultaneously. They deliver 3.2x higher engagement than static displays.'
    }
  ],

  relatedServices: [
    {
      title: 'LED Truck Advertising Miami',
      description: 'High-brightness LED displays for maximum visibility',
      href: '/locations/miami/services/led-truck-advertising',
      icon: 'Monitor'
    },
    {
      title: 'Political Campaign Advertising Miami',
      description: 'Digital solutions for political campaigns',
      href: '/locations/miami/services/political-campaign-advertising',
      icon: 'Vote'
    },
    {
      title: 'Real Estate Marketing Miami',
      description: 'Digital advertising for property marketing',
      href: '/locations/miami/services/real-estate-marketing',
      icon: 'Home'
    }
  ],

  testimonials: [
    {
      name: 'Alexandra Rivera',
      company: 'Miami Retail Chain',
      role: 'CMO',
      content: 'The geo-targeting capabilities are game-changing. We promote different products based on neighborhood demographics and see real-time sales impact. ROI increased 340% over traditional advertising.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Tech Startup Miami',
      role: 'Growth Manager',
      content: 'Being able to A/B test messages in real-time and optimize based on engagement data helped us find our winning campaign formula. The analytics are more detailed than our digital ads.',
      rating: 5
    },
    {
      name: 'Maria Gonzalez',
      company: 'Miami Tourism Board',
      role: 'Marketing Director',
      content: 'Digital billboards let us update content for different events and weather conditions instantly. During Art Basel, we could promote different venues based on time of day and location.',
      rating: 5
    }
  ],

  gallery: [
    {
      src: '/images/miami-digital-billboard-brickell.jpg',
      alt: 'Digital billboard truck in Brickell with dynamic content'
    },
    {
      src: '/images/miami-smart-billboard-wynwood.jpg',
      alt: 'Smart billboard displaying targeted content in Wynwood'
    },
    {
      src: '/images/miami-digital-night-downtown.jpg',
      alt: 'Digital mobile billboard at night in Downtown Miami'
    },
    {
      src: '/images/miami-interactive-billboard.jpg',
      alt: 'Interactive digital billboard with QR code engagement'
    }
  ],

  serviceAreas: [
    'Greater Downtown Miami',
    'Brickell Business District',
    'Wynwood Innovation District',
    'Design District',
    'Miami Beach Tech Corridor',
    'Coral Gables Business Area',
    'Aventura Shopping District',
    'Dadeland Mall Area',
    'Coconut Grove',
    'Midtown Miami',
    'Edgewater',
    'Port of Miami Area',
    'Airport District',
    'Doral Business Park',
    'Kendall Shopping Areas'
  ]
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Mobile Billboards in Miami',
  description: 'Advanced digital mobile billboard advertising in Miami with geo-targeting, real-time analytics, and cloud-based content management for maximum campaign effectiveness.',
  provider: {
    '@type': 'Organization',
    name: 'Maximax Advertising',
    url: 'https://maximaxmobileadvertising.com',
    telephone: '(561) 720-0521',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US'
    }
  },
  areaServed: {
    '@type': 'City',
    name: 'Miami',
    '@id': 'https://www.wikidata.org/wiki/Q8652'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Mobile Billboard Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Starter Campaign',
          description: '8 hours of digital mobile billboard advertising with geo-targeting'
        },
        price: '1099.00',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Pro Campaign',
          description: '40 hours of advanced digital billboard advertising with analytics'
        },
        price: '5999.00',
        priceCurrency: 'USD'
      }
    ]
  }
}

export default function MiamiDigitalBillboardPage() {
  return (
    <>
      <Script
        id="miami-digital-billboard-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <ServicePageTemplate {...transformServiceData(miamiDigitalBillboardData)} />
      <Footer />
      <FloatingContact />
    </>
  )
}