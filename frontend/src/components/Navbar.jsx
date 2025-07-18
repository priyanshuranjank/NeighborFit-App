import React, { useState } from 'react';
import { MapPin, Menu, X, User, LogOut } from 'lucide-react';
import { LoginModal } from './LoginModal.jsx';

export const Navbar = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null);

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

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
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
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-[#153e3b] font-medium">
                  Welcome, {user.name}!
                </span>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 text-[#ffffff] hover:bg-red-700 font-normal py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={openLoginModal}
                className="bg-[#153e3b] text-[#ffffff] hover:bg-[#166d69] font-normal py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </button>
            )}
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
              {user ? (
                <div className="mt-4 space-y-2">
                  <div className="text-center text-sm text-[#153e3b] font-medium">
                    Welcome, {user.name}!
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full bg-red-600 text-[#ffffff] hover:bg-red-700 font-normal py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  onClick={openLoginModal}
                  className="w-full bg-[#153e3b] text-[#ffffff] hover:bg-[#166d69] font-normal py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center mt-4"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Login */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </nav>
  );
}; 
