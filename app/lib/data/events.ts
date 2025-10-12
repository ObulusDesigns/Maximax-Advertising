// Event-Based Marketing Pages for Phase 6
// Targets major South Florida events and seasonal advertising opportunities

export interface EventData {
  name: string
  slug: string
  tagline: string
  description: string
  eventDates: string
  location: string
  targetAudience: string
  strategicRoutes: string[]
  timingStrategy: string
  benefits: string[]
  expectedReach: string
  pricing: string
  faqs: {
    question: string
    answer: string
  }[]
  keywords: string[]
  relatedMarkets: string[]
}

export const eventsData: EventData[] = [
  {
    name: 'Art Basel Miami',
    slug: 'art-basel-advertising',
    tagline: 'Dominate Art Basel Week with Mobile Billboard Advertising',
    description: 'Reach 80,000+ art collectors, luxury buyers, and international visitors during Miami\'s premier art fair. Our mobile LED billboards target Art Basel venues, Wynwood galleries, Design District events, and Miami Beach locations throughout Art Week.',
    eventDates: 'December 6-10, 2025 (Art Week: Dec 4-10)',
    location: 'Miami Beach Convention Center, Wynwood, Design District, Miami Beach',
    targetAudience: 'Art collectors, luxury brands, galleries, high-net-worth individuals, international visitors, cultural enthusiasts, VIP event attendees',
    strategicRoutes: [
      'Miami Beach Convention Center perimeter',
      'Wynwood Walls and gallery district',
      'Design District luxury shopping area',
      'South Beach hotels and restaurants',
      'Airport routes targeting arriving collectors',
      'Brickell luxury residences'
    ],
    timingStrategy: 'Deploy 2 weeks before Art Basel for awareness, saturate during Art Week (Dec 4-10), extend through weekend. Target peak hours: 11am-10pm when collectors are traveling between venues.',
    benefits: [
      'Reach 80,000+ Art Basel attendees',
      'Target high-net-worth art collectors',
      'Build brand among luxury market',
      'Promote galleries and exhibitions',
      'Advertise VIP parties and events',
      'Position brand in cultural scene'
    ],
    expectedReach: '120,000+ impressions daily during Art Week',
    pricing: 'Premium event pricing: Contact for custom quote',
    faqs: [
      {
        question: 'Why advertise during Art Basel Miami?',
        answer: 'Art Basel attracts 80,000+ collectors, galleries, and luxury brands with average attendee net worth over $2M. It\'s the perfect opportunity to reach affluent buyers, promote luxury brands, galleries, restaurants, hotels, and high-end services.'
      },
      {
        question: 'Where do your mobile billboards go during Art Basel?',
        answer: 'We target Miami Beach Convention Center, Wynwood art district, Design District, South Beach hotels, luxury restaurants, and routes between venues. Custom routes ensure your message reaches collectors as they travel between galleries and events.'
      },
      {
        question: 'When should Art Basel advertising campaigns start?',
        answer: 'Start 2 weeks before for awareness building, intensify during Art Week (December 4-10), and extend through the weekend. Many luxury brands run campaigns the entire month to capture pre-Basel buzz and post-event sales.'
      },
      {
        question: 'What businesses benefit from Art Basel advertising?',
        answer: 'Art galleries, luxury hotels, fine dining restaurants, high-end retailers, jewelry stores, luxury car dealerships, real estate developers, and any brand targeting ultra-high-net-worth individuals.'
      },
      {
        question: 'Can digital displays show artwork and gallery information?',
        answer: 'Yes! Our 4K LED displays showcase high-resolution artwork, gallery locations, exhibition times, and VIP event details. Perfect for galleries promoting shows during Art Week.'
      }
    ],
    keywords: [
      'Art Basel advertising Miami',
      'Art Basel marketing',
      'Miami Art Week advertising',
      'art fair promotion',
      'luxury event marketing Miami',
      'gallery advertising Miami',
      'Wynwood advertising',
      'Design District marketing'
    ],
    relatedMarkets: ['hotels-resorts', 'fashion-apparel', 'restaurants']
  },
  {
    name: 'Ultra Music Festival',
    slug: 'ultra-music-festival-promotion',
    tagline: 'Reach 170,000+ Music Fans at Ultra Music Festival',
    description: 'Promote your brand to Ultra\'s massive millennial and Gen Z audience. Our mobile billboards target festival attendees at downtown Miami venues, South Beach hotels, and along routes to Bayfront Park throughout Ultra Weekend.',
    eventDates: 'March 28-30, 2025 (Ultra Weekend)',
    location: 'Bayfront Park, Downtown Miami',
    targetAudience: 'EDM fans, millennials, Gen Z, international tourists, nightlife enthusiasts, hotel guests, music festival attendees',
    strategicRoutes: [
      'Bayfront Park perimeter during festival hours',
      'South Beach hotel districts',
      'Brickell nightlife areas',
      'Airport routes Friday-Sunday',
      'Wynwood and Downtown Miami',
      'I-95 southbound to festival'
    ],
    timingStrategy: 'Deploy 1 week before Ultra for buzz-building, saturate Thursday-Sunday of Ultra Weekend targeting arriving attendees and festival-goers. Peak hours: 3pm-midnight.',
    benefits: [
      'Reach 170,000 festival attendees',
      'Target millennial and Gen Z demographics',
      'Promote nightlife and after-parties',
      'Advertise hotels and accommodations',
      'Market food, beverage, and merchandise',
      'Build brand awareness with music fans'
    ],
    expectedReach: '200,000+ impressions daily during Ultra Weekend',
    pricing: 'Premium event pricing: Contact for custom quote',
    faqs: [
      {
        question: 'Why advertise during Ultra Music Festival?',
        answer: 'Ultra attracts 170,000+ attendees ages 18-35 with 60% traveling from outside Florida. It\'s prime opportunity to reach young, affluent music fans for hospitality, nightlife, retail, food/beverage, and lifestyle brands.'
      },
      {
        question: 'Where do mobile billboards target Ultra attendees?',
        answer: 'We target Bayfront Park festival perimeter, South Beach hotels (where most attendees stay), Brickell nightlife, airport routes, and paths to after-parties. Trucks move with the crowd from hotels to festival to nightlife.'
      },
      {
        question: 'Can you promote after-parties and club events?',
        answer: 'Absolutely! Many nightclubs and event promoters use our billboards to advertise after-parties, VIP events, and club nights during Ultra Weekend. Digital displays allow real-time updates and location information.'
      },
      {
        question: 'What businesses should advertise during Ultra?',
        answer: 'Hotels, nightclubs, restaurants, bars, retail stores, rideshare services, food delivery, merchandise vendors, and any brand targeting millennials and Gen Z music fans.'
      },
      {
        question: 'How far in advance should we book Ultra advertising?',
        answer: 'Book 60-90 days in advance. Ultra Weekend is our busiest period with high demand for trucks targeting festival-goers and hotel districts.'
      }
    ],
    keywords: [
      'Ultra Music Festival advertising',
      'Ultra Miami marketing',
      'music festival promotion',
      'EDM event advertising',
      'Miami music festival marketing',
      'festival advertising Miami',
      'Ultra Weekend promotion'
    ],
    relatedMarkets: ['hotels-resorts', 'restaurants', 'nightlife']
  },
  {
    name: 'Spring Break Miami Beach',
    slug: 'spring-break-marketing',
    tagline: 'Capture Spring Break\'s $1 Billion Tourism Market',
    description: 'Reach millions of college students and young adults during Miami Beach\'s iconic Spring Break season. Our mobile billboards target South Beach, hotel districts, and entertainment areas throughout March and April.',
    eventDates: 'March 1 - April 20, 2025 (Peak: March 8-22)',
    location: 'South Beach, Miami Beach, Fort Lauderdale Beach',
    targetAudience: 'College students, young adults 18-25, spring break travelers, beach-goers, party enthusiasts, budget-conscious tourists',
    strategicRoutes: [
      'Ocean Drive and Collins Avenue',
      'South Beach entertainment district',
      'Fort Lauderdale Beach Boulevard',
      'Miami Beach hotels and hostels',
      'Beach access points and parking areas',
      'Popular nightlife corridors'
    ],
    timingStrategy: 'Run campaigns throughout Spring Break season (March 1-April 20) with intensity during peak weeks (March 8-22). Target hours: 2pm-2am when spring breakers are active.',
    benefits: [
      'Reach millions of spring break visitors',
      'Target college students and young adults',
      'Promote hotels, clubs, and restaurants',
      'Advertise beach rentals and activities',
      'Market retail and merchandise',
      'Drive party and event attendance'
    ],
    expectedReach: '150,000+ daily impressions during peak weeks',
    pricing: 'Seasonal pricing: Contact for March-April availability',
    faqs: [
      {
        question: 'Why advertise during Miami Beach Spring Break?',
        answer: 'Spring Break generates over $1 billion in tourism revenue for Miami Beach. Millions of college students and young adults flood South Beach seeking entertainment, dining, nightlife, and activities - perfect for hospitality, retail, and entertainment businesses.'
      },
      {
        question: 'Where do your billboards target spring breakers?',
        answer: 'Ocean Drive, Collins Avenue, South Beach entertainment district, beach access points, hotel zones, and Fort Lauderdale Beach. We follow spring break crowds from beaches to hotels to nightlife areas.'
      },
      {
        question: 'What businesses benefit most from Spring Break advertising?',
        answer: 'Hotels, hostels, nightclubs, beach bars, restaurants, retail stores, beach equipment rentals, water sports operators, ride-share services, and event promoters targeting 18-25 demographics.'
      },
      {
        question: 'When are the peak Spring Break weeks?',
        answer: 'Peak weeks are March 8-22 when most colleges have break. However, the season runs March 1-April 20 with consistent tourism. Book early as inventory sells out for peak weeks.'
      },
      {
        question: 'Can you promote daily specials and happy hours?',
        answer: 'Yes! Our digital LED displays allow day-parting - promote beach specials during the day, happy hours 4-8pm, and club events at night. Update messaging for maximum impact.'
      }
    ],
    keywords: [
      'Spring Break advertising Miami',
      'Miami Beach Spring Break marketing',
      'college student advertising',
      'South Beach Spring Break promotion',
      'beach tourism marketing',
      'Spring Break billboard advertising'
    ],
    relatedMarkets: ['hotels-resorts', 'restaurants', 'nightlife', 'retail']
  },
  {
    name: 'Miami International Boat Show',
    slug: 'miami-boat-show-advertising',
    tagline: 'Reach High-Net-Worth Boat Buyers at Miami Boat Show',
    description: 'Target yacht buyers, marine enthusiasts, and luxury consumers at the largest boat show in the world. Our mobile billboards reach 100,000+ attendees at Miami Marine Stadium and Convention Center throughout boat show week.',
    eventDates: 'February 12-16, 2025',
    location: 'Miami Beach Convention Center, Miami Marine Stadium',
    targetAudience: 'Yacht buyers, boat owners, marine industry professionals, luxury consumers, high-net-worth individuals, fishing enthusiasts',
    strategicRoutes: [
      'Miami Beach Convention Center perimeter',
      'Miami Marine Stadium access routes',
      'Causeway routes to Virginia Key',
      'Brickell and Coconut Grove marinas',
      'South Beach luxury hotels',
      'Airport routes targeting VIP arrivals'
    ],
    timingStrategy: 'Deploy week before show for awareness, saturate during show days (Feb 12-16), and extend through weekend. Target hours: 9am-8pm matching show hours.',
    benefits: [
      'Reach 100,000+ boat show attendees',
      'Target high-net-worth yacht buyers',
      'Promote marine products and services',
      'Advertise waterfront real estate',
      'Market luxury brands and services',
      'Build presence in marine industry'
    ],
    expectedReach: '85,000+ daily impressions during show week',
    pricing: 'Premium event pricing: Contact for custom quote',
    faqs: [
      {
        question: 'Why advertise at Miami International Boat Show?',
        answer: 'Miami Boat Show is the world\'s largest, attracting 100,000+ attendees with average net worth over $5M. It\'s premier opportunity to reach yacht buyers, boat owners, marine industry, and luxury consumers.'
      },
      {
        question: 'Where do your mobile billboards go during Boat Show?',
        answer: 'We target Miami Beach Convention Center, Miami Marine Stadium, causeways to Virginia Key, nearby marinas, luxury hotels, and waterfront areas where boat show VIPs stay and dine.'
      },
      {
        question: 'What businesses should advertise during Boat Show?',
        answer: 'Marine dealers, yacht brokers, boat manufacturers, marine electronics, waterfront real estate, luxury hotels, fine dining, jewelry, luxury cars, and any brand targeting ultra-high-net-worth individuals.'
      },
      {
        question: 'Can you promote boats and marine products?',
        answer: 'Yes! Our 4K displays showcase yacht photos, boat specifications, dealer locations, and special show offers. Perfect for marine dealers competing for attention during the show.'
      },
      {
        question: 'How early should we book Boat Show advertising?',
        answer: 'Book 90+ days in advance. Boat Show week has high demand from marine industry and luxury brands. Early booking ensures preferred routes and timing.'
      }
    ],
    keywords: [
      'Miami Boat Show advertising',
      'yacht advertising Miami',
      'marine industry marketing',
      'boat show promotion',
      'luxury event advertising',
      'marine billboard advertising'
    ],
    relatedMarkets: ['luxury-services', 'real-estate', 'hotels-resorts']
  },
  {
    name: 'Miami Open Tennis',
    slug: 'miami-open-advertising',
    tagline: 'Reach Affluent Sports Fans at Miami Open Tennis Tournament',
    description: 'Target tennis fans and luxury consumers at the ATP/WTA Miami Open. Our mobile billboards reach tournament attendees, VIP guests, and affluent neighborhoods throughout the two-week championship at Hard Rock Stadium.',
    eventDates: 'March 18-31, 2025',
    location: 'Hard Rock Stadium, Miami Gardens',
    targetAudience: 'Tennis fans, corporate VIPs, luxury consumers, international visitors, high-income households, sports enthusiasts',
    strategicRoutes: [
      'Hard Rock Stadium perimeter and access roads',
      'I-95 and Florida Turnpike routes to stadium',
      'Aventura and Bal Harbour luxury shopping',
      'Brickell corporate districts',
      'Miami Beach hotels',
      'Surrounding affluent neighborhoods'
    ],
    timingStrategy: 'Deploy week before tournament for awareness, saturate during 2-week event (March 18-31) targeting daily attendees. Peak hours: 11am-11pm matching match schedules.',
    benefits: [
      'Reach 300,000+ tournament attendees',
      'Target affluent tennis fans',
      'Promote to corporate VIP ticket holders',
      'Advertise to international visitors',
      'Market luxury brands and services',
      'Build presence with upscale demographic'
    ],
    expectedReach: '75,000+ daily impressions during tournament',
    pricing: 'Premium sports event pricing: Contact for custom quote',
    faqs: [
      {
        question: 'Why advertise during Miami Open Tennis?',
        answer: 'Miami Open attracts 300,000+ attendees over 2 weeks with median household income over $150K. Corporate VIP tickets and premium seating attract executives and high-net-worth tennis fans - ideal for luxury brands and upscale services.'
      },
      {
        question: 'Where do mobile billboards target Miami Open attendees?',
        answer: 'We target Hard Rock Stadium perimeter, I-95/Turnpike routes, luxury hotels where players and VIPs stay, Aventura Mall (nearby high-end shopping), and surrounding affluent neighborhoods.'
      },
      {
        question: 'What businesses benefit from Miami Open advertising?',
        answer: 'Luxury hotels, fine dining restaurants, high-end retail, luxury car dealers, wealth management, country clubs, real estate, and brands targeting affluent sports enthusiasts and corporate decision-makers.'
      },
      {
        question: 'Can you promote hospitality packages and VIP experiences?',
        answer: 'Yes! Many sponsors, restaurants, and hotels use our billboards to promote VIP packages, dining experiences, and luxury accommodations to tournament attendees.'
      },
      {
        question: 'How long is the tournament and when should we advertise?',
        answer: 'Tournament runs 2 weeks (March 18-31). Most brands start 1 week before for awareness, run throughout the event, and extend through the weekend for maximum ROI.'
      }
    ],
    keywords: [
      'Miami Open advertising',
      'tennis tournament marketing',
      'sports event advertising Miami',
      'Miami Open Tennis promotion',
      'Hard Rock Stadium advertising',
      'luxury sports marketing'
    ],
    relatedMarkets: ['hotels-resorts', 'restaurants', 'luxury-services']
  },
  {
    name: 'Fort Lauderdale International Boat Show',
    slug: 'fort-lauderdale-boat-show-advertising',
    tagline: 'Dominate Fort Lauderdale Boat Show with Mobile Billboard Advertising',
    description: 'Reach yacht buyers and marine enthusiasts at the world\'s largest in-water boat show. Our mobile billboards target 100,000+ attendees across six Fort Lauderdale locations throughout boat show week.',
    eventDates: 'October 23-27, 2025',
    location: 'Six locations throughout Fort Lauderdale including Las Olas, Bahia Mar',
    targetAudience: 'Superyacht buyers, boat owners, marine industry, luxury consumers, international buyers, fishing enthusiasts, sailing community',
    strategicRoutes: [
      'Las Olas Boulevard and marina district',
      'Bahia Mar Yachting Center perimeter',
      'A1A coastal route between show locations',
      'I-95 and I-595 routes to venues',
      'Fort Lauderdale Beach hotels',
      'Airport routes for international buyers'
    ],
    timingStrategy: 'Deploy 1 week before show for awareness, saturate show days (Oct 23-27), extend through weekend. Target hours: 9am-8pm during show, evening for yacht parties and events.',
    benefits: [
      'Reach 100,000+ boat show attendees',
      'Target superyacht buyers and owners',
      'Promote marine industry products',
      'Advertise waterfront properties',
      'Market luxury brands and services',
      'Build marine industry presence'
    ],
    expectedReach: '90,000+ daily impressions during show week',
    pricing: 'Premium event pricing: Contact for custom quote',
    faqs: [
      {
        question: 'Why advertise at Fort Lauderdale International Boat Show?',
        answer: 'FLIBS is the world\'s largest in-water boat show, featuring $4+ billion in superyachts and marine products. Attendees include billionaire yacht owners, marine industry executives, and luxury consumers - unparalleled audience for high-end marketing.'
      },
      {
        question: 'Where do your billboards go during Fort Lauderdale Boat Show?',
        answer: 'We target all six show locations including Las Olas, Bahia Mar, and marinas. Trucks follow A1A between venues, target luxury hotels, waterfront restaurants, and routes where yacht buyers and brokers travel.'
      },
      {
        question: 'What businesses should advertise during FLIBS?',
        answer: 'Yacht brokers, marine dealers, boat manufacturers, marine electronics, waterfront real estate, luxury hotels, fine dining, wealth management, luxury cars, jewelry, and premium service providers.'
      },
      {
        question: 'Can you promote specific yachts or marine products?',
        answer: 'Absolutely! Our 4K LED displays showcase yacht photos, specifications, broker contact info, and show locations. Many dealers promote specific vessels and drive buyers to their booth.'
      },
      {
        question: 'How does Fort Lauderdale Boat Show differ from Miami?',
        answer: 'FLIBS (October) is in-water show featuring superyachts and larger vessels. Miami (February) includes boats and yachts. Both attract ultra-high-net-worth buyers but different timing and inventory.'
      }
    ],
    keywords: [
      'Fort Lauderdale Boat Show advertising',
      'FLIBS marketing',
      'superyacht advertising',
      'marine industry promotion',
      'boat show billboard advertising',
      'Fort Lauderdale yacht advertising'
    ],
    relatedMarkets: ['luxury-services', 'real-estate', 'hotels-resorts']
  },
  {
    name: 'South Beach Wine & Food Festival',
    slug: 'south-beach-wine-food-festival-advertising',
    tagline: 'Reach Food & Wine Enthusiasts at South Beach Food & Wine Festival',
    description: 'Target culinary enthusiasts and luxury consumers at America\'s premier food festival. Our mobile billboards reach 65,000+ attendees at South Beach events throughout the 4-day festival celebrating food, wine, and spirits.',
    eventDates: 'May 15-18, 2025 (Memorial Day Weekend)',
    location: 'South Beach, Miami Beach venues',
    targetAudience: 'Foodies, wine enthusiasts, celebrity chef fans, luxury consumers, culinary professionals, affluent couples, food industry',
    strategicRoutes: [
      'South Beach festival venues and tasting events',
      'Miami Beach Convention Center perimeter',
      'Lincoln Road and Collins Avenue',
      'South Beach hotels and resorts',
      'Brickell fine dining district',
      'Coral Gables and Coconut Grove'
    ],
    timingStrategy: 'Deploy 2 weeks before for awareness, saturate Memorial Day weekend (May 15-18) during festival. Target hours: 11am-midnight matching event schedules.',
    benefits: [
      'Reach 65,000+ festival attendees',
      'Target affluent food and wine enthusiasts',
      'Promote restaurants and culinary brands',
      'Advertise wine and spirits brands',
      'Market luxury services to foodies',
      'Build brand with culinary community'
    ],
    expectedReach: '80,000+ daily impressions during festival weekend',
    pricing: 'Premium event pricing: Contact for custom quote',
    faqs: [
      {
        question: 'Why advertise during South Beach Wine & Food Festival?',
        answer: 'SOBEWFF attracts 65,000+ affluent attendees with median income over $125K, including celebrity chefs, food industry professionals, and luxury consumers. Perfect for restaurants, food/beverage brands, hotels, and upscale services.'
      },
      {
        question: 'Where do mobile billboards target festival attendees?',
        answer: 'We target South Beach festival venues, Lincoln Road dining, hotel districts, and routes between events. Many attendees dine at South Beach restaurants before/after tastings - ideal for restaurant promotion.'
      },
      {
        question: 'What businesses benefit from Wine & Food Festival advertising?',
        answer: 'Restaurants, wine bars, hotels, spirits brands, gourmet food retailers, culinary schools, catering companies, kitchen retailers, and luxury brands targeting food enthusiasts.'
      },
      {
        question: 'Can restaurants promote during the festival?',
        answer: 'Absolutely! Many restaurants use mobile billboards to promote special menus, wine pairings, and reservations to festival attendees seeking dining experiences beyond festival events.'
      },
      {
        question: 'Is this a good time for wine and spirits advertising?',
        answer: 'Yes! Festival attendees are actively tasting and purchasing wine/spirits. Liquor stores, wine shops, and distributors promote special tastings and sales throughout Memorial Day weekend.'
      }
    ],
    keywords: [
      'South Beach Food Festival advertising',
      'Wine and Food Festival marketing',
      'culinary event advertising Miami',
      'food festival promotion',
      'Miami Beach festival advertising',
      'restaurant marketing Miami'
    ],
    relatedMarkets: ['restaurants', 'hotels-resorts', 'retail']
  },
  {
    name: 'Miami Fashion Week',
    slug: 'miami-fashion-week-advertising',
    tagline: 'Showcase Your Brand at Miami Fashion Week',
    description: 'Reach fashion industry insiders, influencers, and style-conscious consumers during Miami Fashion Week. Our mobile billboards target runway shows, industry events, and shopping districts throughout the week-long celebration of fashion.',
    eventDates: 'Year-round (Multiple events: March, May, September, November)',
    location: 'Design District, Wynwood, South Beach, Brickell',
    targetAudience: 'Fashion industry professionals, influencers, models, designers, buyers, style-conscious consumers, photographers, media',
    strategicRoutes: [
      'Design District luxury shopping area',
      'Wynwood fashion venues and events',
      'South Beach hotels and nightlife',
      'Brickell luxury residential areas',
      'Lincoln Road shopping district',
      'Miami Beach Convention Center'
    ],
    timingStrategy: 'Deploy week before major fashion events, saturate during Fashion Week events, extend through weekend. Multiple campaigns align with Spring, Summer, Fall seasons. Target hours: 2pm-midnight for shows and after-parties.',
    benefits: [
      'Reach fashion industry influencers',
      'Target style-conscious consumers',
      'Promote fashion brands and boutiques',
      'Advertise runway shows and events',
      'Market luxury retail and accessories',
      'Build brand in fashion community'
    ],
    expectedReach: '60,000+ daily impressions during major events',
    pricing: 'Contact for event-specific pricing',
    faqs: [
      {
        question: 'When is Miami Fashion Week and how many events are there?',
        answer: 'Miami has multiple fashion weeks throughout the year (March, May, September, November) plus swimwear and resort collections. Year-round opportunities to reach fashion audiences during shows, trunk shows, and industry events.'
      },
      {
        question: 'Who attends Miami Fashion Week events?',
        answer: 'Fashion designers, buyers, media, influencers, models, photographers, retail executives, and style-conscious consumers. High concentration of industry decision-makers and trendsetting consumers.'
      },
      {
        question: 'Where do mobile billboards target during Fashion Week?',
        answer: 'Design District (luxury shopping), Wynwood (alternative fashion), South Beach (swimwear events), Brickell (affluent residents), and Lincoln Road (retail). We follow fashion crowds from shows to after-parties to shopping.'
      },
      {
        question: 'What businesses should advertise during Fashion Week?',
        answer: 'Fashion brands, boutiques, luxury retailers, jewelry stores, beauty salons, photographers, modeling agencies, hotels, nightclubs, restaurants, and any brand targeting fashion-forward consumers.'
      },
      {
        question: 'Can you promote individual runway shows or designer events?',
        answer: 'Yes! Our digital displays promote show times, venue locations, ticket information, and after-parties. Many designers and event producers use mobile billboards to drive attendance and buzz.'
      }
    ],
    keywords: [
      'Miami Fashion Week advertising',
      'fashion event marketing Miami',
      'runway show promotion',
      'Design District advertising',
      'fashion industry marketing',
      'Miami fashion advertising'
    ],
    relatedMarkets: ['fashion-apparel', 'hotels-resorts', 'nightlife']
  },
  {
    name: 'Holiday Season Advertising',
    slug: 'holiday-season-marketing',
    tagline: 'Maximize Holiday Sales with Mobile Billboard Advertising',
    description: 'Capture South Florida\'s $2 billion holiday shopping season with mobile billboard advertising. Reach shoppers, tourists, and holiday event attendees throughout November and December\'s peak retail period.',
    eventDates: 'November 15 - December 31, 2025 (Peak: Black Friday through Christmas)',
    location: 'South Florida retail districts, malls, shopping centers',
    targetAudience: 'Holiday shoppers, tourists, gift buyers, mall shoppers, Black Friday deal seekers, last-minute shoppers, event attendees',
    strategicRoutes: [
      'Aventura Mall and major shopping centers',
      'Lincoln Road and retail districts',
      'Sawgrass Mills outlet mall',
      'Town Center and Mizner Park',
      'Airport routes targeting arriving tourists',
      'Residential neighborhoods during shopping hours'
    ],
    timingStrategy: 'Deploy Thanksgiving week through Christmas. Intensify Black Friday/Cyber Monday weekend, pre-Christmas week, and last-minute shopping days. Target peak shopping hours: 10am-9pm weekdays, 9am-10pm weekends.',
    benefits: [
      'Reach holiday shoppers at peak buying times',
      'Drive Black Friday and Cyber Monday traffic',
      'Promote holiday sales and special offers',
      'Target last-minute gift shoppers',
      'Build seasonal brand awareness',
      'Increase foot traffic to retail locations'
    ],
    expectedReach: '100,000+ daily impressions during peak shopping days',
    pricing: 'Seasonal holiday pricing: Contact for November-December availability',
    faqs: [
      {
        question: 'Why advertise during holiday season in South Florida?',
        answer: 'South Florida\'s holiday season generates $2+ billion in retail sales plus tourism boost from northern visitors escaping cold weather. November-December offers highest retail traffic and consumer spending of the year.'
      },
      {
        question: 'When should holiday advertising campaigns start?',
        answer: 'Start Thanksgiving week for Black Friday/Cyber Monday awareness. Run through Christmas for sustained impact. Many retailers add last-minute push December 20-24 for procrastinating shoppers.'
      },
      {
        question: 'Where do mobile billboards target holiday shoppers?',
        answer: 'Major malls (Aventura, Sawgrass, Dadeland), shopping districts (Lincoln Road, Las Olas), outlet centers, town centers, and residential routes during peak shopping times. We follow shoppers from home to mall to entertainment.'
      },
      {
        question: 'Can you promote specific sales and doorbuster deals?',
        answer: 'Yes! Our digital LED displays allow daily updates for Black Friday doorbusters, flash sales, limited-time offers, and countdown-to-Christmas promotions. Update messaging in real-time for maximum urgency.'
      },
      {
        question: 'What businesses benefit from holiday advertising?',
        answer: 'Retail stores, malls, restaurants, hotels, entertainment venues, toy stores, electronics retailers, jewelry stores, and any business targeting holiday shoppers and tourists.'
      }
    ],
    keywords: [
      'holiday advertising Miami',
      'Black Friday marketing South Florida',
      'Christmas shopping advertising',
      'holiday retail promotion',
      'seasonal advertising Miami',
      'holiday billboard advertising'
    ],
    relatedMarkets: ['retail', 'restaurants', 'hotels-resorts']
  },
  {
    name: 'Summer Tourism Campaigns',
    slug: 'summer-tourism-advertising',
    tagline: 'Capture South Florida\'s Summer Tourism Market',
    description: 'Reach millions of summer visitors with mobile billboard advertising throughout South Florida\'s June-August tourism season. Target beach-goers, family vacationers, and international tourists across Miami, Fort Lauderdale, and Palm Beach.',
    eventDates: 'June 1 - August 31, 2025 (Peak: July 4th week)',
    location: 'Miami Beach, Fort Lauderdale Beach, Palm Beach, tourist attractions',
    targetAudience: 'Summer tourists, families, beach-goers, international visitors, domestic travelers, cruise passengers, vacation home renters',
    strategicRoutes: [
      'Miami Beach and South Beach corridors',
      'Fort Lauderdale Beach Boulevard (A1A)',
      'Palm Beach island and coastal routes',
      'Airport routes (MIA, FLL, PBI)',
      'Cruise port routes in Miami and Fort Lauderdale',
      'Tourist attractions and theme parks'
    ],
    timingStrategy: 'Run campaigns throughout summer (June-August) with intensity around July 4th week and weekends. Target peak beach hours: 10am-7pm weekdays, 9am-8pm weekends. Evening routes capture dining and entertainment seekers.',
    benefits: [
      'Reach millions of summer tourists',
      'Target beach-goers at peak times',
      'Promote hotels and accommodations',
      'Advertise restaurants and attractions',
      'Market beach rentals and activities',
      'Build brand with vacation market'
    ],
    expectedReach: '125,000+ daily impressions during peak summer weeks',
    pricing: 'Summer seasonal pricing: Contact for June-August availability',
    faqs: [
      {
        question: 'Why advertise during South Florida summer tourism season?',
        answer: 'Despite being "off-season," South Florida attracts millions of domestic and international summer tourists, especially families during school break. Lower hotel rates drive extended stays and higher spending on activities, dining, and entertainment.'
      },
      {
        question: 'Where do mobile billboards target summer tourists?',
        answer: 'We target Miami Beach, South Beach, Fort Lauderdale Beach (A1A), beach access points, airport routes, cruise ports, hotels, and tourist attractions. Routes follow tourist movement from arrival to beach to dining.'
      },
      {
        question: 'What businesses benefit from summer tourism advertising?',
        answer: 'Hotels, beach resorts, restaurants, beach equipment rentals, water sports, boat tours, attractions, theme parks, retail stores, and entertainment venues targeting families and vacation travelers.'
      },
      {
        question: 'Can you promote July 4th events and summer specials?',
        answer: 'Absolutely! Many businesses promote July 4th fireworks viewing, beach parties, summer discounts, kids-eat-free offers, and vacation packages. Digital displays allow timely promotional updates.'
      },
      {
        question: 'How does summer advertising differ from winter season?',
        answer: 'Summer targets families and budget-conscious tourists vs. winter\'s affluent snowbirds. Summer emphasizes value, family activities, and beach fun. Lower competition and ad costs make summer campaigns highly cost-effective.'
      }
    ],
    keywords: [
      'summer tourism advertising South Florida',
      'Miami Beach summer marketing',
      'beach tourism advertising',
      'summer vacation promotion',
      'tourist advertising Miami',
      'seasonal advertising Florida'
    ],
    relatedMarkets: ['hotels-resorts', 'restaurants', 'attractions', 'retail']
  }
]

// Helper functions
export function getEventBySlug(slug: string): EventData | undefined {
  return eventsData.find(event => event.slug === slug)
}

export function getAllEventSlugs(): string[] {
  return eventsData.map(event => event.slug)
}

export function getEventsByMonth(month: string): EventData[] {
  const monthMap: Record<string, string[]> = {
    january: [],
    february: ['miami-boat-show-advertising'],
    march: ['ultra-music-festival-promotion', 'spring-break-marketing', 'miami-open-advertising', 'miami-fashion-week-advertising'],
    april: ['spring-break-marketing'],
    may: ['south-beach-wine-food-festival-advertising', 'miami-fashion-week-advertising'],
    june: ['summer-tourism-advertising'],
    july: ['summer-tourism-advertising'],
    august: ['summer-tourism-advertising'],
    september: ['miami-fashion-week-advertising'],
    october: ['fort-lauderdale-boat-show-advertising'],
    november: ['holiday-season-marketing', 'miami-fashion-week-advertising'],
    december: ['art-basel-advertising', 'holiday-season-marketing']
  }

  const slugs = monthMap[month.toLowerCase()] || []
  return slugs.map(slug => getEventBySlug(slug)).filter((e): e is EventData => e !== undefined)
}

export function searchEvents(query: string): EventData[] {
  const lowerQuery = query.toLowerCase()
  return eventsData.filter(event =>
    event.name.toLowerCase().includes(lowerQuery) ||
    event.description.toLowerCase().includes(lowerQuery) ||
    event.targetAudience.toLowerCase().includes(lowerQuery)
  )
}
