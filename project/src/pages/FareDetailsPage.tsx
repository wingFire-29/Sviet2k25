import React from 'react';
import { BackButton } from '../components/BackButton';
import { MapPin, Clock, Route, DollarSign, Info, Car } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

type FareDetails = {
  pickup: string;
  dropoff: string;
  estimatedFare: number;
  estimatedTime: number;
  distance: string;
};

export function FareDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const fareDetails = location.state as FareDetails;

  if (!fareDetails) {
    navigate('/fare');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-100 via-white to-pink-50 pt-20">
      <BackButton />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Trip Details</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          {/* Route Information */}
          <div className="mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-peach-500"></div>
                <div className="w-0.5 h-16 bg-gray-300 my-1"></div>
                <div className="w-4 h-4 rounded-full bg-pink-500"></div>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Pickup Location</p>
                  <p className="text-lg font-medium text-gray-800">{fareDetails.pickup}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dropoff Location</p>
                  <p className="text-lg font-medium text-gray-800">{fareDetails.dropoff}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="h-5 w-5 text-peach-600" />
                <h3 className="font-medium text-gray-700">Est. Time</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{fareDetails.estimatedTime} min</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Route className="h-5 w-5 text-peach-600" />
                <h3 className="font-medium text-gray-700">Distance</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{fareDetails.distance} km</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <DollarSign className="h-5 w-5 text-peach-600" />
                <h3 className="font-medium text-gray-700">Est. Fare</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">${fareDetails.estimatedFare}</p>
            </div>
          </div>

          {/* Fare Breakdown */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Fare Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Base Fare</span>
                <span className="font-medium">${Math.floor(fareDetails.estimatedFare * 0.6)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Distance Charge</span>
                <span className="font-medium">${Math.floor(fareDetails.estimatedFare * 0.3)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time Charge</span>
                <span className="font-medium">${Math.floor(fareDetails.estimatedFare * 0.1)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Total Fare</span>
                  <span className="font-bold text-peach-600">${fareDetails.estimatedFare}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Book Ride Button */}
          <button className="w-full mt-8 bg-gradient-to-r from-peach-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center space-x-2">
            <Car className="h-5 w-5" />
            <span>Book This Ride</span>
          </button>

          {/* Fare Notice */}
          <div className="mt-6 flex items-start space-x-2 text-sm text-gray-500">
            <Info className="h-5 w-5 flex-shrink-0" />
            <p>Actual fare may vary based on traffic conditions, waiting time, and route changes. Toll charges, if any, will be added to the final fare.</p>
          </div>
        </div>
      </div>
    </div>
  );
}