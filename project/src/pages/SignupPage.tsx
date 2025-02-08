import React, { useState } from 'react';
import { Car } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { supabase } from '../lib/supabase';

export function SignupPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    verificationCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendVerificationCode = async () => {
    setLoading(true);
    setError('');
    
    try {
      // In a real application, you would integrate with an SMS service here
      // For demo purposes, we'll simulate sending a code
      console.log('Verification code sent to:', formData.phone);
      setStep(2);
    } catch (error) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      if (authData.user) {
        // Create the user profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              name: formData.name,
              phone: formData.phone,
              phone_verified: true, // In a real app, this would be set after proper verification
            }
          ]);

        if (profileError) throw profileError;

        navigate('/login');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
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
          <p className="text-gray-600">Create your account</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <form onSubmit={step === 1 ? sendVerificationCode : handleSubmit}>
            <div className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {step === 1 ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent transition"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent transition"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-peach-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-200 disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Verification Code'}
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      name="verificationCode"
                      value={formData.verificationCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent transition"
                      placeholder="Enter verification code"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent transition"
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-peach-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-200 disabled:opacity-50"
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </>
              )}
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-peach-600 hover:text-peach-700 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}