import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoofingInstallation from "@/components/RoofingInstallation";
import MilanoSection from "@/components/MilanoSection";
import BondSection from "@/components/BondSection";
import ClassicSection from "@/components/ClassicSection";
import RomaniaSection from "@/components/RomaniaSection";
import ShingleSection from "@/components/ShingleSection";
import WoodshakeSection from "@/components/WoodshakeSection";
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
      <BondSection />
      <ClassicSection />
      <RomaniaSection />
      <ShingleSection />
      <WoodshakeSection />
      <ProductsSection />
      <ServicesSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
