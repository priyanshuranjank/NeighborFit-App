import React from 'react';

export const Footer = () => {
  
  return (
    <footer className="bg-[#153e3b] text-white py-8 mt-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-[#bfe9e6] mb-2">
      Copyright © 2025 NeighborFit. All rights reserved.
      </p>
      <p className="text-[#bfe9e6] text-sm">
        Built by{' '}
<a href="https://www.linkedin.com/in/priyanshuranjank/" target="_blank" 
          className="text-white font-semibold underline hover:text-[#a4a4a4] transition"
        >
          Priyanshu Ranjan😊
        </a>
      </p>
    </div>
  </div>
</footer>
  );
}; 