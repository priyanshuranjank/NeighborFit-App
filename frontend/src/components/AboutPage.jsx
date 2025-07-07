import React from 'react';
import { MapPin, Users, Target, Award, Heart } from 'lucide-react';

export const AboutPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bfe9e6] to-white pt-16">
      {/* Hero*/}
      <div className="bg-[#153e3b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-[#bfe9e6]">NeighborFit</span>
          </h1>
          <p className="text-xl text-[#bfe9e6] max-w-3xl mx-auto">
            We're revolutionizing how people find their perfect neighborhood match through intelligent algorithms and comprehensive data analysis.
          </p>
        </div>
      </div>

      {/* Mission*/}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#153e3b] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At NeighborFit, we believe everyone deserves to find a neighborhood that feels like home. 
                Our mission is to simplify the complex process of neighborhood selection by providing 
                data-driven insights and personalized recommendations.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We combine advanced algorithms with comprehensive neighborhood data to help you make 
                informed decisions about where to live, ensuring your new home aligns with your lifestyle, 
                budget, and future goals.
              </p>
              <button
                onClick={() => onNavigate('landing')}
                className="bg-[#153e3b] hover:bg-[#bfe9e6] hover:text-[#153e3b] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Get Started Today
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-[#bfe9e6] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#153e3b]" />
                  </div>
                  <h3 className="font-semibold text-[#153e3b] mb-2">10K+ Users</h3>
                  <p className="text-sm text-gray-600">Happy customers</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#f7ccc1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-[#153e3b]" />
                  </div>
                  <h3 className="font-semibold text-[#153e3b] mb-2">500+ Areas</h3>
                  <p className="text-sm text-gray-600">Neighborhoods analyzed</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#bfe9e6] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-[#153e3b]" />
                  </div>
                  <h3 className="font-semibold text-[#153e3b] mb-2">95% Accuracy</h3>
                  <p className="text-sm text-gray-600">Match success rate</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#f7ccc1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-[#153e3b]" />
                  </div>
                  <h3 className="font-semibold text-[#153e3b] mb-2">Award Winning</h3>
                  <p className="text-sm text-gray-600">Best in class</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Team*/}
      <div className="bg-[#fafafa]  py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#153e3b] mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Meet the passionate team behind NeighborFit, dedicated to helping you find your perfect neighborhood.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-[#bfe9e6] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#153e3b]">PR</span>
              </div>
              <h3 className="text-xl font-semibold text-[#153e3b] mb-2">Priyanshu Ranjan</h3>
              <p className="text-gray-600 mb-3">Founder & CEO</p>
              <p className="text-sm text-gray-600">
                Passionate about creating technology that makes a real difference in people's lives.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-[#f7ccc1] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#153e3b]">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-[#153e3b] mb-2">Jane Smith</h3>
              <p className="text-gray-600 mb-3">Head of Product</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, enim.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-[#bfe9e6] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#153e3b]">MJ</span>
              </div>
              <h3 className="text-xl font-semibold text-[#153e3b] mb-2">Mike Johnson</h3>
              <p className="text-gray-600 mb-3">Lead Data Scientist</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, amet ex? Quasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
