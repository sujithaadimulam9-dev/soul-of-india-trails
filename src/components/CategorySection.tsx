import { Link } from 'react-router-dom';
import templesImage from '@/assets/temples-category.jpg';
import fortsImage from '@/assets/forts-category.jpg';
import festivalsImage from '@/assets/festivals-category.jpg';
import heritageImage from '@/assets/heritage-cities-category.jpg';

const categories = [
  {
    id: 'temple',
    name: 'Ancient Temples',
    description: 'Sacred shrines with intricate architecture',
    image: templesImage,
    icon: '🛕',
  },
  {
    id: 'fort',
    name: 'Forts & Palaces',
    description: 'Majestic royal residences and fortresses',
    image: fortsImage,
    icon: '🏰',
  },
  {
    id: 'festival',
    name: 'Festivals',
    description: 'Vibrant celebrations of Indian culture',
    image: festivalsImage,
    icon: '🎉',
  },
  {
    id: 'city',
    name: 'Heritage Cities',
    description: 'Living museums of ancient civilization',
    image: heritageImage,
    icon: '🌆',
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Explore by Category
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Discover India's Treasures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient temples to magnificent palaces, explore the diverse facets of Indian heritage
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/explore?category=${category.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] card-cultural"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={`${category.name} - Indian cultural heritage`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-3xl mb-2">{category.icon}</span>
                <h3 className="font-serif text-xl font-bold text-primary-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
