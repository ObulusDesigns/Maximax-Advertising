import { ServiceData, ServiceType } from '@/app/types'

export const servicesData: ServiceData[] = [
  {
    serviceName: 'Mobile Billboard Trucks',
    slug: 'mobile-billboard-trucks',
    tagline: 'High-Impact Advertising That Moves With Your Audience',
    description: 'Our fleet of mobile billboard trucks delivers your message directly to your target audience. With 4K LED displays and GPS tracking, we ensure maximum visibility and ROI for your advertising campaign throughout South Florida.',
    features: [
      {
        icon: 'Truck',
        title: 'Premium Fleet',
        description: 'Modern, well-maintained trucks with high-visibility displays that command attention on any route'
      },
      {
        icon: 'MapPin',
        title: 'Strategic Routing',
        description: 'Custom routes designed to maximize exposure in your target areas and demographics'
      },
      {
        icon: 'Clock',
        title: 'Flexible Scheduling',
        description: 'Choose your campaign duration and timing to align with your marketing objectives'
      },
      {
        icon: 'Shield',
        title: 'Weather Resistant',
        description: 'All-weather displays ensure your message is visible rain or shine'
      }
    ],
    benefits: [
      {
        title: 'Unavoidable Visibility',
        description: 'Unlike static billboards, our trucks bring your message directly to your audience',
        metric: '97% recall rate'
      },
      {
        title: 'Cost-Effective Reach',
        description: 'Lower cost per thousand impressions than traditional billboard advertising',
        metric: '60% less than static billboards'
      },
      {
        title: 'Targeted Coverage',
        description: 'Reach specific neighborhoods, events, and demographics with precision',
        metric: '100% targeted routing'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'We discuss your goals, target audience, and campaign objectives',
        icon: 'MessageCircle'
      },
      {
        step: 2,
        title: 'Route Planning',
        description: 'Our team designs optimal routes based on your target demographics',
        icon: 'Map'
      },
      {
        step: 3,
        title: 'Creative Design',
        description: 'Professional designers create eye-catching displays for maximum impact',
        icon: 'Palette'
      },
      {
        step: 4,
        title: 'Campaign Launch',
        description: 'Your mobile billboard hits the streets with real-time GPS tracking',
        icon: 'Rocket'
      }
    ],
    pricing: [
      {
        name: 'Day Campaign',
        price: '$800/day',
        description: 'Perfect for events and short-term promotions',
        features: [
          '8 hours of display time',
          'GPS tracking included',
          'Custom routing',
          'Campaign report'
        ]
      },
      {
        name: 'Week Campaign',
        price: '$4,500/week',
        description: 'Build brand awareness with sustained visibility',
        features: [
          '40 hours of display time',
          'GPS tracking included',
          'Route optimization',
          'Weekly performance reports',
          '10% discount'
        ],
        popular: true
      },
      {
        name: 'Month Campaign',
        price: '$15,000/month',
        description: 'Maximum impact with continuous presence',
        features: [
          '160 hours of display time',
          'GPS tracking included',
          'Dynamic route adjustments',
          'Detailed analytics dashboard',
          '20% discount',
          'Creative updates included'
        ]
      },
      {
        name: 'Custom Campaign',
        price: 'Contact Us',
        description: 'Tailored solutions for unique requirements',
        features: [
          'Multiple trucks available',
          'Multi-market campaigns',
          'Event partnerships',
          'Seasonal campaigns',
          'Annual contracts'
        ],
        customQuote: true
      }
    ],
    faqs: [
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 2 weeks in advance to ensure availability and allow time for creative development. However, we can accommodate rush orders based on fleet availability.'
      },
      {
        question: 'What areas do your trucks cover?',
        answer: 'Our trucks cover all of South Florida including Miami-Dade, Broward, and Palm Beach counties. We can create custom routes to target specific neighborhoods, business districts, or event venues.'
      },
      {
        question: 'Can I change my route during the campaign?',
        answer: 'Yes! One of the advantages of mobile billboards is flexibility. We can adjust routes based on traffic patterns, events, or your changing needs with 24-hour notice.'
      },
      {
        question: 'Do you provide design services?',
        answer: 'Yes, we offer professional design services to create compelling billboard creative. Our designers understand what works best for mobile displays and can help maximize your message impact.'
      }
    ],
    relatedServices: [
      {
        title: 'LED Digital Displays',
        description: 'Stunning 4K visuals that capture attention',
        href: '/services/led-digital-displays',
        icon: 'Monitor'
      },
      {
        title: 'GPS Tracking',
        description: 'Real-time campaign monitoring and reporting',
        href: '/services/gps-tracking',
        icon: 'MapPin'
      },
      {
        title: 'Campaign Management',
        description: 'Full-service campaign planning and execution',
        href: '/services/campaign-management',
        icon: 'Settings'
      }
    ],
    testimonials: [
      {
        name: 'Michael Rodriguez',
        company: 'Miami Beach Restaurant Group',
        role: 'Marketing Director',
        content: 'The mobile billboards drove incredible foot traffic to our grand opening. We saw a 300% increase in first-week sales compared to our other locations.',
        rating: 5
      },
      {
        name: 'Sarah Chen',
        company: 'Aventura Medical Center',
        role: 'CEO',
        content: 'Professional service and amazing results. Our patient inquiries increased by 150% during the campaign. The GPS tracking gave us confidence in the value we received.',
        rating: 5
      }
    ],
    schema: {
      name: 'Mobile Billboard Truck Advertising',
      description: 'Premium mobile billboard advertising services in South Florida with GPS-tracked trucks and 4K LED displays',
      provider: {
        name: 'Maximax Advertising',
        url: 'https://maximaxmobileadvertising.com'
      },
      areaServed: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
      serviceType: 'Mobile Advertising',
      priceRange: '$800-$15,000'
    },
    cta: {
      primary: {
        text: 'Get Free Quote',
        href: 'https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436',
        isExternal: true
      },
      secondary: {
        text: 'View Routes',
        href: '/services/coverage-areas'
      }
    },
    stats: {
      coverage: 'Tri-County Area',
      impressions: '50,000+ Daily',
      availability: '7 Days/Week'
    },
    keywords: ['mobile billboard trucks', 'advertising trucks', 'LED billboard trucks', 'mobile advertising']
  },
  {
    serviceName: 'LED Digital Displays',
    slug: 'led-digital-displays',
    tagline: 'Brilliant 4K Displays That Demand Attention',
    description: 'Our state-of-the-art LED digital displays deliver crystal-clear messaging with stunning visual impact. Perfect for video content, animations, and dynamic advertising that captures attention day and night.',
    features: [
      {
        icon: 'Monitor',
        title: '4K Resolution',
        description: 'Ultra-high definition displays ensure your message is crisp and clear from any distance'
      },
      {
        icon: 'Sun',
        title: 'Daylight Visible',
        description: 'High-brightness LEDs remain vibrant even in direct Florida sunshine'
      },
      {
        icon: 'Video',
        title: 'Video Capable',
        description: 'Display full-motion video, animations, and dynamic content'
      },
      {
        icon: 'Smartphone',
        title: 'Remote Updates',
        description: 'Change your message instantly from anywhere via our cloud platform'
      }
    ],
    benefits: [
      {
        title: 'Maximum Impact',
        description: 'Moving digital displays generate 2.5x more attention than static signage',
        metric: '250% more engagement'
      },
      {
        title: 'Content Flexibility',
        description: 'Update messages in real-time for promotions, events, or time-sensitive offers',
        metric: 'Instant updates'
      },
      {
        title: 'Night Visibility',
        description: 'Illuminated displays work 24/7, maximizing your advertising investment',
        metric: '24/7 visibility'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Content Planning',
        description: 'Determine optimal content strategy for your campaign goals',
        icon: 'FileText'
      },
      {
        step: 2,
        title: 'Creative Development',
        description: 'Design compelling visuals optimized for LED display',
        icon: 'Palette'
      },
      {
        step: 3,
        title: 'Technical Setup',
        description: 'Configure displays for optimal brightness and clarity',
        icon: 'Settings'
      },
      {
        step: 4,
        title: 'Performance Monitoring',
        description: 'Track engagement and optimize content based on results',
        icon: 'BarChart3'
      }
    ],
    pricing: [
      {
        name: 'Static Display',
        price: '$600/day',
        description: 'Single image or simple rotation',
        features: [
          'Up to 3 static images',
          'Automatic rotation',
          'Daylight optimization',
          'Basic analytics'
        ]
      },
      {
        name: 'Dynamic Display',
        price: '$900/day',
        description: 'Animated content and transitions',
        features: [
          'Unlimited image rotation',
          'Animated transitions',
          'Time-based scheduling',
          'Engagement analytics',
          'A/B testing capability'
        ],
        popular: true
      },
      {
        name: 'Video Display',
        price: '$1,200/day',
        description: 'Full video and motion graphics',
        features: [
          'HD video content',
          'Sound capability',
          'Live content updates',
          'Advanced analytics',
          'Content management system',
          'Professional video editing'
        ]
      }
    ],
    faqs: [
      {
        question: 'What file formats do you accept?',
        answer: 'We accept all major formats including JPG, PNG, GIF, MP4, and MOV. Our team can also help convert your existing marketing materials to optimal formats for LED display.'
      },
      {
        question: 'How bright are the LED displays?',
        answer: 'Our displays feature 6,000+ nits brightness, ensuring perfect visibility even in direct sunlight. The brightness automatically adjusts based on ambient light conditions.'
      },
      {
        question: 'Can I update content during the campaign?',
        answer: 'Absolutely! With our cloud-based content management system, you can update your display content in real-time from any device. Perfect for flash sales or event updates.'
      },
      {
        question: 'Do LED displays work in rain?',
        answer: 'Yes, our LED displays are fully weatherproof with IP65 rating. They perform perfectly in all Florida weather conditions including rain, humidity, and intense sun.'
      }
    ],
    relatedServices: [
      {
        title: 'Mobile Billboard Trucks',
        description: 'Combine with our truck fleet for maximum reach',
        href: '/services/mobile-billboard-trucks',
        icon: 'Truck'
      },
      {
        title: '4K Screens',
        description: 'Ultra-high definition display technology',
        href: '/services/4k-screens',
        icon: 'Tv'
      }
    ],
    testimonials: [
      {
        name: 'Jennifer Park',
        company: 'Brickell Luxury Condos',
        role: 'Sales Director',
        content: 'The LED displays showcased our properties beautifully. The ability to show video walkthroughs while driving past competitor buildings was a game-changer.',
        rating: 5
      }
    ],
    schema: {
      name: 'LED Digital Display Advertising',
      description: 'High-resolution LED digital billboard displays for mobile advertising in South Florida',
      provider: {
        name: 'Maximax Advertising',
        url: 'https://maximaxmobileadvertising.com'
      },
      areaServed: ['Miami', 'Fort Lauderdale', 'West Palm Beach'],
      serviceType: 'Digital Advertising Display',
      priceRange: '$600-$1,200 per day'
    },
    cta: {
      primary: {
        text: 'See Display Options',
        href: 'https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436',
        isExternal: true
      },
      secondary: {
        text: 'View Gallery',
        href: '/gallery'
      }
    },
    stats: {
      screenSize: '48 sq ft',
      impressions: '60,000+ Daily',
      availability: 'All Weather'
    },
    keywords: ['LED digital displays', '4K billboard', 'digital mobile advertising', 'video billboard']
  },
  {
    serviceName: 'GPS Tracking',
    slug: 'gps-tracking',
    tagline: 'Real-Time Visibility and Performance Analytics',
    description: 'Know exactly where your advertising dollars are working. Our GPS tracking system provides real-time location data, route verification, and detailed analytics to measure campaign effectiveness.',
    features: [
      {
        icon: 'MapPin',
        title: 'Live Tracking',
        description: 'Monitor your billboard location in real-time through our web portal'
      },
      {
        icon: 'Route',
        title: 'Route Verification',
        description: 'Confirm trucks follow planned routes and reach target areas'
      },
      {
        icon: 'Clock',
        title: 'Time Analytics',
        description: 'Track display hours and dwell time in key locations'
      },
      {
        icon: 'BarChart3',
        title: 'Performance Reports',
        description: 'Detailed analytics on impressions, reach, and engagement'
      }
    ],
    benefits: [
      {
        title: 'Complete Transparency',
        description: 'See exactly where and when your advertisement is displayed',
        metric: '100% accountability'
      },
      {
        title: 'ROI Measurement',
        description: 'Calculate precise cost per impression based on actual route data',
        metric: 'Accurate CPM data'
      },
      {
        title: 'Route Optimization',
        description: 'Use data insights to improve future campaign performance',
        metric: '30% better targeting'
      }
    ],
    process: [
      {
        step: 1,
        title: 'GPS Installation',
        description: 'Professional-grade GPS units installed on all trucks',
        icon: 'Wifi'
      },
      {
        step: 2,
        title: 'Portal Access',
        description: 'Receive login credentials to tracking dashboard',
        icon: 'Key'
      },
      {
        step: 3,
        title: 'Real-Time Monitoring',
        description: 'Track your campaign live from any device',
        icon: 'Monitor'
      },
      {
        step: 4,
        title: 'Analytics Reports',
        description: 'Receive detailed performance reports',
        icon: 'FileText'
      }
    ],
    pricing: [
      {
        name: 'Basic Tracking',
        price: 'Included Free',
        description: 'Standard with all campaigns',
        features: [
          'Daily location updates',
          'Route verification',
          'Basic reporting',
          'Email summaries'
        ]
      },
      {
        name: 'Advanced Analytics',
        price: '$200/month',
        description: 'Enhanced tracking and insights',
        features: [
          'Real-time tracking',
          'Heat map analysis',
          'Demographic insights',
          'Custom reports',
          'API access'
        ],
        popular: true
      },
      {
        name: 'Enterprise Platform',
        price: 'Custom Pricing',
        description: 'Multi-campaign management',
        features: [
          'Multi-truck tracking',
          'White-label portal',
          'Advanced analytics',
          'Integration capabilities',
          'Dedicated support'
        ],
        customQuote: true
      }
    ],
    faqs: [
      {
        question: 'How accurate is the GPS tracking?',
        answer: 'Our GPS units provide location accuracy within 3 meters, updating every 30 seconds. You\'ll know exactly where your billboard is at all times.'
      },
      {
        question: 'Can I access tracking from my phone?',
        answer: 'Yes! Our tracking portal is fully mobile-responsive. You can monitor your campaign from any smartphone, tablet, or computer with internet access.'
      },
      {
        question: 'What data is included in reports?',
        answer: 'Reports include total miles traveled, time in target zones, estimated impressions, heat maps of coverage, and demographic data for areas covered.'
      },
      {
        question: 'Is tracking data private?',
        answer: 'Absolutely. Each client receives a secure, private login. Your campaign data is confidential and never shared with other advertisers.'
      }
    ],
    relatedServices: [
      {
        title: 'Campaign Management',
        description: 'Professional campaign optimization',
        href: '/services/campaign-management',
        icon: 'Settings'
      },
      {
        title: 'Coverage Areas',
        description: 'Explore our service territories',
        href: '/services/coverage-areas',
        icon: 'Map'
      }
    ],
    testimonials: [
      {
        name: 'David Thompson',
        company: 'Thompson Law Firm',
        role: 'Managing Partner',
        content: 'The GPS tracking gave us complete confidence in our investment. We could see our billboard at the courthouse during peak hours - exactly where we needed it.',
        rating: 5
      }
    ],
    schema: {
      name: 'GPS Billboard Tracking Service',
      description: 'Real-time GPS tracking and analytics for mobile billboard campaigns',
      provider: {
        name: 'Maximax Advertising',
        url: 'https://maximaxmobileadvertising.com'
      },
      areaServed: ['South Florida'],
      serviceType: 'Advertising Analytics',
      priceRange: 'Free-$200'
    },
    cta: {
      primary: {
        text: 'View Demo',
        href: '/contact',
        isExternal: false
      },
      secondary: {
        text: 'Learn More',
        href: '/services'
      }
    },
    stats: {
      trackingAccuracy: '3 meters',
      impressions: 'Real-time data',
      availability: '24/7 Access'
    },
    keywords: ['GPS tracking', 'billboard tracking', 'advertising analytics', 'campaign monitoring']
  },
  {
    serviceName: '4K Screens',
    slug: '4k-screens',
    tagline: 'Ultra-High Definition That Sets You Apart',
    description: 'Experience advertising at its finest with our 4K resolution screens. Four times the pixels of standard HD means your message is delivered with unprecedented clarity and visual impact.',
    features: [
      {
        icon: 'Tv',
        title: '3840x2160 Resolution',
        description: 'Over 8 million pixels for stunning detail and clarity'
      },
      {
        icon: 'Zap',
        title: 'HDR Support',
        description: 'High dynamic range for vibrant colors and deep contrasts'
      },
      {
        icon: 'Maximize',
        title: '48 Square Feet',
        description: 'Large format displays visible from over 500 feet away'
      },
      {
        icon: 'RefreshCw',
        title: '120Hz Refresh',
        description: 'Smooth motion for video content without blur'
      }
    ],
    benefits: [
      {
        title: 'Unmatched Clarity',
        description: 'Text remains sharp and readable even at high speeds',
        metric: '4x sharper than HD'
      },
      {
        title: 'Premium Perception',
        description: 'High-quality displays reflect positively on your brand',
        metric: '73% brand lift'
      },
      {
        title: 'Future-Proof',
        description: 'Ready for next-generation content and creative',
        metric: '5+ year lifespan'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Content Optimization',
        description: 'Prepare your creative for 4K display',
        icon: 'Image'
      },
      {
        step: 2,
        title: 'Quality Check',
        description: 'Test content on actual 4K screens',
        icon: 'CheckCircle'
      },
      {
        step: 3,
        title: 'Calibration',
        description: 'Fine-tune color and brightness settings',
        icon: 'Sliders'
      },
      {
        step: 4,
        title: 'Launch',
        description: 'Deploy your ultra-HD campaign',
        icon: 'Play'
      }
    ],
    pricing: [
      {
        name: 'Standard 4K',
        price: '$1,000/day',
        description: 'Single-sided 4K display',
        features: [
          '4K resolution',
          'Static or animated content',
          'Daylight readable',
          'Weather resistant'
        ]
      },
      {
        name: 'Dual 4K',
        price: '$1,800/day',
        description: 'Double-sided 4K displays',
        features: [
          'Two 4K screens',
          'Different content each side',
          'Maximum visibility',
          'Premium positioning'
        ],
        popular: true
      },
      {
        name: 'Fleet Package',
        price: 'Custom Quote',
        description: 'Multiple 4K trucks',
        features: [
          'Volume discounts',
          'Coordinated campaigns',
          'City-wide coverage',
          'Dedicated management'
        ],
        customQuote: true
      }
    ],
    faqs: [
      {
        question: 'Why choose 4K over standard HD?',
        answer: '4K provides four times the resolution of HD, ensuring your message remains crystal clear even when viewed up close or at high speeds. The superior image quality reflects positively on your brand.'
      },
      {
        question: 'Can you display my existing creative in 4K?',
        answer: 'We can upscale existing content, but for best results we recommend creating native 4K content. Our design team can help optimize your creative for maximum impact.'
      },
      {
        question: 'How do 4K screens perform in sunlight?',
        answer: 'Our 4K screens feature 7,000+ nits brightness and anti-reflective coating, ensuring perfect visibility even in direct Florida sunshine.'
      }
    ],
    relatedServices: [
      {
        title: 'LED Digital Displays',
        description: 'Explore our display technology',
        href: '/services/led-digital-displays',
        icon: 'Monitor'
      },
      {
        title: 'Creative Services',
        description: 'Professional 4K content creation',
        href: '/services/campaign-management',
        icon: 'Palette'
      }
    ],
    testimonials: [
      {
        name: 'Amanda Foster',
        company: 'Luxury Auto Group',
        role: 'Brand Manager',
        content: 'The 4K screens showcased our vehicles with incredible detail. Customers commented they could read the dashboard features from the street!',
        rating: 5
      }
    ],
    schema: {
      name: '4K Billboard Screen Advertising',
      description: 'Ultra-high definition 4K mobile billboard screens for premium advertising',
      provider: {
        name: 'Maximax Advertising',
        url: 'https://maximaxmobileadvertising.com'
      },
      areaServed: ['South Florida'],
      serviceType: '4K Display Advertising',
      priceRange: '$1,000-$1,800 per day'
    },
    cta: {
      primary: {
        text: 'Experience 4K',
        href: 'https://ocyrus.app.n8n.cloud/form/9a151470-e398-4144-9b7d-20941bc9b436',
        isExternal: true
      }
    },
    stats: {
      screenSize: '48 sq ft',
      impressions: '70,000+ Daily',
      availability: '7 Days/Week'
    },
    keywords: ['4K screens', '4K billboard', 'UHD advertising', 'ultra HD mobile billboard']
  },
  {
    serviceName: 'Campaign Management',
    slug: 'campaign-management',
    tagline: 'Full-Service Campaign Planning and Execution',
    description: 'Let our experts handle every aspect of your mobile billboard campaign. From strategy and creative to execution and reporting, we ensure maximum impact and ROI for your advertising investment.',
    features: [
      {
        icon: 'Target',
        title: 'Strategic Planning',
        description: 'Data-driven campaign strategy based on your goals and audience'
      },
      {
        icon: 'Palette',
        title: 'Creative Development',
        description: 'Professional design services optimized for mobile displays'
      },
      {
        icon: 'Calendar',
        title: 'Schedule Management',
        description: 'Optimal timing and routing for maximum impact'
      },
      {
        icon: 'BarChart3',
        title: 'Performance Analytics',
        description: 'Comprehensive reporting and optimization recommendations'
      }
    ],
    benefits: [
      {
        title: 'Expert Guidance',
        description: 'Leverage our experience from hundreds of successful campaigns',
        metric: '500+ campaigns'
      },
      {
        title: 'Time Savings',
        description: 'Focus on your business while we handle campaign details',
        metric: '40 hours saved'
      },
      {
        title: 'Better Results',
        description: 'Professional management typically improves ROI significantly',
        metric: '45% higher ROI'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'Understand your business, goals, and target audience',
        icon: 'Search'
      },
      {
        step: 2,
        title: 'Strategy',
        description: 'Develop comprehensive campaign plan and timeline',
        icon: 'Map'
      },
      {
        step: 3,
        title: 'Execution',
        description: 'Launch and monitor campaign with daily optimization',
        icon: 'Play'
      },
      {
        step: 4,
        title: 'Analysis',
        description: 'Measure results and provide actionable insights',
        icon: 'TrendingUp'
      }
    ],
    pricing: [
      {
        name: 'Basic Management',
        price: '15% of budget',
        description: 'Essential campaign services',
        features: [
          'Route planning',
          'Basic creative assistance',
          'Weekly reports',
          'Phone support'
        ]
      },
      {
        name: 'Full Service',
        price: '25% of budget',
        description: 'Complete campaign management',
        features: [
          'Strategic planning',
          'Professional creative',
          'Daily optimization',
          'Real-time reporting',
          'Dedicated account manager',
          'A/B testing'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Large-scale campaigns',
        features: [
          'Multi-market coordination',
          'Custom analytics',
          'White-glove service',
          'C-suite reporting',
          'Competitive analysis',
          'Quarterly reviews'
        ],
        customQuote: true
      }
    ],
    faqs: [
      {
        question: 'What\'s included in campaign management?',
        answer: 'Our full-service management includes strategy development, creative design, route planning, campaign execution, real-time monitoring, performance optimization, and detailed reporting.'
      },
      {
        question: 'Can you work with our existing creative?',
        answer: 'Absolutely! We can optimize your existing creative for mobile display or create new designs that align with your brand guidelines and campaign objectives.'
      },
      {
        question: 'How do you measure campaign success?',
        answer: 'We track multiple KPIs including impressions, reach, frequency, engagement, website traffic, and conversions. Custom metrics can be configured based on your specific goals.'
      }
    ],
    relatedServices: [
      {
        title: 'GPS Tracking',
        description: 'Monitor campaign performance',
        href: '/services/gps-tracking',
        icon: 'MapPin'
      },
      {
        title: 'Mobile Billboard Trucks',
        description: 'Our premium fleet',
        href: '/services/mobile-billboard-trucks',
        icon: 'Truck'
      }
    ],
    testimonials: [
      {
        name: 'Robert Martinez',
        company: 'Martinez & Associates',
        role: 'CEO',
        content: 'The managed service was worth every penny. They handled everything professionally and our results exceeded expectations by 200%.',
        rating: 5
      }
    ],
    schema: {
      name: 'Mobile Billboard Campaign Management',
      description: 'Professional campaign management services for mobile billboard advertising',
      provider: {
        name: 'Maximax Advertising',
        url: 'https://maximaxmobileadvertising.com'
      },
      areaServed: ['South Florida'],
      serviceType: 'Advertising Management',
      priceRange: '15-25% of campaign budget'
    },
    cta: {
      primary: {
        text: 'Start Planning',
        href: '/contact',
        isExternal: false
      }
    },
    stats: {
      coverage: 'Full Service',
      impressions: 'Optimized Daily',
      availability: 'Dedicated Support'
    },
    keywords: ['campaign management', 'advertising management', 'billboard campaign', 'marketing services']
  },
  {
    serviceName: 'Coverage Areas',
    slug: 'coverage-areas',
    tagline: 'Comprehensive Coverage Across South Florida',
    description: 'From Miami Beach to Palm Beach, our mobile billboards cover all major markets in South Florida. Target specific neighborhoods, business districts, or entire counties with our flexible coverage options.',
    features: [
      {
        icon: 'Map',
        title: 'Tri-County Coverage',
        description: 'Complete coverage of Miami-Dade, Broward, and Palm Beach counties'
      },
      {
        icon: 'Building',
        title: 'Major Cities',
        description: 'Present in all major cities and business districts'
      },
      {
        icon: 'Users',
        title: 'Neighborhood Targeting',
        description: 'Reach specific communities and demographics'
      },
      {
        icon: 'Calendar',
        title: 'Event Coverage',
        description: 'Special event and venue targeting available'
      }
    ],
    benefits: [
      {
        title: 'Wide Reach',
        description: 'Access to over 6 million residents across South Florida',
        metric: '6M+ population'
      },
      {
        title: 'Local Knowledge',
        description: 'Years of experience optimizing routes in each market',
        metric: '10+ years'
      },
      {
        title: 'Flexible Routing',
        description: 'Customize coverage based on your target audience',
        metric: '100% customizable'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Market Selection',
        description: 'Choose your target counties and cities',
        icon: 'MapPin'
      },
      {
        step: 2,
        title: 'Area Analysis',
        description: 'Identify high-impact zones for your audience',
        icon: 'Search'
      },
      {
        step: 3,
        title: 'Route Design',
        description: 'Create optimal paths through target areas',
        icon: 'Route'
      },
      {
        step: 4,
        title: 'Coverage Tracking',
        description: 'Monitor and verify area coverage',
        icon: 'CheckCircle'
      }
    ],
    pricing: [
      {
        name: 'Single City',
        price: '$800/day',
        description: 'Focus on one city',
        features: [
          'One city coverage',
          '8 hours daily',
          'Custom routing',
          'GPS tracking'
        ]
      },
      {
        name: 'County-Wide',
        price: '$1,500/day',
        description: 'Cover entire county',
        features: [
          'Full county coverage',
          'Multiple cities',
          'Strategic routing',
          'Extended hours',
          'Priority scheduling'
        ],
        popular: true
      },
      {
        name: 'Tri-County',
        price: '$3,500/day',
        description: 'Maximum reach',
        features: [
          'All three counties',
          'Multiple trucks',
          'Coordinated campaign',
          'Premium support',
          'Custom analytics'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which areas get the most impressions?',
        answer: 'High-traffic areas like Downtown Miami, Fort Lauderdale Beach, and West Palm Beach CityPlace generate the most impressions. We optimize routes based on your target demographic.'
      },
      {
        question: 'Can you cover multiple cities in one day?',
        answer: 'Yes! Our trucks can cover 2-3 adjacent cities in a single day, or focus deeply on one area for maximum frequency. We customize based on your goals.'
      },
      {
        question: 'Do you cover special events?',
        answer: 'Absolutely! We regularly cover major events like Art Basel, Ultra Music Festival, boat shows, and sporting events. Event coverage can be added to any campaign.'
      }
    ],
    relatedServices: [
      {
        title: 'GPS Tracking',
        description: 'Verify your coverage',
        href: '/services/gps-tracking',
        icon: 'MapPin'
      },
      {
        title: 'Route Planning',
        description: 'Strategic campaign routes',
        href: '/services/campaign-management',
        icon: 'Route'
      }
    ],
    testimonials: [
      {
        name: 'Lisa Wang',
        company: 'Regional Retail Chain',
        role: 'VP Marketing',
        content: 'The ability to cover all our store locations across three counties with one campaign was incredibly efficient. Sales increased at every location.',
        rating: 5
      }
    ],
    schema: {
      name: 'Mobile Billboard Coverage Areas',
      description: 'Comprehensive mobile billboard coverage across South Florida markets',
      provider: {
        name: 'Maximax Advertising',
        url: 'https://maximaxmobileadvertising.com'
      },
      areaServed: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
      serviceType: 'Geographic Coverage',
      priceRange: '$800-$3,500 per day'
    },
    cta: {
      primary: {
        text: 'View Coverage Map',
        href: '/locations',
        isExternal: false
      },
      secondary: {
        text: 'Plan Route',
        href: '/contact'
      }
    },
    stats: {
      coverage: '2,400+ sq mi',
      impressions: '150,000+ Daily',
      availability: 'All Markets'
    },
    keywords: ['coverage areas', 'service areas', 'South Florida advertising', 'mobile billboard coverage']
  }
]

// Helper functions to work with services data

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug)
}

export function getRelatedServices(slug: string, limit: number = 3): ServiceData[] {
  const service = getServiceBySlug(slug)
  if (!service) return []
  
  // Get related services from the current service's relatedServices field
  const relatedSlugs = service.relatedServices
    .slice(0, limit)
    .map(rs => rs.href.replace('/services/', ''))
  
  return relatedSlugs
    .map(relatedSlug => getServiceBySlug(relatedSlug))
    .filter((s): s is ServiceData => s !== undefined)
}

export function searchServices(query: string): ServiceData[] {
  const lowerQuery = query.toLowerCase()
  return servicesData.filter(service => 
    service.serviceName.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery) ||
    service.tagline.toLowerCase().includes(lowerQuery)
  )
}