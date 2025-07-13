import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import roofingInstallation from "@/assets/roofing-installation.jpg";

const RoofingInstallation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative">
      {/* Header */}
      <div className="bg-roofing-navy text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
          DSI ROOFING SOLUTIONS
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Background Image */}
        <div 
          className="h-96 md:h-[500px] bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${roofingInstallation})`
          }}
        >
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
              <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-wider">
                ROOFING INSTALLATION
              </h3>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  variant="roofing-primary"
                  onClick={() => scrollToSection('gallery')}
                  className="px-8 py-3 text-lg font-semibold"
                >
                  GALLERY
                </Button>
                <Button 
                  variant="orange"
                  onClick={() => scrollToSection('products')}
                  className="px-8 py-3 text-lg font-semibold"
                >
                  BUY PRODUCT
                </Button>
                <Button 
                  variant="orange"
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-3 text-lg font-semibold"
                >
                  OUR SERVICES
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingInstallation;