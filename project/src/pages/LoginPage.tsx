import React, { useState } from 'react';
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-100 via-white to-pink-50 flex items-center justify-center p-4">
      <BackButton />
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-12 w-12 text-peach-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">TechShe</h1>
          <p className="text-gray-600">Your trusted ride companion</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome back</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent transition"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent transition"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-peach-600 focus:ring-peach-500" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-peach-600 hover:text-peach-700">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-peach-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-200"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-peach-600 hover:text-peach-700 font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}