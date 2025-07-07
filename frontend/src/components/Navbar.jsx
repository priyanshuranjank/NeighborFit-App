import React, { useState } from 'react';
import { MapPin, Menu, X, User } from 'lucide-react';

export const Navbar = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'landing' },
    { name: 'Explore', page: 'explore' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact Us', page: 'contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-[#153e3b] mr-3" />
            <h1 className="text-2xl font-bold text-[#153e3b]">NeighborFit</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-[#153e3b] border-b-2 border-[#153e3b]'
                    : 'text-[#153e3b] hover:text-[#a4a4a4]'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className="bg-[#153e3b] text-[#ffffff] hover:bg-[#166d69] font-normal py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Login/Signup
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#153e3b] hover:text-[#a4a4a4] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#bfe9e6]/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-[#153e3b] bg-[#bfe9e6]/10'
                      : 'text-[#153e3b] hover:text-[#a4a4a4] hover:bg-[#bfe9e6]/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full bg-[#153e3b] text-[#ffffff] hover:bg-[#166d69] font-normal py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center mt-4">
                <User className="h-4 w-4 mr-2" />
                Login/Signup
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 
