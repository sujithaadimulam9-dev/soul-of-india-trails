import { Shield, Users, MapPin, Clock, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted & Verified',
    description: 'All our travel partners and accommodations are thoroughly vetted for quality and safety.',
  },
  {
    icon: Users,
    title: 'Expert Local Guides',
    description: 'Connect with knowledgeable local guides who bring history and culture to life.',
  },
  {
    icon: MapPin,
    title: 'Curated Experiences',
    description: 'Handpicked destinations and authentic cultural experiences tailored for you.',
  },
  {
    icon: Clock,
    title: 'Flexible Booking',
    description: 'Easy cancellation and rescheduling options for peace of mind.',
  },
  {
    icon: Award,
    title: 'Best Price Guarantee',
    description: 'Competitive prices with no hidden fees. We match any lower price.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance in multiple languages throughout your journey.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Why Travel With Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Journey, Our Commitment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to making your cultural exploration of India seamless, authentic, and unforgettable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
