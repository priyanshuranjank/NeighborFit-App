import React, { useState } from 'react';
import { MapPin, Search, Filter, Target, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { PreferencesForm } from './PreferencesForm.jsx';

export const ExplorePage = ({ onNavigate, onSubmit, loading, error }) => {
  const [showPreferences, setShowPreferences] = useState(false);

  const handlePreferencesSubmit = async (preferences) => {
    await onSubmit(preferences);
    if (!error) {
      onNavigate('results');
    }
  };

  const handleBackToLanding = () => {
    onNavigate('landing');
  };

  if (showPreferences) {
    return (
      <PreferencesForm
        onSubmit={handlePreferencesSubmit}
        onBack={() => setShowPreferences(false)}
        loading={loading}
        error={error}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bfe9e6] to-white pt-16">
      {/* Hero*/}
      <div className="bg-[#153e3b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore <span className="text-[#bfe9e6]">Neighborhoods</span>
          </h1>
          <p className="text-xl text-[#bfe9e6] max-w-3xl mx-auto">
            Discover your perfect neighborhood using our advanced search and filtering system powered by real-time data.
          </p>
        </div>
      </div>

     
      <div className="py-16 bg-[#bfe9e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#153e3b] mb-4">What Are You Looking For?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose your search category and let us find the perfect neighborhoods for your lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#bfe9e6] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-[#153e3b]" />
              </div>
              <h3 className="text-xl font-bold text-[#153e3b] mb-3">Smart Search</h3>
              <p className="text-gray-600 mb-4">Smart matching with advanced algorithms</p>
              <div className="text-sm text-[#153e3b] font-semibold">95% Accuracy Rate</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#f7ccc1] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Filter className="h-10 w-10 text-[#153e3b]" />
              </div>
              <h3 className="text-xl font-bold text-[#153e3b] mb-3">Custom Filters</h3>
              <p className="text-gray-600 mb-4">Personalize your search with detailed preferences</p>
              <div className="text-sm text-[#153e3b] font-semibold">Filter Options</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#bfe9e6] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-[#153e3b]" />
              </div>
              <h3 className="text-xl font-bold text-[#153e3b] mb-3">Real-time Data</h3>
              <p className="text-gray-600 mb-4">Up-to-date information from reliable sources</p>
              <div className="text-sm text-[#153e3b] font-semibold">Live Updates</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#f7ccc1] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-[#153e3b]" />
              </div>
              <h3 className="text-xl font-bold text-[#153e3b] mb-3">500+ Areas</h3>
              <p className="text-gray-600 mb-4">Comprehensive coverage of neighborhoods</p>
              <div className="text-sm text-[#153e3b] font-semibold">Wide Selection</div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowPreferences(true)}
              className="bg-[#153e3b] hover:bg-[#bfe9e6] hover:text-[#153e3b] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Search
              <ArrowRight className="h-5 w-5 ml-2 inline" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#153e3b] mb-4">Your Journey to the Perfect Neighborhood</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our simple 3-step process to discover neighborhoods that match your lifestyle
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#bfe9e6] to-[#f7ccc1] transform -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              <div className="bg-gradient-to-br from-[#bfe9e6] to-white rounded-2xl p-8 text-center shadow-lg">
                <div className="bg-[#153e3b] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[#153e3b] mb-4">Share Your Story</h3>
                <p className="text-gray-700 mb-6">
                  Tell us about your lifestyle, budget, and what makes a neighborhood perfect for you. 
                  We'll use this information to create your personalized search profile.
                </p>
                <div className="bg-[#153e3b] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Takes 2 minutes
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#f7ccc1] to-white rounded-2xl p-8 text-center shadow-lg">
                <div className="bg-[#153e3b] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[#153e3b] mb-4">Magic Happens</h3>
                <p className="text-gray-700 mb-6">
                  Our advanced algorithms analyze hundreds of data points across safety, amenities, 
                  transportation, and community factors to find your perfect matches.
                </p>
                <div className="bg-[#153e3b] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Instant Results
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#bfe9e6] to-white rounded-2xl p-8 text-center shadow-lg">
                <div className="bg-[#153e3b] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-[#153e3b] mb-4">Discover & Explore</h3>
                <p className="text-gray-700 mb-6">
                  Get detailed insights about each recommended neighborhood with photos, 
                  statistics, and personalized explanations for why it matches your preferences.
                </p>
                <div className="bg-[#153e3b] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Detailed Reports
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      {/* Final Section */}
      <div className="py-20 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl font-bold text-[#153e3b] mb-6">Ready to Find Your Perfect Neighborhood?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of users who have discovered their ideal neighborhood using our advanced matching system. 
              Your perfect home is just a few clicks away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowPreferences(true)}
                className="bg-[#153e3b] hover:bg-[#bfe9e6] hover:text-[#153e3b] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Start Exploring Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-[#153e3b] text-[#153e3b] hover:bg-[#153e3b] hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
