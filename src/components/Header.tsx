import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
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
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/bfb901bd-bb03-415a-b017-69acabdb1b08.png" 
              alt="DSI Roofing Solutions" 
              className="h-12 w-auto"
            />
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
              variant="orange" 
              onClick={() => scrollToSection('services')}
              className="px-6 py-2"
            >
              OUR SERVICES
            </Button>
          </nav>

          {/* Social Icons & Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="hover:scale-110 transition-transform duration-200"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </button>
            <div className="flex space-x-2">
              <button 
                onClick={() => window.open('https://facebook.com', '_blank')}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <span className="text-white text-sm">f</span>
              </button>
              <button 
                onClick={() => window.open('https://instagram.com', '_blank')}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <span className="text-white text-sm">@</span>
              </button>
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
                variant="orange" 
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