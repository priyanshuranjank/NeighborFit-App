import React, { useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';
import { ApiStatus } from './components/ApiStatus.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { LandingPage } from './components/LandingPage.jsx';
import { ExplorePage } from './components/ExplorePage.jsx';
import { AboutPage } from './components/AboutPage.jsx';
import { ContactPage } from './components/ContactPage.jsx';
import { PreferencesForm } from './components/PreferencesForm.jsx';
import { ResultsPage } from './components/ResultsPage.jsx';
import { useMatches } from './hooks/useApi.js';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const { data: matches, loading, error, findMatches, clearMatches } = useMatches();

  const handleGetStarted = () => {
    setCurrentPage('preferences');
  };

  const handlePreferencesSubmit = async (preferences) => {
    await findMatches(preferences);
    if (!error) {
      setCurrentPage('results');
    }
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    clearMatches();
  };

  const handleBackToPreferences = () => {
    setCurrentPage('preferences');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page !== 'landing') {
      clearMatches();
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <>
            <LandingPage onGetStarted={handleGetStarted} />
            <Footer />
          </>
        );
      case 'explore':
        return (
          <>
            <ExplorePage 
              onNavigate={handleNavigate}
              onSubmit={handlePreferencesSubmit}
              loading={loading}
              error={error}
            />
            <Footer />
          </>
        );
      case 'about':
        return (
          <>
            <AboutPage onNavigate={handleNavigate} />
            <Footer />
          </>
        );
      case 'contact':
        return (
          <>
            <ContactPage onNavigate={handleNavigate} />
            <Footer />
          </>
        );
      case 'preferences':
        return (
          <PreferencesForm
            onSubmit={handlePreferencesSubmit}
            onBack={handleBackToLanding}
            loading={loading}
            error={error}
          />
        );
      case 'results':
        return (
          <ResultsPage
            matches={matches || []}
            onBack={handleBackToPreferences}
            onStartOver={handleBackToLanding}
            loading={loading}
            error={error}
          />
        );
      default:
        return (
          <>
            <LandingPage onGetStarted={handleGetStarted} />
            <Footer />
          </>
        );
    }
  };

  return (
    <ErrorBoundary>
      <div className="App">
        {/* Navbar */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        
        {/* API Status Indicator */}
        <div className="fixed top-20 right-4 z-50">
          <ApiStatus showDetails />
        </div>
        
        {renderCurrentPage()}
      </div>
    </ErrorBoundary>
  );
}

export default App; 
