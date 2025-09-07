import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MapPinIcon, BuildingOfficeIcon, ShoppingBagIcon, CalendarDaysIcon, SunIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const BillboardCostCalculator = dynamic(() => import('../../components/BillboardCostCalculator'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Billboard Cost West Palm Beach | 2025 Pricing Guide | Palm Beach Advertising Rates',
  description: 'Billboard advertising in West Palm Beach costs $700/day for mobile billboards. Compare prices for Downtown, Clematis Street, CityPlace, Palm Beach Gardens. Get instant quotes and pricing calculator.',
  keywords: 'billboard cost West Palm Beach, West Palm Beach advertising prices, Palm Beach billboard rates, mobile billboard West Palm Beach cost, Clematis Street advertising, CityPlace billboard prices, Palm Beach Gardens advertising rates, downtown West Palm Beach billboard cost',
  openGraph: {
    title: 'West Palm Beach Billboard Advertising Costs - Complete 2025 Pricing Guide',
    description: 'Mobile billboard advertising in West Palm Beach from $700/day. Reach 40,000+ affluent consumers daily. Compare areas and get custom quotes.',
    url: 'https://maximaxmobileadvertising.com/pricing/billboard-cost-west-palm-beach',
  },
};

const westPalmBeachAreaPricing = [
  {
    area: 'Downtown West Palm',
    dailyRate: '$750',
    monthlyRate: '$15,000',
    impressions: '45,000+',
    bestFor: 'Business professionals, government offices, courthouse',
    peakHours: '7-9am, 12-2pm, 5-7pm',
    icon: BuildingOfficeIcon,
  },
  {
    area: 'Clematis Street',
    dailyRate: '$800',
    monthlyRate: '$16,000',
    impressions: '50,000+',
    bestFor: 'Nightlife, restaurants, entertainment venues',
    peakHours: '11am-2am',
    icon: ShoppingBagIcon,
  },
  {
    area: 'CityPlace',
    dailyRate: '$775',
    monthlyRate: '$15,500',
    impressions: '48,000+',
    bestFor: 'Shoppers, diners, entertainment seekers',
    peakHours: '10am-10pm',
    icon: ShoppingBagIcon,
  },
  {
    area: 'Palm Beach Gardens',
    dailyRate: '$700',
    monthlyRate: '$14,000',
    impressions: '40,000+',
    bestFor: 'Affluent residents, golfers, luxury market',
    peakHours: '8-10am, 4-7pm',
    icon: SunIcon,
  },
  {
    area: 'Flagler Drive Waterfront',
    dailyRate: '$725',
    monthlyRate: '$14,500',
    impressions: '42,000+',
    bestFor: 'Waterfront dining, events, tourists',
    peakHours: '10am-9pm',
    icon: MapPinIcon,
  },
  {
    area: 'Worth Avenue Area',
    dailyRate: '$850',
    monthlyRate: '$17,000',
    impressions: '35,000+',
    bestFor: 'Ultra-luxury shoppers, high net worth individuals',
    peakHours: '10am-6pm',
    icon: CurrencyDollarIcon,
  },
];

const seasonalPricing = [
  {
    season: 'Peak Season (Dec-Apr)',
    adjustment: '+25-35%',
    events: 'Winter residents, Palm Beach Season, perfect weather',
    occupancy: '98%+',
    details: 'Snowbirds arrive, social season in full swing',
  },
  {
    season: 'Summer (May-Aug)',
    adjustment: 'Standard rates',
    events: 'Local market, family tourism',
    occupancy: '65-75%',
    details: 'Best value period, strong local engagement',
  },
  {
    season: 'Fall (Sep-Nov)',
    adjustment: '-10-15%',
    events: 'Local events, convention season',
    occupancy: '60-70%',
    details: 'Hurricane season affects tourism',
  },
  {
    season: 'Holiday Weeks',
    adjustment: '+40-50%',
    events: 'Christmas, New Years, Presidents Day',
    occupancy: '100%',
    details: 'Premium rates, book 60+ days ahead',
  },
];

const majorEvents = [
  {
    event: 'SunFest',
    date: 'Early May',
    impact: '+35%',
    audience: '175,000+ attendees',
    description: 'Florida\'s largest waterfront music festival',
  },
  {
    event: 'Palm Beach Boat Show',
    date: 'March',
    impact: '+30%',
    audience: '50,000+ affluent buyers',
    description: 'Premier luxury boat show',
  },
  {
    event: 'Palm Beach Food & Wine Festival',
    date: 'December',
    impact: '+25%',
    audience: '15,000+ food enthusiasts',
    description: 'High-end culinary event',
  },
  {
    event: 'Clematis by Night',
    date: 'Thursday evenings',
    impact: '+15%',
    audience: '5,000+ weekly',
    description: 'Weekly concert series',
  },
  {
    event: 'GreenMarket',
    date: 'Saturday mornings',
    impact: '+10%',
    audience: '8,000+ weekly',
    description: 'Popular farmers market',
  },
];

const routePackages = [
  {
    name: 'Downtown Business Loop',
    price: '$750/day',
    coverage: 'Downtown, Government Center, Courthouse',
    highlights: ['Professional audience', 'Weekday focus', 'High-income demographics', 'B2B opportunities'],
  },
  {
    name: 'Entertainment District',
    price: '$800/day',
    coverage: 'Clematis, CityPlace, Waterfront',
    highlights: ['Nightlife crowd', 'Restaurant patrons', 'Event attendees', 'Weekend warriors'],
  },
  {
    name: 'Luxury Shopping Route',
    price: '$825/day',
    coverage: 'Worth Avenue, Palm Beach Island',
    highlights: ['Ultra-affluent market', 'Luxury brands', 'High net worth', 'International visitors'],
  },
  {
    name: 'Comprehensive Coverage',
    price: '$1,300/day',
    coverage: 'All major areas with 2 trucks',
    highlights: ['Maximum reach', 'Day & night coverage', 'Diverse demographics', 'Fleet discount'],
  },
];

const costComparison = [
  {
    type: 'Mobile Billboard (Maximax)',
    dailyRate: '$700-850',
    monthlyRate: '$14,000-17,000',
    impressions: '40,000-50,000',
    cpm: '$14-21',
    minimum: '1 day',
    flexibility: 'Excellent',
  },
  {
    type: 'Static Billboard',
    dailyRate: '$1,200-2,500',
    monthlyRate: '$36,000-75,000',
    impressions: '30,000-40,000',
    cpm: '$40-62',
    minimum: '30 days',
    flexibility: 'None',
  },
  {
    type: 'Digital Billboard',
    dailyRate: '$1,500-3,000',
    monthlyRate: '$45,000-90,000',
    impressions: '25,000-35,000',
    cpm: '$60-85',
    minimum: '7 days',
    flexibility: 'Limited',
  },
  {
    type: 'Bus Advertising',
    dailyRate: '$400-800',
    monthlyRate: '$12,000-24,000',
    impressions: '20,000-30,000',
    cpm: '$20-40',
    minimum: '30 days',
    flexibility: 'Limited',
  },
];

export default function WestPalmBeachBillboardCostPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a billboard cost in West Palm Beach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobile billboard advertising in West Palm Beach costs $700-850 per day for a single LED truck operating 8 hours. Downtown and Clematis Street command premium rates of $750-800/day, while Palm Beach Gardens starts at $700/day. Peak season (December-April) rates increase 25-35%.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cheapest billboard advertising in West Palm Beach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobile billboards offer the most affordable option starting at $700/day in Palm Beach Gardens with no long-term contracts. This provides 40,000+ impressions daily with flexible routing and GPS tracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to advertise on Clematis Street?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clematis Street mobile billboard advertising costs approximately $800 per day, reaching 50,000+ people including nightlife crowds, restaurant patrons, and event attendees. Thursday nights during Clematis by Night see 15% higher rates.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas in West Palm Beach have the best advertising ROI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CityPlace and Downtown West Palm offer excellent ROI at $750-775/day with 45,000-48,000 impressions targeting diverse demographics. Palm Beach Gardens provides value at $700/day for reaching affluent residents.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do West Palm Beach billboard costs compare to Miami?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'West Palm Beach billboard costs are 12-20% lower than Miami, with rates starting at $700/day compared to Miami\'s $800-900/day. West Palm Beach offers better value for reaching affluent demographics with less competition.',
        },
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'West Palm Beach Mobile Billboard Advertising',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Maximax Advertising',
      telephone: '+1-561-720-0521',
    },
    areaServed: [
      'West Palm Beach',
      'Palm Beach Gardens',
      'Palm Beach',
      'Lake Worth',
      'Wellington',
      'Royal Palm Beach',
    ],
    priceRange: '$700-$850 per day',
    description: 'Premium mobile billboard advertising services throughout West Palm Beach and Palm Beach County with GPS-tracked LED trucks.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                West Palm Beach Billboard Advertising Costs
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Complete 2025 pricing guide for mobile billboard advertising in West Palm Beach. 
                From Downtown to Palm Beach Gardens, starting at $700/day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">$700</p>
                <p className="text-emerald-100 mt-1">Base Daily Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">40K+</p>
                <p className="text-emerald-100 mt-1">Daily Impressions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">$14-21</p>
                <p className="text-emerald-100 mt-1">CPM Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">25%</p>
                <p className="text-emerald-100 mt-1">Peak Season Premium</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CurrencyDollarIcon className="w-8 h-8 text-emerald-600 mr-3" />
                Quick Answer: West Palm Beach Billboard Costs
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  <strong>Mobile billboard advertising in West Palm Beach costs $700-850 per day</strong> for a single 
                  LED truck operating 8 hours daily. This includes GPS tracking, route optimization, and 
                  reaches 40,000-50,000 affluent consumers per day.
                </p>
                <p>
                  Compare this to static billboards at $1,200-2,500/day (30-day minimum) or digital 
                  billboards at $1,500-3,000/day. Mobile billboards offer the best CPM at $14-21 per 
                  thousand impressions with superior flexibility.
                </p>
                <ul className="mt-4">
                  <li><strong>Downtown West Palm:</strong> $750/day - Business professionals</li>
                  <li><strong>Clematis Street:</strong> $800/day - Entertainment district</li>
                  <li><strong>CityPlace:</strong> $775/day - Shopping & dining hub</li>
                  <li><strong>Palm Beach Gardens:</strong> $700/day - Affluent residential</li>
                </ul>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="#calculator"
                  className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors text-center"
                >
                  Calculate Your Cost
                </a>
                <a
                  href="tel:5617200521"
                  className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors text-center"
                >
                  Get Instant Quote: (561) 720-0521
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Area-by-Area Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                West Palm Beach Area-Specific Billboard Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Detailed pricing for each neighborhood and district
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {westPalmBeachAreaPricing.map((area) => {
                const Icon = area.icon;
                return (
                  <div key={area.area} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{area.area}</h3>
                        <p className="text-sm text-gray-600 mt-1">{area.bestFor}</p>
                      </div>
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Daily Rate:</span>
                        <span className="font-bold text-gray-900">{area.dailyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly:</span>
                        <span className="font-bold text-gray-900">{area.monthlyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Impressions:</span>
                        <span className="font-bold text-emerald-600">{area.impressions}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Peak hours:</strong> {area.peakHours}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why West Palm Beach Offers Exceptional Value
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Affluent Demographics:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Median household income: $66,000+</li>
                    <li>• High concentration of professionals</li>
                    <li>• Strong purchasing power</li>
                    <li>• Year-round residents plus seasonal influx</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Strategic Advantages:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Less competition than Miami</li>
                    <li>• More affordable than Palm Beach</li>
                    <li>• Central location in Palm Beach County</li>
                    <li>• Access to luxury markets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Pricing & Events */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Seasonal Pricing & Major Events Impact
              </h2>
              <p className="text-xl text-gray-600">
                West Palm Beach rates fluctuate with seasons and events
              </p>
            </div>
            
            {/* Seasonal Pricing Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Season</th>
                      <th className="px-6 py-4 text-left">Rate Adjustment</th>
                      <th className="px-6 py-4 text-left">Key Factors</th>
                      <th className="px-6 py-4 text-left">Availability</th>
                      <th className="px-6 py-4 text-left">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {seasonalPricing.map((season, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{season.season}</td>
                        <td className="px-6 py-4">
                          <span className={`font-bold ${
                            season.adjustment.includes('+') ? 'text-red-600' : 
                            season.adjustment.includes('-') ? 'text-green-600' : 
                            'text-gray-700'
                          }`}>
                            {season.adjustment}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{season.events}</td>
                        <td className="px-6 py-4 text-gray-700">{season.occupancy}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{season.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Major Events Grid */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Major Events Affecting Billboard Prices
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {majorEvents.map((event) => (
                <div key={event.event} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{event.event}</h4>
                    <CalendarDaysIcon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">When:</span>
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rate Impact:</span>
                      <span className="font-bold text-red-600">{event.impact}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Audience:</span>
                      <span className="font-semibold text-emerald-600">{event.audience}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 pt-3 border-t">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-gray-700">
                <strong>💡 Pro Tip:</strong> Book your campaign 30-60 days in advance for major events like 
                SunFest and the Palm Beach Boat Show to lock in better rates and guarantee availability. 
                Peak season (December-April) fills up quickly with snowbirds and seasonal residents arriving.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Calculator */}
        <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your West Palm Beach Billboard Cost
              </h2>
              <p className="text-xl text-gray-600">
                Get instant pricing for your specific campaign requirements
              </p>
            </div>
            <BillboardCostCalculator />
          </div>
        </section>

        {/* Route Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                West Palm Beach Route Packages
              </h2>
              <p className="text-xl text-gray-600">
                Pre-optimized routes for maximum impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {routePackages.map((pkg) => (
                <div key={pkg.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-emerald-600 mb-3">{pkg.price}</p>
                  <p className="text-sm text-gray-600 mb-4">{pkg.coverage}</p>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="text-emerald-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison with Miami and Fort Lauderdale */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                West Palm Beach vs Miami & Fort Lauderdale
              </h2>
              <p className="text-xl text-gray-600">
                How West Palm Beach billboard costs compare to other South Florida markets
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center pb-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">West Palm Beach</h3>
                  <p className="text-3xl font-bold text-emerald-600 mb-2">$700-850/day</p>
                  <ul className="text-sm text-gray-600 space-y-1 text-left max-w-xs mx-auto">
                    <li>✓ 40,000-50,000 impressions</li>
                    <li>✓ Affluent demographics</li>
                    <li>✓ Less competition</li>
                    <li>✓ Better value proposition</li>
                    <li>✓ Year-round stable market</li>
                  </ul>
                </div>
                
                <div className="text-center pb-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">Miami</h3>
                  <p className="text-3xl font-bold text-gray-600 mb-2">$800-900/day</p>
                  <ul className="text-sm text-gray-600 space-y-1 text-left max-w-xs mx-auto">
                    <li>• 50,000-65,000 impressions</li>
                    <li>• Higher competition</li>
                    <li>• Premium rates</li>
                    <li>• Tourist-heavy market</li>
                    <li>• Event-driven pricing</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-3">Fort Lauderdale</h3>
                  <p className="text-3xl font-bold text-gray-600 mb-2">$750-850/day</p>
                  <ul className="text-sm text-gray-600 space-y-1 text-left max-w-xs mx-auto">
                    <li>• 45,000-55,000 impressions</li>
                    <li>• Beach & business mix</li>
                    <li>• Spring Break premiums</li>
                    <li>• Cruise port traffic</li>
                    <li>• Seasonal fluctuations</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <strong>West Palm Beach offers 12-20% cost savings</strong> compared to Miami while reaching 
                  a more affluent, stable demographic with less advertising competition
                </p>
              </div>
            </div>

            {/* Cost Comparison Table */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Detailed Cost Comparison: All Advertising Options
              </h3>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Advertising Type</th>
                        <th className="px-6 py-4 text-left">Daily Rate</th>
                        <th className="px-6 py-4 text-left">Monthly Rate</th>
                        <th className="px-6 py-4 text-left">Impressions</th>
                        <th className="px-6 py-4 text-left">CPM</th>
                        <th className="px-6 py-4 text-left">Minimum</th>
                        <th className="px-6 py-4 text-left">Flexibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {costComparison.map((item, index) => (
                        <tr key={index} className={index === 0 ? 'bg-emerald-50' : 'hover:bg-gray-50'}>
                          <td className="px-6 py-4 font-semibold text-gray-900">
                            {item.type}
                            {index === 0 && (
                              <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">
                                BEST VALUE
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-gray-700">{item.dailyRate}</td>
                          <td className="px-6 py-4 text-gray-700">{item.monthlyRate}</td>
                          <td className="px-6 py-4 text-gray-700">{item.impressions}</td>
                          <td className="px-6 py-4 text-gray-700">{item.cpm}</td>
                          <td className="px-6 py-4 text-gray-700">{item.minimum}</td>
                          <td className="px-6 py-4 text-gray-700">{item.flexibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              West Palm Beach Billboard Cost FAQs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much does a billboard cost in West Palm Beach per month?
                </h3>
                <p className="text-gray-700">
                  Mobile billboard advertising in West Palm Beach costs $14,000-17,000 per month for a single truck 
                  operating 8 hours daily. This includes a 20% volume discount and provides approximately 
                  1.2 million impressions monthly. Static billboards range from $36,000-75,000 per month, 
                  making mobile billboards 60% more cost-effective.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the cost to advertise on Clematis Street?
                </h3>
                <p className="text-gray-700">
                  Clematis Street mobile billboard advertising costs $800 per day, reaching 50,000+ people 
                  including nightlife crowds, restaurant patrons, and entertainment seekers. Thursday nights 
                  during Clematis by Night see 15% higher rates due to increased foot traffic from the 
                  weekly concert series attracting 5,000+ attendees.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are billboard costs higher during peak season in West Palm Beach?
                </h3>
                <p className="text-gray-700">
                  Yes, billboard rates increase 25-35% during peak season (December-April) when snowbirds 
                  and winter residents arrive. Holiday weeks see 40-50% premiums. For example, base rates 
                  of $700/day increase to $875-1,050/day during peak season. Book 60+ days ahead for better rates.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much does advertising cost during SunFest?
                </h3>
                <p className="text-gray-700">
                  During SunFest (early May), mobile billboard rates increase 35% from $700-850/day to 
                  $945-1,150/day due to 175,000+ festival attendees. The waterfront location and concentrated 
                  crowds make this Florida's premier advertising opportunity. Book 3 months ahead as inventory 
                  sells out quickly.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What areas in West Palm Beach offer the best advertising value?
                </h3>
                <p className="text-gray-700">
                  Palm Beach Gardens offers excellent value at $700/day reaching 40,000+ affluent residents. 
                  CityPlace provides strong ROI at $775/day with 48,000+ shoppers and diners. Downtown 
                  West Palm at $750/day effectively reaches business professionals and government workers 
                  during weekdays.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I target Worth Avenue luxury shoppers?
                </h3>
                <p className="text-gray-700">
                  Yes, Worth Avenue area advertising costs $850/day and reaches 35,000+ ultra-luxury shoppers 
                  and high net worth individuals. While impressions are lower, the audience quality is 
                  exceptional with average household incomes exceeding $200,000. Ideal for luxury brands, 
                  real estate, and high-end services.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is West Palm Beach cheaper than Miami for billboard advertising?
                </h3>
                <p className="text-gray-700">
                  Yes, West Palm Beach is 12-20% cheaper than Miami. West Palm Beach rates start at $700/day 
                  compared to Miami's $800-900/day. Despite lower costs, West Palm Beach offers access to 
                  more affluent demographics with median household incomes 15% higher than Miami-Dade County.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's included in the West Palm Beach billboard cost?
                </h3>
                <p className="text-gray-700">
                  The $700-850 daily rate includes: 8 hours of LED truck operation, professional driver, 
                  GPS tracking with real-time reporting, route optimization, free basic design services, 
                  and campaign performance metrics. No hidden fees, setup costs, or fuel surcharges. 
                  Additional hours available at $75/hour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Mobile Billboards in West Palm Beach?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Superior Demographics
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Median income 15% higher than state average</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>High concentration of professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Access to Palm Beach luxury market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Stable year-round population</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Strategic Advantages
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Less advertising clutter than Miami</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Central Palm Beach County location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Major event opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Lower cost per quality impression</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Campaign Flexibility
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>No long-term contracts required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Same-day campaign launch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Change routes or creative anytime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>GPS tracking and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your West Palm Beach Billboard Campaign Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join hundreds of businesses successfully advertising in Palm Beach County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5617200521"
                className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <span>📞 Call (561) 720-0521</span>
              </a>
              <Link
                href="/contact"
                className="bg-emerald-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-emerald-900 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
            <p className="text-emerald-100 mt-6">
              Same-day campaign launch • No setup fees • Free design services • Local Palm Beach County team
            </p>
          </div>
        </section>
      </div>
    </>
  );
}