import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import roofingInstallation from "@/assets/roofing-installation.jpg";
import milanoRoofing from "@/assets/milano-roofing.jpg";
import heroHouse from "@/assets/hero-house.jpg";
import Autoplay from "embla-carousel-autoplay";

const ShingleSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactNow = () => {
    window.open('https://wa.me/2349030653059', '_blank');
  };

  const images = [roofingInstallation, milanoRoofing, heroHouse];

  return (
    <section>
      {/* Header */}
      <div className="bg-roofing-navy text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
          SHINGLE ROOFING SHEETS
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2">
        {/* Left Side - Image Carousel */}
        <div className="relative">
          <Carousel 
            className="w-full h-80 md:h-[400px]"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 rounded-none">
                    <CardContent className="flex items-center justify-center p-0">
                      <div 
                        className="w-full h-80 md:h-[400px] bg-cover bg-center bg-no-repeat relative"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${image})`
                        }}
                      >
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-wider">
                              SHINGLE ROOFING SHEET
                            </h3>
                            
                            <div className="flex flex-col md:flex-row gap-4 justify-center mt-2">
                              <Button 
                                variant="roofing-primary"
                                onClick={() => scrollToSection('gallery')}
                                className="px-6 py-3 font-semibold hover:scale-105 transition-transform duration-200"
                              >
                                GALLERY
                              </Button>
                              <Button 
                                variant="orange"
                                onClick={() => scrollToSection('products')}
                                className="px-6 py-3 font-semibold hover:scale-105 transition-transform duration-200"
                              >
                                BUY PRODUCT
                              </Button>
                              <Button 
                                variant="orange"
                                onClick={() => scrollToSection('services')}
                                className="px-6 py-3 font-semibold hover:scale-105 transition-transform duration-200"
                              >
                                OUR SERVICES
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Right Side - Info */}
        <div className="bg-roofing-blue text-white p-8 md:p-12 flex items-center">
          <div className="max-w-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-wider">
              SHINGLE ROOFING SHEETS
            </h3>
            
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              DSI Roofing Solution: We sell and install high quality shingle roofing sheets at a lowest prices in the market now giving to the reliable distributors, engineers, marketers, retailers, installers and others.
            </p>

            <Button 
              onClick={handleContactNow}
              variant="roofing-nav"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 border-white hover:bg-white hover:text-roofing-blue transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShingleSection;