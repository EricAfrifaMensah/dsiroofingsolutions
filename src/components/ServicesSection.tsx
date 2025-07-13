import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Shield, Phone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Roofing Installation",
      description: "Professional installation of all types of roofing materials with expert craftsmanship",
      icon: Home,
      features: ["Quality Materials", "Expert Installation", "Warranty Included"]
    },
    {
      id: 2,
      title: "Roofing Maintenance",
      description: "Regular maintenance and repair services to keep your roof in perfect condition",
      icon: Wrench,
      features: ["Regular Inspections", "Preventive Care", "Emergency Repairs"]
    },
    {
      id: 3,
      title: "Roofing Consultation",
      description: "Expert consultation and design services for your roofing projects",
      icon: Shield,
      features: ["Design Planning", "Material Selection", "Cost Estimation"]
    }
  ];

  const handleGetQuote = (serviceId: number) => {
    // In a real application, this would open a contact form or redirect
    window.open('tel:+2349030653059', '_self');
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-roofing-navy mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive roofing solutions from installation to maintenance, backed by years of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-roofing-blue">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-roofing-blue rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-roofing-navy">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 flex items-center justify-center">
                        <span className="w-2 h-2 bg-roofing-orange rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => handleGetQuote(service.id)}
                    variant="roofing-primary"
                    className="w-full"
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-roofing-blue text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg mb-6 opacity-90">
            Contact our experts for personalized roofing solutions tailored to your specific needs
          </p>
          <Button 
            variant="orange"
            size="lg"
            onClick={() => window.open('tel:+2349030653059', '_self')}
          >
            <Phone className="mr-2 w-5 h-5" />
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;