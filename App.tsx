import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ContactPage from './pages/ContactPage';
import { PropertyType } from './types';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-mokrap-dark text-mokrap-text selection:bg-mokrap-accent selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/residential" 
              element={<Listings title="Residential Properties" type={PropertyType.RESIDENTIAL} />} 
            />
            <Route 
              path="/plot" 
              element={<Listings title="Land & Plots" type={PropertyType.PLOT} />} 
            />
            <Route 
              path="/other" 
              element={<Listings title="Commercial & Other" type={PropertyType.OTHER} />} 
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;