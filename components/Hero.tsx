import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would pass query params. 
    // Here we just scroll to listings or log it.
    console.log("Searching for:", searchTerm);
    const element = document.getElementById('listings');
    if(element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-mokrap-dark/90 via-mokrap-dark/70 to-mokrap-base"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Find Your Space in <span className="text-transparent bg-clip-text bg-gradient-to-r from-mokrap-accent to-purple-400">MOKRAP</span>
        </h1>
        <p className="text-lg md:text-xl text-mokrap-text max-w-2xl mx-auto mb-10">
          Discover premium residential homes, plots, and commercial properties curated for your lifestyle.
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-mokrap-muted group-focus-within:text-mokrap-accent transition-colors" size={24} />
          </div>
          <input
            type="text"
            className="w-full pl-14 pr-32 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mokrap-accent focus:bg-white/15 transition-all shadow-2xl"
            placeholder="Search by city, property type, or features..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 px-6 bg-mokrap-accent hover:bg-violet-500 text-white font-semibold rounded-xl transition-all shadow-lg"
          >
            Search
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-4 text-sm font-medium text-mokrap-muted">
          <span>Popular:</span>
          <button onClick={() => navigate('/residential')} className="hover:text-white transition-colors underline decoration-dotted">Villas</button>
          <button onClick={() => navigate('/plot')} className="hover:text-white transition-colors underline decoration-dotted">Corner Plots</button>
          <button onClick={() => navigate('/other')} className="hover:text-white transition-colors underline decoration-dotted">Offices</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;