import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-roofing-blue shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 p-2 rounded">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-yellow-500 font-bold text-lg">D</span>
              </div>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">DSI ROOFING SOLUTIONS</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button 
              variant="orange" 
              onClick={() => scrollToSection('products')}
              className="px-6 py-2"
            >
              BUY PRODUCT
            </Button>
            <Button 
              variant="roofing-nav" 
              onClick={() => scrollToSection('home')}
            >
              HOME
            </Button>
            <Button 
              variant="roofing-nav" 
              onClick={() => scrollToSection('services')}
            >
              OUR SERVICES
            </Button>
          </nav>

          {/* Social Icons & Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <Phone className="w-5 h-5 text-white" />
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">@</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="roofing-nav"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-roofing-blue-dark border-t border-white/20">
            <div className="px-4 py-4 space-y-2">
              <Button 
                variant="orange" 
                onClick={() => scrollToSection('products')}
                className="w-full"
              >
                BUY PRODUCT
              </Button>
              <Button 
                variant="roofing-nav" 
                onClick={() => scrollToSection('home')}
                className="w-full"
              >
                HOME
              </Button>
              <Button 
                variant="roofing-nav" 
                onClick={() => scrollToSection('services')}
                className="w-full"
              >
                OUR SERVICES
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;