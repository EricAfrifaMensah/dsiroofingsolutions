import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoofingInstallation from "@/components/RoofingInstallation";
import MilanoSection from "@/components/MilanoSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <RoofingInstallation />
      <MilanoSection />
      <ProductsSection />
      <ServicesSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
