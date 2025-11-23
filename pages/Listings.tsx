import React from 'react';
import { PropertyType } from '../types';
import { MOCK_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import ContactForm from '../components/ContactForm';

interface ListingsPageProps {
  type?: PropertyType;
  title: string;
}

const Listings: React.FC<ListingsPageProps> = ({ type, title }) => {
  const properties = type 
    ? MOCK_PROPERTIES.filter(p => p.type === type)
    : MOCK_PROPERTIES;

  return (
    <div className="pt-24 pb-16 container mx-auto px-4 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 border-l-4 border-mokrap-accent pl-4">
          {title}
        </h1>
        <p className="text-mokrap-muted">
          Browse our exclusive collection of {title.toLowerCase()}.
        </p>
      </div>

      {properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-mokrap-card/30 rounded-2xl mb-20 border border-white/5">
          <p className="text-2xl text-mokrap-muted">No properties found in this category at the moment.</p>
          <p className="text-mokrap-text mt-2">Check back later or contact us for specific needs.</p>
        </div>
      )}

      {/* Integrated Contact Section for Lead Gen */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Can't find what you're looking for?</h2>
          <p className="text-mokrap-muted">Fill out the form below and we'll search our offline database for you.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Listings;