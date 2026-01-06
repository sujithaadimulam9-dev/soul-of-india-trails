import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🕉️</span>
              <span className="font-serif text-xl font-bold">
                Bharat <span className="text-primary">Darshan</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Discover the soul of India through its rich cultural heritage, ancient temples, magnificent forts, and vibrant traditions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">All Destinations</Link></li>
              <li><Link to="/explore?category=temple" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Temples</Link></li>
              <li><Link to="/explore?category=fort" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Forts & Palaces</Link></li>
              <li><Link to="/explore?category=heritage" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">UNESCO Sites</Link></li>
              <li><Link to="/explore?category=festival" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Festivals</Link></li>
            </ul>
          </div>

          {/* Travel Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Book Hotels</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Travel Packages</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Local Guides</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Transportation</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Ministry of Tourism, Transport Bhawan, Parliament Street, New Delhi - 110001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>1800-111-363 (Toll Free)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@bharatdarshan.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 Bharat Darshan. Promoting Indian Culture & Heritage Tourism.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
