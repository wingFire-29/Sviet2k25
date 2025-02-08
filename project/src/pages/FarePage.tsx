import React, { useState } from 'react';
import { BackButton } from '../components/BackButton';
import { MapPin, Calculator, Clock, Route, DollarSign, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FarePage() {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  const calculateFare = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to the fare details page with locations as state
    navigate('/fare/details', {
      state: {
        pickup,
        dropoff,
        estimatedFare: Math.floor(Math.random() * (50 - 10 + 1) + 10),
        estimatedTime: Math.floor(Math.random() * (45 - 15 + 1) + 15),
        distance: (Math.random() * (15 - 2) + 2).toFixed(1),
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-100 via-white to-pink-50 pt-20">
      <BackButton />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Fare Calculator</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <form onSubmit={calculateFare} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-peach-500" />
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent"
                  placeholder="Enter pickup location"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dropoff Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-pink-500" />
                <input
                  type="text"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent"
                  placeholder="Enter destination"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-peach-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center space-x-2"
            >
              <Calculator className="h-5 w-5" />
              <span>Calculate Fare</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}