import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    window.open('tel:+2349030653059', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/2349030653059', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:dsisolutions@gmail.com', '_self');
  };

  return (
    <footer className="bg-roofing-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* DSI Roofing Solutions */}
          <div>
            <h3 className="text-yellow-400 text-xl font-bold mb-6">
              DSI ROOFING SOLUTIONS
            </h3>
            <nav className="space-y-3">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className="block text-white hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#products" 
                onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}
                className="block text-white hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Buy Product
              </a>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                className="block text-white hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Our Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className="block text-white hover:text-yellow-400 transition-colors cursor-pointer"
              >
                About Us
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}
                className="block text-white hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Gallery
              </a>
              <a 
                href="#blog" 
                className="block text-white hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Blog
              </a>
              <a 
                href="#policy" 
                className="block text-white hover:text-yellow-400 transition-colors cursor-pointer"
              >
                Our Policy's
              </a>
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-yellow-400 text-xl font-bold mb-6">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Call Us / WhatsApp</h4>
                <button 
                  onClick={handleCall}
                  className="text-white hover:text-yellow-400 transition-colors flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +234 903 065 3059
                </button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <button 
                  onClick={handleEmail}
                  className="text-white hover:text-yellow-400 transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  dsisolutions@gmail.com
                </button>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Contact Form</h4>
                <a 
                  href="#contact" 
                  className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  News Update (Subscribe)
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-yellow-400 text-xl font-bold mb-6">
              HOURS
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-semibold">24/7 Pre-Order</span>
                </div>
                <p className="text-gray-300">Monday - Sunday</p>
                <p className="text-gray-300">6am - 6pm (GMT +1)</p>
              </div>
              
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">SOCIAL MEDIA</h4>
                <div className="flex space-x-4">
                  <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="text-white text-sm">💬</span>
                  </button>
                  <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="text-white text-sm">f</span>
                  </button>
                  <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="text-white text-sm">📷</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-yellow-400 text-xl font-bold mb-6">
              Location
            </h3>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300 leading-relaxed">
                  10, Agege Motor Road,<br />
                  Off Onipetesi,<br />
                  Old Abeokuta Lagos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="text-center text-gray-400">
            <p>Design & Developed by Agimens Developers || Email: AgimensDevelopers@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;