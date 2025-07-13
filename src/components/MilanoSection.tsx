import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import milanoRoofing from "@/assets/milano-roofing.jpg";

const MilanoSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallNow = () => {
    window.open('tel:+2349030653059', '_self');
  };

  return (
    <section>
      {/* Header */}
      <div className="bg-roofing-navy text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
          MILANO ROOFING SHEETS
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative">
          <div 
            className="h-96 md:h-[500px] bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${milanoRoofing})`
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
                <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-wider">
                  MILANO ROOFING SHEET
                </h3>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button 
                    variant="roofing-primary"
                    onClick={() => scrollToSection('gallery')}
                    className="px-6 py-3 font-semibold"
                  >
                    GALLERY
                  </Button>
                  <Button 
                    variant="orange"
                    onClick={() => scrollToSection('products')}
                    className="px-6 py-3 font-semibold"
                  >
                    BUY PRODUCT
                  </Button>
                  <Button 
                    variant="orange"
                    onClick={() => scrollToSection('services')}
                    className="px-6 py-3 font-semibold"
                  >
                    OUR SERVICES
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="bg-roofing-blue text-white p-8 md:p-12 flex items-center">
          <div className="max-w-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-wider">
              MILANO ROOFING SHEETS
            </h3>
            
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              DSI Roofing Solution: We sell and install high quality milano roofing sheets at a lowest prices in the market now giving to the reliable distributors, engineers, marketers, retailers, installers and others.
            </p>

            <Button 
              onClick={handleCallNow}
              variant="roofing-nav"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 border-white hover:bg-white hover:text-roofing-blue transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilanoSection;