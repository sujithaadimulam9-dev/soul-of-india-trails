import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, MapPin, Grid, List, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlaceCard from '@/components/PlaceCard';
import { Button } from '@/components/ui/button';
import { places, categories, states } from '@/data/places';

const ExplorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const searchQuery = searchParams.get('search') || '';
  const categoryFilter = searchParams.get('category') || '';
  const stateFilter = searchParams.get('state') || '';

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.state.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !categoryFilter || place.category === categoryFilter;
      const matchesState = !stateFilter || place.state === stateFilter;

      return matchesSearch && matchesCategory && matchesState;
    });
  }, [searchQuery, categoryFilter, stateFilter]);

  const updateFilters = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Explore Indian Heritage
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover temples, forts, palaces, and cultural landmarks across the diverse landscape of India
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mt-8 space-y-4">
            {/* Search Bar */}
            <div className="flex gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => updateFilters('search', e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="p-4 bg-card rounded-xl border border-border animate-fade-up">
                <div className="flex flex-wrap gap-4">
                  {/* Category Filter */}
                  <div className="flex-1 min-w-[200px]">
                    <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                    <select
                      value={categoryFilter}
                      onChange={(e) => updateFilters('category', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground outline-none focus:border-primary"
                    >
                      <option value="">All Categories</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.icon} {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* State Filter */}
                  <div className="flex-1 min-w-[200px]">
                    <label className="text-sm font-medium text-foreground mb-2 block">State</label>
                    <select
                      value={stateFilter}
                      onChange={(e) => updateFilters('state', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground outline-none focus:border-primary"
                    >
                      <option value="">All States</option>
                      {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  {/* Clear Filters */}
                  <div className="flex items-end">
                    <Button variant="ghost" onClick={clearFilters}>
                      Clear All
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Active Filters & View Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">
                  Showing {filteredPlaces.length} of {places.length} places
                </span>
                {(categoryFilter || stateFilter || searchQuery) && (
                  <div className="flex gap-2">
                    {categoryFilter && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {categories.find(c => c.id === categoryFilter)?.name}
                      </span>
                    )}
                    {stateFilter && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {stateFilter}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="flex gap-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredPlaces.length > 0 ? (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {filteredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">No places found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExplorePage;
