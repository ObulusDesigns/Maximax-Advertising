import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MapPinIcon, SunIcon, BuildingOfficeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const BillboardCostCalculator = dynamic(() => import('../../components/BillboardCostCalculator'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Billboard Cost Fort Lauderdale | 2025 Pricing Guide | How Much Does Advertising Cost?',
  description: 'Billboard advertising in Fort Lauderdale costs $750/day for mobile billboards. Compare prices for Las Olas, Beach, Downtown, Port Everglades. Get instant quotes and pricing calculator.',
  keywords: 'billboard cost Fort Lauderdale, Fort Lauderdale billboard prices, advertising costs Fort Lauderdale, mobile billboard Fort Lauderdale rates, Las Olas advertising cost, Fort Lauderdale Beach billboard prices, Port Everglades advertising',
  openGraph: {
    title: 'Fort Lauderdale Billboard Advertising Costs - 2025 Complete Guide',
    description: 'Mobile billboard advertising in Fort Lauderdale from $750/day. Reach 45,000+ people daily. Compare areas and get custom quotes.',
    url: 'https://maximaxmobileadvertising.com/pricing/billboard-cost-fort-lauderdale',
  },
};

const fortLauderdaleAreaPricing = [
  {
    area: 'Las Olas Boulevard',
    dailyRate: '$800',
    monthlyRate: '$16,000',
    impressions: '50,000+',
    bestFor: 'Upscale shopping, dining, galleries',
    peakHours: '11am-10pm',
    icon: ShoppingBagIcon,
  },
  {
    area: 'Fort Lauderdale Beach',
    dailyRate: '$850',
    monthlyRate: '$17,000',
    impressions: '55,000+',
    bestFor: 'Tourists, spring breakers, hotels',
    peakHours: '10am-midnight',
    icon: SunIcon,
  },
  {
    area: 'Downtown Fort Lauderdale',
    dailyRate: '$750',
    monthlyRate: '$15,000',
    impressions: '45,000+',
    bestFor: 'Business professionals, courthouse',
    peakHours: '7-9am, 5-7pm',
    icon: BuildingOfficeIcon,
  },
  {
    area: 'Port Everglades',
    dailyRate: '$700',
    monthlyRate: '$14,000',
    impressions: '40,000+',
    bestFor: 'Cruise passengers, port traffic',
    peakHours: '8am-5pm',
    icon: MapPinIcon,
  },
];

const seasonalPricing = [
  {
    season: 'Peak Season (Dec-Apr)',
    adjustment: '+20-30%',
    events: 'Winter tourists, Spring Break, Boat Show',
    occupancy: '95%+',
  },
  {
    season: 'Summer (May-Aug)',
    adjustment: 'Standard rates',
    events: 'Local market, conventions',
    occupancy: '70-80%',
  },
  {
    season: 'Fall (Sep-Nov)',
    adjustment: '-10-15%',
    events: 'Fort Lauderdale Film Festival',
    occupancy: '60-70%',
  },
  {
    season: 'Special Events',
    adjustment: '+25-50%',
    events: 'Boat Show, Air Show, Pride Festival',
    occupancy: '100%',
  },
];

const routePackages = [
  {
    name: 'Beach Tourist Package',
    price: '$850/day',
    coverage: 'A1A from Sunrise Blvd to Las Olas',
    highlights: ['Beach hotels', 'Restaurants', 'Shopping areas', 'Entertainment venues'],
  },
  {
    name: 'Business District Package',
    price: '$750/day',
    coverage: 'Downtown, Cypress Creek, Federal Highway',
    highlights: ['Office buildings', 'Courthouse', 'Financial district', 'Professional services'],
  },
  {
    name: 'Entertainment Package',
    price: '$800/day',
    coverage: 'Las Olas, Himmarshee, Beach Place',
    highlights: ['Nightlife venues', 'Restaurants', 'Art galleries', 'Shopping districts'],
  },
  {
    name: 'Comprehensive Coverage',
    price: '$1,400/day',
    coverage: 'All major areas with 2 trucks',
    highlights: ['Maximum reach', 'Diverse demographics', 'Day & night coverage', 'Fleet discount'],
  },
];

export default function FortLauderdaleBillboardCostPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a billboard cost in Fort Lauderdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobile billboard advertising in Fort Lauderdale costs $750-850 per day for a single truck. Las Olas and Beach areas command premium rates of $800-850/day, while Downtown and Port areas are $700-750/day.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost to advertise on Las Olas Boulevard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advertising on Las Olas Boulevard with mobile billboards costs approximately $800 per day, reaching 50,000+ affluent shoppers and diners. Monthly campaigns receive 20% discounts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Fort Lauderdale billboard rates higher during Spring Break?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, billboard rates increase 25-40% during Spring Break (March). Beach area rates can reach $1,200/day during peak weeks. Book early for better rates.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Fort Lauderdale Billboard Advertising Costs
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
                2025 pricing guide for mobile billboard advertising in Fort Lauderdale. 
                From Las Olas to the Beach, starting at $750/day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">$750</p>
                <p className="text-teal-100 mt-1">Starting Daily Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">45K+</p>
                <p className="text-teal-100 mt-1">Daily Impressions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">$16</p>
                <p className="text-teal-100 mt-1">Average CPM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">20%</p>
                <p className="text-teal-100 mt-1">Monthly Discount</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Cost Summary */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                💰 Fort Lauderdale Billboard Cost Summary
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  <strong>Mobile billboards in Fort Lauderdale cost $750-850 per day</strong>, significantly 
                  less than static billboards at $2,000-4,000/day. Our LED trucks reach 45,000-55,000 
                  people daily with flexible routing and no long-term contracts.
                </p>
                <ul className="mt-4">
                  <li><strong>Beach Area:</strong> $850/day - Maximum tourist exposure</li>
                  <li><strong>Las Olas:</strong> $800/day - Upscale shopping district</li>
                  <li><strong>Downtown:</strong> $750/day - Business professionals</li>
                  <li><strong>Port Everglades:</strong> $700/day - Cruise traffic</li>
                </ul>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="#calculator"
                  className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors text-center"
                >
                  Calculate Your Cost
                </a>
                <a
                  href="tel:5617200521"
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Call for Quote: (561) 720-0521
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Area Pricing Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fort Lauderdale Area-Specific Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the best locations for your target audience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {fortLauderdaleAreaPricing.map((area) => {
                const Icon = area.icon;
                return (
                  <div key={area.area} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{area.area}</h3>
                        <p className="text-sm text-gray-600 mt-1">{area.bestFor}</p>
                      </div>
                      <Icon className="w-8 h-8 text-teal-600" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Daily Rate</p>
                        <p className="text-xl font-bold text-gray-900">{area.dailyRate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Monthly Rate</p>
                        <p className="text-xl font-bold text-gray-900">{area.monthlyRate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600">Daily Reach</p>
                        <p className="font-bold text-teal-600">{area.impressions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Peak Hours</p>
                        <p className="font-semibold text-gray-700">{area.peakHours}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Route Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fort Lauderdale Route Packages
              </h2>
              <p className="text-xl text-gray-600">
                Pre-designed routes for maximum impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {routePackages.map((pkg) => (
                <div key={pkg.name} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-teal-600 mb-3">{pkg.price}</p>
                  <p className="text-sm text-gray-600 mb-4">{pkg.coverage}</p>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Calculator */}
        <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Fort Lauderdale Campaign Cost
              </h2>
              <p className="text-xl text-gray-600">
                Get instant pricing based on your specific needs
              </p>
            </div>
            <BillboardCostCalculator />
          </div>
        </section>

        {/* Seasonal Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Seasonal Pricing Variations
              </h2>
              <p className="text-xl text-gray-600">
                Fort Lauderdale rates fluctuate based on tourism and events
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-teal-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Season/Event</th>
                      <th className="px-6 py-4 text-left">Rate Adjustment</th>
                      <th className="px-6 py-4 text-left">Key Events</th>
                      <th className="px-6 py-4 text-left">Availability</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 bg-yellow-50 border-t border-yellow-200">
                <p className="text-sm text-gray-700">
                  <strong>💡 Pro Tip:</strong> Book your campaign 30-60 days in advance during peak season 
                  for better rates and guaranteed availability. Spring Break and Boat Show dates fill up quickly!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with Other Cities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fort Lauderdale vs Other Florida Cities
              </h2>
              <p className="text-xl text-gray-600">
                How Fort Lauderdale billboard costs compare
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-3">Fort Lauderdale</h3>
                  <p className="text-3xl font-bold text-teal-600 mb-2">$750/day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>45,000 impressions</li>
                    <li>Beach & business mix</li>
                    <li>Year-round tourism</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-3">Miami</h3>
                  <p className="text-3xl font-bold text-gray-600 mb-2">$800-900/day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>50,000+ impressions</li>
                    <li>Higher competition</li>
                    <li>Premium rates</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-3">West Palm Beach</h3>
                  <p className="text-3xl font-bold text-gray-600 mb-2">$700/day</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>40,000 impressions</li>
                    <li>Affluent market</li>
                    <li>Less traffic density</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-teal-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <strong>Fort Lauderdale offers the best value</strong> with lower rates than Miami 
                  but higher traffic than West Palm Beach
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Fort Lauderdale Billboard Cost FAQs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much does billboard advertising cost in Fort Lauderdale Beach?
                </h3>
                <p className="text-gray-700">
                  Mobile billboard advertising along Fort Lauderdale Beach (A1A) costs $850 per day, 
                  reaching 55,000+ beach-goers, tourists, and locals. This includes coverage from 
                  Sunrise Boulevard to Las Olas Boulevard along the beach strip.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the cost difference between mobile and static billboards in Fort Lauderdale?
                </h3>
                <p className="text-gray-700">
                  Mobile billboards cost $750-850/day with no minimum commitment, while static billboards 
                  range from $2,000-4,000/day with 30-day minimums. Mobile billboards offer 60% savings 
                  and greater flexibility to target multiple areas.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  When is the best time to advertise in Fort Lauderdale?
                </h3>
                <p className="text-gray-700">
                  Peak season (December-April) offers maximum exposure with 95% tourist occupancy but 
                  costs 20-30% more. For value, consider May-November with standard rates and still 
                  strong local engagement. Book 2 months ahead for events like the Boat Show.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I advertise at Port Everglades cruise terminal?
                </h3>
                <p className="text-gray-700">
                  Yes, Port Everglades routes cost $700/day and reach 40,000+ cruise passengers and 
                  port visitors. Best days are cruise departure/arrival days (typically weekends). 
                  This is ideal for tourism, transportation, and hospitality businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Fort Lauderdale Billboard Campaign
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join 500+ businesses advertising on Fort Lauderdale streets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5617200521"
                className="bg-white text-teal-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                📞 (561) 720-0521
              </a>
              <Link
                href="/contact"
                className="bg-teal-800 text-white font-bold py-4 px-8 rounded-lg hover:bg-teal-900 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
            <p className="text-teal-100 mt-6">
              No setup fees • Same-day launch available • Free design services
            </p>
          </div>
        </section>
      </div>
    </>
  );
}