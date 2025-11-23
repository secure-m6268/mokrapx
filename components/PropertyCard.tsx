import React, { useState } from 'react';
import { Property } from '../types';
import { MapPin, Maximize, Video, ArrowRight, X } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <>
      <div className="bg-mokrap-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-mokrap-accent/20 transition-all duration-300 group border border-mokrap-base/50 flex flex-col h-full">
        {/* Image Section */}
        <div 
          className="relative h-64 overflow-hidden cursor-pointer"
          onClick={() => setShowGallery(true)}
        >
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-mokrap-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-mokrap-accent border border-mokrap-accent/30">
            {property.type}
          </div>
          <div className="absolute bottom-4 right-4 bg-mokrap-base/90 backdrop-blur-md px-4 py-2 rounded-lg text-mokrap-gold font-bold shadow-lg">
            {property.price}
          </div>
          {property.videoUrl && (
            <div className="absolute top-4 right-4 bg-red-600/90 p-2 rounded-full text-white shadow-lg animate-pulse">
              <Video size={16} />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{property.title}</h3>
          </div>
          
          <div className="flex items-center text-mokrap-muted text-sm mb-4">
            <MapPin size={14} className="mr-1 text-mokrap-accent" />
            {property.location}
          </div>

          <div className="flex items-center text-mokrap-text text-sm mb-4 bg-mokrap-base/50 p-2 rounded w-fit">
            <Maximize size={14} className="mr-2 text-mokrap-accent" />
            {property.area}
          </div>

          <p className="text-mokrap-muted text-sm mb-6 line-clamp-2 flex-grow">
            {property.description}
          </p>

          <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
            <div className="flex gap-2">
               {property.features.slice(0, 2).map((feat, idx) => (
                 <span key={idx} className="text-xs bg-mokrap-base px-2 py-1 rounded text-mokrap-text border border-white/5">
                   {feat}
                 </span>
               ))}
            </div>
            <button className="text-mokrap-accent hover:text-white transition-colors flex items-center text-sm font-semibold group-hover:translate-x-1 duration-300">
              Details <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setShowGallery(false)}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={property.images[currentImageIndex]} 
              alt={`Gallery ${currentImageIndex}`}
              className="w-full h-full object-contain"
            />
            
            {property.images.length > 1 && (
              <>
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-mokrap-accent/80 text-white p-3 rounded-full backdrop-blur-md transition-all"
                >
                  <ArrowRight size={24} className="rotate-180" />
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-mokrap-accent/80 text-white p-3 rounded-full backdrop-blur-md transition-all"
                >
                  <ArrowRight size={24} />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-mokrap-accent w-4' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;