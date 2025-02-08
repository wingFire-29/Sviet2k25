import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const isTransparent = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isTransparent ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-peach-600" />
          <span className="text-2xl font-bold text-gray-800">TechShe</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/rides" className="text-gray-600 hover:text-peach-600 transition-colors">My Rides</Link>
          <Link to="/fare" className="text-gray-600 hover:text-peach-600 transition-colors">Fare</Link>
          <Link to="/safety" className="text-gray-600 hover:text-peach-600 transition-colors">Safety</Link>
          <Link to="/support" className="text-gray-600 hover:text-peach-600 transition-colors">Support</Link>
          <Link to="/login" className="text-gray-600 hover:text-peach-600 transition-colors">Login</Link>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-peach-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}