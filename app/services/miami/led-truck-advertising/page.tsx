import { Metadata } from 'next'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import Script from 'next/script'
import { 
  Monitor, 
  MapPin, 
  Zap, 
  Sun, 
  Target, 
  TrendingUp,
  Users,
  DollarSign,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react'

const serviceName = 'LED Truck Advertising in Miami'
const canonicalPath = '/services/miami/led-truck-advertising/'

export const metadata: Metadata = {
  title: 'LED Truck Advertising Miami | Digital Display Trucks | Maximax',
  description: 'Premium LED truck advertising in Miami with 4K displays and dynamic content. Bright, vivid advertising visible day and night throughout Miami-Dade County. GPS-tracked routes from South Beach to Downtown.',
  keywords: 'LED truck advertising Miami, digital truck displays Miami, LED mobile billboards Miami, LED advertising trucks Miami, digital display advertising Miami, LED billboard trucks Miami, 4K truck displays Miami',
  openGraph: {
    title: 'LED Truck Advertising in Miami - Maximax Advertising',
    description: 'High-impact LED truck advertising with 4K displays in Miami. Dynamic content, GPS tracking, and maximum visibility throughout Miami-Dade County.',
    url: `https://maximaxmobileadvertising.com${canonicalPath}`,
    siteName: 'Maximax Advertising',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/maximax-mobile-billboard-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'LED Advertising Truck in Miami',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `https://maximaxmobileadvertising.com${canonicalPath}`,
  },
}

const serviceData = {
  serviceName,
  tagline: 'Brilliant 4K LED Displays That Captivate Miami',
  description: 'Illuminate Miami streets with our state-of-the-art LED truck advertising. Our 4K resolution displays deliver crystal-clear messaging that cuts through the visual noise of Miami\'s vibrant cityscape. From the neon lights of South Beach to the business districts of Brickell, your brand shines brighter with LED technology.',
  
  features: [
    {
      icon: Monitor,
      title: '4K Ultra HD Displays',
      description: 'Crystal-clear 4K resolution ensures your message is seen clearly from any distance'
    },
    {
      icon: Sun,
      title: 'Daylight Visible',
      description: 'High-brightness LEDs remain vivid even under Miami\'s intense sunshine'
    },
    {
      icon: Zap,
      title: 'Dynamic Content',
      description: 'Display videos, animations, and rotating messages to maximize engagement'
    },
    {
      icon: MapPin,
      title: 'Smart Positioning',
      description: 'Strategic placement in high-traffic Miami areas for optimal visibility'
    }
  ],
  
  benefits: [
    {
      title: 'Unmatched Visibility',
      description: 'LED brightness ensures 24/7 visibility in Miami\'s day and nightlife scenes',
      metric: '10,000 nits brightness'
    },
    {
      title: 'Content Flexibility',
      description: 'Change messages instantly for different Miami neighborhoods and times',
      metric: 'Real-time updates'
    },
    {
      title: 'Weather Resistant',
      description: 'Waterproof LEDs withstand Miami\'s rain and humidity year-round',
      metric: 'IP65 rated displays'
    },
    {
      title: 'Energy Efficient',
      description: 'Eco-friendly LED technology with lower power consumption',
      metric: '50% less energy use'
    }
  ],
  
  process: [
    {
      step: 1,
      title: 'Display Strategy',
      description: 'Plan content strategy for Miami\'s diverse audiences',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Content Creation',
      description: 'Design eye-catching visuals optimized for LED display',
      icon: Palette
    },
    {
      step: 3,
      title: 'Route Planning',
      description: 'Map high-visibility routes across Miami hotspots',
      icon: Map
    },
    {
      step: 4,
      title: 'Live Deployment',
      description: 'Launch with real-time content management capabilities',
      icon: Rocket
    }
  ],
  
  pricing: [
    {
      name: 'LED Day Package',
      price: '$950/day',
      description: 'High-impact LED advertising for events and promotions',
      features: [
        '4K LED display',
        '8 hours coverage',
        'Content rotation (up to 3 ads)',
        'Miami Beach & Downtown',
        'Real-time tracking'
      ]
    },
    {
      name: 'LED Week Special',
      price: '$5,200/week',
      description: 'Sustained LED visibility across Miami',
      features: [
        '4K LED display',
        '40 hours coverage',
        'Unlimited content changes',
        'All Miami zones',
        'Performance analytics',
        'Best routes included'
      ],
      popular: true
    },
    {
      name: 'LED Premium',
      price: 'Custom Quote',
      description: 'Full-scale LED campaign with maximum features',
      features: [
        'Multiple LED trucks',
        'Video production included',
        'A/B content testing',
        'Event synchronization',
        'Dedicated support team',
        'Custom scheduling'
      ],
      customQuote: true
    }
  ],
  
  testimonials: [
    {
      name: 'Maria Gonzalez',
      company: 'Miami Nightclub Group',
      role: 'Marketing Manager',
      content: 'The LED trucks were perfect for promoting our events. The bright displays caught attention even on Ocean Drive at night. Incredible results!',
      rating: 5
    },
    {
      name: 'Robert Thompson',
      company: 'Luxury Auto Miami',
      role: 'Sales Director',
      content: 'The 4K quality really showcased our vehicles. We ran different videos for different neighborhoods - Coral Gables saw luxury, Wynwood saw performance.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Miami Tech Startup',
      role: 'CMO',
      content: 'Being able to update our LED content in real-time during our product launch was invaluable. The trucks became mobile tech billboards!',
      rating: 5
    }
  ],
  
  stats: {
    clientsSatisfied: '200+',
    averageROI: '4.5x',
    campaignsCompleted: '450+',
    yearEstablished: '2019'
  },
  
  faqs: [
    {
      question: 'How bright are the LED displays in Miami sunshine?',
      answer: 'Our LED displays feature 10,000 nits brightness, making them clearly visible even in Miami\'s brightest sunshine. They automatically adjust brightness for optimal viewing in any lighting condition.'
    },
    {
      question: 'Can I display video content on LED trucks?',
      answer: 'Yes! Our 4K LED displays support full video playback, animations, and dynamic content. You can showcase product videos, animated logos, or rotating message sequences.'
    },
    {
      question: 'How does weather affect LED truck advertising?',
      answer: 'Our LED displays are IP65 rated and fully weatherproof. They perform perfectly in Miami\'s rain, humidity, and heat. The displays are also hurricane-rated for extreme weather.'
    },
    {
      question: 'Can I change content during the campaign?',
      answer: 'Absolutely! Content can be updated remotely in real-time. Change messages for different times of day, neighborhoods, or events without any downtime.'
    },
    {
      question: 'What file formats do LED trucks support?',
      answer: 'We support all major formats including MP4, AVI, MOV for video, and JPG, PNG for images. Our team will optimize your content for maximum LED display impact.'
    }
  ],
  
  relatedServices: [
    {
      title: 'Mobile Billboard Advertising Miami',
      description: 'Complete mobile advertising solutions for Miami',
      href: '/services/miami/mobile-billboard-advertising/',
      icon: TrendingUp
    },
    {
      title: 'Digital Mobile Billboards Miami',
      description: 'Advanced digital display technology',
      href: '/services/miami/digital-mobile-billboards/',
      icon: Monitor
    },
    {
      title: 'Event Advertising Miami',
      description: 'LED trucks for Miami events and festivals',
      href: '/services/miami/event-advertising/',
      icon: Star
    }
  ],
  
  serviceType: 'digital' as const,
  industries: ['Entertainment', 'Retail', 'Technology', 'Automotive', 'Real Estate', 'Hospitality'],
  locations: ['Miami', 'Miami Beach', 'Wynwood', 'Brickell', 'Design District', 'Coral Gables'],
  
  primaryCTA: 'Get LED Quote',
  secondaryCTA: 'See LED Demos',
  phone: '(561) 720-0521'
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: serviceData.description,
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
    containedInPlace: {
      '@type': 'State',
      name: 'Florida'
    }
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'LED Truck Advertising Services',
    itemListElement: serviceData.pricing.map((price, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: price.name,
        description: price.description
      },
      price: price.customQuote ? 'Contact for quote' : price.price,
      position: index + 1
    }))
  }
}

export default function LEDTruckAdvertisingMiamiPage() {
  return (
    <>
      <Script
        id="service-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
            <ServicePageTemplate {...serviceData} />
                </>
  )
}