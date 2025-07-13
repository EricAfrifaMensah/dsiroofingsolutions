import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const AboutSection = () => {
  const handleCallNow = () => {
    window.open('tel:+2349030653059', '_self');
  };

  return (
    <section className="bg-roofing-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            DSI ROOFING SOLUTIONS
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
            DSI Roofing Solution is where best qualities and favourable prices of high quality stone coated roofing sheet is being giving to the reliable distributors, engineers, marketers, retailers, installers and others.
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
    </section>
  );
};

export default AboutSection;