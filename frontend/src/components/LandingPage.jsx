import React from 'react';
import { MapPin, Heart, Search, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import homeImg from '../assets/home.png';

export const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white pt-16">
     <div className="px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-[#bfe9e6] py-8 relative overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#153e3b]">
                Find the best neighborhood
                <span className="text-[#166d69]"> For Yourself </span>
              </h1>
              
              {/* Feature*/}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#153e3b] rounded-full w-8 h-8 flex items-center justify-center">
                    <Search className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#153e3b]">Discover</h3>
                    <p className="text-sm text-gray-600">1,000+ neighborhoods/areas/locations</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-[#153e3b] rounded-full w-8 h-8 flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#153e3b]">Evaluate</h3>
                    <p className="text-sm text-gray-600">100+ detailed area reports</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-[#153e3b] rounded-full w-8 h-8 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#153e3b]">Manage</h3>
                    <p className="text-sm text-gray-600">Get free local insights and support</p>
                  </div>
                </div>
              </div>
              
        <button
          onClick={onGetStarted}
      className="bg-[#153e3b] hover:bg-[#166d69] text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-200 mb-4"
              >
                Let's Explore
              </button>
              
        
            </div>
            
            {/* Right Image */}
            <div className="hidden lg:block relative">
              {/* <div className="rounded-lg overflow-hidden h-96 shadow-lg">
                <img */}
              <div  class=" flex flex-col mt-10 xl:mt-0 pl-10 ">
                <img
                  src={homeImg}
                  alt="Modern Neighborhood View"
                  
                  class="w-full max-w-[250px] max-h-[260px] 
                sm:max-w-[300px] sm:max-h-[310px] 
                md:max-w-[415px] md:max-h-[380px]  
                lg:max-w-[480px] lg:max-h-[420px]
                xl:max-w-[540px] xl:max-h-[474px]
                rounded-[20px] mt-auto ml-auto object-contain"
                  
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Features*/}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#153e3b] mb-4">Why Choose NeighborFit?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our advanced algorithm and comprehensive data analysis ensure you find the perfect neighborhood match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
            <div className="text-center p-8 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500  shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#bfe9e6] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-[#153e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#153e3b] mb-3">Smart Matching</h3>
              <p className="text-gray-900">
                Our algorithm considers your budget, safety preferences, walkability needs, and lifestyle factors to find your perfect match.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-rose-200 to-amber-100  rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#f7ccc1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#153e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#153e3b] mb-3">Local Insights</h3>
              <p className="text-gray-900">
                Get detailed information about safety scores, walkability, family-friendliness, and more for each neighborhood.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-r from-blue-400 to-indigo-500
 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#bfe9e6] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#153e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#153e3b] mb-3">Perfect Fit</h3>
              <p className="text-gray-900">
                Find neighborhoods that align with your values, lifestyle, and long-term goals for a truly personalized experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats*/}
      <div className="bg-[#153e3b] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-[#bfe9e6] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#153e3b]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">10K+</h3>
              <p className="text-[#bfe9e6]">Happy Users</p>
            </div>
            <div>
              <div className="bg-[#f7ccc1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#153e3b]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-[#bfe9e6]">Neighborhoods</p>
            </div>
            <div>
              <div className="bg-[#bfe9e6] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#153e3b]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
              <p className="text-[#bfe9e6]">Accuracy Rate</p>
            </div>
            <div>
              <div className="bg-[#f7ccc1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#153e3b]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-[#bfe9e6]">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#153e3b] mb-4">Ready to Find Your Perfect Neighborhood?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of users who have found their ideal neighborhood with NeighborFit.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-[#153e3b] hover:bg-[#166d69] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto"
          >
            Start Your Search
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
