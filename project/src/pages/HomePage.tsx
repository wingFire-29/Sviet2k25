import React, { useEffect, useRef } from 'react';
import { Car, MapPin, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Parallax effect for hero section
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }

      // Fade in features on scroll
      if (featuresRef.current) {
        const featuresPosition = featuresRef.current.offsetTop;
        const features = featuresRef.current.children;
        
        Array.from(features).forEach((feature, index) => {
          const featureElement = feature as HTMLElement;
          if (scrollPosition > featuresPosition - window.innerHeight + 100) {
            featureElement.style.opacity = '1';
            featureElement.style.transform = 'translateY(0)';
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-100 via-white to-pink-50">
      {/* Hero Section */}
      <div ref={heroRef} className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-800 mb-6 opacity-0 transform translate-y-8 animate-fade-in-up">
                Your Safe Ride, <br />
                Just a Tap Away
              </h1>
              <p className="text-lg text-gray-600 mb-8 opacity-0 transform translate-y-8 animate-fade-in-up animation-delay-200">
                Experience comfortable and secure rides with TechShe - where safety meets convenience.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 opacity-0 transform translate-y-8 animate-fade-in-up animation-delay-400">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-peach-500" />
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-pink-500" />
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-peach-500 focus:border-transparent"
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-peach-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center space-x-2">
                    <Search className="h-5 w-5" />
                    <span>Find a Ride</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="Taxi service"
                className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div ref={featuresRef} className="bg-white/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Service",
                description: "Available round the clock for your convenience and safety."
              },
              {
                icon: MapPin,
                title: "Live Tracking",
                description: "Track your ride in real-time for added security and peace of mind."
              },
              {
                icon: Car,
                title: "Verified Drivers",
                description: "All our drivers are thoroughly vetted for your safety."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg opacity-0 transform translate-y-8 transition-all duration-500"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-peach-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-peach-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}