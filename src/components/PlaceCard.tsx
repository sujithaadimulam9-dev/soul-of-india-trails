import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Place } from '@/data/places';

interface PlaceCardProps {
  place: Place;
  featured?: boolean;
}

const PlaceCard = ({ place, featured = false }: PlaceCardProps) => {
  const categoryColors: Record<string, string> = {
    temple: 'bg-primary/10 text-primary',
    fort: 'bg-terracotta/10 text-terracotta',
    heritage: 'bg-deep-green/10 text-deep-green',
    festival: 'bg-gold/10 text-gold',
    city: 'bg-maroon/10 text-maroon',
  };

  return (
    <Link
      to={`/place/${place.id}`}
      className={`group card-cultural overflow-hidden ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={place.image}
          alt={`${place.name} - ${place.state}, India`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[place.category] || 'bg-muted text-foreground'}`}>
            {place.category.charAt(0).toUpperCase() + place.category.slice(1)}
          </span>
        </div>

        {/* Favorite Button */}
        <button 
          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
          onClick={(e) => {
            e.preventDefault();
            // Handle favorite
          }}
        >
          <Heart className="h-4 w-4" />
        </button>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{place.state}</span>
        </div>

        {/* Title */}
        <h3 className={`font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
          {place.name}
        </h3>

        {/* Description */}
        <p className={`text-muted-foreground text-sm mb-3 ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {place.shortDescription}
        </p>

        {/* Rating & Best Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="font-medium text-foreground">{place.rating}</span>
            <span className="text-muted-foreground text-sm">({place.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Clock className="h-3.5 w-3.5" />
            <span>{place.bestTime}</span>
          </div>
        </div>

        {featured && (
          <Button variant="hero" className="w-full mt-4">
            Explore Now
          </Button>
        )}
      </div>
    </Link>
  );
};

export default PlaceCard;
