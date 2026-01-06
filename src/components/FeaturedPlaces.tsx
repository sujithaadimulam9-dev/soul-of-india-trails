import { places } from '@/data/places';
import PlaceCard from './PlaceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedPlaces = () => {
  const featuredPlaces = places.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
              Featured Destinations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Must-Visit Heritage Sites
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Explore India's most iconic cultural landmarks and immerse yourself in centuries of history
            </p>
          </div>
          <Link to="/explore">
            <Button variant="outline" className="mt-6 md:mt-0 group">
              View All Places
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPlaces.map((place, index) => (
            <PlaceCard
              key={place.id}
              place={place}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;
