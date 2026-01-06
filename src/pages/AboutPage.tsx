import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Users, Calendar, Globe } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: MapPin, value: '40+', label: 'Heritage Sites' },
    { icon: Users, value: '2M+', label: 'Happy Travelers' },
    { icon: Calendar, value: '10+', label: 'Years Experience' },
    { icon: Globe, value: '28', label: 'States Covered' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            About India
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Discover the Land of
            <span className="block text-primary mt-2">Diversity & Heritage</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            India, a land of incredible diversity, offers an unparalleled tapestry of cultures, traditions, 
            and historical marvels. From the snow-capped Himalayas to the tropical beaches of Kerala, 
            every corner tells a story of ancient civilizations and timeless traditions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground">{stat.value}</div>
                <div className="text-secondary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                🛕 Temple Architecture
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Indian temples represent some of the most magnificent architectural achievements in human history. 
                From the Dravidian gopurams of South India to the Nagara spires of the North, each style reflects 
                the region's unique cultural identity. The intricate stone carvings at Khajuraho, the colorful 
                sculptures of Meenakshi Temple, and the ancient sun chariot of Konark exemplify India's devotion 
                to spiritual and artistic excellence.
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                🏰 Forts & Palaces
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Rajasthan's majestic forts tell tales of valor and romance. The Amber Fort's blend of Hindu and 
                Mughal architecture, the grandeur of Mysore Palace illuminated by 97,000 bulbs, and the ethereal 
                beauty of the Taj Mahal—a monument to eternal love—showcase India's royal heritage. These structures 
                are not just buildings; they are living museums of art, culture, and history.
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                🎉 Festivals & Traditions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                India's festivals paint the nation in vibrant colors throughout the year. Holi's powder-colored 
                celebrations, Diwali's festival of lights, the spiritual Ganga Aarti at Varanasi, and the harvest 
                celebrations of Pongal and Baisakhi—each festival brings communities together in joyous celebration. 
                These traditions, passed down through millennia, continue to define India's cultural identity.
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                🏛️ UNESCO World Heritage Sites
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                India is home to 40 UNESCO World Heritage Sites, each telling a unique story of human achievement. 
                From the ancient ruins of Hampi to the caves of Ajanta and Ellora, from the Victorian Gothic 
                architecture of Mumbai to the Buddhist monuments of Sanchi—these sites preserve humanity's 
                collective heritage and offer windows into India's rich and diverse past.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
