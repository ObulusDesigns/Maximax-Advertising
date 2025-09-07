'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { CTASection } from '@/app/components/CTASection'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  TruckIcon, 
  CurrencyDollarIcon,
  ChartBarIcon,
  UsersIcon,
  ClockIcon,
  MapPinIcon,
  ShieldCheckIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline'
import Script from 'next/script'

// SEO metadata would normally be generated server-side
// For now, we'll implement it as a static export

const comparisonData = {
  mobileBillboard: {
    pros: [
      'Large 4K LED display (200+ sq ft) visible from all angles',
      'Reaches 30,000-70,000 impressions per day',
      'Dynamic content changes in real-time',
      'GPS tracking and analytics available',
      'Professional driver and route optimization',
      'No wear and tear on personal vehicle',
      'Can target specific demographics and locations',
      'Video and animation capabilities',
      'Guaranteed campaign duration and visibility',
      'Weather-resistant and illuminated 24/7'
    ],
    cons: [
      'Higher upfront investment',
      'Requires campaign planning',
      'Limited to service areas'
    ],
    costRange: '$800-$3,500/day',
    impressionsPerDay: '30,000-70,000',
    cpm: '$11-$50',
    roi: '200-400%',
    reachRadius: '3-5 miles visibility',
    setupTime: '24-48 hours',
    minimumCommitment: '1 day'
  },
  carWrap: {
    pros: [
      'Lower initial cost',
      'Personal vehicle becomes mobile ad',
      'Long-term exposure if kept on',
      'Can go anywhere the vehicle goes'
    ],
    cons: [
      'Small display area (20-50 sq ft)',
      'Limited to static graphics only',
      'Damages vehicle paint and resale value',
      'Only 1,000-3,000 impressions per day',
      'No tracking or analytics',
      'Visible only when vehicle is in use',
      'Weather and wash damage over time',
      'Difficult and expensive to remove',
      'No control over driver behavior',
      'Limited design changes (expensive to update)'
    ],
    costRange: '$1,500-$3,500 one-time',
    impressionsPerDay: '1,000-3,000',
    cpm: '$50-$200',
    roi: '50-150%',
    reachRadius: '50-100 feet visibility',
    setupTime: '3-5 days',
    minimumCommitment: '3-6 months typical'
  }
}

const faqs = [
  {
    question: "What's the main difference between mobile billboards and car wraps?",
    answer: "Mobile billboards use dedicated trucks with large 4K LED displays (200+ sq ft) that reach 30,000-70,000 people daily, while car wraps cover personal vehicles with static graphics (20-50 sq ft) reaching only 1,000-3,000 people daily. Mobile billboards offer 10-20x more visibility and impressions."
  },
  {
    question: "Can I get paid to advertise on my car with a wrap?",
    answer: "While some companies offer $200-500/month for car wrap advertising, most legitimate programs are limited and highly selective. Many 'get paid to wrap your car' offers are scams. Mobile billboard advertising is a professional service that guarantees results for businesses without the risks and limitations of personal vehicle advertising."
  },
  {
    question: "Which method has better ROI for businesses?",
    answer: "Mobile billboards typically deliver 200-400% ROI with trackable metrics and 30,000-70,000 daily impressions. Car wraps average 50-150% ROI with only 1,000-3,000 daily impressions and no tracking capabilities. The cost per thousand impressions (CPM) for mobile billboards is $11-50 versus $50-200 for car wraps."
  },
  {
    question: "How much does vehicle wrap advertising cost compared to mobile billboards?",
    answer: "Car wraps cost $1,500-3,500 upfront plus removal costs, reaching only 1,000-3,000 people daily. Mobile billboards cost $800-3,500 per day but reach 30,000-70,000 people with dynamic content. When calculated per impression, mobile billboards are 4-10x more cost-effective."
  },
  {
    question: "Can I change my advertisement with each method?",
    answer: "Mobile billboards can change content instantly - even multiple times per day - with no additional cost. Car wraps require complete removal and reinstallation to change designs, costing $2,000-4,000 each time. This flexibility makes mobile billboards ideal for time-sensitive promotions and A/B testing."
  },
  {
    question: "What about wear and tear on vehicles?",
    answer: "Car wraps can damage your vehicle's paint, reduce resale value by 10-20%, and require expensive removal ($500-1,500). They also fade, peel, and look unprofessional over time. Mobile billboards use dedicated advertising trucks maintained by professionals, eliminating any vehicle damage concerns."
  },
  {
    question: "Which is better for targeting specific areas or demographics?",
    answer: "Mobile billboards excel at targeted advertising with GPS-tracked routes, demographic heat mapping, and the ability to be at specific locations at optimal times. Car wraps go wherever the driver happens to go, with no strategic control over audience targeting or timing."
  },
  {
    question: "How quickly can I start advertising with each option?",
    answer: "Mobile billboard campaigns can launch within 24-48 hours with professional design support included. Car wraps require 3-5 days for design, printing, and installation, plus vehicle downtime. For urgent campaigns or event marketing, mobile billboards are the clear choice."
  }
]

export default function MobileBillboardVsCarWrapComparison() {
  const [monthlyBudget, setMonthlyBudget] = useState(5000)
  const [campaignDuration, setCampaignDuration] = useState(30)
  
  // ROI Calculator logic
  const calculateROI = (budget: number, days: number) => {
    const mobileBillboardDailyCost = 1800 // Average
    const carWrapTotalCost = 2500 // Average one-time cost
    
    const mobileBillboardDays = Math.floor(budget / mobileBillboardDailyCost)
    const mobileBillboardImpressions = mobileBillboardDays * 50000 // Average 50k/day
    const mobileBillboardCPM = budget / (mobileBillboardImpressions / 1000)
    
    const carWrapMonthlyImpressions = 2000 * 30 // Average 2k/day for 30 days
    const carWrapTotalImpressions = carWrapMonthlyImpressions * (days / 30)
    const carWrapCPM = carWrapTotalCost / (carWrapTotalImpressions / 1000)
    
    return {
      mobileBillboard: {
        impressions: mobileBillboardImpressions,
        cpm: mobileBillboardCPM,
        estimatedLeads: Math.floor(mobileBillboardImpressions * 0.002), // 0.2% conversion
        costPerLead: budget / Math.floor(mobileBillboardImpressions * 0.002)
      },
      carWrap: {
        impressions: carWrapTotalImpressions,
        cpm: carWrapCPM,
        estimatedLeads: Math.floor(carWrapTotalImpressions * 0.0005), // 0.05% conversion
        costPerLead: carWrapTotalCost / Math.floor(carWrapTotalImpressions * 0.0005)
      }
    }
  }
  
  const roiData = calculateROI(monthlyBudget, campaignDuration)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mobile Billboard vs Car Wrap Advertising: Complete Comparison Guide 2024",
    "description": "Compare mobile billboard trucks vs vehicle wrap advertising. See costs, ROI, impressions, and why mobile billboards deliver 10-20x better results for businesses.",
    "url": "https://maximaxmobileadvertising.com/compare/mobile-billboard-vs-car-wrap",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    "author": {
      "@type": "Organization",
      "name": "Maximax Advertising",
      "url": "https://maximaxmobileadvertising.com"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
  }

  return (
    <>
      <Script
        id="comparison-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile Billboard vs Car Wrap Advertising
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Comprehensive 2024 Comparison: Costs, ROI, and Why Mobile Billboards 
              Deliver 10-20x More Impressions Than Vehicle Wraps
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-blue-100 text-sm">Mobile Billboard Impressions</p>
                <p className="text-2xl font-bold text-white">30,000-70,000/day</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-blue-100 text-sm">Car Wrap Impressions</p>
                <p className="text-2xl font-bold text-white">1,000-3,000/day</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-blue-100 text-sm">Better ROI</p>
                <p className="text-2xl font-bold text-green-400">Mobile Billboards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Quick Comparison: Mobile Billboards Win on Every Metric
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Comparison Factor</th>
                    <th className="px-6 py-4 text-center">Mobile Billboard Truck</th>
                    <th className="px-6 py-4 text-center">Car Wrap Advertising</th>
                    <th className="px-6 py-4 text-center">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Daily Impressions</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">30,000-70,000</td>
                    <td className="px-6 py-4 text-center text-red-600">1,000-3,000</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Mobile Billboard
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="px-6 py-4 font-medium">Display Size</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">200+ sq ft</td>
                    <td className="px-6 py-4 text-center text-red-600">20-50 sq ft</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Mobile Billboard
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Cost Per 1000 Impressions (CPM)</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">$11-$50</td>
                    <td className="px-6 py-4 text-center text-red-600">$50-$200</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Mobile Billboard
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="px-6 py-4 font-medium">Content Type</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">Video, Animation, Dynamic</td>
                    <td className="px-6 py-4 text-center text-red-600">Static Graphics Only</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Mobile Billboard
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tracking & Analytics</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">GPS + Impression Data</td>
                    <td className="px-6 py-4 text-center text-red-600">None Available</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Mobile Billboard
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="px-6 py-4 font-medium">Average ROI</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">200-400%</td>
                    <td className="px-6 py-4 text-center text-red-600">50-150%</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Mobile Billboard
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Setup Time</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">24-48 hours</td>
                    <td className="px-6 py-4 text-center text-orange-600">3-5 days</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Mobile Billboard
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="px-6 py-4 font-medium">Vehicle Damage Risk</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">None</td>
                    <td className="px-6 py-4 text-center text-red-600">Paint Damage, -20% Resale</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Mobile Billboard
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <CalculatorIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ROI Calculator: See the Difference
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Calculate your potential impressions and ROI with mobile billboards vs car wraps
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Advertising Budget
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      id="budget"
                      min="1000"
                      max="20000"
                      step="500"
                      value={monthlyBudget}
                      onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-2xl font-bold text-blue-600 min-w-[100px]">
                      ${monthlyBudget.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Duration (Days)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      id="duration"
                      min="7"
                      max="90"
                      step="1"
                      value={campaignDuration}
                      onChange={(e) => setCampaignDuration(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-2xl font-bold text-blue-600 min-w-[100px]">
                      {campaignDuration} days
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-500">
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    Mobile Billboard Results
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Impressions:</span>
                      <span className="font-bold text-lg">
                        {roiData.mobileBillboard.impressions.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost Per 1000 (CPM):</span>
                      <span className="font-bold text-lg">
                        ${roiData.mobileBillboard.cpm.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Leads:</span>
                      <span className="font-bold text-lg">
                        {roiData.mobileBillboard.estimatedLeads}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost Per Lead:</span>
                      <span className="font-bold text-lg text-green-600">
                        ${roiData.mobileBillboard.costPerLead.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-green-600 font-semibold">
                      ✓ 10-20x More Impressions
                    </p>
                    <p className="text-sm text-green-600 font-semibold">
                      ✓ Lower Cost Per Lead
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-600">
                    Car Wrap Results
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Impressions:</span>
                      <span className="font-bold text-lg">
                        {roiData.carWrap.impressions.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost Per 1000 (CPM):</span>
                      <span className="font-bold text-lg">
                        ${roiData.carWrap.cpm.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Leads:</span>
                      <span className="font-bold text-lg">
                        {roiData.carWrap.estimatedLeads}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost Per Lead:</span>
                      <span className="font-bold text-lg text-red-600">
                        ${roiData.carWrap.costPerLead.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-red-600 font-semibold">
                      ✗ Limited Impressions
                    </p>
                    <p className="text-sm text-red-600 font-semibold">
                      ✗ Higher Cost Per Lead
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-600 rounded-xl text-white text-center">
                <p className="text-2xl font-bold mb-2">
                  Mobile Billboards Deliver {Math.round(roiData.mobileBillboard.impressions / roiData.carWrap.impressions)}x More Impressions
                </p>
                <p className="text-lg">
                  And Generate Leads at {Math.round(roiData.carWrap.costPerLead / roiData.mobileBillboard.costPerLead)}x Lower Cost
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Pros and Cons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Detailed Analysis: Advantages & Disadvantages
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mobile Billboard */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                  <div className="flex items-center gap-4">
                    <TruckIcon className="h-12 w-12 text-white" />
                    <h3 className="text-2xl font-bold text-white">
                      Mobile Billboard Advertising
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-600 mb-3">
                      Advantages ({comparisonData.mobileBillboard.pros.length})
                    </h4>
                    <ul className="space-y-2">
                      {comparisonData.mobileBillboard.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-3">
                      Considerations ({comparisonData.mobileBillboard.cons.length})
                    </h4>
                    <ul className="space-y-2">
                      {comparisonData.mobileBillboard.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 border-t border-green-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Daily Reach</p>
                      <p className="text-2xl font-bold text-green-600">
                        {comparisonData.mobileBillboard.impressionsPerDay}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Average ROI</p>
                      <p className="text-2xl font-bold text-green-600">
                        {comparisonData.mobileBillboard.roi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Car Wrap */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6">
                  <div className="flex items-center gap-4">
                    <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white">
                      Car Wrap Advertising
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-600 mb-3">
                      Advantages ({comparisonData.carWrap.pros.length})
                    </h4>
                    <ul className="space-y-2">
                      {comparisonData.carWrap.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-3">
                      Disadvantages ({comparisonData.carWrap.cons.length})
                    </h4>
                    <ul className="space-y-2">
                      {comparisonData.carWrap.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Daily Reach</p>
                      <p className="text-2xl font-bold text-gray-600">
                        {comparisonData.carWrap.impressionsPerDay}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Average ROI</p>
                      <p className="text-2xl font-bold text-gray-600">
                        {comparisonData.carWrap.roi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Real-World Results: Case Study Comparison
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <ChartBarIcon className="h-10 w-10 text-blue-600" />
                  <h3 className="text-2xl font-bold">Restaurant Chain Campaign</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-blue-600">
                      Mobile Billboard Campaign
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Investment:</strong> $15,000 (10 days)</li>
                      <li>• <strong>Impressions:</strong> 500,000+</li>
                      <li>• <strong>New Customers:</strong> 847</li>
                      <li>• <strong>Revenue Generated:</strong> $42,350</li>
                      <li>• <strong>ROI:</strong> 282%</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-300">
                    <h4 className="font-semibold text-lg mb-2 text-gray-600">
                      Previous Car Wrap Attempt
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Investment:</strong> $8,500 (3 vehicles, 3 months)</li>
                      <li>• <strong>Impressions:</strong> ~180,000</li>
                      <li>• <strong>New Customers:</strong> 127</li>
                      <li>• <strong>Revenue Generated:</strong> $6,350</li>
                      <li>• <strong>ROI:</strong> -25% (Loss)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-100 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-semibold">
                      Mobile billboards generated 6.7x more customers at 1.7x the investment
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <UsersIcon className="h-10 w-10 text-purple-600" />
                  <h3 className="text-2xl font-bold">Real Estate Development</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-purple-600">
                      Mobile Billboard Campaign
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Investment:</strong> $25,000 (14 days)</li>
                      <li>• <strong>Impressions:</strong> 700,000+</li>
                      <li>• <strong>Property Inquiries:</strong> 312</li>
                      <li>• <strong>Units Sold:</strong> 18</li>
                      <li>• <strong>Revenue:</strong> $7.2M in sales</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-300">
                    <h4 className="font-semibold text-lg mb-2 text-gray-600">
                      Agent Car Wraps (10 vehicles)
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Investment:</strong> $25,000 (wraps + maintenance)</li>
                      <li>• <strong>Impressions:</strong> ~600,000 (6 months)</li>
                      <li>• <strong>Property Inquiries:</strong> 43</li>
                      <li>• <strong>Units Sold:</strong> 2</li>
                      <li>• <strong>Revenue:</strong> $800K in sales</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-100 rounded-lg p-4 mt-4">
                    <p className="text-purple-800 font-semibold">
                      Mobile billboards generated 9x more sales in 14 days vs 6 months
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready for 10-20x Better Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stop wasting money on car wrap advertising that nobody sees. 
              Mobile billboards deliver proven results with trackable ROI.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">50,000+</p>
                  <p className="text-blue-100">Daily Impressions</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">$25</p>
                  <p className="text-blue-100">Average CPM</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">300%</p>
                  <p className="text-blue-100">Average ROI</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5617200521"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (561) 720-0521
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-blue-900 hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Get Free Campaign Quote
              </a>
            </div>
            
            <p className="text-sm text-blue-200 mt-6">
              Free consultation • Route planning included • Same-week campaign launch available
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  )
}