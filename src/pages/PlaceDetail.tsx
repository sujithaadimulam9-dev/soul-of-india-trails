import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Clock, IndianRupee, Star, Heart, Share2, 
  Calendar, Users, ChevronLeft, ChevronRight, Check,
  ArrowLeft, Camera, Info
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { places } from '@/data/places';
import { useToast } from '@/hooks/use-toast';

const PlaceDetail = () => {
  const { id } = useParams();
  const place = places.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingData, setBookingData] = useState({
    date: '',
    travelers: 1,
    package: 'standard',
    name: '',
    email: '',
    phone: '',
  });
  const { toast } = useToast();

  if (!place) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Place not found</h1>
          <Link to="/explore">
            <Button variant="default">Back to Explore</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted! 🎉",
      description: `Your trip to ${place.name} has been requested. We'll contact you shortly.`,
    });
    setBookingData({
      date: '',
      travelers: 1,
      package: 'standard',
      name: '',
      email: '',
      phone: '',
    });
  };

  const packages = [
    { id: 'standard', name: 'Standard Tour', price: '₹2,999', features: ['Guided tour', 'Entry tickets', 'Lunch'] },
    { id: 'premium', name: 'Premium Experience', price: '₹5,999', features: ['Private guide', 'VIP entry', 'All meals', 'Photography'] },
    { id: 'luxury', name: 'Luxury Package', price: '₹12,999', features: ['Personal guide', 'Premium hotel', 'All meals', 'Transport', 'Spa'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="relative h-[50vh] md:h-[60vh]">
          <img
            src={place.image}
            alt={`${place.name} - ${place.state}, India`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          
          {/* Back Button */}
          <Link 
            to="/explore"
            className="absolute top-6 left-6 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>

          {/* Actions */}
          <div className="absolute top-6 right-6 flex gap-2">
            <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
              <Heart className="h-5 w-5 text-foreground" />
            </button>
            <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
              <Share2 className="h-5 w-5 text-foreground" />
            </button>
          </div>

          {/* Place Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{place.state}, India</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {place.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-primary-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-gold fill-gold" />
                  <span className="font-semibold">{place.rating}</span>
                  <span className="opacity-80">({place.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{place.timings}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="p-6 bg-card rounded-2xl border border-border">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">About {place.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{place.description}</p>
                
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">History</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{place.history}</p>
                
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Cultural Significance</h3>
                <p className="text-muted-foreground leading-relaxed">{place.significance}</p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Best Time</div>
                  <div className="font-medium text-foreground">{place.bestTime}</div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <IndianRupee className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Entry Fee</div>
                  <div className="font-medium text-foreground text-sm">{place.entryFee}</div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Timings</div>
                  <div className="font-medium text-foreground text-sm">{place.timings}</div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Camera className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Photography</div>
                  <div className="font-medium text-foreground">Allowed</div>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="p-6 bg-card rounded-2xl border border-border">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Nearby Attractions</h2>
                <div className="flex flex-wrap gap-2">
                  {place.nearbyAttractions.map((attraction) => (
                    <span 
                      key={attraction}
                      className="px-4 py-2 bg-muted rounded-full text-sm text-foreground"
                    >
                      {attraction}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="p-6 bg-card rounded-2xl border border-border">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Location</h2>
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Lat: {place.coordinates.lat}, Lng: {place.coordinates.lng}
                    </p>
                    <a 
                      href={`https://www.google.com/maps?q=${place.coordinates.lat},${place.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-4">Book Your Trip</h2>
                  
                  <form onSubmit={handleBooking} className="space-y-4">
                    {/* Package Selection */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Select Package</label>
                      <div className="space-y-2">
                        {packages.map((pkg) => (
                          <label
                            key={pkg.id}
                            className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                              bookingData.package === pkg.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="package"
                              value={pkg.id}
                              checked={bookingData.package === pkg.id}
                              onChange={(e) => setBookingData({ ...bookingData, package: e.target.value })}
                              className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              bookingData.package === pkg.id ? 'border-primary bg-primary' : 'border-border'
                            }`}>
                              {bookingData.package === pkg.id && <Check className="h-3 w-3 text-primary-foreground" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="font-medium text-foreground">{pkg.name}</span>
                                <span className="font-bold text-primary">{pkg.price}</span>
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {pkg.features.join(' • ')}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Travel Date</label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground outline-none focus:border-primary"
                        required
                      />
                    </div>

                    {/* Travelers */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Number of Travelers</label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, travelers: Math.max(1, bookingData.travelers - 1) })}
                          className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-medium text-foreground">{bookingData.travelers}</span>
                        <button
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, travelers: bookingData.travelers + 1 })}
                          className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                      <input
                        type="text"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full" size="lg">
                      Book Now
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    <Info className="h-3 w-3 inline mr-1" />
                    Free cancellation up to 24 hours before
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
