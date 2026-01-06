import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import FeaturedPlaces from '@/components/FeaturedPlaces';
import WhyChooseUs from '@/components/WhyChooseUs';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedPlaces />
        <WhyChooseUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
