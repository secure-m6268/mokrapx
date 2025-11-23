import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-mokrap-dark/95 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-tr from-mokrap-dark to-mokrap-accent p-2 rounded-lg border border-white/10 group-hover:border-mokrap-accent/50 transition-colors">
            <Home className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-wider text-white">MOKRAP</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-mokrap-accent ${
                location.pathname === link.path ? 'text-mokrap-accent' : 'text-mokrap-text'
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => navigate('/contact')}
            className="px-6 py-2.5 bg-mokrap-accent hover:bg-violet-500 text-white font-semibold rounded-full shadow-lg shadow-violet-900/30 transition-all hover:scale-105 active:scale-95"
          >
            Direct Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-mokrap-dark border-b border-white/10 shadow-2xl flex flex-col p-6 animate-in slide-in-from-top-5 duration-200">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 text-lg font-medium border-b border-white/5 ${
                 location.pathname === link.path ? 'text-mokrap-accent' : 'text-mokrap-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={() => navigate('/contact')}
            className="mt-6 w-full py-3 bg-mokrap-accent text-white font-bold rounded-lg"
          >
            Direct Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;