import { Metadata } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CTASection } from '../components/CTASection'
import { FloatingContact } from '../components/FloatingContact'
import { CheckCircle, TrendingUp, DollarSign, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Billboard Cost & Price | Digital Billboards Price | Cheap Ads',
  description: 'Discover billboard cost, billboard price, and cost for billboard advertising. Get digital billboards price and billboard advertising costs for cheap ads and vehicle advertising in South Florida.',
  keywords: [
    'billboard cost',
    'billboard price', 
    'cost for billboard',
    'billboard advertising costs',
    'digital billboards price',
    'cheap ads',
    'billboard cost per month',
    'average billboard cost',
    'bus advertising cost',
    'bench advertising',
    'direct mail marketing cost',
    'mobile billboard cost',
    'vehicle advertising pricing',
    'car billboard advertising cost',
    'out-of-home advertising prices'
  ]
}

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section section-padding bg-gradient-to-br from-maximax-pink to-maximax-cyan text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="badge-white mb-4">Transparent Pricing</span>
              <h1 className="text-white mb-6">
                Billboard Cost, Price & Advertising Costs
              </h1>
              <p className="text-xl text-white/90">
                Understanding billboard cost, billboard price, and cost for billboard campaigns. 
                Get competitive digital billboards price and discover why we offer the best cheap ads 
                for vehicle advertising and mobile outdoor advertising in South Florida.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-primary mb-4">Cost Comparison</span>
              <h2 className="mb-6">
                Billboard Advertising Costs vs <span className="gradient-text">Cheap Ads</span> with Mobile
              </h2>
              <p className="text-lg text-gray-600">
                Compare billboard cost per month across different advertising mediums. Our vehicle advertising 
                provides the best value with cheap ads that deliver results.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-bold">Advertising Type</th>
                    <th className="p-4 text-center font-bold">Average Billboard Cost</th>
                    <th className="p-4 text-center font-bold">Daily Impressions</th>
                    <th className="p-4 text-center font-bold">Cost Per 1000 Views</th>
                    <th className="p-4 text-center font-bold">Flexibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Static Billboard</td>
                    <td className="p-4 text-center">$3,000-$25,000/month</td>
                    <td className="p-4 text-center">30,000-50,000</td>
                    <td className="p-4 text-center">$2.00-$16.67</td>
                    <td className="p-4 text-center text-red-500">Fixed Location</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Digital Billboard</td>
                    <td className="p-4 text-center">$1,200-$15,000/month</td>
                    <td className="p-4 text-center">40,000-60,000</td>
                    <td className="p-4 text-center">$1.00-$8.33</td>
                    <td className="p-4 text-center text-yellow-500">Shared Time</td>
                  </tr>
                  <tr className="border-b bg-green-50">
                    <td className="p-4 font-semibold text-green-700">Mobile Billboard (Our Service)</td>
                    <td className="p-4 text-center text-green-700 font-bold">$500-$2,000/day</td>
                    <td className="p-4 text-center text-green-700 font-bold">50,000-75,000</td>
                    <td className="p-4 text-center text-green-700 font-bold">$0.33-$1.33</td>
                    <td className="p-4 text-center text-green-700 font-bold">100% Flexible</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Bus Advertising</td>
                    <td className="p-4 text-center">$250-$3,000/month</td>
                    <td className="p-4 text-center">15,000-25,000</td>
                    <td className="p-4 text-center">$0.56-$4.00</td>
                    <td className="p-4 text-center text-yellow-500">Route Dependent</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Bench Advertising</td>
                    <td className="p-4 text-center">$300-$800/month</td>
                    <td className="p-4 text-center">5,000-10,000</td>
                    <td className="p-4 text-center">$2.00-$2.67</td>
                    <td className="p-4 text-center text-red-500">Fixed Location</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Direct Mail Marketing</td>
                    <td className="p-4 text-center">$0.30-$1.00/piece</td>
                    <td className="p-4 text-center">1 per household</td>
                    <td className="p-4 text-center">$300-$1,000</td>
                    <td className="p-4 text-center text-red-500">One-time View</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-2">Why Mobile Billboards Offer the Best Value</h3>
                  <p className="text-gray-700">
                    With the lowest cost per impression and maximum flexibility, our vehicle advertising provides 
                    cheap ads that outperform traditional billboard advertising costs. No long-term contracts, 
                    no sharing display time, and complete control over your campaign routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Billboards Price Section */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">Digital Pricing</span>
              <h2 className="mb-6">
                Digital Billboards Price & <span className="gradient-text-cyan">LED Display Costs</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our digital billboards price includes everything - no hidden billboard expenses or surprise costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-maximax-pink mb-2">$800</div>
                  <div className="text-gray-600">Per Day</div>
                  <h3 className="text-xl font-bold mt-4">Standard Digital</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">8 hours of display time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Single-sided LED display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">GPS tracking included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">50,000+ impressions</span>
                  </li>
                </ul>
                <a href="/contact" className="btn-primary w-full text-center">
                  Get Started
                </a>
              </div>

              <div className="bg-gradient-to-br from-maximax-pink to-maximax-cyan p-8 rounded-xl shadow-xl text-white relative">
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-bold">
                  BEST VALUE
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">$1,500</div>
                  <div className="text-white/90">Per Day</div>
                  <h3 className="text-xl font-bold mt-4">Premium Digital</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">10 hours of display time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Double-sided 4K displays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time GPS dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">75,000+ impressions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Free creative updates</span>
                  </li>
                </ul>
                <a href="/contact" className="bg-white text-maximax-pink py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full text-center block">
                  Most Popular
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-maximax-cyan mb-2">Custom</div>
                  <div className="text-gray-600">Quote</div>
                  <h3 className="text-xl font-bold mt-4">Fleet Package</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multiple trucks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">City-wide coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">100,000+ impressions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Volume discounts</span>
                  </li>
                </ul>
                <a href="/contact" className="btn-secondary w-full text-center">
                  Get Custom Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-primary mb-4">Cost Factors</span>
              <h2 className="mb-6">
                What Affects <span className="gradient-text">Billboard Price</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-maximax-pink" />
                </div>
                <h3 className="font-bold mb-2">Campaign Duration</h3>
                <p className="text-sm text-gray-600">
                  Longer campaigns reduce daily billboard cost. Save up to 30% with monthly packages.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h3 className="font-bold mb-2">Coverage Area</h3>
                <p className="text-sm text-gray-600">
                  Target specific neighborhoods or entire counties. Billboard advertising costs vary by area.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-maximax-pink" />
                </div>
                <h3 className="font-bold mb-2">Display Type</h3>
                <p className="text-sm text-gray-600">
                  Digital billboards price varies from static to 4K video. Choose based on your budget.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-maximax-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-maximax-cyan" />
                </div>
                <h3 className="font-bold mb-2">Added Services</h3>
                <p className="text-sm text-gray-600">
                  Creative design, campaign management, and analytics may affect total cost for billboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="badge-accent mb-4">Frequently Asked</span>
              <h2 className="mb-6">
                Billboard Cost & Price <span className="gradient-text-cyan">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold mb-3">What is the average billboard cost per month?</h3>
                <p className="text-gray-600">
                  The average billboard cost ranges from $750-$14,000 per month for traditional billboards. 
                  However, our mobile billboard advertising costs just $500-$2,000 per day with no monthly 
                  contracts required, making us the provider of cheap ads with better ROI.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold mb-3">How do digital billboards price compare to static?</h3>
                <p className="text-gray-600">
                  Digital billboards price is typically 20-30% higher than static, but offers better engagement. 
                  Our mobile LED displays combine the benefits of digital with the flexibility of mobile, 
                  providing the best value in billboard advertising costs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold mb-3">Are there hidden billboard expenses?</h3>
                <p className="text-gray-600">
                  No hidden costs with our service. Unlike traditional billboard price structures that add 
                  production, installation, and maintenance fees, our cost for billboard advertising includes 
                  everything: design, display, GPS tracking, and reporting.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold mb-3">How does bus advertising cost compare?</h3>
                <p className="text-gray-600">
                  Bus advertising cost ranges from $250-$3,000 monthly but you share space with other advertisers. 
                  Our dedicated mobile billboards give you 100% of the display time and better targeting for 
                  similar billboard advertising costs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold mb-3">What about bench advertising prices?</h3>
                <p className="text-gray-600">
                  Bench advertising costs $300-$800 monthly for a fixed location with limited visibility. 
                  Our mobile billboards reach 10x more people daily for a similar billboard price, making 
                  them the superior choice for cheap ads with maximum impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold mb-3">How does direct mail marketing cost compare?</h3>
                <p className="text-gray-600">
                  Direct mail marketing cost is $0.30-$1.00 per piece for one-time exposure. Our mobile 
                  billboards provide repeated exposure to the same audience for a lower cost per impression, 
                  making them ideal for businesses seeking cheap ads with lasting impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}