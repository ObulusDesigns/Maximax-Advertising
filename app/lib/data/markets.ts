import { MarketData, MarketCategory } from '@/app/types'

export const marketsData: MarketData[] = [
  // Healthcare Markets
  {
    industry: 'Plastic Surgeons',
    slug: 'plastic-surgeons',
    tagline: 'Elevate Your Practice with Premium Mobile Billboard Advertising',
    description: 'Reach high-value patients actively seeking cosmetic procedures. Our mobile billboards target affluent neighborhoods, shopping districts, and medical corridors where your ideal patients live, work, and shop.',
    painPoints: [
      'High competition for premium patients',
      'Expensive traditional advertising with poor ROI',
      'Difficulty reaching specific demographics',
      'Need for discrete, professional marketing'
    ],
    solutions: [
      {
        title: 'Targeted Geographic Campaigns',
        description: 'Focus on affluent zip codes and luxury shopping areas where potential patients frequent'
      },
      {
        title: 'Professional Creative Services',
        description: 'Medical-compliant designs that maintain your practice\'s premium brand image'
      },
      {
        title: 'Flexible Scheduling',
        description: 'Run campaigns during peak decision-making times and seasons'
      }
    ],
    benefits: [
      'Reach patients with disposable income',
      'Build brand awareness in target communities',
      'Drive consultations and bookings',
      'Complement digital marketing efforts',
      'Track campaign performance with GPS data'
    ],
    stats: {
      roi: '425% ROI',
      reach: '50,000+ Daily',
      engagement: '3.2% CTR'
    },
    caseStudy: {
      title: 'Miami Beach Cosmetic Surgery Center',
      result: 'Increased consultations by 67%',
      metric: '$180,000 in attributed revenue'
    },
    faqs: [
      {
        question: 'How do mobile billboards help plastic surgery practices?',
        answer: 'Mobile billboards allow you to target affluent areas where potential patients live and shop, building brand awareness and driving consultations. Our GPS-tracked routes ensure maximum visibility in high-value neighborhoods.'
      },
      {
        question: 'What areas work best for plastic surgery advertising?',
        answer: 'Luxury shopping districts, country clubs, high-end residential areas, and medical corridors near your practice consistently deliver the best results for cosmetic surgery advertising.'
      },
      {
        question: 'Can you help with HIPAA-compliant advertising?',
        answer: 'Yes, our team understands medical advertising regulations and ensures all creative content is HIPAA-compliant while still being effective and engaging.'
      }
    ],
    relatedMarkets: ['chiropractors', 'med-spas', 'dermatologists'],
    keywords: ['plastic surgery advertising', 'cosmetic surgery marketing', 'medical billboard advertising']
  },
  {
    industry: 'Chiropractors',
    slug: 'chiropractors',
    tagline: 'Drive New Patients to Your Chiropractic Practice',
    description: 'Connect with patients seeking pain relief and wellness solutions. Our mobile billboards target busy professionals, athletes, and health-conscious individuals throughout your service area.',
    painPoints: [
      'Difficulty attracting new patients',
      'Competition from other healthcare providers',
      'Limited marketing budget',
      'Need for consistent patient flow'
    ],
    solutions: [
      {
        title: 'Community-Focused Routes',
        description: 'Target gyms, offices, and residential areas where back pain sufferers are found'
      },
      {
        title: 'Educational Messaging',
        description: 'Highlight specific conditions you treat and insurance acceptance'
      },
      {
        title: 'Event Marketing',
        description: 'Presence at sports events, health fairs, and community gatherings'
      }
    ],
    benefits: [
      'Build local practice awareness',
      'Attract insurance and cash patients',
      'Establish authority in your community',
      'Cost-effective patient acquisition',
      'Measurable campaign results'
    ],
    stats: {
      roi: '380% ROI',
      reach: '40,000+ Daily',
      engagement: '2.8% CTR'
    },
    caseStudy: {
      title: 'Fort Lauderdale Spine & Wellness',
      result: 'Added 45 new patients monthly',
      metric: '$72,000 monthly revenue increase'
    },
    faqs: [
      {
        question: 'How effective are mobile billboards for chiropractors?',
        answer: 'Mobile billboards are highly effective for chiropractors, typically generating 15-30 new patients per month when targeting the right areas. The visual impact helps build trust and name recognition in your community.'
      },
      {
        question: 'What message works best for chiropractic advertising?',
        answer: 'Focus on pain relief, insurance acceptance, and specific conditions you treat. Messages like "Back Pain Relief" or "Auto Accident Injuries" with your phone number drive immediate response.'
      },
      {
        question: 'Can I target specific neighborhoods?',
        answer: 'Absolutely! We create custom routes focusing on neighborhoods within your service radius, ensuring you reach potential patients who can easily visit your practice.'
      }
    ],
    relatedMarkets: ['plastic-surgeons', 'physical-therapists', 'pain-management'],
    keywords: ['chiropractor advertising', 'chiropractic marketing', 'healthcare billboard advertising']
  },

  // Legal Markets
  {
    industry: 'Personal Injury Lawyers',
    slug: 'personal-injury-lawyers',
    tagline: 'Dominate Your Market with High-Impact Legal Advertising',
    description: 'Be the first law firm accident victims think of. Our mobile billboards create massive brand awareness along high-traffic routes and accident-prone areas, ensuring top-of-mind recall when people need legal help.',
    painPoints: [
      'Saturated TV and radio advertising',
      'High cost per case acquisition',
      'Need for immediate brand recall',
      'Competition from large firms'
    ],
    solutions: [
      {
        title: 'Strategic Route Planning',
        description: 'Target high-accident corridors, hospitals, and courthouse areas'
      },
      {
        title: 'Memorable Creative Design',
        description: 'Bold messaging that creates instant brand recognition'
      },
      {
        title: 'Multi-Language Campaigns',
        description: 'Reach diverse communities with bilingual advertising'
      }
    ],
    benefits: [
      'Dominate local legal market',
      'Lower cost per case than TV',
      'Build massive brand awareness',
      'Target specific case types',
      'Track ROI with call tracking'
    ],
    stats: {
      roi: '850% ROI',
      reach: '75,000+ Daily',
      engagement: '4.5% CTR'
    },
    caseStudy: {
      title: 'Miami Personal Injury Firm',
      result: 'Generated 120 qualified leads monthly',
      metric: '$2.4M in case value'
    },
    faqs: [
      {
        question: 'Why are mobile billboards effective for personal injury lawyers?',
        answer: 'Mobile billboards create massive brand awareness at a fraction of TV advertising costs. They target high-accident areas and build name recognition, ensuring you\'re the first firm people think of after an accident.'
      },
      {
        question: 'How do you measure ROI for legal advertising?',
        answer: 'We track calls, website visits, and case intake using unique phone numbers and landing pages. Most firms see 5-10x ROI within 90 days, with costs per case 60% lower than traditional media.'
      },
      {
        question: 'Can you target specific types of cases?',
        answer: 'Yes, we customize routes and messaging for specific case types - auto accidents near highways, slip-and-fall near shopping centers, and workers\' comp near industrial areas.'
      }
    ],
    relatedMarkets: ['immigration-lawyers', 'criminal-defense', 'family-law'],
    keywords: ['personal injury advertising', 'lawyer billboard advertising', 'legal marketing']
  },
  {
    industry: 'Immigration Lawyers',
    slug: 'immigration-lawyers',
    tagline: 'Connect with Immigrant Communities Through Targeted Mobile Advertising',
    description: 'Reach diverse communities seeking immigration services. Our bilingual mobile billboards build trust and awareness in neighborhoods where your future clients live, work, and gather.',
    painPoints: [
      'Reaching diverse language communities',
      'Building trust with immigrant populations',
      'Competition from notarios and consultants',
      'Limited advertising budgets'
    ],
    solutions: [
      {
        title: 'Multilingual Messaging',
        description: 'Advertising in Spanish, Creole, Portuguese, and other languages'
      },
      {
        title: 'Community-Centered Routes',
        description: 'Target cultural centers, international markets, and diverse neighborhoods'
      },
      {
        title: 'Trust-Building Creative',
        description: 'Professional designs that establish credibility and expertise'
      }
    ],
    benefits: [
      'Build trust in immigrant communities',
      'Reach non-English speaking clients',
      'Establish local presence',
      'Cost-effective multicultural marketing',
      'Generate consistent case flow'
    ],
    stats: {
      roi: '620% ROI',
      reach: '55,000+ Daily',
      engagement: '3.8% CTR'
    },
    caseStudy: {
      title: 'Broward Immigration Law Center',
      result: 'Increased consultations by 85%',
      metric: '$450,000 in new retainers'
    },
    faqs: [
      {
        question: 'How do mobile billboards reach immigrant communities?',
        answer: 'We target neighborhoods with high immigrant populations, international markets, cultural centers, and consulates. Multilingual messaging ensures your services are understood by diverse communities.'
      },
      {
        question: 'Can you advertise in multiple languages?',
        answer: 'Yes, we create campaigns in Spanish, Creole, Portuguese, and other languages. Our bilingual designs effectively communicate your services while building cultural trust.'
      },
      {
        question: 'What immigration services work best for billboard advertising?',
        answer: 'Green cards, citizenship, work permits, and family petitions generate the strongest response. Clear messaging about free consultations and payment plans also drives calls.'
      }
    ],
    relatedMarkets: ['personal-injury-lawyers', 'tax-attorneys', 'family-law'],
    keywords: ['immigration lawyer advertising', 'bilingual legal marketing', 'Hispanic attorney advertising']
  },

  // Construction & Home Services Markets
  {
    industry: 'Home Builders',
    slug: 'home-builders',
    tagline: 'Showcase New Communities and Drive Sales with Mobile Billboards',
    description: 'Generate buyer interest and drive traffic to your model homes and sales centers. Our mobile billboards create buzz around new developments and reach qualified buyers where they live and work.',
    painPoints: [
      'Driving traffic to new developments',
      'Standing out in competitive markets',
      'Reaching qualified buyers',
      'Long sales cycles'
    ],
    solutions: [
      {
        title: 'Grand Opening Campaigns',
        description: 'Create excitement and drive traffic to model home openings'
      },
      {
        title: 'Targeted Demographics',
        description: 'Reach move-up buyers, retirees, and first-time homeowners'
      },
      {
        title: 'Community Presence',
        description: 'Maintain visibility throughout the sales cycle'
      }
    ],
    benefits: [
      'Drive model home traffic',
      'Build development awareness',
      'Target specific buyer demographics',
      'Support sales team efforts',
      'Track visitor attribution'
    ],
    stats: {
      roi: '720% ROI',
      reach: '60,000+ Daily',
      engagement: '4.2% CTR'
    },
    caseStudy: {
      title: 'Palm Beach County Development',
      result: '45% increase in weekend traffic',
      metric: '18 homes sold in 60 days'
    },
    faqs: [
      {
        question: 'How do mobile billboards help sell new homes?',
        answer: 'Mobile billboards create awareness of new developments and drive traffic to sales centers. They\'re especially effective for grand openings, reaching qualified buyers in target neighborhoods.'
      },
      {
        question: 'What areas should we target for new home sales?',
        answer: 'Target apartment complexes (renters ready to buy), established neighborhoods (move-up buyers), and commercial areas where your demographic works. Weekend routes near shopping centers also drive traffic.'
      },
      {
        question: 'Can you coordinate with our sales events?',
        answer: 'Absolutely! We time campaigns around grand openings, broker events, and special promotions. Many builders use us for sustained campaigns throughout their sales cycle.'
      }
    ],
    relatedMarkets: ['real-estate-agents', 'mortgage-brokers', 'interior-designers'],
    keywords: ['home builder advertising', 'new construction marketing', 'real estate billboard advertising']
  },
  {
    industry: 'Impact Windows & Doors',
    slug: 'impact-windows-doors',
    tagline: 'Storm-Proof Your Marketing with High-Impact Mobile Billboards',
    description: 'Reach homeowners actively seeking hurricane protection. Our mobile billboards target coastal communities and storm-prone areas, driving leads for impact window and door installations.',
    painPoints: [
      'Seasonal demand fluctuations',
      'High competition for leads',
      'Expensive lead generation costs',
      'Building trust with homeowners'
    ],
    solutions: [
      {
        title: 'Hurricane Season Campaigns',
        description: 'Increase visibility before and during storm season'
      },
      {
        title: 'Insurance Messaging',
        description: 'Highlight insurance discounts and financing options'
      },
      {
        title: 'Neighborhood Targeting',
        description: 'Focus on coastal and high-risk areas'
      }
    ],
    benefits: [
      'Generate qualified leads',
      'Build brand recognition',
      'Target storm-prone areas',
      'Complement digital marketing',
      'Seasonal campaign flexibility'
    ],
    stats: {
      roi: '580% ROI',
      reach: '45,000+ Daily',
      engagement: '3.5% CTR'
    },
    caseStudy: {
      title: 'South Florida Impact Windows',
      result: '125 installation leads monthly',
      metric: '$850,000 in sales'
    },
    faqs: [
      {
        question: 'When should impact window companies advertise?',
        answer: 'Year-round visibility is important, but campaigns should intensify May through November (hurricane season). Post-storm periods also generate high demand as homeowners seek protection.'
      },
      {
        question: 'What messaging works for impact windows?',
        answer: 'Focus on hurricane protection, insurance savings (up to 40% off), noise reduction, and security benefits. Include financing options and free estimate offers to drive immediate response.'
      },
      {
        question: 'Which areas generate the most leads?',
        answer: 'Coastal communities, older neighborhoods with original windows, and areas recently affected by storms. Target homeowners, not renters, by focusing on single-family home neighborhoods.'
      }
    ],
    relatedMarkets: ['roofing', 'home-builders', 'general-contractors'],
    keywords: ['impact window advertising', 'hurricane window marketing', 'storm door advertising']
  },
  {
    industry: 'Roofing',
    slug: 'roofing',
    tagline: 'Top-of-Mind Roofing Advertising That Covers Your Market',
    description: 'Be the first roofer homeowners call after storms. Our mobile billboards build brand awareness year-round and position you as the trusted local roofing expert when damage occurs.',
    painPoints: [
      'Intense competition for storm damage work',
      'Out-of-state storm chasers',
      'Seasonal business fluctuations',
      'High customer acquisition costs'
    ],
    solutions: [
      {
        title: 'Storm Response Campaigns',
        description: 'Rapid deployment after severe weather events'
      },
      {
        title: 'Year-Round Presence',
        description: 'Build brand recognition before storms hit'
      },
      {
        title: 'Trust-Building Messages',
        description: 'Emphasize local, licensed, and insured status'
      }
    ],
    benefits: [
      'Dominate post-storm market',
      'Build local trust and credibility',
      'Generate consistent leads',
      'Combat out-of-state competition',
      'Track lead attribution'
    ],
    stats: {
      roi: '680% ROI',
      reach: '50,000+ Daily',
      engagement: '4.0% CTR'
    },
    caseStudy: {
      title: 'Broward County Roofing Co',
      result: 'First call for 70% of storm claims',
      metric: '$1.2M in storm repairs'
    },
    faqs: [
      {
        question: 'How quickly can you deploy after a storm?',
        answer: 'We can have trucks running within 24 hours of a storm event. Pre-positioned campaigns ensure you\'re the first roofer homeowners see when assessing damage.'
      },
      {
        question: 'What roofing messages drive the most calls?',
        answer: 'Free inspections, insurance claim assistance, local/licensed/insured status, and 24/7 emergency service. Post-storm, emphasize immediate availability and tarping services.'
      },
      {
        question: 'How do we compete with storm chasers?',
        answer: 'Emphasize your local presence, permanent location, warranties, and community reputation. Mobile billboards reinforce that you\'re the established, trusted local choice.'
      }
    ],
    relatedMarkets: ['impact-windows-doors', 'general-contractors', 'restoration-companies'],
    keywords: ['roofing advertising', 'storm damage marketing', 'roofer billboard advertising']
  },
  {
    industry: 'HVAC',
    slug: 'hvac',
    tagline: 'Keep Your HVAC Business Hot with Mobile Billboard Advertising',
    description: 'Stay top-of-mind when AC units fail. Our mobile billboards ensure you\'re the first call for emergency repairs and replacements, targeting residential and commercial customers throughout your service area.',
    painPoints: [
      'Seasonal demand swings',
      'Emergency service competition',
      'High cost per lead',
      'Building service contract base'
    ],
    solutions: [
      {
        title: 'Seasonal Campaigns',
        description: 'Intensify presence during peak cooling and heating seasons'
      },
      {
        title: 'Emergency Service Focus',
        description: 'Emphasize 24/7 availability and same-day service'
      },
      {
        title: 'Maintenance Plan Promotion',
        description: 'Build recurring revenue through service contracts'
      }
    ],
    benefits: [
      'Generate emergency service calls',
      'Build brand recognition',
      'Promote maintenance plans',
      'Target commercial properties',
      'Measurable ROI tracking'
    ],
    stats: {
      roi: '520% ROI',
      reach: '55,000+ Daily',
      engagement: '3.3% CTR'
    },
    caseStudy: {
      title: 'Miami-Dade HVAC Services',
      result: '90 new service contracts',
      metric: '$480,000 annual recurring revenue'
    },
    faqs: [
      {
        question: 'When should HVAC companies advertise?',
        answer: 'Run campaigns year-round with increased frequency during seasonal transitions (April-May for cooling, October-November for heating) and extreme weather periods when systems fail most.'
      },
      {
        question: 'What HVAC services should we promote?',
        answer: 'Emergency repairs, maintenance plans, and system replacements generate the best response. Include financing options and current promotions to drive immediate action.'
      },
      {
        question: 'Can we target commercial properties?',
        answer: 'Yes, we create routes focusing on office parks, retail centers, and industrial areas during business hours. Commercial HVAC contracts often result from consistent visibility.'
      }
    ],
    relatedMarkets: ['plumbing', 'electrical', 'appliance-repair'],
    keywords: ['HVAC advertising', 'air conditioning marketing', 'heating and cooling billboard']
  }
]

// Helper functions to work with markets data

export function getMarketBySlug(slug: string): MarketData | undefined {
  return marketsData.find(market => market.slug === slug)
}

export function getAllMarketSlugs(): string[] {
  return marketsData.map(market => market.slug)
}

export function getMarketsByCategory(category: string): MarketData[] {
  // Map industries to categories
  const categoryMap: Record<string, string[]> = {
    healthcare: ['Plastic Surgeons', 'Chiropractors'],
    legal: ['Personal Injury Lawyers', 'Immigration Lawyers'],
    construction: ['Home Builders', 'Impact Windows & Doors', 'Roofing', 'HVAC']
  }
  
  const industries = categoryMap[category.toLowerCase()] || []
  return marketsData.filter(market => industries.includes(market.industry))
}

export function searchMarkets(query: string): MarketData[] {
  const lowerQuery = query.toLowerCase()
  return marketsData.filter(market => 
    market.industry.toLowerCase().includes(lowerQuery) ||
    market.description.toLowerCase().includes(lowerQuery) ||
    market.tagline.toLowerCase().includes(lowerQuery)
  )
}

export function getRelatedMarkets(slug: string, limit: number = 3): MarketData[] {
  const market = getMarketBySlug(slug)
  if (!market || !market.relatedMarkets) return []
  
  return market.relatedMarkets
    .slice(0, limit)
    .map(relatedSlug => getMarketBySlug(relatedSlug))
    .filter((m): m is MarketData => m !== undefined)
}