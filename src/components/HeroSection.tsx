import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroHouse from "@/assets/hero-house.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroHouse})`
        }}
      />
      
      {/* Navigation Arrows */}
      <Button 
        variant="roofing-nav"
        size="lg"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 p-0"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button 
        variant="roofing-nav"
        size="lg"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 p-0"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
            DSI ROOFING SOLUTIONS
          </h1>
          <div className="w-32 h-1 bg-roofing-orange mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;