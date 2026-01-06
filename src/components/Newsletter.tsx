import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome aboard! 🎉",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Get Travel Inspiration
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive travel tips, hidden gems, and special offers on cultural tours across India.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 outline-none focus:border-primary transition-colors"
              required
            />
            <Button type="submit" variant="hero" size="lg" className="group">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          {/* Trust Badge */}
          <p className="text-sm text-secondary-foreground/60 mt-4">
            Join 50,000+ travelers. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
