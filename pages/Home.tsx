import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import ContactForm from '../components/ContactForm';
import { MOCK_PROPERTIES } from '../constants';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Shield, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProperties = MOCK_PROPERTIES.slice(0, 3); // Just show top 3

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-mokrap-base">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-mokrap-card/20 rounded-xl border border-white/5 hover:border-mokrap-accent/30 transition-all">
              <div className="w-12 h-12 bg-mokrap-accent/20 text-mokrap-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Listings</h3>
              <p className="text-mokrap-muted text-sm">Hand-picked properties ensuring the highest quality standards for our clients.</p>
            </div>
            <div className="p-6 bg-mokrap-card/20 rounded-xl border border-white/5 hover:border-mokrap-accent/30 transition-all">
              <div className="w-12 h-12 bg-mokrap-accent/20 text-mokrap-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Verified Documents</h3>
              <p className="text-mokrap-muted text-sm">Every property undergoes a strict legal verification process for your peace of mind.</p>
            </div>
            <div className="p-6 bg-mokrap-card/20 rounded-xl border border-white/5 hover:border-mokrap-accent/30 transition-all">
              <div className="w-12 h-12 bg-mokrap-accent/20 text-mokrap-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">High ROI</h3>
              <p className="text-mokrap-muted text-sm">Expert analysis to help you invest in properties with the best growth potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Properties</h2>
            <p className="text-mokrap-muted">Browse our latest top-tier real estate opportunities.</p>
          </div>
          <button 
            onClick={() => navigate('/residential')}
            className="hidden md:flex items-center text-mokrap-accent hover:text-white transition-colors"
          >
            View All <ArrowRight size={20} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => navigate('/residential')}
            className="px-6 py-3 bg-mokrap-card border border-white/10 rounded-lg text-white font-medium"
          >
            View All Properties
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-mokrap-dark to-mokrap-base relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-6">Start Your Journey With MOKRAP</h2>
            <p className="text-lg text-mokrap-text mb-8 leading-relaxed">
              Our team of dedicated agents is ready to help you find the property that fits your life and your budget. 
              We handle the complexity so you can focus on the future.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-mokrap-muted">
                <div className="w-2 h-2 bg-mokrap-accent rounded-full mr-3"></div>
                Personalized Consultation
              </li>
              <li className="flex items-center text-mokrap-muted">
                <div className="w-2 h-2 bg-mokrap-accent rounded-full mr-3"></div>
                Site Visits Included
              </li>
              <li className="flex items-center text-mokrap-muted">
                <div className="w-2 h-2 bg-mokrap-accent rounded-full mr-3"></div>
                End-to-End Support
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;