import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import heroHouse from "@/assets/hero-house.jpg";
import milanoRoofing from "@/assets/milano-roofing.jpg";
import roofingInstallation from "@/assets/roofing-installation.jpg";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const images = [heroHouse, milanoRoofing, roofingInstallation];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Carousel 
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 rounded-none">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <div 
                    className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image})`
                    }}
                  >
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
                          DSI ROOFING SOLUTIONS
                        </h1>
                        <div className="w-32 h-1 bg-roofing-orange mx-auto mb-8"></div>
                        
                        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                          <Button 
                            variant="roofing-primary"
                            onClick={() => scrollToSection('gallery')}
                            className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
                          >
                            GALLERY
                          </Button>
                          <Button 
                            variant="orange"
                            onClick={() => scrollToSection('products')}
                            className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
                          >
                            BUY PRODUCT
                          </Button>
                          <Button 
                            variant="orange"
                            onClick={() => scrollToSection('services')}
                            className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
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
    </section>
  );
};

export default HeroSection;