import Header from '../components/Layout/Header';
import HeroSection from '../components/Hero/HeroSection';
import FeaturesSection from '../components/Features/FeaturesSection';
import AboutSection from '../components/About/AboutSection';
import TestimonialsSection from '../components/Testimonials/TestimonalsSection';
import Footer from '../components/Layout/Footer';
// import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
// Update the import path below if the file exists elsewhere, for example:

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;