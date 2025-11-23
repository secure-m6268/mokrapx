import React from 'react';
import { Home, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mokrap-dark border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-mokrap-accent p-1.5 rounded">
                <Home className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-white">MOKRAP</span>
            </div>
            <p className="text-mokrap-muted text-sm leading-relaxed">
              Leading the way in premium property acquisition. Whether you need a home, a plot, or a commercial space, we find the perfect match.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Properties</h4>
            <ul className="space-y-2 text-sm text-mokrap-muted">
              <li><Link to="/residential" className="hover:text-mokrap-accent transition-colors">Residential Homes</Link></li>
              <li><Link to="/plot" className="hover:text-mokrap-accent transition-colors">Land & Plots</Link></li>
              <li><Link to="/other" className="hover:text-mokrap-accent transition-colors">Commercial & Other</Link></li>
              <li><Link to="/contact" className="hover:text-mokrap-accent transition-colors">Sell Your Property</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-mokrap-muted">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mokrap-accent shrink-0" />
                <span>1234 Estate Avenue, Suite 100<br/>Business District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mokrap-accent shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mokrap-accent shrink-0" />
                <span>info@mokrap-estate.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mokrap-accent hover:text-white transition-all text-mokrap-muted">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mokrap-accent hover:text-white transition-all text-mokrap-muted">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mokrap-accent hover:text-white transition-all text-mokrap-muted">
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-xs text-mokrap-muted">© 2024 MOKRAP Real Estate.<br/>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;