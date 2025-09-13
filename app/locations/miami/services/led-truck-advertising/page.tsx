import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { transformServiceData } from '@/app/lib/utils/icons'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'LED Truck Advertising Miami | 4K Digital Billboard Trucks | Maximax',
  description: 'LED truck advertising in Miami with stunning 4K displays. Bright, dynamic content visible day & night across Brickell, Downtown, Wynwood. Call (561) 720-0521',
  keywords: [
    'LED truck advertising Miami',
    'Miami LED billboard trucks',
    '4K mobile displays Miami',
    'digital truck advertising Miami FL',
    'LED mobile billboards Miami',
    'Miami digital advertising trucks',
    'video billboard trucks Miami',
    'Miami LED screen trucks',
    'mobile LED displays Miami',
    'digital mobile advertising Miami'
  ],
  openGraph: {
    title: 'LED Truck Advertising in Miami | 4K Digital Displays | Maximax',
    description: 'Premium LED truck advertising in Miami with 4K resolution displays. Dynamic content, video capabilities, day/night visibility. Call (561) 720-0521.',
    url: 'https://maximaxmobileadvertising.com/locations/miami/services/led-truck-advertising/',
    images: [
      {
        url: '/images/miami-led-truck-4k-display.jpg',
        width: 1200,
        height: 630,
        alt: 'LED Advertising Truck with 4K Display in Miami'
      }
    ]
  }
}

const miamiLEDTruckData = {
  serviceName: 'LED Truck Advertising in Miami',
  tagline: 'Brilliant 4K LED Displays That Dominate Miami Streets',
  description: `Elevate your Miami advertising with state-of-the-art LED truck displays that command attention across the Magic City's vibrant streetscape. Our 4K resolution LED screens deliver crystal-clear messaging with 10,000+ nits brightness, ensuring your content remains vivid whether cruising through sunny Brickell at noon or illuminating the Wynwood nightlife scene.

Miami's unique visual culture demands advertising that stands out, and our LED trucks deliver unprecedented impact. The ultra-bright displays cut through the visual noise of South Beach's neon-lit strips, maintain clarity under Miami's intense tropical sun, and adapt automatically to changing light conditions from the shaded streets of Coral Gables to the exposed highways of I-95. With full video capabilities, your campaign can showcase dynamic content that traditional billboards simply cannot match.

Our LED technology represents the pinnacle of mobile advertising innovation. Each truck features weatherproof, shock-resistant panels engineered specifically for Miami's challenging conditions – from sudden afternoon thunderstorms to the salt air of coastal routes. The displays support full-motion video at 60fps, enabling everything from product demonstrations to immersive brand stories that capture and hold attention in Miami's fast-paced environment.

The technical superiority of LED truck advertising translates directly to superior results. Studies show that LED mobile billboards generate 2.5 times more attention than traditional printed mobile billboards, with recall rates exceeding 97% for video content. In Miami's competitive advertising landscape, where businesses vie for attention among locals and tourists alike, LED trucks provide the edge needed to break through and make lasting impressions.`,
  
  features: [
    {
      icon: 'Monitor',
      title: '4K Ultra HD Resolution',
      description: 'Crystal-clear displays with 3840x2160 pixel resolution for stunning visual quality'
    },
    {
      icon: 'Sun',
      title: '10,000+ Nits Brightness',
      description: 'Daylight-visible screens that remain vibrant even under Miami\'s intense sun'
    },
    {
      icon: 'Play',
      title: 'Full Video Capability',
      description: '60fps video playback for smooth, engaging motion content'
    },
    {
      icon: 'Droplets',
      title: 'Weather-Sealed Design',
      description: 'IP65-rated protection against Miami\'s rain and humidity'
    },
    {
      icon: 'Wifi',
      title: 'Remote Content Updates',
      description: 'Change your message instantly via cloud-based content management'
    },
    {
      icon: 'Eye',
      title: 'Auto-Brightness Adjustment',
      description: 'Intelligent sensors optimize visibility from day to night'
    },
    {
      icon: 'Zap',
      title: 'Energy Efficient',
      description: 'Latest LED technology reduces power consumption by 40%'
    }
  ],

  benefits: [
    {
      title: 'Maximum Visual Impact',
      description: 'LED displays generate 2.5x more attention than static mobile billboards',
      metric: '97% recall rate'
    },
    {
      title: 'Day & Night Visibility',
      description: 'Consistent brightness ensures 24/7 visibility across Miami',
      metric: '24/7 operation'
    },
    {
      title: 'Dynamic Content Flexibility',
      description: 'Rotate multiple ads, update messaging in real-time',
      metric: 'Unlimited updates'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Content Strategy',
      description: 'Develop video and static content optimized for LED displays',
      icon: 'FileVideo'
    },
    {
      step: 2,
      title: 'Technical Setup',
      description: 'Configure displays for optimal brightness and color accuracy',
      icon: 'Settings'
    },
    {
      step: 3,
      title: 'Route Programming',
      description: 'Plan routes that maximize LED visibility impact',
      icon: 'Route'
    },
    {
      step: 4,
      title: 'Performance Tracking',
      description: 'Monitor engagement metrics and optimize content',
      icon: 'BarChart3'
    }
  ],

  pricing: [
    {
      name: 'LED Day Campaign',
      price: '$999/day',
      description: 'Premium LED truck for maximum impact',
      features: [
        '8 hours LED display time',
        '4K resolution',
        'Up to 5 content rotations',
        'GPS tracking',
        'Performance report'
      ]
    },
    {
      name: 'LED Week Package',
      price: '$5,499/week',
      description: 'Sustained LED presence across Miami',
      features: [
        '40 hours LED display',
        'Unlimited content updates',
        'Video + static content',
        'Heat map analytics',
        'A/B testing capability',
        'Priority routes'
      ],
      popular: true
    },
    {
      name: 'LED Month Campaign',
      price: '$18,999/month',
      description: 'Dominate Miami with continuous LED presence',
      features: [
        '160 hours LED coverage',
        'Multiple truck coordination',
        'Advanced analytics suite',
        'Content production included',
        'Dedicated campaign manager',
        'Custom reporting dashboard'
      ]
    },
    {
      name: 'LED Fleet Package',
      price: 'Custom Quote',
      description: 'Multiple LED trucks for major campaigns',
      features: [
        '2-5 LED trucks',
        'Synchronized displays',
        'Event takeovers',
        'Cross-market coverage',
        'Production team support',
        'Real-time optimization'
      ],
      customQuote: true
    }
  ],

  faqs: [
    {
      question: 'How bright are LED trucks compared to traditional billboards in Miami?',
      answer: 'Our LED trucks feature 10,000+ nits brightness, making them 5-10 times brighter than traditional billboards. This ensures perfect visibility even in Miami\'s intense sunlight and competes effectively with the bright lights of South Beach and Downtown Miami at night.'
    },
    {
      question: 'Can LED truck displays show video content?',
      answer: 'Yes! Our 4K LED displays support full-motion video at 60fps, allowing for dynamic content including commercials, product demos, animations, and live feeds. This video capability significantly increases engagement compared to static images.'
    },
    {
      question: 'How do LED trucks handle Miami\'s weather conditions?',
      answer: 'Our LED panels are IP65-rated for complete weather protection against Miami\'s rain, humidity, and salt air. The displays automatically adjust brightness based on ambient conditions and include anti-glare technology for optimal viewing in all weather.'
    },
    {
      question: 'What file formats do LED trucks support?',
      answer: 'We support all major formats including MP4, MOV, AVI for video and JPG, PNG for static images. Our team provides free content optimization to ensure your creative looks perfect on our 4K displays. We can also stream content directly from URLs.'
    },
    {
      question: 'How quickly can I change content on an LED truck?',
      answer: 'Content can be updated instantly via our cloud-based system. Whether you want to promote happy hour specials, flash sales, or respond to real-time events, changes can be pushed to the truck within minutes from any device.'
    }
  ],

  relatedServices: [
    {
      title: 'Digital Mobile Billboards Miami',
      description: 'Complete digital advertising solutions',
      href: '/locations/miami/services/digital-mobile-billboards',
      icon: 'Smartphone'
    },
    {
      title: 'Event Advertising Miami',
      description: 'LED trucks for major Miami events',
      href: '/locations/miami/services/event-advertising',
      icon: 'Calendar'
    },
    {
      title: 'Mobile Billboard Advertising Miami',
      description: 'Traditional and LED options available',
      href: '/locations/miami/services/mobile-billboard-advertising',
      icon: 'Truck'
    }
  ],

  testimonials: [
    {
      name: 'Michael Thompson',
      company: 'Miami Nightclub Group',
      role: 'Marketing Manager',
      content: 'The LED trucks transformed our event promotion. The video capabilities let us showcase our venue atmosphere, and the brightness cuts through even in South Beach. Best ROI we\'ve seen.',
      rating: 5
    },
    {
      name: 'Isabella Garcia',
      company: 'Luxury Auto Dealership',
      role: 'General Manager',
      content: 'Being able to display our vehicles in full 4K video while driving through Coral Gables and Coconut Grove was incredible. The quality rivals our showroom displays.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Miami Tech Conference',
      role: 'Event Director',
      content: 'The LED trucks were essential for our conference promotion. Real-time content updates allowed us to display speaker announcements and ticket availability. Attendance increased 35%.',
      rating: 5
    }
  ],

  gallery: [
    {
      src: '/images/miami-led-truck-downtown.jpg',
      alt: 'LED truck advertising in Downtown Miami'
    },
    {
      src: '/images/miami-4k-display-brickell.jpg',
      alt: '4K LED display truck in Brickell'
    },
    {
      src: '/images/miami-led-night-wynwood.jpg',
      alt: 'LED truck at night in Wynwood'
    },
    {
      src: '/images/miami-video-billboard-beach.jpg',
      alt: 'Video billboard truck on Miami Beach'
    }
  ],

  serviceAreas: [
    'Downtown Miami',
    'Brickell Financial District',
    'Wynwood Arts District',
    'Design District',
    'Miami Beach',
    'South Beach',
    'Coral Gables',
    'Coconut Grove',
    'Midtown Miami',
    'Edgewater',
    'Key Biscayne',
    'Aventura Mall Area',
    'Dadeland',
    'Miracle Mile',
    'Bayfront Park Area'
  ]
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LED Truck Advertising in Miami',
  description: 'Premium LED truck advertising services in Miami featuring 4K displays, video capabilities, and 10,000+ nits brightness for maximum visibility day and night.',
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
    name: 'LED Truck Advertising Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Daily LED Truck Campaign',
          description: '8 hours of 4K LED truck advertising in Miami'
        },
        price: '999.00',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Weekly LED Truck Campaign',
          description: '40 hours of LED truck advertising with unlimited updates'
        },
        price: '5499.00',
        priceCurrency: 'USD'
      }
    ]
  }
}

export default function MiamiLEDTruckPage() {
  return (
    <>
      <Script
        id="miami-led-truck-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <ServicePageTemplate {...transformServiceData(miamiLEDTruckData)} />
      <Footer />
      <FloatingContact />
    </>
  )
}