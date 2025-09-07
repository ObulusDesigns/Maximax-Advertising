'use client';

import { useState } from 'react';
import { CalculatorIcon, MapPinIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline';

interface CalculatorState {
  location: string;
  duration: number;
  durationUnit: 'days' | 'weeks' | 'months';
  hoursPerDay: number;
  trucks: number;
}

const BillboardCostCalculator = () => {
  const [calculator, setCalculator] = useState<CalculatorState>({
    location: 'miami',
    duration: 1,
    durationUnit: 'weeks',
    hoursPerDay: 8,
    trucks: 1
  });

  const [showResults, setShowResults] = useState(false);

  // Base rates per location (per truck per day)
  const locationRates: Record<string, number> = {
    miami: 800,
    'fort-lauderdale': 750,
    'west-palm-beach': 700,
    'boca-raton': 650,
    'aventura': 700,
    'coral-gables': 750,
    'miami-beach': 850,
    'downtown-miami': 900,
    'wynwood': 800,
    'brickell': 850,
    'south-beach': 900,
    'orlando': 600,
    'tampa': 550,
    'jacksonville': 500
  };

  // Hour-based pricing adjustments
  const hourlyMultipliers: Record<number, number> = {
    4: 0.6,  // 4 hours = 60% of daily rate
    6: 0.8,  // 6 hours = 80% of daily rate
    8: 1.0,  // 8 hours = full daily rate
    10: 1.15, // 10 hours = 115% of daily rate
    12: 1.25  // 12 hours = 125% of daily rate
  };

  // Duration discounts
  const durationDiscounts: Record<string, number> = {
    '1-days': 0,
    '2-days': 0,
    '3-days': 0.05,
    '1-weeks': 0.10,
    '2-weeks': 0.15,
    '3-weeks': 0.18,
    '1-months': 0.20,
    '2-months': 0.22,
    '3-months': 0.25
  };

  const calculateCost = () => {
    const baseRate = locationRates[calculator.location] || 800;
    const hourlyMultiplier = hourlyMultipliers[calculator.hoursPerDay] || 1.0;
    
    // Convert duration to days
    let totalDays = calculator.duration;
    if (calculator.durationUnit === 'weeks') totalDays *= 7;
    if (calculator.durationUnit === 'months') totalDays *= 30;
    
    // Get discount based on duration
    const discountKey = `${calculator.duration}-${calculator.durationUnit}`;
    const discount = durationDiscounts[discountKey] || 0;
    
    // Calculate base cost
    const dailyCost = baseRate * hourlyMultiplier * calculator.trucks;
    const subtotal = dailyCost * totalDays;
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;
    
    // Calculate impressions (estimated)
    const dailyImpressions = calculator.hoursPerDay * 2500; // ~2500 impressions per hour
    const totalImpressions = dailyImpressions * totalDays * calculator.trucks;
    const cpm = (total / totalImpressions) * 1000; // Cost per thousand impressions
    
    return {
      dailyCost,
      subtotal,
      discount,
      discountAmount,
      total,
      totalDays,
      totalImpressions,
      cpm
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateCost() : null;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <CalculatorIcon className="w-8 h-8 text-red-600" />
        <h2 className="text-3xl font-bold text-gray-900">Billboard Cost Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Location Selection */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <MapPinIcon className="w-4 h-4" />
            Select Location
          </label>
          <select
            value={calculator.location}
            onChange={(e) => setCalculator({ ...calculator, location: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            <optgroup label="Miami-Dade County">
              <option value="miami">Miami</option>
              <option value="miami-beach">Miami Beach</option>
              <option value="downtown-miami">Downtown Miami</option>
              <option value="brickell">Brickell</option>
              <option value="wynwood">Wynwood</option>
              <option value="south-beach">South Beach</option>
              <option value="coral-gables">Coral Gables</option>
              <option value="aventura">Aventura</option>
            </optgroup>
            <optgroup label="Broward County">
              <option value="fort-lauderdale">Fort Lauderdale</option>
            </optgroup>
            <optgroup label="Palm Beach County">
              <option value="west-palm-beach">West Palm Beach</option>
              <option value="boca-raton">Boca Raton</option>
            </optgroup>
            <optgroup label="Other Florida Cities">
              <option value="orlando">Orlando</option>
              <option value="tampa">Tampa</option>
              <option value="jacksonville">Jacksonville</option>
            </optgroup>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <CalendarIcon className="w-4 h-4" />
            Campaign Duration
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              max="12"
              value={calculator.duration}
              onChange={(e) => setCalculator({ ...calculator, duration: parseInt(e.target.value) || 1 })}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <select
              value={calculator.durationUnit}
              onChange={(e) => setCalculator({ ...calculator, durationUnit: e.target.value as 'days' | 'weeks' | 'months' })}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>

        {/* Hours per Day */}
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            Hours Per Day
          </label>
          <select
            value={calculator.hoursPerDay}
            onChange={(e) => setCalculator({ ...calculator, hoursPerDay: parseInt(e.target.value) })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            <option value={4}>4 Hours (Half Day)</option>
            <option value={6}>6 Hours</option>
            <option value={8}>8 Hours (Full Day)</option>
            <option value={10}>10 Hours (Extended)</option>
            <option value={12}>12 Hours (Premium)</option>
          </select>
        </div>

        {/* Number of Trucks */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <TruckIcon className="w-4 h-4" />
            Number of Trucks
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={calculator.trucks}
            onChange={(e) => setCalculator({ ...calculator, trucks: parseInt(e.target.value) || 1 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200"
      >
        Calculate Cost
      </button>

      {/* Results Section */}
      {showResults && results && (
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Estimated Campaign Cost</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Daily Rate:</span>
              <span className="font-semibold text-gray-900">
                ${results.dailyCost.toLocaleString()}/day
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Campaign Duration:</span>
              <span className="font-semibold text-gray-900">
                {results.totalDays} days
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold text-gray-900">
                ${results.subtotal.toLocaleString()}
              </span>
            </div>
            
            {results.discount > 0 && (
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-green-600">Volume Discount ({(results.discount * 100).toFixed(0)}%):</span>
                <span className="font-semibold text-green-600">
                  -${results.discountAmount.toLocaleString()}
                </span>
              </div>
            )}
            
            <div className="flex justify-between items-center py-4 bg-red-50 px-4 rounded-lg">
              <span className="text-xl font-bold text-gray-900">Total Campaign Cost:</span>
              <span className="text-2xl font-bold text-red-600">
                ${results.total.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Estimated Impressions</p>
              <p className="text-xl font-bold text-gray-900">
                {results.totalImpressions.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Cost Per 1000 Impressions</p>
              <p className="text-xl font-bold text-gray-900">
                ${results.cpm.toFixed(2)}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-3">
              * These are estimated costs. Final pricing may vary based on specific routes, peak times, and campaign requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:5617200521"
                className="flex-1 bg-red-600 text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
              >
                Call for Custom Quote
              </a>
              <a
                href="/contact"
                className="flex-1 bg-white text-red-600 text-center font-bold py-3 px-6 rounded-lg border-2 border-red-600 hover:bg-red-50 transition-colors"
              >
                Request Detailed Proposal
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillboardCostCalculator;