import { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/taj-mahal.jpg';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Taj Mahal at sunrise - Symbol of India's rich heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient pattern-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground">
            <span className="text-lg">🇮🇳</span>
            <span className="text-sm font-medium">Incredible India Awaits</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Discover the Soul of
            <span className="block text-gold mt-2">India</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Culture, Heritage & Traditions — Journey through ancient temples, majestic forts, and sacred cities that tell stories of a glorious civilization.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-3 p-3 bg-primary-foreground/10 backdrop-blur-md rounded-2xl border border-primary-foreground/20">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-primary-foreground rounded-xl">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search destinations, temples, forts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
              <div className="hidden md:flex items-center gap-3 px-4 py-3 bg-primary-foreground/80 rounded-xl">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <select className="bg-transparent text-foreground outline-none cursor-pointer">
                  <option>All States</option>
                  <option>Rajasthan</option>
                  <option>Uttar Pradesh</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                </select>
              </div>
              <Button type="submit" variant="hero" size="lg" className="md:px-8">
                <Search className="h-4 w-4 md:hidden" />
                <span className="hidden md:inline">Explore Now</span>
              </Button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
            {[
              { label: 'Heritage Sites', value: '40+' },
              { label: 'States Covered', value: '28' },
              { label: 'Happy Travelers', value: '2M+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
